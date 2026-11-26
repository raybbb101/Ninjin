import type { WeaponType } from "./characters";
export interface WeaponDef { id: string; name: string; type: WeaponType; rarity: number; atk: number; sub?: { k: string; v: number }; pName?: string; pDesc?: string; eff?: Record<string, number>; sig?: string; standard?: boolean }
const W = (id: string, name: string, type: WeaponType, rarity: number, atk: number, sub?: { k: string; v: number }, pName?: string, pDesc?: string, eff?: Record<string, number>, x: Partial<WeaponDef> = {}): WeaponDef => ({ id, name, type, rarity, atk, sub, pName, pDesc, eff, ...x });
export const WEAPONS: WeaponDef[] = [
  // ★1 starters
  W("w_s1", "見習いの剣", "sword", 1, 23), W("w_c1", "見習いの大剣", "claymore", 1, 23), W("w_p1", "見習いの槍", "polearm", 1, 23), W("w_b1", "見習いの弓", "bow", 1, 23), W("w_k1", "見習いの手帳", "catalyst", 1, 23),
  // ★3
  W("w_s3a", "鉄の片刃", "sword", 3, 39, { k: "atkP", v: 0.3 }, "研ぎ澄まし", "攻撃力+12%", { atkP: 0.12 }),
  W("w_s3b", "旅人のショートソード", "sword", 3, 38, { k: "cd", v: 0.4 }, "旅の勘", "会心率+6%", { cr: 0.06 }),
  W("w_c3a", "岩砕き", "claymore", 3, 39, { k: "atkP", v: 0.3 }, "重み", "通常攻撃ダメージ+20%", { na: 0.2 }),
  W("w_c3b", "古びた鉄塊", "claymore", 3, 38, { k: "defP", v: 0.4 }, "かたい", "防御力+20%", { defP: 0.2 }),
  W("w_p3a", "見張りの槍", "polearm", 3, 39, { k: "cr", v: 0.2 }, "警戒", "攻撃力+10%", { atkP: 0.1 }),
  W("w_p3b", "銛", "polearm", 3, 38, { k: "atkP", v: 0.3 }, "漁師の腕", "潮元素ダメージ+12%", { water: 0.12 }),
  W("w_b3a", "狩人の弓", "bow", 3, 39, { k: "cd", v: 0.4 }, "狙い撃ち", "重撃ダメージ+24%", { ca: 0.24 }),
  W("w_b3b", "竹弓", "bow", 3, 38, { k: "er", v: 0.35 }, "しなり", "元素スキルダメージ+16%", { skill: 0.16 }),
  W("w_k3a", "魔法の入門書", "catalyst", 3, 39, { k: "em", v: 120 }, "予習", "元素熟知+40", { em: 40 }),
  W("w_k3b", "ガラス玉", "catalyst", 3, 38, { k: "hpP", v: 0.3 }, "きらめき", "回復効果+10%", { heal: 0.1 }),
  // ★4
  W("w_s4a", "風見の剣", "sword", 4, 42, { k: "er", v: 0.45 }, "追い風", "元素爆発ダメージ+24%", { burst: 0.24 }),
  W("w_s4b", "銀月の刃", "sword", 4, 44, { k: "cr", v: 0.25 }, "月明かり", "攻撃力+20%", { atkP: 0.2 }),
  W("w_c4a", "鍛冶場の大鉈", "claymore", 4, 42, { k: "atkP", v: 0.41 }, "焼き入れ", "通常・重撃ダメージ+20%", { na: 0.2, ca: 0.2 }),
  W("w_c4b", "霜降りの大剣", "claymore", 4, 44, { k: "er", v: 0.45 }, "冷気", "元素スキルダメージ+24%", { skill: 0.24 }),
  W("w_p4a", "雷鳴の穂先", "polearm", 4, 44, { k: "er", v: 0.45 }, "共鳴", "元素爆発ダメージ+24%", { burst: 0.24 }),
  W("w_p4b", "紅の矛", "polearm", 4, 42, { k: "cr", v: 0.25 }, "猛り", "攻撃力+20%", { atkP: 0.2 }),
  W("w_b4a", "流星弓", "bow", 4, 44, { k: "atkP", v: 0.41 }, "流れ星", "会心率+12%", { cr: 0.12 }),
  W("w_b4b", "祭りの弓", "bow", 4, 42, { k: "er", v: 0.45 }, "お祭り", "元素スキルダメージ+24%", { skill: 0.24 }),
  W("w_k4a", "星図の巻物", "catalyst", 4, 42, { k: "em", v: 165 }, "星読み", "元素熟知+80", { em: 80 }),
  W("w_k4b", "潮騒の貝", "catalyst", 4, 44, { k: "hpP", v: 0.41 }, "潮騒", "回復効果+18%", { heal: 0.18 }),
  // ★5 standard
  W("w_s5", "天の羅針", "sword", 5, 46, { k: "er", v: 0.55 }, "天を指す", "会心率+8%、攻撃力+16%", { cr: 0.08, atkP: 0.16 }, { standard: true }),
  W("w_c5", "巨星の墓標", "claymore", 5, 48, { k: "atkP", v: 0.5 }, "墓標", "攻撃力+28%", { atkP: 0.28 }, { standard: true }),
  W("w_p5", "竜骨の槍", "polearm", 5, 48, { k: "cr", v: 0.33 }, "竜の骨", "全ダメージ+16%", { all: 0.16 }, { standard: true }),
  W("w_b5", "天穹の長弓", "bow", 5, 48, { k: "cr", v: 0.33 }, "天穹", "重撃ダメージ+40%、攻撃力+12%", { ca: 0.4, atkP: 0.12 }, { standard: true }),
  W("w_k5", "四季の書", "catalyst", 5, 46, { k: "atkP", v: 0.55 }, "四季", "元素ダメージ+16%", { el: 0.16 }, { standard: true }),
  W("w_s4c", "雲切り", "sword", 4, 42, { k: "cr", v: 0.25 }, "雲間", "落下攻撃ダメージ+40%", { plunge: 0.4 }),
  W("w_c4c", "回転大鉈", "claymore", 4, 44, { k: "atkP", v: 0.41 }, "遠心力", "重撃ダメージ+35%", { ca: 0.35 }),
  W("w_p4c", "跳ね槍", "polearm", 4, 42, { k: "atkP", v: 0.41 }, "跳躍", "落下攻撃ダメージ+35%", { plunge: 0.35 }),
  W("w_b4c", "狙撃の長弓", "bow", 4, 44, { k: "cd", v: 0.55 }, "一点集中", "重撃ダメージ+30%、重撃会心率+10%", { ca: 0.3, caCr: 0.1 }),
  W("w_k4c", "精霊の鈴", "catalyst", 4, 42, { k: "er", v: 0.45 }, "呼び声", "召喚したものの与えるダメージ+35%", { summon: 0.35 }),
  // ★5 signatures (持ち武器)
  W("sig_sora", "星喰みの剣", "sword", 5, 48, { k: "cd", v: 0.66 }, "星の記憶", "会心率+10%、元素スキルダメージ+20%", { cr: 0.1, skill: 0.2 }, { sig: "sora" }),
  W("sig_homura", "紅蓮槌", "claymore", 5, 48, { k: "cr", v: 0.33 }, "鍛炉の熱", "攻撃力+20%、焔元素ダメージ+20%", { atkP: 0.2, fire: 0.2 }, { sig: "homura" }),
  W("sig_shizuku", "水鏡の鈴", "catalyst", 5, 46, { k: "hpP", v: 0.5 }, "清め", "回復効果+20%、HP+20%", { heal: 0.2, hpP: 0.2 }, { sig: "shizuku" }),
  W("sig_raika", "雷切丸", "polearm", 5, 48, { k: "cd", v: 0.66 }, "迅雷", "元素爆発ダメージ+30%、雷元素ダメージ+12%", { burst: 0.3, volt: 0.12 }, { sig: "raika" }),
  W("sig_yukine", "灯守の弓", "bow", 5, 48, { k: "cr", v: 0.33 }, "灯りを守る", "霜元素ダメージ+24%、元素スキルダメージ+16%", { frost: 0.24, skill: 0.16 }, { sig: "yukine" }),
  W("sig_kurou", "月喰らい", "sword", 5, 48, { k: "cr", v: 0.33 }, "影喰らい", "会心ダメージ+40%、影元素ダメージ+12%", { cd: 0.4, shadow: 0.12 }, { sig: "kurou" }),
  W("sig_mikoto", "天球儀", "catalyst", 5, 46, { k: "er", v: 0.55 }, "星の巡り", "元素熟知+120、星元素ダメージ+16%", { em: 120, star: 0.16 }, { sig: "mikoto" }),
  W("sig_kagura", "狐火の弓", "bow", 5, 48, { k: "atkP", v: 0.5 }, "狐火", "会心率+12%、焔元素ダメージ+16%", { cr: 0.12, fire: 0.16 }, { sig: "kagura" }),
  W("sig_setsuna", "天翔丸", "sword", 5, 48, { k: "cr", v: 0.33 }, "雷鳥の羽", "落下攻撃ダメージ+60%、雷元素ダメージ+12%", { plunge: 0.6, volt: 0.12 }, { sig: "setsuna" }),
  W("sig_amane", "潮騒のタクト", "catalyst", 5, 46, { k: "hpP", v: 0.5 }, "合奏", "召喚したものの与えるダメージ+40%、HP+16%", { summon: 0.4, hpP: 0.16 }, { sig: "amane" }),
];
export const weaponById = (id: string) => WEAPONS.find((w) => w.id === id)!;
