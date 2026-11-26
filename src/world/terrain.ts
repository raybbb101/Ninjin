import { fbm, ridged, smooth, clamp, lerp, hash2 } from "../core/math";
export const HALF = 480, RES = 2, N = HALF * 2 / RES + 1, SEA = 0;
export type Region = "plains" | "canyon" | "peaks" | "spire";
export const REGION_NAME: Record<Region, string> = { plains: "翠風の野", canyon: "紅砂の谷", peaks: "霜嶺", spire: "影の高原" };
const CEN: Record<Region, [number, number, number]> = { plains: [0, 140, 230], canyon: [290, -40, 170], peaks: [-250, -210, 200], spire: [200, -262, 85] };
export const FLATS: { x: number; z: number; r: number; h: number }[] = [];
export function addFlat(x: number, z: number, r: number, h: number) { FLATS.push({ x, z, r, h }); }

export function regionWeights(x: number, z: number): Record<Region, number> {
  const w: any = {}; let s = 0;
  for (const k in CEN) { const [cx, cz, r] = CEN[k as Region]; const v = Math.exp(-((x - cx) ** 2 + (z - cz) ** 2) / (r * r)); w[k] = v; s += v; }
  if (s < 1e-6) { w.plains = 1; s = 1; }
  for (const k in w) w[k] /= s;
  return w;
}
export function regionAt(x: number, z: number): Region {
  const w = regionWeights(x, z); let best: Region = "plains", bv = -1;
  for (const k in w) if (w[k] > bv) { bv = w[k]; best = k as Region; }
  return best;
}
export function rawHeight(x: number, z: number): number {
  const d = Math.hypot(x, z * 1.05) / 455 + (fbm(x * 0.004 + 9, z * 0.004 - 3, 7, 3) - 0.5) * 0.42;
  const land = smooth(1.0, 0.8, d);
  const w = regionWeights(x, z);
  const n1 = fbm(x * 0.011, z * 0.011, 1, 4);
  const plains = 3 + n1 * 18 + Math.pow(fbm(x * 0.004, z * 0.004, 2, 3), 2) * 20 - 4;
  const m = fbm(x * 0.007 + 40, z * 0.007, 3, 4), terr = Math.floor(m * 6) / 6, fr = (m * 6) % 1;
  const canyon = 6 + (terr + Math.pow(fr, 12) / 6) * 62 - ridged(x * 0.01, z * 0.01, 4, 2) * 6;
  const peaks = 14 + Math.pow(ridged(x * 0.0065, z * 0.0065, 5, 5), 1.4) * 110 + n1 * 8;
  const spire = 34 + n1 * 10 + (fbm(x * 0.02, z * 0.02, 6, 2) - 0.5) * 6;
  let h = plains * w.plains + canyon * w.canyon + peaks * w.peaks + spire * w.spire;
  h = lerp(-14, h, land);
  if (land < 0.98) h = Math.min(h, lerp(-14, 2.5, land) + (h - 2.5) * Math.pow(land, 3));
  for (const f of FLATS) { const dd = Math.hypot(x - f.x, z - f.z); if (dd < f.r * 1.8) h = lerp(f.h, h, smooth(f.r, f.r * 1.8, dd)); }
  return h;
}
const grid = new Float32Array(N * N).fill(NaN);
export function resetTerrainCache() { grid.fill(NaN); }
function g(i: number, j: number): number {
  i = clamp(i, 0, N - 1) | 0; j = clamp(j, 0, N - 1) | 0;
  const k = j * N + i; let v = grid[k];
  if (v !== v) { v = rawHeight(i * RES - HALF, j * RES - HALF); grid[k] = v; }
  return v;
}
export function heightAt(x: number, z: number): number {
  const fx = (x + HALF) / RES, fz = (z + HALF) / RES, i = Math.floor(fx), j = Math.floor(fz), u = fx - i, v = fz - j;
  const a = g(i, j), b = g(i + 1, j), c = g(i, j + 1), d = g(i + 1, j + 1);
  return u + v <= 1 ? a + (b - a) * u + (c - a) * v : d + (c - d) * (1 - u) + (b - d) * (1 - v);
}
export function gridH(i: number, j: number) { return g(i, j); }
export function normalAt(x: number, z: number): [number, number, number] {
  const e = RES; const hx = heightAt(x + e, z) - heightAt(x - e, z), hz = heightAt(x, z + e) - heightAt(x, z - e);
  const nx = -hx, ny = 2 * e, nz = -hz, l = Math.hypot(nx, ny, nz);
  return [nx / l, ny / l, nz / l];
}
export const slopeAt = (x: number, z: number) => 1 - normalAt(x, z)[1];
const C = (h: string) => [parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255];
const PAL = {
  grass: [C("#6cb44a"), C("#58a040"), C("#7ec456")], canyon: [C("#d08a4a"), C("#c87440"), C("#e0a060")], peaks: [C("#8aa070"), C("#7a9060"), C("#98a880")],
  spire: [C("#5a4a78"), C("#4c3e68"), C("#6a5888")], rockP: C("#8a8478"), rockC: C("#a85a34"), rockK: C("#6e7080"), rockS: C("#3e3450"),
  sand: C("#e8d8a0"), snow: C("#eef4ff"), wet: C("#b8a878"),
};
export function colorAt(x: number, z: number, h: number, slope: number, out: number[]) {
  const w = regionWeights(x, z), n = hash2(Math.floor(x / 2), Math.floor(z / 2), 3), pi = n < 0.33 ? 0 : n < 0.66 ? 1 : 2;
  const mixc = (a: Record<string, number[]>) => [0, 1, 2].map((k) => a.plains[k] * w.plains + a.canyon[k] * w.canyon + a.peaks[k] * w.peaks + a.spire[k] * w.spire);
  let c = mixc({ plains: PAL.grass[pi], canyon: PAL.canyon[pi], peaks: PAL.peaks[pi], spire: PAL.spire[pi] });
  const rock = mixc({ plains: PAL.rockP, canyon: PAL.rockC, peaks: PAL.rockK, spire: PAL.rockS });
  const rk = smooth(0.22, 0.32, slope); c = c.map((v, k) => lerp(v, rock[k] * (0.9 + n * 0.2), rk));
  const snow = smooth(58, 66, h + n * 6) * w.peaks * (1 - rk * 0.6); c = c.map((v, k) => lerp(v, PAL.snow[k], clamp(snow * 1.4)));
  if (h < 2.2) { const s = smooth(2.2, 1.2, h); c = c.map((v, k) => lerp(v, PAL.sand[k], s)); }
  if (h < 0) c = c.map((v, k) => lerp(v, PAL.wet[k], 0.5));
  out[0] = c[0]; out[1] = c[1]; out[2] = c[2];
}
