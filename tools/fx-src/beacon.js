// NINJIN original: a waypoint / teleport beam. A column of light drops onto a floor disc, rune dashes climb it, then it narrows to a thread and vanishes upward.
import { Particles, P, Rng, fit, band, clamp, smooth, ease, TAU, WHITE } from "../../core/index.js";

export const meta = {
  name: "Ninjin beacon", desc: "Teleport/waypoint: beam drops onto a floor disc, dashes climb it, narrows and vanishes upward.",
  tags: ["ninjin", "teleport", "spawn", "one-shot"], size: [64, 152], origin: [32, 140], duration: 1.25, loop: false, fps: 24, bg: "dark",
  options: { palette: ["#141414", "#2a2a2a", "#484848", "#6c6c6c", "#949494", "#bcbcbc", "#e0e0e0", "#ffffff"], seed: 3 },
};

export function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed), ps = new Particles({ rng: R, ground: () => 0, haze: C[5] });
  let t = 0;
  const H = 128;
  const w = () => (t < 0.12 ? 6 * ease.outQuad(t / 0.12) : 6 * (1 - smooth(0.5, 0.95, t)));
  const top = () => -H * (t < 0.12 ? ease.outQuad(t / 0.12) : 1);
  const bot = () => -H * smooth(0.55, 1.0, t);
  return {
    update(dt) { t += dt; if (t < 0.7 && R.chance(0.6)) ps.spawn(P.MOTE, R.range(-10, 10), -R.range(0, 6), 0, -R.range(40, 90), R.range(0.3, 0.6), R.chance(0.5) ? C[7] : C[6]); ps.update(dt); },
    drawBack(p) { const k = 1 - smooth(0.5, 1, t); band(p, 0, 0, 14, 0.3, 2.5, k, C, (g) => Math.sin(g) < 0, t < 0.15); },
    draw(p) {
      const k = 1 - smooth(0.5, 1, t);
      band(p, 0, 0, 14, 0.3, 2.5, k, C, (g) => Math.sin(g) >= 0, t < 0.15);
      const W = w(), y0 = top(), y1 = bot();
      if (W > 0.3) {
        for (let y = y1; y > y0; y--) {
          for (let x = -W; x <= W; x += 1) { const q = Math.abs(x) / W; p.dot(x, y, q < 0.3 ? WHITE : q < 0.7 ? C[6] : C[4], 1 - q * 0.6); }
        }
        for (let i = 0; i < 5; i++) { const y = -((t * 140 + i * 26) % H); if (y < y1 && y > y0) p.rect(-W - 2, y, 2, 1, C[7], 0.9), p.rect(W + 1, y - 6, 2, 1, C[7], 0.9); }
        p.glowLine(0, y1, 0, y0, 10, C[5], 0.4);
      }
      p.glow(0, -2, 20, C[5], 0.4 * k);
      ps.draw(p);
    },
  };
}
