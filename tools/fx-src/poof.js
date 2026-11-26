// NINJIN original: an enemy defeat puff. The silhouette pops into three rising smoke balls with lit caps, a few dark motes and two pale sparkles.
import { Particles, P, Rng, fit, clamp, TAU, WHITE } from "../../core/index.js";

export const meta = {
  name: "Ninjin poof", desc: "Defeat: a white pop, rising lit smoke balls, falling dark motes and pale sparkles.",
  tags: ["ninjin", "death", "smoke", "one-shot"], size: [80, 88], origin: [40, 72], duration: 1.0, loop: false, fps: 20, bg: "dark",
  options: { palette: ["#120c1c", "#22183a", "#3a2c58", "#584a7a", "#7c70a0", "#a89cc4", "#d6ceea", "#ffffff"], seed: 8 },
};

export function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed), ps = new Particles({ rng: R, ground: () => 0, haze: C[4] });
  for (let i = 0; i < 9; i++) ps.spawn(P.SMOKE, R.range(-10, 10), -R.range(4, 20), R.range(-20, 20), -R.range(20, 50), R.range(0.6, 0.95), R.pick([C[4], C[5], C[3]]), R.range(4, 7));
  for (let i = 0; i < 10; i++) { const a = R.range(0, TAU), sp = R.range(30, 90); ps.spawn(P.MOTE, 0, -12, Math.cos(a) * sp, Math.sin(a) * sp - 30, R.range(0.3, 0.6), C[2]); }
  for (let i = 0; i < 3; i++) ps.spawn(P.STAR, R.range(-14, 14), -R.range(10, 34), 0, -12, R.range(0.4, 0.7), WHITE, R.range(1.5, 2.5));
  let t = 0;
  return {
    update(dt) { t += dt; ps.update(dt); },
    draw(p) { if (t < 0.08) { p.circle(0, -12, 8 * (1 - t / 0.08) + 4, WHITE); p.glow(0, -12, 24, C[6], 0.6); } ps.draw(p); },
  };
}
