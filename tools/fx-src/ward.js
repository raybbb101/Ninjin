// NINJIN original: a shield bubble. A hexagon-latticed dome around the feet; a bright scan line sweeps up it, cells flicker, a floor ring glows.
import { fit, band, rand, TAU, WHITE } from "../../core/index.js";

export const meta = {
  name: "Ninjin ward", desc: "Shield loop: hex-lattice dome, a sweeping scan band, flickering cells and a glowing floor ring.",
  tags: ["ninjin", "shield", "buff", "loop"], size: [64, 64], origin: [32, 54], duration: 1.2, loop: true, fps: 20, bg: "dark",
  options: { palette: ["#141414", "#2a2a2a", "#484848", "#6c6c6c", "#949494", "#bcbcbc", "#e0e0e0", "#ffffff"], seed: 2 },
};

export function drawBack(p, t, o) {
  const C = fit(o.palette, 8);
  band(p, 0, 0, 22, 0.3, 2, 0.8, C, (g) => Math.sin(g) < 0, false);
}
export function draw(p, t, o) {
  const C = fit(o.palette, 8), ph = t / meta.duration, Rr = 22, scan = (ph % 1) * Rr * 1.9;
  band(p, 0, 0, 22, 0.3, 2, 0.8, C, (g) => Math.sin(g) >= 0, false);
  p.shade(-Rr - 1, -Rr * 1.6, Rr + 1, 2, (x, y, out) => {
    const ny = -y / 1.5, d = Math.hypot(x, ny);
    if (d > Rr || y > 0) return;
    const rim = d > Rr - 1.2, hx = Math.floor((x + 40) / 5), hy = Math.floor((ny + (hx % 2) * 2.5) / 5);
    const edge = ((x + 40) % 5) < 0.9 || ((ny + (hx % 2) * 2.5) % 5) < 0.9;
    const near = Math.abs(-y - scan) < 2;
    const flick = rand(hx, hy, Math.floor(ph * 6)) < 0.08;
    if (rim) { out.c = near ? WHITE : C[6]; out.a = 0.9; out.l = C[5]; out.k = 0.15; return; }
    if (near) { out.c = C[7]; out.a = 0.7; return; }
    if (edge) { out.c = C[5]; out.a = 0.35 + (flick ? 0.4 : 0); return; }
    if (flick) { out.c = C[4]; out.a = 0.3; }
  });
  p.glow(0, -14, 30, C[4], 0.18);
}
