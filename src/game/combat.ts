import * as THREE from "three";
import { reactionOf, EL_INFO, type El, type DmgEl } from "../data/elements";
import type { SkillDef } from "../data/characters";
import type { Enemy } from "./enemy";
import type { Member } from "./member";
import type { Game } from "./game";
import { clamp, angDiff } from "../core/math";
import { heightAt } from "../world/terrain";
import { consVal } from "../data/cons";
import { bus } from "../core/events";

export type Cat = "na" | "ca" | "skill" | "burst" | "plunge" | "react";
export interface Hit { shred?: number;
 src: string; pid: number; atk: number; mv: number; el: DmgEl; cat: Cat; cr: number; cd: number; bonus: number; em: number; lvl: number; rb: number; strong?: boolean; icd: string; icdT: number; kb?: number; crit?: boolean }
export const NA: Record<string, { mv: number[]; dur: number[]; r: number; ca: number; caSt: number; ranged?: boolean }> = {
  sword: { mv: [0.48, 0.46, 0.6, 0.72], dur: [0.3, 0.3, 0.34, 0.45], r: 2.3, ca: 1.3, caSt: 20 },
  claymore: { mv: [0.8, 0.78, 0.92, 1.2], dur: [0.5, 0.5, 0.55, 0.7], r: 2.8, ca: 1.7, caSt: 25 },
  polearm: { mv: [0.4, 0.4, 0.48, 0.55, 0.7], dur: [0.26, 0.26, 0.28, 0.3, 0.42], r: 3.0, ca: 1.25, caSt: 25 },
  bow: { mv: [0.42, 0.42, 0.5, 0.58], dur: [0.32, 0.32, 0.36, 0.44], r: 16, ca: 1.8, caSt: 0, ranged: true },
  catalyst: { mv: [0.52, 0.5, 0.68], dur: [0.4, 0.4, 0.5], r: 12, ca: 1.6, caSt: 50, ranged: true },
};
export const reactBase = (lvl: number) => 18 + lvl * 9 + Math.pow(lvl / 10, 2) * 14;
export function makeHit(g: Game, m: Member, mv: number, el: DmgEl, cat: Cat, icd: string, icdT: number, extra: Partial<Hit> = {}): Hit {
  const st = m.st, buffAtk = g.buffAtk > 0 ? g.buffAtkVal : 0;
  let bonus = st.dmg[el] + (st.dmg[cat] || 0) + (m.infuse && (cat === "na" || cat === "ca" || cat === "plunge") ? m.infuse.bonus : 0) + (g.partyDmgT > 0 ? g.partyDmgV : 0)
    + (m.stanceT > 0 && (cat === "na" || cat === "ca") ? m.stanceBuff : 0) + (m.hp < m.st.hp * 0.5 ? m.passive("lowHp") : 0) + (icd.startsWith("t") || icd.startsWith("sm") ? st.dmg.summon : 0);
  const cr = st.cr + (g.eclipse > 0 ? 0.2 : 0) + (m.critT > 0 ? m.cv("critup") : 0) + (cat === "ca" ? st.dmg.caCr : 0);
  const shred = cat === "skill" || cat === "burst" ? m.cv("shred") : 0;
  const crit = Math.random() < cr;
  return { src: m.id, pid: g.pid, atk: st.atk + buffAtk, mv, el, cat, cr, cd: st.cd, bonus, em: st.em, lvl: m.cs.lvl, rb: st.dmg.react || 0, icd: m.id + icd, icdT, crit, ...(shred ? { shred } : {}), ...extra };
}
// authority side ----------------------------------------------------------
export function applyHit(g: Game, e: Enemy, h: Hit, depth = 0) {
  if (!e.alive) return;
  let react: ReturnType<typeof reactionOf> = null;
  if (h.el !== "phys" && !e.inIcd(h.icd + h.el, h.icdT, g.now)) {
    if (e.aura && e.aura.el !== h.el) { react = reactionOf(e.aura.el, h.el as El); e.aura = null; if (e.innate) e.innateCd = 1.6; }
    else e.aura = { el: h.el as El, t: h.strong ? 9 : 6 };
  }
  const defMult = (h.lvl + 100) / (h.lvl + 100 + (e.lvl + 100) * (1 - (e.resT > 0 ? 0 : 0)));
  const baseRes = (e.def.res || 0.1) + (e.innate === h.el ? 0.3 : 0) - (e.resT > 0 ? e.resdown : 0);
  const resMult = baseRes < 0 ? 1 - baseRes / 2 : 1 - baseRes;
  let dmg = h.atk * h.mv * (1 + h.bonus) * (h.crit ? 1 + h.cd : 1) * defMult * resMult;
  let label = "";
  const tb = 1 + (16 * h.em) / (h.em + 2000) + h.rb, rbase = reactBase(h.lvl) * tb;
  if (react) {
    label = react.name; g.stats.reacts++; bus.emit("daily", "react", 1); bus.emit("reaction", react.name, h.pid);
    const pos = e.pos.clone();
    g.fxAt("react-bloom", pos, react.kind === "freeze" ? "frost" : h.el, 1);
    switch (react.kind) {
      case "amp": dmg *= react.v * (1 + (2.78 * h.em) / (h.em + 1400) + h.rb); break;
      case "buff": dmg *= react.v; g.eclipse = react.dur!; break;
      case "aoe": g.aoe(pos, react.r!, (o) => { if (o !== e) dealReact(g, o, rbase * react!.v * 0.6, h); }); dealReact(g, e, rbase * react.v, h); if (react.dur) g.aoe(pos, react.r!, (o) => { o.slow = 0.6; o.slowT = react!.dur!; }); if (react.name === "流星") g.fxAt("starfall", pos, "volt", 0.6); break;
      case "chain": { let n = 0; for (const o of g.enemiesNear(pos, react.r!)) { if (o === e || n >= react.v2!) continue; n++; dealReact(g, o, rbase * react.v * 0.8, h); g.fxAt("hit-spark", o.pos, "fire", 1); } dealReact(g, e, rbase * react.v, h); break; }
      case "energy": g.aoe(pos, react.r!, (o) => dealReact(g, o, rbase * react!.v, h)); g.gainEnergy(react.v2!, null); break;
      case "dot": { const targets = react.r ? g.enemiesNear(pos, react.r) : [e]; for (const o of targets) o.dots.push({ dmg: rbase * react.v, t: react.dur!, tick: 0, src: h.src, el: h.el }); break; }
      case "freeze": e.frozen = react.dur!; break;
      case "heal": g.healParty(react.v, h.pid); break;
      case "pull": g.aoe(pos, react.r!, (o) => { const d = pos.clone().sub(o.pos); d.y = 0; const l = d.length(); if (l > 0.5 && !o.boss) o.pos.addScaledVector(d, Math.min(1, (l - 0.5) / l)); dealReact(g, o, rbase * react!.v * 0.5, h); }); break;
      case "resdown": e.resdown = react.v2!; e.resT = react.dur!; if (react.r) g.aoe(pos, react.r, (o) => dealReact(g, o, rbase * react!.v, h)); else dealReact(g, e, rbase * react.v, h); break;
      case "shield": g.addShield(react.v, h.pid); break;
      case "slow": e.slow = react.v; e.slowT = react.dur!; break;
    }
  }
  if (h.shred) { e.resdown = Math.max(e.resT > 0 ? e.resdown : 0, h.shred); e.resT = Math.max(e.resT, 8); }
  g.damageEnemy(e, dmg, h.crit!, h.el, label, h.src);
  if (h.kb && !e.boss && !e.def.dummy && e.alive) { const d = e.pos.clone().sub(g.posOfPid(h.pid)); d.y = 0; d.normalize(); e.pos.addScaledVector(d, h.kb); }
}
function dealReact(g: Game, e: Enemy, dmg: number, h: Hit) { if (!e.alive) return; const r = 1 - ((e.def.res || 0.1) - (e.resT > 0 ? e.resdown : 0)); g.damageEnemy(e, dmg * r, false, h.el, "", h.src, true); }

