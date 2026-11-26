# NINJIN エフェクトのソース

pixelfx（https://github.com/patch-gg/pixelfx）で描いたオリジナルエフェクトです。
作り直すときは pixelfx を clone して、このフォルダの `*.js` を `src/fx/ninjin/` に置き、

```
node tools/render.mjs ninjin/<名前> --sheet --fps <fps>
```

で `<名前>.png` を作り、`public/fx/` にコピーして `public/fx/index.json` を更新します。
白黒で描いてあり、ゲーム内で元素ごとの色に塗り替えています。
