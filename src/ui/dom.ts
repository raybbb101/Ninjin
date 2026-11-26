export function h<K extends keyof HTMLElementTagNameMap>(tag: K, attrs: Record<string, any> = {}, ...kids: (Node | string | null | undefined | false)[]): HTMLElementTagNameMap[K] {
  const el = document.createElement(tag);
  for (const k in attrs) { const v = attrs[k]; if (k === "class") el.className = v; else if (k === "style") el.setAttribute("style", v); else if (k.startsWith("on")) el.addEventListener(k.slice(2), v); else if (v !== undefined && v !== null && v !== false) el.setAttribute(k, v === true ? "" : v); }
  for (const c of kids) if (c !== null && c !== undefined && c !== false) el.append(c as any);
  return el;
}
export const $ = (s: string) => document.querySelector(s) as HTMLElement;
export function clear(el: HTMLElement) { while (el.firstChild) el.removeChild(el.firstChild); return el; }
export function stars(n: number) { return "★".repeat(n); }
export const RCOL: Record<number, string> = { 1: "#8a8a9a", 2: "#5aa86a", 3: "#4a8ad8", 4: "#9a5ad8", 5: "#e8a83a" };
