import { bus } from "../core/events";
import { S } from "../game/state";
let ctx: AudioContext | null = null; let lastHit = 0;
function tone(f0: number, f1: number, dur: number, type: OscillatorType, vol: number) {
  if (!ctx || !S.settings.sfx) return;
  const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur); o.connect(g).connect(ctx.destination); o.start(t); o.stop(t + dur);
}
export function initSfx() {
  const unlock = () => { if (!ctx) { try { ctx = new AudioContext(); } catch { } } ctx?.resume(); };
  addEventListener("pointerdown", unlock, { passive: true });
  bus.on("sfx", (k: string) => {
    if (k === "ui") tone(660, 990, 0.08, "square", 0.04);
    if (k === "hit") { const n = performance.now(); if (n - lastHit < 60) return; lastHit = n; tone(220, 80, 0.09, "square", 0.05); }
    if (k === "skill") { tone(400, 1200, 0.2, "sawtooth", 0.04); }
    if (k === "burst") { tone(200, 900, 0.5, "sawtooth", 0.05); tone(300, 1500, 0.5, "triangle", 0.04); }
    if (k === "chest") { [523, 659, 784, 1046].forEach((f, i) => setTimeout(() => tone(f, f, 0.12, "triangle", 0.06), i * 80)); }
    if (k === "react") tone(880, 300, 0.25, "triangle", 0.06);
    if (k === "wish") { [392, 523, 659, 784, 1046, 1318].forEach((f, i) => setTimeout(() => tone(f, f * 1.01, 0.25, "triangle", 0.05), i * 110)); }
  });
  bus.on("burst", () => bus.emit("sfx", "burst"));
  bus.on("loot", () => bus.emit("sfx", "chest"));
  bus.on("gacha", () => bus.emit("sfx", "wish"));
}
