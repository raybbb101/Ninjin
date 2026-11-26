import type { Game } from "../game/game";
import { h, $, clear, stars, RCOL } from "./dom";
import { S, has, addItem, useItem, markDirty, persist, allChars, weaponOf, relicByUid, ownerOfWeapon, ownerOfRelic, exportSave, importSave, resetSave, newWeapon, addChar } from "../game/state";
import { CHARS, charById, WEAPON_TYPE_NAME, ROLE_NAME } from "../data/characters";
import { weaponById, WEAPONS } from "../data/weapons";
import { ITEMS, itemById } from "../data/items";
import { SLOTS, SLOT_NAME, STAT_NAME, FLAT, SETS, setById } from "../data/relics";
import { EL_INFO, REACTIONS, RESONANCE } from "../data/elements";
import { statsOf, ASC_CAP, weaponAtk, weaponSub, relicMain, relicMaxLvl, partyResonance, setCounts, weaponMaxAsc } from "../game/stats";
import * as P from "../game/progression";
import { wish, currentBanner, BANNER_INFO, beg, BEGINNER_MAX, BEGINNER_POOL, type BannerId, type Pull } from "../game/gacha";
import { consDesc } from "../data/cons";
import { MAILS } from "../data/mail";
import { CARDS } from "../data/cards";
import { charBase } from "../game/stats";
import { portrait, fullBody, weaponIcon } from "../gfx/charsprite";
import { mapImage } from "./mapimg";
import { POIS, byId } from "../world/worldgen";
import { HALF, REGION_NAME } from "../world/terrain";
import { curQuest, curStep, ensureDaily, claimDaily, claimDailyBonus, MAIN, talkNpc, statueStep, domainStep } from "../game/quests";
import { bus } from "../core/events";
import { fmt, pct, Rng } from "../core/math";
import { SHEETS, palOf } from "../gfx/fx";
import { enemyById } from "../data/enemies";

