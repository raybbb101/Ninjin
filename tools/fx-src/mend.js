// NINJIN original: healing. A ring of soft light rises from the feet while small four-point leaves of light spiral up and a plus-sign twinkle crowns it.
import { Particles, P, Rng, fit, band, clamp, smooth, ease, TAU, WHITE } from "../../core/index.js";

export const meta = {
  name: "Ninjin mend", desc: "Heal: a rising ring of light, spiralling leaf motes, a plus twinkle on top.",
  tags: ["ninjin", "heal", "buff", "one-shot"], size: [72, 96], origin: [36, 84], duration: 1.1, loop: false, fps: 24, bg: "dark",
  options: { palette: ["#0a2418", "#124a2c", "#1f7a3e", "#38a852", "#68d070", "#a8ec8c", "#e4ffc4", "#ffffff"], seed: 4 },
};

export function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed), ps = new Particles({ rng: R, ground: () => 40, haze: C[5] });
  const leaves = Array.from({ length: 12 }, () => ({ a: R.range(0, TAU), d: R.range(0, 0.4), r: R.range(8, 14), sp: R.range(40, 70), s: R.chance(0.5) }));
  let t = 0;
  return {
    update(dt) { t += dt; if (t < 0.6 && R.chance(0.4)) ps.spawn(P.MOTE, R.range(-12, 12), -R.range(0, 10), 0, -R.range(30, 60), R.range(0.3, 0.6), C[6]); ps.update(dt); },
    drawBack(p) {
      const u = clamp(t / 0.8);
      if (u < 1) band(p, 0, -ease.outQuad(u) * 40, 14 - u * 4, 0.35, 2, 1 - u, C, (g) => Math.sin(g) < 0, false);
    },
    draw(p) {
      const u = clamp(t / 0.8);
      if (u < 1) band(p, 0, -ease.outQuad(u) * 40, 14 - u * 4, 0.35, 2, 1 - u, C, (g) => Math.sin(g) >= 0, false);
      for (const l of leaves) {
        const a = clamp((t - l.d) / 0.7);
        if (a <= 0 || a >= 1) continue;
        const ang = l.a + a * 4, x = Math.cos(ang) * l.r * (1 - a * 0.5), y = -a * l.sp - 4, c = a < 0.5 ? C[6] : C[5];
        p.dot(x, y, WHITE, 1 - a); p.dot(x - 1, y, c, 1 - a); p.dot(x + 1, y, c, 1 - a); p.dot(x, y - 1, c, 1 - a); p.dot(x, y + 1, c, (1 - a) * 0.6);
        p.light(x, y, C[5], 0.3 * (1 - a));
      }
      const k = smooth(0.25, 0.4, t) * (1 - smooth(0.8, 1.05, t));
      if (k > 0) { const y = -62; p.rect(-1, y - 5, 2, 10, C[6], k); p.rect(-5, y - 1, 10, 2, C[6], k); p.rect(-0.5, y - 3, 1, 6, WHITE, k); p.glow(0, y, 14, C[5], 0.5 * k); }
      p.glow(0, -20, 30, C[4], 0.2 * (1 - smooth(0.5, 1.1, t)));
      ps.draw(p);
    },
  };
}
