// NINJIN original: an elemental reaction. Two counter-rotating petals of light fold into a seed of white, it bursts into a hexagram flash, a puff of vapour and a spray of motes.
import { Particles, Lights, P, Rng, fit, flare, clamp, ease, TAU, WHITE } from "../../core/index.js";

export const meta = {
  name: "Ninjin reaction bloom", desc: "Reaction: two light petals fold in, hexagram flash, vapour puff and mote spray.",
  tags: ["ninjin", "reaction", "explosion", "one-shot"], size: [128, 112], origin: [64, 72], duration: 0.9, loop: false, fps: 30, bg: "dark",
  options: { palette: ["#141414", "#2a2a2a", "#484848", "#6c6c6c", "#949494", "#bcbcbc", "#e0e0e0", "#ffffff"], seed: 7 },
};

const FOLD = 0.14, Y = -18;
export function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed);
  const ps = new Particles({ rng: R, ground: () => 30, sparks: [C[7], C[6], C[5], C[3]], haze: C[5] }), lights = new Lights();
  let t = 0, pop = false;
  return {
    update(dt) {
      t += dt;
      if (t >= FOLD && !pop) {
        pop = true;
        lights.add(0, Y, 60, C[5], 0.9, 0.4); lights.add(0, Y, 24, WHITE, 1, 0.1);
        for (let i = 0; i < 20; i++) { const a = R.range(0, TAU), sp = R.range(80, 200); ps.spawn(P.SPARK, 0, Y, Math.cos(a) * sp, Math.sin(a) * sp, R.range(0.2, 0.4)); }
        for (let i = 0; i < 8; i++) { const a = R.range(0, TAU); ps.spawn(P.VAPOUR, Math.cos(a) * 6, Y + Math.sin(a) * 6, Math.cos(a) * R.range(20, 50), Math.sin(a) * R.range(20, 50) - 10, R.range(0.4, 0.7), C[6], R.range(3, 5)); }
        for (let i = 0; i < 10; i++) ps.spawn(P.MOTE, R.range(-10, 10), Y + R.range(-6, 6), R.range(-40, 40), -R.range(40, 100), R.range(0.3, 0.6), C[7]);
      }
      ps.update(dt); lights.update(dt);
    },
    draw(p) {
      if (t < FOLD) {
        const k = ease.inCubic(t / FOLD), r = 26 * (1 - k) + 3;
        for (const s of [1, -1]) for (let j = 0; j < 40; j++) {
          const u = j / 40, a = s * (k * 3 + u * 2.4) + (s > 0 ? 0 : Math.PI), rr = r * (1 - u * 0.6);
          p.dot(Math.cos(a) * rr, Y + Math.sin(a) * rr * 0.8, u < 0.25 ? WHITE : C[6], 0.4 + 0.6 * k);
        }
        p.circle(0, Y, 1 + 3 * k, WHITE); p.glow(0, Y, 20, C[5], 0.3 + 0.5 * k);
      } else {
        const u = clamp((t - FOLD) / 0.35);
        if (u < 1) {
          const r = 8 + 28 * ease.outQuart(u);
          for (const off of [0, Math.PI / 3]) {
            const pts = Array.from({ length: 3 }, (_, i) => { const a = off - Math.PI / 2 + (i * TAU) / 3 + u * 0.6; return [Math.cos(a) * r, Y + Math.sin(a) * r]; });
            for (let i = 0; i < 3; i++) p.line(...pts[i], ...pts[(i + 1) % 3], u < 0.2 ? WHITE : C[6], 1 - u);
          }
          if (u < 0.5) flare(p, 0, Y, 30 * (1 - u * 2), 1 - u * 2, C);
          p.glow(0, Y, 40, C[5], 0.5 * (1 - u));
        }
      }
      ps.draw(p); lights.draw(p);
    },
  };
}
