export type El = "fire" | "water" | "volt" | "frost" | "star" | "shadow";
export type DmgEl = El | "phys";
export const ELS: El[] = ["fire", "water", "volt", "frost", "star", "shadow"];
export const EL_INFO: Record<DmgEl, { name: string; color: string; pal: string[] }> = {
  fire: { name: "焔", color: "#ff7a3c", pal: ["#1f0b10", "#4a1118", "#8c1d1c", "#cc3a1a", "#f2701f", "#ffae35", "#ffe27a", "#fff8d6"] },
  water: { name: "潮", color: "#3cb0ff", pal: ["#081830", "#0e2e5a", "#14508c", "#1c76bc", "#36a2e0", "#78ccf4", "#c4ecff", "#ffffff"] },
  volt: { name: "雷", color: "#ffd23c", pal: ["#24160a", "#5e3a0c", "#a8680f", "#e8a218", "#ffd23c", "#fff08a", "#fffbd8", "#ffffff"] },
  frost: { name: "霜", color: "#9ae8ff", pal: ["#0c1430", "#162c5c", "#1f4f94", "#2f7fcc", "#58b4ec", "#9bdcff", "#d8f4ff", "#ffffff"] },
  star: { name: "星", color: "#ff9ad8", pal: ["#2a0a22", "#5a1648", "#9a2c78", "#d850a8", "#ff82c8", "#ffb8e0", "#fff0f8", "#ffffff"] },
  shadow: { name: "影", color: "#a070ff", pal: ["#0a0614", "#1c1030", "#341c5a", "#52288c", "#7442c4", "#9e70f0", "#d4c0ff", "#ffffff"] },
  phys: { name: "物理", color: "#e8e8e8", pal: ["#141418", "#2a2a33", "#484a56", "#6c6f7e", "#9499a8", "#bcc0cc", "#e2e4ec", "#ffffff"] },
};

export type ReactKind = "amp" | "aoe" | "dot" | "freeze" | "slow" | "heal" | "shield" | "pull" | "resdown" | "buff" | "chain" | "energy";
export interface Reaction { name: string; kind: ReactKind; v: number; v2?: number; dur?: number; r?: number; desc: string; color: string }
const key = (a: El, b: El) => [a, b].sort().join("+");
export const REACTIONS: Record<string, Reaction> = {
  [key("fire", "water")]: { name: "蒸爆", kind: "aoe", v: 1.4, r: 3.5, dur: 3, desc: "蒸気が爆ぜて周囲にダメージ＋移動速度低下", color: "#ffc89a" },
  [key("fire", "volt")]: { name: "雷火", kind: "chain", v: 1.6, v2: 4, r: 6, desc: "炎雷が近くの敵へ連鎖する", color: "#ffb04a" },
  [key("fire", "frost")]: { name: "熱衝", kind: "amp", v: 2.2, desc: "急激な温度差で一撃のダメージが2.2倍", color: "#ff9a6a" },
  [key("fire", "star")]: { name: "超新星", kind: "energy", v: 1.8, v2: 6, r: 4, desc: "大爆発＋チーム全員の元素エネルギー回復", color: "#ffd0e8" },
  [key("fire", "shadow")]: { name: "黒炎", kind: "dot", v: 0.35, dur: 6, desc: "消えない黒い炎で継続ダメージ", color: "#c070ff" },
  [key("water", "volt")]: { name: "感電", kind: "dot", v: 0.45, dur: 4, r: 4, desc: "濡れた敵の間を電流が走り続ける", color: "#9ae0ff" },
  [key("water", "frost")]: { name: "氷結", kind: "freeze", v: 0, dur: 3.5, desc: "敵を凍らせて動きを止める", color: "#c8f4ff" },
  [key("water", "star")]: { name: "潮汐", kind: "heal", v: 0.08, desc: "やさしい潮の光でチーム全員を回復", color: "#a0ffe0" },
  [key("water", "shadow")]: { name: "深淵", kind: "pull", v: 0.9, r: 7, desc: "渦が周りの敵を一か所に吸い寄せる", color: "#5a6aff" },
  [key("volt", "frost")]: { name: "砕晶", kind: "resdown", v: 0.9, v2: 0.4, dur: 10, r: 3, desc: "氷の結晶が砕けて防御を40%下げる", color: "#e8f0ff" },
  [key("volt", "star")]: { name: "流星", kind: "aoe", v: 2.4, r: 4.5, desc: "空から星が落ちて大ダメージ", color: "#fff0a0" },
  [key("volt", "shadow")]: { name: "虚雷", kind: "resdown", v: 0.6, v2: 0.3, dur: 8, desc: "敵の全元素耐性を30%下げる", color: "#d0a0ff" },
  [key("frost", "star")]: { name: "結晶", kind: "shield", v: 0.25, desc: "星の結晶がシールドになる", color: "#e0f8ff" },
  [key("frost", "shadow")]: { name: "凍影", kind: "slow", v: 0.5, dur: 6, desc: "影が凍りつき、敵の攻撃力と速度が下がる", color: "#9ab0ff" },
  [key("star", "shadow")]: { name: "日蝕", kind: "buff", v: 1.8, v2: 0.2, dur: 10, desc: "一撃1.8倍＋会心率20%アップ（10秒）", color: "#ffe0ff" },
};
export const reactionOf = (aura: El, trig: El) => (aura === trig ? null : REACTIONS[key(aura, trig)]);
export const RESONANCE: Record<El, { name: string; desc: string }> = {
  fire: { name: "燃える意志", desc: "攻撃力+25%" },
  water: { name: "癒やしの潮", desc: "HP+25%、回復効果+15%" },
  volt: { name: "迸る雷光", desc: "元素エネルギー回復+30%" },
  frost: { name: "凍てつく心", desc: "会心率+15%" },
  star: { name: "星のめぐり", desc: "スキルのクールタイム-15%" },
  shadow: { name: "深い影", desc: "与えるダメージ+15%" },
};
