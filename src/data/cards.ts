// 星海の螺旋：各層の前に3枚から1枚選ぶ強化カード（その挑戦の間だけ有効）
export interface Card { id: string; name: string; desc: string; stat?: Record<string, number>; special?: "shield" | "energy" | "move" | "vamp"; icon: string }
export const CARDS: Card[] = [
  { id: "na", name: "剛腕", desc: "通常攻撃のダメージ+40%", stat: { na: 0.4 }, icon: "⚔" },
  { id: "ca", name: "大振り", desc: "重撃のダメージ+50%", stat: { ca: 0.5 }, icon: "⚒" },
  { id: "pl", name: "流星落とし", desc: "落下攻撃のダメージ+60%", stat: { plunge: 0.6 }, icon: "☄" },
  { id: "sk", name: "秘術", desc: "元素スキルのダメージ+40%", stat: { skill: 0.4 }, icon: "✦" },
  { id: "bu", name: "奥義", desc: "元素爆発のダメージ+40%", stat: { burst: 0.4 }, icon: "✸" },
  { id: "all", name: "闘志", desc: "与えるダメージ+20%", stat: { all: 0.2 }, icon: "♨" },
  { id: "hp", name: "生命の泉", desc: "最大HP+30%", stat: { hpP: 0.3 }, icon: "♥" },
  { id: "atk", name: "鋭い刃", desc: "攻撃力+25%", stat: { atkP: 0.25 }, icon: "↑" },
  { id: "cr", name: "会心の目", desc: "会心率+15%", stat: { cr: 0.15 }, icon: "◎" },
  { id: "cd", name: "渾身", desc: "会心ダメージ+40%", stat: { cd: 0.4 }, icon: "✹" },
  { id: "er", name: "元素の流れ", desc: "元素チャージ効率+40%", stat: { er: 0.4 }, icon: "∞" },
  { id: "re", name: "共鳴", desc: "元素反応のダメージ+60%", stat: { react: 0.6 }, icon: "❂" },
  { id: "em", name: "学び", desc: "元素熟知+150", stat: { em: 150 }, icon: "✎" },
  { id: "su", name: "精霊の加護", desc: "召喚したものの与えるダメージ+50%", stat: { summon: 0.5 }, icon: "❀" },
  { id: "def", name: "鉄壁", desc: "防御力+50%", stat: { defP: 0.5 }, icon: "▣" },
  { id: "sh", name: "守りの星", desc: "層のはじめに最大HP30%のシールド", special: "shield", icon: "◈" },
  { id: "en", name: "満ちる力", desc: "層のはじめにチーム全員の元素エネルギー+30", special: "energy", icon: "⚡" },
  { id: "mv", name: "軽い足取り", desc: "移動速度+20%", special: "move", icon: "»" },
  { id: "va", name: "吸命", desc: "攻撃が当たると最大HPの1.5%回復（1秒に1回）", special: "vamp", icon: "✚" },
];
export const cardById = (id: string) => CARDS.find((c) => c.id === id)!;
