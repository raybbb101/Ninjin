import * as THREE from "three";
import { enemyById, type EnemyDef } from "../data/enemies";
import { EL_INFO, type El } from "../data/elements";
import { Billboard } from "../gfx/billboard";
import { puffAtlas, wispAtlas, golemAtlas, EFW, EFH } from "../gfx/sprites";
import { buildAtlas, FW, FH, FR } from "../gfx/charsprite";
import { dirFor } from "./actor";
import { heightAt, SEA } from "../world/terrain";
import { angDiff } from "../core/math";

let NEXT_ID = 1;
export class Enemy {
  id: number; def: EnemyDef; lvl: number; pos = new THREE.Vector3(); home = new THREE.Vector3(); face = 0; hp: number; maxHp: number; atk: number;
  aura: { el: El; t: number } | null = null; innate: El | null = null; innateCd = 0; icd = new Map<string, number>();
  frozen = 0; slow = 0; slowT = 0; resdown = 0; resT = 0; dots: { dmg: number; t: number; tick: number; src: string; el: string }[] = [];
  state: "idle" | "chase" | "wind" | "recover" | "dead" | "return" = "idle"; stateT = 0; atkCd = 1.5; target: THREE.Vector3 | null = null; targetPid = 0;
  bb: Billboard; body: string; animT = Math.random() * 3; pending: any = null; camp?: string; bossId?: string; arena = false; deadT = 0; groundFn: (x: number, z: number) => number = heightAt;
  hurtFlash = 0; radius: number; remote = false; netT = 0; netPos = new THREE.Vector3(); moveTo = new THREE.Vector3(); moves = 0;
  constructor(public scene: THREE.Scene, defId: string, lvl: number, x: number, z: number, idOverride?: number) {
    this.id = idOverride ?? NEXT_ID++; if (idOverride && idOverride >= NEXT_ID) NEXT_ID = idOverride + 1;
    const d = (this.def = enemyById(defId)); this.lvl = lvl; this.body = d.body;
    // 1レベル～90レベルまでなだらかに強くなる（バランス調整 v0.2）
    const hpm = Math.pow(1 + lvl * 0.06, 1.6) * (1 + Math.pow(lvl / 60, 3)), atm = Math.pow(1 + lvl * 0.08, 1.45);
    this.maxHp = this.hp = d.hp * hpm * 0.4; this.atk = d.atk * atm * (d.boss ? 0.8 : 1);
    this.innate = d.el && d.body !== "humanoid" ? d.el : null; if (this.innate) this.aura = { el: this.innate, t: 999 };
    const col = d.el ? EL_INFO[d.el].color : "#a8a8b0";
    if (d.body === "puff") this.bb = new Billboard(puffAtlas(col, !!d.boss), EFW.puff, EFH.puff, d.scale, EFH.puff - 2);
    else if (d.body === "wisp") this.bb = new Billboard(wispAtlas(col), EFW.wisp, EFH.wisp, d.scale, EFH.wisp - 1);
    else if (d.body === "golem") this.bb = new Billboard(golemAtlas(d.el ? EL_INFO[d.el].color : "#ffb04a", d.boss ? "#6a4a3a" : "#8a8478"), EFW.golem, EFH.golem, d.scale * 0.9, EFH.golem - 2);
    else this.bb = new Billboard(buildAtlas("enemy_" + d.id, d.look, (d.weapon as any) || "sword"), FW, FH, d.scale);
    this.radius = (d.body === "golem" ? 0.9 : 0.6) * d.scale;
    this.pos.set(x, heightAt(x, z), z); this.home.copy(this.pos); this.netPos.copy(this.pos);
    scene.add(this.bb.root); scene.add(this.bb.shadow);
  }
  get boss() { return !!this.def.boss; }
  get alive() { return this.state !== "dead"; }
  dispose() { this.bb.dispose(); }
  render(dt: number, camYaw: number, tint: THREE.Color) {
    this.animT += dt; this.hurtFlash = Math.max(0, this.hurtFlash - dt); this.bb.flash = this.hurtFlash > 0.06 ? 1 : 0;
    const fly = this.body === "wisp" ? 1.2 * this.def.scale + Math.sin(this.animT * 2) * 0.2 : 0;
    const moving = this.state === "chase" || this.state === "return";
    if (this.body === "humanoid") {
      const { dir, flip } = dirFor(this.face, camYaw);
      let f = FR.idle[Math.floor(this.animT * 1.6) % 2];
      if (this.state === "dead") f = FR.hurt[0]; else if (this.state === "wind") f = FR.atk[0]; else if (this.state === "recover" && this.stateT > 0.25) f = this.stateT > 0.4 ? FR.atk[1] : FR.atk[2]; else if (moving) f = FR.walk[Math.floor(this.animT * 8) % 4]; else if (this.hurtFlash > 0) f = FR.hurt[0];
      if (this.frozen > 0) f = FR.idle[0];
      this.bb.setFrame(f, dir, dir === 2 ? flip : false);
    } else {
      let f = Math.floor(this.animT * 2.5) % 2;
      if (moving) f = 2 + (Math.floor(this.animT * 5) % 2); if (this.state === "wind") f = 4; if (this.state === "recover" && this.stateT > 0.3) f = 5; if (this.hurtFlash > 0.1) f = 6;
      if (this.frozen > 0) f = 0;
      const { flip } = dirFor(this.face, camYaw);
      this.bb.setFrame(f, 0, flip);
    }
    this.bb.root.position.set(this.pos.x, this.pos.y + fly, this.pos.z);
    if (this.state === "dead") { this.deadT += dt; this.bb.root.scale.setScalar(Math.max(0.01, 1 - this.deadT * 2)); }
    this.bb.face(camYaw, this.frozen > 0 ? new THREE.Color(0.7, 0.9, 1.4) : tint);
    const gy = this.groundFn(this.pos.x, this.pos.z);
    this.bb.shadow.position.set(this.pos.x, Math.max(gy, SEA) + 0.07, this.pos.z); this.bb.shadow.visible = this.state !== "dead";
  }
  inIcd(key: string, t: number, now: number) { const last = this.icd.get(key) || -99; if (now - last < t) return true; this.icd.set(key, now); return false; }
}
