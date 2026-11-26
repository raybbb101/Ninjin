import { MAIN, DAILY_TYPES, type Step } from "../data/story";
import { S, addItem, addChar, markDirty } from "./state";
import { byId, POIS } from "../world/worldgen";
import { addAR } from "./progression";
import { bus } from "../core/events";
import { dist2, Rng } from "../core/math";
import type { Game } from "./game";

export function resolveTarget(t: string): string {
  if (!t.startsWith("@near_")) return t;
  const ref = t.slice(6), p = byId.get(ref) || byId.get("wp_" + ref) || byId.get("wp_" + ref.replace("wp_", ""));
  const center = p || byId.get("wp_ruko")!;
  let best = "", bd = Infinity; for (const q of POIS) if (q.type === "camp") { const d = dist2(q.x, q.z, center.x, center.z); if (d < bd) { bd = d; best = q.id; } }
  return best;
}
export function curQuest() { return S.quest.main < MAIN.length ? MAIN[S.quest.main] : null; }
export function curStep(): Step | null { const q = curQuest(); return q ? q.steps[S.quest.step] || null : null; }
export function stepPos(st: Step | null) { if (!st) return null; const p = byId.get(resolveTarget(st.target)); return p ? { x: p.x, y: p.y, z: p.z } : null; }
export function questOnEvent(g: Game, type: string, target: string) {
  if (g.role === "guest" || busy) return;
  const st = curStep(); if (!st) return;
  const tgt = resolveTarget(st.target);
  let ok = false;
  if (type === "near") {
    if (st.type === "goto") { const p = byId.get(tgt); if (p && dist2(g.player.pos.x, g.player.pos.z, p.x, p.z) < 14 * 14) ok = true; }
    if (st.type === "camp" && S.camps[tgt] && Date.now() - S.camps[tgt] < 300000) ok = true;
  } else if (type === st.type && target === tgt) ok = true;
  else if (type === "goto" && st.type === "goto" && target === tgt) ok = true;
  if (!ok) return;
  advance(g, st);
}
let busy = false;
function advance(g: Game, st: Step) {
  if (busy) return; busy = true;
  const q = curQuest()!;
  const finish = () => {
    busy = false;
    S.quest.step++;
    if (S.quest.step >= q.steps.length) {
      const r = q.reward; if (r.gem) addItem("gem", r.gem); if (r.coin) addItem("coin", r.coin); if (r.items) for (const k in r.items) addItem(k, r.items[k]); if (r.ar) addAR(r.ar);
      if (r.char) { addChar(r.char); }
      bus.emit("questDone", q, r);
      S.quest.main++; S.quest.step = 0;
    }
    markDirty(); bus.emit("quest");
  };
  if (st.dlg) bus.emit("dialog", st.dlg, finish); else finish();
}
export function talkNpc(g: Game, id: string): boolean {
  const st = curStep(); if (!st || st.type !== "talk" || st.target !== id || g.role === "guest") return false;
  advance(g, st); return true;
}
export function statueStep(g: Game, id: string) { const st = curStep(); if (st && st.type === "statue" && st.target === id) advance(g, st); }
export function domainStep(g: Game, id: string) { const st = curStep(); if (st && st.type === "domain" && st.target === id) advance(g, st); }
// ---------------- daily ----------------
export function todayKey() { const d = new Date(); return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; }
export function ensureDaily() {
  const k = todayKey(); if (S.daily.date === k) return;
  const r = new Rng(k.split("-").reduce((a, b) => a * 37 + Number(b), 7)); const pool = [...DAILY_TYPES]; const tasks = [];
  for (let i = 0; i < 4; i++) { const t = pool.splice(r.int(0, pool.length - 1), 1)[0]; tasks.push({ type: t.type, text: t.text, n: 0, goal: t.goal }); }
  S.daily = { date: k, tasks, claimed: [false, false, false, false], bonus: false }; markDirty();
}
export function dailyEvent(type: string, n: number) {
  if (!n) return; ensureDaily(); let ch = false;
  for (const t of S.daily.tasks) if (t.type === type && t.n < t.goal) { t.n = Math.min(t.goal, t.n + n); ch = true; if (t.n >= t.goal) bus.emit("toast", `依頼達成：${t.text}`); }
  if (ch) { markDirty(); bus.emit("daily-ui"); }
}
export function claimDaily(i: number) {
  const t = S.daily.tasks[i]; if (!t || t.n < t.goal || S.daily.claimed[i]) return false;
  S.daily.claimed[i] = true; addItem("gem", 50); addItem("coin", 8000); addItem("exp2", 3); addAR(150); markDirty(); return true;
}
export function claimDailyBonus() {
  if (S.daily.bonus || !S.daily.claimed.every((c) => c)) return false;
  S.daily.bonus = true; addItem("gem", 100); addItem("exp3", 2); addItem("ore2", 4); addAR(300); markDirty(); return true;
}
export { MAIN };
