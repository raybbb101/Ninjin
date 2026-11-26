import "./style.css";
import { loadSave, S, persist, markDirty, addChar } from "./game/state";
import { loadSheets } from "./gfx/fx";
import { Game } from "./game/game";
import { Hud } from "./ui/hud";
import { Overlay } from "./ui/overlay";
import { Menus } from "./ui/menus";
import { Net } from "./net/coop";
import { INTRO } from "./data/story";
import { ensureDaily, resolveTarget } from "./game/quests";
import { POIS, byId } from "./world/worldgen";
import { bus } from "./core/events";
import { EL_INFO } from "./data/elements";
import { h } from "./ui/dom";
import { initSfx } from "./ui/sfx";

const boot = document.getElementById("boot")!, bar = boot.querySelector(".bar i") as HTMLElement, msg = boot.querySelector(".msg")!;
const step = (k: number, t: string) => { bar.style.width = k * 100 + "%"; msg.textContent = t; return new Promise((r) => setTimeout(r, 16)); };
(window as any).EL_COL = Object.fromEntries(Object.entries(EL_INFO).map(([k, v]) => [k, v.color]));
async function start() {
  await step(0.1, "セーブデータを読み込み中…");
  const had = loadSave(); ensureDaily();
  await step(0.3, "エフェクトを読み込み中…");
  await loadSheets("./fx/");
  await step(0.6, "世界を作っています…");
  const g = new Game(document.getElementById("gl") as HTMLCanvasElement);
  const menus = new Menus(g);
  const hud = new Hud(g, (n, a) => menus.open(n, a));
  const ov = new Overlay(document.getElementById("overlay") as HTMLCanvasElement, g);
  const net = new Net(g); (window as any).NINJIN_NET = net; (window as any).NINJIN = g;
  (window as any).NINJIN_DBG = { S, POIS, byId, resolveTarget, addChar };
  initSfx();
  // warm up a few frames so chunks are built before the title fades
  for (let i = 0; i < 14; i++) g.view.update(g.player.pos.x, g.player.pos.z, 0);
  g.render(0.016);
  await step(1, "準備完了");
  boot.classList.add("ready"); msg.textContent = "タップしてはじめる";
  const go = () => {
    boot.removeEventListener("pointerdown", go); boot.classList.add("out"); setTimeout(() => boot.remove(), 600);
    try { if (matchMedia("(pointer:coarse)").matches) { document.documentElement.requestFullscreen?.().catch(() => {}); (screen.orientation as any)?.lock?.("landscape").catch(() => {}); } } catch { }
    bus.emit("sfx", "ui");
    if (!S.flags.intro) { S.flags.intro = 1; markDirty(); bus.emit("dialog", INTRO, () => {}); }
    else if (had) bus.emit("toast", "おかえりなさい！");
  };
  boot.addEventListener("pointerdown", go);
  let last = performance.now(), fps = 60;
  const loop = (now: number) => {
    const dtMs = Math.min(100, now - last); last = now; const dt = Math.min(0.05, dtMs / 1000); fps = fps * 0.95 + (1000 / Math.max(1, dtMs)) * 0.05;
    if (g.paused && g.role === "solo") g.render(0); else g.update(dt);
    const q0 = g.gfx.q; g.gfx.sample(dtMs, now); if (q0 !== g.gfx.q) g.applyQuality();
    hud.update(dt, fps); ov.draw(g.paused && g.role === "solo" ? 0 : dt);
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
  addEventListener("visibilitychange", () => { if (document.hidden) { S.pos = { x: g.player.pos.x, y: g.player.pos.y, z: g.player.pos.z }; persist(true); } });
  addEventListener("pagehide", () => persist(true));
}
start().catch((e) => { msg.textContent = "エラー：" + e; console.error(e); });
const rot = h("div", { id: "rotate" }, h("div", {}, "↻"), h("p", {}, "スマホを横向きにしてね")); document.body.append(rot);
if ("serviceWorker" in navigator && location.protocol === "https:") addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
