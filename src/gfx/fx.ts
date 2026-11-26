import * as THREE from "three";
import { EL_INFO, type DmgEl } from "../data/elements";
import { PX } from "./billboard";
export interface SheetInfo { fps: number; loop: boolean; frames: number; frameSize: [number, number]; pivot: [number, number]; columns: number }
export const SHEETS: Record<string, SheetInfo & { tex?: THREE.Texture; img?: HTMLImageElement; geo?: THREE.PlaneGeometry; rows?: number }> = {};
export async function loadSheets(base = "./fx/") {
  const idx = await (await fetch(base + "index.json")).json();
  await Promise.all(Object.keys(idx).map((k) => new Promise<void>((res) => {
    const s = (SHEETS[k] = idx[k]); const img = new Image(); img.onload = () => {
      s.img = img; const t = new THREE.Texture(img); t.magFilter = t.minFilter = THREE.NearestFilter; t.generateMipmaps = false; t.colorSpace = THREE.SRGBColorSpace; t.needsUpdate = true; s.tex = t;
      s.rows = Math.ceil(s.frames / s.columns);
      const [fw, fh] = s.frameSize, [px, py] = s.pivot; const g = new THREE.PlaneGeometry(fw * PX, fh * PX); g.translate((fw / 2 - px) * PX, (py - fh / 2) * PX, 0); s.geo = g; res();
    }; img.onerror = () => res(); img.src = base + k + ".png";
  })));
}
const palCache = new Map<string, THREE.Vector3[]>();
export function palOf(el: DmgEl | string | null): THREE.Vector3[] | null {
  if (!el) return null; if (palCache.has(el)) return palCache.get(el)!;
  const hex = (EL_INFO as any)[el]?.pal || (el === "gold" ? ["#2a1c08", "#5a3e10", "#9a6c18", "#d8a428", "#ffd84a", "#fff09a", "#fffbe6", "#ffffff"] : el === "purple" ? ["#140a26", "#2b1252", "#481c88", "#6b2cc0", "#9a48ec", "#c684ff", "#ecc8ff", "#ffffff"] : el === "blue" ? ["#081830", "#0e2e5a", "#14508c", "#1c76bc", "#36a2e0", "#78ccf4", "#c4ecff", "#ffffff"] : el === "smoke" ? ["#100c18", "#201a2c", "#342c44", "#4c445e", "#6a6280", "#8c84a0", "#b8b0c8", "#e8e4f0"] : EL_INFO.phys.pal);
  const v = hex.map((h: string) => { const c = new THREE.Color(h); return new THREE.Vector3(c.r, c.g, c.b); });
  palCache.set(el, v); return v;
}
const VS = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`;
const FS = `uniform sampler2D map; uniform vec4 rect; uniform vec3 pal[8]; uniform float usePal; uniform float opacity; varying vec2 vUv;
void main(){ vec4 t = texture2D(map, vUv * rect.zw + rect.xy); if (t.a < 0.03) discard; vec3 col = t.rgb;
  if (usePal > 0.5) { float l = dot(t.rgb, vec3(0.299,0.587,0.114)); int i = int(clamp(floor(l * 7.99), 0.0, 7.0)); col = pal[i]; }
  gl_FragColor = vec4(col, t.a * opacity); }`;
export interface FxOpts { el?: DmgEl | string | null; scale?: number; flip?: boolean; follow?: THREE.Object3D; loop?: boolean; life?: number; vel?: THREE.Vector3; yaw?: number; add?: boolean; speed?: number; ground?: boolean }
export class Fx {
  mesh: THREE.Mesh; mat: THREE.ShaderMaterial; t = 0; alive = false; sheet!: (typeof SHEETS)[string]; o: FxOpts = {};
  constructor() {
    this.mat = new THREE.ShaderMaterial({ uniforms: { map: { value: null }, rect: { value: new THREE.Vector4() }, pal: { value: palOf("phys") }, usePal: { value: 1 }, opacity: { value: 1 } }, vertexShader: VS, fragmentShader: FS, transparent: true, depthWrite: false, side: THREE.DoubleSide });
    this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), this.mat); this.mesh.renderOrder = 5; this.mesh.frustumCulled = false; this.mesh.visible = false;
  }
  kill() { this.alive = false; this.mesh.visible = false; }
}
export class FxSystem {
  pool: Fx[] = []; group = new THREE.Group();
  constructor(n = 60) { for (let i = 0; i < n; i++) { const f = new Fx(); this.pool.push(f); this.group.add(f.mesh); } }
  spawn(name: string, pos: THREE.Vector3, o: FxOpts = {}): Fx | null {
    const s = SHEETS[name]; if (!s?.tex) return null;
    let f = this.pool.find((p) => !p.alive);
    if (!f) { f = this.pool.reduce((a, b) => (a.t > b.t ? a : b)); }
    f.alive = true; f.t = 0; f.sheet = s; f.o = o; f.mesh.visible = true;
    f.mesh.geometry = s.geo!; f.mesh.position.copy(pos); f.mesh.scale.set(o.flip ? -(o.scale || 1) : o.scale || 1, o.scale || 1, 1);
    const pal = palOf(o.el === undefined ? "phys" : o.el); f.mat.uniforms.map.value = s.tex; f.mat.uniforms.usePal.value = pal ? 1 : 0; if (pal) f.mat.uniforms.pal.value = pal;
    f.mat.uniforms.opacity.value = 1; f.mat.blending = o.add ? THREE.AdditiveBlending : THREE.NormalBlending;
    this.frame(f, 0); return f;
  }
  private frame(f: Fx, i: number) {
    const s = f.sheet, col = i % s.columns, row = Math.floor(i / s.columns), W = s.columns, H = s.rows!;
    f.mat.uniforms.rect.value.set(col / W, 1 - (row + 1) / H, 1 / W, 1 / H);
  }
  update(dt: number, camYaw: number) {
    for (const f of this.pool) {
      if (!f.alive) continue;
      f.t += dt * (f.o.speed || 1);
      const s = f.sheet; let i = Math.floor(f.t * s.fps);
      if (f.o.loop || s.loop) { i %= s.frames; if (f.o.life !== undefined && f.t > f.o.life) { f.kill(); continue; } }
      else if (i >= s.frames) { f.kill(); continue; }
      this.frame(f, i);
      if (f.o.follow) f.mesh.position.copy(f.o.follow.position);
      if (f.o.vel) f.mesh.position.addScaledVector(f.o.vel, dt);
      f.mesh.rotation.y = f.o.yaw !== undefined ? f.o.yaw : camYaw;
    }
  }
}
