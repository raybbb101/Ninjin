import { HALF, heightAt, slopeAt, colorAt } from "../world/terrain";
let img: HTMLCanvasElement | null = null;
export function mapImage() {
  if (img) return img;
  const S = 240, cv = document.createElement("canvas"); cv.width = cv.height = S; const c = cv.getContext("2d")!, d = c.createImageData(S, S), col = [0, 0, 0];
  for (let j = 0; j < S; j++) for (let i = 0; i < S; i++) {
    const x = (i / S) * HALF * 2 - HALF, z = (j / S) * HALF * 2 - HALF, h = heightAt(x, z), o = (j * S + i) * 4;
    if (h < 0) { d.data[o] = 40; d.data[o + 1] = 90 + Math.max(-14, h) * 3; d.data[o + 2] = 170; d.data[o + 3] = 255; continue; }
    colorAt(x, z, h, slopeAt(x, z), col); const s = 0.8 + Math.min(1, h / 90) * 0.3, edge = Math.floor(h / 12) !== Math.floor(heightAt(x + 4, z) / 12) ? 0.85 : 1;
    d.data[o] = col[0] * 255 * s * edge; d.data[o + 1] = col[1] * 255 * s * edge; d.data[o + 2] = col[2] * 255 * s * edge; d.data[o + 3] = 255;
  }
  c.putImageData(d, 0, 0); img = cv; return cv;
}
