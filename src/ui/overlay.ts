import * as THREE from "three";
import type { Game } from "../game/game";
import { EL_INFO } from "../data/elements";
import { curStep, stepPos } from "../game/quests";
const v = new THREE.Vector3();
export class Overlay {
  c: CanvasRenderingContext2D; dpr = Math.min(2, devicePixelRatio || 1);
  constructor(public cv: HTMLCanvasElement, public g: Game) { this.c = cv.getContext("2d")!; addEventListener("resize", () => this.resize()); this.resize(); }
  resize() { this.cv.width = innerWidth * this.dpr; this.cv.height = innerHeight * this.dpr; this.cv.style.width = innerWidth + "px"; this.cv.style.height = innerHeight + "px"; }
  proj(x: number, y: number, z: number) { v.set(x, y, z).project(this.g.gfx.camera); return { x: (v.x * 0.5 + 0.5) * innerWidth, y: (-v.y * 0.5 + 0.5) * innerHeight, ok: v.z < 1 && v.z > -1 }; }
  draw(dt: number) {
    const c = this.c, g = this.g; c.setTransform(this.dpr, 0, 0, this.dpr, 0, 0); c.clearRect(0, 0, innerWidth, innerHeight);
    c.textAlign = "center"; c.lineJoin = "round";
    // enemy bars
    for (const e of g.enemies.values()) {
      if (!e.alive || e.boss) continue; const d2 = e.pos.distanceToSquared(g.player.pos); if (d2 > 30 * 30) continue;
      const top = e.body === "wisp" ? 2.4 : e.body === "golem" ? 2.5 : 1.8;
      const s = this.proj(e.pos.x, e.pos.y + top * e.def.scale, e.pos.z); if (!s.ok) continue;
      const w = 46; c.fillStyle = "rgba(0,0,0,.55)"; c.fillRect(s.x - w / 2 - 1, s.y - 1, w + 2, 6); c.fillStyle = "#e84a4a"; c.fillRect(s.x - w / 2, s.y, w * (e.hp / e.maxHp), 4);
      c.font = "bold 10px sans-serif"; c.fillStyle = "#fff"; c.strokeStyle = "rgba(0,0,0,.8)"; c.lineWidth = 3; c.strokeText("Lv." + e.lvl, s.x - w / 2 + 12, s.y - 3); c.fillText("Lv." + e.lvl, s.x - w / 2 + 12, s.y - 3);
      if (e.aura) { c.fillStyle = EL_INFO[e.aura.el].color; c.beginPath(); c.arc(s.x, s.y - 12, 6, 0, 7); c.fill(); c.fillStyle = "#1a1424"; c.font = "bold 8px sans-serif"; c.fillText(EL_INFO[e.aura.el].name, s.x, s.y - 9); }
      if (e.frozen > 0) { c.fillStyle = "#c8f4ff"; c.font = "bold 10px sans-serif"; c.fillText("凍結", s.x + 30, s.y + 4); }
    }
    // remote names
    for (const r of g.remotes.values()) { const s = this.proj(r.pos.x, r.pos.y + 2.4, r.pos.z); if (!s.ok) continue; c.font = "bold 12px sans-serif"; c.strokeStyle = "rgba(0,0,0,.8)"; c.lineWidth = 3; c.fillStyle = "#ff9ad8"; c.strokeText(r.name, s.x, s.y); c.fillText(r.name, s.x, s.y); }
    // numbers
    for (let i = g.nums.length - 1; i >= 0; i--) {
      const n = g.nums[i]; n.t += dt; if (n.t > 1) { g.nums.splice(i, 1); continue; }
      const s = this.proj(n.x, n.y + n.t * 1.2, n.z); if (!s.ok) continue;
      const k = n.t < 0.12 ? 1 + (0.12 - n.t) * 4 : 1; c.globalAlpha = n.t > 0.7 ? (1 - n.t) / 0.3 : 1;
      c.font = `bold ${Math.round((n.big ? 22 : 16) * k)}px sans-serif`; c.lineWidth = 4; c.strokeStyle = "rgba(20,10,30,.85)"; c.strokeText(n.text, s.x, s.y); c.fillStyle = n.color; c.fillText(n.text, s.x, s.y);
    }
    c.globalAlpha = 1;
    // stamina wheel
    const p = g.player; if (p.stamina < p.stamMax - 0.5) {
      const s = this.proj(p.pos.x, p.pos.y + 1.2, p.pos.z), k = p.stamina / p.stamMax;
      c.lineWidth = 5; c.strokeStyle = "rgba(0,0,0,.45)"; c.beginPath(); c.arc(s.x + 34, s.y, 13, 0, 7); c.stroke();
      c.strokeStyle = k < 0.25 ? "#ff6a4a" : "#ffd84a"; c.beginPath(); c.arc(s.x + 34, s.y, 13, -Math.PI / 2, -Math.PI / 2 + k * Math.PI * 2); c.stroke();
    }
    if (g.shield > 0) { const s = this.proj(p.pos.x, p.pos.y + 2.3, p.pos.z); c.fillStyle = "#e8d8a0"; c.font = "bold 11px sans-serif"; c.fillText("シールド " + Math.round(g.shield), s.x, s.y); }
    // quest marker
    const sp = stepPos(curStep()); if (sp && !g.arena) {
      const s = this.proj(sp.x, sp.y + 4, sp.z); const d = Math.hypot(sp.x - p.pos.x, sp.z - p.pos.z);
      let x = s.x, y = s.y; const m = 40; if (!s.ok) { y = innerHeight - m; x = innerWidth - x; }
      x = Math.max(m, Math.min(innerWidth - m, x)); y = Math.max(m + 60, Math.min(innerHeight - m, y));
      c.fillStyle = "#ffd84a"; c.strokeStyle = "rgba(0,0,0,.6)"; c.lineWidth = 3; c.beginPath(); c.moveTo(x, y - 10); c.lineTo(x + 8, y); c.lineTo(x, y + 10); c.lineTo(x - 8, y); c.closePath(); c.stroke(); c.fill();
      c.font = "bold 11px sans-serif"; c.lineWidth = 3; c.strokeText(Math.round(d) + "m", x, y + 24); c.fillStyle = "#fff"; c.fillText(Math.round(d) + "m", x, y + 24);
    }
  }
}
