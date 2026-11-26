import type { SkillKind } from "../data/characters";
const cache = new Map<string, string>();
// Simple glyphs for skill (E) and burst (Q) buttons, drawn in the element colour.
export function skillIcon(kind: SkillKind, color: string, burst = false): string {
  const key = kind + color + burst; if (cache.has(key)) return cache.get(key)!;
  const S = 64, cv = document.createElement("canvas"); cv.width = cv.height = S; const c = cv.getContext("2d")!;
  c.translate(S / 2, S / 2); c.lineCap = "round"; c.lineJoin = "round";
  c.strokeStyle = color; c.fillStyle = color; c.lineWidth = 5; c.shadowColor = color; c.shadowBlur = burst ? 10 : 4;
  const star = (x: number, y: number, r: number) => { c.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + (i * Math.PI) / 5, rr = i % 2 ? r * 0.45 : r; c.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } c.closePath(); c.fill(); };
  const arrow = (x0: number, y0: number, x1: number, y1: number) => { c.beginPath(); c.moveTo(x0, y0); c.lineTo(x1, y1); c.stroke(); const a = Math.atan2(y1 - y0, x1 - x0); c.beginPath(); c.moveTo(x1, y1); c.lineTo(x1 - Math.cos(a - 0.5) * 9, y1 - Math.sin(a - 0.5) * 9); c.moveTo(x1, y1); c.lineTo(x1 - Math.cos(a + 0.5) * 9, y1 - Math.sin(a + 0.5) * 9); c.stroke(); };
  switch (kind) {
    case "wave": c.beginPath(); c.arc(-6, 0, 18, -1.1, 1.1); c.stroke(); c.beginPath(); c.arc(-14, 0, 14, -0.9, 0.9); c.lineWidth = 3; c.stroke(); break;
    case "nova": c.beginPath(); c.arc(0, 0, 8, 0, 7); c.fill(); for (let i = 0; i < 8; i++) { const a = (i * Math.PI) / 4; c.beginPath(); c.moveTo(Math.cos(a) * 13, Math.sin(a) * 13); c.lineTo(Math.cos(a) * 22, Math.sin(a) * 22); c.stroke(); } break;
    case "dash": arrow(-20, 10, 18, -8); c.lineWidth = 3; c.beginPath(); c.moveTo(-22, 0); c.lineTo(-6, -6); c.moveTo(-18, 18); c.lineTo(-2, 12); c.stroke(); break;
    case "turret": c.strokeRect(-9, -8, 18, 20); c.beginPath(); c.moveTo(-13, -8); c.lineTo(0, -20); c.lineTo(13, -8); c.stroke(); c.beginPath(); c.arc(0, 3, 4, 0, 7); c.fill(); break;
    case "field": c.beginPath(); c.ellipse(0, 8, 22, 9, 0, 0, 7); c.stroke(); for (const [x, y] of [[-8, -6], [6, -12], [10, 0], [-2, -18]]) { c.beginPath(); c.arc(x, y, 3, 0, 7); c.fill(); } break;
    case "shield": c.beginPath(); c.moveTo(0, -20); c.lineTo(17, -12); c.lineTo(14, 8); c.lineTo(0, 20); c.lineTo(-14, 8); c.lineTo(-17, -12); c.closePath(); c.stroke(); c.lineWidth = 3; c.beginPath(); c.moveTo(0, -10); c.lineTo(0, 10); c.stroke(); break;
    case "volley": for (const dx of [-12, 0, 12]) arrow(dx - 6, 18, dx + 4, -16); break;
    case "infuse": c.beginPath(); c.moveTo(-14, 16); c.lineTo(12, -12); c.stroke(); c.lineWidth = 3; c.beginPath(); c.moveTo(-18, 8); c.lineTo(-6, 20); c.stroke(); c.beginPath(); c.moveTo(14, -20); c.quadraticCurveTo(22, -8, 14, -2); c.quadraticCurveTo(8, -10, 14, -20); c.fill(); break;
    case "buff": arrow(0, 18, 0, -18); c.lineWidth = 3; c.beginPath(); c.arc(0, 2, 20, 0.6, Math.PI - 0.6); c.stroke(); break;
    case "meteor": star(8, -8, 12); c.lineWidth = 3; for (const o of [0, 8]) { c.beginPath(); c.moveTo(-2 - o, 2 + o); c.lineTo(-20 - o, 20 + o); c.stroke(); } break;
    case "chain": c.beginPath(); c.moveTo(-18, -16); c.lineTo(-4, -4); c.lineTo(-10, 2); c.lineTo(6, 10); c.lineTo(0, 14); c.lineTo(18, 20); c.stroke(); break;
    case "vortex": c.beginPath(); for (let t = 0; t < 14; t += 0.2) { const r = 2 + t * 1.6; c.lineTo(Math.cos(t) * r, Math.sin(t) * r); } c.lineWidth = 4; c.stroke(); break;
  }
  if (burst) { c.shadowBlur = 0; c.lineWidth = 2; c.strokeStyle = "rgba(255,255,255,.7)"; c.beginPath(); c.arc(0, 0, 28, 0, 7); c.stroke(); }
  const url = cv.toDataURL(); cache.set(key, url); return url;
}