const fmtStat = (k: string, v: number) => (FLAT.has(k) ? fmt(v) : pct(v));
const itemName = (id: string) => itemById(id)?.name || id;
export class Menus {
  ui = $("#ui"); stack: string[] = []; cur: HTMLElement | null = null; selChar = ""; tab = "info"; bagTab = "weapon"; gTab: BannerId = "beginner"; onChange: (() => void) | null = null;
  constructor(public g: Game) {
    bus.on("dialog", (lines: [string, string][], done: () => void) => this.dialog(lines, done));
    bus.on("npc", (id: string) => this.npc(id));
    bus.on("statue", (id: string) => this.statue(id));
    bus.on("domain", (id: string) => this.domain(id));
    bus.on("tower", () => this.tower());
    bus.on("school", () => this.school());
    bus.on("eventMenu", () => this.eventMenu());
    bus.on("cardPick", (cb: () => void) => this.cardPick(cb));
    bus.on("evFloor", (f: number, loot: string[], last: boolean) => this.evFloor(f, loot, last));
    bus.on("trialWin", (t: any, first: boolean) => setTimeout(() => this.panel("試練クリア！", h("div", {}, h("p", {}, `「${t.name}」をマスターした！`), h("p", { class: "gdesc" }, REACTIONS[t.key].desc), first ? h("div", { class: "loot" }, h("div", {}, "星晶 ×60"), h("div", {}, "冒険家の手記 ×2")) : h("small", {}, "（報酬は初回のみ）"), h("div", { class: "btns" }, h("button", { class: "primary", onclick: () => { this.close(); this.g.leaveArena(true); this.school(); } }, "学び舎にもどる")))), 600));
    bus.on("arenaWin", (a: any) => this.arenaWin(a));
    bus.on("questDone", (q: any, r: any) => this.banner(`${q.chapter}「${q.title}」完了！`, r.char ? `${charById(r.char).name} が仲間になった！` : "報酬を受け取った"));
    bus.on("chars", () => this.onChange?.()); bus.on("items", () => this.onChange?.());
  }
  get isOpen() { return !!this.cur; }
  close() { this.cur?.remove(); this.cur = null; this.onChange = null; this.g.paused = false; this.g.buildParty(); persist(true); }
  panel(title: string, body: HTMLElement, cls = "") {
    this.cur?.remove(); this.onChange = null;
    const p = h("div", { class: "panel " + cls }, h("div", { class: "ph" }, h("div", { class: "pt" }, title), h("div", { class: "px", onclick: () => this.close() }, "✕")), body);
    this.ui.append(p); this.cur = p; this.g.paused = this.g.role === "solo"; return p;
  }
  open(name: string, arg?: any) {
    if (this.g.dialogOpen) return;
    const f: any = { school: () => this.school(), event: () => this.eventMenu(), mail: () => this.mail(), main: () => this.main(), chars: () => this.chars(arg), party: () => this.partyMenu(), gacha: () => this.gacha(), bag: () => this.bag(), quest: () => this.quests(), map: () => this.map(), coop: () => this.coop(), settings: () => this.settings(), shop: () => this.shop() }[name];
    f?.();
  }
  // ---------------- main ----------------
  main() {
    const g = h("div", { class: "grid" });
    const add = (k: string, ic: string, label: string) => g.append(h("div", { class: "gi", onclick: () => this.open(k) }, h("b", {}, ic), h("span", {}, label)));
    add("chars", "☺", "キャラクター"); add("party", "◎", "編成"); add("gacha", "✦", "祈願"); add("bag", "▣", "バッグ"); add("quest", "!", "任務・依頼"); add("map", "◈", "マップ"); add("coop", "⇄", "マルチプレイ"); add("school", "❂", "元素の学び舎"); add("event", "✺", "星海の螺旋"); add("settings", "⚙", "設定");
    const need = P.arExpNeed(S.ar);
    this.panel("メニュー", h("div", {}, h("div", { class: "arbox" }, h("div", {}, `冒険ランク ${S.ar}　世界ランク ${P.worldLevel()}`), h("div", { class: "bar" }, h("i", { style: `width:${(S.arExp / need) * 100}%` })), h("small", {}, `${fmt(S.arExp)} / ${fmt(need)}　・　プレイ時間 ${Math.floor(S.stats.play / 3600)}時間${Math.floor((S.stats.play % 3600) / 60)}分`)), g));
  }
  // ---------------- characters ----------------
  chars(id?: string) {
    const list = allChars(); if (id) this.selChar = id; if (!this.selChar || !S.chars[this.selChar]) this.selChar = this.g.cur.id;
    const body = h("div", { class: "chars" }); const p = this.panel("キャラクター", body, "wide");
    const render = () => {
      clear(body);
      const side = h("div", { class: "clist" });
      for (const d of list) { const pc = portrait(d.look, d.weapon, 2, d.id); side.append(h("div", { class: "ci" + (d.id === this.selChar ? " on" : ""), style: `--r:${RCOL[d.rarity]}`, onclick: () => { this.selChar = d.id; render(); } }, pc, h("span", {}, d.name), h("i", { style: `background:${EL_INFO[d.el].color}` }))); }
      const d = charById(this.selChar), cs = S.chars[d.id];
      const tabs = h("div", { class: "tabs" }); for (const [k, l] of [["info", "属性"], ["level", "レベル"], ["weapon", "武器"], ["relic", "遺紋"], ["talent", "天賦"], ["cons", "覚醒"]]) tabs.append(h("div", { class: "tab" + (this.tab === k ? " on" : ""), onclick: () => { this.tab = k; render(); } }, l));
      const art = fullBody(d.look, d.weapon, 4, d.id); art.className = "fullart";
      const head = h("div", { class: "chead" }, art, h("div", {}, h("div", { class: "cname" }, d.name, h("small", { style: `color:${RCOL[d.rarity]}` }, " " + stars(d.rarity))), h("div", { class: "ctitle" }, d.title), h("div", { class: "ctags" }, h("span", { class: "eltag", style: `background:${EL_INFO[d.el].color}` }, EL_INFO[d.el].name), h("span", {}, WEAPON_TYPE_NAME[d.weapon]), h("span", {}, `Lv.${cs.lvl}/${ASC_CAP[cs.asc]}`), cs.cons ? h("span", {}, `覚醒${cs.cons}`) : null)));
      const main = h("div", { class: "cmain" }, head, tabs, this.charTab(d.id, render));
      body.append(side, main);
    };
    this.onChange = render; render(); void p;
  }
  charTab(id: string, re: () => void): HTMLElement {
    const d = charById(id), cs = S.chars[id], st = statsOf(id), box = h("div", { class: "ctab" });
    const row = (k: string, v: string) => h("div", { class: "row" }, h("span", {}, k), h("b", {}, v));
    const costEl = (c: P.Cost) => h("div", { class: "cost" }, ...Object.entries(c).map(([k, v]) => h("span", { class: has(k) >= v ? "" : "lack" }, `${itemName(k)} ${fmt(has(k))}/${fmt(v)}`)));
    if (this.tab === "info") {
      box.append(row("HP上限", fmt(st.hp)), row("攻撃力", fmt(st.atk)), row("防御力", fmt(st.def)), row("元素熟知", fmt(st.em)), row("会心率", pct(st.cr)), row("会心ダメージ", pct(st.cd)), row("元素チャージ効率", pct(st.er)), row(EL_INFO[d.el].name + "元素ダメージ", pct(st.dmg[d.el])), st.heal ? row("回復効果", pct(st.heal)) : null);
      box.append(h("h3", {}, `タイプ：${ROLE_NAME[d.role]}`), ...d.passives.map((p) => h("div", { class: "tal" }, h("div", { class: "tn" }, `固有天賦「${p.name}」`), h("small", {}, p.desc))), h("p", { class: "bio" }, d.bio));
    } else if (this.tab === "level") {
      const cap = ASC_CAP[cs.asc];
      box.append(h("div", { class: "big" }, `Lv. ${cs.lvl} / ${cap}`));
      if (cs.lvl < cap) {
        box.append(h("div", { class: "bar" }, h("i", { style: `width:${(cs.exp / P.charExpNeed(cs.lvl)) * 100}%` })), h("small", {}, `経験値 ${fmt(cs.exp)} / ${fmt(P.charExpNeed(cs.lvl))}`));
        const r = h("div", { class: "btns" });
        for (const it of ["exp1", "exp2", "exp3"]) { const n = has(it); r.append(h("button", { disabled: !n, onclick: () => { P.feedExp(cs, it, 1); re(); } }, `${itemName(it)} (${n})`)); r.append(h("button", { disabled: !n, class: "sub", onclick: () => { P.feedExp(cs, it, Math.min(10, n)); re(); } }, "×10")); }
        box.append(r, h("small", {}, "※ 経験値1000ごとにコイン200を使います"));
      } else if (cs.asc < 6) { const c = P.ascCost(cs); box.append(h("div", {}, "突破に必要な素材"), costEl(c), h("button", { class: "primary", disabled: !P.canPay(c), onclick: () => { if (P.ascend(cs)) bus.emit("toast", "突破成功！"); re(); } }, "突破する")); }
      else box.append(h("div", {}, "最大レベルに到達！"));
    } else if (this.tab === "weapon") {
      const w = weaponOf(cs), wd = weaponById(w.id);
      box.append(this.weaponCard(w), h("div", { class: "btns" }, h("button", { onclick: () => this.pickWeapon(id, re) }, "武器を替える"), h("button", { onclick: () => this.weaponUpgrade(w.uid, re) }, "強化する")));
      void wd;
    } else if (this.tab === "relic") {
      const grid = h("div", { class: "rslots" });
      for (const s of SLOTS) { const r = relicByUid(cs.relics[s]); grid.append(h("div", { class: "rslot", onclick: () => this.pickRelic(id, s, re) }, h("div", { class: "rs" }, SLOT_NAME[s]), r ? this.relicMini(r) : h("small", {}, "空き"))); }
      box.append(grid);
      const cnt = setCounts(cs); for (const [k, n] of Object.entries(cnt)) if (n >= 2) { const sd = setById(k); box.append(h("div", { class: "setb" }, `${sd.name}　2セット：${sd.d2}`, n >= 4 ? h("div", {}, `4セット：${sd.d4}`) : null)); }
    } else if (this.tab === "talent") {
      const names = ["通常攻撃", d.skill.name + "（E）", d.burst.name + "（Q）"], desc = ["連続攻撃。長押しで重撃、空中で押すと落下攻撃。", d.skill.desc + ` クールタイム${d.skill.cd}秒。`, d.burst.desc + ` 必要エネルギー${d.burst.cost}。`];
      [0, 1, 2].forEach((i) => {
        const l = cs.tal[i], c = l < 10 ? P.talentCost(cs, i) : null, req = P.talentReqAsc(l + 1);
        box.append(h("div", { class: "tal" }, h("div", { class: "tn" }, `${names[i]}　Lv.${l}${(i === 1 && cs.cons >= 3) || (i === 2 && cs.cons >= 5) ? "+3" : ""}`), h("small", {}, desc[i]), c ? h("div", {}, cs.asc < req ? h("small", { class: "lack" }, `突破${req}段階目が必要`) : costEl(c), h("button", { disabled: cs.asc < req || !P.canPay(c), onclick: () => { P.upTalent(cs, i); re(); } }, "レベルアップ")) : h("small", {}, "最大レベル")));
      });
    } else if (this.tab === "cons") {
      for (let i = 0; i < 6; i++) { const c = consDesc(id, i); box.append(h("div", { class: "cons" + (cs.cons > i ? " on" : "") }, h("b", {}, `第${i + 1}重「${c.name}」`), h("div", {}, c.desc))); }
      box.append(h("small", {}, "同じキャラクターを祈願で引くと覚醒が進みます。"));
    }
    return box;
  }
  weaponCard(w: any) {
    const wd = weaponById(w.id);
    const ic = weaponIcon(wd.type, RCOL[wd.rarity], 2); ic.className = "wic";
    return h("div", { class: "wcard", style: `--r:${RCOL[wd.rarity]}` }, ic, h("div", { class: "wn" }, wd.name, h("small", {}, " " + stars(wd.rarity))), h("div", {}, `${WEAPON_TYPE_NAME[wd.type]}　Lv.${w.lvl}/${ASC_CAP[w.asc]}　精錬${w.ref}`), h("div", {}, `基礎攻撃力 ${fmt(weaponAtk(wd, w.lvl, w.asc))}`), wd.sub ? h("div", {}, `${STAT_NAME[wd.sub.k]} ${fmtStat(wd.sub.k, weaponSub(wd, w.lvl))}`) : null, wd.pName ? h("small", {}, `【${wd.pName}】${wd.pDesc}`) : null, wd.sig ? h("small", { class: "sig" }, `${charById(wd.sig).name}の持ち武器`) : null);
  }
  pickWeapon(cid: string, re: () => void) {
    const d = charById(cid), body = h("div", { class: "wlist" });
    const ws = S.weapons.filter((w) => weaponById(w.id).type === d.weapon).sort((a, b) => weaponById(b.id).rarity - weaponById(a.id).rarity || b.lvl - a.lvl);
    for (const w of ws) { const o = ownerOfWeapon(w.uid); body.append(h("div", { class: "wli", onclick: () => { const cs = S.chars[cid]; if (o && o.id !== cid) o.weapon = cs.weapon; cs.weapon = w.uid; markDirty(); bus.emit("chars"); this.chars(cid); } }, this.weaponCard(w), o ? h("small", {}, `装備中：${charById(o.id).name}`) : null)); }
    this.panel("武器を選ぶ", body);
  }
  weaponUpgrade(uid: number, re: () => void) {
    const body = h("div", {}); const p = this.panel("武器強化", body);
    const render = () => {
      clear(body); const w = S.weapons.find((x) => x.uid === uid)!, wd = weaponById(w.id), cap = ASC_CAP[w.asc];
      body.append(this.weaponCard(w));
      if (w.lvl < cap) { body.append(h("div", { class: "bar" }, h("i", { style: `width:${(w.exp / P.weaponExpNeed(w.lvl, wd.rarity)) * 100}%` }))); const r = h("div", { class: "btns" }); for (const it of ["ore1", "ore2", "ore3"]) { const n = has(it); r.append(h("button", { disabled: !n, onclick: () => { P.feedOre(w, it, 1); render(); } }, `${itemName(it)} (${n})`), h("button", { class: "sub", disabled: !n, onclick: () => { P.feedOre(w, it, Math.min(10, n)); render(); } }, "×10")); } body.append(r); }
      else if (w.asc < weaponMaxAsc(wd)) { const c = P.weaponAscCost(w); body.append(h("div", { class: "cost" }, ...Object.entries(c).map(([k, v]) => h("span", { class: has(k) >= v ? "" : "lack" }, `${itemName(k)} ${fmt(has(k))}/${fmt(v)}`))), h("button", { class: "primary", disabled: !P.canPay(c), onclick: () => { P.weaponAscend(w); render(); } }, "突破する")); }
      const dup = S.weapons.filter((x) => x.id === w.id && x.uid !== w.uid && !ownerOfWeapon(x.uid));
      if (w.ref < 5 && wd.rarity >= 3) body.append(h("div", { class: "btns" }, h("button", { disabled: !dup.length, onclick: () => { P.refine(w, dup[0]); render(); } }, `精錬する（同じ武器 ${dup.length}本）`)));
      body.append(h("button", { onclick: () => this.chars() }, "もどる"));
    };
    this.onChange = render; render(); void p; void re;
  }
  relicMini(r: any) {
    const sd = setById(r.set);
    return h("div", { class: "rmini", style: `--r:${RCOL[r.rarity]}` }, h("div", { class: "rn" }, `${sd.name}・${SLOT_NAME[r.slot as keyof typeof SLOT_NAME]}`, h("small", {}, ` ${stars(r.rarity)} +${r.lvl}`)), h("div", { class: "rm" }, `${STAT_NAME[r.main]} ${fmtStat(r.main, relicMain(r))}`), ...r.subs.map((s: any) => h("small", {}, `・${STAT_NAME[s.k]} +${fmtStat(s.k, s.v)}`)));
  }
  pickRelic(cid: string, slot: string, re: () => void) {
    const body = h("div", { class: "wlist" }), cs = S.chars[cid];
    const cur = relicByUid(cs.relics[slot as keyof typeof cs.relics]);
    if (cur) body.append(h("div", { class: "btns" }, h("button", { onclick: () => { delete cs.relics[slot as keyof typeof cs.relics]; markDirty(); bus.emit("chars"); this.chars(cid); } }, "外す"), h("button", { onclick: () => this.relicUpgrade(cur.uid, cid) }, "強化する")));
    const rs = S.relics.filter((r) => r.slot === slot).sort((a, b) => b.rarity - a.rarity || b.lvl - a.lvl);
    for (const r of rs) { const o = ownerOfRelic(r.uid); body.append(h("div", { class: "wli", onclick: () => { if (o) { const k = Object.keys(o.relics).find((s) => (o.relics as any)[s] === r.uid)!; if (cur) (o.relics as any)[k] = cur.uid; else delete (o.relics as any)[k]; } (cs.relics as any)[slot] = r.uid; markDirty(); bus.emit("chars"); this.chars(cid); } }, this.relicMini(r), o ? h("small", {}, `装備中：${charById(o.id).name}`) : null)); }
    if (!rs.length) body.append(h("p", {}, "この部位の遺紋を持っていません。秘境「紅砂の遺跡」やボス、宝箱で手に入ります。"));
    this.panel(`${SLOT_NAME[slot as keyof typeof SLOT_NAME]}を選ぶ`, body); void re;
  }
  relicUpgrade(uid: number, back?: string) {
    const body = h("div", {}); this.panel("遺紋強化", body); const sel = new Set<number>();
    const render = () => {
      clear(body); const r = S.relics.find((x) => x.uid === uid)!; body.append(this.relicMini(r));
      if (r.lvl >= relicMaxLvl(r.rarity)) { body.append(h("p", {}, "最大レベルです")); body.append(h("button", { onclick: () => (back ? this.chars(back) : this.bag()) }, "もどる")); return; }
      body.append(h("div", { class: "bar" }, h("i", { style: `width:${(r.exp / P.relicExpNeed(r.lvl)) * 100}%` })));
      const fod = S.relics.filter((x) => x.uid !== r.uid && !ownerOfRelic(x.uid) && !x.lock).sort((a, b) => a.rarity - b.rarity);
      const exp = fod.filter((f) => sel.has(f.uid)).reduce((a, f) => a + P.relicFodderExp(f), 0);
      body.append(h("div", { class: "btns" }, h("button", { onclick: () => { fod.filter((f) => f.rarity <= 4).slice(0, 10).forEach((f) => sel.add(f.uid)); render(); } }, "★4以下を自動選択"), h("button", { class: "primary", disabled: !sel.size || has("coin") < exp, onclick: () => { P.upgradeRelic(r, fod.filter((f) => sel.has(f.uid))); sel.clear(); render(); } }, `強化（経験値 ${fmt(exp)} / コイン ${fmt(exp)}）`)));
      const l = h("div", { class: "fodder" }); for (const f of fod.slice(0, 80)) l.append(h("div", { class: "fi" + (sel.has(f.uid) ? " on" : ""), style: `--r:${RCOL[f.rarity]}`, onclick: () => { sel.has(f.uid) ? sel.delete(f.uid) : sel.add(f.uid); render(); } }, `${SLOT_NAME[f.slot]}`, h("small", {}, `${stars(f.rarity)} +${f.lvl}`)));
      body.append(l, h("button", { onclick: () => (back ? this.chars(back) : this.bag()) }, "もどる"));
    };
    render();
  }
  partyMenu() {
    const body = h("div", {}); this.panel("編成", body, "wide");
    const render = () => {
      clear(body); const slots = h("div", { class: "pslots" });
      for (let i = 0; i < 4; i++) { const id = S.party[i]; const d = id ? charById(id) : null; slots.append(h("div", { class: "ps" + (d ? "" : " empty") }, d ? portrait(d.look, d.weapon, 3, d.id) : h("span", {}, "＋"), h("div", {}, d ? d.name : "空き"), d && S.party.length > 1 ? h("button", { class: "sub", onclick: () => { S.party.splice(i, 1); markDirty(); render(); } }, "外す") : null)); }
      body.append(slots);
      const res = partyResonance(S.party); body.append(h("div", { class: "reso" }, res.length ? res.map((e) => `【${RESONANCE[e].name}】${RESONANCE[e].desc}`).join("　") : "元素共鳴：同じ元素のキャラを2人入れると効果が発動"));
      if (this.g.role !== "solo") body.append(h("small", {}, "マルチ中は先頭2人で戦います。"));
      const list = h("div", { class: "plist" });
      for (const d of allChars()) { const inP = S.party.includes(d.id); list.append(h("div", { class: "ci" + (inP ? " on" : ""), style: `--r:${RCOL[d.rarity]}`, onclick: () => { if (inP) { if (S.party.length > 1) S.party.splice(S.party.indexOf(d.id), 1); } else if (S.party.length < 4) S.party.push(d.id); else S.party[3] = d.id; markDirty(); render(); } }, portrait(d.look, d.weapon, 2, d.id), h("span", {}, d.name), h("i", { style: `background:${EL_INFO[d.el].color}` }))); }
      body.append(list);
    };
    render();
  }
  // ---------------- gacha ----------------
  gacha() {
    const body = h("div", { class: "gacha" }); this.panel("祈願", body, "wide");
    const render = () => {
      clear(body); const bn = currentBanner();
      const B = beg(); if (this.gTab === "beginner" && B.done) this.gTab = "event";
      const tabs = h("div", { class: "tabs" }); for (const b of [...(B.done ? [] : ["beginner"]), "event", "weapon", "standard"] as BannerId[]) tabs.append(h("div", { class: "tab" + (this.gTab === b ? " on" : ""), onclick: () => { this.gTab = b; render(); } }, BANNER_INFO[b].name));
      const info = BANNER_INFO[this.gTab], tk = info.ticket;
      let feat: HTMLElement;
      if (this.gTab === "beginner") {
        const sel = B.sel ? charById(B.sel) : null, grid = h("div", { class: "begsel" });
        for (const id of BEGINNER_POOL()) { const d = charById(id); grid.append(h("div", { class: "bs" + (B.sel === id ? " on" : ""), style: `--c:${EL_INFO[d.el].color}`, onclick: () => { B.sel = id; markDirty(); render(); } }, portrait(d.look, d.weapon, 2, d.id), h("span", {}, d.name), h("small", { class: "info", onclick: (e: Event) => { e.stopPropagation(); this.charInfo(id, () => this.gacha()); } }, "詳細"))); }
        feat = h("div", { class: "feat", style: `--c:${sel ? EL_INFO[sel.el].color : "#9ab8ff"}` }, h("div", { style: "flex:1" }, h("div", { class: "fname" }, sel ? `選択中：${sel.name}` : "もらいたい★5キャラを選んでね"), h("small", {}, `残り ${BEGINNER_MAX - B.n} 回　（${BEGINNER_MAX}回以内に必ず手に入る）`), grid));
      } else if (this.gTab === "event") { const d = charById(bn.featured); const art = fullBody(d.look, d.weapon, 5, d.id); feat = h("div", { class: "feat", style: `--c:${EL_INFO[d.el].color}` }, art, h("div", {}, h("div", { class: "fname" }, d.name), h("div", {}, d.title), h("div", { class: "eltag", style: `background:${EL_INFO[d.el].color}` }, EL_INFO[d.el].name), h("small", {}, "★4 確率アップ：" + bn.f4.map((x) => charById(x).name).join("・")), h("small", {}, `残り ${Math.ceil(bn.endsIn)} 日`))); }
      else if (this.gTab === "weapon") feat = h("div", { class: "feat", style: "--c:#ffd84a" }, h("div", {}, h("div", { class: "fname" }, bn.sigs.map((x) => weaponById(x).name).join(" / ")), h("small", {}, "持ち武器の登場確率アップ！"), h("small", {}, "★4 確率アップ：" + bn.fw4.map((x) => weaponById(x).name).join("・"))));
      else feat = h("div", { class: "feat", style: "--c:#9ab8ff" }, h("div", {}, h("div", { class: "fname" }, "星降る願い"), h("small", {}, "★5：" + CHARS.filter((c) => c.rarity === 5 && !c.limited && !c.starter).map((c) => c.name).join("・") + "・常設★5武器")));
      const pity = S.gacha.p5[this.gTab] || 0, hard = this.gTab === "weapon" ? 80 : this.gTab === "beginner" ? BEGINNER_MAX : 90;
      body.append(tabs, feat, h("p", { class: "gdesc" }, info.desc, h("br"), `★5まであと最大 ${hard - pity} 回${this.gTab !== "standard" && S.gacha.g[this.gTab] ? "（次の★5は確定でピックアップ！）" : ""}`),
        h("div", { class: "gbtns" }, h("div", { class: "have" }, `${itemName(tk)} ${has(tk)}　星晶 ${fmt(has("gem"))}　星屑 ${has("dust")}`), h("button", { onclick: () => this.doWish(1) }, "1回祈願"), h("button", { class: "primary", onclick: () => this.doWish(10) }, "10回祈願")),
        h("div", { class: "btns" }, h("button", { class: "sub", onclick: () => this.gHist() }, "履歴"), h("button", { class: "sub", onclick: () => this.gDetail(this.gTab) }, "詳細・確率")));
    };
    this.onChange = render; render();
  }
  doWish(n: number) {
    const r = wish(this.gTab, n); if (typeof r === "string") { bus.emit("toast", r); return; }
    this.wishAnim(r);
  }
  wishAnim(res: Pull[]) {
    const best = Math.max(...res.map((r) => r.rarity)), pal = best >= 5 ? "gold" : best === 4 ? "purple" : "blue";
    const ov = h("div", { class: "wishov" }); const cv = h("canvas", { width: 176, height: 184, class: "wishfx" }); ov.append(cv); this.ui.append(ov);
    const s = SHEETS["wish-star"], c = cv.getContext("2d")!, P8 = palOf(pal)!; let t = 0, last = performance.now();
    const tmp = document.createElement("canvas"); tmp.width = 176; tmp.height = 184; const tc = tmp.getContext("2d", { willReadFrequently: true })!;
    const step = (now: number) => {
      t += (now - last) / 1000; last = now; const i = Math.floor(t * s.fps);
      if (i >= s.frames || !s.img) { ov.remove(); this.wishResults(res); return; }
      tc.clearRect(0, 0, 176, 184); tc.drawImage(s.img, (i % s.columns) * 176, Math.floor(i / s.columns) * 184, 176, 184, 0, 0, 176, 184);
      const d = tc.getImageData(0, 0, 176, 184); for (let k = 0; k < d.data.length; k += 4) { if (!d.data[k + 3]) continue; const l = (d.data[k] * 0.299 + d.data[k + 1] * 0.587 + d.data[k + 2] * 0.114) / 255, j = Math.min(7, Math.floor(l * 7.99)); d.data[k] = P8[j].x * 255; d.data[k + 1] = P8[j].y * 255; d.data[k + 2] = P8[j].z * 255; }
      c.clearRect(0, 0, 176, 184); c.putImageData(d, 0, 0); requestAnimationFrame(step);
    };
    ov.onclick = () => { t = 99; }; requestAnimationFrame(step);
  }
  wishResults(res: Pull[]) {
    const g = h("div", { class: "wres" });
    for (const r of res.sort((a, b) => b.rarity - a.rarity)) {
      const isC = r.kind === "char", nm = isC ? charById(r.id).name : weaponById(r.id).name;
      const art = isC ? portrait(charById(r.id).look, charById(r.id).weapon, 3, r.id) : weaponIcon(weaponById(r.id).type, RCOL[r.rarity], 3);
      g.append(h("div", { class: "wr r" + r.rarity, style: `--r:${RCOL[r.rarity]}` }, art, h("div", {}, nm), h("small", {}, stars(r.rarity)), r.isNew ? h("b", { class: "new" }, "NEW") : null, r.cons && r.cons > 0 ? h("small", {}, `覚醒${r.cons}`) : null, r.dust ? h("small", {}, `星屑+${r.dust}`) : null));
    }
    this.panel("祈願結果", h("div", {}, g, h("button", { class: "primary", onclick: () => this.gacha() }, "OK")), "wide");
  }
  gDetail(b: BannerId) {
    const bn = currentBanner(), body = h("div", { class: "gdetail" });
    const rate = b === "weapon" ? ["★5：0.7%（63回目から上がり、80回目で必ず出る）", "★4：6.0%（10回ごとに必ず1つ）", "★5のうち75%がピックアップ武器。外れたら次の★5はピックアップ確定"] : b === "beginner" ? ["★5：0.6%（30回目から上がり、50回目で必ず出る）", "★5は必ず自分で選んだキャラクター", "★4：5.1%（10回ごとに必ず1つ）"] : b === "event" ? ["★5：0.6%（74回目から上がり、90回目で必ず出る）", "★5のうち50%がピックアップキャラ。外れたら次の★5はピックアップ確定", "★4：5.1%（10回ごとに必ず1つ、50%でピックアップ★4キャラ）"] : ["★5：0.6%（74回目から上がり、90回目で必ず出る）", "★5キャラと★5武器が半分ずつ", "★4：5.1%（10回ごとに必ず1つ）"];
    body.append(h("h3", {}, "確率"), ...rate.map((r) => h("div", { class: "rrow" }, r)), h("div", { class: "rrow" }, "★3：残り（★3武器）"), h("div", { class: "rrow" }, `いまの★5天井カウント：${S.gacha.p5[b] || 0}回`));
    const chars = b === "event" ? [bn.featured, ...bn.f4] : b === "beginner" ? BEGINNER_POOL() : b === "standard" ? CHARS.filter((c) => c.rarity === 5 && !c.limited && !c.starter).map((c) => c.id) : [];
    if (chars.length) { body.append(h("h3", {}, "登場するキャラクター（タップで詳細）")); const g = h("div", { class: "plist" }); for (const id of chars) { const d = charById(id); g.append(h("div", { class: "ci", style: `--r:${RCOL[d.rarity]}`, onclick: () => this.charInfo(id, () => this.gDetail(b)) }, portrait(d.look, d.weapon, 2, d.id), h("span", {}, d.name), h("i", { style: `background:${EL_INFO[d.el].color}` }))); } body.append(g); }
    if (b === "weapon" || b === "standard") { body.append(h("h3", {}, "★5武器")); const ws = b === "weapon" ? bn.sigs : WEAPONS.filter((w) => w.rarity === 5 && w.standard).map((w) => w.id); for (const id of ws) body.append(this.weaponCard({ id, lvl: 90, asc: 6, ref: 1 })); }
    body.append(h("button", { onclick: () => this.gacha() }, "もどる"));
    this.panel(BANNER_INFO[b].name + "：詳細", body, "wide");
  }
  charInfo(id: string, back?: () => void) {
    const d = charById(id), b90 = charBase(d, 90, 6), body = h("div", { class: "cinfo" });
    const art = fullBody(d.look, d.weapon, 4, d.id); art.className = "fullart";
    body.append(h("div", { class: "chead" }, art, h("div", {}, h("div", { class: "cname" }, d.name, h("small", { style: `color:${RCOL[d.rarity]}` }, " " + stars(d.rarity))), h("div", { class: "ctitle" }, d.title), h("div", { class: "ctags" }, h("span", { class: "eltag", style: `background:${EL_INFO[d.el].color}` }, EL_INFO[d.el].name), h("span", {}, WEAPON_TYPE_NAME[d.weapon]), d.limited ? h("span", {}, "期間限定") : null), h("p", { class: "bio" }, d.bio))));
    body.append(h("h3", {}, "Lv.90のステータス（武器・遺紋なし）"), h("div", { class: "ctab" }, ...[["HP", fmt(b90.hp)], ["攻撃力", fmt(b90.atk)], ["防御力", fmt(b90.def)], ["突破ボーナス", `${STAT_NAME[d.asc.k] || d.asc.k} +${FLAT.has(d.asc.k) ? d.asc.v : pct(d.asc.v)}`]].map(([k, v]) => h("div", { class: "row" }, h("span", {}, k), h("b", {}, v)))));
    body.append(h("h3", {}, `タイプ：${ROLE_NAME[d.role]}`), ...d.passives.map((p) => h("div", { class: "tal" }, h("div", { class: "tn" }, `固有天賦「${p.name}」`), h("small", {}, p.desc))));
    body.append(h("h3", {}, "天賦"), h("div", { class: "tal" }, h("div", { class: "tn" }, "通常攻撃"), h("small", {}, WEAPON_TYPE_NAME[d.weapon] + "の連続攻撃。長押しで重撃、空中で落下攻撃。")), h("div", { class: "tal" }, h("div", { class: "tn" }, `元素スキル「${d.skill.name}」`), h("small", {}, `${d.skill.desc}（クールタイム${d.skill.cd}秒）`)), h("div", { class: "tal" }, h("div", { class: "tn" }, `元素爆発「${d.burst.name}」`), h("small", {}, `${d.burst.desc}（元素エネルギー${d.burst.cost}）`)));
    body.append(h("h3", {}, "覚醒"));
    const have = S.chars[id]?.cons ?? -1;
    for (let i = 0; i < 6; i++) { const c = consDesc(id, i); body.append(h("div", { class: "cons" + (have > i ? " on" : "") }, h("b", {}, `第${i + 1}重「${c.name}」`), h("div", {}, c.desc))); }
    if (back) body.append(h("button", { onclick: back }, "もどる"));
    this.panel(d.name + "の詳細", body, "wide");
  }
  mail() {
    const body = h("div", { class: "mail" }); this.panel("メール", body, "wide");
    const render = () => {
      clear(body);
      for (const m of MAILS) {
        const got = S.mail[m.id] === 2;
        body.append(h("div", { class: "mitem" + (got ? " got" : "") }, h("div", { class: "mh" }, h("b", {}, m.title), h("small", {}, `${m.from}　${m.date}`)), h("p", {}, ...m.body.split("\n").flatMap((l, i) => (i ? [h("br"), l] : [l]))), h("div", { class: "cost" }, ...Object.entries(m.items).map(([k, v]) => h("span", {}, `${itemName(k)} ×${fmt(v)}`))), h("button", { class: got ? "" : "primary", disabled: got, onclick: () => { for (const [k, v] of Object.entries(m.items)) addItem(k, v); S.mail[m.id] = 2; markDirty(); persist(true); bus.emit("toast", "受け取りました！"); render(); } }, got ? "受け取り済み" : "受け取る")));
      }
    };
    this.onChange = render; render();
  }
  gHist() { const l = h("div", { class: "hist" }); for (const x of S.gacha.hist.slice(0, 80)) { const nm = charById(x.id)?.name || weaponById(x.id)?.name; l.append(h("div", { style: `color:${RCOL[x.r]}` }, `${new Date(x.t).toLocaleString("ja-JP")}　${BANNER_INFO[x.b as BannerId].name}　${nm} ${stars(x.r)}`)); } this.panel("祈願履歴", h("div", {}, l, h("button", { onclick: () => this.gacha() }, "もどる"))); }
  // ---------------- bag ----------------
  bag() {
    const body = h("div", {}); this.panel("バッグ", body, "wide");
    const render = () => {
      clear(body); const tabs = h("div", { class: "tabs" }); for (const [k, l] of [["weapon", "武器"], ["relic", "遺紋"], ["mat", "素材"], ["food", "料理"]]) tabs.append(h("div", { class: "tab" + (this.bagTab === k ? " on" : ""), onclick: () => { this.bagTab = k; render(); } }, l));
      body.append(tabs); const l = h("div", { class: "items" });
      if (this.bagTab === "weapon") for (const w of [...S.weapons].sort((a, b) => weaponById(b.id).rarity - weaponById(a.id).rarity)) { const o = ownerOfWeapon(w.uid); l.append(h("div", { class: "wli", onclick: () => this.weaponUpgrade(w.uid, render) }, this.weaponCard(w), o ? h("small", {}, `装備中：${charById(o.id).name}`) : null)); }
      if (this.bagTab === "relic") { body.append(h("small", {}, `${S.relics.length} 個`)); for (const r of [...S.relics].sort((a, b) => b.rarity - a.rarity || b.lvl - a.lvl).slice(0, 150)) { const o = ownerOfRelic(r.uid); l.append(h("div", { class: "wli", onclick: () => this.relicUpgrade(r.uid) }, this.relicMini(r), o ? h("small", {}, `装備中：${charById(o.id).name}`) : null)); } }
      if (this.bagTab === "mat") for (const it of ITEMS) { if (it.kind === "food" || !has(it.id)) continue; l.append(h("div", { class: "it", style: `--r:${RCOL[it.rarity]}`, title: it.desc }, h("b", { style: `color:${it.color}` }, it.icon), h("span", {}, it.name), h("small", {}, fmt(has(it.id))))); }
      if (this.bagTab === "food") for (const it of ITEMS.filter((i) => i.kind === "food")) l.append(h("div", { class: "it", style: `--r:${RCOL[it.rarity]}` }, h("b", { style: `color:${it.color}` }, it.icon), h("span", {}, it.name), h("small", {}, `${has(it.id)}個`), h("small", {}, it.desc), h("button", { disabled: !has(it.id), onclick: () => { this.eat(it.id); render(); } }, "使う")));
      body.append(l);
    };
    this.onChange = render; render();
  }
  eat(id: string) {
    const it = itemById(id), g = this.g;
    if (id === "food3") { const m = g.members.find((x) => x.dead); if (!m) { bus.emit("toast", "倒れているキャラクターがいません"); return; } useItem(id); m.dead = false; m.hp = m.st.hp * it.v!; bus.emit("toast", `${m.def.name}が復活した`); return; }
    const m = g.cur; if (m.dead) return; useItem(id); m.hp = Math.min(m.st.hp, m.hp + m.st.hp * it.v!); bus.emit("toast", `${m.def.name}のHPが回復した`);
  }
  // ---------------- quests ----------------
  quests() {
    ensureDaily(); const body = h("div", {}); this.panel("任務・依頼", body, "wide");
    const render = () => {
      clear(body); const q = curQuest(), st = curStep();
      body.append(h("h3", {}, "冒険の手引き"), h("div", { class: "qcard" }, h("div", {}, "・星晶は、敵や宝箱、ボス（初めて倒すと星晶800！）、秘境、星の塔、イベントで手に入るよ"), h("div", {}, "・元素反応がわからないときは「元素の学び舎」へ"), h("div", {}, "・毎週かわるイベント「星海の螺旋」はマルチでも遊べる")));
      body.append(h("h3", {}, "毎日の依頼"));
      S.daily.tasks.forEach((t, i) => body.append(h("div", { class: "daily" }, h("span", {}, t.text), h("small", {}, `${t.n}/${t.goal}`), h("button", { disabled: t.n < t.goal || S.daily.claimed[i], onclick: () => { claimDaily(i); render(); } }, S.daily.claimed[i] ? "受取済" : "受け取る"))));
      body.append(h("button", { class: "primary", disabled: S.daily.bonus || !S.daily.claimed.every((c) => c), onclick: () => { claimDailyBonus(); render(); } }, S.daily.bonus ? "ボーナス受取済" : "全部達成ボーナス（星晶100）"));
      body.append(h("small", {}, "依頼は毎日0時に入れ替わります。何回でも遊べるよ！"));
      void st;
    };
    this.onChange = render; render();
  }
  // ---------------- map ----------------
  map() {
    const wrap = h("div", { class: "mapwrap" }), cv = h("canvas", { class: "mapcv" }) as HTMLCanvasElement, info = h("div", { class: "mapinfo" });
    wrap.append(cv, info); this.panel("マップ", wrap, "full");
    const img = mapImage(); let scale = 1, ox = 0, oy = 0;
    const p0 = this.g.arena ? this.g.arena.ret : this.g.player.pos;
    const fit = () => { const W = wrap.clientWidth, H = wrap.clientHeight - 10; cv.width = W; cv.height = H; scale = Math.min(W, H) / (HALF * 2) * 1.6; ox = W / 2 - (p0.x + HALF) * scale; oy = H / 2 - (p0.z + HALF) * scale; draw(); };
    const w2s = (x: number, z: number) => [(x + HALF) * scale + ox, (z + HALF) * scale + oy];
    const draw = () => {
      const c = cv.getContext("2d")!; c.fillStyle = "#1a3a6a"; c.fillRect(0, 0, cv.width, cv.height); c.imageSmoothingEnabled = false;
      c.drawImage(img, ox, oy, HALF * 2 * scale, HALF * 2 * scale);
      c.font = "bold 12px sans-serif"; c.textAlign = "center";
      for (const p of POIS) {
        const [x, y] = w2s(p.x, p.z);
        if (p.type === "waypoint") { c.fillStyle = S.wps[p.id] || p.id === "wp_beach" ? "#5ae8ff" : "#7a8a9a"; c.beginPath(); c.moveTo(x, y - 7); c.lineTo(x + 5, y); c.lineTo(x, y + 7); c.lineTo(x - 5, y); c.fill(); c.strokeStyle = "#123"; c.stroke(); }
        if (p.type === "statue") { c.fillStyle = "#8aff8a"; c.fillRect(x - 5, y - 5, 10, 10); }
        if (p.type === "domain" || p.type === "tower") { c.fillStyle = "#c08aff"; c.fillRect(x - 5, y - 5, 10, 10); c.fillStyle = "#fff"; c.fillText(p.name || "", x, y - 9); }
        if (p.type === "boss") { c.fillStyle = "#ff4a8a"; c.beginPath(); c.arc(x, y, 6, 0, 7); c.fill(); }
        if (p.type === "npc" && p.name) { c.fillStyle = "#ffd84a"; c.beginPath(); c.arc(x, y, 3, 0, 7); c.fill(); }
      }
      for (const s of [{ n: "ルコの町", x: 20, z: 236 }, { n: "アカツチ村", x: 262, z: -10 }, { n: "シモツキ村", x: -196, z: -150 }, { n: REGION_NAME.plains, x: -20, z: 100 }, { n: REGION_NAME.canyon, x: 300, z: -60 }, { n: REGION_NAME.peaks, x: -260, z: -230 }, { n: REGION_NAME.spire, x: 190, z: -250 }]) { const [x, y] = w2s(s.x, s.z); c.fillStyle = "#fff"; c.strokeStyle = "rgba(0,0,0,.7)"; c.lineWidth = 3; c.strokeText(s.n, x, y + 22); c.fillText(s.n, x, y + 22); }
      const sp = curStep(); if (sp) { const q = byId.get(sp.target.startsWith("@") ? "" : sp.target); if (q) { const [x, y] = w2s(q.x, q.z); c.fillStyle = "#ffd84a"; c.beginPath(); c.arc(x, y, 9, 0, 7); c.fill(); c.fillStyle = "#000"; c.fillText("!", x, y + 4); } }
      const [px, py] = w2s(p0.x, p0.z); c.fillStyle = "#fff"; c.beginPath(); c.arc(px, py, 6, 0, 7); c.fill(); c.fillStyle = "#ff5a8a"; c.beginPath(); c.arc(px, py, 3.5, 0, 7); c.fill();
      for (const r of this.g.remotes.values()) { const [x, y] = w2s(r.pos.x, r.pos.z); c.fillStyle = "#ff9ad8"; c.beginPath(); c.arc(x, y, 5, 0, 7); c.fill(); }
    };
    let drag: any = null, moved = 0; const pts = new Map<number, { x: number; y: number }>(); let pinch = 0;
    cv.onpointerdown = (e) => { pts.set(e.pointerId, { x: e.clientX, y: e.clientY }); drag = { x: e.clientX, y: e.clientY }; moved = 0; cv.setPointerCapture(e.pointerId); };
    cv.onpointermove = (e) => {
      if (!pts.has(e.pointerId)) return; pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 2) { const [a, b] = [...pts.values()]; const d = Math.hypot(a.x - b.x, a.y - b.y); if (pinch) { const k = d / pinch, cx = (a.x + b.x) / 2 - cv.getBoundingClientRect().left, cy = (a.y + b.y) / 2 - cv.getBoundingClientRect().top; ox = cx - (cx - ox) * k; oy = cy - (cy - oy) * k; scale *= k; } pinch = d; moved = 99; draw(); return; }
      if (drag) { ox += e.clientX - drag.x; oy += e.clientY - drag.y; moved += Math.abs(e.clientX - drag.x) + Math.abs(e.clientY - drag.y); drag = { x: e.clientX, y: e.clientY }; draw(); }
    };
    cv.onpointerup = (e) => {
      pts.delete(e.pointerId); if (pts.size < 2) pinch = 0; drag = null; if (moved > 8) return;
      const r = cv.getBoundingClientRect(), mx = e.clientX - r.left, my = e.clientY - r.top;
      let best: any = null, bd = 22 * 22; for (const p of POIS) { if (!["waypoint", "domain", "statue", "boss", "tower"].includes(p.type)) continue; const [x, y] = w2s(p.x, p.z); const d = (x - mx) ** 2 + (y - my) ** 2; if (d < bd) { bd = d; best = p; } }
      clear(info); if (!best) return;
      const unlocked = S.wps[best.id] || best.id === "wp_beach";
      const label = best.type === "boss" ? enemyById(best.data.enemy).name : best.name || "";
      info.append(h("b", {}, label), h("small", {}, best.type === "waypoint" ? (unlocked ? "ワープポイント" : "未解放（近づくと解放）") : best.type === "boss" ? "ボス" : best.type === "domain" ? "秘境" : best.type === "tower" ? "星の塔" : "星の像"));
      const wp = best.type === "waypoint" ? best : POIS.find((q) => q.id === "wp_" + best.id);
      if (wp && (S.wps[wp.id] || wp.id === "wp_beach")) info.append(h("button", { class: "primary", onclick: () => { this.close(); if (this.g.arena) return; this.g.teleport(wp.x + 2, wp.z + 2); } }, "ワープする"));
    };
    cv.onwheel = (e) => { const k = e.deltaY < 0 ? 1.15 : 1 / 1.15, r = cv.getBoundingClientRect(), mx = e.clientX - r.left, my = e.clientY - r.top; ox = mx - (mx - ox) * k; oy = my - (my - oy) * k; scale *= k; draw(); };
    requestAnimationFrame(fit);
  }
  // ---------------- settings ----------------
  settings() {
    const st = S.settings, body = h("div", { class: "settings" });
    const sel = (label: string, opts: [string, string][], val: string, on: (v: string) => void) => h("div", { class: "row" }, h("span", {}, label), h("div", { class: "seg" }, ...opts.map(([k, l]) => h("button", { class: val === k ? "on" : "", onclick: () => { on(k); markDirty(); this.settings(); } }, l))));
    body.append(
      sel("画質", [["auto", "自動"], ["low", "低"], ["mid", "中"], ["high", "高"]], st.quality, (v) => { st.quality = v as any; this.g.gfx.setQuality(v as any); this.g.applyQuality(); }),
      sel("ぼかし演出（HD-2D）", [["on", "オン"], ["off", "オフ"]], st.tilt ? "on" : "off", (v) => { st.tilt = v === "on"; this.g.gfx.tilt = st.tilt; this.g.gfx.resize(); }),
      sel("FPS表示", [["on", "オン"], ["off", "オフ"]], st.fps ? "on" : "off", (v) => (st.fps = v === "on")),
      sel("効果音", [["on", "オン"], ["off", "オフ"]], st.sfx ? "on" : "off", (v) => (st.sfx = v === "on")),
      h("div", { class: "row" }, h("span", {}, "名前（マルチで表示）"), h("input", { value: st.name, maxlength: 10, onchange: (e: any) => { st.name = e.target.value || "旅人"; markDirty(); } })),
      h("h3", {}, "データ"),
      h("div", { class: "btns" }, h("button", { onclick: () => { persist(true); const code = exportSave(); navigator.clipboard?.writeText(code).then(() => bus.emit("toast", "引き継ぎコードをコピーしました"), () => prompt("引き継ぎコード", code)); } }, "引き継ぎコードをコピー"), h("button", { onclick: () => { const c = prompt("引き継ぎコードを貼り付けてください"); if (c) { try { importSave(c); location.reload(); } catch { alert("コードが正しくありません"); } } } }, "コードから復元")),
      h("button", { class: "danger", onclick: () => { if (confirm("本当にデータを消して最初からやり直しますか？")) { resetSave(); location.reload(); } } }, "データを消して最初から"),
      h("small", {}, "NINJIN v0.1　セーブはこの端末のブラウザに自動保存されます。"),
    );
    this.panel("設定", body);
  }
  // ---------------- coop ----------------
  coop() {
    const g = this.g, body = h("div", { class: "coop" }); this.panel("マルチプレイ（2人）", body);
    const net = g.net;
    if (g.role !== "solo") {
      body.append(h("p", {}, g.role === "host" ? `ホストとして遊んでいます。部屋コード：` : "ゲストとして参加中です。"), g.role === "host" ? h("div", { class: "code" }, net.code) : null, h("p", {}, `つながっている人：${[...g.remotes.values()].map((r) => r.name).join("、") || "まだいません"}`), h("button", { class: "danger", onclick: () => { net.leave(); this.close(); } }, "マルチを終了する"));
      return;
    }
    body.append(
      h("p", {}, "友達と一緒に冒険できます。1人2キャラずつ操作します。"),
      h("button", { class: "primary", onclick: () => { clear(body); body.append(h("p", {}, "部屋を作っています…")); (window as any).NINJIN_NET.host().then((code: string) => { clear(body); body.append(h("p", {}, "この部屋コードを友達に送ってね："), h("div", { class: "code" }, code), h("div", { class: "btns" }, h("button", { onclick: () => { navigator.clipboard?.writeText(code); bus.emit("toast", "コピーしました"); } }, "コピー"), navigator.share ? h("button", { onclick: () => navigator.share({ text: `NINJINで一緒に遊ぼう！部屋コード：${code}`, url: location.href }) }, "送る（LINEなど）") : null), h("p", {}, "友達が参加すると自動で始まります。このまま遊んでいてOK！")); }).catch((e: any) => { clear(body); body.append(h("p", {}, "部屋を作れませんでした：" + e), h("button", { onclick: () => this.coop() }, "もどる")); }); } }, "部屋を作る（ホスト）"),
      h("div", { class: "join" }, h("input", { id: "joincode", placeholder: "部屋コード（6文字）", maxlength: 6, style: "text-transform:uppercase" }), h("button", { onclick: () => { const v = ($("#joincode") as HTMLInputElement).value.trim().toUpperCase(); if (v.length < 4) return; clear(body); body.append(h("p", {}, "接続しています…")); (window as any).NINJIN_NET.join(v).then(() => this.close()).catch((e: any) => { clear(body); body.append(h("p", {}, "参加できませんでした：" + e), h("button", { onclick: () => this.coop() }, "もどる")); }); } }, "参加する")),
      h("small", {}, "※ うまくつながらない時は、Wi-Fiを切ってモバイル回線で試してみてね。"),
    );
  }
  // ---------------- npc / world ----------------
  dialog(lines: [string, string][], done: () => void) {
    this.cur?.remove(); this.cur = null; this.g.dialogOpen = true; let i = 0;
    const box = h("div", { class: "dlg" }); this.ui.append(box);
    const show = () => { if (i >= lines.length) { box.remove(); this.g.dialogOpen = false; done(); return; } const [sp, tx] = lines[i]; clear(box); const ch = CHARS.find((c) => c.name === sp) || (sp === "ソラ" ? charById("sora") : null); box.append(ch ? portrait(ch.look, ch.weapon, 3, ch.id) : h("div", { class: "nop" }), h("div", { class: "dt" }, h("b", {}, sp), h("p", {}, tx), h("small", {}, "タップで次へ ▼"))); };
    box.onclick = () => { i++; show(); }; show();
  }
  npc(id: string) {
    const g = this.g; if (talkNpc(g, id)) return;
    const name = byId.get(id)?.name || "";
    const chat: Record<string, string> = { npc_elder: "この島には、星の欠片がたくさん落ちておる。高いところを探してみるとよい。", npc_shop: "いらっしゃい！ 旅に必要なものはそろってるよ。", npc_guild: "毎日の依頼を確認する？", npc_smith: "いい武器は、いい素材から。岩兵の石はよく鍛えられるぞ。", npc_monk: "霜嶺は寒い。滑空で谷を越えるのが早いぞ。", npc_girl: "お兄ちゃん（お姉ちゃん）、宝箱って開けるとき、わくわくするよね！", npc_fisher: "海の向こうから、たまに不思議な光が見えるんだ。" };
    if (id === "npc_shop") { this.dialog([[name, chat[id]]], () => this.shop()); return; }
    if (id === "npc_guild") { this.dialog([[name, chat[id]]], () => this.quests()); return; }
    if (id === "npc_girl" && !S.flags.girlDone) { this.dialog([[name, "わたし、迷子になっちゃった……町まで連れてってくれる？ ……え、地図があるの？ ありがとう！ これ、お礼！"]], () => { S.flags.girlDone = 1; addItem("gem", 60); addItem("food2", 2); bus.emit("toast", "星晶×60、焼き魚定食×2を手に入れた"); markDirty(); }); return; }
    this.dialog([[name, chat[id] || "……"]], () => { });
  }
  shop() {
    const body = h("div", { class: "shop" }); this.panel("商人ミツのお店", body, "wide");
    const goods: [string, number, string, number][] = [["food1", 1, "coin", 500], ["food2", 1, "coin", 1500], ["food3", 1, "coin", 3000], ["exp1", 1, "coin", 600], ["exp2", 1, "coin", 2800], ["ore1", 1, "coin", 300], ["ore2", 1, "coin", 1400], ["ticket_s", 1, "dust", 5], ["ticket_g", 1, "dust", 5], ["book_a1", 1, "coin", 1200], ["book_b1", 1, "coin", 1200], ["book_c1", 1, "coin", 1200]];
    const render = () => { clear(body); body.append(h("div", { class: "have" }, `コイン ${fmt(has("coin"))}　星屑 ${has("dust")}`)); for (const [id, n, cur, price] of goods) body.append(h("div", { class: "it" }, h("b", { style: `color:${itemById(id).color}` }, itemById(id).icon), h("span", {}, itemById(id).name), h("small", {}, `${itemName(cur)} ${fmt(price)}`), h("button", { disabled: has(cur) < price, onclick: () => { if (useItem(cur, price)) addItem(id, n); render(); } }, "買う"))); };
    this.onChange = render; render();
  }
  statue(id: string) {
    const g = this.g; statueStep(g, id);
    for (const m of g.members) { m.dead = false; m.hp = m.st.hp; } g.player.stamina = g.player.stamMax;
    const lv = S.statues[id] || 0, body = h("div", {});
    body.append(h("p", {}, "星の像に祈ると、仲間のHPが全回復します。"), h("p", {}, `この像のレベル：${lv} / 10　　星の欠片 ${has("shard")}個`), h("p", {}, `スタミナ上限：${S.stamMax}`));
    body.append(h("button", { class: "primary", disabled: lv >= 10 || has("shard") < 4, onclick: () => { if (useItem("shard", 4)) { S.statues[id] = lv + 1; S.stamMax += 15; g.player.stamMax = S.stamMax; addItem("gem", 60); addItem("exp2", 3); P.addAR(100); markDirty(); bus.emit("toast", "スタミナの上限が増えた！"); this.statue(id); } } }, "星の欠片を4つ捧げる"));
    this.panel("星の像", body);
  }
  domain(id: string) {
    const p = byId.get(id)!, kind = p.data.kind, body = h("div", {});
    const desc: Record<string, string> = { book: "天賦の育成素材（教え・導き・哲学）が手に入る", relic: "遺紋（装備）が手に入る", ore: "武器の強化素材とキャラの経験値本が手に入る" };
    body.append(h("p", {}, desc[kind]), h("p", {}, "何回でも挑戦できます。毎日最初の3回は星晶40ももらえます。"), this.g.role !== "solo" ? h("p", { class: "gdesc" }, "マルチ中：2人で一緒に入ります。報酬はそれぞれもらえます。") : null);
    [1, 2, 3, 4].forEach((lv) => {
      const elvl = this.g.domainLevel(lv);
      body.append(h("div", { class: "daily" }, h("span", {}, `難易度 ${lv}`), h("small", {}, `推奨 Lv.${elvl}`), h("button", { onclick: () => { this.close(); if (this.g.role === "guest") { this.g.net?.send({ t: "domReq", id, lv }); bus.emit("toast", "ホストに秘境の開始をお願いしました"); } else this.g.startDomain(id, lv); } }, "挑戦する")));
    });
    this.panel(p.name || "秘境", body);
  }
  tower() {
    const body = h("div", {});
    body.append(h("p", {}, "星の塔：強い敵を制限時間内に倒そう。早く倒すほど星がもらえます（星1つにつき星晶100、初回のみ）。"));
    for (let f = 1; f <= 12; f++) {
      const best = S.tower["f" + f] || 0, unlocked = f === 1 || (S.tower["f" + (f - 1)] || 0) > 0, elvl = 15 + f * 6;
      body.append(h("div", { class: "daily" }, h("span", {}, `第${f}層`), h("small", {}, `Lv.${elvl}　${"★".repeat(best)}${"☆".repeat(3 - best)}`), h("button", { disabled: !unlocked, onclick: () => { this.close(); const r = new Rng(f * 131); const pool = ["bandit", "archer", "shaman", "golem", "puff_fire", "puff_water", "puff_volt", "puff_frost", "wisp_star", "wisp_shadow"]; const waves = [Array.from({ length: 3 + (f >> 2) }, () => r.pick(pool)), f % 4 === 0 ? [["boss_puff", "boss_golem", "boss_wisp", "boss_knight"][(f / 4 - 1) % 4]] : Array.from({ length: 3 + (f >> 2) }, () => r.pick(pool))]; this.g.enterArena("tower", "f" + f, f, waves, elvl, 180); } }, "挑戦")));
    }
    this.panel("星の塔", body);
  }
  arenaWin(a: any) {
    const g = this.g, loot: string[] = [], rng = new Rng(Date.now()), give = (k: string, n: number) => { addItem(k, n); loot.push(`${itemName(k)} ×${n}`); };
    if (a.kind === "domain") {
      const kind = byId.get(a.id)!.data.kind, lv = a.lv;
      give("coin", 2000 * lv);
      if (kind === "relic") { const n = 1 + Math.floor(lv / 2); for (let i = 0; i < n + 1; i++) { const rar = rng.next() < 0.12 * lv ? 5 : rng.next() < 0.5 ? 4 : 3; P.rollRelic(rng, rar); } loot.push(`遺紋 ×${n + 1}`); }
      if (kind === "book") { const b = rng.pick(["a", "b", "c"]); give(`book_${b}1`, 2 + lv); if (lv >= 2) give(`book_${b}2`, lv); if (lv >= 3) give(`book_${b}3`, lv - 2); }
      if (kind === "ore") { give("ore2", 2 + lv * 2); give("exp2", 2 + lv); if (lv >= 3) { give("ore3", lv - 2); give("exp3", lv - 2); } }
      P.addAR(60 + lv * 20); bus.emit("daily", "domain", 1); domainStep(g, a.id);
      const dk = new Date().toDateString(); const dd = (S.flags.domDay ||= { d: dk, n: 0 }); if (dd.d !== dk) { dd.d = dk; dd.n = 0; } if (dd.n < 3) { dd.n++; give("gem", 40); }
    } else {
      const stars = a.t < 60 ? 3 : a.t < 100 ? 2 : 1, prev = S.tower[a.id] || 0;
      if (stars > prev) { give("gem", 100 * (stars - prev)); S.tower[a.id] = stars; }
      give("coin", 3000 + a.lv * 800); loot.push(`★${stars}（${Math.round(a.t)}秒）`);
    }
    markDirty();
    setTimeout(() => this.panel("クリア！", h("div", {}, h("div", { class: "loot" }, ...loot.map((l) => h("div", {}, l))), h("div", { class: "btns" }, h("button", { class: "primary", onclick: () => { this.close(); if (g.arena) g.leaveArena(true); } }, "外に出る"), a.kind === "domain" && g.role !== "guest" ? h("button", { onclick: () => { this.close(); g.leaveArena(true); setTimeout(() => g.startDomain(a.id, a.lv), 300); } }, "もう一度") : null))), 900);
  }
  school() {
    const body = h("div", { class: "school" }), done = (S.flags.trials ||= {});
    body.append(h("h3", {}, "元素反応ってなに？"),
      h("p", { class: "bio" }, "敵に元素がついている状態（頭の上にマークが出る）で、ちがう元素の攻撃を当てると「元素反応」が起きるよ。反応ごとに、大ダメージ・敵を凍らせる・回復・シールド・敵を吸い寄せるなど、特別な効果があるんだ。"),
      h("p", { class: "bio" }, "やり方：①1人目で敵に元素をつける → ②キャラを交代する → ③ちがう元素で攻撃！ 焔・潮・雷・霜・星・影の6元素で、全部で15種類の反応があるよ。"),
      h("p", { class: "gdesc" }, `試練をクリアすると星晶60がもらえるよ（初回のみ）。クリア：${Object.keys(done).length} / ${Object.keys(REACTIONS).length}`));
    const list = h("div", { class: "trials" });
    for (const [k, r] of Object.entries(REACTIONS)) {
      const [a, b] = k.split("+");
      list.append(h("div", { class: "trial" + (done[k] ? " done" : ""), style: `--c:${r.color}`, onclick: () => this.trialIntro(k) }, h("div", { class: "tr-el" }, h("span", { style: `background:${(EL_INFO as any)[a].color}` }, (EL_INFO as any)[a].name), "＋", h("span", { style: `background:${(EL_INFO as any)[b].color}` }, (EL_INFO as any)[b].name)), h("b", {}, r.name), h("small", {}, r.desc), done[k] ? h("i", {}, "✓ クリア") : null));
    }
    body.append(list); this.panel("元素の学び舎", body, "wide");
  }
  trialIntro(k: string) {
    const r = REACTIONS[k], [a, b] = k.split("+"), A = (EL_INFO as any)[a].name, B = (EL_INFO as any)[b].name;
    const kindText: Record<string, string> = { amp: "その一撃のダメージが何倍にもなる「増幅」タイプ。強い攻撃で起こすとお得！", aoe: "爆発して周りの敵にもダメージを与える「範囲」タイプ。敵が集まっているときに強い！", dot: "時間をかけてダメージを与え続ける「継続」タイプ。", freeze: "敵を凍らせて動けなくする「拘束」タイプ。その間は攻撃し放題！", slow: "敵を弱らせる「弱体」タイプ。攻撃力と速さが下がる。", heal: "チーム全員を回復する「回復」タイプ。", shield: "自分にシールドを張る「防御」タイプ。", pull: "周りの敵を1か所に吸い寄せる「集敵」タイプ。範囲攻撃と相性ばつぐん！", resdown: "敵の耐性を下げてダメージを通りやすくする「弱体」タイプ。", buff: "大ダメージに加えて、しばらく会心率が上がる「強化」タイプ。", chain: "近くの敵に次々とダメージが飛ぶ「連鎖」タイプ。", energy: "爆発に加えてチーム全員の元素エネルギーを回復する「エネルギー」タイプ。" };
    this.dialog([["先生のアオバ", `今日は「${r.name}」を学ぼう！ ${A}元素と${B}元素を組み合わせると起きる反応だよ。`], ["先生のアオバ", `効果：${r.desc}。${kindText[r.kind] || ""}`], ["先生のアオバ", `${A}元素のキャラで敵（かかし）に元素をつけて、${B}元素のキャラに交代して攻撃してみて。逆の順番でもOK！ 3回起こせたらクリアだよ。キャラは試練用に貸してあげるね。`]], () => this.g.startTrial(k));
  }
  eventMenu() {
    const g = this.g, wk = g.weekSeed(), st = S.flags.ev && S.flags.ev.week === wk ? S.flags.ev.cleared : {};
    const body = h("div", {});
    body.append(h("p", { class: "bio" }, "全12層の塔を登るイベント。各層のはじめに3枚のカードから1枚選んで、チームを強化しよう。カードはその挑戦の間ずっと重なっていくよ。4層ごとにボスが待っている！"),
      h("p", { class: "bio" }, "マルチプレイでも2人で一緒に挑戦できる（カードはそれぞれ選ぶ）。層をクリアするたびに報酬。毎週はじめてのクリアなら星晶もたくさん！ 敵の顔ぶれは毎週かわるよ。"),
      h("p", { class: "gdesc" }, `今週クリアした層：${Object.keys(st).length} / 12`),
      h("button", { class: "primary", onclick: () => { this.close(); g.startEvent(); } }, g.role === "guest" ? "ホストに挑戦をお願いする" : "挑戦する"));
    this.panel("星海の螺旋", body);
  }
  cardPick(cb: () => void) {
    const g = this.g, ids = g.offerCards(), ov = h("div", { class: "cardov" });
    ov.append(h("div", { class: "ct" }, `第${g.ev?.floor || 1}層：強化カードを1枚選ぼう`), h("div", { class: "cards" }, ...ids.map((id) => { const c = (CARDS as any[]).find((x) => x.id === id); return h("div", { class: "card", onclick: () => { ov.remove(); g.paused = false; g.pickCard(id); cb(); } }, h("b", {}, c.icon), h("div", { class: "cn" }, c.name), h("small", {}, c.desc)); })),
      g.ev && g.ev.picks.length ? h("small", { class: "picked" }, "これまでのカード：" + g.ev.picks.map((p) => (CARDS as any[]).find((x) => x.id === p).name).join("・")) : "");
    this.cur?.remove(); this.cur = null; this.ui.append(ov); g.paused = g.role === "solo";
  }
  evFloor(f: number, loot: string[], last: boolean) {
    const g = this.g;
    setTimeout(() => {
      const body = h("div", {}, h("div", { class: "loot" }, ...loot.map((l) => h("div", {}, l))));
      if (last) body.append(h("p", {}, "全12層クリア！ おめでとう！"), h("button", { class: "primary", onclick: () => { this.close(); if (g.arena) g.leaveArena(true); } }, "外に出る"));
      else body.append(h("div", { class: "btns" }, h("button", { class: "primary", onclick: () => { this.close(); this.cardPick(() => { if (g.role !== "guest") g.nextEventFloor(); }); } }, "次の層へ（カードを選ぶ）"), g.role !== "guest" ? h("button", { onclick: () => { this.close(); g.leaveArena(true); } }, "ここでやめる") : null));
      this.panel(`第${f}層クリア！`, body);
    }, 800);
  }
  banner(t: string, sub: string) { const b = h("div", { class: "banner" }, h("b", {}, t), h("small", {}, sub)); this.ui.append(b); setTimeout(() => b.classList.add("out"), 3200); setTimeout(() => b.remove(), 4000); }
}
