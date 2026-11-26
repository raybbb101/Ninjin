import type { Look, WeaponType } from "../data/characters";
import { shade, outline } from "./color";

export const FW = 40, FH = 44, NF = 17;
export const FR = { idle: [0, 1], walk: [2, 3, 4, 5], atk: [6, 7, 8], cast: [9], jump: [10], glide: [11], climb: [12, 13], swim: [14, 15], hurt: [16] };
export type Dir = 0 | 1 | 2; // front, back, side(right)
type C = CanvasRenderingContext2D;
const R = (c: C, x: number, y: number, w: number, h: number, col: string) => { if (w <= 0 || h <= 0) return; c.fillStyle = col; c.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h)); };
function line(c: C, x0: number, y0: number, ang: number, len: number, w: number, col: string, tip?: string) {
  const dx = Math.cos(ang), dy = Math.sin(ang);
  for (let i = 0; i <= len; i += 0.5) { const x = x0 + dx * i, y = y0 + dy * i; R(c, x - (w - 1) / 2, y - (w - 1) / 2, w, w, tip && i > len - 2 ? tip : col); }
}
interface Pose { bob: number; lL: number; lR: number; sL: number; sR: number; hand: [number, number]; hand2: [number, number]; wAng: number; wShow: "hand" | "back" | "float" | "aim" | "none"; tuck: number; glide: boolean; eyes: "open" | "shut"; swim: boolean; lean: number }
function pose(f: number, dir: Dir, wt: WeaponType): Pose {
  const p: Pose = { bob: 0, lL: 0, lR: 0, sL: 0, sR: 0, hand: [6, 2], hand2: [-6, 2], wAng: Math.PI / 2 + 0.25, wShow: wt === "sword" ? "hand" : wt === "polearm" ? "hand" : wt === "catalyst" ? "float" : "back", tuck: 0, glide: false, eyes: "open", swim: false, lean: 0 };
  if (wt === "polearm") p.wAng = -Math.PI / 2 + 0.08;
  if (f === 1) p.bob = 1;
  if (f >= 2 && f <= 5) {
    const k = f - 2; p.bob = k % 2;
    if (dir === 2) { p.sL = [2, 0, -2, 0][k]; p.sR = -p.sL; p.lL = k === 1 ? 1 : 0; p.lR = k === 3 ? 1 : 0; p.hand = [[-2, 2], [1, 2], [4, 2], [1, 2]][k] as any; }
    else { p.lL = k === 0 ? 1 : 0; p.lR = k === 2 ? 1 : 0; p.hand = [6, 2 + (k === 0 ? -1 : k === 2 ? 1 : 0)]; p.hand2 = [-6, 2 + (k === 2 ? -1 : k === 0 ? 1 : 0)]; }
  }
  if (f >= 6 && f <= 8) {
    const k = f - 6;
    if (wt === "bow") { p.wShow = "aim"; p.hand = dir === 2 ? [8, -1] : [5, -1]; p.hand2 = dir === 2 ? [k === 0 ? 0 : 3, -1] : [-4, -1]; p.lean = k === 1 ? -1 : 0; }
    else if (wt === "catalyst") { p.wShow = "float"; p.hand = dir === 2 ? [8 + k, -2] : [6, -4 - k]; p.hand2 = dir === 2 ? [5, 0] : [-6, -4]; }
    else {
      p.wShow = "hand"; const big = wt === "claymore";
      if (dir === 2) { p.hand = [[-3, -6], [7, 0], [6, 3]][k] as any; p.wAng = [-2.3, 0.1, 1.0][k]; p.sL = [0, 2, 2][k]; p.sR = [0, -2, -1][k]; p.lean = [-1, 1, 1][k]; }
      else { p.hand = [[6, -6], [-5, 1], [-6, 3]][k] as any; p.wAng = [-1.9, 2.6, 2.9][k]; }
      if (wt === "polearm") { p.wAng = dir === 2 ? [Math.PI, 0, 0.15][k] : [-1.6, 2.4, 2.9][k]; if (dir === 2) p.hand = [[-2, 0], [8, 0], [9, 1]][k] as any; }
      if (big) p.bob = k === 1 ? 1 : 0;
    }
  }
  if (f === 9) { p.hand = [5, -9]; p.hand2 = [-5, -9]; p.wShow = wt === "catalyst" ? "float" : wt === "bow" ? "back" : "hand"; p.wAng = -Math.PI / 2; }
  if (f === 10) { p.tuck = 2; p.hand = [6, -1]; p.hand2 = [-6, -1]; }
  if (f === 11) { p.glide = true; p.hand = [5, -10]; p.hand2 = [-5, -10]; p.tuck = 1; p.wShow = wt === "catalyst" ? "none" : "back"; }
  if (f === 12 || f === 13) { const k = f - 12; p.hand = [5, k ? -10 : -6]; p.hand2 = [-5, k ? -6 : -10]; p.lL = k ? 2 : 0; p.lR = k ? 0 : 2; p.wShow = wt === "catalyst" ? "none" : "back"; }
  if (f === 14 || f === 15) { const k = f - 14; p.swim = true; p.hand = dir === 2 ? [k ? 9 : 4, -2] : [8, k ? -3 : -1]; p.hand2 = dir === 2 ? [k ? -2 : 2, -1] : [-8, k ? -1 : -3]; p.wShow = "none"; }
  if (f === 16) { p.eyes = "shut"; p.hand = [7, -3]; p.hand2 = [-7, -3]; p.lean = -1; p.bob = 1; }
  return p;
}
export function weaponDraw(c: C, wt: WeaponType, x: number, y: number, ang: number, L: Look) {
  const steel = "#dfe6f2", steelD = "#8a96ac";
  if (wt === "sword") { line(c, x, y, ang, 10, 2, steel, "#ffffff"); line(c, x, y, ang + Math.PI, 2, 2, L.c3); R(c, x - 1, y - 1, 3, 3, L.c3); }
  else if (wt === "claymore") { line(c, x, y, ang, 14, 3, steel, "#ffffff"); line(c, x + Math.cos(ang) * 2, y + Math.sin(ang) * 2, ang, 10, 1, steelD); line(c, x, y, ang + Math.PI, 3, 2, L.c3); R(c, x - 2, y - 1, 4, 3, L.c3); }
  else if (wt === "polearm") { line(c, x, y, ang + Math.PI, 6, 1, "#7a5a3a"); line(c, x, y, ang, 14, 1, "#8a6a4a"); line(c, x + Math.cos(ang) * 14, y + Math.sin(ang) * 14, ang, 4, 2, steel, "#ffffff"); R(c, x + Math.cos(ang) * 13 - 1, y + Math.sin(ang) * 13 - 1, 3, 2, L.c3); }
}
function bow(c: C, x: number, y: number, L: Look, side: boolean) {
  const col = shade(L.c3, 0.8);
  for (let i = -7; i <= 7; i++) { const bx = x + (side ? Math.round(2.4 - (i * i) / 18) : 0), by = y + i; R(c, bx, by, 1, 1, col); }
  if (side) R(c, x - 1, y - 7, 1, 15, "#f4f0e0");
}
export function drawFrame(c: C, ox: number, oy: number, L: Look, dir: Dir, f: number, wt: WeaponType) {
  const p = pose(f, dir, wt), tall = L.tall || 0;
  const cx = ox + 20, base = oy + 42;
  const skinD = shade(L.skin, 0.82), c1D = shade(L.c1, 0.72), c1L = shade(L.c1, 1.15), hairD = shade(L.hair, 0.72), hairL = shade(L.hair, 1.2);
  const legH = 6 + tall - p.tuck, legTop = base - legH - (p.swim ? 0 : 0), torsoTop = legTop - 8 + p.bob, headTop = torsoTop - 11, hx = cx + p.lean;
  const climb = f === 12 || f === 13, D: Dir = climb ? 1 : dir;
  const hand = (h: [number, number]) => [cx + h[0], torsoTop + 3 + h[1]];
  // glider
  if (p.glide) { for (let i = 0; i < 15; i++) { const w = 15 - i; R(c, cx - w, headTop - 7 + Math.floor(i / 3), w * 2, 1, i < 2 ? L.c3 : i % 5 === 0 ? shade(L.c2, 0.85) : L.c2); } R(c, cx - 1, headTop - 5, 2, 6, "#6a5a4a"); }
  // back layer: cape, long hair (front view), weapons on back
  const backW = () => {
    if (p.wShow !== "back") return;
    if (wt === "claymore") weaponDraw(c, wt, cx + (D === 2 ? -5 : 4), torsoTop + 7, -2.1, L);
    else if (wt === "bow") { if (D === 1) { for (let i = -6; i <= 6; i++) R(c, cx - 1 + Math.round(Math.abs(i) / 3), torsoTop + 3 + i, 1, 1, shade(L.c3, 0.8)); } else bow(c, cx + (D === 2 ? -5 : 5), torsoTop + 3, L, false); }
    else if (wt === "polearm" || wt === "sword") line(c, cx + (D === 2 ? -4 : 4), torsoTop + 9, -2.0, wt === "polearm" ? 18 : 10, 1, wt === "polearm" ? "#8a6a4a" : "#dfe6f2");
  };
  if (D !== 1) backW();
  if (L.cape && D !== 0) { const cw = D === 2 ? 5 : 10; R(c, D === 2 ? cx - 6 : cx - 5, torsoTop + 1, cw, 10 + tall, shade(L.c2 === "#ffffff" ? L.c3 : L.c2, 0.75)); }
  if (L.cape && D === 0) { R(c, cx - 7, torsoTop + 1, 2, 9, shade(L.c2, 0.7)); R(c, cx + 5, torsoTop + 1, 2, 9, shade(L.c2, 0.7)); }
  const longBack = L.style === "long" || L.style === "braid" && D === 1;
  if (L.style === "long" && D !== 1) { const x0 = D === 2 ? hx - 6 : hx - 7, w = D === 2 ? 6 : 14; R(c, x0, headTop + 3, w, 15, hairD); }
  if (L.style === "twin" && D === 0) { R(c, hx - 9, headTop + 4, 3, 11, L.hair); R(c, hx + 6, headTop + 4, 3, 11, L.hair); R(c, hx - 9, headTop + 4, 1, 11, hairD); R(c, hx + 8, headTop + 4, 1, 11, hairD); }
  if (L.style === "twin" && D === 2) { R(c, hx - 8, headTop + 4, 3, 11, hairD); }
  if (L.style === "ponytail" && D === 2) { R(c, hx - 9, headTop + 3, 4, 3, L.hair); R(c, hx - 10, headTop + 5, 3, 8, hairD); }
  if (L.style === "ponytail" && D === 0) { R(c, hx + 5, headTop + 2, 3, 3, hairD); }
  // back arm (side view)
  const arm = (h: [number, number], col: string, sleeve: string, sx: number) => {
    const [hx2, hy2] = hand(h); const sy = torsoTop + 1;
    const n = Math.max(Math.abs(hx2 - sx), Math.abs(hy2 - sy), 1);
    for (let i = 0; i <= n; i++) { const t = i / n, x = sx + (hx2 - sx) * t, y = sy + (hy2 - sy) * t; R(c, x - 1, y, 2, 2, t > 0.75 ? col : sleeve); }
    return [hx2, hy2];
  };
  if (D === 2 && !p.swim) arm(p.hand2, skinD, c1D, cx);
  // legs
  if (!p.swim) {
    const leg = (x: number, lift: number, col: string, shoe: string) => { R(c, x, legTop, 3, legH - lift, col); R(c, x, base - 2 - lift, 3, 2, shoe); };
    const pants = L.skirt ? L.skin : shade(L.c1, 0.6), shoe = shade(L.c3, 0.55);
    if (D === 2) { leg(cx - 2 + p.sR, p.lR, shade(pants, 0.8), shade(shoe, 0.8)); leg(cx - 1 + p.sL, p.lL, pants, shoe); }
    else { leg(cx - 4, p.lL, pants, shoe); leg(cx + 1, p.lR, pants, shoe); }
  }
  // torso
  const tw = D === 2 ? 7 : 10, tx = D === 2 ? cx - 3 + p.lean : cx - 5 + p.lean;
  R(c, tx, torsoTop, tw, 8, L.c1); R(c, tx, torsoTop, tw, 1, c1L); R(c, tx + tw - 2, torsoTop + 1, 2, 7, c1D);
  if (D === 0) { R(c, cx - 1 + p.lean, torsoTop, 2, 5, L.c2); R(c, cx - 2 + p.lean, torsoTop, 4, 1, L.c2); }
  if (D === 2) R(c, tx + tw - 3, torsoTop, 2, 4, L.c2);
  R(c, tx, torsoTop + 6, tw, 1, L.c3);
  if (L.skirt && !p.swim) { R(c, tx - 1, torsoTop + 7, tw + 2, 4, L.c2); R(c, tx - 1, torsoTop + 10, tw + 2, 1, shade(L.c2, 0.75)); }
  else if (!p.swim) R(c, tx, torsoTop + 7, tw, 2, c1D);
  if (L.cape && D === 1) { R(c, cx - 5, torsoTop, 10, 11 + tall, shade(L.c2 === "#ffffff" ? L.c3 : L.c2, 0.85)); R(c, cx - 5, torsoTop, 10, 1, L.c3); }
  if (L.style === "long" && D === 1) { R(c, hx - 6, headTop + 6, 12, 13, L.hair); R(c, hx - 6, headTop + 17, 12, 2, hairD); }
  if (L.style === "braid") { if (D === 1) { for (let i = 0; i < 6; i++) R(c, hx - 1 + (i % 2), headTop + 9 + i * 2, 2, 2, i % 2 ? hairD : L.hair); } else if (D === 0) { for (let i = 0; i < 5; i++) R(c, hx + 4 + (i % 2), headTop + 8 + i * 2, 2, 2, i % 2 ? hairD : L.hair); } }
  if (L.style === "ponytail" && D === 1) { R(c, hx - 2, headTop + 7, 4, 10, L.hair); R(c, hx - 1, headTop + 16, 2, 2, hairD); }
  if (L.style === "twin" && D === 1) { R(c, hx - 9, headTop + 4, 3, 11, L.hair); R(c, hx + 6, headTop + 4, 3, 11, L.hair); }
  if (D === 1) backW();
  // head
  const hw = D === 2 ? 11 : 12, hxx = D === 2 ? hx - 5 : hx - 6;
  R(c, hxx, headTop, hw, 10, L.skin); R(c, hxx + 1, headTop + 10, hw - 2, 1, skinD); R(c, hxx + hw - 2, headTop + 2, 1, 7, skinD);
  if (D === 0) {
    const ey = headTop + 6;
    if (p.eyes === "open") { for (const ex of [hx - 4, hx + 2]) { R(c, ex, ey - 1, 2, 3, L.eye); R(c, ex, ey - 1, 2, 1, shade(L.eye, 0.45)); R(c, ex + 1, ey, 1, 1, "#ffffff"); R(c, ex, ey + 1, 1, 1, shade(L.eye, 1.3)); } }
    else { R(c, hx - 4, ey + 1, 2, 1, "#3a2a2a"); R(c, hx + 2, ey + 1, 2, 1, "#3a2a2a"); }
    R(c, hx - 5, ey + 2, 1, 1, shade(L.skin, 0.88)); R(c, hx + 4, ey + 2, 1, 1, shade(L.skin, 0.88)); R(c, hx - 1, ey + 3, 2, 1, shade(L.skin, 0.75));
  }
  if (D === 2) { const ey = headTop + 6; if (p.eyes === "open") { R(c, hx + 2, ey - 1, 2, 3, L.eye); R(c, hx + 2, ey - 1, 2, 1, shade(L.eye, 0.45)); R(c, hx + 3, ey, 1, 1, "#ffffff"); } else R(c, hx + 2, ey + 1, 2, 1, "#3a2a2a"); R(c, hx + 5, ey + 2, 1, 1, skinD); }
  // hair
  const cap = (x: number, y: number, w: number, rows: number) => {
    R(c, x + 2, y - 1, w - 4, 1, L.hair); R(c, x, y, w, 1, L.hair); R(c, x - 1, y + 1, w + 2, rows - 1, L.hair);
    R(c, x + 2, y - 1, Math.max(2, w / 3), 1, hairL); R(c, x + 1, y, 3, 1, hairL); R(c, x + 4, y, 2, 1, hairL);
  };
  if (D === 0) {
    cap(hxx, headTop - 1, hw, 4);
    const fr = [3, 2, 4, 3, 1, 3, 4, 2, 3, 1, 4, 3];
    for (let i = 0; i < hw; i++) R(c, hxx + i, headTop + 3, 1, Math.min(fr[(i + (L.hair.charCodeAt(2) % 4)) % 12] - 1, 2), i % 3 === 1 ? hairD : L.hair);
    const sideL = L.style === "short" || L.style === "spiky" ? 6 : L.style === "bob" ? 10 : 9;
    R(c, hxx - 1, headTop + 1, 2, sideL, L.hair); R(c, hxx + hw - 1, headTop + 1, 2, sideL, hairD); R(c, hxx - 1, headTop + sideL, 1, 1, hairD);
  } else if (D === 1) {
    const rows = L.style === "short" || L.style === "spiky" ? 10 : 12;
    cap(hxx, headTop - 1, hw, rows);
    for (let i = 2; i < hw; i += 3) R(c, hxx + i, headTop + 4, 1, rows - 5, hairD);
    R(c, hxx + hw - 1, headTop + 1, 2, rows - 2, hairD);
    for (let i = 0; i < hw + 2; i += 2) R(c, hxx - 1 + i, headTop + rows - 1, 1, 1, hairD);
  } else {
    cap(hxx, headTop - 1, hw, 4);
    const back = L.style === "short" || L.style === "spiky" ? 7 : 10;
    R(c, hxx - 1, headTop, 6, back, L.hair); R(c, hxx - 1, headTop + 3, 1, back - 3, hairD); R(c, hxx + 2, headTop + 4, 1, back - 5, hairD);
    R(c, hxx + hw - 4, headTop + 3, 3, 1, L.hair); R(c, hxx + hw - 1, headTop + 3, 1, 2, L.hair);
    if (L.style === "bob") R(c, hxx - 1, headTop + 3, 7, 8, L.hair);
  }
  if (L.style === "ponytail" && D === 1) { R(c, hx - 2, headTop + 8, 4, 9, L.hair); R(c, hx - 1, headTop + 8, 1, 8, hairL); R(c, hx - 1, headTop + 16, 2, 2, hairD); R(c, hx - 2, headTop + 7, 4, 1, L.c3); }
  if (L.style === "spiky") for (let i = 0; i < hw; i += 3) R(c, hxx + i, headTop - 3 + (i % 2), 2, 3, L.hair);
  if (L.style === "bun") { R(c, hx - 2, headTop - 4, 5, 4, L.hair); R(c, hx - 1, headTop - 4, 3, 1, hairL); }
  // accessory
  const acc = L.acc;
  if (acc === "hat") { R(c, hxx - 3, headTop - 1, hw + 6, 2, L.c3 === "#ffffff" ? L.c1 : shade(L.c1, 0.9)); R(c, hxx, headTop - 6, hw, 5, shade(L.c1, 0.9)); R(c, hxx, headTop - 3, hw, 1, L.c3); }
  if (acc === "horns") { R(c, hxx, headTop - 3, 2, 3, "#f4ecd8"); R(c, hxx + hw - 2, headTop - 3, 2, 3, "#f4ecd8"); R(c, hxx - 1, headTop - 4, 1, 2, "#f4ecd8"); R(c, hxx + hw, headTop - 4, 1, 2, "#f4ecd8"); }
  if (acc === "ears") { R(c, hxx, headTop - 4, 3, 4, L.hair); R(c, hxx + hw - 3, headTop - 4, 3, 4, L.hair); R(c, hxx + 1, headTop - 3, 1, 2, "#ffd0d0"); R(c, hxx + hw - 2, headTop - 3, 1, 2, "#ffd0d0"); }
  if (acc === "hood") { R(c, hxx - 2, headTop - 2, hw + 4, 3, L.c1); R(c, hxx - 2, headTop, 2, 10, L.c1); R(c, hxx + hw, headTop, 2, 10, c1D); if (D === 1) R(c, hxx - 1, headTop - 2, hw + 2, 12, L.c1); }
  if (acc === "band") R(c, hxx - 1, headTop + 1, hw + 2, 1, L.c3);
  if (acc === "crown") { R(c, hx - 3, headTop - 3, 6, 2, "#ffd84a"); R(c, hx - 3, headTop - 4, 1, 1, "#ffd84a"); R(c, hx, headTop - 5, 1, 2, "#ffd84a"); R(c, hx + 2, headTop - 4, 1, 1, "#ffd84a"); R(c, hx, headTop - 3, 1, 1, "#ff5a8a"); }
  if (acc === "flower") { R(c, hxx + hw - 3, headTop, 3, 3, "#ffffff"); R(c, hxx + hw - 2, headTop + 1, 1, 1, "#ffd84a"); }
  if (acc === "mask" && D !== 1) { const mx = D === 2 ? hx - 1 : hxx + 1, mw = D === 2 ? 6 : hw - 2; R(c, mx, headTop + 8, mw, 3, shade(L.c1, 1.3)); }
  // front arms + weapon
  if (D !== 2 && !p.swim) { arm(p.hand2, L.skin, L.c1, cx - 6); }
  const [hx1, hy1] = p.swim && D !== 2 ? hand(p.hand) : arm(p.hand, L.skin, L.c1, D === 2 ? cx + 1 : cx + 5);
  if (p.swim && D !== 2) { arm(p.hand, L.skin, L.c1, cx + 5); arm(p.hand2, L.skin, L.c1, cx - 6); }
  if (p.wShow === "hand") weaponDraw(c, wt, hx1, hy1 + 1, p.wAng, L);
  if (p.wShow === "aim") bow(c, hx1, hy1, L, D === 2);
  if (p.wShow === "float") {
    const fx = (D === 2 ? hx1 + 2 : cx + 9), fy = torsoTop - 2 + (f % 2);
    R(c, fx - 2, fy - 3, 5, 6, L.c3); R(c, fx - 1, fy - 2, 3, 4, shade(L.c3, 1.4)); R(c, fx, fy - 4, 1, 1, "#ffffff");
  }
}
const cache = new Map<string, HTMLCanvasElement>();
export function buildAtlas(key: string, L: Look, wt: WeaponType): HTMLCanvasElement {
  if (cache.has(key)) return cache.get(key)!;
  const cv = document.createElement("canvas"); cv.width = FW * NF; cv.height = FH * 3;
  const c = cv.getContext("2d", { willReadFrequently: true })!;
  for (let d = 0 as Dir; d < 3; d++) for (let f = 0; f < NF; f++) { drawFrame(c, f * FW, d * FH, L, d as Dir, f, wt); outline(c, f * FW, d * FH, FW, FH, "#1c1426"); }
  cache.set(key, cv); return cv;
}
export function portrait(L: Look, wt: WeaponType, scale = 4, key = ""): HTMLCanvasElement {
  const at = buildAtlas(key || JSON.stringify(L) + wt, L, wt);
  const cv = document.createElement("canvas"); cv.width = 24 * scale; cv.height = 24 * scale;
  const c = cv.getContext("2d")!; c.imageSmoothingEnabled = false;
  c.drawImage(at, 8, 6, 24, 24, 0, 0, 24 * scale, 24 * scale);
  return cv;
}
export function fullBody(L: Look, wt: WeaponType, scale = 4, key = "", frame = 0): HTMLCanvasElement {
  const at = buildAtlas(key || JSON.stringify(L) + wt, L, wt);
  const cv = document.createElement("canvas"); cv.width = FW * scale; cv.height = FH * scale;
  const c = cv.getContext("2d")!; c.imageSmoothingEnabled = false; c.drawImage(at, frame * FW, 0, FW, FH, 0, 0, FW * scale, FH * scale);
  return cv;
}

