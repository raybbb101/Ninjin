export interface Mail { id: string; from: string; title: string; body: string; items: Record<string, number>; date: string }
export const MAILS: Mail[] = []; // メールは廃止（v0.3）
export const OLD_MAILS: Mail[] = [
  { id: "apology_v02", from: "NINJIN運営", date: "2026/11/26", title: "バランス調整とメンテナンスのお詫び", items: { gem: 8000 },
    body: "いつもNINJINを遊んでくれてありがとう！\n\n敵やボスが強すぎて先に進めない問題がありました。ごめんなさい。\nバランスを調整したので、もう一度挑戦してみてね。\n\nお詫びとして、祈願50回分の星晶を贈ります。" },
  { id: "welcome_beginner", from: "NINJIN運営", date: "2026/11/26", title: "初心者応援ギフト", items: { ticket_s: 30, ticket_g: 20 },
    body: "ヨスガ諸島へようこそ！\n\n冒険のスタートを応援するプレゼントです。\n・常設祈願 30回分（銀の願い札×30）\n・限定キャラ祈願 10回分＋武器祈願 10回分（金の願い札×20）\n\n「はじめての願い」では、50回以内に好きな★5キャラが必ず手に入るよ！" },
];
