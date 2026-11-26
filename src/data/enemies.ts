import type { El, DmgEl } from "./elements";
export type EnemyBody = "puff" | "humanoid" | "golem" | "wisp";
export interface EnemyDef {
  id: string; name: string; body: EnemyBody; el?: El; hp: number; atk: number; spd: number; range: number; atkKind: "lunge" | "smash" | "shoot" | "cast"; atkEl: DmgEl; cd: number; scale: number; boss?: boolean; drop: string; color?: string; weapon?: string; look?: any; exp: number; res?: number;
}
const puff = (el: El, name: string): EnemyDef => ({ id: "puff_" + el, name, body: "puff", el, hp: 260, atk: 14, spd: 2.6, range: 1.6, atkKind: "lunge", atkEl: el, cd: 2.6, scale: 1, drop: "puff", exp: 20 });
const wisp = (el: El, name: string): EnemyDef => ({ id: "wisp_" + el, name, body: "wisp", el, hp: 300, atk: 16, spd: 2.2, range: 9, atkKind: "shoot", atkEl: el, cd: 3.2, scale: 1, drop: "wisp", exp: 25 });
export const ENEMIES: EnemyDef[] = [
  puff("fire", "焔ぷるん"), puff("water", "潮ぷるん"), puff("volt", "雷ぷるん"), puff("frost", "霜ぷるん"), puff("star", "星ぷるん"), puff("shadow", "影ぷるん"),
  wisp("fire", "焔の精霊"), wisp("water", "潮の精霊"), wisp("volt", "雷の精霊"), wisp("frost", "霜の精霊"), wisp("star", "星の精霊"), wisp("shadow", "影の精霊"),
  { id: "bandit", name: "山賊", body: "humanoid", hp: 420, atk: 20, spd: 3.2, range: 2, atkKind: "smash", atkEl: "phys", cd: 2.4, scale: 1, drop: "humanoid", exp: 30, weapon: "claymore",
    look: { hair: "#5a3a2a", style: "short", skin: "#d8a880", eye: "#2a1a1a", c1: "#6a4a2a", c2: "#a88a5a", c3: "#3a2a1a", acc: "mask" } },
  { id: "archer", name: "山賊の弓兵", body: "humanoid", hp: 320, atk: 18, spd: 3, range: 12, atkKind: "shoot", atkEl: "phys", cd: 2.8, scale: 1, drop: "humanoid", exp: 30, weapon: "bow",
    look: { hair: "#3a3a2a", style: "short", skin: "#d8a880", eye: "#2a1a1a", c1: "#4a5a2a", c2: "#a8a07a", c3: "#2a2a1a", acc: "hood" } },
  { id: "shaman", name: "呪術師", body: "humanoid", el: "shadow", hp: 360, atk: 22, spd: 2.6, range: 11, atkKind: "cast", atkEl: "shadow", cd: 3.4, scale: 1, drop: "humanoid", exp: 35, weapon: "catalyst",
    look: { hair: "#2a1a3a", style: "long", skin: "#c8a090", eye: "#c070ff", c1: "#3a1a4a", c2: "#7a4aa8", c3: "#c070ff", acc: "hood", skirt: true } },
  { id: "golem", name: "岩兵", body: "golem", hp: 900, atk: 30, spd: 1.8, range: 2.6, atkKind: "smash", atkEl: "phys", cd: 3.2, scale: 1.4, drop: "golem", exp: 50, res: 0.3 },
  // bosses
  { id: "boss_puff", name: "ぷるん大王", body: "puff", el: "water", hp: 6000, atk: 34, spd: 2.4, range: 4, atkKind: "smash", atkEl: "water", cd: 2.6, scale: 3.4, boss: true, drop: "puff", exp: 600 },
  { id: "boss_golem", name: "岩鎧の巨人", body: "golem", el: "fire", hp: 7000, atk: 44, spd: 1.8, range: 5, atkKind: "smash", atkEl: "fire", cd: 3, scale: 3.2, boss: true, drop: "golem", exp: 800, res: 0.1 },
  { id: "boss_wisp", name: "霜の大精霊", body: "wisp", el: "frost", hp: 7500, atk: 40, spd: 2, range: 14, atkKind: "cast", atkEl: "frost", cd: 2.4, scale: 3.4, boss: true, drop: "wisp", exp: 800 },
  { id: "boss_knight", name: "影の騎士", body: "humanoid", el: "shadow", hp: 10000, atk: 52, spd: 3.6, range: 3.2, atkKind: "smash", atkEl: "shadow", cd: 2.2, scale: 2.4, boss: true, drop: "humanoid", exp: 1200, weapon: "sword",
    look: { hair: "#1a1a28", style: "long", skin: "#8a8aa0", eye: "#ff4a6a", c1: "#14101c", c2: "#3a2a5a", c3: "#a070ff", acc: "horns", cape: true } },
];
export const enemyById = (id: string) => ENEMIES.find((e) => e.id === id)!;
