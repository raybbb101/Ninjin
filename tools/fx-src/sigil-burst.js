// NINJIN original: elemental skill. A rune circle draws itself on the floor, glyph ticks light up, then light pillars punch up round the rim and a burst of shards and motes rises from the center.
import { Particles, Bits, Lights, P, B, Rng, fit, band, flare, clamp, smooth, ease, TAU, WHITE } from "../../core/index.js";

export const meta = {
  name: "Ninjin sigil burst", desc: "Skill AoE: floor rune circle draws in, rim pillars punch up, central flare and rising motes.",
  tags: ["ninjin", "magic", "aoe", "skill", "one-shot"], size: [176, 128], origin: [88, 96], duration: 1.15, loop: false, fps: 30, bg: "dark",
  options: { palette: ["#141414", "#2a2a2a", "#484848", "#6c6c6c", "#949494", "#bcbcbc", "#e0e0e0", "#ffffff"], seed: 5, radius: 60 },
};

const DRAW = 0.22, POP = 0.26, SY = 0.32;
export function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed), RAD = o.radius;
  const ps = new Particles({ rng: R, ground: () => 2, sparks: [C[7], C[6], C[5], C[3]], haze: C[5] });
  const bits = new Bits({ ground: () => 2 }), lights = new Lights();
  const pillars = Array.from({ length: 8 }, (_, i) => ({ a: (i / 8) * TAU + 0.2, h: R.range(30, 52), d: R.range(0, 0.06) }));
  let t = 0, popped = false;
  const ring = (p, r, th, k, back) => band(p, 0, 0, r, SY, th, k, C, (g) => Math.sin(g) < 0 === back, false);
  const glyphs = (p, k, back) => {
    for (let i = 0; i < 16; i++) {
      const g = (i / 16) * TAU + t * 0.8;
      if (Math.sin(g) < 0 !== back) continue;
      const on = clamp((t - (i / 16) * DRAW) / 0.05);
      const r0 = RAD * 0.72, x = Math.cos(g) * r0, y = Math.sin(g) * r0 * SY;
      p.dot(x, y, i % 2 ? C[6] : WHITE, on * k);
      p.dot(x + Math.cos(g + 1.57) * 1.5, y + Math.sin(g + 1.57) * 0.5, C[5], on * k * 0.8);
    }
  };
  const draw = (p, back) => {
    const out = 1 - smooth(0.6, meta.duration - 0.05, t);
    const grow = ease.outCubic(clamp(t / DRAW));
    if (out > 0) {
      ring(p, RAD * grow, 2.5, out, back);
      ring(p, RAD * 0.55 * grow, 1.5, out * 0.8, back);
      glyphs(p, out, back);
      // star lines inside the circle
      for (let i = 0; i < 6; i++) {
        const g0 = (i / 6) * TAU - t * 0.5, g1 = g0 + (2 * TAU) / 6;
        const mid = (g0 + g1) / 2;
        if (Math.sin(mid) < 0 !== back) continue;
        const r = RAD * 0.55 * grow;
        p.line(Math.cos(g0) * r, Math.sin(g0) * r * SY, Math.cos(g1) * r, Math.sin(g1) * r * SY, C[5], out * 0.7);
      }
    }
    if (t > POP) {
      for (const q of pillars) {
        if (Math.sin(q.a) < 0 !== back) continue;
        const u = clamp((t - POP - q.d) / 0.5);
        if (u <= 0 || u >= 1) continue;
        const x = Math.cos(q.a) * RAD, y = Math.sin(q.a) * RAD * SY, h = q.h * ease.outExpo(clamp(u / 0.25)) * (1 - ease.inQuad(u) * 0.3);
        const w = 3 * (1 - u);
        for (let yy = 0; yy < h; yy++) {
          const v = yy / h;
          for (let xx = -w; xx <= w; xx += 1) p.dot(x + xx, y - yy, Math.abs(xx) < 1 ? (u < 0.15 ? WHITE : C[7]) : C[5], (1 - u) * (1 - v * 0.8));
        }
        p.glow(x, y - h * 0.4, 14, C[5], 0.4 * (1 - u));
      }
    }
  };
  return {
    update(dt) {
      t += dt;
      if (t < POP && R.chance(0.7)) {
        const a = R.range(0, TAU), D = R.range(RAD * 0.6, RAD * 1.1);
        ps.spawn(P.STREAK, Math.cos(a) * D, Math.sin(a) * D * SY - R.range(0, 20), -Math.cos(a) * D * 3, -Math.sin(a) * D * SY * 3, 0.25, R.chance(0.5) ? C[6] : C[5]);
      }
      if (t >= POP && !popped) {
        popped = true;
        lights.add(0, -14, 80, C[5], 0.8, 0.5);
        lights.add(0, -14, 30, WHITE, 0.9, 0.12);
        for (let i = 0; i < 18; i++) {
          const a = R.range(-Math.PI, 0), sp = R.range(80, 220);
          bits.add({ kind: B.SHARD, x: R.range(-4, 4), y: -10, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: 0.7, drag: 0.8, bounce: 0.3, life: R.range(0.5, 0.8), a: R.range(0, TAU), va: R.range(-20, 20), s: R.range(1.5, 3), c: R.pick([C[7], C[6], C[5]]) });
        }
        for (let i = 0; i < 16; i++) ps.spawn(P.MOTE, R.range(-RAD, RAD) * 0.7, R.range(-4, 4), R.range(-10, 10), -R.range(50, 110), R.range(0.4, 0.8), R.chance(0.5) ? C[7] : C[6]);
      }
      if (t > POP && t < 0.8 && R.chance(0.3)) ps.spawn(P.STAR, R.range(-RAD, RAD) * 0.8, -R.range(4, 40), 0, -10, R.range(0.25, 0.45), C[6], R.range(1, 2));
      ps.update(dt); bits.update(dt); lights.update(dt);
    },
    drawBack(p) { draw(p, true); ps.draw(p, "back"); },
    draw(p) {
      draw(p, false);
      if (t > POP && t < POP + 0.18) { const a = (t - POP) / 0.18; flare(p, 0, -14, 30 * (1 - a), 1 - a, C); }
      const k = 1 - smooth(0.4, 1.0, t);
      if (k > 0) p.glow(0, -6, RAD, C[4], 0.22 * k);
      bits.draw(p); ps.draw(p, "front"); lights.draw(p);
    },
  };
}
