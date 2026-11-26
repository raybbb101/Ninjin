import type { Game } from "../game/game";
import { h, $, clear } from "./dom";
import { portrait } from "../gfx/charsprite";
import { EL_INFO } from "../data/elements";
import { bus } from "../core/events";
import { S } from "../game/state";
import { curStep, curQuest, stepPos } from "../game/quests";
import { HALF } from "../world/terrain";
import { POIS } from "../world/worldgen";
import { mapImage } from "./mapimg";
import { skillIcon } from "./icons";
import { MAILS } from "../data/mail";

export class Hud {
  root = $("#hud"); joyBase: HTMLElement; joyKnob: HTMLElement; btn: Record<string, HTMLElement> = {}; party: HTMLElement; inter: HTMLElement; toastBox: HTMLElement; quest: HTMLElement; boss: HTMLElement; mini: HTMLCanvasElement; coopTag: HTMLElement;
  obj!: HTMLElement; joyId = -1; joyO = { x: 0, y: 0 }; camId = -1; camLast = { x: 0, y: 0 }; atkDown = 0; eDown = 0; keys = new Set<string>(); fpsEl: HTMLElement;
  constructor(public g: Game, public openMenu: (name: string, arg?: any) => void) {
    const r = this.root; clear(r);
    this.joyBase = h("div", { class: "joy" }); this.joyKnob = h("div", { class: "knob" }); this.joyBase.append(this.joyKnob); r.append(this.joyBase);
    const mk = (k: string, cls: string, label: string) => { const b = h("div", { class: "btn " + cls }, h("span", {}, label)); r.append(b); this.btn[k] = b; return b; };
    mk("atk", "b-atk", "攻撃"); mk("e", "b-e", ""); mk("q", "b-q", ""); mk("jump", "b-jump", "跳"); mk("sprint", "b-sprint", "走");
    this.btn.e.append(h("i", { class: "cd" }), h("b", { class: "cdt" })); this.btn.q.append(h("i", { class: "en" }));
    this.party = h("div", { class: "party" }); r.append(this.party);
    this.inter = h("div", { class: "inter" }); r.append(this.inter);
    this.toastBox = h("div", { class: "toasts" }); r.append(this.toastBox);
    this.mini = h("canvas", { class: "mini", width: 128, height: 128 }); r.append(this.mini);
    this.mini.addEventListener("pointerdown", (e) => { e.stopPropagation(); openMenu("map"); });
    r.append(h("div", { class: "menu-btn", onpointerdown: (e: Event) => { e.stopPropagation(); openMenu("main"); } }, "≡"));
    const tr = h("div", { class: "tr" });
    for (const [k, label, icon] of [["gacha", "祈願", "✦"], ["quest", "任務", "!"], ["coop", "マルチ", "⇄"], ["chars", "キャラ", "☺"], ["bag", "バッグ", "▣"]]) tr.append(h("div", { class: "ic", onpointerdown: (e: Event) => { e.stopPropagation(); openMenu(k); } }, h("b", {}, icon), h("small", {}, label)));
    r.append(tr);
    this.quest = h("div", { class: "qtrack", onpointerdown: (e: Event) => { e.stopPropagation(); openMenu("quest"); } }); r.append(this.quest);
    this.boss = h("div", { class: "bossbar" }); r.append(this.boss);
    this.coopTag = h("div", { class: "cooptag" }); r.append(this.coopTag);
    this.fpsEl = h("div", { class: "fps" }); r.append(this.fpsEl);
    this.obj = h("div", { class: "objective" }); r.append(this.obj);
    this.bind();
    bus.on("party", () => this.buildParty()); bus.on("chars", () => this.buildParty()); bus.on("toast", (t: string) => this.toast(t));
    bus.on("loot", (l: string[]) => this.toast(l.join("　")));
    this.buildParty();
  }
  toast(t: string) { const el = h("div", { class: "toast" }, t); this.toastBox.append(el); setTimeout(() => el.classList.add("out"), 2600); setTimeout(() => el.remove(), 3200); while (this.toastBox.children.length > 4) this.toastBox.firstChild!.remove(); }
  buildParty() {
    clear(this.party);
    this.g.members.forEach((m, i) => {
      const pc = portrait(m.def.look, m.def.weapon, 2, m.id); pc.className = "pp";
      const el = h("div", { class: "pm", "data-i": i, onpointerdown: (e: Event) => { e.stopPropagation(); this.g.switchTo(i); } }, h("div", { class: "pn" }, h("span", { class: "num" }, String(i + 1)), m.def.name), pc, h("i", { class: "hp" }, h("b")), h("i", { class: "eb", style: `--c:${EL_INFO[m.def.el].color}` }));
      this.party.append(el);
    });
  }
  bind() {
    const g = this.g, I = g.input;
    const app = $("#app");
    app.addEventListener("pointerdown", (e) => {
      if ((e.target as HTMLElement).closest("#ui") || g.paused) return;
      if (e.clientX < innerWidth * 0.42 && this.joyId < 0) { this.joyId = e.pointerId; this.joyO = { x: e.clientX, y: e.clientY }; this.joyBase.style.cssText = `left:${e.clientX - 60}px;top:${e.clientY - 60}px;opacity:1`; this.joyKnob.style.transform = ""; }
      else if (this.camId < 0) { this.camId = e.pointerId; this.camLast = { x: e.clientX, y: e.clientY }; }
    });
    addEventListener("pointermove", (e) => {
      if (e.pointerId === this.joyId) { let dx = e.clientX - this.joyO.x, dy = e.clientY - this.joyO.y; const l = Math.hypot(dx, dy), R = 50; if (l > R) { dx *= R / l; dy *= R / l; } this.joyKnob.style.transform = `translate(${dx}px,${dy}px)`; I.mx = dx / R; I.my = dy / R; }
      else if (e.pointerId === this.camId) { I.camDX += e.clientX - this.camLast.x; I.camDY += e.clientY - this.camLast.y; this.camLast = { x: e.clientX, y: e.clientY }; }
    });
    const up = (e: PointerEvent) => { if (e.pointerId === this.joyId) { this.joyId = -1; I.mx = I.my = 0; this.joyBase.style.opacity = "0.35"; this.joyBase.style.left = "60px"; this.joyBase.style.top = ""; this.joyKnob.style.transform = ""; } if (e.pointerId === this.camId) this.camId = -1; };
    addEventListener("pointerup", up); addEventListener("pointercancel", up);
    addEventListener("wheel", (e) => { I.zoom += e.deltaY * 0.01; }, { passive: true });
    const btn = (k: string, down: () => void, upf?: () => void) => { const b = this.btn[k]; b.addEventListener("pointerdown", (e) => { e.stopPropagation(); e.preventDefault(); b.classList.add("on"); down(); }); const u = (e: Event) => { e.stopPropagation(); b.classList.remove("on"); upf?.(); }; b.addEventListener("pointerup", u); b.addEventListener("pointerleave", u); b.addEventListener("pointercancel", u); };
    let atkTimer: any = 0, eTimer: any = 0, atkFired = false, eFired = false;
    btn("atk", () => { atkFired = false; I.atkHeld = true; clearTimeout(atkTimer); atkTimer = setTimeout(() => { if (I.atkHeld) { atkFired = true; I.atkHold = true; } }, 360); }, () => { if (!I.atkHeld) return; I.atkHeld = false; clearTimeout(atkTimer); if (!atkFired) I.atkTap = true; });
    btn("e", () => { eFired = false; clearTimeout(eTimer); eTimer = setTimeout(() => { eFired = true; I.eHold = true; }, 500); }, () => { clearTimeout(eTimer); if (!eFired) I.eTap = true; eFired = true; });
    btn("q", () => { I.qTap = true; });
    btn("jump", () => { I.jump = true; });
    btn("sprint", () => { I.sprint = true; }, () => { I.sprint = false; });
    // keyboard (desktop testing)
    addEventListener("keydown", (e) => {
      if ((e.target as HTMLElement).tagName === "INPUT") return;
      const k = e.key.toLowerCase(); if (this.keys.has(k)) return; this.keys.add(k);
      if (k === " ") I.jump = true; if (k === "shift") I.sprint = true; if (k === "j") I.atkTap = true; if (k === "k") I.atkHold = true; if (k === "e") I.eTap = true; if (k === "q") I.qTap = true;
      if (["1", "2", "3", "4"].includes(k)) g.switchTo(Number(k) - 1); if (k === "f") g.interactables[0]?.act(); if (k === "m") this.openMenu("map"); if (k === "escape") this.openMenu("main");
      this.keyMove();
    });
    addEventListener("keyup", (e) => { const k = e.key.toLowerCase(); this.keys.delete(k); if (k === "shift") I.sprint = false; this.keyMove(); });
  }
  keyMove() { if (this.joyId >= 0) return; const k = this.keys, I = this.g.input; I.mx = (k.has("d") ? 1 : 0) - (k.has("a") ? 1 : 0); I.my = (k.has("s") ? 1 : 0) - (k.has("w") ? 1 : 0); const l = Math.hypot(I.mx, I.my); if (l > 1) { I.mx /= l; I.my /= l; } }
  private iconFor = ""; private interKey = ""; private qKey = ""; private miniT = 0;
  update(dt: number, fps: number) {
    const g = this.g, m = g.cur, p = g.player;
    // skill buttons
    const e = this.btn.e, cd = m.cdE / (m.def.skill.cd * (1 - m.st.cdr));
    (e.querySelector(".cd") as HTMLElement).style.background = m.cdE > 0 ? `conic-gradient(rgba(0,0,0,.6) ${cd * 360}deg, transparent 0)` : "none";
    (e.querySelector(".cdt") as HTMLElement).textContent = m.charges > 0 && m.maxCharges > 1 ? `${m.charges}回` : m.charges <= 0 ? m.cdE.toFixed(1) : "";
    (e.querySelector(".cd") as HTMLElement).style.opacity = m.charges > 0 ? "0.35" : "1";
    const unread = MAILS.filter((x) => S.mail[x.id] !== 2).length; this.root.querySelector(".tr .ic")?.classList.toggle("badge", unread > 0);
    e.style.setProperty("--c", EL_INFO[m.def.el].color);
    if (this.iconFor !== m.id) { this.iconFor = m.id; const col = EL_INFO[m.def.el].color; (e.firstElementChild as HTMLElement).style.backgroundImage = `url(${skillIcon(m.def.skill.kind, col)})`; (this.btn.q.firstElementChild as HTMLElement).style.backgroundImage = `url(${skillIcon(m.def.burst.kind, col, true)})`; }
    const q = this.btn.q, en = m.energy / m.maxEnergy; q.style.setProperty("--c", EL_INFO[m.def.el].color);
    (q.querySelector(".en") as HTMLElement).style.background = `conic-gradient(${EL_INFO[m.def.el].color} ${en * 360}deg, rgba(255,255,255,.12) 0)`; q.classList.toggle("ready", en >= 1);
    this.btn.jump.firstElementChild!.textContent = p.mode === "air" ? "翔" : p.mode === "glide" ? "降" : p.mode === "climb" ? "登" : "跳";
    this.btn.atk.firstElementChild!.textContent = p.mode === "air" || p.mode === "glide" ? "落下" : "攻撃";
    // party
    [...this.party.children].forEach((el, i) => {
      const mm = g.members[i]; if (!mm) return; el.classList.toggle("act", i === g.active); el.classList.toggle("dead", mm.dead);
      ((el.querySelector(".hp b") as HTMLElement).style.width = (mm.hp / mm.st.hp) * 100 + "%");
      (el.querySelector(".eb") as HTMLElement).style.background = `conic-gradient(${EL_INFO[mm.def.el].color} ${(mm.energy / mm.maxEnergy) * 360}deg, rgba(0,0,0,.3) 0)`;
    });
    // interact
    const key = g.interactables.map((i) => i.id).join("|");
    if (key !== this.interKey) { this.interKey = key; clear(this.inter); for (const it of g.interactables) this.inter.append(h("div", { class: "ib", onpointerdown: (ev: Event) => { ev.stopPropagation(); it.act(); } }, h("b", {}, "F"), it.label)); }
    // quest tracker
    const st = curStep(), qq = curQuest();
    const qk = st ? qq!.id + S.quest.step : "none" + S.daily.date + (S.daily.tasks || []).map((t) => t.n).join();
    if (qk !== this.qKey) { this.qKey = qk; clear(this.quest); if (st) this.quest.append(h("div", { class: "qt" }, qq!.chapter + "「" + qq!.title + "」"), h("div", { class: "qs" }, "◆ " + st.text)); else { const dd = S.daily.tasks || []; this.quest.append(h("div", { class: "qt" }, "毎日の依頼"), ...dd.slice(0, 4).map((t) => h("div", { class: "qs" }, `${t.n >= t.goal ? "✓" : "・"} ${t.text} ${t.n}/${t.goal}`))); } }
    const sp = stepPos(st); if (sp) { const d = Math.hypot(sp.x - p.pos.x, sp.z - p.pos.z); (this.quest.lastElementChild as HTMLElement).dataset.d = Math.round(d) + "m"; }
    // boss
    const b = g.bossActive; this.boss.style.display = b ? "block" : "none";
    if (b) this.boss.innerHTML = `<div class="bn">${b.def.name} <small>Lv.${b.lvl}</small></div><div class="bb"><i style="width:${(b.hp / b.maxHp) * 100}%"></i></div>`;
    const ot = g.trial ? `試練「${g.trial.name}」を起こそう：${g.trial.n} / ${g.trial.need}` : g.ev && g.arena ? `星海の螺旋 第${g.ev.floor}層` : g.arena?.kind === "domain" ? `秘境 ウェーブ ${Math.max(1, g.arena.wave + 1)}` : "";
    this.obj.style.display = ot ? "block" : "none"; this.obj.textContent = ot;
    this.coopTag.textContent = g.role === "solo" ? "" : g.role === "host" ? `マルチ中（ホスト）・${g.remotes.size + 1}人` : "マルチ中（ゲスト）";
    this.fpsEl.textContent = S.settings.fps ? `${fps.toFixed(0)} fps / ${g.gfx.q}` : "";
    this.miniT -= dt; if (this.miniT <= 0) { this.miniT = 0.1; this.drawMini(); }
  }
  drawMini() {
    const c = this.mini.getContext("2d")!, g = this.g, p = g.arena ? g.arena.ret : g.player.pos, img = mapImage();
    const S2 = 128, R = 90; // world units radius shown
    c.save(); c.clearRect(0, 0, S2, S2); c.beginPath(); c.arc(64, 64, 62, 0, Math.PI * 2); c.clip();
    c.fillStyle = "#1a3a6a"; c.fillRect(0, 0, S2, S2);
    c.translate(64, 64); c.rotate(g.camYaw + Math.PI);
    const k = img.width / (HALF * 2), sx = (p.x + HALF) * k - R * k, sz = (p.z + HALF) * k - R * k;
    c.imageSmoothingEnabled = false; c.drawImage(img, sx, sz, R * 2 * k, R * 2 * k, -64, -64, 128, 128);
    const sc = 64 / R;
    for (const q of POIS) {
      const dx = (q.x - p.x) * sc, dz = (q.z - p.z) * sc; if (dx * dx + dz * dz > 64 * 64) continue;
      if (q.type === "waypoint") { c.fillStyle = S.wps[q.id] ? "#5ae8ff" : "#6a7a8a"; c.fillRect(dx - 2.5, dz - 2.5, 5, 5); }
      else if (q.type === "boss") { c.fillStyle = "#ff4a8a"; c.beginPath(); c.arc(dx, dz, 3.5, 0, 7); c.fill(); }
      else if (q.type === "domain" || q.type === "statue" || q.type === "tower") { c.fillStyle = q.type === "statue" ? "#8aff8a" : "#c08aff"; c.fillRect(dx - 3, dz - 3, 6, 6); }
      else if (q.type === "npc") { c.fillStyle = "#ffd84a"; c.beginPath(); c.arc(dx, dz, 2.5, 0, 7); c.fill(); }
    }
    if (g.members.some((m) => m.passive("chest"))) for (const ch of g.chestList()) { const dx = (ch.x - p.x) * sc, dz = (ch.z - p.z) * sc; if (dx * dx + dz * dz > 60 * 60) continue; c.fillStyle = "#ffd84a"; c.fillRect(dx - 3, dz - 2, 6, 4); c.fillStyle = "#8a5a2a"; c.fillRect(dx - 3, dz - 0.5, 6, 1); }
    const sp = stepPos(curStep()); if (sp) { let dx = (sp.x - p.x) * sc, dz = (sp.z - p.z) * sc; const l = Math.hypot(dx, dz); if (l > 56) { dx *= 56 / l; dz *= 56 / l; } c.fillStyle = "#ffd84a"; c.beginPath(); c.moveTo(dx, dz - 6); c.lineTo(dx + 5, dz); c.lineTo(dx, dz + 6); c.lineTo(dx - 5, dz); c.fill(); }
    for (const r of g.remotes.values()) { c.fillStyle = "#ff9ad8"; c.beginPath(); c.arc((r.pos.x - p.x) * sc, (r.pos.z - p.z) * sc, 3.5, 0, 7); c.fill(); }
    c.restore();
    c.save(); c.translate(64, 64); c.rotate(-(g.player.face - g.camYaw - Math.PI) + Math.PI); c.fillStyle = "#ffffff"; c.beginPath(); c.moveTo(0, -7); c.lineTo(5, 5); c.lineTo(0, 2); c.lineTo(-5, 5); c.fill(); c.restore();
    c.strokeStyle = "rgba(255,255,255,.7)"; c.lineWidth = 2; c.beginPath(); c.arc(64, 64, 62, 0, 7); c.stroke();
  }
}