// client side: attacks & skills ---------------------------------------------
export interface Proj { pos: THREE.Vector3; vel: THREE.Vector3; hit: Hit; life: number; r: number; pierce: boolean; hitIds: Set<number>; fx: any; home?: Enemy | null; aoe?: number; visualOnly?: boolean }
export interface Field { off?: number[];
 pos: THREE.Vector3; r: number; t: number; tick: number; every: number; onTick: (f: Field) => void; follow?: boolean; fxName?: string; el?: DmgEl; fxEvery?: number; fxT?: number; fxScale?: number }
export function nearestEnemy(g: Game, pos: THREE.Vector3, r: number, face?: number) {
  let best: Enemy | null = null, bd = r * r;
  for (const e of g.enemies.values()) { if (!e.alive) continue; const dx = e.pos.x - pos.x, dz = e.pos.z - pos.z, d = dx * dx + dz * dz; if (d < bd) { bd = d; best = e; } }
  return best;
}
export function faceToward(g: Game, r = 7) { const p = g.player, e = nearestEnemy(g, p.pos, r); if (e) p.face = Math.atan2(e.pos.x - p.pos.x, e.pos.z - p.pos.z); return e; }
export function normalAttack(g: Game, m: Member, step: number, charged: boolean) {
  const t = NA[m.def.weapon], p = g.player, tgt = faceToward(g, t.ranged ? 14 : 6);
  const el: DmgEl = m.infuse ? m.infuse.el : m.stanceT > 0 || m.def.weapon === "catalyst" ? m.def.el : "phys";
  const aimed = charged && m.aimN > 0; if (aimed) m.aimN--;
  const mv = (charged ? t.ca * (aimed ? 1 + m.aimBuff : 1) : t.mv[step]) * m.mult(0), cat = charged ? "ca" : "na";
  if (aimed) aimBloom(g, m, t.ranged ? null : p.pos.clone());
  const fx = Math.sin(p.face), fz = Math.cos(p.face);
  if (m.def.weapon === "bow") {
    const bel: DmgEl = charged ? m.def.el : el;
    g.shoot(m, p.pos.clone().add(new THREE.Vector3(fx * 0.8, 1.1, fz * 0.8)), tgt, 26, makeHit(g, m, mv, bel, cat, charged ? "ca" : "na", charged ? 0 : 2.5, { strong: charged }), { r: 0.6, scale: charged ? 0.9 : 0.6 }, aimed ? () => aimBloom(g, m, tgt ? tgt.pos.clone() : null) : undefined);
    return;
  }
  if (m.def.weapon === "catalyst") {
    g.shoot(m, p.pos.clone().add(new THREE.Vector3(fx * 0.6, 1.2, fz * 0.6)), tgt, 15, makeHit(g, m, mv, m.def.el, cat, "na", 2.5), { r: 0.7, scale: charged ? 1.2 : 0.8, aoe: charged ? 2.5 : 0 });
    return;
  }
  const r = t.r * (charged ? 1.15 : 1), c = p.pos.clone().add(new THREE.Vector3(fx * r * 0.45, 0, fz * r * 0.45));
  const pole = m.def.weapon === "polearm";
  if (pole) { const tip = p.pos.clone().add(new THREE.Vector3(fx * r * 0.85, 0.9, fz * r * 0.85)); g.fxAt("hit-spark", tip, el, 0.7); g.fxAt("orb", p.pos.clone().add(new THREE.Vector3(fx * r * 0.5, 0.9, fz * r * 0.5)), el, 0.8, (fx * Math.cos(g.camYaw) - fz * Math.sin(g.camYaw)) < 0, { life: 0.12, loop: true }); }
  else g.fxAt("crescent", c.clone().setY(c.y + 0.2), el, m.def.weapon === "claymore" ? 1.3 : 1, step % 2 === 1);
  g.hitArc(p.pos, p.face, r, pole ? 0.6 : 1.2, makeHit(g, m, mv, el, cat, "na", 2.5, { kb: m.def.weapon === "claymore" ? 0.8 : 0.25 }));
  naWave(g, m, charged);
  if (m.stanceT > 0) { const dir = new THREE.Vector3(fx, 0, fz); g.shootDir(m, p.pos.clone().add(new THREE.Vector3(0, 0.9, 0)), dir, 18, makeHit(g, m, m.stanceMv * m.mult(1), m.def.el, "na", "st", 0.3), { r: 1.4, pierce: true, scale: 1.3, life: 0.45 }); }
  g.gainEnergy(0.4, m);
}
function naWave(g: Game, m: Member, charged: boolean) {
  const v = m.cv("nawave"); if (!v || charged) return; m.naCount++; if (m.naCount % 4) return;
  const p = g.player, dir = new THREE.Vector3(Math.sin(p.face), 0, Math.cos(p.face));
  g.shootDir(m, p.pos.clone().add(new THREE.Vector3(0, 1, 0)), dir, 20, makeHit(g, m, v, m.def.el, "na", "nw", 0.5), { r: 1.6, pierce: true, scale: 1.6, life: 0.6 });
}
export function plunge(g: Game, m: Member) {
  const p = g.player, lp = m.leapT > 0, el: DmgEl = lp ? m.def.el : m.infuse ? m.infuse.el : m.def.weapon === "catalyst" ? m.def.el : "phys", r = lp ? 4.5 : 3;
  g.fxAt(lp ? "starfall" : "sigil-burst", p.pos, el, lp ? 0.9 : 0.7); g.shake(lp ? 0.4 : 0.25);
  g.hitCircle(p.pos, r, makeHit(g, m, 1.9 * m.mult(0) * (1 + (lp ? m.leapBuff : 0)), el, "plunge", "pl", lp ? 0.5 : 1, { kb: 1.2, strong: lp }));
  if (lp) g.gainEnergy(1.5, m);
}
function aimBloom(g: Game, m: Member, at: THREE.Vector3 | null) {
  const c = at || g.player.pos.clone(); g.fxAt("react-bloom", c, m.def.el, 1.1);
  g.later(0.12, () => g.hitCircle(c, 3.2, makeHit(g, m, m.aimMv * m.mult(1), m.def.el, "ca", "ab", 0.3)));
}
export function castSkill(g: Game, m: Member, isBurst: boolean, scale = 1, echo = false) {
  const base: SkillDef = isBurst ? m.def.burst : m.def.skill, p = g.player, el = m.def.el;
  const more = m.cv(isBurst ? "qmore" : "emore"), d: SkillDef = { ...base };
  if (more) { if (["volley", "chain", "meteor"].includes(d.kind)) d.n = (d.n || 1) + more; else if (["field", "turret", "vortex", "infuse", "buff"].includes(d.kind)) d.dur = (d.dur || 8) + more; else { d.r = (d.r || 3) * (1 + more * 0.1); d.mv = d.mv * (1 + more * 0.1); } }
  const ti = isBurst ? 2 : 1, mv = d.mv * m.mult(ti) * scale, cat = isBurst ? "burst" : "skill", tag = isBurst ? (echo ? "Q2" : "Q") : "E";
  if (!echo) consAfterCast(g, m, isBurst);
  if (!["leap", "stance", "aim"].includes(d.kind)) faceToward(g, 9);
  const fx = Math.sin(p.face), fz = Math.cos(p.face), front = p.pos.clone().add(new THREE.Vector3(fx * 1.5, 0, fz * 1.5));
  const hit = (mvv = mv, icd = tag, icdT = 0.4, x: Partial<Hit> = {}) => makeHit(g, m, mvv, el, cat, icd, icdT, { strong: isBurst, ...x });
  let gave = false; const particles = () => {
    const hh = m.cv("healhit"); if (hh && m.healCd <= 0 && !isBurst) { m.healCd = 1; g.healActive(hh, m); }
    if (!isBurst && !gave) { gave = true; g.later(0.5, () => g.gainEnergy(12, m, true)); } };
  const fieldHit = (c: THREE.Vector3, r: number, mvv: number) => { const n = g.hitCircle(c, r, hit(mvv, tag + "f", 0.9)); if (n) particles(); return n; };
  switch (d.kind) {
    case "wave": { faceToward(g, 10); const dir = new THREE.Vector3(Math.sin(p.face), 0, Math.cos(p.face)); g.shootDir(m, p.pos.clone().add(new THREE.Vector3(0, 1, 0)), dir, 20, hit(), { r: d.r || 1.6, pierce: true, scale: 1.8, life: 0.8 }, particles); break; }
    case "nova": {
      const c = isBurst ? p.pos.clone() : front, r = d.r || 4;
      g.fxAt(isBurst ? "starfall" : "sigil-burst", c, el, r / (isBurst ? 4.8 : 3)); if (isBurst) g.shake(0.35);
      g.later(isBurst ? 0.32 : 0.25, () => { if (g.hitCircle(c, r, hit(mv, tag, 0, { kb: 1 }))) particles(); });
      if (d.heal) { g.healParty(d.heal, g.pid, m); g.fxAt("mend", p.pos, null, 1.2); }
      break;
    }
    case "dash": {
      faceToward(g, 8); const dx = Math.sin(p.face), dz = Math.cos(p.face); p.dash(dx, dz, 6, 0.22); p.invuln = 0.3;
      g.fxAt("crescent", p.pos.clone().add(new THREE.Vector3(dx * 2, 0.4, dz * 2)), el, 1.4);
      const start = p.pos.clone();
      g.later(0.22, () => { const mid = start.clone().lerp(p.pos, 0.5); g.fxAt("sigil-burst", p.pos, el, 0.7); if (g.hitCapsule(start, p.pos, d.r || 2, hit(mv, tag, 0, { kb: 0.8 }))) particles(); void mid; });
      break;
    }
    case "turret": {
      const n = d.n || 1;
      for (let i = 0; i < n; i++) {
        const a = p.face + (n > 1 ? (i - (n - 1) / 2) * 1.1 : 0), c = p.pos.clone().add(new THREE.Vector3(Math.sin(a) * 1.8, 0, Math.cos(a) * 1.8)); c.y = heightAt(c.x, c.z);
        const follow = n > 1; // 複数の精霊はプレイヤーについてくる
        g.addField({ pos: c, r: d.r || 10, t: d.dur || 10, tick: i * 0.4, every: 1.5, fxName: follow ? "mote" : "ward", el, fxEvery: follow ? 0.6 : 1.2, fxScale: follow ? 1.6 : 0.8, follow, off: follow ? [Math.sin(i * 2.1) * 1.8, 1.6, Math.cos(i * 2.1) * 1.8] : undefined, onTick: (f) => { const e = nearestEnemy(g, f.pos, f.r); if (e) { g.shoot(m, f.pos.clone().setY(f.pos.y + (follow ? 0.2 : 1.4)), e, 18, makeHit(g, m, mv, el, cat, "t" + tag + i, 1.5, { strong: isBurst }), { r: 0.6, scale: 0.7 }, particles); } } } as any);
        g.fxAt("beacon", c, el, 0.5);
      }
      break;
    }
    case "field": {
      const c = p.pos.clone(), r = d.r || 5;
      g.addField({ pos: c, r, t: d.dur || 8, tick: 0, every: 1, fxName: "sigil-burst", el, fxEvery: 1, fxScale: r / 3, onTick: (f) => { fieldHit(f.pos, f.r, mv); if (d.heal) { g.healActive(d.heal, m); } } });
      break;
    }
    case "shield": {
      const c = p.pos.clone(); g.fxAt("sigil-burst", c, el, (d.r || 3.5) / 3);
      g.later(0.25, () => { if (g.hitCircle(c, d.r || 3.5, hit(mv, tag, 0, { kb: 1 }))) particles(); });
      const base = m.def.asc.k === "defP" || m.def.id === "kohaku" ? m.st.def * 4 : m.st.hp;
      g.addShieldAbs(base * (d.shield || 0.25), 15); if (d.heal) g.healParty(d.heal, g.pid, m);
      break;
    }
    case "volley": {
      const targets = g.enemiesNear(p.pos, d.r || 10).filter((e) => e.alive);
      const n = d.n || 3;
      for (let i = 0; i < n; i++) g.later(i * (isBurst ? 0.09 : 0.08), () => {
        const tgt = targets.length ? targets[i % targets.length] : null;
        const a = p.face + (i - (n - 1) / 2) * 0.18, dir = new THREE.Vector3(Math.sin(a), 0, Math.cos(a));
        const from = isBurst ? (tgt ? tgt.pos.clone().add(new THREE.Vector3((Math.random() - 0.5) * 3, 9, (Math.random() - 0.5) * 3)) : p.pos.clone().addScaledVector(dir, 4 + i * 0.4).setY(p.pos.y + 9)) : p.pos.clone().add(new THREE.Vector3(0, 1.1, 0));
        if (tgt) g.shoot(m, from, tgt, isBurst ? 24 : 22, hit(mv, tag + "v", 0.3), { r: 0.7, scale: 0.8 }, particles);
        else g.shootDir(m, from, isBurst ? new THREE.Vector3(0, -1, 0) : dir, 22, hit(mv, tag + "v", 0.3), { r: 0.7, scale: 0.8, life: 0.7 }, particles);
      });
      break;
    }
    case "infuse": {
      m.infuse = { el, t: d.dur || 10, bonus: d.buff || 0.2 };
      if (isBurst) { g.fxAt("starfall", p.pos, el, (d.r || 4) / 4.8); g.shake(0.3); g.later(0.32, () => g.hitCircle(p.pos, d.r || 4, hit(mv, tag, 0, { kb: 1 }))); }
      else { g.fxAt("sigil-burst", p.pos, el, 0.8); g.later(0.2, () => { if (g.hitCircle(p.pos, d.r || 3, hit(mv, tag))) particles(); }); }
      break;
    }
    case "buff": {
      const c = p.pos.clone(); g.buffAtk = d.dur || 12; g.buffAtkVal = m.st.baseAtk * (d.buff || 0.3);
      g.addField({ pos: c, r: d.r || 5, t: d.dur || 12, tick: 0, every: 2, fxName: "sigil-burst", el, fxEvery: 1.5, fxScale: (d.r || 5) / 3, onTick: (f) => { fieldHit(f.pos, f.r, mv * 0.5); } });
      g.later(0.25, () => { if (g.hitCircle(c, d.r || 5, hit())) particles(); });
      break;
    }
    case "meteor": {
      const n = d.n || 1, targets = g.enemiesNear(p.pos, 14).filter((e) => e.alive).sort((a, b) => a.pos.distanceToSquared(p.pos) - b.pos.distanceToSquared(p.pos));
      if (isBurst) g.shake(0.2);
      for (let i = 0; i < n; i++) g.later(i * 0.28, () => {
        const t = targets.length ? targets[i % targets.length].pos.clone() : p.pos.clone().add(new THREE.Vector3(Math.sin(p.face + i) * (3 + i), 0, Math.cos(p.face + i) * (3 + i)));
        t.y = heightAt(t.x, t.z); g.fxAt("starfall", t, el, (d.r || 3.5) / 4.8);
        g.later(0.33, () => { g.shake(0.15); if (g.hitCircle(t, d.r || 3.5, hit(mv, tag + "m" + i, 0, { kb: 0.8 }))) particles(); });
      });
      break;
    }
    case "chain": {
      const hitSet = new Set<Enemy>(); let cur: Enemy | null = nearestEnemy(g, p.pos, d.r || 8);
      for (let i = 0; i < (d.n || 3) && cur; i++) {
        const e = cur; hitSet.add(e);
        g.later(i * 0.08, () => { g.fxAt("hit-spark", e.pos.clone().setY(e.pos.y + 0.8), el, 1.4); g.sendHit(e, hit(mv, tag + "c", 0.2)); particles(); });
        let nx: Enemy | null = null, bd = 49; for (const o of g.enemies.values()) { if (!o.alive || hitSet.has(o)) continue; const dd = o.pos.distanceToSquared(e.pos); if (dd < bd) { bd = dd; nx = o; } }
        cur = nx;
      }
      if (!hitSet.size) g.fxAt("hit-spark", front.setY(front.y + 1), el, 1.5);
      break;
    }
    case "leap": {
      p.mode = "air"; p.vel.set(Math.sin(p.face) * 3, 16, Math.cos(p.face) * 3); p.pos.y += 0.3; p.fallStartY = p.pos.y; p.invuln = 0.6;
      m.leapT = d.dur || 8; m.leapBuff = d.buff || 0.8;
      g.fxAt("sigil-burst", p.pos.clone(), el, (d.r || 3) / 3); g.later(0.1, () => { if (g.hitCircle(p.pos.clone().setY(p.pos.y - 2), d.r || 3, hit(mv, tag, 0, { kb: 1 }))) particles(); });
      break;
    }
    case "stance": { m.stanceT = d.dur || 10; m.stanceBuff = d.buff || 0.3; m.stanceMv = d.mv; g.fxAt("ward", p.pos, el, 1.1, false, { follow: p.bb.root, loop: true, life: 1.2 }); g.fxAt("sigil-burst", p.pos, el, 0.7); break; }
    case "aim": { m.aimN = d.n || 3; m.aimBuff = d.buff || 0.3; m.aimMv = d.mv; g.fxAt("mend", p.pos, el, 1); bus.emit("toast", `重撃強化 ×${m.aimN}（攻撃ボタン長押し）`); particles(); break; }
    case "vortex": {
      const c = front.clone().addScaledVector(new THREE.Vector3(fx, 0, fz), 2); c.y = heightAt(c.x, c.z);
      g.addField({ pos: c, r: d.r || 6, t: d.dur || 4, tick: 0, every: 0.5, fxName: "react-bloom", el, fxEvery: 0.45, fxScale: 1.3, onTick: (f) => { g.pullEnemies(f.pos, f.r, 1.6); fieldHit(f.pos, f.r * 0.6, mv); } });
      break;
    }
  }
  bus.emit("daily", "skill", isBurst ? 0 : 1);
}
function consAfterCast(g: Game, m: Member, isBurst: boolean) {
  const p = g.player;
  if (isBurst && m.def.role === "plunge") { m.leapT = Math.max(m.leapT, 15); m.leapBuff = Math.max(m.leapBuff, 0.6); }
  if (!isBurst && m.passive("spdE")) m.spdT = 8;
  if (!isBurst) {
    const en = m.cv("energy"); if (en) m.energy = Math.min(m.maxEnergy, m.energy + en);
    if (m.cv("critup")) m.critT = 8;
    const sv = m.cv("summon");
    if (sv) {
      const c = p.pos.clone().add(new THREE.Vector3(Math.sin(p.face + 1.6) * 1.6, 0, Math.cos(p.face + 1.6) * 1.6)); c.y = heightAt(c.x, c.z);
      g.addField({ pos: c, r: 10, t: 8, tick: 0.4, every: 1.5, fxName: "mote", el: m.def.el, fxEvery: 0.6, fxScale: 1.6, onTick: (f) => { const e = nearestEnemy(g, f.pos, f.r); if (e) g.shoot(m, f.pos.clone().setY(f.pos.y + 1.2), e, 18, makeHit(g, m, sv, m.def.el, "skill", "sm", 1.5), { r: 0.6, scale: 0.7 }); } });
    }
  } else {
    const rf = m.cv("qrefund"); if (rf) g.later(1, () => (m.energy = Math.min(m.maxEnergy, m.energy + rf)));
    const pb = m.cv("partybuff"); if (pb) { g.partyDmgT = 12; g.partyDmgV = pb; bus.emit("toast", `チームの与えるダメージ+${Math.round(pb * 100)}%`); }
    const sq = m.cv("shieldq"); if (sq) g.addShieldAbs(m.st.hp * sq, 12);
    const ec = m.cv("echo"); if (ec) g.later(2, () => castSkill(g, m, true, ec, true));
  }
}
// enemy AI (authority) --------------------------------------------------------
export function updateEnemy(g: Game, e: Enemy, dt: number) {
  if (!e.alive) return;
  if (e.aura && e.aura.t < 900) { e.aura.t -= dt; if (e.aura.t <= 0) e.aura = null; }
  if (e.innate && !e.aura) { e.innateCd -= dt; if (e.innateCd <= 0) e.aura = { el: e.innate, t: 999 }; }
  if (e.resT > 0) e.resT -= dt; if (e.slowT > 0) { e.slowT -= dt; if (e.slowT <= 0) e.slow = 0; }
  for (const d of e.dots) { d.t -= dt; d.tick -= dt; if (d.tick <= 0) { d.tick = 0.6; g.damageEnemy(e, d.dmg * 0.5, false, d.el as DmgEl, "", d.src, true); } }
  e.dots = e.dots.filter((d) => d.t > 0);
  if (!e.alive) return;
  if (e.frozen > 0) { e.frozen -= dt; return; }
  if (e.def.dummy) { e.hp = e.maxHp; return; }
  const spd = e.def.spd * (e.slow ? e.slow : 1) * (e.boss && e.hp < e.maxHp * 0.5 ? 1.25 : 1);
  const tp = g.nearestPlayer(e.pos);
  e.stateT += dt; e.atkCd -= dt * (e.boss && e.hp < e.maxHp * 0.5 ? 1.4 : 1);
  const aggro = e.boss ? 28 : 15;
  const ground = (x: number, z: number) => e.groundFn(x, z);
  const step = (tx: number, tz: number, s: number) => { const dx = tx - e.pos.x, dz = tz - e.pos.z, l = Math.hypot(dx, dz); if (l < 0.05) return; e.face = Math.atan2(dx, dz); const k = Math.min(l, s * dt) / l; const nx = e.pos.x + dx * k, nz = e.pos.z + dz * k, ny = ground(nx, nz); if (ny > -50 && Math.abs(ny - e.pos.y) < 2.5 + s * dt) { e.pos.x = nx; e.pos.z = nz; e.pos.y = ny; } };
  if (e.state === "return") { step(e.home.x, e.home.z, spd * 1.5); e.hp = Math.min(e.maxHp, e.hp + e.maxHp * 0.3 * dt); if (e.pos.distanceTo(e.home) < 1) e.state = "idle"; return; }
  if (!tp || tp.d > aggro * aggro || (!e.arena && e.pos.distanceToSquared(e.home) > 45 * 45)) {
    if (e.state !== "idle") { e.state = e.arena ? "idle" : "return"; e.stateT = 0; }
    if (e.state === "idle" && e.body !== "golem" && Math.sin(g.now * 0.7 + e.id) > 0.92) step(e.home.x + Math.sin(e.id) * 3, e.home.z + Math.cos(e.id) * 3, spd * 0.4);
    return;
  }
  const t = tp.pos, d = Math.sqrt(tp.d);
  if (e.state === "wind") {
    e.face = Math.atan2(t.x - e.pos.x, t.z - e.pos.z);
    if (e.stateT >= (e.boss ? 0.65 : 0.5)) { enemyStrike(g, e, t); e.state = "recover"; e.stateT = 0; }
    return;
  }
  if (e.state === "recover") { if (e.stateT > 0.7) { e.state = "chase"; e.stateT = 0; } return; }
  e.state = "chase";
  const want = e.def.atkKind === "shoot" || e.def.atkKind === "cast" ? Math.min(e.def.range * 0.8, 9) : e.def.range * 0.8;
  if (d > want) step(t.x, t.z, spd);
  else if (e.def.atkKind === "shoot" && d < 4) step(e.pos.x - (t.x - e.pos.x), e.pos.z - (t.z - e.pos.z), spd * 0.7);
  else e.face = Math.atan2(t.x - e.pos.x, t.z - e.pos.z);
  if (d <= e.def.range + 0.5 && e.atkCd <= 0) { e.state = "wind"; e.stateT = 0; e.atkCd = e.def.cd * (0.85 + Math.random() * 0.3); e.moves++; if (e.boss || e.def.atkKind === "cast") g.telegraph(e, t); }
}
function enemyStrike(g: Game, e: Enemy, t: THREE.Vector3) {
  const d = e.def, el = d.atkEl, s = d.scale;
  let kind = d.atkKind;
  if (e.boss) kind = (["smash", "shoot", "cast"] as const)[e.moves % 3];
  if (kind === "lunge") { const dir = t.clone().sub(e.pos).setY(0).normalize(); e.pos.addScaledVector(dir, Math.min(2.2, e.pos.distanceTo(t) - 0.6)); g.enemyAttack(e, e.pos, 1.6 * Math.max(1, s * 0.8), 1.0, el); }
  else if (kind === "smash") { const fx = Math.sin(e.face), fz = Math.cos(e.face), c = e.pos.clone().add(new THREE.Vector3(fx * 1.2 * s, 0, fz * 1.2 * s)); g.fxAt("hit-spark", c, el === "phys" ? "phys" : el, 1.2 * Math.max(1, s * 0.6)); if (e.boss) { g.fxAt("sigil-burst", c, el, 1.6); g.shake(0.3); } g.enemyAttack(e, c, (e.boss ? 4.5 : 2.2), e.boss ? 1.4 : 1.2, el); }
  else if (kind === "shoot") { const n = e.boss ? 5 : 1; for (let i = 0; i < n; i++) { const a = Math.atan2(t.x - e.pos.x, t.z - e.pos.z) + (i - (n - 1) / 2) * 0.25; g.enemyProjectile(e, new THREE.Vector3(Math.sin(a), 0, Math.cos(a)), el); } }
  else if (kind === "cast") { const c = t.clone(); g.later(0.5, () => { g.fxAt("sigil-burst", c, el, e.boss ? 1.4 : 0.9); g.enemyAttack(e, c, e.boss ? 4 : 2.6, e.boss ? 1.6 : 1.3, el); }); }
}
export const elColor = (el: DmgEl) => EL_INFO[el].color;
export { clamp, angDiff };
