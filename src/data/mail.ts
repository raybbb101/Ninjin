export interface Mail { id: string; from: string; title: string; body: string; items: Record<string, number>; date: string }
export const MAILS: Mail[] = [
  { id: "update_v04", from: "NINJIN運営", date: "2026/11/26", title: "大型アップデートのお知らせとプレゼント", items: { gem: 16000 },
    body: "いつもNINJINを遊んでくれてありがとう！\n\n大型アップデートを行いました。\n・マップが広くなり「木漏れ日の森」が登場\n・キャラクターが26人に！ 全員のスキルをリニューアル、固有天賦も追加\n・祈願をリニューアル（全キャラ恒常、元素ごとのキャラ祈願、★5の指定）\n・交換所、元素の学び舎、イベント「星海の螺旋」を追加\n\nアップデート記念として、祈願100回分の星晶を贈ります。" },
  { id: "apology_v02", from: "NINJIN運営", date: "2026/11/26", title: "バランス調整とメンテナンスのお詫び", items: { gem: 8000 },
    body: "いつもNINJINを遊んでくれてありがとう！\n\n敵やボスが強すぎて先に進めない問題がありました。ごめんなさい。\nバランスを調整したので、もう一度挑戦してみてね。\n\nお詫びとして、祈願50回分の星晶を贈ります。" },
  { id: "welcome_beginner", from: "NINJIN運営", date: "2026/11/26", title: "初心者応援ギフト", items: { ticket_s: 30, ticket_g: 20 },
    body: "ヨスガ諸島へようこそ！\n\n冒険のスタートを応援するプレゼントです。\n・常設祈願 30回分（銀の願い札×30）\n・限定キャラ祈願 10回分＋武器祈願 10回分（金の願い札×20）\n\n「はじめての願い」では、50回以内に好きな★5キャラが必ず手に入るよ！" },
];