export function weaponIcon(wt: WeaponType, color: string, scale = 3): HTMLCanvasElement {
  const cv = document.createElement("canvas"); cv.width = cv.height = 24; const c = cv.getContext("2d", { willReadFrequently: true })!;
  const L: any = { c3: color };
  if (wt === "bow") { for (let i = -9; i <= 9; i++) { c.fillStyle = shade(color, 0.85); c.fillRect(Math.round(12 + 4 - (i * i) / 14), 12 + i, 2, 1); } c.fillStyle = "#f4f0e0"; c.fillRect(9, 3, 1, 19); }
  else if (wt === "catalyst") { c.fillStyle = color; c.fillRect(5, 4, 14, 16); c.fillStyle = shade(color, 1.4); c.fillRect(7, 6, 10, 12); c.fillStyle = shade(color, 0.6); c.fillRect(11, 4, 2, 16); c.fillStyle = "#fff"; c.fillRect(14, 8, 2, 2); }
  else weaponDraw(c, wt, 5, 19, -Math.PI / 4, L);
  outline(c, 0, 0, 24, 24, "#1c1426");
  const o = document.createElement("canvas"); o.width = o.height = 24 * scale; const oc = o.getContext("2d")!; oc.imageSmoothingEnabled = false; oc.drawImage(cv, 0, 0, 24 * scale, 24 * scale); return o;
}
