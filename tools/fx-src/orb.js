// NINJIN original: a projectile orb. A bright core with a turning ring of four satellites and a short wisp tail behind it (faces right).
import { fit, cycle, TAU, WHITE } from "../../core/index.js";

export const meta = {
  name: "Ninjin orb", desc: "Projectile loop: hot core, four orbiting sparks, wispy trail to the left.",
  tags: ["ninjin", "projectile", "loop"], size: [48, 32], origin: [32, 16], duration: 0.5, loop: true, fps: 24, bg: "dark",
  options: { palette: ["#141414", "#2a2a2a", "#484848", "#6c6c6c", "#949494", "#bcbcbc", "#e0e0e0", "#ffffff"], seed: 1 },
};

export function draw(p, t, o) {
  const C = fit(o.palette, 8), ph = t / meta.duration;
  cycle(t, meta.duration, 10, o.seed, 0.35, (age, life, r) => {
    const k = age / life, y = r.range(-3, 3) * (1 - k);
    p.dot(-4 - k * 24, y + Math.sin((k + r.next()) * TAU) * 2 * k, k < 0.3 ? C[7] : k < 0.6 ? C[5] : C[3], 1 - k);
  });
  for (let i = 0; i < 4; i++) {
    const a = ph * TAU + (i * TAU) / 4, x = Math.cos(a) * 6, y = Math.sin(a) * 3;
    p.px(x, y, Math.sin(a) > 0 ? C[7] : C[5]);
    p.light(x, y, C[5], 0.3);
  }
  const pulse = 1 + 0.4 * Math.sin(ph * TAU * 2);
  p.circle(0, 0, 3.2 * pulse, C[6]);
  p.circle(-0.5, -0.5, 1.8 * pulse, WHITE);
  p.glow(0, 0, 14, C[5], 0.6);
}
