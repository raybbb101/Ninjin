import Peer, { type DataConnection } from "peerjs";
import * as THREE from "three";
import type { Game } from "../game/game";
import { RemotePlayer } from "../game/game";
import { applyHit } from "../game/combat";
import { S } from "../game/state";
import { bus } from "../core/events";
import type { El } from "../data/elements";

const ALPHA = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const PREFIX = "ninjin-v1-";
const ICE = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }, { urls: "stun:stun1.l.google.com:19302" }, { urls: "stun:stun.cloudflare.com:3478" }] };
const ST: Record<string, number> = { idle: 0, chase: 1, wind: 2, recover: 3, dead: 4, return: 5 };
const STR = Object.keys(ST);
export class Net {
  peer: Peer | null = null; conn: DataConnection | null = null; code = ""; pT = 0; eT = 0; soloPos: THREE.Vector3 | null = null;
  constructor(public g: Game) {}
  private mkPeer(id?: string): Promise<Peer> {
    return new Promise((res, rej) => {
      const q = new URLSearchParams(location.search).get("peer"); const custom: any = q ? { host: q.split(":")[0], port: Number(q.split(":")[1] || 9000), path: "/", secure: false } : {};
      const p = id ? new Peer(id, { config: ICE, debug: 0, ...custom }) : new Peer({ config: ICE, debug: 0, ...custom });
      const to = setTimeout(() => rej("サーバーに接続できません"), 15000);
      p.on("open", () => { clearTimeout(to); res(p); });
      p.on("error", (e: any) => { clearTimeout(to); rej(e?.type === "unavailable-id" ? "コードが使われています" : e?.type === "peer-unavailable" ? "部屋が見つかりません" : e?.type || String(e)); });
    });
  }
  async host(): Promise<string> {
    this.leave(true);
    for (let tries = 0; tries < 3; tries++) {
      const code = Array.from({ length: 6 }, () => ALPHA[Math.floor(Math.random() * ALPHA.length)]).join("");
      try { this.peer = await this.mkPeer(PREFIX + code); this.code = code; break; } catch (e) { if (tries === 2) throw e; }
    }
    this.peer!.on("connection", (c) => {
      if (this.conn) { c.on("open", () => { c.send({ t: "full" }); setTimeout(() => c.close(), 300); }); return; }
      this.conn = c; this.wire(c);
      c.on("open", () => { this.g.role = "host"; this.g.pid = 1; this.g.net = this; this.g.buildParty(); this.send({ t: "hello", name: S.settings.name, hour: this.g.hour, pos: this.g.player.pos.toArray() }); bus.emit("toast", "友達が参加しました！"); });
    });
    this.peer!.on("disconnected", () => this.peer?.reconnect());
    this.g.net = this;
    return this.code;
  }
  async join(code: string): Promise<void> {
    this.leave(true);
    this.peer = await this.mkPeer();
    return new Promise((res, rej) => {
      const c = this.peer!.connect(PREFIX + code, { reliable: true, serialization: "json" });
      const to = setTimeout(() => rej("接続がタイムアウトしました"), 20000);
      this.peer!.on("error", (e: any) => { clearTimeout(to); rej(e?.type === "peer-unavailable" ? "部屋が見つかりません" : e?.type || String(e)); });
      c.on("open", () => {
        clearTimeout(to); this.conn = c; this.code = code; this.wire(c);
        this.g.role = "guest"; this.g.pid = 2; this.g.net = this; this.soloPos = this.g.player.pos.clone();
        for (const e of [...this.g.enemies.values()]) this.g.removeEnemy(e);
        this.g.buildParty(); this.send({ t: "hello", name: S.settings.name }); res();
      });
    });
  }
  private hooked = false;
  hookArena() {
    if (this.hooked) return; this.hooked = true;
    bus.on("arenaWin", (a: any) => { if (this.g.role === "host" && this.conn && a.kind === "domain") this.send({ t: "arenaWin", a: { kind: a.kind, id: a.id, lv: a.lv, t: a.t } }); });
  }
  wire(c: DataConnection) {
    this.hookArena();
    c.on("data", (d: any) => { try { this.onMsg(d); } catch (e) { console.warn(e); } });
    c.on("close", () => this.dropped());
    c.on("error", () => this.dropped());
  }
  dropped() {
    if (!this.conn) return; const old = this.conn; this.conn = null; const g = this.g;
    try { old.removeAllListeners("data"); } catch { }
    for (const r of g.remotes.values()) r.dispose(); g.remotes.clear();
    if (g.arena && (g.arena as any).remote) g.leaveArena(false);
    bus.emit("toast", "マルチプレイが終了しました");
    if (g.role === "guest") { for (const e of [...g.enemies.values()]) g.removeEnemy(e); g.role = "solo"; g.pid = 1; g.net = null; this.peer?.destroy(); this.peer = null; if (this.soloPos) g.teleport(this.soloPos.x, this.soloPos.z); g.buildParty(); }
    else if (g.role === "host") { g.role = "solo"; g.buildParty(); /* keep room open for re-join */ }
  }
  leave(silent = false) {
    if (this.conn) { try { this.send({ t: "bye" }); } catch { } const c = this.conn; this.dropped(); c.close(); }
    this.peer?.destroy(); this.peer = null; this.code = "";
    if (this.g.net === this) this.g.net = null; this.g.role = "solo"; this.g.pid = 1; if (!silent) this.g.buildParty();
  }
  send(m: any) { if (this.conn && this.conn.open) this.conn.send(m); }
  tick(dt: number) {
    const g = this.g; if (!this.conn) return;
    this.pT -= dt; if (this.pT <= 0) { this.pT = 1 / 15; const p = g.player; this.send({ t: "p", x: +p.pos.x.toFixed(2), y: +p.pos.y.toFixed(2), z: +p.pos.z.toFixed(2), f: +p.face.toFixed(2), a: Math.round(g.lastFrame), m: p.mode, c: g.cur.id, hp: +(g.cur.hp / g.cur.st.hp).toFixed(2), n: S.settings.name, h: g.role === "host" ? g.hour : undefined }); }
    if (g.role === "host") {
      this.eT -= dt; if (this.eT <= 0) {
        this.eT = 0.1; const r = [...g.remotes.values()][0]; const list: any[] = [];
        for (const e of g.enemies.values()) { if (r && e.pos.distanceToSquared(r.pos) > 110 * 110) continue; list.push([e.id, e.def.id, e.lvl, +e.pos.x.toFixed(2), +e.pos.y.toFixed(2), +e.pos.z.toFixed(2), +e.face.toFixed(2), Math.round(e.hp), Math.round(e.maxHp), e.aura ? e.aura.el : 0, ST[e.state], e.frozen > 0 ? 1 : 0, e.boss ? 1 : 0]); }
        this.send({ t: "es", l: list, ar: g.arena ? 1 : 0 });
      }
    }
  }
  onMsg(d: any) {
    const g = this.g;
    if (!this.conn || g.role === "solo") return; // 抜けた後に届いた古いメッセージは無視（分身バグ対策）
    switch (d.t) {
      case "hello": {
        const r = g.remotes.get(g.role === "host" ? 2 : 1) || new RemotePlayer(g.gfx.scene, "sora"); r.name = d.name || "友達"; g.remotes.set(g.role === "host" ? 2 : 1, r);
        if (g.role === "guest" && d.pos) { g.player.pos.set(d.pos[0] + 2, d.pos[1], d.pos[2] + 2); g.camT.copy(g.player.pos); g.hour = d.hour; bus.emit("toast", `${r.name}の世界に参加しました！`); }
        break;
      }
      case "full": bus.emit("toast", "その部屋はいっぱいです"); this.leave(); break;
      case "bye": this.dropped(); break;
      case "p": {
        const pid = g.role === "host" ? 2 : 1; let r = g.remotes.get(pid); if (!r) { r = new RemotePlayer(g.gfx.scene, d.c); g.remotes.set(pid, r); r.pos.set(d.x, d.y, d.z); }
        r.setChar(d.c); r.target.set(d.x, d.y, d.z); r.face = d.f; r.f = d.a; r.mode = d.m; r.hp = d.hp; r.name = d.n || r.name;
        if (d.h !== undefined && g.role === "guest") g.hour = d.h;
        break;
      }
      case "es": {
        if (g.role !== "guest") break; const seen = new Set<number>();
        for (const a of d.l) {
          const [id, def, lvl, x, y, z, f, hp, mhp, aura, st, fr] = a; seen.add(id);
          let e = g.enemies.get(id); if (!e) { e = g.addEnemy(def, lvl, x, z, id); e.remote = true; e.pos.set(x, y, z); }
          e.netPos.set(x, y, z); if (g.arena) e.groundFn = (gx, gz) => g.player.groundAt(gx, gz); e.face = f; e.hp = hp; e.maxHp = mhp; e.aura = aura ? { el: aura as El, t: 999 } : null; e.state = STR[st] as any; e.frozen = fr ? 1 : 0;
        }
        for (const e of [...g.enemies.values()]) if (!seen.has(e.id) && e.state !== "dead") g.removeEnemy(e);
        break;
      }
      case "hit": { const e = g.enemies.get(d.id); if (e && g.role !== "guest") applyHit(g, e, d.h); break; }
      case "dmg": { if (g.role !== "guest") break; const e = g.enemies.get(d.id); if (!e) break; e.hurtFlash = 0.15; g.num(e.pos, String(d.d), d.c ? "#ffe04a" : d.e === "phys" ? "#ffffff" : (window as any).EL_COL?.[d.e] || "#fff", d.c); if (d.l) g.nums.push({ x: e.pos.x, y: e.pos.y + 2.6, z: e.pos.z, text: d.l, color: "#ffe8ff", t: 0, big: true }); break; }
      case "kill": { if (g.role !== "guest") break; const e = g.enemies.get(d.id); if (e) { e.state = "dead"; g.later(0.6, () => g.removeEnemy(e)); } g.rewardKill(d.def, d.lvl); break; }
      case "fx": g.netEcho = true; g.fxAt(d.n, new THREE.Vector3(d.p[0], d.p[1], d.p[2]), d.e, d.s, d.f); g.netEcho = false; break;
      case "proj": { const right = new THREE.Vector3(Math.cos(g.camYaw), 0, -Math.sin(g.camYaw)); const vel = new THREE.Vector3(d.v[0], d.v[1], d.v[2]); g.fx.spawn("orb", new THREE.Vector3(d.p[0], d.p[1], d.p[2]), { el: d.e, scale: d.s, loop: true, life: d.l, vel, flip: vel.dot(right) < 0 }); break; }
      case "eatk": g.checkPlayerHit(new THREE.Vector3(d.c[0], d.c[1], d.c[2]), d.r, d.dmg, d.el, d.lvl); break;
      case "eproj": g.spawnEProj(new THREE.Vector3(d.p[0], d.p[1], d.p[2]), new THREE.Vector3(d.v[0], d.v[1], d.v[2]), d.dmg, d.el, false); break;
      case "tele": g.showTele(new THREE.Vector3(d.p[0], d.p[1], d.p[2]), d.r, d.d); break;
      case "heal": if (d.to === g.pid) g.healParty(d.v, g.pid); break;
      case "shield": if (d.to === g.pid) g.addShield(d.v, g.pid); break;
      case "evReq": if (g.role === "host" && !g.arena) { bus.emit("toast", "友達が星海の螺旋に挑戦したがっています！"); g.startEvent(); } break;
      case "evNext": if (g.role === "guest" && g.ev) g.ev.floor = d.floor; break;
      case "evClear": if (g.role === "guest" && g.ev) { g.ev.floor = d.floor; g.eventFloorClear(); } break;
      case "domReq": if (g.role === "host") { bus.emit("toast", "友達が秘境に入りたがっています！"); if (!g.arena) g.startDomain(d.id, d.lv); } break;
      case "arenaIn": if (g.role === "guest") g.joinArena(d.kind, d.id, d.lv, d.c); break;
      case "arenaOut": if (g.role === "guest" && g.arena) g.leaveArena(false); break;
      case "arenaWin": if (g.role === "guest") { if (g.arena) g.arena.done = true; bus.emit("arenaWin", d.a); } break;
      case "toast": bus.emit("toast", d.s); break;
      case "pull": if (g.role === "host") g.pullEnemies(new THREE.Vector3(d.c[0], d.c[1], d.c[2]), d.r, d.k); break;
    }
  }
}
