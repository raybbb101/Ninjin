import { Rng, dist2 } from "../core/math";
import { addFlat, heightAt, rawHeight, regionAt, slopeAt, resetTerrainCache, HALF, type Region } from "./terrain";
import type { El } from "../data/elements";

export type PoiType = "waypoint" | "statue" | "domain" | "boss" | "camp" | "chest" | "shard" | "puzzle" | "npc" | "house" | "tower" | "spire" | "school" | "event";
export interface Poi { id: string; type: PoiType; x: number; z: number; y: number; name?: string; region?: Region; data?: any }
export const POIS: Poi[] = [];
export const byId = new Map<string, Poi>();
export let START = { x: 0, z: 480 };
export const SETTLEMENTS = [
  { id: "ruko", name: "ルコの町", x: 26, z: 300, r: 40, houses: 10 },
  { id: "akatsuchi", name: "アカツチ村", x: 340, z: -14, r: 26, houses: 6 },
  { id: "shimotsuki", name: "シモツキ村", x: -255, z: -195, r: 26, houses: 6 },
  { id: "komorebi", name: "コモレビ村", x: -360, z: 250, r: 26, houses: 6 },
];
export const TOWN = SETTLEMENTS[0];
function landNear(x: number, z: number) {
  for (let i = 0; i < 40 && heightAt(x, z) < 1.5; i++) { x *= 0.97; z *= 0.97; }
  return { x, z };
}
function add(p: Omit<Poi, "y" | "region"> & { y?: number }) {
  const q: Poi = { ...p, y: p.y ?? heightAt(p.x, p.z), region: regionAt(p.x, p.z) } as Poi;
  POIS.push(q); byId.set(q.id, q); return q;
}
let inited = false;
export function initWorld() {
  if (inited) return; inited = true;
  const flats: [number, number, number][] = [];
  for (const s of SETTLEMENTS) flats.push([s.x, s.z, s.r]);
  const DOMAINS = [
    { id: "dom_book", name: "知恵の祠", x: -150, z: 220, kind: "book" },
    { id: "dom_relic", name: "紅砂の遺跡", x: 430, z: 90, kind: "relic" },
    { id: "dom_ore", name: "霜鉄の坑道", x: -390, z: -115, kind: "ore" },
    { id: "dom_relic2", name: "古樹のうろ", x: -415, z: 315, kind: "relic" },
  ];
  const STATUES = [{ id: "st_plains", x: 90, z: 160 }, { id: "st_canyon", x: 270, z: -130 }, { id: "st_peaks", x: -325, z: -325 }, { id: "st_forest", x: -330, z: 160 }];
  const BOSSES = [
    { id: "b_puff", enemy: "boss_puff", x: -140, z: 50 }, { id: "b_golem", enemy: "boss_golem", x: 430, z: -130 },
    { id: "b_wisp", enemy: "boss_wisp", x: -390, z: -245 }, { id: "b_knight", enemy: "boss_knight", x: 260, z: -330 },
    { id: "b_storm", enemy: "boss_storm", x: 210, z: 110 }, { id: "b_grove", enemy: "boss_grove", x: -470, z: 190 },
  ];
  for (const d of DOMAINS) flats.push([d.x, d.z, 9]);
  for (const s of STATUES) flats.push([s.x, s.z, 7]);
  for (const b of BOSSES) flats.push([b.x, b.z, b.id === "b_knight" ? 34 : 24]);
  for (const [x, z, r] of flats) addFlat(x, z, r, Math.max(4, rawHeight(x, z)));
  resetTerrainCache();
  let sz = TOWN.z; while (sz < HALF - 20 && heightAt(18, sz + 4) > 1.2) sz += 4; START = { x: 18, z: sz - 6 };

  for (const s of SETTLEMENTS) {
    add({ id: "wp_" + s.id, type: "waypoint", x: s.x + 6, z: s.z + s.r * 0.5, name: s.name });
    const R = new Rng(s.x * 7 + s.z);
    for (let i = 0; i < s.houses; i++) {
      const a = (i / s.houses) * Math.PI * 2 + 0.3, d = s.r * 0.74;
      add({ id: `house_${s.id}_${i}`, type: "house", x: s.x + Math.cos(a) * d, z: s.z + Math.sin(a) * d, data: { rot: -a + Math.PI / 2, w: R.range(5, 7), d: R.range(5, 6.5), h: R.range(3.5, 5), roof: R.pick(["#c84a3a", "#3a6ac8", "#5a9a4a", "#8a5aa8", "#d89a3a"]) } });
    }
  }
  add({ id: "wp_beach", type: "waypoint", x: START.x - 10, z: START.z - 14, name: "星の落ちた浜" });
  for (const d of DOMAINS) { add({ id: d.id, type: "domain", x: d.x, z: d.z, name: d.name, data: { kind: d.kind } }); add({ id: "wp_" + d.id, type: "waypoint", x: d.x + 12, z: d.z + 8, name: d.name + "前" }); }
  for (const s of STATUES) { add({ id: s.id, type: "statue", x: s.x, z: s.z, name: "星の像" }); add({ id: "wp_" + s.id, type: "waypoint", x: s.x + 8, z: s.z + 6, name: "星の像" }); }
  for (const b of BOSSES) { add({ id: b.id, type: "boss", x: b.x, z: b.z, data: { enemy: b.enemy } }); add({ id: "wp_" + b.id, type: "waypoint", x: b.x + 30, z: b.z + 10, name: "決戦の地" }); }
  add({ id: "spire", type: "spire", x: 260, z: -362, name: "影の塔" });
  add({ id: "tower", type: "tower", x: 26, z: 284, name: "星の塔" });
  add({ id: "school", type: "school", x: 10, z: 296, name: "元素の学び舎" });
  add({ id: "event", type: "event", x: 42, z: 296, name: "星海の螺旋" });
  for (const [i, [x, z, nm]] of ([[-80, 400, "灯台の岬"], [170, 340, "東の浜"], [-250, 120, "西の丘"], [180, 70, "風車の丘"], [-50, -50, "古い橋"], [210, -260, "谷の入口"], [-140, -330, "雪の道"], [-470, -230, "凍った湖"], [500, -10, "赤い崖"], [-470, 300, "森の泉"], [-280, 340, "苔むす小道"], [100, -120, "北の野"]] as [number, number, string][]).entries()) {
    const p = landNear(x, z); add({ id: "wp_x" + i, type: "waypoint", x: p.x, z: p.z, name: nm });
  }
  const T = TOWN;
  const NPCS = [
    { id: "npc_elder", name: "町長ゴウ", x: T.x + 6, z: T.z, look: { hair: "#e0e0e0", style: "short", skin: "#e8c0a0", eye: "#3a2a1a", c1: "#6a4a8a", c2: "#e8d8a8", c3: "#ffd060" } },
    { id: "npc_shop", name: "商人ミツ", x: T.x - 12, z: T.z - 8, look: { hair: "#7a4a2a", style: "bun", skin: "#fcd8b8", eye: "#3a2a1a", c1: "#3a8a5a", c2: "#f4e8c8", c3: "#ffd060", skirt: true } },
    { id: "npc_guild", name: "受付のハナ", x: T.x + 14, z: T.z - 10, look: { hair: "#ff9ab8", style: "long", skin: "#fde4d0", eye: "#5a3a8a", c1: "#2a3a6a", c2: "#ffffff", c3: "#ffd060", skirt: true } },
    { id: "npc_teacher", name: "先生のアオバ", x: T.x - 16, z: T.z + 2, look: { hair: "#4a8a6a", style: "bob", skin: "#fde0c8", eye: "#2a6a4a", c1: "#2a4a3a", c2: "#e8f4e8", c3: "#9ae0a0", acc: "hat", skirt: true } },
    { id: "npc_smith", name: "鍛冶屋テツ", x: 346, z: -8, look: { hair: "#2a2a2a", style: "spiky", skin: "#d8a070", eye: "#2a1a1a", c1: "#5a3a2a", c2: "#a87a4a", c3: "#ff7a3c", acc: "band" } },
    { id: "npc_monk", name: "見張りのオウ", x: -249, z: -189, look: { hair: "#c8c8d8", style: "short", skin: "#f0d0b8", eye: "#3a5a8a", c1: "#3a4a6a", c2: "#e8f0ff", c3: "#9ae8ff", acc: "hood" } },
    { id: "npc_ranger", name: "森番のコケ", x: -354, z: 256, look: { hair: "#6a8a3a", style: "ponytail", skin: "#e8c0a0", eye: "#3a5a2a", c1: "#3a5a2a", c2: "#c8b080", c3: "#9ad860", acc: "ears" } },
    { id: "npc_girl", name: "迷子のチイ", x: 150, z: 190, look: { hair: "#ffcf6a", style: "twin", skin: "#ffe4d0", eye: "#3a7ad8", c1: "#ff8a8a", c2: "#ffffff", c3: "#ffd060", skirt: true } },
    { id: "npc_fisher", name: "漁師のハマ", x: -70, z: 370, look: { hair: "#4a4a4a", style: "short", skin: "#d8a070", eye: "#2a1a1a", c1: "#2a5a8a", c2: "#e8e0c8", c3: "#ffd060", acc: "hat" } },
  ];
  for (const n of NPCS) add({ id: n.id, type: "npc", x: n.x, z: n.z, name: n.name, data: { look: n.look } });

  const R = new Rng(20261126);
  const avoid = POIS.filter((p) => ["waypoint", "domain", "statue", "boss", "house", "spire", "tower", "school", "event"].includes(p.type));
  const ok = (x: number, z: number, minH = 2.5, maxS = 0.25, clear = 30) => {
    const h = heightAt(x, z); if (h < minH || slopeAt(x, z) > maxS) return false;
    for (const s of SETTLEMENTS) if (dist2(x, z, s.x, s.z) < (s.r + 26) ** 2) return false;
    for (const p of avoid) if (dist2(x, z, p.x, p.z) < clear * clear) return false;
    return true;
  };
  const rand = (minH?: number, maxS?: number, clear?: number) => { for (let i = 0; i < 300; i++) { const x = R.range(-HALF + 50, HALF - 50), z = R.range(-HALF + 50, HALF - 50); if (ok(x, z, minH, maxS, clear)) return { x, z }; } return null; };
  const ELS: El[] = ["fire", "water", "volt", "frost", "star", "shadow"];
  const REG_EL: Record<Region, El[]> = { plains: ["water", "fire", "volt", "star"], canyon: ["fire", "volt", "star"], peaks: ["frost", "water", "shadow"], spire: ["shadow", "star", "volt"], forest: ["water", "star", "volt", "fire"] };
  for (let i = 0; i < 56; i++) {
    const p = rand(3, 0.2, 34); if (!p) continue;
    const reg = regionAt(p.x, p.z), els = REG_EL[reg], E = () => R.pick(els);
    const comp: string[] = [], roll = R.next();
    if (roll < 0.28) { const n = R.int(3, 5); for (let k = 0; k < n; k++) comp.push("puff_" + E()); }
    else if (roll < 0.5) { comp.push("bandit", "bandit", R.chance(0.6) ? "archer" : "shaman"); if (R.chance(0.5)) comp.push("archer"); }
    else if (roll < 0.62) comp.push("guard", "bandit", "archer");
    else if (roll < 0.75) comp.push("mage_" + R.pick(["fire", "water", "volt", "frost"]), "bandit", "puff_" + E());
    else if (roll < 0.87) comp.push("wisp_" + E(), "wisp_" + E(), "puff_" + E());
    else comp.push(reg === "peaks" ? "golem_frost" : "golem", "puff_" + E(), "puff_" + E());
    add({ id: "camp" + i, type: "camp", x: p.x, z: p.z, data: { enemies: comp } });
    avoid.push(POIS[POIS.length - 1]);
  }
  for (let i = 0; i < 115; i++) {
    const p = rand(1.5, 0.3, 14); if (!p) continue;
    const r = R.next(), tier = r < 0.5 ? 1 : r < 0.82 ? 2 : r < 0.96 ? 3 : 4;
    add({ id: "chest" + i, type: "chest", x: p.x, z: p.z, data: { tier } });
  }
  for (let i = 0; i < 18; i++) {
    const p = rand(2.5, 0.2, 30); if (!p) continue;
    add({ id: "puzzle" + i, type: "puzzle", x: p.x, z: p.z, data: { els: [R.pick(ELS), R.pick(ELS), R.pick(ELS)] } });
    avoid.push(POIS[POIS.length - 1]);
  }
  for (let i = 0; i < 72; i++) {
    let best: any = null;
    const cx = R.range(-HALF + 70, HALF - 70), cz = R.range(-HALF + 70, HALF - 70);
    for (let k = 0; k < 14; k++) { const x = cx + R.range(-40, 40), z = cz + R.range(-40, 40), h = heightAt(x, z); if (h > 3 && (!best || h > best.h)) best = { x, z, h }; }
    if (!best) continue;
    add({ id: "shard" + i, type: "shard", x: best.x, z: best.z, y: best.h + 1.6 });
  }
}
export const poisOf = (t: PoiType) => POIS.filter((p) => p.type === t);
