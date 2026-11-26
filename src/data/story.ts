export type StepType = "goto" | "talk" | "camp" | "boss" | "domain" | "statue";
export interface Step { type: StepType; target: string; text: string; dlg?: [string, string][]; }
export interface QuestDef { id: string; title: string; chapter: string; steps: Step[]; reward: { gem?: number; coin?: number; char?: string; items?: Record<string, number>; ar?: number }; outro?: [string, string][] }
const T = "ソラ";
export const MAIN: QuestDef[] = [
  { id: "m1", chapter: "第一章", title: "星の落ちた浜", reward: { char: "tsumugi", gem: 300, coin: 20000, items: { exp2: 5 }, ar: 300 },
    steps: [
      { type: "goto", target: "wp_ruko", text: "北のルコの町へ向かう", dlg: [["案内", "町に着いた！ 町長ゴウを探して話しかけよう。近くで「話す」ボタンを押してね。"]] },
      { type: "talk", target: "npc_elder", text: "町長ゴウと話す", dlg: [["町長ゴウ", "ほう、星と一緒に落ちてきた旅人とな。……最近、町の外にぷるんや山賊が増えて困っておる。"], ["ツムギ", "さっきの子だ！ わたし、ツムギ。弓なら任せて。一緒に片付けよう！"], ["案内", "攻撃ボタンで通常攻撃、長押しで重撃。Eボタンで元素スキルを使えるよ。"]] },
      { type: "camp", target: "@near_ruko", text: "町の近くの魔物を倒す" },
      { type: "talk", target: "npc_elder", text: "町長に報告する", dlg: [["町長ゴウ", "見事じゃ！ これでしばらくは安心じゃな。"], ["ツムギ", "ソラ、記憶が戻るまで、わたしも一緒に旅をするよ！"]] },
    ] },
  { id: "m2", chapter: "第二章", title: "疾風の剣客", reward: { char: "hayate", gem: 300, coin: 30000, items: { ore2: 10, exp2: 8 }, ar: 400 },
    steps: [
      { type: "talk", target: "npc_guild", text: "受付のハナと話す", dlg: [["受付のハナ", "旅人さん、いいところに！ 風車の丘で一人の剣士が山賊に囲まれてるって知らせが！"], ["案内", "右の顔アイコンをタップするとキャラクターを交代できるよ。"]] },
      { type: "goto", target: "wp_x3", text: "風車の丘へ向かう", dlg: [["ハヤテ", "助太刀感謝する。……と言いたいが、まだ片付いてないぞ。"]] },
      { type: "camp", target: "@near_wp_x3", text: "山賊の拠点を片付ける" },
      { type: "talk", target: "npc_guild", text: "ハナに報告する", dlg: [["ハヤテ", "俺はハヤテ。流れ者だ。お前の剣、星の匂いがするな。しばらく付き合わせてもらう。"], ["受付のハナ", "ギルドから毎日の依頼も出してるから、よかったら見ていってね！"]] },
    ] },
  { id: "m3", chapter: "第三章", title: "水面の約束", reward: { char: "minamo", gem: 400, coin: 40000, items: { exp3: 3, gem_water: 3 }, ar: 500 },
    steps: [
      { type: "talk", target: "npc_fisher", text: "漁師のハマと話す", dlg: [["漁師のハマ", "西の湖で、でっかいぷるんが暴れててな。娘のミナモが一人で行っちまった！"]] },
      { type: "statue", target: "st_plains", text: "星の像に祈る", dlg: [[T, "像に触れたら……体に力が流れてくる。"], ["案内", "星の欠片を集めて星の像に捧げると、スタミナの上限が増えるよ。"]] },
      { type: "boss", target: "b_puff", text: "ぷるん大王を倒す" },
      { type: "talk", target: "npc_fisher", text: "ハマに報告する", dlg: [["ミナモ", "えへへ、助けてくれてありがとう。お礼に、わたしも旅についていくね！"]] },
    ] },
  { id: "m4", chapter: "第四章", title: "紅砂の谷", reward: { gem: 500, coin: 60000, items: { exp3: 5, ore3: 5, ticket_g: 2 }, ar: 600 },
    steps: [
      { type: "goto", target: "wp_akatsuchi", text: "東のアカツチ村へ向かう" },
      { type: "talk", target: "npc_smith", text: "鍛冶屋テツと話す", dlg: [["鍛冶屋テツ", "星の剣か……。谷の奥の遺跡に、昔の星の記録が眠ってるって話だ。"]] },
      { type: "domain", target: "dom_relic", text: "紅砂の遺跡を攻略する" },
      { type: "boss", target: "b_golem", text: "岩鎧の巨人を倒す", dlg: [[T, "遺跡の壁に、星が北の高原へ落ちていく絵があった……。"]] },
    ] },
  { id: "m5", chapter: "第五章", title: "霜嶺の灯", reward: { char: "kohaku", gem: 500, coin: 80000, items: { exp3: 6, gem_frost: 4 }, ar: 700 },
    steps: [
      { type: "goto", target: "wp_shimotsuki", text: "北西のシモツキ村へ向かう" },
      { type: "talk", target: "npc_monk", text: "見張りのオウと話す", dlg: [["見張りのオウ", "霜の大精霊が目覚めて、山の灯が消えかけておる。"], ["コハク", "わたしも行く！ 力仕事なら任せて！"]] },
      { type: "boss", target: "b_wisp", text: "霜の大精霊を鎮める" },
      { type: "talk", target: "npc_monk", text: "オウに報告する", dlg: [["見張りのオウ", "灯が戻った。……影の高原の塔に、星を呼ぶ者がいると聞く。"]] },
    ] },
  { id: "m6", chapter: "最終章", title: "影の塔", reward: { gem: 1600, coin: 150000, items: { ticket_s: 10, ticket_g: 10 }, ar: 1000 },
    steps: [
      { type: "goto", target: "wp_spire", text: "影の高原へ向かう", dlg: [["影の騎士", "……星の子よ。お前が落ちてきたのは偶然ではない。"]] },
      { type: "boss", target: "b_knight", text: "影の騎士を倒す" },
      { type: "talk", target: "npc_elder", text: "ルコの町に帰る", dlg: [["影の騎士", "（消えゆく声）……空の向こうに、まだお前の故郷がある……。"], [T, "故郷……。みんな、ありがとう。もう少しだけ、この島を旅してもいいかな。"], ["ツムギ", "もちろん！ まだ行ってない場所、いっぱいあるよ！"], ["案内", "メインストーリーはここまで！ 世界の探索、祈願、星の塔への挑戦を楽しんでね。"]] },
    ] },
];
export const INTRO: [string, string][] = [["？？？", "……ねえ、大丈夫？ 空から光が落ちてきたと思ったら、あなたが倒れてたの。"], [T, "ここは……どこだ？ 何も思い出せない。"], ["？？？", "ヨスガ諸島の南の浜だよ。北に行けばルコの町がある。まずは町長に会ってみて！"], ["案内", "左下をなぞって移動、右側をなぞるとカメラが回るよ。「走」を押し続けるとダッシュ、「跳」でジャンプ。空中でもう一度「跳」を押すと滑空できるよ。"], ["案内", "崖に向かって進むと登れるよ。黄色い◆がつぎの目的地！"]];
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
