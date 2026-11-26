import * as THREE from "three";
import { HALF, RES, gridH, colorAt, regionWeights, heightAt, slopeAt, FLATS, SEA } from "../world/terrain";
import { POIS, byId, type Poi } from "../world/worldgen";
import { hash2 } from "../core/math";
import { treeTex, wallTex, roofTex, stoneTex, chestTex } from "./sprites";
import { texOf, PX } from "./billboard";
import { EL_INFO } from "../data/elements";

export const CH = 64;
export interface Collider { x: number; z: number; r: number; h?: number; box?: [number, number, number, number]; y0?: number; top?: number }
export const colliders = new Map<string, Collider[]>();
const ckey = (cx: number, cz: number) => cx + "," + cz;
export function addCollider(c: Collider) { const k = ckey(Math.floor(c.x / 16), Math.floor(c.z / 16)); if (!colliders.has(k)) colliders.set(k, []); colliders.get(k)!.push(c); }
export function nearColliders(x: number, z: number, out: Collider[] = []) {
  out.length = 0; const cx = Math.floor(x / 16), cz = Math.floor(z / 16);
  for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) { const a = colliders.get(ckey(cx + i, cz + j)); if (a) out.push(...a); }
  return out;
}
const crossGeo = (w: number, h: number) => { const a = new THREE.PlaneGeometry(w, h).translate(0, h / 2, 0), b = a.clone().rotateY(Math.PI / 2); const g = new THREE.BufferGeometry(); const pa = [...a.attributes.position.array, ...b.attributes.position.array], ua = [...a.attributes.uv.array, ...b.attributes.uv.array]; const ia = [...(a.index!.array as any), ...[...(b.index!.array as any)].map((v: number) => v + 4)]; g.setAttribute("position", new THREE.Float32BufferAttribute(pa, 3)); g.setAttribute("uv", new THREE.Float32BufferAttribute(ua, 2)); g.setIndex(ia); return g; };
const swayUniform = { value: 0 };
function propMat(cv: HTMLCanvasElement, sway = 0) {
  const m = new THREE.MeshBasicMaterial({ map: texOf(cv), alphaTest: 0.5, side: THREE.DoubleSide });
  if (sway) m.onBeforeCompile = (sh) => { sh.uniforms.uT = swayUniform; sh.vertexShader = "uniform float uT;\n" + sh.vertexShader.replace("#include <begin_vertex>", `#include <begin_vertex>\n vec4 ip = instanceMatrix * vec4(0.,0.,0.,1.); transformed.x += sin(uT*1.7 + ip.x*0.3 + ip.z*0.2) * ${sway.toFixed(3)} * max(0.0, position.y);`); };
  return m;
}
type PropKind = "leaf" | "pine" | "dead" | "crystal" | "cactus" | "bush" | "grass" | "flower" | "rock";
const PROP_SIZE: Record<PropKind, [number, number]> = { leaf: [40, 56], pine: [40, 56], dead: [40, 56], crystal: [40, 56], cactus: [40, 56], bush: [24, 18], rock: [24, 18], grass: [16, 12], flower: [16, 12] };
let PROP: Record<string, { geo: THREE.BufferGeometry; mat: THREE.Material }> = {};
function initProps() {
  for (const k of Object.keys(PROP_SIZE) as PropKind[]) {
    const [w, h] = PROP_SIZE[k], sc = k === "grass" || k === "flower" ? 1.3 : 1.6;
    PROP[k] = { geo: crossGeo(w * PX * sc, h * PX * sc), mat: propMat(treeTex(k, 1), k === "grass" || k === "flower" ? 0.04 : k === "leaf" || k === "pine" ? 0.015 : 0) };
  }
}
function inFlat(x: number, z: number, pad = 4) { for (const f of FLATS) if ((x - f.x) ** 2 + (z - f.z) ** 2 < (f.r + pad) ** 2) return true; return false; }
export class WorldView {
  group = new THREE.Group(); far!: THREE.Mesh; farUniform = { value: new THREE.Vector4(0, 0, 0, 0) };
  chunks = new Map<string, { mesh: THREE.Mesh; props: THREE.InstancedMesh[] }>(); terrainMat: THREE.MeshLambertMaterial;
  water: THREE.Mesh; poiObjs = new Map<string, THREE.Object3D>(); grassN = 40; near = 2; tint = new THREE.Color(1, 1, 1);
  private queue: string[] = [];
  constructor(public scene: THREE.Scene) {
    initProps();
    this.terrainMat = new THREE.MeshLambertMaterial({ vertexColors: true });
    const farMat = new THREE.MeshLambertMaterial({ vertexColors: true });
    farMat.onBeforeCompile = (sh) => {
      sh.uniforms.uB = this.farUniform;
      sh.vertexShader = "varying vec3 vW;\n" + sh.vertexShader.replace("#include <worldpos_vertex>", "#include <worldpos_vertex>\n vW = (modelMatrix * vec4(transformed,1.0)).xyz;");
      sh.fragmentShader = "uniform vec4 uB; varying vec3 vW;\n" + sh.fragmentShader.replace("void main() {", "void main() { if (vW.x > uB.x && vW.x < uB.z && vW.z > uB.y && vW.z < uB.w) discard;");
    };
    this.far = new THREE.Mesh(this.buildGeo(-HALF, -HALF, HALF * 2, 8), farMat); this.far.position.y = -0.25; this.group.add(this.far);
    const wg = new THREE.PlaneGeometry(2400, 2400).rotateX(-Math.PI / 2);
    this.water = new THREE.Mesh(wg, new THREE.MeshLambertMaterial({ color: 0x3a8ad8, transparent: true, opacity: 0.8, depthWrite: false }));
    this.water.position.y = SEA - 0.15; this.water.renderOrder = 2; this.group.add(this.water);
    this.buildPois();
    scene.add(this.group);
  }
  buildGeo(x0: number, z0: number, size: number, step: number) {
    const n = Math.round(size / step) + 1, pos = new Float32Array(n * n * 3), col = new Float32Array(n * n * 3), nor = new Float32Array(n * n * 3), c = [0, 0, 0];
    const k = step / RES, i0 = Math.round((x0 + HALF) / RES), j0 = Math.round((z0 + HALF) / RES);
    for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
      const gi = i0 + i * k, gj = j0 + j * k, x = x0 + i * step, z = z0 + j * step, h = gridH(gi, gj), o = (j * n + i) * 3;
      pos[o] = x; pos[o + 1] = h; pos[o + 2] = z;
      const hx = gridH(gi + 1, gj) - gridH(gi - 1, gj), hz = gridH(gi, gj + 1) - gridH(gi, gj - 1), nx = -hx, ny = 2 * RES, nz = -hz, l = Math.hypot(nx, ny, nz);
      nor[o] = nx / l; nor[o + 1] = ny / l; nor[o + 2] = nz / l;
      colorAt(x, z, h, 1 - ny / l, c); col[o] = c[0]; col[o + 1] = c[1]; col[o + 2] = c[2];
    }
    const idx: number[] = [];
    for (let j = 0; j < n - 1; j++) for (let i = 0; i < n - 1; i++) { const a = j * n + i, b = a + 1, d = a + n, e = d + 1; idx.push(a, d, b, b, d, e); }
    const g = new THREE.BufferGeometry(); g.setAttribute("position", new THREE.BufferAttribute(pos, 3)); g.setAttribute("normal", new THREE.BufferAttribute(nor, 3)); g.setAttribute("color", new THREE.BufferAttribute(col, 3)); g.setIndex(idx); g.computeBoundingSphere();
    return g;
  }
  private buildChunk(cx: number, cz: number, regCol: boolean) {
    const col = (c: Collider) => { if (regCol) addCollider(c); };
    const x0 = cx * CH - HALF, z0 = cz * CH - HALF;
    const mesh = new THREE.Mesh(this.buildGeo(x0, z0, CH, RES), this.terrainMat); this.group.add(mesh);
    const lists: Record<string, THREE.Matrix4[]> = {}; const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
    const put = (k: string, x: number, z: number, sc: number, rot: number) => { (lists[k] ||= []).push(new THREE.Matrix4().compose(p.set(x, heightAt(x, z) - 0.1, z), q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rot), s.setScalar(sc))); };
    for (let gx = 0; gx < CH; gx += 5) for (let gz = 0; gz < CH; gz += 5) {
      const x = x0 + gx + hash2(gx + x0, gz + z0, 1) * 5, z = z0 + gz + hash2(gx + x0, gz + z0, 2) * 5, r = hash2(Math.floor(x), Math.floor(z), 3);
      const h = heightAt(x, z); if (h < 1.6) continue; const sl = slopeAt(x, z); if (sl > 0.24 || inFlat(x, z)) continue;
      const w = regionWeights(x, z), sc = 0.8 + hash2(Math.floor(x), Math.floor(z), 4) * 0.5, rot = r * 6;
      const snow = h > 55 && w.peaks > 0.5;
      if (w.plains > 0.55) { if (r < 0.085) { put("leaf", x, z, sc, rot); col({ x, z, r: 0.5 }); } else if (r < 0.14) put("bush", x, z, sc, rot); else if (r < 0.17) put("rock", x, z, sc, rot); else if (r < 0.17 + this.grassN / 200) put(r > 0.6 ? "flower" : "grass", x, z, sc, rot); }
      else if (w.canyon > 0.5) { if (r < 0.03) { put("cactus", x, z, sc, rot); col({ x, z, r: 0.5 }); } else if (r < 0.05) put("dead", x, z, sc, rot); else if (r < 0.1) put("rock", x, z, sc, rot); else if (r < 0.1 + this.grassN / 500) put("grass", x, z, sc, rot); }
      else if (w.peaks > 0.5) { if (r < 0.1 && !snow) { put("pine", x, z, sc, rot); col({ x, z, r: 0.5 }); } else if (r < 0.06) put("pine", x, z, sc, rot); else if (r < 0.14) put("rock", x, z, sc, rot); else if (!snow && r < 0.14 + this.grassN / 400) put("grass", x, z, sc, rot); }
      else if (w.forest > 0.5) { if (r < 0.2) { put(r < 0.06 ? "pine" : "leaf", x, z, sc * 1.15, rot); col({ x, z, r: 0.5 }); } else if (r < 0.28) put("bush", x, z, sc, rot); else if (r < 0.31) put("rock", x, z, sc, rot); else if (r < 0.31 + this.grassN / 150) put(r > 0.55 ? "flower" : "grass", x, z, sc, rot); }
      else if (w.spire > 0.5) { if (r < 0.05) { put("crystal", x, z, sc, rot); col({ x, z, r: 0.6 }); } else if (r < 0.09) put("rock", x, z, sc, rot); }
      else if (r < 0.05) { put("leaf", x, z, sc, rot); col({ x, z, r: 0.5 }); } else if (r < 0.08) put("bush", x, z, sc, rot);
    }
    const props: THREE.InstancedMesh[] = [];
    for (const k in lists) { const P = PROP[k], im = new THREE.InstancedMesh(P.geo, P.mat, lists[k].length); lists[k].forEach((mm, i) => im.setMatrixAt(i, mm)); im.computeBoundingSphere(); this.group.add(im); props.push(im); }
    return { mesh, props };
  }
  private builtColliderChunks = new Set<string>();
  update(px: number, pz: number, t: number) {
    swayUniform.value = t;
    const ccx = Math.floor((px + HALF) / CH), ccz = Math.floor((pz + HALF) / CH), n = Math.ceil(HALF * 2 / CH), R = this.near;
    const want = new Set<string>();
    for (let i = -R; i <= R; i++) for (let j = -R; j <= R; j++) { const a = ccx + i, b = ccz + j; if (a < 0 || b < 0 || a >= n || b >= n) continue; want.add(a + "," + b); }
    for (const [k, c] of this.chunks) if (!want.has(k)) { c.mesh.removeFromParent(); c.mesh.geometry.dispose(); c.props.forEach((p) => { p.removeFromParent(); p.dispose(); }); this.chunks.delete(k); }
    let built = 0;
    const order = [...want].filter((k) => !this.chunks.has(k)).sort((a, b) => { const [ax, az] = a.split(",").map(Number), [bx, bz] = b.split(",").map(Number); return (ax - ccx) ** 2 + (az - ccz) ** 2 - ((bx - ccx) ** 2 + (bz - ccz) ** 2); });
    for (const k of order) { if (built >= 2) break; const [a, b] = k.split(",").map(Number); this.chunks.set(k, this.buildChunkOnce(a, b, k)); built++; }
    // far terrain hole = fully loaded square
    let minx = Infinity, minz = Infinity, maxx = -Infinity, maxz = -Infinity, all = true;
    for (const k of want) { if (!this.chunks.has(k)) { all = false; continue; } const [a, b] = k.split(",").map(Number); minx = Math.min(minx, a); minz = Math.min(minz, b); maxx = Math.max(maxx, a); maxz = Math.max(maxz, b); }
    if (minx === Infinity) this.farUniform.value.set(0, 0, 0, 0);
    else if (all) this.farUniform.value.set(minx * CH - HALF + 0.5, minz * CH - HALF + 0.5, (maxx + 1) * CH - HALF - 0.5, (maxz + 1) * CH - HALF - 0.5);
    else this.farUniform.value.set(ccx * CH - HALF + 0.5, ccz * CH - HALF + 0.5, (ccx + 1) * CH - HALF - 0.5, (ccz + 1) * CH - HALF - 0.5);
    this.water.position.x = px; this.water.position.z = pz;
    for (const k in PROP) (PROP[k].mat as THREE.MeshBasicMaterial).color.copy(this.tint);
  }
  private buildChunkOnce(a: number, b: number, k: string) { const r = this.buildChunk(a, b, !this.builtColliderChunks.has(k)); this.builtColliderChunks.add(k); return r; }
  // ---------- POIs ----------
  buildPois() {
    const wallM = (c: string) => new THREE.MeshLambertMaterial({ map: texOf(wallTex(c)) });
    for (const p of POIS) {
      let o: THREE.Object3D | null = null;
      if (p.type === "house") {
        const d = p.data, g = new THREE.Group(), y = p.y;
        const body = new THREE.Mesh(new THREE.BoxGeometry(d.w, d.h, d.d), wallM(["#e8dcc0", "#f0e8d8", "#d8c8a8"][Math.floor(p.x) & 1])); body.position.y = d.h / 2; g.add(body);
        const rg = new THREE.CylinderGeometry(0.01, d.w * 0.75, 2.6, 4, 1); rg.rotateY(Math.PI / 4); rg.scale(1, 1, d.d / d.w);
        const roof = new THREE.Mesh(rg, new THREE.MeshLambertMaterial({ map: texOf(roofTex(d.roof)) })); roof.position.y = d.h + 1.3; g.add(roof);
        const door = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 2), new THREE.MeshLambertMaterial({ color: 0x5a3a22 })); door.position.set(0, 1, d.d / 2 + 0.01); g.add(door);
        const win = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.8), new THREE.MeshBasicMaterial({ color: 0xffe8a0 })); win.position.set(d.w * 0.28, d.h * 0.6, d.d / 2 + 0.01); g.add(win);
        g.position.set(p.x, y - 0.2, p.z); g.rotation.y = d.rot; o = g;
        addCollider({ x: p.x, z: p.z, r: Math.max(d.w, d.d) * 0.55, top: y + d.h });
      } else if (p.type === "waypoint") {
        const g = new THREE.Group();
        const base = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.5, 0.6, 6), new THREE.MeshLambertMaterial({ map: texOf(stoneTex()) })); base.position.y = 0.3; g.add(base);
        const pil = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.45, 3, 6), new THREE.MeshLambertMaterial({ map: texOf(stoneTex("#b8b8c8")) })); pil.position.y = 2; g.add(pil);
        const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.5), new THREE.MeshBasicMaterial({ color: 0x6a6a7a })); gem.position.y = 4.1; gem.name = "gem"; g.add(gem);
        g.position.set(p.x, p.y, p.z); o = g; addCollider({ x: p.x, z: p.z, r: 0.6 });
      } else if (p.type === "statue") {
        const g = new THREE.Group();
        const base = new THREE.Mesh(new THREE.CylinderGeometry(3, 3.5, 1, 8), new THREE.MeshLambertMaterial({ map: texOf(stoneTex()) })); base.position.y = 0.5; g.add(base);
        const body = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.4, 5, 8), new THREE.MeshLambertMaterial({ map: texOf(stoneTex("#c8c8d0")) })); body.position.y = 3.5; g.add(body);
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.9, 8, 6), new THREE.MeshLambertMaterial({ color: 0xc8c8d0 })); head.position.y = 6.6; g.add(head);
        const star = new THREE.Mesh(new THREE.OctahedronGeometry(1.2), new THREE.MeshBasicMaterial({ color: 0xffd8f0 })); star.position.y = 9; star.name = "gem"; g.add(star);
        g.position.set(p.x, p.y, p.z); o = g; addCollider({ x: p.x, z: p.z, r: 3 });
      } else if (p.type === "domain") {
        const g = new THREE.Group(), mat = new THREE.MeshLambertMaterial({ map: texOf(stoneTex("#8a8a9a")) });
        for (const s of [-1, 1]) { const c = new THREE.Mesh(new THREE.BoxGeometry(1.2, 6, 1.2), mat); c.position.set(s * 3, 3, 0); g.add(c); addCollider({ x: p.x + s * 3, z: p.z, r: 0.8 }); }
        const top = new THREE.Mesh(new THREE.BoxGeometry(8.4, 1.2, 1.6), mat); top.position.y = 6.4; g.add(top);
        const portal = new THREE.Mesh(new THREE.PlaneGeometry(4.8, 5.4), new THREE.MeshBasicMaterial({ color: 0x9a70ff, transparent: true, opacity: 0.6, side: THREE.DoubleSide })); portal.position.y = 2.8; portal.name = "gem"; g.add(portal);
        g.position.set(p.x, p.y, p.z); o = g;
      } else if (p.type === "spire") {
        const g = new THREE.Group(), mat = new THREE.MeshLambertMaterial({ map: texOf(stoneTex("#4a3a6a")) });
        const t = new THREE.Mesh(new THREE.CylinderGeometry(7, 11, 80, 8), mat); t.position.y = 40; g.add(t);
        for (let i = 0; i < 6; i++) { const ring = new THREE.Mesh(new THREE.TorusGeometry(8 + (5 - i) * 0.4, 0.4, 4, 12), new THREE.MeshBasicMaterial({ color: 0xa070ff })); ring.rotation.x = Math.PI / 2; ring.position.y = 10 + i * 12; g.add(ring); }
        g.position.set(p.x, p.y - 1, p.z); o = g; addCollider({ x: p.x, z: p.z, r: 11 });
      } else if (p.type === "tower") {
        const g = new THREE.Group(), mat = new THREE.MeshLambertMaterial({ map: texOf(stoneTex("#e8e4f0")) });
        const t = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 3.2, 22, 8), mat); t.position.y = 11; g.add(t);
        const top = new THREE.Mesh(new THREE.ConeGeometry(3.2, 5, 8), new THREE.MeshLambertMaterial({ color: 0x4a6ad8 })); top.position.y = 24.5; g.add(top);
        const star = new THREE.Mesh(new THREE.OctahedronGeometry(1), new THREE.MeshBasicMaterial({ color: 0xffd84a })); star.position.y = 28; star.name = "gem"; g.add(star);
        g.position.set(p.x, p.y, p.z); o = g; addCollider({ x: p.x, z: p.z, r: 3.2 });
      } else if (p.type === "school") {
        const g = new THREE.Group(), y = p.y;
        const body = new THREE.Mesh(new THREE.BoxGeometry(8, 4.5, 6), wallM("#e8f0e0")); body.position.y = 2.25; g.add(body);
        const rg = new THREE.CylinderGeometry(0.01, 6.2, 3, 4, 1); rg.rotateY(Math.PI / 4); rg.scale(1, 1, 0.75);
        const roof = new THREE.Mesh(rg, new THREE.MeshLambertMaterial({ map: texOf(roofTex("#3a9a6a")) })); roof.position.y = 6; g.add(roof);
        ["fire", "water", "volt", "frost", "star", "shadow"].forEach((el, i) => { const o = new THREE.Mesh(new THREE.OctahedronGeometry(0.35), new THREE.MeshBasicMaterial({ color: (EL_INFO as any)[el].color })); o.position.set(-3 + i * 1.2, 5, 3.2); g.add(o); });
        g.position.set(p.x, y - 0.2, p.z); o = g; addCollider({ x: p.x, z: p.z, r: 4.2 });
      } else if (p.type === "event") {
        const g = new THREE.Group();
        const ring = new THREE.Mesh(new THREE.TorusGeometry(2.6, 0.35, 6, 24), new THREE.MeshBasicMaterial({ color: 0xffd84a })); ring.position.y = 3.2; g.add(ring);
        const portal = new THREE.Mesh(new THREE.CircleGeometry(2.3, 24), new THREE.MeshBasicMaterial({ color: 0x6a4ad8, transparent: true, opacity: 0.7, side: THREE.DoubleSide })); portal.position.y = 3.2; portal.name = "gem"; g.add(portal);
        const base = new THREE.Mesh(new THREE.CylinderGeometry(3, 3.4, 0.5, 8), new THREE.MeshLambertMaterial({ map: texOf(stoneTex()) })); base.position.y = 0.25; g.add(base);
        g.position.set(p.x, p.y, p.z); o = g;
      } else if (p.type === "puzzle") {
        const g = new THREE.Group();
        (p.data.els as string[]).forEach((el, i) => {
          const a = (i / 3) * Math.PI * 2, x = Math.cos(a) * 4, z = Math.sin(a) * 4;
          const pil = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 2.4, 6), new THREE.MeshLambertMaterial({ map: texOf(stoneTex()) })); pil.position.set(x, 1.2, z); g.add(pil);
          const orb = new THREE.Mesh(new THREE.OctahedronGeometry(0.45), new THREE.MeshBasicMaterial({ color: new THREE.Color((EL_INFO as any)[el].color).multiplyScalar(0.35) })); orb.position.set(x, 2.8, z); orb.name = "orb" + i; g.add(orb);
          addCollider({ x: p.x + x, z: p.z + z, r: 0.7 });
        });
        g.position.set(p.x, heightAt(p.x, p.z), p.z); o = g;
      }
      if (o) { this.group.add(o); this.poiObjs.set(p.id, o); }
    }
  }
  chestMesh(tier: number) {
    const g = new THREE.Group(), mat = new THREE.MeshLambertMaterial({ map: texOf(chestTex(tier)) });
    const b = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.8, 0.9), mat); b.position.y = 0.4; g.add(b);
    const lid = new THREE.Mesh(new THREE.BoxGeometry(1.32, 0.35, 0.92), mat); lid.position.y = 0.95; lid.name = "lid"; g.add(lid);
    return g;
  }
}
