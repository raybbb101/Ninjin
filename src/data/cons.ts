import { charById, type SkillDef } from "./characters";
// 覚醒（凸）: 第3重=元素スキル+3、第5重=元素爆発+3。ほかの4つはキャラごとの特別な効果。
export type ConsCode = "echarge" | "ecd" | "emore" | "qmore" | "qrefund" | "summon" | "echo" | "healhit" | "partybuff" | "shred" | "critup" | "shieldq" | "nawave" | "energy";
type Entry = [string, ConsCode | "e3" | "q3", number, string?];
const C = (a: Entry, b: Entry, n3: string, d: Entry, n5: string, f: Entry): Entry[] => [a, b, [n3, "e3", 3], d, [n5, "q3", 3], f];
export const CONS: Record<string, Entry[]> = {
  sora: C(["星を拾う手", "echarge", 1], ["流星群", "qmore", 3], "瞬く記憶", ["星の子", "summon", 1.0, "星の子"], "夜明けの約束", ["星降る夜", "echo", 0.6]),
  homura: C(["焔の再鍛", "qrefund", 15], ["焼き入れ", "shred", 0.2], "火花散る", ["炉の鼓動", "partybuff", 0.2], "紅蓮の誓い", ["灼熱の追撃", "nawave", 1.5]),
  shizuku: C(["しずくの恵み", "healhit", 0.02], ["長い水鏡", "emore", 4], "澄んだ水面", ["水の衣", "shieldq", 0.3], "満月の潮", ["二度目の満ち潮", "echo", 0.5]),
  raika: C(["雷の枝分かれ", "emore", 2], ["電光石火", "critup", 0.2], "稲妻の足音", ["感電の印", "shred", 0.25], "百雷の夜", ["雷神の再来", "echo", 0.7]),
  yukine: C(["灯籠の長い夜", "emore", 4], ["雪うさぎ", "summon", 0.8, "雪うさぎ"], "冷たい指先", ["研ぎ澄ます", "critup", 0.15], "白夜の祈り", ["終わらない吹雪", "qmore", 4]),
  kurou: C(["二つの影", "echarge", 1], ["影喰らい", "shred", 0.3], "闇の歩法", ["月なき夜", "partybuff", 0.25], "蝕の剣", ["影法師の追撃", "nawave", 2.0]),
  mikoto: C(["星の囁き", "energy", 6], ["王家の祝福", "partybuff", 0.2], "星図を読む", ["癒やしの星光", "healhit", 0.03], "天球の歌", ["もう一つの天球", "echo", 0.6]),
  kagura: C(["連なる火矢", "emore", 3], ["燃え盛る空", "qmore", 2], "狐の嗅覚", ["狩人の目", "critup", 0.2], "炎舞の調べ", ["狐火", "summon", 1.5, "狐火"]),
  tsumugi: C(["もう一本の糸", "emore", 2], ["糸巻きの元気", "energy", 4], "仕立ての技", ["ほつれ目", "shred", 0.15], "晴れ着の舞", ["火の糸人形", "summon", 1.0, "糸人形"]),
  hayate: C(["二度踏み", "echarge", 1], ["見切り", "critup", 0.15], "疾風の足", ["追い風の剣", "nawave", 1.2], "雷鳴の構え", ["残響剣", "echo", 0.5]),
  minamo: C(["癒やしの波紋", "healhit", 0.02], ["潮の満ち引き", "energy", 5], "水面の鏡", ["大漁祈願", "partybuff", 0.15], "海の歌", ["小魚の群れ", "summon", 0.8, "小魚"]),
  kohaku: C(["琥珀の殻", "shieldq", 0.25], ["力持ち", "ecd", 0.2], "大地の鼓動", ["仲間の盾", "partybuff", 0.15], "星を担ぐ", ["余震", "echo", 0.6]),
  shino: C(["鎖の継ぎ足し", "emore", 2], ["影縫い", "shred", 0.2], "黙読", ["夜の頁", "energy", 5], "禁書の棚", ["影の書", "summon", 1.0, "影の書"]),
  rin: C(["早鳴りの鈴", "ecd", 0.25], ["澄んだ音色", "critup", 0.15], "鈴の輪", ["凍える響き", "shred", 0.2], "氷華の舞", ["鈴の追撃", "nawave", 1.2]),
  taki: C(["二段昇り", "echarge", 1], ["滝の恵み", "healhit", 0.015], "鯉の鱗", ["水しぶき", "qrefund", 12], "瀑布の心", ["もう一つの滝", "echo", 0.5]),
  akane: C(["夕陽二つ", "emore", 1], ["長い黄昏", "qmore", 4], "天才のひらめき", ["焦げた鍋", "shred", 0.2], "魔女の帽子", ["小さな太陽", "summon", 1.3, "小さな太陽"]),
  ibuki: C(["長い見張り", "emore", 4], ["雷の予報", "energy", 5], "物見の目", ["落雷の勘", "critup", 0.15], "空の太鼓", ["連鎖落雷", "qmore", 3]),
  yuzu: C(["薬草の香り", "healhit", 0.02], ["根を張る", "emore", 4], "陽だまり", ["花の守り", "shieldq", 0.2], "満開の庭", ["元気の素", "partybuff", 0.2]),
  fuyu: C(["長い冬", "qmore", 4], ["凍てつく刃", "shred", 0.2], "雪解け", ["寝起きの一撃", "ecd", 0.25], "冬将軍", ["吹雪の追撃", "nawave", 1.4]),
  yoru: C(["夜の渦", "emore", 2], ["百一夜", "qmore", 6], "夜目", ["月影の狙い", "critup", 0.15], "夜鳴きの歌", ["夜鳥", "summon", 1.0, "夜鳥"]),
  kaede: C(["長い秋", "emore", 4], ["落ち葉拾い", "qrefund", 12], "紅の髪飾り", ["燃える闘志", "critup", 0.15], "紅葉の嵐", ["葉舞の追撃", "nawave", 1.3]),
  nagi: C(["凪の膜", "shieldq", 0.2], ["静かな海", "ecd", 0.2], "灯台の灯", ["潮だまり", "healhit", 0.015], "大凪の心", ["返す波", "echo", 0.5]),
};
const moreText = (s: SkillDef, v: number) => (["volley", "chain", "meteor"].includes(s.kind) ? `の数が${v}つ増える` : ["field", "turret", "vortex", "infuse", "buff"].includes(s.kind) ? `の効果時間が${v}秒のびる` : `の範囲とダメージが${Math.round(v * 10)}%アップ`);
export function consDesc(id: string, i: number): { name: string; desc: string } {
  const d = charById(id), [name, code, v, extra] = CONS[id][i];
  const pct = Math.round(v * 100) + "%";
  const map: Record<string, string> = {
    e3: `元素スキル「${d.skill.name}」のレベル+3`, q3: `元素爆発「${d.burst.name}」のレベル+3`,
    echarge: `元素スキル「${d.skill.name}」を2回続けて使えるようになる`,
    ecd: `元素スキルのクールタイム-${pct}`,
    emore: `元素スキル「${d.skill.name}」${moreText(d.skill, v)}`,
    qmore: `元素爆発「${d.burst.name}」${moreText(d.burst, v)}`,
    qrefund: `元素爆発を使った後、元素エネルギーが${v}回復する`,
    summon: `元素スキルを使うと「${extra}」が現れ、8秒間近くの敵を攻撃する（攻撃力の${pct}）`,
    echo: `元素爆発の2秒後、もう一度だけ同じ攻撃が起きる（ダメージ${pct}）`,
    healhit: `元素スキルが敵に当たると、出場中のキャラのHPを最大HPの${(v * 100).toFixed(1)}%回復（1秒に1回）`,
    partybuff: `元素爆発の後、チーム全員の与えるダメージ+${pct}（12秒）`,
    shred: `元素スキルと元素爆発が当たった敵の元素耐性-${pct}（8秒）`,
    critup: `元素スキルの後、会心率+${pct}（8秒）`,
    shieldq: `元素爆発を使うと、最大HPの${pct}のシールドを得る`,
    nawave: `通常攻撃の4回目ごとに元素の波を放つ（攻撃力の${pct}）`,
    energy: `元素スキルを使うと、元素エネルギーが${v}回復する`,
  };
  return { name, desc: map[code] };
}
export const consActive = (id: string, cons: number) => (CONS[id] || []).slice(0, cons).map((e) => ({ code: e[1], v: e[2] }));
export function consVal(id: string, cons: number, code: string) { let t = 0; for (const e of consActive(id, cons)) if (e.code === code) t += e.v; return t; }
