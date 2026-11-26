type Fn = (...a: any[]) => void;
export class Emitter {
  private m = new Map<string, Set<Fn>>();
  on(e: string, f: Fn) { if (!this.m.has(e)) this.m.set(e, new Set()); this.m.get(e)!.add(f); return () => this.m.get(e)!.delete(f); }
  emit(e: string, ...a: any[]) { this.m.get(e)?.forEach((f) => f(...a)); }
}
export const bus = new Emitter();
