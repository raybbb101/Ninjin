export interface ItemDef { id: string; name: string; desc: string; rarity: number; kind: "currency" | "exp" | "ore" | "drop" | "gem" | "book" | "food" | "special"; v?: number; icon: string; color: string }
const I = (id: string, name: string, kind: ItemDef["kind"], rarity: number, icon: string, color: string, desc: string, v?: number): ItemDef => ({ id, name, kind, rarity, icon, color, desc, v });
export const ITEMS: ItemDef[] = [
  I("coin", "コイン", "currency", 3, "◎", "#ffd24a", "どこでも使えるお金。"),
  I("gem", "星晶", "currency", 5, "✦", "#ff9ad8", "願いをかなえる星の結晶。160個で1回祈願できる。"),
  I("ticket_s", "銀の願い札", "currency", 5, "▤", "#c8d8ff", "常設の祈願に使う札。"),
  I("ticket_g", "金の願い札", "currency", 5, "▤", "#ffd24a", "イベントと武器の祈願に使う札。"),
  I("dust", "星屑", "currency", 4, "✧", "#ffe0a0", "祈願で手に入る。ショップで願い札と交換できる。"),
  I("sand", "星砂", "currency", 3, "∴", "#c8d8ff", "★3武器を引くと手に入る。交換所で願い札などと交換できる。"),
  I("shard", "星の欠片", "special", 4, "✶", "#a0f0ff", "世界のあちこちに浮かぶ光。星の像に捧げるとスタミナの上限が増える。"),
  I("exp1", "旅の手記", "exp", 2, "▥", "#8ad06a", "キャラクター経験値+1000", 1000),
  I("exp2", "冒険家の手記", "exp", 3, "▥", "#5aa8ff", "キャラクター経験値+5000", 5000),
  I("exp3", "英雄の日記", "exp", 4, "▥", "#c070ff", "キャラクター経験値+20000", 20000),
  I("ore1", "鉄の欠片", "ore", 2, "◆", "#a8b0c0", "武器経験値+400", 400),
  I("ore2", "精鉄", "ore", 3, "◆", "#78b8ff", "武器経験値+2000", 2000),
  I("ore3", "魔鉄", "ore", 4, "◆", "#c890ff", "武器経験値+10000", 10000),
  I("jelly1", "ぷるんゼリー", "drop", 1, "●", "#9ae0a0", "ぷるんから落ちる。"), I("jelly2", "濃いゼリー", "drop", 2, "●", "#5ac8ff", "強いぷるんから落ちる。"), I("jelly3", "虹のゼリー", "drop", 3, "●", "#ff9ad8", "とても強いぷるんから落ちる。"),
  I("cloth1", "古い布", "drop", 1, "▰", "#c8b090", "山賊から落ちる。"), I("cloth2", "丈夫な布", "drop", 2, "▰", "#5ac8ff", "山賊から落ちる。"), I("cloth3", "錦の布", "drop", 3, "▰", "#ff9ad8", "山賊の頭から落ちる。"),
  I("stone1", "石の欠片", "drop", 1, "⬢", "#a0a0a8", "岩兵から落ちる。"), I("stone2", "刻まれた石", "drop", 2, "⬢", "#5ac8ff", "岩兵から落ちる。"), I("stone3", "古代の核", "drop", 3, "⬢", "#ff9ad8", "強い岩兵から落ちる。"),
  I("dustw1", "光の粉", "drop", 1, "✺", "#fff0a0", "精霊から落ちる。"), I("dustw2", "光の結晶", "drop", 2, "✺", "#5ac8ff", "精霊から落ちる。"), I("dustw3", "光の心臓", "drop", 3, "✺", "#ff9ad8", "強い精霊から落ちる。"),
  I("gem_fire", "焔の結晶", "gem", 4, "◈", "#ff7a3c", "焔元素キャラクターの突破に使う。"), I("gem_water", "潮の結晶", "gem", 4, "◈", "#3cb0ff", "潮元素キャラクターの突破に使う。"),
  I("gem_volt", "雷の結晶", "gem", 4, "◈", "#ffd23c", "雷元素キャラクターの突破に使う。"), I("gem_frost", "霜の結晶", "gem", 4, "◈", "#9ae8ff", "霜元素キャラクターの突破に使う。"),
  I("gem_star", "星の結晶", "gem", 4, "◈", "#ff9ad8", "星元素キャラクターの突破に使う。"), I("gem_shadow", "影の結晶", "gem", 4, "◈", "#a070ff", "影元素キャラクターの突破に使う。"),
  I("book_a1", "勇気の教え", "book", 2, "❑", "#8ad06a", "天賦の育成に使う。"), I("book_a2", "勇気の導き", "book", 3, "❑", "#5aa8ff", "天賦の育成に使う。"), I("book_a3", "勇気の哲学", "book", 4, "❑", "#c070ff", "天賦の育成に使う。"),
  I("book_b1", "知恵の教え", "book", 2, "❑", "#8ad06a", "天賦の育成に使う。"), I("book_b2", "知恵の導き", "book", 3, "❑", "#5aa8ff", "天賦の育成に使う。"), I("book_b3", "知恵の哲学", "book", 4, "❑", "#c070ff", "天賦の育成に使う。"),
  I("book_c1", "調和の教え", "book", 2, "❑", "#8ad06a", "天賦の育成に使う。"), I("book_c2", "調和の導き", "book", 3, "❑", "#5aa8ff", "天賦の育成に使う。"), I("book_c3", "調和の哲学", "book", 4, "❑", "#c070ff", "天賦の育成に使う。"),
  I("food1", "おにぎり", "food", 2, "▲", "#f4f0e0", "選んだキャラクターのHPを30%回復する。", 0.3),
  I("food2", "焼き魚定食", "food", 3, "▲", "#ffb060", "選んだキャラクターのHPを60%回復する。", 0.6),
  I("food3", "元気だんご", "food", 3, "▲", "#ff9ad8", "倒れたキャラクターを復活させ、HPを40%回復する。", 0.4),
];
export const itemById = (id: string) => ITEMS.find((i) => i.id === id)!;
export const DROP_FAMILY: Record<string, string[]> = { puff: ["jelly1", "jelly2", "jelly3"], humanoid: ["cloth1", "cloth2", "cloth3"], golem: ["stone1", "stone2", "stone3"], wisp: ["dustw1", "dustw2", "dustw3"] };
