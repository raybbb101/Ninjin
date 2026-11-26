// NINJIN original: a melee crescent. A thick blade of light sweeps in a tilted arc, leaves a dithered after-image and sheds sparks off the tip.
import { Particles, Lights, P, Rng, fit, clamp, ease, lerp, TAU, WHITE } from "../../core/index.js";

export const meta = {
  name: "Ninjin crescent", desc: "Melee swing: a tilted crescent of light with a hot leading edge, after-image and tip sparks.",
  tags: ["ninjin", "melee", "slash", "one-shot"], size: [96, 72], origin: [40, 48], duration: 0.44, loop: false, fps: 30, bg: "dark",
  options: { palette: ["#141414", "#2a2a2a", "#484848", "#6c6c6c", "#949494", "#bcbcbc", "#e0e0e0", "#ffffff"], seed: 2, reach: 34 },
};

const A0 = -2.5, A1 = 0.9, SWING = 0.1;
export function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed), RE = o.reach;
  const ps = new Particles({ rng: R, ground: () => 22, sparks: [C[7], C[6], C[5], C[3]] }), lights = new Lights();
  const pt = (a, r) => [6 + Math.cos(a) * r, -18 + Math.sin(a) * r * 0.55];
  let t = 0, lastA = A0;
  return {
    update(dt) {
      t += dt;
      const head = lerp(A0, A1, ease.outCubic(clamp(t / SWING)));
      if (t < SWING + 0.02) {
        for (let a = lastA; a < head; a += 0.25) {
          if (R.chance(0.5)) {
            const [x, y] = pt(a, RE), tg = a + Math.PI / 2;
            ps.spawn(P.SPARK, x, y, Math.cos(tg) * R.range(60, 140) + Math.cos(a) * 60, Math.sin(tg) * R.range(30, 70), R.range(0.12, 0.3));
          }
        }
        if (head > 0 && lastA <= 0) lights.add(...pt(0, RE), 28, C[5], 0.7, 0.2);
      }
      lastA = head;
      ps.update(dt);
      lights.update(dt);
    },
    draw(p) {
      const head = lerp(A0, A1, ease.outCubic(clamp(t / SWING)));
      const fade = clamp((t - SWING) / (meta.duration - SWING - 0.06));
      const tail = lerp(A0, head, ease.inQuad(clamp(t / (SWING + 0.12))));
      const span = head - tail;
      if (span > 0.02 && fade < 1) {
        const steps = Math.ceil(span * RE * 1.6);
        for (let i = 0; i <= steps; i++) {
          const u = i / steps, a = tail + span * u, w = 2 + 9 * Math.sin(Math.PI * Math.pow(u, 0.7)) * (1 - fade * 0.6);
          for (let d = 0; d < w; d += 0.5) {
            const r = RE - d, [x, y] = pt(a, r), q = d / w;
            const c = q < 0.18 ? (u > 0.85 ? WHITE : C[7]) : q < 0.45 ? C[6] : q < 0.75 ? C[5] : C[3];
            const al = (1 - fade) * (0.35 + 0.65 * u);
            if (q < 0.6 && al > 0.55) p.px(x, y, c); else p.dot(x, y, c, q < 0.75 ? al : al * 0.5);
          }
          if (i % 2 === 0) p.light(...pt(a, RE - 1), C[5], 0.25 * u * (1 - fade));
        }
        if (t < SWING + 0.03) { const [hx, hy] = pt(head, RE - 1); p.glow(hx, hy, 12, C[6], 0.6); p.px(hx, hy, WHITE); }
      }
      ps.draw(p);
      lights.draw(p);
    },
  };
}
