// NINJIN original: a snappy hit. Two-frame white cross, a thin shock ring, stretched sparks that fall, a fading glow.
import { Particles, Lights, P, Rng, fit, sparkle, clamp, ease, TAU, WHITE } from "../../core/index.js";

export const meta = {
  name: "Ninjin hit spark", desc: "Snappy element hit: white cross flash, a thin squashed shock ring, stretched sparks.",
  tags: ["ninjin", "impact", "hit", "one-shot"], size: [88, 72], origin: [44, 44], duration: 0.45, loop: false, fps: 30, bg: "dark",
  options: { palette: ["#141414", "#2a2a2a", "#484848", "#6c6c6c", "#949494", "#bcbcbc", "#e0e0e0", "#ffffff"], seed: 3 },
};

export function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed);
  const ps = new Particles({ rng: R, ground: () => 20, sparks: [C[7], C[6], C[5], C[3]] }), lights = new Lights();
  lights.add(0, -4, 26, C[5], 0.8, 0.25);
  lights.add(0, -4, 12, WHITE, 0.9, 0.08);
  for (let i = 0; i < 14; i++) {
    const a = R.range(0, TAU), sp = R.range(90, 230);
    ps.spawn(P.SPARK, Math.cos(a) * 2, -4 + Math.sin(a) * 2, Math.cos(a) * sp, Math.sin(a) * sp * 0.8 - 40, R.range(0.15, 0.35));
  }
  for (let i = 0; i < 4; i++) ps.spawn(P.STAR, R.range(-8, 8), -4 + R.range(-8, 6), 0, -6, R.range(0.2, 0.35), C[6], R.range(1, 2));
  let t = 0;
  return {
    update(dt) { t += dt; ps.update(dt); lights.update(dt); },
    draw(p) {
      if (t < 0.07) {
        const k = 1 - t / 0.07;
        sparkle(p, 0, -4, 6 + 10 * k, WHITE, C[6], 0.9);
        p.circle(0, -4, 2 + 3 * k, WHITE);
      }
      const u = clamp(t / 0.22);
      if (u < 1) {
        const r = 4 + 20 * ease.outQuart(u);
        for (let j = 0, m = Math.ceil(r * 7); j < m; j++) {
          const g = (j / m) * TAU, x = Math.cos(g) * r, y = -4 + Math.sin(g) * r * 0.62;
          if (u < 0.55 || j % 2 === 0) p.px(x, y, u < 0.3 ? C[7] : u < 0.6 ? C[6] : C[5]);
          if (u < 0.35) p.px(x * 0.92, -4 + (y + 4) * 0.92, C[5]);
        }
        p.glowRing(0, -4, r, 4, C[5], 0.25 * (1 - u));
      }
      ps.draw(p);
      lights.draw(p);
    },
  };
}
