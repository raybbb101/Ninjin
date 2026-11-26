export type StepType = "goto" | "talk" | "camp" | "boss" | "domain" | "statue";
export interface Step { type: StepType; target: string; text: string; dlg?: [string, string][]; }
export interface QuestDef { id: string; title: string; chapter: string; steps: Step[]; reward: { gem?: number; coin?: number; char?: string; items?: Record<string, number>; ar?: number }; outro?: [string, string][] }
const T = "ソラ";
export const MAIN: QuestDef[] = []; // ストーリーは廃止（v0.3）
export const INTRO: [string, string][] = [["案内", "ようこそ、ヨスガ諸島へ！ ここは星の落ちた島。自由に冒険しよう。"], ["案内", "左側をなぞって移動、右側をなぞるとカメラが回るよ。「走」でダッシュ、「跳」でジャンプ。空中でもう一度「跳」を押すと滑空できるよ。"], ["案内", "崖に向かって進むと登れるよ。北のルコの町には、元素反応を学べる「元素の学び舎」や、イベント「星海の螺旋」があるよ。"]];
export const DAILY_TYPES = [
  { type: "kill", goal: 15, text: "魔物を15体倒す" },
  { type: "chest", goal: 3, text: "宝箱を3つ開ける" },
  { type: "react", goal: 12, text: "元素反応を12回起こす" },
  { type: "elite", goal: 2, text: "岩兵か精霊を2体倒す" },
  { type: "domain", goal: 1, text: "秘境を1回クリアする" },
  { type: "shard", goal: 1, text: "星の欠片を1つ集める" },
  { type: "boss", goal: 1, text: "ボスを1体倒す" },
  { type: "skill", goal: 20, text: "元素スキルを20回使う" },
];
