var vu=i=>{throw TypeError(i)};var er=(i,e,t)=>e.has(i)?vu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t);function xu(i,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in i)){const r=Object.getOwnPropertyDescriptor(n,s);r&&Object.defineProperty(i,s,r.get?r:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Ir={sword:"片手剣",claymore:"両手剣",polearm:"長柄武器",bow:"弓",catalyst:"法器"},Mt=(i,e,t,n,s,r={})=>({name:i,kind:e,mv:t,cd:n,desc:s,...r}),St=(i,e,t,n,s,r={})=>({name:i,kind:e,mv:t,cd:15,cost:n,desc:s,...r}),Cn=[{id:"sora",name:"ソラ",title:"星を拾った旅人",rarity:5,el:"star",weapon:"sword",hp:912,atk:18,def:57,asc:{k:"atkP",v:.24},starter:!0,look:{hair:"#f2e6c8",style:"short",skin:"#ffd9b8",eye:"#e85aa8",c1:"#3a3f7a",c2:"#f4f1ea",c3:"#ffc24a",cape:!0},skill:Mt("星屑の一閃","wave",2.2,6,"前方に星の斬撃を飛ばす。",{r:2}),burst:St("流れ星の雨","meteor",1.4,60,"周りの敵に流れ星を5つ落とす。",{n:5,r:3.5}),bio:"夜空から落ちてきた星と一緒に、浜辺で目を覚ました旅人。記憶の大部分をなくしている。"},{id:"homura",name:"ホムラ",title:"紅蓮の鍛冶姫",rarity:5,el:"fire",weapon:"claymore",hp:1020,atk:26,def:62,asc:{k:"cd",v:.384},look:{hair:"#d8382a",style:"ponytail",skin:"#f8cfa8",eye:"#ffb020",c1:"#3a2220",c2:"#e8a040",c3:"#ff6030",acc:"band"},skill:Mt("灼熱槌","dash",2.6,8,"炎をまとって前へ踏み込み、叩き割る。",{r:2.5}),burst:St("鍛炉解放","infuse",3.2,70,"爆発を起こし、12秒間通常攻撃が焔元素になる。",{r:5,dur:12,buff:.35}),bio:"紅砂の谷の名工。自分の打った剣は自分で試し斬りしないと気が済まない。"},{id:"shizuku",name:"シズク",title:"水鏡の巫女",rarity:5,el:"water",weapon:"catalyst",hp:1060,atk:17,def:58,asc:{k:"heal",v:.222},look:{hair:"#6ab8ff",style:"long",skin:"#fde3cc",eye:"#2a6ad8",c1:"#f4f6ff",c2:"#3a7ad8",c3:"#9ae0ff",skirt:!0,acc:"flower"},skill:Mt("水鏡の陣","field",.6,12,"足もとに癒やしの陣を張り、10秒間回復と攻撃を続ける。",{r:5,dur:10,heal:.04}),burst:St("満ち潮","nova",3.6,80,"大波で周囲を押し流し、チーム全員のHPを大きく回復。",{r:7,heal:.25}),bio:"湖の社を守る巫女。のんびりしているが、怒ると誰よりもこわい。"},{id:"raika",name:"ライカ",title:"迅雷の槍騎",rarity:5,el:"volt",weapon:"polearm",hp:980,atk:25,def:60,asc:{k:"cr",v:.192},limited:!0,look:{hair:"#2a2a3a",style:"spiky",skin:"#f4c8a0",eye:"#ffd23c",c1:"#222838",c2:"#ffd23c",c3:"#e8e8f0",cape:!0},skill:Mt("稲妻走り","chain",2,7,"雷が最大5体の敵の間を走る。",{n:5,r:8}),burst:St("百雷槍","volley",.9,60,"雷の槍を12本降らせる。",{n:12,r:6}),bio:"雷よりも速いと噂される傭兵。本人はただの遅刻魔だと言う。"},{id:"yukine",name:"ユキネ",title:"霜灯の射手",rarity:5,el:"frost",weapon:"bow",hp:860,atk:24,def:54,asc:{k:"cd",v:.384},look:{hair:"#e8f4ff",style:"bob",skin:"#fff0e4",eye:"#5ab8ff",c1:"#2a4a7a",c2:"#e8f4ff",c3:"#9ae8ff",acc:"hood"},skill:Mt("霜灯籠","turret",.9,10,"氷の灯籠を置く。灯籠は12秒間、近くの敵を撃ち続ける。",{r:10,dur:12}),burst:St("白夜の雪原","field",.8,60,"広い範囲に吹雪を起こし、8秒間ダメージを与え続ける。",{r:7,dur:8}),bio:"霜嶺の見張り番。口数は少ないが、灯籠の手入れだけは毎日欠かさない。"},{id:"kurou",name:"クロウ",title:"影喰らいの剣士",rarity:5,el:"shadow",weapon:"sword",hp:940,atk:27,def:57,asc:{k:"cr",v:.192},limited:!0,look:{hair:"#1a1a28",style:"long",skin:"#e8c4a8",eye:"#c070ff",c1:"#18141f",c2:"#5a2a8a",c3:"#c070ff",cape:!0,acc:"mask"},skill:Mt("影渦","vortex",.5,9,"影の渦で敵を吸い寄せ、ダメージを与え続ける。",{r:6,dur:4}),burst:St("月蝕斬","nova",4.8,70,"影の大斬撃で周囲を切り裂く。",{r:6}),bio:"影の塔から来たという謎の剣士。甘いものに目がない。"},{id:"mikoto",name:"ミコト",title:"星詠みの姫",rarity:5,el:"star",weapon:"catalyst",hp:1e3,atk:20,def:63,asc:{k:"er",v:.32},limited:!0,look:{hair:"#ffd0f0",style:"twin",skin:"#ffe8d8",eye:"#a050ff",c1:"#ffffff",c2:"#ff9ad8",c3:"#ffd84a",skirt:!0,acc:"crown"},skill:Mt("星詠みの祝福","buff",1.2,15,"星の結界を張り、中にいる仲間の攻撃力を12秒間上げる。",{r:5,dur:12,buff:.4}),burst:St("天球の守り","shield",2.2,60,"星の盾でチームを守り、周囲にダメージ。",{r:5,shield:.35,heal:.1}),bio:"星の声を聞くと言われる王族の末裔。好奇心が強く、すぐ城を抜け出す。"},{id:"kagura",name:"カグラ",title:"炎舞の狩人",rarity:5,el:"fire",weapon:"bow",hp:880,atk:26,def:52,asc:{k:"atkP",v:.288},limited:!0,look:{hair:"#ff9a3a",style:"braid",skin:"#f0c09a",eye:"#d83a2a",c1:"#5a2a1a",c2:"#ffcf6a",c3:"#ff5a3a",acc:"ears"},skill:Mt("火矢の舞","volley",1.1,8,"燃える矢を6本連続で放つ。",{n:6,r:12}),burst:St("天焦がし","meteor",2.6,70,"巨大な火球を3つ落とす。",{n:3,r:4.5}),bio:"狐の耳を持つ狩人。踊るように矢を放ち、外したことはないと自慢している。"},{id:"tsumugi",name:"ツムギ",title:"糸紡ぎの弓使い",rarity:4,el:"fire",weapon:"bow",hp:790,atk:19,def:50,asc:{k:"atkP",v:.24},starter:!0,look:{hair:"#a04a2a",style:"ponytail",skin:"#fcd4b0",eye:"#6a3a1a",c1:"#c84a3a",c2:"#f4e0b0",c3:"#ffd060"},skill:Mt("火の綾","volley",.9,6,"火の矢を3本扇状に放つ。",{n:3,r:12}),burst:St("火群","nova",2.4,40,"周りに炎の輪を広げる。",{r:5}),bio:"ルコの町の仕立て屋の娘。弓の腕は町いちばん。"},{id:"hayate",name:"ハヤテ",title:"疾風の剣客",rarity:4,el:"volt",weapon:"sword",hp:840,atk:18,def:55,asc:{k:"er",v:.267},starter:!0,look:{hair:"#4a6aa8",style:"spiky",skin:"#f4c8a0",eye:"#ffd23c",c1:"#2a3a5a",c2:"#c8d0e0",c3:"#ffd23c",cape:!0},skill:Mt("迅雷踏み","dash",1.8,5,"雷をまとって駆け抜ける。",{r:2}),burst:St("雷鳴剣","infuse",1.6,50,"10秒間、通常攻撃が雷元素になり、ダメージが上がる。",{r:4,dur:10,buff:.25}),bio:"流れ者の剣士。困っている人を見ると放っておけない。"},{id:"minamo",name:"ミナモ",title:"水面の射手",rarity:4,el:"water",weapon:"bow",hp:820,atk:17,def:52,asc:{k:"hpP",v:.24},starter:!0,look:{hair:"#3a8ad8",style:"bun",skin:"#fde0c8",eye:"#1a5aa8",c1:"#e8f4ff",c2:"#3a8ad8",c3:"#78d8f4",skirt:!0},skill:Mt("さざ波の矢","wave",1.6,6,"水の矢が敵を貫いて進む。",{r:1.6}),burst:St("恵みの雨","field",.4,60,"雨を降らせ、8秒間仲間を回復しながら敵を打つ。",{r:6,dur:8,heal:.03}),bio:"漁師の家の娘。魚と話せると本気で信じている。"},{id:"kohaku",name:"コハク",title:"琥珀の盾",rarity:4,el:"star",weapon:"claymore",hp:1e3,atk:17,def:70,asc:{k:"defP",v:.3},look:{hair:"#e8a84a",style:"short",skin:"#f0c8a0",eye:"#a85a1a",c1:"#7a5a3a",c2:"#f0e0c0",c3:"#ffd060",acc:"horns"},skill:Mt("琥珀の守り","shield",1.4,12,"防御力に応じたシールドを張り、周囲にダメージ。",{r:3.5,shield:.3}),burst:St("大地の星","nova",3,50,"大剣を叩きつけ、星の衝撃波を起こす。",{r:6}),bio:"霜嶺のふもとの村で育った力持ち。困ったら全部持ち上げて解決する。"},{id:"shino",name:"シノ",title:"影縫いの書士",rarity:4,el:"shadow",weapon:"catalyst",hp:780,atk:19,def:48,asc:{k:"em",v:96},look:{hair:"#5a3a8a",style:"bob",skin:"#f8d8c0",eye:"#c070ff",c1:"#2a1a3a",c2:"#8a5ac8",c3:"#e0c0ff",skirt:!0},skill:Mt("影の鎖","chain",1.3,7,"影の鎖が3体の敵をつなぐ。",{n:3,r:7}),burst:St("夜帳","vortex",.7,60,"大きな影の渦を作り、敵を引き寄せる。",{r:8,dur:5}),bio:"図書館の司書。本の中の影を呼び出せる。"},{id:"rin",name:"リン",title:"氷鈴の剣士",rarity:4,el:"frost",weapon:"sword",hp:860,atk:18,def:56,asc:{k:"atkP",v:.24},look:{hair:"#9ad8f0",style:"ponytail",skin:"#fde8d8",eye:"#3a7ad8",c1:"#2a4a6a",c2:"#e8f4ff",c3:"#9ae8ff"},skill:Mt("氷鈴","nova",1.9,6,"鈴の音とともに周りを凍らせる。",{r:3.5}),burst:St("氷華乱れ","volley",.8,60,"氷の花びらを10枚飛ばす。",{n:10,r:8}),bio:"鈴を集めるのが趣味の剣士。歩くといつもちりんと鳴る。"},{id:"taki",name:"タキ",title:"滝登りの槍",rarity:4,el:"water",weapon:"polearm",hp:900,atk:19,def:56,asc:{k:"atkP",v:.24},look:{hair:"#2a5a7a",style:"short",skin:"#e8b890",eye:"#3ab0ff",c1:"#1a3a5a",c2:"#78c8f0",c3:"#e8f4ff",acc:"band"},skill:Mt("昇り鯉","dash",1.9,6,"水流に乗って前へ突進する。",{r:2.2}),burst:St("瀑布","nova",3.2,60,"滝のような水柱で周りを押しつぶす。",{r:5}),bio:"滝に打たれて修行する槍使い。いつも少し濡れている。"},{id:"akane",name:"アカネ",title:"夕焼けの魔女",rarity:4,el:"fire",weapon:"catalyst",hp:760,atk:20,def:46,asc:{k:"fire",v:.24},look:{hair:"#ff6a4a",style:"long",skin:"#fde0c8",eye:"#ff9a2a",c1:"#3a1a2a",c2:"#ff6a4a",c3:"#ffd060",acc:"hat",skirt:!0},skill:Mt("夕陽落とし","meteor",2,9,"一番近い敵に小さな太陽を落とす。",{n:1,r:3.5}),burst:St("黄昏の炎","field",.7,60,"炎の結界で8秒間焼き続ける。",{r:6,dur:8}),bio:"自称・天才魔女。料理をすると必ず何かが燃える。"},{id:"ibuki",name:"イブキ",title:"雷鳴の見張り",rarity:4,el:"volt",weapon:"bow",hp:800,atk:19,def:50,asc:{k:"volt",v:.24},look:{hair:"#e8d040",style:"short",skin:"#f8d0a8",eye:"#5a3a1a",c1:"#3a3a2a",c2:"#e8d040",c3:"#ffffff",acc:"hat"},skill:Mt("雷見櫓","turret",.7,10,"雷の見張り台を置き、10秒間敵を撃つ。",{r:10,dur:10}),burst:St("落雷注意","chain",1.5,50,"雷が7体の敵を順番に打つ。",{n:7,r:10}),bio:"谷の見張り台に住む少年。雷の音で天気がわかる。"},{id:"yuzu",name:"ユズ",title:"陽だまりの薬師",rarity:4,el:"star",weapon:"polearm",hp:920,atk:16,def:55,asc:{k:"hpP",v:.24},look:{hair:"#ffd84a",style:"twin",skin:"#ffe4d0",eye:"#4a9a3a",c1:"#f4f0d8",c2:"#7ac850",c3:"#ffd84a",skirt:!0},skill:Mt("ひだまり草","field",.3,12,"回復の草を生やし、10秒間チームを癒やす。",{r:5,dur:10,heal:.035}),burst:St("満開","nova",2,60,"花を咲かせて周囲にダメージ、チーム全員を回復。",{r:6,heal:.2}),bio:"町の薬師見習い。苦い薬を甘くする研究をしている。"},{id:"fuyu",name:"フユ",title:"冬籠りの大剣",rarity:4,el:"frost",weapon:"claymore",hp:960,atk:20,def:60,asc:{k:"frost",v:.24},look:{hair:"#c8d8e8",style:"long",skin:"#f8e0d0",eye:"#5a8ab8",c1:"#4a5a7a",c2:"#f0f4ff",c3:"#9ae8ff",acc:"ears"},skill:Mt("冬眠明け","nova",2.2,7,"大剣で地面をたたき、氷柱を立てる。",{r:4}),burst:St("吹雪の大剣","infuse",1.8,60,"10秒間、通常攻撃が霜元素になる。",{r:4,dur:10,buff:.3}),bio:"冬になると眠くなる大剣使い。起きているときはとても頼りになる。"},{id:"yoru",name:"ヨル",title:"夜鳴きの弓",rarity:4,el:"shadow",weapon:"bow",hp:780,atk:20,def:48,asc:{k:"shadow",v:.24},look:{hair:"#3a2a5a",style:"long",skin:"#f0d0c0",eye:"#ff5a8a",c1:"#1a1428",c2:"#5a3a8a",c3:"#ff5a8a",acc:"hood"},skill:Mt("夜鳴き","vortex",.4,9,"影の矢が渦になり、敵を引き寄せる。",{r:5,dur:3}),burst:St("百夜","volley",.7,60,"影の矢を14本降らせる。",{n:14,r:8}),bio:"夜にしか姿を見せない弓使い。昼は寝ている。"},{id:"kaede",name:"カエデ",title:"紅葉の槍",rarity:4,el:"fire",weapon:"polearm",hp:880,atk:19,def:54,asc:{k:"cr",v:.16},look:{hair:"#c8402a",style:"short",skin:"#f4c8a0",eye:"#ff9a2a",c1:"#7a2a1a",c2:"#f0c080",c3:"#ff6a3a",acc:"band"},skill:Mt("紅葉狩り","infuse",1.5,10,"槍に炎を宿し、8秒間通常攻撃が焔元素になる。",{r:3,dur:8,buff:.2}),burst:St("錦秋","nova",3,60,"炎の葉が舞い、周囲を焼く。",{r:5}),bio:"秋が大好きな槍使い。一年中、紅葉の髪飾りをつけている。"},{id:"nagi",name:"ナギ",title:"凪の守り手",rarity:4,el:"water",weapon:"claymore",hp:1e3,atk:18,def:64,asc:{k:"hpP",v:.24},look:{hair:"#4a8a9a",style:"braid",skin:"#e8c0a0",eye:"#3ab0c8",c1:"#2a4a5a",c2:"#c8e8f0",c3:"#78d8f4"},skill:Mt("凪の壁","shield",1.2,12,"HPに応じた水のシールドを張る。",{r:3.5,shield:.3}),burst:St("大凪","nova",3,60,"静かな大波で周りを押し流す。",{r:6}),bio:"灯台守の青年。海が荒れると、なぜか凪がくる。"}],je=i=>Cn.find(e=>e.id===i),We=(i,e,t,n,s,r,a,o,c,l={})=>({id:i,name:e,type:t,rarity:n,atk:s,sub:r,pName:a,pDesc:o,eff:c,...l}),ai=[We("w_s1","見習いの剣","sword",1,23),We("w_c1","見習いの大剣","claymore",1,23),We("w_p1","見習いの槍","polearm",1,23),We("w_b1","見習いの弓","bow",1,23),We("w_k1","見習いの手帳","catalyst",1,23),We("w_s3a","鉄の片刃","sword",3,39,{k:"atkP",v:.3},"研ぎ澄まし","攻撃力+12%",{atkP:.12}),We("w_s3b","旅人のショートソード","sword",3,38,{k:"cd",v:.4},"旅の勘","会心率+6%",{cr:.06}),We("w_c3a","岩砕き","claymore",3,39,{k:"atkP",v:.3},"重み","通常攻撃ダメージ+20%",{na:.2}),We("w_c3b","古びた鉄塊","claymore",3,38,{k:"defP",v:.4},"かたい","防御力+20%",{defP:.2}),We("w_p3a","見張りの槍","polearm",3,39,{k:"cr",v:.2},"警戒","攻撃力+10%",{atkP:.1}),We("w_p3b","銛","polearm",3,38,{k:"atkP",v:.3},"漁師の腕","潮元素ダメージ+12%",{water:.12}),We("w_b3a","狩人の弓","bow",3,39,{k:"cd",v:.4},"狙い撃ち","重撃ダメージ+24%",{ca:.24}),We("w_b3b","竹弓","bow",3,38,{k:"er",v:.35},"しなり","元素スキルダメージ+16%",{skill:.16}),We("w_k3a","魔法の入門書","catalyst",3,39,{k:"em",v:120},"予習","元素熟知+40",{em:40}),We("w_k3b","ガラス玉","catalyst",3,38,{k:"hpP",v:.3},"きらめき","回復効果+10%",{heal:.1}),We("w_s4a","風見の剣","sword",4,42,{k:"er",v:.45},"追い風","元素爆発ダメージ+24%",{burst:.24}),We("w_s4b","銀月の刃","sword",4,44,{k:"cr",v:.25},"月明かり","攻撃力+20%",{atkP:.2}),We("w_c4a","鍛冶場の大鉈","claymore",4,42,{k:"atkP",v:.41},"焼き入れ","通常・重撃ダメージ+20%",{na:.2,ca:.2}),We("w_c4b","霜降りの大剣","claymore",4,44,{k:"er",v:.45},"冷気","元素スキルダメージ+24%",{skill:.24}),We("w_p4a","雷鳴の穂先","polearm",4,44,{k:"er",v:.45},"共鳴","元素爆発ダメージ+24%",{burst:.24}),We("w_p4b","紅の矛","polearm",4,42,{k:"cr",v:.25},"猛り","攻撃力+20%",{atkP:.2}),We("w_b4a","流星弓","bow",4,44,{k:"atkP",v:.41},"流れ星","会心率+12%",{cr:.12}),We("w_b4b","祭りの弓","bow",4,42,{k:"er",v:.45},"お祭り","元素スキルダメージ+24%",{skill:.24}),We("w_k4a","星図の巻物","catalyst",4,42,{k:"em",v:165},"星読み","元素熟知+80",{em:80}),We("w_k4b","潮騒の貝","catalyst",4,44,{k:"hpP",v:.41},"潮騒","回復効果+18%",{heal:.18}),We("w_s5","天の羅針","sword",5,46,{k:"er",v:.55},"天を指す","会心率+8%、攻撃力+16%",{cr:.08,atkP:.16},{standard:!0}),We("w_c5","巨星の墓標","claymore",5,48,{k:"atkP",v:.5},"墓標","攻撃力+28%",{atkP:.28},{standard:!0}),We("w_p5","竜骨の槍","polearm",5,48,{k:"cr",v:.33},"竜の骨","全ダメージ+16%",{all:.16},{standard:!0}),We("w_b5","天穹の長弓","bow",5,48,{k:"cr",v:.33},"天穹","重撃ダメージ+40%、攻撃力+12%",{ca:.4,atkP:.12},{standard:!0}),We("w_k5","四季の書","catalyst",5,46,{k:"atkP",v:.55},"四季","元素ダメージ+16%",{el:.16},{standard:!0}),We("sig_sora","星喰みの剣","sword",5,48,{k:"cd",v:.66},"星の記憶","会心率+10%、元素スキルダメージ+20%",{cr:.1,skill:.2},{sig:"sora"}),We("sig_homura","紅蓮槌","claymore",5,48,{k:"cr",v:.33},"鍛炉の熱","攻撃力+20%、焔元素ダメージ+20%",{atkP:.2,fire:.2},{sig:"homura"}),We("sig_shizuku","水鏡の鈴","catalyst",5,46,{k:"hpP",v:.5},"清め","回復効果+20%、HP+20%",{heal:.2,hpP:.2},{sig:"shizuku"}),We("sig_raika","雷切丸","polearm",5,48,{k:"cd",v:.66},"迅雷","元素爆発ダメージ+30%、雷元素ダメージ+12%",{burst:.3,volt:.12},{sig:"raika"}),We("sig_yukine","灯守の弓","bow",5,48,{k:"cr",v:.33},"灯りを守る","霜元素ダメージ+24%、元素スキルダメージ+16%",{frost:.24,skill:.16},{sig:"yukine"}),We("sig_kurou","月喰らい","sword",5,48,{k:"cr",v:.33},"影喰らい","会心ダメージ+40%、影元素ダメージ+12%",{cd:.4,shadow:.12},{sig:"kurou"}),We("sig_mikoto","天球儀","catalyst",5,46,{k:"er",v:.55},"星の巡り","元素熟知+120、星元素ダメージ+16%",{em:120,star:.16},{sig:"mikoto"}),We("sig_kagura","狐火の弓","bow",5,48,{k:"atkP",v:.5},"狐火","会心率+12%、焔元素ダメージ+16%",{cr:.12,fire:.16},{sig:"kagura"})],Ht=i=>ai.find(e=>e.id===i),Fa=["ring","earring","neck","bracer","crown"],Lr={ring:"指輪",earring:"耳飾り",neck:"首飾り",bracer:"腕輪",crown:"冠"},Ur={hp:"HP",atk:"攻撃力",def:"防御力",hpP:"HP%",atkP:"攻撃力%",defP:"防御力%",em:"元素熟知",er:"元素チャージ効率",cr:"会心率",cd:"会心ダメージ",heal:"回復効果",fire:"焔元素ダメージ",water:"潮元素ダメージ",volt:"雷元素ダメージ",frost:"霜元素ダメージ",star:"星元素ダメージ",shadow:"影元素ダメージ",phys:"物理ダメージ",na:"通常攻撃ダメージ",ca:"重撃ダメージ",skill:"元素スキルダメージ",burst:"元素爆発ダメージ",all:"与えるダメージ",el:"元素ダメージ"},Sf=new Set(["hp","atk","def","em"]),yu={ring:["hp"],earring:["atk"],neck:["atkP","hpP","defP","em","er"],bracer:["atkP","hpP","defP","em","fire","water","volt","frost","star","shadow","phys"],crown:["atkP","hpP","defP","em","cr","cd","heal"]},bu={hp:4780,atk:311,atkP:.466,hpP:.466,defP:.583,em:187,er:.518,cr:.311,cd:.622,heal:.359,fire:.466,water:.466,volt:.466,frost:.466,star:.466,shadow:.466,phys:.583},_r={hp:299,atk:19,def:23,hpP:.058,atkP:.058,defP:.073,em:23,er:.065,cr:.039,cd:.078},Zc=[{id:"ember",name:"紅蓮の誓約",el:"fire",b2:{fire:.15},b4:{burst:.25,react:.3},d2:"焔元素ダメージ+15%",d4:"元素爆発ダメージ+25%、元素反応ダメージ+30%"},{id:"tide",name:"満ち潮の詩",el:"water",b2:{water:.15},b4:{skill:.3,heal:.15},d2:"潮元素ダメージ+15%",d4:"元素スキルダメージ+30%、回復効果+15%"},{id:"thunder",name:"雷鳴の太鼓",el:"volt",b2:{volt:.15},b4:{er:.2,react:.3},d2:"雷元素ダメージ+15%",d4:"元素チャージ効率+20%、元素反応ダメージ+30%"},{id:"rime",name:"霧氷の旅路",el:"frost",b2:{frost:.15},b4:{cr:.15,ca:.2},d2:"霜元素ダメージ+15%",d4:"会心率+15%、重撃ダメージ+20%"},{id:"comet",name:"彗星の残り火",el:"star",b2:{star:.15},b4:{burst:.2,er:.15},d2:"星元素ダメージ+15%",d4:"元素爆発ダメージ+20%、元素チャージ効率+15%"},{id:"nocturne",name:"夜想曲の仮面",el:"shadow",b2:{shadow:.15},b4:{all:.15,cd:.2},d2:"影元素ダメージ+15%",d4:"与えるダメージ+15%、会心ダメージ+20%"},{id:"blade",name:"剣客の心得",b2:{atkP:.18},b4:{na:.35,ca:.2},d2:"攻撃力+18%",d4:"通常攻撃ダメージ+35%、重撃ダメージ+20%"},{id:"pilgrim",name:"巡礼者の祈り",b2:{hpP:.2},b4:{heal:.2,er:.15},d2:"HP+20%",d4:"回復効果+20%、元素チャージ効率+15%"}],zl=i=>Zc.find(e=>e.id===i);class Mu{constructor(){this.m=new Map}on(e,t){return this.m.has(e)||this.m.set(e,new Set),this.m.get(e).add(t),()=>this.m.get(e).delete(t)}emit(e,...t){this.m.get(e)?.forEach(n=>n(...t))}}const ne=new Mu,Oa="ninjin.save.v1";let L;const Ef=()=>++L.seq;function Tf(i,e=1){const t=e>=80?6:e>=70?5:e>=60?4:e>=50?3:e>=40?2:e>=20?1:0,n={uid:Ef(),id:i,lvl:e,exp:0,asc:t,ref:1};return L.weapons.push(n),n}function za(i){const e=L.chars[i];if(e){const r=e.cons;return e.cons<6&&e.cons++,ne.emit("chars"),{isNew:!1,cons:r<6?e.cons:-1}}const t=je(i),n=ai.find(r=>r.type===t.weapon&&r.rarity===1),s=Tf(n.id,1);return L.chars[i]={id:i,lvl:1,exp:0,asc:0,cons:0,tal:[1,1,1],weapon:s.uid,relics:{}},L.party.length<4&&!L.party.includes(i)&&L.party.push(i),ne.emit("chars"),{isNew:!0,cons:0}}function it(i,e=1){L.items[i]=(L.items[i]||0)+e,ne.emit("items")}function wn(i,e=1){return(L.items[i]||0)<e?!1:(L.items[i]-=e,ne.emit("items"),!0)}const ht=i=>L.items[i]||0;function Ho(i,e,t,n){n=n||i.pick([...Fa]),t=t||i.pick(Zc).id;const s=i.pick(yu[n]),r=Object.keys(_r).filter(h=>h!==s),a=e>=5?i.chance(.3)?4:3:e===4?i.chance(.3)?3:2:e===3&&i.chance(.3)?2:1,o=[],c=e>=5?1:e===4?.8:.6;for(let h=0;h<a;h++){const d=i.pick(r.filter(f=>!o.some(u=>u.k===f)));o.push({k:d,v:_r[d]*c*i.range(.7,1)})}const l={uid:Ef(),set:t,slot:n,rarity:e,lvl:0,exp:0,main:s,subs:o};return L.relics.push(l),l}function Bl(){return{v:1,created:Date.now(),name:"旅人",chars:{},party:[],weapons:[],relics:[],items:{coin:5e4,gem:1600,ticket_s:20,ticket_g:5,food1:10,food2:3,food3:3,exp1:20,exp2:10,ore1:20},ar:1,arExp:0,opened:{},wps:{},shards:{},statues:{},offered:0,stamMax:240,quest:{main:0,step:0,done:!1},flags:{},daily:{date:"",tasks:[],claimed:[],bonus:!1},gacha:{p5:{standard:0,event:0,weapon:0},p4:{standard:0,event:0,weapon:0},g:{event:!1,weapon:!1},hist:[]},pos:{x:0,y:0,z:0},camps:{},bosses:{},tower:{},mail:{},settings:{quality:"auto",fps:!1,sfx:!0,tilt:!0,name:"旅人"},seq:0,stats:{kills:0,reacts:0,play:0}}}function Su(){try{const i=localStorage.getItem(Oa);if(i)return L=Object.assign(Bl(),JSON.parse(i)),L.mail||(L.mail={}),!0}catch{}return L=Bl(),za("sora"),!1}let Vo=!1;function qe(){Vo=!0}function Is(i=!1){if(!(!Vo&&!i)){Vo=!1;try{localStorage.setItem(Oa,JSON.stringify(L))}catch(e){console.warn("save failed",e)}}}function Eu(){return btoa(unescape(encodeURIComponent(JSON.stringify(L))))}function Tu(i){const e=JSON.parse(decodeURIComponent(escape(atob(i.trim()))));if(!e||!e.chars)throw new Error("bad");localStorage.setItem(Oa,JSON.stringify(e))}function wu(){localStorage.removeItem(Oa)}const Cu=i=>L.weapons.find(e=>e.uid===i.weapon),Ta=i=>i?L.relics.find(e=>e.uid===i):void 0,Ka=i=>Object.values(L.chars).find(e=>e.weapon===i),Ja=i=>Object.values(L.chars).find(e=>Object.values(e.relics).includes(i)),Hl=()=>Cn.filter(i=>L.chars[i.id]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qc="170",Au=0,Vl=1,Ru=2,wf=1,Pu=2,ti=3,Li=0,nn=1,_n=2,Di=0,rs=1,Go=2,Gl=3,Wl=4,ku=5,Ki=100,Du=101,Iu=102,Lu=103,Uu=104,Nu=200,Fu=201,Ou=202,zu=203,Wo=204,$o=205,Bu=206,Hu=207,Vu=208,Gu=209,Wu=210,$u=211,Xu=212,ju=213,qu=214,Xo=0,jo=1,qo=2,Bs=3,Yo=4,Ko=5,Jo=6,Zo=7,el=0,Yu=1,Ku=2,Ii=0,Ju=1,Zu=2,Qu=3,ep=4,tp=5,np=6,ip=7,Cf=300,Hs=301,Vs=302,Qo=303,ec=304,Ba=306,tc=1e3,es=1001,nc=1002,zt=1003,sp=1004,Nr=1005,Gn=1006,Za=1007,ts=1008,pi=1009,Af=1010,Rf=1011,Mr=1012,tl=1013,os=1014,Wn=1015,Cr=1016,nl=1017,il=1018,Gs=1020,Pf=35902,kf=1021,Df=1022,Fn=1023,If=1024,Lf=1025,Ls=1026,Ws=1027,sl=1028,rl=1029,Uf=1030,al=1031,ol=1033,ca=33776,la=33777,ha=33778,fa=33779,ic=35840,sc=35841,rc=35842,ac=35843,oc=36196,cc=37492,lc=37496,hc=37808,fc=37809,dc=37810,uc=37811,pc=37812,mc=37813,gc=37814,_c=37815,vc=37816,xc=37817,yc=37818,bc=37819,Mc=37820,Sc=37821,da=36492,Ec=36494,Tc=36495,Nf=36283,wc=36284,Cc=36285,Ac=36286,rp=3200,ap=3201,Ff=0,op=1,Ri="",Yt="srgb",js="srgb-linear",Ha="linear",lt="srgb",us=7680,$l=519,cp=512,lp=513,hp=514,Of=515,fp=516,dp=517,up=518,pp=519,Xl=35044,jl="300 es",oi=2e3,wa=2001;class qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qa=Math.PI/180,Rc=180/Math.PI;function Ar(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function hn(i,e,t){return Math.max(e,Math.min(t,i))}function mp(i,e){return(i%e+e)%e}function eo(i,e,t){return(1-t)*i+t*e}function tr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function on(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,s,r,a,o,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],u=n[5],g=n[8],_=s[0],m=s[3],p=s[6],b=s[1],x=s[4],v=s[7],R=s[2],M=s[5],C=s[8];return r[0]=a*_+o*b+c*R,r[3]=a*m+o*x+c*M,r[6]=a*p+o*v+c*C,r[1]=l*_+h*b+d*R,r[4]=l*m+h*x+d*M,r[7]=l*p+h*v+d*C,r[2]=f*_+u*b+g*R,r[5]=f*m+u*x+g*M,r[8]=f*p+u*v+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,f=o*c-h*r,u=l*r-a*c,g=t*d+n*f+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=u*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(to.makeScale(e,t)),this}rotate(e){return this.premultiply(to.makeRotation(-e)),this}translate(e,t){return this.premultiply(to.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const to=new He;function zf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ca(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gp(){const i=Ca("canvas");return i.style.display="block",i}const ql={};function dr(i){i in ql||(ql[i]=!0,console.warn(i))}function _p(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function vp(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function xp(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tt={enabled:!0,workingColorSpace:js,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===lt&&(i.r=di(i.r),i.g=di(i.g),i.b=di(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===lt&&(i.r=Us(i.r),i.g=Us(i.g),i.b=Us(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ri?Ha:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Yl=[.64,.33,.3,.6,.15,.06],Kl=[.2126,.7152,.0722],Jl=[.3127,.329],Zl=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ql=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);tt.define({[js]:{primaries:Yl,whitePoint:Jl,transfer:Ha,toXYZ:Zl,fromXYZ:Ql,luminanceCoefficients:Kl,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:Yl,whitePoint:Jl,transfer:lt,toXYZ:Zl,fromXYZ:Ql,luminanceCoefficients:Kl,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}});let ps;class yp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ps===void 0&&(ps=Ca("canvas")),ps.width=e.width,ps.height=e.height;const n=ps.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ca("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=di(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(di(t[n]/255)*255):t[n]=di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bp=0;class Bf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Ar(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(no(s[a].image)):r.push(no(s[a]))}else r=no(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function no(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mp=0;class Bt extends qs{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=es,s=es,r=Gn,a=ts,o=Fn,c=pi,l=Bt.DEFAULT_ANISOTROPY,h=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Ar(),this.name="",this.source=new Bf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tc:e.x=e.x-Math.floor(e.x);break;case es:e.x=e.x<0?0:1;break;case nc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tc:e.y=e.y-Math.floor(e.y);break;case es:e.y=e.y<0?0:1;break;case nc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Cf;Bt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,s=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],u=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,v=(u+1)/2,R=(p+1)/2,M=(h+f)/4,C=(d+_)/4,P=(g+m)/4;return x>v&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=M/n,r=C/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=M/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=P/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-_)/b,this.z=(f-h)/b,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sp extends qs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Bt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends Sp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hf extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ep extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ys{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const f=r[a+0],u=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=u,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==f||l!==u||h!==g){let m=1-o;const p=c*f+l*u+h*g+d*_,b=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const R=Math.sqrt(x),M=Math.atan2(R,p*b);m=Math.sin(m*M)/R,o=Math.sin(o*M)/R}const v=o*b;if(c=c*m+f*v,l=l*m+u*v,h=h*m+g*v,d=d*m+_*v,m===1-o){const R=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=R,l*=R,h*=R,d*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],f=r[a+1],u=r[a+2],g=r[a+3];return e[t]=o*g+h*d+c*u-l*f,e[t+1]=c*g+h*f+l*d-o*u,e[t+2]=l*g+h*u+o*f-c*d,e[t+3]=h*g-o*d-c*f-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),f=c(n/2),u=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*d+l*u*g,this._y=l*u*d-f*h*g,this._z=l*h*g+f*u*d,this._w=l*h*d-f*u*g;break;case"YXZ":this._x=f*h*d+l*u*g,this._y=l*u*d-f*h*g,this._z=l*h*g-f*u*d,this._w=l*h*d+f*u*g;break;case"ZXY":this._x=f*h*d-l*u*g,this._y=l*u*d+f*h*g,this._z=l*h*g+f*u*d,this._w=l*h*d-f*u*g;break;case"ZYX":this._x=f*h*d-l*u*g,this._y=l*u*d+f*h*g,this._z=l*h*g-f*u*d,this._w=l*h*d+f*u*g;break;case"YZX":this._x=f*h*d+l*u*g,this._y=l*u*d+f*h*g,this._z=l*h*g-f*u*d,this._w=l*h*d-f*u*g;break;case"XZY":this._x=f*h*d-l*u*g,this._y=l*u*d-f*h*g,this._z=l*h*g+f*u*d,this._w=l*h*d+f*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>d){const u=2*Math.sqrt(1+n-o-d);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>d){const u=2*Math.sqrt(1+o-n-d);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{const u=2*Math.sqrt(1+d-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const u=1-t;return this._w=u*a+t*this._w,this._x=u*n+t*this._x,this._y=u*s+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return io.copy(this).projectOnVector(e),this.sub(io)}reflect(e){return this.sub(io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const io=new D,eh=new Ys;class cs{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fr.copy(n.boundingBox)),Fr.applyMatrix4(e.matrixWorld),this.union(Fr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),Or.subVectors(this.max,nr),ms.subVectors(e.a,nr),gs.subVectors(e.b,nr),_s.subVectors(e.c,nr),vi.subVectors(gs,ms),xi.subVectors(_s,gs),Bi.subVectors(ms,_s);let t=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Bi.z,Bi.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Bi.z,0,-Bi.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Bi.y,Bi.x,0];return!so(t,ms,gs,_s,Or)||(t=[1,0,0,0,1,0,0,0,1],!so(t,ms,gs,_s,Or))?!1:(zr.crossVectors(vi,xi),t=[zr.x,zr.y,zr.z],so(t,ms,gs,_s,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new D,new D,new D,new D,new D,new D,new D,new D],Pn=new D,Fr=new cs,ms=new D,gs=new D,_s=new D,vi=new D,xi=new D,Bi=new D,nr=new D,Or=new D,zr=new D,Hi=new D;function so(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hi.fromArray(i,r);const o=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),c=e.dot(Hi),l=t.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Tp=new cs,ir=new D,ro=new D;class Rr{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Tp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);const t=ir.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ir,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(ro)),this.expandByPoint(ir.copy(e.center).sub(ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new D,ao=new D,Br=new D,yi=new D,oo=new D,Hr=new D,co=new D;class wp{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ao.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(ao);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=yi.dot(this.direction),c=-yi.dot(Br),l=yi.lengthSq(),h=Math.abs(1-a*a);let d,f,u,g;if(h>0)if(d=a*c-o,f=a*o-c,g=r*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,u=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),u=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ao).addScaledVector(Br,f),u}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,s,r){oo.subVectors(t,e),Hr.subVectors(n,e),co.crossVectors(oo,Hr);let a=this.direction.dot(co),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yi.subVectors(this.origin,e);const c=o*this.direction.dot(Hr.crossVectors(yi,Hr));if(c<0)return null;const l=o*this.direction.dot(oo.cross(yi));if(l<0||c+l>a)return null;const h=-o*yi.dot(co);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,n,s,r,a,o,c,l,h,d,f,u,g,_,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,f,u,g,_,m)}set(e,t,n,s,r,a,o,c,l,h,d,f,u,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=a*h,u=a*d,g=o*h,_=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=u+g*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=g+u*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,u=c*d,g=l*h,_=l*d;t[0]=f+_*o,t[4]=g*o-u,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=u*o-g,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,u=c*d,g=l*h,_=l*d;t[0]=f-_*o,t[4]=-a*d,t[8]=g+u*o,t[1]=u+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,u=a*d,g=o*h,_=o*d;t[0]=c*h,t[4]=g*l-u,t[8]=f*l+_,t[1]=c*d,t[5]=_*l+f,t[9]=u*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,u=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-f*d,t[8]=g*d+u,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=a*c,u=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+_,t[5]=a*h,t[9]=u*d-g,t[2]=g*d-u,t[6]=o*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cp,e,Ap)}lookAt(e,t,n){const s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),bi.crossVectors(n,un),bi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),bi.crossVectors(n,un)),bi.normalize(),Vr.crossVectors(un,bi),s[0]=bi.x,s[4]=Vr.x,s[8]=un.x,s[1]=bi.y,s[5]=Vr.y,s[9]=un.y,s[2]=bi.z,s[6]=Vr.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],u=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],x=n[7],v=n[11],R=n[15],M=s[0],C=s[4],P=s[8],w=s[12],S=s[1],k=s[5],F=s[9],N=s[13],j=s[2],q=s[6],$=s[10],ee=s[14],I=s[3],K=s[7],ae=s[11],xe=s[15];return r[0]=a*M+o*S+c*j+l*I,r[4]=a*C+o*k+c*q+l*K,r[8]=a*P+o*F+c*$+l*ae,r[12]=a*w+o*N+c*ee+l*xe,r[1]=h*M+d*S+f*j+u*I,r[5]=h*C+d*k+f*q+u*K,r[9]=h*P+d*F+f*$+u*ae,r[13]=h*w+d*N+f*ee+u*xe,r[2]=g*M+_*S+m*j+p*I,r[6]=g*C+_*k+m*q+p*K,r[10]=g*P+_*F+m*$+p*ae,r[14]=g*w+_*N+m*ee+p*xe,r[3]=b*M+x*S+v*j+R*I,r[7]=b*C+x*k+v*q+R*K,r[11]=b*P+x*F+v*$+R*ae,r[15]=b*w+x*N+v*ee+R*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],u=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*d-s*l*d-r*o*f+n*l*f+s*o*u-n*c*u)+_*(+t*c*u-t*l*f+r*a*f-s*a*u+s*l*h-r*c*h)+m*(+t*l*d-t*o*u-r*a*d+n*a*u+r*o*h-n*l*h)+p*(-s*o*h-t*c*d+t*o*f+s*a*d-n*a*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],u=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=d*m*l-_*f*l+_*c*u-o*m*u-d*c*p+o*f*p,x=g*f*l-h*m*l-g*c*u+a*m*u+h*c*p-a*f*p,v=h*_*l-g*d*l+g*o*u-a*_*u-h*o*p+a*d*p,R=g*d*c-h*_*c-g*o*f+a*_*f+h*o*m-a*d*m,M=t*b+n*x+s*v+r*R;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/M;return e[0]=b*C,e[1]=(_*f*r-d*m*r-_*s*u+n*m*u+d*s*p-n*f*p)*C,e[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*p+n*c*p)*C,e[3]=(d*c*r-o*f*r-d*s*l+n*f*l+o*s*u-n*c*u)*C,e[4]=x*C,e[5]=(h*m*r-g*f*r+g*s*u-t*m*u-h*s*p+t*f*p)*C,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*C,e[7]=(a*f*r-h*c*r+h*s*l-t*f*l-a*s*u+t*c*u)*C,e[8]=v*C,e[9]=(g*d*r-h*_*r-g*n*u+t*_*u+h*n*p-t*d*p)*C,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*p+t*o*p)*C,e[11]=(h*o*r-a*d*r-h*n*l+t*d*l+a*n*u-t*o*u)*C,e[12]=R*C,e[13]=(h*_*s-g*d*s+g*n*f-t*_*f-h*n*m+t*d*m)*C,e[14]=(g*o*s-a*_*s-g*n*c+t*_*c+a*n*m-t*o*m)*C,e[15]=(a*d*s-h*o*s+h*n*c-t*d*c-a*n*f+t*o*f)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,f=r*l,u=r*h,g=r*d,_=a*h,m=a*d,p=o*d,b=c*l,x=c*h,v=c*d,R=n.x,M=n.y,C=n.z;return s[0]=(1-(_+p))*R,s[1]=(u+v)*R,s[2]=(g-x)*R,s[3]=0,s[4]=(u-v)*M,s[5]=(1-(f+p))*M,s[6]=(m+b)*M,s[7]=0,s[8]=(g+x)*C,s[9]=(m-b)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=vs.set(s[0],s[1],s[2]).length();const a=vs.set(s[4],s[5],s[6]).length(),o=vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],kn.copy(this);const l=1/r,h=1/a,d=1/o;return kn.elements[0]*=l,kn.elements[1]*=l,kn.elements[2]*=l,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,t.setFromRotationMatrix(kn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=oi){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let u,g;if(o===oi)u=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===wa)u=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=u,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=oi){const c=this.elements,l=1/(t-e),h=1/(n-s),d=1/(a-r),f=(t+e)*l,u=(n+s)*h;let g,_;if(o===oi)g=(a+r)*d,_=-2*d;else if(o===wa)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-u,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vs=new D,kn=new ft,Cp=new D(0,0,0),Ap=new D(1,1,1),bi=new D,Vr=new D,un=new D,th=new ft,nh=new Ys;class jn{constructor(e=0,t=0,n=0,s=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(hn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-hn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(hn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(th,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nh.setFromEuler(this),this.setFromQuaternion(nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Vf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rp=0;const ih=new D,xs=new Ys,Zn=new ft,Gr=new D,sr=new D,Pp=new D,kp=new Ys,sh=new D(1,0,0),rh=new D(0,1,0),ah=new D(0,0,1),oh={type:"added"},Dp={type:"removed"},ys={type:"childadded",child:null},lo={type:"childremoved",child:null};class Vt extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new D,t=new jn,n=new Ys,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new He}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(sh,e)}rotateY(e){return this.rotateOnAxis(rh,e)}rotateZ(e){return this.rotateOnAxis(ah,e)}translateOnAxis(e,t){return ih.copy(e).applyQuaternion(this.quaternion),this.position.add(ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sh,e)}translateY(e){return this.translateOnAxis(rh,e)}translateZ(e){return this.translateOnAxis(ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gr.copy(e):Gr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(sr,Gr,this.up):Zn.lookAt(Gr,sr,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(Zn),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oh),ys.child=e,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dp),lo.child=e,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oh),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,Pp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,kp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),u=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Vt.DEFAULT_UP=new D(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new D,Qn=new D,ho=new D,ei=new D,bs=new D,Ms=new D,ch=new D,fo=new D,uo=new D,po=new D,mo=new xt,go=new xt,_o=new xt;class Un{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Dn.subVectors(e,t),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Dn.subVectors(s,t),Qn.subVectors(n,t),ho.subVectors(e,t);const a=Dn.dot(Dn),o=Dn.dot(Qn),c=Dn.dot(ho),l=Qn.dot(Qn),h=Qn.dot(ho),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-u-g,g,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ei.x),c.addScaledVector(a,ei.y),c.addScaledVector(o,ei.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return mo.setScalar(0),go.setScalar(0),_o.setScalar(0),mo.fromBufferAttribute(e,t),go.fromBufferAttribute(e,n),_o.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(mo,r.x),a.addScaledVector(go,r.y),a.addScaledVector(_o,r.z),a}static isFrontFacing(e,t,n,s){return Dn.subVectors(n,t),Qn.subVectors(e,t),Dn.cross(Qn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Dn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Un.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;bs.subVectors(s,n),Ms.subVectors(r,n),fo.subVectors(e,n);const c=bs.dot(fo),l=Ms.dot(fo);if(c<=0&&l<=0)return t.copy(n);uo.subVectors(e,s);const h=bs.dot(uo),d=Ms.dot(uo);if(h>=0&&d<=h)return t.copy(s);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(bs,a);po.subVectors(e,r);const u=bs.dot(po),g=Ms.dot(po);if(g>=0&&u<=g)return t.copy(r);const _=u*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ms,o);const m=h*g-u*d;if(m<=0&&d-h>=0&&u-g>=0)return ch.subVectors(r,s),o=(d-h)/(d-h+(u-g)),t.copy(s).addScaledVector(ch,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(bs,a).addScaledVector(Ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function vo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=mp(e,1),t=hn(t,0,1),n=hn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=vo(a,r,e+1/3),this.g=vo(a,r,e),this.b=vo(a,r,e-1/3)}return tt.toWorkingColorSpace(this,s),this}setStyle(e,t=Yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=Gf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return tt.fromWorkingColorSpace($t.copy(this),e),Math.round(hn($t.r*255,0,255))*65536+Math.round(hn($t.g*255,0,255))*256+Math.round(hn($t.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace($t.copy(this),t);const n=$t.r,s=$t.g,r=$t.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Yt){tt.fromWorkingColorSpace($t.copy(this),e);const t=$t.r,n=$t.g,s=$t.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(Wr);const n=eo(Mi.h,Wr.h,t),s=eo(Mi.s,Wr.s,t),r=eo(Mi.l,Wr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new ke;ke.NAMES=Gf;let Ip=0;class Pr extends qs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Ar(),this.name="",this.blending=rs,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=$o,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wo&&(n.blendSrc=this.blendSrc),this.blendDst!==$o&&(n.blendDst=this.blendDst),this.blendEquation!==Ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zt extends Pr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=el,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new D,$r=new Xe;class fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xl,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$r.fromBufferAttribute(this,t),$r.applyMatrix3(e),this.setXY(t,$r.x,$r.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=tr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tr(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tr(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tr(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xl&&(e.usage=this.usage),e}}class Wf extends fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $f extends fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Lp=0;const Sn=new ft,xo=new Vt,Ss=new D,pn=new cs,rr=new cs,Ut=new D;class rn extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zf(e)?$f:Wf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return xo.lookAt(e),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];rr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(pn.min,rr.min),pn.expandByPoint(Ut),Ut.addVectors(pn.max,rr.max),pn.expandByPoint(Ut)):(pn.expandByPoint(rr.min),pn.expandByPoint(rr.max))}pn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ut));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ut.fromBufferAttribute(o,l),c&&(Ss.fromBufferAttribute(e,l),Ut.add(Ss)),s=Math.max(s,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new D,c[P]=new D;const l=new D,h=new D,d=new D,f=new Xe,u=new Xe,g=new Xe,_=new D,m=new D;function p(P,w,S){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,S),f.fromBufferAttribute(r,P),u.fromBufferAttribute(r,w),g.fromBufferAttribute(r,S),h.sub(l),d.sub(l),u.sub(f),g.sub(f);const k=1/(u.x*g.y-g.x*u.y);isFinite(k)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(k),m.copy(d).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(k),o[P].add(_),o[w].add(_),o[S].add(_),c[P].add(m),c[w].add(m),c[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,w=b.length;P<w;++P){const S=b[P],k=S.start,F=S.count;for(let N=k,j=k+F;N<j;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const x=new D,v=new D,R=new D,M=new D;function C(P){R.fromBufferAttribute(s,P),M.copy(R);const w=o[P];x.copy(w),x.sub(R.multiplyScalar(R.dot(w))).normalize(),v.crossVectors(M,w);const k=v.dot(c[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,k)}for(let P=0,w=b.length;P<w;++P){const S=b[P],k=S.start,F=S.count;for(let N=k,j=k+F;N<j;N+=3)C(e.getX(N+0)),C(e.getX(N+1)),C(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,d=new D;if(e)for(let f=0,u=e.count;f<u;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,u=t.count;f<u;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h);let u=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?u=c[_]*o.data.stride+o.offset:u=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[u++]}return new fn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const f=l[h],u=e(f,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const u=l[d];h.push(u.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lh=new ft,Vi=new wp,Xr=new Rr,hh=new D,jr=new D,qr=new D,Yr=new D,yo=new D,Kr=new D,fh=new D,Jr=new D;class De extends Vt{constructor(e=new rn,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Kr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(yo.fromBufferAttribute(d,e),a?Kr.addScaledVector(yo,h):Kr.addScaledVector(yo.sub(t),h))}t.add(Kr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(r),Vi.copy(e.ray).recast(e.near),!(Xr.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Xr,hh)===null||Vi.origin.distanceToSquared(hh)>(e.far-e.near)**2))&&(lh.copy(r).invert(),Vi.copy(e.ray).applyMatrix4(lh),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],b=Math.max(m.start,u.start),x=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let v=b,R=x;v<R;v+=3){const M=o.getX(v),C=o.getX(v+1),P=o.getX(v+2);s=Zr(this,p,e,n,l,h,d,M,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){const b=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);s=Zr(this,a,e,n,l,h,d,b,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],b=Math.max(m.start,u.start),x=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let v=b,R=x;v<R;v+=3){const M=v,C=v+1,P=v+2;s=Zr(this,p,e,n,l,h,d,M,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,u.start),_=Math.min(c.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){const b=m,x=m+1,v=m+2;s=Zr(this,a,e,n,l,h,d,b,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Up(i,e,t,n,s,r,a,o){let c;if(e.side===nn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Li,o),c===null)return null;Jr.copy(o),Jr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Jr);return l<t.near||l>t.far?null:{distance:l,point:Jr.clone(),object:i}}function Zr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,jr),i.getVertexPosition(c,qr),i.getVertexPosition(l,Yr);const h=Up(i,e,t,n,jr,qr,Yr,fh);if(h){const d=new D;Un.getBarycoord(fh,jr,qr,Yr,d),s&&(h.uv=Un.getInterpolatedAttribute(s,o,c,l,d,new Xe)),r&&(h.uv1=Un.getInterpolatedAttribute(r,o,c,l,d,new Xe)),a&&(h.normal=Un.getInterpolatedAttribute(a,o,c,l,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new D,materialIndex:0};Un.getNormal(jr,qr,Yr,f.normal),h.face=f,h.barycoord=d}return h}class Vn extends rn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let f=0,u=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(d,2));function g(_,m,p,b,x,v,R,M,C,P,w){const S=v/C,k=R/P,F=v/2,N=R/2,j=M/2,q=C+1,$=P+1;let ee=0,I=0;const K=new D;for(let ae=0;ae<$;ae++){const xe=ae*k-N;for(let Ue=0;Ue<q;Ue++){const Ze=Ue*S-F;K[_]=Ze*b,K[m]=xe*x,K[p]=j,l.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[p]=M>0?1:-1,h.push(K.x,K.y,K.z),d.push(Ue/C),d.push(1-ae/P),ee+=1}}for(let ae=0;ae<P;ae++)for(let xe=0;xe<C;xe++){const Ue=f+xe+q*ae,Ze=f+xe+q*(ae+1),X=f+(xe+1)+q*(ae+1),ie=f+(xe+1)+q*ae;c.push(Ue,Ze,ie),c.push(Ze,X,ie),I+=6}o.addGroup(u,I,w),u+=I,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Jt(i){const e={};for(let t=0;t<i.length;t++){const n=$s(i[t]);for(const s in n)e[s]=n[s]}return e}function Np(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Fp={clone:$s,merge:Jt};var Op=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends Pr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Op,this.fragmentShader=zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=Np(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jf extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Si=new D,dh=new Xe,uh=new Xe;class Tn extends jf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rc*2*Math.atan(Math.tan(Qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,t){return this.getViewBounds(e,dh,uh),t.subVectors(uh,dh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Es=-90,Ts=1;class Bp extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Tn(Es,Ts,e,t);s.layers=this.layers,this.add(s);const r=new Tn(Es,Ts,e,t);r.layers=this.layers,this.add(r);const a=new Tn(Es,Ts,e,t);a.layers=this.layers,this.add(a);const o=new Tn(Es,Ts,e,t);o.layers=this.layers,this.add(o);const c=new Tn(Es,Ts,e,t);c.layers=this.layers,this.add(c);const l=new Tn(Es,Ts,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class qf extends Bt{constructor(e,t,n,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Hs,super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hp extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new qf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Vn(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Di});r.uniforms.tEquirect.value=t;const a=new De(s,r),o=t.minFilter;return t.minFilter===ts&&(t.minFilter=Gn),new Bp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const bo=new D,Vp=new D,Gp=new He;class ji{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=bo.subVectors(n,t).cross(Vp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(bo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Gp.getNormalMatrix(e),s=this.coplanarPoint(bo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new Rr,Qr=new D;class cl{constructor(e=new ji,t=new ji,n=new ji,s=new ji,r=new ji,a=new ji){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=oi){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],d=s[6],f=s[7],u=s[8],g=s[9],_=s[10],m=s[11],p=s[12],b=s[13],x=s[14],v=s[15];if(n[0].setComponents(c-r,f-l,m-u,v-p).normalize(),n[1].setComponents(c+r,f+l,m+u,v+p).normalize(),n[2].setComponents(c+a,f+h,m+g,v+b).normalize(),n[3].setComponents(c-a,f-h,m-g,v-b).normalize(),n[4].setComponents(c-o,f-d,m-_,v-x).normalize(),t===oi)n[5].setComponents(c+o,f+d,m+_,v+x).normalize();else if(t===wa)n[5].setComponents(o,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Qr.x=s.normal.x>0?e.max.x:e.min.x,Qr.y=s.normal.y>0?e.max.y:e.min.y,Qr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Wp(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((u,g)=>u.start-g.start);let f=0;for(let u=1;u<d.length;u++){const g=d[f],_=d[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,g=d.length;u<g;u++){const _=d[u];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class vn extends rn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,f=t/c,u=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const b=p*f-a;for(let x=0;x<l;x++){const v=x*d-r;g.push(v,-b,0),_.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){const x=b+l*p,v=b+l*(p+1),R=b+1+l*(p+1),M=b+1+l*p;u.push(x,v,M),u.push(v,R,M)}this.setIndex(u),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.width,e.height,e.widthSegments,e.heightSegments)}}var $p=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,im=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$m=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,e0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,o0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,l0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,p0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,C0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,A0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,R0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,P0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,D0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,L0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,O0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,z0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,G0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,J0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Z0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Q0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:$p,alphahash_pars_fragment:Xp,alphamap_fragment:jp,alphamap_pars_fragment:qp,alphatest_fragment:Yp,alphatest_pars_fragment:Kp,aomap_fragment:Jp,aomap_pars_fragment:Zp,batching_pars_vertex:Qp,batching_vertex:em,begin_vertex:tm,beginnormal_vertex:nm,bsdfs:im,iridescence_fragment:sm,bumpmap_pars_fragment:rm,clipping_planes_fragment:am,clipping_planes_pars_fragment:om,clipping_planes_pars_vertex:cm,clipping_planes_vertex:lm,color_fragment:hm,color_pars_fragment:fm,color_pars_vertex:dm,color_vertex:um,common:pm,cube_uv_reflection_fragment:mm,defaultnormal_vertex:gm,displacementmap_pars_vertex:_m,displacementmap_vertex:vm,emissivemap_fragment:xm,emissivemap_pars_fragment:ym,colorspace_fragment:bm,colorspace_pars_fragment:Mm,envmap_fragment:Sm,envmap_common_pars_fragment:Em,envmap_pars_fragment:Tm,envmap_pars_vertex:wm,envmap_physical_pars_fragment:Fm,envmap_vertex:Cm,fog_vertex:Am,fog_pars_vertex:Rm,fog_fragment:Pm,fog_pars_fragment:km,gradientmap_pars_fragment:Dm,lightmap_pars_fragment:Im,lights_lambert_fragment:Lm,lights_lambert_pars_fragment:Um,lights_pars_begin:Nm,lights_toon_fragment:Om,lights_toon_pars_fragment:zm,lights_phong_fragment:Bm,lights_phong_pars_fragment:Hm,lights_physical_fragment:Vm,lights_physical_pars_fragment:Gm,lights_fragment_begin:Wm,lights_fragment_maps:$m,lights_fragment_end:Xm,logdepthbuf_fragment:jm,logdepthbuf_pars_fragment:qm,logdepthbuf_pars_vertex:Ym,logdepthbuf_vertex:Km,map_fragment:Jm,map_pars_fragment:Zm,map_particle_fragment:Qm,map_particle_pars_fragment:e0,metalnessmap_fragment:t0,metalnessmap_pars_fragment:n0,morphinstance_vertex:i0,morphcolor_vertex:s0,morphnormal_vertex:r0,morphtarget_pars_vertex:a0,morphtarget_vertex:o0,normal_fragment_begin:c0,normal_fragment_maps:l0,normal_pars_fragment:h0,normal_pars_vertex:f0,normal_vertex:d0,normalmap_pars_fragment:u0,clearcoat_normal_fragment_begin:p0,clearcoat_normal_fragment_maps:m0,clearcoat_pars_fragment:g0,iridescence_pars_fragment:_0,opaque_fragment:v0,packing:x0,premultiplied_alpha_fragment:y0,project_vertex:b0,dithering_fragment:M0,dithering_pars_fragment:S0,roughnessmap_fragment:E0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:w0,shadowmap_pars_vertex:C0,shadowmap_vertex:A0,shadowmask_pars_fragment:R0,skinbase_vertex:P0,skinning_pars_vertex:k0,skinning_vertex:D0,skinnormal_vertex:I0,specularmap_fragment:L0,specularmap_pars_fragment:U0,tonemapping_fragment:N0,tonemapping_pars_fragment:F0,transmission_fragment:O0,transmission_pars_fragment:z0,uv_pars_fragment:B0,uv_pars_vertex:H0,uv_vertex:V0,worldpos_vertex:G0,background_vert:W0,background_frag:$0,backgroundCube_vert:X0,backgroundCube_frag:j0,cube_vert:q0,cube_frag:Y0,depth_vert:K0,depth_frag:J0,distanceRGBA_vert:Z0,distanceRGBA_frag:Q0,equirect_vert:eg,equirect_frag:tg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:sg,meshbasic_frag:rg,meshlambert_vert:ag,meshlambert_frag:og,meshmatcap_vert:cg,meshmatcap_frag:lg,meshnormal_vert:hg,meshnormal_frag:fg,meshphong_vert:dg,meshphong_frag:ug,meshphysical_vert:pg,meshphysical_frag:mg,meshtoon_vert:gg,meshtoon_frag:_g,points_vert:vg,points_frag:xg,shadow_vert:yg,shadow_frag:bg,sprite_vert:Mg,sprite_frag:Sg},le={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Hn={basic:{uniforms:Jt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Jt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Jt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Jt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Jt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Jt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Jt([le.points,le.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Jt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Jt([le.common,le.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Jt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Jt([le.sprite,le.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Jt([le.common,le.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Jt([le.lights,le.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Hn.physical={uniforms:Jt([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const ea={r:0,b:0,g:0},Wi=new jn,Eg=new ft;function Tg(i,e,t,n,s,r,a){const o=new ke(0);let c=r===!0?0:1,l,h,d=null,f=0,u=null;function g(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function _(b){let x=!1;const v=g(b);v===null?p(o,c):v&&v.isColor&&(p(v,1),x=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===Ba)?(h===void 0&&(h=new De(new Vn(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:$s(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Wi.copy(x.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(Wi)),h.material.toneMapped=tt.getTransfer(v.colorSpace)!==lt,(d!==v||f!==v.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,u=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new De(new vn(2,2),new On({name:"BackgroundMaterial",uniforms:$s(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=tt.getTransfer(v.colorSpace)!==lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,f=v.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,x){b.getRGB(ea,Xf(i)),n.buffers.color.setClear(ea.r,ea.g,ea.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(b,x=1){o.set(b),c=x,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(o,c)},render:_,addToRenderList:m}}function wg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(S,k,F,N,j){let q=!1;const $=d(N,F,k);r!==$&&(r=$,l(r.object)),q=u(S,N,F,j),q&&g(S,N,F,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(S,k,F,N),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function d(S,k,F){const N=F.wireframe===!0;let j=n[S.id];j===void 0&&(j={},n[S.id]=j);let q=j[k.id];q===void 0&&(q={},j[k.id]=q);let $=q[N];return $===void 0&&($=f(c()),q[N]=$),$}function f(S){const k=[],F=[],N=[];for(let j=0;j<t;j++)k[j]=0,F[j]=0,N[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:F,attributeDivisors:N,object:S,attributes:{},index:null}}function u(S,k,F,N){const j=r.attributes,q=k.attributes;let $=0;const ee=F.getAttributes();for(const I in ee)if(ee[I].location>=0){const ae=j[I];let xe=q[I];if(xe===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(xe=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(xe=S.instanceColor)),ae===void 0||ae.attribute!==xe||xe&&ae.data!==xe.data)return!0;$++}return r.attributesNum!==$||r.index!==N}function g(S,k,F,N){const j={},q=k.attributes;let $=0;const ee=F.getAttributes();for(const I in ee)if(ee[I].location>=0){let ae=q[I];ae===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor));const xe={};xe.attribute=ae,ae&&ae.data&&(xe.data=ae.data),j[I]=xe,$++}r.attributes=j,r.attributesNum=$,r.index=N}function _(){const S=r.newAttributes;for(let k=0,F=S.length;k<F;k++)S[k]=0}function m(S){p(S,0)}function p(S,k){const F=r.newAttributes,N=r.enabledAttributes,j=r.attributeDivisors;F[S]=1,N[S]===0&&(i.enableVertexAttribArray(S),N[S]=1),j[S]!==k&&(i.vertexAttribDivisor(S,k),j[S]=k)}function b(){const S=r.newAttributes,k=r.enabledAttributes;for(let F=0,N=k.length;F<N;F++)k[F]!==S[F]&&(i.disableVertexAttribArray(F),k[F]=0)}function x(S,k,F,N,j,q,$){$===!0?i.vertexAttribIPointer(S,k,F,j,q):i.vertexAttribPointer(S,k,F,N,j,q)}function v(S,k,F,N){_();const j=N.attributes,q=F.getAttributes(),$=k.defaultAttributeValues;for(const ee in q){const I=q[ee];if(I.location>=0){let K=j[ee];if(K===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const ae=K.normalized,xe=K.itemSize,Ue=e.get(K);if(Ue===void 0)continue;const Ze=Ue.buffer,X=Ue.type,ie=Ue.bytesPerElement,ye=X===i.INT||X===i.UNSIGNED_INT||K.gpuType===tl;if(K.isInterleavedBufferAttribute){const ce=K.data,Ae=ce.stride,Ne=K.offset;if(ce.isInstancedInterleavedBuffer){for(let $e=0;$e<I.locationSize;$e++)p(I.location+$e,ce.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let $e=0;$e<I.locationSize;$e++)m(I.location+$e);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let $e=0;$e<I.locationSize;$e++)x(I.location+$e,xe/I.locationSize,X,ae,Ae*ie,(Ne+xe/I.locationSize*$e)*ie,ye)}else{if(K.isInstancedBufferAttribute){for(let ce=0;ce<I.locationSize;ce++)p(I.location+ce,K.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ce=0;ce<I.locationSize;ce++)m(I.location+ce);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let ce=0;ce<I.locationSize;ce++)x(I.location+ce,xe/I.locationSize,X,ae,xe*ie,xe/I.locationSize*ce*ie,ye)}}else if($!==void 0){const ae=$[ee];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(I.location,ae);break;case 3:i.vertexAttrib3fv(I.location,ae);break;case 4:i.vertexAttrib4fv(I.location,ae);break;default:i.vertexAttrib1fv(I.location,ae)}}}}b()}function R(){P();for(const S in n){const k=n[S];for(const F in k){const N=k[F];for(const j in N)h(N[j].object),delete N[j];delete k[F]}delete n[S]}}function M(S){if(n[S.id]===void 0)return;const k=n[S.id];for(const F in k){const N=k[F];for(const j in N)h(N[j].object),delete N[j];delete k[F]}delete n[S.id]}function C(S){for(const k in n){const F=n[k];if(F[S.id]===void 0)continue;const N=F[S.id];for(const j in N)h(N[j].object),delete N[j];delete F[S.id]}}function P(){w(),a=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:M,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function Cg(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let u=0;for(let g=0;g<d;g++)u+=h[g];t.update(u,n,1)}function c(l,h,d,f){if(d===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{u.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Ag(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Fn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const P=C===Cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==pi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Wn&&!P)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:R,maxSamples:M}}function Rg(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new ji,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const b=r?0:n,x=b*4;let v=p.clippingState||null;c.value=v,v=h(g,f,x,u);for(let R=0;R!==x;++R)v[R]=t[R];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=u+_*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=u;x!==_;++x,v+=4)a.copy(d[x]).applyMatrix4(b,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Pg(i){let e=new WeakMap;function t(a,o){return o===Qo?a.mapping=Hs:o===ec&&(a.mapping=Vs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Qo||o===ec)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Hp(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ll extends jf{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ds=4,ph=[.125,.215,.35,.446,.526,.582],Ji=20,Mo=new ll,mh=new ke;let So=null,Eo=0,To=0,wo=!1;const qi=(1+Math.sqrt(5))/2,ws=1/qi,gh=[new D(-qi,ws,0),new D(qi,ws,0),new D(-ws,0,qi),new D(ws,0,qi),new D(0,qi,-ws),new D(0,qi,ws),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class _h{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){So=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(So,Eo,To),this._renderer.xr.enabled=wo,e.scissorTest=!1,ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),So=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Cr,format:Fn,colorSpace:js,depthBuffer:!1},s=vh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kg(r)),this._blurMaterial=Dg(r,e,t)}return s}_compileMaterial(e){const t=new De(this._lodPlanes[0],e);this._renderer.compile(t,Mo)}_sceneToCubeUV(e,t,n,s){const o=new Tn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(mh),h.toneMapping=Ii,h.autoClear=!1;const u=new Zt({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new De(new Vn,u);let _=!1;const m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,_=!0):(u.color.copy(mh),_=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):b===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const x=this._cubeSize;ta(s,b*x,p>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Hs||e.mapping===Vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new De(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;ta(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Mo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=gh[(s-r-1)%gh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new De(this._lodPlanes[s],l),f=l.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Ji-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ji;m>Ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);const p=[];let b=0;for(let C=0;C<Ji;++C){const P=C/_,w=Math.exp(-P*P/2);p.push(w),C===0?b+=w:C<m&&(b+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[s],R=3*v*(s>x-Ds?s-x+Ds:0),M=4*(this._cubeSize-v);ta(t,R,M,3*v,2*v),c.setRenderTarget(t),c.render(d,Mo)}}function kg(i){const e=[],t=[],n=[];let s=i;const r=i-Ds+1+ph.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Ds?c=ph[a-i+Ds-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*u),x=new Float32Array(m*g*u),v=new Float32Array(p*g*u);for(let M=0;M<u;M++){const C=M%3*2/3-1,P=M>2?0:-1,w=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];b.set(w,_*g*M),x.set(f,m*g*M);const S=[M,M,M,M,M,M];v.set(S,p*g*M)}const R=new rn;R.setAttribute("position",new fn(b,_)),R.setAttribute("uv",new fn(x,m)),R.setAttribute("faceIndex",new fn(v,p)),e.push(R),s>Ds&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vh(i,e,t){const n=new Ui(i,e,t);return n.texture.mapping=Ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ta(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Dg(i,e,t){const n=new Float32Array(Ji),s=new D(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function xh(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function yh(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function hl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ig(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Qo||c===ec,h=c===Hs||c===Vs;if(l||h){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new _h(i)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const u=o.image;return l&&u&&u.height>0||h&&u&&s(u)?(t===null&&(t=new _h(i)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Lg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&dr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ug(i,e,t,n){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",a),delete s[f.id];const u=r.get(f);u&&(e.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const u=d.morphAttributes;for(const g in u){const _=u[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(d){const f=[],u=d.index,g=d.attributes.position;let _=0;if(u!==null){const b=u.array;_=u.version;for(let x=0,v=b.length;x<v;x+=3){const R=b[x+0],M=b[x+1],C=b[x+2];f.push(R,M,M,C,C,R)}}else if(g!==void 0){const b=g.array;_=g.version;for(let x=0,v=b.length/3-1;x<v;x+=3){const R=x+0,M=x+1,C=x+2;f.push(R,M,M,C,C,R)}}else return;const m=new(zf(f)?$f:Wf)(f,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const f=r.get(d);if(f){const u=d.index;u!==null&&f.version<u.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Ng(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){i.drawElements(n,u,r,f*a),t.update(u,n,1)}function l(f,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,f*a,g),t.update(u,n,g))}function h(f,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];t.update(m,n,1)}function d(f,u,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,u[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,f,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=u[b]*_[b];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Fg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Og(i,e,t){const n=new WeakMap,s=new xt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let S=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var u=S;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let R=o.attributes.position.count*v,M=1;R>e.maxTextureSize&&(M=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const C=new Float32Array(R*M*4*d),P=new Hf(C,R,M,d);P.type=Wn,P.needsUpdate=!0;const w=v*4;for(let k=0;k<d;k++){const F=p[k],N=b[k],j=x[k],q=R*M*4*k;for(let $=0;$<F.count;$++){const ee=$*w;g===!0&&(s.fromBufferAttribute(F,$),C[q+ee+0]=s.x,C[q+ee+1]=s.y,C[q+ee+2]=s.z,C[q+ee+3]=0),_===!0&&(s.fromBufferAttribute(N,$),C[q+ee+4]=s.x,C[q+ee+5]=s.y,C[q+ee+6]=s.z,C[q+ee+7]=0),m===!0&&(s.fromBufferAttribute(j,$),C[q+ee+8]=s.x,C[q+ee+9]=s.y,C[q+ee+10]=s.z,C[q+ee+11]=j.itemSize===4?s.w:1)}}f={count:d,texture:P,size:new Xe(R,M)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function zg(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class Kf extends Bt{constructor(e,t,n,s,r,a,o,c,l,h=Ls){if(h!==Ls&&h!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ls&&(n=os),n===void 0&&h===Ws&&(n=Gs),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:zt,this.minFilter=c!==void 0?c:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Jf=new Bt,bh=new Kf(1,1),Zf=new Hf,Qf=new Ep,ed=new qf,Mh=[],Sh=[],Eh=new Float32Array(16),Th=new Float32Array(9),wh=new Float32Array(4);function Ks(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Mh[s];if(r===void 0&&(r=new Float32Array(s),Mh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Va(i,e){let t=Sh[e];t===void 0&&(t=new Int32Array(e),Sh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Bg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function Vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function Gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function Wg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;wh.set(n),i.uniformMatrix2fv(this.addr,!1,wh),Lt(t,n)}}function $g(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;Th.set(n),i.uniformMatrix3fv(this.addr,!1,Th),Lt(t,n)}}function Xg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;Eh.set(n),i.uniformMatrix4fv(this.addr,!1,Eh),Lt(t,n)}}function jg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function Yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function Kg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function Jg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function Qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function e_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function t_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bh.compareFunction=Of,r=bh):r=Jf,t.setTexture2D(e||r,s)}function n_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Qf,s)}function i_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ed,s)}function s_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Zf,s)}function r_(i){switch(i){case 5126:return Bg;case 35664:return Hg;case 35665:return Vg;case 35666:return Gg;case 35674:return Wg;case 35675:return $g;case 35676:return Xg;case 5124:case 35670:return jg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return Kg;case 5125:return Jg;case 36294:return Zg;case 36295:return Qg;case 36296:return e_;case 35678:case 36198:case 36298:case 36306:case 35682:return t_;case 35679:case 36299:case 36307:return n_;case 35680:case 36300:case 36308:case 36293:return i_;case 36289:case 36303:case 36311:case 36292:return s_}}function a_(i,e){i.uniform1fv(this.addr,e)}function o_(i,e){const t=Ks(e,this.size,2);i.uniform2fv(this.addr,t)}function c_(i,e){const t=Ks(e,this.size,3);i.uniform3fv(this.addr,t)}function l_(i,e){const t=Ks(e,this.size,4);i.uniform4fv(this.addr,t)}function h_(i,e){const t=Ks(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function f_(i,e){const t=Ks(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function d_(i,e){const t=Ks(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function u_(i,e){i.uniform1iv(this.addr,e)}function p_(i,e){i.uniform2iv(this.addr,e)}function m_(i,e){i.uniform3iv(this.addr,e)}function g_(i,e){i.uniform4iv(this.addr,e)}function __(i,e){i.uniform1uiv(this.addr,e)}function v_(i,e){i.uniform2uiv(this.addr,e)}function x_(i,e){i.uniform3uiv(this.addr,e)}function y_(i,e){i.uniform4uiv(this.addr,e)}function b_(i,e,t){const n=this.cache,s=e.length,r=Va(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Jf,r[a])}function M_(i,e,t){const n=this.cache,s=e.length,r=Va(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Qf,r[a])}function S_(i,e,t){const n=this.cache,s=e.length,r=Va(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ed,r[a])}function E_(i,e,t){const n=this.cache,s=e.length,r=Va(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Zf,r[a])}function T_(i){switch(i){case 5126:return a_;case 35664:return o_;case 35665:return c_;case 35666:return l_;case 35674:return h_;case 35675:return f_;case 35676:return d_;case 5124:case 35670:return u_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return g_;case 5125:return __;case 36294:return v_;case 36295:return x_;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return E_}}class w_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=r_(t.type)}}class C_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=T_(t.type)}}class A_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Co=/(\w+)(\])?(\[|\.)?/g;function Ch(i,e){i.seq.push(e),i.map[e.id]=e}function R_(i,e,t){const n=i.name,s=n.length;for(Co.lastIndex=0;;){const r=Co.exec(n),a=Co.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ch(t,l===void 0?new w_(o,i,e):new C_(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new A_(o),Ch(t,d)),t=d}}}class ua{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);R_(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Ah(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const P_=37297;let k_=0;function D_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Rh=new He;function I_(i){tt._getMatrix(Rh,tt.workingColorSpace,i);const e=`mat3( ${Rh.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Ha:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ph(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+D_(i.getShaderSource(e),a)}else return s}function L_(i,e){const t=I_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function U_(i,e){let t;switch(e){case Ju:t="Linear";break;case Zu:t="Reinhard";break;case Qu:t="Cineon";break;case ep:t="ACESFilmic";break;case np:t="AgX";break;case ip:t="Neutral";break;case tp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const na=new D;function N_(){tt.getLuminanceCoefficients(na);const i=na.x.toFixed(4),e=na.y.toFixed(4),t=na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function O_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function z_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ur(i){return i!==""}function kh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const B_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(i){return i.replace(B_,V_)}const H_=new Map;function V_(i,e){let t=Ge[e];if(t===void 0){const n=H_.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pc(t)}const G_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ih(i){return i.replace(G_,W_)}function W_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Pu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function X_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hs:case Vs:e="ENVMAP_TYPE_CUBE";break;case Ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function j_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function q_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case el:e="ENVMAP_BLENDING_MULTIPLY";break;case Yu:e="ENVMAP_BLENDING_MIX";break;case Ku:e="ENVMAP_BLENDING_ADD";break}return e}function Y_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function K_(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=$_(t),l=X_(t),h=j_(t),d=q_(t),f=Y_(t),u=F_(t),g=O_(r),_=s.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ur).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ur).join(`
`),p.length>0&&(p+=`
`)):(m=[Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),p=[Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Ii?U_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,L_("linearToOutputTexel",t.outputColorSpace),N_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),a=Pc(a),a=kh(a,t),a=Dh(a,t),o=Pc(o),o=kh(o,t),o=Dh(o,t),a=Ih(a),o=Ih(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=b+m+a,v=b+p+o,R=Ah(s,s.VERTEX_SHADER,x),M=Ah(s,s.FRAGMENT_SHADER,v);s.attachShader(_,R),s.attachShader(_,M),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(k){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(R).trim(),j=s.getShaderInfoLog(M).trim();let q=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,M);else{const ee=Ph(s,R,"vertex"),I=Ph(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+F+`
`+ee+`
`+I)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(N===""||j==="")&&($=!1);$&&(k.diagnostics={runnable:q,programLog:F,vertexShader:{log:N,prefix:m},fragmentShader:{log:j,prefix:p}})}s.deleteShader(R),s.deleteShader(M),P=new ua(s,_),w=z_(s,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,P_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=k_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=M,this}let J_=0;class Z_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Q_(e),t.set(e,n)),n}}class Q_{constructor(e){this.id=J_++,this.code=e,this.usedTimes=0}}function ev(i,e,t,n,s,r,a){const o=new Vf,c=new Z_,l=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let u=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,S,k,F,N){const j=F.fog,q=N.geometry,$=w.isMeshStandardMaterial?F.environment:null,ee=(w.isMeshStandardMaterial?t:e).get(w.envMap||$),I=ee&&ee.mapping===Ba?ee.image.height:null,K=g[w.type];w.precision!==null&&(u=s.getMaxPrecision(w.precision),u!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",u,"instead."));const ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xe=ae!==void 0?ae.length:0;let Ue=0;q.morphAttributes.position!==void 0&&(Ue=1),q.morphAttributes.normal!==void 0&&(Ue=2),q.morphAttributes.color!==void 0&&(Ue=3);let Ze,X,ie,ye;if(K){const ot=Hn[K];Ze=ot.vertexShader,X=ot.fragmentShader}else Ze=w.vertexShader,X=w.fragmentShader,c.update(w),ie=c.getVertexShaderID(w),ye=c.getFragmentShaderID(w);const ce=i.getRenderTarget(),Ae=i.state.buffers.depth.getReversed(),Ne=N.isInstancedMesh===!0,$e=N.isBatchedMesh===!0,yt=!!w.map,Qe=!!w.matcap,wt=!!ee,B=!!w.aoMap,bn=!!w.lightMap,Ye=!!w.bumpMap,Ke=!!w.normalMap,Re=!!w.displacementMap,mt=!!w.emissiveMap,we=!!w.metalnessMap,A=!!w.roughnessMap,E=w.anisotropy>0,H=w.clearcoat>0,Z=w.dispersion>0,te=w.iridescence>0,J=w.sheen>0,Ee=w.transmission>0,fe=E&&!!w.anisotropyMap,me=H&&!!w.clearcoatMap,et=H&&!!w.clearcoatNormalMap,se=H&&!!w.clearcoatRoughnessMap,ge=te&&!!w.iridescenceMap,Pe=te&&!!w.iridescenceThicknessMap,Ie=J&&!!w.sheenColorMap,_e=J&&!!w.sheenRoughnessMap,Je=!!w.specularMap,Ve=!!w.specularColorMap,ut=!!w.specularIntensityMap,U=Ee&&!!w.transmissionMap,he=Ee&&!!w.thicknessMap,W=!!w.gradientMap,Q=!!w.alphaMap,pe=w.alphaTest>0,de=!!w.alphaHash,ze=!!w.extensions;let bt=Ii;w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(bt=i.toneMapping);const Gt={shaderID:K,shaderType:w.type,shaderName:w.name,vertexShader:Ze,fragmentShader:X,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:ye,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:u,batching:$e,batchingColor:$e&&N._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&N.instanceColor!==null,instancingMorph:Ne&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:js,alphaToCoverage:!!w.alphaToCoverage,map:yt,matcap:Qe,envMap:wt,envMapMode:wt&&ee.mapping,envMapCubeUVHeight:I,aoMap:B,lightMap:bn,bumpMap:Ye,normalMap:Ke,displacementMap:f&&Re,emissiveMap:mt,normalMapObjectSpace:Ke&&w.normalMapType===op,normalMapTangentSpace:Ke&&w.normalMapType===Ff,metalnessMap:we,roughnessMap:A,anisotropy:E,anisotropyMap:fe,clearcoat:H,clearcoatMap:me,clearcoatNormalMap:et,clearcoatRoughnessMap:se,dispersion:Z,iridescence:te,iridescenceMap:ge,iridescenceThicknessMap:Pe,sheen:J,sheenColorMap:Ie,sheenRoughnessMap:_e,specularMap:Je,specularColorMap:Ve,specularIntensityMap:ut,transmission:Ee,transmissionMap:U,thicknessMap:he,gradientMap:W,opaque:w.transparent===!1&&w.blending===rs&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:pe,alphaHash:de,combine:w.combine,mapUv:yt&&_(w.map.channel),aoMapUv:B&&_(w.aoMap.channel),lightMapUv:bn&&_(w.lightMap.channel),bumpMapUv:Ye&&_(w.bumpMap.channel),normalMapUv:Ke&&_(w.normalMap.channel),displacementMapUv:Re&&_(w.displacementMap.channel),emissiveMapUv:mt&&_(w.emissiveMap.channel),metalnessMapUv:we&&_(w.metalnessMap.channel),roughnessMapUv:A&&_(w.roughnessMap.channel),anisotropyMapUv:fe&&_(w.anisotropyMap.channel),clearcoatMapUv:me&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:et&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(w.sheenRoughnessMap.channel),specularMapUv:Je&&_(w.specularMap.channel),specularColorMapUv:Ve&&_(w.specularColorMap.channel),specularIntensityMapUv:ut&&_(w.specularIntensityMap.channel),transmissionMapUv:U&&_(w.transmissionMap.channel),thicknessMapUv:he&&_(w.thicknessMap.channel),alphaMapUv:Q&&_(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ke||E),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!q.attributes.uv&&(yt||Q),fog:!!j,useFog:w.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ae,skinning:N.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ue,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:bt,decodeVideoTexture:yt&&w.map.isVideoTexture===!0&&tt.getTransfer(w.map.colorSpace)===lt,decodeVideoTextureEmissive:mt&&w.emissiveMap.isVideoTexture===!0&&tt.getTransfer(w.emissiveMap.colorSpace)===lt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===_n,flipSided:w.side===nn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ze&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&w.extensions.multiDraw===!0||$e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)S.push(k),S.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(b(S,w),x(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function b(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function x(w,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),w.push(o.mask)}function v(w){const S=g[w.type];let k;if(S){const F=Hn[S];k=Fp.clone(F.uniforms)}else k=w.uniforms;return k}function R(w,S){let k;for(let F=0,N=h.length;F<N;F++){const j=h[F];if(j.cacheKey===S){k=j,++k.usedTimes;break}}return k===void 0&&(k=new K_(i,S,w,r),h.push(k)),k}function M(w){if(--w.usedTimes===0){const S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function C(w){c.remove(w)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:M,releaseShaderCache:C,programs:h,dispose:P}}function tv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function nv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Uh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,f,u,g,_,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:u,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=u,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function o(d,f,u,g,_,m){const p=a(d,f,u,g,_,m);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):t.push(p)}function c(d,f,u,g,_,m){const p=a(d,f,u,g,_,m);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):t.unshift(p)}function l(d,f){t.length>1&&t.sort(d||nv),n.length>1&&n.sort(f||Uh),s.length>1&&s.sort(f||Uh)}function h(){for(let d=e,f=i.length;d<f;d++){const u=i[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function iv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Nh,i.set(n,[a])):s>=r.length?(a=new Nh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function sv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ke};break;case"SpotLight":t={position:new D,direction:new D,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function rv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let av=0;function ov(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function cv(i){const e=new sv,t=rv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new ft,a=new ft;function o(l){let h=0,d=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let u=0,g=0,_=0,m=0,p=0,b=0,x=0,v=0,R=0,M=0,C=0;l.sort(ov);for(let w=0,S=l.length;w<S;w++){const k=l[w],F=k.color,N=k.intensity,j=k.distance,q=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=F.r*N,d+=F.g*N,f+=F.b*N;else if(k.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(k.sh.coefficients[$],N);C++}else if(k.isDirectionalLight){const $=e.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ee=k.shadow,I=t.get(k);I.shadowIntensity=ee.intensity,I.shadowBias=ee.bias,I.shadowNormalBias=ee.normalBias,I.shadowRadius=ee.radius,I.shadowMapSize=ee.mapSize,n.directionalShadow[u]=I,n.directionalShadowMap[u]=q,n.directionalShadowMatrix[u]=k.shadow.matrix,b++}n.directional[u]=$,u++}else if(k.isSpotLight){const $=e.get(k);$.position.setFromMatrixPosition(k.matrixWorld),$.color.copy(F).multiplyScalar(N),$.distance=j,$.coneCos=Math.cos(k.angle),$.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),$.decay=k.decay,n.spot[_]=$;const ee=k.shadow;if(k.map&&(n.spotLightMap[R]=k.map,R++,ee.updateMatrices(k),k.castShadow&&M++),n.spotLightMatrix[_]=ee.matrix,k.castShadow){const I=t.get(k);I.shadowIntensity=ee.intensity,I.shadowBias=ee.bias,I.shadowNormalBias=ee.normalBias,I.shadowRadius=ee.radius,I.shadowMapSize=ee.mapSize,n.spotShadow[_]=I,n.spotShadowMap[_]=q,v++}_++}else if(k.isRectAreaLight){const $=e.get(k);$.color.copy(F).multiplyScalar(N),$.halfWidth.set(k.width*.5,0,0),$.halfHeight.set(0,k.height*.5,0),n.rectArea[m]=$,m++}else if(k.isPointLight){const $=e.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity),$.distance=k.distance,$.decay=k.decay,k.castShadow){const ee=k.shadow,I=t.get(k);I.shadowIntensity=ee.intensity,I.shadowBias=ee.bias,I.shadowNormalBias=ee.normalBias,I.shadowRadius=ee.radius,I.shadowMapSize=ee.mapSize,I.shadowCameraNear=ee.camera.near,I.shadowCameraFar=ee.camera.far,n.pointShadow[g]=I,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=k.shadow.matrix,x++}n.point[g]=$,g++}else if(k.isHemisphereLight){const $=e.get(k);$.skyColor.copy(k.color).multiplyScalar(N),$.groundColor.copy(k.groundColor).multiplyScalar(N),n.hemi[p]=$,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==u||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==b||P.numPointShadows!==x||P.numSpotShadows!==v||P.numSpotMaps!==R||P.numLightProbes!==C)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+R-M,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=C,P.directionalLength=u,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=b,P.numPointShadows=x,P.numSpotShadows=v,P.numSpotMaps=R,P.numLightProbes=C,n.version=av++)}function c(l,h){let d=0,f=0,u=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){const x=l[p];if(x.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(x.isSpotLight){const v=n.spot[u];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Fh(i){const e=new cv(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function lv(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Fh(i),e.set(s,[o])):r>=a.length?(o=new Fh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class hv extends Pr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fv extends Pr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pv(i,e,t){let n=new cl;const s=new Xe,r=new Xe,a=new xt,o=new hv({depthPacking:ap}),c=new fv,l={},h=t.maxTextureSize,d={[Li]:nn,[nn]:Li,[_n]:_n},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:dv,fragmentShader:uv}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const g=new rn;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new De(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wf;let p=this.type;this.render=function(M,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const w=i.getRenderTarget(),S=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Di),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const N=p!==ti&&this.type===ti,j=p===ti&&this.type!==ti;for(let q=0,$=M.length;q<$;q++){const ee=M[q],I=ee.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const K=I.getFrameExtents();if(s.multiply(K),r.copy(I.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,I.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,I.mapSize.y=r.y)),I.map===null||N===!0||j===!0){const xe=this.type!==ti?{minFilter:zt,magFilter:zt}:{};I.map!==null&&I.map.dispose(),I.map=new Ui(s.x,s.y,xe),I.map.texture.name=ee.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const ae=I.getViewportCount();for(let xe=0;xe<ae;xe++){const Ue=I.getViewport(xe);a.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),F.viewport(a),I.updateMatrices(ee,xe),n=I.getFrustum(),v(C,P,I.camera,ee,this.type)}I.isPointLightShadow!==!0&&this.type===ti&&b(I,P),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,S,k)};function b(M,C){const P=e.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,u.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Ui(s.x,s.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(C,null,P,f,_,null),u.uniforms.shadow_pass.value=M.mapPass.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(C,null,P,u,_,null)}function x(M,C,P,w){let S=null;const k=P.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(k!==void 0)S=k;else if(S=P.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const F=S.uuid,N=C.uuid;let j=l[F];j===void 0&&(j={},l[F]=j);let q=j[N];q===void 0&&(q=S.clone(),j[N]=q,C.addEventListener("dispose",R)),S=q}if(S.visible=C.visible,S.wireframe=C.wireframe,w===ti?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:d[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=i.properties.get(S);F.light=P}return S}function v(M,C,P,w,S){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===ti)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,M.matrixWorld);const N=e.update(M),j=M.material;if(Array.isArray(j)){const q=N.groups;for(let $=0,ee=q.length;$<ee;$++){const I=q[$],K=j[I.materialIndex];if(K&&K.visible){const ae=x(M,K,w,S);M.onBeforeShadow(i,M,C,P,N,ae,I),i.renderBufferDirect(P,null,N,ae,M,I),M.onAfterShadow(i,M,C,P,N,ae,I)}}}else if(j.visible){const q=x(M,j,w,S);M.onBeforeShadow(i,M,C,P,N,q,null),i.renderBufferDirect(P,null,N,q,M,null),M.onAfterShadow(i,M,C,P,N,q,null)}}const F=M.children;for(let N=0,j=F.length;N<j;N++)v(F[N],C,P,w,S)}function R(M){M.target.removeEventListener("dispose",R);for(const P in l){const w=l[P],S=M.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const mv={[Xo]:jo,[qo]:Jo,[Yo]:Zo,[Bs]:Ko,[jo]:Xo,[Jo]:qo,[Zo]:Yo,[Ko]:Bs};function gv(i,e){function t(){let U=!1;const he=new xt;let W=null;const Q=new xt(0,0,0,0);return{setMask:function(pe){W!==pe&&!U&&(i.colorMask(pe,pe,pe,pe),W=pe)},setLocked:function(pe){U=pe},setClear:function(pe,de,ze,bt,Gt){Gt===!0&&(pe*=bt,de*=bt,ze*=bt),he.set(pe,de,ze,bt),Q.equals(he)===!1&&(i.clearColor(pe,de,ze,bt),Q.copy(he))},reset:function(){U=!1,W=null,Q.set(-1,0,0,0)}}}function n(){let U=!1,he=!1,W=null,Q=null,pe=null;return{setReversed:function(de){if(he!==de){const ze=e.get("EXT_clip_control");he?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const bt=pe;pe=null,this.setClear(bt)}he=de},getReversed:function(){return he},setTest:function(de){de?ce(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(de){W!==de&&!U&&(i.depthMask(de),W=de)},setFunc:function(de){if(he&&(de=mv[de]),Q!==de){switch(de){case Xo:i.depthFunc(i.NEVER);break;case jo:i.depthFunc(i.ALWAYS);break;case qo:i.depthFunc(i.LESS);break;case Bs:i.depthFunc(i.LEQUAL);break;case Yo:i.depthFunc(i.EQUAL);break;case Ko:i.depthFunc(i.GEQUAL);break;case Jo:i.depthFunc(i.GREATER);break;case Zo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=de}},setLocked:function(de){U=de},setClear:function(de){pe!==de&&(he&&(de=1-de),i.clearDepth(de),pe=de)},reset:function(){U=!1,W=null,Q=null,pe=null,he=!1}}}function s(){let U=!1,he=null,W=null,Q=null,pe=null,de=null,ze=null,bt=null,Gt=null;return{setTest:function(ot){U||(ot?ce(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(ot){he!==ot&&!U&&(i.stencilMask(ot),he=ot)},setFunc:function(ot,An,qn){(W!==ot||Q!==An||pe!==qn)&&(i.stencilFunc(ot,An,qn),W=ot,Q=An,pe=qn)},setOp:function(ot,An,qn){(de!==ot||ze!==An||bt!==qn)&&(i.stencilOp(ot,An,qn),de=ot,ze=An,bt=qn)},setLocked:function(ot){U=ot},setClear:function(ot){Gt!==ot&&(i.clearStencil(ot),Gt=ot)},reset:function(){U=!1,he=null,W=null,Q=null,pe=null,de=null,ze=null,bt=null,Gt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,u=[],g=null,_=!1,m=null,p=null,b=null,x=null,v=null,R=null,M=null,C=new ke(0,0,0),P=0,w=!1,S=null,k=null,F=null,N=null,j=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ee=0;const I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(I)[1]),$=ee>=1):I.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),$=ee>=2);let K=null,ae={};const xe=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),Ze=new xt().fromArray(xe),X=new xt().fromArray(Ue);function ie(U,he,W,Q){const pe=new Uint8Array(4),de=i.createTexture();i.bindTexture(U,de),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<W;ze++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(he+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return de}const ye={};ye[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(i.DEPTH_TEST),a.setFunc(Bs),Ye(!1),Ke(Vl),ce(i.CULL_FACE),B(Di);function ce(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Ae(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ne(U,he){return d[U]!==he?(i.bindFramebuffer(U,he),d[U]=he,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=he),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=he),!0):!1}function $e(U,he){let W=u,Q=!1;if(U){W=f.get(he),W===void 0&&(W=[],f.set(he,W));const pe=U.textures;if(W.length!==pe.length||W[0]!==i.COLOR_ATTACHMENT0){for(let de=0,ze=pe.length;de<ze;de++)W[de]=i.COLOR_ATTACHMENT0+de;W.length=pe.length,Q=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,Q=!0);Q&&i.drawBuffers(W)}function yt(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const Qe={[Ki]:i.FUNC_ADD,[Du]:i.FUNC_SUBTRACT,[Iu]:i.FUNC_REVERSE_SUBTRACT};Qe[Lu]=i.MIN,Qe[Uu]=i.MAX;const wt={[Nu]:i.ZERO,[Fu]:i.ONE,[Ou]:i.SRC_COLOR,[Wo]:i.SRC_ALPHA,[Wu]:i.SRC_ALPHA_SATURATE,[Vu]:i.DST_COLOR,[Bu]:i.DST_ALPHA,[zu]:i.ONE_MINUS_SRC_COLOR,[$o]:i.ONE_MINUS_SRC_ALPHA,[Gu]:i.ONE_MINUS_DST_COLOR,[Hu]:i.ONE_MINUS_DST_ALPHA,[$u]:i.CONSTANT_COLOR,[Xu]:i.ONE_MINUS_CONSTANT_COLOR,[ju]:i.CONSTANT_ALPHA,[qu]:i.ONE_MINUS_CONSTANT_ALPHA};function B(U,he,W,Q,pe,de,ze,bt,Gt,ot){if(U===Di){_===!0&&(Ae(i.BLEND),_=!1);return}if(_===!1&&(ce(i.BLEND),_=!0),U!==ku){if(U!==m||ot!==w){if((p!==Ki||v!==Ki)&&(i.blendEquation(i.FUNC_ADD),p=Ki,v=Ki),ot)switch(U){case rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Go:i.blendFunc(i.ONE,i.ONE);break;case Gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Go:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,x=null,R=null,M=null,C.set(0,0,0),P=0,m=U,w=ot}return}pe=pe||he,de=de||W,ze=ze||Q,(he!==p||pe!==v)&&(i.blendEquationSeparate(Qe[he],Qe[pe]),p=he,v=pe),(W!==b||Q!==x||de!==R||ze!==M)&&(i.blendFuncSeparate(wt[W],wt[Q],wt[de],wt[ze]),b=W,x=Q,R=de,M=ze),(bt.equals(C)===!1||Gt!==P)&&(i.blendColor(bt.r,bt.g,bt.b,Gt),C.copy(bt),P=Gt),m=U,w=!1}function bn(U,he){U.side===_n?Ae(i.CULL_FACE):ce(i.CULL_FACE);let W=U.side===nn;he&&(W=!W),Ye(W),U.blending===rs&&U.transparent===!1?B(Di):B(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const Q=U.stencilWrite;o.setTest(Q),Q&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),mt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(U){S!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),S=U)}function Ke(U){U!==Au?(ce(i.CULL_FACE),U!==k&&(U===Vl?i.cullFace(i.BACK):U===Ru?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),k=U}function Re(U){U!==F&&($&&i.lineWidth(U),F=U)}function mt(U,he,W){U?(ce(i.POLYGON_OFFSET_FILL),(N!==he||j!==W)&&(i.polygonOffset(he,W),N=he,j=W)):Ae(i.POLYGON_OFFSET_FILL)}function we(U){U?ce(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function A(U){U===void 0&&(U=i.TEXTURE0+q-1),K!==U&&(i.activeTexture(U),K=U)}function E(U,he,W){W===void 0&&(K===null?W=i.TEXTURE0+q-1:W=K);let Q=ae[W];Q===void 0&&(Q={type:void 0,texture:void 0},ae[W]=Q),(Q.type!==U||Q.texture!==he)&&(K!==W&&(i.activeTexture(W),K=W),i.bindTexture(U,he||ye[U]),Q.type=U,Q.texture=he)}function H(){const U=ae[K];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(U){Ze.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ze.copy(U))}function _e(U){X.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),X.copy(U))}function Je(U,he){let W=l.get(he);W===void 0&&(W=new WeakMap,l.set(he,W));let Q=W.get(U);Q===void 0&&(Q=i.getUniformBlockIndex(he,U.name),W.set(U,Q))}function Ve(U,he){const Q=l.get(he).get(U);c.get(he)!==Q&&(i.uniformBlockBinding(he,Q,U.__bindingPointIndex),c.set(he,Q))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},K=null,ae={},d={},f=new WeakMap,u=[],g=null,_=!1,m=null,p=null,b=null,x=null,v=null,R=null,M=null,C=new ke(0,0,0),P=0,w=!1,S=null,k=null,F=null,N=null,j=null,Ze.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ce,disable:Ae,bindFramebuffer:Ne,drawBuffers:$e,useProgram:yt,setBlending:B,setMaterial:bn,setFlipSided:Ye,setCullFace:Ke,setLineWidth:Re,setPolygonOffset:mt,setScissorTest:we,activeTexture:A,bindTexture:E,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:te,texImage2D:ge,texImage3D:Pe,updateUBOMapping:Je,uniformBlockBinding:Ve,texStorage2D:et,texStorage3D:se,texSubImage2D:J,texSubImage3D:Ee,compressedTexSubImage2D:fe,compressedTexSubImage3D:me,scissor:Ie,viewport:_e,reset:ut}}function Oh(i,e,t,n){const s=_v(n);switch(t){case kf:return i*e;case If:return i*e;case Lf:return i*e*2;case sl:return i*e/s.components*s.byteLength;case rl:return i*e/s.components*s.byteLength;case Uf:return i*e*2/s.components*s.byteLength;case al:return i*e*2/s.components*s.byteLength;case Df:return i*e*3/s.components*s.byteLength;case Fn:return i*e*4/s.components*s.byteLength;case ol:return i*e*4/s.components*s.byteLength;case ca:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ha:case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sc:case ac:return Math.max(i,16)*Math.max(e,8)/4;case ic:case rc:return Math.max(i,8)*Math.max(e,8)/2;case oc:case cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case uc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case pc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case mc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _c:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case vc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case bc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case da:case Ec:case Tc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Nf:case wc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Cc:case Ac:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _v(i){switch(i){case pi:case Af:return{byteLength:1,components:1};case Mr:case Rf:case Cr:return{byteLength:2,components:1};case nl:case il:return{byteLength:2,components:4};case os:case tl:case Wn:return{byteLength:4,components:1};case Pf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function vv(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,h=new WeakMap;let d;const f=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,E){return u?new OffscreenCanvas(A,E):Ca("canvas")}function _(A,E,H){let Z=1;const te=we(A);if((te.width>H||te.height>H)&&(Z=H/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(Z*te.width),Ee=Math.floor(Z*te.height);d===void 0&&(d=g(J,Ee));const fe=E?g(J,Ee):d;return fe.width=J,fe.height=Ee,fe.getContext("2d").drawImage(A,0,0,J,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+J+"x"+Ee+")."),fe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(A,E,H,Z,te=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=E;if(E===i.RED&&(H===i.FLOAT&&(J=i.R32F),H===i.HALF_FLOAT&&(J=i.R16F),H===i.UNSIGNED_BYTE&&(J=i.R8)),E===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.R8UI),H===i.UNSIGNED_SHORT&&(J=i.R16UI),H===i.UNSIGNED_INT&&(J=i.R32UI),H===i.BYTE&&(J=i.R8I),H===i.SHORT&&(J=i.R16I),H===i.INT&&(J=i.R32I)),E===i.RG&&(H===i.FLOAT&&(J=i.RG32F),H===i.HALF_FLOAT&&(J=i.RG16F),H===i.UNSIGNED_BYTE&&(J=i.RG8)),E===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RG8UI),H===i.UNSIGNED_SHORT&&(J=i.RG16UI),H===i.UNSIGNED_INT&&(J=i.RG32UI),H===i.BYTE&&(J=i.RG8I),H===i.SHORT&&(J=i.RG16I),H===i.INT&&(J=i.RG32I)),E===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGB8UI),H===i.UNSIGNED_SHORT&&(J=i.RGB16UI),H===i.UNSIGNED_INT&&(J=i.RGB32UI),H===i.BYTE&&(J=i.RGB8I),H===i.SHORT&&(J=i.RGB16I),H===i.INT&&(J=i.RGB32I)),E===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),H===i.UNSIGNED_INT&&(J=i.RGBA32UI),H===i.BYTE&&(J=i.RGBA8I),H===i.SHORT&&(J=i.RGBA16I),H===i.INT&&(J=i.RGBA32I)),E===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),E===i.RGBA){const Ee=te?Ha:tt.getTransfer(Z);H===i.FLOAT&&(J=i.RGBA32F),H===i.HALF_FLOAT&&(J=i.RGBA16F),H===i.UNSIGNED_BYTE&&(J=Ee===lt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(A,E){let H;return A?E===null||E===os||E===Gs?H=i.DEPTH24_STENCIL8:E===Wn?H=i.DEPTH32F_STENCIL8:E===Mr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===os||E===Gs?H=i.DEPTH_COMPONENT24:E===Wn?H=i.DEPTH_COMPONENT32F:E===Mr&&(H=i.DEPTH_COMPONENT16),H}function R(A,E){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==zt&&A.minFilter!==Gn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function M(A){const E=A.target;E.removeEventListener("dispose",M),P(E),E.isVideoTexture&&h.delete(E)}function C(A){const E=A.target;E.removeEventListener("dispose",C),S(E)}function P(A){const E=n.get(A);if(E.__webglInit===void 0)return;const H=A.source,Z=f.get(H);if(Z){const te=Z[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(A),Object.keys(Z).length===0&&f.delete(H)}n.remove(A)}function w(A){const E=n.get(A);i.deleteTexture(E.__webglTexture);const H=A.source,Z=f.get(H);delete Z[E.__cacheKey],a.memory.textures--}function S(A){const E=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let te=0;te<E.__webglFramebuffer[Z].length;te++)i.deleteFramebuffer(E.__webglFramebuffer[Z][te]);else i.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)i.deleteFramebuffer(E.__webglFramebuffer[Z]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=A.textures;for(let Z=0,te=H.length;Z<te;Z++){const J=n.get(H[Z]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(H[Z])}n.remove(A)}let k=0;function F(){k=0}function N(){const A=k;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),k+=1,A}function j(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function q(A,E){const H=n.get(A);if(A.isVideoTexture&&Re(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(H,A,E);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+E)}function $(A,E){const H=n.get(A);if(A.version>0&&H.__version!==A.version){X(H,A,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+E)}function ee(A,E){const H=n.get(A);if(A.version>0&&H.__version!==A.version){X(H,A,E);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+E)}function I(A,E){const H=n.get(A);if(A.version>0&&H.__version!==A.version){ie(H,A,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+E)}const K={[tc]:i.REPEAT,[es]:i.CLAMP_TO_EDGE,[nc]:i.MIRRORED_REPEAT},ae={[zt]:i.NEAREST,[sp]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[Za]:i.LINEAR_MIPMAP_NEAREST,[ts]:i.LINEAR_MIPMAP_LINEAR},xe={[cp]:i.NEVER,[pp]:i.ALWAYS,[lp]:i.LESS,[Of]:i.LEQUAL,[hp]:i.EQUAL,[up]:i.GEQUAL,[fp]:i.GREATER,[dp]:i.NOTEQUAL};function Ue(A,E){if(E.type===Wn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Gn||E.magFilter===Za||E.magFilter===Nr||E.magFilter===ts||E.minFilter===Gn||E.minFilter===Za||E.minFilter===Nr||E.minFilter===ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,K[E.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,K[E.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,K[E.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ae[E.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ae[E.minFilter]),E.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,xe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===zt||E.minFilter!==Nr&&E.minFilter!==ts||E.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ze(A,E){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",M));const Z=E.source;let te=f.get(Z);te===void 0&&(te={},f.set(Z,te));const J=j(E);if(J!==A.__cacheKey){te[J]===void 0&&(te[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),te[J].usedTimes++;const Ee=te[A.__cacheKey];Ee!==void 0&&(te[A.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(E)),A.__cacheKey=J,A.__webglTexture=te[J].texture}return H}function X(A,E,H){let Z=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=i.TEXTURE_3D);const te=Ze(A,E),J=E.source;t.bindTexture(Z,A.__webglTexture,i.TEXTURE0+H);const Ee=n.get(J);if(J.version!==Ee.__version||te===!0){t.activeTexture(i.TEXTURE0+H);const fe=tt.getPrimaries(tt.workingColorSpace),me=E.colorSpace===Ri?null:tt.getPrimaries(E.colorSpace),et=E.colorSpace===Ri||fe===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let se=_(E.image,!1,s.maxTextureSize);se=mt(E,se);const ge=r.convert(E.format,E.colorSpace),Pe=r.convert(E.type);let Ie=x(E.internalFormat,ge,Pe,E.colorSpace,E.isVideoTexture);Ue(Z,E);let _e;const Je=E.mipmaps,Ve=E.isVideoTexture!==!0,ut=Ee.__version===void 0||te===!0,U=J.dataReady,he=R(E,se);if(E.isDepthTexture)Ie=v(E.format===Ws,E.type),ut&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,Ie,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Ie,se.width,se.height,0,ge,Pe,null));else if(E.isDataTexture)if(Je.length>0){Ve&&ut&&t.texStorage2D(i.TEXTURE_2D,he,Ie,Je[0].width,Je[0].height);for(let W=0,Q=Je.length;W<Q;W++)_e=Je[W],Ve?U&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,_e.width,_e.height,ge,Pe,_e.data):t.texImage2D(i.TEXTURE_2D,W,Ie,_e.width,_e.height,0,ge,Pe,_e.data);E.generateMipmaps=!1}else Ve?(ut&&t.texStorage2D(i.TEXTURE_2D,he,Ie,se.width,se.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se.width,se.height,ge,Pe,se.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,se.width,se.height,0,ge,Pe,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ve&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Ie,Je[0].width,Je[0].height,se.depth);for(let W=0,Q=Je.length;W<Q;W++)if(_e=Je[W],E.format!==Fn)if(ge!==null)if(Ve){if(U)if(E.layerUpdates.size>0){const pe=Oh(_e.width,_e.height,E.format,E.type);for(const de of E.layerUpdates){const ze=_e.data.subarray(de*pe/_e.data.BYTES_PER_ELEMENT,(de+1)*pe/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,de,_e.width,_e.height,1,ge,ze)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,se.depth,ge,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ie,_e.width,_e.height,se.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,se.depth,ge,Pe,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Ie,_e.width,_e.height,se.depth,0,ge,Pe,_e.data)}else{Ve&&ut&&t.texStorage2D(i.TEXTURE_2D,he,Ie,Je[0].width,Je[0].height);for(let W=0,Q=Je.length;W<Q;W++)_e=Je[W],E.format!==Fn?ge!==null?Ve?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Ie,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?U&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,_e.width,_e.height,ge,Pe,_e.data):t.texImage2D(i.TEXTURE_2D,W,Ie,_e.width,_e.height,0,ge,Pe,_e.data)}else if(E.isDataArrayTexture)if(Ve){if(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Ie,se.width,se.height,se.depth),U)if(E.layerUpdates.size>0){const W=Oh(se.width,se.height,E.format,E.type);for(const Q of E.layerUpdates){const pe=se.data.subarray(Q*W/se.data.BYTES_PER_ELEMENT,(Q+1)*W/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,se.width,se.height,1,ge,Pe,pe)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ge,Pe,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,se.width,se.height,se.depth,0,ge,Pe,se.data);else if(E.isData3DTexture)Ve?(ut&&t.texStorage3D(i.TEXTURE_3D,he,Ie,se.width,se.height,se.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ge,Pe,se.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,se.width,se.height,se.depth,0,ge,Pe,se.data);else if(E.isFramebufferTexture){if(ut)if(Ve)t.texStorage2D(i.TEXTURE_2D,he,Ie,se.width,se.height);else{let W=se.width,Q=se.height;for(let pe=0;pe<he;pe++)t.texImage2D(i.TEXTURE_2D,pe,Ie,W,Q,0,ge,Pe,null),W>>=1,Q>>=1}}else if(Je.length>0){if(Ve&&ut){const W=we(Je[0]);t.texStorage2D(i.TEXTURE_2D,he,Ie,W.width,W.height)}for(let W=0,Q=Je.length;W<Q;W++)_e=Je[W],Ve?U&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ge,Pe,_e):t.texImage2D(i.TEXTURE_2D,W,Ie,ge,Pe,_e);E.generateMipmaps=!1}else if(Ve){if(ut){const W=we(se);t.texStorage2D(i.TEXTURE_2D,he,Ie,W.width,W.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Pe,se)}else t.texImage2D(i.TEXTURE_2D,0,Ie,ge,Pe,se);m(E)&&p(Z),Ee.__version=J.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ie(A,E,H){if(E.image.length!==6)return;const Z=Ze(A,E),te=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);const J=n.get(te);if(te.version!==J.__version||Z===!0){t.activeTexture(i.TEXTURE0+H);const Ee=tt.getPrimaries(tt.workingColorSpace),fe=E.colorSpace===Ri?null:tt.getPrimaries(E.colorSpace),me=E.colorSpace===Ri||Ee===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const et=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,ge=[];for(let Q=0;Q<6;Q++)!et&&!se?ge[Q]=_(E.image[Q],!0,s.maxCubemapSize):ge[Q]=se?E.image[Q].image:E.image[Q],ge[Q]=mt(E,ge[Q]);const Pe=ge[0],Ie=r.convert(E.format,E.colorSpace),_e=r.convert(E.type),Je=x(E.internalFormat,Ie,_e,E.colorSpace),Ve=E.isVideoTexture!==!0,ut=J.__version===void 0||Z===!0,U=te.dataReady;let he=R(E,Pe);Ue(i.TEXTURE_CUBE_MAP,E);let W;if(et){Ve&&ut&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Je,Pe.width,Pe.height);for(let Q=0;Q<6;Q++){W=ge[Q].mipmaps;for(let pe=0;pe<W.length;pe++){const de=W[pe];E.format!==Fn?Ie!==null?Ve?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,0,0,de.width,de.height,Ie,de.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,Je,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,0,0,de.width,de.height,Ie,_e,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,Je,de.width,de.height,0,Ie,_e,de.data)}}}else{if(W=E.mipmaps,Ve&&ut){W.length>0&&he++;const Q=we(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Je,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(se){Ve?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ge[Q].width,ge[Q].height,Ie,_e,ge[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Je,ge[Q].width,ge[Q].height,0,Ie,_e,ge[Q].data);for(let pe=0;pe<W.length;pe++){const ze=W[pe].image[Q].image;Ve?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,0,0,ze.width,ze.height,Ie,_e,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,Je,ze.width,ze.height,0,Ie,_e,ze.data)}}else{Ve?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ie,_e,ge[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Je,Ie,_e,ge[Q]);for(let pe=0;pe<W.length;pe++){const de=W[pe];Ve?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,0,0,Ie,_e,de.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,Je,Ie,_e,de.image[Q])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),J.__version=te.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ye(A,E,H,Z,te,J){const Ee=r.convert(H.format,H.colorSpace),fe=r.convert(H.type),me=x(H.internalFormat,Ee,fe,H.colorSpace),et=n.get(E),se=n.get(H);if(se.__renderTarget=E,!et.__hasExternalTextures){const ge=Math.max(1,E.width>>J),Pe=Math.max(1,E.height>>J);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,J,me,ge,Pe,E.depth,0,Ee,fe,null):t.texImage2D(te,J,me,ge,Pe,0,Ee,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Ke(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,te,se.__webglTexture,0,Ye(E)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,te,se.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(A,E,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),E.depthBuffer){const Z=E.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,J=v(E.stencilBuffer,te),Ee=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=Ye(E);Ke(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,J,E.width,E.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,J,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,J,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,A)}else{const Z=E.textures;for(let te=0;te<Z.length;te++){const J=Z[te],Ee=r.convert(J.format,J.colorSpace),fe=r.convert(J.type),me=x(J.internalFormat,Ee,fe,J.colorSpace),et=Ye(E);H&&Ke(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,me,E.width,E.height):Ke(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,me,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,me,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);const te=Z.__webglTexture,J=Ye(E);if(E.depthTexture.format===Ls)Ke(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(E.depthTexture.format===Ws)Ke(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ne(A){const E=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const te=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),E.__depthDisposeCallback=te}E.__boundDepthTexture=Z}if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ae(E.__webglFramebuffer,A)}else if(H){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=i.createRenderbuffer(),ce(E.__webglDepthbuffer[Z],A,!1);else{const te=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,J)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ce(E.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(A,E,H){const Z=n.get(A);E!==void 0&&ye(Z.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Ne(A)}function yt(A){const E=A.texture,H=n.get(A),Z=n.get(E);A.addEventListener("dispose",C);const te=A.textures,J=A.isWebGLCubeRenderTarget===!0,Ee=te.length>1;if(Ee||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=E.version,a.memory.textures++),J){H.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[fe]=[];for(let me=0;me<E.mipmaps.length;me++)H.__webglFramebuffer[fe][me]=i.createFramebuffer()}else H.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)H.__webglFramebuffer[fe]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let fe=0,me=te.length;fe<me;fe++){const et=n.get(te[fe]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Ke(A)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let fe=0;fe<te.length;fe++){const me=te[fe];H.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[fe]);const et=r.convert(me.format,me.colorSpace),se=r.convert(me.type),ge=x(me.internalFormat,et,se,me.colorSpace,A.isXRRenderTarget===!0),Pe=Ye(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,ge,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,H.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)ye(H.__webglFramebuffer[fe][me],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,me);else ye(H.__webglFramebuffer[fe],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let fe=0,me=te.length;fe<me;fe++){const et=te[fe],se=n.get(et);t.bindTexture(i.TEXTURE_2D,se.__webglTexture),Ue(i.TEXTURE_2D,et),ye(H.__webglFramebuffer,A,et,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),m(et)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,Z.__webglTexture),Ue(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)ye(H.__webglFramebuffer[me],A,E,i.COLOR_ATTACHMENT0,fe,me);else ye(H.__webglFramebuffer,A,E,i.COLOR_ATTACHMENT0,fe,0);m(E)&&p(fe),t.unbindTexture()}A.depthBuffer&&Ne(A)}function Qe(A){const E=A.textures;for(let H=0,Z=E.length;H<Z;H++){const te=E[H];if(m(te)){const J=b(A),Ee=n.get(te).__webglTexture;t.bindTexture(J,Ee),p(J),t.unbindTexture()}}}const wt=[],B=[];function bn(A){if(A.samples>0){if(Ke(A)===!1){const E=A.textures,H=A.width,Z=A.height;let te=i.COLOR_BUFFER_BIT;const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(A),fe=E.length>1;if(fe)for(let me=0;me<E.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let me=0;me<E.length;me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const et=n.get(E[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,H,Z,0,0,H,Z,te,i.NEAREST),c===!0&&(wt.length=0,B.length=0,wt.push(i.COLOR_ATTACHMENT0+me),A.depthBuffer&&A.resolveDepthBuffer===!1&&(wt.push(J),B.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let me=0;me<E.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const et=n.get(E[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const E=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Ye(A){return Math.min(s.maxSamples,A.samples)}function Ke(A){const E=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Re(A){const E=a.render.frame;h.get(A)!==E&&(h.set(A,E),A.update())}function mt(A,E){const H=A.colorSpace,Z=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==js&&H!==Ri&&(tt.getTransfer(H)===lt?(Z!==Fn||te!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function we(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=ee,this.setTextureCube=I,this.rebindTextures=$e,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=bn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ke}function xv(i,e){function t(n,s=Ri){let r;const a=tt.getTransfer(s);if(n===pi)return i.UNSIGNED_BYTE;if(n===nl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Af)return i.BYTE;if(n===Rf)return i.SHORT;if(n===Mr)return i.UNSIGNED_SHORT;if(n===tl)return i.INT;if(n===os)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===Cr)return i.HALF_FLOAT;if(n===kf)return i.ALPHA;if(n===Df)return i.RGB;if(n===Fn)return i.RGBA;if(n===If)return i.LUMINANCE;if(n===Lf)return i.LUMINANCE_ALPHA;if(n===Ls)return i.DEPTH_COMPONENT;if(n===Ws)return i.DEPTH_STENCIL;if(n===sl)return i.RED;if(n===rl)return i.RED_INTEGER;if(n===Uf)return i.RG;if(n===al)return i.RG_INTEGER;if(n===ol)return i.RGBA_INTEGER;if(n===ca||n===la||n===ha||n===fa)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ic||n===sc||n===rc||n===ac)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oc||n===cc||n===lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oc||n===cc)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hc||n===fc||n===dc||n===uc||n===pc||n===mc||n===gc||n===_c||n===vc||n===xc||n===yc||n===bc||n===Mc||n===Sc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_c)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===da||n===Ec||n===Tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===da)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nf||n===wc||n===Cc||n===Ac)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===da)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class yv extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qt extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bv={type:"move"};class Ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,g=.005;l.inputState.pinching&&f>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bv)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ev{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Bt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new On({vertexShader:Mv,fragmentShader:Sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new De(new vn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tv extends qs{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,u=null,g=null;const _=new Ev,m=t.getContextAttributes();let p=null,b=null;const x=[],v=[],R=new Xe;let M=null;const C=new Tn;C.viewport=new xt;const P=new Tn;P.viewport=new xt;const w=[C,P],S=new yv;let k=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ie=x[X];return ie===void 0&&(ie=new Ao,x[X]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(X){let ie=x[X];return ie===void 0&&(ie=new Ao,x[X]=ie),ie.getGripSpace()},this.getHand=function(X){let ie=x[X];return ie===void 0&&(ie=new Ao,x[X]=ie),ie.getHandSpace()};function N(X){const ie=v.indexOf(X.inputSource);if(ie===-1)return;const ye=x[ie];ye!==void 0&&(ye.update(X.inputSource,X.frame,l||a),ye.dispatchEvent({type:X.type,data:X.inputSource}))}function j(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",q);for(let X=0;X<x.length;X++){const ie=v[X];ie!==null&&(v[X]=null,x[X].disconnect(ie))}k=null,F=null,_.reset(),e.setRenderTarget(p),u=null,f=null,d=null,s=null,b=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",j),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new Ui(u.framebufferWidth,u.framebufferHeight,{format:Fn,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,ye=null,ce=null;m.depth&&(ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?Ws:Ls,ye=m.stencil?Gs:os);const Ae={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(Ae),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Ui(f.textureWidth,f.textureHeight,{format:Fn,type:pi,depthTexture:new Kf(f.textureWidth,f.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ze.setContext(s),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(X){for(let ie=0;ie<X.removed.length;ie++){const ye=X.removed[ie],ce=v.indexOf(ye);ce>=0&&(v[ce]=null,x[ce].disconnect(ye))}for(let ie=0;ie<X.added.length;ie++){const ye=X.added[ie];let ce=v.indexOf(ye);if(ce===-1){for(let Ne=0;Ne<x.length;Ne++)if(Ne>=v.length){v.push(ye),ce=Ne;break}else if(v[Ne]===null){v[Ne]=ye,ce=Ne;break}if(ce===-1)break}const Ae=x[ce];Ae&&Ae.connect(ye)}}const $=new D,ee=new D;function I(X,ie,ye){$.setFromMatrixPosition(ie.matrixWorld),ee.setFromMatrixPosition(ye.matrixWorld);const ce=$.distanceTo(ee),Ae=ie.projectionMatrix.elements,Ne=ye.projectionMatrix.elements,$e=Ae[14]/(Ae[10]-1),yt=Ae[14]/(Ae[10]+1),Qe=(Ae[9]+1)/Ae[5],wt=(Ae[9]-1)/Ae[5],B=(Ae[8]-1)/Ae[0],bn=(Ne[8]+1)/Ne[0],Ye=$e*B,Ke=$e*bn,Re=ce/(-B+bn),mt=Re*-B;if(ie.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(mt),X.translateZ(Re),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ae[10]===-1)X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const we=$e+Re,A=yt+Re,E=Ye-mt,H=Ke+(ce-mt),Z=Qe*yt/A*we,te=wt*yt/A*we;X.projectionMatrix.makePerspective(E,H,Z,te,we,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function K(X,ie){ie===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ie.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let ie=X.near,ye=X.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(ye=_.depthFar)),S.near=P.near=C.near=ie,S.far=P.far=C.far=ye,(k!==S.near||F!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),k=S.near,F=S.far),C.layers.mask=X.layers.mask|2,P.layers.mask=X.layers.mask|4,S.layers.mask=C.layers.mask|P.layers.mask;const ce=X.parent,Ae=S.cameras;K(S,ce);for(let Ne=0;Ne<Ae.length;Ne++)K(Ae[Ne],ce);Ae.length===2?I(S,C,P):S.projectionMatrix.copy(C.projectionMatrix),ae(X,S,ce)};function ae(X,ie,ye){ye===null?X.matrix.copy(ie.matrixWorld):(X.matrix.copy(ye.matrixWorld),X.matrix.invert(),X.matrix.multiply(ie.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Rc*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&u===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let xe=null;function Ue(X,ie){if(h=ie.getViewerPose(l||a),g=ie,h!==null){const ye=h.views;u!==null&&(e.setRenderTargetFramebuffer(b,u.framebuffer),e.setRenderTarget(b));let ce=!1;ye.length!==S.cameras.length&&(S.cameras.length=0,ce=!0);for(let Ne=0;Ne<ye.length;Ne++){const $e=ye[Ne];let yt=null;if(u!==null)yt=u.getViewport($e);else{const wt=d.getViewSubImage(f,$e);yt=wt.viewport,Ne===0&&(e.setRenderTargetTextures(b,wt.colorTexture,f.ignoreDepthValues?void 0:wt.depthStencilTexture),e.setRenderTarget(b))}let Qe=w[Ne];Qe===void 0&&(Qe=new Tn,Qe.layers.enable(Ne),Qe.viewport=new xt,w[Ne]=Qe),Qe.matrix.fromArray($e.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray($e.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(yt.x,yt.y,yt.width,yt.height),Ne===0&&(S.matrix.copy(Qe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ce===!0&&S.cameras.push(Qe)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ne=d.getDepthInformation(ye[0]);Ne&&Ne.isValid&&Ne.texture&&_.init(e,Ne,s.renderState)}}for(let ye=0;ye<x.length;ye++){const ce=v[ye],Ae=x[ye];ce!==null&&Ae!==void 0&&Ae.update(ce,ie,l||a)}xe&&xe(X,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Ze=new Yf;Ze.setAnimationLoop(Ue),this.setAnimationLoop=function(X){xe=X},this.dispose=function(){}}}const $i=new jn,wv=new ft;function Cv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Xf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&u(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,b,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),x=b.envMap,v=b.envMapRotation;x&&(m.envMap.value=x,$i.copy(v),$i.x*=-1,$i.y*=-1,$i.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(wv.makeRotationFromEuler($i)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Av(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,x){const v=x.program;n.uniformBlockBinding(b,v)}function l(b,x){let v=s[b.id];v===void 0&&(g(b),v=h(b),s[b.id]=v,b.addEventListener("dispose",m));const R=x.program;n.updateUBOMapping(b,R);const M=e.render.frame;r[b.id]!==M&&(f(b),r[b.id]=M)}function h(b){const x=d();b.__bindingPointIndex=x;const v=i.createBuffer(),R=b.__size,M=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=s[b.id],v=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let M=0,C=v.length;M<C;M++){const P=Array.isArray(v[M])?v[M]:[v[M]];for(let w=0,S=P.length;w<S;w++){const k=P[w];if(u(k,M,w,R)===!0){const F=k.__offset,N=Array.isArray(k.value)?k.value:[k.value];let j=0;for(let q=0;q<N.length;q++){const $=N[q],ee=_($);typeof $=="number"||typeof $=="boolean"?(k.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,F+j,k.__data)):$.isMatrix3?(k.__data[0]=$.elements[0],k.__data[1]=$.elements[1],k.__data[2]=$.elements[2],k.__data[3]=0,k.__data[4]=$.elements[3],k.__data[5]=$.elements[4],k.__data[6]=$.elements[5],k.__data[7]=0,k.__data[8]=$.elements[6],k.__data[9]=$.elements[7],k.__data[10]=$.elements[8],k.__data[11]=0):($.toArray(k.__data,j),j+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(b,x,v,R){const M=b.value,C=x+"_"+v;if(R[C]===void 0)return typeof M=="number"||typeof M=="boolean"?R[C]=M:R[C]=M.clone(),!0;{const P=R[C];if(typeof M=="number"||typeof M=="boolean"){if(P!==M)return R[C]=M,!0}else if(P.equals(M)===!1)return P.copy(M),!0}return!1}function g(b){const x=b.uniforms;let v=0;const R=16;for(let C=0,P=x.length;C<P;C++){const w=Array.isArray(x[C])?x[C]:[x[C]];for(let S=0,k=w.length;S<k;S++){const F=w[S],N=Array.isArray(F.value)?F.value:[F.value];for(let j=0,q=N.length;j<q;j++){const $=N[j],ee=_($),I=v%R,K=I%ee.boundary,ae=I+K;v+=K,ae!==0&&R-ae<ee.storage&&(v+=R-ae),F.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=ee.storage}}}const M=v%R;return M>0&&(v+=R-M),b.__size=v,b.__cache={},this}function _(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Rv{constructor(e={}){const{canvas:t=gp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=Ii,this.toneMappingExposure=1;const v=this;let R=!1,M=0,C=0,P=null,w=-1,S=null;const k=new xt,F=new xt;let N=null;const j=new ke(0);let q=0,$=t.width,ee=t.height,I=1,K=null,ae=null;const xe=new xt(0,0,$,ee),Ue=new xt(0,0,$,ee);let Ze=!1;const X=new cl;let ie=!1,ye=!1;const ce=new ft,Ae=new ft,Ne=new D,$e=new xt,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function wt(){return P===null?I:1}let B=n;function bn(T,O){return t.getContext(T,O)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qc}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",de,!1),B===null){const O="webgl2";if(B=bn(O,T),B===null)throw bn(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ye,Ke,Re,mt,we,A,E,H,Z,te,J,Ee,fe,me,et,se,ge,Pe,Ie,_e,Je,Ve,ut,U;function he(){Ye=new Lg(B),Ye.init(),Ve=new xv(B,Ye),Ke=new Ag(B,Ye,e,Ve),Re=new gv(B,Ye),Ke.reverseDepthBuffer&&f&&Re.buffers.depth.setReversed(!0),mt=new Fg(B),we=new tv,A=new vv(B,Ye,Re,we,Ke,Ve,mt),E=new Pg(v),H=new Ig(v),Z=new Wp(B),ut=new wg(B,Z),te=new Ug(B,Z,mt,ut),J=new zg(B,te,Z,mt),Ie=new Og(B,Ke,A),se=new Rg(we),Ee=new ev(v,E,H,Ye,Ke,ut,se),fe=new Cv(v,we),me=new iv,et=new lv(Ye),Pe=new Tg(v,E,H,Re,J,u,c),ge=new pv(v,J,Ke),U=new Av(B,mt,Ke,Re),_e=new Cg(B,Ye,mt),Je=new Ng(B,Ye,mt),mt.programs=Ee.programs,v.capabilities=Ke,v.extensions=Ye,v.properties=we,v.renderLists=me,v.shadowMap=ge,v.state=Re,v.info=mt}he();const W=new Tv(v,B);this.xr=W,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=Ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(T){T!==void 0&&(I=T,this.setSize($,ee,!1))},this.getSize=function(T){return T.set($,ee)},this.setSize=function(T,O,V=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,ee=O,t.width=Math.floor(T*I),t.height=Math.floor(O*I),V===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set($*I,ee*I).floor()},this.setDrawingBufferSize=function(T,O,V){$=T,ee=O,I=V,t.width=Math.floor(T*V),t.height=Math.floor(O*V),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(k)},this.getViewport=function(T){return T.copy(xe)},this.setViewport=function(T,O,V,G){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,O,V,G),Re.viewport(k.copy(xe).multiplyScalar(I).round())},this.getScissor=function(T){return T.copy(Ue)},this.setScissor=function(T,O,V,G){T.isVector4?Ue.set(T.x,T.y,T.z,T.w):Ue.set(T,O,V,G),Re.scissor(F.copy(Ue).multiplyScalar(I).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(T){Re.setScissorTest(Ze=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){ae=T},this.getClearColor=function(T){return T.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(T=!0,O=!0,V=!0){let G=0;if(T){let z=!1;if(P!==null){const re=P.texture.format;z=re===ol||re===al||re===rl}if(z){const re=P.texture.type,ue=re===pi||re===os||re===Mr||re===Gs||re===nl||re===il,be=Pe.getClearColor(),Me=Pe.getClearAlpha(),Fe=be.r,Be=be.g,Se=be.b;ue?(g[0]=Fe,g[1]=Be,g[2]=Se,g[3]=Me,B.clearBufferuiv(B.COLOR,0,g)):(_[0]=Fe,_[1]=Be,_[2]=Se,_[3]=Me,B.clearBufferiv(B.COLOR,0,_))}else G|=B.COLOR_BUFFER_BIT}O&&(G|=B.DEPTH_BUFFER_BIT),V&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),me.dispose(),et.dispose(),we.dispose(),E.dispose(),H.dispose(),J.dispose(),ut.dispose(),U.dispose(),Ee.dispose(),W.dispose(),W.removeEventListener("sessionstart",kl),W.removeEventListener("sessionend",Dl),zi.stop()};function Q(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=mt.autoReset,O=ge.enabled,V=ge.autoUpdate,G=ge.needsUpdate,z=ge.type;he(),mt.autoReset=T,ge.enabled=O,ge.autoUpdate=V,ge.needsUpdate=G,ge.type=z}function de(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ze(T){const O=T.target;O.removeEventListener("dispose",ze),bt(O)}function bt(T){Gt(T),we.remove(T)}function Gt(T){const O=we.get(T).programs;O!==void 0&&(O.forEach(function(V){Ee.releaseProgram(V)}),T.isShaderMaterial&&Ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,V,G,z,re){O===null&&(O=yt);const ue=z.isMesh&&z.matrixWorld.determinant()<0,be=mu(T,O,V,G,z);Re.setMaterial(G,ue);let Me=V.index,Fe=1;if(G.wireframe===!0){if(Me=te.getWireframeAttribute(V),Me===void 0)return;Fe=2}const Be=V.drawRange,Se=V.attributes.position;let nt=Be.start*Fe,pt=(Be.start+Be.count)*Fe;re!==null&&(nt=Math.max(nt,re.start*Fe),pt=Math.min(pt,(re.start+re.count)*Fe)),Me!==null?(nt=Math.max(nt,0),pt=Math.min(pt,Me.count)):Se!=null&&(nt=Math.max(nt,0),pt=Math.min(pt,Se.count));const gt=pt-nt;if(gt<0||gt===1/0)return;ut.setup(z,G,be,V,Me);let an,rt=_e;if(Me!==null&&(an=Z.get(Me),rt=Je,rt.setIndex(an)),z.isMesh)G.wireframe===!0?(Re.setLineWidth(G.wireframeLinewidth*wt()),rt.setMode(B.LINES)):rt.setMode(B.TRIANGLES);else if(z.isLine){let Te=G.linewidth;Te===void 0&&(Te=1),Re.setLineWidth(Te*wt()),z.isLineSegments?rt.setMode(B.LINES):z.isLineLoop?rt.setMode(B.LINE_LOOP):rt.setMode(B.LINE_STRIP)}else z.isPoints?rt.setMode(B.POINTS):z.isSprite&&rt.setMode(B.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)rt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))rt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Te=z._multiDrawStarts,Yn=z._multiDrawCounts,at=z._multiDrawCount,Rn=Me?Z.get(Me).bytesPerElement:1,ds=we.get(G).currentProgram.getUniforms();for(let dn=0;dn<at;dn++)ds.setValue(B,"_gl_DrawID",dn),rt.render(Te[dn]/Rn,Yn[dn])}else if(z.isInstancedMesh)rt.renderInstances(nt,gt,z.count);else if(V.isInstancedBufferGeometry){const Te=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Yn=Math.min(V.instanceCount,Te);rt.renderInstances(nt,gt,Yn)}else rt.render(nt,gt)};function ot(T,O,V){T.transparent===!0&&T.side===_n&&T.forceSinglePass===!1?(T.side=nn,T.needsUpdate=!0,Dr(T,O,V),T.side=Li,T.needsUpdate=!0,Dr(T,O,V),T.side=_n):Dr(T,O,V)}this.compile=function(T,O,V=null){V===null&&(V=T),p=et.get(V),p.init(O),x.push(p),V.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==V&&T.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const G=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const re=z.material;if(re)if(Array.isArray(re))for(let ue=0;ue<re.length;ue++){const be=re[ue];ot(be,V,z),G.add(be)}else ot(re,V,z),G.add(re)}),x.pop(),p=null,G},this.compileAsync=function(T,O,V=null){const G=this.compile(T,O,V);return new Promise(z=>{function re(){if(G.forEach(function(ue){we.get(ue).currentProgram.isReady()&&G.delete(ue)}),G.size===0){z(T);return}setTimeout(re,10)}Ye.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let An=null;function qn(T){An&&An(T)}function kl(){zi.stop()}function Dl(){zi.start()}const zi=new Yf;zi.setAnimationLoop(qn),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(T){An=T,W.setAnimationLoop(T),T===null?zi.stop():zi.start()},W.addEventListener("sessionstart",kl),W.addEventListener("sessionend",Dl),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(O),O=W.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,O,P),p=et.get(T,x.length),p.init(O),x.push(p),Ae.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),X.setFromProjectionMatrix(Ae),ye=this.localClippingEnabled,ie=se.init(this.clippingPlanes,ye),m=me.get(T,b.length),m.init(),b.push(m),W.enabled===!0&&W.isPresenting===!0){const re=v.xr.getDepthSensingMesh();re!==null&&Ya(re,O,-1/0,v.sortObjects)}Ya(T,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(K,ae),Qe=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Qe&&Pe.addToRenderList(m,T),this.info.render.frame++,ie===!0&&se.beginShadows();const V=p.state.shadowsArray;ge.render(V,T,O),ie===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,z=m.transmissive;if(p.setupLights(),O.isArrayCamera){const re=O.cameras;if(z.length>0)for(let ue=0,be=re.length;ue<be;ue++){const Me=re[ue];Ll(G,z,T,Me)}Qe&&Pe.render(T);for(let ue=0,be=re.length;ue<be;ue++){const Me=re[ue];Il(m,T,Me,Me.viewport)}}else z.length>0&&Ll(G,z,T,O),Qe&&Pe.render(T),Il(m,T,O);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(v,T,O),ut.resetDefaultState(),w=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],ie===!0&&se.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ya(T,O,V,G){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){G&&$e.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ae);const ue=J.update(T),be=T.material;be.visible&&m.push(T,ue,be,V,$e.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){const ue=J.update(T),be=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),$e.copy(T.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),$e.copy(ue.boundingSphere.center)),$e.applyMatrix4(T.matrixWorld).applyMatrix4(Ae)),Array.isArray(be)){const Me=ue.groups;for(let Fe=0,Be=Me.length;Fe<Be;Fe++){const Se=Me[Fe],nt=be[Se.materialIndex];nt&&nt.visible&&m.push(T,ue,nt,V,$e.z,Se)}}else be.visible&&m.push(T,ue,be,V,$e.z,null)}}const re=T.children;for(let ue=0,be=re.length;ue<be;ue++)Ya(re[ue],O,V,G)}function Il(T,O,V,G){const z=T.opaque,re=T.transmissive,ue=T.transparent;p.setupLightsView(V),ie===!0&&se.setGlobalState(v.clippingPlanes,V),G&&Re.viewport(k.copy(G)),z.length>0&&kr(z,O,V),re.length>0&&kr(re,O,V),ue.length>0&&kr(ue,O,V),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Ll(T,O,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Ui(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Cr:pi,minFilter:ts,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const re=p.state.transmissionRenderTarget[G.id],ue=G.viewport||k;re.setSize(ue.z,ue.w);const be=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(j),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),Qe&&Pe.render(V);const Me=v.toneMapping;v.toneMapping=Ii;const Fe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),ie===!0&&se.setGlobalState(v.clippingPlanes,G),kr(T,V,G),A.updateMultisampleRenderTarget(re),A.updateRenderTargetMipmap(re),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Se=0,nt=O.length;Se<nt;Se++){const pt=O[Se],gt=pt.object,an=pt.geometry,rt=pt.material,Te=pt.group;if(rt.side===_n&&gt.layers.test(G.layers)){const Yn=rt.side;rt.side=nn,rt.needsUpdate=!0,Ul(gt,V,G,an,rt,Te),rt.side=Yn,rt.needsUpdate=!0,Be=!0}}Be===!0&&(A.updateMultisampleRenderTarget(re),A.updateRenderTargetMipmap(re))}v.setRenderTarget(be),v.setClearColor(j,q),Fe!==void 0&&(G.viewport=Fe),v.toneMapping=Me}function kr(T,O,V){const G=O.isScene===!0?O.overrideMaterial:null;for(let z=0,re=T.length;z<re;z++){const ue=T[z],be=ue.object,Me=ue.geometry,Fe=G===null?ue.material:G,Be=ue.group;be.layers.test(V.layers)&&Ul(be,O,V,Me,Fe,Be)}}function Ul(T,O,V,G,z,re){T.onBeforeRender(v,O,V,G,z,re),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(v,O,V,G,T,re),z.transparent===!0&&z.side===_n&&z.forceSinglePass===!1?(z.side=nn,z.needsUpdate=!0,v.renderBufferDirect(V,O,G,z,T,re),z.side=Li,z.needsUpdate=!0,v.renderBufferDirect(V,O,G,z,T,re),z.side=_n):v.renderBufferDirect(V,O,G,z,T,re),T.onAfterRender(v,O,V,G,z,re)}function Dr(T,O,V){O.isScene!==!0&&(O=yt);const G=we.get(T),z=p.state.lights,re=p.state.shadowsArray,ue=z.state.version,be=Ee.getParameters(T,z.state,re,O,V),Me=Ee.getProgramCacheKey(be);let Fe=G.programs;G.environment=T.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(T.isMeshStandardMaterial?H:E).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Fe===void 0&&(T.addEventListener("dispose",ze),Fe=new Map,G.programs=Fe);let Be=Fe.get(Me);if(Be!==void 0){if(G.currentProgram===Be&&G.lightsStateVersion===ue)return Fl(T,be),Be}else be.uniforms=Ee.getUniforms(T),T.onBeforeCompile(be,v),Be=Ee.acquireProgram(be,Me),Fe.set(Me,Be),G.uniforms=be.uniforms;const Se=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Se.clippingPlanes=se.uniform),Fl(T,be),G.needsLights=_u(T),G.lightsStateVersion=ue,G.needsLights&&(Se.ambientLightColor.value=z.state.ambient,Se.lightProbe.value=z.state.probe,Se.directionalLights.value=z.state.directional,Se.directionalLightShadows.value=z.state.directionalShadow,Se.spotLights.value=z.state.spot,Se.spotLightShadows.value=z.state.spotShadow,Se.rectAreaLights.value=z.state.rectArea,Se.ltc_1.value=z.state.rectAreaLTC1,Se.ltc_2.value=z.state.rectAreaLTC2,Se.pointLights.value=z.state.point,Se.pointLightShadows.value=z.state.pointShadow,Se.hemisphereLights.value=z.state.hemi,Se.directionalShadowMap.value=z.state.directionalShadowMap,Se.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Se.spotShadowMap.value=z.state.spotShadowMap,Se.spotLightMatrix.value=z.state.spotLightMatrix,Se.spotLightMap.value=z.state.spotLightMap,Se.pointShadowMap.value=z.state.pointShadowMap,Se.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Be,G.uniformsList=null,Be}function Nl(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=ua.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Fl(T,O){const V=we.get(T);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function mu(T,O,V,G,z){O.isScene!==!0&&(O=yt),A.resetTextureUnits();const re=O.fog,ue=G.isMeshStandardMaterial?O.environment:null,be=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:js,Me=(G.isMeshStandardMaterial?H:E).get(G.envMap||ue),Fe=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Be=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Se=!!V.morphAttributes.position,nt=!!V.morphAttributes.normal,pt=!!V.morphAttributes.color;let gt=Ii;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(gt=v.toneMapping);const an=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,rt=an!==void 0?an.length:0,Te=we.get(G),Yn=p.state.lights;if(ie===!0&&(ye===!0||T!==S)){const Mn=T===S&&G.id===w;se.setState(G,T,Mn)}let at=!1;G.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Yn.state.version||Te.outputColorSpace!==be||z.isBatchedMesh&&Te.batching===!1||!z.isBatchedMesh&&Te.batching===!0||z.isBatchedMesh&&Te.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Te.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Te.instancing===!1||!z.isInstancedMesh&&Te.instancing===!0||z.isSkinnedMesh&&Te.skinning===!1||!z.isSkinnedMesh&&Te.skinning===!0||z.isInstancedMesh&&Te.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Te.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Te.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Te.instancingMorph===!1&&z.morphTexture!==null||Te.envMap!==Me||G.fog===!0&&Te.fog!==re||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==se.numPlanes||Te.numIntersection!==se.numIntersection)||Te.vertexAlphas!==Fe||Te.vertexTangents!==Be||Te.morphTargets!==Se||Te.morphNormals!==nt||Te.morphColors!==pt||Te.toneMapping!==gt||Te.morphTargetsCount!==rt)&&(at=!0):(at=!0,Te.__version=G.version);let Rn=Te.currentProgram;at===!0&&(Rn=Dr(G,O,z));let ds=!1,dn=!1,Zs=!1;const _t=Rn.getUniforms(),zn=Te.uniforms;if(Re.useProgram(Rn.program)&&(ds=!0,dn=!0,Zs=!0),G.id!==w&&(w=G.id,dn=!0),ds||S!==T){Re.buffers.depth.getReversed()?(ce.copy(T.projectionMatrix),vp(ce),xp(ce),_t.setValue(B,"projectionMatrix",ce)):_t.setValue(B,"projectionMatrix",T.projectionMatrix),_t.setValue(B,"viewMatrix",T.matrixWorldInverse);const gi=_t.map.cameraPosition;gi!==void 0&&gi.setValue(B,Ne.setFromMatrixPosition(T.matrixWorld)),Ke.logarithmicDepthBuffer&&_t.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&_t.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,dn=!0,Zs=!0)}if(z.isSkinnedMesh){_t.setOptional(B,z,"bindMatrix"),_t.setOptional(B,z,"bindMatrixInverse");const Mn=z.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),_t.setValue(B,"boneTexture",Mn.boneTexture,A))}z.isBatchedMesh&&(_t.setOptional(B,z,"batchingTexture"),_t.setValue(B,"batchingTexture",z._matricesTexture,A),_t.setOptional(B,z,"batchingIdTexture"),_t.setValue(B,"batchingIdTexture",z._indirectTexture,A),_t.setOptional(B,z,"batchingColorTexture"),z._colorsTexture!==null&&_t.setValue(B,"batchingColorTexture",z._colorsTexture,A));const Qs=V.morphAttributes;if((Qs.position!==void 0||Qs.normal!==void 0||Qs.color!==void 0)&&Ie.update(z,V,Rn),(dn||Te.receiveShadow!==z.receiveShadow)&&(Te.receiveShadow=z.receiveShadow,_t.setValue(B,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(zn.envMap.value=Me,zn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(zn.envMapIntensity.value=O.environmentIntensity),dn&&(_t.setValue(B,"toneMappingExposure",v.toneMappingExposure),Te.needsLights&&gu(zn,Zs),re&&G.fog===!0&&fe.refreshFogUniforms(zn,re),fe.refreshMaterialUniforms(zn,G,I,ee,p.state.transmissionRenderTarget[T.id]),ua.upload(B,Nl(Te),zn,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ua.upload(B,Nl(Te),zn,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&_t.setValue(B,"center",z.center),_t.setValue(B,"modelViewMatrix",z.modelViewMatrix),_t.setValue(B,"normalMatrix",z.normalMatrix),_t.setValue(B,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Mn=G.uniformsGroups;for(let gi=0,_i=Mn.length;gi<_i;gi++){const Ol=Mn[gi];U.update(Ol,Rn),U.bind(Ol,Rn)}}return Rn}function gu(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function _u(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,O,V){we.get(T.texture).__webglTexture=O,we.get(T.depthTexture).__webglTexture=V;const G=we.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,O){const V=we.get(T);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,V=0){P=T,M=O,C=V;let G=!0,z=null,re=!1,ue=!1;if(T){const Me=we.get(T);if(Me.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(B.FRAMEBUFFER,null),G=!1;else if(Me.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(Me.__hasExternalTextures)A.rebindTextures(T,we.get(T.texture).__webglTexture,we.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Se=T.depthTexture;if(Me.__boundDepthTexture!==Se){if(Se!==null&&we.has(Se)&&(T.width!==Se.image.width||T.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const Fe=T.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ue=!0);const Be=we.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[O])?z=Be[O][V]:z=Be[O],re=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?z=we.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?z=Be[V]:z=Be,k.copy(T.viewport),F.copy(T.scissor),N=T.scissorTest}else k.copy(xe).multiplyScalar(I).floor(),F.copy(Ue).multiplyScalar(I).floor(),N=Ze;if(Re.bindFramebuffer(B.FRAMEBUFFER,z)&&G&&Re.drawBuffers(T,z),Re.viewport(k),Re.scissor(F),Re.setScissorTest(N),re){const Me=we.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,V)}else if(ue){const Me=we.get(T.texture),Fe=O||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Me.__webglTexture,V||0,Fe)}w=-1},this.readRenderTargetPixels=function(T,O,V,G,z,re,ue){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=we.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(be=be[ue]),be){Re.bindFramebuffer(B.FRAMEBUFFER,be);try{const Me=T.texture,Fe=Me.format,Be=Me.type;if(!Ke.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-G&&V>=0&&V<=T.height-z&&B.readPixels(O,V,G,z,Ve.convert(Fe),Ve.convert(Be),re)}finally{const Me=P!==null?we.get(P).__webglFramebuffer:null;Re.bindFramebuffer(B.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(T,O,V,G,z,re,ue){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=we.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(be=be[ue]),be){const Me=T.texture,Fe=Me.format,Be=Me.type;if(!Ke.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=T.width-G&&V>=0&&V<=T.height-z){Re.bindFramebuffer(B.FRAMEBUFFER,be);const Se=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Se),B.bufferData(B.PIXEL_PACK_BUFFER,re.byteLength,B.STREAM_READ),B.readPixels(O,V,G,z,Ve.convert(Fe),Ve.convert(Be),0);const nt=P!==null?we.get(P).__webglFramebuffer:null;Re.bindFramebuffer(B.FRAMEBUFFER,nt);const pt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await _p(B,pt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Se),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,re),B.deleteBuffer(Se),B.deleteSync(pt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,O=null,V=0){T.isTexture!==!0&&(dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,T=arguments[1]);const G=Math.pow(2,-V),z=Math.floor(T.image.width*G),re=Math.floor(T.image.height*G),ue=O!==null?O.x:0,be=O!==null?O.y:0;A.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,V,0,0,ue,be,z,re),Re.unbindTexture()},this.copyTextureToTexture=function(T,O,V=null,G=null,z=0){T.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],O=arguments[2],z=arguments[3]||0,V=null);let re,ue,be,Me,Fe,Be,Se,nt,pt;const gt=T.isCompressedTexture?T.mipmaps[z]:T.image;V!==null?(re=V.max.x-V.min.x,ue=V.max.y-V.min.y,be=V.isBox3?V.max.z-V.min.z:1,Me=V.min.x,Fe=V.min.y,Be=V.isBox3?V.min.z:0):(re=gt.width,ue=gt.height,be=gt.depth||1,Me=0,Fe=0,Be=0),G!==null?(Se=G.x,nt=G.y,pt=G.z):(Se=0,nt=0,pt=0);const an=Ve.convert(O.format),rt=Ve.convert(O.type);let Te;O.isData3DTexture?(A.setTexture3D(O,0),Te=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(A.setTexture2DArray(O,0),Te=B.TEXTURE_2D_ARRAY):(A.setTexture2D(O,0),Te=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);const Yn=B.getParameter(B.UNPACK_ROW_LENGTH),at=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Rn=B.getParameter(B.UNPACK_SKIP_PIXELS),ds=B.getParameter(B.UNPACK_SKIP_ROWS),dn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,gt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Me),B.pixelStorei(B.UNPACK_SKIP_ROWS,Fe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Be);const Zs=T.isDataArrayTexture||T.isData3DTexture,_t=O.isDataArrayTexture||O.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const zn=we.get(T),Qs=we.get(O),Mn=we.get(zn.__renderTarget),gi=we.get(Qs.__renderTarget);Re.bindFramebuffer(B.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let _i=0;_i<be;_i++)Zs&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,we.get(T).__webglTexture,z,Be+_i),T.isDepthTexture?(_t&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,we.get(O).__webglTexture,z,pt+_i),B.blitFramebuffer(Me,Fe,re,ue,Se,nt,re,ue,B.DEPTH_BUFFER_BIT,B.NEAREST)):_t?B.copyTexSubImage3D(Te,z,Se,nt,pt+_i,Me,Fe,re,ue):B.copyTexSubImage2D(Te,z,Se,nt,pt+_i,Me,Fe,re,ue);Re.bindFramebuffer(B.READ_FRAMEBUFFER,null),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else _t?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Te,z,Se,nt,pt,re,ue,be,an,rt,gt.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(Te,z,Se,nt,pt,re,ue,be,an,gt.data):B.texSubImage3D(Te,z,Se,nt,pt,re,ue,be,an,rt,gt):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,z,Se,nt,re,ue,an,rt,gt.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,z,Se,nt,gt.width,gt.height,an,gt.data):B.texSubImage2D(B.TEXTURE_2D,z,Se,nt,re,ue,an,rt,gt);B.pixelStorei(B.UNPACK_ROW_LENGTH,Yn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,at),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Rn),B.pixelStorei(B.UNPACK_SKIP_ROWS,ds),B.pixelStorei(B.UNPACK_SKIP_IMAGES,dn),z===0&&O.generateMipmaps&&B.generateMipmap(Te),Re.unbindTexture()},this.copyTextureToTexture3D=function(T,O,V=null,G=null,z=0){return T.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,T=arguments[2],O=arguments[3],z=arguments[4]||0),dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,O,V,G,z)},this.initRenderTarget=function(T){we.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Re.unbindTexture()},this.resetState=function(){M=0,C=0,P=null,Re.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class fl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=n}clone(){return new fl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zh extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Pv extends Bt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=zt,h=zt,d,f){super(null,a,o,c,l,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bh extends fn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Cs=new ft,Hh=new ft,ia=[],Vh=new cs,kv=new ft,ar=new De,or=new Rr;class Dv extends De{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,kv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),Vh.copy(e.boundingBox).applyMatrix4(Cs),this.boundingBox.union(Vh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),or.copy(e.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(or)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),or.copy(this.boundingSphere),or.applyMatrix4(n),e.ray.intersectsSphere(or)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),Hh.multiplyMatrices(n,Cs),ar.matrixWorld=Hh,ar.raycast(e,ia);for(let a=0,o=ia.length;a<o;a++){const c=ia[a];c.instanceId=r,c.object=this,t.push(c)}ia.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Bh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pv(new Float32Array(s*this.count),s,this.count,sl,Wn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Iv extends Bt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dl extends rn{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new D,h=new Xe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const u=n+d/t*s;l.x=e*Math.cos(u),l.y=e*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(o,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class En extends rn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],u=[];let g=0;const _=[],m=n/2;let p=0;b(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(u,2));function b(){const v=new D,R=new D;let M=0;const C=(t-e)/n;for(let P=0;P<=r;P++){const w=[],S=P/r,k=S*(t-e)+e;for(let F=0;F<=s;F++){const N=F/s,j=N*c+o,q=Math.sin(j),$=Math.cos(j);R.x=k*q,R.y=-S*n+m,R.z=k*$,d.push(R.x,R.y,R.z),v.set(q,C,$).normalize(),f.push(v.x,v.y,v.z),u.push(N,1-S),w.push(g++)}_.push(w)}for(let P=0;P<s;P++)for(let w=0;w<r;w++){const S=_[w][P],k=_[w+1][P],F=_[w+1][P+1],N=_[w][P+1];(e>0||w!==0)&&(h.push(S,k,N),M+=3),(t>0||w!==r-1)&&(h.push(k,F,N),M+=3)}l.addGroup(p,M,0),p+=M}function x(v){const R=g,M=new Xe,C=new D;let P=0;const w=v===!0?e:t,S=v===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*S,0),f.push(0,S,0),u.push(.5,.5),g++;const k=g;for(let F=0;F<=s;F++){const j=F/s*c+o,q=Math.cos(j),$=Math.sin(j);C.x=w*$,C.y=m*S,C.z=w*q,d.push(C.x,C.y,C.z),f.push(0,S,0),M.x=q*.5+.5,M.y=$*.5*S+.5,u.push(M.x,M.y),g++}for(let F=0;F<s;F++){const N=R+F,j=k+F;v===!0?h.push(j,j+1,N):h.push(j+1,j,N),P+=3}l.addGroup(p,P,v===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ul extends En{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ul(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pl extends rn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const x=new D,v=new D,R=new D;for(let M=0;M<t.length;M+=3)u(t[M+0],x),u(t[M+1],v),u(t[M+2],R),c(x,v,R,b)}function c(b,x,v,R){const M=R+1,C=[];for(let P=0;P<=M;P++){C[P]=[];const w=b.clone().lerp(v,P/M),S=x.clone().lerp(v,P/M),k=M-P;for(let F=0;F<=k;F++)F===0&&P===M?C[P][F]=w:C[P][F]=w.clone().lerp(S,F/k)}for(let P=0;P<M;P++)for(let w=0;w<2*(M-P)-1;w++){const S=Math.floor(w/2);w%2===0?(f(C[P][S+1]),f(C[P+1][S]),f(C[P][S])):(f(C[P][S+1]),f(C[P+1][S+1]),f(C[P+1][S]))}}function l(b){const x=new D;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(b),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const b=new D;for(let x=0;x<r.length;x+=3){b.x=r[x+0],b.y=r[x+1],b.z=r[x+2];const v=m(b)/2/Math.PI+.5,R=p(b)/Math.PI+.5;a.push(v,1-R)}g(),d()}function d(){for(let b=0;b<a.length;b+=6){const x=a[b+0],v=a[b+2],R=a[b+4],M=Math.max(x,v,R),C=Math.min(x,v,R);M>.9&&C<.1&&(x<.2&&(a[b+0]+=1),v<.2&&(a[b+2]+=1),R<.2&&(a[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function u(b,x){const v=b*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function g(){const b=new D,x=new D,v=new D,R=new D,M=new Xe,C=new Xe,P=new Xe;for(let w=0,S=0;w<r.length;w+=9,S+=6){b.set(r[w+0],r[w+1],r[w+2]),x.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),M.set(a[S+0],a[S+1]),C.set(a[S+2],a[S+3]),P.set(a[S+4],a[S+5]),R.copy(b).add(x).add(v).divideScalar(3);const k=m(R);_(M,S+0,b,k),_(C,S+2,x,k),_(P,S+4,v,k)}}function _(b,x,v,R){R<0&&b.x===1&&(a[x]=b.x-1),v.x===0&&v.z===0&&(a[x]=R/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.vertices,e.indices,e.radius,e.details)}}class ns extends pl{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ns(e.radius,e.detail)}}class ml extends rn{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let d=e;const f=(t-e)/s,u=new D,g=new Xe;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;u.x=d*Math.cos(p),u.y=d*Math.sin(p),c.push(u.x,u.y,u.z),l.push(0,0,1),g.x=(u.x/t+1)/2,g.y=(u.y/t+1)/2,h.push(g.x,g.y)}d+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const b=p+m,x=b,v=b+n+1,R=b+n+2,M=b+1;o.push(x,v,M),o.push(v,R,M)}}this.setIndex(o),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ga extends rn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new D,f=new D,u=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const b=[],x=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let R=0;R<=t;R++){const M=R/t;d.x=-e*Math.cos(s+M*r)*Math.sin(a+x*o),d.y=e*Math.cos(a+x*o),d.z=e*Math.sin(s+M*r)*Math.sin(a+x*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(M+v,1-x),b.push(l++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const x=h[p][b+1],v=h[p][b],R=h[p+1][b],M=h[p+1][b+1];(p!==0||a>0)&&u.push(x,v,M),(p!==n-1||c<Math.PI)&&u.push(v,R,M)}this.setIndex(u),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wa extends rn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new D,d=new D,f=new D;for(let u=0;u<=n;u++)for(let g=0;g<=s;g++){const _=g/s*r,m=u/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=s;g++){const _=(s+1)*u+g-1,m=(s+1)*(u-1)+g-1,p=(s+1)*(u-1)+g,b=(s+1)*u+g;a.push(_,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ft extends Pr{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ff,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=el,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class td extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Lv extends td{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ro=new ft,Gh=new D,Wh=new D;class Uv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cl,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gh),Wh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wh),t.updateMatrixWorld(),Ro.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ro),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ro)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Nv extends Uv{constructor(){super(new ll(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fv extends td{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Nv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);const ct={fire:{name:"焔",color:"#ff7a3c",pal:["#1f0b10","#4a1118","#8c1d1c","#cc3a1a","#f2701f","#ffae35","#ffe27a","#fff8d6"]},water:{name:"潮",color:"#3cb0ff",pal:["#081830","#0e2e5a","#14508c","#1c76bc","#36a2e0","#78ccf4","#c4ecff","#ffffff"]},volt:{name:"雷",color:"#ffd23c",pal:["#24160a","#5e3a0c","#a8680f","#e8a218","#ffd23c","#fff08a","#fffbd8","#ffffff"]},frost:{name:"霜",color:"#9ae8ff",pal:["#0c1430","#162c5c","#1f4f94","#2f7fcc","#58b4ec","#9bdcff","#d8f4ff","#ffffff"]},star:{name:"星",color:"#ff9ad8",pal:["#2a0a22","#5a1648","#9a2c78","#d850a8","#ff82c8","#ffb8e0","#fff0f8","#ffffff"]},shadow:{name:"影",color:"#a070ff",pal:["#0a0614","#1c1030","#341c5a","#52288c","#7442c4","#9e70f0","#d4c0ff","#ffffff"]},phys:{name:"物理",color:"#e8e8e8",pal:["#141418","#2a2a33","#484a56","#6c6f7e","#9499a8","#bcc0cc","#e2e4ec","#ffffff"]}},jt=(i,e)=>[i,e].sort().join("+"),Ov={[jt("fire","water")]:{name:"蒸爆",kind:"aoe",v:1.4,r:3.5,dur:3,desc:"蒸気が爆ぜて周囲にダメージ＋移動速度低下",color:"#ffc89a"},[jt("fire","volt")]:{name:"雷火",kind:"chain",v:1.6,v2:4,r:6,desc:"炎雷が近くの敵へ連鎖する",color:"#ffb04a"},[jt("fire","frost")]:{name:"熱衝",kind:"amp",v:2.2,desc:"急激な温度差で一撃のダメージが2.2倍",color:"#ff9a6a"},[jt("fire","star")]:{name:"超新星",kind:"energy",v:1.8,v2:6,r:4,desc:"大爆発＋チーム全員の元素エネルギー回復",color:"#ffd0e8"},[jt("fire","shadow")]:{name:"黒炎",kind:"dot",v:.35,dur:6,desc:"消えない黒い炎で継続ダメージ",color:"#c070ff"},[jt("water","volt")]:{name:"感電",kind:"dot",v:.45,dur:4,r:4,desc:"濡れた敵の間を電流が走り続ける",color:"#9ae0ff"},[jt("water","frost")]:{name:"氷結",kind:"freeze",v:0,dur:3.5,desc:"敵を凍らせて動きを止める",color:"#c8f4ff"},[jt("water","star")]:{name:"潮汐",kind:"heal",v:.08,desc:"やさしい潮の光でチーム全員を回復",color:"#a0ffe0"},[jt("water","shadow")]:{name:"深淵",kind:"pull",v:.9,r:7,desc:"渦が周りの敵を一か所に吸い寄せる",color:"#5a6aff"},[jt("volt","frost")]:{name:"砕晶",kind:"resdown",v:.9,v2:.4,dur:10,r:3,desc:"氷の結晶が砕けて防御を40%下げる",color:"#e8f0ff"},[jt("volt","star")]:{name:"流星",kind:"aoe",v:2.4,r:4.5,desc:"空から星が落ちて大ダメージ",color:"#fff0a0"},[jt("volt","shadow")]:{name:"虚雷",kind:"resdown",v:.6,v2:.3,dur:8,desc:"敵の全元素耐性を30%下げる",color:"#d0a0ff"},[jt("frost","star")]:{name:"結晶",kind:"shield",v:.25,desc:"星の結晶がシールドになる",color:"#e0f8ff"},[jt("frost","shadow")]:{name:"凍影",kind:"slow",v:.5,dur:6,desc:"影が凍りつき、敵の攻撃力と速度が下がる",color:"#9ab0ff"},[jt("star","shadow")]:{name:"日蝕",kind:"buff",v:1.8,v2:.2,dur:10,desc:"一撃1.8倍＋会心率20%アップ（10秒）",color:"#ffe0ff"}},zv=(i,e)=>i===e?null:Ov[jt(i,e)],$h={fire:{name:"燃える意志",desc:"攻撃力+25%"},water:{name:"癒やしの潮",desc:"HP+25%、回復効果+15%"},volt:{name:"迸る雷光",desc:"元素エネルギー回復+30%"},frost:{name:"凍てつく心",desc:"会心率+15%"},star:{name:"星のめぐり",desc:"スキルのクールタイム-15%"},shadow:{name:"深い影",desc:"与えるダメージ+15%"}},ci=1/20,Xh=new Map;function mn(i){let e=Xh.get(i);return e||(e=i instanceof HTMLCanvasElement?new Iv(i):new Bt(i),e.magFilter=zt,e.minFilter=zt,e.generateMipmaps=!1,e.colorSpace=Yt,e.needsUpdate=!0,Xh.set(i,e)),e}const Bv=new dl(.5,12).rotateX(-Math.PI/2),Hv=new Zt({color:0,transparent:!0,opacity:.28,depthWrite:!1});class li{constructor(e,t,n,s=1,r=n-2){this.atlas=e,this.fw=t,this.fh=n,this.scale=s,this.root=new qt,this.flash=0,this.W=e.width,this.H=e.height,this.tex=mn(e).clone(),this.tex.needsUpdate=!0,this.tex.repeat.set(t/this.W,n/this.H),this.mat=new Zt({map:this.tex,alphaTest:.5,side:_n});const a=new vn(t*ci*s,n*ci*s);a.translate(0,(n/2-(n-r))*ci*s,0),this.mesh=new De(a,this.mat),this.root.add(this.mesh),this.shadow=new De(Bv,Hv),this.shadow.scale.setScalar(s*1.1),this.shadow.renderOrder=1}setFrame(e,t,n=!1){const s=this.fw/this.W,r=this.fh/this.H;this.tex.repeat.set(n?-s:s,r),this.tex.offset.set(n?(e+1)*s:e*s,1-(t+1)*r)}face(e,t){this.mesh.rotation.y=e,this.flash>0?this.mat.color.setRGB(3,3,3):this.mat.color.copy(t)}dispose(){this.mesh.geometry.dispose(),this.mat.dispose(),this.tex.dispose(),this.root.removeFromParent(),this.shadow.removeFromParent()}}const gl={};async function Vv(i="./fx/"){const e=await(await fetch(i+"index.json")).json();await Promise.all(Object.keys(e).map(t=>new Promise(n=>{const s=gl[t]=e[t],r=new Image;r.onload=()=>{s.img=r;const a=new Bt(r);a.magFilter=a.minFilter=zt,a.generateMipmaps=!1,a.colorSpace=Yt,a.needsUpdate=!0,s.tex=a,s.rows=Math.ceil(s.frames/s.columns);const[o,c]=s.frameSize,[l,h]=s.pivot,d=new vn(o*ci,c*ci);d.translate((o/2-l)*ci,(h-c/2)*ci,0),s.geo=d,n()},r.onerror=()=>n(),r.src=i+t+".png"})))}const Po=new Map;function _l(i){if(!i)return null;if(Po.has(i))return Po.get(i);const t=(ct[i]?.pal||(i==="gold"?["#2a1c08","#5a3e10","#9a6c18","#d8a428","#ffd84a","#fff09a","#fffbe6","#ffffff"]:i==="purple"?["#140a26","#2b1252","#481c88","#6b2cc0","#9a48ec","#c684ff","#ecc8ff","#ffffff"]:i==="blue"?["#081830","#0e2e5a","#14508c","#1c76bc","#36a2e0","#78ccf4","#c4ecff","#ffffff"]:i==="smoke"?["#100c18","#201a2c","#342c44","#4c445e","#6a6280","#8c84a0","#b8b0c8","#e8e4f0"]:ct.phys.pal)).map(n=>{const s=new ke(n);return new D(s.r,s.g,s.b)});return Po.set(i,t),t}const Gv="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",Wv=`uniform sampler2D map; uniform vec4 rect; uniform vec3 pal[8]; uniform float usePal; uniform float opacity; varying vec2 vUv;
void main(){ vec4 t = texture2D(map, vUv * rect.zw + rect.xy); if (t.a < 0.03) discard; vec3 col = t.rgb;
  if (usePal > 0.5) { float l = dot(t.rgb, vec3(0.299,0.587,0.114)); int i = int(clamp(floor(l * 7.99), 0.0, 7.0)); col = pal[i]; }
  gl_FragColor = vec4(col, t.a * opacity); }`;class $v{constructor(){this.t=0,this.alive=!1,this.o={},this.mat=new On({uniforms:{map:{value:null},rect:{value:new xt},pal:{value:_l("phys")},usePal:{value:1},opacity:{value:1}},vertexShader:Gv,fragmentShader:Wv,transparent:!0,depthWrite:!1,side:_n}),this.mesh=new De(new vn(1,1),this.mat),this.mesh.renderOrder=5,this.mesh.frustumCulled=!1,this.mesh.visible=!1}kill(){this.alive=!1,this.mesh.visible=!1}}class Xv{constructor(e=60){this.pool=[],this.group=new qt;for(let t=0;t<e;t++){const n=new $v;this.pool.push(n),this.group.add(n.mesh)}}spawn(e,t,n={}){const s=gl[e];if(!s?.tex)return null;let r=this.pool.find(o=>!o.alive);r||(r=this.pool.reduce((o,c)=>o.t>c.t?o:c)),r.alive=!0,r.t=0,r.sheet=s,r.o=n,r.mesh.visible=!0,r.mesh.geometry=s.geo,r.mesh.position.copy(t),r.mesh.scale.set(n.flip?-(n.scale||1):n.scale||1,n.scale||1,1);const a=_l(n.el===void 0?"phys":n.el);return r.mat.uniforms.map.value=s.tex,r.mat.uniforms.usePal.value=a?1:0,a&&(r.mat.uniforms.pal.value=a),r.mat.uniforms.opacity.value=1,r.mat.blending=n.add?Go:rs,this.frame(r,0),r}frame(e,t){const n=e.sheet,s=t%n.columns,r=Math.floor(t/n.columns),a=n.columns,o=n.rows;e.mat.uniforms.rect.value.set(s/a,1-(r+1)/o,1/a,1/o)}update(e,t){for(const n of this.pool){if(!n.alive)continue;n.t+=e*(n.o.speed||1);const s=n.sheet;let r=Math.floor(n.t*s.fps);if(n.o.loop||s.loop){if(r%=s.frames,n.o.life!==void 0&&n.t>n.o.life){n.kill();continue}}else if(r>=s.frames){n.kill();continue}this.frame(n,r),n.o.follow&&n.mesh.position.copy(n.o.follow.position),n.o.vel&&n.mesh.position.addScaledVector(n.o.vel,e),n.mesh.rotation.y=n.o.yaw!==void 0?n.o.yaw:t}}}const xn=(i,e=0,t=1)=>i<e?e:i>t?t:i,Qt=(i,e,t)=>i+(e-i)*t,vr=(i,e,t)=>{const n=xn((t-i)/(e-i));return n*n*(3-2*n)},At=(i,e,t,n)=>(i-t)**2+(e-n)**2;function hi(i,e,t=0){let n=i*374761393+e*668265263+t*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function jv(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class ui{constructor(e){this.f=jv(e)}next(){return this.f()}range(e,t){return e+(t-e)*this.f()}int(e,t){return Math.floor(this.range(e,t+1))}pick(e){return e[Math.floor(this.f()*e.length)]}chance(e){return this.f()<e}}function nd(i,e,t=0){const n=Math.floor(i),s=Math.floor(e),r=i-n,a=e-s,o=r*r*(3-2*r),c=a*a*(3-2*a),l=hi(n,s,t),h=hi(n+1,s,t),d=hi(n,s+1,t),f=hi(n+1,s+1,t);return Qt(Qt(l,h,o),Qt(d,f,o),c)}function cr(i,e,t=0,n=4){let s=0,r=.5,a=1,o=0;for(let c=0;c<n;c++)s+=r*nd(i*a,e*a,t+c*17),o+=r,r*=.5,a*=2.03;return s/o}function jh(i,e,t=0,n=4){let s=0,r=.5,a=1,o=0;for(let c=0;c<n;c++){const l=1-Math.abs(nd(i*a,e*a,t+c*31)*2-1);s+=r*l*l,o+=r,r*=.5,a*=2.1}return s/o}const vt=i=>Math.round(i).toLocaleString("ja-JP"),Yi=i=>(i*100).toFixed(1)+"%",id={low:{h:300,grass:0,near:1,fog:230,tilt:!1},mid:{h:380,grass:40,near:2,fog:300,tilt:!0},high:{h:470,grass:80,near:2,fog:360,tilt:!0}};class qv{constructor(e){this.scene=new zh,this.rt=null,this.postScene=new zh,this.postCam=new ll(-1,1,1,-1,0,1),this.q="mid",this.auto=!0,this.tilt=!0,this.time=8,this.w=1,this.h=1,this.pr=1,this.frameMs=16,this.acc=[],this.lastQChange=0,this.tint=new ke(1,1,1),this.renderer=new Rv({canvas:e,antialias:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.outputColorSpace=Yt,this.camera=new Tn(42,1,.3,900),this.fog=new fl(12575999,80,300),this.scene.fog=this.fog,this.hemi=new Lv(14676223,6969920,1.4),this.scene.add(this.hemi),this.sun=new Fv(16773848,1.6),this.sun.position.set(.5,1,.3),this.scene.add(this.sun),this.skyMat=new On({uniforms:{top:{value:new ke(4889320)},bot:{value:new ke(13627135)},stars:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top; uniform vec3 bot; uniform float stars; varying vec3 vP;
        float h(vec3 p){ return fract(sin(dot(floor(p*180.0), vec3(12.9898,78.233,37.719)))*43758.5453); }
        void main(){ vec3 d = normalize(vP); float t = clamp(d.y*1.6+0.15,0.0,1.0); vec3 c = mix(bot, top, t);
          if (stars > 0.0 && d.y > 0.05) { float s = step(0.997, h(d)); c += vec3(s*stars); }
          gl_FragColor = vec4(c,1.0); }`,side:nn,depthWrite:!1,fog:!1}),this.sky=new De(new Ga(800,16,10),this.skyMat),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.scene.add(this.sky);const t=new On({uniforms:{tDiffuse:{value:null},res:{value:new Xe(1,1)},tilt:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy,0.0,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 res; uniform float tilt; varying vec2 vUv;
        void main(){
          vec4 c = texture2D(tDiffuse, vUv);
          float b = tilt * smoothstep(0.18, 0.5, abs(vUv.y - 0.45)) ;
          if (b > 0.01) { vec2 px = 1.0/res * (1.0 + b*1.5); vec4 s = c*0.2;
            s += texture2D(tDiffuse, vUv + vec2(px.x,0.0))*0.2; s += texture2D(tDiffuse, vUv - vec2(px.x,0.0))*0.2;
            s += texture2D(tDiffuse, vUv + vec2(0.0,px.y))*0.2; s += texture2D(tDiffuse, vUv - vec2(0.0,px.y))*0.2; c = mix(c, s, b); }
          vec2 q = vUv - 0.5; float v = 1.0 - dot(q,q)*0.55; c.rgb *= v;
          float l = dot(c.rgb, vec3(0.299,0.587,0.114)); c.rgb = mix(vec3(l), c.rgb, 1.12);
          gl_FragColor = vec4(c.rgb, 1.0); }`,depthTest:!1,depthWrite:!1});this.post=new De(new vn(2,2),t),this.post.frustumCulled=!1,this.postScene.add(this.post),addEventListener("resize",()=>this.resize()),this.resize()}setQuality(e){this.auto=e==="auto",e!=="auto"&&(this.q=e),this.resize()}resize(){const e=innerWidth,t=innerHeight,n=id[this.q];this.pr=xn(n.h/t,.25,Math.min(devicePixelRatio,1.5)),this.w=Math.max(1,Math.round(e*this.pr)),this.h=Math.max(1,Math.round(t*this.pr)),this.renderer.setPixelRatio(1),this.renderer.setSize(this.w,this.h,!1);const s=this.renderer.domElement;if(s.style.width=e+"px",s.style.height=t+"px",this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.rt?.dispose(),this.rt=null,this.tilt&&n.tilt){this.rt=new Ui(this.w,this.h,{minFilter:zt,magFilter:zt,depthBuffer:!0}),this.rt.texture.colorSpace=Yt;const r=this.post.material;r.uniforms.tDiffuse.value=this.rt.texture,r.uniforms.res.value.set(this.w,this.h)}this.fog.far=n.fog,this.fog.near=n.fog*.35,this.camera.far=n.fog+60,this.camera.updateProjectionMatrix()}setDayTime(e){this.time=e;const t=xn(Math.sin((e-6)/24*Math.PI*2)*1.4+.35,0,1),n=xn(1-Math.abs(e-18)/1.8,0,1)+xn(1-Math.abs(e-6)/1.8,0,1),s=new ke(658470).lerp(new ke(4889320),t),r=new ke(1710144).lerp(new ke(13627135),t).lerp(new ke(16752752),n*.6);this.skyMat.uniforms.top.value.copy(s),this.skyMat.uniforms.bot.value.copy(r),this.skyMat.uniforms.stars.value=1-t,this.fog.color.copy(r),this.hemi.intensity=Qt(.55,1.45,t),this.sun.intensity=Qt(.15,1.6,t),this.sun.color.set(16773848).lerp(new ke(16751194),n*.7),t<.2&&this.sun.color.lerp(new ke(8030975),.6);const a=(e-6)/24*Math.PI*2;this.sun.position.set(Math.cos(a)*.6,Math.max(.25,Math.sin(a)),.4),this.tint.setRGB(Qt(.42,1,t),Qt(.45,1,t),Qt(.7,1,t)).lerp(new ke(1,.8,.65),n*.4)}render(){this.sky.position.copy(this.camera.position),this.rt?(this.renderer.setRenderTarget(this.rt),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.post.material.uniforms.tilt.value=1,this.renderer.render(this.postScene,this.postCam)):(this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera))}sample(e,t){if(this.frameMs=this.frameMs*.95+e*.05,!this.auto||t-this.lastQChange<4e3)return;const n=["low","mid","high"],s=n.indexOf(this.q);this.frameMs>24&&s>0?(this.q=n[s-1],this.lastQChange=t,this.resize()):this.frameMs<13&&s<2&&t-this.lastQChange>15e3&&(this.q=n[s+1],this.lastQChange=t,this.resize())}}const Le=480,Nn=2,xr=Le*2/Nn+1,Ln=0,sa={plains:"翠風の野",canyon:"紅砂の谷",peaks:"霜嶺",spire:"影の高原"},qh={plains:[0,140,230],canyon:[290,-40,170],peaks:[-250,-210,200],spire:[200,-262,85]},vl=[];function Yv(i,e,t,n){vl.push({x:i,z:e,r:t,h:n})}function $a(i,e){const t={};let n=0;for(const s in qh){const[r,a,o]=qh[s],c=Math.exp(-((i-r)**2+(e-a)**2)/(o*o));t[s]=c,n+=c}n<1e-6&&(t.plains=1,n=1);for(const s in t)t[s]/=n;return t}function xl(i,e){const t=$a(i,e);let n="plains",s=-1;for(const r in t)t[r]>s&&(s=t[r],n=r);return n}function sd(i,e){const t=Math.hypot(i,e*1.05)/455+(cr(i*.004+9,e*.004-3,7,3)-.5)*.42,n=vr(1,.8,t),s=$a(i,e),r=cr(i*.011,e*.011,1,4),a=3+r*18+Math.pow(cr(i*.004,e*.004,2,3),2)*20-4,o=cr(i*.007+40,e*.007,3,4),c=Math.floor(o*6)/6,l=o*6%1,h=6+(c+Math.pow(l,12)/6)*62-jh(i*.01,e*.01,4,2)*6,d=14+Math.pow(jh(i*.0065,e*.0065,5,5),1.4)*110+r*8,f=34+r*10+(cr(i*.02,e*.02,6,2)-.5)*6;let u=a*s.plains+h*s.canyon+d*s.peaks+f*s.spire;u=Qt(-14,u,n),n<.98&&(u=Math.min(u,Qt(-14,2.5,n)+(u-2.5)*Math.pow(n,3)));for(const g of vl){const _=Math.hypot(i-g.x,e-g.z);_<g.r*1.8&&(u=Qt(g.h,u,vr(g.r,g.r*1.8,_)))}return u}const kc=new Float32Array(xr*xr).fill(NaN);function Kv(){kc.fill(NaN)}function pr(i,e){i=xn(i,0,xr-1)|0,e=xn(e,0,xr-1)|0;const t=e*xr+i;let n=kc[t];return n!==n&&(n=sd(i*Nn-Le,e*Nn-Le),kc[t]=n),n}function st(i,e){const t=(i+Le)/Nn,n=(e+Le)/Nn,s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r,c=pr(s,r),l=pr(s+1,r),h=pr(s,r+1),d=pr(s+1,r+1);return a+o<=1?c+(l-c)*a+(h-c)*o:d+(h-d)*(1-a)+(l-d)*(1-o)}function lr(i,e){return pr(i,e)}function ks(i,e){const t=Nn,n=st(i+t,e)-st(i-t,e),s=st(i,e+t)-st(i,e-t),r=-n,a=2*t,o=-s,c=Math.hypot(r,a,o);return[r/c,a/c,o/c]}const yl=(i,e)=>1-ks(i,e)[1],kt=i=>[parseInt(i.slice(1,3),16)/255,parseInt(i.slice(3,5),16)/255,parseInt(i.slice(5,7),16)/255],In={grass:[kt("#6cb44a"),kt("#58a040"),kt("#7ec456")],canyon:[kt("#d08a4a"),kt("#c87440"),kt("#e0a060")],peaks:[kt("#8aa070"),kt("#7a9060"),kt("#98a880")],spire:[kt("#5a4a78"),kt("#4c3e68"),kt("#6a5888")],rockP:kt("#8a8478"),rockC:kt("#a85a34"),rockK:kt("#6e7080"),rockS:kt("#3e3450"),sand:kt("#e8d8a0"),snow:kt("#eef4ff"),wet:kt("#b8a878")};function rd(i,e,t,n,s){const r=$a(i,e),a=hi(Math.floor(i/2),Math.floor(e/2),3),o=a<.33?0:a<.66?1:2,c=u=>[0,1,2].map(g=>u.plains[g]*r.plains+u.canyon[g]*r.canyon+u.peaks[g]*r.peaks+u.spire[g]*r.spire);let l=c({plains:In.grass[o],canyon:In.canyon[o],peaks:In.peaks[o],spire:In.spire[o]});const h=c({plains:In.rockP,canyon:In.rockC,peaks:In.rockK,spire:In.rockS}),d=vr(.22,.32,n);l=l.map((u,g)=>Qt(u,h[g]*(.9+a*.2),d));const f=vr(58,66,t+a*6)*r.peaks*(1-d*.6);if(l=l.map((u,g)=>Qt(u,In.snow[g],xn(f*1.4))),t<2.2){const u=vr(2.2,1.2,t);l=l.map((g,_)=>Qt(g,In.sand[_],u))}t<0&&(l=l.map((u,g)=>Qt(u,In.wet[g],.5))),s[0]=l[0],s[1]=l[1],s[2]=l[2]}const Pt=[],en=new Map;let is={x:0,z:380};const ko=[{id:"ruko",name:"ルコの町",x:20,z:236,r:36,houses:9},{id:"akatsuchi",name:"アカツチ村",x:262,z:-10,r:24,houses:5},{id:"shimotsuki",name:"シモツキ村",x:-196,z:-150,r:24,houses:5}];function Jv(i,e){for(let t=0;t<40&&st(i,e)<1.5;t++)i*=.97,e*=.97;return{x:i,z:e}}function Nt(i){const e={...i,y:i.y??st(i.x,i.z),region:xl(i.x,i.z)};return Pt.push(e),en.set(e.id,e),e}let Yh=!1;function Zv(){if(Yh)return;Yh=!0;const i=[];for(const f of ko)i.push([f.x,f.z,f.r]);const e=[{id:"dom_book",name:"知恵の祠",x:-120,z:170,kind:"book"},{id:"dom_relic",name:"紅砂の遺跡",x:330,z:70,kind:"relic"},{id:"dom_ore",name:"霜鉄の坑道",x:-300,z:-90,kind:"ore"}],t=[{id:"st_plains",x:70,z:120},{id:"st_canyon",x:210,z:-100},{id:"st_peaks",x:-250,z:-250}],n=[{id:"b_puff",enemy:"boss_puff",x:-110,z:40},{id:"b_golem",enemy:"boss_golem",x:330,z:-100},{id:"b_wisp",enemy:"boss_wisp",x:-300,z:-190},{id:"b_knight",enemy:"boss_knight",x:200,z:-255}];for(const f of e)i.push([f.x,f.z,9]);for(const f of t)i.push([f.x,f.z,7]);for(const f of n)i.push([f.x,f.z,f.id==="b_knight"?34:24]);for(const[f,u,g]of i)Yv(f,u,g,Math.max(4,sd(f,u)));Kv();let s=236;for(;s<460&&st(14,s+4)>1.2;)s+=4;is={x:14,z:s-6};for(const f of ko){Nt({id:"wp_"+f.id,type:"waypoint",x:f.x+6,z:f.z+f.r*.5,name:f.name});const u=new ui(f.x*7+f.z);for(let g=0;g<f.houses;g++){const _=g/f.houses*Math.PI*2+.3,m=f.r*.72;Nt({id:`house_${f.id}_${g}`,type:"house",x:f.x+Math.cos(_)*m,z:f.z+Math.sin(_)*m,data:{rot:-_+Math.PI/2,w:u.range(5,7),d:u.range(5,6.5),h:u.range(3.5,5),roof:u.pick(["#c84a3a","#3a6ac8","#5a9a4a","#8a5aa8","#d89a3a"])}})}}Nt({id:"wp_beach",type:"waypoint",x:is.x-10,z:is.z-14,name:"星の落ちた浜"});for(const f of e)Nt({id:f.id,type:"domain",x:f.x,z:f.z,name:f.name,data:{kind:f.kind}}),Nt({id:"wp_"+f.id,type:"waypoint",x:f.x+12,z:f.z+8,name:f.name+"前"});for(const f of t)Nt({id:f.id,type:"statue",x:f.x,z:f.z,name:"星の像"}),Nt({id:"wp_"+f.id,type:"waypoint",x:f.x+8,z:f.z+6,name:"星の像"});for(const f of n)Nt({id:f.id,type:"boss",x:f.x,z:f.z,data:{enemy:f.enemy}}),f.id!=="b_knight"&&Nt({id:"wp_"+f.id,type:"waypoint",x:f.x+30,z:f.z+10,name:"決戦の地"});Nt({id:"spire",type:"spire",x:200,z:-282,name:"影の塔"}),Nt({id:"wp_spire",type:"waypoint",x:170,z:-220,name:"影の高原"}),Nt({id:"tower",type:"tower",x:20,z:222,name:"星の塔"});for(const[f,[u,g,_]]of[[-60,300,"灯台の岬"],[130,260,"東の浜"],[-200,120,"西の丘"],[140,60,"風車の丘"],[-40,-40,"古い橋"],[160,-200,"谷の入口"],[-110,-260,"雪の道"],[-360,-180,"凍った湖"],[390,-10,"赤い崖"]].entries()){const m=Jv(u,g);Nt({id:"wp_x"+f,type:"waypoint",x:m.x,z:m.z,name:_})}const r=[{id:"npc_elder",name:"町長ゴウ",x:26,z:236,look:{hair:"#e0e0e0",style:"short",skin:"#e8c0a0",eye:"#3a2a1a",c1:"#6a4a8a",c2:"#e8d8a8",c3:"#ffd060"}},{id:"npc_shop",name:"商人ミツ",x:8,z:228,look:{hair:"#7a4a2a",style:"bun",skin:"#fcd8b8",eye:"#3a2a1a",c1:"#3a8a5a",c2:"#f4e8c8",c3:"#ffd060",skirt:!0}},{id:"npc_guild",name:"受付のハナ",x:34,z:226,look:{hair:"#ff9ab8",style:"long",skin:"#fde4d0",eye:"#5a3a8a",c1:"#2a3a6a",c2:"#ffffff",c3:"#ffd060",skirt:!0}},{id:"npc_smith",name:"鍛冶屋テツ",x:268,z:-4,look:{hair:"#2a2a2a",style:"spiky",skin:"#d8a070",eye:"#2a1a1a",c1:"#5a3a2a",c2:"#a87a4a",c3:"#ff7a3c",acc:"band"}},{id:"npc_monk",name:"見張りのオウ",x:-190,z:-144,look:{hair:"#c8c8d8",style:"short",skin:"#f0d0b8",eye:"#3a5a8a",c1:"#3a4a6a",c2:"#e8f0ff",c3:"#9ae8ff",acc:"hood"}},{id:"npc_girl",name:"迷子のチイ",x:120,z:150,look:{hair:"#ffcf6a",style:"twin",skin:"#ffe4d0",eye:"#3a7ad8",c1:"#ff8a8a",c2:"#ffffff",c3:"#ffd060",skirt:!0}},{id:"npc_fisher",name:"漁師のハマ",x:-55,z:290,look:{hair:"#4a4a4a",style:"short",skin:"#d8a070",eye:"#2a1a1a",c1:"#2a5a8a",c2:"#e8e0c8",c3:"#ffd060",acc:"hat"}}];for(const f of r)Nt({id:f.id,type:"npc",x:f.x,z:f.z,name:f.name,data:{look:f.look}});const a=new ui(20261126),o=Pt.filter(f=>["waypoint","domain","statue","boss","house","spire","tower"].includes(f.type)),c=(f,u,g=2.5,_=.25,m=30)=>{if(st(f,u)<g||yl(f,u)>_)return!1;for(const b of ko)if(At(f,u,b.x,b.z)<(b.r+26)**2)return!1;for(const b of o)if(At(f,u,b.x,b.z)<m*m)return!1;return!0},l=(f,u,g)=>{for(let _=0;_<300;_++){const m=a.range(-Le+40,Le-40),p=a.range(-Le+40,Le-40);if(c(m,p,f,u,g))return{x:m,z:p}}return null},h=["fire","water","volt","frost","star","shadow"],d={plains:["water","fire","volt","star"],canyon:["fire","volt","star"],peaks:["frost","water","shadow"],spire:["shadow","star","volt"]};for(let f=0;f<34;f++){const u=l(3,.2,34);if(!u)continue;const g=xl(u.x,u.z),_=d[g],m=[],p=a.next();if(p<.35){const b=a.int(3,5);for(let x=0;x<b;x++)m.push("puff_"+a.pick(_))}else p<.7?(m.push("bandit","bandit",a.chance(.6)?"archer":"shaman"),a.chance(.5)&&m.push("archer")):p<.85?m.push("wisp_"+a.pick(_),"wisp_"+a.pick(_),"puff_"+a.pick(_)):m.push("golem","puff_"+a.pick(_),"puff_"+a.pick(_));Nt({id:"camp"+f,type:"camp",x:u.x,z:u.z,data:{enemies:m}}),o.push(Pt[Pt.length-1])}for(let f=0;f<70;f++){const u=l(1.5,.3,14);if(!u)continue;const g=a.next(),_=g<.55?1:g<.85?2:g<.97?3:4;Nt({id:"chest"+f,type:"chest",x:u.x,z:u.z,data:{tier:_}})}for(let f=0;f<12;f++){const u=l(2.5,.2,30);if(!u)continue;const g=[a.pick(h),a.pick(h),a.pick(h)];Nt({id:"puzzle"+f,type:"puzzle",x:u.x,z:u.z,data:{els:g}}),o.push(Pt[Pt.length-1])}for(let f=0;f<48;f++){let u=null;const g=a.range(-Le+60,Le-60),_=a.range(-Le+60,Le-60);for(let m=0;m<14;m++){const p=g+a.range(-40,40),b=_+a.range(-40,40),x=st(p,b);x>3&&(!u||x>u.h)&&(u={x:p,z:b,h:x})}u&&Nt({id:"shard"+f,type:"shard",x:u.x,z:u.z,y:u.h+1.6})}}function ad(i){const e=parseInt(i.slice(1),16);return[e>>16&255,e>>8&255,e&255]}const Kh=(i,e,t)=>"#"+[i,e,t].map(n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0")).join("");function Ce(i,e){const[t,n,s]=ad(i);return e<1?Kh(t*e*.95,n*e*.95,s*e*1.02):Kh(t+(255-t)*(e-1),n+(255-n)*(e-1),s+(255-s)*(e-1))}function Js(i,e,t,n,s,r="#1a1424"){const a=i.getImageData(e,t,n,s),o=a.data,c=new Uint8ClampedArray(o),[l,h,d]=ad(r);for(let f=0;f<s;f++)for(let u=0;u<n;u++){const g=(f*n+u)*4;if(o[g+3]>0)continue;let _=-1;for(const[m,p]of[[1,0],[-1,0],[0,1],[0,-1]]){const b=u+m,x=f+p;if(b<0||x<0||b>=n||x>=s)continue;const v=(x*n+b)*4;if(o[v+3]>0){_=v;break}}_>=0&&(c[g]=o[_]*.25+l*.75,c[g+1]=o[_+1]*.25+h*.75,c[g+2]=o[_+2]*.25+d*.75,c[g+3]=255)}a.data.set(c),i.putImageData(a,e,t)}const oe=(i,e,t,n,s,r)=>{i.fillStyle=r,i.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(s))},gn=(i,e,t,n,s,r)=>{for(let a=-s;a<=s;a++){const o=Math.round(n*Math.sqrt(Math.max(0,1-a*a/(s*s))));oe(i,e-o,t+a,o*2,1,r)}};function Fi(i,e){const t=document.createElement("canvas");return t.width=i,t.height=e,t}const Do=new Map,Oi=(i,e)=>(Do.has(i)||Do.set(i,e()),Do.get(i)),Ns={puff:28,wisp:28,golem:44},ri={puff:26,wisp:32,golem:50};function Qv(i,e=!1){return Oi("puff"+i+e,()=>{const t=Ns.puff,n=ri.puff,s=Fi(t*7,n),r=s.getContext("2d",{willReadFrequently:!0}),a=[[10,8],[11,7],[9,10],[11,7],[12,6],[8,11],[10,8]],o=[0,0,3,0,0,4,0];for(let c=0;c<7;c++){const[l,h]=a[c],d=c*t+14,f=n-2-h-o[c],u=c===6?"#ffffff":i;gn(r,d,f,l,h,Ce(u,.75)),gn(r,d-1,f-1,l-1,h-1,u),gn(r,d-3,f-h/2,3,2,Ce(u,1.45)),oe(r,d-4,f-h/2-1,2,1,"#ffffff");const g=f+1;c!==6&&(oe(r,d-4,g-1,2,3,"#1a1424"),oe(r,d+2,g-1,2,3,"#1a1424"),oe(r,d-4,g-1,1,1,"#ffffff"),oe(r,d+2,g-1,1,1,"#ffffff")),(c===4||c===5)&&oe(r,d-1,g+3,3,2,"#5a1a2a"),e&&(oe(r,d-4,f-h-3,9,3,"#ffd84a"),oe(r,d-4,f-h-5,1,2,"#ffd84a"),oe(r,d,f-h-6,1,3,"#ffd84a"),oe(r,d+4,f-h-5,1,2,"#ffd84a"),oe(r,d,f-h-2,1,1,"#ff4a6a")),Js(r,c*t,0,t,n)}return s})}function ex(i){return Oi("wisp"+i,()=>{const e=Ns.wisp,t=ri.wisp,n=Fi(e*7,t),s=n.getContext("2d",{willReadFrequently:!0});for(let r=0;r<7;r++){const a=r*e+14,o=16+[0,1,0,-1,-1,0,0][r],c=r===6?"#ffffff":i,l=r===4||r===5?1:0;for(let h=0;h<4;h++)oe(s,a-3+h*2+(r+h)%2,o-9-h%2*2-l,2,4,Ce(c,1.3));gn(s,a,o,7+l,7+l,Ce(c,.8)),gn(s,a,o-1,6+l,6+l,c),gn(s,a-1,o-3,3,2,Ce(c,1.5));for(let h=0;h<3;h++)oe(s,a-4+h*3,o+7+(r+h)%2,2,3,Ce(c,.9));r!==6&&(oe(s,a-3,o-1,2,2,"#1a1424"),oe(s,a+1,o-1,2,2,"#1a1424"),oe(s,a-3,o-1,1,1,"#fff"),oe(s,a+1,o-1,1,1,"#fff")),Js(s,r*e,0,e,t)}return n})}function tx(i,e="#8a8478"){return Oi("golem"+i+e,()=>{const t=Ns.golem,n=ri.golem,s=Fi(t*7,n),r=s.getContext("2d",{willReadFrequently:!0}),a=e,o=Ce(a,.7),c=Ce(a,1.25);for(let l=0;l<7;l++){const h=l*t+22,d=n-2,f=l===1||l===3?1:0,g=l===6?"#ffffff":a,_=l===2?-2:l===3?2:0;oe(r,h-9+_,d-9,7,9,o),oe(r,h+2-_,d-9,7,9,o),oe(r,h-12,d-30+f,24,22,g),oe(r,h-12,d-30+f,24,2,c),oe(r,h+8,d-28+f,4,20,o),oe(r,h-5,d-22+f,10,6,Ce(a,.85)),oe(r,h-2,d-21+f,4,4,i),oe(r,h-7,d-40+f,14,11,g),oe(r,h-7,d-40+f,14,2,c),oe(r,h-4,d-36+f,8,2,"#1a1424"),oe(r,h-3,d-36+f,2,2,i),oe(r,h+1,d-36+f,2,2,i);const m=l===4?-14:l===5?2:0;oe(r,h-19,d-29+f+m,7,16,g),oe(r,h+12,d-29+f+m,7,16,o),oe(r,h-20,d-15+f+m,9,7,o),oe(r,h+11,d-15+f+m,9,7,Ce(a,.6)),oe(r,h-10,d-26+f,3,1,Ce(a,.6)),oe(r,h+3,d-14+f,4,1,Ce(a,.6)),oe(r,h-6,d-33+f,2,1,Ce(a,.6)),Js(r,l*t,0,t,n)}return s})}function nx(i,e=0){return Oi("tree"+i+e,()=>{const t=i==="grass"||i==="flower"?16:i==="bush"||i==="rock"?24:40,n=i==="grass"||i==="flower"?12:i==="bush"||i==="rock"?18:56,s=Fi(t,n),r=s.getContext("2d",{willReadFrequently:!0}),a=t/2;let o=e*9301+49297;const c=()=>(o=(o*9301+49297)%233280)/233280;if(i==="leaf"){oe(r,a-2,n-18,4,18,"#6a4a2a"),oe(r,a+1,n-18,1,18,"#4a3220");const l=["#2f6a2a","#3f8a34","#58a840","#7cc450"];for(const[h,d,f,u]of[[0,22,13,0],[-7,26,9,0],[7,25,9,0],[0,18,11,1],[-4,15,7,2],[4,20,7,1],[-3,12,4,3],[2,17,3,3]])gn(r,a+h,n-56+d+6,f,f*.85,l[u]);for(let h=0;h<12;h++)oe(r,a-10+c()*20,n-46+c()*20,1,1,"#9ad860")}else if(i==="pine"){oe(r,a-1,n-10,3,10,"#5a3a22");for(let l=0;l<5;l++){const h=n-12-l*8,d=15-l*3;for(let f=0;f<9;f++)oe(r,a-d*(1-f/10),h-f,d*2*(1-f/10),1,f<2?"#e8f4ff":l%2?"#2a5a4a":"#346a54")}oe(r,a-1,n-54,2,4,"#e8f4ff")}else if(i==="dead"){oe(r,a-2,n-30,4,30,"#7a4a2a");for(const[l,h,d]of[[0,-28,-.8],[0,-20,.7],[0,-14,-.6]])for(let f=0;f<10;f++)oe(r,a+l+Math.cos(d-Math.PI/2)*f*(d>0?-1:1),n+h-f*.8,2,2,"#6a3a1a")}else if(i==="cactus")oe(r,a-3,n-30,7,30,"#4a8a3a"),oe(r,a-3,n-30,2,30,"#6aaa4a"),oe(r,a-10,n-22,4,10,"#4a8a3a"),oe(r,a-10,n-14,8,3,"#4a8a3a"),oe(r,a+6,n-26,4,12,"#3a7a2a"),oe(r,a+3,n-16,7,3,"#3a7a2a"),oe(r,a-1,n-33,3,3,"#ff7aa8");else if(i==="crystal")for(const[l,h,d,f]of[[0,44,6,"#9a70f0"],[-7,30,5,"#7442c4"],[7,34,5,"#b88aff"]]){for(let u=0;u<h;u++){const g=u>h-8?d*(h-u)/8:d;oe(r,a+l-g/2,n-1-u,g,1,u%7===0?Ce(f,1.3):f)}oe(r,a+l-1,n-h+4,1,h-10,"#e8d8ff")}else if(i==="bush"){const l=["#2f6a2a","#3f8a34","#58a840"];gn(r,a,n-7,10,6,l[0]),gn(r,a-2,n-8,7,5,l[1]),gn(r,a-3,n-10,4,3,l[2]);for(let h=0;h<3;h++)oe(r,a-6+c()*12,n-12+c()*6,2,2,["#ff6a8a","#ffe04a","#ffffff"][h])}else if(i==="rock")gn(r,a,n-7,10,7,"#6a6a72"),gn(r,a-2,n-9,7,5,"#8a8a94"),gn(r,a-4,n-11,3,2,"#aaaab4");else if(i==="grass")for(let l=0;l<7;l++){const h=2+l*2,d=5+c()*6;for(let f=0;f<d;f++)oe(r,h+(f>d/2?l%2?1:-1:0),n-1-f,1,1,f>d-2?"#9ad860":"#4f9a3a")}else if(i==="flower")for(let l=0;l<4;l++){const h=3+l*3,d=4+c()*5;oe(r,h,n-d,1,d,"#3f8a34"),oe(r,h-1,n-d-1,3,2,["#ff6a8a","#ffe04a","#ffffff","#9ab8ff"][(l+e)%4])}return i!=="grass"&&i!=="flower"&&Js(r,0,0,t,n,"#18202a"),s})}function ix(i="#e8dcc0"){return Oi("wall"+i,()=>{const e=Fi(16,16),t=e.getContext("2d");oe(t,0,0,16,16,i);for(let n=0;n<16;n+=4)oe(t,0,n,16,1,Ce(i,.85));return oe(t,0,0,2,16,"#8a6a4a"),oe(t,14,0,2,16,"#8a6a4a"),e})}function sx(i){return Oi("roof"+i,()=>{const e=Fi(16,16),t=e.getContext("2d");oe(t,0,0,16,16,i);for(let n=0;n<16;n+=3){oe(t,0,n,16,1,Ce(i,.7));for(let s=n/3%2?2:0;s<16;s+=4)oe(t,s,n,1,3,Ce(i,.8))}return e})}function Ei(i="#9a9aa8"){return Oi("stone"+i,()=>{const e=Fi(16,16),t=e.getContext("2d");oe(t,0,0,16,16,i);for(let n=0;n<16;n+=5){oe(t,0,n,16,1,Ce(i,.7));for(let s=n/5%2?4:0;s<16;s+=8)oe(t,s,n,1,5,Ce(i,.7))}return oe(t,2,2,2,1,Ce(i,1.2)),e})}function rx(i){return Oi("chest"+i,()=>{const e=["#9a6a3a","#9a6a3a","#c8d0e0","#ffd24a","#ff9ad8"],t=e[i]||e[1],n=Fi(16,16),s=n.getContext("2d");oe(s,0,0,16,16,i<=1?"#8a5a2a":"#6a4a2a");for(let r=0;r<16;r+=4)oe(s,0,r,16,1,"#5a3a1a");return oe(s,0,0,16,2,t),oe(s,0,14,16,2,t),oe(s,0,0,2,16,t),oe(s,14,0,2,16,t),oe(s,6,5,4,5,t),oe(s,7,7,2,2,"#1a1424"),n})}const Xt=64,pa=new Map,od=(i,e)=>i+","+e;function ni(i){const e=od(Math.floor(i.x/16),Math.floor(i.z/16));pa.has(e)||pa.set(e,[]),pa.get(e).push(i)}function ax(i,e,t=[]){t.length=0;const n=Math.floor(i/16),s=Math.floor(e/16);for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++){const o=pa.get(od(n+r,s+a));o&&t.push(...o)}return t}const ox=(i,e)=>{const t=new vn(i,e).translate(0,e/2,0),n=t.clone().rotateY(Math.PI/2),s=new rn,r=[...t.attributes.position.array,...n.attributes.position.array],a=[...t.attributes.uv.array,...n.attributes.uv.array],o=[...t.index.array,...[...n.index.array].map(c=>c+4)];return s.setAttribute("position",new dt(r,3)),s.setAttribute("uv",new dt(a,2)),s.setIndex(o),s},cd={value:0};function cx(i,e=0){const t=new Zt({map:mn(i),alphaTest:.5,side:_n});return e&&(t.onBeforeCompile=n=>{n.uniforms.uT=cd,n.vertexShader=`uniform float uT;
`+n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 ip = instanceMatrix * vec4(0.,0.,0.,1.); transformed.x += sin(uT*1.7 + ip.x*0.3 + ip.z*0.2) * ${e.toFixed(3)} * max(0.0, position.y);`)}),t}const Jh={leaf:[40,56],pine:[40,56],dead:[40,56],crystal:[40,56],cactus:[40,56],bush:[24,18],rock:[24,18],grass:[16,12],flower:[16,12]};let ma={};function lx(){for(const i of Object.keys(Jh)){const[e,t]=Jh[i],n=i==="grass"||i==="flower"?1.3:1.6;ma[i]={geo:ox(e*ci*n,t*ci*n),mat:cx(nx(i,1),i==="grass"||i==="flower"?.04:i==="leaf"||i==="pine"?.015:0)}}}function hx(i,e,t=4){for(const n of vl)if((i-n.x)**2+(e-n.z)**2<(n.r+t)**2)return!0;return!1}class fx{constructor(e){this.scene=e,this.group=new qt,this.farUniform={value:new xt(0,0,0,0)},this.chunks=new Map,this.poiObjs=new Map,this.grassN=40,this.near=2,this.tint=new ke(1,1,1),this.queue=[],this.builtColliderChunks=new Set,lx(),this.terrainMat=new Ft({vertexColors:!0});const t=new Ft({vertexColors:!0});t.onBeforeCompile=s=>{s.uniforms.uB=this.farUniform,s.vertexShader=`varying vec3 vW;
`+s.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
 vW = (modelMatrix * vec4(transformed,1.0)).xyz;`),s.fragmentShader=`uniform vec4 uB; varying vec3 vW;
`+s.fragmentShader.replace("void main() {","void main() { if (vW.x > uB.x && vW.x < uB.z && vW.z > uB.y && vW.z < uB.w) discard;")},this.far=new De(this.buildGeo(-Le,-Le,Le*2,8),t),this.far.position.y=-.25,this.group.add(this.far);const n=new vn(2400,2400).rotateX(-Math.PI/2);this.water=new De(n,new Ft({color:3836632,transparent:!0,opacity:.8,depthWrite:!1})),this.water.position.y=Ln-.15,this.water.renderOrder=2,this.group.add(this.water),this.buildPois(),e.add(this.group)}buildGeo(e,t,n,s){const r=Math.round(n/s)+1,a=new Float32Array(r*r*3),o=new Float32Array(r*r*3),c=new Float32Array(r*r*3),l=[0,0,0],h=s/Nn,d=Math.round((e+Le)/Nn),f=Math.round((t+Le)/Nn);for(let _=0;_<r;_++)for(let m=0;m<r;m++){const p=d+m*h,b=f+_*h,x=e+m*s,v=t+_*s,R=lr(p,b),M=(_*r+m)*3;a[M]=x,a[M+1]=R,a[M+2]=v;const C=lr(p+1,b)-lr(p-1,b),P=lr(p,b+1)-lr(p,b-1),w=-C,S=2*Nn,k=-P,F=Math.hypot(w,S,k);c[M]=w/F,c[M+1]=S/F,c[M+2]=k/F,rd(x,v,R,1-S/F,l),o[M]=l[0],o[M+1]=l[1],o[M+2]=l[2]}const u=[];for(let _=0;_<r-1;_++)for(let m=0;m<r-1;m++){const p=_*r+m,b=p+1,x=p+r,v=x+1;u.push(p,x,b,b,x,v)}const g=new rn;return g.setAttribute("position",new fn(a,3)),g.setAttribute("normal",new fn(c,3)),g.setAttribute("color",new fn(o,3)),g.setIndex(u),g.computeBoundingSphere(),g}buildChunk(e,t,n){const s=g=>{n&&ni(g)},r=e*Xt-Le,a=t*Xt-Le,o=new De(this.buildGeo(r,a,Xt,Nn),this.terrainMat);this.group.add(o);const c={};new ft;const l=new Ys,h=new D,d=new D,f=(g,_,m,p,b)=>{(c[g]||(c[g]=[])).push(new ft().compose(d.set(_,st(_,m)-.1,m),l.setFromAxisAngle(new D(0,1,0),b),h.setScalar(p)))};for(let g=0;g<Xt;g+=5)for(let _=0;_<Xt;_+=5){const m=r+g+hi(g+r,_+a,1)*5,p=a+_+hi(g+r,_+a,2)*5,b=hi(Math.floor(m),Math.floor(p),3),x=st(m,p);if(x<1.6||yl(m,p)>.24||hx(m,p))continue;const R=$a(m,p),M=.8+hi(Math.floor(m),Math.floor(p),4)*.5,C=b*6,P=x>55&&R.peaks>.5;R.plains>.55?b<.085?(f("leaf",m,p,M,C),s({x:m,z:p,r:.5})):b<.14?f("bush",m,p,M,C):b<.17?f("rock",m,p,M,C):b<.17+this.grassN/200&&f(b>.6?"flower":"grass",m,p,M,C):R.canyon>.5?b<.03?(f("cactus",m,p,M,C),s({x:m,z:p,r:.5})):b<.05?f("dead",m,p,M,C):b<.1?f("rock",m,p,M,C):b<.1+this.grassN/500&&f("grass",m,p,M,C):R.peaks>.5?b<.1&&!P?(f("pine",m,p,M,C),s({x:m,z:p,r:.5})):b<.06?f("pine",m,p,M,C):b<.14?f("rock",m,p,M,C):!P&&b<.14+this.grassN/400&&f("grass",m,p,M,C):R.spire>.5?b<.05?(f("crystal",m,p,M,C),s({x:m,z:p,r:.6})):b<.09&&f("rock",m,p,M,C):b<.05?(f("leaf",m,p,M,C),s({x:m,z:p,r:.5})):b<.08&&f("bush",m,p,M,C)}const u=[];for(const g in c){const _=ma[g],m=new Dv(_.geo,_.mat,c[g].length);c[g].forEach((p,b)=>m.setMatrixAt(b,p)),m.computeBoundingSphere(),this.group.add(m),u.push(m)}return{mesh:o,props:u}}update(e,t,n){cd.value=n;const s=Math.floor((e+Le)/Xt),r=Math.floor((t+Le)/Xt),a=Math.ceil(Le*2/Xt),o=this.near,c=new Set;for(let m=-o;m<=o;m++)for(let p=-o;p<=o;p++){const b=s+m,x=r+p;b<0||x<0||b>=a||x>=a||c.add(b+","+x)}for(const[m,p]of this.chunks)c.has(m)||(p.mesh.removeFromParent(),p.mesh.geometry.dispose(),p.props.forEach(b=>{b.removeFromParent(),b.dispose()}),this.chunks.delete(m));let l=0;const h=[...c].filter(m=>!this.chunks.has(m)).sort((m,p)=>{const[b,x]=m.split(",").map(Number),[v,R]=p.split(",").map(Number);return(b-s)**2+(x-r)**2-((v-s)**2+(R-r)**2)});for(const m of h){if(l>=2)break;const[p,b]=m.split(",").map(Number);this.chunks.set(m,this.buildChunkOnce(p,b,m)),l++}let d=1/0,f=1/0,u=-1/0,g=-1/0,_=!0;for(const m of c){if(!this.chunks.has(m)){_=!1;continue}const[p,b]=m.split(",").map(Number);d=Math.min(d,p),f=Math.min(f,b),u=Math.max(u,p),g=Math.max(g,b)}d===1/0?this.farUniform.value.set(0,0,0,0):_?this.farUniform.value.set(d*Xt-Le+.5,f*Xt-Le+.5,(u+1)*Xt-Le-.5,(g+1)*Xt-Le-.5):this.farUniform.value.set(s*Xt-Le+.5,r*Xt-Le+.5,(s+1)*Xt-Le-.5,(r+1)*Xt-Le-.5),this.water.position.x=e,this.water.position.z=t;for(const m in ma)ma[m].mat.color.copy(this.tint)}buildChunkOnce(e,t,n){const s=this.buildChunk(e,t,!this.builtColliderChunks.has(n));return this.builtColliderChunks.add(n),s}buildPois(){const e=t=>new Ft({map:mn(ix(t))});for(const t of Pt){let n=null;if(t.type==="house"){const s=t.data,r=new qt,a=t.y,o=new De(new Vn(s.w,s.h,s.d),e(["#e8dcc0","#f0e8d8","#d8c8a8"][Math.floor(t.x)&1]));o.position.y=s.h/2,r.add(o);const c=new En(.01,s.w*.75,2.6,4,1);c.rotateY(Math.PI/4),c.scale(1,1,s.d/s.w);const l=new De(c,new Ft({map:mn(sx(s.roof))}));l.position.y=s.h+1.3,r.add(l);const h=new De(new vn(1.2,2),new Ft({color:5913122}));h.position.set(0,1,s.d/2+.01),r.add(h);const d=new De(new vn(1,.8),new Zt({color:16771232}));d.position.set(s.w*.28,s.h*.6,s.d/2+.01),r.add(d),r.position.set(t.x,a-.2,t.z),r.rotation.y=s.rot,n=r,ni({x:t.x,z:t.z,r:Math.max(s.w,s.d)*.55,top:a+s.h})}else if(t.type==="waypoint"){const s=new qt,r=new De(new En(1.2,1.5,.6,6),new Ft({map:mn(Ei())}));r.position.y=.3,s.add(r);const a=new De(new En(.3,.45,3,6),new Ft({map:mn(Ei("#b8b8c8"))}));a.position.y=2,s.add(a);const o=new De(new ns(.5),new Zt({color:6974074}));o.position.y=4.1,o.name="gem",s.add(o),s.position.set(t.x,t.y,t.z),n=s,ni({x:t.x,z:t.z,r:.6})}else if(t.type==="statue"){const s=new qt,r=new De(new En(3,3.5,1,8),new Ft({map:mn(Ei())}));r.position.y=.5,s.add(r);const a=new De(new En(.9,1.4,5,8),new Ft({map:mn(Ei("#c8c8d0"))}));a.position.y=3.5,s.add(a);const o=new De(new Ga(.9,8,6),new Ft({color:13158608}));o.position.y=6.6,s.add(o);const c=new De(new ns(1.2),new Zt({color:16767216}));c.position.y=9,c.name="gem",s.add(c),s.position.set(t.x,t.y,t.z),n=s,ni({x:t.x,z:t.z,r:3})}else if(t.type==="domain"){const s=new qt,r=new Ft({map:mn(Ei("#8a8a9a"))});for(const c of[-1,1]){const l=new De(new Vn(1.2,6,1.2),r);l.position.set(c*3,3,0),s.add(l),ni({x:t.x+c*3,z:t.z,r:.8})}const a=new De(new Vn(8.4,1.2,1.6),r);a.position.y=6.4,s.add(a);const o=new De(new vn(4.8,5.4),new Zt({color:10121471,transparent:!0,opacity:.6,side:_n}));o.position.y=2.8,o.name="gem",s.add(o),s.position.set(t.x,t.y,t.z),n=s}else if(t.type==="spire"){const s=new qt,r=new Ft({map:mn(Ei("#4a3a6a"))}),a=new De(new En(7,11,80,8),r);a.position.y=40,s.add(a);for(let o=0;o<6;o++){const c=new De(new Wa(8+(5-o)*.4,.4,4,12),new Zt({color:10514687}));c.rotation.x=Math.PI/2,c.position.y=10+o*12,s.add(c)}s.position.set(t.x,t.y-1,t.z),n=s,ni({x:t.x,z:t.z,r:11})}else if(t.type==="tower"){const s=new qt,r=new Ft({map:mn(Ei("#e8e4f0"))}),a=new De(new En(2.5,3.2,22,8),r);a.position.y=11,s.add(a);const o=new De(new ul(3.2,5,8),new Ft({color:4877016}));o.position.y=24.5,s.add(o);const c=new De(new ns(1),new Zt({color:16767050}));c.position.y=28,c.name="gem",s.add(c),s.position.set(t.x,t.y,t.z),n=s,ni({x:t.x,z:t.z,r:3.2})}else if(t.type==="puzzle"){const s=new qt;t.data.els.forEach((r,a)=>{const o=a/3*Math.PI*2,c=Math.cos(o)*4,l=Math.sin(o)*4,h=new De(new En(.5,.6,2.4,6),new Ft({map:mn(Ei())}));h.position.set(c,1.2,l),s.add(h);const d=new De(new ns(.45),new Zt({color:new ke(ct[r].color).multiplyScalar(.35)}));d.position.set(c,2.8,l),d.name="orb"+a,s.add(d),ni({x:t.x+c,z:t.z+l,r:.7})}),s.position.set(t.x,st(t.x,t.z),t.z),n=s}n&&(this.group.add(n),this.poiObjs.set(t.id,n))}}chestMesh(e){const t=new qt,n=new Ft({map:mn(rx(e))}),s=new De(new Vn(1.3,.8,.9),n);s.position.y=.4,t.add(s);const r=new De(new Vn(1.32,.35,.92),n);return r.position.y=.95,r.name="lid",t.add(r),t}}const tn=40,yn=44,Zh=17,Dt={idle:[0,1],walk:[2,3,4,5],atk:[6,7,8],cast:[9],jump:[10],glide:[11],climb:[12,13],swim:[14,15],hurt:[16]},Y=(i,e,t,n,s,r)=>{n<=0||s<=0||(i.fillStyle=r,i.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(s)))};function ii(i,e,t,n,s,r,a,o){const c=Math.cos(n),l=Math.sin(n);for(let h=0;h<=s;h+=.5){const d=e+c*h,f=t+l*h;Y(i,d-(r-1)/2,f-(r-1)/2,r,r,o&&h>s-2?o:a)}}function dx(i,e,t){const n={bob:0,lL:0,lR:0,sL:0,sR:0,hand:[6,2],hand2:[-6,2],wAng:Math.PI/2+.25,wShow:t==="sword"||t==="polearm"?"hand":t==="catalyst"?"float":"back",tuck:0,glide:!1,eyes:"open",swim:!1,lean:0};if(t==="polearm"&&(n.wAng=-Math.PI/2+.08),i===1&&(n.bob=1),i>=2&&i<=5){const s=i-2;n.bob=s%2,e===2?(n.sL=[2,0,-2,0][s],n.sR=-n.sL,n.lL=s===1?1:0,n.lR=s===3?1:0,n.hand=[[-2,2],[1,2],[4,2],[1,2]][s]):(n.lL=s===0?1:0,n.lR=s===2?1:0,n.hand=[6,2+(s===0?-1:s===2?1:0)],n.hand2=[-6,2+(s===2?-1:s===0?1:0)])}if(i>=6&&i<=8){const s=i-6;if(t==="bow")n.wShow="aim",n.hand=e===2?[8,-1]:[5,-1],n.hand2=e===2?[s===0?0:3,-1]:[-4,-1],n.lean=s===1?-1:0;else if(t==="catalyst")n.wShow="float",n.hand=e===2?[8+s,-2]:[6,-4-s],n.hand2=e===2?[5,0]:[-6,-4];else{n.wShow="hand";const r=t==="claymore";e===2?(n.hand=[[-3,-6],[7,0],[6,3]][s],n.wAng=[-2.3,.1,1][s],n.sL=[0,2,2][s],n.sR=[0,-2,-1][s],n.lean=[-1,1,1][s]):(n.hand=[[6,-6],[-5,1],[-6,3]][s],n.wAng=[-1.9,2.6,2.9][s]),t==="polearm"&&(e===2?(n.wAng=[0,0,.05][s],n.hand=[[-4,0],[9,0],[7,1]][s],n.lean=[-1,1,1][s],n.sL=[0,3,2][s],n.sR=[0,-2,-1][s]):(n.wAng=[1.25,1.05,1.1][s],n.hand=[[4,-3],[6,3],[6,2]][s])),r&&(n.bob=s===1?1:0)}}if(i===9&&(n.hand=[5,-9],n.hand2=[-5,-9],n.wShow=t==="catalyst"?"float":t==="bow"?"back":"hand",n.wAng=-Math.PI/2),i===10&&(n.tuck=2,n.hand=[6,-1],n.hand2=[-6,-1]),i===11&&(n.glide=!0,n.hand=[5,-10],n.hand2=[-5,-10],n.tuck=1,n.wShow=t==="catalyst"?"none":"back"),i===12||i===13){const s=i-12;n.hand=[5,s?-10:-6],n.hand2=[-5,s?-6:-10],n.lL=s?2:0,n.lR=s?0:2,n.wShow=t==="catalyst"?"none":"back"}if(i===14||i===15){const s=i-14;n.swim=!0,n.hand=e===2?[s?9:4,-2]:[8,s?-3:-1],n.hand2=e===2?[s?-2:2,-1]:[-8,s?-1:-3],n.wShow="none"}return i===16&&(n.eyes="shut",n.hand=[7,-3],n.hand2=[-7,-3],n.lean=-1,n.bob=1),n}function Dc(i,e,t,n,s,r){const a="#dfe6f2";e==="sword"?(ii(i,t,n,s,10,2,a,"#ffffff"),ii(i,t,n,s+Math.PI,2,2,r.c3),Y(i,t-1,n-1,3,3,r.c3)):e==="claymore"?(ii(i,t,n,s,14,3,a,"#ffffff"),ii(i,t+Math.cos(s)*2,n+Math.sin(s)*2,s,10,1,"#8a96ac"),ii(i,t,n,s+Math.PI,3,2,r.c3),Y(i,t-2,n-1,4,3,r.c3)):e==="polearm"&&(ii(i,t,n,s+Math.PI,6,1,"#7a5a3a"),ii(i,t,n,s,14,1,"#8a6a4a"),ii(i,t+Math.cos(s)*14,n+Math.sin(s)*14,s,4,2,a,"#ffffff"),Y(i,t+Math.cos(s)*13-1,n+Math.sin(s)*13-1,3,2,r.c3))}function Qh(i,e,t,n,s){const r=Ce(n.c3,.8);for(let a=-7;a<=7;a++){const o=e+(s?Math.round(2.4-a*a/18):0),c=t+a;Y(i,o,c,1,1,r)}s&&Y(i,e-1,t-7,1,15,"#f4f0e0")}function ux(i,e,t,n,s,r,a){const o=dx(r,s,a),c=n.tall||0,l=e+20,h=t+42,d=Ce(n.skin,.82),f=Ce(n.c1,.72),u=Ce(n.c1,1.15),g=Ce(n.hair,.72),_=Ce(n.hair,1.2),m=6+c-o.tuck,p=h-m-(o.swim,0),b=p-8+o.bob,x=b-11,v=l+o.lean,R=r===12||r===13,M=R?1:s,C=I=>[l+I[0],b+3+I[1]];if(o.glide){for(let I=0;I<15;I++){const K=15-I;Y(i,l-K,x-7+Math.floor(I/3),K*2,1,I<2?n.c3:I%5===0?Ce(n.c2,.85):n.c2)}Y(i,l-1,x-5,2,6,"#6a5a4a")}const P=()=>{if(o.wShow==="back")if(a==="claymore")Dc(i,a,l+(M===2?-5:4),b+7,-2.1,n);else if(a==="bow")if(M===1)for(let I=-6;I<=6;I++)Y(i,l-1+Math.round(Math.abs(I)/3),b+3+I,1,1,Ce(n.c3,.8));else Qh(i,l+(M===2?-5:5),b+3,n,!1);else(a==="polearm"||a==="sword")&&ii(i,l+(M===2?-4:4),b+9,-2,a==="polearm"?18:10,1,a==="polearm"?"#8a6a4a":"#dfe6f2")};if(M!==1&&P(),n.cape&&M!==0){const I=M===2?5:10;Y(i,M===2?l-6:l-5,b+1,I,10+c,Ce(n.c2==="#ffffff"?n.c3:n.c2,.75))}if(n.cape&&M===0&&(Y(i,l-7,b+1,2,9,Ce(n.c2,.7)),Y(i,l+5,b+1,2,9,Ce(n.c2,.7))),n.style==="long"||n.style,n.style==="long"&&M!==1){const I=M===2?v-6:v-7,K=M===2?6:14;Y(i,I,x+3,K,15,g)}n.style==="twin"&&M===0&&(Y(i,v-9,x+4,3,11,n.hair),Y(i,v+6,x+4,3,11,n.hair),Y(i,v-9,x+4,1,11,g),Y(i,v+8,x+4,1,11,g)),n.style==="twin"&&M===2&&Y(i,v-8,x+4,3,11,g),n.style==="ponytail"&&M===2&&(Y(i,v-9,x+3,4,3,n.hair),Y(i,v-10,x+5,3,8,g)),n.style==="ponytail"&&M===0&&Y(i,v+5,x+2,3,3,g);const w=(I,K,ae,xe)=>{const[Ue,Ze]=C(I),X=b+1,ie=Math.max(Math.abs(Ue-xe),Math.abs(Ze-X),1);for(let ye=0;ye<=ie;ye++){const ce=ye/ie,Ae=xe+(Ue-xe)*ce,Ne=X+(Ze-X)*ce;Y(i,Ae-1,Ne,2,2,ce>.75?K:ae)}return[Ue,Ze]};if(M===2&&!o.swim&&w(o.hand2,d,f,l),!o.swim){const I=(xe,Ue,Ze,X)=>{Y(i,xe,p,3,m-Ue,Ze),Y(i,xe,h-2-Ue,3,2,X)},K=n.skirt?n.skin:Ce(n.c1,.6),ae=Ce(n.c3,.55);M===2?(I(l-2+o.sR,o.lR,Ce(K,.8),Ce(ae,.8)),I(l-1+o.sL,o.lL,K,ae)):(I(l-4,o.lL,K,ae),I(l+1,o.lR,K,ae))}const S=M===2?7:10,k=M===2?l-3+o.lean:l-5+o.lean;if(Y(i,k,b,S,8,n.c1),Y(i,k,b,S,1,u),Y(i,k+S-2,b+1,2,7,f),M===0&&(Y(i,l-1+o.lean,b,2,5,n.c2),Y(i,l-2+o.lean,b,4,1,n.c2)),M===2&&Y(i,k+S-3,b,2,4,n.c2),Y(i,k,b+6,S,1,n.c3),n.skirt&&!o.swim?(Y(i,k-1,b+7,S+2,4,n.c2),Y(i,k-1,b+10,S+2,1,Ce(n.c2,.75))):o.swim||Y(i,k,b+7,S,2,f),n.cape&&M===1&&(Y(i,l-5,b,10,11+c,Ce(n.c2==="#ffffff"?n.c3:n.c2,.85)),Y(i,l-5,b,10,1,n.c3)),n.style==="long"&&M===1&&(Y(i,v-6,x+6,12,13,n.hair),Y(i,v-6,x+17,12,2,g)),n.style==="braid"){if(M===1)for(let I=0;I<6;I++)Y(i,v-1+I%2,x+9+I*2,2,2,I%2?g:n.hair);else if(M===0)for(let I=0;I<5;I++)Y(i,v+4+I%2,x+8+I*2,2,2,I%2?g:n.hair)}n.style==="ponytail"&&M===1&&(Y(i,v-2,x+7,4,10,n.hair),Y(i,v-1,x+16,2,2,g)),n.style==="twin"&&M===1&&(Y(i,v-9,x+4,3,11,n.hair),Y(i,v+6,x+4,3,11,n.hair)),M===1&&P();const F=M===2?11:12,N=M===2?v-5:v-6;if(Y(i,N,x,F,10,n.skin),Y(i,N+1,x+10,F-2,1,d),Y(i,N+F-2,x+2,1,7,d),M===0){const I=x+6;if(o.eyes==="open")for(const K of[v-4,v+2])Y(i,K,I-1,2,3,n.eye),Y(i,K,I-1,2,1,Ce(n.eye,.45)),Y(i,K+1,I,1,1,"#ffffff"),Y(i,K,I+1,1,1,Ce(n.eye,1.3));else Y(i,v-4,I+1,2,1,"#3a2a2a"),Y(i,v+2,I+1,2,1,"#3a2a2a");Y(i,v-5,I+2,1,1,Ce(n.skin,.88)),Y(i,v+4,I+2,1,1,Ce(n.skin,.88)),Y(i,v-1,I+3,2,1,Ce(n.skin,.75))}if(M===2){const I=x+6;o.eyes==="open"?(Y(i,v+2,I-1,2,3,n.eye),Y(i,v+2,I-1,2,1,Ce(n.eye,.45)),Y(i,v+3,I,1,1,"#ffffff")):Y(i,v+2,I+1,2,1,"#3a2a2a"),Y(i,v+5,I+2,1,1,d)}const j=(I,K,ae,xe)=>{Y(i,I+2,K-1,ae-4,1,n.hair),Y(i,I,K,ae,1,n.hair),Y(i,I-1,K+1,ae+2,xe-1,n.hair),Y(i,I+2,K-1,Math.max(2,ae/3),1,_),Y(i,I+1,K,3,1,_),Y(i,I+4,K,2,1,_)};if(M===0){j(N,x-1,F,4);const I=[3,2,4,3,1,3,4,2,3,1,4,3];for(let ae=0;ae<F;ae++)Y(i,N+ae,x+3,1,Math.min(I[(ae+n.hair.charCodeAt(2)%4)%12]-1,2),ae%3===1?g:n.hair);const K=n.style==="short"||n.style==="spiky"?6:n.style==="bob"?10:9;Y(i,N-1,x+1,2,K,n.hair),Y(i,N+F-1,x+1,2,K,g),Y(i,N-1,x+K,1,1,g)}else if(M===1){const I=n.style==="short"||n.style==="spiky"?10:12;j(N,x-1,F,I);for(let K=2;K<F;K+=3)Y(i,N+K,x+4,1,I-5,g);Y(i,N+F-1,x+1,2,I-2,g);for(let K=0;K<F+2;K+=2)Y(i,N-1+K,x+I-1,1,1,g)}else{j(N,x-1,F,4);const I=n.style==="short"||n.style==="spiky"?7:10;Y(i,N-1,x,6,I,n.hair),Y(i,N-1,x+3,1,I-3,g),Y(i,N+2,x+4,1,I-5,g),Y(i,N+F-4,x+3,3,1,n.hair),Y(i,N+F-1,x+3,1,2,n.hair),n.style==="bob"&&Y(i,N-1,x+3,7,8,n.hair)}if(n.style==="ponytail"&&M===1&&(Y(i,v-2,x+8,4,9,n.hair),Y(i,v-1,x+8,1,8,_),Y(i,v-1,x+16,2,2,g),Y(i,v-2,x+7,4,1,n.c3)),n.style==="spiky")for(let I=0;I<F;I+=3)Y(i,N+I,x-3+I%2,2,3,n.hair);n.style==="bun"&&(Y(i,v-2,x-4,5,4,n.hair),Y(i,v-1,x-4,3,1,_));const q=n.acc;if(q==="hat"&&(Y(i,N-3,x-1,F+6,2,n.c3==="#ffffff"?n.c1:Ce(n.c1,.9)),Y(i,N,x-6,F,5,Ce(n.c1,.9)),Y(i,N,x-3,F,1,n.c3)),q==="horns"&&(Y(i,N,x-3,2,3,"#f4ecd8"),Y(i,N+F-2,x-3,2,3,"#f4ecd8"),Y(i,N-1,x-4,1,2,"#f4ecd8"),Y(i,N+F,x-4,1,2,"#f4ecd8")),q==="ears"&&(Y(i,N,x-4,3,4,n.hair),Y(i,N+F-3,x-4,3,4,n.hair),Y(i,N+1,x-3,1,2,"#ffd0d0"),Y(i,N+F-2,x-3,1,2,"#ffd0d0")),q==="hood"&&(Y(i,N-2,x-2,F+4,3,n.c1),Y(i,N-2,x,2,10,n.c1),Y(i,N+F,x,2,10,f),M===1&&Y(i,N-1,x-2,F+2,12,n.c1)),q==="band"&&Y(i,N-1,x+1,F+2,1,n.c3),q==="crown"&&(Y(i,v-3,x-3,6,2,"#ffd84a"),Y(i,v-3,x-4,1,1,"#ffd84a"),Y(i,v,x-5,1,2,"#ffd84a"),Y(i,v+2,x-4,1,1,"#ffd84a"),Y(i,v,x-3,1,1,"#ff5a8a")),q==="flower"&&(Y(i,N+F-3,x,3,3,"#ffffff"),Y(i,N+F-2,x+1,1,1,"#ffd84a")),q==="mask"&&M!==1){const I=M===2?v-1:N+1,K=M===2?6:F-2;Y(i,I,x+8,K,3,Ce(n.c1,1.3))}M!==2&&!o.swim&&w(o.hand2,n.skin,n.c1,l-6);const[$,ee]=o.swim&&M!==2?C(o.hand):w(o.hand,n.skin,n.c1,M===2?l+1:l+5);if(o.swim&&M!==2&&(w(o.hand,n.skin,n.c1,l+5),w(o.hand2,n.skin,n.c1,l-6)),o.wShow==="hand"&&Dc(i,a,$,ee+1,o.wAng,n),o.wShow==="aim"&&Qh(i,$,ee,n,M===2),o.wShow==="float"){const I=M===2?$+2:l+9,K=b-2+r%2;Y(i,I-2,K-3,5,6,n.c3),Y(i,I-1,K-2,3,4,Ce(n.c3,1.4)),Y(i,I,K-4,1,1,"#ffffff")}}const Io=new Map;function Ni(i,e,t){if(Io.has(i))return Io.get(i);const n=document.createElement("canvas");n.width=tn*Zh,n.height=yn*3;const s=n.getContext("2d",{willReadFrequently:!0});for(let r=0;r<3;r++)for(let a=0;a<Zh;a++)ux(s,a*tn,r*yn,e,r,a,t),Js(s,a*tn,r*yn,tn,yn,"#1c1426");return Io.set(i,n),n}function Ai(i,e,t=4,n=""){const s=Ni(n||JSON.stringify(i)+e,i,e),r=document.createElement("canvas");r.width=24*t,r.height=24*t;const a=r.getContext("2d");return a.imageSmoothingEnabled=!1,a.drawImage(s,8,6,24,24,0,0,24*t,24*t),r}function Lo(i,e,t=4,n="",s=0){const r=Ni(n||JSON.stringify(i)+e,i,e),a=document.createElement("canvas");a.width=tn*t,a.height=yn*t;const o=a.getContext("2d");return o.imageSmoothingEnabled=!1,o.drawImage(r,s*tn,0,tn,yn,0,0,tn*t,yn*t),a}function ef(i,e,t=3){const n=document.createElement("canvas");n.width=n.height=24;const s=n.getContext("2d",{willReadFrequently:!0}),r={c3:e};if(i==="bow"){for(let c=-9;c<=9;c++)s.fillStyle=Ce(e,.85),s.fillRect(Math.round(16-c*c/14),12+c,2,1);s.fillStyle="#f4f0e0",s.fillRect(9,3,1,19)}else i==="catalyst"?(s.fillStyle=e,s.fillRect(5,4,14,16),s.fillStyle=Ce(e,1.4),s.fillRect(7,6,10,12),s.fillStyle=Ce(e,.6),s.fillRect(11,4,2,16),s.fillStyle="#fff",s.fillRect(14,8,2,2)):Dc(s,i,5,19,-Math.PI/4,r);Js(s,0,0,24,24,"#1c1426");const a=document.createElement("canvas");a.width=a.height=24*t;const o=a.getContext("2d");return o.imageSmoothingEnabled=!1,o.drawImage(n,0,0,24*t,24*t),a}function Sr(i,e){const t=Math.sin(i),n=Math.cos(i),s=t*Math.sin(e)+n*Math.cos(e),r=t*Math.cos(e)-n*Math.sin(e);return s>.45?{dir:0,flip:r<-.2&&!1}:s<-.45?{dir:1,flip:!1}:{dir:2,flip:r<0}}const px=[];class mx{constructor(e,t){this.scene=e,this.pos=new D,this.vel=new D,this.face=0,this.mode="ground",this.stamina=240,this.stamMax=240,this.stamRegenDelay=0,this.charId="",this.animT=0,this.anim="idle",this.atkFrame=-1,this.hurtT=0,this.climbN=new D,this.sprintT=0,this.dashT=0,this.dashDir=new D,this.ground=st,this.arenaR=0,this.arenaC=new D,this.fallStartY=0,this.landDamage=0,this.invuln=0,this.climbLeap=0,this.lastGroundY=0,this.moving=!1,this.bb=new li(Ni(t,je(t).look,je(t).weapon),tn,yn),e.add(this.bb.root),e.add(this.bb.shadow),this.setChar(t)}setChar(e){if(e===this.charId)return;this.charId=e;const t=je(e),n=Ni(e,t.look,t.weapon);this.bb.dispose(),this.bb=new li(n,tn,yn),this.scene.add(this.bb.root),this.scene.add(this.bb.shadow)}groundAt(e,t){if(this.arenaR>0){const n=e-this.arenaC.x,s=t-this.arenaC.z;return n*n+s*s<this.arenaR*this.arenaR?this.arenaC.y:-200}return st(e,t)}waterDeep(e,t){return this.arenaR===0&&st(e,t)<Ln-1.2}canAct(){return this.mode==="ground"||this.mode==="swim"}spendStam(e){return this.stamina<e?!1:(this.stamina-=e,this.stamRegenDelay=1.2,!0)}update(e,t,n,s,r){const a=this.pos,o=this.vel,c=Math.min(1,Math.hypot(t,n));if(this.invuln=Math.max(0,this.invuln-e),this.hurtT=Math.max(0,this.hurtT-e),this.stamRegenDelay>0?this.stamRegenDelay-=e:this.mode==="ground"&&(this.stamina=Math.min(this.stamMax,this.stamina+30*e)),this.groundAt(a.x,a.z),this.mode!=="dead"){if(this.mode==="dash"){this.dashT-=e,a.addScaledVector(this.dashDir,e),this.collide();const l=this.groundAt(a.x,a.z);(a.y<l||this.dashT>0)&&(a.y=Math.max(l,a.y)),this.dashT<=0&&(this.mode=a.y>l+.3?"air":"ground");return}if(this.mode==="ground"){if(this.waterDeep(a.x,a.z)&&a.y<Ln-.9){this.mode="swim";return}let l=r?0:c>.6?6:3.4*(c/.6);s&&c>.1&&!r&&this.stamina>0&&(l=9,this.stamina-=16*e,this.stamRegenDelay=.6);const h=t/(c||1),d=n/(c||1);c>.05&&!r&&(this.face=Math.atan2(h,d));const f=a.x+h*l*e*(c>.05?1:0),u=a.z+d*l*e*(c>.05?1:0),g=ks(f,u),_=this.groundAt(f,u);if(this.arenaR===0&&g[1]<.62&&_>a.y+.15&&c>.3&&!r){if(this.stamina>5){this.mode="climb",this.climbN.set(g[0],g[1],g[2]),this.vel.set(0,0,0);return}}else a.x=f,a.z=u;const m=this.groundAt(a.x,a.z),p=ks(a.x,a.z);this.arenaR===0&&p[1]<.6&&(a.x+=p[0]*6*e,a.z+=p[2]*6*e),m<a.y-.6?(this.mode="air",o.set(h*l*(c>.05?1:0),0,d*l*(c>.05?1:0)),this.fallStartY=a.y):a.y=m,this.collide(),this.moving=l>.1&&c>.05,this.anim=this.moving?"walk":"idle",this.sprintT=s&&this.moving?1:0,this.lastGroundY=a.y;return}if(this.mode==="air"||this.mode==="glide"||this.mode==="plunge"){if(this.mode==="glide"){o.y=Math.max(o.y-20*e,-2.4);const h=7.5;c>.05?(this.face=Math.atan2(t,n),o.x+=(t*h-o.x)*Math.min(1,e*3),o.z+=(n*h-o.z)*Math.min(1,e*3)):(o.x*=1-e*.8,o.z*=1-e*.8),this.stamina-=9*e,this.stamRegenDelay=1,this.stamina<=0&&(this.stamina=0,this.mode="air"),this.anim="glide"}else this.mode==="plunge"?(o.x=0,o.z=0,o.y=-32,this.anim="atk"):(o.y-=24*e,c>.05&&!r&&(this.face=Math.atan2(t,n),o.x+=(t*6-o.x)*Math.min(1,e*2),o.z+=(n*6-o.z)*Math.min(1,e*2)),this.anim=(o.y>0,"jump"));a.addScaledVector(o,e),this.collide();const l=this.groundAt(a.x,a.z);if(this.arenaR>0&&a.y<this.arenaC.y-30){a.copy(this.arenaC),o.set(0,0,0),this.mode="ground";return}if(this.waterDeep(a.x,a.z)&&a.y<=Ln-.9){a.y=Ln-.9,this.mode="swim",o.set(0,0,0);return}if(a.y<=l){const h=ks(a.x,a.z);if(this.arenaR===0&&h[1]<.62&&this.mode!=="plunge"&&this.stamina>5){a.y=l,this.mode="climb",this.climbN.set(h[0],h[1],h[2]),o.set(0,0,0);return}this.fallStartY-l,this.mode==="air"&&o.y<-19&&(this.landDamage=xn((-o.y-19)*.03,0,.6)),a.y=l;const d=this.mode;this.mode="ground",o.set(0,0,0),d==="plunge"&&this.onPlungeLand?.()}return}if(this.mode==="climb"){const l=ks(a.x,a.z);this.climbN.set(l[0],l[1],l[2]);const h=l[0],d=l[2],f=Math.hypot(h,d)||1,u=-h/f,g=-d/f;this.face=Math.atan2(u,g);const _=t*u+n*g,m=t*-g+n*u;let p=2.8;this.climbLeap>0&&(this.climbLeap-=e,p=9);const b=Math.abs(_)+Math.abs(m)>.1||this.climbLeap>0;b&&(this.stamina-=(this.climbLeap>0?0:10)*e,this.stamRegenDelay=1);const x=this.climbLeap>0?1:_;if(a.x+=(u*x*Math.max(.25,l[1])+-g*m)*p*e,a.z+=(g*x*Math.max(.25,l[1])+u*m)*p*e,a.y=this.groundAt(a.x,a.z),this.anim="climb",this.moving=b,ks(a.x,a.z)[1]>.7){this.mode="ground";return}this.stamina<=0&&(this.stamina=0,this.mode="air",o.set(h*3,0,d*3),a.x+=h*.6,a.z+=d*.6,this.fallStartY=a.y),this.waterDeep(a.x,a.z)&&a.y<Ln-.5&&(this.mode="swim");return}if(this.mode==="swim"){let l=3.2*c;s&&c>.1&&(l=5.6,this.stamina-=20*e),this.stamina-=4*e,this.stamRegenDelay=1,c>.05&&(this.face=Math.atan2(t,n),a.x+=t/c*l*e,a.z+=n/c*l*e),this.collide();const h=this.groundAt(a.x,a.z);if(h>Ln-1){a.y=h,this.mode="ground";return}a.y=Ln-.9,this.anim="swim",this.moving=c>.05,this.stamina<=0&&(this.stamina=0,this.onDrown?.());return}}}jump(){if(this.mode==="ground"){if(!this.spendStam(0))return;this.mode="air",this.vel.y=8;const e=this.moving?this.sprintT?8:5.5:0;return this.vel.x=Math.sin(this.face)*e,this.vel.z=Math.cos(this.face)*e,this.fallStartY=this.pos.y,this.pos.y+=.05,!0}return this.mode==="air"&&this.stamina>1&&this.pos.y>this.groundAt(this.pos.x,this.pos.z)+1.5?(this.mode="glide",this.vel.y=Math.max(this.vel.y,-1),!0):this.mode==="glide"?(this.mode="air",!0):this.mode==="climb"?(this.spendStam(25)&&(this.climbLeap=.35),!0):(this.mode==="swim",!1)}dash(e,t,n,s){this.mode="dash",this.dashT=s,this.dashDir.set(e*n/s,0,t*n/s),this.face=Math.atan2(e,t)}collide(){const e=this.pos;for(const t of ax(e.x,e.z,px)){if(t.top!==void 0&&e.y>t.top-.2)continue;const n=e.x-t.x,s=e.z-t.z,r=Math.hypot(n,s),a=t.r+.35;r<a&&r>1e-4&&(e.x=t.x+n/r*a,e.z=t.z+s/r*a)}}render(e,t,n,s){this.animT+=e;const{dir:r,flip:a}=Sr(this.face,t);let o=0;this.mode==="dead"||this.hurtT>0?o=Dt.hurt[0]:s>=0?o=s:this.anim==="walk"?o=Dt.walk[Math.floor(this.animT*(this.sprintT?13:9))%4]:this.anim==="climb"?o=Dt.climb[this.moving?Math.floor(this.animT*5)%2:0]:this.anim==="swim"?o=Dt.swim[Math.floor(this.animT*(this.moving?4:2))%2]:this.anim==="glide"?o=Dt.glide[0]:this.anim==="jump"?o=Dt.jump[0]:o=Dt.idle[Math.floor(this.animT*1.6)%2];const c=this.mode==="climb"?1:r;this.bb.setFrame(o,c,c===2?a:!1),this.bb.root.position.copy(this.pos),this.mode==="swim"&&(this.bb.root.position.y+=.2),this.mode==="climb"&&(this.bb.root.position.x+=this.climbN.x*.35,this.bb.root.position.z+=this.climbN.z*.35),this.bb.face(t,n);const l=this.groundAt(this.pos.x,this.pos.z);this.bb.shadow.visible=this.mode!=="swim"&&this.mode!=="climb"&&l>-100,this.bb.shadow.position.set(this.pos.x,Math.max(l,Ln)+.06,this.pos.z);const h=this.pos.y-l;this.bb.shadow.scale.setScalar(Math.max(.4,1.1-h*.05))}}const ki=[20,40,50,60,70,80,90],gx=[0,.38,.65,1,1.28,1.55,1.83],_x=[0,0,.25,.5,.5,.75,1],vx=[0,.65,1.3,1.95,2.6,3.25,3.9],ld=i=>i.rarity<=2?4:6;function hd(i,e,t){const n=1+(e-1)*.085+gx[t];return{hp:i.hp*n,atk:i.atk*n,def:i.def*n}}function fd(i,e,t){return i.atk*(1+(e-1)*.11)+i.atk*vx[t]}function dd(i,e){return i.sub?i.sub.v*(.22+.78*(e-1)/89):0}function ud(i){const e=i.rarity>=5?1:i.rarity===4?.8:i.rarity===3?.6:.45,t=bl(i.rarity);return bu[i.main]*e*(.15+.85*(i.lvl/t))}const bl=i=>i>=5?20:i===4?16:i===3?12:8,xx=i=>1+(i-1)*.1;function yx(i){return[i.tal[0],i.tal[1]+(i.cons>=3?3:0),i.tal[2]+(i.cons>=5?3:0)]}function pd(i){const e={};for(const t of i){const n=je(t).el;e[n]=(e[n]||0)+1}return Object.keys(e).filter(t=>e[t]>=2)}function bx(i){const e={};for(const t of Fa){const n=Ta(i.relics[t]);n&&(e[n.set]=(e[n.set]||0)+1)}return e}function Mx(i,e,t,n=L.party){const s=je(i.id),r=hd(s,i.lvl,i.asc),a={},o=(u,g)=>a[u]=(a[u]||0)+g;o(s.asc.k,s.asc.v*_x[i.asc]);let c=0;if(e){const u=Ht(e.id);if(c=fd(u,e.lvl,e.asc),u.sub&&o(u.sub.k,dd(u,e.lvl)),u.eff)for(const g in u.eff)o(g,u.eff[g]*(1+.25*(e.ref-1)))}const l={};for(const u of t)if(u){o(u.main,ud(u));for(const g of u.subs)o(g.k,g.v);l[u.set]=(l[u.set]||0)+1}for(const u of Zc){if((l[u.id]||0)>=2)for(const g in u.b2)o(g,u.b2[g]);if((l[u.id]||0)>=4)for(const g in u.b4)o(g,u.b4[g])}let h=0;for(const u of pd(n))u==="fire"&&o("atkP",.25),u==="water"&&(o("hpP",.25),o("heal",.15)),u==="volt"&&o("er",.3),u==="frost"&&o("cr",.15),u==="star"&&(h+=.15),u==="shadow"&&o("all",.15);const d=r.atk+c,f={};for(const u of["fire","water","volt","frost","star","shadow","phys"])f[u]=(a[u]||0)+(u!=="phys"&&a.el||0)+(a.all||0);for(const u of["na","ca","skill","burst","react","plunge"])f[u]=a[u]||0;return{hp:r.hp*(1+(a.hpP||0))+(a.hp||0),atk:d*(1+(a.atkP||0))+(a.atk||0),def:r.def*(1+(a.defP||0))+(a.def||0),em:a.em||0,cr:.05+(a.cr||0),cd:.5+(a.cd||0),er:1+(a.er||0),heal:a.heal||0,dmg:f,baseAtk:d,cdr:h}}function md(i,e){const t=L.chars[i];return Mx(t,L.weapons.find(n=>n.uid===t.weapon),Fa.map(n=>Ta(t.relics[n])),e)}const Et=(i,e,t,n,s,r)=>[i,e,[t,"e3",3],n,[s,"q3",3],r],gd={sora:Et(["星を拾う手","echarge",1],["流星群","qmore",3],"瞬く記憶",["星の子","summon",1,"星の子"],"夜明けの約束",["星降る夜","echo",.6]),homura:Et(["焔の再鍛","qrefund",15],["焼き入れ","shred",.2],"火花散る",["炉の鼓動","partybuff",.2],"紅蓮の誓い",["灼熱の追撃","nawave",1.5]),shizuku:Et(["しずくの恵み","healhit",.02],["長い水鏡","emore",4],"澄んだ水面",["水の衣","shieldq",.3],"満月の潮",["二度目の満ち潮","echo",.5]),raika:Et(["雷の枝分かれ","emore",2],["電光石火","critup",.2],"稲妻の足音",["感電の印","shred",.25],"百雷の夜",["雷神の再来","echo",.7]),yukine:Et(["灯籠の長い夜","emore",4],["雪うさぎ","summon",.8,"雪うさぎ"],"冷たい指先",["研ぎ澄ます","critup",.15],"白夜の祈り",["終わらない吹雪","qmore",4]),kurou:Et(["二つの影","echarge",1],["影喰らい","shred",.3],"闇の歩法",["月なき夜","partybuff",.25],"蝕の剣",["影法師の追撃","nawave",2]),mikoto:Et(["星の囁き","energy",6],["王家の祝福","partybuff",.2],"星図を読む",["癒やしの星光","healhit",.03],"天球の歌",["もう一つの天球","echo",.6]),kagura:Et(["連なる火矢","emore",3],["燃え盛る空","qmore",2],"狐の嗅覚",["狩人の目","critup",.2],"炎舞の調べ",["狐火","summon",1.5,"狐火"]),tsumugi:Et(["もう一本の糸","emore",2],["糸巻きの元気","energy",4],"仕立ての技",["ほつれ目","shred",.15],"晴れ着の舞",["火の糸人形","summon",1,"糸人形"]),hayate:Et(["二度踏み","echarge",1],["見切り","critup",.15],"疾風の足",["追い風の剣","nawave",1.2],"雷鳴の構え",["残響剣","echo",.5]),minamo:Et(["癒やしの波紋","healhit",.02],["潮の満ち引き","energy",5],"水面の鏡",["大漁祈願","partybuff",.15],"海の歌",["小魚の群れ","summon",.8,"小魚"]),kohaku:Et(["琥珀の殻","shieldq",.25],["力持ち","ecd",.2],"大地の鼓動",["仲間の盾","partybuff",.15],"星を担ぐ",["余震","echo",.6]),shino:Et(["鎖の継ぎ足し","emore",2],["影縫い","shred",.2],"黙読",["夜の頁","energy",5],"禁書の棚",["影の書","summon",1,"影の書"]),rin:Et(["早鳴りの鈴","ecd",.25],["澄んだ音色","critup",.15],"鈴の輪",["凍える響き","shred",.2],"氷華の舞",["鈴の追撃","nawave",1.2]),taki:Et(["二段昇り","echarge",1],["滝の恵み","healhit",.015],"鯉の鱗",["水しぶき","qrefund",12],"瀑布の心",["もう一つの滝","echo",.5]),akane:Et(["夕陽二つ","emore",1],["長い黄昏","qmore",4],"天才のひらめき",["焦げた鍋","shred",.2],"魔女の帽子",["小さな太陽","summon",1.3,"小さな太陽"]),ibuki:Et(["長い見張り","emore",4],["雷の予報","energy",5],"物見の目",["落雷の勘","critup",.15],"空の太鼓",["連鎖落雷","qmore",3]),yuzu:Et(["薬草の香り","healhit",.02],["根を張る","emore",4],"陽だまり",["花の守り","shieldq",.2],"満開の庭",["元気の素","partybuff",.2]),fuyu:Et(["長い冬","qmore",4],["凍てつく刃","shred",.2],"雪解け",["寝起きの一撃","ecd",.25],"冬将軍",["吹雪の追撃","nawave",1.4]),yoru:Et(["夜の渦","emore",2],["百一夜","qmore",6],"夜目",["月影の狙い","critup",.15],"夜鳴きの歌",["夜鳥","summon",1,"夜鳥"]),kaede:Et(["長い秋","emore",4],["落ち葉拾い","qrefund",12],"紅の髪飾り",["燃える闘志","critup",.15],"紅葉の嵐",["葉舞の追撃","nawave",1.3]),nagi:Et(["凪の膜","shieldq",.2],["静かな海","ecd",.2],"灯台の灯",["潮だまり","healhit",.015],"大凪の心",["返す波","echo",.5])},tf=(i,e)=>["volley","chain","meteor"].includes(i.kind)?`の数が${e}つ増える`:["field","turret","vortex","infuse","buff"].includes(i.kind)?`の効果時間が${e}秒のびる`:`の範囲とダメージが${Math.round(e*10)}%アップ`;function nf(i,e){const t=je(i),[n,s,r,a]=gd[i][e],o=Math.round(r*100)+"%",c={e3:`元素スキル「${t.skill.name}」のレベル+3`,q3:`元素爆発「${t.burst.name}」のレベル+3`,echarge:`元素スキル「${t.skill.name}」を2回続けて使えるようになる`,ecd:`元素スキルのクールタイム-${o}`,emore:`元素スキル「${t.skill.name}」${tf(t.skill,r)}`,qmore:`元素爆発「${t.burst.name}」${tf(t.burst,r)}`,qrefund:`元素爆発を使った後、元素エネルギーが${r}回復する`,summon:`元素スキルを使うと「${a}」が現れ、8秒間近くの敵を攻撃する（攻撃力の${o}）`,echo:`元素爆発の2秒後、もう一度だけ同じ攻撃が起きる（ダメージ${o}）`,healhit:`元素スキルが敵に当たると、出場中のキャラのHPを最大HPの${(r*100).toFixed(1)}%回復（1秒に1回）`,partybuff:`元素爆発の後、チーム全員の与えるダメージ+${o}（12秒）`,shred:`元素スキルと元素爆発が当たった敵の元素耐性-${o}（8秒）`,critup:`元素スキルの後、会心率+${o}（8秒）`,shieldq:`元素爆発を使うと、最大HPの${o}のシールドを得る`,nawave:`通常攻撃の4回目ごとに元素の波を放つ（攻撃力の${o}）`,energy:`元素スキルを使うと、元素エネルギーが${r}回復する`};return{name:n,desc:c[s]}}const Sx=(i,e)=>(gd[i]||[]).slice(0,e).map(t=>({code:t[1],v:t[2]}));function Ex(i,e,t){let n=0;for(const s of Sx(i,e))s.code===t&&(n+=s.v);return n}class Tx{constructor(e,t){this.id=e,this.party=t,this.hp=1,this.energy=0,this.cdE=0,this.infuse=null,this.dead=!1,this.tal=[1,1,1],this.charges=1,this.critT=0,this.naCount=0,this.healCd=0,this.def=je(e),this.refresh(!0)}get cs(){return L.chars[this.id]}refresh(e=!1){const t=this.st?this.hp/this.st.hp:1;this.st=md(this.id,this.party),this.tal=yx(this.cs),this.hp=e?this.st.hp:Math.max(this.dead?0:1,t*this.st.hp)}cv(e){return Ex(this.id,this.cs.cons,e)}get maxCharges(){return 1+this.cv("echarge")}get eCdFull(){return this.def.skill.cd*(1-this.st.cdr)*(1-this.cv("ecd"))}mult(e){return xx(this.tal[e])}get maxEnergy(){return this.def.burst.cost}}const As=(i,e)=>({id:"puff_"+i,name:e,body:"puff",el:i,hp:260,atk:14,spd:2.6,range:1.6,atkKind:"lunge",atkEl:i,cd:2.6,scale:1,drop:"puff",exp:20}),Rs=(i,e)=>({id:"wisp_"+i,name:e,body:"wisp",el:i,hp:300,atk:16,spd:2.2,range:9,atkKind:"shoot",atkEl:i,cd:3.2,scale:1,drop:"wisp",exp:25}),wx=[As("fire","焔ぷるん"),As("water","潮ぷるん"),As("volt","雷ぷるん"),As("frost","霜ぷるん"),As("star","星ぷるん"),As("shadow","影ぷるん"),Rs("fire","焔の精霊"),Rs("water","潮の精霊"),Rs("volt","雷の精霊"),Rs("frost","霜の精霊"),Rs("star","星の精霊"),Rs("shadow","影の精霊"),{id:"bandit",name:"山賊",body:"humanoid",hp:420,atk:20,spd:3.2,range:2,atkKind:"smash",atkEl:"phys",cd:2.4,scale:1,drop:"humanoid",exp:30,weapon:"claymore",look:{hair:"#5a3a2a",style:"short",skin:"#d8a880",eye:"#2a1a1a",c1:"#6a4a2a",c2:"#a88a5a",c3:"#3a2a1a",acc:"mask"}},{id:"archer",name:"山賊の弓兵",body:"humanoid",hp:320,atk:18,spd:3,range:12,atkKind:"shoot",atkEl:"phys",cd:2.8,scale:1,drop:"humanoid",exp:30,weapon:"bow",look:{hair:"#3a3a2a",style:"short",skin:"#d8a880",eye:"#2a1a1a",c1:"#4a5a2a",c2:"#a8a07a",c3:"#2a2a1a",acc:"hood"}},{id:"shaman",name:"呪術師",body:"humanoid",el:"shadow",hp:360,atk:22,spd:2.6,range:11,atkKind:"cast",atkEl:"shadow",cd:3.4,scale:1,drop:"humanoid",exp:35,weapon:"catalyst",look:{hair:"#2a1a3a",style:"long",skin:"#c8a090",eye:"#c070ff",c1:"#3a1a4a",c2:"#7a4aa8",c3:"#c070ff",acc:"hood",skirt:!0}},{id:"golem",name:"岩兵",body:"golem",hp:900,atk:30,spd:1.8,range:2.6,atkKind:"smash",atkEl:"phys",cd:3.2,scale:1.4,drop:"golem",exp:50,res:.3},{id:"boss_puff",name:"ぷるん大王",body:"puff",el:"water",hp:6e3,atk:34,spd:2.4,range:4,atkKind:"smash",atkEl:"water",cd:2.6,scale:3.4,boss:!0,drop:"puff",exp:600},{id:"boss_golem",name:"岩鎧の巨人",body:"golem",el:"fire",hp:7e3,atk:44,spd:1.8,range:5,atkKind:"smash",atkEl:"fire",cd:3,scale:3.2,boss:!0,drop:"golem",exp:800,res:.1},{id:"boss_wisp",name:"霜の大精霊",body:"wisp",el:"frost",hp:7500,atk:40,spd:2,range:14,atkKind:"cast",atkEl:"frost",cd:2.4,scale:3.4,boss:!0,drop:"wisp",exp:800},{id:"boss_knight",name:"影の騎士",body:"humanoid",el:"shadow",hp:1e4,atk:52,spd:3.6,range:3.2,atkKind:"smash",atkEl:"shadow",cd:2.2,scale:2.4,boss:!0,drop:"humanoid",exp:1200,weapon:"sword",look:{hair:"#1a1a28",style:"long",skin:"#8a8aa0",eye:"#ff4a6a",c1:"#14101c",c2:"#3a2a5a",c3:"#a070ff",acc:"horns",cape:!0}}],Aa=i=>wx.find(e=>e.id===i);let Uo=1;class Cx{constructor(e,t,n,s,r,a){this.scene=e,this.pos=new D,this.home=new D,this.face=0,this.aura=null,this.innate=null,this.innateCd=0,this.icd=new Map,this.frozen=0,this.slow=0,this.slowT=0,this.resdown=0,this.resT=0,this.dots=[],this.state="idle",this.stateT=0,this.atkCd=1.5,this.target=null,this.targetPid=0,this.animT=Math.random()*3,this.pending=null,this.arena=!1,this.deadT=0,this.groundFn=st,this.hurtFlash=0,this.remote=!1,this.netT=0,this.netPos=new D,this.moveTo=new D,this.moves=0,this.id=a??Uo++,a&&a>=Uo&&(Uo=a+1);const o=this.def=Aa(t);this.lvl=n,this.body=o.body;const c=Math.pow(1+n*.06,1.6)*(1+Math.pow(n/60,3)),l=Math.pow(1+n*.08,1.45);this.maxHp=this.hp=o.hp*c*.4,this.atk=o.atk*l*(o.boss?.8:1),this.innate=o.el&&o.body!=="humanoid"?o.el:null,this.innate&&(this.aura={el:this.innate,t:999});const h=o.el?ct[o.el].color:"#a8a8b0";o.body==="puff"?this.bb=new li(Qv(h,!!o.boss),Ns.puff,ri.puff,o.scale,ri.puff-2):o.body==="wisp"?this.bb=new li(ex(h),Ns.wisp,ri.wisp,o.scale,ri.wisp-1):o.body==="golem"?this.bb=new li(tx(o.el?ct[o.el].color:"#ffb04a",o.boss?"#6a4a3a":"#8a8478"),Ns.golem,ri.golem,o.scale*.9,ri.golem-2):this.bb=new li(Ni("enemy_"+o.id,o.look,o.weapon||"sword"),tn,yn,o.scale),this.radius=(o.body==="golem"?.9:.6)*o.scale,this.pos.set(s,st(s,r),r),this.home.copy(this.pos),this.netPos.copy(this.pos),e.add(this.bb.root),e.add(this.bb.shadow)}get boss(){return!!this.def.boss}get alive(){return this.state!=="dead"}dispose(){this.bb.dispose()}render(e,t,n){this.animT+=e,this.hurtFlash=Math.max(0,this.hurtFlash-e),this.bb.flash=this.hurtFlash>.06?1:0;const s=this.body==="wisp"?1.2*this.def.scale+Math.sin(this.animT*2)*.2:0,r=this.state==="chase"||this.state==="return";if(this.body==="humanoid"){const{dir:o,flip:c}=Sr(this.face,t);let l=Dt.idle[Math.floor(this.animT*1.6)%2];this.state==="dead"?l=Dt.hurt[0]:this.state==="wind"?l=Dt.atk[0]:this.state==="recover"&&this.stateT>.25?l=this.stateT>.4?Dt.atk[1]:Dt.atk[2]:r?l=Dt.walk[Math.floor(this.animT*8)%4]:this.hurtFlash>0&&(l=Dt.hurt[0]),this.frozen>0&&(l=Dt.idle[0]),this.bb.setFrame(l,o,o===2?c:!1)}else{let o=Math.floor(this.animT*2.5)%2;r&&(o=2+Math.floor(this.animT*5)%2),this.state==="wind"&&(o=4),this.state==="recover"&&this.stateT>.3&&(o=5),this.hurtFlash>.1&&(o=6),this.frozen>0&&(o=0);const{flip:c}=Sr(this.face,t);this.bb.setFrame(o,0,c)}this.bb.root.position.set(this.pos.x,this.pos.y+s,this.pos.z),this.state==="dead"&&(this.deadT+=e,this.bb.root.scale.setScalar(Math.max(.01,1-this.deadT*2))),this.bb.face(t,this.frozen>0?new ke(.7,.9,1.4):n);const a=this.groundFn(this.pos.x,this.pos.z);this.bb.shadow.position.set(this.pos.x,Math.max(a,Ln)+.07,this.pos.z),this.bb.shadow.visible=this.state!=="dead"}inIcd(e,t,n){const s=this.icd.get(e)||-99;return n-s<t?!0:(this.icd.set(e,n),!1)}}const Ic={sword:{mv:[.48,.46,.6,.72],dur:[.3,.3,.34,.45],r:2.3,ca:1.3,caSt:20},claymore:{mv:[.8,.78,.92,1.2],dur:[.5,.5,.55,.7],r:2.8,ca:1.7,caSt:25},polearm:{mv:[.4,.4,.48,.55,.7],dur:[.26,.26,.28,.3,.42],r:3,ca:1.25,caSt:25},bow:{mv:[.42,.42,.5,.58],dur:[.32,.32,.36,.44],r:16,ca:1.8,caSt:0,ranged:!0},catalyst:{mv:[.52,.5,.68],dur:[.4,.4,.5],r:12,ca:1.6,caSt:50,ranged:!0}},Ax=i=>18+i*9+Math.pow(i/10,2)*14;function as(i,e,t,n,s,r,a,o={}){const c=e.st,l=i.buffAtk>0?i.buffAtkVal:0;let h=c.dmg[n]+(c.dmg[s]||0)+(e.infuse&&(s==="na"||s==="ca"||s==="plunge")?e.infuse.bonus:0)+(i.partyDmgT>0?i.partyDmgV:0);const d=c.cr+(i.eclipse>0?.2:0)+(e.critT>0?e.cv("critup"):0),f=s==="skill"||s==="burst"?e.cv("shred"):0,u=Math.random()<d;return{src:e.id,pid:i.pid,atk:c.atk+l,mv:t,el:n,cat:s,cr:d,cd:c.cd,bonus:h,em:c.em,lvl:e.cs.lvl,rb:c.dmg.react||0,icd:e.id+r,icdT:a,crit:u,...f?{shred:f}:{},...o}}function _d(i,e,t,n=0){if(!e.alive)return;let s=null;t.el!=="phys"&&!e.inIcd(t.icd+t.el,t.icdT,i.now)&&(e.aura&&e.aura.el!==t.el?(s=zv(e.aura.el,t.el),e.aura=null,e.innate&&(e.innateCd=1.6)):e.aura={el:t.el,t:t.strong?9:6});const r=(t.lvl+100)/(t.lvl+100+(e.lvl+100)*(1-(e.resT>0,0))),a=(e.def.res||.1)+(e.innate===t.el?.3:0)-(e.resT>0?e.resdown:0),o=a<0?1-a/2:1-a;let c=t.atk*t.mv*(1+t.bonus)*(t.crit?1+t.cd:1)*r*o,l="";const h=1+16*t.em/(t.em+2e3)+t.rb,d=Ax(t.lvl)*h;if(s){l=s.name,i.stats.reacts++,ne.emit("daily","react",1);const f=e.pos.clone();switch(i.fxAt("react-bloom",f,s.kind==="freeze"?"frost":t.el,1),s.kind){case"amp":c*=s.v*(1+2.78*t.em/(t.em+1400)+t.rb);break;case"buff":c*=s.v,i.eclipse=s.dur;break;case"aoe":i.aoe(f,s.r,u=>{u!==e&&Ti(i,u,d*s.v*.6,t)}),Ti(i,e,d*s.v,t),s.dur&&i.aoe(f,s.r,u=>{u.slow=.6,u.slowT=s.dur}),s.name==="流星"&&i.fxAt("starfall",f,"volt",.6);break;case"chain":{let u=0;for(const g of i.enemiesNear(f,s.r))g===e||u>=s.v2||(u++,Ti(i,g,d*s.v*.8,t),i.fxAt("hit-spark",g.pos,"fire",1));Ti(i,e,d*s.v,t);break}case"energy":i.aoe(f,s.r,u=>Ti(i,u,d*s.v,t)),i.gainEnergy(s.v2,null);break;case"dot":{const u=s.r?i.enemiesNear(f,s.r):[e];for(const g of u)g.dots.push({dmg:d*s.v,t:s.dur,tick:0,src:t.src,el:t.el});break}case"freeze":e.frozen=s.dur;break;case"heal":i.healParty(s.v,t.pid);break;case"pull":i.aoe(f,s.r,u=>{const g=f.clone().sub(u.pos);g.y=0;const _=g.length();_>.5&&!u.boss&&u.pos.addScaledVector(g,Math.min(1,(_-.5)/_)),Ti(i,u,d*s.v*.5,t)});break;case"resdown":e.resdown=s.v2,e.resT=s.dur,s.r?i.aoe(f,s.r,u=>Ti(i,u,d*s.v,t)):Ti(i,e,d*s.v,t);break;case"shield":i.addShield(s.v,t.pid);break;case"slow":e.slow=s.v,e.slowT=s.dur;break}}if(t.shred&&(e.resdown=Math.max(e.resT>0?e.resdown:0,t.shred),e.resT=Math.max(e.resT,8)),i.damageEnemy(e,c,t.crit,t.el,l,t.src),t.kb&&!e.boss&&e.alive){const f=e.pos.clone().sub(i.posOfPid(t.pid));f.y=0,f.normalize(),e.pos.addScaledVector(f,t.kb)}}function Ti(i,e,t,n){if(!e.alive)return;const s=1-((e.def.res||.1)-(e.resT>0?e.resdown:0));i.damageEnemy(e,t*s,!1,n.el,"",n.src,!0)}function Ra(i,e,t,n){let s=null,r=t*t;for(const a of i.enemies.values()){if(!a.alive)continue;const o=a.pos.x-e.x,c=a.pos.z-e.z,l=o*o+c*c;l<r&&(r=l,s=a)}return s}function Lc(i,e=7){const t=i.player,n=Ra(i,t.pos,e);return n&&(t.face=Math.atan2(n.pos.x-t.pos.x,n.pos.z-t.pos.z)),n}function Rx(i,e,t,n){const s=Ic[e.def.weapon],r=i.player,a=Lc(i,s.ranged?14:6),o=e.infuse?e.infuse.el:e.def.weapon==="catalyst"?e.def.el:"phys",c=(n?s.ca:s.mv[t])*e.mult(0),l=n?"ca":"na",h=Math.sin(r.face),d=Math.cos(r.face);if(e.def.weapon==="bow"){const _=n?e.def.el:o;i.shoot(e,r.pos.clone().add(new D(h*.8,1.1,d*.8)),a,26,as(i,e,c,_,l,n?"ca":"na",n?0:2.5,{strong:n}),{r:.6,scale:n?.9:.6});return}if(e.def.weapon==="catalyst"){i.shoot(e,r.pos.clone().add(new D(h*.6,1.2,d*.6)),a,15,as(i,e,c,e.def.el,l,"na",2.5),{r:.7,scale:n?1.2:.8,aoe:n?2.5:0});return}const f=s.r*(n?1.15:1),u=r.pos.clone().add(new D(h*f*.45,0,d*f*.45)),g=e.def.weapon==="polearm";if(g){const _=r.pos.clone().add(new D(h*f*.85,.9,d*f*.85));i.fxAt("hit-spark",_,o,.7),i.fxAt("orb",r.pos.clone().add(new D(h*f*.5,.9,d*f*.5)),o,.8,h*Math.cos(i.camYaw)-d*Math.sin(i.camYaw)<0,{life:.12,loop:!0})}else i.fxAt("crescent",u.clone().setY(u.y+.2),o,e.def.weapon==="claymore"?1.3:1,t%2===1);i.hitArc(r.pos,r.face,f,g?.6:1.2,as(i,e,c,o,l,"na",2.5,{kb:e.def.weapon==="claymore"?.8:.25})),Px(i,e,n),i.gainEnergy(.4,e)}function Px(i,e,t){const n=e.cv("nawave");if(!n||t||(e.naCount++,e.naCount%4))return;const s=i.player,r=new D(Math.sin(s.face),0,Math.cos(s.face));i.shootDir(e,s.pos.clone().add(new D(0,1,0)),r,20,as(i,e,n,e.def.el,"na","nw",.5),{r:1.6,pierce:!0,scale:1.6,life:.6})}function kx(i,e){const t=i.player;i.fxAt("sigil-burst",t.pos,e.infuse?e.infuse.el:"phys",.7),i.shake(.25),i.hitCircle(t.pos,3,as(i,e,1.9*e.mult(0),e.infuse?e.infuse.el:e.def.weapon==="catalyst"?e.def.el:"phys","plunge","pl",1,{kb:1.2}))}function Uc(i,e,t,n=1,s=!1){const r=t?e.def.burst:e.def.skill,a=i.player,o=e.def.el,c=e.cv(t?"qmore":"emore"),l={...r};c&&(["volley","chain","meteor"].includes(l.kind)?l.n=(l.n||1)+c:["field","turret","vortex","infuse","buff"].includes(l.kind)?l.dur=(l.dur||8)+c:(l.r=(l.r||3)*(1+c*.1),l.mv=l.mv*(1+c*.1)));const h=t?2:1,d=l.mv*e.mult(h)*n,f=t?"burst":"skill",u=t?s?"Q2":"Q":"E";s||Dx(i,e,t);const g=Math.sin(a.face),_=Math.cos(a.face),m=a.pos.clone().add(new D(g*1.5,0,_*1.5)),p=(R=d,M=u,C=.4,P={})=>as(i,e,R,o,f,M,C,{strong:t,...P});let b=!1;const x=()=>{const R=e.cv("healhit");R&&e.healCd<=0&&!t&&(e.healCd=1,i.healActive(R,e)),!t&&!b&&(b=!0,i.later(.5,()=>i.gainEnergy(12,e,!0)))},v=(R,M,C)=>{const P=i.hitCircle(R,M,p(C,u+"f",.9));return P&&x(),P};switch(l.kind){case"wave":{Lc(i,10);const R=new D(Math.sin(a.face),0,Math.cos(a.face));i.shootDir(e,a.pos.clone().add(new D(0,1,0)),R,20,p(),{r:l.r||1.6,pierce:!0,scale:1.8,life:.8},x);break}case"nova":{const R=t?a.pos.clone():m,M=l.r||4;i.fxAt(t?"starfall":"sigil-burst",R,o,M/(t?4.8:3)),t&&i.shake(.35),i.later(t?.32:.25,()=>{i.hitCircle(R,M,p(d,u,0,{kb:1}))&&x()}),l.heal&&(i.healParty(l.heal,i.pid,e),i.fxAt("mend",a.pos,null,1.2));break}case"dash":{Lc(i,8);const R=Math.sin(a.face),M=Math.cos(a.face);a.dash(R,M,6,.22),a.invuln=.3,i.fxAt("crescent",a.pos.clone().add(new D(R*2,.4,M*2)),o,1.4);const C=a.pos.clone();i.later(.22,()=>{C.clone().lerp(a.pos,.5),i.fxAt("sigil-burst",a.pos,o,.7),i.hitCapsule(C,a.pos,l.r||2,p(d,u,0,{kb:.8}))&&x()});break}case"turret":{const R=m.clone();R.y=st(R.x,R.z),i.addField({pos:R,r:l.r||10,t:l.dur||10,tick:0,every:1.5,fxName:"ward",el:o,fxEvery:1.2,fxScale:.8,onTick:M=>{const C=Ra(i,M.pos,M.r);C&&i.shoot(e,M.pos.clone().setY(M.pos.y+1.4),C,18,p(d,u+"t",1.5),{r:.6,scale:.7},x)}}),i.fxAt("beacon",R,o,.5);break}case"field":{const R=a.pos.clone(),M=l.r||5;i.addField({pos:R,r:M,t:l.dur||8,tick:0,every:1,fxName:"sigil-burst",el:o,fxEvery:1,fxScale:M/3,onTick:C=>{v(C.pos,C.r,d),l.heal&&i.healActive(l.heal,e)}});break}case"shield":{const R=a.pos.clone();i.fxAt("sigil-burst",R,o,(l.r||3.5)/3),i.later(.25,()=>{i.hitCircle(R,l.r||3.5,p(d,u,0,{kb:1}))&&x()});const M=e.def.asc.k==="defP"||e.def.id==="kohaku"?e.st.def*4:e.st.hp;i.addShieldAbs(M*(l.shield||.25),15),l.heal&&i.healParty(l.heal,i.pid,e);break}case"volley":{const R=i.enemiesNear(a.pos,l.r||10).filter(C=>C.alive),M=l.n||3;for(let C=0;C<M;C++)i.later(C*(t?.09:.08),()=>{const P=R.length?R[C%R.length]:null,w=a.face+(C-(M-1)/2)*.18,S=new D(Math.sin(w),0,Math.cos(w)),k=t?P?P.pos.clone().add(new D((Math.random()-.5)*3,9,(Math.random()-.5)*3)):a.pos.clone().addScaledVector(S,4+C*.4).setY(a.pos.y+9):a.pos.clone().add(new D(0,1.1,0));P?i.shoot(e,k,P,t?24:22,p(d,u+"v",.3),{r:.7,scale:.8},x):i.shootDir(e,k,t?new D(0,-1,0):S,22,p(d,u+"v",.3),{r:.7,scale:.8,life:.7},x)});break}case"infuse":{e.infuse={el:o,t:l.dur||10,bonus:l.buff||.2},t?(i.fxAt("starfall",a.pos,o,(l.r||4)/4.8),i.shake(.3),i.later(.32,()=>i.hitCircle(a.pos,l.r||4,p(d,u,0,{kb:1})))):(i.fxAt("sigil-burst",a.pos,o,.8),i.later(.2,()=>{i.hitCircle(a.pos,l.r||3,p(d,u))&&x()}));break}case"buff":{const R=a.pos.clone();i.buffAtk=l.dur||12,i.buffAtkVal=e.st.baseAtk*(l.buff||.3),i.addField({pos:R,r:l.r||5,t:l.dur||12,tick:0,every:2,fxName:"sigil-burst",el:o,fxEvery:1.5,fxScale:(l.r||5)/3,onTick:M=>{v(M.pos,M.r,d*.5)}}),i.later(.25,()=>{i.hitCircle(R,l.r||5,p())&&x()});break}case"meteor":{const R=l.n||1,M=i.enemiesNear(a.pos,14).filter(C=>C.alive).sort((C,P)=>C.pos.distanceToSquared(a.pos)-P.pos.distanceToSquared(a.pos));t&&i.shake(.2);for(let C=0;C<R;C++)i.later(C*.28,()=>{const P=M.length?M[C%M.length].pos.clone():a.pos.clone().add(new D(Math.sin(a.face+C)*(3+C),0,Math.cos(a.face+C)*(3+C)));P.y=st(P.x,P.z),i.fxAt("starfall",P,o,(l.r||3.5)/4.8),i.later(.33,()=>{i.shake(.15),i.hitCircle(P,l.r||3.5,p(d,u+"m"+C,0,{kb:.8}))&&x()})});break}case"chain":{const R=new Set;let M=Ra(i,a.pos,l.r||8);for(let C=0;C<(l.n||3)&&M;C++){const P=M;R.add(P),i.later(C*.08,()=>{i.fxAt("hit-spark",P.pos.clone().setY(P.pos.y+.8),o,1.4),i.sendHit(P,p(d,u+"c",.2)),x()});let w=null,S=49;for(const k of i.enemies.values()){if(!k.alive||R.has(k))continue;const F=k.pos.distanceToSquared(P.pos);F<S&&(S=F,w=k)}M=w}R.size||i.fxAt("hit-spark",m.setY(m.y+1),o,1.5);break}case"vortex":{const R=m.clone().addScaledVector(new D(g,0,_),2);R.y=st(R.x,R.z),i.addField({pos:R,r:l.r||6,t:l.dur||4,tick:0,every:.5,fxName:"react-bloom",el:o,fxEvery:.45,fxScale:1.3,onTick:M=>{i.pullEnemies(M.pos,M.r,1.6),v(M.pos,M.r*.6,d)}});break}}ne.emit("daily","skill",t?0:1)}function Dx(i,e,t){const n=i.player;if(t){const s=e.cv("qrefund");s&&i.later(1,()=>e.energy=Math.min(e.maxEnergy,e.energy+s));const r=e.cv("partybuff");r&&(i.partyDmgT=12,i.partyDmgV=r,ne.emit("toast",`チームの与えるダメージ+${Math.round(r*100)}%`));const a=e.cv("shieldq");a&&i.addShieldAbs(e.st.hp*a,12);const o=e.cv("echo");o&&i.later(2,()=>Uc(i,e,!0,o,!0))}else{const s=e.cv("energy");s&&(e.energy=Math.min(e.maxEnergy,e.energy+s)),e.cv("critup")&&(e.critT=8);const r=e.cv("summon");if(r){const a=n.pos.clone().add(new D(Math.sin(n.face+1.6)*1.6,0,Math.cos(n.face+1.6)*1.6));a.y=st(a.x,a.z),i.addField({pos:a,r:10,t:8,tick:.4,every:1.5,fxName:"mote",el:e.def.el,fxEvery:.6,fxScale:1.6,onTick:o=>{const c=Ra(i,o.pos,o.r);c&&i.shoot(e,o.pos.clone().setY(o.pos.y+1.2),c,18,as(i,e,r,e.def.el,"skill","sm",1.5),{r:.6,scale:.7})}})}}}function Ix(i,e,t){if(!e.alive)return;e.aura&&e.aura.t<900&&(e.aura.t-=t,e.aura.t<=0&&(e.aura=null)),e.innate&&!e.aura&&(e.innateCd-=t,e.innateCd<=0&&(e.aura={el:e.innate,t:999})),e.resT>0&&(e.resT-=t),e.slowT>0&&(e.slowT-=t,e.slowT<=0&&(e.slow=0));for(const d of e.dots)d.t-=t,d.tick-=t,d.tick<=0&&(d.tick=.6,i.damageEnemy(e,d.dmg*.5,!1,d.el,"",d.src,!0));if(e.dots=e.dots.filter(d=>d.t>0),!e.alive)return;if(e.frozen>0){e.frozen-=t;return}const n=e.def.spd*(e.slow?e.slow:1)*(e.boss&&e.hp<e.maxHp*.5?1.25:1),s=i.nearestPlayer(e.pos);e.stateT+=t,e.atkCd-=t*(e.boss&&e.hp<e.maxHp*.5?1.4:1);const r=e.boss?28:15,a=(d,f)=>e.groundFn(d,f),o=(d,f,u)=>{const g=d-e.pos.x,_=f-e.pos.z,m=Math.hypot(g,_);if(m<.05)return;e.face=Math.atan2(g,_);const p=Math.min(m,u*t)/m,b=e.pos.x+g*p,x=e.pos.z+_*p,v=a(b,x);v>-50&&Math.abs(v-e.pos.y)<2.5+u*t&&(e.pos.x=b,e.pos.z=x,e.pos.y=v)};if(e.state==="return"){o(e.home.x,e.home.z,n*1.5),e.hp=Math.min(e.maxHp,e.hp+e.maxHp*.3*t),e.pos.distanceTo(e.home)<1&&(e.state="idle");return}if(!s||s.d>r*r||!e.arena&&e.pos.distanceToSquared(e.home)>45*45){e.state!=="idle"&&(e.state=e.arena?"idle":"return",e.stateT=0),e.state==="idle"&&e.body!=="golem"&&Math.sin(i.now*.7+e.id)>.92&&o(e.home.x+Math.sin(e.id)*3,e.home.z+Math.cos(e.id)*3,n*.4);return}const c=s.pos,l=Math.sqrt(s.d);if(e.state==="wind"){e.face=Math.atan2(c.x-e.pos.x,c.z-e.pos.z),e.stateT>=(e.boss?.65:.5)&&(Lx(i,e,c),e.state="recover",e.stateT=0);return}if(e.state==="recover"){e.stateT>.7&&(e.state="chase",e.stateT=0);return}e.state="chase";const h=e.def.atkKind==="shoot"||e.def.atkKind==="cast"?Math.min(e.def.range*.8,9):e.def.range*.8;l>h?o(c.x,c.z,n):e.def.atkKind==="shoot"&&l<4?o(e.pos.x-(c.x-e.pos.x),e.pos.z-(c.z-e.pos.z),n*.7):e.face=Math.atan2(c.x-e.pos.x,c.z-e.pos.z),l<=e.def.range+.5&&e.atkCd<=0&&(e.state="wind",e.stateT=0,e.atkCd=e.def.cd*(.85+Math.random()*.3),e.moves++,(e.boss||e.def.atkKind==="cast")&&i.telegraph(e,c))}function Lx(i,e,t){const n=e.def,s=n.atkEl,r=n.scale;let a=n.atkKind;if(e.boss&&(a=["smash","shoot","cast"][e.moves%3]),a==="lunge"){const o=t.clone().sub(e.pos).setY(0).normalize();e.pos.addScaledVector(o,Math.min(2.2,e.pos.distanceTo(t)-.6)),i.enemyAttack(e,e.pos,1.6*Math.max(1,r*.8),1,s)}else if(a==="smash"){const o=Math.sin(e.face),c=Math.cos(e.face),l=e.pos.clone().add(new D(o*1.2*r,0,c*1.2*r));i.fxAt("hit-spark",l,s==="phys"?"phys":s,1.2*Math.max(1,r*.6)),e.boss&&(i.fxAt("sigil-burst",l,s,1.6),i.shake(.3)),i.enemyAttack(e,l,e.boss?4.5:2.2,e.boss?1.4:1.2,s)}else if(a==="shoot"){const o=e.boss?5:1;for(let c=0;c<o;c++){const l=Math.atan2(t.x-e.pos.x,t.z-e.pos.z)+(c-(o-1)/2)*.25;i.enemyProjectile(e,new D(Math.sin(l),0,Math.cos(l)),s)}}else if(a==="cast"){const o=t.clone();i.later(.5,()=>{i.fxAt("sigil-burst",o,s,e.boss?1.4:.9),i.enemyAttack(e,o,e.boss?4:2.6,e.boss?1.6:1.3,s)})}}const Oe=(i,e,t,n,s,r,a,o)=>({id:i,name:e,kind:t,rarity:n,icon:s,color:r,desc:a,v:o}),Nc=[Oe("coin","コイン","currency",3,"◎","#ffd24a","どこでも使えるお金。"),Oe("gem","星晶","currency",5,"✦","#ff9ad8","願いをかなえる星の結晶。160個で1回祈願できる。"),Oe("ticket_s","銀の願い札","currency",5,"▤","#c8d8ff","常設の祈願に使う札。"),Oe("ticket_g","金の願い札","currency",5,"▤","#ffd24a","イベントと武器の祈願に使う札。"),Oe("dust","星屑","currency",4,"✧","#ffe0a0","祈願で手に入る。ショップで願い札と交換できる。"),Oe("shard","星の欠片","special",4,"✶","#a0f0ff","世界のあちこちに浮かぶ光。星の像に捧げるとスタミナの上限が増える。"),Oe("exp1","旅の手記","exp",2,"▥","#8ad06a","キャラクター経験値+1000",1e3),Oe("exp2","冒険家の手記","exp",3,"▥","#5aa8ff","キャラクター経験値+5000",5e3),Oe("exp3","英雄の日記","exp",4,"▥","#c070ff","キャラクター経験値+20000",2e4),Oe("ore1","鉄の欠片","ore",2,"◆","#a8b0c0","武器経験値+400",400),Oe("ore2","精鉄","ore",3,"◆","#78b8ff","武器経験値+2000",2e3),Oe("ore3","魔鉄","ore",4,"◆","#c890ff","武器経験値+10000",1e4),Oe("jelly1","ぷるんゼリー","drop",1,"●","#9ae0a0","ぷるんから落ちる。"),Oe("jelly2","濃いゼリー","drop",2,"●","#5ac8ff","強いぷるんから落ちる。"),Oe("jelly3","虹のゼリー","drop",3,"●","#ff9ad8","とても強いぷるんから落ちる。"),Oe("cloth1","古い布","drop",1,"▰","#c8b090","山賊から落ちる。"),Oe("cloth2","丈夫な布","drop",2,"▰","#5ac8ff","山賊から落ちる。"),Oe("cloth3","錦の布","drop",3,"▰","#ff9ad8","山賊の頭から落ちる。"),Oe("stone1","石の欠片","drop",1,"⬢","#a0a0a8","岩兵から落ちる。"),Oe("stone2","刻まれた石","drop",2,"⬢","#5ac8ff","岩兵から落ちる。"),Oe("stone3","古代の核","drop",3,"⬢","#ff9ad8","強い岩兵から落ちる。"),Oe("dustw1","光の粉","drop",1,"✺","#fff0a0","精霊から落ちる。"),Oe("dustw2","光の結晶","drop",2,"✺","#5ac8ff","精霊から落ちる。"),Oe("dustw3","光の心臓","drop",3,"✺","#ff9ad8","強い精霊から落ちる。"),Oe("gem_fire","焔の結晶","gem",4,"◈","#ff7a3c","焔元素キャラクターの突破に使う。"),Oe("gem_water","潮の結晶","gem",4,"◈","#3cb0ff","潮元素キャラクターの突破に使う。"),Oe("gem_volt","雷の結晶","gem",4,"◈","#ffd23c","雷元素キャラクターの突破に使う。"),Oe("gem_frost","霜の結晶","gem",4,"◈","#9ae8ff","霜元素キャラクターの突破に使う。"),Oe("gem_star","星の結晶","gem",4,"◈","#ff9ad8","星元素キャラクターの突破に使う。"),Oe("gem_shadow","影の結晶","gem",4,"◈","#a070ff","影元素キャラクターの突破に使う。"),Oe("book_a1","勇気の教え","book",2,"❑","#8ad06a","天賦の育成に使う。"),Oe("book_a2","勇気の導き","book",3,"❑","#5aa8ff","天賦の育成に使う。"),Oe("book_a3","勇気の哲学","book",4,"❑","#c070ff","天賦の育成に使う。"),Oe("book_b1","知恵の教え","book",2,"❑","#8ad06a","天賦の育成に使う。"),Oe("book_b2","知恵の導き","book",3,"❑","#5aa8ff","天賦の育成に使う。"),Oe("book_b3","知恵の哲学","book",4,"❑","#c070ff","天賦の育成に使う。"),Oe("book_c1","調和の教え","book",2,"❑","#8ad06a","天賦の育成に使う。"),Oe("book_c2","調和の導き","book",3,"❑","#5aa8ff","天賦の育成に使う。"),Oe("book_c3","調和の哲学","book",4,"❑","#c070ff","天賦の育成に使う。"),Oe("food1","おにぎり","food",2,"▲","#f4f0e0","選んだキャラクターのHPを30%回復する。",.3),Oe("food2","焼き魚定食","food",3,"▲","#ffb060","選んだキャラクターのHPを60%回復する。",.6),Oe("food3","元気だんご","food",3,"▲","#ff9ad8","倒れたキャラクターを復活させ、HPを40%回復する。",.4)],ss=i=>Nc.find(e=>e.id===i),Xa={puff:["jelly1","jelly2","jelly3"],humanoid:["cloth1","cloth2","cloth3"],golem:["stone1","stone2","stone3"],wisp:["dustw1","dustw2","dustw3"]},Pa=i=>Math.round(200+i*i*14),Fc=(i,e)=>Math.round((60+i*i*4)*(.6+e*.12)),ka=i=>200+i*i*30,vd=["puff","humanoid","golem","wisp"],xd=i=>vd[Cn.findIndex(e=>e.id===i)%4],Ux=i=>["a","b","c"][Cn.findIndex(e=>e.id===i)%3];function ga(i){return Object.entries(i).every(([e,t])=>ht(e)>=t)}function Ml(i){if(!ga(i))return!1;for(const[e,t]of Object.entries(i))wn(e,t);return!0}function yd(i){const e=je(i.id),t=Xa[xd(i.id)],n=i.asc+1,s=[[0,3],[0,15],[1,12],[1,18],[2,12],[2,24]][n-1];return{coin:[2e4,4e4,6e4,8e4,1e5,12e4][n-1],["gem_"+e.el]:[1,3,6,10,15,20][n-1],[t[s[0]]]:s[1]}}function bd(i,e){const t=i.tal[e]+1,n=Ux(i.id),s=Xa[xd(i.id)],r=t<=3?1:t<=6?2:3,a=[0,0,3,6,3,4,6,4,6,9,12][t];return{coin:12500*t,[`book_${n}${r}`]:a,[s[r-1]]:Math.ceil(a*1.5)}}const Md=i=>[0,0,2,3,4,4,5,5,6,6,6][i];function Sd(i){const e=Ht(i.id),t=i.asc+1,n=Xa[vd[(e.id.charCodeAt(2)+e.rarity)%4]],s=[[0,3],[0,10],[1,8],[1,14],[2,8],[2,14]][t-1];return{coin:[5e3,15e3,2e4,3e4,35e3,45e3][t-1]*(e.rarity/4),[n[s[0]]]:Math.ceil(s[1]*(e.rarity/5)),ore2:t*2}}function Nx(i,e){const t=ki[i.asc];for(i.exp+=e;i.lvl<t&&i.exp>=Pa(i.lvl);)i.exp-=Pa(i.lvl),i.lvl++;i.lvl>=t&&(i.exp=0),qe(),ne.emit("chars")}function sf(i,e,t){const n=ss(e);if(t=Math.min(t,ht(e)),t<=0)return!1;const s=Math.round(n.v*t*.2);return ht("coin")<s?!1:(wn(e,t),wn("coin",s),Nx(i,n.v*t),!0)}function Fx(i){return i.asc>=6||i.lvl<ki[i.asc]||!Ml(yd(i))?!1:(i.asc++,qe(),ne.emit("chars"),!0)}function Ox(i,e){const t=i.tal[e]+1;return t>10||i.asc<Md(t)||!Ml(bd(i,e))?!1:(i.tal[e]=t,qe(),ne.emit("chars"),!0)}function zx(i,e){const t=Ht(i.id),n=ki[i.asc];for(i.exp+=e;i.lvl<n&&i.exp>=Fc(i.lvl,t.rarity);)i.exp-=Fc(i.lvl,t.rarity),i.lvl++;i.lvl>=n&&(i.exp=0),qe(),ne.emit("items")}function rf(i,e,t){const n=ss(e);if(t=Math.min(t,ht(e)),t<=0)return!1;const s=Math.round(n.v*t*.1);return ht("coin")<s?!1:(wn(e,t),wn("coin",s),zx(i,n.v*t),!0)}function Bx(i){const e=Ht(i.id);return i.asc>=ld(e)||i.lvl<ki[i.asc]||!Ml(Sd(i))?!1:(i.asc++,qe(),!0)}function Hx(i,e){return i.ref>=5||e.id!==i.id||e.uid===i.uid?!1:(L.weapons=L.weapons.filter(t=>t.uid!==e.uid),i.ref++,qe(),!0)}function Ed(i){return[0,100,200,420,1260,3780][i.rarity]+Math.round(i.exp*.8+Vx(i)*.8)}function Vx(i){let e=0;for(let t=0;t<i.lvl;t++)e+=ka(t);return e}function Gx(i,e){const t=e.reduce((a,o)=>a+Ed(o),0);if(ht("coin")<t)return!1;wn("coin",t);const n=new Set(e.map(a=>a.uid));L.relics=L.relics.filter(a=>!n.has(a.uid)),i.exp+=t;const s=bl(i.rarity),r=new ui(Date.now());for(;i.lvl<s&&i.exp>=ka(i.lvl);)if(i.exp-=ka(i.lvl),i.lvl++,i.lvl%4===0){const a=i.rarity>=5?1:i.rarity===4?.8:.6;if(i.subs.length<4){const o=Object.keys(_r).filter(l=>l!==i.main&&!i.subs.some(h=>h.k===l)),c=r.pick(o);i.subs.push({k:c,v:_r[c]*a*r.range(.7,1)})}else{const o=r.pick(i.subs);o.v+=_r[o.k]*a*r.range(.7,1)}}return i.lvl>=s&&(i.exp=0),qe(),!0}function Oc(i){return 375+i*i*25}function Da(){return Math.min(8,Math.floor(Math.max(0,L.ar-12)/6))}function fi(i){L.arExp+=i;let e=!1;for(;L.ar<60&&L.arExp>=Oc(L.ar);)L.arExp-=Oc(L.ar),L.ar++,e=!0,it("gem",100),L.ar%5===0&&it("ticket_g",1);e&&ne.emit("toast",`冒険ランクが ${L.ar} に上がった！`),qe(),ne.emit("ar")}const _a="ソラ",Ia=[{id:"m1",chapter:"第一章",title:"星の落ちた浜",reward:{char:"tsumugi",gem:300,coin:2e4,items:{exp2:5},ar:300},steps:[{type:"goto",target:"wp_ruko",text:"北のルコの町へ向かう",dlg:[["案内","町に着いた！ 町長ゴウを探して話しかけよう。近くで「話す」ボタンを押してね。"]]},{type:"talk",target:"npc_elder",text:"町長ゴウと話す",dlg:[["町長ゴウ","ほう、星と一緒に落ちてきた旅人とな。……最近、町の外にぷるんや山賊が増えて困っておる。"],["ツムギ","さっきの子だ！ わたし、ツムギ。弓なら任せて。一緒に片付けよう！"],["案内","攻撃ボタンで通常攻撃、長押しで重撃。Eボタンで元素スキルを使えるよ。"]]},{type:"camp",target:"@near_ruko",text:"町の近くの魔物を倒す"},{type:"talk",target:"npc_elder",text:"町長に報告する",dlg:[["町長ゴウ","見事じゃ！ これでしばらくは安心じゃな。"],["ツムギ","ソラ、記憶が戻るまで、わたしも一緒に旅をするよ！"]]}]},{id:"m2",chapter:"第二章",title:"疾風の剣客",reward:{char:"hayate",gem:300,coin:3e4,items:{ore2:10,exp2:8},ar:400},steps:[{type:"talk",target:"npc_guild",text:"受付のハナと話す",dlg:[["受付のハナ","旅人さん、いいところに！ 風車の丘で一人の剣士が山賊に囲まれてるって知らせが！"],["案内","右の顔アイコンをタップするとキャラクターを交代できるよ。"]]},{type:"goto",target:"wp_x3",text:"風車の丘へ向かう",dlg:[["ハヤテ","助太刀感謝する。……と言いたいが、まだ片付いてないぞ。"]]},{type:"camp",target:"@near_wp_x3",text:"山賊の拠点を片付ける"},{type:"talk",target:"npc_guild",text:"ハナに報告する",dlg:[["ハヤテ","俺はハヤテ。流れ者だ。お前の剣、星の匂いがするな。しばらく付き合わせてもらう。"],["受付のハナ","ギルドから毎日の依頼も出してるから、よかったら見ていってね！"]]}]},{id:"m3",chapter:"第三章",title:"水面の約束",reward:{char:"minamo",gem:400,coin:4e4,items:{exp3:3,gem_water:3},ar:500},steps:[{type:"talk",target:"npc_fisher",text:"漁師のハマと話す",dlg:[["漁師のハマ","西の湖で、でっかいぷるんが暴れててな。娘のミナモが一人で行っちまった！"]]},{type:"statue",target:"st_plains",text:"星の像に祈る",dlg:[[_a,"像に触れたら……体に力が流れてくる。"],["案内","星の欠片を集めて星の像に捧げると、スタミナの上限が増えるよ。"]]},{type:"boss",target:"b_puff",text:"ぷるん大王を倒す"},{type:"talk",target:"npc_fisher",text:"ハマに報告する",dlg:[["ミナモ","えへへ、助けてくれてありがとう。お礼に、わたしも旅についていくね！"]]}]},{id:"m4",chapter:"第四章",title:"紅砂の谷",reward:{gem:500,coin:6e4,items:{exp3:5,ore3:5,ticket_g:2},ar:600},steps:[{type:"goto",target:"wp_akatsuchi",text:"東のアカツチ村へ向かう"},{type:"talk",target:"npc_smith",text:"鍛冶屋テツと話す",dlg:[["鍛冶屋テツ","星の剣か……。谷の奥の遺跡に、昔の星の記録が眠ってるって話だ。"]]},{type:"domain",target:"dom_relic",text:"紅砂の遺跡を攻略する"},{type:"boss",target:"b_golem",text:"岩鎧の巨人を倒す",dlg:[[_a,"遺跡の壁に、星が北の高原へ落ちていく絵があった……。"]]}]},{id:"m5",chapter:"第五章",title:"霜嶺の灯",reward:{char:"kohaku",gem:500,coin:8e4,items:{exp3:6,gem_frost:4},ar:700},steps:[{type:"goto",target:"wp_shimotsuki",text:"北西のシモツキ村へ向かう"},{type:"talk",target:"npc_monk",text:"見張りのオウと話す",dlg:[["見張りのオウ","霜の大精霊が目覚めて、山の灯が消えかけておる。"],["コハク","わたしも行く！ 力仕事なら任せて！"]]},{type:"boss",target:"b_wisp",text:"霜の大精霊を鎮める"},{type:"talk",target:"npc_monk",text:"オウに報告する",dlg:[["見張りのオウ","灯が戻った。……影の高原の塔に、星を呼ぶ者がいると聞く。"]]}]},{id:"m6",chapter:"最終章",title:"影の塔",reward:{gem:1600,coin:15e4,items:{ticket_s:10,ticket_g:10},ar:1e3},steps:[{type:"goto",target:"wp_spire",text:"影の高原へ向かう",dlg:[["影の騎士","……星の子よ。お前が落ちてきたのは偶然ではない。"]]},{type:"boss",target:"b_knight",text:"影の騎士を倒す"},{type:"talk",target:"npc_elder",text:"ルコの町に帰る",dlg:[["影の騎士","（消えゆく声）……空の向こうに、まだお前の故郷がある……。"],[_a,"故郷……。みんな、ありがとう。もう少しだけ、この島を旅してもいいかな。"],["ツムギ","もちろん！ まだ行ってない場所、いっぱいあるよ！"],["案内","メインストーリーはここまで！ 世界の探索、祈願、星の塔への挑戦を楽しんでね。"]]}]}],Wx=[["？？？","……ねえ、大丈夫？ 空から光が落ちてきたと思ったら、あなたが倒れてたの。"],[_a,"ここは……どこだ？ 何も思い出せない。"],["？？？","ヨスガ諸島の南の浜だよ。北に行けばルコの町がある。まずは町長に会ってみて！"],["案内","左下をなぞって移動、右側をなぞるとカメラが回るよ。「走」を押し続けるとダッシュ、「跳」でジャンプ。空中でもう一度「跳」を押すと滑空できるよ。"],["案内","崖に向かって進むと登れるよ。黄色い◆がつぎの目的地！"]],$x=[{type:"kill",goal:15,text:"魔物を15体倒す"},{type:"chest",goal:3,text:"宝箱を3つ開ける"},{type:"react",goal:12,text:"元素反応を12回起こす"},{type:"elite",goal:2,text:"岩兵か精霊を2体倒す"},{type:"domain",goal:1,text:"秘境を1回クリアする"},{type:"shard",goal:1,text:"星の欠片を1つ集める"},{type:"boss",goal:1,text:"ボスを1体倒す"},{type:"skill",goal:20,text:"元素スキルを20回使う"}];function Sl(i){if(!i.startsWith("@near_"))return i;const e=i.slice(6),n=en.get(e)||en.get("wp_"+e)||en.get("wp_"+e.replace("wp_",""))||en.get("wp_ruko");let s="",r=1/0;for(const a of Pt)if(a.type==="camp"){const o=At(a.x,a.z,n.x,n.z);o<r&&(r=o,s=a.id)}return s}function ja(){return L.quest.main<Ia.length?Ia[L.quest.main]:null}function mi(){const i=ja();return i&&i.steps[L.quest.step]||null}function zc(i){if(!i)return null;const e=en.get(Sl(i.target));return e?{x:e.x,y:e.y,z:e.z}:null}function ra(i,e,t){if(i.role==="guest"||va)return;const n=mi();if(!n)return;const s=Sl(n.target);let r=!1;if(e==="near"){if(n.type==="goto"){const a=en.get(s);a&&At(i.player.pos.x,i.player.pos.z,a.x,a.z)<14*14&&(r=!0)}n.type==="camp"&&L.camps[s]&&Date.now()-L.camps[s]<3e5&&(r=!0)}else(e===n.type&&t===s||e==="goto"&&n.type==="goto"&&t===s)&&(r=!0);r&&qa(i,n)}let va=!1;function qa(i,e){if(va)return;va=!0;const t=ja(),n=()=>{if(va=!1,L.quest.step++,L.quest.step>=t.steps.length){const s=t.reward;if(s.gem&&it("gem",s.gem*2),s.coin&&it("coin",s.coin),s.items)for(const r in s.items)it(r,s.items[r]);s.ar&&fi(s.ar),s.char&&za(s.char),ne.emit("questDone",t,s),L.quest.main++,L.quest.step=0}qe(),ne.emit("quest")};e.dlg?ne.emit("dialog",e.dlg,n):n()}function Xx(i,e){const t=mi();return!t||t.type!=="talk"||t.target!==e||i.role==="guest"?!1:(qa(i,t),!0)}function jx(i,e){const t=mi();t&&t.type==="statue"&&t.target===e&&qa(i,t)}function qx(i,e){const t=mi();t&&t.type==="domain"&&t.target===e&&qa(i,t)}function Yx(){const i=new Date;return`${i.getFullYear()}-${i.getMonth()+1}-${i.getDate()}`}function El(){const i=Yx();if(L.daily.date===i)return;const e=new ui(i.split("-").reduce((s,r)=>s*37+Number(r),7)),t=[...$x],n=[];for(let s=0;s<4;s++){const r=t.splice(e.int(0,t.length-1),1)[0];n.push({type:r.type,text:r.text,n:0,goal:r.goal})}L.daily={date:i,tasks:n,claimed:[!1,!1,!1,!1],bonus:!1},qe()}function Ps(i,e){if(!e)return;El();let t=!1;for(const n of L.daily.tasks)n.type===i&&n.n<n.goal&&(n.n=Math.min(n.goal,n.n+e),t=!0,n.n>=n.goal&&ne.emit("toast",`依頼達成：${n.text}`));t&&(qe(),ne.emit("daily-ui"))}function Kx(i){const e=L.daily.tasks[i];return!e||e.n<e.goal||L.daily.claimed[i]?!1:(L.daily.claimed[i]=!0,it("gem",60),it("coin",8e3),it("exp2",3),fi(150),qe(),!0)}function Jx(){return L.daily.bonus||!L.daily.claimed.every(i=>i)?!1:(L.daily.bonus=!0,it("gem",120),it("exp3",2),it("ore2",4),fi(300),qe(),!0)}class af{constructor(e,t){this.scene=e,this.charId="",this.pos=new D,this.target=new D,this.face=0,this.f=0,this.mode="ground",this.name="友達",this.hp=1,this.members=[],this.bb=new li(Ni(t,je(t).look,je(t).weapon),tn,yn),e.add(this.bb.root),e.add(this.bb.shadow),this.charId=t}setChar(e){e===this.charId||!je(e)||(this.bb.dispose(),this.bb=new li(Ni(e,je(e).look,je(e).weapon),tn,yn),this.scene.add(this.bb.root),this.scene.add(this.bb.shadow),this.charId=e)}render(e,t,n){this.pos.lerp(this.target,Math.min(1,e*10));const{dir:s,flip:r}=Sr(this.face,t),a=this.mode==="climb"?1:s;this.bb.setFrame(this.f,a,a===2?r:!1),this.bb.root.position.copy(this.pos),this.bb.face(t,n),this.bb.shadow.position.set(this.pos.x,Math.max(st(this.pos.x,this.pos.z),Ln)+.06,this.pos.z)}dispose(){this.bb.dispose()}}class Zx{constructor(e){this.fx=new Xv(64),this.members=[],this.active=0,this.enemies=new Map,this.projs=[],this.eprojs=[],this.fields=[],this.timers=[],this.nums=[],this.tele=[],this.camYaw=0,this.camPitch=.42,this.camDist=11,this.camT=new D,this.shakeT=0,this.input={mx:0,my:0,sprint:!1,atkHeld:!1,atkTap:!1,atkHold:!1,eTap:!1,eHold:!1,qTap:!1,jump:!1,camDX:0,camDY:0,zoom:0},this.now=0,this.hour=9,this.stats={reacts:0},this.eclipse=0,this.partyDmgT=0,this.partyDmgV=0,this.buffAtk=0,this.buffAtkVal=0,this.shield=0,this.shieldT=0,this.switchCd=0,this.combo=0,this.comboT=0,this.atkT=0,this.atkFrameT=0,this.atkQueued=!1,this.holdT=0,this.charging=!1,this.burstLock=0,this.pid=1,this.role="solo",this.net=null,this.remotes=new Map,this.netEcho=!1,this.chestObjs=new Map,this.shardObjs=new Map,this.interactables=[],this.arena=null,this.bossActive=null,this.paused=!1,this.dialogOpen=!1,this.spawnT=0,this.saveT=0,this.netT=0,this.lastWpCheck=0,this.dead=!1,this.telePool=[],this.npcs=[],this.hitStopT=0,this.lastFrame=0,Zv(),this.gfx=new qv(e),this.gfx.tilt=L.settings.tilt,this.gfx.setQuality(L.settings.quality),this.view=new fx(this.gfx.scene),this.gfx.scene.add(this.fx.group),this.applyQuality(),!L.pos.x&&!L.pos.z&&(L.pos={x:is.x,y:st(is.x,is.z),z:is.z}),this.player=new mx(this.gfx.scene,L.party[0]),this.player.pos.set(L.pos.x,st(L.pos.x,L.pos.z),L.pos.z),this.player.stamMax=L.stamMax,this.player.stamina=L.stamMax,this.player.onPlungeLand=()=>kx(this,this.cur),this.player.onDrown=()=>this.wipe("溺れてしまった…"),this.camYaw=0,this.player.face=Math.PI,this.camT.copy(this.player.pos),this.buildParty();for(let t=0;t<8;t++){const n=new De(new ml(.85,1,32).rotateX(-Math.PI/2),new Zt({color:16726586,transparent:!0,opacity:.6,depthWrite:!1}));n.visible=!1,n.renderOrder=3,this.gfx.scene.add(n),this.telePool.push(n)}for(const t of Pt)if(t.type==="shard"&&!L.shards[t.id]){const n=new De(new ns(.35),new Zt({color:10154239}));n.position.set(t.x,t.y,t.z),n.visible=!1,this.gfx.scene.add(n),this.shardObjs.set(t.id,n)}for(const t of Pt)if(t.type==="npc"){const n=new li(Ni(t.id,t.data.look,"none"),tn,yn);n.root.position.set(t.x,t.y,t.z),n.shadow.position.set(t.x,t.y+.06,t.z),this.gfx.scene.add(n.root,n.shadow),this.npcs.push({id:t.id,bb:n,x:t.x,z:t.z,face:0}),ni({x:t.x,z:t.z,r:.5})}ne.on("chars",()=>{this.myParty().filter(n=>L.chars[n]).join()!==this.members.map(n=>n.id).join()?this.buildParty():this.members.forEach(n=>n.refresh())}),ne.on("daily",(t,n)=>Ps(t,n))}applyQuality(){const e=id[this.gfx.q];this.view.near=e.near,this.view.grassN=e.grass}get cur(){return this.members[this.active]}myParty(){return this.role==="solo"?L.party.slice(0,4):L.party.slice(0,2)}buildParty(){const e=this.myParty().filter(n=>L.chars[n]),t=new Map(this.members.map(n=>[n.id,n]));this.members=e.map(n=>{const s=t.get(n);return s?(s.party=e,s.refresh(),s):new Tx(n,e)}),this.active=xn(this.active,0,this.members.length-1),this.cur.dead&&(this.active=Math.max(0,this.members.findIndex(n=>!n.dead))),this.player.setChar(this.cur.id),ne.emit("party")}later(e,t){this.timers.push({t:e,f:t})}shake(e){this.shakeT=Math.max(this.shakeT,e)}fxAt(e,t,n,s=1,r=!1,a={}){this.fx.spawn(e,t,{el:n,scale:s,flip:r,...a}),this.net&&!this.netEcho&&!a.vel&&this.net.send({t:"fx",n:e,p:[t.x,t.y,t.z],e:n,s,f:r})}enemiesNear(e,t){const n=[];for(const s of this.enemies.values())s.alive&&At(s.pos.x,s.pos.z,e.x,e.z)<(t+s.radius)**2&&Math.abs(s.pos.y-e.y)<6+t&&n.push(s);return n}aoe(e,t,n){for(const s of this.enemiesNear(e,t))n(s)}sendHit(e,t){this.elementAt(e.pos,t.el),this.role==="guest"?(this.net?.send({t:"hit",id:e.id,h:t}),e.hurtFlash=.15):_d(this,e,t)}hitCircle(e,t,n){let s=0;for(const r of this.enemiesNear(e,t))this.sendHit(r,{...n,crit:Math.random()<n.cr}),s++;return this.elementAt(e,n.el,t),s}hitArc(e,t,n,s,r){let a=0;const o=Math.sin(t),c=Math.cos(t);for(const l of this.enemiesNear(e,n)){const h=l.pos.x-e.x,d=l.pos.z-e.z,f=Math.hypot(h,d)||1;((h*o+d*c)/f>Math.cos(s)||f<1)&&(this.sendHit(l,{...r,crit:Math.random()<r.cr}),a++,this.fxAt("hit-spark",l.pos.clone().setY(l.pos.y+.9),r.el,.8))}return this.elementAt(e.clone().add(new D(o*n*.6,0,c*n*.6)),r.el,n*.6),a&&this.hitStop(.04),a}hitCapsule(e,t,n,s){let r=0;const a=t.clone().sub(e),o=a.lengthSq()||1;for(const c of this.enemies.values()){if(!c.alive)continue;const l=xn(c.pos.clone().sub(e).dot(a)/o),h=e.clone().addScaledVector(a,l);At(h.x,h.z,c.pos.x,c.pos.z)<(n+c.radius)**2&&(this.sendHit(c,{...s,crit:Math.random()<s.cr}),r++)}return r}hitStop(e){this.hitStopT=Math.max(this.hitStopT,e)}shoot(e,t,n,s,r,a={},o){const c=n?n.pos.clone().add(new D(0,n.body==="wisp"?1.3*n.def.scale:.7*n.def.scale,0)).sub(t).normalize():new D(Math.sin(this.player.face),0,Math.cos(this.player.face));this.shootDir(e,t,c,s,r,a,o,n)}shootDir(e,t,n,s,r,a={},o,c=null){const l=n.clone().multiplyScalar(s),h=new D(Math.cos(this.camYaw),0,-Math.sin(this.camYaw)),d=l.dot(h)<0,f=this.fx.spawn("orb",t,{el:r.el,scale:a.scale||1,loop:!0,life:a.life||1.2,flip:d,vel:l});this.net&&!this.netEcho&&this.net.send({t:"proj",p:[t.x,t.y,t.z],v:[l.x,l.y,l.z],e:r.el,s:a.scale||1,l:a.life||1.2}),this.projs.push({pos:t.clone(),vel:l,hit:r,life:a.life||1.2,r:a.r||.6,pierce:!!a.pierce,hitIds:new Set,fx:f,home:c,aoe:a.aoe,...o?{onHit:o}:{}})}addField(e){this.fields.push(e)}pullEnemies(e,t,n){if(this.role==="guest"){this.net?.send({t:"pull",c:[e.x,e.y,e.z],r:t,k:n});return}for(const s of this.enemiesNear(e,t)){if(s.boss)continue;const r=e.clone().sub(s.pos);r.y=0;const a=r.length();a>.8&&s.pos.addScaledVector(r,Math.min(n,a-.8)/a)}}gainEnergy(e,t,n=!1){for(const s of this.members){if(s.dead)continue;const r=t&&s.def.el===t.def.el?1.3:1,a=s===this.cur?1:.6;s.energy=Math.min(s.maxEnergy,s.energy+e*r*a*s.st.er)}n&&t&&this.fxAt("mote",this.player.pos.clone().setY(this.player.pos.y+1.6),t.def.el,1.2,!1,{life:.5,loop:!0})}healParty(e,t,n){if(t!==this.pid){this.net?.send({t:"heal",v:e,to:t});return}const s=n?1+n.st.heal:1;for(const r of this.members)r.dead||(r.hp=Math.min(r.st.hp,r.hp+r.st.hp*e*s));this.num(this.player.pos,"+"+Math.round(this.cur.st.hp*e*s),"#8aff8a",!1)}healActive(e,t){const n=this.cur;if(n.dead)return;const s=(t.st.hp*.3+n.st.hp*.7)*e*(1+t.st.heal);n.hp=Math.min(n.st.hp,n.hp+s),this.num(this.player.pos,"+"+Math.round(s),"#8aff8a",!1)}addShield(e,t){if(t!==this.pid){this.net?.send({t:"shield",v:e,to:t});return}this.addShieldAbs(this.cur.st.hp*e,12)}addShieldAbs(e,t){this.shield=Math.max(this.shield,e),this.shieldT=t,this.fxAt("ward",this.player.pos,this.cur.def.el,1.2,!1,{follow:this.player.bb.root,loop:!0,life:Math.min(t,6)})}posOfPid(e){return e===this.pid?this.player.pos:this.remotes.get(e)?.pos||this.player.pos}nearestPlayer(e){let t=null;const n=(s,r,a)=>{if(a)return;const o=At(s.x,s.z,e.x,e.z)+(s.y-e.y)**2*.3;(!t||o<t.d)&&(t={pos:s,d:o,pid:r})};n(this.player.pos,this.pid,this.dead||this.player.mode==="dead");for(const[s,r]of this.remotes)n(r.pos,s,r.hp<=0);return t}telegraph(e,t){const n=e.boss?["smash","shoot","cast"][e.moves%3]:e.def.atkKind;if(n==="shoot"||n==="lunge")return;const s=n==="cast"?t.clone():e.pos.clone().add(new D(Math.sin(e.face)*1.2*e.def.scale,0,Math.cos(e.face)*1.2*e.def.scale)),r=n==="cast"?e.boss?4:2.6:e.boss?4.5:2.2;this.showTele(s,r,n==="cast"?1.1:.65),this.net&&!this.netEcho&&this.net.send({t:"tele",p:[s.x,s.y,s.z],r,d:n==="cast"?1.1:.65})}showTele(e,t,n){const s=this.telePool.find(r=>!r.visible);s&&(s.visible=!0,s.position.set(e.x,(this.arena?this.arena.center.y:st(e.x,e.z))+.12,e.z),s.scale.setScalar(t),this.tele.push({mesh:s,t:0,max:n}))}enemyAttack(e,t,n,s,r){const a=e.atk*s*(e.slowT>0?.7:1);this.checkPlayerHit(t,n,a,r,e.lvl),this.net&&this.net.send({t:"eatk",c:[t.x,t.y,t.z],r:n,dmg:a,el:r,lvl:e.lvl})}checkPlayerHit(e,t,n,s,r){const a=this.player.pos;At(a.x,a.z,e.x,e.z)<(t+.4)**2&&Math.abs(a.y-e.y)<3+t*.3&&this.hurt(n,s,r)}enemyProjectile(e,t,n){const s=e.pos.clone().add(new D(0,e.body==="wisp"?1.3*e.def.scale:1,0)),r=t.clone().multiplyScalar(e.boss?13:11),a=e.atk*(e.boss?.9:.85);this.spawnEProj(s,r,a,n,!0),this.net&&this.net.send({t:"eproj",p:[s.x,s.y,s.z],v:[r.x,r.y,r.z],dmg:a,el:n})}spawnEProj(e,t,n,s,r){const a=this.fx.spawn("orb",e,{el:s==="phys"?"smoke":s,scale:.8,loop:!0,life:2,vel:t});this.eprojs.push({pos:e.clone(),vel:t,dmg:n,el:s,life:2,fx:a,local:r})}hurt(e,t,n){const s=this.player,r=this.cur;if(s.invuln>0||r.dead||this.burstLock>0)return;let a=e*(1-r.st.def/(r.st.def+5*n+500));if(this.shield>0){const o=Math.min(this.shield,a);this.shield-=o,a-=o,this.shield<=0&&(this.shieldT=0)}a<=0||(r.hp-=a,s.hurtT=.25,s.invuln=.35,this.num(s.pos,Math.round(a)+"","#ff6a6a",!1),this.shake(.12),r.hp<=0&&this.memberDown())}memberDown(){const e=this.cur;e.hp=0,e.dead=!0,ne.emit("toast",`${e.def.name}が倒れた`);const t=this.members.findIndex(n=>!n.dead);if(t<0){this.wipe("全員倒れてしまった…");return}this.switchTo(t,!0)}wipe(e){ne.emit("toast",e);for(const n of this.members)n.dead=!1,n.hp=n.st.hp*.3;if(this.player.stamina=this.player.stamMax,this.arena){this.leaveArena(!1);return}const t=this.nearestWaypoint(this.player.pos.x,this.player.pos.z)||en.get("wp_beach");this.teleport(t.x+2,t.z+2)}nearestWaypoint(e,t){let n=null,s=1/0;for(const r of Pt)if(r.type==="waypoint"&&(L.wps[r.id]||r.id==="wp_beach")){const a=At(e,t,r.x,r.z);a<s&&(s=a,n=r)}return n}teleport(e,t){if(!this.arena){this.player.pos.set(e,st(e,t),t),this.player.vel.set(0,0,0),this.player.mode=this.player.waterDeep(e,t)?"swim":"ground",this.camT.copy(this.player.pos);for(const n of[...this.enemies.values()])!n.arena&&this.role!=="guest"&&this.removeEnemy(n);this.fxAt("beacon",this.player.pos,"water",1)}}num(e,t,n,s){this.nums.push({x:e.x+(Math.random()-.5)*.6,y:e.y+1.8,z:e.z,text:t,color:n,t:0,big:s}),this.nums.length>60&&this.nums.shift()}damageEnemy(e,t,n,s,r,a,o=!1){if(!e.alive)return;t=Math.max(1,Math.round(t)),e.hp-=t,o||ne.emit("sfx",r?"react":"hit"),e.hurtFlash=o?.05:.15;const c=ct[s].color;this.num(e.pos,t+"",n?"#ffe04a":s==="phys"?"#ffffff":c,n),r&&this.nums.push({x:e.pos.x,y:e.pos.y+2.6,z:e.pos.z,text:r,color:c,t:0,big:!0}),this.net&&this.net.send({t:"dmg",id:e.id,d:t,c:n,e:s,l:r}),e.hp<=0&&this.killEnemy(e)}killEnemy(e){e.hp=0,e.state="dead",this.fxAt("poof",e.pos,"smoke",e.def.scale),this.later(.6,()=>this.removeEnemy(e)),this.rewardKill(e.def.id,e.lvl,e.pos),this.net&&this.net.send({t:"kill",id:e.id,def:e.def.id,lvl:e.lvl}),e.camp&&!e.arena&&this.checkCamp(e.camp),e.bossId&&this.bossDefeated(e.bossId,e)}rewardKill(e,t,n){const s=Aa(e),r=Xa[s.drop],a=t>=40?2:t>=20?1:0,o=Math.random;if(it("coin",Math.round((40+t*6)*(s.boss?12:1))),it(r[a],s.boss?4:o()<.6?1:2),a>0&&o()<.5&&it(r[a-1],1),o()<.08+(s.boss?1:0)&&it(r[Math.min(2,a+1)],1),fi(s.boss?100:3),L.stats.kills++,!s.boss&&Math.random()<.06&&it("gem",5),s.boss&&s.el&&it("gem_"+s.el,2+Math.floor(t/25)),s.boss){for(let c=0;c<2;c++)Ho(new ui(Date.now()+c),t>=40?5:4);it("gem",40),it("exp3",1),ne.emit("toast","遺紋を手に入れた！"),Ps("boss",1)}(s.body==="golem"||s.body==="wisp")&&Ps("elite",1),Ps("kill",1),this.gainEnergy(s.boss?10:2,null),qe()}removeEnemy(e){e.dispose(),this.enemies.delete(e.id),this.bossActive===e&&(this.bossActive=null)}elementAt(e,t,n=1.5){var s,r;if(!(t==="phys"||this.role==="guest"))for(const a of Pt){if(a.type!=="puzzle"||L.opened["puz"+a.id]||At(a.x,a.z,e.x,e.z)>100)continue;const o=(s=L.flags)[r="lit_"+a.id]||(s[r]=[0,0,0]);a.data.els.forEach((c,l)=>{const h=l/3*Math.PI*2,d=a.x+Math.cos(h)*4,f=a.z+Math.sin(h)*4;if(c===t&&!o[l]&&At(d,f,e.x,e.z)<(n+1.6)**2){o[l]=1;const u=this.view.poiObjs.get(a.id)?.getObjectByName("orb"+l);u&&u.material.color.set(ct[t].color),this.fxAt("hit-spark",new D(d,st(a.x,a.z)+2.8,f),t,1.2),qe(),o.every(g=>g)&&(L.opened["puz"+a.id]=1,ne.emit("toast","仕掛けが解けた！宝箱が現れた"),L.flags["pzc_"+a.id]=1)}})}}levelAt(e,t){const n=xl(e,t),s=Math.hypot(e-20,t-236),r=n==="plains"?Math.min(12,1+Math.floor(s/45)):n==="canyon"?22:n==="peaks"?32:45;return Math.min(95,r+Da()*8)}spawnAround(){if(this.arena||this.role==="guest")return;const e=[this.player.pos,...[...this.remotes.values()].map(s=>s.pos)],t=(s,r)=>e.some(a=>At(a.x,a.z,s.x,s.z)<r*r),n=Date.now();for(const s of Pt)if(s.type==="camp"){const r=[...this.enemies.values()].filter(o=>o.camp===s.id),a=L.camps[s.id]&&n-L.camps[s.id]<3e5;if(!r.length&&!a&&t(s,85)){const o=this.levelAt(s.x,s.z);s.data.enemies.forEach((c,l)=>{const h=l/s.data.enemies.length*Math.PI*2,d=this.addEnemy(c,o+(c==="golem"?2:0),s.x+Math.cos(h)*3.5,s.z+Math.sin(h)*3.5);d.camp=s.id})}else r.length&&!t(s,130)&&r.every(o=>o.state==="idle")&&r.forEach(o=>this.removeEnemy(o))}else if(s.type==="boss"){const r=[...this.enemies.values()].find(o=>o.bossId===s.id),a=!L.bosses[s.id]||n-L.bosses[s.id]>6e4;if(s.id==="b_knight"&&!this.questAllowsKnight())continue;if(!r&&a&&t(s,70)){const o=this.addEnemy(s.data.enemy,this.levelAt(s.x,s.z)+4,s.x,s.z);o.bossId=s.id}else r&&!t(s,120)&&this.removeEnemy(r)}}questAllowsKnight(){return L.quest.main>=5}addEnemy(e,t,n,s,r){const a=new Cx(this.gfx.scene,e,t,n,s,r);return this.enemies.set(a.id,a),a}checkCamp(e){[...this.enemies.values()].filter(n=>n.camp===e&&n.alive).length||(L.camps[e]=Date.now(),qe(),L.opened["campchest_"+e]||(L.flags["cc_"+e]=1,ne.emit("toast","拠点を制圧した！宝箱が現れた")),ra(this,"camp",e))}bossDefeated(e,t){L.bosses[e]=Date.now(),qe(),ne.emit("toast",`${t.def.name}を倒した！`),ra(this,"boss",e)}chestList(){const e=[];for(const t of Pt)t.type==="chest"&&!L.opened[t.id]&&e.push({id:t.id,x:t.x,z:t.z,tier:t.data.tier}),t.type==="camp"&&L.flags["cc_"+t.id]&&!L.opened["campchest_"+t.id]&&e.push({id:"campchest_"+t.id,x:t.x,z:t.z,tier:2}),t.type==="puzzle"&&L.flags["pzc_"+t.id]&&!L.opened["pzchest_"+t.id]&&e.push({id:"pzchest_"+t.id,x:t.x,z:t.z,tier:3});return e}openChest(e,t){if(this.role==="guest"){ne.emit("toast","マルチプレイ中は他の人の世界の宝箱は開けられません");return}L.opened[e]=1;const n=this.chestObjs.get(e);if(n){const c=n.getObjectByName("lid");c&&(c.rotation.x=-1.2,c.position.z-=.3,c.position.y+=.2),this.later(1.2,()=>{n.removeFromParent(),this.chestObjs.delete(e)})}const s=[0,5,12,25,50][t],r=[0,1e3,3e3,8e3,15e3][t];it("gem",s),it("coin",r);const a=[`星晶 ×${s}`,`コイン ×${r}`],o=(c,l,h)=>{it(c,l),a.push(`${h} ×${l}`)};t>=2?(o("exp2",t+1,"冒険家の手記"),o("ore2",t,"精鉄")):(o("exp1",3,"旅の手記"),o("ore1",2,"鉄の欠片")),t>=4&&o("ticket_s",1,"銀の願い札"),t>=3&&(Ho(new ui(Date.now()),t>=4?5:4),a.push("遺紋 ×1")),Math.random()<.3&&o("food1",1,"おにぎり"),fi([0,10,20,40,80][t]),Ps("chest",1),qe(),this.fxAt("wish-star",this.player.pos.clone().setY(this.player.pos.y+1.5),t>=3?"gold":"blue",.35),ne.emit("loot",a)}updateInteract(){const e=this.player.pos,t=[],n=(s,r,a,o,c,l)=>{const h=At(e.x,e.z,r,a);h<o*o&&t.push({id:s,label:c,act:l,d:h})};for(const s of this.chestList()){if(At(e.x,e.z,s.x,s.z)<70*70&&!this.chestObjs.has(s.id)){const r=this.view.chestMesh(s.tier);r.position.set(s.x,st(s.x,s.z),s.z),r.rotation.y=s.x*13%6,this.gfx.scene.add(r),this.chestObjs.set(s.id,r)}n(s.id,s.x,s.z,2.6,"宝箱を開ける",()=>this.openChest(s.id,s.tier))}for(const[s,r]of this.chestObjs)At(e.x,e.z,r.position.x,r.position.z)>90*90&&(r.removeFromParent(),this.chestObjs.delete(s));if(!this.arena)for(const s of Pt)s.type==="npc"?n(s.id,s.x,s.z,4.2,`${s.name}と話す`,()=>ne.emit("npc",s.id)):s.type==="statue"?n(s.id,s.x,s.z,6,"星の像に祈る",()=>ne.emit("statue",s.id)):s.type==="domain"?n(s.id,s.x,s.z,6,`${s.name}に入る`,()=>ne.emit("domain",s.id)):s.type==="tower"?n(s.id,s.x,s.z+3,6,"星の塔に挑む",()=>ne.emit("tower")):s.type==="waypoint"&&!L.wps[s.id]&&At(e.x,e.z,s.x,s.z)<36&&(L.wps[s.id]=1,qe(),fi(20),ne.emit("toast",`ワープポイント「${s.name}」を解放した`),this.fxAt("beacon",new D(s.x,s.y,s.z),"water",1.2),ra(this,"goto",s.id));this.now-this.lastWpCheck>.5&&(this.lastWpCheck=this.now,ra(this,"near","")),t.sort((s,r)=>s.d-r.d),this.interactables=t.slice(0,3);for(const[s,r]of this.shardObjs){const a=At(e.x,e.z,r.position.x,r.position.z);r.visible=a<120*120,r.visible&&(r.rotation.y+=.03,r.position.y=en.get(s).y+Math.sin(this.now*2+r.position.x)*.2,a<1.8&&Math.abs(e.y+1-r.position.y)<2.2&&(L.shards[s]=1,it("shard",1),fi(10),r.removeFromParent(),this.shardObjs.delete(s),this.fxAt("hit-spark",r.position,"water",1.2),ne.emit("toast","星の欠片を手に入れた"),Ps("shard",1),qe()))}}enterArena(e,t,n,s,r,a=0){if(this.role!=="solo"){ne.emit("toast","マルチプレイ中は入れません");return}const o=new D(0,60,-760),c=new qt,l=new De(new En(20,16,4,24),new Ft({color:e==="tower"?5921418:8022618}));l.position.y=-2,c.add(l);const h=new De(new Wa(19.5,.3,4,32),new Zt({color:e==="tower"?16767050:10121471}));h.rotation.x=Math.PI/2,h.position.y=.1,c.add(h),c.position.copy(o),this.gfx.scene.add(c);for(const d of[...this.enemies.values()])this.removeEnemy(d);this.arena={kind:e,id:t,lv:n,waves:s,wave:-1,t:0,center:o,ret:this.player.pos.clone(),mesh:c,elvl:r,done:!1,tlimit:a},this.player.arenaR=20,this.player.arenaC.copy(o),this.player.pos.copy(o).add(new D(0,0,12)),this.player.mode="ground";for(const d of this.members)d.dead=!1,d.hp=d.st.hp;this.player.stamina=this.player.stamMax,this.camT.copy(this.player.pos),this.camYaw=0,ne.emit("arena",!0),this.later(1.2,()=>this.nextWave())}nextWave(){const e=this.arena;if(e.wave++,e.wave>=e.waves.length){e.done=!0,ne.emit("arenaWin",e);return}ne.emit("toast",`ウェーブ ${e.wave+1} / ${e.waves.length}`),e.waves[e.wave].forEach((t,n)=>{const s=n/e.waves[e.wave].length*Math.PI*2,r=this.addEnemy(t,e.elvl+(Aa(t).boss?3:0),e.center.x+Math.cos(s)*9,e.center.z-2+Math.sin(s)*6);r.arena=!0,r.groundFn=(a,o)=>this.player.groundAt(a,o),r.pos.y=e.center.y,r.home.copy(r.pos),this.fxAt("beacon",r.pos,"shadow",.8)})}leaveArena(e){const t=this.arena;if(t){for(const n of[...this.enemies.values()])this.removeEnemy(n);t.mesh.removeFromParent(),this.arena=null,this.player.arenaR=0,this.player.pos.copy(t.ret),this.player.mode="ground",this.camT.copy(this.player.pos),ne.emit("arena",!1)}}switchTo(e,t=!1){e===this.active||e>=this.members.length||this.members[e].dead||!t&&(this.switchCd>0||this.atkT>0||!["ground","air","glide","swim"].includes(this.player.mode))||(this.active=e,this.switchCd=1,this.player.setChar(this.cur.id),this.fxAt("hit-spark",this.player.pos.clone().setY(this.player.pos.y+1),this.cur.def.el,1.2),ne.emit("party"))}tryE(e){const t=this.cur;t.charges<=0||this.player.mode==="climb"||this.player.mode==="swim"||this.player.mode==="dash"||(t.charges--,t.cdE<=0&&(t.cdE=t.eCdFull*(e?1.3:1)),this.atkT=.35,this.atkFrameT=.35,Uc(this,t,!1),ne.emit("sfx","skill"))}tryQ(){const e=this.cur;e.energy<e.maxEnergy||["climb","swim","dash","glide"].includes(this.player.mode)||(e.energy=0,this.burstLock=.8,this.atkT=.6,this.atkFrameT=.6,this.player.invuln=1,ne.emit("burst",e.id),Uc(this,e,!0))}update(e){this.hitStopT>0&&(this.hitStopT-=e,e*=.15),this.now+=e,this.hour=(this.hour+e/60)%24,this.role!=="guest"?this.gfx.setDayTime(this.hour):this.gfx.setDayTime(this.hour),L.stats.play+=e;const t=this.input,n=this.player,s=this.cur;this.camYaw-=t.camDX*.006,this.camPitch=xn(this.camPitch+t.camDY*.004,.12,1.05),t.camDX=t.camDY=0,this.camDist=xn(this.camDist+t.zoom,5,16),t.zoom=0;const r=Math.sin(this.camYaw),a=Math.cos(this.camYaw);let o=t.my*r+t.mx*a,c=t.my*a-t.mx*r;const l=this.atkT>0&&n.mode==="ground"||this.dialogOpen||this.paused;if((this.dialogOpen||this.paused)&&(o=c=0),n.update(e,o,c,t.sprint&&!l,l),n.landDamage){const f=s.st.hp*n.landDamage;n.landDamage=0,s.hp-=f,this.num(n.pos,Math.round(f)+"","#ff6a6a",!1),s.hp<=0&&this.memberDown()}this.switchCd-=e,this.burstLock-=e,this.eclipse=Math.max(0,this.eclipse-e),this.buffAtk=Math.max(0,this.buffAtk-e),this.shieldT>0&&(this.shieldT-=e,this.shieldT<=0&&(this.shield=0)),this.partyDmgT=Math.max(0,this.partyDmgT-e);for(const f of this.members)f.critT=Math.max(0,f.critT-e),f.healCd-=e,f.charges>f.maxCharges&&(f.charges=f.maxCharges),f.cdE>0?(f.cdE-=e,f.cdE<=0&&(f.cdE=0,f.charges=Math.min(f.maxCharges,f.charges+1),f.charges<f.maxCharges&&(f.cdE=f.eCdFull))):f.charges<f.maxCharges&&(f.cdE=f.eCdFull),f.infuse&&(f.infuse.t-=e,f.infuse.t<=0&&(f.infuse=null));for(let f=this.timers.length-1;f>=0;f--){const u=this.timers[f];u.t-=e,u.t<=0&&(this.timers.splice(f,1),u.f())}if(!this.dialogOpen&&!this.paused&&!this.dead){if(t.jump&&(t.jump=!1,n.jump()),t.atkTap&&(t.atkTap=!1,n.mode==="air"||n.mode==="glide"?n.pos.y-n.groundAt(n.pos.x,n.pos.z)>1.2&&(n.mode="plunge"):n.mode==="ground"&&(this.atkT>.08?this.atkQueued=!0:this.doAttack(!1))),t.atkHold&&(t.atkHold=!1,n.mode==="ground"&&this.atkT<=.1)){const f=Ic[s.def.weapon];n.spendStam(f.caSt)&&(this.combo=0,this.doAttack(!0))}if(t.eTap||t.eHold){const f=t.eHold;t.eTap=t.eHold=!1,this.tryE(f)}t.qTap&&(t.qTap=!1,this.tryQ())}this.atkT>0&&(this.atkT-=e,this.atkT<=0&&this.atkQueued&&(this.atkQueued=!1,this.doAttack(!1))),this.atkFrameT-=e,this.comboT-=e,this.comboT<=0&&(this.combo=0);for(let f=this.projs.length-1;f>=0;f--){const u=this.projs[f];if(u.life-=e,u.home&&u.home.alive){const _=u.home.pos.clone().add(new D(0,.8,0)).sub(u.pos).normalize().multiplyScalar(u.vel.length());u.vel.lerp(_,Math.min(1,e*6)),u.fx&&(u.fx.o.vel=u.vel)}u.pos.addScaledVector(u.vel,e),u.fx&&u.fx.mesh.position.copy(u.pos);let g=u.life<=0||u.pos.y<(this.arena?this.arena.center.y-1:st(u.pos.x,u.pos.z)-.3);for(const _ of this.enemies.values()){if(!_.alive||u.hitIds.has(_.id))continue;const m=_.pos.y+(_.body==="wisp"?1.3*_.def.scale:.7*_.def.scale);if(At(_.pos.x,_.pos.z,u.pos.x,u.pos.z)<(u.r+_.radius)**2&&Math.abs(m-u.pos.y)<1.4*_.def.scale+u.r&&(u.hitIds.add(_.id),this.sendHit(_,{...u.hit,crit:Math.random()<u.hit.cr}),this.fxAt("hit-spark",u.pos,u.hit.el,.8),u.onHit?.(),u.aoe&&this.hitCircle(u.pos,u.aoe,{...u.hit,mv:u.hit.mv*.5}),!u.pierce)){g=!0;break}}g&&(u.aoe&&u.life>0&&this.fxAt("react-bloom",u.pos,u.hit.el,.6),this.elementAt(u.pos,u.hit.el),u.fx?.kill(),this.projs.splice(f,1))}for(let f=this.eprojs.length-1;f>=0;f--){const u=this.eprojs[f];u.life-=e,u.pos.addScaledVector(u.vel,e),u.fx&&u.fx.mesh.position.copy(u.pos);let g=u.life<=0;At(u.pos.x,u.pos.z,n.pos.x,n.pos.z)<.7&&Math.abs(u.pos.y-n.pos.y-.9)<1.3&&(this.hurt(u.dmg,u.el,20+Da()*8),g=!0),g&&(u.fx?.kill(),this.eprojs.splice(f,1))}for(let f=this.fields.length-1;f>=0;f--){const u=this.fields[f];u.t-=e,u.tick-=e,u.tick<=0&&(u.tick=u.every,u.onTick(u)),u.fxName&&(u.fxT=(u.fxT??0)-e,u.fxT<=0&&(u.fxT=u.fxEvery||1,this.fxAt(u.fxName,u.pos,u.el||null,u.fxScale||1))),u.t<=0&&this.fields.splice(f,1)}if(this.role!=="guest")for(const f of this.enemies.values())Ix(this,f,e);else for(const f of this.enemies.values())f.pos.lerp(f.netPos,Math.min(1,e*8));let h=null;for(const f of this.enemies.values())f.boss&&f.alive&&f.pos.distanceToSquared(n.pos)<40*40&&(h=f);this.bossActive=h,this.arena&&!this.arena.done&&(this.arena.t+=e,this.arena.wave>=0&&![...this.enemies.values()].some(f=>f.alive)&&(this.arena.wave>=this.arena.waves.length-1?(this.arena.wave++,this.arena.done=!0,ne.emit("arenaWin",this.arena)):this.nextWave()),this.arena.tlimit&&this.arena.t>this.arena.tlimit&&(ne.emit("toast","時間切れ…"),this.leaveArena(!1))),this.spawnT-=e,this.spawnT<=0&&(this.spawnT=.7,this.spawnAround()),this.updateInteract();const d=this.arena?this.arena.ret:n.pos;this.view.tint.copy(this.gfx.tint),this.view.update(d.x,d.z,this.now),this.net&&this.net.tick(e),this.saveT-=e,this.saveT<=0&&(this.saveT=8,this.arena||(L.pos={x:n.pos.x,y:n.pos.y,z:n.pos.z}),qe(),Is()),this.render(e)}doAttack(e){const t=this.cur,n=Ic[t.def.weapon],s=e?0:this.combo%n.mv.length;this.atkT=e?.55:n.dur[s],this.atkFrameT=this.atkT,this.comboT=this.atkT+.6,e||this.combo++,Rx(this,t,s,e)}render(e){const t=this.player,n=this.gfx.tint,s=t.pos.clone().add(new D(0,1.3,0));this.camT.lerp(s,Math.min(1,e*8));const r=this.camDist,a=Math.cos(this.camPitch),o=this.gfx.camera;o.position.set(this.camT.x+Math.sin(this.camYaw)*r*a,this.camT.y+Math.sin(this.camPitch)*r,this.camT.z+Math.cos(this.camYaw)*r*a);const c=this.arena?-999:st(o.position.x,o.position.z)+.8;if(o.position.y<c&&(o.position.y=c),this.shakeT>0){this.shakeT-=e;const h=this.shakeT*.6;o.position.x+=(Math.random()-.5)*h,o.position.y+=(Math.random()-.5)*h}o.lookAt(this.camT);let l=-1;if(this.atkFrameT>0){const h=this.cur,d=1-this.atkFrameT/Math.max(.01,this.atkT||.4);l=h.def.weapon==="catalyst"||this.burstLock>0?Dt.cast[0]:Dt.atk[Math.min(2,Math.floor(d*3))]}t.mode==="plunge"&&(l=Dt.atk[1]),t.render(e,this.camYaw,n,l),this.lastFrame=l>=0?l:t.bb.tex.offset.x*t.bb.W/tn;for(const h of this.enemies.values())h.render(e,this.camYaw,n);for(const h of this.remotes.values())h.render(e,this.camYaw,n);for(const h of this.npcs){const d=At(h.x,h.z,t.pos.x,t.pos.z);if(h.bb.root.visible=h.bb.shadow.visible=d<120*120,!h.bb.root.visible)continue;d<64&&(h.face=Math.atan2(t.pos.x-h.x,t.pos.z-h.z));const{dir:f,flip:u}=Sr(h.face,this.camYaw);h.bb.setFrame(Math.floor(this.now*1.5+h.x)%2,f,f===2?u:!1),h.bb.face(this.camYaw,n)}this.fx.update(e,this.camYaw);for(let h=this.tele.length-1;h>=0;h--){const d=this.tele[h];d.t+=e,d.mesh.material.opacity=.3+.5*(d.t/d.max),d.t>=d.max&&(d.mesh.visible=!1,this.tele.splice(h,1))}for(const[h,d]of this.view.poiObjs){const f=d.getObjectByName("gem");f&&(f.rotation.y+=e,en.get(h)?.type==="waypoint"&&f.material.color.set(L.wps[h]?5957887:6974074))}this.gfx.render()}}function y(i,e={},...t){const n=document.createElement(i);for(const s in e){const r=e[s];s==="class"?n.className=r:s==="style"?n.setAttribute("style",r):s.startsWith("on")?n.addEventListener(s.slice(2),r):r!=null&&r!==!1&&n.setAttribute(s,r===!0?"":r)}for(const s of t)s!=null&&s!==!1&&n.append(s);return n}const La=i=>document.querySelector(i);function Rt(i){for(;i.firstChild;)i.removeChild(i.firstChild);return i}function Xi(i){return"★".repeat(i)}const cn={1:"#8a8a9a",2:"#5aa86a",3:"#4a8ad8",4:"#9a5ad8",5:"#e8a83a"};let No=null;function Td(){if(No)return No;const i=240,e=document.createElement("canvas");e.width=e.height=i;const t=e.getContext("2d"),n=t.createImageData(i,i),s=[0,0,0];for(let r=0;r<i;r++)for(let a=0;a<i;a++){const o=a/i*Le*2-Le,c=r/i*Le*2-Le,l=st(o,c),h=(r*i+a)*4;if(l<0){n.data[h]=40,n.data[h+1]=90+Math.max(-14,l)*3,n.data[h+2]=170,n.data[h+3]=255;continue}rd(o,c,l,yl(o,c),s);const d=.8+Math.min(1,l/90)*.3,f=Math.floor(l/12)!==Math.floor(st(o+4,c)/12)?.85:1;n.data[h]=s[0]*255*d*f,n.data[h+1]=s[1]*255*d*f,n.data[h+2]=s[2]*255*d*f,n.data[h+3]=255}return t.putImageData(n,0,0),No=e,e}const Fo=new Map;function of(i,e,t=!1){const n=i+e+t;if(Fo.has(n))return Fo.get(n);const s=64,r=document.createElement("canvas");r.width=r.height=s;const a=r.getContext("2d");a.translate(s/2,s/2),a.lineCap="round",a.lineJoin="round",a.strokeStyle=e,a.fillStyle=e,a.lineWidth=5,a.shadowColor=e,a.shadowBlur=t?10:4;const o=(h,d,f)=>{a.beginPath();for(let u=0;u<10;u++){const g=-Math.PI/2+u*Math.PI/5,_=u%2?f*.45:f;a.lineTo(h+Math.cos(g)*_,d+Math.sin(g)*_)}a.closePath(),a.fill()},c=(h,d,f,u)=>{a.beginPath(),a.moveTo(h,d),a.lineTo(f,u),a.stroke();const g=Math.atan2(u-d,f-h);a.beginPath(),a.moveTo(f,u),a.lineTo(f-Math.cos(g-.5)*9,u-Math.sin(g-.5)*9),a.moveTo(f,u),a.lineTo(f-Math.cos(g+.5)*9,u-Math.sin(g+.5)*9),a.stroke()};switch(i){case"wave":a.beginPath(),a.arc(-6,0,18,-1.1,1.1),a.stroke(),a.beginPath(),a.arc(-14,0,14,-.9,.9),a.lineWidth=3,a.stroke();break;case"nova":a.beginPath(),a.arc(0,0,8,0,7),a.fill();for(let h=0;h<8;h++){const d=h*Math.PI/4;a.beginPath(),a.moveTo(Math.cos(d)*13,Math.sin(d)*13),a.lineTo(Math.cos(d)*22,Math.sin(d)*22),a.stroke()}break;case"dash":c(-20,10,18,-8),a.lineWidth=3,a.beginPath(),a.moveTo(-22,0),a.lineTo(-6,-6),a.moveTo(-18,18),a.lineTo(-2,12),a.stroke();break;case"turret":a.strokeRect(-9,-8,18,20),a.beginPath(),a.moveTo(-13,-8),a.lineTo(0,-20),a.lineTo(13,-8),a.stroke(),a.beginPath(),a.arc(0,3,4,0,7),a.fill();break;case"field":a.beginPath(),a.ellipse(0,8,22,9,0,0,7),a.stroke();for(const[h,d]of[[-8,-6],[6,-12],[10,0],[-2,-18]])a.beginPath(),a.arc(h,d,3,0,7),a.fill();break;case"shield":a.beginPath(),a.moveTo(0,-20),a.lineTo(17,-12),a.lineTo(14,8),a.lineTo(0,20),a.lineTo(-14,8),a.lineTo(-17,-12),a.closePath(),a.stroke(),a.lineWidth=3,a.beginPath(),a.moveTo(0,-10),a.lineTo(0,10),a.stroke();break;case"volley":for(const h of[-12,0,12])c(h-6,18,h+4,-16);break;case"infuse":a.beginPath(),a.moveTo(-14,16),a.lineTo(12,-12),a.stroke(),a.lineWidth=3,a.beginPath(),a.moveTo(-18,8),a.lineTo(-6,20),a.stroke(),a.beginPath(),a.moveTo(14,-20),a.quadraticCurveTo(22,-8,14,-2),a.quadraticCurveTo(8,-10,14,-20),a.fill();break;case"buff":c(0,18,0,-18),a.lineWidth=3,a.beginPath(),a.arc(0,2,20,.6,Math.PI-.6),a.stroke();break;case"meteor":o(8,-8,12),a.lineWidth=3;for(const h of[0,8])a.beginPath(),a.moveTo(-2-h,2+h),a.lineTo(-20-h,20+h),a.stroke();break;case"chain":a.beginPath(),a.moveTo(-18,-16),a.lineTo(-4,-4),a.lineTo(-10,2),a.lineTo(6,10),a.lineTo(0,14),a.lineTo(18,20),a.stroke();break;case"vortex":a.beginPath();for(let h=0;h<14;h+=.2){const d=2+h*1.6;a.lineTo(Math.cos(h)*d,Math.sin(h)*d)}a.lineWidth=4,a.stroke();break}t&&(a.shadowBlur=0,a.lineWidth=2,a.strokeStyle="rgba(255,255,255,.7)",a.beginPath(),a.arc(0,0,28,0,7),a.stroke());const l=r.toDataURL();return Fo.set(n,l),l}const wd=[{id:"apology_v02",from:"NINJIN運営",date:"2026/11/26",title:"バランス調整とメンテナンスのお詫び",items:{gem:8e3},body:`いつもNINJINを遊んでくれてありがとう！

敵やボスが強すぎて先に進めない問題がありました。ごめんなさい。
バランスを調整したので、もう一度挑戦してみてね。

お詫びとして、祈願50回分の星晶を贈ります。`},{id:"welcome_beginner",from:"NINJIN運営",date:"2026/11/26",title:"初心者応援ギフト",items:{ticket_s:30,ticket_g:20},body:`ヨスガ諸島へようこそ！

冒険のスタートを応援するプレゼントです。
・常設祈願 30回分（銀の願い札×30）
・限定キャラ祈願 10回分＋武器祈願 10回分（金の願い札×20）

「はじめての願い」では、50回以内に好きな★5キャラが必ず手に入るよ！`}];class Qx{constructor(e,t){this.g=e,this.openMenu=t,this.root=La("#hud"),this.btn={},this.joyId=-1,this.joyO={x:0,y:0},this.camId=-1,this.camLast={x:0,y:0},this.atkDown=0,this.eDown=0,this.keys=new Set,this.iconFor="",this.interKey="",this.qKey="",this.miniT=0;const n=this.root;Rt(n),this.joyBase=y("div",{class:"joy"}),this.joyKnob=y("div",{class:"knob"}),this.joyBase.append(this.joyKnob),n.append(this.joyBase);const s=(a,o,c)=>{const l=y("div",{class:"btn "+o},y("span",{},c));return n.append(l),this.btn[a]=l,l};s("atk","b-atk","攻撃"),s("e","b-e",""),s("q","b-q",""),s("jump","b-jump","跳"),s("sprint","b-sprint","走"),this.btn.e.append(y("i",{class:"cd"}),y("b",{class:"cdt"})),this.btn.q.append(y("i",{class:"en"})),this.party=y("div",{class:"party"}),n.append(this.party),this.inter=y("div",{class:"inter"}),n.append(this.inter),this.toastBox=y("div",{class:"toasts"}),n.append(this.toastBox),this.mini=y("canvas",{class:"mini",width:128,height:128}),n.append(this.mini),this.mini.addEventListener("pointerdown",a=>{a.stopPropagation(),t("map")}),n.append(y("div",{class:"menu-btn",onpointerdown:a=>{a.stopPropagation(),t("main")}},"≡"));const r=y("div",{class:"tr"});for(const[a,o,c]of[["mail","メール","✉"],["gacha","祈願","✦"],["quest","任務","!"],["coop","マルチ","⇄"],["chars","キャラ","☺"],["bag","バッグ","▣"]])r.append(y("div",{class:"ic",onpointerdown:l=>{l.stopPropagation(),t(a)}},y("b",{},c),y("small",{},o)));n.append(r),this.quest=y("div",{class:"qtrack",onpointerdown:a=>{a.stopPropagation(),t("quest")}}),n.append(this.quest),this.boss=y("div",{class:"bossbar"}),n.append(this.boss),this.coopTag=y("div",{class:"cooptag"}),n.append(this.coopTag),this.fpsEl=y("div",{class:"fps"}),n.append(this.fpsEl),this.bind(),ne.on("party",()=>this.buildParty()),ne.on("chars",()=>this.buildParty()),ne.on("toast",a=>this.toast(a)),ne.on("loot",a=>this.toast(a.join("　"))),this.buildParty()}toast(e){const t=y("div",{class:"toast"},e);for(this.toastBox.append(t),setTimeout(()=>t.classList.add("out"),2600),setTimeout(()=>t.remove(),3200);this.toastBox.children.length>4;)this.toastBox.firstChild.remove()}buildParty(){Rt(this.party),this.g.members.forEach((e,t)=>{const n=Ai(e.def.look,e.def.weapon,2,e.id);n.className="pp";const s=y("div",{class:"pm","data-i":t,onpointerdown:r=>{r.stopPropagation(),this.g.switchTo(t)}},y("div",{class:"pn"},y("span",{class:"num"},String(t+1)),e.def.name),n,y("i",{class:"hp"},y("b")),y("i",{class:"eb",style:`--c:${ct[e.def.el].color}`}));this.party.append(s)})}bind(){const e=this.g,t=e.input;La("#app").addEventListener("pointerdown",h=>{h.target.closest("#ui")||e.paused||(h.clientX<innerWidth*.42&&this.joyId<0?(this.joyId=h.pointerId,this.joyO={x:h.clientX,y:h.clientY},this.joyBase.style.cssText=`left:${h.clientX-60}px;top:${h.clientY-60}px;opacity:1`,this.joyKnob.style.transform=""):this.camId<0&&(this.camId=h.pointerId,this.camLast={x:h.clientX,y:h.clientY}))}),addEventListener("pointermove",h=>{if(h.pointerId===this.joyId){let d=h.clientX-this.joyO.x,f=h.clientY-this.joyO.y;const u=Math.hypot(d,f),g=50;u>g&&(d*=g/u,f*=g/u),this.joyKnob.style.transform=`translate(${d}px,${f}px)`,t.mx=d/g,t.my=f/g}else h.pointerId===this.camId&&(t.camDX+=h.clientX-this.camLast.x,t.camDY+=h.clientY-this.camLast.y,this.camLast={x:h.clientX,y:h.clientY})});const s=h=>{h.pointerId===this.joyId&&(this.joyId=-1,t.mx=t.my=0,this.joyBase.style.opacity="0.35",this.joyBase.style.left="60px",this.joyBase.style.top="",this.joyKnob.style.transform=""),h.pointerId===this.camId&&(this.camId=-1)};addEventListener("pointerup",s),addEventListener("pointercancel",s),addEventListener("wheel",h=>{t.zoom+=h.deltaY*.01},{passive:!0});const r=(h,d,f)=>{const u=this.btn[h];u.addEventListener("pointerdown",_=>{_.stopPropagation(),_.preventDefault(),u.classList.add("on"),d()});const g=_=>{_.stopPropagation(),u.classList.remove("on"),f?.()};u.addEventListener("pointerup",g),u.addEventListener("pointerleave",g),u.addEventListener("pointercancel",g)};let a=0,o=0,c=!1,l=!1;r("atk",()=>{c=!1,t.atkHeld=!0,clearTimeout(a),a=setTimeout(()=>{t.atkHeld&&(c=!0,t.atkHold=!0)},360)},()=>{t.atkHeld&&(t.atkHeld=!1,clearTimeout(a),c||(t.atkTap=!0))}),r("e",()=>{l=!1,clearTimeout(o),o=setTimeout(()=>{l=!0,t.eHold=!0},500)},()=>{clearTimeout(o),l||(t.eTap=!0),l=!0}),r("q",()=>{t.qTap=!0}),r("jump",()=>{t.jump=!0}),r("sprint",()=>{t.sprint=!0},()=>{t.sprint=!1}),addEventListener("keydown",h=>{if(h.target.tagName==="INPUT")return;const d=h.key.toLowerCase();this.keys.has(d)||(this.keys.add(d),d===" "&&(t.jump=!0),d==="shift"&&(t.sprint=!0),d==="j"&&(t.atkTap=!0),d==="k"&&(t.atkHold=!0),d==="e"&&(t.eTap=!0),d==="q"&&(t.qTap=!0),["1","2","3","4"].includes(d)&&e.switchTo(Number(d)-1),d==="f"&&e.interactables[0]?.act(),d==="m"&&this.openMenu("map"),d==="escape"&&this.openMenu("main"),this.keyMove())}),addEventListener("keyup",h=>{const d=h.key.toLowerCase();this.keys.delete(d),d==="shift"&&(t.sprint=!1),this.keyMove()})}keyMove(){if(this.joyId>=0)return;const e=this.keys,t=this.g.input;t.mx=(e.has("d")?1:0)-(e.has("a")?1:0),t.my=(e.has("s")?1:0)-(e.has("w")?1:0);const n=Math.hypot(t.mx,t.my);n>1&&(t.mx/=n,t.my/=n)}update(e,t){const n=this.g,s=n.cur,r=n.player,a=this.btn.e,o=s.cdE/(s.def.skill.cd*(1-s.st.cdr));a.querySelector(".cd").style.background=s.cdE>0?`conic-gradient(rgba(0,0,0,.6) ${o*360}deg, transparent 0)`:"none",a.querySelector(".cdt").textContent=s.charges>0&&s.maxCharges>1?`${s.charges}回`:s.charges<=0?s.cdE.toFixed(1):"",a.querySelector(".cd").style.opacity=s.charges>0?"0.35":"1";const c=wd.filter(p=>L.mail[p.id]!==2).length;if(this.root.querySelector(".tr .ic")?.classList.toggle("badge",c>0),a.style.setProperty("--c",ct[s.def.el].color),this.iconFor!==s.id){this.iconFor=s.id;const p=ct[s.def.el].color;a.firstElementChild.style.backgroundImage=`url(${of(s.def.skill.kind,p)})`,this.btn.q.firstElementChild.style.backgroundImage=`url(${of(s.def.burst.kind,p,!0)})`}const l=this.btn.q,h=s.energy/s.maxEnergy;l.style.setProperty("--c",ct[s.def.el].color),l.querySelector(".en").style.background=`conic-gradient(${ct[s.def.el].color} ${h*360}deg, rgba(255,255,255,.12) 0)`,l.classList.toggle("ready",h>=1),this.btn.jump.firstElementChild.textContent=r.mode==="air"?"翔":r.mode==="glide"?"降":r.mode==="climb"?"登":"跳",this.btn.atk.firstElementChild.textContent=r.mode==="air"||r.mode==="glide"?"落下":"攻撃",[...this.party.children].forEach((p,b)=>{const x=n.members[b];x&&(p.classList.toggle("act",b===n.active),p.classList.toggle("dead",x.dead),p.querySelector(".hp b").style.width=x.hp/x.st.hp*100+"%",p.querySelector(".eb").style.background=`conic-gradient(${ct[x.def.el].color} ${x.energy/x.maxEnergy*360}deg, rgba(0,0,0,.3) 0)`)});const d=n.interactables.map(p=>p.id).join("|");if(d!==this.interKey){this.interKey=d,Rt(this.inter);for(const p of n.interactables)this.inter.append(y("div",{class:"ib",onpointerdown:b=>{b.stopPropagation(),p.act()}},y("b",{},"F"),p.label))}const f=mi(),u=ja(),g=f?u.id+L.quest.step:"none"+L.daily.date;g!==this.qKey&&(this.qKey=g,Rt(this.quest),f?this.quest.append(y("div",{class:"qt"},u.chapter+"「"+u.title+"」"),y("div",{class:"qs"},"◆ "+f.text)):this.quest.append(y("div",{class:"qs"},"冒険を楽しもう！")));const _=zc(f);if(_){const p=Math.hypot(_.x-r.pos.x,_.z-r.pos.z);this.quest.lastElementChild.dataset.d=Math.round(p)+"m"}const m=n.bossActive;this.boss.style.display=m?"block":"none",m&&(this.boss.innerHTML=`<div class="bn">${m.def.name} <small>Lv.${m.lvl}</small></div><div class="bb"><i style="width:${m.hp/m.maxHp*100}%"></i></div>`),this.coopTag.textContent=n.role==="solo"?"":n.role==="host"?`マルチ中（ホスト）・${n.remotes.size+1}人`:"マルチ中（ゲスト）",this.fpsEl.textContent=L.settings.fps?`${t.toFixed(0)} fps / ${n.gfx.q}`:"",this.miniT-=e,this.miniT<=0&&(this.miniT=.1,this.drawMini())}drawMini(){const e=this.mini.getContext("2d"),t=this.g,n=t.arena?t.arena.ret:t.player.pos,s=Td(),r=128,a=90;e.save(),e.clearRect(0,0,r,r),e.beginPath(),e.arc(64,64,62,0,Math.PI*2),e.clip(),e.fillStyle="#1a3a6a",e.fillRect(0,0,r,r),e.translate(64,64),e.rotate(t.camYaw+Math.PI);const o=s.width/(Le*2),c=(n.x+Le)*o-a*o,l=(n.z+Le)*o-a*o;e.imageSmoothingEnabled=!1,e.drawImage(s,c,l,a*2*o,a*2*o,-64,-64,128,128);const h=64/a;for(const f of Pt){const u=(f.x-n.x)*h,g=(f.z-n.z)*h;u*u+g*g>64*64||(f.type==="waypoint"?(e.fillStyle=L.wps[f.id]?"#5ae8ff":"#6a7a8a",e.fillRect(u-2.5,g-2.5,5,5)):f.type==="boss"?(e.fillStyle="#ff4a8a",e.beginPath(),e.arc(u,g,3.5,0,7),e.fill()):f.type==="domain"||f.type==="statue"||f.type==="tower"?(e.fillStyle=f.type==="statue"?"#8aff8a":"#c08aff",e.fillRect(u-3,g-3,6,6)):f.type==="npc"&&(e.fillStyle="#ffd84a",e.beginPath(),e.arc(u,g,2.5,0,7),e.fill()))}const d=zc(mi());if(d){let f=(d.x-n.x)*h,u=(d.z-n.z)*h;const g=Math.hypot(f,u);g>56&&(f*=56/g,u*=56/g),e.fillStyle="#ffd84a",e.beginPath(),e.moveTo(f,u-6),e.lineTo(f+5,u),e.lineTo(f,u+6),e.lineTo(f-5,u),e.fill()}for(const f of t.remotes.values())e.fillStyle="#ff9ad8",e.beginPath(),e.arc((f.pos.x-n.x)*h,(f.pos.z-n.z)*h,3.5,0,7),e.fill();e.restore(),e.save(),e.translate(64,64),e.rotate(-(t.player.face-t.camYaw-Math.PI)+Math.PI),e.fillStyle="#ffffff",e.beginPath(),e.moveTo(0,-7),e.lineTo(5,5),e.lineTo(0,2),e.lineTo(-5,5),e.fill(),e.restore(),e.strokeStyle="rgba(255,255,255,.7)",e.lineWidth=2,e.beginPath(),e.arc(64,64,62,0,7),e.stroke()}}const hr=new D;class ey{constructor(e,t){this.cv=e,this.g=t,this.dpr=Math.min(2,devicePixelRatio||1),this.c=e.getContext("2d"),addEventListener("resize",()=>this.resize()),this.resize()}resize(){this.cv.width=innerWidth*this.dpr,this.cv.height=innerHeight*this.dpr,this.cv.style.width=innerWidth+"px",this.cv.style.height=innerHeight+"px"}proj(e,t,n){return hr.set(e,t,n).project(this.g.gfx.camera),{x:(hr.x*.5+.5)*innerWidth,y:(-hr.y*.5+.5)*innerHeight,ok:hr.z<1&&hr.z>-1}}draw(e){const t=this.c,n=this.g;t.setTransform(this.dpr,0,0,this.dpr,0,0),t.clearRect(0,0,innerWidth,innerHeight),t.textAlign="center",t.lineJoin="round";for(const a of n.enemies.values()){if(!a.alive||a.boss||a.pos.distanceToSquared(n.player.pos)>30*30)continue;const c=a.body==="wisp"?2.4:a.body==="golem"?2.5:1.8,l=this.proj(a.pos.x,a.pos.y+c*a.def.scale,a.pos.z);if(!l.ok)continue;const h=46;t.fillStyle="rgba(0,0,0,.55)",t.fillRect(l.x-h/2-1,l.y-1,h+2,6),t.fillStyle="#e84a4a",t.fillRect(l.x-h/2,l.y,h*(a.hp/a.maxHp),4),t.font="bold 10px sans-serif",t.fillStyle="#fff",t.strokeStyle="rgba(0,0,0,.8)",t.lineWidth=3,t.strokeText("Lv."+a.lvl,l.x-h/2+12,l.y-3),t.fillText("Lv."+a.lvl,l.x-h/2+12,l.y-3),a.aura&&(t.fillStyle=ct[a.aura.el].color,t.beginPath(),t.arc(l.x,l.y-12,6,0,7),t.fill(),t.fillStyle="#1a1424",t.font="bold 8px sans-serif",t.fillText(ct[a.aura.el].name,l.x,l.y-9)),a.frozen>0&&(t.fillStyle="#c8f4ff",t.font="bold 10px sans-serif",t.fillText("凍結",l.x+30,l.y+4))}for(const a of n.remotes.values()){const o=this.proj(a.pos.x,a.pos.y+2.4,a.pos.z);o.ok&&(t.font="bold 12px sans-serif",t.strokeStyle="rgba(0,0,0,.8)",t.lineWidth=3,t.fillStyle="#ff9ad8",t.strokeText(a.name,o.x,o.y),t.fillText(a.name,o.x,o.y))}for(let a=n.nums.length-1;a>=0;a--){const o=n.nums[a];if(o.t+=e,o.t>1){n.nums.splice(a,1);continue}const c=this.proj(o.x,o.y+o.t*1.2,o.z);if(!c.ok)continue;const l=o.t<.12?1+(.12-o.t)*4:1;t.globalAlpha=o.t>.7?(1-o.t)/.3:1,t.font=`bold ${Math.round((o.big?22:16)*l)}px sans-serif`,t.lineWidth=4,t.strokeStyle="rgba(20,10,30,.85)",t.strokeText(o.text,c.x,c.y),t.fillStyle=o.color,t.fillText(o.text,c.x,c.y)}t.globalAlpha=1;const s=n.player;if(s.stamina<s.stamMax-.5){const a=this.proj(s.pos.x,s.pos.y+1.2,s.pos.z),o=s.stamina/s.stamMax;t.lineWidth=5,t.strokeStyle="rgba(0,0,0,.45)",t.beginPath(),t.arc(a.x+34,a.y,13,0,7),t.stroke(),t.strokeStyle=o<.25?"#ff6a4a":"#ffd84a",t.beginPath(),t.arc(a.x+34,a.y,13,-Math.PI/2,-Math.PI/2+o*Math.PI*2),t.stroke()}if(n.shield>0){const a=this.proj(s.pos.x,s.pos.y+2.3,s.pos.z);t.fillStyle="#e8d8a0",t.font="bold 11px sans-serif",t.fillText("シールド "+Math.round(n.shield),a.x,a.y)}const r=zc(mi());if(r&&!n.arena){const a=this.proj(r.x,r.y+4,r.z),o=Math.hypot(r.x-s.pos.x,r.z-s.pos.z);let c=a.x,l=a.y;const h=40;a.ok||(l=innerHeight-h,c=innerWidth-c),c=Math.max(h,Math.min(innerWidth-h,c)),l=Math.max(h+60,Math.min(innerHeight-h,l)),t.fillStyle="#ffd84a",t.strokeStyle="rgba(0,0,0,.6)",t.lineWidth=3,t.beginPath(),t.moveTo(c,l-10),t.lineTo(c+8,l),t.lineTo(c,l+10),t.lineTo(c-8,l),t.closePath(),t.stroke(),t.fill(),t.font="bold 11px sans-serif",t.lineWidth=3,t.strokeText(Math.round(o)+"m",c,l+24),t.fillStyle="#fff",t.fillText(Math.round(o)+"m",c,l+24)}}}const aa=["raika","kurou","mikoto","kagura"];function Bc(){const i=Math.floor((Date.now()/864e5+3)/7),e=aa[i%aa.length],t=Cn.filter(a=>a.rarity===4&&!a.starter),n=[0,1,2].map(a=>t[(i*3+a)%t.length].id),s=[e,aa[(i+1)%aa.length]].map(a=>ai.find(o=>o.sig===a).id),r=ai.filter(a=>a.rarity===4).map(a=>a.id);return{featured:e,f4:n,sigs:s,fw4:[r[i%r.length],r[(i+3)%r.length]],endsIn:7-(Date.now()/864e5+3)%7}}const Fs=50,cf=()=>Cn.filter(i=>i.rarity===5&&!i.starter).map(i=>i.id);function Os(){const i=L.gacha;return i.beg||(i.beg={sel:"",n:0,done:!1}),i.beg}const mr={beginner:{name:"はじめての願い",ticket:"ticket_s",desc:"最大50回。50回以内に、自分で選んだ★5キャラが必ず1人手に入る！"},standard:{name:"星降る願い",ticket:"ticket_s",desc:"常設の祈願。★5キャラ・★5武器がランダムで登場。"},event:{name:"期間限定・キャラ祈願",ticket:"ticket_g",desc:"期間限定★5キャラの登場確率がアップ！"},weapon:{name:"神鍛の願い",ticket:"ticket_g",desc:"持ち武器（★5）の登場確率がアップ！"}},si=()=>Math.random(),Bn=i=>i[Math.floor(si()*i.length)];function ty(i,e){return i==="beginner"?e>=Fs?1:.006+(e>=30?(e-29)*.04:0):i==="weapon"?e>=80?1:e>=63?.007+(e-62)*.07:.007:e>=90?1:e>=74?.006+(e-73)*.06:.006}function ny(i){const e=L.gacha,t=Bc();e.p5[i]=(e.p5[i]||0)+1,e.p4[i]=(e.p4[i]||0)+1,i==="beginner"&&Os().n++;let n=3;si()<ty(i,e.p5[i])?n=5:(e.p4[i]>=10||si()<.051)&&(n=4);let s="weapon",r="";if(n===5)e.p5[i]=0,i==="beginner"?(r=Os().sel,s="char",Os().done=!0):i==="event"?(e.g.event||si()<.5?(r=t.featured,e.g.event=!1):(r=Bn(Cn.filter(o=>o.rarity===5&&!o.limited&&!o.starter)).id,e.g.event=!0),s="char"):i==="weapon"?e.g.weapon||si()<.75?(r=Bn(t.sigs),e.g.weapon=!1):(r=Bn(ai.filter(o=>o.rarity===5&&o.standard)).id,e.g.weapon=!0):si()<.5?(s="char",r=Bn(Cn.filter(o=>o.rarity===5&&!o.limited&&!o.starter)).id):r=Bn(ai.filter(o=>o.rarity===5&&o.standard)).id;else if(n===4){e.p4[i]=0;const o=Cn.filter(l=>l.rarity===4).map(l=>l.id),c=ai.filter(l=>l.rarity===4).map(l=>l.id);i==="event"&&si()<.5?(s="char",r=Bn(t.f4)):i==="weapon"&&si()<.75?r=Bn(t.fw4):si()<(i==="weapon"?.3:.5)?(s="char",r=Bn(o)):r=Bn(c)}else r=Bn(ai.filter(o=>o.rarity===3)).id;const a={kind:s,id:r,rarity:n,dust:0};if(s==="char"){const o=za(r);a.isNew=o.isNew,a.cons=o.cons,o.isNew||(a.dust=n===5?o.cons<0?25:10:o.cons<0?5:2)}else Tf(r),a.dust=n===5?10:n===4?2:0;return a.dust&&it("dust",a.dust),e.hist.unshift({t:Date.now(),b:i,id:r,r:n}),e.hist.length>200&&(e.hist.length=200),qe(),a}function iy(i,e){if(i==="beginner"){const o=Os();if(!o.sel)return"先に、もらいたい★5キャラを選んでね";if(o.done)return"はじめての願いはもう終わりました";if(o.n+e>Fs)return`残りは ${Fs-o.n} 回です`}const t=mr[i].ticket,n=ht(t),s=Math.max(0,e-n),r=s*160;if(ht("gem")<r)return`${i==="standard"?"銀":"金"}の願い札が足りません（星晶 ${r} 個で交換できます）`;s&&wn("gem",r),wn(t,e-s);const a=[];for(let o=0;o<e;o++){if(i==="beginner"&&Os().done&&o>0){it(t,1);continue}a.push(ny(i))}return ne.emit("gacha"),a}const Oo=(i,e)=>Sf.has(i)?vt(e):Yi(e),wi=i=>ss(i)?.name||i;class sy{constructor(e){this.g=e,this.ui=La("#ui"),this.stack=[],this.cur=null,this.selChar="",this.tab="info",this.bagTab="weapon",this.gTab="beginner",this.onChange=null,ne.on("dialog",(t,n)=>this.dialog(t,n)),ne.on("npc",t=>this.npc(t)),ne.on("statue",t=>this.statue(t)),ne.on("domain",t=>this.domain(t)),ne.on("tower",()=>this.tower()),ne.on("arenaWin",t=>this.arenaWin(t)),ne.on("questDone",(t,n)=>this.banner(`${t.chapter}「${t.title}」完了！`,n.char?`${je(n.char).name} が仲間になった！`:"報酬を受け取った")),ne.on("chars",()=>this.onChange?.()),ne.on("items",()=>this.onChange?.())}get isOpen(){return!!this.cur}close(){this.cur?.remove(),this.cur=null,this.onChange=null,this.g.paused=!1,this.g.buildParty(),Is(!0)}panel(e,t,n=""){this.cur?.remove(),this.onChange=null;const s=y("div",{class:"panel "+n},y("div",{class:"ph"},y("div",{class:"pt"},e),y("div",{class:"px",onclick:()=>this.close()},"✕")),t);return this.ui.append(s),this.cur=s,this.g.paused=this.g.role==="solo",s}open(e,t){if(this.g.dialogOpen)return;const n={mail:()=>this.mail(),main:()=>this.main(),chars:()=>this.chars(t),party:()=>this.partyMenu(),gacha:()=>this.gacha(),bag:()=>this.bag(),quest:()=>this.quests(),map:()=>this.map(),coop:()=>this.coop(),settings:()=>this.settings(),shop:()=>this.shop()}[e];n?.()}main(){const e=y("div",{class:"grid"}),t=(s,r,a)=>e.append(y("div",{class:"gi",onclick:()=>this.open(s)},y("b",{},r),y("span",{},a)));t("chars","☺","キャラクター"),t("party","◎","編成"),t("gacha","✦","祈願"),t("bag","▣","バッグ"),t("quest","!","任務・依頼"),t("map","◈","マップ"),t("coop","⇄","マルチプレイ"),t("mail","✉","メール"),t("settings","⚙","設定");const n=Oc(L.ar);this.panel("メニュー",y("div",{},y("div",{class:"arbox"},y("div",{},`冒険ランク ${L.ar}　世界ランク ${Da()}`),y("div",{class:"bar"},y("i",{style:`width:${L.arExp/n*100}%`})),y("small",{},`${vt(L.arExp)} / ${vt(n)}　・　プレイ時間 ${Math.floor(L.stats.play/3600)}時間${Math.floor(L.stats.play%3600/60)}分`)),e))}chars(e){const t=Hl();e&&(this.selChar=e),(!this.selChar||!L.chars[this.selChar])&&(this.selChar=this.g.cur.id);const n=y("div",{class:"chars"});this.panel("キャラクター",n,"wide");const s=()=>{Rt(n);const r=y("div",{class:"clist"});for(const f of t){const u=Ai(f.look,f.weapon,2,f.id);r.append(y("div",{class:"ci"+(f.id===this.selChar?" on":""),style:`--r:${cn[f.rarity]}`,onclick:()=>{this.selChar=f.id,s()}},u,y("span",{},f.name),y("i",{style:`background:${ct[f.el].color}`})))}const a=je(this.selChar),o=L.chars[a.id],c=y("div",{class:"tabs"});for(const[f,u]of[["info","属性"],["level","レベル"],["weapon","武器"],["relic","遺紋"],["talent","天賦"],["cons","覚醒"]])c.append(y("div",{class:"tab"+(this.tab===f?" on":""),onclick:()=>{this.tab=f,s()}},u));const l=Lo(a.look,a.weapon,4,a.id);l.className="fullart";const h=y("div",{class:"chead"},l,y("div",{},y("div",{class:"cname"},a.name,y("small",{style:`color:${cn[a.rarity]}`}," "+Xi(a.rarity))),y("div",{class:"ctitle"},a.title),y("div",{class:"ctags"},y("span",{class:"eltag",style:`background:${ct[a.el].color}`},ct[a.el].name),y("span",{},Ir[a.weapon]),y("span",{},`Lv.${o.lvl}/${ki[o.asc]}`),o.cons?y("span",{},`覚醒${o.cons}`):null))),d=y("div",{class:"cmain"},h,c,this.charTab(a.id,s));n.append(r,d)};this.onChange=s,s()}charTab(e,t){const n=je(e),s=L.chars[e],r=md(e),a=y("div",{class:"ctab"}),o=(l,h)=>y("div",{class:"row"},y("span",{},l),y("b",{},h)),c=l=>y("div",{class:"cost"},...Object.entries(l).map(([h,d])=>y("span",{class:ht(h)>=d?"":"lack"},`${wi(h)} ${vt(ht(h))}/${vt(d)}`)));if(this.tab==="info")a.append(o("HP上限",vt(r.hp)),o("攻撃力",vt(r.atk)),o("防御力",vt(r.def)),o("元素熟知",vt(r.em)),o("会心率",Yi(r.cr)),o("会心ダメージ",Yi(r.cd)),o("元素チャージ効率",Yi(r.er)),o(ct[n.el].name+"元素ダメージ",Yi(r.dmg[n.el])),r.heal?o("回復効果",Yi(r.heal)):null),a.append(y("p",{class:"bio"},n.bio));else if(this.tab==="level"){const l=ki[s.asc];if(a.append(y("div",{class:"big"},`Lv. ${s.lvl} / ${l}`)),s.lvl<l){a.append(y("div",{class:"bar"},y("i",{style:`width:${s.exp/Pa(s.lvl)*100}%`})),y("small",{},`経験値 ${vt(s.exp)} / ${vt(Pa(s.lvl))}`));const h=y("div",{class:"btns"});for(const d of["exp1","exp2","exp3"]){const f=ht(d);h.append(y("button",{disabled:!f,onclick:()=>{sf(s,d,1),t()}},`${wi(d)} (${f})`)),h.append(y("button",{disabled:!f,class:"sub",onclick:()=>{sf(s,d,Math.min(10,f)),t()}},"×10"))}a.append(h,y("small",{},"※ 経験値1000ごとにコイン200を使います"))}else if(s.asc<6){const h=yd(s);a.append(y("div",{},"突破に必要な素材"),c(h),y("button",{class:"primary",disabled:!ga(h),onclick:()=>{Fx(s)&&ne.emit("toast","突破成功！"),t()}},"突破する"))}else a.append(y("div",{},"最大レベルに到達！"))}else if(this.tab==="weapon"){const l=Cu(s);Ht(l.id),a.append(this.weaponCard(l),y("div",{class:"btns"},y("button",{onclick:()=>this.pickWeapon(e,t)},"武器を替える"),y("button",{onclick:()=>this.weaponUpgrade(l.uid,t)},"強化する")))}else if(this.tab==="relic"){const l=y("div",{class:"rslots"});for(const d of Fa){const f=Ta(s.relics[d]);l.append(y("div",{class:"rslot",onclick:()=>this.pickRelic(e,d,t)},y("div",{class:"rs"},Lr[d]),f?this.relicMini(f):y("small",{},"空き")))}a.append(l);const h=bx(s);for(const[d,f]of Object.entries(h))if(f>=2){const u=zl(d);a.append(y("div",{class:"setb"},`${u.name}　2セット：${u.d2}`,f>=4?y("div",{},`4セット：${u.d4}`):null))}}else if(this.tab==="talent"){const l=["通常攻撃",n.skill.name+"（E）",n.burst.name+"（Q）"],h=["連続攻撃。長押しで重撃、空中で押すと落下攻撃。",n.skill.desc+` クールタイム${n.skill.cd}秒。`,n.burst.desc+` 必要エネルギー${n.burst.cost}。`];[0,1,2].forEach(d=>{const f=s.tal[d],u=f<10?bd(s,d):null,g=Md(f+1);a.append(y("div",{class:"tal"},y("div",{class:"tn"},`${l[d]}　Lv.${f}${d===1&&s.cons>=3||d===2&&s.cons>=5?"+3":""}`),y("small",{},h[d]),u?y("div",{},s.asc<g?y("small",{class:"lack"},`突破${g}段階目が必要`):c(u),y("button",{disabled:s.asc<g||!ga(u),onclick:()=>{Ox(s,d),t()}},"レベルアップ")):y("small",{},"最大レベル")))})}else if(this.tab==="cons"){for(let l=0;l<6;l++){const h=nf(e,l);a.append(y("div",{class:"cons"+(s.cons>l?" on":"")},y("b",{},`第${l+1}重「${h.name}」`),y("div",{},h.desc)))}a.append(y("small",{},"同じキャラクターを祈願で引くと覚醒が進みます。"))}return a}weaponCard(e){const t=Ht(e.id),n=ef(t.type,cn[t.rarity],2);return n.className="wic",y("div",{class:"wcard",style:`--r:${cn[t.rarity]}`},n,y("div",{class:"wn"},t.name,y("small",{}," "+Xi(t.rarity))),y("div",{},`${Ir[t.type]}　Lv.${e.lvl}/${ki[e.asc]}　精錬${e.ref}`),y("div",{},`基礎攻撃力 ${vt(fd(t,e.lvl,e.asc))}`),t.sub?y("div",{},`${Ur[t.sub.k]} ${Oo(t.sub.k,dd(t,e.lvl))}`):null,t.pName?y("small",{},`【${t.pName}】${t.pDesc}`):null,t.sig?y("small",{class:"sig"},`${je(t.sig).name}の持ち武器`):null)}pickWeapon(e,t){const n=je(e),s=y("div",{class:"wlist"}),r=L.weapons.filter(a=>Ht(a.id).type===n.weapon).sort((a,o)=>Ht(o.id).rarity-Ht(a.id).rarity||o.lvl-a.lvl);for(const a of r){const o=Ka(a.uid);s.append(y("div",{class:"wli",onclick:()=>{const c=L.chars[e];o&&o.id!==e&&(o.weapon=c.weapon),c.weapon=a.uid,qe(),ne.emit("chars"),this.chars(e)}},this.weaponCard(a),o?y("small",{},`装備中：${je(o.id).name}`):null))}this.panel("武器を選ぶ",s)}weaponUpgrade(e,t){const n=y("div",{});this.panel("武器強化",n);const s=()=>{Rt(n);const r=L.weapons.find(l=>l.uid===e),a=Ht(r.id),o=ki[r.asc];if(n.append(this.weaponCard(r)),r.lvl<o){n.append(y("div",{class:"bar"},y("i",{style:`width:${r.exp/Fc(r.lvl,a.rarity)*100}%`})));const l=y("div",{class:"btns"});for(const h of["ore1","ore2","ore3"]){const d=ht(h);l.append(y("button",{disabled:!d,onclick:()=>{rf(r,h,1),s()}},`${wi(h)} (${d})`),y("button",{class:"sub",disabled:!d,onclick:()=>{rf(r,h,Math.min(10,d)),s()}},"×10"))}n.append(l)}else if(r.asc<ld(a)){const l=Sd(r);n.append(y("div",{class:"cost"},...Object.entries(l).map(([h,d])=>y("span",{class:ht(h)>=d?"":"lack"},`${wi(h)} ${vt(ht(h))}/${vt(d)}`))),y("button",{class:"primary",disabled:!ga(l),onclick:()=>{Bx(r),s()}},"突破する"))}const c=L.weapons.filter(l=>l.id===r.id&&l.uid!==r.uid&&!Ka(l.uid));r.ref<5&&a.rarity>=3&&n.append(y("div",{class:"btns"},y("button",{disabled:!c.length,onclick:()=>{Hx(r,c[0]),s()}},`精錬する（同じ武器 ${c.length}本）`))),n.append(y("button",{onclick:()=>this.chars()},"もどる"))};this.onChange=s,s()}relicMini(e){const t=zl(e.set);return y("div",{class:"rmini",style:`--r:${cn[e.rarity]}`},y("div",{class:"rn"},`${t.name}・${Lr[e.slot]}`,y("small",{},` ${Xi(e.rarity)} +${e.lvl}`)),y("div",{class:"rm"},`${Ur[e.main]} ${Oo(e.main,ud(e))}`),...e.subs.map(n=>y("small",{},`・${Ur[n.k]} +${Oo(n.k,n.v)}`)))}pickRelic(e,t,n){const s=y("div",{class:"wlist"}),r=L.chars[e],a=Ta(r.relics[t]);a&&s.append(y("div",{class:"btns"},y("button",{onclick:()=>{delete r.relics[t],qe(),ne.emit("chars"),this.chars(e)}},"外す"),y("button",{onclick:()=>this.relicUpgrade(a.uid,e)},"強化する")));const o=L.relics.filter(c=>c.slot===t).sort((c,l)=>l.rarity-c.rarity||l.lvl-c.lvl);for(const c of o){const l=Ja(c.uid);s.append(y("div",{class:"wli",onclick:()=>{if(l){const h=Object.keys(l.relics).find(d=>l.relics[d]===c.uid);a?l.relics[h]=a.uid:delete l.relics[h]}r.relics[t]=c.uid,qe(),ne.emit("chars"),this.chars(e)}},this.relicMini(c),l?y("small",{},`装備中：${je(l.id).name}`):null))}o.length||s.append(y("p",{},"この部位の遺紋を持っていません。秘境「紅砂の遺跡」やボス、宝箱で手に入ります。")),this.panel(`${Lr[t]}を選ぶ`,s)}relicUpgrade(e,t){const n=y("div",{});this.panel("遺紋強化",n);const s=new Set,r=()=>{Rt(n);const a=L.relics.find(h=>h.uid===e);if(n.append(this.relicMini(a)),a.lvl>=bl(a.rarity)){n.append(y("p",{},"最大レベルです")),n.append(y("button",{onclick:()=>t?this.chars(t):this.bag()},"もどる"));return}n.append(y("div",{class:"bar"},y("i",{style:`width:${a.exp/ka(a.lvl)*100}%`})));const o=L.relics.filter(h=>h.uid!==a.uid&&!Ja(h.uid)&&!h.lock).sort((h,d)=>h.rarity-d.rarity),c=o.filter(h=>s.has(h.uid)).reduce((h,d)=>h+Ed(d),0);n.append(y("div",{class:"btns"},y("button",{onclick:()=>{o.filter(h=>h.rarity<=4).slice(0,10).forEach(h=>s.add(h.uid)),r()}},"★4以下を自動選択"),y("button",{class:"primary",disabled:!s.size||ht("coin")<c,onclick:()=>{Gx(a,o.filter(h=>s.has(h.uid))),s.clear(),r()}},`強化（経験値 ${vt(c)} / コイン ${vt(c)}）`)));const l=y("div",{class:"fodder"});for(const h of o.slice(0,80))l.append(y("div",{class:"fi"+(s.has(h.uid)?" on":""),style:`--r:${cn[h.rarity]}`,onclick:()=>{s.has(h.uid)?s.delete(h.uid):s.add(h.uid),r()}},`${Lr[h.slot]}`,y("small",{},`${Xi(h.rarity)} +${h.lvl}`)));n.append(l,y("button",{onclick:()=>t?this.chars(t):this.bag()},"もどる"))};r()}partyMenu(){const e=y("div",{});this.panel("編成",e,"wide");const t=()=>{Rt(e);const n=y("div",{class:"pslots"});for(let a=0;a<4;a++){const o=L.party[a],c=o?je(o):null;n.append(y("div",{class:"ps"+(c?"":" empty")},c?Ai(c.look,c.weapon,3,c.id):y("span",{},"＋"),y("div",{},c?c.name:"空き"),c&&L.party.length>1?y("button",{class:"sub",onclick:()=>{L.party.splice(a,1),qe(),t()}},"外す"):null))}e.append(n);const s=pd(L.party);e.append(y("div",{class:"reso"},s.length?s.map(a=>`【${$h[a].name}】${$h[a].desc}`).join("　"):"元素共鳴：同じ元素のキャラを2人入れると効果が発動")),this.g.role!=="solo"&&e.append(y("small",{},"マルチ中は先頭2人で戦います。"));const r=y("div",{class:"plist"});for(const a of Hl()){const o=L.party.includes(a.id);r.append(y("div",{class:"ci"+(o?" on":""),style:`--r:${cn[a.rarity]}`,onclick:()=>{o?L.party.length>1&&L.party.splice(L.party.indexOf(a.id),1):L.party.length<4?L.party.push(a.id):L.party[3]=a.id,qe(),t()}},Ai(a.look,a.weapon,2,a.id),y("span",{},a.name),y("i",{style:`background:${ct[a.el].color}`})))}e.append(r)};t()}gacha(){const e=y("div",{class:"gacha"});this.panel("祈願",e,"wide");const t=()=>{Rt(e);const n=Bc(),s=Os();this.gTab==="beginner"&&s.done&&(this.gTab="event");const r=y("div",{class:"tabs"});for(const d of[...s.done?[]:["beginner"],"event","weapon","standard"])r.append(y("div",{class:"tab"+(this.gTab===d?" on":""),onclick:()=>{this.gTab=d,t()}},mr[d].name));const a=mr[this.gTab],o=a.ticket;let c;if(this.gTab==="beginner"){const d=s.sel?je(s.sel):null,f=y("div",{class:"begsel"});for(const u of cf()){const g=je(u);f.append(y("div",{class:"bs"+(s.sel===u?" on":""),style:`--c:${ct[g.el].color}`,onclick:()=>{s.sel=u,qe(),t()}},Ai(g.look,g.weapon,2,g.id),y("span",{},g.name),y("small",{class:"info",onclick:_=>{_.stopPropagation(),this.charInfo(u,()=>this.gacha())}},"詳細")))}c=y("div",{class:"feat",style:`--c:${d?ct[d.el].color:"#9ab8ff"}`},y("div",{style:"flex:1"},y("div",{class:"fname"},d?`選択中：${d.name}`:"もらいたい★5キャラを選んでね"),y("small",{},`残り ${Fs-s.n} 回　（${Fs}回以内に必ず手に入る）`),f))}else if(this.gTab==="event"){const d=je(n.featured),f=Lo(d.look,d.weapon,5,d.id);c=y("div",{class:"feat",style:`--c:${ct[d.el].color}`},f,y("div",{},y("div",{class:"fname"},d.name),y("div",{},d.title),y("div",{class:"eltag",style:`background:${ct[d.el].color}`},ct[d.el].name),y("small",{},"★4 確率アップ："+n.f4.map(u=>je(u).name).join("・")),y("small",{},`残り ${Math.ceil(n.endsIn)} 日`)))}else this.gTab==="weapon"?c=y("div",{class:"feat",style:"--c:#ffd84a"},y("div",{},y("div",{class:"fname"},n.sigs.map(d=>Ht(d).name).join(" / ")),y("small",{},"持ち武器の登場確率アップ！"),y("small",{},"★4 確率アップ："+n.fw4.map(d=>Ht(d).name).join("・")))):c=y("div",{class:"feat",style:"--c:#9ab8ff"},y("div",{},y("div",{class:"fname"},"星降る願い"),y("small",{},"★5："+Cn.filter(d=>d.rarity===5&&!d.limited&&!d.starter).map(d=>d.name).join("・")+"・常設★5武器")));const l=L.gacha.p5[this.gTab]||0,h=this.gTab==="weapon"?80:this.gTab==="beginner"?Fs:90;e.append(r,c,y("p",{class:"gdesc"},a.desc,y("br"),`★5まであと最大 ${h-l} 回${this.gTab!=="standard"&&L.gacha.g[this.gTab]?"（次の★5は確定でピックアップ！）":""}`),y("div",{class:"gbtns"},y("div",{class:"have"},`${wi(o)} ${ht(o)}　星晶 ${vt(ht("gem"))}　星屑 ${ht("dust")}`),y("button",{onclick:()=>this.doWish(1)},"1回祈願"),y("button",{class:"primary",onclick:()=>this.doWish(10)},"10回祈願")),y("div",{class:"btns"},y("button",{class:"sub",onclick:()=>this.gHist()},"履歴"),y("button",{class:"sub",onclick:()=>this.gDetail(this.gTab)},"詳細・確率")))};this.onChange=t,t()}doWish(e){const t=iy(this.gTab,e);if(typeof t=="string"){ne.emit("toast",t);return}this.wishAnim(t)}wishAnim(e){const t=Math.max(...e.map(g=>g.rarity)),n=t>=5?"gold":t===4?"purple":"blue",s=y("div",{class:"wishov"}),r=y("canvas",{width:176,height:184,class:"wishfx"});s.append(r),this.ui.append(s);const a=gl["wish-star"],o=r.getContext("2d"),c=_l(n);let l=0,h=performance.now();const d=document.createElement("canvas");d.width=176,d.height=184;const f=d.getContext("2d",{willReadFrequently:!0}),u=g=>{l+=(g-h)/1e3,h=g;const _=Math.floor(l*a.fps);if(_>=a.frames||!a.img){s.remove(),this.wishResults(e);return}f.clearRect(0,0,176,184),f.drawImage(a.img,_%a.columns*176,Math.floor(_/a.columns)*184,176,184,0,0,176,184);const m=f.getImageData(0,0,176,184);for(let p=0;p<m.data.length;p+=4){if(!m.data[p+3])continue;const b=(m.data[p]*.299+m.data[p+1]*.587+m.data[p+2]*.114)/255,x=Math.min(7,Math.floor(b*7.99));m.data[p]=c[x].x*255,m.data[p+1]=c[x].y*255,m.data[p+2]=c[x].z*255}o.clearRect(0,0,176,184),o.putImageData(m,0,0),requestAnimationFrame(u)};s.onclick=()=>{l=99},requestAnimationFrame(u)}wishResults(e){const t=y("div",{class:"wres"});for(const n of e.sort((s,r)=>r.rarity-s.rarity)){const s=n.kind==="char",r=s?je(n.id).name:Ht(n.id).name,a=s?Ai(je(n.id).look,je(n.id).weapon,3,n.id):ef(Ht(n.id).type,cn[n.rarity],3);t.append(y("div",{class:"wr r"+n.rarity,style:`--r:${cn[n.rarity]}`},a,y("div",{},r),y("small",{},Xi(n.rarity)),n.isNew?y("b",{class:"new"},"NEW"):null,n.cons&&n.cons>0?y("small",{},`覚醒${n.cons}`):null,n.dust?y("small",{},`星屑+${n.dust}`):null))}this.panel("祈願結果",y("div",{},t,y("button",{class:"primary",onclick:()=>this.gacha()},"OK")),"wide")}gDetail(e){const t=Bc(),n=y("div",{class:"gdetail"}),s=e==="weapon"?["★5：0.7%（63回目から上がり、80回目で必ず出る）","★4：6.0%（10回ごとに必ず1つ）","★5のうち75%がピックアップ武器。外れたら次の★5はピックアップ確定"]:e==="beginner"?["★5：0.6%（30回目から上がり、50回目で必ず出る）","★5は必ず自分で選んだキャラクター","★4：5.1%（10回ごとに必ず1つ）"]:e==="event"?["★5：0.6%（74回目から上がり、90回目で必ず出る）","★5のうち50%がピックアップキャラ。外れたら次の★5はピックアップ確定","★4：5.1%（10回ごとに必ず1つ、50%でピックアップ★4キャラ）"]:["★5：0.6%（74回目から上がり、90回目で必ず出る）","★5キャラと★5武器が半分ずつ","★4：5.1%（10回ごとに必ず1つ）"];n.append(y("h3",{},"確率"),...s.map(a=>y("div",{class:"rrow"},a)),y("div",{class:"rrow"},"★3：残り（★3武器）"),y("div",{class:"rrow"},`いまの★5天井カウント：${L.gacha.p5[e]||0}回`));const r=e==="event"?[t.featured,...t.f4]:e==="beginner"?cf():e==="standard"?Cn.filter(a=>a.rarity===5&&!a.limited&&!a.starter).map(a=>a.id):[];if(r.length){n.append(y("h3",{},"登場するキャラクター（タップで詳細）"));const a=y("div",{class:"plist"});for(const o of r){const c=je(o);a.append(y("div",{class:"ci",style:`--r:${cn[c.rarity]}`,onclick:()=>this.charInfo(o,()=>this.gDetail(e))},Ai(c.look,c.weapon,2,c.id),y("span",{},c.name),y("i",{style:`background:${ct[c.el].color}`})))}n.append(a)}if(e==="weapon"||e==="standard"){n.append(y("h3",{},"★5武器"));const a=e==="weapon"?t.sigs:ai.filter(o=>o.rarity===5&&o.standard).map(o=>o.id);for(const o of a)n.append(this.weaponCard({id:o,lvl:90,asc:6,ref:1}))}n.append(y("button",{onclick:()=>this.gacha()},"もどる")),this.panel(mr[e].name+"：詳細",n,"wide")}charInfo(e,t){const n=je(e),s=hd(n,90,6),r=y("div",{class:"cinfo"}),a=Lo(n.look,n.weapon,4,n.id);a.className="fullart",r.append(y("div",{class:"chead"},a,y("div",{},y("div",{class:"cname"},n.name,y("small",{style:`color:${cn[n.rarity]}`}," "+Xi(n.rarity))),y("div",{class:"ctitle"},n.title),y("div",{class:"ctags"},y("span",{class:"eltag",style:`background:${ct[n.el].color}`},ct[n.el].name),y("span",{},Ir[n.weapon]),n.limited?y("span",{},"期間限定"):null),y("p",{class:"bio"},n.bio)))),r.append(y("h3",{},"Lv.90のステータス（武器・遺紋なし）"),y("div",{class:"ctab"},...[["HP",vt(s.hp)],["攻撃力",vt(s.atk)],["防御力",vt(s.def)],["突破ボーナス",`${Ur[n.asc.k]||n.asc.k} +${Sf.has(n.asc.k)?n.asc.v:Yi(n.asc.v)}`]].map(([c,l])=>y("div",{class:"row"},y("span",{},c),y("b",{},l))))),r.append(y("h3",{},"天賦"),y("div",{class:"tal"},y("div",{class:"tn"},"通常攻撃"),y("small",{},Ir[n.weapon]+"の連続攻撃。長押しで重撃、空中で落下攻撃。")),y("div",{class:"tal"},y("div",{class:"tn"},`元素スキル「${n.skill.name}」`),y("small",{},`${n.skill.desc}（クールタイム${n.skill.cd}秒）`)),y("div",{class:"tal"},y("div",{class:"tn"},`元素爆発「${n.burst.name}」`),y("small",{},`${n.burst.desc}（元素エネルギー${n.burst.cost}）`))),r.append(y("h3",{},"覚醒"));const o=L.chars[e]?.cons??-1;for(let c=0;c<6;c++){const l=nf(e,c);r.append(y("div",{class:"cons"+(o>c?" on":"")},y("b",{},`第${c+1}重「${l.name}」`),y("div",{},l.desc)))}t&&r.append(y("button",{onclick:t},"もどる")),this.panel(n.name+"の詳細",r,"wide")}mail(){const e=y("div",{class:"mail"});this.panel("メール",e,"wide");const t=()=>{Rt(e);for(const n of wd){const s=L.mail[n.id]===2;e.append(y("div",{class:"mitem"+(s?" got":"")},y("div",{class:"mh"},y("b",{},n.title),y("small",{},`${n.from}　${n.date}`)),y("p",{},...n.body.split(`
`).flatMap((r,a)=>a?[y("br"),r]:[r])),y("div",{class:"cost"},...Object.entries(n.items).map(([r,a])=>y("span",{},`${wi(r)} ×${vt(a)}`))),y("button",{class:s?"":"primary",disabled:s,onclick:()=>{for(const[r,a]of Object.entries(n.items))it(r,a);L.mail[n.id]=2,qe(),Is(!0),ne.emit("toast","受け取りました！"),t()}},s?"受け取り済み":"受け取る")))}};this.onChange=t,t()}gHist(){const e=y("div",{class:"hist"});for(const t of L.gacha.hist.slice(0,80)){const n=je(t.id)?.name||Ht(t.id)?.name;e.append(y("div",{style:`color:${cn[t.r]}`},`${new Date(t.t).toLocaleString("ja-JP")}　${mr[t.b].name}　${n} ${Xi(t.r)}`))}this.panel("祈願履歴",y("div",{},e,y("button",{onclick:()=>this.gacha()},"もどる")))}bag(){const e=y("div",{});this.panel("バッグ",e,"wide");const t=()=>{Rt(e);const n=y("div",{class:"tabs"});for(const[r,a]of[["weapon","武器"],["relic","遺紋"],["mat","素材"],["food","料理"]])n.append(y("div",{class:"tab"+(this.bagTab===r?" on":""),onclick:()=>{this.bagTab=r,t()}},a));e.append(n);const s=y("div",{class:"items"});if(this.bagTab==="weapon")for(const r of[...L.weapons].sort((a,o)=>Ht(o.id).rarity-Ht(a.id).rarity)){const a=Ka(r.uid);s.append(y("div",{class:"wli",onclick:()=>this.weaponUpgrade(r.uid,t)},this.weaponCard(r),a?y("small",{},`装備中：${je(a.id).name}`):null))}if(this.bagTab==="relic"){e.append(y("small",{},`${L.relics.length} 個`));for(const r of[...L.relics].sort((a,o)=>o.rarity-a.rarity||o.lvl-a.lvl).slice(0,150)){const a=Ja(r.uid);s.append(y("div",{class:"wli",onclick:()=>this.relicUpgrade(r.uid)},this.relicMini(r),a?y("small",{},`装備中：${je(a.id).name}`):null))}}if(this.bagTab==="mat")for(const r of Nc)r.kind==="food"||!ht(r.id)||s.append(y("div",{class:"it",style:`--r:${cn[r.rarity]}`,title:r.desc},y("b",{style:`color:${r.color}`},r.icon),y("span",{},r.name),y("small",{},vt(ht(r.id)))));if(this.bagTab==="food")for(const r of Nc.filter(a=>a.kind==="food"))s.append(y("div",{class:"it",style:`--r:${cn[r.rarity]}`},y("b",{style:`color:${r.color}`},r.icon),y("span",{},r.name),y("small",{},`${ht(r.id)}個`),y("small",{},r.desc),y("button",{disabled:!ht(r.id),onclick:()=>{this.eat(r.id),t()}},"使う")));e.append(s)};this.onChange=t,t()}eat(e){const t=ss(e),n=this.g;if(e==="food3"){const r=n.members.find(a=>a.dead);if(!r){ne.emit("toast","倒れているキャラクターがいません");return}wn(e),r.dead=!1,r.hp=r.st.hp*t.v,ne.emit("toast",`${r.def.name}が復活した`);return}const s=n.cur;s.dead||(wn(e),s.hp=Math.min(s.st.hp,s.hp+s.st.hp*t.v),ne.emit("toast",`${s.def.name}のHPが回復した`))}quests(){El();const e=y("div",{});this.panel("任務・依頼",e,"wide");const t=()=>{Rt(e);const n=ja();mi(),e.append(y("h3",{},"メインストーリー")),n?e.append(y("div",{class:"qcard"},y("b",{},`${n.chapter}「${n.title}」`),...n.steps.map((s,r)=>y("div",{class:r<L.quest.step?"done":r===L.quest.step?"now":"todo"},(r<L.quest.step?"✓ ":r===L.quest.step?"◆ ":"・ ")+s.text)))):e.append(y("p",{},"メインストーリーはすべてクリアしました！")),e.append(y("small",{},`進行度 ${Math.min(Ia.length,L.quest.main)} / ${Ia.length} 章`)),e.append(y("h3",{},"毎日の依頼")),L.daily.tasks.forEach((s,r)=>e.append(y("div",{class:"daily"},y("span",{},s.text),y("small",{},`${s.n}/${s.goal}`),y("button",{disabled:s.n<s.goal||L.daily.claimed[r],onclick:()=>{Kx(r),t()}},L.daily.claimed[r]?"受取済":"受け取る")))),e.append(y("button",{class:"primary",disabled:L.daily.bonus||!L.daily.claimed.every(s=>s),onclick:()=>{Jx(),t()}},L.daily.bonus?"ボーナス受取済":"全部達成ボーナス（星晶100）")),e.append(y("small",{},"依頼は毎日0時に入れ替わります。何回でも遊べるよ！"))};this.onChange=t,t()}map(){const e=y("div",{class:"mapwrap"}),t=y("canvas",{class:"mapcv"}),n=y("div",{class:"mapinfo"});e.append(t,n),this.panel("マップ",e,"full");const s=Td();let r=1,a=0,o=0;const c=this.g.arena?this.g.arena.ret:this.g.player.pos,l=()=>{const m=e.clientWidth,p=e.clientHeight-10;t.width=m,t.height=p,r=Math.min(m,p)/(Le*2)*1.6,a=m/2-(c.x+Le)*r,o=p/2-(c.z+Le)*r,d()},h=(m,p)=>[(m+Le)*r+a,(p+Le)*r+o],d=()=>{const m=t.getContext("2d");m.fillStyle="#1a3a6a",m.fillRect(0,0,t.width,t.height),m.imageSmoothingEnabled=!1,m.drawImage(s,a,o,Le*2*r,Le*2*r),m.font="bold 12px sans-serif",m.textAlign="center";for(const v of Pt){const[R,M]=h(v.x,v.z);v.type==="waypoint"&&(m.fillStyle=L.wps[v.id]||v.id==="wp_beach"?"#5ae8ff":"#7a8a9a",m.beginPath(),m.moveTo(R,M-7),m.lineTo(R+5,M),m.lineTo(R,M+7),m.lineTo(R-5,M),m.fill(),m.strokeStyle="#123",m.stroke()),v.type==="statue"&&(m.fillStyle="#8aff8a",m.fillRect(R-5,M-5,10,10)),(v.type==="domain"||v.type==="tower")&&(m.fillStyle="#c08aff",m.fillRect(R-5,M-5,10,10),m.fillStyle="#fff",m.fillText(v.name||"",R,M-9)),v.type==="boss"&&(m.fillStyle="#ff4a8a",m.beginPath(),m.arc(R,M,6,0,7),m.fill()),v.type==="npc"&&v.name&&(m.fillStyle="#ffd84a",m.beginPath(),m.arc(R,M,3,0,7),m.fill())}for(const v of[{n:"ルコの町",x:20,z:236},{n:"アカツチ村",x:262,z:-10},{n:"シモツキ村",x:-196,z:-150},{n:sa.plains,x:-20,z:100},{n:sa.canyon,x:300,z:-60},{n:sa.peaks,x:-260,z:-230},{n:sa.spire,x:190,z:-250}]){const[R,M]=h(v.x,v.z);m.fillStyle="#fff",m.strokeStyle="rgba(0,0,0,.7)",m.lineWidth=3,m.strokeText(v.n,R,M+22),m.fillText(v.n,R,M+22)}const p=mi();if(p){const v=en.get(p.target.startsWith("@")?"":p.target);if(v){const[R,M]=h(v.x,v.z);m.fillStyle="#ffd84a",m.beginPath(),m.arc(R,M,9,0,7),m.fill(),m.fillStyle="#000",m.fillText("!",R,M+4)}}const[b,x]=h(c.x,c.z);m.fillStyle="#fff",m.beginPath(),m.arc(b,x,6,0,7),m.fill(),m.fillStyle="#ff5a8a",m.beginPath(),m.arc(b,x,3.5,0,7),m.fill();for(const v of this.g.remotes.values()){const[R,M]=h(v.pos.x,v.pos.z);m.fillStyle="#ff9ad8",m.beginPath(),m.arc(R,M,5,0,7),m.fill()}};let f=null,u=0;const g=new Map;let _=0;t.onpointerdown=m=>{g.set(m.pointerId,{x:m.clientX,y:m.clientY}),f={x:m.clientX,y:m.clientY},u=0,t.setPointerCapture(m.pointerId)},t.onpointermove=m=>{if(g.has(m.pointerId)){if(g.set(m.pointerId,{x:m.clientX,y:m.clientY}),g.size===2){const[p,b]=[...g.values()],x=Math.hypot(p.x-b.x,p.y-b.y);if(_){const v=x/_,R=(p.x+b.x)/2-t.getBoundingClientRect().left,M=(p.y+b.y)/2-t.getBoundingClientRect().top;a=R-(R-a)*v,o=M-(M-o)*v,r*=v}_=x,u=99,d();return}f&&(a+=m.clientX-f.x,o+=m.clientY-f.y,u+=Math.abs(m.clientX-f.x)+Math.abs(m.clientY-f.y),f={x:m.clientX,y:m.clientY},d())}},t.onpointerup=m=>{if(g.delete(m.pointerId),g.size<2&&(_=0),f=null,u>8)return;const p=t.getBoundingClientRect(),b=m.clientX-p.left,x=m.clientY-p.top;let v=null,R=22*22;for(const w of Pt){if(!["waypoint","domain","statue","boss","tower"].includes(w.type))continue;const[S,k]=h(w.x,w.z),F=(S-b)**2+(k-x)**2;F<R&&(R=F,v=w)}if(Rt(n),!v)return;const M=L.wps[v.id]||v.id==="wp_beach",C=v.type==="boss"?Aa(v.data.enemy).name:v.name||"";n.append(y("b",{},C),y("small",{},v.type==="waypoint"?M?"ワープポイント":"未解放（近づくと解放）":v.type==="boss"?"ボス":v.type==="domain"?"秘境":v.type==="tower"?"星の塔":"星の像"));const P=v.type==="waypoint"?v:Pt.find(w=>w.id==="wp_"+v.id);P&&(L.wps[P.id]||P.id==="wp_beach")&&n.append(y("button",{class:"primary",onclick:()=>{this.close(),!this.g.arena&&this.g.teleport(P.x+2,P.z+2)}},"ワープする"))},t.onwheel=m=>{const p=m.deltaY<0?1.15:.8695652173913044,b=t.getBoundingClientRect(),x=m.clientX-b.left,v=m.clientY-b.top;a=x-(x-a)*p,o=v-(v-o)*p,r*=p,d()},requestAnimationFrame(l)}settings(){const e=L.settings,t=y("div",{class:"settings"}),n=(s,r,a,o)=>y("div",{class:"row"},y("span",{},s),y("div",{class:"seg"},...r.map(([c,l])=>y("button",{class:a===c?"on":"",onclick:()=>{o(c),qe(),this.settings()}},l))));t.append(n("画質",[["auto","自動"],["low","低"],["mid","中"],["high","高"]],e.quality,s=>{e.quality=s,this.g.gfx.setQuality(s),this.g.applyQuality()}),n("ぼかし演出（HD-2D）",[["on","オン"],["off","オフ"]],e.tilt?"on":"off",s=>{e.tilt=s==="on",this.g.gfx.tilt=e.tilt,this.g.gfx.resize()}),n("FPS表示",[["on","オン"],["off","オフ"]],e.fps?"on":"off",s=>e.fps=s==="on"),n("効果音",[["on","オン"],["off","オフ"]],e.sfx?"on":"off",s=>e.sfx=s==="on"),y("div",{class:"row"},y("span",{},"名前（マルチで表示）"),y("input",{value:e.name,maxlength:10,onchange:s=>{e.name=s.target.value||"旅人",qe()}})),y("h3",{},"データ"),y("div",{class:"btns"},y("button",{onclick:()=>{Is(!0);const s=Eu();navigator.clipboard?.writeText(s).then(()=>ne.emit("toast","引き継ぎコードをコピーしました"),()=>prompt("引き継ぎコード",s))}},"引き継ぎコードをコピー"),y("button",{onclick:()=>{const s=prompt("引き継ぎコードを貼り付けてください");if(s)try{Tu(s),location.reload()}catch{alert("コードが正しくありません")}}},"コードから復元")),y("button",{class:"danger",onclick:()=>{confirm("本当にデータを消して最初からやり直しますか？")&&(wu(),location.reload())}},"データを消して最初から"),y("small",{},"NINJIN v0.1　セーブはこの端末のブラウザに自動保存されます。")),this.panel("設定",t)}coop(){const e=this.g,t=y("div",{class:"coop"});this.panel("マルチプレイ（2人）",t);const n=e.net;if(e.role!=="solo"){t.append(y("p",{},e.role==="host"?"ホストとして遊んでいます。部屋コード：":"ゲストとして参加中です。"),e.role==="host"?y("div",{class:"code"},n.code):null,y("p",{},`つながっている人：${[...e.remotes.values()].map(s=>s.name).join("、")||"まだいません"}`),y("button",{class:"danger",onclick:()=>{n.leave(),this.close()}},"マルチを終了する"));return}t.append(y("p",{},"友達と一緒に冒険できます。1人2キャラずつ操作します。"),y("button",{class:"primary",onclick:()=>{Rt(t),t.append(y("p",{},"部屋を作っています…")),window.NINJIN_NET.host().then(s=>{Rt(t),t.append(y("p",{},"この部屋コードを友達に送ってね："),y("div",{class:"code"},s),y("div",{class:"btns"},y("button",{onclick:()=>{navigator.clipboard?.writeText(s),ne.emit("toast","コピーしました")}},"コピー"),navigator.share?y("button",{onclick:()=>navigator.share({text:`NINJINで一緒に遊ぼう！部屋コード：${s}`,url:location.href})},"送る（LINEなど）"):null),y("p",{},"友達が参加すると自動で始まります。このまま遊んでいてOK！"))}).catch(s=>{Rt(t),t.append(y("p",{},"部屋を作れませんでした："+s),y("button",{onclick:()=>this.coop()},"もどる"))})}},"部屋を作る（ホスト）"),y("div",{class:"join"},y("input",{id:"joincode",placeholder:"部屋コード（6文字）",maxlength:6,style:"text-transform:uppercase"}),y("button",{onclick:()=>{const s=La("#joincode").value.trim().toUpperCase();s.length<4||(Rt(t),t.append(y("p",{},"接続しています…")),window.NINJIN_NET.join(s).then(()=>this.close()).catch(r=>{Rt(t),t.append(y("p",{},"参加できませんでした："+r),y("button",{onclick:()=>this.coop()},"もどる"))}))}},"参加する")),y("small",{},"※ うまくつながらない時は、Wi-Fiを切ってモバイル回線で試してみてね。"))}dialog(e,t){this.cur?.remove(),this.cur=null,this.g.dialogOpen=!0;let n=0;const s=y("div",{class:"dlg"});this.ui.append(s);const r=()=>{if(n>=e.length){s.remove(),this.g.dialogOpen=!1,t();return}const[a,o]=e[n];Rt(s);const c=Cn.find(l=>l.name===a)||(a==="ソラ"?je("sora"):null);s.append(c?Ai(c.look,c.weapon,3,c.id):y("div",{class:"nop"}),y("div",{class:"dt"},y("b",{},a),y("p",{},o),y("small",{},"タップで次へ ▼")))};s.onclick=()=>{n++,r()},r()}npc(e){const t=this.g;if(Xx(t,e))return;const n=en.get(e)?.name||"",s={npc_elder:"この島には、星の欠片がたくさん落ちておる。高いところを探してみるとよい。",npc_shop:"いらっしゃい！ 旅に必要なものはそろってるよ。",npc_guild:"毎日の依頼を確認する？",npc_smith:"いい武器は、いい素材から。岩兵の石はよく鍛えられるぞ。",npc_monk:"霜嶺は寒い。滑空で谷を越えるのが早いぞ。",npc_girl:"お兄ちゃん（お姉ちゃん）、宝箱って開けるとき、わくわくするよね！",npc_fisher:"海の向こうから、たまに不思議な光が見えるんだ。"};if(e==="npc_shop"){this.dialog([[n,s[e]]],()=>this.shop());return}if(e==="npc_guild"){this.dialog([[n,s[e]]],()=>this.quests());return}if(e==="npc_girl"&&!L.flags.girlDone){this.dialog([[n,"わたし、迷子になっちゃった……町まで連れてってくれる？ ……え、地図があるの？ ありがとう！ これ、お礼！"]],()=>{L.flags.girlDone=1,it("gem",60),it("food2",2),ne.emit("toast","星晶×60、焼き魚定食×2を手に入れた"),qe()});return}this.dialog([[n,s[e]||"……"]],()=>{})}shop(){const e=y("div",{class:"shop"});this.panel("商人ミツのお店",e,"wide");const t=[["food1",1,"coin",500],["food2",1,"coin",1500],["food3",1,"coin",3e3],["exp1",1,"coin",600],["exp2",1,"coin",2800],["ore1",1,"coin",300],["ore2",1,"coin",1400],["ticket_s",1,"dust",5],["ticket_g",1,"dust",5],["book_a1",1,"coin",1200],["book_b1",1,"coin",1200],["book_c1",1,"coin",1200]],n=()=>{Rt(e),e.append(y("div",{class:"have"},`コイン ${vt(ht("coin"))}　星屑 ${ht("dust")}`));for(const[s,r,a,o]of t)e.append(y("div",{class:"it"},y("b",{style:`color:${ss(s).color}`},ss(s).icon),y("span",{},ss(s).name),y("small",{},`${wi(a)} ${vt(o)}`),y("button",{disabled:ht(a)<o,onclick:()=>{wn(a,o)&&it(s,r),n()}},"買う")))};this.onChange=n,n()}statue(e){const t=this.g;jx(t,e);for(const r of t.members)r.dead=!1,r.hp=r.st.hp;t.player.stamina=t.player.stamMax;const n=L.statues[e]||0,s=y("div",{});s.append(y("p",{},"星の像に祈ると、仲間のHPが全回復します。"),y("p",{},`この像のレベル：${n} / 10　　星の欠片 ${ht("shard")}個`),y("p",{},`スタミナ上限：${L.stamMax}`)),s.append(y("button",{class:"primary",disabled:n>=10||ht("shard")<4,onclick:()=>{wn("shard",4)&&(L.statues[e]=n+1,L.stamMax+=15,t.player.stamMax=L.stamMax,it("gem",60),it("exp2",3),fi(100),qe(),ne.emit("toast","スタミナの上限が増えた！"),this.statue(e))}},"星の欠片を4つ捧げる")),this.panel("星の像",s)}domain(e){const t=en.get(e),n=t.data.kind,s=y("div",{}),r={book:"天賦の育成素材（教え・導き・哲学）が手に入る",relic:"遺紋（装備）が手に入る",ore:"武器の強化素材とキャラの経験値本が手に入る"};s.append(y("p",{},r[n]),y("p",{},"何回でも挑戦できます。毎日最初の3回は星晶40ももらえます。")),[1,2,3,4].forEach(a=>{const o=[8,24,42,62][a-1]+Da()*2;s.append(y("div",{class:"daily"},y("span",{},`難易度 ${a}`),y("small",{},`推奨 Lv.${o}`),y("button",{onclick:()=>{this.close();const c=n==="relic"?["bandit","archer","shaman","golem"]:n==="book"?["puff_fire","puff_water","wisp_volt","wisp_star"]:["golem","wisp_frost","puff_frost","bandit"],l=new ui(a*7+e.length),h=[0,1,2].slice(0,a>=3?3:2).map(d=>Array.from({length:3+d+(a>=3?1:0)},()=>l.pick(c)));this.g.enterArena("domain",e,a,h,o)}},"挑戦する")))}),this.panel(t.name||"秘境",s)}tower(){const e=y("div",{});e.append(y("p",{},"星の塔：強い敵を制限時間内に倒そう。早く倒すほど星がもらえます（星1つにつき星晶100、初回のみ）。"));for(let t=1;t<=12;t++){const n=L.tower["f"+t]||0,s=t===1||(L.tower["f"+(t-1)]||0)>0,r=15+t*6;e.append(y("div",{class:"daily"},y("span",{},`第${t}層`),y("small",{},`Lv.${r}　${"★".repeat(n)}${"☆".repeat(3-n)}`),y("button",{disabled:!s,onclick:()=>{this.close();const a=new ui(t*131),o=["bandit","archer","shaman","golem","puff_fire","puff_water","puff_volt","puff_frost","wisp_star","wisp_shadow"],c=[Array.from({length:3+(t>>2)},()=>a.pick(o)),t%4===0?[["boss_puff","boss_golem","boss_wisp","boss_knight"][(t/4-1)%4]]:Array.from({length:3+(t>>2)},()=>a.pick(o))];this.g.enterArena("tower","f"+t,t,c,r,180)}},"挑戦")))}this.panel("星の塔",e)}arenaWin(e){var a;const t=this.g,n=[],s=new ui(Date.now()),r=(o,c)=>{it(o,c),n.push(`${wi(o)} ×${c}`)};if(e.kind==="domain"){const o=en.get(e.id).data.kind,c=e.lv;if(r("coin",2e3*c),o==="relic"){const d=1+Math.floor(c/2);for(let f=0;f<d+1;f++){const u=s.next()<.12*c?5:s.next()<.5?4:3;Ho(s,u)}n.push(`遺紋 ×${d+1}`)}if(o==="book"){const d=s.pick(["a","b","c"]);r(`book_${d}1`,2+c),c>=2&&r(`book_${d}2`,c),c>=3&&r(`book_${d}3`,c-2)}o==="ore"&&(r("ore2",2+c*2),r("exp2",2+c),c>=3&&(r("ore3",c-2),r("exp3",c-2))),fi(60+c*20),ne.emit("daily","domain",1),qx(t,e.id);const l=new Date().toDateString(),h=(a=L.flags).domDay||(a.domDay={d:l,n:0});h.d!==l&&(h.d=l,h.n=0),h.n<3&&(h.n++,r("gem",40))}else{const o=e.t<60?3:e.t<100?2:1,c=L.tower[e.id]||0;o>c&&(r("gem",100*(o-c)),L.tower[e.id]=o),r("coin",3e3+e.lv*800),n.push(`★${o}（${Math.round(e.t)}秒）`)}qe(),setTimeout(()=>this.panel("クリア！",y("div",{},y("div",{class:"loot"},...n.map(o=>y("div",{},o))),y("div",{class:"btns"},y("button",{class:"primary",onclick:()=>{this.close(),t.leaveArena(!0)}},"外に出る"),e.kind==="domain"?y("button",{onclick:()=>{this.close(),t.leaveArena(!0),this.domain(e.id)}},"もう一度"):null))),900)}banner(e,t){const n=y("div",{class:"banner"},y("b",{},e),y("small",{},t));this.ui.append(n),setTimeout(()=>n.classList.add("out"),3200),setTimeout(()=>n.remove(),4e3)}}class ry{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return ay(e).buffer}}function ay(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i){const r=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);t.set(r,n),n+=s.byteLength}return t}function Cd(i){return new oy(i).unpack()}function Ad(i){const e=new cy,t=e.pack(i);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class oy{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,s="",r,a;for(;n<e;)r=t[n],r<160?(a=r,n++):(r^192)<32?(a=(r&31)<<6|t[n+1]&63,n+=2):(r^224)<16?(a=(r&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(a=(r&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),s+=String.fromCodePoint(a);return this.index+=e,s}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const s=this.unpack();t[s]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,s=e&8388607|8388608;return(t===0?1:-1)*s*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,s=(e>>20&2047)-1023,a=(e&1048575|1048576)*2**(s-20)+t*2**(s-52);return(n===0?1:-1)*a}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class cy{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=s=>{if(s<t){const r=this.pack(e[s]);return r instanceof Promise?r.then(()=>n(s+1)):n(s+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),s=e/2**n-1,r=Math.floor(s*2**52),a=2**32,o=t<<31|n+1023<<20|r/a&1048575,c=r%a;this._bufferBuilder.append(203),this.pack_int32(o),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const s=r=>{if(r<t.length){const a=t[r];if(e.hasOwnProperty(a)){this.pack(a);const o=this.pack(e[a]);if(o instanceof Promise)return o.then(()=>s(r+1))}return s(r+1)}};return s(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new ry,this._textEncoder=new TextEncoder}}let Rd=!0,Pd=!0;function gr(i,e,t){const n=i.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function ls(i,e,t){if(!i.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){Tl("Unable to polyfill events");return}const s=i.RTCPeerConnection.prototype,r=s.addEventListener;s.addEventListener=function(o,c){if(o!==e)return r.apply(this,arguments);const l=h=>{const d=t(h);d&&(c.handleEvent?c.handleEvent(d):c(d))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,l),r.apply(this,[o,l])};const a=s.removeEventListener;s.removeEventListener=function(o,c){if(o!==e||!this._eventMap||!this._eventMap[e])return a.apply(this,arguments);if(!this._eventMap[e].has(c))return a.apply(this,arguments);const l=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,a.apply(this,[o,l])},Object.defineProperty(s,"on"+e,{get(){return this["_on"+e]},set(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}function ly(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(Rd=i,i?"adapter.js logging disabled":"adapter.js logging enabled")}function hy(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(Pd=!i,"adapter.js deprecation warnings "+(i?"disabled":"enabled"))}function Tl(){if(typeof window=="object"){if(Rd)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function wl(i,e){Pd&&console.warn(i+" is deprecated, please use "+e+" instead.")}function fy(i){const e={browser:null,version:null};if(typeof i>"u"||!i.navigator||!i.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=i;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(s=>s.brand==="Chromium");if(n){const s=parseInt(n.version,10);if(s>=90)return{browser:"chrome",version:s}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(gr(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||i.isSecureContext===!1&&i.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(gr(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(i.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(gr(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=i.RTCRtpTransceiver&&"currentDirection"in i.RTCRtpTransceiver.prototype,e._safariVersion=gr(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function lf(i){return Object.prototype.toString.call(i)==="[object Object]"}function kd(i){return lf(i)?Object.keys(i).reduce(function(e,t){const n=lf(i[t]),s=n?kd(i[t]):i[t],r=n&&!Object.keys(s).length;return s===void 0||r?e:Object.assign(e,{[t]:s})},{}):i}function Hc(i,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?Hc(i,i.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(s=>{Hc(i,i.get(s),t)})}))}function hf(i,e,t){const n=t?"outbound-rtp":"inbound-rtp",s=new Map;if(e===null)return s;const r=[];return i.forEach(a=>{a.type==="track"&&a.trackIdentifier===e.id&&r.push(a)}),r.forEach(a=>{i.forEach(o=>{o.type===n&&o.trackId===a.id&&Hc(i,o,s)})}),s}const ff=Tl;function Dd(i,e){if(e.version>=64)return;const t=i&&i.navigator;if(!t.mediaDevices)return;const n=function(o){if(typeof o!="object"||o.mandatory||o.optional)return o;const c={};return Object.keys(o).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const h=typeof o[l]=="object"?o[l]:{ideal:o[l]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);const d=function(f,u){return f?f+u.charAt(0).toUpperCase()+u.slice(1):u==="deviceId"?"sourceId":u};if(h.ideal!==void 0){c.optional=c.optional||[];let f={};typeof h.ideal=="number"?(f[d("min",l)]=h.ideal,c.optional.push(f),f={},f[d("max",l)]=h.ideal,c.optional.push(f)):(f[d("",l)]=h.ideal,c.optional.push(f))}h.exact!==void 0&&typeof h.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[d("",l)]=h.exact):["min","max"].forEach(f=>{h[f]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[d(f,l)]=h[f])})}),o.advanced&&(c.optional=(c.optional||[]).concat(o.advanced)),c},s=function(o,c){if(e.version>=61)return c(o);if(o=JSON.parse(JSON.stringify(o)),o&&typeof o.audio=="object"){const l=function(h,d,f){d in h&&!(f in h)&&(h[f]=h[d],delete h[d])};o=JSON.parse(JSON.stringify(o)),l(o.audio,"autoGainControl","googAutoGainControl"),l(o.audio,"noiseSuppression","googNoiseSuppression"),o.audio=n(o.audio)}if(o&&typeof o.video=="object"){let l=o.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const h=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!h)){delete o.video.facingMode;let d;if(l.exact==="environment"||l.ideal==="environment"?d=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(d=["front"]),d)return t.mediaDevices.enumerateDevices().then(f=>{f=f.filter(g=>g.kind==="videoinput");let u=f.find(g=>d.some(_=>g.label.toLowerCase().includes(_)));return!u&&f.length&&d.includes("back")&&(u=f[f.length-1]),u&&(o.video.deviceId=l.exact?{exact:u.deviceId}:{ideal:u.deviceId}),o.video=n(o.video),ff("chrome: "+JSON.stringify(o)),c(o)})}o.video=n(o.video)}return ff("chrome: "+JSON.stringify(o)),c(o)},r=function(o){return e.version>=64?o:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[o.name]||o.name,message:o.message,constraint:o.constraint||o.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},a=function(o,c,l){s(o,h=>{t.webkitGetUserMedia(h,c,d=>{l&&l(r(d))})})};if(t.getUserMedia=a.bind(t),t.mediaDevices.getUserMedia){const o=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return s(c,l=>o(l).then(h=>{if(l.audio&&!h.getAudioTracks().length||l.video&&!h.getVideoTracks().length)throw h.getTracks().forEach(d=>{d.stop()}),new DOMException("","NotFoundError");return h},h=>Promise.reject(r(h))))}}}function Id(i){i.MediaStream=i.MediaStream||i.webkitMediaStream}function Ld(i,e){if(!(e.version>102))if(typeof i=="object"&&i.RTCPeerConnection&&!("ontrack"in i.RTCPeerConnection.prototype)){Object.defineProperty(i.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=s=>{s.stream.addEventListener("addtrack",r=>{let a;i.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===r.track.id):a={track:r.track};const o=new Event("track");o.track=r.track,o.receiver=a,o.transceiver={receiver:a},o.streams=[s.stream],this.dispatchEvent(o)}),s.stream.getTracks().forEach(r=>{let a;i.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===r.id):a={track:r};const o=new Event("track");o.track=r,o.receiver=a,o.transceiver={receiver:a},o.streams=[s.stream],this.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else ls(i,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function Ud(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("getSenders"in i.RTCPeerConnection.prototype)&&"createDTMFSender"in i.RTCPeerConnection.prototype){const e=function(s,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=s.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:s}};if(!i.RTCPeerConnection.prototype.getSenders){i.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const s=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(o,c){let l=s.apply(this,arguments);return l||(l=e(this,o),this._senders.push(l)),l};const r=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(o){r.apply(this,arguments);const c=this._senders.indexOf(o);c!==-1&&this._senders.splice(c,1)}}const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],t.apply(this,[r]),r.getTracks().forEach(a=>{this._senders.push(e(this,a))})};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],n.apply(this,[r]),r.getTracks().forEach(a=>{const o=this._senders.find(c=>c.track===a);o&&this._senders.splice(this._senders.indexOf(o),1)})}}else if(typeof i=="object"&&i.RTCPeerConnection&&"getSenders"in i.RTCPeerConnection.prototype&&"createDTMFSender"in i.RTCPeerConnection.prototype&&i.RTCRtpSender&&!("dtmf"in i.RTCRtpSender.prototype)){const e=i.RTCPeerConnection.prototype.getSenders;i.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n},Object.defineProperty(i.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function Nd(i,e){if(e.version>=67||!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender&&i.RTCRtpReceiver))return;if(!("getStats"in i.RTCRtpSender.prototype)){const n=i.RTCPeerConnection.prototype.getSenders;n&&(i.RTCPeerConnection.prototype.getSenders=function(){const a=n.apply(this,[]);return a.forEach(o=>o._pc=this),a});const s=i.RTCPeerConnection.prototype.addTrack;s&&(i.RTCPeerConnection.prototype.addTrack=function(){const a=s.apply(this,arguments);return a._pc=this,a}),i.RTCRtpSender.prototype.getStats=function(){const a=this;return this._pc.getStats().then(o=>hf(o,a.track,!0))}}if(!("getStats"in i.RTCRtpReceiver.prototype)){const n=i.RTCPeerConnection.prototype.getReceivers;n&&(i.RTCPeerConnection.prototype.getReceivers=function(){const r=n.apply(this,[]);return r.forEach(a=>a._pc=this),r}),ls(i,"track",s=>(s.receiver._pc=s.srcElement,s)),i.RTCRtpReceiver.prototype.getStats=function(){const r=this;return this._pc.getStats().then(a=>hf(a,r.track,!1))}}if(!("getStats"in i.RTCRtpSender.prototype&&"getStats"in i.RTCRtpReceiver.prototype))return;const t=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof i.MediaStreamTrack){const s=arguments[0];let r,a,o;return this.getSenders().forEach(c=>{c.track===s&&(r?o=!0:r=c)}),this.getReceivers().forEach(c=>(c.track===s&&(a?o=!0:a=c),c.track===s)),o||r&&a?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():a?a.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function Fd(i){i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(a=>this._shimmedLocalStreams[a][0])};const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(a,o){if(!o)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[o.id]?this._shimmedLocalStreams[o.id].indexOf(c)===-1&&this._shimmedLocalStreams[o.id].push(c):this._shimmedLocalStreams[o.id]=[o,c],c};const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(a){this._shimmedLocalStreams=this._shimmedLocalStreams||{},a.getTracks().forEach(l=>{if(this.getSenders().find(d=>d.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const o=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>o.indexOf(l)===-1);this._shimmedLocalStreams[a.id]=[a].concat(c)};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[a.id],n.apply(this,arguments)};const s=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},a&&Object.keys(this._shimmedLocalStreams).forEach(o=>{const c=this._shimmedLocalStreams[o].indexOf(a);c!==-1&&this._shimmedLocalStreams[o].splice(c,1),this._shimmedLocalStreams[o].length===1&&delete this._shimmedLocalStreams[o]}),s.apply(this,arguments)}}function Od(i,e){if(!i.RTCPeerConnection)return;if(i.RTCPeerConnection.prototype.addTrack&&e.version>=65)return Fd(i);const t=i.RTCPeerConnection.prototype.getLocalStreams;i.RTCPeerConnection.prototype.getLocalStreams=function(){const h=t.apply(this);return this._reverseStreams=this._reverseStreams||{},h.map(d=>this._reverseStreams[d.id])};const n=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(h){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},h.getTracks().forEach(d=>{if(this.getSenders().find(u=>u.track===d))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[h.id]){const d=new i.MediaStream(h.getTracks());this._streams[h.id]=d,this._reverseStreams[d.id]=h,h=d}n.apply(this,[h])};const s=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(h){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},s.apply(this,[this._streams[h.id]||h]),delete this._reverseStreams[this._streams[h.id]?this._streams[h.id].id:h.id],delete this._streams[h.id]},i.RTCPeerConnection.prototype.addTrack=function(h,d){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const f=[].slice.call(arguments,1);if(f.length!==1||!f[0].getTracks().find(_=>_===h))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(_=>_.track===h))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const g=this._streams[d.id];if(g)g.addTrack(h),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const _=new i.MediaStream([h]);this._streams[d.id]=_,this._reverseStreams[_.id]=d,this.addStream(_)}return this.getSenders().find(_=>_.track===h)};function r(l,h){let d=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(f=>{const u=l._reverseStreams[f],g=l._streams[u.id];d=d.replace(new RegExp(g.id,"g"),u.id)}),new RTCSessionDescription({type:h.type,sdp:d})}function a(l,h){let d=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(f=>{const u=l._reverseStreams[f],g=l._streams[u.id];d=d.replace(new RegExp(u.id,"g"),g.id)}),new RTCSessionDescription({type:h.type,sdp:d})}["createOffer","createAnswer"].forEach(function(l){const h=i.RTCPeerConnection.prototype[l],d={[l](){const f=arguments;return arguments.length&&typeof arguments[0]=="function"?h.apply(this,[g=>{const _=r(this,g);f[0].apply(null,[_])},g=>{f[1]&&f[1].apply(null,g)},arguments[2]]):h.apply(this,arguments).then(g=>r(this,g))}};i.RTCPeerConnection.prototype[l]=d[l]});const o=i.RTCPeerConnection.prototype.setLocalDescription;i.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?o.apply(this,arguments):(arguments[0]=a(this,arguments[0]),o.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(i.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(i.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:r(this,l)}}),i.RTCPeerConnection.prototype.removeTrack=function(h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!h._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(h._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let f;Object.keys(this._streams).forEach(u=>{this._streams[u].getTracks().find(_=>h.track===_)&&(f=this._streams[u])}),f&&(f.getTracks().length===1?this.removeStream(this._reverseStreams[f.id]):f.removeTrack(h.track),this.dispatchEvent(new Event("negotiationneeded")))}}function Vc(i,e){!i.RTCPeerConnection&&i.webkitRTCPeerConnection&&(i.RTCPeerConnection=i.webkitRTCPeerConnection),i.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]})}function zd(i,e){e.version>102||ls(i,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const df=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:zd,shimAddTrackRemoveTrack:Od,shimAddTrackRemoveTrackWithNative:Fd,shimGetSendersWithDtmf:Ud,shimGetUserMedia:Dd,shimMediaStream:Id,shimOnTrack:Ld,shimPeerConnection:Vc,shimSenderReceiverGetStats:Nd},Symbol.toStringTag,{value:"Module"}));function Bd(i,e){const t=i&&i.navigator;if(!t.mediaDevices)return;const n=i&&i.MediaStreamTrack;if(t.getUserMedia=function(s,r,a){wl("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(s).then(r,a)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const s=function(a,o,c){o in a&&!(c in a)&&(a[c]=a[o],delete a[o])},r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(a){return typeof a=="object"&&typeof a.audio=="object"&&(a=JSON.parse(JSON.stringify(a)),s(a.audio,"autoGainControl","mozAutoGainControl"),s(a.audio,"noiseSuppression","mozNoiseSuppression")),r(a)},n&&n.prototype.getSettings){const a=n.prototype.getSettings;n.prototype.getSettings=function(){const o=a.apply(this,arguments);return s(o,"mozAutoGainControl","autoGainControl"),s(o,"mozNoiseSuppression","noiseSuppression"),o}}if(n&&n.prototype.applyConstraints){const a=n.prototype.applyConstraints;n.prototype.applyConstraints=function(o){return this.kind==="audio"&&typeof o=="object"&&(o=JSON.parse(JSON.stringify(o)),s(o,"autoGainControl","mozAutoGainControl"),s(o,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[o])}}}}function dy(i,e){i.navigator.mediaDevices&&(i.navigator.mediaDevices&&"getDisplayMedia"in i.navigator.mediaDevices||(i.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const s=new DOMException("getDisplayMedia without video constraints is undefined");return s.name="NotFoundError",s.code=8,Promise.reject(s)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,i.navigator.mediaDevices.getUserMedia(n)}))}function Hd(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Gc(i,e){typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||(!i.RTCPeerConnection&&i.mozRTCPeerConnection&&(i.RTCPeerConnection=i.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]}))}function Vd(i,e){if(typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){const[r,a,o]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[r||null]).then(c=>{if(e.version<53&&!a)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((h,d)=>{c.set(d,Object.assign({},h,{type:t[h.type]||h.type}))})}return c}).then(a,o)}}function Gd(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpSender.prototype)return;const e=i.RTCPeerConnection.prototype.getSenders;e&&(i.RTCPeerConnection.prototype.getSenders=function(){const s=e.apply(this,[]);return s.forEach(r=>r._pc=this),s});const t=i.RTCPeerConnection.prototype.addTrack;t&&(i.RTCPeerConnection.prototype.addTrack=function(){const s=t.apply(this,arguments);return s._pc=this,s}),i.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Wd(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpReceiver.prototype)return;const e=i.RTCPeerConnection.prototype.getReceivers;e&&(i.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n}),ls(i,"track",t=>(t.receiver._pc=t.srcElement,t)),i.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function $d(i){!i.RTCPeerConnection||"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){wl("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function Xd(i){i.DataChannel&&!i.RTCDataChannel&&(i.RTCDataChannel=i.DataChannel)}function jd(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.addTransceiver;t&&(i.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let s=arguments[1]&&arguments[1].sendEncodings;s===void 0&&(s=[]),s=[...s];const r=s.length>0;r&&s.forEach(o=>{if("rid"in o&&!/^[a-z0-9]{0,16}$/i.test(o.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in o&&!(parseFloat(o.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in o&&!(parseFloat(o.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const a=t.apply(this,arguments);if(r){const{sender:o}=a,c=o.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=s,o.sendEncodings=s,this.setParametersPromises.push(o.setParameters(c).then(()=>{delete o.sendEncodings}).catch(()=>{delete o.sendEncodings})))}return a})}function qd(i,e){if(!(typeof i=="object"&&i.RTCRtpSender)||e.version>=110)return;const t=i.RTCRtpSender.prototype.getParameters;t&&(i.RTCRtpSender.prototype.getParameters=function(){const s=t.apply(this,arguments);return"encodings"in s||(s.encodings=[].concat(this.sendEncodings||[{}])),s})}function Yd(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function Kd(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createAnswer;i.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const uf=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:jd,shimCreateAnswer:Kd,shimCreateOffer:Yd,shimGetDisplayMedia:dy,shimGetParameters:qd,shimGetStats:Vd,shimGetUserMedia:Bd,shimOnTrack:Hd,shimPeerConnection:Gc,shimRTCDataChannel:Xd,shimReceiverGetStats:Wd,shimRemoveStream:$d,shimSenderGetStats:Gd},Symbol.toStringTag,{value:"Module"}));function Jd(i){if(!(typeof i!="object"||!i.RTCPeerConnection)){if("getLocalStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in i.RTCPeerConnection.prototype)){const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(s=>e.call(this,s,n)),n.getVideoTracks().forEach(s=>e.call(this,s,n))},i.RTCPeerConnection.prototype.addTrack=function(n,...s){return s&&s.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),e.apply(this,arguments)}}"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const s=t.getTracks();this.getSenders().forEach(r=>{s.includes(r.track)&&this.removeTrack(r)})})}}function Zd(i){if(!(typeof i!="object"||!i.RTCPeerConnection)&&("getRemoteStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in i.RTCPeerConnection.prototype))){Object.defineProperty(i.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(s=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(s))return;this._remoteStreams.push(s);const r=new Event("addstream");r.stream=s,this.dispatchEvent(r)})})}});const e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(s){s.streams.forEach(r=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(r)>=0)return;n._remoteStreams.push(r);const a=new Event("addstream");a.stream=r,n.dispatchEvent(a)})}),e.apply(n,arguments)}}}function Qd(i){if(typeof i!="object"||!i.RTCPeerConnection)return;const e=i.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,s=e.setLocalDescription,r=e.setRemoteDescription,a=e.addIceCandidate;e.createOffer=function(l,h){const d=arguments.length>=2?arguments[2]:arguments[0],f=t.apply(this,[d]);return h?(f.then(l,h),Promise.resolve()):f},e.createAnswer=function(l,h){const d=arguments.length>=2?arguments[2]:arguments[0],f=n.apply(this,[d]);return h?(f.then(l,h),Promise.resolve()):f};let o=function(c,l,h){const d=s.apply(this,[c]);return h?(d.then(l,h),Promise.resolve()):d};e.setLocalDescription=o,o=function(c,l,h){const d=r.apply(this,[c]);return h?(d.then(l,h),Promise.resolve()):d},e.setRemoteDescription=o,o=function(c,l,h){const d=a.apply(this,[c]);return h?(d.then(l,h),Promise.resolve()):d},e.addIceCandidate=o}function eu(i){const e=i&&i.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=s=>n(tu(s))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=function(n,s,r){e.mediaDevices.getUserMedia(n).then(s,r)}.bind(e))}function tu(i){return i&&i.video!==void 0?Object.assign({},i,{video:kd(i.video)}):i}function nu(i){if(!i.RTCPeerConnection)return;const e=i.RTCPeerConnection;i.RTCPeerConnection=function(n,s){if(n&&n.iceServers){const r=[];for(let a=0;a<n.iceServers.length;a++){let o=n.iceServers[a];o.urls===void 0&&o.url?(wl("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,r.push(o)):r.push(n.iceServers[a])}n.iceServers=r}return new e(n,s)},i.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(i.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function iu(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function su(i){const e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const s=this.getTransceivers().find(a=>a.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveAudio===!0&&!s&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const r=this.getTransceivers().find(a=>a.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function ru(i){typeof i!="object"||i.AudioContext||(i.AudioContext=i.webkitAudioContext)}const pf=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:ru,shimCallbacksAPI:Qd,shimConstraints:tu,shimCreateOfferLegacy:su,shimGetUserMedia:eu,shimLocalStreamsAPI:Jd,shimRTCIceServerUrls:nu,shimRemoteStreamsAPI:Zd,shimTrackEventTransceiver:iu},Symbol.toStringTag,{value:"Module"}));function uy(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var au={exports:{}};(function(i){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(n=>n.trim())},e.splitSections=function(t){return t.split(`
m=`).map((s,r)=>(r>0?"m="+s:s).trim()+`\r
`)},e.getDescription=function(t){const n=e.splitSections(t);return n&&n[0]},e.getMediaSections=function(t){const n=e.splitSections(t);return n.shift(),n},e.matchPrefix=function(t,n){return e.splitLines(t).filter(s=>s.indexOf(n)===0)},e.parseCandidate=function(t){let n;t.indexOf("a=candidate:")===0?n=t.substring(12).split(" "):n=t.substring(10).split(" ");const s={foundation:n[0],component:{1:"rtp",2:"rtcp"}[n[1]]||n[1],protocol:n[2].toLowerCase(),priority:parseInt(n[3],10),ip:n[4],address:n[4],port:parseInt(n[5],10),type:n[7]};for(let r=8;r<n.length;r+=2)switch(n[r]){case"raddr":s.relatedAddress=n[r+1];break;case"rport":s.relatedPort=parseInt(n[r+1],10);break;case"tcptype":s.tcpType=n[r+1];break;case"ufrag":s.ufrag=n[r+1],s.usernameFragment=n[r+1];break;default:s[n[r]]===void 0&&(s[n[r]]=n[r+1]);break}return s},e.writeCandidate=function(t){const n=[];n.push(t.foundation);const s=t.component;s==="rtp"?n.push(1):s==="rtcp"?n.push(2):n.push(s),n.push(t.protocol.toUpperCase()),n.push(t.priority),n.push(t.address||t.ip),n.push(t.port);const r=t.type;return n.push("typ"),n.push(r),r!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(n.push("raddr"),n.push(t.relatedAddress),n.push("rport"),n.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(n.push("tcptype"),n.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(n.push("ufrag"),n.push(t.usernameFragment||t.ufrag)),"candidate:"+n.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let n=t.substring(9).split(" ");const s={payloadType:parseInt(n.shift(),10)};return n=n[0].split("/"),s.name=n[0],s.clockRate=parseInt(n[1],10),s.channels=n.length===3?parseInt(n[2],10):1,s.numChannels=s.channels,s},e.writeRtpMap=function(t){let n=t.payloadType;t.preferredPayloadType!==void 0&&(n=t.preferredPayloadType);const s=t.channels||t.numChannels||1;return"a=rtpmap:"+n+" "+t.name+"/"+t.clockRate+(s!==1?"/"+s:"")+`\r
`},e.parseExtmap=function(t){const n=t.substring(9).split(" ");return{id:parseInt(n[0],10),direction:n[0].indexOf("/")>0?n[0].split("/")[1]:"sendrecv",uri:n[1],attributes:n.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const n={},s=t.substring(t.indexOf(" ")+1).split(";");for(let r=0;r<s.length;r++){const[a,...o]=s[r].trim().split("=");n[a.trim()]=o.length?o.join("="):void 0}return n},e.writeFmtp=function(t){let n="",s=t.payloadType;if(t.preferredPayloadType!==void 0&&(s=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const r=[];Object.keys(t.parameters).forEach(a=>{t.parameters[a]!==void 0?r.push(a+"="+t.parameters[a]):r.push(a)}),n+="a=fmtp:"+s+" "+r.join(";")+`\r
`}return n},e.parseRtcpFb=function(t){const n=t.substring(t.indexOf(" ")+1).split(" ");return{type:n.shift(),parameter:n.join(" ")}},e.writeRtcpFb=function(t){let n="",s=t.payloadType;return t.preferredPayloadType!==void 0&&(s=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(r=>{n+="a=rtcp-fb:"+s+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+`\r
`}),n},e.parseSsrcMedia=function(t){const n=t.indexOf(" "),s={ssrc:parseInt(t.substring(7,n),10)},r=t.indexOf(":",n);return r>-1?(s.attribute=t.substring(n+1,r),s.value=t.substring(r+1)):s.attribute=t.substring(n+1),s},e.parseSsrcGroup=function(t){const n=t.substring(13).split(" ");return{semantics:n.shift(),ssrcs:n.map(s=>parseInt(s,10))}},e.getMid=function(t){const n=e.matchPrefix(t,"a=mid:")[0];if(n)return n.substring(6)},e.parseFingerprint=function(t){const n=t.substring(14).split(" ");return{algorithm:n[0].toLowerCase(),value:n[1].toUpperCase()}},e.getDtlsParameters=function(t,n){return{role:"auto",fingerprints:e.matchPrefix(t+n,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,n){let s="a=setup:"+n+`\r
`;return t.fingerprints.forEach(r=>{s+="a=fingerprint:"+r.algorithm+" "+r.value+`\r
`}),s},e.parseCryptoLine=function(t){const n=t.substring(9).split(" ");return{tag:parseInt(n[0],10),cryptoSuite:n[1],keyParams:n[2],sessionParams:n.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const n=t.substring(7).split("|");return{keyMethod:"inline",keySalt:n[0],lifeTime:n[1],mkiValue:n[2]?n[2].split(":")[0]:void 0,mkiLength:n[2]?n[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,n){return e.matchPrefix(t+n,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,n){const s=e.matchPrefix(t+n,"a=ice-ufrag:")[0],r=e.matchPrefix(t+n,"a=ice-pwd:")[0];return s&&r?{usernameFragment:s.substring(12),password:r.substring(10)}:null},e.writeIceParameters=function(t){let n="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(n+=`a=ice-lite\r
`),n},e.parseRtpParameters=function(t){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},r=e.splitLines(t)[0].split(" ");n.profile=r[2];for(let o=3;o<r.length;o++){const c=r[o],l=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(l){const h=e.parseRtpMap(l),d=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(h.parameters=d.length?e.parseFmtp(d[0]):{},h.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),n.codecs.push(h),h.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(h.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(o=>{n.headerExtensions.push(e.parseExtmap(o))});const a=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return n.codecs.forEach(o=>{a.forEach(c=>{o.rtcpFeedback.find(h=>h.type===c.type&&h.parameter===c.parameter)||o.rtcpFeedback.push(c)})}),n},e.writeRtpDescription=function(t,n){let s="";s+="m="+t+" ",s+=n.codecs.length>0?"9":"0",s+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",s+=n.codecs.map(a=>a.preferredPayloadType!==void 0?a.preferredPayloadType:a.payloadType).join(" ")+`\r
`,s+=`c=IN IP4 0.0.0.0\r
`,s+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(a=>{s+=e.writeRtpMap(a),s+=e.writeFmtp(a),s+=e.writeRtcpFb(a)});let r=0;return n.codecs.forEach(a=>{a.maxptime>r&&(r=a.maxptime)}),r>0&&(s+="a=maxptime:"+r+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(a=>{s+=e.writeExtmap(a)}),s},e.parseRtpEncodingParameters=function(t){const n=[],s=e.parseRtpParameters(t),r=s.fecMechanisms.indexOf("RED")!==-1,a=s.fecMechanisms.indexOf("ULPFEC")!==-1,o=e.matchPrefix(t,"a=ssrc:").map(f=>e.parseSsrcMedia(f)).filter(f=>f.attribute==="cname"),c=o.length>0&&o[0].ssrc;let l;const h=e.matchPrefix(t,"a=ssrc-group:FID").map(f=>f.substring(17).split(" ").map(g=>parseInt(g,10)));h.length>0&&h[0].length>1&&h[0][0]===c&&(l=h[0][1]),s.codecs.forEach(f=>{if(f.name.toUpperCase()==="RTX"&&f.parameters.apt){let u={ssrc:c,codecPayloadType:parseInt(f.parameters.apt,10)};c&&l&&(u.rtx={ssrc:l}),n.push(u),r&&(u=JSON.parse(JSON.stringify(u)),u.fec={ssrc:c,mechanism:a?"red+ulpfec":"red"},n.push(u))}}),n.length===0&&c&&n.push({ssrc:c});let d=e.matchPrefix(t,"b=");return d.length&&(d[0].indexOf("b=TIAS:")===0?d=parseInt(d[0].substring(7),10):d[0].indexOf("b=AS:")===0?d=parseInt(d[0].substring(5),10)*1e3*.95-50*40*8:d=void 0,n.forEach(f=>{f.maxBitrate=d})),n},e.parseRtcpParameters=function(t){const n={},s=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="cname")[0];s&&(n.cname=s.value,n.ssrc=s.ssrc);const r=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=r.length>0,n.compound=r.length===0;const a=e.matchPrefix(t,"a=rtcp-mux");return n.mux=a.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
`),t.mux&&(n+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(n+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),n},e.parseMsid=function(t){let n;const s=e.matchPrefix(t,"a=msid:");if(s.length===1)return n=s[0].substring(7).split(" "),{stream:n[0],track:n[1]};const r=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="msid");if(r.length>0)return n=r[0].value.split(" "),{stream:n[0],track:n[1]}},e.parseSctpDescription=function(t){const n=e.parseMLine(t),s=e.matchPrefix(t,"a=max-message-size:");let r;s.length>0&&(r=parseInt(s[0].substring(19),10)),isNaN(r)&&(r=65536);const a=e.matchPrefix(t,"a=sctp-port:");if(a.length>0)return{port:parseInt(a[0].substring(12),10),protocol:n.fmt,maxMessageSize:r};const o=e.matchPrefix(t,"a=sctpmap:");if(o.length>0){const c=o[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:r}}},e.writeSctpDescription=function(t,n){let s=[];return t.protocol!=="DTLS/SCTP"?s=["m="+t.kind+" 9 "+t.protocol+" "+n.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+n.port+`\r
`]:s=["m="+t.kind+" 9 "+t.protocol+" "+n.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+n.port+" "+n.protocol+` 65535\r
`],n.maxMessageSize!==void 0&&s.push("a=max-message-size:"+n.maxMessageSize+`\r
`),s.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,n,s){let r;const a=n!==void 0?n:2;return t?r=t:r=e.generateSessionId(),`v=0\r
o=`+(s||"thisisadapterortc")+" "+r+" "+a+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,n){const s=e.splitLines(t);for(let r=0;r<s.length;r++)switch(s[r]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return s[r].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const s=e.splitLines(t)[0].substring(2).split(" ");return{kind:s[0],port:parseInt(s[1],10),protocol:s[2],fmt:s.slice(3).join(" ")}},e.parseOLine=function(t){const s=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:s[0],sessionId:s[1],sessionVersion:parseInt(s[2],10),netType:s[3],addressType:s[4],address:s[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let s=0;s<n.length;s++)if(n[s].length<2||n[s].charAt(1)!=="=")return!1;return!0},i.exports=e})(au);var ou=au.exports;const zs=uy(ou),py=xu({__proto__:null,default:zs},[ou]);function xa(i){if(!i.RTCIceCandidate||i.RTCIceCandidate&&"foundation"in i.RTCIceCandidate.prototype)return;const e=i.RTCIceCandidate;i.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const s=new e(n),r=zs.parseCandidate(n.candidate);for(const a in r)a in s||Object.defineProperty(s,a,{value:r[a]});return s.toJSON=function(){return{candidate:s.candidate,sdpMid:s.sdpMid,sdpMLineIndex:s.sdpMLineIndex,usernameFragment:s.usernameFragment}},s}return new e(n)},i.RTCIceCandidate.prototype=e.prototype,ls(i,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new i.RTCIceCandidate(t.candidate),writable:"false"}),t))}function Wc(i){!i.RTCIceCandidate||i.RTCIceCandidate&&"relayProtocol"in i.RTCIceCandidate.prototype||ls(i,"icecandidate",e=>{if(e.candidate){const t=zs.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function ya(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in i.RTCPeerConnection.prototype||Object.defineProperty(i.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(o){if(!o||!o.sdp)return!1;const c=zs.splitSections(o.sdp);return c.shift(),c.some(l=>{const h=zs.parseMLine(l);return h&&h.kind==="application"&&h.protocol.indexOf("SCTP")!==-1})},n=function(o){const c=o.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},s=function(o){let c=65536;return e.browser==="firefox"&&(e.version<57?o===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},r=function(o,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const h=zs.matchPrefix(o.sdp,"a=max-message-size:");return h.length>0?l=parseInt(h[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},a=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),l=s(c),h=r(arguments[0],c);let d;l===0&&h===0?d=Number.POSITIVE_INFINITY:l===0||h===0?d=Math.max(l,h):d=Math.min(l,h);const f={};Object.defineProperty(f,"maxMessageSize",{get(){return d}}),this._sctp=f}return a.apply(this,arguments)}}function ba(i,e){if(!(i.RTCPeerConnection&&"createDataChannel"in i.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(s,r){const a=s.send;s.send=function(){const c=arguments[0],l=c.length||c.size||c.byteLength;if(s.readyState==="open"&&r.sctp&&l>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return a.apply(s,arguments)}}const n=i.RTCPeerConnection.prototype.createDataChannel;i.RTCPeerConnection.prototype.createDataChannel=function(){const r=n.apply(this,arguments);return t(r,this),r},ls(i,"datachannel",s=>(t(s.channel,s.target),s))}function $c(i){if(!i.RTCPeerConnection||"connectionState"in i.RTCPeerConnection.prototype)return;const e=i.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=s=>{const r=s.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;const a=new Event("connectionstatechange",s);r.dispatchEvent(a)}return s},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function Xc(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(s){if(s&&s.sdp&&s.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const r=s.sdp.split(`
`).filter(a=>a.trim()!=="a=extmap-allow-mixed").join(`
`);i.RTCSessionDescription&&s instanceof i.RTCSessionDescription?arguments[0]=new i.RTCSessionDescription({type:s.type,sdp:r}):s.sdp=r}return t.apply(this,arguments)}}function Ma(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(i.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function Sa(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(i.RTCPeerConnection.prototype.setLocalDescription=function(){let s=arguments[0]||{};if(typeof s!="object"||s.type&&s.sdp)return t.apply(this,arguments);if(s={type:s.type,sdp:s.sdp},!s.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":s.type="offer";break;default:s.type="answer";break}return s.sdp||s.type!=="offer"&&s.type!=="answer"?t.apply(this,[s]):(s.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(a=>t.apply(this,[a]))})}const my=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:Xc,shimAddIceCandidateNullOrEmpty:Ma,shimConnectionState:$c,shimMaxMessageSize:ya,shimParameterlessSetLocalDescription:Sa,shimRTCIceCandidate:xa,shimRTCIceCandidateRelayProtocol:Wc,shimSendThrowTypeError:ba},Symbol.toStringTag,{value:"Module"}));function gy({window:i}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=Tl,n=fy(i),s={browserDetails:n,commonShim:my,extractVersion:gr,disableLog:ly,disableWarnings:hy,sdp:py};switch(n.browser){case"chrome":if(!df||!Vc||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),s;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),s;t("adapter.js shimming chrome."),s.browserShim=df,Ma(i,n),Sa(i),Dd(i,n),Id(i),Vc(i,n),Ld(i,n),Od(i,n),Ud(i),Nd(i,n),zd(i,n),xa(i),Wc(i),$c(i),ya(i,n),ba(i,n),Xc(i,n);break;case"firefox":if(!uf||!Gc||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),s;t("adapter.js shimming firefox."),s.browserShim=uf,Ma(i,n),Sa(i),Bd(i,n),Gc(i,n),Vd(i,n),Hd(i),$d(i),Gd(i),Wd(i),Xd(i),jd(i,n),qd(i,n),Yd(i,n),Kd(i,n),xa(i),$c(i),ya(i,n),ba(i,n);break;case"safari":if(!pf||!e.shimSafari)return t("Safari shim is not included in this adapter release."),s;t("adapter.js shimming safari."),s.browserShim=pf,Ma(i,n),Sa(i),nu(i),su(i),Qd(i),Jd(i),Zd(i),iu(i),eu(i),ru(i),xa(i),Wc(i),ya(i,n),ba(i,n),Xc(i,n);break;default:t("Unsupported browser!");break}return s}const mf=gy({window:typeof window>"u"?void 0:window});function hs(i,e,t,n){Object.defineProperty(i,e,{get:t,set:n,enumerable:!0,configurable:!0})}class cu{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,s=Math.ceil(n/this.chunkedMTU);let r=0,a=0;for(;a<n;){const o=Math.min(n,a+this.chunkedMTU),c=e.slice(a,o),l={__peerData:this._dataCount,n:r,data:c,total:s};t.push(l),a=o,r++}return this._dataCount++,t}}}function _y(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i)t.set(s,n),n+=s.byteLength;return t}const zo=mf.default||mf,fr=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const i=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(i)?i==="chrome"?e>=this.minChromeVersion:i==="firefox"?e>=this.minFirefoxVersion:i==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return zo.browserDetails.browser}getVersion(){return zo.browserDetails.version||0}isUnifiedPlanSupported(){const i=this.getBrowser(),e=zo.browserDetails.version||0;if(i==="chrome"&&e<this.minChromeVersion)return!1;if(i==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},vy=i=>!i||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(i),lu=()=>Math.random().toString(36).slice(2),gf={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class xy extends cu{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(s){s.target&&t(s.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=gf,this.browser=fr.getBrowser(),this.browserVersion=fr.getVersion(),this.pack=Ad,this.unpack=Cd,this.supports=function(){const t={browser:fr.isBrowserSupported(),webRTC:fr.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(gf),t.audioVideo=!0;let s;try{s=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!s.ordered;try{s.binaryType="blob",t.binaryBlob=!fr.isIOS}catch{}}catch{}finally{s&&s.close()}}catch{}finally{n&&n.close()}return t}(),this.validateId=vy,this.randomToken=lu}}const ln=new xy,yy="PeerJS: ";var _f;(function(i){i[i.Disabled=0]="Disabled",i[i.Errors=1]="Errors",i[i.Warnings=2]="Warnings",i[i.All=3]="All"})(_f||(_f={}));class by{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[yy,...t];for(const s in n)n[s]instanceof Error&&(n[s]="("+n[s].name+") "+n[s].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var ve=new by,Cl={},My=Object.prototype.hasOwnProperty,sn="~";function Er(){}Object.create&&(Er.prototype=Object.create(null),new Er().__proto__||(sn=!1));function Sy(i,e,t){this.fn=i,this.context=e,this.once=t||!1}function hu(i,e,t,n,s){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new Sy(t,n||i,s),a=sn?sn+e:e;return i._events[a]?i._events[a].fn?i._events[a]=[i._events[a],r]:i._events[a].push(r):(i._events[a]=r,i._eventsCount++),i}function Ea(i,e){--i._eventsCount===0?i._events=new Er:delete i._events[e]}function Kt(){this._events=new Er,this._eventsCount=0}Kt.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)My.call(t,n)&&e.push(sn?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};Kt.prototype.listeners=function(e){var t=sn?sn+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var s=0,r=n.length,a=new Array(r);s<r;s++)a[s]=n[s].fn;return a};Kt.prototype.listenerCount=function(e){var t=sn?sn+e:e,n=this._events[t];return n?n.fn?1:n.length:0};Kt.prototype.emit=function(e,t,n,s,r,a){var o=sn?sn+e:e;if(!this._events[o])return!1;var c=this._events[o],l=arguments.length,h,d;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,s),!0;case 5:return c.fn.call(c.context,t,n,s,r),!0;case 6:return c.fn.call(c.context,t,n,s,r,a),!0}for(d=1,h=new Array(l-1);d<l;d++)h[d-1]=arguments[d];c.fn.apply(c.context,h)}else{var f=c.length,u;for(d=0;d<f;d++)switch(c[d].once&&this.removeListener(e,c[d].fn,void 0,!0),l){case 1:c[d].fn.call(c[d].context);break;case 2:c[d].fn.call(c[d].context,t);break;case 3:c[d].fn.call(c[d].context,t,n);break;case 4:c[d].fn.call(c[d].context,t,n,s);break;default:if(!h)for(u=1,h=new Array(l-1);u<l;u++)h[u-1]=arguments[u];c[d].fn.apply(c[d].context,h)}}return!0};Kt.prototype.on=function(e,t,n){return hu(this,e,t,n,!1)};Kt.prototype.once=function(e,t,n){return hu(this,e,t,n,!0)};Kt.prototype.removeListener=function(e,t,n,s){var r=sn?sn+e:e;if(!this._events[r])return this;if(!t)return Ea(this,r),this;var a=this._events[r];if(a.fn)a.fn===t&&(!s||a.once)&&(!n||a.context===n)&&Ea(this,r);else{for(var o=0,c=[],l=a.length;o<l;o++)(a[o].fn!==t||s&&!a[o].once||n&&a[o].context!==n)&&c.push(a[o]);c.length?this._events[r]=c.length===1?c[0]:c:Ea(this,r)}return this};Kt.prototype.removeAllListeners=function(e){var t;return e?(t=sn?sn+e:e,this._events[t]&&Ea(this,t)):(this._events=new Er,this._eventsCount=0),this};Kt.prototype.off=Kt.prototype.removeListener;Kt.prototype.addListener=Kt.prototype.on;Kt.prefixed=sn;Kt.EventEmitter=Kt;Cl=Kt;var fs={};hs(fs,"ConnectionType",()=>Xn);hs(fs,"PeerErrorType",()=>Tt);hs(fs,"BaseConnectionErrorType",()=>Tr);hs(fs,"DataConnectionErrorType",()=>wr);hs(fs,"SerializationType",()=>Xs);hs(fs,"SocketEventType",()=>$n);hs(fs,"ServerMessageType",()=>Ot);var Xn;(function(i){i.Data="data",i.Media="media"})(Xn||(Xn={}));var Tt;(function(i){i.BrowserIncompatible="browser-incompatible",i.Disconnected="disconnected",i.InvalidID="invalid-id",i.InvalidKey="invalid-key",i.Network="network",i.PeerUnavailable="peer-unavailable",i.SslUnavailable="ssl-unavailable",i.ServerError="server-error",i.SocketError="socket-error",i.SocketClosed="socket-closed",i.UnavailableID="unavailable-id",i.WebRTC="webrtc"})(Tt||(Tt={}));var Tr;(function(i){i.NegotiationFailed="negotiation-failed",i.ConnectionClosed="connection-closed"})(Tr||(Tr={}));var wr;(function(i){i.NotOpenYet="not-open-yet",i.MessageToBig="message-too-big"})(wr||(wr={}));var Xs;(function(i){i.Binary="binary",i.BinaryUTF8="binary-utf8",i.JSON="json",i.None="raw"})(Xs||(Xs={}));var $n;(function(i){i.Message="message",i.Disconnected="disconnected",i.Error="error",i.Close="close"})($n||($n={}));var Ot;(function(i){i.Heartbeat="HEARTBEAT",i.Candidate="CANDIDATE",i.Offer="OFFER",i.Answer="ANSWER",i.Open="OPEN",i.Error="ERROR",i.IdTaken="ID-TAKEN",i.InvalidKey="INVALID-KEY",i.Leave="LEAVE",i.Expire="EXPIRE"})(Ot||(Ot={}));var Al={};Al=JSON.parse('{"name":"peerjs","version":"1.5.4","keywords":["peerjs","webrtc","p2p","rtc"],"description":"PeerJS client","homepage":"https://peerjs.com","bugs":{"url":"https://github.com/peers/peerjs/issues"},"repository":{"type":"git","url":"https://github.com/peers/peerjs"},"license":"MIT","contributors":["Michelle Bu <michelle@michellebu.com>","afrokick <devbyru@gmail.com>","ericz <really.ez@gmail.com>","Jairo <kidandcat@gmail.com>","Jonas Gloning <34194370+jonasgloning@users.noreply.github.com>","Jairo Caro-Accino Viciana <jairo@galax.be>","Carlos Caballero <carlos.caballero.gonzalez@gmail.com>","hc <hheennrryy@gmail.com>","Muhammad Asif <capripio@gmail.com>","PrashoonB <prashoonbhattacharjee@gmail.com>","Harsh Bardhan Mishra <47351025+HarshCasper@users.noreply.github.com>","akotynski <aleksanderkotbury@gmail.com>","lmb <i@lmb.io>","Jairooo <jairocaro@msn.com>","Moritz Stückler <moritz.stueckler@gmail.com>","Simon <crydotsnakegithub@gmail.com>","Denis Lukov <denismassters@gmail.com>","Philipp Hancke <fippo@andyet.net>","Hans Oksendahl <hansoksendahl@gmail.com>","Jess <jessachandler@gmail.com>","khankuan <khankuan@gmail.com>","DUODVK <kurmanov.work@gmail.com>","XiZhao <kwang1imsa@gmail.com>","Matthias Lohr <matthias@lohr.me>","=frank tree <=frnktrb@googlemail.com>","Andre Eckardt <aeckardt@outlook.com>","Chris Cowan <agentme49@gmail.com>","Alex Chuev <alex@chuev.com>","alxnull <alxnull@e.mail.de>","Yemel Jardi <angel.jardi@gmail.com>","Ben Parnell <benjaminparnell.94@gmail.com>","Benny Lichtner <bennlich@gmail.com>","fresheneesz <bitetrudpublic@gmail.com>","bob.barstead@exaptive.com <bob.barstead@exaptive.com>","chandika <chandika@gmail.com>","emersion <contact@emersion.fr>","Christopher Van <cvan@users.noreply.github.com>","eddieherm <edhermoso@gmail.com>","Eduardo Pinho <enet4mikeenet@gmail.com>","Evandro Zanatta <ezanatta@tray.net.br>","Gardner Bickford <gardner@users.noreply.github.com>","Gian Luca <gianluca.cecchi@cynny.com>","PatrickJS <github@gdi2290.com>","jonnyf <github@jonathanfoss.co.uk>","Hizkia Felix <hizkifw@gmail.com>","Hristo Oskov <hristo.oskov@gmail.com>","Isaac Madwed <i.madwed@gmail.com>","Ilya Konanykhin <ilya.konanykhin@gmail.com>","jasonbarry <jasbarry@me.com>","Jonathan Burke <jonathan.burke.1311@googlemail.com>","Josh Hamit <josh.hamit@gmail.com>","Jordan Austin <jrax86@gmail.com>","Joel Wetzell <jwetzell@yahoo.com>","xizhao <kevin.wang@cloudera.com>","Alberto Torres <kungfoobar@gmail.com>","Jonathan Mayol <mayoljonathan@gmail.com>","Jefferson Felix <me@jsfelix.dev>","Rolf Erik Lekang <me@rolflekang.com>","Kevin Mai-Husan Chia <mhchia@users.noreply.github.com>","Pepijn de Vos <pepijndevos@gmail.com>","JooYoung <qkdlql@naver.com>","Tobias Speicher <rootcommander@gmail.com>","Steve Blaurock <sblaurock@gmail.com>","Kyrylo Shegeda <shegeda@ualberta.ca>","Diwank Singh Tomer <singh@diwank.name>","Sören Balko <Soeren.Balko@gmail.com>","Arpit Solanki <solankiarpit1997@gmail.com>","Yuki Ito <yuki@gnnk.net>","Artur Zayats <zag2art@gmail.com>"],"funding":{"type":"opencollective","url":"https://opencollective.com/peer"},"collective":{"type":"opencollective","url":"https://opencollective.com/peer"},"files":["dist/*"],"sideEffects":["lib/global.ts","lib/supports.ts"],"main":"dist/bundler.cjs","module":"dist/bundler.mjs","browser-minified":"dist/peerjs.min.js","browser-unminified":"dist/peerjs.js","browser-minified-msgpack":"dist/serializer.msgpack.mjs","types":"dist/types.d.ts","engines":{"node":">= 14"},"targets":{"types":{"source":"lib/exports.ts"},"main":{"source":"lib/exports.ts","sourceMap":{"inlineSources":true}},"module":{"source":"lib/exports.ts","includeNodeModules":["eventemitter3"],"sourceMap":{"inlineSources":true}},"browser-minified":{"context":"browser","outputFormat":"global","optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-unminified":{"context":"browser","outputFormat":"global","optimize":false,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-minified-msgpack":{"context":"browser","outputFormat":"esmodule","isLibrary":true,"optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 102, safari >= 15"},"source":"lib/dataconnection/StreamConnection/MsgPack.ts"}},"scripts":{"contributors":"git-authors-cli --print=false && prettier --write package.json && git add package.json package-lock.json && git commit -m \\"chore(contributors): update and sort contributors list\\"","check":"tsc --noEmit && tsc -p e2e/tsconfig.json --noEmit","watch":"parcel watch","build":"rm -rf dist && parcel build","prepublishOnly":"npm run build","test":"jest","test:watch":"jest --watch","coverage":"jest --coverage --collectCoverageFrom=\\"./lib/**\\"","format":"prettier --write .","format:check":"prettier --check .","semantic-release":"semantic-release","e2e":"wdio run e2e/wdio.local.conf.ts","e2e:bstack":"wdio run e2e/wdio.bstack.conf.ts"},"devDependencies":{"@parcel/config-default":"^2.9.3","@parcel/packager-ts":"^2.9.3","@parcel/transformer-typescript-tsc":"^2.9.3","@parcel/transformer-typescript-types":"^2.9.3","@semantic-release/changelog":"^6.0.1","@semantic-release/git":"^10.0.1","@swc/core":"^1.3.27","@swc/jest":"^0.2.24","@types/jasmine":"^4.3.4","@wdio/browserstack-service":"^8.11.2","@wdio/cli":"^8.11.2","@wdio/globals":"^8.11.2","@wdio/jasmine-framework":"^8.11.2","@wdio/local-runner":"^8.11.2","@wdio/spec-reporter":"^8.11.2","@wdio/types":"^8.10.4","http-server":"^14.1.1","jest":"^29.3.1","jest-environment-jsdom":"^29.3.1","mock-socket":"^9.0.0","parcel":"^2.9.3","prettier":"^3.0.0","semantic-release":"^21.0.0","ts-node":"^10.9.1","typescript":"^5.0.0","wdio-geckodriver-service":"^5.0.1"},"dependencies":{"@msgpack/msgpack":"^2.8.0","eventemitter3":"^4.0.7","peerjs-js-binarypack":"^2.1.0","webrtc-adapter":"^9.0.0"},"alias":{"process":false,"buffer":false}}');class Ey extends Cl.EventEmitter{constructor(e,t,n,s,r,a=5e3){super(),this.pingInterval=a,this._disconnected=!0,this._messagesQueue=[];const o=e?"wss://":"ws://";this._baseUrl=o+t+":"+n+s+"peerjs?key="+r}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+Al.version),this._disconnected=!1,this._socket.onmessage=s=>{let r;try{r=JSON.parse(s.data),ve.log("Server message received:",r)}catch{ve.log("Invalid server message",s.data);return}this.emit($n.Message,r)},this._socket.onclose=s=>{this._disconnected||(ve.log("Socket closed.",s),this._cleanup(),this._disconnected=!0,this.emit($n.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),ve.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){ve.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:Ot.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit($n.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class fu{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Xn.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,s={ordered:!!e.reliable},r=t.createDataChannel(n.label,s);n._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){ve.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,s=this.connection.type,r=this.connection.provider;ve.log("Listening for ICE candidates."),e.onicecandidate=a=>{!a.candidate||!a.candidate.candidate||(ve.log(`Received ICE candidates for ${t}:`,a.candidate),r.socket.send({type:Ot.Candidate,payload:{candidate:a.candidate,type:s,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":ve.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(Tr.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":ve.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(Tr.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":ve.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},ve.log("Listening for data channel"),e.ondatachannel=a=>{ve.log("Received data channel");const o=a.channel;r.getConnection(t,n)._initializeDataChannel(o)},ve.log("Listening for remote stream"),e.ontrack=a=>{ve.log("Received remote stream");const o=a.streams[0],c=r.getConnection(t,n);if(c.type===Xn.Media){const l=c;this._addStreamToMediaConnection(o,l)}}}cleanup(){ve.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const s=this.connection.dataChannel;s&&(n=!!s.readyState&&s.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);ve.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),ve.log("Set localDescription:",n,`for:${this.connection.peer}`);let s={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Xn.Data){const r=this.connection;s={...s,label:r.label,reliable:r.reliable,serialization:r.serialization}}t.socket.send({type:Ot.Offer,payload:s,dst:this.connection.peer})}catch(s){s!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(Tt.WebRTC,s),ve.log("Failed to setLocalDescription, ",s))}}catch(n){t.emitError(Tt.WebRTC,n),ve.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();ve.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),ve.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:Ot.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(s){t.emitError(Tt.WebRTC,s),ve.log("Failed to setLocalDescription, ",s)}}catch(n){t.emitError(Tt.WebRTC,n),ve.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,s=this.connection.provider;ve.log("Setting remote description",t);const r=this;try{await n.setRemoteDescription(t),ve.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await r._makeAnswer()}catch(a){s.emitError(Tt.WebRTC,a),ve.log("Failed to setRemoteDescription, ",a)}}async handleCandidate(e){ve.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),ve.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(Tt.WebRTC,t),ve.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(ve.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return ve.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){ve.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class du extends Cl.EventEmitter{emitError(e,t){ve.error("Error:",t),this.emit("error",new Ty(`${e}`,t))}}class Ty extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class uu extends du{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}var qc;const yr=class yr extends uu{get type(){return Xn.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||yr.ID_PREFIX+ln.randomToken(),this._negotiator=new fu(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{ve.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{ve.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){ve.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case Ot.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case Ot.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:ve.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){ve.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const s of n)this.handleMessage(s);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};qc=new WeakMap,er(yr,qc,yr.ID_PREFIX="mc_");let Ua=yr;class wy{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:s,path:r,key:a}=this._options,o=new URL(`${t}://${n}:${s}${r}${a}/${e}`);return o.searchParams.set("ts",`${Date.now()}${Math.random()}`),o.searchParams.set("version",Al.version),fetch(o.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){ve.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==ln.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===ln.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw ve.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var Yc,Kc;const Qi=class Qi extends uu{get type(){return Xn.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||Qi.ID_PREFIX+lu(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new fu(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{ve.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{ve.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{ve.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(wr.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case Ot.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case Ot.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:ve.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};Yc=new WeakMap,Kc=new WeakMap,er(Qi,Yc,Qi.ID_PREFIX="dc_"),er(Qi,Kc,Qi.MAX_BUFFERED_AMOUNT=8388608);let Na=Qi;class Rl extends Na{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Na.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return ve.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class Bo extends Rl{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new cu,this.serialization=Xs.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=Cd(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const s=_y(n.data);this._handleDataMessage({data:s})}}_send(e,t){const n=Ad(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);ve.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class Cy extends Rl{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=Xs.None}}class Ay extends Rl{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=ln.chunkedMTU){this.emitError(wr.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=Xs.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var Jc;const br=class br extends du{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:Cy,json:Ay,binary:Bo,"binary-utf8":Bo,default:Bo},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:ln.CLOUD_HOST,port:ln.CLOUD_PORT,path:"/",key:br.DEFAULT_KEY,token:ln.randomToken(),config:ln.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==ln.CLOUD_HOST?this._options.secure=ln.isSecure():this._options.host==ln.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&ve.setLogFunction(this._options.logFunction),ve.logLevel=this._options.debug||0,this._api=new wy(t),this._socket=this._createServerConnection(),!ln.supports.audioVideo&&!ln.supports.data){this._delayedAbort(Tt.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!ln.validateId(n)){this._delayedAbort(Tt.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(s=>this._initialize(s)).catch(s=>this._abort(Tt.ServerError,s))}_createServerConnection(){const e=new Ey(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on($n.Message,t=>{this._handleMessage(t)}),e.on($n.Error,t=>{this._abort(Tt.SocketError,t)}),e.on($n.Disconnected,()=>{this.disconnected||(this.emitError(Tt.Network,"Lost connection to server."),this.disconnect())}),e.on($n.Close,()=>{this.disconnected||this._abort(Tt.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,s=e.src;switch(t){case Ot.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case Ot.Error:this._abort(Tt.ServerError,n.msg);break;case Ot.IdTaken:this._abort(Tt.UnavailableID,`ID "${this.id}" is taken`);break;case Ot.InvalidKey:this._abort(Tt.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case Ot.Leave:ve.log(`Received leave message from ${s}`),this._cleanupPeer(s),this._connections.delete(s);break;case Ot.Expire:this.emitError(Tt.PeerUnavailable,`Could not connect to peer ${s}`);break;case Ot.Offer:{const r=n.connectionId;let a=this.getConnection(s,r);if(a&&(a.close(),ve.warn(`Offer received for existing Connection ID:${r}`)),n.type===Xn.Media){const c=new Ua(s,this,{connectionId:r,_payload:n,metadata:n.metadata});a=c,this._addConnection(s,a),this.emit("call",c)}else if(n.type===Xn.Data){const c=new this._serializers[n.serialization](s,this,{connectionId:r,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});a=c,this._addConnection(s,a),this.emit("connection",c)}else{ve.warn(`Received malformed connection type:${n.type}`);return}const o=this._getMessages(r);for(const c of o)a.handleMessage(c);break}default:{if(!n){ve.warn(`You received a malformed message from ${s} of type ${t}`);return}const r=n.connectionId,a=this.getConnection(s,r);a&&a.peerConnection?a.handleMessage(e):r?this._storeMessage(r,e):ve.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){ve.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(Tt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){ve.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(Tt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){ve.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const s=new Ua(e,this,{...n,_stream:t});return this._addConnection(e,s),s}_addConnection(e,t){ve.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const s of n)if(s.connectionId===t)return s;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){ve.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(ve.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;ve.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)ve.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)ve.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(Tt.ServerError,t))}};Jc=new WeakMap,er(br,Jc,br.DEFAULT_KEY="peerjs");let jc=br;var vf=jc;const xf="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",yf="ninjin-v1-",bf={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"stun:stun.cloudflare.com:3478"}]},pu={idle:0,chase:1,wind:2,recover:3,dead:4,return:5},Ry=Object.keys(pu);class Py{constructor(e){this.g=e,this.peer=null,this.conn=null,this.code="",this.pT=0,this.eT=0,this.soloPos=null}mkPeer(e){return new Promise((t,n)=>{const s=new URLSearchParams(location.search).get("peer"),r=s?{host:s.split(":")[0],port:Number(s.split(":")[1]||9e3),path:"/",secure:!1}:{},a=e?new vf(e,{config:bf,debug:0,...r}):new vf({config:bf,debug:0,...r}),o=setTimeout(()=>n("サーバーに接続できません"),15e3);a.on("open",()=>{clearTimeout(o),t(a)}),a.on("error",c=>{clearTimeout(o),n(c?.type==="unavailable-id"?"コードが使われています":c?.type==="peer-unavailable"?"部屋が見つかりません":c?.type||String(c))})})}async host(){this.leave(!0);for(let e=0;e<3;e++){const t=Array.from({length:6},()=>xf[Math.floor(Math.random()*xf.length)]).join("");try{this.peer=await this.mkPeer(yf+t),this.code=t;break}catch(n){if(e===2)throw n}}return this.peer.on("connection",e=>{if(this.conn){e.on("open",()=>{e.send({t:"full"}),setTimeout(()=>e.close(),300)});return}this.conn=e,this.wire(e),e.on("open",()=>{this.g.role="host",this.g.pid=1,this.g.net=this,this.g.buildParty(),this.send({t:"hello",name:L.settings.name,hour:this.g.hour,pos:this.g.player.pos.toArray()}),ne.emit("toast","友達が参加しました！")})}),this.peer.on("disconnected",()=>this.peer?.reconnect()),this.g.net=this,this.code}async join(e){return this.leave(!0),this.peer=await this.mkPeer(),new Promise((t,n)=>{const s=this.peer.connect(yf+e,{reliable:!0,serialization:"json"}),r=setTimeout(()=>n("接続がタイムアウトしました"),2e4);this.peer.on("error",a=>{clearTimeout(r),n(a?.type==="peer-unavailable"?"部屋が見つかりません":a?.type||String(a))}),s.on("open",()=>{clearTimeout(r),this.conn=s,this.code=e,this.wire(s),this.g.role="guest",this.g.pid=2,this.g.net=this,this.soloPos=this.g.player.pos.clone();for(const a of[...this.g.enemies.values()])this.g.removeEnemy(a);this.g.buildParty(),this.send({t:"hello",name:L.settings.name}),t()})})}wire(e){e.on("data",t=>{try{this.onMsg(t)}catch(n){console.warn(n)}}),e.on("close",()=>this.dropped()),e.on("error",()=>this.dropped())}dropped(){if(!this.conn)return;this.conn=null;const e=this.g;for(const t of e.remotes.values())t.dispose();if(e.remotes.clear(),ne.emit("toast","マルチプレイが終了しました"),e.role==="guest"){for(const t of[...e.enemies.values()])e.removeEnemy(t);e.role="solo",e.pid=1,e.net=null,this.peer?.destroy(),this.peer=null,this.soloPos&&e.teleport(this.soloPos.x,this.soloPos.z),e.buildParty()}else e.role==="host"&&(e.role="solo",e.buildParty())}leave(e=!1){if(this.conn){try{this.send({t:"bye"})}catch{}const t=this.conn;this.dropped(),t.close()}this.peer?.destroy(),this.peer=null,this.code="",this.g.net===this&&(this.g.net=null),this.g.role="solo",this.g.pid=1,e||this.g.buildParty()}send(e){this.conn&&this.conn.open&&this.conn.send(e)}tick(e){const t=this.g;if(this.conn){if(this.pT-=e,this.pT<=0){this.pT=1/15;const n=t.player;this.send({t:"p",x:+n.pos.x.toFixed(2),y:+n.pos.y.toFixed(2),z:+n.pos.z.toFixed(2),f:+n.face.toFixed(2),a:Math.round(t.lastFrame),m:n.mode,c:t.cur.id,hp:+(t.cur.hp/t.cur.st.hp).toFixed(2),n:L.settings.name,h:t.role==="host"?t.hour:void 0})}if(t.role==="host"&&(this.eT-=e,this.eT<=0)){this.eT=.1;const n=[...t.remotes.values()][0],s=[];for(const r of t.enemies.values())n&&r.pos.distanceToSquared(n.pos)>110*110||s.push([r.id,r.def.id,r.lvl,+r.pos.x.toFixed(2),+r.pos.y.toFixed(2),+r.pos.z.toFixed(2),+r.face.toFixed(2),Math.round(r.hp),Math.round(r.maxHp),r.aura?r.aura.el:0,pu[r.state],r.frozen>0?1:0,r.boss?1:0]);this.send({t:"es",l:s,ar:t.arena?1:0})}}}onMsg(e){const t=this.g;switch(e.t){case"hello":{const n=t.remotes.get(t.role==="host"?2:1)||new af(t.gfx.scene,"sora");n.name=e.name||"友達",t.remotes.set(t.role==="host"?2:1,n),t.role==="guest"&&e.pos&&(t.player.pos.set(e.pos[0]+2,e.pos[1],e.pos[2]+2),t.camT.copy(t.player.pos),t.hour=e.hour,ne.emit("toast",`${n.name}の世界に参加しました！`));break}case"full":ne.emit("toast","その部屋はいっぱいです"),this.leave();break;case"bye":this.dropped();break;case"p":{const n=t.role==="host"?2:1;let s=t.remotes.get(n);s||(s=new af(t.gfx.scene,e.c),t.remotes.set(n,s),s.pos.set(e.x,e.y,e.z)),s.setChar(e.c),s.target.set(e.x,e.y,e.z),s.face=e.f,s.f=e.a,s.mode=e.m,s.hp=e.hp,s.name=e.n||s.name,e.h!==void 0&&t.role==="guest"&&(t.hour=e.h);break}case"es":{if(t.role!=="guest")break;const n=new Set;for(const s of e.l){const[r,a,o,c,l,h,d,f,u,g,_,m]=s;n.add(r);let p=t.enemies.get(r);p||(p=t.addEnemy(a,o,c,h,r),p.remote=!0,p.pos.set(c,l,h)),p.netPos.set(c,l,h),p.face=d,p.hp=f,p.maxHp=u,p.aura=g?{el:g,t:999}:null,p.state=Ry[_],p.frozen=m?1:0}for(const s of[...t.enemies.values()])!n.has(s.id)&&s.state!=="dead"&&t.removeEnemy(s);break}case"hit":{const n=t.enemies.get(e.id);n&&t.role!=="guest"&&_d(t,n,e.h);break}case"dmg":{if(t.role!=="guest")break;const n=t.enemies.get(e.id);if(!n)break;n.hurtFlash=.15,t.num(n.pos,String(e.d),e.c?"#ffe04a":e.e==="phys"?"#ffffff":window.EL_COL?.[e.e]||"#fff",e.c),e.l&&t.nums.push({x:n.pos.x,y:n.pos.y+2.6,z:n.pos.z,text:e.l,color:"#ffe8ff",t:0,big:!0});break}case"kill":{if(t.role!=="guest")break;const n=t.enemies.get(e.id);n&&(n.state="dead",t.later(.6,()=>t.removeEnemy(n))),t.rewardKill(e.def,e.lvl);break}case"fx":t.netEcho=!0,t.fxAt(e.n,new D(e.p[0],e.p[1],e.p[2]),e.e,e.s,e.f),t.netEcho=!1;break;case"proj":{const n=new D(Math.cos(t.camYaw),0,-Math.sin(t.camYaw)),s=new D(e.v[0],e.v[1],e.v[2]);t.fx.spawn("orb",new D(e.p[0],e.p[1],e.p[2]),{el:e.e,scale:e.s,loop:!0,life:e.l,vel:s,flip:s.dot(n)<0});break}case"eatk":t.checkPlayerHit(new D(e.c[0],e.c[1],e.c[2]),e.r,e.dmg,e.el,e.lvl);break;case"eproj":t.spawnEProj(new D(e.p[0],e.p[1],e.p[2]),new D(e.v[0],e.v[1],e.v[2]),e.dmg,e.el,!1);break;case"tele":t.showTele(new D(e.p[0],e.p[1],e.p[2]),e.r,e.d);break;case"heal":e.to===t.pid&&t.healParty(e.v,t.pid);break;case"shield":e.to===t.pid&&t.addShield(e.v,t.pid);break;case"pull":t.role==="host"&&t.pullEnemies(new D(e.c[0],e.c[1],e.c[2]),e.r,e.k);break}}}let Pi=null,Mf=0;function Ci(i,e,t,n,s){if(!Pi||!L.settings.sfx)return;const r=Pi.currentTime,a=Pi.createOscillator(),o=Pi.createGain();a.type=n,a.frequency.setValueAtTime(i,r),a.frequency.exponentialRampToValueAtTime(Math.max(20,e),r+t),o.gain.setValueAtTime(s,r),o.gain.exponentialRampToValueAtTime(.001,r+t),a.connect(o).connect(Pi.destination),a.start(r),a.stop(r+t)}function ky(){const i=()=>{if(!Pi)try{Pi=new AudioContext}catch{}Pi?.resume()};addEventListener("pointerdown",i,{passive:!0}),ne.on("sfx",e=>{if(e==="ui"&&Ci(660,990,.08,"square",.04),e==="hit"){const t=performance.now();if(t-Mf<60)return;Mf=t,Ci(220,80,.09,"square",.05)}e==="skill"&&Ci(400,1200,.2,"sawtooth",.04),e==="burst"&&(Ci(200,900,.5,"sawtooth",.05),Ci(300,1500,.5,"triangle",.04)),e==="chest"&&[523,659,784,1046].forEach((t,n)=>setTimeout(()=>Ci(t,t,.12,"triangle",.06),n*80)),e==="react"&&Ci(880,300,.25,"triangle",.06),e==="wish"&&[392,523,659,784,1046,1318].forEach((t,n)=>setTimeout(()=>Ci(t,t*1.01,.25,"triangle",.05),n*110))}),ne.on("burst",()=>ne.emit("sfx","burst")),ne.on("loot",()=>ne.emit("sfx","chest")),ne.on("gacha",()=>ne.emit("sfx","wish"))}const Zi=document.getElementById("boot"),Dy=Zi.querySelector(".bar i"),Pl=Zi.querySelector(".msg"),oa=(i,e)=>(Dy.style.width=i*100+"%",Pl.textContent=e,new Promise(t=>setTimeout(t,16)));window.EL_COL=Object.fromEntries(Object.entries(ct).map(([i,e])=>[i,e.color]));async function Iy(){window.NINJIN_BOOTED=!0,await oa(.1,"セーブデータを読み込み中…");const i=Su();El(),await oa(.3,"エフェクトを読み込み中…"),await Vv("./fx/"),await oa(.6,"世界を作っています…");const e=new Zx(document.getElementById("gl")),t=new sy(e),n=new Qx(e,(h,d)=>t.open(h,d)),s=new ey(document.getElementById("overlay"),e),r=new Py(e);window.NINJIN_NET=r,window.NINJIN=e,window.NINJIN_DBG={S:L,POIS:Pt,byId:en,resolveTarget:Sl,addChar:za},ky();for(let h=0;h<14;h++)e.view.update(e.player.pos.x,e.player.pos.z,0);e.render(.016),await oa(1,"準備完了"),Zi.classList.add("ready"),Pl.textContent="タップしてはじめる";const a=()=>{Zi.removeEventListener("pointerdown",a),Zi.classList.add("out"),setTimeout(()=>Zi.remove(),600);try{matchMedia("(pointer:coarse)").matches&&(document.documentElement.requestFullscreen?.().catch(()=>{}),screen.orientation?.lock?.("landscape").catch(()=>{}))}catch{}ne.emit("sfx","ui"),L.flags.intro?i&&ne.emit("toast","おかえりなさい！"):(L.flags.intro=1,qe(),ne.emit("dialog",Wx,()=>{}))};Zi.addEventListener("pointerdown",a);let o=performance.now(),c=60;const l=h=>{const d=Math.min(100,h-o);o=h;const f=Math.min(.05,d/1e3);c=c*.95+1e3/Math.max(1,d)*.05,e.paused&&e.role==="solo"?e.render(0):e.update(f);const u=e.gfx.q;e.gfx.sample(d,h),u!==e.gfx.q&&e.applyQuality(),n.update(f,c),s.draw(e.paused&&e.role==="solo"?0:f),requestAnimationFrame(l)};requestAnimationFrame(l),addEventListener("visibilitychange",()=>{document.hidden&&(L.pos={x:e.player.pos.x,y:e.player.pos.y,z:e.player.pos.z},Is(!0))}),addEventListener("pagehide",()=>Is(!0))}Iy().catch(i=>{Pl.textContent="エラー："+i,console.error(i)});const Ly=y("div",{id:"rotate"},y("div",{},"↻"),y("p",{},"スマホを横向きにしてね"));document.body.append(Ly);"serviceWorker"in navigator&&location.protocol==="https:"&&addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
