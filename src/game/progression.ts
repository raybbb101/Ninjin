import { charById, CHARS } from "../data/characters";
import { weaponById } from "../data/weapons";
import { DROP_FAMILY, itemById } from "../data/items";
import { SUB_ROLL } from "../data/relics";
import { Rng } from "../core/math";
import { S, has, useItem, addItem, markDirty, type CharState, type WeaponInst, type RelicInst, rollRelic } from "./state";
import { ASC_CAP, relicMaxLvl, weaponMaxAsc } from "./stats";
import { bus } from "../core/events";

export const charExpNeed = (l: number) => Math.round(200 + l * l * 14);
export const weaponExpNeed = (l: number, rar: number) => Math.round((60 + l * l * 4) * (0.6 + rar * 0.12));
export const relicExpNeed = (l: number) => 200 + l * l * 30;
const FAMS = ["puff", "humanoid", "golem", "wisp"];
export const charFamily = (id: string) => FAMS[CHARS.findIndex((c) => c.id === id) % 4];
export const charBook = (id: string) => ["a", "b", "c"][CHARS.findIndex((c) => c.id === id) % 3];
export type Cost = Record<string, number>;
export function canPay(c: Cost) { return Object.entries(c).every(([k, v]) => has(k) >= v); }
export function pay(c: Cost) { if (!canPay(c)) return false; for (const [k, v] of Object.entries(c)) useItem(k, v); return true; }
export function ascCost(ch: CharState): Cost {
  const d = charById(ch.id), f = DROP_FAMILY[charFamily(ch.id)], p = ch.asc + 1;
  const drops = [[0, 3], [0, 15], [1, 12], [1, 18], [2, 12], [2, 24]][p - 1];
  return { coin: [20000, 40000, 60000, 80000, 100000, 120000][p - 1], ["gem_" + d.el]: [1, 3, 6, 10, 15, 20][p - 1], [f[drops[0]]]: drops[1] };
}
export function talentCost(ch: CharState, idx: number): Cost {
  const l = ch.tal[idx] + 1, b = charBook(ch.id), f = DROP_FAMILY[charFamily(ch.id)];
  const tier = l <= 3 ? 1 : l <= 6 ? 2 : 3, n = [0, 0, 3, 6, 3, 4, 6, 4, 6, 9, 12][l];
  return { coin: 12500 * l, [`book_${b}${tier}`]: n, [f[tier - 1]]: Math.ceil(n * 1.5) };
}
export const talentReqAsc = (l: number) => [0, 0, 2, 3, 4, 4, 5, 5, 6, 6, 6][l];
export function weaponAscCost(w: WeaponInst): Cost {
  const d = weaponById(w.id), p = w.asc + 1, f = DROP_FAMILY[FAMS[(d.id.charCodeAt(2) + d.rarity) % 4]];
  const drops = [[0, 3], [0, 10], [1, 8], [1, 14], [2, 8], [2, 14]][p - 1];
  return { coin: [5000, 15000, 20000, 30000, 35000, 45000][p - 1] * (d.rarity / 4), [f[drops[0]]]: Math.ceil(drops[1] * (d.rarity / 5)), ore2: p * 2 };
}
export function addCharExp(ch: CharState, exp: number) {
  const cap = ASC_CAP[ch.asc];
  ch.exp += exp;
  while (ch.lvl < cap && ch.exp >= charExpNeed(ch.lvl)) { ch.exp -= charExpNeed(ch.lvl); ch.lvl++; }
  if (ch.lvl >= cap) ch.exp = 0;
  markDirty(); bus.emit("chars");
}
export function feedExp(ch: CharState, itemId: string, n: number) {
  const it = itemById(itemId); n = Math.min(n, has(itemId)); if (n <= 0) return false;
  const coin = Math.round(it.v! * n * 0.2); if (has("coin") < coin) return false;
  useItem(itemId, n); useItem("coin", coin); addCharExp(ch, it.v! * n); return true;
}
export function ascend(ch: CharState) {
  if (ch.asc >= 6 || ch.lvl < ASC_CAP[ch.asc]) return false;
  if (!pay(ascCost(ch))) return false; ch.asc++; markDirty(); bus.emit("chars"); return true;
}
export function upTalent(ch: CharState, idx: number) {
  const l = ch.tal[idx] + 1; if (l > 10 || ch.asc < talentReqAsc(l)) return false;
  if (!pay(talentCost(ch, idx))) return false; ch.tal[idx] = l; markDirty(); bus.emit("chars"); return true;
}
export function addWeaponExp(w: WeaponInst, exp: number) {
  const d = weaponById(w.id), cap = ASC_CAP[w.asc];
  w.exp += exp; while (w.lvl < cap && w.exp >= weaponExpNeed(w.lvl, d.rarity)) { w.exp -= weaponExpNeed(w.lvl, d.rarity); w.lvl++; }
  if (w.lvl >= cap) w.exp = 0; markDirty(); bus.emit("items");
}
export function feedOre(w: WeaponInst, itemId: string, n: number) {
  const it = itemById(itemId); n = Math.min(n, has(itemId)); if (n <= 0) return false;
  const coin = Math.round(it.v! * n * 0.1); if (has("coin") < coin) return false;
  useItem(itemId, n); useItem("coin", coin); addWeaponExp(w, it.v! * n); return true;
}
export function weaponAscend(w: WeaponInst) {
  const d = weaponById(w.id); if (w.asc >= weaponMaxAsc(d) || w.lvl < ASC_CAP[w.asc]) return false;
  if (!pay(weaponAscCost(w))) return false; w.asc++; markDirty(); return true;
}
export function refine(w: WeaponInst, fodder: WeaponInst) {
  if (w.ref >= 5 || fodder.id !== w.id || fodder.uid === w.uid) return false;
  S.weapons = S.weapons.filter((x) => x.uid !== fodder.uid); w.ref++; markDirty(); return true;
}
export function relicFodderExp(r: RelicInst) { return [0, 100, 200, 420, 1260, 3780][r.rarity] + Math.round(r.exp * 0.8 + totalRelicExp(r) * 0.8); }
function totalRelicExp(r: RelicInst) { let s = 0; for (let l = 0; l < r.lvl; l++) s += relicExpNeed(l); return s; }
export function upgradeRelic(r: RelicInst, fodder: RelicInst[]) {
  const exp = fodder.reduce((a, f) => a + relicFodderExp(f), 0);
  if (has("coin") < exp) return false;
  useItem("coin", exp);
  const ids = new Set(fodder.map((f) => f.uid));
  S.relics = S.relics.filter((x) => !ids.has(x.uid));
  r.exp += exp; const maxL = relicMaxLvl(r.rarity), rng = new Rng(Date.now());
  while (r.lvl < maxL && r.exp >= relicExpNeed(r.lvl)) {
    r.exp -= relicExpNeed(r.lvl); r.lvl++;
    if (r.lvl % 4 === 0) {
      const rm = r.rarity >= 5 ? 1 : r.rarity === 4 ? 0.8 : 0.6;
      if (r.subs.length < 4) { const keys = Object.keys(SUB_ROLL).filter((k) => k !== r.main && !r.subs.some((s) => s.k === k)); const k = rng.pick(keys); r.subs.push({ k, v: SUB_ROLL[k] * rm * rng.range(0.7, 1) }); }
      else { const s = rng.pick(r.subs); s.v += SUB_ROLL[s.k] * rm * rng.range(0.7, 1); }
    }
  }
  if (r.lvl >= maxL) r.exp = 0; markDirty(); return true;
}
export function arExpNeed(ar: number) { return 375 + ar * ar * 25; }
export function worldLevel() { return Math.min(8, Math.floor(Math.max(0, S.ar - 12) / 6)); }
export function addAR(n: number) {
  S.arExp += n; let up = false;
  while (S.ar < 60 && S.arExp >= arExpNeed(S.ar)) { S.arExp -= arExpNeed(S.ar); S.ar++; up = true; addItem("gem", 60); }
  if (up) bus.emit("toast", `冒険ランクが ${S.ar} に上がった！`);
  markDirty(); bus.emit("ar");
}
export { rollRelic };
