import * as THREE from "three";
export const PX = 1 / 20;
const texCache = new Map<HTMLCanvasElement, THREE.Texture>();
export function texOf(cv: HTMLCanvasElement | HTMLImageElement): THREE.Texture {
  let t = texCache.get(cv as any);
  if (!t) { t = cv instanceof HTMLCanvasElement ? new THREE.CanvasTexture(cv) : new THREE.Texture(cv); t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.generateMipmaps = false; t.colorSpace = THREE.SRGBColorSpace; t.needsUpdate = true; texCache.set(cv as any, t); }
  return t;
}
const shadowGeo = new THREE.CircleGeometry(0.5, 12).rotateX(-Math.PI / 2);
const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false });
export class Billboard {
  root = new THREE.Group(); mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; tex: THREE.Texture; shadow: THREE.Mesh;
  W: number; H: number; flash = 0;
  constructor(public atlas: HTMLCanvasElement, public fw: number, public fh: number, public scale = 1, pivotY = fh - 2) {
    this.W = atlas.width; this.H = atlas.height;
    this.tex = texOf(atlas).clone(); this.tex.needsUpdate = true;
    this.tex.repeat.set(fw / this.W, fh / this.H);
    this.mat = new THREE.MeshBasicMaterial({ map: this.tex, alphaTest: 0.5, side: THREE.DoubleSide });
    const g = new THREE.PlaneGeometry(fw * PX * scale, fh * PX * scale); g.translate(0, (fh / 2 - (fh - pivotY)) * PX * scale, 0);
    this.mesh = new THREE.Mesh(g, this.mat); this.root.add(this.mesh);
    this.shadow = new THREE.Mesh(shadowGeo, shadowMat); this.shadow.scale.setScalar(scale * 1.1); this.shadow.renderOrder = 1;
  }
  setFrame(col: number, row: number, flip = false) {
    const sx = this.fw / this.W, sy = this.fh / this.H;
    this.tex.repeat.set(flip ? -sx : sx, sy);
    this.tex.offset.set(flip ? (col + 1) * sx : col * sx, 1 - (row + 1) * sy);
  }
  face(yaw: number, tint: THREE.Color) {
    this.mesh.rotation.y = yaw;
    if (this.flash > 0) this.mat.color.setRGB(3, 3, 3); else this.mat.color.copy(tint);
  }
  dispose() { this.mesh.geometry.dispose(); this.mat.dispose(); this.tex.dispose(); this.root.removeFromParent(); this.shadow.removeFromParent(); }
}
