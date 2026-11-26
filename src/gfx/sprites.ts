import { shade, outline } from "./color";
import { EL_INFO } from "../data/elements";
type C = CanvasRenderingContext2D;
const R = (c: C, x: number, y: number, w: number, h: number, col: string) => { c.fillStyle = col; c.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h)); };
const ell = (c: C, cx: number, cy: number, rx: number, ry: number, col: string) => { for (let y = -ry; y <= ry; y++) { const w = Math.round(rx * Math.sqrt(Math.max(0, 1 - (y * y) / (ry * ry)))); R(c, cx - w, cy + y, w * 2, 1, col); } };
function canvas(w: number, h: number) { const cv = document.createElement("canvas"); cv.width = w; cv.height = h; return cv; }
const cache = new Map<string, HTMLCanvasElement>();
const memo = (k: string, f: () => HTMLCanvasElement) => { if (!cache.has(k)) cache.set(k, f()); return cache.get(k)!; };

// enemy atlases: one row, frames: idle0 idle1 move0 move1 atk0 atk1 hurt
export const EFW = { puff: 28, wisp: 28, golem: 44 }, EFH = { puff: 26, wisp: 32, golem: 50 };
export function puffAtlas(color: string, crown = false) {
  return memo("puff" + color + crown, () => {
    const W = EFW.puff, H = EFH.puff, cv = canvas(W * 7, H), c = cv.getContext("2d", { willReadFrequently: true })!;
    const sq = [[10, 8], [11, 7], [9, 10], [11, 7], [12, 6], [8, 11], [10, 8]], lift = [0, 0, 3, 0, 0, 4, 0];
    for (let f = 0; f < 7; f++) {
      const [rx, ry] = sq[f], cx = f * W + 14, cy = H - 2 - ry - lift[f], col = f === 6 ? "#ffffff" : color;
      ell(c, cx, cy, rx, ry, shade(col, 0.75)); ell(c, cx - 1, cy - 1, rx - 1, ry - 1, col); ell(c, cx - 3, cy - ry / 2, 3, 2, shade(col, 1.45)); R(c, cx - 4, cy - ry / 2 - 1, 2, 1, "#ffffff");
      const ey = cy + 1; if (f !== 6) { R(c, cx - 4, ey - 1, 2, 3, "#1a1424"); R(c, cx + 2, ey - 1, 2, 3, "#1a1424"); R(c, cx - 4, ey - 1, 1, 1, "#ffffff"); R(c, cx + 2, ey - 1, 1, 1, "#ffffff"); }
      if (f === 4 || f === 5) R(c, cx - 1, ey + 3, 3, 2, "#5a1a2a");
      if (crown) { R(c, cx - 4, cy - ry - 3, 9, 3, "#ffd84a"); R(c, cx - 4, cy - ry - 5, 1, 2, "#ffd84a"); R(c, cx, cy - ry - 6, 1, 3, "#ffd84a"); R(c, cx + 4, cy - ry - 5, 1, 2, "#ffd84a"); R(c, cx, cy - ry - 2, 1, 1, "#ff4a6a"); }
      outline(c, f * W, 0, W, H);
    }
    return cv;
  });
}
export function wispAtlas(color: string) {
  return memo("wisp" + color, () => {
    const W = EFW.wisp, H = EFH.wisp, cv = canvas(W * 7, H), c = cv.getContext("2d", { willReadFrequently: true })!;
    for (let f = 0; f < 7; f++) {
      const cx = f * W + 14, cy = 16 + [0, 1, 0, -1, -1, 0, 0][f], col = f === 6 ? "#ffffff" : color, big = f === 4 || f === 5 ? 1 : 0;
      for (let i = 0; i < 4; i++) R(c, cx - 3 + i * 2 + ((f + i) % 2), cy - 9 - i % 2 * 2 - big, 2, 4, shade(col, 1.3));
      ell(c, cx, cy, 7 + big, 7 + big, shade(col, 0.8)); ell(c, cx, cy - 1, 6 + big, 6 + big, col); ell(c, cx - 1, cy - 3, 3, 2, shade(col, 1.5));
      for (let i = 0; i < 3; i++) R(c, cx - 4 + i * 3, cy + 7 + ((f + i) % 2), 2, 3, shade(col, 0.9));
      if (f !== 6) { R(c, cx - 3, cy - 1, 2, 2, "#1a1424"); R(c, cx + 1, cy - 1, 2, 2, "#1a1424"); R(c, cx - 3, cy - 1, 1, 1, "#fff"); R(c, cx + 1, cy - 1, 1, 1, "#fff"); }
      outline(c, f * W, 0, W, H);
    }
    return cv;
  });
}
export function golemAtlas(eye: string, tint = "#8a8478") {
  return memo("golem" + eye + tint, () => {
    const W = EFW.golem, H = EFH.golem, cv = canvas(W * 7, H), c = cv.getContext("2d", { willReadFrequently: true })!;
    const st = tint, stD = shade(st, 0.7), stL = shade(st, 1.25);
    for (let f = 0; f < 7; f++) {
      const cx = f * W + 22, base = H - 2, bob = f === 1 || f === 3 ? 1 : 0, hurt = f === 6;
      const s = hurt ? "#ffffff" : st;
      const lw = f === 2 ? -2 : f === 3 ? 2 : 0;
      R(c, cx - 9 + lw, base - 9, 7, 9, stD); R(c, cx + 2 - lw, base - 9, 7, 9, stD);
      R(c, cx - 12, base - 30 + bob, 24, 22, s); R(c, cx - 12, base - 30 + bob, 24, 2, stL); R(c, cx + 8, base - 28 + bob, 4, 20, stD);
      R(c, cx - 5, base - 22 + bob, 10, 6, shade(st, 0.85)); R(c, cx - 2, base - 21 + bob, 4, 4, eye);
      R(c, cx - 7, base - 40 + bob, 14, 11, s); R(c, cx - 7, base - 40 + bob, 14, 2, stL); R(c, cx - 4, base - 36 + bob, 8, 2, "#1a1424"); R(c, cx - 3, base - 36 + bob, 2, 2, eye); R(c, cx + 1, base - 36 + bob, 2, 2, eye);
      const ay = f === 4 ? -14 : f === 5 ? 2 : 0;
      R(c, cx - 19, base - 29 + bob + ay, 7, 16, s); R(c, cx + 12, base - 29 + bob + ay, 7, 16, stD); R(c, cx - 20, base - 15 + bob + ay, 9, 7, stD); R(c, cx + 11, base - 15 + bob + ay, 9, 7, shade(st, 0.6));
      R(c, cx - 10, base - 26 + bob, 3, 1, shade(st, 0.6)); R(c, cx + 3, base - 14 + bob, 4, 1, shade(st, 0.6)); R(c, cx - 6, base - 33 + bob, 2, 1, shade(st, 0.6));
      outline(c, f * W, 0, W, H);
    }
    return cv;
  });
}
// props
export function treeTex(kind: "leaf" | "pine" | "dead" | "crystal" | "cactus" | "bush" | "grass" | "flower" | "rock", seed = 0): HTMLCanvasElement {
  return memo("tree" + kind + seed, () => {
    const W = kind === "grass" || kind === "flower" ? 16 : kind === "bush" || kind === "rock" ? 24 : 40, H = kind === "grass" || kind === "flower" ? 12 : kind === "bush" || kind === "rock" ? 18 : 56;
    const cv = canvas(W, H), c = cv.getContext("2d", { willReadFrequently: true })!; const cx = W / 2;
    let r = seed * 9301 + 49297; const rnd = () => ((r = (r * 9301 + 49297) % 233280) / 233280);
    if (kind === "leaf") {
      R(c, cx - 2, H - 18, 4, 18, "#6a4a2a"); R(c, cx + 1, H - 18, 1, 18, "#4a3220");
      const g = ["#2f6a2a", "#3f8a34", "#58a840", "#7cc450"];
      for (const [x, y, rr, k] of [[0, 22, 13, 0], [-7, 26, 9, 0], [7, 25, 9, 0], [0, 18, 11, 1], [-4, 15, 7, 2], [4, 20, 7, 1], [-3, 12, 4, 3], [2, 17, 3, 3]] as number[][]) ell(c, cx + x, H - 56 + y + 6, rr, rr * 0.85, g[k]);
      for (let i = 0; i < 12; i++) R(c, cx - 10 + rnd() * 20, H - 46 + rnd() * 20, 1, 1, "#9ad860");
    } else if (kind === "pine") {
      R(c, cx - 1, H - 10, 3, 10, "#5a3a22");
      for (let i = 0; i < 5; i++) { const y = H - 12 - i * 8, w = 15 - i * 3; for (let k = 0; k < 9; k++) R(c, cx - w * (1 - k / 10), y - k, w * 2 * (1 - k / 10), 1, k < 2 ? "#e8f4ff" : i % 2 ? "#2a5a4a" : "#346a54"); }
      R(c, cx - 1, H - 54, 2, 4, "#e8f4ff");
    } else if (kind === "dead") {
      R(c, cx - 2, H - 30, 4, 30, "#7a4a2a"); for (const [x, y, a] of [[0, -28, -0.8], [0, -20, 0.7], [0, -14, -0.6]]) { for (let i = 0; i < 10; i++) R(c, cx + x + Math.cos(a - Math.PI / 2) * i * (a > 0 ? -1 : 1), H + y - i * 0.8, 2, 2, "#6a3a1a"); }
    } else if (kind === "cactus") {
      R(c, cx - 3, H - 30, 7, 30, "#4a8a3a"); R(c, cx - 3, H - 30, 2, 30, "#6aaa4a"); R(c, cx - 10, H - 22, 4, 10, "#4a8a3a"); R(c, cx - 10, H - 14, 8, 3, "#4a8a3a"); R(c, cx + 6, H - 26, 4, 12, "#3a7a2a"); R(c, cx + 3, H - 16, 7, 3, "#3a7a2a"); R(c, cx - 1, H - 33, 3, 3, "#ff7aa8");
    } else if (kind === "crystal") {
      for (const [x, h, w, col] of [[0, 44, 6, "#9a70f0"], [-7, 30, 5, "#7442c4"], [7, 34, 5, "#b88aff"]] as [number, number, number, string][]) { for (let y = 0; y < h; y++) { const ww = y > h - 8 ? w * (h - y) / 8 : w; R(c, cx + x - ww / 2, H - 1 - y, ww, 1, y % 7 === 0 ? shade(col, 1.3) : col); } R(c, cx + x - 1, H - h + 4, 1, h - 10, "#e8d8ff"); }
    } else if (kind === "bush") {
      const g = ["#2f6a2a", "#3f8a34", "#58a840"]; ell(c, cx, H - 7, 10, 6, g[0]); ell(c, cx - 2, H - 8, 7, 5, g[1]); ell(c, cx - 3, H - 10, 4, 3, g[2]); for (let i = 0; i < 3; i++) R(c, cx - 6 + rnd() * 12, H - 12 + rnd() * 6, 2, 2, ["#ff6a8a", "#ffe04a", "#ffffff"][i]);
    } else if (kind === "rock") {
      ell(c, cx, H - 7, 10, 7, "#6a6a72"); ell(c, cx - 2, H - 9, 7, 5, "#8a8a94"); ell(c, cx - 4, H - 11, 3, 2, "#aaaab4");
    } else if (kind === "grass") {
      for (let i = 0; i < 7; i++) { const x = 2 + i * 2, h = 5 + rnd() * 6; for (let k = 0; k < h; k++) R(c, x + (k > h / 2 ? (i % 2 ? 1 : -1) : 0), H - 1 - k, 1, 1, k > h - 2 ? "#9ad860" : "#4f9a3a"); }
    } else if (kind === "flower") {
      for (let i = 0; i < 4; i++) { const x = 3 + i * 3, h = 4 + rnd() * 5; R(c, x, H - h, 1, h, "#3f8a34"); R(c, x - 1, H - h - 1, 3, 2, ["#ff6a8a", "#ffe04a", "#ffffff", "#9ab8ff"][(i + seed) % 4]); }
    }
    if (kind !== "grass" && kind !== "flower") outline(c, 0, 0, W, H, "#18202a");
    return cv;
  });
}
export function wallTex(color = "#e8dcc0") { return memo("wall" + color, () => { const cv = canvas(16, 16), c = cv.getContext("2d")!; R(c, 0, 0, 16, 16, color); for (let y = 0; y < 16; y += 4) R(c, 0, y, 16, 1, shade(color, 0.85)); R(c, 0, 0, 2, 16, "#8a6a4a"); R(c, 14, 0, 2, 16, "#8a6a4a"); return cv; }); }
export function roofTex(color: string) { return memo("roof" + color, () => { const cv = canvas(16, 16), c = cv.getContext("2d")!; R(c, 0, 0, 16, 16, color); for (let y = 0; y < 16; y += 3) { R(c, 0, y, 16, 1, shade(color, 0.7)); for (let x = (y / 3) % 2 ? 2 : 0; x < 16; x += 4) R(c, x, y, 1, 3, shade(color, 0.8)); } return cv; }); }
export function stoneTex(color = "#9a9aa8") { return memo("stone" + color, () => { const cv = canvas(16, 16), c = cv.getContext("2d")!; R(c, 0, 0, 16, 16, color); for (let y = 0; y < 16; y += 5) { R(c, 0, y, 16, 1, shade(color, 0.7)); for (let x = (y / 5) % 2 ? 4 : 0; x < 16; x += 8) R(c, x, y, 1, 5, shade(color, 0.7)); } R(c, 2, 2, 2, 1, shade(color, 1.2)); return cv; }); }
export function chestTex(tier: number) {
  return memo("chest" + tier, () => {
    const cols = ["#9a6a3a", "#9a6a3a", "#c8d0e0", "#ffd24a", "#ff9ad8"], col = cols[tier] || cols[1];
    const cv = canvas(16, 16), c = cv.getContext("2d")!; R(c, 0, 0, 16, 16, tier <= 1 ? "#8a5a2a" : "#6a4a2a"); for (let y = 0; y < 16; y += 4) R(c, 0, y, 16, 1, "#5a3a1a");
    R(c, 0, 0, 16, 2, col); R(c, 0, 14, 16, 2, col); R(c, 0, 0, 2, 16, col); R(c, 14, 0, 2, 16, col); R(c, 6, 5, 4, 5, col); R(c, 7, 7, 2, 2, "#1a1424"); return cv;
  });
}
export function elGlyph(el: string, size = 32) {
  return memo("glyph" + el + size, () => {
    const cv = canvas(size, size), c = cv.getContext("2d")!, col = (EL_INFO as any)[el]?.color || "#fff";
    c.fillStyle = col; c.beginPath(); c.arc(size / 2, size / 2, size * 0.42, 0, Math.PI * 2); c.fill();
    c.fillStyle = "#1a1424"; c.font = `bold ${size * 0.55}px sans-serif`; c.textAlign = "center"; c.textBaseline = "middle"; c.fillText((EL_INFO as any)[el]?.name || "?", size / 2, size / 2 + 1);
    return cv;
  });
}
