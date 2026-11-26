import { charById, type CharDef } from "../data/characters";
import { S, type CharState } from "./state";
import { statsOf, computeStats, talentLevels, talentMult, type Stats } from "./stats";
import type { El } from "../data/elements";
import { consVal } from "../data/cons";

export class Member {
  def: CharDef; st!: Stats; hp = 1; energy = 0; cdE = 0; infuse: { el: El; t: number; bonus: number } | null = null; dead = false; tal = [1, 1, 1]; charges = 1; critT = 0; naCount = 0; healCd = 0;
  leapT = 0; leapBuff = 0; stanceT = 0; stanceBuff = 0; stanceMv = 0; aimN = 0; aimBuff = 0; aimMv = 0; spdT = 0; ocs: CharState | null = null; ow: any = null;
  constructor(public id: string, public party: string[], trial?: { cs: CharState; w: any }) { this.def = charById(id); if (trial) { this.ocs = trial.cs; this.ow = trial.w; } this.refresh(true); }
  get cs(): CharState { return this.ocs || S.chars[this.id]; }
  refresh(full = false) {
    const ratio = this.st ? this.hp / this.st.hp : 1;
    this.st = this.ocs ? computeStats(this.ocs, this.ow, [], this.party) : statsOf(this.id, this.party); this.tal = talentLevels(this.cs);
    this.hp = full ? this.st.hp : Math.max(this.dead ? 0 : 1, ratio * this.st.hp);
  }
  cv(code: string) { return consVal(this.id, this.cs.cons, code); }
  get maxCharges() { return 1 + this.cv("echarge"); }
  get eCdFull() { return this.def.skill.cd * (1 - this.st.cdr) * (1 - this.cv("ecd")); }
  passive(code: string) { let t = 0; for (const p of this.def.passives) if (p.code === code) t += p.v; return t; }
  mult(i: number) { return talentMult(this.tal[i]); }
  get maxEnergy() { return this.def.burst.cost; }
}
