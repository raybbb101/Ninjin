import { charById, type CharDef } from "../data/characters";
import { S, type CharState } from "./state";
import { statsOf, talentLevels, talentMult, type Stats } from "./stats";
import type { El } from "../data/elements";

export class Member {
  def: CharDef; st!: Stats; hp = 1; energy = 0; cdE = 0; infuse: { el: El; t: number; bonus: number } | null = null; dead = false; tal = [1, 1, 1];
  constructor(public id: string, public party: string[]) { this.def = charById(id); this.refresh(true); }
  get cs(): CharState { return S.chars[this.id]; }
  refresh(full = false) {
    const ratio = this.st ? this.hp / this.st.hp : 1;
    this.st = statsOf(this.id, this.party); this.tal = talentLevels(this.cs);
    this.hp = full ? this.st.hp : Math.max(this.dead ? 0 : 1, ratio * this.st.hp);
  }
  mult(i: number) { return talentMult(this.tal[i]); }
  get maxEnergy() { return this.def.burst.cost; }
}
