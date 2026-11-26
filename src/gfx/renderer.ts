import * as THREE from "three";
import { clamp, lerp } from "../core/math";

export const QUALITY = { low: { h: 300, grass: 0, near: 1, fog: 230, tilt: false }, mid: { h: 380, grass: 40, near: 2, fog: 300, tilt: true }, high: { h: 470, grass: 80, near: 2, fog: 360, tilt: true } };
export type QKey = keyof typeof QUALITY;
export class Gfx {
  renderer: THREE.WebGLRenderer; scene = new THREE.Scene(); camera: THREE.PerspectiveCamera;
  rt: THREE.WebGLRenderTarget | null = null; post: THREE.Mesh; postScene = new THREE.Scene(); postCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  hemi: THREE.HemisphereLight; sun: THREE.DirectionalLight; fog: THREE.Fog; sky: THREE.Mesh; skyMat: THREE.ShaderMaterial;
  q: QKey = "mid"; auto = true; tilt = true; time = 8; // hour of day
  w = 1; h = 1; pr = 1; frameMs = 16; private acc: number[] = []; private lastQChange = 0;
  tint = new THREE.Color(1, 1, 1);
  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: "high-performance", stencil: false });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.camera = new THREE.PerspectiveCamera(42, 1, 0.3, 900);
    this.fog = new THREE.Fog(0xbfe4ff, 80, 300); this.scene.fog = this.fog;
    this.hemi = new THREE.HemisphereLight(0xdff0ff, 0x6a5a40, 1.4); this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xfff2d8, 1.6); this.sun.position.set(0.5, 1, 0.3); this.scene.add(this.sun);
    this.skyMat = new THREE.ShaderMaterial({
      uniforms: { top: { value: new THREE.Color(0x4a9ae8) }, bot: { value: new THREE.Color(0xcfeeff) }, stars: { value: 0 } },
      vertexShader: "varying vec3 vP; void main(){ vP = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",
      fragmentShader: `uniform vec3 top; uniform vec3 bot; uniform float stars; varying vec3 vP;
        float h(vec3 p){ return fract(sin(dot(floor(p*180.0), vec3(12.9898,78.233,37.719)))*43758.5453); }
        void main(){ vec3 d = normalize(vP); float t = clamp(d.y*1.6+0.15,0.0,1.0); vec3 c = mix(bot, top, t);
          if (stars > 0.0 && d.y > 0.05) { float s = step(0.997, h(d)); c += vec3(s*stars); }
          gl_FragColor = vec4(c,1.0); }`,
      side: THREE.BackSide, depthWrite: false, fog: false,
    });
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(800, 16, 10), this.skyMat); this.sky.renderOrder = -10; this.sky.frustumCulled = false; this.scene.add(this.sky);
    const pm = new THREE.ShaderMaterial({
      uniforms: { tDiffuse: { value: null }, res: { value: new THREE.Vector2(1, 1) }, tilt: { value: 1 } },
      vertexShader: "varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy,0.0,1.0); }",
      fragmentShader: `uniform sampler2D tDiffuse; uniform vec2 res; uniform float tilt; varying vec2 vUv;
        void main(){
          vec4 c = texture2D(tDiffuse, vUv);
          float b = tilt * smoothstep(0.18, 0.5, abs(vUv.y - 0.45)) ;
          if (b > 0.01) { vec2 px = 1.0/res * (1.0 + b*1.5); vec4 s = c*0.2;
            s += texture2D(tDiffuse, vUv + vec2(px.x,0.0))*0.2; s += texture2D(tDiffuse, vUv - vec2(px.x,0.0))*0.2;
            s += texture2D(tDiffuse, vUv + vec2(0.0,px.y))*0.2; s += texture2D(tDiffuse, vUv - vec2(0.0,px.y))*0.2; c = mix(c, s, b); }
          vec2 q = vUv - 0.5; float v = 1.0 - dot(q,q)*0.55; c.rgb *= v;
          float l = dot(c.rgb, vec3(0.299,0.587,0.114)); c.rgb = mix(vec3(l), c.rgb, 1.12);
          gl_FragColor = vec4(c.rgb, 1.0); }`,
      depthTest: false, depthWrite: false,
    });
    this.post = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), pm); this.post.frustumCulled = false; this.postScene.add(this.post);
    addEventListener("resize", () => this.resize());
    this.resize();
  }
  setQuality(q: QKey | "auto") {
    this.auto = q === "auto"; if (q !== "auto") this.q = q;
    this.resize();
  }
  resize() {
    const W = innerWidth, H = innerHeight, Q = QUALITY[this.q];
    this.pr = clamp(Q.h / H, 0.25, Math.min(devicePixelRatio, 1.5));
    this.w = Math.max(1, Math.round(W * this.pr)); this.h = Math.max(1, Math.round(H * this.pr));
    this.renderer.setPixelRatio(1); this.renderer.setSize(this.w, this.h, false);
    const cv = this.renderer.domElement; cv.style.width = W + "px"; cv.style.height = H + "px";
    this.camera.aspect = W / H; this.camera.updateProjectionMatrix();
    this.rt?.dispose(); this.rt = null;
    if (this.tilt && Q.tilt) {
      this.rt = new THREE.WebGLRenderTarget(this.w, this.h, { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter, depthBuffer: true });
      this.rt.texture.colorSpace = THREE.SRGBColorSpace;
      const m = this.post.material as THREE.ShaderMaterial; m.uniforms.tDiffuse.value = this.rt.texture; m.uniforms.res.value.set(this.w, this.h);
    }
    this.fog.far = Q.fog; this.fog.near = Q.fog * 0.35; this.camera.far = Q.fog + 60; this.camera.updateProjectionMatrix();
  }
  setDayTime(hour: number) {
    this.time = hour;
    const day = clamp(Math.sin(((hour - 6) / 24) * Math.PI * 2) * 1.4 + 0.35, 0, 1);
    const dusk = clamp(1 - Math.abs(hour - 18) / 1.8, 0, 1) + clamp(1 - Math.abs(hour - 6) / 1.8, 0, 1);
    const top = new THREE.Color(0x0a0c26).lerp(new THREE.Color(0x4a9ae8), day);
    const bot = new THREE.Color(0x1a1840).lerp(new THREE.Color(0xcfeeff), day).lerp(new THREE.Color(0xffa070), dusk * 0.6);
    this.skyMat.uniforms.top.value.copy(top); this.skyMat.uniforms.bot.value.copy(bot); this.skyMat.uniforms.stars.value = 1 - day;
    this.fog.color.copy(bot);
    this.hemi.intensity = lerp(0.55, 1.45, day); this.sun.intensity = lerp(0.15, 1.6, day);
    this.sun.color.set(0xfff2d8).lerp(new THREE.Color(0xff9a5a), dusk * 0.7);
    if (day < 0.2) this.sun.color.lerp(new THREE.Color(0x7a8aff), 0.6);
    const a = ((hour - 6) / 24) * Math.PI * 2; this.sun.position.set(Math.cos(a) * 0.6, Math.max(0.25, Math.sin(a)), 0.4);
    this.tint.setRGB(lerp(0.42, 1, day), lerp(0.45, 1, day), lerp(0.7, 1, day)).lerp(new THREE.Color(1, 0.8, 0.65), dusk * 0.4);
  }
  render() {
    this.sky.position.copy(this.camera.position);
    if (this.rt) {
      this.renderer.setRenderTarget(this.rt); this.renderer.render(this.scene, this.camera);
      this.renderer.setRenderTarget(null); (this.post.material as THREE.ShaderMaterial).uniforms.tilt.value = 1; this.renderer.render(this.postScene, this.postCam);
    } else { this.renderer.setRenderTarget(null); this.renderer.render(this.scene, this.camera); }
  }
  sample(dtMs: number, now: number) {
    this.frameMs = this.frameMs * 0.95 + dtMs * 0.05;
    if (!this.auto || now - this.lastQChange < 4000) return;
    const order: QKey[] = ["low", "mid", "high"], i = order.indexOf(this.q);
    if (this.frameMs > 24 && i > 0) { this.q = order[i - 1]; this.lastQChange = now; this.resize(); }
    else if (this.frameMs < 13 && i < 2 && now - this.lastQChange > 15000) { this.q = order[i + 1]; this.lastQChange = now; this.resize(); }
  }
}
