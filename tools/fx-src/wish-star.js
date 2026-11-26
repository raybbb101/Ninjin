// NINJIN original: a gacha reveal. A star streaks down, slams into a pool of light, a tall eight-point star unfolds, rays turn slowly and a halo of sparkles drifts away.
import { Particles, Lights, P, Rng, fit, clamp, smooth, ease, lerp, TAU, WHITE } from "../../core/index.js";

export const meta = {
  name: "Ninjin wish star", desc: "Gacha reveal: falling star, impact pool, unfolding eight-point star with turning rays, drifting sparkles.",
  tags: ["ninjin", "ui", "gacha", "one-shot"], size: [176, 184], origin: [88, 104], duration: 1.8, loop: false, fps: 24, bg: "dark",
  options: { palette: ["#141414", "#2a2a2a", "#484848", "#6c6c6c", "#949494", "#bcbcbc", "#e0e0e0", "#ffffff"], seed: 6 },
};

const LAND = 0.3;
export function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed), ps = new Particles({ rng: R, ground: () => 60, sparks: [C[7], C[6], C[5], C[3]], haze: C[5] }), lights = new Lights();
  let t = 0, landed = false;
  const starShape = (p, r, rot, k) => {
    for (let i = 0; i < 8; i++) {
      const a = rot + (i * TAU) / 8, L = i % 2 ? r * 0.55 : r;
      for (let d = 0; d < L; d += 0.5) { const w = (1 - d / L) * (i % 2 ? 1.5 : 2.5); for (let s = -w; s <= w; s += 0.7) p.dot(Math.cos(a) * d - Math.sin(a) * s, Math.cos(a) * s + Math.sin(a) * d, d < L * 0.3 ? WHITE : Math.abs(s) < 0.8 ? C[7] : C[5], k); }
    }
  };
  return {
    update(dt) {
      t += dt;
      if (t < LAND) { const u = t / LAND; ps.spawn(P.MOTE, lerp(-56, 0, u), lerp(-84, 0, u), R.range(-10, 10), R.range(-10, 10), 0.25, C[6]); }
      if (t >= LAND && !landed) {
        landed = true; lights.add(0, 0, 90, C[5], 1, 0.6); lights.add(0, 0, 40, WHITE, 1, 0.15);
        for (let i = 0; i < 28; i++) { const a = R.range(0, TAU), sp = R.range(80, 240); ps.spawn(P.SPARK, 0, 0, Math.cos(a) * sp, Math.sin(a) * sp, R.range(0.3, 0.6)); }
      }
      if (t > LAND && t < 1.15 && R.chance(0.6)) { const a = R.range(0, TAU), d = R.range(10, 60); ps.spawn(P.STAR, Math.cos(a) * d, Math.sin(a) * d, Math.cos(a) * 10, Math.sin(a) * 10 - 5, R.range(0.3, 0.6), R.chance(0.5) ? WHITE : C[6], R.range(1, 2.5)); }
      ps.update(dt); lights.update(dt);
    },
    draw(p) {
      if (t < LAND) { const u = ease.inQuad(t / LAND), x = lerp(-56, 0, u), y = lerp(-84, 0, u); p.line(x, y, x - 12, y - 18, C[6], 0.8); p.circle(x, y, 3, WHITE); p.glow(x, y, 20, C[6], 0.7); }
      else {
        const u = clamp((t - LAND) / 0.4), out = 1 - smooth(1.1, 1.6, t), r = 10 + 34 * ease.outBack(u, 1.6);
        p.glow(0, 0, 70, C[4], 0.4 * out);
        p.glowRing(0, 0, r * 1.3, 6, C[5], 0.3 * out);
        starShape(p, r, (t - LAND) * 0.6, out);
        p.circle(0, 0, 5 * out, WHITE);
      }
      ps.draw(p); lights.draw(p);
    },
  };
}
