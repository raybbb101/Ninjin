import { CHARS } from "../data/characters";
import { WEAPONS } from "../data/weapons";
import { S, addChar, newWeapon, addItem, useItem, has, markDirty } from "./state";
import { bus } from "../core/events";

export type BannerId = "standard" | "event" | "weapon";
const LIMITED = ["raika", "kurou", "mikoto", "kagura"];
export function currentBanner() {
  const week = Math.floor((Date.now() / 86400000 + 3) / 7);
  const featured = LIMITED[week % LIMITED.length];
  const fours = CHARS.filter((c) => c.rarity === 4 && !c.starter);
  const f4 = [0, 1, 2].map((k) => fours[(week * 3 + k) % fours.length].id);
  const sigs = [featured, LIMITED[(week + 1) % LIMITED.length]].map((id) => WEAPONS.find((w) => w.sig === id)!.id);
  const w4 = WEAPONS.filter((w) => w.rarity === 4).map((w) => w.id);
  return { featured, f4, sigs, fw4: [w4[week % w4.length], w4[(week + 3) % w4.length]], endsIn: 7 - ((Date.now() / 86400000 + 3) % 7) };
}
export const BANNER_INFO: Record<BannerId, { name: string; ticket: string; desc: string }> = {
  standard: { name: "星降る願い", ticket: "ticket_s", desc: "常設の祈願。★5キャラ・★5武器がランダムで登場。" },
  event: { name: "期間限定・キャラ祈願", ticket: "ticket_g", desc: "期間限定★5キャラの登場確率がアップ！" },
  weapon: { name: "神鍛の願い", ticket: "ticket_g", desc: "持ち武器（★5）の登場確率がアップ！" },
};
export interface Pull { kind: "char" | "weapon"; id: string; rarity: number; isNew?: boolean; cons?: number; dust: number }
const rnd = () => Math.random();
const pick = <T,>(a: T[]) => a[Math.floor(rnd() * a.length)];
function rate5(b: BannerId, p: number) { if (b === "weapon") return p >= 80 ? 1 : p >= 63 ? 0.007 + (p - 62) * 0.07 : 0.007; return p >= 90 ? 1 : p >= 74 ? 0.006 + (p - 73) * 0.06 : 0.006; }
export function pull(b: BannerId): Pull {
  const G = S.gacha, bn = currentBanner();
  G.p5[b]++; G.p4[b]++;
  let rarity = 3;
  if (rnd() < rate5(b, G.p5[b])) rarity = 5; else if (G.p4[b] >= 10 || rnd() < 0.051) rarity = 4;
  let kind: "char" | "weapon" = "weapon", id = "";
  if (rarity === 5) {
    G.p5[b] = 0;
    if (b === "event") { if (G.g.event || rnd() < 0.5) { id = bn.featured; G.g.event = false; } else { id = pick(CHARS.filter((c) => c.rarity === 5 && !c.limited && !c.starter)).id; G.g.event = true; } kind = "char"; }
    else if (b === "weapon") { if (G.g.weapon || rnd() < 0.75) { id = pick(bn.sigs); G.g.weapon = false; } else { id = pick(WEAPONS.filter((w) => w.rarity === 5 && w.standard)).id; G.g.weapon = true; } }
    else { if (rnd() < 0.5) { kind = "char"; id = pick(CHARS.filter((c) => c.rarity === 5 && !c.limited && !c.starter)).id; } else id = pick(WEAPONS.filter((w) => w.rarity === 5 && w.standard)).id; }
  } else if (rarity === 4) {
    G.p4[b] = 0;
    const charPool = CHARS.filter((c) => c.rarity === 4).map((c) => c.id), wPool = WEAPONS.filter((w) => w.rarity === 4).map((w) => w.id);
    if (b === "event" && rnd() < 0.5) { kind = "char"; id = pick(bn.f4); }
    else if (b === "weapon" && rnd() < 0.75) id = pick(bn.fw4);
    else if (rnd() < (b === "weapon" ? 0.3 : 0.5)) { kind = "char"; id = pick(charPool); } else id = pick(wPool);
  } else id = pick(WEAPONS.filter((w) => w.rarity === 3)).id;
  const res: Pull = { kind, id, rarity, dust: 0 };
  if (kind === "char") { const r = addChar(id); res.isNew = r.isNew; res.cons = r.cons; if (!r.isNew) res.dust = rarity === 5 ? (r.cons < 0 ? 25 : 10) : r.cons < 0 ? 5 : 2; }
  else { newWeapon(id); res.dust = rarity === 5 ? 10 : rarity === 4 ? 2 : 0; }
  if (res.dust) addItem("dust", res.dust);
  G.hist.unshift({ t: Date.now(), b, id, r: rarity }); if (G.hist.length > 200) G.hist.length = 200;
  markDirty(); return res;
}
export function wish(b: BannerId, n: number): Pull[] | string {
  const t = BANNER_INFO[b].ticket, have = has(t), need = Math.max(0, n - have), gem = need * 160;
  if (has("gem") < gem) return `${b === "standard" ? "銀" : "金"}の願い札が足りません（星晶 ${gem} 個で交換できます）`;
  if (need) useItem("gem", gem);
  useItem(t, n - need);
  const out: Pull[] = []; for (let i = 0; i < n; i++) out.push(pull(b));
  bus.emit("gacha"); return out;
}
