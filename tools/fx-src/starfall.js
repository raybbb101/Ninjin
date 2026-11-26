// NINJIN original: elemental burst. A comet drops from the top with a tapered tail, strikes, a white dome flashes, a double shock ring races across the floor, rubble flies and glittering dust settles.
import { Particles, Bits, Lights, P, B, Rng, fit, band, flare, clamp, smooth, ease, lerp, TAU, WHITE } from "../../core/index.js";

export const meta = {
  name: "Ninjin starfall", desc: "Burst: comet dives in, white dome flash, double floor shock ring, rubble and lingering glitter.",
  tags: ["ninjin", "burst", "meteor", "aoe", "one-shot"], size: [240, 208], origin: [120, 166], duration: 1.6, loop: false, fps: 30, bg: "dark",
  options: { palette: ["#141414", "#2a2a2a", "#484848", "#6c6c6c", "#949494", "#bcbcbc", "#e0e0e0", "#ffffff"], seed: 9, reach: 96 },
};

const FALL = 0.32, SY = 0.3;
export function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed), RE = o.reach;
  const ps = new Particles({ rng: R, ground: () => 0, sparks: [C[7], C[6], C[5], C[3]], haze: C[5] });
  const bits = new Bits({ ground: () => 0 }), lights = new Lights();
  const X0 = 50, Y0 = -158;
  const pos = (t) => { const u = ease.inQuad(clamp(t / FALL)); return [lerp(X0, 0, u), lerp(Y0, -4, u)]; };
  let t = 0, hit = false;
  const rings = (p, back) => {
    for (const [d, th, sp] of [[0, 9, 0.5], [0.12, 4, 0.7]]) {
      const u = clamp((t - FALL - d) / sp);
      if (u <= 0 || u >= 1) continue;
      band(p, 0, 0, 6 + RE * ease.outQuart(u), SY, Math.max(1.5, th * (1 - u)), 1 - u * u, C, (g) => Math.sin(g) < 0 === back, u < 0.08);
    }
  };
  return {
    update(dt) {
      t += dt;
      if (t < FALL) {
        const [x, y] = pos(t);
        ps.spawn(P.MOTE, x + R.range(-2, 2), y + R.range(-2, 2), R.range(-20, 20), R.range(-30, 0), R.range(0.15, 0.3), R.chance(0.5) ? C[7] : C[6]);
        if (R.chance(0.5)) ps.spawn(P.FLAKE, x, y, R.range(-30, 30), R.range(-20, 20), R.range(0.3, 0.6), C[6], R.range(0.5, 1.2));
      }
      if (t >= FALL && !hit) {
        hit = true;
        lights.add(0, -10, 120, C[5], 0.9, 0.7);
        lights.add(0, -10, 50, WHITE, 1, 0.16);
        for (let i = 0; i < 26; i++) {
          const a = R.range(-Math.PI + 0.2, -0.2), sp = R.range(120, 320);
          bits.add({ kind: R.chance(0.6) ? B.CHUNK : B.SHARD, x: R.range(-6, 6), y: -3, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: 1, drag: 0.4, bounce: 0.35, life: R.range(0.7, 1.2), a: R.range(0, TAU), va: R.range(-20, 20), s: R.range(1.5, 3.5), c: R.pick([C[6], C[5], C[4]]) });
        }
        for (let i = 0; i < 30; i++) { const a = R.range(0, TAU), sp = R.range(150, 330); ps.spawn(P.SPARK, 0, -6, Math.cos(a) * sp, Math.sin(a) * sp * 0.6 - 80, R.range(0.25, 0.5)); }
        for (let i = 0; i < 14; i++) { const s = R.sign(); ps.spawn(P.DUST, s * R.range(4, 20), -1, s * R.range(60, 160), -R.range(5, 25), R.range(0.6, 1), C[4], R.range(3, 6)); }
      }
      if (t > FALL + 0.1 && t < 1.2 && R.chance(0.45)) ps.spawn(P.STAR, R.range(-RE, RE) * 0.8, -R.range(2, 50), 0, -8, R.range(0.3, 0.5), R.chance(0.6) ? C[6] : WHITE, R.range(1, 2.2));
      ps.update(dt); bits.update(dt); lights.update(dt);
    },
    drawBack(p) { rings(p, true); ps.draw(p, "back"); },
    draw(p) {
      if (t < FALL) {
        const [x, y] = pos(t), [px, py] = pos(Math.max(0, t - 0.12));
        const L = Math.hypot(x - px, y - py) + 8;
        for (let i = 0; i < L; i++) {
          const u = i / L, tx = lerp(x, px, u) , ty = lerp(y, py, u) - u * 6, w = 5 * (1 - u);
          for (let d = -w; d <= w; d += 1) p.dot(tx + d * 0.8, ty + d * 0.4, Math.abs(d) < 1.2 ? (u < 0.3 ? WHITE : C[7]) : C[5], 1 - u);
        }
        p.circle(x, y, 4, WHITE);
        p.glow(x, y, 26, C[6], 0.7);
      }
      rings(p, false);
      const u = clamp((t - FALL) / 0.3);
      if (t >= FALL && u < 1) {
        const r = 10 + 34 * ease.outQuart(u);
        p.disc(0, -4, r * (1 - u * 0.3), u < 0.12 ? WHITE : C[6], 0.3 * (1 - u) * (1 - u));
        flare(p, 0, -8, 54 * (1 - u), 1 - u, C);
      }
      const k = (1 - smooth(FALL, 1.5, t)) * (t > FALL ? 1 : 0);
      if (k > 0) { p.glow(0, -6, RE * 0.7, C[4], 0.22 * k); for (let x = -RE * 0.5; x <= RE * 0.5; x += 3) p.dot(x + Math.sin(x) * 2, Math.abs(x) * 0.02 + 1, C[5], k * 0.6); }
      bits.draw(p); ps.draw(p, "front"); lights.draw(p);
    },
  };
}
