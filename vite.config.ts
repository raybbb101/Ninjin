import { defineConfig } from "vite";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
export default defineConfig({
  base: "./",
  build: { target: "es2020", chunkSizeWarningLimit: 1500, assetsInlineLimit: 0 },
  plugins: [{
    name: "sw-stamp",
    closeBundle() { const f = "dist/sw.js"; if (existsSync(f)) writeFileSync(f, readFileSync(f, "utf8").replace("__BUILD__", Date.now().toString(36))); },
  }],
});
