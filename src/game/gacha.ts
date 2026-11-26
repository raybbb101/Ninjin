import { CHARS } from "../data/characters";
import { WEAPONS } from "../data/weapons";
import { ELS, type El } from "../data/elements";
import { S, addChar, newWeapon, addItem, useItem, has, markDirty } from "./state";
import { bus } from "../core/events";

// v0.4：限定・恒常の区別なし。キャラ祈願（元素ごと・★5指定）と武器祈願（★5指定）と、はじめての願い。
export type BannerId = "beginner" | "char" | "weapon";
export const BEGINNER_MAX = 50;
export const BEGINNER_POOL = () => CHARS.filter((c) => c.rarity === 5 && !c.starter).map((c) => c.id);
export const FIVE_CHARS = () => CHARS.filter((c) => c.rarity === 5 && !c.starter);
export const FIVE_WEAPONS = () => WEAPONS.filter((w) => w.rarity === 5);
export const charsOfEl = (el: El, r: number) => CHARS.filter((c) => c.el === el && c.rarity === r && !c.starter);
export const ELS_WITH_5 = () => ELS.filter((e) => charsOfEl(e, 5).length > 0);
export function beg() { const G: any = S.gacha; G.beg ||= { sel: "", n: 0, done: false }; return G.beg as { sel: string; n: number; done: boolean }; }
export interface GSel { el: El; target: Partial<Record<El, string>>; weapon: string; fate: number; month: string; sandBought: number }
export function gsel(): GSel {
  const G: any = S.gacha;
  G.sel ||= { el: "fire", target: {}, weapon: "", fate: 0, month: "", sandBought: 0 };
  for (const e of ELS_WITH_5()) if (!G.sel.target[e]) G.sel.target[e] = charsOfEl(e, 5)[0].id;
  if (!G.sel.weapon) G.sel.weapon = FIVE_WEAPONS()[0].id;
  if (!ELS_WITH_5().includes(G.sel.el)) G.sel.el = ELS_WITH_5()[0];
  return G.sel;
}
export const BANNER_INFO: Record<BannerId, { name: string; ticket: string; desc: string }> = {
  beginner: { name: "はじめての願い", ticket: "ticket_s", desc: "最大50回。50回以内に、自分で選んだ★5キャラが必ず1人手に入る！" },
  char: { name: "キャラ祈願", ticket: "ticket_g", desc: "元素ごとの祈願。キャラクターと★3武器だけが出る。欲しい★5キャラを指定できて、すり抜けたら次の★5は必ず指定キャラ！" },
  weapon: { name: "武器祈願", ticket: "ticket_g", desc: "武器だけが出る。欲しい★5武器を指定できる。すり抜けは最大2回まで、3回目の★5は必ず指定武器！" },
};
export interface Pull { kind: "char" | "weapon"; id: string; rarity: number; isNew?: boolean; cons?: number; dust: number; sand?: number; lost?: boolean }
const rnd = () => Math.random();
const pick = <T,>(a: T[]) => a[Math.floor(rnd() * a.length)];
function rate5(b: BannerId, p: number) { if (b === "beginner") return p >= BEGINNER_MAX ? 1 : 0.006 + (p >= 30 ? (p - 29) * 0.04 : 0); if (b === "weapon") return p >= 80 ? 1 : p >= 63 ? 0.007 + (p - 62) * 0.07 : 0.007; return p >= 90 ? 1 : p >= 74 ? 0.006 + (p - 73) * 0.06 : 0.006; }
export function pull(b: BannerId): Pull {
  const G = S.gacha, sel = gsel();
  G.p5[b] = (G.p5[b] || 0) + 1; G.p4[b] = (G.p4[b] || 0) + 1; if (b === "beginner") beg().n++;
  let rarity = 3;
  if (rnd() < rate5(b, G.p5[b])) rarity = 5; else if (G.p4[b] >= 10 || rnd() < (b === "weapon" ? 0.06 : 0.051)) rarity = 4;
  let kind: "char" | "weapon" = "weapon", id = "", lost = false;
  if (rarity === 5) {
    G.p5[b] = 0;
    if (b === "beginner") { id = beg().sel; kind = "char"; beg().done = true; }
    else if (b === "char") {
      kind = "char"; const target = sel.target[sel.el]!;
      if (G.g.char || rnd() < 0.5) { id = target; G.g.char = false; }
      else { id = pick(FIVE_CHARS().filter((c) => c.id !== target)).id; G.g.char = true; lost = true; }
    } else {
      if (sel.fate >= 2 || rnd() < 0.5) { id = sel.weapon; sel.fate = 0; }
      else { id = pick(FIVE_WEAPONS().filter((w) => w.id !== sel.weapon)).id; sel.fate++; lost = true; }
    }
  } else if (rarity === 4) {
    G.p4[b] = 0;
    if (b === "weapon") id = pick(WEAPONS.filter((w) => w.rarity === 4)).id;
    else { kind = "char"; const mine = b === "char" ? charsOfEl(sel.el, 4) : []; id = mine.length && rnd() < 0.5 ? pick(mine).id : pick(CHARS.filter((c) => c.rarity === 4)).id; }
  } else id = pick(WEAPONS.filter((w) => w.rarity === 3)).id;
  const res: Pull = { kind, id, rarity, dust: 0, lost };
  if (kind === "char") { const r = addChar(id); res.isNew = r.isNew; res.cons = r.cons; if (!r.isNew) res.dust = rarity === 5 ? (r.cons < 0 ? 25 : 10) : r.cons < 0 ? 5 : 2; }
  else { newWeapon(id); if (rarity === 3) res.sand = 15; else res.dust = rarity === 5 ? 10 : 2; }
  if (res.dust) addItem("dust", res.dust); if (res.sand) addItem("sand", res.sand);
  G.hist.unshift({ t: Date.now(), b, id, r: rarity }); if (G.hist.length > 200) G.hist.length = 200;
  markDirty(); return res;
}
export function wish(b: BannerId, n: number): Pull[] | string {
  if (b === "beginner") { const B = beg(); if (!B.sel) return "先に、もらいたい★5キャラを選んでね"; if (B.done) return "はじめての願いはもう終わりました"; if (B.n + n > BEGINNER_MAX) return `残りは ${BEGINNER_MAX - B.n} 回です`; }
  const t = BANNER_INFO[b].ticket, have = has(t), need = Math.max(0, n - have), gem = need * 160;
  if (has("gem") < gem) return `${b === "beginner" ? "銀" : "金"}の願い札が足りません（星晶 ${gem} 個で交換できます）`;
  if (need) useItem("gem", gem);
  useItem(t, n - need);
  const out: Pull[] = []; for (let i = 0; i < n; i++) { if (b === "beginner" && beg().done && i > 0) { addItem(t, 1); continue; } out.push(pull(b)); }
  bus.emit("gacha"); return out;
}
// 交換所
export const SHOP = [
  { id: "g_dust", give: "ticket_g", cost: "dust", price: 5, limit: 0, note: "制限なし" },
  { id: "s_dust", give: "ticket_s", cost: "dust", price: 5, limit: 0, note: "制限なし" },
  { id: "g_sand", give: "ticket_g", cost: "sand", price: 75, limit: 5, note: "毎月5枚まで" },
  { id: "s_sand", give: "ticket_s", cost: "sand", price: 75, limit: 5, note: "毎月5枚まで" },
  { id: "ore_sand", give: "ore3", cost: "sand", price: 100, limit: 0, note: "制限なし" },
  { id: "exp_sand", give: "exp3", cost: "sand", price: 60, limit: 0, note: "制限なし" },
];
export function shopLeft(it: (typeof SHOP)[number]) {
  if (!it.limit) return Infinity; const sel = gsel(), m = new Date().getFullYear() + "-" + new Date().getMonth();
  const b: any = ((S.gacha as any).bought ||= {}); if (b.month !== m) { (S.gacha as any).bought = { month: m }; }
  return it.limit - ((S.gacha as any).bought[it.id] || 0); void sel;
}
export function buy(it: (typeof SHOP)[number]) {
  if (shopLeft(it) <= 0 || has(it.cost) < it.price) return false;
  useItem(it.cost, it.price); addItem(it.give, 1); const b: any = (S.gacha as any).bought; if (it.limit) b[it.id] = (b[it.id] || 0) + 1; markDirty(); return true;
}
