export function hexToRgb(h: string): [number, number, number] { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
export const rgbToHex = (r: number, g: number, b: number) => "#" + [r, g, b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join("");
export function shade(h: string, f: number) { const [r, g, b] = hexToRgb(h); if (f < 1) return rgbToHex(r * f * 0.95, g * f * 0.95, b * f * 1.02); return rgbToHex(r + (255 - r) * (f - 1), g + (255 - g) * (f - 1), b + (255 - b) * (f - 1)); }
export function mix(a: string, b: string, t: number) { const A = hexToRgb(a), B = hexToRgb(b); return rgbToHex(A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t, A[2] + (B[2] - A[2]) * t); }
export function outline(ctx: CanvasRenderingContext2D, x0: number, y0: number, w: number, h: number, dark = "#1a1424") {
  const img = ctx.getImageData(x0, y0, w, h), d = img.data, out = new Uint8ClampedArray(d);
  const [or, og, ob] = hexToRgb(dark);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = (y * w + x) * 4; if (d[i + 3] > 0) continue;
    let near = -1;
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const X = x + dx, Y = y + dy; if (X < 0 || Y < 0 || X >= w || Y >= h) continue; const j = (Y * w + X) * 4; if (d[j + 3] > 0) { near = j; break; } }
    if (near >= 0) { out[i] = d[near] * 0.25 + or * 0.75; out[i + 1] = d[near + 1] * 0.25 + og * 0.75; out[i + 2] = d[near + 2] * 0.25 + ob * 0.75; out[i + 3] = 255; }
  }
  img.data.set(out); ctx.putImageData(img, x0, y0);
}
