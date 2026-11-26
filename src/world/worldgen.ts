import { Rng, dist2 } from "../core/math";
import { addFlat, heightAt, rawHeight, regionAt, slopeAt, resetTerrainCache, HALF, type Region } from "./terrain";
import type { El } from "../data/elements";

export type PoiType = "waypoint" | "statue" | "domain" | "boss" | "camp" | "chest" | "shard" | "puzzle" | "npc" | "house" | "tower" | "spire";
export interface Poi { id: string; type: PoiType; x: number; z: number; y: number; name?: string; region?: Region; data?: any }
export const POIS: Poi[] = [];
export const byId = new Map<string, Poi>();
export let START = { x: 0, z: 380 };
export const SETTLEMENTS = [
  { id: "ruko", name: "ルコの町", x: 20, z: 236, r: 36, houses: 9 },
  { id: "akatsuchi", name: "アカツチ村", x: 262, z: -10, r: 24, houses: 5 },
  { id: "shimotsuki", name: "シモツキ村", x: -196, z: -150, r: 24, houses: 5 },
];
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
    { id: "dom_book", name: "知恵の祠", x: -120, z: 170, kind: "book" },
    { id: "dom_relic", name: "紅砂の遺跡", x: 330, z: 70, kind: "relic" },
    { id: "dom_ore", name: "霜鉄の坑道", x: -300, z: -90, kind: "ore" },
  ];
  const STATUES = [{ id: "st_plains", x: 70, z: 120 }, { id: "st_canyon", x: 210, z: -100 }, { id: "st_peaks", x: -250, z: -250 }];
  const BOSSES = [
    { id: "b_puff", enemy: "boss_puff", x: -110, z: 40 }, { id: "b_golem", enemy: "boss_golem", x: 330, z: -100 },
    { id: "b_wisp", enemy: "boss_wisp", x: -300, z: -190 }, { id: "b_knight", enemy: "boss_knight", x: 200, z: -255 },
  ];
  for (const d of DOMAINS) flats.push([d.x, d.z, 9]);
  for (const s of STATUES) flats.push([s.x, s.z, 7]);
  for (const b of BOSSES) flats.push([b.x, b.z, b.id === "b_knight" ? 34 : 24]);
  for (const [x, z, r] of flats) addFlat(x, z, r, Math.max(4, rawHeight(x, z)));
  resetTerrainCache();
  // start beach: walk south from the town until the sand
  let sz = 236; while (sz < 460 && heightAt(14, sz + 4) > 1.2) sz += 4; START = { x: 14, z: sz - 6 };

  for (const s of SETTLEMENTS) {
    add({ id: "wp_" + s.id, type: "waypoint", x: s.x + 6, z: s.z + s.r * 0.5, name: s.name });
    const R = new Rng(s.x * 7 + s.z);
    for (let i = 0; i < s.houses; i++) {
      const a = (i / s.houses) * Math.PI * 2 + 0.3, d = s.r * 0.72;
      add({ id: `house_${s.id}_${i}`, type: "house", x: s.x + Math.cos(a) * d, z: s.z + Math.sin(a) * d, data: { rot: -a + Math.PI / 2, w: R.range(5, 7), d: R.range(5, 6.5), h: R.range(3.5, 5), roof: R.pick(["#c84a3a", "#3a6ac8", "#5a9a4a", "#8a5aa8", "#d89a3a"]) } });
    }
  }
  add({ id: "wp_beach", type: "waypoint", x: START.x - 10, z: START.z - 14, name: "星の落ちた浜" });
  for (const d of DOMAINS) { add({ id: d.id, type: "domain", x: d.x, z: d.z, name: d.name, data: { kind: d.kind } }); add({ id: "wp_" + d.id, type: "waypoint", x: d.x + 12, z: d.z + 8, name: d.name + "前" }); }
  for (const s of STATUES) { add({ id: s.id, type: "statue", x: s.x, z: s.z, name: "星の像" }); add({ id: "wp_" + s.id, type: "waypoint", x: s.x + 8, z: s.z + 6, name: "星の像" }); }
  for (const b of BOSSES) { add({ id: b.id, type: "boss", x: b.x, z: b.z, data: { enemy: b.enemy } }); if (b.id !== "b_knight") add({ id: "wp_" + b.id, type: "waypoint", x: b.x + 30, z: b.z + 10, name: "決戦の地" }); }
  add({ id: "spire", type: "spire", x: 200, z: -282, name: "影の塔" });
  add({ id: "wp_spire", type: "waypoint", x: 170, z: -220, name: "影の高原" });
  add({ id: "tower", type: "tower", x: 20, z: 222, name: "星の塔" });
  for (const [i, [x, z, nm]] of ([[-60, 300, "灯台の岬"], [130, 260, "東の浜"], [-200, 120, "西の丘"], [140, 60, "風車の丘"], [-40, -40, "古い橋"], [160, -200, "谷の入口"], [-110, -260, "雪の道"], [-360, -180, "凍った湖"], [390, -10, "赤い崖"]] as [number, number, string][]).entries()) {
    const p = landNear(x, z); add({ id: "wp_x" + i, type: "waypoint", x: p.x, z: p.z, name: nm });
  }
  // npcs
  const NPCS = [
    { id: "npc_elder", name: "町長ゴウ", x: 26, z: 236, look: { hair: "#e0e0e0", style: "short", skin: "#e8c0a0", eye: "#3a2a1a", c1: "#6a4a8a", c2: "#e8d8a8", c3: "#ffd060" } },
    { id: "npc_shop", name: "商人ミツ", x: 8, z: 228, look: { hair: "#7a4a2a", style: "bun", skin: "#fcd8b8", eye: "#3a2a1a", c1: "#3a8a5a", c2: "#f4e8c8", c3: "#ffd060", skirt: true } },
    { id: "npc_guild", name: "受付のハナ", x: 34, z: 226, look: { hair: "#ff9ab8", style: "long", skin: "#fde4d0", eye: "#5a3a8a", c1: "#2a3a6a", c2: "#ffffff", c3: "#ffd060", skirt: true } },
    { id: "npc_smith", name: "鍛冶屋テツ", x: 268, z: -4, look: { hair: "#2a2a2a", style: "spiky", skin: "#d8a070", eye: "#2a1a1a", c1: "#5a3a2a", c2: "#a87a4a", c3: "#ff7a3c", acc: "band" } },
    { id: "npc_monk", name: "見張りのオウ", x: -190, z: -144, look: { hair: "#c8c8d8", style: "short", skin: "#f0d0b8", eye: "#3a5a8a", c1: "#3a4a6a", c2: "#e8f0ff", c3: "#9ae8ff", acc: "hood" } },
    { id: "npc_girl", name: "迷子のチイ", x: 120, z: 150, look: { hair: "#ffcf6a", style: "twin", skin: "#ffe4d0", eye: "#3a7ad8", c1: "#ff8a8a", c2: "#ffffff", c3: "#ffd060", skirt: true } },
    { id: "npc_fisher", name: "漁師のハマ", x: -55, z: 290, look: { hair: "#4a4a4a", style: "short", skin: "#d8a070", eye: "#2a1a1a", c1: "#2a5a8a", c2: "#e8e0c8", c3: "#ffd060", acc: "hat" } },
  ];
  for (const n of NPCS) add({ id: n.id, type: "npc", x: n.x, z: n.z, name: n.name, data: { look: n.look } });

  const R = new Rng(20261126);
  const avoid = POIS.filter((p) => ["waypoint", "domain", "statue", "boss", "house", "spire", "tower"].includes(p.type));
  const ok = (x: number, z: number, minH = 2.5, maxS = 0.25, clear = 30) => {
    const h = heightAt(x, z); if (h < minH || slopeAt(x, z) > maxS) return false;
    for (const s of SETTLEMENTS) if (dist2(x, z, s.x, s.z) < (s.r + 26) ** 2) return false;
    for (const p of avoid) if (dist2(x, z, p.x, p.z) < clear * clear) return false;
    return true;
  };
  const rand = (minH?: number, maxS?: number, clear?: number) => { for (let i = 0; i < 300; i++) { const x = R.range(-HALF + 40, HALF - 40), z = R.range(-HALF + 40, HALF - 40); if (ok(x, z, minH, maxS, clear)) return { x, z }; } return null; };
  const ELS: El[] = ["fire", "water", "volt", "frost", "star", "shadow"];
  const REG_EL: Record<Region, El[]> = { plains: ["water", "fire", "volt", "star"], canyon: ["fire", "volt", "star"], peaks: ["frost", "water", "shadow"], spire: ["shadow", "star", "volt"] };
  for (let i = 0; i < 34; i++) {
    const p = rand(3, 0.2, 34); if (!p) continue;
    const reg = regionAt(p.x, p.z), els = REG_EL[reg];
    const comp: string[] = [];
    const roll = R.next();
    if (roll < 0.35) { const n = R.int(3, 5); for (let k = 0; k < n; k++) comp.push("puff_" + R.pick(els)); }
    else if (roll < 0.7) { comp.push("bandit", "bandit", R.chance(0.6) ? "archer" : "shaman"); if (R.chance(0.5)) comp.push("archer"); }
    else if (roll < 0.85) { comp.push("wisp_" + R.pick(els), "wisp_" + R.pick(els), "puff_" + R.pick(els)); }
    else { comp.push("golem", "puff_" + R.pick(els), "puff_" + R.pick(els)); }
    add({ id: "camp" + i, type: "camp", x: p.x, z: p.z, data: { enemies: comp } });
    avoid.push(POIS[POIS.length - 1]);
  }
  for (let i = 0; i < 70; i++) {
    const p = rand(1.5, 0.3, 14); if (!p) continue;
    const r = R.next(), tier = r < 0.55 ? 1 : r < 0.85 ? 2 : r < 0.97 ? 3 : 4;
    add({ id: "chest" + i, type: "chest", x: p.x, z: p.z, data: { tier } });
  }
  for (let i = 0; i < 12; i++) {
    const p = rand(2.5, 0.2, 30); if (!p) continue;
    const els = [R.pick(ELS), R.pick(ELS), R.pick(ELS)];
    add({ id: "puzzle" + i, type: "puzzle", x: p.x, z: p.z, data: { els } });
    avoid.push(POIS[POIS.length - 1]);
  }
  // star shards: the highest point of a random patch
  for (let i = 0; i < 48; i++) {
    let best: any = null;
    const cx = R.range(-HALF + 60, HALF - 60), cz = R.range(-HALF + 60, HALF - 60);
    for (let k = 0; k < 14; k++) { const x = cx + R.range(-40, 40), z = cz + R.range(-40, 40), h = heightAt(x, z); if (h > 3 && (!best || h > best.h)) best = { x, z, h }; }
    if (!best) continue;
    add({ id: "shard" + i, type: "shard", x: best.x, z: best.z, y: best.h + 1.6 });
  }
}
export const poisOf = (t: PoiType) => POIS.filter((p) => p.type === t);
