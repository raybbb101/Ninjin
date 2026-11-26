import { CHARS, charById } from "../data/characters";
import { WEAPONS, weaponById } from "../data/weapons";
import { SLOTS, type Slot, MAIN_POOL, SUB_ROLL, SETS } from "../data/relics";
import { Rng } from "../core/math";
import { bus } from "../core/events";

export interface CharState { id: string; lvl: number; exp: number; asc: number; cons: number; tal: [number, number, number]; weapon: number; relics: Partial<Record<Slot, number>> }
export interface WeaponInst { uid: number; id: string; lvl: number; exp: number; asc: number; ref: number }
export interface RelicInst { uid: number; set: string; slot: Slot; rarity: number; lvl: number; exp: number; main: string; subs: { k: string; v: number }[]; lock?: boolean }
export interface Save {
  v: number; created: number; name: string;
  chars: Record<string, CharState>; party: string[]; weapons: WeaponInst[]; relics: RelicInst[]; items: Record<string, number>;
  ar: number; arExp: number; opened: Record<string, number>; wps: Record<string, 1>; shards: Record<string, 1>; statues: Record<string, number>; offered: number; stamMax: number;
  quest: { main: number; step: number; done: boolean }; flags: Record<string, any>;
  daily: { date: string; tasks: { type: string; text: string; n: number; goal: number }[]; claimed: boolean[]; bonus: boolean };
  gacha: { p5: Record<string, number>; p4: Record<string, number>; g: Record<string, boolean>; hist: { t: number; b: string; id: string; r: number }[] };
  pos: { x: number; y: number; z: number }; camps: Record<string, number>; bosses: Record<string, number>; tower: Record<string, number>;
  mail: Record<string, number>;
  settings: { quality: "low" | "mid" | "high" | "auto"; fps: boolean; sfx: boolean; tilt: boolean; name: string };
  seq: number; stats: { kills: number; reacts: number; play: number };
}
const KEY = "ninjin.save.v1";
export let S: Save;
export const uid = () => ++S.seq;
export function newWeapon(id: string, lvl = 1): WeaponInst { const asc = lvl >= 80 ? 6 : lvl >= 70 ? 5 : lvl >= 60 ? 4 : lvl >= 50 ? 3 : lvl >= 40 ? 2 : lvl >= 20 ? 1 : 0; const w = { uid: uid(), id, lvl, exp: 0, asc, ref: 1 }; S.weapons.push(w); return w; }
export function addChar(id: string): { isNew: boolean; cons: number } {
  const ex = S.chars[id];
  if (ex) { const before = ex.cons; if (ex.cons < 6) ex.cons++; bus.emit("chars"); return { isNew: false, cons: before < 6 ? ex.cons : -1 }; }
  const def = charById(id);
  const starter = WEAPONS.find((w) => w.type === def.weapon && w.rarity === 1)!;
  const w = newWeapon(starter.id, 1);
  S.chars[id] = { id, lvl: 1, exp: 0, asc: 0, cons: 0, tal: [1, 1, 1], weapon: w.uid, relics: {} };
  if (S.party.length < 4 && !S.party.includes(id)) S.party.push(id);
  bus.emit("chars");
  return { isNew: true, cons: 0 };
}
export function addItem(id: string, n = 1) { S.items[id] = (S.items[id] || 0) + n; bus.emit("items"); }
export function useItem(id: string, n = 1) { if ((S.items[id] || 0) < n) return false; S.items[id] -= n; bus.emit("items"); return true; }
export const has = (id: string) => S.items[id] || 0;
export function rollRelic(rng: Rng, rarity: number, set?: string, slot?: Slot): RelicInst {
  slot = slot || rng.pick([...SLOTS]); set = set || rng.pick(SETS).id;
  const main = rng.pick(MAIN_POOL[slot]);
  const keys = Object.keys(SUB_ROLL).filter((k) => k !== main);
  const n = rarity >= 5 ? (rng.chance(0.3) ? 4 : 3) : rarity === 4 ? (rng.chance(0.3) ? 3 : 2) : rarity === 3 ? (rng.chance(0.3) ? 2 : 1) : 1;
  const subs: { k: string; v: number }[] = [];
  const rm = rarity >= 5 ? 1 : rarity === 4 ? 0.8 : 0.6;
  for (let i = 0; i < n; i++) { const k = rng.pick(keys.filter((x) => !subs.some((s) => s.k === x))); subs.push({ k, v: SUB_ROLL[k] * rm * rng.range(0.7, 1) }); }
  const r: RelicInst = { uid: uid(), set, slot, rarity, lvl: 0, exp: 0, main, subs };
  S.relics.push(r); return r;
}
function fresh(): Save {
  return {
    v: 1, created: Date.now(), name: "旅人", chars: {}, party: [], weapons: [], relics: [], items: { coin: 50000, gem: 1600, ticket_s: 20, ticket_g: 5, food1: 10, food2: 3, food3: 3, exp1: 20, exp2: 10, ore1: 20 },
    ar: 1, arExp: 0, opened: {}, wps: {}, shards: {}, statues: {}, offered: 0, stamMax: 240,
    quest: { main: 0, step: 0, done: false }, flags: {},
    daily: { date: "", tasks: [], claimed: [], bonus: false },
    gacha: { p5: { standard: 0, event: 0, weapon: 0 }, p4: { standard: 0, event: 0, weapon: 0 }, g: { event: false, weapon: false }, hist: [] },
    pos: { x: 0, y: 0, z: 0 }, camps: {}, bosses: {}, tower: {}, mail: {},
    settings: { quality: "auto", fps: false, sfx: true, tilt: true, name: "旅人" },
    seq: 0, stats: { kills: 0, reacts: 0, play: 0 },
  };
}
export function loadSave(): boolean {
  try { const raw = localStorage.getItem(KEY); if (raw) { S = Object.assign(fresh(), JSON.parse(raw)); S.mail ||= {}; return true; } } catch { }
  S = fresh(); addChar("sora"); return false;
}
let dirty = false;
export function markDirty() { dirty = true; }
export function persist(force = false) {
  if (!dirty && !force) return; dirty = false;
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { console.warn("save failed", e); }
}
export function exportSave() { return btoa(unescape(encodeURIComponent(JSON.stringify(S)))); }
export function importSave(code: string) { const d = JSON.parse(decodeURIComponent(escape(atob(code.trim())))); if (!d || !d.chars) throw new Error("bad"); localStorage.setItem(KEY, JSON.stringify(d)); }
export function resetSave() { localStorage.removeItem(KEY); }
export const weaponOf = (c: CharState) => S.weapons.find((w) => w.uid === c.weapon)!;
export const relicByUid = (u?: number) => (u ? S.relics.find((r) => r.uid === u) : undefined);
export const ownerOfWeapon = (u: number) => Object.values(S.chars).find((c) => c.weapon === u);
export const ownerOfRelic = (u: number) => Object.values(S.chars).find((c) => Object.values(c.relics).includes(u));
export const allChars = () => CHARS.filter((c) => S.chars[c.id]);
export { weaponById, charById };
