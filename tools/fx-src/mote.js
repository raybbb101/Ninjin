// NINJIN original: an energy mote. A small diamond spark that pulses, with a twinkle cross and two orbiting specks.
import { fit, TAU, WHITE } from "../../core/index.js";

export const meta = {
  name: "Ninjin mote", desc: "Energy particle loop: pulsing diamond, twinkle cross, two orbiting specks.",
  tags: ["ninjin", "pickup", "energy", "loop"], size: [24, 24], origin: [12, 12], duration: 0.6, loop: true, fps: 20, bg: "dark",
  options: { palette: ["#141414", "#2a2a2a", "#484848", "#6c6c6c", "#949494", "#bcbcbc", "#e0e0e0", "#ffffff"], seed: 1 },
};

export function draw(p, t, o) {
  const C = fit(o.palette, 8), ph = t / meta.duration, s = 3 + Math.round(Math.sin(ph * TAU));
  p.poly([[0, -s - 1], [s, 0], [0, s + 1], [-s, 0]], C[6]);
  p.poly([[0, -s + 1], [s - 2, 0], [0, s - 1], [-s + 2, 0]], WHITE);
  const k = 0.5 + 0.5 * Math.sin(ph * TAU * 2);
  for (let i = s + 2; i < s + 2 + 3 * k; i++) { p.dot(i, 0, C[6], k); p.dot(-i, 0, C[6], k); p.dot(0, i, C[6], k); p.dot(0, -i, C[6], k); }
  for (let i = 0; i < 2; i++) { const a = ph * TAU + i * Math.PI; p.px(Math.cos(a) * 8, Math.sin(a) * 4, C[5]); }
  p.glow(0, 0, 10, C[5], 0.6);
}
