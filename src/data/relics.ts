import type { El } from "./elements";
export const SLOTS = ["ring", "earring", "neck", "bracer", "crown"] as const;
export type Slot = (typeof SLOTS)[number];
export const SLOT_NAME: Record<Slot, string> = { ring: "指輪", earring: "耳飾り", neck: "首飾り", bracer: "腕輪", crown: "冠" };
export const STAT_NAME: Record<string, string> = {
  hp: "HP", atk: "攻撃力", def: "防御力", hpP: "HP%", atkP: "攻撃力%", defP: "防御力%", em: "元素熟知", er: "元素チャージ効率", cr: "会心率", cd: "会心ダメージ", heal: "回復効果",
  fire: "焔元素ダメージ", water: "潮元素ダメージ", volt: "雷元素ダメージ", frost: "霜元素ダメージ", star: "星元素ダメージ", shadow: "影元素ダメージ", phys: "物理ダメージ",
  na: "通常攻撃ダメージ", ca: "重撃ダメージ", skill: "元素スキルダメージ", burst: "元素爆発ダメージ", all: "与えるダメージ", el: "元素ダメージ",
};
export const FLAT = new Set(["hp", "atk", "def", "em"]);
export const MAIN_POOL: Record<Slot, string[]> = {
  ring: ["hp"], earring: ["atk"],
  neck: ["atkP", "hpP", "defP", "em", "er"],
  bracer: ["atkP", "hpP", "defP", "em", "fire", "water", "volt", "frost", "star", "shadow", "phys"],
  crown: ["atkP", "hpP", "defP", "em", "cr", "cd", "heal"],
};
export const MAIN_MAX: Record<string, number> = { hp: 4780, atk: 311, atkP: 0.466, hpP: 0.466, defP: 0.583, em: 187, er: 0.518, cr: 0.311, cd: 0.622, heal: 0.359, fire: 0.466, water: 0.466, volt: 0.466, frost: 0.466, star: 0.466, shadow: 0.466, phys: 0.583 };
export const SUB_ROLL: Record<string, number> = { hp: 299, atk: 19, def: 23, hpP: 0.058, atkP: 0.058, defP: 0.073, em: 23, er: 0.065, cr: 0.039, cd: 0.078 };
export interface SetDef { id: string; name: string; el?: El; b2: Record<string, number>; b4: Record<string, number>; d2: string; d4: string }
export const SETS: SetDef[] = [
  { id: "ember", name: "紅蓮の誓約", el: "fire", b2: { fire: 0.15 }, b4: { burst: 0.25, react: 0.3 }, d2: "焔元素ダメージ+15%", d4: "元素爆発ダメージ+25%、元素反応ダメージ+30%" },
  { id: "tide", name: "満ち潮の詩", el: "water", b2: { water: 0.15 }, b4: { skill: 0.3, heal: 0.15 }, d2: "潮元素ダメージ+15%", d4: "元素スキルダメージ+30%、回復効果+15%" },
  { id: "thunder", name: "雷鳴の太鼓", el: "volt", b2: { volt: 0.15 }, b4: { er: 0.2, react: 0.3 }, d2: "雷元素ダメージ+15%", d4: "元素チャージ効率+20%、元素反応ダメージ+30%" },
  { id: "rime", name: "霧氷の旅路", el: "frost", b2: { frost: 0.15 }, b4: { cr: 0.15, ca: 0.2 }, d2: "霜元素ダメージ+15%", d4: "会心率+15%、重撃ダメージ+20%" },
  { id: "comet", name: "彗星の残り火", el: "star", b2: { star: 0.15 }, b4: { burst: 0.2, er: 0.15 }, d2: "星元素ダメージ+15%", d4: "元素爆発ダメージ+20%、元素チャージ効率+15%" },
  { id: "nocturne", name: "夜想曲の仮面", el: "shadow", b2: { shadow: 0.15 }, b4: { all: 0.15, cd: 0.2 }, d2: "影元素ダメージ+15%", d4: "与えるダメージ+15%、会心ダメージ+20%" },
  { id: "blade", name: "剣客の心得", b2: { atkP: 0.18 }, b4: { na: 0.35, ca: 0.2 }, d2: "攻撃力+18%", d4: "通常攻撃ダメージ+35%、重撃ダメージ+20%" },
  { id: "pilgrim", name: "巡礼者の祈り", b2: { hpP: 0.2 }, b4: { heal: 0.2, er: 0.15 }, d2: "HP+20%", d4: "回復効果+20%、元素チャージ効率+15%" },
];
export const setById = (id: string) => SETS.find((s) => s.id === id)!;
