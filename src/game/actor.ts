import * as THREE from "three";
import { heightAt, normalAt, SEA } from "../world/terrain";
import { nearColliders, type Collider } from "../gfx/worldview";
import { Billboard } from "../gfx/billboard";
import { FR, FW, FH, buildAtlas, type Dir } from "../gfx/charsprite";
import { charById } from "../data/characters";
import { clamp } from "../core/math";

export type Mode = "ground" | "air" | "glide" | "climb" | "swim" | "plunge" | "dash" | "dead";
export function dirFor(face: number, camYaw: number): { dir: Dir; flip: boolean } {
  const fx = Math.sin(face), fz = Math.cos(face);
  const d = fx * Math.sin(camYaw) + fz * Math.cos(camYaw), r = fx * Math.cos(camYaw) - fz * Math.sin(camYaw);
  if (d > 0.45) return { dir: 0, flip: r < -0.2 && false };
  if (d < -0.45) return { dir: 1, flip: false };
  return { dir: 2, flip: r < 0 };
}
const tmpCol: Collider[] = [];
export interface GroundFn { (x: number, z: number): number }
export class PlayerActor {
  pos = new THREE.Vector3(); vel = new THREE.Vector3(); face = 0; mode: Mode = "ground"; stamina = 240; stamMax = 240; stamRegenDelay = 0;
  bb: Billboard; charId = ""; animT = 0; anim: keyof typeof FR = "idle"; atkFrame = -1; hurtT = 0; climbN = new THREE.Vector3(); sprintT = 0; dashT = 0; dashDir = new THREE.Vector3();
  ground: GroundFn = heightAt; arenaR = 0; arenaC = new THREE.Vector3(); fallStartY = 0; landDamage = 0; invuln = 0; climbLeap = 0; lastGroundY = 0; moving = false;
  constructor(public scene: THREE.Scene, charId: string) { this.bb = new Billboard(buildAtlas(charId, charById(charId).look, charById(charId).weapon), FW, FH); scene.add(this.bb.root); scene.add(this.bb.shadow); this.setChar(charId); }
  setChar(id: string) {
    if (id === this.charId) return; this.charId = id; const d = charById(id);
    const at = buildAtlas(id, d.look, d.weapon); this.bb.dispose(); this.bb = new Billboard(at, FW, FH); this.scene.add(this.bb.root); this.scene.add(this.bb.shadow);
  }
  groundAt(x: number, z: number) {
    if (this.arenaR > 0) { const dx = x - this.arenaC.x, dz = z - this.arenaC.z; return dx * dx + dz * dz < this.arenaR * this.arenaR ? this.arenaC.y : -200; }
    return heightAt(x, z);
  }
  waterDeep(x: number, z: number) { return this.arenaR === 0 && heightAt(x, z) < SEA - 1.2; }
  canAct() { return this.mode === "ground" || this.mode === "swim" ? true : false; }
  spendStam(n: number) { if (this.stamina < n) return false; this.stamina -= n; this.stamRegenDelay = 1.2; return true; }
  // move: camera-relative input already turned into world dir (mx,mz) with magnitude 0..1
  update(dt: number, mx: number, mz: number, sprint: boolean, locked: boolean) {
    const p = this.pos, v = this.vel, mag = Math.min(1, Math.hypot(mx, mz));
    this.invuln = Math.max(0, this.invuln - dt); this.hurtT = Math.max(0, this.hurtT - dt);
    if (this.stamRegenDelay > 0) this.stamRegenDelay -= dt; else if (this.mode === "ground") this.stamina = Math.min(this.stamMax, this.stamina + 30 * dt);
    const g = this.groundAt(p.x, p.z);
    if (this.mode === "dead") return;
    if (this.mode === "dash") {
      this.dashT -= dt; p.addScaledVector(this.dashDir, dt); this.collide(); const gy = this.groundAt(p.x, p.z); if (p.y < gy || this.dashT > 0) p.y = Math.max(gy, p.y);
      if (this.dashT <= 0) this.mode = p.y > gy + 0.3 ? "air" : "ground"; return;
    }
    if (this.mode === "ground") {
      if (this.waterDeep(p.x, p.z) && p.y < SEA - 0.9) { this.mode = "swim"; return; }
      let speed = locked ? 0 : mag > 0.6 ? 6 : 3.4 * (mag / 0.6);
      if (sprint && mag > 0.1 && !locked) { if (this.stamina > 0) { speed = 9; this.stamina -= 16 * dt; this.stamRegenDelay = 0.6; } }
      const nx = mx / (mag || 1), nz = mz / (mag || 1);
      if (mag > 0.05 && !locked) this.face = Math.atan2(nx, nz);
      const tx = p.x + nx * speed * dt * (mag > 0.05 ? 1 : 0), tz = p.z + nz * speed * dt * (mag > 0.05 ? 1 : 0);
      const n = normalAt(tx, tz), gy = this.groundAt(tx, tz);
      if (this.arenaR === 0 && n[1] < 0.62 && gy > p.y + 0.15 && mag > 0.3 && !locked) {
        if (this.stamina > 5) { this.mode = "climb"; this.climbN.set(n[0], n[1], n[2]); this.vel.set(0, 0, 0); return; }
      } else { p.x = tx; p.z = tz; }
      const ng = this.groundAt(p.x, p.z), here = normalAt(p.x, p.z);
      if (this.arenaR === 0 && here[1] < 0.6) { p.x += here[0] * 6 * dt; p.z += here[2] * 6 * dt; }
      if (ng < p.y - 0.6) { this.mode = "air"; v.set(nx * speed * (mag > 0.05 ? 1 : 0), 0, nz * speed * (mag > 0.05 ? 1 : 0)); this.fallStartY = p.y; }
      else p.y = ng;
      this.collide();
      this.moving = speed > 0.1 && mag > 0.05; this.anim = this.moving ? "walk" : "idle"; this.sprintT = sprint && this.moving ? 1 : 0;
      this.lastGroundY = p.y;
      return;
    }
    if (this.mode === "air" || this.mode === "glide" || this.mode === "plunge") {
      if (this.mode === "glide") {
        v.y = Math.max(v.y - 20 * dt, -2.4); const sp = 7.5;
        if (mag > 0.05) { this.face = Math.atan2(mx, mz); v.x += (mx * sp - v.x) * Math.min(1, dt * 3); v.z += (mz * sp - v.z) * Math.min(1, dt * 3); } else { v.x *= 1 - dt * 0.8; v.z *= 1 - dt * 0.8; }
        this.stamina -= 9 * dt; this.stamRegenDelay = 1; if (this.stamina <= 0) { this.stamina = 0; this.mode = "air"; }
        this.anim = "glide";
      } else if (this.mode === "plunge") { v.x = 0; v.z = 0; v.y = -32; this.anim = "atk"; }
      else { v.y -= 24 * dt; if (mag > 0.05 && !locked) { this.face = Math.atan2(mx, mz); v.x += (mx * 6 - v.x) * Math.min(1, dt * 2); v.z += (mz * 6 - v.z) * Math.min(1, dt * 2); } this.anim = v.y > 0 ? "jump" : "jump"; }
      p.addScaledVector(v, dt); this.collide();
      const gy = this.groundAt(p.x, p.z);
      if (this.arenaR > 0 && p.y < this.arenaC.y - 30) { p.copy(this.arenaC); v.set(0, 0, 0); this.mode = "ground"; return; }
      if (this.waterDeep(p.x, p.z) && p.y <= SEA - 0.9) { p.y = SEA - 0.9; this.mode = "swim"; v.set(0, 0, 0); return; }
      if (p.y <= gy) {
        const n = normalAt(p.x, p.z);
        if (this.arenaR === 0 && n[1] < 0.62 && this.mode !== "plunge" && this.stamina > 5) { p.y = gy; this.mode = "climb"; this.climbN.set(n[0], n[1], n[2]); v.set(0, 0, 0); return; }
        const fall = this.fallStartY - gy;
        if (this.mode === "air" && v.y < -19) this.landDamage = clamp((-v.y - 19) * 0.03, 0, 0.6);
        p.y = gy; const was = this.mode; this.mode = "ground"; v.set(0, 0, 0);
        if (was === "plunge") this.onPlungeLand?.(); void fall;
      }
      return;
    }
    if (this.mode === "climb") {
      const n = normalAt(p.x, p.z); this.climbN.set(n[0], n[1], n[2]);
      const hx = n[0], hz = n[2], hl = Math.hypot(hx, hz) || 1, ux = -hx / hl, uz = -hz / hl;
      this.face = Math.atan2(ux, uz);
      // input relative to wall: forward component -> up, side -> traverse
      const up = (mx * ux + mz * uz), side = (mx * -uz + mz * ux);
      let sp = 2.8; if (this.climbLeap > 0) { this.climbLeap -= dt; sp = 9; }
      const move = Math.abs(up) + Math.abs(side) > 0.1 || this.climbLeap > 0;
      if (move) { this.stamina -= (this.climbLeap > 0 ? 0 : 10) * dt; this.stamRegenDelay = 1; }
      const upv = this.climbLeap > 0 ? 1 : up;
      p.x += (ux * upv * Math.max(0.25, n[1]) + -uz * side) * sp * dt; p.z += (uz * upv * Math.max(0.25, n[1]) + ux * side) * sp * dt;
      p.y = this.groundAt(p.x, p.z);
      this.anim = "climb"; this.moving = move;
      const nn = normalAt(p.x, p.z);
      if (nn[1] > 0.7) { this.mode = "ground"; return; }
      if (this.stamina <= 0) { this.stamina = 0; this.mode = "air"; v.set(hx * 3, 0, hz * 3); p.x += hx * 0.6; p.z += hz * 0.6; this.fallStartY = p.y; }
      if (this.waterDeep(p.x, p.z) && p.y < SEA - 0.5) { this.mode = "swim"; }
      return;
    }
    if (this.mode === "swim") {
      let sp = 3.2 * mag; if (sprint && mag > 0.1) { sp = 5.6; this.stamina -= 20 * dt; }
      this.stamina -= 4 * dt; this.stamRegenDelay = 1;
      if (mag > 0.05) { this.face = Math.atan2(mx, mz); p.x += (mx / mag) * sp * dt; p.z += (mz / mag) * sp * dt; }
      this.collide();
      const gy = this.groundAt(p.x, p.z);
      if (gy > SEA - 1.0) { p.y = gy; this.mode = "ground"; return; }
      p.y = SEA - 0.9; this.anim = "swim"; this.moving = mag > 0.05;
      if (this.stamina <= 0) { this.stamina = 0; this.onDrown?.(); }
      return;
    }
  }
  onPlungeLand?: () => void; onDrown?: () => void;
  jump() {
    if (this.mode === "ground") { if (!this.spendStam(0)) return; this.mode = "air"; this.vel.y = 8; const s = this.moving ? (this.sprintT ? 8 : 5.5) : 0; this.vel.x = Math.sin(this.face) * s; this.vel.z = Math.cos(this.face) * s; this.fallStartY = this.pos.y; this.pos.y += 0.05; return true; }
    if (this.mode === "air" && this.stamina > 1 && this.pos.y > this.groundAt(this.pos.x, this.pos.z) + 1.5) { this.mode = "glide"; this.vel.y = Math.max(this.vel.y, -1); return true; }
    if (this.mode === "glide") { this.mode = "air"; return true; }
    if (this.mode === "climb") { if (this.spendStam(25)) this.climbLeap = 0.35; return true; }
    if (this.mode === "swim") return false;
    return false;
  }
  dash(dirx: number, dirz: number, dist: number, time: number) { this.mode = "dash"; this.dashT = time; this.dashDir.set(dirx * dist / time, 0, dirz * dist / time); this.face = Math.atan2(dirx, dirz); }
  collide() {
    const p = this.pos;
    for (const c of nearColliders(p.x, p.z, tmpCol)) {
      if (c.top !== undefined && p.y > c.top - 0.2) continue;
      const dx = p.x - c.x, dz = p.z - c.z, d = Math.hypot(dx, dz), r = c.r + 0.35;
      if (d < r && d > 1e-4) { p.x = c.x + (dx / d) * r; p.z = c.z + (dz / d) * r; }
    }
  }
  render(dt: number, camYaw: number, tint: THREE.Color, atkFrame: number) {
    this.animT += dt;
    const { dir, flip } = dirFor(this.face, camYaw);
    let f = 0;
    if (this.mode === "dead") f = FR.hurt[0];
    else if (this.hurtT > 0) f = FR.hurt[0];
    else if (atkFrame >= 0) f = atkFrame;
    else if (this.anim === "walk") f = FR.walk[Math.floor(this.animT * (this.sprintT ? 13 : 9)) % 4];
    else if (this.anim === "climb") f = FR.climb[this.moving ? Math.floor(this.animT * 5) % 2 : 0];
    else if (this.anim === "swim") f = FR.swim[Math.floor(this.animT * (this.moving ? 4 : 2)) % 2];
    else if (this.anim === "glide") f = FR.glide[0];
    else if (this.anim === "jump") f = FR.jump[0];
    else f = FR.idle[Math.floor(this.animT * 1.6) % 2];
    const rowDir = this.mode === "climb" ? 1 : dir;
    this.bb.setFrame(f, rowDir, rowDir === 2 ? flip : false);
    this.bb.root.position.copy(this.pos); if (this.mode === "swim") this.bb.root.position.y += 0.2;
    if (this.mode === "climb") { this.bb.root.position.x += this.climbN.x * 0.35; this.bb.root.position.z += this.climbN.z * 0.35; }
    this.bb.face(camYaw, tint);
    const gy = this.groundAt(this.pos.x, this.pos.z);
    this.bb.shadow.visible = this.mode !== "swim" && this.mode !== "climb" && gy > -100;
    this.bb.shadow.position.set(this.pos.x, Math.max(gy, SEA) + 0.06, this.pos.z);
    const hgt = this.pos.y - gy; this.bb.shadow.scale.setScalar(Math.max(0.4, 1.1 - hgt * 0.05));
  }
}
