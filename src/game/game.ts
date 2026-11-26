import * as THREE from "three";
import { Gfx, QUALITY } from "../gfx/renderer";
import { WorldView, CH, addCollider } from "../gfx/worldview";
import { FxSystem, type FxOpts } from "../gfx/fx";
import { PlayerActor, dirFor } from "./actor";
import { Member } from "./member";
import { Enemy } from "./enemy";
import { applyHit, castSkill, normalAttack, plunge, updateEnemy, NA, type Hit, type Proj, type Field } from "./combat";
import { S, persist, markDirty, addItem, has } from "./state";
import { initWorld, POIS, byId, START, type Poi } from "../world/worldgen";
import { heightAt, regionAt, SEA, HALF } from "../world/terrain";
import { EL_INFO, type DmgEl } from "../data/elements";
import { DROP_FAMILY } from "../data/items";
import { enemyById } from "../data/enemies";
import { bus } from "../core/events";
import { clamp, lerp, dist2, Rng } from "../core/math";
import { addAR, worldLevel, rollRelic } from "./progression";
import { FR, buildAtlas, FW, FH } from "../gfx/charsprite";
import { Billboard } from "../gfx/billboard";
import { charById } from "../data/characters";
import { questOnEvent, dailyEvent } from "./quests";

export interface Input { mx: number; my: number; sprint: boolean; atkHeld: boolean; atkTap: boolean; atkHold: boolean; eTap: boolean; eHold: boolean; qTap: boolean; jump: boolean; camDX: number; camDY: number; zoom: number }
export interface Num { x: number; y: number; z: number; text: string; color: string; t: number; big: boolean }
export class RemotePlayer {
  bb: Billboard; charId = ""; pos = new THREE.Vector3(); target = new THREE.Vector3(); face = 0; f = 0; mode = "ground"; name = "友達"; hp = 1; members: string[] = [];
  constructor(public scene: THREE.Scene, id: string) { this.bb = new Billboard(buildAtlas(id, charById(id).look, charById(id).weapon), FW, FH); scene.add(this.bb.root); scene.add(this.bb.shadow); this.charId = id; }
  setChar(id: string) { if (id === this.charId || !charById(id)) return; this.bb.dispose(); this.bb = new Billboard(buildAtlas(id, charById(id).look, charById(id).weapon), FW, FH); this.scene.add(this.bb.root); this.scene.add(this.bb.shadow); this.charId = id; }
  render(dt: number, yaw: number, tint: THREE.Color) {
    this.pos.lerp(this.target, Math.min(1, dt * 10));
    const { dir, flip } = dirFor(this.face, yaw); const row = this.mode === "climb" ? 1 : dir;
    this.bb.setFrame(this.f, row, row === 2 ? flip : false); this.bb.root.position.copy(this.pos); this.bb.face(yaw, tint);
    this.bb.shadow.position.set(this.pos.x, Math.max(heightAt(this.pos.x, this.pos.z), SEA) + 0.06, this.pos.z);
  }
  dispose() { this.bb.dispose(); }
}
export class Game {
  gfx: Gfx; view: WorldView; fx = new FxSystem(64); player: PlayerActor; members: Member[] = []; active = 0;
  enemies = new Map<number, Enemy>(); projs: Proj[] = []; eprojs: { pos: THREE.Vector3; vel: THREE.Vector3; dmg: number; el: DmgEl; life: number; fx: any; local: boolean }[] = []; fields: Field[] = [];
  timers: { t: number; f: () => void }[] = []; nums: Num[] = []; tele: { mesh: THREE.Mesh; t: number; max: number }[] = [];
  camYaw = 0; camPitch = 0.42; camDist = 11; camT = new THREE.Vector3(); shakeT = 0;
  input: Input = { mx: 0, my: 0, sprint: false, atkHeld: false, atkTap: false, atkHold: false, eTap: false, eHold: false, qTap: false, jump: false, camDX: 0, camDY: 0, zoom: 0 };
  now = 0; hour = 9; stats = { reacts: 0 }; eclipse = 0; partyDmgT = 0; partyDmgV = 0; buffAtk = 0; buffAtkVal = 0; shield = 0; shieldT = 0; switchCd = 0;
  combo = 0; comboT = 0; atkT = 0; atkFrameT = 0; atkQueued = false; holdT = 0; charging = false; burstLock = 0;
  pid = 1; role: "solo" | "host" | "guest" = "solo"; net: any = null; remotes = new Map<number, RemotePlayer>(); netEcho = false;
  chestObjs = new Map<string, THREE.Object3D>(); shardObjs = new Map<string, THREE.Mesh>(); interactables: { id: string; label: string; act: () => void; d: number }[] = [];
  arena: null | { kind: string; id: string; lv: number; waves: string[][]; wave: number; t: number; center: THREE.Vector3; ret: THREE.Vector3; mesh: THREE.Object3D; elvl: number; done: boolean; tlimit: number } = null;
  bossActive: Enemy | null = null; paused = false; dialogOpen = false; spawnT = 0; saveT = 0; netT = 0; lastWpCheck = 0; dead = false;
  private telePool: THREE.Mesh[] = []; npcs: { id: string; bb: Billboard; x: number; z: number; face: number }[] = [];
  constructor(canvas: HTMLCanvasElement) {
    initWorld();
    this.gfx = new Gfx(canvas);
    this.gfx.tilt = S.settings.tilt; this.gfx.setQuality(S.settings.quality as any);
    this.view = new WorldView(this.gfx.scene);
    this.gfx.scene.add(this.fx.group);
    this.applyQuality();
    if (!S.pos.x && !S.pos.z) S.pos = { x: START.x, y: heightAt(START.x, START.z), z: START.z };
    this.player = new PlayerActor(this.gfx.scene, S.party[0]);
    this.player.pos.set(S.pos.x, heightAt(S.pos.x, S.pos.z), S.pos.z); this.player.stamMax = S.stamMax; this.player.stamina = S.stamMax;
    this.player.onPlungeLand = () => plunge(this, this.cur); this.player.onDrown = () => this.wipe("溺れてしまった…");
    this.camYaw = 0; this.player.face = Math.PI; this.camT.copy(this.player.pos);
    this.buildParty();
    for (let i = 0; i < 8; i++) { const m = new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xff3a3a, transparent: true, opacity: 0.6, depthWrite: false })); m.visible = false; m.renderOrder = 3; this.gfx.scene.add(m); this.telePool.push(m); }
    for (const p of POIS) if (p.type === "shard" && !S.shards[p.id]) { const m = new THREE.Mesh(new THREE.OctahedronGeometry(0.35), new THREE.MeshBasicMaterial({ color: 0x9af0ff })); m.position.set(p.x, p.y, p.z); m.visible = false; this.gfx.scene.add(m); this.shardObjs.set(p.id, m); }
    for (const q of POIS) if (q.type === "npc") { const bb = new Billboard(buildAtlas(q.id, q.data.look, "none" as any), FW, FH); bb.root.position.set(q.x, q.y, q.z); bb.shadow.position.set(q.x, q.y + 0.06, q.z); this.gfx.scene.add(bb.root, bb.shadow); this.npcs.push({ id: q.id, bb, x: q.x, z: q.z, face: 0 }); addCollider({ x: q.x, z: q.z, r: 0.5 }); }
    bus.on("chars", () => { const ids = this.myParty().filter((id) => S.chars[id]); if (ids.join() !== this.members.map((m) => m.id).join()) this.buildParty(); else this.members.forEach((m) => m.refresh()); });
    bus.on("daily", (k: string, n: number) => dailyEvent(k, n));
  }
  applyQuality() { const Q = QUALITY[this.gfx.q]; this.view.near = Q.near; this.view.grassN = Q.grass; }
  get cur() { return this.members[this.active]; }
  myParty() { return this.role === "solo" ? S.party.slice(0, 4) : S.party.slice(0, 2); }
  buildParty() {
    const ids = this.myParty().filter((id) => S.chars[id]); const old = new Map(this.members.map((m) => [m.id, m]));
    this.members = ids.map((id) => { const m = old.get(id); if (m) { m.party = ids; m.refresh(); return m; } return new Member(id, ids); });
    this.active = clamp(this.active, 0, this.members.length - 1); if (this.cur.dead) this.active = Math.max(0, this.members.findIndex((m) => !m.dead));
    this.player.setChar(this.cur.id); bus.emit("party");
  }
  // ---------------- helpers used by combat ----------------
  later(t: number, f: () => void) { this.timers.push({ t, f }); }
  shake(a: number) { this.shakeT = Math.max(this.shakeT, a); }
  fxAt(name: string, pos: THREE.Vector3, el: DmgEl | string | null, scale = 1, flip = false, o: FxOpts = {}) {
    this.fx.spawn(name, pos, { el, scale, flip, ...o });
    if (this.net && !this.netEcho && !o.vel) this.net.send({ t: "fx", n: name, p: [pos.x, pos.y, pos.z], e: el, s: scale, f: flip });
  }
  enemiesNear(pos: THREE.Vector3, r: number) { const out: Enemy[] = []; for (const e of this.enemies.values()) if (e.alive && dist2(e.pos.x, e.pos.z, pos.x, pos.z) < (r + e.radius) ** 2 && Math.abs(e.pos.y - pos.y) < 6 + r) out.push(e); return out; }
  aoe(pos: THREE.Vector3, r: number, f: (e: Enemy) => void) { for (const e of this.enemiesNear(pos, r)) f(e); }
  sendHit(e: Enemy, h: Hit) {
    this.elementAt(e.pos, h.el);
    if (this.role === "guest") { this.net?.send({ t: "hit", id: e.id, h }); e.hurtFlash = 0.15; }
    else applyHit(this, e, h);
  }
  hitCircle(c: THREE.Vector3, r: number, h: Hit) { let n = 0; for (const e of this.enemiesNear(c, r)) { this.sendHit(e, { ...h, crit: Math.random() < h.cr }); n++; } this.elementAt(c, h.el, r); return n; }
  hitArc(c: THREE.Vector3, face: number, r: number, arc: number, h: Hit) {
    let n = 0; const fx = Math.sin(face), fz = Math.cos(face);
    for (const e of this.enemiesNear(c, r)) { const dx = e.pos.x - c.x, dz = e.pos.z - c.z, l = Math.hypot(dx, dz) || 1; if ((dx * fx + dz * fz) / l > Math.cos(arc) || l < 1) { this.sendHit(e, { ...h, crit: Math.random() < h.cr }); n++; this.fxAt("hit-spark", e.pos.clone().setY(e.pos.y + 0.9), h.el, 0.8); } }
    this.elementAt(c.clone().add(new THREE.Vector3(fx * r * 0.6, 0, fz * r * 0.6)), h.el, r * 0.6);
    if (n) this.hitStop(0.04);
    return n;
  }
  hitCapsule(a: THREE.Vector3, b: THREE.Vector3, r: number, h: Hit) {
    let n = 0; const ab = b.clone().sub(a); const L = ab.lengthSq() || 1;
    for (const e of this.enemies.values()) { if (!e.alive) continue; const t = clamp(e.pos.clone().sub(a).dot(ab) / L); const q = a.clone().addScaledVector(ab, t); if (dist2(q.x, q.z, e.pos.x, e.pos.z) < (r + e.radius) ** 2) { this.sendHit(e, { ...h, crit: Math.random() < h.cr }); n++; } }
    return n;
  }
  hitStopT = 0; hitStop(t: number) { this.hitStopT = Math.max(this.hitStopT, t); }
  shoot(m: Member, from: THREE.Vector3, tgt: Enemy | null, speed: number, h: Hit, o: { r?: number; scale?: number; aoe?: number; pierce?: boolean; life?: number } = {}, onHit?: () => void) {
    const dir = tgt ? tgt.pos.clone().add(new THREE.Vector3(0, tgt.body === "wisp" ? 1.3 * tgt.def.scale : 0.7 * tgt.def.scale, 0)).sub(from).normalize() : new THREE.Vector3(Math.sin(this.player.face), 0, Math.cos(this.player.face));
    this.shootDir(m, from, dir, speed, h, o, onHit, tgt);
  }
  shootDir(m: Member, from: THREE.Vector3, dir: THREE.Vector3, speed: number, h: Hit, o: { r?: number; scale?: number; aoe?: number; pierce?: boolean; life?: number } = {}, onHit?: () => void, home: Enemy | null = null) {
    const vel = dir.clone().multiplyScalar(speed);
    const right = new THREE.Vector3(Math.cos(this.camYaw), 0, -Math.sin(this.camYaw)), flip = vel.dot(right) < 0;
    const f = this.fx.spawn("orb", from, { el: h.el, scale: o.scale || 1, loop: true, life: o.life || 1.2, flip, vel });
    if (this.net && !this.netEcho) this.net.send({ t: "proj", p: [from.x, from.y, from.z], v: [vel.x, vel.y, vel.z], e: h.el, s: o.scale || 1, l: o.life || 1.2 });
    this.projs.push({ pos: from.clone(), vel, hit: h, life: o.life || 1.2, r: o.r || 0.6, pierce: !!o.pierce, hitIds: new Set(), fx: f, home, aoe: o.aoe, ...(onHit ? { onHit } : {}) } as any);
  }
  addField(f: Field) { this.fields.push(f); }
  pullEnemies(c: THREE.Vector3, r: number, k: number) { if (this.role === "guest") { this.net?.send({ t: "pull", c: [c.x, c.y, c.z], r, k }); return; } for (const e of this.enemiesNear(c, r)) { if (e.boss) continue; const d = c.clone().sub(e.pos); d.y = 0; const l = d.length(); if (l > 0.8) e.pos.addScaledVector(d, Math.min(k, l - 0.8) / l); } }
  gainEnergy(n: number, m: Member | null, particle = false) {
    for (const x of this.members) { if (x.dead) continue; const same = m && x.def.el === m.def.el ? 1.3 : 1, on = x === this.cur ? 1 : 0.6; x.energy = Math.min(x.maxEnergy, x.energy + n * same * on * x.st.er); }
    if (particle && m) this.fxAt("mote", this.player.pos.clone().setY(this.player.pos.y + 1.6), m.def.el, 1.2, false, { life: 0.5, loop: true });
  }
  healParty(v: number, pid: number, src?: Member) { if (pid !== this.pid) { this.net?.send({ t: "heal", v, to: pid }); return; } const hb = src ? 1 + src.st.heal : 1; for (const m of this.members) if (!m.dead) m.hp = Math.min(m.st.hp, m.hp + m.st.hp * v * hb); this.num(this.player.pos, "+" + Math.round(this.cur.st.hp * v * hb), "#8aff8a", false); }
  healActive(v: number, src: Member) { const m = this.cur; if (m.dead) return; const amt = (src.st.hp * 0.3 + m.st.hp * 0.7) * v * (1 + src.st.heal); m.hp = Math.min(m.st.hp, m.hp + amt); this.num(this.player.pos, "+" + Math.round(amt), "#8aff8a", false); }
  addShield(v: number, pid: number) { if (pid !== this.pid) { this.net?.send({ t: "shield", v, to: pid }); return; } this.addShieldAbs(this.cur.st.hp * v, 12); }
  addShieldAbs(v: number, t: number) { this.shield = Math.max(this.shield, v); this.shieldT = t; this.fxAt("ward", this.player.pos, this.cur.def.el, 1.2, false, { follow: this.player.bb.root, loop: true, life: Math.min(t, 6) }); }
  posOfPid(pid: number) { if (pid === this.pid) return this.player.pos; return this.remotes.get(pid)?.pos || this.player.pos; }
  nearestPlayer(p: THREE.Vector3): { pos: THREE.Vector3; d: number; pid: number } | null {
    let best: any = null;
    const consider = (pos: THREE.Vector3, pid: number, dead: boolean) => { if (dead) return; const d = dist2(pos.x, pos.z, p.x, p.z) + (pos.y - p.y) ** 2 * 0.3; if (!best || d < best.d) best = { pos, d, pid }; };
    consider(this.player.pos, this.pid, this.dead || this.player.mode === "dead");
    for (const [pid, r] of this.remotes) consider(r.pos, pid, r.hp <= 0);
    return best;
  }
  telegraph(e: Enemy, t: THREE.Vector3) {
    const kind = e.boss ? (["smash", "shoot", "cast"] as const)[e.moves % 3] : e.def.atkKind;
    if (kind === "shoot" || kind === "lunge") return;
    const c = kind === "cast" ? t.clone() : e.pos.clone().add(new THREE.Vector3(Math.sin(e.face) * 1.2 * e.def.scale, 0, Math.cos(e.face) * 1.2 * e.def.scale));
    const r = kind === "cast" ? (e.boss ? 4 : 2.6) : e.boss ? 4.5 : 2.2;
    this.showTele(c, r, kind === "cast" ? 1.1 : 0.65);
    if (this.net && !this.netEcho) this.net.send({ t: "tele", p: [c.x, c.y, c.z], r, d: kind === "cast" ? 1.1 : 0.65 });
  }
  showTele(c: THREE.Vector3, r: number, dur: number) { const m = this.telePool.find((x) => !x.visible); if (!m) return; m.visible = true; m.position.set(c.x, (this.arena ? this.arena.center.y : heightAt(c.x, c.z)) + 0.12, c.z); m.scale.setScalar(r); this.tele.push({ mesh: m, t: 0, max: dur }); }
  enemyAttack(e: Enemy, c: THREE.Vector3, r: number, mult: number, el: DmgEl) {
    const dmg = e.atk * mult * (e.slowT > 0 ? 0.7 : 1);
    this.checkPlayerHit(c, r, dmg, el, e.lvl);
    if (this.net) this.net.send({ t: "eatk", c: [c.x, c.y, c.z], r, dmg, el, lvl: e.lvl });
  }
  checkPlayerHit(c: THREE.Vector3, r: number, dmg: number, el: DmgEl, lvl: number) { const p = this.player.pos; if (dist2(p.x, p.z, c.x, c.z) < (r + 0.4) ** 2 && Math.abs(p.y - c.y) < 3 + r * 0.3) this.hurt(dmg, el, lvl); }
  enemyProjectile(e: Enemy, dir: THREE.Vector3, el: DmgEl) {
    const from = e.pos.clone().add(new THREE.Vector3(0, e.body === "wisp" ? 1.3 * e.def.scale : 1, 0)), vel = dir.clone().multiplyScalar(e.boss ? 13 : 11);
    const dmg = e.atk * (e.boss ? 0.9 : 0.85);
    this.spawnEProj(from, vel, dmg, el, true);
    if (this.net) this.net.send({ t: "eproj", p: [from.x, from.y, from.z], v: [vel.x, vel.y, vel.z], dmg, el });
  }
  spawnEProj(from: THREE.Vector3, vel: THREE.Vector3, dmg: number, el: DmgEl, local: boolean) {
    const f = this.fx.spawn("orb", from, { el: el === "phys" ? "smoke" : el, scale: 0.8, loop: true, life: 2, vel });
    this.eprojs.push({ pos: from.clone(), vel, dmg, el, life: 2, fx: f, local });
  }
  hurt(raw: number, el: DmgEl, lvl: number) {
    const p = this.player, m = this.cur;
    if (p.invuln > 0 || m.dead || this.burstLock > 0) return;
    let dmg = raw * (1 - m.st.def / (m.st.def + 5 * lvl + 500));
    if (this.shield > 0) { const a = Math.min(this.shield, dmg); this.shield -= a; dmg -= a; if (this.shield <= 0) this.shieldT = 0; }
    if (dmg <= 0) return;
    m.hp -= dmg; p.hurtT = 0.25; p.invuln = 0.35; this.num(p.pos, Math.round(dmg) + "", "#ff6a6a", false); this.shake(0.12);
    if (m.hp <= 0) this.memberDown();
  }
  memberDown() {
    const m = this.cur; m.hp = 0; m.dead = true; bus.emit("toast", `${m.def.name}が倒れた`);
    const next = this.members.findIndex((x) => !x.dead);
    if (next < 0) { this.wipe("全員倒れてしまった…"); return; }
    this.switchTo(next, true);
  }
  wipe(msg: string) {
    bus.emit("toast", msg);
    for (const m of this.members) { m.dead = false; m.hp = m.st.hp * 0.3; }
    this.player.stamina = this.player.stamMax;
    if (this.arena && this.role !== "solo") { this.player.pos.copy(this.arena.center).add(new THREE.Vector3(0, 0, 10)); this.player.mode = "ground"; return; }
    if (this.arena) { this.leaveArena(false); return; }
    const wp = this.nearestWaypoint(this.player.pos.x, this.player.pos.z) || byId.get("wp_beach")!;
    this.teleport(wp.x + 2, wp.z + 2);
  }
  nearestWaypoint(x: number, z: number) { let best: Poi | null = null, bd = Infinity; for (const p of POIS) if (p.type === "waypoint" && (S.wps[p.id] || p.id === "wp_beach")) { const d = dist2(x, z, p.x, p.z); if (d < bd) { bd = d; best = p; } } return best; }
  teleport(x: number, z: number) {
    if (this.arena) return;
    this.player.pos.set(x, heightAt(x, z), z); this.player.vel.set(0, 0, 0); this.player.mode = this.player.waterDeep(x, z) ? "swim" : "ground"; this.camT.copy(this.player.pos);
    for (const e of [...this.enemies.values()]) if (!e.arena && this.role !== "guest") this.removeEnemy(e);
    this.fxAt("beacon", this.player.pos, "water", 1);
  }
  num(pos: THREE.Vector3, text: string, color: string, big: boolean) { this.nums.push({ x: pos.x + (Math.random() - 0.5) * 0.6, y: pos.y + 1.8, z: pos.z, text, color, t: 0, big }); if (this.nums.length > 60) this.nums.shift(); }
  damageEnemy(e: Enemy, dmg: number, crit: boolean, el: DmgEl, label: string, src: string, dot = false) {
    if (!e.alive) return;
    dmg = Math.max(1, Math.round(dmg)); e.hp -= dmg; if (!dot) bus.emit("sfx", label ? "react" : "hit"); e.hurtFlash = dot ? 0.05 : 0.15;
    const col = EL_INFO[el].color; this.num(e.pos, dmg + "", crit ? "#ffe04a" : el === "phys" ? "#ffffff" : col, crit);
    if (label) { this.nums.push({ x: e.pos.x, y: e.pos.y + 2.6, z: e.pos.z, text: label, color: col, t: 0, big: true }); }
    if (this.net) this.net.send({ t: "dmg", id: e.id, d: dmg, c: crit, e: el, l: label });
    if (e.hp <= 0) this.killEnemy(e);
  }
  killEnemy(e: Enemy) {
    e.hp = 0; e.state = "dead"; this.fxAt("poof", e.pos, "smoke", e.def.scale);
    this.later(0.6, () => this.removeEnemy(e));
    this.rewardKill(e.def.id, e.lvl, e.pos);
    if (this.net) this.net.send({ t: "kill", id: e.id, def: e.def.id, lvl: e.lvl });
    if (e.camp && !e.arena) this.checkCamp(e.camp);
    if (e.bossId) this.bossDefeated(e.bossId, e);
  }
  rewardKill(defId: string, lvl: number, pos?: THREE.Vector3) {
    const d = enemyById(defId), fam = DROP_FAMILY[d.drop], tier = lvl >= 40 ? 2 : lvl >= 20 ? 1 : 0, rng = Math.random;
    addItem("coin", Math.round((40 + lvl * 6) * (d.boss ? 12 : 1)));
    addItem(fam[tier], d.boss ? 4 : rng() < 0.6 ? 1 : 2); if (tier > 0 && rng() < 0.5) addItem(fam[tier - 1], 1); if (rng() < 0.08 + (d.boss ? 1 : 0)) addItem(fam[Math.min(2, tier + 1)], 1);
    addAR(d.boss ? 100 : 3); S.stats.kills++; if (!d.boss && Math.random() < 0.06) addItem("gem", 5);
    if (d.boss && d.el) addItem("gem_" + d.el, 2 + Math.floor(lvl / 25));
    if (d.boss) { for (let i = 0; i < 2; i++) rollRelic(new Rng(Date.now() + i), lvl >= 40 ? 5 : 4); addItem("gem", 40); addItem("exp3", 1); bus.emit("toast", "遺紋を手に入れた！"); dailyEvent("boss", 1); }
    if (d.body === "golem" || d.body === "wisp") dailyEvent("elite", 1);
    dailyEvent("kill", 1); this.gainEnergy(d.boss ? 10 : 2, null); markDirty();
    void pos;
  }
  removeEnemy(e: Enemy) { e.dispose(); this.enemies.delete(e.id); if (this.bossActive === e) this.bossActive = null; }
  // element puzzles ------------------------------------------------------------
  elementAt(pos: THREE.Vector3, el: DmgEl, r = 1.5) {
    if (el === "phys" || this.role === "guest") return;
    for (const p of POIS) {
      if (p.type !== "puzzle" || S.opened["puz" + p.id] || dist2(p.x, p.z, pos.x, pos.z) > 100) continue;
      const lit = (S.flags["lit_" + p.id] ||= [0, 0, 0]) as number[];
      (p.data.els as string[]).forEach((pe, i) => {
        const a = (i / 3) * Math.PI * 2, x = p.x + Math.cos(a) * 4, z = p.z + Math.sin(a) * 4;
        if (pe === el && !lit[i] && dist2(x, z, pos.x, pos.z) < (r + 1.6) ** 2) {
          lit[i] = 1; const o = this.view.poiObjs.get(p.id)?.getObjectByName("orb" + i) as THREE.Mesh; if (o) (o.material as THREE.MeshBasicMaterial).color.set(EL_INFO[el].color);
          this.fxAt("hit-spark", new THREE.Vector3(x, heightAt(p.x, p.z) + 2.8, z), el, 1.2); markDirty();
          if (lit.every((v) => v)) { S.opened["puz" + p.id] = 1; bus.emit("toast", "仕掛けが解けた！宝箱が現れた"); S.flags["pzc_" + p.id] = 1; }
        }
      });
    }
  }
  // ---------------- world population ----------------
  levelAt(x: number, z: number) {
    const reg = regionAt(x, z), dTown = Math.hypot(x - 20, z - 236);
    const base = reg === "plains" ? Math.min(12, 1 + Math.floor(dTown / 45)) : reg === "canyon" ? 22 : reg === "peaks" ? 32 : 45;
    return Math.min(95, base + worldLevel() * 8);
  }
  spawnAround() {
    if (this.arena || this.role === "guest") return;
    const pts = [this.player.pos, ...[...this.remotes.values()].map((r) => r.pos)];
    const near = (p: Poi, r: number) => pts.some((q) => dist2(q.x, q.z, p.x, p.z) < r * r);
    const nowMs = Date.now();
    for (const p of POIS) {
      if (p.type === "camp") {
        const live = [...this.enemies.values()].filter((e) => e.camp === p.id);
        const cleared = S.camps[p.id] && nowMs - S.camps[p.id] < 300000;
        if (!live.length && !cleared && near(p, 85)) {
          const lv = this.levelAt(p.x, p.z);
          (p.data.enemies as string[]).forEach((id, i) => { const a = (i / p.data.enemies.length) * Math.PI * 2; const e = this.addEnemy(id, lv + (id === "golem" ? 2 : 0), p.x + Math.cos(a) * 3.5, p.z + Math.sin(a) * 3.5); e.camp = p.id; });
        } else if (live.length && !near(p, 130) && live.every((e) => e.state === "idle")) live.forEach((e) => this.removeEnemy(e));
      } else if (p.type === "boss") {
        const live = [...this.enemies.values()].find((e) => e.bossId === p.id);
        const ready = !S.bosses[p.id] || nowMs - S.bosses[p.id] > 60000;
        if (p.id === "b_knight" && !this.questAllowsKnight()) continue;
        if (!live && ready && near(p, 70)) { const e = this.addEnemy(p.data.enemy, this.levelAt(p.x, p.z) + 4, p.x, p.z); e.bossId = p.id; }
        else if (live && !near(p, 120)) this.removeEnemy(live);
      }
    }
  }
  questAllowsKnight() { return S.quest.main >= 5; }
  addEnemy(defId: string, lvl: number, x: number, z: number, id?: number) { const e = new Enemy(this.gfx.scene, defId, lvl, x, z, id); this.enemies.set(e.id, e); return e; }
  checkCamp(id: string) {
    const left = [...this.enemies.values()].filter((e) => e.camp === id && e.alive);
    if (left.length) return;
    S.camps[id] = Date.now(); markDirty();
    if (!S.opened["campchest_" + id]) { S.flags["cc_" + id] = 1; bus.emit("toast", "拠点を制圧した！宝箱が現れた"); }
    questOnEvent(this, "camp", id);
  }
  bossDefeated(id: string, e: Enemy) { S.bosses[id] = Date.now(); markDirty(); bus.emit("toast", `${e.def.name}を倒した！`); questOnEvent(this, "boss", id); }
  // ---------------- chests & interactables ----------------
  chestList() {
    const list: { id: string; x: number; z: number; tier: number }[] = [];
    for (const p of POIS) {
      if (p.type === "chest" && !S.opened[p.id]) list.push({ id: p.id, x: p.x, z: p.z, tier: p.data.tier });
      if (p.type === "camp" && S.flags["cc_" + p.id] && !S.opened["campchest_" + p.id]) list.push({ id: "campchest_" + p.id, x: p.x, z: p.z, tier: 2 });
      if (p.type === "puzzle" && S.flags["pzc_" + p.id] && !S.opened["pzchest_" + p.id]) list.push({ id: "pzchest_" + p.id, x: p.x, z: p.z, tier: 3 });
    }
    return list;
  }
  openChest(id: string, tier: number) {
    if (this.role === "guest") { bus.emit("toast", "マルチプレイ中は他の人の世界の宝箱は開けられません"); return; }
    S.opened[id] = 1; const o = this.chestObjs.get(id); if (o) { const lid = o.getObjectByName("lid"); if (lid) { lid.rotation.x = -1.2; lid.position.z -= 0.3; lid.position.y += 0.2; } this.later(1.2, () => { o.removeFromParent(); this.chestObjs.delete(id); }); }
    const gems = [0, 5, 12, 25, 50][tier], coin = [0, 1000, 3000, 8000, 15000][tier];
    addItem("gem", gems); addItem("coin", coin);
    const r = Math.random(), loot: string[] = [`星晶 ×${gems}`, `コイン ×${coin}`];
    const give = (k: string, n: number, nm: string) => { addItem(k, n); loot.push(`${nm} ×${n}`); };
    if (tier >= 2) { give("exp2", tier + 1, "冒険家の手記"); give("ore2", tier, "精鉄"); } else { give("exp1", 3, "旅の手記"); give("ore1", 2, "鉄の欠片"); }
    if (tier >= 4) give("ticket_s", 1, "銀の願い札");
    if (tier >= 3) { rollRelic(new Rng(Date.now()), tier >= 4 ? 5 : 4); loot.push("遺紋 ×1"); }
    if (Math.random() < 0.3) give("food1", 1, "おにぎり");
    addAR([0, 10, 20, 40, 80][tier]); dailyEvent("chest", 1); markDirty();
    this.fxAt("wish-star", this.player.pos.clone().setY(this.player.pos.y + 1.5), tier >= 3 ? "gold" : "blue", 0.35);
    bus.emit("loot", loot);
  }
  updateInteract() {
    const p = this.player.pos, list: Game["interactables"] = [];
    const add = (id: string, x: number, z: number, r: number, label: string, act: () => void) => { const d = dist2(p.x, p.z, x, z); if (d < r * r) list.push({ id, label, act, d }); };
    for (const c of this.chestList()) {
      if (dist2(p.x, p.z, c.x, c.z) < 70 * 70 && !this.chestObjs.has(c.id)) { const m = this.view.chestMesh(c.tier); m.position.set(c.x, heightAt(c.x, c.z), c.z); m.rotation.y = (c.x * 13) % 6; this.gfx.scene.add(m); this.chestObjs.set(c.id, m); }
      add(c.id, c.x, c.z, 2.6, "宝箱を開ける", () => this.openChest(c.id, c.tier));
    }
    for (const [id, o] of this.chestObjs) if (dist2(p.x, p.z, o.position.x, o.position.z) > 90 * 90) { o.removeFromParent(); this.chestObjs.delete(id); }
    if (!this.arena) for (const q of POIS) {
      if (q.type === "npc") add(q.id, q.x, q.z, 4.2, `${q.name}と話す`, () => bus.emit("npc", q.id));
      else if (q.type === "statue") add(q.id, q.x, q.z, 6, "星の像に祈る", () => bus.emit("statue", q.id));
      else if (q.type === "domain") add(q.id, q.x, q.z, 6, `${q.name}に入る`, () => bus.emit("domain", q.id));
      else if (q.type === "tower") add(q.id, q.x, q.z + 3, 6, "星の塔に挑む", () => bus.emit("tower"));
      else if (q.type === "waypoint" && !S.wps[q.id] && dist2(p.x, p.z, q.x, q.z) < 36) { S.wps[q.id] = 1; markDirty(); addAR(20); bus.emit("toast", `ワープポイント「${q.name}」を解放した`); this.fxAt("beacon", new THREE.Vector3(q.x, q.y, q.z), "water", 1.2); questOnEvent(this, "goto", q.id); }
    }
    // quest goto targets
    if (this.now - this.lastWpCheck > 0.5) { this.lastWpCheck = this.now; questOnEvent(this, "near", ""); }
    list.sort((a, b) => a.d - b.d); this.interactables = list.slice(0, 3);
    // shards
    for (const [id, m] of this.shardObjs) {
      const d = dist2(p.x, p.z, m.position.x, m.position.z); m.visible = d < 120 * 120; if (!m.visible) continue;
      m.rotation.y += 0.03; m.position.y = byId.get(id)!.y + Math.sin(this.now * 2 + m.position.x) * 0.2;
      if (d < 1.8 && Math.abs(p.y + 1 - m.position.y) < 2.2) { S.shards[id] = 1; addItem("shard", 1); addAR(10); m.removeFromParent(); this.shardObjs.delete(id); this.fxAt("hit-spark", m.position, "water", 1.2); bus.emit("toast", "星の欠片を手に入れた"); dailyEvent("shard", 1); markDirty(); }
    }
  }
  // ---------------- arenas (domains & tower) ----------------
  domainLevel(lv: number) { return [8, 24, 42, 62][lv - 1] + worldLevel() * 2; }
  startDomain(id: string, lv: number) {
    const kind = byId.get(id)!.data.kind;
    const pool = kind === "relic" ? ["bandit", "archer", "shaman", "golem"] : kind === "book" ? ["puff_fire", "puff_water", "wisp_volt", "wisp_star"] : ["golem", "wisp_frost", "puff_frost", "bandit"];
    const r = new Rng(lv * 7 + id.length), coop = this.role === "host" ? 1 : 0;
    const waves = [0, 1, 2].slice(0, lv >= 3 ? 3 : 2).map((w) => Array.from({ length: 3 + w + (lv >= 3 ? 1 : 0) + coop }, () => r.pick(pool)));
    this.enterArena("domain", id, lv, waves, this.domainLevel(lv));
  }
  enterArena(kind: string, id: string, lv: number, waves: string[][], elvl: number, tlimit = 0) {
    if (this.role === "guest" || (this.role === "host" && kind !== "domain")) { bus.emit("toast", kind === "domain" ? "ホストだけが秘境を始められます" : "マルチプレイ中は入れません"); return; }
    if (this.arena) return;
    const center = new THREE.Vector3(0, 60, -760);
    const g = new THREE.Group();
    const plat = new THREE.Mesh(new THREE.CylinderGeometry(20, 16, 4, 24), new THREE.MeshLambertMaterial({ color: kind === "tower" ? 0x5a5a8a : 0x7a6a5a })); plat.position.y = -2; g.add(plat);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(19.5, 0.3, 4, 32), new THREE.MeshBasicMaterial({ color: kind === "tower" ? 0xffd84a : 0x9a70ff })); ring.rotation.x = Math.PI / 2; ring.position.y = 0.1; g.add(ring);
    g.position.copy(center); this.gfx.scene.add(g);
    for (const e of [...this.enemies.values()]) this.removeEnemy(e);
    this.arena = { kind, id, lv, waves, wave: -1, t: 0, center, ret: this.player.pos.clone(), mesh: g, elvl, done: false, tlimit };
    this.player.arenaR = 20; this.player.arenaC.copy(center); this.player.pos.copy(center).add(new THREE.Vector3(0, 0, 12)); this.player.mode = "ground";
    for (const m of this.members) { m.dead = false; m.hp = m.st.hp; } this.player.stamina = this.player.stamMax;
    this.camT.copy(this.player.pos); this.camYaw = 0;
    bus.emit("arena", true); this.later(1.2, () => this.nextWave());
    if (this.role === "host") this.net?.send({ t: "arenaIn", kind, id, lv, c: [center.x, center.y, center.z] });
  }
  // guest follows the host into a domain: same platform, host runs the enemies
  joinArena(kind: string, id: string, lv: number, c: number[]) {
    if (this.arena) return;
    const center = new THREE.Vector3(c[0], c[1], c[2]), g = new THREE.Group();
    const plat = new THREE.Mesh(new THREE.CylinderGeometry(20, 16, 4, 24), new THREE.MeshLambertMaterial({ color: 0x7a6a5a })); plat.position.y = -2; g.add(plat);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(19.5, 0.3, 4, 32), new THREE.MeshBasicMaterial({ color: 0x9a70ff })); ring.rotation.x = Math.PI / 2; ring.position.y = 0.1; g.add(ring);
    g.position.copy(center); this.gfx.scene.add(g);
    for (const e of [...this.enemies.values()]) this.removeEnemy(e);
    this.arena = { kind, id, lv, waves: [], wave: 0, t: 0, center, ret: this.player.pos.clone(), mesh: g, elvl: 0, done: false, tlimit: 0, remote: true } as any;
    this.player.arenaR = 20; this.player.arenaC.copy(center); this.player.pos.copy(center).add(new THREE.Vector3(3, 0, 12)); this.player.mode = "ground";
    for (const m of this.members) { m.dead = false; m.hp = m.st.hp; } this.player.stamina = this.player.stamMax;
    this.camT.copy(this.player.pos); this.camYaw = 0; bus.emit("arena", true); bus.emit("toast", "ホストと一緒に秘境に入った！");
  }
  nextWave() {
    const A = this.arena!; A.wave++;
    if (A.wave >= A.waves.length) { A.done = true; bus.emit("arenaWin", A); return; }
    bus.emit("toast", `ウェーブ ${A.wave + 1} / ${A.waves.length}`); this.net?.send({ t: "toast", s: `ウェーブ ${A.wave + 1} / ${A.waves.length}` });
    A.waves[A.wave].forEach((id, i) => { const a = (i / A.waves[A.wave].length) * Math.PI * 2; const e = this.addEnemy(id, A.elvl + (enemyById(id).boss ? 3 : 0), A.center.x + Math.cos(a) * 9, A.center.z - 2 + Math.sin(a) * 6); e.arena = true; e.groundFn = (x, z) => this.player.groundAt(x, z); e.pos.y = A.center.y; e.home.copy(e.pos); this.fxAt("beacon", e.pos, "shadow", 0.8); });
  }
  leaveArena(win: boolean) {
    const A = this.arena; if (!A) return;
    for (const e of [...this.enemies.values()]) this.removeEnemy(e);
    A.mesh.removeFromParent(); this.arena = null; this.player.arenaR = 0;
    if (this.role === "host") this.net?.send({ t: "arenaOut" });
    this.player.pos.copy(A.ret); this.player.mode = "ground"; this.camT.copy(this.player.pos);
    bus.emit("arena", false); void win;
  }
  // ---------------- main update ----------------
  switchTo(i: number, force = false) {
    if (i === this.active || i >= this.members.length || this.members[i].dead) return;
    if (!force && (this.switchCd > 0 || this.atkT > 0 || !["ground", "air", "glide", "swim"].includes(this.player.mode))) return;
    this.active = i; this.switchCd = 1; this.player.setChar(this.cur.id); this.fxAt("hit-spark", this.player.pos.clone().setY(this.player.pos.y + 1), this.cur.def.el, 1.2); bus.emit("party");
  }
  tryE(hold: boolean) {
    const m = this.cur; if (m.charges <= 0 || this.player.mode === "climb" || this.player.mode === "swim" || this.player.mode === "dash") return;
    m.charges--; if (m.cdE <= 0) m.cdE = m.eCdFull * (hold ? 1.3 : 1); this.atkT = 0.35; this.atkFrameT = 0.35;
    castSkill(this, m, false); bus.emit("sfx", "skill");
  }
  tryQ() {
    const m = this.cur; if (m.energy < m.maxEnergy || ["climb", "swim", "dash", "glide"].includes(this.player.mode)) return;
    m.energy = 0; this.burstLock = 0.8; this.atkT = 0.6; this.atkFrameT = 0.6; this.player.invuln = 1; bus.emit("burst", m.id);
    castSkill(this, m, true);
  }
  update(dt: number) {
    if (this.hitStopT > 0) { this.hitStopT -= dt; dt *= 0.15; }
    this.now += dt; this.hour = (this.hour + dt / 60) % 24; if (this.role !== "guest") this.gfx.setDayTime(this.hour); else this.gfx.setDayTime(this.hour);
    S.stats.play += dt;
    const I = this.input, p = this.player, m = this.cur;
    // camera input
    this.camYaw -= I.camDX * 0.006; this.camPitch = clamp(this.camPitch + I.camDY * 0.004, 0.12, 1.05); I.camDX = I.camDY = 0;
    this.camDist = clamp(this.camDist + I.zoom, 5, 16); I.zoom = 0;
    // movement relative to camera
    const sx = Math.sin(this.camYaw), cz = Math.cos(this.camYaw);
    let mx = I.my * sx + I.mx * cz, mz = I.my * cz - I.mx * sx;
    const locked = this.atkT > 0 && p.mode === "ground" || this.dialogOpen || this.paused;
    if (this.dialogOpen || this.paused) { mx = mz = 0; }
    p.update(dt, mx, mz, I.sprint && !locked, locked);
    if (p.landDamage) { const dd = m.st.hp * p.landDamage; p.landDamage = 0; m.hp -= dd; this.num(p.pos, Math.round(dd) + "", "#ff6a6a", false); if (m.hp <= 0) this.memberDown(); }
    // timers
    this.switchCd -= dt; this.burstLock -= dt; this.eclipse = Math.max(0, this.eclipse - dt); this.buffAtk = Math.max(0, this.buffAtk - dt);
    if (this.shieldT > 0) { this.shieldT -= dt; if (this.shieldT <= 0) this.shield = 0; }
    this.partyDmgT = Math.max(0, this.partyDmgT - dt);
    for (const x of this.members) { x.critT = Math.max(0, x.critT - dt); x.healCd -= dt; if (x.charges > x.maxCharges) x.charges = x.maxCharges; if (x.cdE > 0) { x.cdE -= dt; if (x.cdE <= 0) { x.cdE = 0; x.charges = Math.min(x.maxCharges, x.charges + 1); if (x.charges < x.maxCharges) x.cdE = x.eCdFull; } } else if (x.charges < x.maxCharges) x.cdE = x.eCdFull; if (x.infuse) { x.infuse.t -= dt; if (x.infuse.t <= 0) x.infuse = null; } }
    for (let i = this.timers.length - 1; i >= 0; i--) { const t = this.timers[i]; t.t -= dt; if (t.t <= 0) { this.timers.splice(i, 1); t.f(); } }
    // actions
    if (!this.dialogOpen && !this.paused && !this.dead) {
      if (I.jump) { I.jump = false; p.jump(); }
      if (I.atkTap) {
        I.atkTap = false;
        if (p.mode === "air" || p.mode === "glide") { if (p.pos.y - p.groundAt(p.pos.x, p.pos.z) > 1.2) p.mode = "plunge"; }
        else if (p.mode === "ground") { if (this.atkT > 0.08) this.atkQueued = true; else this.doAttack(false); }
      }
      if (I.atkHold) { I.atkHold = false; if (p.mode === "ground" && this.atkT <= 0.1) { const t = NA[m.def.weapon]; if (p.spendStam(t.caSt)) { this.combo = 0; this.doAttack(true); } } }
      if (I.eTap || I.eHold) { const h = I.eHold; I.eTap = I.eHold = false; this.tryE(h); }
      if (I.qTap) { I.qTap = false; this.tryQ(); }
    }
    if (this.atkT > 0) { this.atkT -= dt; if (this.atkT <= 0 && this.atkQueued) { this.atkQueued = false; this.doAttack(false); } }
    this.atkFrameT -= dt; this.comboT -= dt; if (this.comboT <= 0) this.combo = 0;
    // projectiles
    for (let i = this.projs.length - 1; i >= 0; i--) {
      const pr = this.projs[i] as any; pr.life -= dt;
      if (pr.home && pr.home.alive) { const want = pr.home.pos.clone().add(new THREE.Vector3(0, 0.8, 0)).sub(pr.pos).normalize().multiplyScalar(pr.vel.length()); pr.vel.lerp(want, Math.min(1, dt * 6)); if (pr.fx) pr.fx.o.vel = pr.vel; }
      pr.pos.addScaledVector(pr.vel, dt); if (pr.fx) pr.fx.mesh.position.copy(pr.pos);
      let done = pr.life <= 0 || pr.pos.y < (this.arena ? this.arena.center.y - 1 : heightAt(pr.pos.x, pr.pos.z) - 0.3);
      for (const e of this.enemies.values()) {
        if (!e.alive || pr.hitIds.has(e.id)) continue;
        const ey = e.pos.y + (e.body === "wisp" ? 1.3 * e.def.scale : 0.7 * e.def.scale);
        if (dist2(e.pos.x, e.pos.z, pr.pos.x, pr.pos.z) < (pr.r + e.radius) ** 2 && Math.abs(ey - pr.pos.y) < 1.4 * e.def.scale + pr.r) {
          pr.hitIds.add(e.id); this.sendHit(e, { ...pr.hit, crit: Math.random() < pr.hit.cr }); this.fxAt("hit-spark", pr.pos, pr.hit.el, 0.8); pr.onHit?.();
          if (pr.aoe) this.hitCircle(pr.pos, pr.aoe, { ...pr.hit, mv: pr.hit.mv * 0.5 });
          if (!pr.pierce) { done = true; break; }
        }
      }
      if (done) { if (pr.aoe && pr.life > 0) this.fxAt("react-bloom", pr.pos, pr.hit.el, 0.6); this.elementAt(pr.pos, pr.hit.el); pr.fx?.kill(); this.projs.splice(i, 1); }
    }
    for (let i = this.eprojs.length - 1; i >= 0; i--) {
      const q = this.eprojs[i]; q.life -= dt; q.pos.addScaledVector(q.vel, dt); if (q.fx) q.fx.mesh.position.copy(q.pos);
      let done = q.life <= 0;
      if (dist2(q.pos.x, q.pos.z, p.pos.x, p.pos.z) < 0.7 && Math.abs(q.pos.y - p.pos.y - 0.9) < 1.3) { this.hurt(q.dmg, q.el, 20 + worldLevel() * 8); done = true; }
      if (done) { q.fx?.kill(); this.eprojs.splice(i, 1); }
    }
    for (let i = this.fields.length - 1; i >= 0; i--) {
      const f = this.fields[i]; f.t -= dt; f.tick -= dt;
      if (f.tick <= 0) { f.tick = f.every; f.onTick(f); }
      if (f.fxName) { f.fxT = (f.fxT ?? 0) - dt; if (f.fxT <= 0) { f.fxT = f.fxEvery || 1; this.fxAt(f.fxName, f.pos, f.el || null, f.fxScale || 1); } }
      if (f.t <= 0) this.fields.splice(i, 1);
    }
    // enemies
    if (this.role !== "guest") for (const e of this.enemies.values()) updateEnemy(this, e, dt);
    else for (const e of this.enemies.values()) { e.pos.lerp(e.netPos, Math.min(1, dt * 8)); }
    let boss: Enemy | null = null; for (const e of this.enemies.values()) if (e.boss && e.alive && e.pos.distanceToSquared(p.pos) < 40 * 40) boss = e; this.bossActive = boss;
    // arena
    if (this.arena && !this.arena.done && !(this.arena as any).remote) { this.arena.t += dt; if (this.arena.wave >= 0 && ![...this.enemies.values()].some((e) => e.alive)) { this.arena.wave >= this.arena.waves.length - 1 ? (this.arena.wave++, this.arena.done = true, bus.emit("arenaWin", this.arena)) : this.nextWave(); } if (this.arena.tlimit && this.arena.t > this.arena.tlimit) { bus.emit("toast", "時間切れ…"); this.leaveArena(false); } }
    // spawn & interact
    this.spawnT -= dt; if (this.spawnT <= 0) { this.spawnT = 0.7; this.spawnAround(); }
    this.updateInteract();
    // world view
    const ft = this.arena ? this.arena.ret : p.pos; this.view.tint.copy(this.gfx.tint); this.view.update(ft.x, ft.z, this.now);
    if (this.net) this.net.tick(dt);
    // save
    this.saveT -= dt; if (this.saveT <= 0) { this.saveT = 8; if (!this.arena) S.pos = { x: p.pos.x, y: p.pos.y, z: p.pos.z }; markDirty(); persist(); }
    this.render(dt);
  }
  doAttack(charged: boolean) {
    const m = this.cur, t = NA[m.def.weapon];
    const step = charged ? 0 : this.combo % t.mv.length;
    this.atkT = charged ? 0.55 : t.dur[step]; this.atkFrameT = this.atkT; this.comboT = this.atkT + 0.6;
    if (!charged) this.combo++;
    normalAttack(this, m, step, charged);
  }
  render(dt: number) {
    const p = this.player, tint = this.gfx.tint;
    // camera
    const tgt = p.pos.clone().add(new THREE.Vector3(0, 1.3, 0)); this.camT.lerp(tgt, Math.min(1, dt * 8));
    const d = this.camDist, cp = Math.cos(this.camPitch), cam = this.gfx.camera;
    cam.position.set(this.camT.x + Math.sin(this.camYaw) * d * cp, this.camT.y + Math.sin(this.camPitch) * d, this.camT.z + Math.cos(this.camYaw) * d * cp);
    const gh = this.arena ? -999 : heightAt(cam.position.x, cam.position.z) + 0.8; if (cam.position.y < gh) cam.position.y = gh;
    if (this.shakeT > 0) { this.shakeT -= dt; const s = this.shakeT * 0.6; cam.position.x += (Math.random() - 0.5) * s; cam.position.y += (Math.random() - 0.5) * s; }
    cam.lookAt(this.camT);
    // sprites
    let af = -1;
    if (this.atkFrameT > 0) { const m = this.cur, k = 1 - this.atkFrameT / Math.max(0.01, this.atkT || 0.4); af = m.def.weapon === "catalyst" || this.burstLock > 0 ? FR.cast[0] : FR.atk[Math.min(2, Math.floor(k * 3))]; }
    if (p.mode === "plunge") af = FR.atk[1];
    p.render(dt, this.camYaw, tint, af);
    this.lastFrame = af >= 0 ? af : (p.bb.tex.offset.x * p.bb.W) / FW;
    for (const e of this.enemies.values()) e.render(dt, this.camYaw, tint);
    for (const r of this.remotes.values()) r.render(dt, this.camYaw, tint);
    for (const n of this.npcs) { const d2 = dist2(n.x, n.z, p.pos.x, p.pos.z); n.bb.root.visible = n.bb.shadow.visible = d2 < 120 * 120; if (!n.bb.root.visible) continue; if (d2 < 64) n.face = Math.atan2(p.pos.x - n.x, p.pos.z - n.z); const { dir, flip } = dirFor(n.face, this.camYaw); n.bb.setFrame(Math.floor(this.now * 1.5 + n.x) % 2, dir, dir === 2 ? flip : false); n.bb.face(this.camYaw, tint); }
    this.fx.update(dt, this.camYaw);
    for (let i = this.tele.length - 1; i >= 0; i--) { const t = this.tele[i]; t.t += dt; (t.mesh.material as THREE.MeshBasicMaterial).opacity = 0.3 + 0.5 * (t.t / t.max); if (t.t >= t.max) { t.mesh.visible = false; this.tele.splice(i, 1); } }
    for (const [id, m] of this.view.poiObjs) { const gem = m.getObjectByName("gem"); if (gem) { gem.rotation.y += dt; const w = byId.get(id); if (w?.type === "waypoint") ((gem as THREE.Mesh).material as THREE.MeshBasicMaterial).color.set(S.wps[id] ? 0x5ae8ff : 0x6a6a7a); } }
    this.gfx.render();
  }
  lastFrame = 0;
}
