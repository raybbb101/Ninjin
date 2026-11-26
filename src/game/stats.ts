import { charById, type CharDef } from "../data/characters";
import { weaponById, type WeaponDef } from "../data/weapons";
import { MAIN_MAX, SETS, SLOTS } from "../data/relics";
import { RESONANCE, type El, type DmgEl } from "../data/elements";
import type { CharState, WeaponInst, RelicInst } from "./state";
import { S, relicByUid } from "./state";

export interface Stats { hp: number; atk: number; def: number; em: number; cr: number; cd: number; er: number; heal: number; dmg: Record<string, number>; baseAtk: number; cdr: number }
export const ASC_CAP = [20, 40, 50, 60, 70, 80, 90];
const ASC_BASE = [0, 0.38, 0.65, 1.0, 1.28, 1.55, 1.83];
const ASC_STAT = [0, 0, 0.25, 0.5, 0.5, 0.75, 1];
const W_ASC = [0, 0.65, 1.3, 1.95, 2.6, 3.25, 3.9];
export const weaponMaxAsc = (w: WeaponDef) => (w.rarity <= 2 ? 4 : 6);
export function charBase(def: CharDef, lvl: number, asc: number) {
  const g = 1 + (lvl - 1) * 0.085 + ASC_BASE[asc];
  return { hp: def.hp * g, atk: def.atk * g, def: def.def * g };
}
export function weaponAtk(w: WeaponDef, lvl: number, asc: number) { return w.atk * (1 + (lvl - 1) * 0.11) + w.atk * W_ASC[asc]; }
export function weaponSub(w: WeaponDef, lvl: number) { return w.sub ? w.sub.v * (0.22 + 0.78 * (lvl - 1) / 89) : 0; }
export function relicMain(r: RelicInst) { const rm = r.rarity >= 5 ? 1 : r.rarity === 4 ? 0.8 : r.rarity === 3 ? 0.6 : 0.45; const maxL = relicMaxLvl(r.rarity); return MAIN_MAX[r.main] * rm * (0.15 + 0.85 * (r.lvl / maxL)); }
export const relicMaxLvl = (rar: number) => (rar >= 5 ? 20 : rar === 4 ? 16 : rar === 3 ? 12 : 8);
export const talentMult = (lvl: number) => 1 + (lvl - 1) * 0.1;
export function talentLevels(c: CharState) { return [c.tal[0], c.tal[1] + (c.cons >= 3 ? 3 : 0), c.tal[2] + (c.cons >= 5 ? 3 : 0)]; }
export function partyResonance(party: string[]): El[] {
  const cnt: Record<string, number> = {};
  for (const id of party) { const e = charById(id).el; cnt[e] = (cnt[e] || 0) + 1; }
  return Object.keys(cnt).filter((k) => cnt[k] >= 2) as El[];
}
export function setCounts(c: CharState) {
  const cnt: Record<string, number> = {};
  for (const s of SLOTS) { const r = relicByUid(c.relics[s]); if (r) cnt[r.set] = (cnt[r.set] || 0) + 1; }
  return cnt;
}
export function computeStats(c: CharState, w: WeaponInst | undefined, relics: (RelicInst | undefined)[], party: string[] = S.party): Stats {
  const def = charById(c.id), b = charBase(def, c.lvl, c.asc);
  const add: Record<string, number> = {};
  const A = (k: string, v: number) => (add[k] = (add[k] || 0) + v);
  A(def.asc.k, def.asc.v * ASC_STAT[c.asc]);
  let wAtk = 0;
  if (w) {
    const wd = weaponById(w.id); wAtk = weaponAtk(wd, w.lvl, w.asc);
    if (wd.sub) A(wd.sub.k, weaponSub(wd, w.lvl));
    if (wd.eff) for (const k in wd.eff) A(k, wd.eff[k] * (1 + 0.25 * (w.ref - 1)));
  }
  const cnt: Record<string, number> = {};
  for (const r of relics) {
    if (!r) continue; A(r.main, relicMain(r)); for (const s of r.subs) A(s.k, s.v);
    cnt[r.set] = (cnt[r.set] || 0) + 1;
  }
  for (const s of SETS) { if ((cnt[s.id] || 0) >= 2) for (const k in s.b2) A(k, s.b2[k]); if ((cnt[s.id] || 0) >= 4) for (const k in s.b4) A(k, s.b4[k]); }
  let cdr = 0;
  for (const e of partyResonance(party)) {
    if (e === "fire") A("atkP", 0.25); if (e === "water") { A("hpP", 0.25); A("heal", 0.15); } if (e === "volt") A("er", 0.3);
    if (e === "frost") A("cr", 0.15); if (e === "star") cdr += 0.15; if (e === "shadow") A("all", 0.15);
  }
  const baseAtk = b.atk + wAtk;
  const dmg: Record<string, number> = {};
  for (const k of ["fire", "water", "volt", "frost", "star", "shadow", "phys"]) dmg[k] = (add[k] || 0) + (k !== "phys" ? add.el || 0 : 0) + (add.all || 0);
  for (const k of ["na", "ca", "skill", "burst", "react", "plunge"]) dmg[k] = add[k] || 0;
  return {
    hp: b.hp * (1 + (add.hpP || 0)) + (add.hp || 0), atk: baseAtk * (1 + (add.atkP || 0)) + (add.atk || 0), def: b.def * (1 + (add.defP || 0)) + (add.def || 0),
    em: add.em || 0, cr: 0.05 + (add.cr || 0), cd: 0.5 + (add.cd || 0), er: 1 + (add.er || 0), heal: add.heal || 0, dmg, baseAtk, cdr,
  };
}
export function statsOf(id: string, party?: string[]) { const c = S.chars[id]; return computeStats(c, S.weapons.find((w) => w.uid === c.weapon), SLOTS.map((s) => relicByUid(c.relics[s])), party); }
export const ELEMENT_KEYS: DmgEl[] = ["fire", "water", "volt", "frost", "star", "shadow", "phys"];
