var cu=i=>{throw TypeError(i)};var Ys=(i,e,t)=>e.has(i)?cu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t);function lu(i,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in i)){const r=Object.getOwnPropertyDescriptor(n,s);r&&Object.defineProperty(i,s,r.get?r:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Dl={sword:"片手剣",claymore:"両手剣",polearm:"長柄武器",bow:"弓",catalyst:"法器"},bt=(i,e,t,n,s,r={})=>({name:i,kind:e,mv:t,cd:n,desc:s,...r}),Mt=(i,e,t,n,s,r={})=>({name:i,kind:e,mv:t,cd:15,cost:n,desc:s,...r}),Wn=[{id:"sora",name:"ソラ",title:"星を拾った旅人",rarity:5,el:"star",weapon:"sword",hp:912,atk:18,def:57,asc:{k:"atkP",v:.24},starter:!0,look:{hair:"#f2e6c8",style:"short",skin:"#ffd9b8",eye:"#e85aa8",c1:"#3a3f7a",c2:"#f4f1ea",c3:"#ffc24a",cape:!0},skill:bt("星屑の一閃","wave",2.2,6,"前方に星の斬撃を飛ばす。",{r:2}),burst:Mt("流れ星の雨","meteor",1.4,60,"周りの敵に流れ星を5つ落とす。",{n:5,r:3.5}),bio:"夜空から落ちてきた星と一緒に、浜辺で目を覚ました旅人。記憶の大部分をなくしている。"},{id:"homura",name:"ホムラ",title:"紅蓮の鍛冶姫",rarity:5,el:"fire",weapon:"claymore",hp:1020,atk:26,def:62,asc:{k:"cd",v:.384},look:{hair:"#d8382a",style:"ponytail",skin:"#f8cfa8",eye:"#ffb020",c1:"#3a2220",c2:"#e8a040",c3:"#ff6030",acc:"band"},skill:bt("灼熱槌","dash",2.6,8,"炎をまとって前へ踏み込み、叩き割る。",{r:2.5}),burst:Mt("鍛炉解放","infuse",3.2,70,"爆発を起こし、12秒間通常攻撃が焔元素になる。",{r:5,dur:12,buff:.35}),bio:"紅砂の谷の名工。自分の打った剣は自分で試し斬りしないと気が済まない。"},{id:"shizuku",name:"シズク",title:"水鏡の巫女",rarity:5,el:"water",weapon:"catalyst",hp:1060,atk:17,def:58,asc:{k:"heal",v:.222},look:{hair:"#6ab8ff",style:"long",skin:"#fde3cc",eye:"#2a6ad8",c1:"#f4f6ff",c2:"#3a7ad8",c3:"#9ae0ff",skirt:!0,acc:"flower"},skill:bt("水鏡の陣","field",.6,12,"足もとに癒やしの陣を張り、10秒間回復と攻撃を続ける。",{r:5,dur:10,heal:.04}),burst:Mt("満ち潮","nova",3.6,80,"大波で周囲を押し流し、チーム全員のHPを大きく回復。",{r:7,heal:.25}),bio:"湖の社を守る巫女。のんびりしているが、怒ると誰よりもこわい。"},{id:"raika",name:"ライカ",title:"迅雷の槍騎",rarity:5,el:"volt",weapon:"polearm",hp:980,atk:25,def:60,asc:{k:"cr",v:.192},limited:!0,look:{hair:"#2a2a3a",style:"spiky",skin:"#f4c8a0",eye:"#ffd23c",c1:"#222838",c2:"#ffd23c",c3:"#e8e8f0",cape:!0},skill:bt("稲妻走り","chain",2,7,"雷が最大5体の敵の間を走る。",{n:5,r:8}),burst:Mt("百雷槍","volley",.9,60,"雷の槍を12本降らせる。",{n:12,r:6}),bio:"雷よりも速いと噂される傭兵。本人はただの遅刻魔だと言う。"},{id:"yukine",name:"ユキネ",title:"霜灯の射手",rarity:5,el:"frost",weapon:"bow",hp:860,atk:24,def:54,asc:{k:"cd",v:.384},look:{hair:"#e8f4ff",style:"bob",skin:"#fff0e4",eye:"#5ab8ff",c1:"#2a4a7a",c2:"#e8f4ff",c3:"#9ae8ff",acc:"hood"},skill:bt("霜灯籠","turret",.9,10,"氷の灯籠を置く。灯籠は12秒間、近くの敵を撃ち続ける。",{r:10,dur:12}),burst:Mt("白夜の雪原","field",.8,60,"広い範囲に吹雪を起こし、8秒間ダメージを与え続ける。",{r:7,dur:8}),bio:"霜嶺の見張り番。口数は少ないが、灯籠の手入れだけは毎日欠かさない。"},{id:"kurou",name:"クロウ",title:"影喰らいの剣士",rarity:5,el:"shadow",weapon:"sword",hp:940,atk:27,def:57,asc:{k:"cr",v:.192},limited:!0,look:{hair:"#1a1a28",style:"long",skin:"#e8c4a8",eye:"#c070ff",c1:"#18141f",c2:"#5a2a8a",c3:"#c070ff",cape:!0,acc:"mask"},skill:bt("影渦","vortex",.5,9,"影の渦で敵を吸い寄せ、ダメージを与え続ける。",{r:6,dur:4}),burst:Mt("月蝕斬","nova",4.8,70,"影の大斬撃で周囲を切り裂く。",{r:6}),bio:"影の塔から来たという謎の剣士。甘いものに目がない。"},{id:"mikoto",name:"ミコト",title:"星詠みの姫",rarity:5,el:"star",weapon:"catalyst",hp:1e3,atk:20,def:63,asc:{k:"er",v:.32},limited:!0,look:{hair:"#ffd0f0",style:"twin",skin:"#ffe8d8",eye:"#a050ff",c1:"#ffffff",c2:"#ff9ad8",c3:"#ffd84a",skirt:!0,acc:"crown"},skill:bt("星詠みの祝福","buff",1.2,15,"星の結界を張り、中にいる仲間の攻撃力を12秒間上げる。",{r:5,dur:12,buff:.4}),burst:Mt("天球の守り","shield",2.2,60,"星の盾でチームを守り、周囲にダメージ。",{r:5,shield:.35,heal:.1}),bio:"星の声を聞くと言われる王族の末裔。好奇心が強く、すぐ城を抜け出す。"},{id:"kagura",name:"カグラ",title:"炎舞の狩人",rarity:5,el:"fire",weapon:"bow",hp:880,atk:26,def:52,asc:{k:"atkP",v:.288},limited:!0,look:{hair:"#ff9a3a",style:"braid",skin:"#f0c09a",eye:"#d83a2a",c1:"#5a2a1a",c2:"#ffcf6a",c3:"#ff5a3a",acc:"ears"},skill:bt("火矢の舞","volley",1.1,8,"燃える矢を6本連続で放つ。",{n:6,r:12}),burst:Mt("天焦がし","meteor",2.6,70,"巨大な火球を3つ落とす。",{n:3,r:4.5}),bio:"狐の耳を持つ狩人。踊るように矢を放ち、外したことはないと自慢している。"},{id:"tsumugi",name:"ツムギ",title:"糸紡ぎの弓使い",rarity:4,el:"fire",weapon:"bow",hp:790,atk:19,def:50,asc:{k:"atkP",v:.24},starter:!0,look:{hair:"#a04a2a",style:"ponytail",skin:"#fcd4b0",eye:"#6a3a1a",c1:"#c84a3a",c2:"#f4e0b0",c3:"#ffd060"},skill:bt("火の綾","volley",.9,6,"火の矢を3本扇状に放つ。",{n:3,r:12}),burst:Mt("火群","nova",2.4,40,"周りに炎の輪を広げる。",{r:5}),bio:"ルコの町の仕立て屋の娘。弓の腕は町いちばん。"},{id:"hayate",name:"ハヤテ",title:"疾風の剣客",rarity:4,el:"volt",weapon:"sword",hp:840,atk:18,def:55,asc:{k:"er",v:.267},starter:!0,look:{hair:"#4a6aa8",style:"spiky",skin:"#f4c8a0",eye:"#ffd23c",c1:"#2a3a5a",c2:"#c8d0e0",c3:"#ffd23c",cape:!0},skill:bt("迅雷踏み","dash",1.8,5,"雷をまとって駆け抜ける。",{r:2}),burst:Mt("雷鳴剣","infuse",1.6,50,"10秒間、通常攻撃が雷元素になり、ダメージが上がる。",{r:4,dur:10,buff:.25}),bio:"流れ者の剣士。困っている人を見ると放っておけない。"},{id:"minamo",name:"ミナモ",title:"水面の射手",rarity:4,el:"water",weapon:"bow",hp:820,atk:17,def:52,asc:{k:"hpP",v:.24},starter:!0,look:{hair:"#3a8ad8",style:"bun",skin:"#fde0c8",eye:"#1a5aa8",c1:"#e8f4ff",c2:"#3a8ad8",c3:"#78d8f4",skirt:!0},skill:bt("さざ波の矢","wave",1.6,6,"水の矢が敵を貫いて進む。",{r:1.6}),burst:Mt("恵みの雨","field",.4,60,"雨を降らせ、8秒間仲間を回復しながら敵を打つ。",{r:6,dur:8,heal:.03}),bio:"漁師の家の娘。魚と話せると本気で信じている。"},{id:"kohaku",name:"コハク",title:"琥珀の盾",rarity:4,el:"star",weapon:"claymore",hp:1e3,atk:17,def:70,asc:{k:"defP",v:.3},look:{hair:"#e8a84a",style:"short",skin:"#f0c8a0",eye:"#a85a1a",c1:"#7a5a3a",c2:"#f0e0c0",c3:"#ffd060",acc:"horns"},skill:bt("琥珀の守り","shield",1.4,12,"防御力に応じたシールドを張り、周囲にダメージ。",{r:3.5,shield:.3}),burst:Mt("大地の星","nova",3,50,"大剣を叩きつけ、星の衝撃波を起こす。",{r:6}),bio:"霜嶺のふもとの村で育った力持ち。困ったら全部持ち上げて解決する。"},{id:"shino",name:"シノ",title:"影縫いの書士",rarity:4,el:"shadow",weapon:"catalyst",hp:780,atk:19,def:48,asc:{k:"em",v:96},look:{hair:"#5a3a8a",style:"bob",skin:"#f8d8c0",eye:"#c070ff",c1:"#2a1a3a",c2:"#8a5ac8",c3:"#e0c0ff",skirt:!0},skill:bt("影の鎖","chain",1.3,7,"影の鎖が3体の敵をつなぐ。",{n:3,r:7}),burst:Mt("夜帳","vortex",.7,60,"大きな影の渦を作り、敵を引き寄せる。",{r:8,dur:5}),bio:"図書館の司書。本の中の影を呼び出せる。"},{id:"rin",name:"リン",title:"氷鈴の剣士",rarity:4,el:"frost",weapon:"sword",hp:860,atk:18,def:56,asc:{k:"atkP",v:.24},look:{hair:"#9ad8f0",style:"ponytail",skin:"#fde8d8",eye:"#3a7ad8",c1:"#2a4a6a",c2:"#e8f4ff",c3:"#9ae8ff"},skill:bt("氷鈴","nova",1.9,6,"鈴の音とともに周りを凍らせる。",{r:3.5}),burst:Mt("氷華乱れ","volley",.8,60,"氷の花びらを10枚飛ばす。",{n:10,r:8}),bio:"鈴を集めるのが趣味の剣士。歩くといつもちりんと鳴る。"},{id:"taki",name:"タキ",title:"滝登りの槍",rarity:4,el:"water",weapon:"polearm",hp:900,atk:19,def:56,asc:{k:"atkP",v:.24},look:{hair:"#2a5a7a",style:"short",skin:"#e8b890",eye:"#3ab0ff",c1:"#1a3a5a",c2:"#78c8f0",c3:"#e8f4ff",acc:"band"},skill:bt("昇り鯉","dash",1.9,6,"水流に乗って前へ突進する。",{r:2.2}),burst:Mt("瀑布","nova",3.2,60,"滝のような水柱で周りを押しつぶす。",{r:5}),bio:"滝に打たれて修行する槍使い。いつも少し濡れている。"},{id:"akane",name:"アカネ",title:"夕焼けの魔女",rarity:4,el:"fire",weapon:"catalyst",hp:760,atk:20,def:46,asc:{k:"fire",v:.24},look:{hair:"#ff6a4a",style:"long",skin:"#fde0c8",eye:"#ff9a2a",c1:"#3a1a2a",c2:"#ff6a4a",c3:"#ffd060",acc:"hat",skirt:!0},skill:bt("夕陽落とし","meteor",2,9,"一番近い敵に小さな太陽を落とす。",{n:1,r:3.5}),burst:Mt("黄昏の炎","field",.7,60,"炎の結界で8秒間焼き続ける。",{r:6,dur:8}),bio:"自称・天才魔女。料理をすると必ず何かが燃える。"},{id:"ibuki",name:"イブキ",title:"雷鳴の見張り",rarity:4,el:"volt",weapon:"bow",hp:800,atk:19,def:50,asc:{k:"volt",v:.24},look:{hair:"#e8d040",style:"short",skin:"#f8d0a8",eye:"#5a3a1a",c1:"#3a3a2a",c2:"#e8d040",c3:"#ffffff",acc:"hat"},skill:bt("雷見櫓","turret",.7,10,"雷の見張り台を置き、10秒間敵を撃つ。",{r:10,dur:10}),burst:Mt("落雷注意","chain",1.5,50,"雷が7体の敵を順番に打つ。",{n:7,r:10}),bio:"谷の見張り台に住む少年。雷の音で天気がわかる。"},{id:"yuzu",name:"ユズ",title:"陽だまりの薬師",rarity:4,el:"star",weapon:"polearm",hp:920,atk:16,def:55,asc:{k:"hpP",v:.24},look:{hair:"#ffd84a",style:"twin",skin:"#ffe4d0",eye:"#4a9a3a",c1:"#f4f0d8",c2:"#7ac850",c3:"#ffd84a",skirt:!0},skill:bt("ひだまり草","field",.3,12,"回復の草を生やし、10秒間チームを癒やす。",{r:5,dur:10,heal:.035}),burst:Mt("満開","nova",2,60,"花を咲かせて周囲にダメージ、チーム全員を回復。",{r:6,heal:.2}),bio:"町の薬師見習い。苦い薬を甘くする研究をしている。"},{id:"fuyu",name:"フユ",title:"冬籠りの大剣",rarity:4,el:"frost",weapon:"claymore",hp:960,atk:20,def:60,asc:{k:"frost",v:.24},look:{hair:"#c8d8e8",style:"long",skin:"#f8e0d0",eye:"#5a8ab8",c1:"#4a5a7a",c2:"#f0f4ff",c3:"#9ae8ff",acc:"ears"},skill:bt("冬眠明け","nova",2.2,7,"大剣で地面をたたき、氷柱を立てる。",{r:4}),burst:Mt("吹雪の大剣","infuse",1.8,60,"10秒間、通常攻撃が霜元素になる。",{r:4,dur:10,buff:.3}),bio:"冬になると眠くなる大剣使い。起きているときはとても頼りになる。"},{id:"yoru",name:"ヨル",title:"夜鳴きの弓",rarity:4,el:"shadow",weapon:"bow",hp:780,atk:20,def:48,asc:{k:"shadow",v:.24},look:{hair:"#3a2a5a",style:"long",skin:"#f0d0c0",eye:"#ff5a8a",c1:"#1a1428",c2:"#5a3a8a",c3:"#ff5a8a",acc:"hood"},skill:bt("夜鳴き","vortex",.4,9,"影の矢が渦になり、敵を引き寄せる。",{r:5,dur:3}),burst:Mt("百夜","volley",.7,60,"影の矢を14本降らせる。",{n:14,r:8}),bio:"夜にしか姿を見せない弓使い。昼は寝ている。"},{id:"kaede",name:"カエデ",title:"紅葉の槍",rarity:4,el:"fire",weapon:"polearm",hp:880,atk:19,def:54,asc:{k:"cr",v:.16},look:{hair:"#c8402a",style:"short",skin:"#f4c8a0",eye:"#ff9a2a",c1:"#7a2a1a",c2:"#f0c080",c3:"#ff6a3a",acc:"band"},skill:bt("紅葉狩り","infuse",1.5,10,"槍に炎を宿し、8秒間通常攻撃が焔元素になる。",{r:3,dur:8,buff:.2}),burst:Mt("錦秋","nova",3,60,"炎の葉が舞い、周囲を焼く。",{r:5}),bio:"秋が大好きな槍使い。一年中、紅葉の髪飾りをつけている。"},{id:"nagi",name:"ナギ",title:"凪の守り手",rarity:4,el:"water",weapon:"claymore",hp:1e3,atk:18,def:64,asc:{k:"hpP",v:.24},look:{hair:"#4a8a9a",style:"braid",skin:"#e8c0a0",eye:"#3ab0c8",c1:"#2a4a5a",c2:"#c8e8f0",c3:"#78d8f4"},skill:bt("凪の壁","shield",1.2,12,"HPに応じた水のシールドを張る。",{r:3.5,shield:.3}),burst:Mt("大凪","nova",3,60,"静かな大波で周りを押し流す。",{r:6}),bio:"灯台守の青年。海が荒れると、なぜか凪がくる。"}],rt=i=>Wn.find(e=>e.id===i),We=(i,e,t,n,s,r,a,o,c,l={})=>({id:i,name:e,type:t,rarity:n,atk:s,sub:r,pName:a,pDesc:o,eff:c,...l}),Ci=[We("w_s1","見習いの剣","sword",1,23),We("w_c1","見習いの大剣","claymore",1,23),We("w_p1","見習いの槍","polearm",1,23),We("w_b1","見習いの弓","bow",1,23),We("w_k1","見習いの手帳","catalyst",1,23),We("w_s3a","鉄の片刃","sword",3,39,{k:"atkP",v:.3},"研ぎ澄まし","攻撃力+12%",{atkP:.12}),We("w_s3b","旅人のショートソード","sword",3,38,{k:"cd",v:.4},"旅の勘","会心率+6%",{cr:.06}),We("w_c3a","岩砕き","claymore",3,39,{k:"atkP",v:.3},"重み","通常攻撃ダメージ+20%",{na:.2}),We("w_c3b","古びた鉄塊","claymore",3,38,{k:"defP",v:.4},"かたい","防御力+20%",{defP:.2}),We("w_p3a","見張りの槍","polearm",3,39,{k:"cr",v:.2},"警戒","攻撃力+10%",{atkP:.1}),We("w_p3b","銛","polearm",3,38,{k:"atkP",v:.3},"漁師の腕","潮元素ダメージ+12%",{water:.12}),We("w_b3a","狩人の弓","bow",3,39,{k:"cd",v:.4},"狙い撃ち","重撃ダメージ+24%",{ca:.24}),We("w_b3b","竹弓","bow",3,38,{k:"er",v:.35},"しなり","元素スキルダメージ+16%",{skill:.16}),We("w_k3a","魔法の入門書","catalyst",3,39,{k:"em",v:120},"予習","元素熟知+40",{em:40}),We("w_k3b","ガラス玉","catalyst",3,38,{k:"hpP",v:.3},"きらめき","回復効果+10%",{heal:.1}),We("w_s4a","風見の剣","sword",4,42,{k:"er",v:.45},"追い風","元素爆発ダメージ+24%",{burst:.24}),We("w_s4b","銀月の刃","sword",4,44,{k:"cr",v:.25},"月明かり","攻撃力+20%",{atkP:.2}),We("w_c4a","鍛冶場の大鉈","claymore",4,42,{k:"atkP",v:.41},"焼き入れ","通常・重撃ダメージ+20%",{na:.2,ca:.2}),We("w_c4b","霜降りの大剣","claymore",4,44,{k:"er",v:.45},"冷気","元素スキルダメージ+24%",{skill:.24}),We("w_p4a","雷鳴の穂先","polearm",4,44,{k:"er",v:.45},"共鳴","元素爆発ダメージ+24%",{burst:.24}),We("w_p4b","紅の矛","polearm",4,42,{k:"cr",v:.25},"猛り","攻撃力+20%",{atkP:.2}),We("w_b4a","流星弓","bow",4,44,{k:"atkP",v:.41},"流れ星","会心率+12%",{cr:.12}),We("w_b4b","祭りの弓","bow",4,42,{k:"er",v:.45},"お祭り","元素スキルダメージ+24%",{skill:.24}),We("w_k4a","星図の巻物","catalyst",4,42,{k:"em",v:165},"星読み","元素熟知+80",{em:80}),We("w_k4b","潮騒の貝","catalyst",4,44,{k:"hpP",v:.41},"潮騒","回復効果+18%",{heal:.18}),We("w_s5","天の羅針","sword",5,46,{k:"er",v:.55},"天を指す","会心率+8%、攻撃力+16%",{cr:.08,atkP:.16},{standard:!0}),We("w_c5","巨星の墓標","claymore",5,48,{k:"atkP",v:.5},"墓標","攻撃力+28%",{atkP:.28},{standard:!0}),We("w_p5","竜骨の槍","polearm",5,48,{k:"cr",v:.33},"竜の骨","全ダメージ+16%",{all:.16},{standard:!0}),We("w_b5","天穹の長弓","bow",5,48,{k:"cr",v:.33},"天穹","重撃ダメージ+40%、攻撃力+12%",{ca:.4,atkP:.12},{standard:!0}),We("w_k5","四季の書","catalyst",5,46,{k:"atkP",v:.55},"四季","元素ダメージ+16%",{el:.16},{standard:!0}),We("sig_sora","星喰みの剣","sword",5,48,{k:"cd",v:.66},"星の記憶","会心率+10%、元素スキルダメージ+20%",{cr:.1,skill:.2},{sig:"sora"}),We("sig_homura","紅蓮槌","claymore",5,48,{k:"cr",v:.33},"鍛炉の熱","攻撃力+20%、焔元素ダメージ+20%",{atkP:.2,fire:.2},{sig:"homura"}),We("sig_shizuku","水鏡の鈴","catalyst",5,46,{k:"hpP",v:.5},"清め","回復効果+20%、HP+20%",{heal:.2,hpP:.2},{sig:"shizuku"}),We("sig_raika","雷切丸","polearm",5,48,{k:"cd",v:.66},"迅雷","元素爆発ダメージ+30%、雷元素ダメージ+12%",{burst:.3,volt:.12},{sig:"raika"}),We("sig_yukine","灯守の弓","bow",5,48,{k:"cr",v:.33},"灯りを守る","霜元素ダメージ+24%、元素スキルダメージ+16%",{frost:.24,skill:.16},{sig:"yukine"}),We("sig_kurou","月喰らい","sword",5,48,{k:"cr",v:.33},"影喰らい","会心ダメージ+40%、影元素ダメージ+12%",{cd:.4,shadow:.12},{sig:"kurou"}),We("sig_mikoto","天球儀","catalyst",5,46,{k:"er",v:.55},"星の巡り","元素熟知+120、星元素ダメージ+16%",{em:120,star:.16},{sig:"mikoto"}),We("sig_kagura","狐火の弓","bow",5,48,{k:"atkP",v:.5},"狐火","会心率+12%、焔元素ダメージ+16%",{cr:.12,fire:.16},{sig:"kagura"})],Bt=i=>Ci.find(e=>e.id===i),ka=["ring","earring","neck","bracer","crown"],Rr={ring:"指輪",earring:"耳飾り",neck:"首飾り",bracer:"腕輪",crown:"冠"},Wa={hp:"HP",atk:"攻撃力",def:"防御力",hpP:"HP%",atkP:"攻撃力%",defP:"防御力%",em:"元素熟知",er:"元素チャージ効率",cr:"会心率",cd:"会心ダメージ",heal:"回復効果",fire:"焔元素ダメージ",water:"潮元素ダメージ",volt:"雷元素ダメージ",frost:"霜元素ダメージ",star:"星元素ダメージ",shadow:"影元素ダメージ",phys:"物理ダメージ",na:"通常攻撃ダメージ",ca:"重撃ダメージ",skill:"元素スキルダメージ",burst:"元素爆発ダメージ",all:"与えるダメージ",el:"元素ダメージ"},hu=new Set(["hp","atk","def","em"]),fu={ring:["hp"],earring:["atk"],neck:["atkP","hpP","defP","em","er"],bracer:["atkP","hpP","defP","em","fire","water","volt","frost","star","shadow","phys"],crown:["atkP","hpP","defP","em","cr","cd","heal"]},du={hp:4780,atk:311,atkP:.466,hpP:.466,defP:.583,em:187,er:.518,cr:.311,cd:.622,heal:.359,fire:.466,water:.466,volt:.466,frost:.466,star:.466,shadow:.466,phys:.583},fr={hp:299,atk:19,def:23,hpP:.058,atkP:.058,defP:.073,em:23,er:.065,cr:.039,cd:.078},$c=[{id:"ember",name:"紅蓮の誓約",el:"fire",b2:{fire:.15},b4:{burst:.25,react:.3},d2:"焔元素ダメージ+15%",d4:"元素爆発ダメージ+25%、元素反応ダメージ+30%"},{id:"tide",name:"満ち潮の詩",el:"water",b2:{water:.15},b4:{skill:.3,heal:.15},d2:"潮元素ダメージ+15%",d4:"元素スキルダメージ+30%、回復効果+15%"},{id:"thunder",name:"雷鳴の太鼓",el:"volt",b2:{volt:.15},b4:{er:.2,react:.3},d2:"雷元素ダメージ+15%",d4:"元素チャージ効率+20%、元素反応ダメージ+30%"},{id:"rime",name:"霧氷の旅路",el:"frost",b2:{frost:.15},b4:{cr:.15,ca:.2},d2:"霜元素ダメージ+15%",d4:"会心率+15%、重撃ダメージ+20%"},{id:"comet",name:"彗星の残り火",el:"star",b2:{star:.15},b4:{burst:.2,er:.15},d2:"星元素ダメージ+15%",d4:"元素爆発ダメージ+20%、元素チャージ効率+15%"},{id:"nocturne",name:"夜想曲の仮面",el:"shadow",b2:{shadow:.15},b4:{all:.15,cd:.2},d2:"影元素ダメージ+15%",d4:"与えるダメージ+15%、会心ダメージ+20%"},{id:"blade",name:"剣客の心得",b2:{atkP:.18},b4:{na:.35,ca:.2},d2:"攻撃力+18%",d4:"通常攻撃ダメージ+35%、重撃ダメージ+20%"},{id:"pilgrim",name:"巡礼者の祈り",b2:{hpP:.2},b4:{heal:.2,er:.15},d2:"HP+20%",d4:"回復効果+20%、元素チャージ効率+15%"}],Il=i=>$c.find(e=>e.id===i);class uu{constructor(){this.m=new Map}on(e,t){return this.m.has(e)||this.m.set(e,new Set),this.m.get(e).add(t),()=>this.m.get(e).delete(t)}emit(e,...t){this.m.get(e)?.forEach(n=>n(...t))}}const se=new uu,Da="ninjin.save.v1";let O;const gf=()=>++O.seq;function _f(i,e=1){const t=e>=80?6:e>=70?5:e>=60?4:e>=50?3:e>=40?2:e>=20?1:0,n={uid:gf(),id:i,lvl:e,exp:0,asc:t,ref:1};return O.weapons.push(n),n}function Ia(i){const e=O.chars[i];if(e){const r=e.cons;return e.cons<6&&e.cons++,se.emit("chars"),{isNew:!1,cons:r<6?e.cons:-1}}const t=rt(i),n=Ci.find(r=>r.type===t.weapon&&r.rarity===1),s=_f(n.id,1);return O.chars[i]={id:i,lvl:1,exp:0,asc:0,cons:0,tal:[1,1,1],weapon:s.uid,relics:{}},O.party.length<4&&!O.party.includes(i)&&O.party.push(i),se.emit("chars"),{isNew:!0,cons:0}}function lt(i,e=1){O.items[i]=(O.items[i]||0)+e,se.emit("items")}function Tn(i,e=1){return(O.items[i]||0)<e?!1:(O.items[i]-=e,se.emit("items"),!0)}const ct=i=>O.items[i]||0;function Uo(i,e,t,n){n=n||i.pick([...ka]),t=t||i.pick($c).id;const s=i.pick(fu[n]),r=Object.keys(fr).filter(h=>h!==s),a=e>=5?i.chance(.3)?4:3:e===4?i.chance(.3)?3:2:e===3&&i.chance(.3)?2:1,o=[],c=e>=5?1:e===4?.8:.6;for(let h=0;h<a;h++){const d=i.pick(r.filter(f=>!o.some(u=>u.k===f)));o.push({k:d,v:fr[d]*c*i.range(.7,1)})}const l={uid:gf(),set:t,slot:n,rarity:e,lvl:0,exp:0,main:s,subs:o};return O.relics.push(l),l}function Ll(){return{v:1,created:Date.now(),name:"旅人",chars:{},party:[],weapons:[],relics:[],items:{coin:5e4,gem:1600,ticket_s:20,ticket_g:5,food1:10,food2:3,food3:3,exp1:20,exp2:10,ore1:20},ar:1,arExp:0,opened:{},wps:{},shards:{},statues:{},offered:0,stamMax:240,quest:{main:0,step:0,done:!1},flags:{},daily:{date:"",tasks:[],claimed:[],bonus:!1},gacha:{p5:{standard:0,event:0,weapon:0},p4:{standard:0,event:0,weapon:0},g:{event:!1,weapon:!1},hist:[]},pos:{x:0,y:0,z:0},camps:{},bosses:{},tower:{},settings:{quality:"auto",fps:!1,sfx:!0,tilt:!0,name:"旅人"},seq:0,stats:{kills:0,reacts:0,play:0}}}function pu(){try{const i=localStorage.getItem(Da);if(i)return O=Object.assign(Ll(),JSON.parse(i)),!0}catch{}return O=Ll(),Ia("sora"),!1}let No=!1;function et(){No=!0}function _r(i=!1){if(!(!No&&!i)){No=!1;try{localStorage.setItem(Da,JSON.stringify(O))}catch(e){console.warn("save failed",e)}}}function mu(){return btoa(unescape(encodeURIComponent(JSON.stringify(O))))}function gu(i){const e=JSON.parse(decodeURIComponent(escape(atob(i.trim()))));if(!e||!e.chars)throw new Error("bad");localStorage.setItem(Da,JSON.stringify(e))}function _u(){localStorage.removeItem(Da)}const vu=i=>O.weapons.find(e=>e.uid===i.weapon),ya=i=>i?O.relics.find(e=>e.uid===i):void 0,$a=i=>Object.values(O.chars).find(e=>e.weapon===i),Xa=i=>Object.values(O.chars).find(e=>Object.values(e.relics).includes(i)),Ul=()=>Wn.filter(i=>O.chars[i.id]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xc="170",xu=0,Nl=1,yu=2,vf=1,bu=2,ei=3,ki=0,tn=1,mn=2,Ri=0,ts=1,Fo=2,Fl=3,Ol=4,Mu=5,Xi=100,Su=101,Eu=102,Tu=103,wu=104,Cu=200,Au=201,Ru=202,Pu=203,Oo=204,zo=205,ku=206,Du=207,Iu=208,Lu=209,Uu=210,Nu=211,Fu=212,Ou=213,zu=214,Bo=0,Ho=1,Vo=2,Us=3,Go=4,Wo=5,$o=6,Xo=7,jc=0,Bu=1,Hu=2,Pi=0,Vu=1,Gu=2,Wu=3,$u=4,Xu=5,ju=6,qu=7,xf=300,Ns=301,Fs=302,jo=303,qo=304,La=306,Yo=1e3,Ki=1001,Ko=1002,Ot=1003,Yu=1004,Pr=1005,Hn=1006,ja=1007,Ji=1008,di=1009,yf=1010,bf=1011,vr=1012,qc=1013,ns=1014,Vn=1015,Sr=1016,Yc=1017,Kc=1018,Os=1020,Mf=35902,Sf=1021,Ef=1022,Un=1023,Tf=1024,wf=1025,ks=1026,zs=1027,Jc=1028,Zc=1029,Cf=1030,Qc=1031,el=1033,na=33776,ia=33777,sa=33778,ra=33779,Jo=35840,Zo=35841,Qo=35842,ec=35843,tc=36196,nc=37492,ic=37496,sc=37808,rc=37809,ac=37810,oc=37811,cc=37812,lc=37813,hc=37814,fc=37815,dc=37816,uc=37817,pc=37818,mc=37819,gc=37820,_c=37821,aa=36492,vc=36494,xc=36495,Af=36283,yc=36284,bc=36285,Mc=36286,Ku=3200,Ju=3201,Rf=0,Zu=1,Ti="",qt="srgb",Vs="srgb-linear",Ua="linear",ot="srgb",cs=7680,zl=519,Qu=512,ep=513,tp=514,Pf=515,np=516,ip=517,sp=518,rp=519,Bl=35044,Hl="300 es",ri=2e3,ba=2001;class Gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qa=Math.PI/180,Sc=180/Math.PI;function Er(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function cn(i,e,t){return Math.max(e,Math.min(t,i))}function ap(i,e){return(i%e+e)%e}function Ya(i,e,t){return(1-t)*i+t*e}function Ks(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function an(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(cn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,s,r,a,o,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],u=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],x=s[4],v=s[7],D=s[2],T=s[5],A=s[8];return r[0]=a*_+o*y+c*D,r[3]=a*m+o*x+c*T,r[6]=a*p+o*v+c*A,r[1]=l*_+h*y+d*D,r[4]=l*m+h*x+d*T,r[7]=l*p+h*v+d*A,r[2]=f*_+u*y+g*D,r[5]=f*m+u*x+g*T,r[8]=f*p+u*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,f=o*c-h*r,u=l*r-a*c,g=t*d+n*f+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=u*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ka.makeScale(e,t)),this}rotate(e){return this.premultiply(Ka.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ka=new He;function kf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ma(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function op(){const i=Ma("canvas");return i.style.display="block",i}const Vl={};function or(i){i in Vl||(Vl[i]=!0,console.warn(i))}function cp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function lp(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function hp(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qe={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ot&&(i.r=hi(i.r),i.g=hi(i.g),i.b=hi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ot&&(i.r=Ds(i.r),i.g=Ds(i.g),i.b=Ds(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ti?Ua:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Gl=[.64,.33,.3,.6,.15,.06],Wl=[.2126,.7152,.0722],$l=[.3127,.329],Xl=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jl=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[Vs]:{primaries:Gl,whitePoint:$l,transfer:Ua,toXYZ:Xl,fromXYZ:jl,luminanceCoefficients:Wl,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:Gl,whitePoint:$l,transfer:ot,toXYZ:Xl,fromXYZ:jl,luminanceCoefficients:Wl,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}});let ls;class fp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ls===void 0&&(ls=Ma("canvas")),ls.width=e.width,ls.height=e.height;const n=ls.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ma("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hi(t[n]/255)*255):t[n]=hi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dp=0;class Df{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Er(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ja(s[a].image)):r.push(Ja(s[a]))}else r=Ja(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ja(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let up=0;class zt extends Gs{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=Ki,s=Ki,r=Hn,a=Ji,o=Un,c=di,l=zt.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Er(),this.name="",this.source=new Df(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yo:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case Ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yo:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case Ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=xf;zt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,s=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],u=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,v=(u+1)/2,D=(p+1)/2,T=(h+f)/4,A=(d+_)/4,k=(g+m)/4;return x>v&&x>D?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=A/n):v>D?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=k/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=A/r,s=k/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(f-h)/y,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pp extends Gs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new zt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Df(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends pp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class If extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mp extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ws{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const f=r[a+0],u=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=u,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==f||l!==u||h!==g){let m=1-o;const p=c*f+l*u+h*g+d*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const D=Math.sqrt(x),T=Math.atan2(D,p*y);m=Math.sin(m*T)/D,o=Math.sin(o*T)/D}const v=o*y;if(c=c*m+f*v,l=l*m+u*v,h=h*m+g*v,d=d*m+_*v,m===1-o){const D=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=D,l*=D,h*=D,d*=D}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],f=r[a+1],u=r[a+2],g=r[a+3];return e[t]=o*g+h*d+c*u-l*f,e[t+1]=c*g+h*f+l*d-o*u,e[t+2]=l*g+h*u+o*f-c*d,e[t+3]=h*g-o*d-c*f-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),f=c(n/2),u=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*d+l*u*g,this._y=l*u*d-f*h*g,this._z=l*h*g+f*u*d,this._w=l*h*d-f*u*g;break;case"YXZ":this._x=f*h*d+l*u*g,this._y=l*u*d-f*h*g,this._z=l*h*g-f*u*d,this._w=l*h*d+f*u*g;break;case"ZXY":this._x=f*h*d-l*u*g,this._y=l*u*d+f*h*g,this._z=l*h*g+f*u*d,this._w=l*h*d-f*u*g;break;case"ZYX":this._x=f*h*d-l*u*g,this._y=l*u*d+f*h*g,this._z=l*h*g-f*u*d,this._w=l*h*d+f*u*g;break;case"YZX":this._x=f*h*d+l*u*g,this._y=l*u*d+f*h*g,this._z=l*h*g-f*u*d,this._w=l*h*d-f*u*g;break;case"XZY":this._x=f*h*d-l*u*g,this._y=l*u*d-f*h*g,this._z=l*h*g+f*u*d,this._w=l*h*d+f*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>d){const u=2*Math.sqrt(1+n-o-d);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>d){const u=2*Math.sqrt(1+o-n-d);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{const u=2*Math.sqrt(1+d-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const u=1-t;return this._w=u*a+t*this._w,this._x=u*n+t*this._x,this._y=u*s+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ql.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Za.copy(this).projectOnVector(e),this.sub(Za)}reflect(e){return this.sub(Za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(cn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Za=new P,ql=new Ws;class is{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),Dr.subVectors(this.max,Js),hs.subVectors(e.a,Js),fs.subVectors(e.b,Js),ds.subVectors(e.c,Js),gi.subVectors(fs,hs),_i.subVectors(ds,fs),Fi.subVectors(hs,ds);let t=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Fi.z,Fi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Fi.z,0,-Fi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Fi.y,Fi.x,0];return!Qa(t,hs,fs,ds,Dr)||(t=[1,0,0,0,1,0,0,0,1],!Qa(t,hs,fs,ds,Dr))?!1:(Ir.crossVectors(gi,_i),t=[Ir.x,Ir.y,Ir.z],Qa(t,hs,fs,ds,Dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new P,new P,new P,new P,new P,new P,new P,new P],An=new P,kr=new is,hs=new P,fs=new P,ds=new P,gi=new P,_i=new P,Fi=new P,Js=new P,Dr=new P,Ir=new P,Oi=new P;function Qa(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Oi.fromArray(i,r);const o=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),c=e.dot(Oi),l=t.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const gp=new is,Zs=new P,eo=new P;class Tr{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const t=Zs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Zs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(eo)),this.expandByPoint(Zs.copy(e.center).sub(eo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new P,to=new P,Lr=new P,vi=new P,no=new P,Ur=new P,io=new P;class _p{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){to.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(to);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Lr),o=vi.dot(this.direction),c=-vi.dot(Lr),l=vi.lengthSq(),h=Math.abs(1-a*a);let d,f,u,g;if(h>0)if(d=a*c-o,f=a*o-c,g=r*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,u=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),u=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(to).addScaledVector(Lr,f),u}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,s,r){no.subVectors(t,e),Ur.subVectors(n,e),io.crossVectors(no,Ur);let a=this.direction.dot(io),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vi.subVectors(this.origin,e);const c=o*this.direction.dot(Ur.crossVectors(vi,Ur));if(c<0)return null;const l=o*this.direction.dot(no.cross(vi));if(l<0||c+l>a)return null;const h=-o*vi.dot(io);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,s,r,a,o,c,l,h,d,f,u,g,_,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,f,u,g,_,m)}set(e,t,n,s,r,a,o,c,l,h,d,f,u,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/us.setFromMatrixColumn(e,0).length(),r=1/us.setFromMatrixColumn(e,1).length(),a=1/us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=a*h,u=a*d,g=o*h,_=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=u+g*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=g+u*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,u=c*d,g=l*h,_=l*d;t[0]=f+_*o,t[4]=g*o-u,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=u*o-g,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,u=c*d,g=l*h,_=l*d;t[0]=f-_*o,t[4]=-a*d,t[8]=g+u*o,t[1]=u+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,u=a*d,g=o*h,_=o*d;t[0]=c*h,t[4]=g*l-u,t[8]=f*l+_,t[1]=c*d,t[5]=_*l+f,t[9]=u*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,u=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-f*d,t[8]=g*d+u,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=a*c,u=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+_,t[5]=a*h,t[9]=u*d-g,t[2]=g*d-u,t[6]=o*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vp,e,xp)}lookAt(e,t,n){const s=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),xi.crossVectors(n,fn),xi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),xi.crossVectors(n,fn)),xi.normalize(),Nr.crossVectors(fn,xi),s[0]=xi.x,s[4]=Nr.x,s[8]=fn.x,s[1]=xi.y,s[5]=Nr.y,s[9]=fn.y,s[2]=xi.z,s[6]=Nr.z,s[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],u=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],v=n[11],D=n[15],T=s[0],A=s[4],k=s[8],w=s[12],M=s[1],R=s[5],z=s[9],U=s[13],j=s[2],q=s[6],$=s[10],ee=s[14],I=s[3],K=s[7],ae=s[11],xe=s[15];return r[0]=a*T+o*M+c*j+l*I,r[4]=a*A+o*R+c*q+l*K,r[8]=a*k+o*z+c*$+l*ae,r[12]=a*w+o*U+c*ee+l*xe,r[1]=h*T+d*M+f*j+u*I,r[5]=h*A+d*R+f*q+u*K,r[9]=h*k+d*z+f*$+u*ae,r[13]=h*w+d*U+f*ee+u*xe,r[2]=g*T+_*M+m*j+p*I,r[6]=g*A+_*R+m*q+p*K,r[10]=g*k+_*z+m*$+p*ae,r[14]=g*w+_*U+m*ee+p*xe,r[3]=y*T+x*M+v*j+D*I,r[7]=y*A+x*R+v*q+D*K,r[11]=y*k+x*z+v*$+D*ae,r[15]=y*w+x*U+v*ee+D*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],u=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*d-s*l*d-r*o*f+n*l*f+s*o*u-n*c*u)+_*(+t*c*u-t*l*f+r*a*f-s*a*u+s*l*h-r*c*h)+m*(+t*l*d-t*o*u-r*a*d+n*a*u+r*o*h-n*l*h)+p*(-s*o*h-t*c*d+t*o*f+s*a*d-n*a*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],u=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=d*m*l-_*f*l+_*c*u-o*m*u-d*c*p+o*f*p,x=g*f*l-h*m*l-g*c*u+a*m*u+h*c*p-a*f*p,v=h*_*l-g*d*l+g*o*u-a*_*u-h*o*p+a*d*p,D=g*d*c-h*_*c-g*o*f+a*_*f+h*o*m-a*d*m,T=t*y+n*x+s*v+r*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=y*A,e[1]=(_*f*r-d*m*r-_*s*u+n*m*u+d*s*p-n*f*p)*A,e[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*p+n*c*p)*A,e[3]=(d*c*r-o*f*r-d*s*l+n*f*l+o*s*u-n*c*u)*A,e[4]=x*A,e[5]=(h*m*r-g*f*r+g*s*u-t*m*u-h*s*p+t*f*p)*A,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*A,e[7]=(a*f*r-h*c*r+h*s*l-t*f*l-a*s*u+t*c*u)*A,e[8]=v*A,e[9]=(g*d*r-h*_*r-g*n*u+t*_*u+h*n*p-t*d*p)*A,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*p+t*o*p)*A,e[11]=(h*o*r-a*d*r-h*n*l+t*d*l+a*n*u-t*o*u)*A,e[12]=D*A,e[13]=(h*_*s-g*d*s+g*n*f-t*_*f-h*n*m+t*d*m)*A,e[14]=(g*o*s-a*_*s-g*n*c+t*_*c+a*n*m-t*o*m)*A,e[15]=(a*d*s-h*o*s+h*n*c-t*d*c-a*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,f=r*l,u=r*h,g=r*d,_=a*h,m=a*d,p=o*d,y=c*l,x=c*h,v=c*d,D=n.x,T=n.y,A=n.z;return s[0]=(1-(_+p))*D,s[1]=(u+v)*D,s[2]=(g-x)*D,s[3]=0,s[4]=(u-v)*T,s[5]=(1-(f+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+x)*A,s[9]=(m-y)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=us.set(s[0],s[1],s[2]).length();const a=us.set(s[4],s[5],s[6]).length(),o=us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Rn.copy(this);const l=1/r,h=1/a,d=1/o;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,t.setFromRotationMatrix(Rn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ri){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let u,g;if(o===ri)u=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ba)u=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=u,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ri){const c=this.elements,l=1/(t-e),h=1/(n-s),d=1/(a-r),f=(t+e)*l,u=(n+s)*h;let g,_;if(o===ri)g=(a+r)*d,_=-2*d;else if(o===ba)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-u,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const us=new P,Rn=new ht,vp=new P(0,0,0),xp=new P(1,1,1),xi=new P,Nr=new P,fn=new P,Yl=new ht,Kl=new Ws;class Xn{constructor(e=0,t=0,n=0,s=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(cn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(cn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kl.setFromEuler(this),this.setFromQuaternion(Kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class Lf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yp=0;const Jl=new P,ps=new Ws,Jn=new ht,Fr=new P,Qs=new P,bp=new P,Mp=new Ws,Zl=new P(1,0,0),Ql=new P(0,1,0),eh=new P(0,0,1),th={type:"added"},Sp={type:"removed"},ms={type:"childadded",child:null},so={type:"childremoved",child:null};class Ht extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new P,t=new Xn,n=new Ws,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new He}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(Zl,e)}rotateY(e){return this.rotateOnAxis(Ql,e)}rotateZ(e){return this.rotateOnAxis(eh,e)}translateOnAxis(e,t){return Jl.copy(e).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zl,e)}translateY(e){return this.translateOnAxis(Ql,e)}translateZ(e){return this.translateOnAxis(eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fr.copy(e):Fr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Qs,Fr,this.up):Jn.lookAt(Fr,Qs,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(Jn),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(th),ms.child=e,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sp),so.child=e,this.dispatchEvent(so),so.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(th),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,bp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,Mp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),u=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ht.DEFAULT_UP=new P(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new P,Zn=new P,ro=new P,Qn=new P,gs=new P,_s=new P,nh=new P,ao=new P,oo=new P,co=new P,lo=new vt,ho=new vt,fo=new vt;class In{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Pn.subVectors(e,t),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Pn.subVectors(s,t),Zn.subVectors(n,t),ro.subVectors(e,t);const a=Pn.dot(Pn),o=Pn.dot(Zn),c=Pn.dot(ro),l=Zn.dot(Zn),h=Zn.dot(ro),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-u-g,g,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Qn.x),c.addScaledVector(a,Qn.y),c.addScaledVector(o,Qn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return lo.setScalar(0),ho.setScalar(0),fo.setScalar(0),lo.fromBufferAttribute(e,t),ho.fromBufferAttribute(e,n),fo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(lo,r.x),a.addScaledVector(ho,r.y),a.addScaledVector(fo,r.z),a}static isFrontFacing(e,t,n,s){return Pn.subVectors(n,t),Zn.subVectors(e,t),Pn.cross(Zn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Pn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return In.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;gs.subVectors(s,n),_s.subVectors(r,n),ao.subVectors(e,n);const c=gs.dot(ao),l=_s.dot(ao);if(c<=0&&l<=0)return t.copy(n);oo.subVectors(e,s);const h=gs.dot(oo),d=_s.dot(oo);if(h>=0&&d<=h)return t.copy(s);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(gs,a);co.subVectors(e,r);const u=gs.dot(co),g=_s.dot(co);if(g>=0&&u<=g)return t.copy(r);const _=u*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(_s,o);const m=h*g-u*d;if(m<=0&&d-h>=0&&u-g>=0)return nh.subVectors(r,s),o=(d-h)/(d-h+(u-g)),t.copy(s).addScaledVector(nh,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(gs,a).addScaledVector(_s,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Or={h:0,s:0,l:0};function uo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=ap(e,1),t=cn(t,0,1),n=cn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=uo(a,r,e+1/3),this.g=uo(a,r,e),this.b=uo(a,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const n=Uf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return Qe.fromWorkingColorSpace(Wt.copy(this),e),Math.round(cn(Wt.r*255,0,255))*65536+Math.round(cn(Wt.g*255,0,255))*256+Math.round(cn(Wt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Wt.copy(this),t);const n=Wt.r,s=Wt.g,r=Wt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=qt){Qe.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,s=Wt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(Or);const n=Ya(yi.h,Or.h,t),s=Ya(yi.s,Or.s,t),r=Ya(yi.l,Or.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new ke;ke.NAMES=Uf;let Ep=0;class wr extends Gs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Er(),this.name="",this.blending=ts,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oo,this.blendDst=zo,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(n.blending=this.blending),this.side!==ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oo&&(n.blendSrc=this.blendSrc),this.blendDst!==zo&&(n.blendDst=this.blendDst),this.blendEquation!==Xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jt extends wr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new P,zr=new Xe;class ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bl,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ks(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),s=an(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bl&&(e.usage=this.usage),e}}class Nf extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ff extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Tp=0;const bn=new ht,po=new Ht,vs=new P,dn=new is,er=new is,Lt=new P;class sn extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kf(e)?Ff:Nf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return po.lookAt(e),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ft(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];er.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(dn.min,er.min),dn.expandByPoint(Lt),Lt.addVectors(dn.max,er.max),dn.expandByPoint(Lt)):(dn.expandByPoint(er.min),dn.expandByPoint(er.max))}dn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Lt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Lt.fromBufferAttribute(o,l),c&&(vs.fromBufferAttribute(e,l),Lt.add(vs)),s=Math.max(s,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let k=0;k<n.count;k++)o[k]=new P,c[k]=new P;const l=new P,h=new P,d=new P,f=new Xe,u=new Xe,g=new Xe,_=new P,m=new P;function p(k,w,M){l.fromBufferAttribute(n,k),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,M),f.fromBufferAttribute(r,k),u.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),h.sub(l),d.sub(l),u.sub(f),g.sub(f);const R=1/(u.x*g.y-g.x*u.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(R),m.copy(d).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(R),o[k].add(_),o[w].add(_),o[M].add(_),c[k].add(m),c[w].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let k=0,w=y.length;k<w;++k){const M=y[k],R=M.start,z=M.count;for(let U=R,j=R+z;U<j;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new P,v=new P,D=new P,T=new P;function A(k){D.fromBufferAttribute(s,k),T.copy(D);const w=o[k];x.copy(w),x.sub(D.multiplyScalar(D.dot(w))).normalize(),v.crossVectors(T,w);const R=v.dot(c[k])<0?-1:1;a.setXYZW(k,x.x,x.y,x.z,R)}for(let k=0,w=y.length;k<w;++k){const M=y[k],R=M.start,z=M.count;for(let U=R,j=R+z;U<j;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,d=new P;if(e)for(let f=0,u=e.count;f<u;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,u=t.count;f<u;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h);let u=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?u=c[_]*o.data.stride+o.offset:u=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[u++]}return new ln(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const f=l[h],u=e(f,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const u=l[d];h.push(u.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ih=new ht,zi=new _p,Br=new Tr,sh=new P,Hr=new P,Vr=new P,Gr=new P,mo=new P,Wr=new P,rh=new P,$r=new P;class De extends Ht{constructor(e=new sn,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Wr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(mo.fromBufferAttribute(d,e),a?Wr.addScaledVector(mo,h):Wr.addScaledVector(mo.sub(t),h))}t.add(Wr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(r),zi.copy(e.ray).recast(e.near),!(Br.containsPoint(zi.origin)===!1&&(zi.intersectSphere(Br,sh)===null||zi.origin.distanceToSquared(sh)>(e.far-e.near)**2))&&(ih.copy(r).invert(),zi.copy(e.ray).applyMatrix4(ih),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,u.start),x=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let v=y,D=x;v<D;v+=3){const T=o.getX(v),A=o.getX(v+1),k=o.getX(v+2);s=Xr(this,p,e,n,l,h,d,T,A,k),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);s=Xr(this,a,e,n,l,h,d,y,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,u.start),x=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let v=y,D=x;v<D;v+=3){const T=v,A=v+1,k=v+2;s=Xr(this,p,e,n,l,h,d,T,A,k),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,u.start),_=Math.min(c.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){const y=m,x=m+1,v=m+2;s=Xr(this,a,e,n,l,h,d,y,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function wp(i,e,t,n,s,r,a,o){let c;if(e.side===tn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===ki,o),c===null)return null;$r.copy(o),$r.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo($r);return l<t.near||l>t.far?null:{distance:l,point:$r.clone(),object:i}}function Xr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Hr),i.getVertexPosition(c,Vr),i.getVertexPosition(l,Gr);const h=wp(i,e,t,n,Hr,Vr,Gr,rh);if(h){const d=new P;In.getBarycoord(rh,Hr,Vr,Gr,d),s&&(h.uv=In.getInterpolatedAttribute(s,o,c,l,d,new Xe)),r&&(h.uv1=In.getInterpolatedAttribute(r,o,c,l,d,new Xe)),a&&(h.normal=In.getInterpolatedAttribute(a,o,c,l,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new P,materialIndex:0};In.getNormal(Hr,Vr,Gr,f.normal),h.face=f,h.barycoord=d}return h}class Bn extends sn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let f=0,u=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(d,2));function g(_,m,p,y,x,v,D,T,A,k,w){const M=v/A,R=D/k,z=v/2,U=D/2,j=T/2,q=A+1,$=k+1;let ee=0,I=0;const K=new P;for(let ae=0;ae<$;ae++){const xe=ae*R-U;for(let Ue=0;Ue<q;Ue++){const Ke=Ue*M-z;K[_]=Ke*y,K[m]=xe*x,K[p]=j,l.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[p]=T>0?1:-1,h.push(K.x,K.y,K.z),d.push(Ue/A),d.push(1-ae/k),ee+=1}}for(let ae=0;ae<k;ae++)for(let xe=0;xe<A;xe++){const Ue=f+xe+q*ae,Ke=f+xe+q*(ae+1),X=f+(xe+1)+q*(ae+1),ne=f+(xe+1)+q*ae;c.push(Ue,Ke,ne),c.push(Ke,X,ne),I+=6}o.addGroup(u,I,w),u+=I,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Kt(i){const e={};for(let t=0;t<i.length;t++){const n=Bs(i[t]);for(const s in n)e[s]=n[s]}return e}function Cp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Of(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Ap={clone:Bs,merge:Kt};var Rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends wr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rp,this.fragmentShader=Pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=Cp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class zf extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new P,ah=new Xe,oh=new Xe;class En extends zf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sc*2*Math.atan(Math.tan(qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,ah,oh),t.subVectors(oh,ah)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xs=-90,ys=1;class kp extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(xs,ys,e,t);s.layers=this.layers,this.add(s);const r=new En(xs,ys,e,t);r.layers=this.layers,this.add(r);const a=new En(xs,ys,e,t);a.layers=this.layers,this.add(a);const o=new En(xs,ys,e,t);o.layers=this.layers,this.add(o);const c=new En(xs,ys,e,t);c.layers=this.layers,this.add(c);const l=new En(xs,ys,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bf extends zt{constructor(e,t,n,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ns,super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dp extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Bf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bn(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Ri});r.uniforms.tEquirect.value=t;const a=new De(s,r),o=t.minFilter;return t.minFilter===Ji&&(t.minFilter=Hn),new kp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const go=new P,Ip=new P,Lp=new He;class Wi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=go.subVectors(n,t).cross(Ip.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(go),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lp.getNormalMatrix(e),s=this.coplanarPoint(go).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new Tr,jr=new P;class tl{constructor(e=new Wi,t=new Wi,n=new Wi,s=new Wi,r=new Wi,a=new Wi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],d=s[6],f=s[7],u=s[8],g=s[9],_=s[10],m=s[11],p=s[12],y=s[13],x=s[14],v=s[15];if(n[0].setComponents(c-r,f-l,m-u,v-p).normalize(),n[1].setComponents(c+r,f+l,m+u,v+p).normalize(),n[2].setComponents(c+a,f+h,m+g,v+y).normalize(),n[3].setComponents(c-a,f-h,m-g,v-y).normalize(),n[4].setComponents(c-o,f-d,m-_,v-x).normalize(),t===ri)n[5].setComponents(c+o,f+d,m+_,v+x).normalize();else if(t===ba)n[5].setComponents(o,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(jr.x=s.normal.x>0?e.max.x:e.min.x,jr.y=s.normal.y>0?e.max.y:e.min.y,jr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Up(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((u,g)=>u.start-g.start);let f=0;for(let u=1;u<d.length;u++){const g=d[f],_=d[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,g=d.length;u<g;u++){const _=d[u];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class gn extends sn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,f=t/c,u=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*f-a;for(let x=0;x<l;x++){const v=x*d-r;g.push(v,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const x=y+l*p,v=y+l*(p+1),D=y+1+l*(p+1),T=y+1+l*p;u.push(x,v,T),u.push(v,D,T)}this.setIndex(u),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fp=`#ifdef USE_ALPHAHASH
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
#endif`,Op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vp=`#ifdef USE_AOMAP
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
#endif`,Gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wp=`#ifdef USE_BATCHING
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
#endif`,$p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yp=`#ifdef USE_IRIDESCENCE
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
#endif`,Kp=`#ifdef USE_BUMPMAP
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
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rm=`#define PI 3.141592653589793
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
} // validated`,am=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,om=`vec3 transformedNormal = objectNormal;
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
#endif`,cm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dm="gl_FragColor = linearToOutputTexel( gl_FragColor );",um=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gm=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sm=`#ifdef USE_GRADIENTMAP
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
}`,Em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cm=`uniform bool receiveShadow;
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
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Im=`PhysicalMaterial material;
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
#endif`,Lm=`struct PhysicalMaterial {
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
}`,Um=`
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
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Om=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$m=`#if defined( USE_POINTS_UV )
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
#endif`,Xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ym=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jm=`#ifdef USE_MORPHTARGETS
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
#endif`,Zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,e0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,s0=`#ifdef USE_NORMALMAP
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
#endif`,r0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y0=`float getShadowMask() {
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
}`,b0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M0=`#ifdef USE_SKINNING
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
#endif`,S0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,T0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,R0=`#ifdef USE_TRANSMISSION
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
#endif`,P0=`#ifdef USE_TRANSMISSION
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const U0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N0=`uniform sampler2D t2D;
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`#include <common>
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
}`,V0=`#if DEPTH_PACKING == 3200
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
}`,G0=`#define DISTANCE
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
}`,W0=`#define DISTANCE
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
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`uniform float scale;
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
}`,q0=`uniform vec3 diffuse;
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
}`,Y0=`#include <common>
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
}`,K0=`uniform vec3 diffuse;
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
}`,J0=`#define LAMBERT
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
}`,Z0=`#define LAMBERT
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
}`,Q0=`#define MATCAP
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
}`,eg=`#define MATCAP
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
}`,tg=`#define NORMAL
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
}`,ng=`#define NORMAL
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
}`,ig=`#define PHONG
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
}`,sg=`#define PHONG
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
}`,rg=`#define STANDARD
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
}`,ag=`#define STANDARD
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
}`,og=`#define TOON
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
}`,cg=`#define TOON
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
}`,lg=`uniform float size;
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
}`,hg=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,dg=`uniform vec3 color;
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
}`,ug=`uniform float rotation;
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
}`,pg=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Np,alphahash_pars_fragment:Fp,alphamap_fragment:Op,alphamap_pars_fragment:zp,alphatest_fragment:Bp,alphatest_pars_fragment:Hp,aomap_fragment:Vp,aomap_pars_fragment:Gp,batching_pars_vertex:Wp,batching_vertex:$p,begin_vertex:Xp,beginnormal_vertex:jp,bsdfs:qp,iridescence_fragment:Yp,bumpmap_pars_fragment:Kp,clipping_planes_fragment:Jp,clipping_planes_pars_fragment:Zp,clipping_planes_pars_vertex:Qp,clipping_planes_vertex:em,color_fragment:tm,color_pars_fragment:nm,color_pars_vertex:im,color_vertex:sm,common:rm,cube_uv_reflection_fragment:am,defaultnormal_vertex:om,displacementmap_pars_vertex:cm,displacementmap_vertex:lm,emissivemap_fragment:hm,emissivemap_pars_fragment:fm,colorspace_fragment:dm,colorspace_pars_fragment:um,envmap_fragment:pm,envmap_common_pars_fragment:mm,envmap_pars_fragment:gm,envmap_pars_vertex:_m,envmap_physical_pars_fragment:Am,envmap_vertex:vm,fog_vertex:xm,fog_pars_vertex:ym,fog_fragment:bm,fog_pars_fragment:Mm,gradientmap_pars_fragment:Sm,lightmap_pars_fragment:Em,lights_lambert_fragment:Tm,lights_lambert_pars_fragment:wm,lights_pars_begin:Cm,lights_toon_fragment:Rm,lights_toon_pars_fragment:Pm,lights_phong_fragment:km,lights_phong_pars_fragment:Dm,lights_physical_fragment:Im,lights_physical_pars_fragment:Lm,lights_fragment_begin:Um,lights_fragment_maps:Nm,lights_fragment_end:Fm,logdepthbuf_fragment:Om,logdepthbuf_pars_fragment:zm,logdepthbuf_pars_vertex:Bm,logdepthbuf_vertex:Hm,map_fragment:Vm,map_pars_fragment:Gm,map_particle_fragment:Wm,map_particle_pars_fragment:$m,metalnessmap_fragment:Xm,metalnessmap_pars_fragment:jm,morphinstance_vertex:qm,morphcolor_vertex:Ym,morphnormal_vertex:Km,morphtarget_pars_vertex:Jm,morphtarget_vertex:Zm,normal_fragment_begin:Qm,normal_fragment_maps:e0,normal_pars_fragment:t0,normal_pars_vertex:n0,normal_vertex:i0,normalmap_pars_fragment:s0,clearcoat_normal_fragment_begin:r0,clearcoat_normal_fragment_maps:a0,clearcoat_pars_fragment:o0,iridescence_pars_fragment:c0,opaque_fragment:l0,packing:h0,premultiplied_alpha_fragment:f0,project_vertex:d0,dithering_fragment:u0,dithering_pars_fragment:p0,roughnessmap_fragment:m0,roughnessmap_pars_fragment:g0,shadowmap_pars_fragment:_0,shadowmap_pars_vertex:v0,shadowmap_vertex:x0,shadowmask_pars_fragment:y0,skinbase_vertex:b0,skinning_pars_vertex:M0,skinning_vertex:S0,skinnormal_vertex:E0,specularmap_fragment:T0,specularmap_pars_fragment:w0,tonemapping_fragment:C0,tonemapping_pars_fragment:A0,transmission_fragment:R0,transmission_pars_fragment:P0,uv_pars_fragment:k0,uv_pars_vertex:D0,uv_vertex:I0,worldpos_vertex:L0,background_vert:U0,background_frag:N0,backgroundCube_vert:F0,backgroundCube_frag:O0,cube_vert:z0,cube_frag:B0,depth_vert:H0,depth_frag:V0,distanceRGBA_vert:G0,distanceRGBA_frag:W0,equirect_vert:$0,equirect_frag:X0,linedashed_vert:j0,linedashed_frag:q0,meshbasic_vert:Y0,meshbasic_frag:K0,meshlambert_vert:J0,meshlambert_frag:Z0,meshmatcap_vert:Q0,meshmatcap_frag:eg,meshnormal_vert:tg,meshnormal_frag:ng,meshphong_vert:ig,meshphong_frag:sg,meshphysical_vert:rg,meshphysical_frag:ag,meshtoon_vert:og,meshtoon_frag:cg,points_vert:lg,points_frag:hg,shadow_vert:fg,shadow_frag:dg,sprite_vert:ug,sprite_frag:pg},le={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},zn={basic:{uniforms:Kt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Kt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Kt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Kt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Kt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Kt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Kt([le.points,le.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Kt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Kt([le.common,le.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Kt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Kt([le.sprite,le.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Kt([le.common,le.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Kt([le.lights,le.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};zn.physical={uniforms:Kt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const qr={r:0,b:0,g:0},Hi=new Xn,mg=new ht;function gg(i,e,t,n,s,r,a){const o=new ke(0);let c=r===!0?0:1,l,h,d=null,f=0,u=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1;const v=g(y);v===null?p(o,c):v&&v.isColor&&(p(v,1),x=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===La)?(h===void 0&&(h=new De(new Bn(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Bs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Hi.copy(x.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mg.makeRotationFromEuler(Hi)),h.material.toneMapped=Qe.getTransfer(v.colorSpace)!==ot,(d!==v||f!==v.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,u=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new De(new gn(2,2),new Nn({name:"BackgroundMaterial",uniforms:Bs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(v.colorSpace)!==ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,f=v.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,x){y.getRGB(qr,Of(i)),n.buffers.color.setClear(qr.r,qr.g,qr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),c=x,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:_,addToRenderList:m}}function _g(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(M,R,z,U,j){let q=!1;const $=d(U,z,R);r!==$&&(r=$,l(r.object)),q=u(M,U,z,j),q&&g(M,U,z,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(M,R,z,U),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,R,z){const U=z.wireframe===!0;let j=n[M.id];j===void 0&&(j={},n[M.id]=j);let q=j[R.id];q===void 0&&(q={},j[R.id]=q);let $=q[U];return $===void 0&&($=f(c()),q[U]=$),$}function f(M){const R=[],z=[],U=[];for(let j=0;j<t;j++)R[j]=0,z[j]=0,U[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:U,object:M,attributes:{},index:null}}function u(M,R,z,U){const j=r.attributes,q=R.attributes;let $=0;const ee=z.getAttributes();for(const I in ee)if(ee[I].location>=0){const ae=j[I];let xe=q[I];if(xe===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor)),ae===void 0||ae.attribute!==xe||xe&&ae.data!==xe.data)return!0;$++}return r.attributesNum!==$||r.index!==U}function g(M,R,z,U){const j={},q=R.attributes;let $=0;const ee=z.getAttributes();for(const I in ee)if(ee[I].location>=0){let ae=q[I];ae===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));const xe={};xe.attribute=ae,ae&&ae.data&&(xe.data=ae.data),j[I]=xe,$++}r.attributes=j,r.attributesNum=$,r.index=U}function _(){const M=r.newAttributes;for(let R=0,z=M.length;R<z;R++)M[R]=0}function m(M){p(M,0)}function p(M,R){const z=r.newAttributes,U=r.enabledAttributes,j=r.attributeDivisors;z[M]=1,U[M]===0&&(i.enableVertexAttribArray(M),U[M]=1),j[M]!==R&&(i.vertexAttribDivisor(M,R),j[M]=R)}function y(){const M=r.newAttributes,R=r.enabledAttributes;for(let z=0,U=R.length;z<U;z++)R[z]!==M[z]&&(i.disableVertexAttribArray(z),R[z]=0)}function x(M,R,z,U,j,q,$){$===!0?i.vertexAttribIPointer(M,R,z,j,q):i.vertexAttribPointer(M,R,z,U,j,q)}function v(M,R,z,U){_();const j=U.attributes,q=z.getAttributes(),$=R.defaultAttributeValues;for(const ee in q){const I=q[ee];if(I.location>=0){let K=j[ee];if(K===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(K=M.instanceColor)),K!==void 0){const ae=K.normalized,xe=K.itemSize,Ue=e.get(K);if(Ue===void 0)continue;const Ke=Ue.buffer,X=Ue.type,ne=Ue.bytesPerElement,ye=X===i.INT||X===i.UNSIGNED_INT||K.gpuType===qc;if(K.isInterleavedBufferAttribute){const ce=K.data,Ae=ce.stride,Ne=K.offset;if(ce.isInstancedInterleavedBuffer){for(let $e=0;$e<I.locationSize;$e++)p(I.location+$e,ce.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let $e=0;$e<I.locationSize;$e++)m(I.location+$e);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let $e=0;$e<I.locationSize;$e++)x(I.location+$e,xe/I.locationSize,X,ae,Ae*ne,(Ne+xe/I.locationSize*$e)*ne,ye)}else{if(K.isInstancedBufferAttribute){for(let ce=0;ce<I.locationSize;ce++)p(I.location+ce,K.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ce=0;ce<I.locationSize;ce++)m(I.location+ce);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let ce=0;ce<I.locationSize;ce++)x(I.location+ce,xe/I.locationSize,X,ae,xe*ne,xe/I.locationSize*ce*ne,ye)}}else if($!==void 0){const ae=$[ee];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(I.location,ae);break;case 3:i.vertexAttrib3fv(I.location,ae);break;case 4:i.vertexAttrib4fv(I.location,ae);break;default:i.vertexAttrib1fv(I.location,ae)}}}}y()}function D(){k();for(const M in n){const R=n[M];for(const z in R){const U=R[z];for(const j in U)h(U[j].object),delete U[j];delete R[z]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const z in R){const U=R[z];for(const j in U)h(U[j].object),delete U[j];delete R[z]}delete n[M.id]}function A(M){for(const R in n){const z=n[R];if(z[M.id]===void 0)continue;const U=z[M.id];for(const j in U)h(U[j].object),delete U[j];delete z[M.id]}}function k(){w(),a=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:k,resetDefaultState:w,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function vg(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let u=0;for(let g=0;g<d;g++)u+=h[g];t.update(u,n,1)}function c(l,h,d,f){if(d===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{u.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function xg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Un&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const k=A===Sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==di&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Vn&&!k)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:D,maxSamples:T}}function yg(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Wi,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const y=r?0:n,x=y*4;let v=p.clippingState||null;c.value=v,v=h(g,f,x,u);for(let D=0;D!==x;++D)v[D]=t[D];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=u+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=u;x!==_;++x,v+=4)a.copy(d[x]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function bg(i){let e=new WeakMap;function t(a,o){return o===jo?a.mapping=Ns:o===qo&&(a.mapping=Fs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===jo||o===qo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Dp(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class nl extends zf{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ps=4,ch=[.125,.215,.35,.446,.526,.582],ji=20,_o=new nl,lh=new ke;let vo=null,xo=0,yo=0,bo=!1;const $i=(1+Math.sqrt(5))/2,bs=1/$i,hh=[new P(-$i,bs,0),new P($i,bs,0),new P(-bs,0,$i),new P(bs,0,$i),new P(0,$i,-bs),new P(0,$i,bs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class fh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){vo=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vo,xo,yo),this._renderer.xr.enabled=bo,e.scissorTest=!1,Yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vo=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Sr,format:Un,colorSpace:Vs,depthBuffer:!1},s=dh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mg(r)),this._blurMaterial=Sg(r,e,t)}return s}_compileMaterial(e){const t=new De(this._lodPlanes[0],e);this._renderer.compile(t,_o)}_sceneToCubeUV(e,t,n,s){const o=new En(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(lh),h.toneMapping=Pi,h.autoClear=!1;const u=new Jt({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new De(new Bn,u);let _=!1;const m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,_=!0):(u.color.copy(lh),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):y===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const x=this._cubeSize;Yr(s,y*x,p>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ns||e.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new De(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Yr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,_o)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=hh[(s-r-1)%hh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new De(this._lodPlanes[s],l),f=l.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*ji-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ji;m>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);const p=[];let y=0;for(let A=0;A<ji;++A){const k=A/_,w=Math.exp(-k*k/2);p.push(w),A===0?y+=w:A<m&&(y+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[s],D=3*v*(s>x-Ps?s-x+Ps:0),T=4*(this._cubeSize-v);Yr(t,D,T,3*v,2*v),c.setRenderTarget(t),c.render(d,_o)}}function Mg(i){const e=[],t=[],n=[];let s=i;const r=i-Ps+1+ch.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Ps?c=ch[a-i+Ps-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*u),x=new Float32Array(m*g*u),v=new Float32Array(p*g*u);for(let T=0;T<u;T++){const A=T%3*2/3-1,k=T>2?0:-1,w=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];y.set(w,_*g*T),x.set(f,m*g*T);const M=[T,T,T,T,T,T];v.set(M,p*g*T)}const D=new sn;D.setAttribute("position",new ln(y,_)),D.setAttribute("uv",new ln(x,m)),D.setAttribute("faceIndex",new ln(v,p)),e.push(D),s>Ps&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function dh(i,e,t){const n=new Di(i,e,t);return n.texture.mapping=La,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Sg(i,e,t){const n=new Float32Array(ji),s=new P(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:il(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function uh(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function ph(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function il(){return`

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
	`}function Eg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===jo||c===qo,h=c===Ns||c===Fs;if(l||h){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new fh(i)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const u=o.image;return l&&u&&u.height>0||h&&u&&s(u)?(t===null&&(t=new fh(i)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Tg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&or("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wg(i,e,t,n){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",a),delete s[f.id];const u=r.get(f);u&&(e.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const u=d.morphAttributes;for(const g in u){const _=u[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(d){const f=[],u=d.index,g=d.attributes.position;let _=0;if(u!==null){const y=u.array;_=u.version;for(let x=0,v=y.length;x<v;x+=3){const D=y[x+0],T=y[x+1],A=y[x+2];f.push(D,T,T,A,A,D)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const D=x+0,T=x+1,A=x+2;f.push(D,T,T,A,A,D)}}else return;const m=new(kf(f)?Ff:Nf)(f,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const f=r.get(d);if(f){const u=d.index;u!==null&&f.version<u.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Cg(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){i.drawElements(n,u,r,f*a),t.update(u,n,1)}function l(f,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,f*a,g),t.update(u,n,g))}function h(f,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];t.update(m,n,1)}function d(f,u,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,u[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,f,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=u[y]*_[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Ag(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Rg(i,e,t){const n=new WeakMap,s=new vt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let M=function(){k.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var u=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let D=o.attributes.position.count*v,T=1;D>e.maxTextureSize&&(T=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const A=new Float32Array(D*T*4*d),k=new If(A,D,T,d);k.type=Vn,k.needsUpdate=!0;const w=v*4;for(let R=0;R<d;R++){const z=p[R],U=y[R],j=x[R],q=D*T*4*R;for(let $=0;$<z.count;$++){const ee=$*w;g===!0&&(s.fromBufferAttribute(z,$),A[q+ee+0]=s.x,A[q+ee+1]=s.y,A[q+ee+2]=s.z,A[q+ee+3]=0),_===!0&&(s.fromBufferAttribute(U,$),A[q+ee+4]=s.x,A[q+ee+5]=s.y,A[q+ee+6]=s.z,A[q+ee+7]=0),m===!0&&(s.fromBufferAttribute(j,$),A[q+ee+8]=s.x,A[q+ee+9]=s.y,A[q+ee+10]=s.z,A[q+ee+11]=j.itemSize===4?s.w:1)}}f={count:d,texture:k,size:new Xe(D,T)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Pg(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class Vf extends zt{constructor(e,t,n,s,r,a,o,c,l,h=ks){if(h!==ks&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ks&&(n=ns),n===void 0&&h===zs&&(n=Os),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ot,this.minFilter=c!==void 0?c:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Gf=new zt,mh=new Vf(1,1),Wf=new If,$f=new mp,Xf=new Bf,gh=[],_h=[],vh=new Float32Array(16),xh=new Float32Array(9),yh=new Float32Array(4);function $s(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=gh[s];if(r===void 0&&(r=new Float32Array(s),gh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Na(i,e){let t=_h[e];t===void 0&&(t=new Int32Array(e),_h[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function kg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function Ig(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function Lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function Ug(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;yh.set(n),i.uniformMatrix2fv(this.addr,!1,yh),It(t,n)}}function Ng(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;xh.set(n),i.uniformMatrix3fv(this.addr,!1,xh),It(t,n)}}function Fg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;vh.set(n),i.uniformMatrix4fv(this.addr,!1,vh),It(t,n)}}function Og(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function Bg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function Hg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function Vg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function Wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function $g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function Xg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mh.compareFunction=Pf,r=mh):r=Gf,t.setTexture2D(e||r,s)}function jg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$f,s)}function qg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Xf,s)}function Yg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Wf,s)}function Kg(i){switch(i){case 5126:return kg;case 35664:return Dg;case 35665:return Ig;case 35666:return Lg;case 35674:return Ug;case 35675:return Ng;case 35676:return Fg;case 5124:case 35670:return Og;case 35667:case 35671:return zg;case 35668:case 35672:return Bg;case 35669:case 35673:return Hg;case 5125:return Vg;case 36294:return Gg;case 36295:return Wg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Yg}}function Jg(i,e){i.uniform1fv(this.addr,e)}function Zg(i,e){const t=$s(e,this.size,2);i.uniform2fv(this.addr,t)}function Qg(i,e){const t=$s(e,this.size,3);i.uniform3fv(this.addr,t)}function e_(i,e){const t=$s(e,this.size,4);i.uniform4fv(this.addr,t)}function t_(i,e){const t=$s(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function n_(i,e){const t=$s(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function i_(i,e){const t=$s(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function s_(i,e){i.uniform1iv(this.addr,e)}function r_(i,e){i.uniform2iv(this.addr,e)}function a_(i,e){i.uniform3iv(this.addr,e)}function o_(i,e){i.uniform4iv(this.addr,e)}function c_(i,e){i.uniform1uiv(this.addr,e)}function l_(i,e){i.uniform2uiv(this.addr,e)}function h_(i,e){i.uniform3uiv(this.addr,e)}function f_(i,e){i.uniform4uiv(this.addr,e)}function d_(i,e,t){const n=this.cache,s=e.length,r=Na(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Gf,r[a])}function u_(i,e,t){const n=this.cache,s=e.length,r=Na(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||$f,r[a])}function p_(i,e,t){const n=this.cache,s=e.length,r=Na(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Xf,r[a])}function m_(i,e,t){const n=this.cache,s=e.length,r=Na(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Wf,r[a])}function g_(i){switch(i){case 5126:return Jg;case 35664:return Zg;case 35665:return Qg;case 35666:return e_;case 35674:return t_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return s_;case 35667:case 35671:return r_;case 35668:case 35672:return a_;case 35669:case 35673:return o_;case 5125:return c_;case 36294:return l_;case 36295:return h_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}class __{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kg(t.type)}}class v_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=g_(t.type)}}class x_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Mo=/(\w+)(\])?(\[|\.)?/g;function bh(i,e){i.seq.push(e),i.map[e.id]=e}function y_(i,e,t){const n=i.name,s=n.length;for(Mo.lastIndex=0;;){const r=Mo.exec(n),a=Mo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){bh(t,l===void 0?new __(o,i,e):new v_(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new x_(o),bh(t,d)),t=d}}}class oa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);y_(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Mh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const b_=37297;let M_=0;function S_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Sh=new He;function E_(i){Qe._getMatrix(Sh,Qe.workingColorSpace,i);const e=`mat3( ${Sh.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Ua:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Eh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+S_(i.getShaderSource(e),a)}else return s}function T_(i,e){const t=E_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function w_(i,e){let t;switch(e){case Vu:t="Linear";break;case Gu:t="Reinhard";break;case Wu:t="Cineon";break;case $u:t="ACESFilmic";break;case ju:t="AgX";break;case qu:t="Neutral";break;case Xu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Kr=new P;function C_(){Qe.getLuminanceCoefficients(Kr);const i=Kr.x.toFixed(4),e=Kr.y.toFixed(4),t=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function R_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function P_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function cr(i){return i!==""}function Th(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(i){return i.replace(k_,I_)}const D_=new Map;function I_(i,e){let t=Ge[e];if(t===void 0){const n=D_.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ec(t)}const L_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(i){return i.replace(L_,U_)}function U_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ah(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function N_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===bu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function F_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ns:case Fs:e="ENVMAP_TYPE_CUBE";break;case La:e="ENVMAP_TYPE_CUBE_UV";break}return e}function O_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fs:e="ENVMAP_MODE_REFRACTION";break}return e}function z_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jc:e="ENVMAP_BLENDING_MULTIPLY";break;case Bu:e="ENVMAP_BLENDING_MIX";break;case Hu:e="ENVMAP_BLENDING_ADD";break}return e}function B_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function H_(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=N_(t),l=F_(t),h=O_(t),d=z_(t),f=B_(t),u=A_(t),g=R_(r),_=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(cr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(cr).join(`
`),p.length>0&&(p+=`
`)):(m=[Ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),p=[Ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Pi?w_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,T_("linearToOutputTexel",t.outputColorSpace),C_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cr).join(`
`)),a=Ec(a),a=Th(a,t),a=wh(a,t),o=Ec(o),o=Th(o,t),o=wh(o,t),a=Ch(a),o=Ch(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+a,v=y+p+o,D=Mh(s,s.VERTEX_SHADER,x),T=Mh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,D),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(R){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(D).trim(),j=s.getShaderInfoLog(T).trim();let q=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,T);else{const ee=Eh(s,D,"vertex"),I=Eh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+ee+`
`+I)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(U===""||j==="")&&($=!1);$&&(R.diagnostics={runnable:q,programLog:z,vertexShader:{log:U,prefix:m},fragmentShader:{log:j,prefix:p}})}s.deleteShader(D),s.deleteShader(T),k=new oa(s,_),w=P_(s,_)}let k;this.getUniforms=function(){return k===void 0&&A(this),k};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,b_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=M_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=T,this}let V_=0;class G_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new W_(e),t.set(e,n)),n}}class W_{constructor(e){this.id=V_++,this.code=e,this.usedTimes=0}}function $_(i,e,t,n,s,r,a){const o=new Lf,c=new G_,l=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let u=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,M,R,z,U){const j=z.fog,q=U.geometry,$=w.isMeshStandardMaterial?z.environment:null,ee=(w.isMeshStandardMaterial?t:e).get(w.envMap||$),I=ee&&ee.mapping===La?ee.image.height:null,K=g[w.type];w.precision!==null&&(u=s.getMaxPrecision(w.precision),u!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",u,"instead."));const ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xe=ae!==void 0?ae.length:0;let Ue=0;q.morphAttributes.position!==void 0&&(Ue=1),q.morphAttributes.normal!==void 0&&(Ue=2),q.morphAttributes.color!==void 0&&(Ue=3);let Ke,X,ne,ye;if(K){const at=zn[K];Ke=at.vertexShader,X=at.fragmentShader}else Ke=w.vertexShader,X=w.fragmentShader,c.update(w),ne=c.getVertexShaderID(w),ye=c.getFragmentShaderID(w);const ce=i.getRenderTarget(),Ae=i.state.buffers.depth.getReversed(),Ne=U.isInstancedMesh===!0,$e=U.isBatchedMesh===!0,xt=!!w.map,Je=!!w.matcap,Et=!!ee,B=!!w.aoMap,xn=!!w.lightMap,je=!!w.bumpMap,qe=!!w.normalMap,Re=!!w.displacementMap,pt=!!w.emissiveMap,we=!!w.metalnessMap,C=!!w.roughnessMap,b=w.anisotropy>0,H=w.clearcoat>0,Z=w.dispersion>0,te=w.iridescence>0,J=w.sheen>0,Ee=w.transmission>0,fe=b&&!!w.anisotropyMap,me=H&&!!w.clearcoatMap,Ze=H&&!!w.clearcoatNormalMap,ie=H&&!!w.clearcoatRoughnessMap,ge=te&&!!w.iridescenceMap,Pe=te&&!!w.iridescenceThicknessMap,Ie=J&&!!w.sheenColorMap,_e=J&&!!w.sheenRoughnessMap,Ye=!!w.specularMap,Ve=!!w.specularColorMap,dt=!!w.specularIntensityMap,L=Ee&&!!w.transmissionMap,he=Ee&&!!w.thicknessMap,W=!!w.gradientMap,Q=!!w.alphaMap,pe=w.alphaTest>0,de=!!w.alphaHash,ze=!!w.extensions;let yt=Pi;w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(yt=i.toneMapping);const Vt={shaderID:K,shaderType:w.type,shaderName:w.name,vertexShader:Ke,fragmentShader:X,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:ye,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:u,batching:$e,batchingColor:$e&&U._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&U.instanceColor!==null,instancingMorph:Ne&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Vs,alphaToCoverage:!!w.alphaToCoverage,map:xt,matcap:Je,envMap:Et,envMapMode:Et&&ee.mapping,envMapCubeUVHeight:I,aoMap:B,lightMap:xn,bumpMap:je,normalMap:qe,displacementMap:f&&Re,emissiveMap:pt,normalMapObjectSpace:qe&&w.normalMapType===Zu,normalMapTangentSpace:qe&&w.normalMapType===Rf,metalnessMap:we,roughnessMap:C,anisotropy:b,anisotropyMap:fe,clearcoat:H,clearcoatMap:me,clearcoatNormalMap:Ze,clearcoatRoughnessMap:ie,dispersion:Z,iridescence:te,iridescenceMap:ge,iridescenceThicknessMap:Pe,sheen:J,sheenColorMap:Ie,sheenRoughnessMap:_e,specularMap:Ye,specularColorMap:Ve,specularIntensityMap:dt,transmission:Ee,transmissionMap:L,thicknessMap:he,gradientMap:W,opaque:w.transparent===!1&&w.blending===ts&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:pe,alphaHash:de,combine:w.combine,mapUv:xt&&_(w.map.channel),aoMapUv:B&&_(w.aoMap.channel),lightMapUv:xn&&_(w.lightMap.channel),bumpMapUv:je&&_(w.bumpMap.channel),normalMapUv:qe&&_(w.normalMap.channel),displacementMapUv:Re&&_(w.displacementMap.channel),emissiveMapUv:pt&&_(w.emissiveMap.channel),metalnessMapUv:we&&_(w.metalnessMap.channel),roughnessMapUv:C&&_(w.roughnessMap.channel),anisotropyMapUv:fe&&_(w.anisotropyMap.channel),clearcoatMapUv:me&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(w.sheenRoughnessMap.channel),specularMapUv:Ye&&_(w.specularMap.channel),specularColorMapUv:Ve&&_(w.specularColorMap.channel),specularIntensityMapUv:dt&&_(w.specularIntensityMap.channel),transmissionMapUv:L&&_(w.transmissionMap.channel),thicknessMapUv:he&&_(w.thicknessMap.channel),alphaMapUv:Q&&_(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(qe||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!q.attributes.uv&&(xt||Q),fog:!!j,useFog:w.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ae,skinning:U.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ue,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,decodeVideoTexture:xt&&w.map.isVideoTexture===!0&&Qe.getTransfer(w.map.colorSpace)===ot,decodeVideoTextureEmissive:pt&&w.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(w.emissiveMap.colorSpace)===ot,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===mn,flipSided:w.side===tn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ze&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&w.extensions.multiDraw===!0||$e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function p(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)M.push(R),M.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(y(M,w),x(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function y(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function x(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),w.push(o.mask)}function v(w){const M=g[w.type];let R;if(M){const z=zn[M];R=Ap.clone(z.uniforms)}else R=w.uniforms;return R}function D(w,M){let R;for(let z=0,U=h.length;z<U;z++){const j=h[z];if(j.cacheKey===M){R=j,++R.usedTimes;break}}return R===void 0&&(R=new H_(i,M,w,r),h.push(R)),R}function T(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function A(w){c.remove(w)}function k(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:D,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:k}}function X_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function j_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Rh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ph(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,f,u,g,_,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:u,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=u,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function o(d,f,u,g,_,m){const p=a(d,f,u,g,_,m);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):t.push(p)}function c(d,f,u,g,_,m){const p=a(d,f,u,g,_,m);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):t.unshift(p)}function l(d,f){t.length>1&&t.sort(d||j_),n.length>1&&n.sort(f||Rh),s.length>1&&s.sort(f||Rh)}function h(){for(let d=e,f=i.length;d<f;d++){const u=i[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function q_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ph,i.set(n,[a])):s>=r.length?(a=new Ph,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Y_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ke};break;case"SpotLight":t={position:new P,direction:new P,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function K_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let J_=0;function Z_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Q_(i){const e=new Y_,t=K_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new ht,a=new ht;function o(l){let h=0,d=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let u=0,g=0,_=0,m=0,p=0,y=0,x=0,v=0,D=0,T=0,A=0;l.sort(Z_);for(let w=0,M=l.length;w<M;w++){const R=l[w],z=R.color,U=R.intensity,j=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=z.r*U,d+=z.g*U,f+=z.b*U;else if(R.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(R.sh.coefficients[$],U);A++}else if(R.isDirectionalLight){const $=e.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const ee=R.shadow,I=t.get(R);I.shadowIntensity=ee.intensity,I.shadowBias=ee.bias,I.shadowNormalBias=ee.normalBias,I.shadowRadius=ee.radius,I.shadowMapSize=ee.mapSize,n.directionalShadow[u]=I,n.directionalShadowMap[u]=q,n.directionalShadowMatrix[u]=R.shadow.matrix,y++}n.directional[u]=$,u++}else if(R.isSpotLight){const $=e.get(R);$.position.setFromMatrixPosition(R.matrixWorld),$.color.copy(z).multiplyScalar(U),$.distance=j,$.coneCos=Math.cos(R.angle),$.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),$.decay=R.decay,n.spot[_]=$;const ee=R.shadow;if(R.map&&(n.spotLightMap[D]=R.map,D++,ee.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[_]=ee.matrix,R.castShadow){const I=t.get(R);I.shadowIntensity=ee.intensity,I.shadowBias=ee.bias,I.shadowNormalBias=ee.normalBias,I.shadowRadius=ee.radius,I.shadowMapSize=ee.mapSize,n.spotShadow[_]=I,n.spotShadowMap[_]=q,v++}_++}else if(R.isRectAreaLight){const $=e.get(R);$.color.copy(z).multiplyScalar(U),$.halfWidth.set(R.width*.5,0,0),$.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=$,m++}else if(R.isPointLight){const $=e.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),$.distance=R.distance,$.decay=R.decay,R.castShadow){const ee=R.shadow,I=t.get(R);I.shadowIntensity=ee.intensity,I.shadowBias=ee.bias,I.shadowNormalBias=ee.normalBias,I.shadowRadius=ee.radius,I.shadowMapSize=ee.mapSize,I.shadowCameraNear=ee.camera.near,I.shadowCameraFar=ee.camera.far,n.pointShadow[g]=I,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=R.shadow.matrix,x++}n.point[g]=$,g++}else if(R.isHemisphereLight){const $=e.get(R);$.skyColor.copy(R.color).multiplyScalar(U),$.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[p]=$,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const k=n.hash;(k.directionalLength!==u||k.pointLength!==g||k.spotLength!==_||k.rectAreaLength!==m||k.hemiLength!==p||k.numDirectionalShadows!==y||k.numPointShadows!==x||k.numSpotShadows!==v||k.numSpotMaps!==D||k.numLightProbes!==A)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+D-T,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,k.directionalLength=u,k.pointLength=g,k.spotLength=_,k.rectAreaLength=m,k.hemiLength=p,k.numDirectionalShadows=y,k.numPointShadows=x,k.numSpotShadows=v,k.numSpotMaps=D,k.numLightProbes=A,n.version=J_++)}function c(l,h){let d=0,f=0,u=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const x=l[p];if(x.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(x.isSpotLight){const v=n.spot[u];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function kh(i){const e=new Q_(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function ev(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new kh(i),e.set(s,[o])):r>=a.length?(o=new kh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class tv extends wr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nv extends wr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sv=`uniform sampler2D shadow_pass;
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
}`;function rv(i,e,t){let n=new tl;const s=new Xe,r=new Xe,a=new vt,o=new tv({depthPacking:Ju}),c=new nv,l={},h=t.maxTextureSize,d={[ki]:tn,[tn]:ki,[mn]:mn},f=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:iv,fragmentShader:sv}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new De(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vf;let p=this.type;this.render=function(T,A,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Ri),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const U=p!==ei&&this.type===ei,j=p===ei&&this.type!==ei;for(let q=0,$=T.length;q<$;q++){const ee=T[q],I=ee.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const K=I.getFrameExtents();if(s.multiply(K),r.copy(I.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,I.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,I.mapSize.y=r.y)),I.map===null||U===!0||j===!0){const xe=this.type!==ei?{minFilter:Ot,magFilter:Ot}:{};I.map!==null&&I.map.dispose(),I.map=new Di(s.x,s.y,xe),I.map.texture.name=ee.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const ae=I.getViewportCount();for(let xe=0;xe<ae;xe++){const Ue=I.getViewport(xe);a.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),z.viewport(a),I.updateMatrices(ee,xe),n=I.getFrustum(),v(A,k,I.camera,ee,this.type)}I.isPointLightShadow!==!0&&this.type===ei&&y(I,k),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,M,R)};function y(T,A){const k=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Di(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,k,f,_,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,k,u,_,null)}function x(T,A,k,w){let M=null;const R=k.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)M=R;else if(M=k.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=M.uuid,U=A.uuid;let j=l[z];j===void 0&&(j={},l[z]=j);let q=j[U];q===void 0&&(q=M.clone(),j[U]=q,A.addEventListener("dispose",D)),M=q}if(M.visible=A.visible,M.wireframe=A.wireframe,w===ei?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,k.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=i.properties.get(M);z.light=k}return M}function v(T,A,k,w,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===ei)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld);const U=e.update(T),j=T.material;if(Array.isArray(j)){const q=U.groups;for(let $=0,ee=q.length;$<ee;$++){const I=q[$],K=j[I.materialIndex];if(K&&K.visible){const ae=x(T,K,w,M);T.onBeforeShadow(i,T,A,k,U,ae,I),i.renderBufferDirect(k,null,U,ae,T,I),T.onAfterShadow(i,T,A,k,U,ae,I)}}}else if(j.visible){const q=x(T,j,w,M);T.onBeforeShadow(i,T,A,k,U,q,null),i.renderBufferDirect(k,null,U,q,T,null),T.onAfterShadow(i,T,A,k,U,q,null)}}const z=T.children;for(let U=0,j=z.length;U<j;U++)v(z[U],A,k,w,M)}function D(T){T.target.removeEventListener("dispose",D);for(const k in l){const w=l[k],M=T.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const av={[Bo]:Ho,[Vo]:$o,[Go]:Xo,[Us]:Wo,[Ho]:Bo,[$o]:Vo,[Xo]:Go,[Wo]:Us};function ov(i,e){function t(){let L=!1;const he=new vt;let W=null;const Q=new vt(0,0,0,0);return{setMask:function(pe){W!==pe&&!L&&(i.colorMask(pe,pe,pe,pe),W=pe)},setLocked:function(pe){L=pe},setClear:function(pe,de,ze,yt,Vt){Vt===!0&&(pe*=yt,de*=yt,ze*=yt),he.set(pe,de,ze,yt),Q.equals(he)===!1&&(i.clearColor(pe,de,ze,yt),Q.copy(he))},reset:function(){L=!1,W=null,Q.set(-1,0,0,0)}}}function n(){let L=!1,he=!1,W=null,Q=null,pe=null;return{setReversed:function(de){if(he!==de){const ze=e.get("EXT_clip_control");he?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const yt=pe;pe=null,this.setClear(yt)}he=de},getReversed:function(){return he},setTest:function(de){de?ce(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(de){W!==de&&!L&&(i.depthMask(de),W=de)},setFunc:function(de){if(he&&(de=av[de]),Q!==de){switch(de){case Bo:i.depthFunc(i.NEVER);break;case Ho:i.depthFunc(i.ALWAYS);break;case Vo:i.depthFunc(i.LESS);break;case Us:i.depthFunc(i.LEQUAL);break;case Go:i.depthFunc(i.EQUAL);break;case Wo:i.depthFunc(i.GEQUAL);break;case $o:i.depthFunc(i.GREATER);break;case Xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=de}},setLocked:function(de){L=de},setClear:function(de){pe!==de&&(he&&(de=1-de),i.clearDepth(de),pe=de)},reset:function(){L=!1,W=null,Q=null,pe=null,he=!1}}}function s(){let L=!1,he=null,W=null,Q=null,pe=null,de=null,ze=null,yt=null,Vt=null;return{setTest:function(at){L||(at?ce(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(at){he!==at&&!L&&(i.stencilMask(at),he=at)},setFunc:function(at,wn,jn){(W!==at||Q!==wn||pe!==jn)&&(i.stencilFunc(at,wn,jn),W=at,Q=wn,pe=jn)},setOp:function(at,wn,jn){(de!==at||ze!==wn||yt!==jn)&&(i.stencilOp(at,wn,jn),de=at,ze=wn,yt=jn)},setLocked:function(at){L=at},setClear:function(at){Vt!==at&&(i.clearStencil(at),Vt=at)},reset:function(){L=!1,he=null,W=null,Q=null,pe=null,de=null,ze=null,yt=null,Vt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,u=[],g=null,_=!1,m=null,p=null,y=null,x=null,v=null,D=null,T=null,A=new ke(0,0,0),k=0,w=!1,M=null,R=null,z=null,U=null,j=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ee=0;const I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(I)[1]),$=ee>=1):I.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),$=ee>=2);let K=null,ae={};const xe=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),Ke=new vt().fromArray(xe),X=new vt().fromArray(Ue);function ne(L,he,W,Q){const pe=new Uint8Array(4),de=i.createTexture();i.bindTexture(L,de),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<W;ze++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(he+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return de}const ye={};ye[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(i.DEPTH_TEST),a.setFunc(Us),je(!1),qe(Nl),ce(i.CULL_FACE),B(Ri);function ce(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Ae(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Ne(L,he){return d[L]!==he?(i.bindFramebuffer(L,he),d[L]=he,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=he),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=he),!0):!1}function $e(L,he){let W=u,Q=!1;if(L){W=f.get(he),W===void 0&&(W=[],f.set(he,W));const pe=L.textures;if(W.length!==pe.length||W[0]!==i.COLOR_ATTACHMENT0){for(let de=0,ze=pe.length;de<ze;de++)W[de]=i.COLOR_ATTACHMENT0+de;W.length=pe.length,Q=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,Q=!0);Q&&i.drawBuffers(W)}function xt(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const Je={[Xi]:i.FUNC_ADD,[Su]:i.FUNC_SUBTRACT,[Eu]:i.FUNC_REVERSE_SUBTRACT};Je[Tu]=i.MIN,Je[wu]=i.MAX;const Et={[Cu]:i.ZERO,[Au]:i.ONE,[Ru]:i.SRC_COLOR,[Oo]:i.SRC_ALPHA,[Uu]:i.SRC_ALPHA_SATURATE,[Iu]:i.DST_COLOR,[ku]:i.DST_ALPHA,[Pu]:i.ONE_MINUS_SRC_COLOR,[zo]:i.ONE_MINUS_SRC_ALPHA,[Lu]:i.ONE_MINUS_DST_COLOR,[Du]:i.ONE_MINUS_DST_ALPHA,[Nu]:i.CONSTANT_COLOR,[Fu]:i.ONE_MINUS_CONSTANT_COLOR,[Ou]:i.CONSTANT_ALPHA,[zu]:i.ONE_MINUS_CONSTANT_ALPHA};function B(L,he,W,Q,pe,de,ze,yt,Vt,at){if(L===Ri){_===!0&&(Ae(i.BLEND),_=!1);return}if(_===!1&&(ce(i.BLEND),_=!0),L!==Mu){if(L!==m||at!==w){if((p!==Xi||v!==Xi)&&(i.blendEquation(i.FUNC_ADD),p=Xi,v=Xi),at)switch(L){case ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fo:i.blendFunc(i.ONE,i.ONE);break;case Fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ol:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,x=null,D=null,T=null,A.set(0,0,0),k=0,m=L,w=at}return}pe=pe||he,de=de||W,ze=ze||Q,(he!==p||pe!==v)&&(i.blendEquationSeparate(Je[he],Je[pe]),p=he,v=pe),(W!==y||Q!==x||de!==D||ze!==T)&&(i.blendFuncSeparate(Et[W],Et[Q],Et[de],Et[ze]),y=W,x=Q,D=de,T=ze),(yt.equals(A)===!1||Vt!==k)&&(i.blendColor(yt.r,yt.g,yt.b,Vt),A.copy(yt),k=Vt),m=L,w=!1}function xn(L,he){L.side===mn?Ae(i.CULL_FACE):ce(i.CULL_FACE);let W=L.side===tn;he&&(W=!W),je(W),L.blending===ts&&L.transparent===!1?B(Ri):B(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const Q=L.stencilWrite;o.setTest(Q),Q&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),pt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function qe(L){L!==xu?(ce(i.CULL_FACE),L!==R&&(L===Nl?i.cullFace(i.BACK):L===yu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),R=L}function Re(L){L!==z&&($&&i.lineWidth(L),z=L)}function pt(L,he,W){L?(ce(i.POLYGON_OFFSET_FILL),(U!==he||j!==W)&&(i.polygonOffset(he,W),U=he,j=W)):Ae(i.POLYGON_OFFSET_FILL)}function we(L){L?ce(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function C(L){L===void 0&&(L=i.TEXTURE0+q-1),K!==L&&(i.activeTexture(L),K=L)}function b(L,he,W){W===void 0&&(K===null?W=i.TEXTURE0+q-1:W=K);let Q=ae[W];Q===void 0&&(Q={type:void 0,texture:void 0},ae[W]=Q),(Q.type!==L||Q.texture!==he)&&(K!==W&&(i.activeTexture(W),K=W),i.bindTexture(L,he||ye[L]),Q.type=L,Q.texture=he)}function H(){const L=ae[K];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ze(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(L){Ke.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Ke.copy(L))}function _e(L){X.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),X.copy(L))}function Ye(L,he){let W=l.get(he);W===void 0&&(W=new WeakMap,l.set(he,W));let Q=W.get(L);Q===void 0&&(Q=i.getUniformBlockIndex(he,L.name),W.set(L,Q))}function Ve(L,he){const Q=l.get(he).get(L);c.get(he)!==Q&&(i.uniformBlockBinding(he,Q,L.__bindingPointIndex),c.set(he,Q))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},K=null,ae={},d={},f=new WeakMap,u=[],g=null,_=!1,m=null,p=null,y=null,x=null,v=null,D=null,T=null,A=new ke(0,0,0),k=0,w=!1,M=null,R=null,z=null,U=null,j=null,Ke.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ce,disable:Ae,bindFramebuffer:Ne,drawBuffers:$e,useProgram:xt,setBlending:B,setMaterial:xn,setFlipSided:je,setCullFace:qe,setLineWidth:Re,setPolygonOffset:pt,setScissorTest:we,activeTexture:C,bindTexture:b,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:te,texImage2D:ge,texImage3D:Pe,updateUBOMapping:Ye,uniformBlockBinding:Ve,texStorage2D:Ze,texStorage3D:ie,texSubImage2D:J,texSubImage3D:Ee,compressedTexSubImage2D:fe,compressedTexSubImage3D:me,scissor:Ie,viewport:_e,reset:dt}}function Dh(i,e,t,n){const s=cv(n);switch(t){case Sf:return i*e;case Tf:return i*e;case wf:return i*e*2;case Jc:return i*e/s.components*s.byteLength;case Zc:return i*e/s.components*s.byteLength;case Cf:return i*e*2/s.components*s.byteLength;case Qc:return i*e*2/s.components*s.byteLength;case Ef:return i*e*3/s.components*s.byteLength;case Un:return i*e*4/s.components*s.byteLength;case el:return i*e*4/s.components*s.byteLength;case na:case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case sa:case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zo:case ec:return Math.max(i,16)*Math.max(e,8)/4;case Jo:case Qo:return Math.max(i,8)*Math.max(e,8)/2;case tc:case nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ac:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case cc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case fc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case uc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case pc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _c:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case aa:case vc:case xc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Af:case yc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case bc:case Mc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cv(i){switch(i){case di:case yf:return{byteLength:1,components:1};case vr:case bf:case Sr:return{byteLength:2,components:1};case Yc:case Kc:return{byteLength:2,components:4};case ns:case qc:case Vn:return{byteLength:4,components:1};case Mf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function lv(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,h=new WeakMap;let d;const f=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return u?new OffscreenCanvas(C,b):Ma("canvas")}function _(C,b,H){let Z=1;const te=we(C);if((te.width>H||te.height>H)&&(Z=H/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(Z*te.width),Ee=Math.floor(Z*te.height);d===void 0&&(d=g(J,Ee));const fe=b?g(J,Ee):d;return fe.width=J,fe.height=Ee,fe.getContext("2d").drawImage(C,0,0,J,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+J+"x"+Ee+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(C,b,H,Z,te=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=b;if(b===i.RED&&(H===i.FLOAT&&(J=i.R32F),H===i.HALF_FLOAT&&(J=i.R16F),H===i.UNSIGNED_BYTE&&(J=i.R8)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.R8UI),H===i.UNSIGNED_SHORT&&(J=i.R16UI),H===i.UNSIGNED_INT&&(J=i.R32UI),H===i.BYTE&&(J=i.R8I),H===i.SHORT&&(J=i.R16I),H===i.INT&&(J=i.R32I)),b===i.RG&&(H===i.FLOAT&&(J=i.RG32F),H===i.HALF_FLOAT&&(J=i.RG16F),H===i.UNSIGNED_BYTE&&(J=i.RG8)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RG8UI),H===i.UNSIGNED_SHORT&&(J=i.RG16UI),H===i.UNSIGNED_INT&&(J=i.RG32UI),H===i.BYTE&&(J=i.RG8I),H===i.SHORT&&(J=i.RG16I),H===i.INT&&(J=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGB8UI),H===i.UNSIGNED_SHORT&&(J=i.RGB16UI),H===i.UNSIGNED_INT&&(J=i.RGB32UI),H===i.BYTE&&(J=i.RGB8I),H===i.SHORT&&(J=i.RGB16I),H===i.INT&&(J=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),H===i.UNSIGNED_INT&&(J=i.RGBA32UI),H===i.BYTE&&(J=i.RGBA8I),H===i.SHORT&&(J=i.RGBA16I),H===i.INT&&(J=i.RGBA32I)),b===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),b===i.RGBA){const Ee=te?Ua:Qe.getTransfer(Z);H===i.FLOAT&&(J=i.RGBA32F),H===i.HALF_FLOAT&&(J=i.RGBA16F),H===i.UNSIGNED_BYTE&&(J=Ee===ot?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(C,b){let H;return C?b===null||b===ns||b===Os?H=i.DEPTH24_STENCIL8:b===Vn?H=i.DEPTH32F_STENCIL8:b===vr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ns||b===Os?H=i.DEPTH_COMPONENT24:b===Vn?H=i.DEPTH_COMPONENT32F:b===vr&&(H=i.DEPTH_COMPONENT16),H}function D(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ot&&C.minFilter!==Hn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function T(C){const b=C.target;b.removeEventListener("dispose",T),k(b),b.isVideoTexture&&h.delete(b)}function A(C){const b=C.target;b.removeEventListener("dispose",A),M(b)}function k(C){const b=n.get(C);if(b.__webglInit===void 0)return;const H=C.source,Z=f.get(H);if(Z){const te=Z[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(C),Object.keys(Z).length===0&&f.delete(H)}n.remove(C)}function w(C){const b=n.get(C);i.deleteTexture(b.__webglTexture);const H=C.source,Z=f.get(H);delete Z[b.__cacheKey],a.memory.textures--}function M(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let te=0;te<b.__webglFramebuffer[Z].length;te++)i.deleteFramebuffer(b.__webglFramebuffer[Z][te]);else i.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)i.deleteFramebuffer(b.__webglFramebuffer[Z]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const H=C.textures;for(let Z=0,te=H.length;Z<te;Z++){const J=n.get(H[Z]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(H[Z])}n.remove(C)}let R=0;function z(){R=0}function U(){const C=R;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),R+=1,C}function j(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function q(C,b){const H=n.get(C);if(C.isVideoTexture&&Re(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(H,C,b);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function $(C,b){const H=n.get(C);if(C.version>0&&H.__version!==C.version){X(H,C,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function ee(C,b){const H=n.get(C);if(C.version>0&&H.__version!==C.version){X(H,C,b);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function I(C,b){const H=n.get(C);if(C.version>0&&H.__version!==C.version){ne(H,C,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}const K={[Yo]:i.REPEAT,[Ki]:i.CLAMP_TO_EDGE,[Ko]:i.MIRRORED_REPEAT},ae={[Ot]:i.NEAREST,[Yu]:i.NEAREST_MIPMAP_NEAREST,[Pr]:i.NEAREST_MIPMAP_LINEAR,[Hn]:i.LINEAR,[ja]:i.LINEAR_MIPMAP_NEAREST,[Ji]:i.LINEAR_MIPMAP_LINEAR},xe={[Qu]:i.NEVER,[rp]:i.ALWAYS,[ep]:i.LESS,[Pf]:i.LEQUAL,[tp]:i.EQUAL,[sp]:i.GEQUAL,[np]:i.GREATER,[ip]:i.NOTEQUAL};function Ue(C,b){if(b.type===Vn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Hn||b.magFilter===ja||b.magFilter===Pr||b.magFilter===Ji||b.minFilter===Hn||b.minFilter===ja||b.minFilter===Pr||b.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,K[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,K[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,K[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ae[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ae[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,xe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ot||b.minFilter!==Pr&&b.minFilter!==Ji||b.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ke(C,b){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",T));const Z=b.source;let te=f.get(Z);te===void 0&&(te={},f.set(Z,te));const J=j(b);if(J!==C.__cacheKey){te[J]===void 0&&(te[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),te[J].usedTimes++;const Ee=te[C.__cacheKey];Ee!==void 0&&(te[C.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(b)),C.__cacheKey=J,C.__webglTexture=te[J].texture}return H}function X(C,b,H){let Z=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=i.TEXTURE_3D);const te=Ke(C,b),J=b.source;t.bindTexture(Z,C.__webglTexture,i.TEXTURE0+H);const Ee=n.get(J);if(J.version!==Ee.__version||te===!0){t.activeTexture(i.TEXTURE0+H);const fe=Qe.getPrimaries(Qe.workingColorSpace),me=b.colorSpace===Ti?null:Qe.getPrimaries(b.colorSpace),Ze=b.colorSpace===Ti||fe===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let ie=_(b.image,!1,s.maxTextureSize);ie=pt(b,ie);const ge=r.convert(b.format,b.colorSpace),Pe=r.convert(b.type);let Ie=x(b.internalFormat,ge,Pe,b.colorSpace,b.isVideoTexture);Ue(Z,b);let _e;const Ye=b.mipmaps,Ve=b.isVideoTexture!==!0,dt=Ee.__version===void 0||te===!0,L=J.dataReady,he=D(b,ie);if(b.isDepthTexture)Ie=v(b.format===zs,b.type),dt&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,Ie,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Ie,ie.width,ie.height,0,ge,Pe,null));else if(b.isDataTexture)if(Ye.length>0){Ve&&dt&&t.texStorage2D(i.TEXTURE_2D,he,Ie,Ye[0].width,Ye[0].height);for(let W=0,Q=Ye.length;W<Q;W++)_e=Ye[W],Ve?L&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,_e.width,_e.height,ge,Pe,_e.data):t.texImage2D(i.TEXTURE_2D,W,Ie,_e.width,_e.height,0,ge,Pe,_e.data);b.generateMipmaps=!1}else Ve?(dt&&t.texStorage2D(i.TEXTURE_2D,he,Ie,ie.width,ie.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,ge,Pe,ie.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,ie.width,ie.height,0,ge,Pe,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ve&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Ie,Ye[0].width,Ye[0].height,ie.depth);for(let W=0,Q=Ye.length;W<Q;W++)if(_e=Ye[W],b.format!==Un)if(ge!==null)if(Ve){if(L)if(b.layerUpdates.size>0){const pe=Dh(_e.width,_e.height,b.format,b.type);for(const de of b.layerUpdates){const ze=_e.data.subarray(de*pe/_e.data.BYTES_PER_ELEMENT,(de+1)*pe/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,de,_e.width,_e.height,1,ge,ze)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,ie.depth,ge,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ie,_e.width,_e.height,ie.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,ie.depth,ge,Pe,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Ie,_e.width,_e.height,ie.depth,0,ge,Pe,_e.data)}else{Ve&&dt&&t.texStorage2D(i.TEXTURE_2D,he,Ie,Ye[0].width,Ye[0].height);for(let W=0,Q=Ye.length;W<Q;W++)_e=Ye[W],b.format!==Un?ge!==null?Ve?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Ie,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?L&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,_e.width,_e.height,ge,Pe,_e.data):t.texImage2D(i.TEXTURE_2D,W,Ie,_e.width,_e.height,0,ge,Pe,_e.data)}else if(b.isDataArrayTexture)if(Ve){if(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Ie,ie.width,ie.height,ie.depth),L)if(b.layerUpdates.size>0){const W=Dh(ie.width,ie.height,b.format,b.type);for(const Q of b.layerUpdates){const pe=ie.data.subarray(Q*W/ie.data.BYTES_PER_ELEMENT,(Q+1)*W/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,ge,Pe,pe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,Pe,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,ie.width,ie.height,ie.depth,0,ge,Pe,ie.data);else if(b.isData3DTexture)Ve?(dt&&t.texStorage3D(i.TEXTURE_3D,he,Ie,ie.width,ie.height,ie.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,Pe,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,ie.width,ie.height,ie.depth,0,ge,Pe,ie.data);else if(b.isFramebufferTexture){if(dt)if(Ve)t.texStorage2D(i.TEXTURE_2D,he,Ie,ie.width,ie.height);else{let W=ie.width,Q=ie.height;for(let pe=0;pe<he;pe++)t.texImage2D(i.TEXTURE_2D,pe,Ie,W,Q,0,ge,Pe,null),W>>=1,Q>>=1}}else if(Ye.length>0){if(Ve&&dt){const W=we(Ye[0]);t.texStorage2D(i.TEXTURE_2D,he,Ie,W.width,W.height)}for(let W=0,Q=Ye.length;W<Q;W++)_e=Ye[W],Ve?L&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ge,Pe,_e):t.texImage2D(i.TEXTURE_2D,W,Ie,ge,Pe,_e);b.generateMipmaps=!1}else if(Ve){if(dt){const W=we(ie);t.texStorage2D(i.TEXTURE_2D,he,Ie,W.width,W.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Pe,ie)}else t.texImage2D(i.TEXTURE_2D,0,Ie,ge,Pe,ie);m(b)&&p(Z),Ee.__version=J.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ne(C,b,H){if(b.image.length!==6)return;const Z=Ke(C,b),te=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);const J=n.get(te);if(te.version!==J.__version||Z===!0){t.activeTexture(i.TEXTURE0+H);const Ee=Qe.getPrimaries(Qe.workingColorSpace),fe=b.colorSpace===Ti?null:Qe.getPrimaries(b.colorSpace),me=b.colorSpace===Ti||Ee===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ze=b.isCompressedTexture||b.image[0].isCompressedTexture,ie=b.image[0]&&b.image[0].isDataTexture,ge=[];for(let Q=0;Q<6;Q++)!Ze&&!ie?ge[Q]=_(b.image[Q],!0,s.maxCubemapSize):ge[Q]=ie?b.image[Q].image:b.image[Q],ge[Q]=pt(b,ge[Q]);const Pe=ge[0],Ie=r.convert(b.format,b.colorSpace),_e=r.convert(b.type),Ye=x(b.internalFormat,Ie,_e,b.colorSpace),Ve=b.isVideoTexture!==!0,dt=J.__version===void 0||Z===!0,L=te.dataReady;let he=D(b,Pe);Ue(i.TEXTURE_CUBE_MAP,b);let W;if(Ze){Ve&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ye,Pe.width,Pe.height);for(let Q=0;Q<6;Q++){W=ge[Q].mipmaps;for(let pe=0;pe<W.length;pe++){const de=W[pe];b.format!==Un?Ie!==null?Ve?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,0,0,de.width,de.height,Ie,de.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,Ye,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,0,0,de.width,de.height,Ie,_e,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,Ye,de.width,de.height,0,Ie,_e,de.data)}}}else{if(W=b.mipmaps,Ve&&dt){W.length>0&&he++;const Q=we(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ye,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){Ve?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ge[Q].width,ge[Q].height,Ie,_e,ge[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ye,ge[Q].width,ge[Q].height,0,Ie,_e,ge[Q].data);for(let pe=0;pe<W.length;pe++){const ze=W[pe].image[Q].image;Ve?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,0,0,ze.width,ze.height,Ie,_e,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,Ye,ze.width,ze.height,0,Ie,_e,ze.data)}}else{Ve?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ie,_e,ge[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ye,Ie,_e,ge[Q]);for(let pe=0;pe<W.length;pe++){const de=W[pe];Ve?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,0,0,Ie,_e,de.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,Ye,Ie,_e,de.image[Q])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),J.__version=te.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ye(C,b,H,Z,te,J){const Ee=r.convert(H.format,H.colorSpace),fe=r.convert(H.type),me=x(H.internalFormat,Ee,fe,H.colorSpace),Ze=n.get(b),ie=n.get(H);if(ie.__renderTarget=b,!Ze.__hasExternalTextures){const ge=Math.max(1,b.width>>J),Pe=Math.max(1,b.height>>J);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,J,me,ge,Pe,b.depth,0,Ee,fe,null):t.texImage2D(te,J,me,ge,Pe,0,Ee,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),qe(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,te,ie.__webglTexture,0,je(b)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,te,ie.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(C,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){const Z=b.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,J=v(b.stencilBuffer,te),Ee=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=je(b);qe(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,J,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,J,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,J,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,C)}else{const Z=b.textures;for(let te=0;te<Z.length;te++){const J=Z[te],Ee=r.convert(J.format,J.colorSpace),fe=r.convert(J.type),me=x(J.internalFormat,Ee,fe,J.colorSpace),Ze=je(b);H&&qe(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,me,b.width,b.height):qe(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze,me,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,me,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(b.depthTexture);Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);const te=Z.__webglTexture,J=je(b);if(b.depthTexture.format===ks)qe(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(b.depthTexture.format===zs)qe(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ne(C){const b=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const te=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),b.__depthDisposeCallback=te}b.__boundDepthTexture=Z}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ae(b.__webglFramebuffer,C)}else if(H){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=i.createRenderbuffer(),ce(b.__webglDepthbuffer[Z],C,!1);else{const te=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,J)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ce(b.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(C,b,H){const Z=n.get(C);b!==void 0&&ye(Z.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Ne(C)}function xt(C){const b=C.texture,H=n.get(C),Z=n.get(b);C.addEventListener("dispose",A);const te=C.textures,J=C.isWebGLCubeRenderTarget===!0,Ee=te.length>1;if(Ee||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=b.version,a.memory.textures++),J){H.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[fe]=[];for(let me=0;me<b.mipmaps.length;me++)H.__webglFramebuffer[fe][me]=i.createFramebuffer()}else H.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let fe=0;fe<b.mipmaps.length;fe++)H.__webglFramebuffer[fe]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let fe=0,me=te.length;fe<me;fe++){const Ze=n.get(te[fe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&qe(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let fe=0;fe<te.length;fe++){const me=te[fe];H.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[fe]);const Ze=r.convert(me.format,me.colorSpace),ie=r.convert(me.type),ge=x(me.internalFormat,Ze,ie,me.colorSpace,C.isXRRenderTarget===!0),Pe=je(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,ge,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,H.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,b);for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)ye(H.__webglFramebuffer[fe][me],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,me);else ye(H.__webglFramebuffer[fe],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let fe=0,me=te.length;fe<me;fe++){const Ze=te[fe],ie=n.get(Ze);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),Ue(i.TEXTURE_2D,Ze),ye(H.__webglFramebuffer,C,Ze,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),m(Ze)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,Z.__webglTexture),Ue(fe,b),b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)ye(H.__webglFramebuffer[me],C,b,i.COLOR_ATTACHMENT0,fe,me);else ye(H.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,fe,0);m(b)&&p(fe),t.unbindTexture()}C.depthBuffer&&Ne(C)}function Je(C){const b=C.textures;for(let H=0,Z=b.length;H<Z;H++){const te=b[H];if(m(te)){const J=y(C),Ee=n.get(te).__webglTexture;t.bindTexture(J,Ee),p(J),t.unbindTexture()}}}const Et=[],B=[];function xn(C){if(C.samples>0){if(qe(C)===!1){const b=C.textures,H=C.width,Z=C.height;let te=i.COLOR_BUFFER_BIT;const J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(C),fe=b.length>1;if(fe)for(let me=0;me<b.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let me=0;me<b.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const Ze=n.get(b[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ze,0)}i.blitFramebuffer(0,0,H,Z,0,0,H,Z,te,i.NEAREST),c===!0&&(Et.length=0,B.length=0,Et.push(i.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Et.push(J),B.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Et))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let me=0;me<b.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const Ze=n.get(b[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,Ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function je(C){return Math.min(s.maxSamples,C.samples)}function qe(C){const b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Re(C){const b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function pt(C,b){const H=C.colorSpace,Z=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Vs&&H!==Ti&&(Qe.getTransfer(H)===ot?(Z!==Un||te!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function we(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=ee,this.setTextureCube=I,this.rebindTextures=$e,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=xn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=qe}function hv(i,e){function t(n,s=Ti){let r;const a=Qe.getTransfer(s);if(n===di)return i.UNSIGNED_BYTE;if(n===Yc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Kc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yf)return i.BYTE;if(n===bf)return i.SHORT;if(n===vr)return i.UNSIGNED_SHORT;if(n===qc)return i.INT;if(n===ns)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===Sr)return i.HALF_FLOAT;if(n===Sf)return i.ALPHA;if(n===Ef)return i.RGB;if(n===Un)return i.RGBA;if(n===Tf)return i.LUMINANCE;if(n===wf)return i.LUMINANCE_ALPHA;if(n===ks)return i.DEPTH_COMPONENT;if(n===zs)return i.DEPTH_STENCIL;if(n===Jc)return i.RED;if(n===Zc)return i.RED_INTEGER;if(n===Cf)return i.RG;if(n===Qc)return i.RG_INTEGER;if(n===el)return i.RGBA_INTEGER;if(n===na||n===ia||n===sa||n===ra)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jo||n===Zo||n===Qo||n===ec)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tc||n===nc||n===ic)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===tc||n===nc)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ic)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sc||n===rc||n===ac||n===oc||n===cc||n===lc||n===hc||n===fc||n===dc||n===uc||n===pc||n===mc||n===gc||n===_c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ac)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_c)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===aa||n===vc||n===xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===aa)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Af||n===yc||n===bc||n===Mc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class fv extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jt extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dv={type:"move"};class So{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,g=.005;l.inputState.pinching&&f>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dv)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const uv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pv=`
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

}`;class mv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new zt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Nn({vertexShader:uv,fragmentShader:pv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new De(new gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gv extends Gs{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,u=null,g=null;const _=new mv,m=t.getContextAttributes();let p=null,y=null;const x=[],v=[],D=new Xe;let T=null;const A=new En;A.viewport=new vt;const k=new En;k.viewport=new vt;const w=[A,k],M=new fv;let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=x[X];return ne===void 0&&(ne=new So,x[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=x[X];return ne===void 0&&(ne=new So,x[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=x[X];return ne===void 0&&(ne=new So,x[X]=ne),ne.getHandSpace()};function U(X){const ne=v.indexOf(X.inputSource);if(ne===-1)return;const ye=x[ne];ye!==void 0&&(ye.update(X.inputSource,X.frame,l||a),ye.dispatchEvent({type:X.type,data:X.inputSource}))}function j(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",q);for(let X=0;X<x.length;X++){const ne=v[X];ne!==null&&(v[X]=null,x[X].disconnect(ne))}R=null,z=null,_.reset(),e.setRenderTarget(p),u=null,f=null,d=null,s=null,y=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",j),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Di(u.framebufferWidth,u.framebufferHeight,{format:Un,type:di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,ye=null,ce=null;m.depth&&(ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?zs:ks,ye=m.stencil?Os:ns);const Ae={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(Ae),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Di(f.textureWidth,f.textureHeight,{format:Un,type:di,depthTexture:new Vf(f.textureWidth,f.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ke.setContext(s),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(X){for(let ne=0;ne<X.removed.length;ne++){const ye=X.removed[ne],ce=v.indexOf(ye);ce>=0&&(v[ce]=null,x[ce].disconnect(ye))}for(let ne=0;ne<X.added.length;ne++){const ye=X.added[ne];let ce=v.indexOf(ye);if(ce===-1){for(let Ne=0;Ne<x.length;Ne++)if(Ne>=v.length){v.push(ye),ce=Ne;break}else if(v[Ne]===null){v[Ne]=ye,ce=Ne;break}if(ce===-1)break}const Ae=x[ce];Ae&&Ae.connect(ye)}}const $=new P,ee=new P;function I(X,ne,ye){$.setFromMatrixPosition(ne.matrixWorld),ee.setFromMatrixPosition(ye.matrixWorld);const ce=$.distanceTo(ee),Ae=ne.projectionMatrix.elements,Ne=ye.projectionMatrix.elements,$e=Ae[14]/(Ae[10]-1),xt=Ae[14]/(Ae[10]+1),Je=(Ae[9]+1)/Ae[5],Et=(Ae[9]-1)/Ae[5],B=(Ae[8]-1)/Ae[0],xn=(Ne[8]+1)/Ne[0],je=$e*B,qe=$e*xn,Re=ce/(-B+xn),pt=Re*-B;if(ne.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(pt),X.translateZ(Re),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ae[10]===-1)X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const we=$e+Re,C=xt+Re,b=je-pt,H=qe+(ce-pt),Z=Je*xt/C*we,te=Et*xt/C*we;X.projectionMatrix.makePerspective(b,H,Z,te,we,C),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function K(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let ne=X.near,ye=X.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(ye=_.depthFar)),M.near=k.near=A.near=ne,M.far=k.far=A.far=ye,(R!==M.near||z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,z=M.far),A.layers.mask=X.layers.mask|2,k.layers.mask=X.layers.mask|4,M.layers.mask=A.layers.mask|k.layers.mask;const ce=X.parent,Ae=M.cameras;K(M,ce);for(let Ne=0;Ne<Ae.length;Ne++)K(Ae[Ne],ce);Ae.length===2?I(M,A,k):M.projectionMatrix.copy(A.projectionMatrix),ae(X,M,ce)};function ae(X,ne,ye){ye===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(ye.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Sc*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&u===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let xe=null;function Ue(X,ne){if(h=ne.getViewerPose(l||a),g=ne,h!==null){const ye=h.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let ce=!1;ye.length!==M.cameras.length&&(M.cameras.length=0,ce=!0);for(let Ne=0;Ne<ye.length;Ne++){const $e=ye[Ne];let xt=null;if(u!==null)xt=u.getViewport($e);else{const Et=d.getViewSubImage(f,$e);xt=Et.viewport,Ne===0&&(e.setRenderTargetTextures(y,Et.colorTexture,f.ignoreDepthValues?void 0:Et.depthStencilTexture),e.setRenderTarget(y))}let Je=w[Ne];Je===void 0&&(Je=new En,Je.layers.enable(Ne),Je.viewport=new vt,w[Ne]=Je),Je.matrix.fromArray($e.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray($e.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(xt.x,xt.y,xt.width,xt.height),Ne===0&&(M.matrix.copy(Je.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ce===!0&&M.cameras.push(Je)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ne=d.getDepthInformation(ye[0]);Ne&&Ne.isValid&&Ne.texture&&_.init(e,Ne,s.renderState)}}for(let ye=0;ye<x.length;ye++){const ce=v[ye],Ae=x[ye];ce!==null&&Ae!==void 0&&Ae.update(ce,ne,l||a)}xe&&xe(X,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Ke=new Hf;Ke.setAnimationLoop(Ue),this.setAnimationLoop=function(X){xe=X},this.dispose=function(){}}}const Vi=new Xn,_v=new ht;function vv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Of(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&u(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),x=y.envMap,v=y.envMapRotation;x&&(m.envMap.value=x,Vi.copy(v),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),m.envMapRotation.value.setFromMatrix4(_v.makeRotationFromEuler(Vi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xv(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function l(y,x){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",m));const D=x.program;n.updateUBOMapping(y,D);const T=e.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function h(y){const x=d();y.__bindingPointIndex=x;const v=i.createBuffer(),D=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,D,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=s[y.id],v=y.uniforms,D=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,A=v.length;T<A;T++){const k=Array.isArray(v[T])?v[T]:[v[T]];for(let w=0,M=k.length;w<M;w++){const R=k[w];if(u(R,T,w,D)===!0){const z=R.__offset,U=Array.isArray(R.value)?R.value:[R.value];let j=0;for(let q=0;q<U.length;q++){const $=U[q],ee=_($);typeof $=="number"||typeof $=="boolean"?(R.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,z+j,R.__data)):$.isMatrix3?(R.__data[0]=$.elements[0],R.__data[1]=$.elements[1],R.__data[2]=$.elements[2],R.__data[3]=0,R.__data[4]=$.elements[3],R.__data[5]=$.elements[4],R.__data[6]=$.elements[5],R.__data[7]=0,R.__data[8]=$.elements[6],R.__data[9]=$.elements[7],R.__data[10]=$.elements[8],R.__data[11]=0):($.toArray(R.__data,j),j+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,x,v,D){const T=y.value,A=x+"_"+v;if(D[A]===void 0)return typeof T=="number"||typeof T=="boolean"?D[A]=T:D[A]=T.clone(),!0;{const k=D[A];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return D[A]=T,!0}else if(k.equals(T)===!1)return k.copy(T),!0}return!1}function g(y){const x=y.uniforms;let v=0;const D=16;for(let A=0,k=x.length;A<k;A++){const w=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,R=w.length;M<R;M++){const z=w[M],U=Array.isArray(z.value)?z.value:[z.value];for(let j=0,q=U.length;j<q;j++){const $=U[j],ee=_($),I=v%D,K=I%ee.boundary,ae=I+K;v+=K,ae!==0&&D-ae<ee.storage&&(v+=D-ae),z.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=ee.storage}}}const T=v%D;return T>0&&(v+=D-T),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class yv{constructor(e={}){const{canvas:t=op(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this.toneMapping=Pi,this.toneMappingExposure=1;const v=this;let D=!1,T=0,A=0,k=null,w=-1,M=null;const R=new vt,z=new vt;let U=null;const j=new ke(0);let q=0,$=t.width,ee=t.height,I=1,K=null,ae=null;const xe=new vt(0,0,$,ee),Ue=new vt(0,0,$,ee);let Ke=!1;const X=new tl;let ne=!1,ye=!1;const ce=new ht,Ae=new ht,Ne=new P,$e=new vt,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function Et(){return k===null?I:1}let B=n;function xn(E,N){return t.getContext(E,N)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xc}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",de,!1),B===null){const N="webgl2";if(B=xn(N,E),B===null)throw xn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let je,qe,Re,pt,we,C,b,H,Z,te,J,Ee,fe,me,Ze,ie,ge,Pe,Ie,_e,Ye,Ve,dt,L;function he(){je=new Tg(B),je.init(),Ve=new hv(B,je),qe=new xg(B,je,e,Ve),Re=new ov(B,je),qe.reverseDepthBuffer&&f&&Re.buffers.depth.setReversed(!0),pt=new Ag(B),we=new X_,C=new lv(B,je,Re,we,qe,Ve,pt),b=new bg(v),H=new Eg(v),Z=new Up(B),dt=new _g(B,Z),te=new wg(B,Z,pt,dt),J=new Pg(B,te,Z,pt),Ie=new Rg(B,qe,C),ie=new yg(we),Ee=new $_(v,b,H,je,qe,dt,ie),fe=new vv(v,we),me=new q_,Ze=new ev(je),Pe=new gg(v,b,H,Re,J,u,c),ge=new rv(v,J,qe),L=new xv(B,pt,qe,Re),_e=new vg(B,je,pt),Ye=new Cg(B,je,pt),pt.programs=Ee.programs,v.capabilities=qe,v.extensions=je,v.properties=we,v.renderLists=me,v.shadowMap=ge,v.state=Re,v.info=pt}he();const W=new gv(v,B);this.xr=W,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const E=je.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=je.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(E){E!==void 0&&(I=E,this.setSize($,ee,!1))},this.getSize=function(E){return E.set($,ee)},this.setSize=function(E,N,V=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,ee=N,t.width=Math.floor(E*I),t.height=Math.floor(N*I),V===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set($*I,ee*I).floor()},this.setDrawingBufferSize=function(E,N,V){$=E,ee=N,I=V,t.width=Math.floor(E*V),t.height=Math.floor(N*V),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,N,V,G){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,N,V,G),Re.viewport(R.copy(xe).multiplyScalar(I).round())},this.getScissor=function(E){return E.copy(Ue)},this.setScissor=function(E,N,V,G){E.isVector4?Ue.set(E.x,E.y,E.z,E.w):Ue.set(E,N,V,G),Re.scissor(z.copy(Ue).multiplyScalar(I).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(E){Re.setScissorTest(Ke=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){ae=E},this.getClearColor=function(E){return E.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(E=!0,N=!0,V=!0){let G=0;if(E){let F=!1;if(k!==null){const re=k.texture.format;F=re===el||re===Qc||re===Zc}if(F){const re=k.texture.type,ue=re===di||re===ns||re===vr||re===Os||re===Yc||re===Kc,be=Pe.getClearColor(),Me=Pe.getClearAlpha(),Fe=be.r,Be=be.g,Se=be.b;ue?(g[0]=Fe,g[1]=Be,g[2]=Se,g[3]=Me,B.clearBufferuiv(B.COLOR,0,g)):(_[0]=Fe,_[1]=Be,_[2]=Se,_[3]=Me,B.clearBufferiv(B.COLOR,0,_))}else G|=B.COLOR_BUFFER_BIT}N&&(G|=B.DEPTH_BUFFER_BIT),V&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),me.dispose(),Ze.dispose(),we.dispose(),b.dispose(),H.dispose(),J.dispose(),dt.dispose(),L.dispose(),Ee.dispose(),W.dispose(),W.removeEventListener("sessionstart",El),W.removeEventListener("sessionend",Tl),Ni.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const E=pt.autoReset,N=ge.enabled,V=ge.autoUpdate,G=ge.needsUpdate,F=ge.type;he(),pt.autoReset=E,ge.enabled=N,ge.autoUpdate=V,ge.needsUpdate=G,ge.type=F}function de(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ze(E){const N=E.target;N.removeEventListener("dispose",ze),yt(N)}function yt(E){Vt(E),we.remove(E)}function Vt(E){const N=we.get(E).programs;N!==void 0&&(N.forEach(function(V){Ee.releaseProgram(V)}),E.isShaderMaterial&&Ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,V,G,F,re){N===null&&(N=xt);const ue=F.isMesh&&F.matrixWorld.determinant()<0,be=ru(E,N,V,G,F);Re.setMaterial(G,ue);let Me=V.index,Fe=1;if(G.wireframe===!0){if(Me=te.getWireframeAttribute(V),Me===void 0)return;Fe=2}const Be=V.drawRange,Se=V.attributes.position;let tt=Be.start*Fe,ut=(Be.start+Be.count)*Fe;re!==null&&(tt=Math.max(tt,re.start*Fe),ut=Math.min(ut,(re.start+re.count)*Fe)),Me!==null?(tt=Math.max(tt,0),ut=Math.min(ut,Me.count)):Se!=null&&(tt=Math.max(tt,0),ut=Math.min(ut,Se.count));const mt=ut-tt;if(mt<0||mt===1/0)return;dt.setup(F,G,be,V,Me);let rn,it=_e;if(Me!==null&&(rn=Z.get(Me),it=Ye,it.setIndex(rn)),F.isMesh)G.wireframe===!0?(Re.setLineWidth(G.wireframeLinewidth*Et()),it.setMode(B.LINES)):it.setMode(B.TRIANGLES);else if(F.isLine){let Te=G.linewidth;Te===void 0&&(Te=1),Re.setLineWidth(Te*Et()),F.isLineSegments?it.setMode(B.LINES):F.isLineLoop?it.setMode(B.LINE_LOOP):it.setMode(B.LINE_STRIP)}else F.isPoints?it.setMode(B.POINTS):F.isSprite&&it.setMode(B.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)it.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))it.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Te=F._multiDrawStarts,qn=F._multiDrawCounts,st=F._multiDrawCount,Cn=Me?Z.get(Me).bytesPerElement:1,os=we.get(G).currentProgram.getUniforms();for(let hn=0;hn<st;hn++)os.setValue(B,"_gl_DrawID",hn),it.render(Te[hn]/Cn,qn[hn])}else if(F.isInstancedMesh)it.renderInstances(tt,mt,F.count);else if(V.isInstancedBufferGeometry){const Te=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,qn=Math.min(V.instanceCount,Te);it.renderInstances(tt,mt,qn)}else it.render(tt,mt)};function at(E,N,V){E.transparent===!0&&E.side===mn&&E.forceSinglePass===!1?(E.side=tn,E.needsUpdate=!0,Ar(E,N,V),E.side=ki,E.needsUpdate=!0,Ar(E,N,V),E.side=mn):Ar(E,N,V)}this.compile=function(E,N,V=null){V===null&&(V=E),p=Ze.get(V),p.init(N),x.push(p),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),E!==V&&E.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const G=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const re=F.material;if(re)if(Array.isArray(re))for(let ue=0;ue<re.length;ue++){const be=re[ue];at(be,V,F),G.add(be)}else at(re,V,F),G.add(re)}),x.pop(),p=null,G},this.compileAsync=function(E,N,V=null){const G=this.compile(E,N,V);return new Promise(F=>{function re(){if(G.forEach(function(ue){we.get(ue).currentProgram.isReady()&&G.delete(ue)}),G.size===0){F(E);return}setTimeout(re,10)}je.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let wn=null;function jn(E){wn&&wn(E)}function El(){Ni.stop()}function Tl(){Ni.start()}const Ni=new Hf;Ni.setAnimationLoop(jn),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(E){wn=E,W.setAnimationLoop(E),E===null?Ni.stop():Ni.start()},W.addEventListener("sessionstart",El),W.addEventListener("sessionend",Tl),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(N),N=W.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,N,k),p=Ze.get(E,x.length),p.init(N),x.push(p),Ae.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(Ae),ye=this.localClippingEnabled,ne=ie.init(this.clippingPlanes,ye),m=me.get(E,y.length),m.init(),y.push(m),W.enabled===!0&&W.isPresenting===!0){const re=v.xr.getDepthSensingMesh();re!==null&&Ga(re,N,-1/0,v.sortObjects)}Ga(E,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(K,ae),Je=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Je&&Pe.addToRenderList(m,E),this.info.render.frame++,ne===!0&&ie.beginShadows();const V=p.state.shadowsArray;ge.render(V,E,N),ne===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const re=N.cameras;if(F.length>0)for(let ue=0,be=re.length;ue<be;ue++){const Me=re[ue];Cl(G,F,E,Me)}Je&&Pe.render(E);for(let ue=0,be=re.length;ue<be;ue++){const Me=re[ue];wl(m,E,Me,Me.viewport)}}else F.length>0&&Cl(G,F,E,N),Je&&Pe.render(E),wl(m,E,N);k!==null&&(C.updateMultisampleRenderTarget(k),C.updateRenderTargetMipmap(k)),E.isScene===!0&&E.onAfterRender(v,E,N),dt.resetDefaultState(),w=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],ne===!0&&ie.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ga(E,N,V,G){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){G&&$e.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ae);const ue=J.update(E),be=E.material;be.visible&&m.push(E,ue,be,V,$e.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const ue=J.update(E),be=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),$e.copy(E.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),$e.copy(ue.boundingSphere.center)),$e.applyMatrix4(E.matrixWorld).applyMatrix4(Ae)),Array.isArray(be)){const Me=ue.groups;for(let Fe=0,Be=Me.length;Fe<Be;Fe++){const Se=Me[Fe],tt=be[Se.materialIndex];tt&&tt.visible&&m.push(E,ue,tt,V,$e.z,Se)}}else be.visible&&m.push(E,ue,be,V,$e.z,null)}}const re=E.children;for(let ue=0,be=re.length;ue<be;ue++)Ga(re[ue],N,V,G)}function wl(E,N,V,G){const F=E.opaque,re=E.transmissive,ue=E.transparent;p.setupLightsView(V),ne===!0&&ie.setGlobalState(v.clippingPlanes,V),G&&Re.viewport(R.copy(G)),F.length>0&&Cr(F,N,V),re.length>0&&Cr(re,N,V),ue.length>0&&Cr(ue,N,V),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Cl(E,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Di(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Sr:di,minFilter:Ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const re=p.state.transmissionRenderTarget[G.id],ue=G.viewport||R;re.setSize(ue.z,ue.w);const be=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(j),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),Je&&Pe.render(V);const Me=v.toneMapping;v.toneMapping=Pi;const Fe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),ne===!0&&ie.setGlobalState(v.clippingPlanes,G),Cr(E,V,G),C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re),je.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Se=0,tt=N.length;Se<tt;Se++){const ut=N[Se],mt=ut.object,rn=ut.geometry,it=ut.material,Te=ut.group;if(it.side===mn&&mt.layers.test(G.layers)){const qn=it.side;it.side=tn,it.needsUpdate=!0,Al(mt,V,G,rn,it,Te),it.side=qn,it.needsUpdate=!0,Be=!0}}Be===!0&&(C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re))}v.setRenderTarget(be),v.setClearColor(j,q),Fe!==void 0&&(G.viewport=Fe),v.toneMapping=Me}function Cr(E,N,V){const G=N.isScene===!0?N.overrideMaterial:null;for(let F=0,re=E.length;F<re;F++){const ue=E[F],be=ue.object,Me=ue.geometry,Fe=G===null?ue.material:G,Be=ue.group;be.layers.test(V.layers)&&Al(be,N,V,Me,Fe,Be)}}function Al(E,N,V,G,F,re){E.onBeforeRender(v,N,V,G,F,re),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(v,N,V,G,E,re),F.transparent===!0&&F.side===mn&&F.forceSinglePass===!1?(F.side=tn,F.needsUpdate=!0,v.renderBufferDirect(V,N,G,F,E,re),F.side=ki,F.needsUpdate=!0,v.renderBufferDirect(V,N,G,F,E,re),F.side=mn):v.renderBufferDirect(V,N,G,F,E,re),E.onAfterRender(v,N,V,G,F,re)}function Ar(E,N,V){N.isScene!==!0&&(N=xt);const G=we.get(E),F=p.state.lights,re=p.state.shadowsArray,ue=F.state.version,be=Ee.getParameters(E,F.state,re,N,V),Me=Ee.getProgramCacheKey(be);let Fe=G.programs;G.environment=E.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(E.isMeshStandardMaterial?H:b).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",ze),Fe=new Map,G.programs=Fe);let Be=Fe.get(Me);if(Be!==void 0){if(G.currentProgram===Be&&G.lightsStateVersion===ue)return Pl(E,be),Be}else be.uniforms=Ee.getUniforms(E),E.onBeforeCompile(be,v),Be=Ee.acquireProgram(be,Me),Fe.set(Me,Be),G.uniforms=be.uniforms;const Se=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Se.clippingPlanes=ie.uniform),Pl(E,be),G.needsLights=ou(E),G.lightsStateVersion=ue,G.needsLights&&(Se.ambientLightColor.value=F.state.ambient,Se.lightProbe.value=F.state.probe,Se.directionalLights.value=F.state.directional,Se.directionalLightShadows.value=F.state.directionalShadow,Se.spotLights.value=F.state.spot,Se.spotLightShadows.value=F.state.spotShadow,Se.rectAreaLights.value=F.state.rectArea,Se.ltc_1.value=F.state.rectAreaLTC1,Se.ltc_2.value=F.state.rectAreaLTC2,Se.pointLights.value=F.state.point,Se.pointLightShadows.value=F.state.pointShadow,Se.hemisphereLights.value=F.state.hemi,Se.directionalShadowMap.value=F.state.directionalShadowMap,Se.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Se.spotShadowMap.value=F.state.spotShadowMap,Se.spotLightMatrix.value=F.state.spotLightMatrix,Se.spotLightMap.value=F.state.spotLightMap,Se.pointShadowMap.value=F.state.pointShadowMap,Se.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Be,G.uniformsList=null,Be}function Rl(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=oa.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Pl(E,N){const V=we.get(E);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function ru(E,N,V,G,F){N.isScene!==!0&&(N=xt),C.resetTextureUnits();const re=N.fog,ue=G.isMeshStandardMaterial?N.environment:null,be=k===null?v.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Vs,Me=(G.isMeshStandardMaterial?H:b).get(G.envMap||ue),Fe=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Be=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Se=!!V.morphAttributes.position,tt=!!V.morphAttributes.normal,ut=!!V.morphAttributes.color;let mt=Pi;G.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(mt=v.toneMapping);const rn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,it=rn!==void 0?rn.length:0,Te=we.get(G),qn=p.state.lights;if(ne===!0&&(ye===!0||E!==M)){const yn=E===M&&G.id===w;ie.setState(G,E,yn)}let st=!1;G.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==qn.state.version||Te.outputColorSpace!==be||F.isBatchedMesh&&Te.batching===!1||!F.isBatchedMesh&&Te.batching===!0||F.isBatchedMesh&&Te.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Te.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Te.instancing===!1||!F.isInstancedMesh&&Te.instancing===!0||F.isSkinnedMesh&&Te.skinning===!1||!F.isSkinnedMesh&&Te.skinning===!0||F.isInstancedMesh&&Te.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Te.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Te.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Te.instancingMorph===!1&&F.morphTexture!==null||Te.envMap!==Me||G.fog===!0&&Te.fog!==re||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ie.numPlanes||Te.numIntersection!==ie.numIntersection)||Te.vertexAlphas!==Fe||Te.vertexTangents!==Be||Te.morphTargets!==Se||Te.morphNormals!==tt||Te.morphColors!==ut||Te.toneMapping!==mt||Te.morphTargetsCount!==it)&&(st=!0):(st=!0,Te.__version=G.version);let Cn=Te.currentProgram;st===!0&&(Cn=Ar(G,N,F));let os=!1,hn=!1,js=!1;const gt=Cn.getUniforms(),Fn=Te.uniforms;if(Re.useProgram(Cn.program)&&(os=!0,hn=!0,js=!0),G.id!==w&&(w=G.id,hn=!0),os||M!==E){Re.buffers.depth.getReversed()?(ce.copy(E.projectionMatrix),lp(ce),hp(ce),gt.setValue(B,"projectionMatrix",ce)):gt.setValue(B,"projectionMatrix",E.projectionMatrix),gt.setValue(B,"viewMatrix",E.matrixWorldInverse);const pi=gt.map.cameraPosition;pi!==void 0&&pi.setValue(B,Ne.setFromMatrixPosition(E.matrixWorld)),qe.logarithmicDepthBuffer&&gt.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&gt.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,hn=!0,js=!0)}if(F.isSkinnedMesh){gt.setOptional(B,F,"bindMatrix"),gt.setOptional(B,F,"bindMatrixInverse");const yn=F.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),gt.setValue(B,"boneTexture",yn.boneTexture,C))}F.isBatchedMesh&&(gt.setOptional(B,F,"batchingTexture"),gt.setValue(B,"batchingTexture",F._matricesTexture,C),gt.setOptional(B,F,"batchingIdTexture"),gt.setValue(B,"batchingIdTexture",F._indirectTexture,C),gt.setOptional(B,F,"batchingColorTexture"),F._colorsTexture!==null&&gt.setValue(B,"batchingColorTexture",F._colorsTexture,C));const qs=V.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&Ie.update(F,V,Cn),(hn||Te.receiveShadow!==F.receiveShadow)&&(Te.receiveShadow=F.receiveShadow,gt.setValue(B,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Fn.envMap.value=Me,Fn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Fn.envMapIntensity.value=N.environmentIntensity),hn&&(gt.setValue(B,"toneMappingExposure",v.toneMappingExposure),Te.needsLights&&au(Fn,js),re&&G.fog===!0&&fe.refreshFogUniforms(Fn,re),fe.refreshMaterialUniforms(Fn,G,I,ee,p.state.transmissionRenderTarget[E.id]),oa.upload(B,Rl(Te),Fn,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(oa.upload(B,Rl(Te),Fn,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&gt.setValue(B,"center",F.center),gt.setValue(B,"modelViewMatrix",F.modelViewMatrix),gt.setValue(B,"normalMatrix",F.normalMatrix),gt.setValue(B,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const yn=G.uniformsGroups;for(let pi=0,mi=yn.length;pi<mi;pi++){const kl=yn[pi];L.update(kl,Cn),L.bind(kl,Cn)}}return Cn}function au(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function ou(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(E,N,V){we.get(E.texture).__webglTexture=N,we.get(E.depthTexture).__webglTexture=V;const G=we.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const V=we.get(E);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,V=0){k=E,T=N,A=V;let G=!0,F=null,re=!1,ue=!1;if(E){const Me=we.get(E);if(Me.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(B.FRAMEBUFFER,null),G=!1;else if(Me.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(Me.__hasExternalTextures)C.rebindTextures(E,we.get(E.texture).__webglTexture,we.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Se=E.depthTexture;if(Me.__boundDepthTexture!==Se){if(Se!==null&&we.has(Se)&&(E.width!==Se.image.width||E.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ue=!0);const Be=we.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Be[N])?F=Be[N][V]:F=Be[N],re=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?F=we.get(E).__webglMultisampledFramebuffer:Array.isArray(Be)?F=Be[V]:F=Be,R.copy(E.viewport),z.copy(E.scissor),U=E.scissorTest}else R.copy(xe).multiplyScalar(I).floor(),z.copy(Ue).multiplyScalar(I).floor(),U=Ke;if(Re.bindFramebuffer(B.FRAMEBUFFER,F)&&G&&Re.drawBuffers(E,F),Re.viewport(R),Re.scissor(z),Re.setScissorTest(U),re){const Me=we.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+N,Me.__webglTexture,V)}else if(ue){const Me=we.get(E.texture),Fe=N||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Me.__webglTexture,V||0,Fe)}w=-1},this.readRenderTargetPixels=function(E,N,V,G,F,re,ue){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=we.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(be=be[ue]),be){Re.bindFramebuffer(B.FRAMEBUFFER,be);try{const Me=E.texture,Fe=Me.format,Be=Me.type;if(!qe.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-G&&V>=0&&V<=E.height-F&&B.readPixels(N,V,G,F,Ve.convert(Fe),Ve.convert(Be),re)}finally{const Me=k!==null?we.get(k).__webglFramebuffer:null;Re.bindFramebuffer(B.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(E,N,V,G,F,re,ue){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=we.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(be=be[ue]),be){const Me=E.texture,Fe=Me.format,Be=Me.type;if(!qe.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-G&&V>=0&&V<=E.height-F){Re.bindFramebuffer(B.FRAMEBUFFER,be);const Se=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Se),B.bufferData(B.PIXEL_PACK_BUFFER,re.byteLength,B.STREAM_READ),B.readPixels(N,V,G,F,Ve.convert(Fe),Ve.convert(Be),0);const tt=k!==null?we.get(k).__webglFramebuffer:null;Re.bindFramebuffer(B.FRAMEBUFFER,tt);const ut=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await cp(B,ut,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Se),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,re),B.deleteBuffer(Se),B.deleteSync(ut),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,V=0){E.isTexture!==!0&&(or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const G=Math.pow(2,-V),F=Math.floor(E.image.width*G),re=Math.floor(E.image.height*G),ue=N!==null?N.x:0,be=N!==null?N.y:0;C.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,V,0,0,ue,be,F,re),Re.unbindTexture()},this.copyTextureToTexture=function(E,N,V=null,G=null,F=0){E.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],N=arguments[2],F=arguments[3]||0,V=null);let re,ue,be,Me,Fe,Be,Se,tt,ut;const mt=E.isCompressedTexture?E.mipmaps[F]:E.image;V!==null?(re=V.max.x-V.min.x,ue=V.max.y-V.min.y,be=V.isBox3?V.max.z-V.min.z:1,Me=V.min.x,Fe=V.min.y,Be=V.isBox3?V.min.z:0):(re=mt.width,ue=mt.height,be=mt.depth||1,Me=0,Fe=0,Be=0),G!==null?(Se=G.x,tt=G.y,ut=G.z):(Se=0,tt=0,ut=0);const rn=Ve.convert(N.format),it=Ve.convert(N.type);let Te;N.isData3DTexture?(C.setTexture3D(N,0),Te=B.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(C.setTexture2DArray(N,0),Te=B.TEXTURE_2D_ARRAY):(C.setTexture2D(N,0),Te=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,N.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,N.unpackAlignment);const qn=B.getParameter(B.UNPACK_ROW_LENGTH),st=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Cn=B.getParameter(B.UNPACK_SKIP_PIXELS),os=B.getParameter(B.UNPACK_SKIP_ROWS),hn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,mt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,mt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Me),B.pixelStorei(B.UNPACK_SKIP_ROWS,Fe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Be);const js=E.isDataArrayTexture||E.isData3DTexture,gt=N.isDataArrayTexture||N.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Fn=we.get(E),qs=we.get(N),yn=we.get(Fn.__renderTarget),pi=we.get(qs.__renderTarget);Re.bindFramebuffer(B.READ_FRAMEBUFFER,yn.__webglFramebuffer),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let mi=0;mi<be;mi++)js&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,we.get(E).__webglTexture,F,Be+mi),E.isDepthTexture?(gt&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,we.get(N).__webglTexture,F,ut+mi),B.blitFramebuffer(Me,Fe,re,ue,Se,tt,re,ue,B.DEPTH_BUFFER_BIT,B.NEAREST)):gt?B.copyTexSubImage3D(Te,F,Se,tt,ut+mi,Me,Fe,re,ue):B.copyTexSubImage2D(Te,F,Se,tt,ut+mi,Me,Fe,re,ue);Re.bindFramebuffer(B.READ_FRAMEBUFFER,null),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else gt?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(Te,F,Se,tt,ut,re,ue,be,rn,it,mt.data):N.isCompressedArrayTexture?B.compressedTexSubImage3D(Te,F,Se,tt,ut,re,ue,be,rn,mt.data):B.texSubImage3D(Te,F,Se,tt,ut,re,ue,be,rn,it,mt):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,F,Se,tt,re,ue,rn,it,mt.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,F,Se,tt,mt.width,mt.height,rn,mt.data):B.texSubImage2D(B.TEXTURE_2D,F,Se,tt,re,ue,rn,it,mt);B.pixelStorei(B.UNPACK_ROW_LENGTH,qn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,st),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Cn),B.pixelStorei(B.UNPACK_SKIP_ROWS,os),B.pixelStorei(B.UNPACK_SKIP_IMAGES,hn),F===0&&N.generateMipmaps&&B.generateMipmap(Te),Re.unbindTexture()},this.copyTextureToTexture3D=function(E,N,V=null,G=null,F=0){return E.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,E=arguments[2],N=arguments[3],F=arguments[4]||0),or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,V,G,F)},this.initRenderTarget=function(E){we.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Re.unbindTexture()},this.resetState=function(){T=0,A=0,k=null,Re.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}class sl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=n}clone(){return new sl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ih extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bv extends zt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Ot,h=Ot,d,f){super(null,a,o,c,l,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lh extends ln{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ms=new ht,Uh=new ht,Jr=[],Nh=new is,Mv=new ht,tr=new De,nr=new Tr;class Sv extends De{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Mv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new is),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),Nh.copy(e.boundingBox).applyMatrix4(Ms),this.boundingBox.union(Nh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),nr.copy(e.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),e.ray.intersectsSphere(nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ms),Uh.multiplyMatrices(n,Ms),tr.matrixWorld=Uh,tr.raycast(e,Jr);for(let a=0,o=Jr.length;a<o;a++){const c=Jr[a];c.instanceId=r,c.object=this,t.push(c)}Jr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Lh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new bv(new Float32Array(s*this.count),s,this.count,Jc,Vn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ev extends zt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rl extends sn{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new P,h=new Xe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const u=n+d/t*s;l.x=e*Math.cos(u),l.y=e*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(o,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Sn extends sn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],u=[];let g=0;const _=[],m=n/2;let p=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ft(d,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(u,2));function y(){const v=new P,D=new P;let T=0;const A=(t-e)/n;for(let k=0;k<=r;k++){const w=[],M=k/r,R=M*(t-e)+e;for(let z=0;z<=s;z++){const U=z/s,j=U*c+o,q=Math.sin(j),$=Math.cos(j);D.x=R*q,D.y=-M*n+m,D.z=R*$,d.push(D.x,D.y,D.z),v.set(q,A,$).normalize(),f.push(v.x,v.y,v.z),u.push(U,1-M),w.push(g++)}_.push(w)}for(let k=0;k<s;k++)for(let w=0;w<r;w++){const M=_[w][k],R=_[w+1][k],z=_[w+1][k+1],U=_[w][k+1];(e>0||w!==0)&&(h.push(M,R,U),T+=3),(t>0||w!==r-1)&&(h.push(R,z,U),T+=3)}l.addGroup(p,T,0),p+=T}function x(v){const D=g,T=new Xe,A=new P;let k=0;const w=v===!0?e:t,M=v===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*M,0),f.push(0,M,0),u.push(.5,.5),g++;const R=g;for(let z=0;z<=s;z++){const j=z/s*c+o,q=Math.cos(j),$=Math.sin(j);A.x=w*$,A.y=m*M,A.z=w*q,d.push(A.x,A.y,A.z),f.push(0,M,0),T.x=q*.5+.5,T.y=$*.5*M+.5,u.push(T.x,T.y),g++}for(let z=0;z<s;z++){const U=D+z,j=R+z;v===!0?h.push(j,j+1,U):h.push(j+1,j,U),k+=3}l.addGroup(p,k,v===!0?1:2),p+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class al extends Sn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new al(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ol extends sn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new P,v=new P,D=new P;for(let T=0;T<t.length;T+=3)u(t[T+0],x),u(t[T+1],v),u(t[T+2],D),c(x,v,D,y)}function c(y,x,v,D){const T=D+1,A=[];for(let k=0;k<=T;k++){A[k]=[];const w=y.clone().lerp(v,k/T),M=x.clone().lerp(v,k/T),R=T-k;for(let z=0;z<=R;z++)z===0&&k===T?A[k][z]=w:A[k][z]=w.clone().lerp(M,z/R)}for(let k=0;k<T;k++)for(let w=0;w<2*(T-k)-1;w++){const M=Math.floor(w/2);w%2===0?(f(A[k][M+1]),f(A[k+1][M]),f(A[k][M])):(f(A[k][M+1]),f(A[k+1][M+1]),f(A[k+1][M]))}}function l(y){const x=new P;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(y),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const y=new P;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const v=m(y)/2/Math.PI+.5,D=p(y)/Math.PI+.5;a.push(v,1-D)}g(),d()}function d(){for(let y=0;y<a.length;y+=6){const x=a[y+0],v=a[y+2],D=a[y+4],T=Math.max(x,v,D),A=Math.min(x,v,D);T>.9&&A<.1&&(x<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),D<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function u(y,x){const v=y*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function g(){const y=new P,x=new P,v=new P,D=new P,T=new Xe,A=new Xe,k=new Xe;for(let w=0,M=0;w<r.length;w+=9,M+=6){y.set(r[w+0],r[w+1],r[w+2]),x.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),T.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),k.set(a[M+4],a[M+5]),D.copy(y).add(x).add(v).divideScalar(3);const R=m(D);_(T,M+0,y,R),_(A,M+2,x,R),_(k,M+4,v,R)}}function _(y,x,v,D){D<0&&y.x===1&&(a[x]=y.x-1),v.x===0&&v.z===0&&(a[x]=D/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.vertices,e.indices,e.radius,e.details)}}class Zi extends ol{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zi(e.radius,e.detail)}}class cl extends sn{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let d=e;const f=(t-e)/s,u=new P,g=new Xe;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;u.x=d*Math.cos(p),u.y=d*Math.sin(p),c.push(u.x,u.y,u.z),l.push(0,0,1),g.x=(u.x/t+1)/2,g.y=(u.y/t+1)/2,h.push(g.x,g.y)}d+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const y=p+m,x=y,v=y+n+1,D=y+n+2,T=y+1;o.push(x,v,T),o.push(v,D,T)}}this.setIndex(o),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Fa extends sn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new P,f=new P,u=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let D=0;D<=t;D++){const T=D/t;d.x=-e*Math.cos(s+T*r)*Math.sin(a+x*o),d.y=e*Math.cos(a+x*o),d.z=e*Math.sin(s+T*r)*Math.sin(a+x*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(T+v,1-x),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const x=h[p][y+1],v=h[p][y],D=h[p+1][y],T=h[p+1][y+1];(p!==0||a>0)&&u.push(x,v,T),(p!==n-1||c<Math.PI)&&u.push(v,D,T)}this.setIndex(u),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Oa extends sn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new P,d=new P,f=new P;for(let u=0;u<=n;u++)for(let g=0;g<=s;g++){const _=g/s*r,m=u/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=s;g++){const _=(s+1)*u+g-1,m=(s+1)*(u-1)+g-1,p=(s+1)*(u-1)+g,y=(s+1)*u+g;a.push(_,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Nt extends wr{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rf,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jf extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Tv extends jf{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Eo=new ht,Fh=new P,Oh=new P;class wv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tl,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fh),Oh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oh),t.updateMatrixWorld(),Eo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Eo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Cv extends wv{constructor(){super(new nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Av extends jf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Cv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xc);const _t={fire:{name:"焔",color:"#ff7a3c",pal:["#1f0b10","#4a1118","#8c1d1c","#cc3a1a","#f2701f","#ffae35","#ffe27a","#fff8d6"]},water:{name:"潮",color:"#3cb0ff",pal:["#081830","#0e2e5a","#14508c","#1c76bc","#36a2e0","#78ccf4","#c4ecff","#ffffff"]},volt:{name:"雷",color:"#ffd23c",pal:["#24160a","#5e3a0c","#a8680f","#e8a218","#ffd23c","#fff08a","#fffbd8","#ffffff"]},frost:{name:"霜",color:"#9ae8ff",pal:["#0c1430","#162c5c","#1f4f94","#2f7fcc","#58b4ec","#9bdcff","#d8f4ff","#ffffff"]},star:{name:"星",color:"#ff9ad8",pal:["#2a0a22","#5a1648","#9a2c78","#d850a8","#ff82c8","#ffb8e0","#fff0f8","#ffffff"]},shadow:{name:"影",color:"#a070ff",pal:["#0a0614","#1c1030","#341c5a","#52288c","#7442c4","#9e70f0","#d4c0ff","#ffffff"]},phys:{name:"物理",color:"#e8e8e8",pal:["#141418","#2a2a33","#484a56","#6c6f7e","#9499a8","#bcc0cc","#e2e4ec","#ffffff"]}},Xt=(i,e)=>[i,e].sort().join("+"),Rv={[Xt("fire","water")]:{name:"蒸爆",kind:"aoe",v:1.4,r:3.5,dur:3,desc:"蒸気が爆ぜて周囲にダメージ＋移動速度低下",color:"#ffc89a"},[Xt("fire","volt")]:{name:"雷火",kind:"chain",v:1.6,v2:4,r:6,desc:"炎雷が近くの敵へ連鎖する",color:"#ffb04a"},[Xt("fire","frost")]:{name:"熱衝",kind:"amp",v:2.2,desc:"急激な温度差で一撃のダメージが2.2倍",color:"#ff9a6a"},[Xt("fire","star")]:{name:"超新星",kind:"energy",v:1.8,v2:6,r:4,desc:"大爆発＋チーム全員の元素エネルギー回復",color:"#ffd0e8"},[Xt("fire","shadow")]:{name:"黒炎",kind:"dot",v:.35,dur:6,desc:"消えない黒い炎で継続ダメージ",color:"#c070ff"},[Xt("water","volt")]:{name:"感電",kind:"dot",v:.45,dur:4,r:4,desc:"濡れた敵の間を電流が走り続ける",color:"#9ae0ff"},[Xt("water","frost")]:{name:"氷結",kind:"freeze",v:0,dur:3.5,desc:"敵を凍らせて動きを止める",color:"#c8f4ff"},[Xt("water","star")]:{name:"潮汐",kind:"heal",v:.08,desc:"やさしい潮の光でチーム全員を回復",color:"#a0ffe0"},[Xt("water","shadow")]:{name:"深淵",kind:"pull",v:.9,r:7,desc:"渦が周りの敵を一か所に吸い寄せる",color:"#5a6aff"},[Xt("volt","frost")]:{name:"砕晶",kind:"resdown",v:.9,v2:.4,dur:10,r:3,desc:"氷の結晶が砕けて防御を40%下げる",color:"#e8f0ff"},[Xt("volt","star")]:{name:"流星",kind:"aoe",v:2.4,r:4.5,desc:"空から星が落ちて大ダメージ",color:"#fff0a0"},[Xt("volt","shadow")]:{name:"虚雷",kind:"resdown",v:.6,v2:.3,dur:8,desc:"敵の全元素耐性を30%下げる",color:"#d0a0ff"},[Xt("frost","star")]:{name:"結晶",kind:"shield",v:.25,desc:"星の結晶がシールドになる",color:"#e0f8ff"},[Xt("frost","shadow")]:{name:"凍影",kind:"slow",v:.5,dur:6,desc:"影が凍りつき、敵の攻撃力と速度が下がる",color:"#9ab0ff"},[Xt("star","shadow")]:{name:"日蝕",kind:"buff",v:1.8,v2:.2,dur:10,desc:"一撃1.8倍＋会心率20%アップ（10秒）",color:"#ffe0ff"}},Pv=(i,e)=>i===e?null:Rv[Xt(i,e)],zh={fire:{name:"燃える意志",desc:"攻撃力+25%"},water:{name:"癒やしの潮",desc:"HP+25%、回復効果+15%"},volt:{name:"迸る雷光",desc:"元素エネルギー回復+30%"},frost:{name:"凍てつく心",desc:"会心率+15%"},star:{name:"星のめぐり",desc:"スキルのクールタイム-15%"},shadow:{name:"深い影",desc:"与えるダメージ+15%"}},ai=1/20,Bh=new Map;function un(i){let e=Bh.get(i);return e||(e=i instanceof HTMLCanvasElement?new Ev(i):new zt(i),e.magFilter=Ot,e.minFilter=Ot,e.generateMipmaps=!1,e.colorSpace=qt,e.needsUpdate=!0,Bh.set(i,e)),e}const kv=new rl(.5,12).rotateX(-Math.PI/2),Dv=new Jt({color:0,transparent:!0,opacity:.28,depthWrite:!1});class oi{constructor(e,t,n,s=1,r=n-2){this.atlas=e,this.fw=t,this.fh=n,this.scale=s,this.root=new jt,this.flash=0,this.W=e.width,this.H=e.height,this.tex=un(e).clone(),this.tex.needsUpdate=!0,this.tex.repeat.set(t/this.W,n/this.H),this.mat=new Jt({map:this.tex,alphaTest:.5,side:mn});const a=new gn(t*ai*s,n*ai*s);a.translate(0,(n/2-(n-r))*ai*s,0),this.mesh=new De(a,this.mat),this.root.add(this.mesh),this.shadow=new De(kv,Dv),this.shadow.scale.setScalar(s*1.1),this.shadow.renderOrder=1}setFrame(e,t,n=!1){const s=this.fw/this.W,r=this.fh/this.H;this.tex.repeat.set(n?-s:s,r),this.tex.offset.set(n?(e+1)*s:e*s,1-(t+1)*r)}face(e,t){this.mesh.rotation.y=e,this.flash>0?this.mat.color.setRGB(3,3,3):this.mat.color.copy(t)}dispose(){this.mesh.geometry.dispose(),this.mat.dispose(),this.tex.dispose(),this.root.removeFromParent(),this.shadow.removeFromParent()}}const ll={};async function Iv(i="./fx/"){const e=await(await fetch(i+"index.json")).json();await Promise.all(Object.keys(e).map(t=>new Promise(n=>{const s=ll[t]=e[t],r=new Image;r.onload=()=>{s.img=r;const a=new zt(r);a.magFilter=a.minFilter=Ot,a.generateMipmaps=!1,a.colorSpace=qt,a.needsUpdate=!0,s.tex=a,s.rows=Math.ceil(s.frames/s.columns);const[o,c]=s.frameSize,[l,h]=s.pivot,d=new gn(o*ai,c*ai);d.translate((o/2-l)*ai,(h-c/2)*ai,0),s.geo=d,n()},r.onerror=()=>n(),r.src=i+t+".png"})))}const To=new Map;function hl(i){if(!i)return null;if(To.has(i))return To.get(i);const t=(_t[i]?.pal||(i==="gold"?["#2a1c08","#5a3e10","#9a6c18","#d8a428","#ffd84a","#fff09a","#fffbe6","#ffffff"]:i==="purple"?["#140a26","#2b1252","#481c88","#6b2cc0","#9a48ec","#c684ff","#ecc8ff","#ffffff"]:i==="blue"?["#081830","#0e2e5a","#14508c","#1c76bc","#36a2e0","#78ccf4","#c4ecff","#ffffff"]:i==="smoke"?["#100c18","#201a2c","#342c44","#4c445e","#6a6280","#8c84a0","#b8b0c8","#e8e4f0"]:_t.phys.pal)).map(n=>{const s=new ke(n);return new P(s.r,s.g,s.b)});return To.set(i,t),t}const Lv="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",Uv=`uniform sampler2D map; uniform vec4 rect; uniform vec3 pal[8]; uniform float usePal; uniform float opacity; varying vec2 vUv;
void main(){ vec4 t = texture2D(map, vUv * rect.zw + rect.xy); if (t.a < 0.03) discard; vec3 col = t.rgb;
  if (usePal > 0.5) { float l = dot(t.rgb, vec3(0.299,0.587,0.114)); int i = int(clamp(floor(l * 7.99), 0.0, 7.0)); col = pal[i]; }
  gl_FragColor = vec4(col, t.a * opacity); }`;class Nv{constructor(){this.t=0,this.alive=!1,this.o={},this.mat=new Nn({uniforms:{map:{value:null},rect:{value:new vt},pal:{value:hl("phys")},usePal:{value:1},opacity:{value:1}},vertexShader:Lv,fragmentShader:Uv,transparent:!0,depthWrite:!1,side:mn}),this.mesh=new De(new gn(1,1),this.mat),this.mesh.renderOrder=5,this.mesh.frustumCulled=!1,this.mesh.visible=!1}kill(){this.alive=!1,this.mesh.visible=!1}}class Fv{constructor(e=60){this.pool=[],this.group=new jt;for(let t=0;t<e;t++){const n=new Nv;this.pool.push(n),this.group.add(n.mesh)}}spawn(e,t,n={}){const s=ll[e];if(!s?.tex)return null;let r=this.pool.find(o=>!o.alive);r||(r=this.pool.reduce((o,c)=>o.t>c.t?o:c)),r.alive=!0,r.t=0,r.sheet=s,r.o=n,r.mesh.visible=!0,r.mesh.geometry=s.geo,r.mesh.position.copy(t),r.mesh.scale.set(n.flip?-(n.scale||1):n.scale||1,n.scale||1,1);const a=hl(n.el===void 0?"phys":n.el);return r.mat.uniforms.map.value=s.tex,r.mat.uniforms.usePal.value=a?1:0,a&&(r.mat.uniforms.pal.value=a),r.mat.uniforms.opacity.value=1,r.mat.blending=n.add?Fo:ts,this.frame(r,0),r}frame(e,t){const n=e.sheet,s=t%n.columns,r=Math.floor(t/n.columns),a=n.columns,o=n.rows;e.mat.uniforms.rect.value.set(s/a,1-(r+1)/o,1/a,1/o)}update(e,t){for(const n of this.pool){if(!n.alive)continue;n.t+=e*(n.o.speed||1);const s=n.sheet;let r=Math.floor(n.t*s.fps);if(n.o.loop||s.loop){if(r%=s.frames,n.o.life!==void 0&&n.t>n.o.life){n.kill();continue}}else if(r>=s.frames){n.kill();continue}this.frame(n,r),n.o.follow&&n.mesh.position.copy(n.o.follow.position),n.o.vel&&n.mesh.position.addScaledVector(n.o.vel,e),n.mesh.rotation.y=n.o.yaw!==void 0?n.o.yaw:t}}}const _n=(i,e=0,t=1)=>i<e?e:i>t?t:i,Zt=(i,e,t)=>i+(e-i)*t,dr=(i,e,t)=>{const n=_n((t-i)/(e-i));return n*n*(3-2*n)},Ct=(i,e,t,n)=>(i-t)**2+(e-n)**2;function ci(i,e,t=0){let n=i*374761393+e*668265263+t*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function Ov(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class fi{constructor(e){this.f=Ov(e)}next(){return this.f()}range(e,t){return e+(t-e)*this.f()}int(e,t){return Math.floor(this.range(e,t+1))}pick(e){return e[Math.floor(this.f()*e.length)]}chance(e){return this.f()<e}}function qf(i,e,t=0){const n=Math.floor(i),s=Math.floor(e),r=i-n,a=e-s,o=r*r*(3-2*r),c=a*a*(3-2*a),l=ci(n,s,t),h=ci(n+1,s,t),d=ci(n,s+1,t),f=ci(n+1,s+1,t);return Zt(Zt(l,h,o),Zt(d,f,o),c)}function ir(i,e,t=0,n=4){let s=0,r=.5,a=1,o=0;for(let c=0;c<n;c++)s+=r*qf(i*a,e*a,t+c*17),o+=r,r*=.5,a*=2.03;return s/o}function Hh(i,e,t=0,n=4){let s=0,r=.5,a=1,o=0;for(let c=0;c<n;c++){const l=1-Math.abs(qf(i*a,e*a,t+c*31)*2-1);s+=r*l*l,o+=r,r*=.5,a*=2.1}return s/o}const wt=i=>Math.round(i).toLocaleString("ja-JP"),Cs=i=>(i*100).toFixed(1)+"%",Yf={low:{h:300,grass:0,near:1,fog:230,tilt:!1},mid:{h:380,grass:40,near:2,fog:300,tilt:!0},high:{h:470,grass:80,near:2,fog:360,tilt:!0}};class zv{constructor(e){this.scene=new Ih,this.rt=null,this.postScene=new Ih,this.postCam=new nl(-1,1,1,-1,0,1),this.q="mid",this.auto=!0,this.tilt=!0,this.time=8,this.w=1,this.h=1,this.pr=1,this.frameMs=16,this.acc=[],this.lastQChange=0,this.tint=new ke(1,1,1),this.renderer=new yv({canvas:e,antialias:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.outputColorSpace=qt,this.camera=new En(42,1,.3,900),this.fog=new sl(12575999,80,300),this.scene.fog=this.fog,this.hemi=new Tv(14676223,6969920,1.4),this.scene.add(this.hemi),this.sun=new Av(16773848,1.6),this.sun.position.set(.5,1,.3),this.scene.add(this.sun),this.skyMat=new Nn({uniforms:{top:{value:new ke(4889320)},bot:{value:new ke(13627135)},stars:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top; uniform vec3 bot; uniform float stars; varying vec3 vP;
        float h(vec3 p){ return fract(sin(dot(floor(p*180.0), vec3(12.9898,78.233,37.719)))*43758.5453); }
        void main(){ vec3 d = normalize(vP); float t = clamp(d.y*1.6+0.15,0.0,1.0); vec3 c = mix(bot, top, t);
          if (stars > 0.0 && d.y > 0.05) { float s = step(0.997, h(d)); c += vec3(s*stars); }
          gl_FragColor = vec4(c,1.0); }`,side:tn,depthWrite:!1,fog:!1}),this.sky=new De(new Fa(800,16,10),this.skyMat),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.scene.add(this.sky);const t=new Nn({uniforms:{tDiffuse:{value:null},res:{value:new Xe(1,1)},tilt:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy,0.0,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 res; uniform float tilt; varying vec2 vUv;
        void main(){
          vec4 c = texture2D(tDiffuse, vUv);
          float b = tilt * smoothstep(0.18, 0.5, abs(vUv.y - 0.45)) ;
          if (b > 0.01) { vec2 px = 1.0/res * (1.0 + b*1.5); vec4 s = c*0.2;
            s += texture2D(tDiffuse, vUv + vec2(px.x,0.0))*0.2; s += texture2D(tDiffuse, vUv - vec2(px.x,0.0))*0.2;
            s += texture2D(tDiffuse, vUv + vec2(0.0,px.y))*0.2; s += texture2D(tDiffuse, vUv - vec2(0.0,px.y))*0.2; c = mix(c, s, b); }
          vec2 q = vUv - 0.5; float v = 1.0 - dot(q,q)*0.55; c.rgb *= v;
          float l = dot(c.rgb, vec3(0.299,0.587,0.114)); c.rgb = mix(vec3(l), c.rgb, 1.12);
          gl_FragColor = vec4(c.rgb, 1.0); }`,depthTest:!1,depthWrite:!1});this.post=new De(new gn(2,2),t),this.post.frustumCulled=!1,this.postScene.add(this.post),addEventListener("resize",()=>this.resize()),this.resize()}setQuality(e){this.auto=e==="auto",e!=="auto"&&(this.q=e),this.resize()}resize(){const e=innerWidth,t=innerHeight,n=Yf[this.q];this.pr=_n(n.h/t,.25,Math.min(devicePixelRatio,1.5)),this.w=Math.max(1,Math.round(e*this.pr)),this.h=Math.max(1,Math.round(t*this.pr)),this.renderer.setPixelRatio(1),this.renderer.setSize(this.w,this.h,!1);const s=this.renderer.domElement;if(s.style.width=e+"px",s.style.height=t+"px",this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.rt?.dispose(),this.rt=null,this.tilt&&n.tilt){this.rt=new Di(this.w,this.h,{minFilter:Ot,magFilter:Ot,depthBuffer:!0}),this.rt.texture.colorSpace=qt;const r=this.post.material;r.uniforms.tDiffuse.value=this.rt.texture,r.uniforms.res.value.set(this.w,this.h)}this.fog.far=n.fog,this.fog.near=n.fog*.35,this.camera.far=n.fog+60,this.camera.updateProjectionMatrix()}setDayTime(e){this.time=e;const t=_n(Math.sin((e-6)/24*Math.PI*2)*1.4+.35,0,1),n=_n(1-Math.abs(e-18)/1.8,0,1)+_n(1-Math.abs(e-6)/1.8,0,1),s=new ke(658470).lerp(new ke(4889320),t),r=new ke(1710144).lerp(new ke(13627135),t).lerp(new ke(16752752),n*.6);this.skyMat.uniforms.top.value.copy(s),this.skyMat.uniforms.bot.value.copy(r),this.skyMat.uniforms.stars.value=1-t,this.fog.color.copy(r),this.hemi.intensity=Zt(.55,1.45,t),this.sun.intensity=Zt(.15,1.6,t),this.sun.color.set(16773848).lerp(new ke(16751194),n*.7),t<.2&&this.sun.color.lerp(new ke(8030975),.6);const a=(e-6)/24*Math.PI*2;this.sun.position.set(Math.cos(a)*.6,Math.max(.25,Math.sin(a)),.4),this.tint.setRGB(Zt(.42,1,t),Zt(.45,1,t),Zt(.7,1,t)).lerp(new ke(1,.8,.65),n*.4)}render(){this.sky.position.copy(this.camera.position),this.rt?(this.renderer.setRenderTarget(this.rt),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.post.material.uniforms.tilt.value=1,this.renderer.render(this.postScene,this.postCam)):(this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera))}sample(e,t){if(this.frameMs=this.frameMs*.95+e*.05,!this.auto||t-this.lastQChange<4e3)return;const n=["low","mid","high"],s=n.indexOf(this.q);this.frameMs>24&&s>0?(this.q=n[s-1],this.lastQChange=t,this.resize()):this.frameMs<13&&s<2&&t-this.lastQChange>15e3&&(this.q=n[s+1],this.lastQChange=t,this.resize())}}const Le=480,Ln=2,ur=Le*2/Ln+1,Dn=0,Zr={plains:"翠風の野",canyon:"紅砂の谷",peaks:"霜嶺",spire:"影の高原"},Vh={plains:[0,140,230],canyon:[290,-40,170],peaks:[-250,-210,200],spire:[200,-262,85]},fl=[];function Bv(i,e,t,n){fl.push({x:i,z:e,r:t,h:n})}function za(i,e){const t={};let n=0;for(const s in Vh){const[r,a,o]=Vh[s],c=Math.exp(-((i-r)**2+(e-a)**2)/(o*o));t[s]=c,n+=c}n<1e-6&&(t.plains=1,n=1);for(const s in t)t[s]/=n;return t}function dl(i,e){const t=za(i,e);let n="plains",s=-1;for(const r in t)t[r]>s&&(s=t[r],n=r);return n}function Kf(i,e){const t=Math.hypot(i,e*1.05)/455+(ir(i*.004+9,e*.004-3,7,3)-.5)*.42,n=dr(1,.8,t),s=za(i,e),r=ir(i*.011,e*.011,1,4),a=3+r*18+Math.pow(ir(i*.004,e*.004,2,3),2)*20-4,o=ir(i*.007+40,e*.007,3,4),c=Math.floor(o*6)/6,l=o*6%1,h=6+(c+Math.pow(l,12)/6)*62-Hh(i*.01,e*.01,4,2)*6,d=14+Math.pow(Hh(i*.0065,e*.0065,5,5),1.4)*110+r*8,f=34+r*10+(ir(i*.02,e*.02,6,2)-.5)*6;let u=a*s.plains+h*s.canyon+d*s.peaks+f*s.spire;u=Zt(-14,u,n),n<.98&&(u=Math.min(u,Zt(-14,2.5,n)+(u-2.5)*Math.pow(n,3)));for(const g of fl){const _=Math.hypot(i-g.x,e-g.z);_<g.r*1.8&&(u=Zt(g.h,u,dr(g.r,g.r*1.8,_)))}return u}const Tc=new Float32Array(ur*ur).fill(NaN);function Hv(){Tc.fill(NaN)}function lr(i,e){i=_n(i,0,ur-1)|0,e=_n(e,0,ur-1)|0;const t=e*ur+i;let n=Tc[t];return n!==n&&(n=Kf(i*Ln-Le,e*Ln-Le),Tc[t]=n),n}function nt(i,e){const t=(i+Le)/Ln,n=(e+Le)/Ln,s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r,c=lr(s,r),l=lr(s+1,r),h=lr(s,r+1),d=lr(s+1,r+1);return a+o<=1?c+(l-c)*a+(h-c)*o:d+(h-d)*(1-a)+(l-d)*(1-o)}function sr(i,e){return lr(i,e)}function As(i,e){const t=Ln,n=nt(i+t,e)-nt(i-t,e),s=nt(i,e+t)-nt(i,e-t),r=-n,a=2*t,o=-s,c=Math.hypot(r,a,o);return[r/c,a/c,o/c]}const ul=(i,e)=>1-As(i,e)[1],Rt=i=>[parseInt(i.slice(1,3),16)/255,parseInt(i.slice(3,5),16)/255,parseInt(i.slice(5,7),16)/255],kn={grass:[Rt("#6cb44a"),Rt("#58a040"),Rt("#7ec456")],canyon:[Rt("#d08a4a"),Rt("#c87440"),Rt("#e0a060")],peaks:[Rt("#8aa070"),Rt("#7a9060"),Rt("#98a880")],spire:[Rt("#5a4a78"),Rt("#4c3e68"),Rt("#6a5888")],rockP:Rt("#8a8478"),rockC:Rt("#a85a34"),rockK:Rt("#6e7080"),rockS:Rt("#3e3450"),sand:Rt("#e8d8a0"),snow:Rt("#eef4ff"),wet:Rt("#b8a878")};function Jf(i,e,t,n,s){const r=za(i,e),a=ci(Math.floor(i/2),Math.floor(e/2),3),o=a<.33?0:a<.66?1:2,c=u=>[0,1,2].map(g=>u.plains[g]*r.plains+u.canyon[g]*r.canyon+u.peaks[g]*r.peaks+u.spire[g]*r.spire);let l=c({plains:kn.grass[o],canyon:kn.canyon[o],peaks:kn.peaks[o],spire:kn.spire[o]});const h=c({plains:kn.rockP,canyon:kn.rockC,peaks:kn.rockK,spire:kn.rockS}),d=dr(.22,.32,n);l=l.map((u,g)=>Zt(u,h[g]*(.9+a*.2),d));const f=dr(58,66,t+a*6)*r.peaks*(1-d*.6);if(l=l.map((u,g)=>Zt(u,kn.snow[g],_n(f*1.4))),t<2.2){const u=dr(2.2,1.2,t);l=l.map((g,_)=>Zt(g,kn.sand[_],u))}t<0&&(l=l.map((u,g)=>Zt(u,kn.wet[g],.5))),s[0]=l[0],s[1]=l[1],s[2]=l[2]}const At=[],Qt=new Map;let Qi={x:0,z:380};const wo=[{id:"ruko",name:"ルコの町",x:20,z:236,r:36,houses:9},{id:"akatsuchi",name:"アカツチ村",x:262,z:-10,r:24,houses:5},{id:"shimotsuki",name:"シモツキ村",x:-196,z:-150,r:24,houses:5}];function Vv(i,e){for(let t=0;t<40&&nt(i,e)<1.5;t++)i*=.97,e*=.97;return{x:i,z:e}}function Ut(i){const e={...i,y:i.y??nt(i.x,i.z),region:dl(i.x,i.z)};return At.push(e),Qt.set(e.id,e),e}let Gh=!1;function Gv(){if(Gh)return;Gh=!0;const i=[];for(const f of wo)i.push([f.x,f.z,f.r]);const e=[{id:"dom_book",name:"知恵の祠",x:-120,z:170,kind:"book"},{id:"dom_relic",name:"紅砂の遺跡",x:330,z:70,kind:"relic"},{id:"dom_ore",name:"霜鉄の坑道",x:-300,z:-90,kind:"ore"}],t=[{id:"st_plains",x:70,z:120},{id:"st_canyon",x:210,z:-100},{id:"st_peaks",x:-250,z:-250}],n=[{id:"b_puff",enemy:"boss_puff",x:-110,z:40},{id:"b_golem",enemy:"boss_golem",x:330,z:-100},{id:"b_wisp",enemy:"boss_wisp",x:-300,z:-190},{id:"b_knight",enemy:"boss_knight",x:200,z:-255}];for(const f of e)i.push([f.x,f.z,9]);for(const f of t)i.push([f.x,f.z,7]);for(const f of n)i.push([f.x,f.z,f.id==="b_knight"?34:24]);for(const[f,u,g]of i)Bv(f,u,g,Math.max(4,Kf(f,u)));Hv();let s=236;for(;s<460&&nt(14,s+4)>1.2;)s+=4;Qi={x:14,z:s-6};for(const f of wo){Ut({id:"wp_"+f.id,type:"waypoint",x:f.x+6,z:f.z+f.r*.5,name:f.name});const u=new fi(f.x*7+f.z);for(let g=0;g<f.houses;g++){const _=g/f.houses*Math.PI*2+.3,m=f.r*.72;Ut({id:`house_${f.id}_${g}`,type:"house",x:f.x+Math.cos(_)*m,z:f.z+Math.sin(_)*m,data:{rot:-_+Math.PI/2,w:u.range(5,7),d:u.range(5,6.5),h:u.range(3.5,5),roof:u.pick(["#c84a3a","#3a6ac8","#5a9a4a","#8a5aa8","#d89a3a"])}})}}Ut({id:"wp_beach",type:"waypoint",x:Qi.x-10,z:Qi.z-14,name:"星の落ちた浜"});for(const f of e)Ut({id:f.id,type:"domain",x:f.x,z:f.z,name:f.name,data:{kind:f.kind}}),Ut({id:"wp_"+f.id,type:"waypoint",x:f.x+12,z:f.z+8,name:f.name+"前"});for(const f of t)Ut({id:f.id,type:"statue",x:f.x,z:f.z,name:"星の像"}),Ut({id:"wp_"+f.id,type:"waypoint",x:f.x+8,z:f.z+6,name:"星の像"});for(const f of n)Ut({id:f.id,type:"boss",x:f.x,z:f.z,data:{enemy:f.enemy}}),f.id!=="b_knight"&&Ut({id:"wp_"+f.id,type:"waypoint",x:f.x+30,z:f.z+10,name:"決戦の地"});Ut({id:"spire",type:"spire",x:200,z:-282,name:"影の塔"}),Ut({id:"wp_spire",type:"waypoint",x:170,z:-220,name:"影の高原"}),Ut({id:"tower",type:"tower",x:20,z:222,name:"星の塔"});for(const[f,[u,g,_]]of[[-60,300,"灯台の岬"],[130,260,"東の浜"],[-200,120,"西の丘"],[140,60,"風車の丘"],[-40,-40,"古い橋"],[160,-200,"谷の入口"],[-110,-260,"雪の道"],[-360,-180,"凍った湖"],[390,-10,"赤い崖"]].entries()){const m=Vv(u,g);Ut({id:"wp_x"+f,type:"waypoint",x:m.x,z:m.z,name:_})}const r=[{id:"npc_elder",name:"町長ゴウ",x:26,z:236,look:{hair:"#e0e0e0",style:"short",skin:"#e8c0a0",eye:"#3a2a1a",c1:"#6a4a8a",c2:"#e8d8a8",c3:"#ffd060"}},{id:"npc_shop",name:"商人ミツ",x:8,z:228,look:{hair:"#7a4a2a",style:"bun",skin:"#fcd8b8",eye:"#3a2a1a",c1:"#3a8a5a",c2:"#f4e8c8",c3:"#ffd060",skirt:!0}},{id:"npc_guild",name:"受付のハナ",x:34,z:226,look:{hair:"#ff9ab8",style:"long",skin:"#fde4d0",eye:"#5a3a8a",c1:"#2a3a6a",c2:"#ffffff",c3:"#ffd060",skirt:!0}},{id:"npc_smith",name:"鍛冶屋テツ",x:268,z:-4,look:{hair:"#2a2a2a",style:"spiky",skin:"#d8a070",eye:"#2a1a1a",c1:"#5a3a2a",c2:"#a87a4a",c3:"#ff7a3c",acc:"band"}},{id:"npc_monk",name:"見張りのオウ",x:-190,z:-144,look:{hair:"#c8c8d8",style:"short",skin:"#f0d0b8",eye:"#3a5a8a",c1:"#3a4a6a",c2:"#e8f0ff",c3:"#9ae8ff",acc:"hood"}},{id:"npc_girl",name:"迷子のチイ",x:120,z:150,look:{hair:"#ffcf6a",style:"twin",skin:"#ffe4d0",eye:"#3a7ad8",c1:"#ff8a8a",c2:"#ffffff",c3:"#ffd060",skirt:!0}},{id:"npc_fisher",name:"漁師のハマ",x:-55,z:290,look:{hair:"#4a4a4a",style:"short",skin:"#d8a070",eye:"#2a1a1a",c1:"#2a5a8a",c2:"#e8e0c8",c3:"#ffd060",acc:"hat"}}];for(const f of r)Ut({id:f.id,type:"npc",x:f.x,z:f.z,name:f.name,data:{look:f.look}});const a=new fi(20261126),o=At.filter(f=>["waypoint","domain","statue","boss","house","spire","tower"].includes(f.type)),c=(f,u,g=2.5,_=.25,m=30)=>{if(nt(f,u)<g||ul(f,u)>_)return!1;for(const y of wo)if(Ct(f,u,y.x,y.z)<(y.r+26)**2)return!1;for(const y of o)if(Ct(f,u,y.x,y.z)<m*m)return!1;return!0},l=(f,u,g)=>{for(let _=0;_<300;_++){const m=a.range(-Le+40,Le-40),p=a.range(-Le+40,Le-40);if(c(m,p,f,u,g))return{x:m,z:p}}return null},h=["fire","water","volt","frost","star","shadow"],d={plains:["water","fire","volt","star"],canyon:["fire","volt","star"],peaks:["frost","water","shadow"],spire:["shadow","star","volt"]};for(let f=0;f<34;f++){const u=l(3,.2,34);if(!u)continue;const g=dl(u.x,u.z),_=d[g],m=[],p=a.next();if(p<.35){const y=a.int(3,5);for(let x=0;x<y;x++)m.push("puff_"+a.pick(_))}else p<.7?(m.push("bandit","bandit",a.chance(.6)?"archer":"shaman"),a.chance(.5)&&m.push("archer")):p<.85?m.push("wisp_"+a.pick(_),"wisp_"+a.pick(_),"puff_"+a.pick(_)):m.push("golem","puff_"+a.pick(_),"puff_"+a.pick(_));Ut({id:"camp"+f,type:"camp",x:u.x,z:u.z,data:{enemies:m}}),o.push(At[At.length-1])}for(let f=0;f<70;f++){const u=l(1.5,.3,14);if(!u)continue;const g=a.next(),_=g<.55?1:g<.85?2:g<.97?3:4;Ut({id:"chest"+f,type:"chest",x:u.x,z:u.z,data:{tier:_}})}for(let f=0;f<12;f++){const u=l(2.5,.2,30);if(!u)continue;const g=[a.pick(h),a.pick(h),a.pick(h)];Ut({id:"puzzle"+f,type:"puzzle",x:u.x,z:u.z,data:{els:g}}),o.push(At[At.length-1])}for(let f=0;f<48;f++){let u=null;const g=a.range(-Le+60,Le-60),_=a.range(-Le+60,Le-60);for(let m=0;m<14;m++){const p=g+a.range(-40,40),y=_+a.range(-40,40),x=nt(p,y);x>3&&(!u||x>u.h)&&(u={x:p,z:y,h:x})}u&&Ut({id:"shard"+f,type:"shard",x:u.x,z:u.z,y:u.h+1.6})}}function Zf(i){const e=parseInt(i.slice(1),16);return[e>>16&255,e>>8&255,e&255]}const Wh=(i,e,t)=>"#"+[i,e,t].map(n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0")).join("");function Ce(i,e){const[t,n,s]=Zf(i);return e<1?Wh(t*e*.95,n*e*.95,s*e*1.02):Wh(t+(255-t)*(e-1),n+(255-n)*(e-1),s+(255-s)*(e-1))}function Xs(i,e,t,n,s,r="#1a1424"){const a=i.getImageData(e,t,n,s),o=a.data,c=new Uint8ClampedArray(o),[l,h,d]=Zf(r);for(let f=0;f<s;f++)for(let u=0;u<n;u++){const g=(f*n+u)*4;if(o[g+3]>0)continue;let _=-1;for(const[m,p]of[[1,0],[-1,0],[0,1],[0,-1]]){const y=u+m,x=f+p;if(y<0||x<0||y>=n||x>=s)continue;const v=(x*n+y)*4;if(o[v+3]>0){_=v;break}}_>=0&&(c[g]=o[_]*.25+l*.75,c[g+1]=o[_+1]*.25+h*.75,c[g+2]=o[_+2]*.25+d*.75,c[g+3]=255)}a.data.set(c),i.putImageData(a,e,t)}const oe=(i,e,t,n,s,r)=>{i.fillStyle=r,i.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(s))},pn=(i,e,t,n,s,r)=>{for(let a=-s;a<=s;a++){const o=Math.round(n*Math.sqrt(Math.max(0,1-a*a/(s*s))));oe(i,e-o,t+a,o*2,1,r)}};function Li(i,e){const t=document.createElement("canvas");return t.width=i,t.height=e,t}const Co=new Map,Ui=(i,e)=>(Co.has(i)||Co.set(i,e()),Co.get(i)),Is={puff:28,wisp:28,golem:44},si={puff:26,wisp:32,golem:50};function Wv(i,e=!1){return Ui("puff"+i+e,()=>{const t=Is.puff,n=si.puff,s=Li(t*7,n),r=s.getContext("2d",{willReadFrequently:!0}),a=[[10,8],[11,7],[9,10],[11,7],[12,6],[8,11],[10,8]],o=[0,0,3,0,0,4,0];for(let c=0;c<7;c++){const[l,h]=a[c],d=c*t+14,f=n-2-h-o[c],u=c===6?"#ffffff":i;pn(r,d,f,l,h,Ce(u,.75)),pn(r,d-1,f-1,l-1,h-1,u),pn(r,d-3,f-h/2,3,2,Ce(u,1.45)),oe(r,d-4,f-h/2-1,2,1,"#ffffff");const g=f+1;c!==6&&(oe(r,d-4,g-1,2,3,"#1a1424"),oe(r,d+2,g-1,2,3,"#1a1424"),oe(r,d-4,g-1,1,1,"#ffffff"),oe(r,d+2,g-1,1,1,"#ffffff")),(c===4||c===5)&&oe(r,d-1,g+3,3,2,"#5a1a2a"),e&&(oe(r,d-4,f-h-3,9,3,"#ffd84a"),oe(r,d-4,f-h-5,1,2,"#ffd84a"),oe(r,d,f-h-6,1,3,"#ffd84a"),oe(r,d+4,f-h-5,1,2,"#ffd84a"),oe(r,d,f-h-2,1,1,"#ff4a6a")),Xs(r,c*t,0,t,n)}return s})}function $v(i){return Ui("wisp"+i,()=>{const e=Is.wisp,t=si.wisp,n=Li(e*7,t),s=n.getContext("2d",{willReadFrequently:!0});for(let r=0;r<7;r++){const a=r*e+14,o=16+[0,1,0,-1,-1,0,0][r],c=r===6?"#ffffff":i,l=r===4||r===5?1:0;for(let h=0;h<4;h++)oe(s,a-3+h*2+(r+h)%2,o-9-h%2*2-l,2,4,Ce(c,1.3));pn(s,a,o,7+l,7+l,Ce(c,.8)),pn(s,a,o-1,6+l,6+l,c),pn(s,a-1,o-3,3,2,Ce(c,1.5));for(let h=0;h<3;h++)oe(s,a-4+h*3,o+7+(r+h)%2,2,3,Ce(c,.9));r!==6&&(oe(s,a-3,o-1,2,2,"#1a1424"),oe(s,a+1,o-1,2,2,"#1a1424"),oe(s,a-3,o-1,1,1,"#fff"),oe(s,a+1,o-1,1,1,"#fff")),Xs(s,r*e,0,e,t)}return n})}function Xv(i,e="#8a8478"){return Ui("golem"+i+e,()=>{const t=Is.golem,n=si.golem,s=Li(t*7,n),r=s.getContext("2d",{willReadFrequently:!0}),a=e,o=Ce(a,.7),c=Ce(a,1.25);for(let l=0;l<7;l++){const h=l*t+22,d=n-2,f=l===1||l===3?1:0,g=l===6?"#ffffff":a,_=l===2?-2:l===3?2:0;oe(r,h-9+_,d-9,7,9,o),oe(r,h+2-_,d-9,7,9,o),oe(r,h-12,d-30+f,24,22,g),oe(r,h-12,d-30+f,24,2,c),oe(r,h+8,d-28+f,4,20,o),oe(r,h-5,d-22+f,10,6,Ce(a,.85)),oe(r,h-2,d-21+f,4,4,i),oe(r,h-7,d-40+f,14,11,g),oe(r,h-7,d-40+f,14,2,c),oe(r,h-4,d-36+f,8,2,"#1a1424"),oe(r,h-3,d-36+f,2,2,i),oe(r,h+1,d-36+f,2,2,i);const m=l===4?-14:l===5?2:0;oe(r,h-19,d-29+f+m,7,16,g),oe(r,h+12,d-29+f+m,7,16,o),oe(r,h-20,d-15+f+m,9,7,o),oe(r,h+11,d-15+f+m,9,7,Ce(a,.6)),oe(r,h-10,d-26+f,3,1,Ce(a,.6)),oe(r,h+3,d-14+f,4,1,Ce(a,.6)),oe(r,h-6,d-33+f,2,1,Ce(a,.6)),Xs(r,l*t,0,t,n)}return s})}function jv(i,e=0){return Ui("tree"+i+e,()=>{const t=i==="grass"||i==="flower"?16:i==="bush"||i==="rock"?24:40,n=i==="grass"||i==="flower"?12:i==="bush"||i==="rock"?18:56,s=Li(t,n),r=s.getContext("2d",{willReadFrequently:!0}),a=t/2;let o=e*9301+49297;const c=()=>(o=(o*9301+49297)%233280)/233280;if(i==="leaf"){oe(r,a-2,n-18,4,18,"#6a4a2a"),oe(r,a+1,n-18,1,18,"#4a3220");const l=["#2f6a2a","#3f8a34","#58a840","#7cc450"];for(const[h,d,f,u]of[[0,22,13,0],[-7,26,9,0],[7,25,9,0],[0,18,11,1],[-4,15,7,2],[4,20,7,1],[-3,12,4,3],[2,17,3,3]])pn(r,a+h,n-56+d+6,f,f*.85,l[u]);for(let h=0;h<12;h++)oe(r,a-10+c()*20,n-46+c()*20,1,1,"#9ad860")}else if(i==="pine"){oe(r,a-1,n-10,3,10,"#5a3a22");for(let l=0;l<5;l++){const h=n-12-l*8,d=15-l*3;for(let f=0;f<9;f++)oe(r,a-d*(1-f/10),h-f,d*2*(1-f/10),1,f<2?"#e8f4ff":l%2?"#2a5a4a":"#346a54")}oe(r,a-1,n-54,2,4,"#e8f4ff")}else if(i==="dead"){oe(r,a-2,n-30,4,30,"#7a4a2a");for(const[l,h,d]of[[0,-28,-.8],[0,-20,.7],[0,-14,-.6]])for(let f=0;f<10;f++)oe(r,a+l+Math.cos(d-Math.PI/2)*f*(d>0?-1:1),n+h-f*.8,2,2,"#6a3a1a")}else if(i==="cactus")oe(r,a-3,n-30,7,30,"#4a8a3a"),oe(r,a-3,n-30,2,30,"#6aaa4a"),oe(r,a-10,n-22,4,10,"#4a8a3a"),oe(r,a-10,n-14,8,3,"#4a8a3a"),oe(r,a+6,n-26,4,12,"#3a7a2a"),oe(r,a+3,n-16,7,3,"#3a7a2a"),oe(r,a-1,n-33,3,3,"#ff7aa8");else if(i==="crystal")for(const[l,h,d,f]of[[0,44,6,"#9a70f0"],[-7,30,5,"#7442c4"],[7,34,5,"#b88aff"]]){for(let u=0;u<h;u++){const g=u>h-8?d*(h-u)/8:d;oe(r,a+l-g/2,n-1-u,g,1,u%7===0?Ce(f,1.3):f)}oe(r,a+l-1,n-h+4,1,h-10,"#e8d8ff")}else if(i==="bush"){const l=["#2f6a2a","#3f8a34","#58a840"];pn(r,a,n-7,10,6,l[0]),pn(r,a-2,n-8,7,5,l[1]),pn(r,a-3,n-10,4,3,l[2]);for(let h=0;h<3;h++)oe(r,a-6+c()*12,n-12+c()*6,2,2,["#ff6a8a","#ffe04a","#ffffff"][h])}else if(i==="rock")pn(r,a,n-7,10,7,"#6a6a72"),pn(r,a-2,n-9,7,5,"#8a8a94"),pn(r,a-4,n-11,3,2,"#aaaab4");else if(i==="grass")for(let l=0;l<7;l++){const h=2+l*2,d=5+c()*6;for(let f=0;f<d;f++)oe(r,h+(f>d/2?l%2?1:-1:0),n-1-f,1,1,f>d-2?"#9ad860":"#4f9a3a")}else if(i==="flower")for(let l=0;l<4;l++){const h=3+l*3,d=4+c()*5;oe(r,h,n-d,1,d,"#3f8a34"),oe(r,h-1,n-d-1,3,2,["#ff6a8a","#ffe04a","#ffffff","#9ab8ff"][(l+e)%4])}return i!=="grass"&&i!=="flower"&&Xs(r,0,0,t,n,"#18202a"),s})}function qv(i="#e8dcc0"){return Ui("wall"+i,()=>{const e=Li(16,16),t=e.getContext("2d");oe(t,0,0,16,16,i);for(let n=0;n<16;n+=4)oe(t,0,n,16,1,Ce(i,.85));return oe(t,0,0,2,16,"#8a6a4a"),oe(t,14,0,2,16,"#8a6a4a"),e})}function Yv(i){return Ui("roof"+i,()=>{const e=Li(16,16),t=e.getContext("2d");oe(t,0,0,16,16,i);for(let n=0;n<16;n+=3){oe(t,0,n,16,1,Ce(i,.7));for(let s=n/3%2?2:0;s<16;s+=4)oe(t,s,n,1,3,Ce(i,.8))}return e})}function Mi(i="#9a9aa8"){return Ui("stone"+i,()=>{const e=Li(16,16),t=e.getContext("2d");oe(t,0,0,16,16,i);for(let n=0;n<16;n+=5){oe(t,0,n,16,1,Ce(i,.7));for(let s=n/5%2?4:0;s<16;s+=8)oe(t,s,n,1,5,Ce(i,.7))}return oe(t,2,2,2,1,Ce(i,1.2)),e})}function Kv(i){return Ui("chest"+i,()=>{const e=["#9a6a3a","#9a6a3a","#c8d0e0","#ffd24a","#ff9ad8"],t=e[i]||e[1],n=Li(16,16),s=n.getContext("2d");oe(s,0,0,16,16,i<=1?"#8a5a2a":"#6a4a2a");for(let r=0;r<16;r+=4)oe(s,0,r,16,1,"#5a3a1a");return oe(s,0,0,16,2,t),oe(s,0,14,16,2,t),oe(s,0,0,2,16,t),oe(s,14,0,2,16,t),oe(s,6,5,4,5,t),oe(s,7,7,2,2,"#1a1424"),n})}const $t=64,ca=new Map,Qf=(i,e)=>i+","+e;function ti(i){const e=Qf(Math.floor(i.x/16),Math.floor(i.z/16));ca.has(e)||ca.set(e,[]),ca.get(e).push(i)}function Jv(i,e,t=[]){t.length=0;const n=Math.floor(i/16),s=Math.floor(e/16);for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++){const o=ca.get(Qf(n+r,s+a));o&&t.push(...o)}return t}const Zv=(i,e)=>{const t=new gn(i,e).translate(0,e/2,0),n=t.clone().rotateY(Math.PI/2),s=new sn,r=[...t.attributes.position.array,...n.attributes.position.array],a=[...t.attributes.uv.array,...n.attributes.uv.array],o=[...t.index.array,...[...n.index.array].map(c=>c+4)];return s.setAttribute("position",new ft(r,3)),s.setAttribute("uv",new ft(a,2)),s.setIndex(o),s},ed={value:0};function Qv(i,e=0){const t=new Jt({map:un(i),alphaTest:.5,side:mn});return e&&(t.onBeforeCompile=n=>{n.uniforms.uT=ed,n.vertexShader=`uniform float uT;
`+n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 ip = instanceMatrix * vec4(0.,0.,0.,1.); transformed.x += sin(uT*1.7 + ip.x*0.3 + ip.z*0.2) * ${e.toFixed(3)} * max(0.0, position.y);`)}),t}const $h={leaf:[40,56],pine:[40,56],dead:[40,56],crystal:[40,56],cactus:[40,56],bush:[24,18],rock:[24,18],grass:[16,12],flower:[16,12]};let la={};function ex(){for(const i of Object.keys($h)){const[e,t]=$h[i],n=i==="grass"||i==="flower"?1.3:1.6;la[i]={geo:Zv(e*ai*n,t*ai*n),mat:Qv(jv(i,1),i==="grass"||i==="flower"?.04:i==="leaf"||i==="pine"?.015:0)}}}function tx(i,e,t=4){for(const n of fl)if((i-n.x)**2+(e-n.z)**2<(n.r+t)**2)return!0;return!1}class nx{constructor(e){this.scene=e,this.group=new jt,this.farUniform={value:new vt(0,0,0,0)},this.chunks=new Map,this.poiObjs=new Map,this.grassN=40,this.near=2,this.tint=new ke(1,1,1),this.queue=[],this.builtColliderChunks=new Set,ex(),this.terrainMat=new Nt({vertexColors:!0});const t=new Nt({vertexColors:!0});t.onBeforeCompile=s=>{s.uniforms.uB=this.farUniform,s.vertexShader=`varying vec3 vW;
`+s.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
 vW = (modelMatrix * vec4(transformed,1.0)).xyz;`),s.fragmentShader=`uniform vec4 uB; varying vec3 vW;
`+s.fragmentShader.replace("void main() {","void main() { if (vW.x > uB.x && vW.x < uB.z && vW.z > uB.y && vW.z < uB.w) discard;")},this.far=new De(this.buildGeo(-Le,-Le,Le*2,8),t),this.far.position.y=-.25,this.group.add(this.far);const n=new gn(2400,2400).rotateX(-Math.PI/2);this.water=new De(n,new Nt({color:3836632,transparent:!0,opacity:.8,depthWrite:!1})),this.water.position.y=Dn-.15,this.water.renderOrder=2,this.group.add(this.water),this.buildPois(),e.add(this.group)}buildGeo(e,t,n,s){const r=Math.round(n/s)+1,a=new Float32Array(r*r*3),o=new Float32Array(r*r*3),c=new Float32Array(r*r*3),l=[0,0,0],h=s/Ln,d=Math.round((e+Le)/Ln),f=Math.round((t+Le)/Ln);for(let _=0;_<r;_++)for(let m=0;m<r;m++){const p=d+m*h,y=f+_*h,x=e+m*s,v=t+_*s,D=sr(p,y),T=(_*r+m)*3;a[T]=x,a[T+1]=D,a[T+2]=v;const A=sr(p+1,y)-sr(p-1,y),k=sr(p,y+1)-sr(p,y-1),w=-A,M=2*Ln,R=-k,z=Math.hypot(w,M,R);c[T]=w/z,c[T+1]=M/z,c[T+2]=R/z,Jf(x,v,D,1-M/z,l),o[T]=l[0],o[T+1]=l[1],o[T+2]=l[2]}const u=[];for(let _=0;_<r-1;_++)for(let m=0;m<r-1;m++){const p=_*r+m,y=p+1,x=p+r,v=x+1;u.push(p,x,y,y,x,v)}const g=new sn;return g.setAttribute("position",new ln(a,3)),g.setAttribute("normal",new ln(c,3)),g.setAttribute("color",new ln(o,3)),g.setIndex(u),g.computeBoundingSphere(),g}buildChunk(e,t,n){const s=g=>{n&&ti(g)},r=e*$t-Le,a=t*$t-Le,o=new De(this.buildGeo(r,a,$t,Ln),this.terrainMat);this.group.add(o);const c={};new ht;const l=new Ws,h=new P,d=new P,f=(g,_,m,p,y)=>{(c[g]||(c[g]=[])).push(new ht().compose(d.set(_,nt(_,m)-.1,m),l.setFromAxisAngle(new P(0,1,0),y),h.setScalar(p)))};for(let g=0;g<$t;g+=5)for(let _=0;_<$t;_+=5){const m=r+g+ci(g+r,_+a,1)*5,p=a+_+ci(g+r,_+a,2)*5,y=ci(Math.floor(m),Math.floor(p),3),x=nt(m,p);if(x<1.6||ul(m,p)>.24||tx(m,p))continue;const D=za(m,p),T=.8+ci(Math.floor(m),Math.floor(p),4)*.5,A=y*6,k=x>55&&D.peaks>.5;D.plains>.55?y<.085?(f("leaf",m,p,T,A),s({x:m,z:p,r:.5})):y<.14?f("bush",m,p,T,A):y<.17?f("rock",m,p,T,A):y<.17+this.grassN/200&&f(y>.6?"flower":"grass",m,p,T,A):D.canyon>.5?y<.03?(f("cactus",m,p,T,A),s({x:m,z:p,r:.5})):y<.05?f("dead",m,p,T,A):y<.1?f("rock",m,p,T,A):y<.1+this.grassN/500&&f("grass",m,p,T,A):D.peaks>.5?y<.1&&!k?(f("pine",m,p,T,A),s({x:m,z:p,r:.5})):y<.06?f("pine",m,p,T,A):y<.14?f("rock",m,p,T,A):!k&&y<.14+this.grassN/400&&f("grass",m,p,T,A):D.spire>.5?y<.05?(f("crystal",m,p,T,A),s({x:m,z:p,r:.6})):y<.09&&f("rock",m,p,T,A):y<.05?(f("leaf",m,p,T,A),s({x:m,z:p,r:.5})):y<.08&&f("bush",m,p,T,A)}const u=[];for(const g in c){const _=la[g],m=new Sv(_.geo,_.mat,c[g].length);c[g].forEach((p,y)=>m.setMatrixAt(y,p)),m.computeBoundingSphere(),this.group.add(m),u.push(m)}return{mesh:o,props:u}}update(e,t,n){ed.value=n;const s=Math.floor((e+Le)/$t),r=Math.floor((t+Le)/$t),a=Math.ceil(Le*2/$t),o=this.near,c=new Set;for(let m=-o;m<=o;m++)for(let p=-o;p<=o;p++){const y=s+m,x=r+p;y<0||x<0||y>=a||x>=a||c.add(y+","+x)}for(const[m,p]of this.chunks)c.has(m)||(p.mesh.removeFromParent(),p.mesh.geometry.dispose(),p.props.forEach(y=>{y.removeFromParent(),y.dispose()}),this.chunks.delete(m));let l=0;const h=[...c].filter(m=>!this.chunks.has(m)).sort((m,p)=>{const[y,x]=m.split(",").map(Number),[v,D]=p.split(",").map(Number);return(y-s)**2+(x-r)**2-((v-s)**2+(D-r)**2)});for(const m of h){if(l>=2)break;const[p,y]=m.split(",").map(Number);this.chunks.set(m,this.buildChunkOnce(p,y,m)),l++}let d=1/0,f=1/0,u=-1/0,g=-1/0,_=!0;for(const m of c){if(!this.chunks.has(m)){_=!1;continue}const[p,y]=m.split(",").map(Number);d=Math.min(d,p),f=Math.min(f,y),u=Math.max(u,p),g=Math.max(g,y)}d===1/0?this.farUniform.value.set(0,0,0,0):_?this.farUniform.value.set(d*$t-Le+.5,f*$t-Le+.5,(u+1)*$t-Le-.5,(g+1)*$t-Le-.5):this.farUniform.value.set(s*$t-Le+.5,r*$t-Le+.5,(s+1)*$t-Le-.5,(r+1)*$t-Le-.5),this.water.position.x=e,this.water.position.z=t;for(const m in la)la[m].mat.color.copy(this.tint)}buildChunkOnce(e,t,n){const s=this.buildChunk(e,t,!this.builtColliderChunks.has(n));return this.builtColliderChunks.add(n),s}buildPois(){const e=t=>new Nt({map:un(qv(t))});for(const t of At){let n=null;if(t.type==="house"){const s=t.data,r=new jt,a=t.y,o=new De(new Bn(s.w,s.h,s.d),e(["#e8dcc0","#f0e8d8","#d8c8a8"][Math.floor(t.x)&1]));o.position.y=s.h/2,r.add(o);const c=new Sn(.01,s.w*.75,2.6,4,1);c.rotateY(Math.PI/4),c.scale(1,1,s.d/s.w);const l=new De(c,new Nt({map:un(Yv(s.roof))}));l.position.y=s.h+1.3,r.add(l);const h=new De(new gn(1.2,2),new Nt({color:5913122}));h.position.set(0,1,s.d/2+.01),r.add(h);const d=new De(new gn(1,.8),new Jt({color:16771232}));d.position.set(s.w*.28,s.h*.6,s.d/2+.01),r.add(d),r.position.set(t.x,a-.2,t.z),r.rotation.y=s.rot,n=r,ti({x:t.x,z:t.z,r:Math.max(s.w,s.d)*.55,top:a+s.h})}else if(t.type==="waypoint"){const s=new jt,r=new De(new Sn(1.2,1.5,.6,6),new Nt({map:un(Mi())}));r.position.y=.3,s.add(r);const a=new De(new Sn(.3,.45,3,6),new Nt({map:un(Mi("#b8b8c8"))}));a.position.y=2,s.add(a);const o=new De(new Zi(.5),new Jt({color:6974074}));o.position.y=4.1,o.name="gem",s.add(o),s.position.set(t.x,t.y,t.z),n=s,ti({x:t.x,z:t.z,r:.6})}else if(t.type==="statue"){const s=new jt,r=new De(new Sn(3,3.5,1,8),new Nt({map:un(Mi())}));r.position.y=.5,s.add(r);const a=new De(new Sn(.9,1.4,5,8),new Nt({map:un(Mi("#c8c8d0"))}));a.position.y=3.5,s.add(a);const o=new De(new Fa(.9,8,6),new Nt({color:13158608}));o.position.y=6.6,s.add(o);const c=new De(new Zi(1.2),new Jt({color:16767216}));c.position.y=9,c.name="gem",s.add(c),s.position.set(t.x,t.y,t.z),n=s,ti({x:t.x,z:t.z,r:3})}else if(t.type==="domain"){const s=new jt,r=new Nt({map:un(Mi("#8a8a9a"))});for(const c of[-1,1]){const l=new De(new Bn(1.2,6,1.2),r);l.position.set(c*3,3,0),s.add(l),ti({x:t.x+c*3,z:t.z,r:.8})}const a=new De(new Bn(8.4,1.2,1.6),r);a.position.y=6.4,s.add(a);const o=new De(new gn(4.8,5.4),new Jt({color:10121471,transparent:!0,opacity:.6,side:mn}));o.position.y=2.8,o.name="gem",s.add(o),s.position.set(t.x,t.y,t.z),n=s}else if(t.type==="spire"){const s=new jt,r=new Nt({map:un(Mi("#4a3a6a"))}),a=new De(new Sn(7,11,80,8),r);a.position.y=40,s.add(a);for(let o=0;o<6;o++){const c=new De(new Oa(8+(5-o)*.4,.4,4,12),new Jt({color:10514687}));c.rotation.x=Math.PI/2,c.position.y=10+o*12,s.add(c)}s.position.set(t.x,t.y-1,t.z),n=s,ti({x:t.x,z:t.z,r:11})}else if(t.type==="tower"){const s=new jt,r=new Nt({map:un(Mi("#e8e4f0"))}),a=new De(new Sn(2.5,3.2,22,8),r);a.position.y=11,s.add(a);const o=new De(new al(3.2,5,8),new Nt({color:4877016}));o.position.y=24.5,s.add(o);const c=new De(new Zi(1),new Jt({color:16767050}));c.position.y=28,c.name="gem",s.add(c),s.position.set(t.x,t.y,t.z),n=s,ti({x:t.x,z:t.z,r:3.2})}else if(t.type==="puzzle"){const s=new jt;t.data.els.forEach((r,a)=>{const o=a/3*Math.PI*2,c=Math.cos(o)*4,l=Math.sin(o)*4,h=new De(new Sn(.5,.6,2.4,6),new Nt({map:un(Mi())}));h.position.set(c,1.2,l),s.add(h);const d=new De(new Zi(.45),new Jt({color:new ke(_t[r].color).multiplyScalar(.35)}));d.position.set(c,2.8,l),d.name="orb"+a,s.add(d),ti({x:t.x+c,z:t.z+l,r:.7})}),s.position.set(t.x,nt(t.x,t.z),t.z),n=s}n&&(this.group.add(n),this.poiObjs.set(t.id,n))}}chestMesh(e){const t=new jt,n=new Nt({map:un(Kv(e))}),s=new De(new Bn(1.3,.8,.9),n);s.position.y=.4,t.add(s);const r=new De(new Bn(1.32,.35,.92),n);return r.position.y=.95,r.name="lid",t.add(r),t}}const en=40,vn=44,Xh=17,kt={idle:[0,1],walk:[2,3,4,5],atk:[6,7,8],cast:[9],jump:[10],glide:[11],climb:[12,13],swim:[14,15],hurt:[16]},Y=(i,e,t,n,s,r)=>{n<=0||s<=0||(i.fillStyle=r,i.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(s)))};function ni(i,e,t,n,s,r,a,o){const c=Math.cos(n),l=Math.sin(n);for(let h=0;h<=s;h+=.5){const d=e+c*h,f=t+l*h;Y(i,d-(r-1)/2,f-(r-1)/2,r,r,o&&h>s-2?o:a)}}function ix(i,e,t){const n={bob:0,lL:0,lR:0,sL:0,sR:0,hand:[6,2],hand2:[-6,2],wAng:Math.PI/2+.25,wShow:t==="sword"||t==="polearm"?"hand":t==="catalyst"?"float":"back",tuck:0,glide:!1,eyes:"open",swim:!1,lean:0};if(t==="polearm"&&(n.wAng=-Math.PI/2+.08),i===1&&(n.bob=1),i>=2&&i<=5){const s=i-2;n.bob=s%2,e===2?(n.sL=[2,0,-2,0][s],n.sR=-n.sL,n.lL=s===1?1:0,n.lR=s===3?1:0,n.hand=[[-2,2],[1,2],[4,2],[1,2]][s]):(n.lL=s===0?1:0,n.lR=s===2?1:0,n.hand=[6,2+(s===0?-1:s===2?1:0)],n.hand2=[-6,2+(s===2?-1:s===0?1:0)])}if(i>=6&&i<=8){const s=i-6;if(t==="bow")n.wShow="aim",n.hand=e===2?[8,-1]:[5,-1],n.hand2=e===2?[s===0?0:3,-1]:[-4,-1],n.lean=s===1?-1:0;else if(t==="catalyst")n.wShow="float",n.hand=e===2?[8+s,-2]:[6,-4-s],n.hand2=e===2?[5,0]:[-6,-4];else{n.wShow="hand";const r=t==="claymore";e===2?(n.hand=[[-3,-6],[7,0],[6,3]][s],n.wAng=[-2.3,.1,1][s],n.sL=[0,2,2][s],n.sR=[0,-2,-1][s],n.lean=[-1,1,1][s]):(n.hand=[[6,-6],[-5,1],[-6,3]][s],n.wAng=[-1.9,2.6,2.9][s]),t==="polearm"&&(e===2?(n.wAng=[0,0,.05][s],n.hand=[[-4,0],[9,0],[7,1]][s],n.lean=[-1,1,1][s],n.sL=[0,3,2][s],n.sR=[0,-2,-1][s]):(n.wAng=[1.25,1.05,1.1][s],n.hand=[[4,-3],[6,3],[6,2]][s])),r&&(n.bob=s===1?1:0)}}if(i===9&&(n.hand=[5,-9],n.hand2=[-5,-9],n.wShow=t==="catalyst"?"float":t==="bow"?"back":"hand",n.wAng=-Math.PI/2),i===10&&(n.tuck=2,n.hand=[6,-1],n.hand2=[-6,-1]),i===11&&(n.glide=!0,n.hand=[5,-10],n.hand2=[-5,-10],n.tuck=1,n.wShow=t==="catalyst"?"none":"back"),i===12||i===13){const s=i-12;n.hand=[5,s?-10:-6],n.hand2=[-5,s?-6:-10],n.lL=s?2:0,n.lR=s?0:2,n.wShow=t==="catalyst"?"none":"back"}if(i===14||i===15){const s=i-14;n.swim=!0,n.hand=e===2?[s?9:4,-2]:[8,s?-3:-1],n.hand2=e===2?[s?-2:2,-1]:[-8,s?-1:-3],n.wShow="none"}return i===16&&(n.eyes="shut",n.hand=[7,-3],n.hand2=[-7,-3],n.lean=-1,n.bob=1),n}function wc(i,e,t,n,s,r){const a="#dfe6f2";e==="sword"?(ni(i,t,n,s,10,2,a,"#ffffff"),ni(i,t,n,s+Math.PI,2,2,r.c3),Y(i,t-1,n-1,3,3,r.c3)):e==="claymore"?(ni(i,t,n,s,14,3,a,"#ffffff"),ni(i,t+Math.cos(s)*2,n+Math.sin(s)*2,s,10,1,"#8a96ac"),ni(i,t,n,s+Math.PI,3,2,r.c3),Y(i,t-2,n-1,4,3,r.c3)):e==="polearm"&&(ni(i,t,n,s+Math.PI,6,1,"#7a5a3a"),ni(i,t,n,s,14,1,"#8a6a4a"),ni(i,t+Math.cos(s)*14,n+Math.sin(s)*14,s,4,2,a,"#ffffff"),Y(i,t+Math.cos(s)*13-1,n+Math.sin(s)*13-1,3,2,r.c3))}function jh(i,e,t,n,s){const r=Ce(n.c3,.8);for(let a=-7;a<=7;a++){const o=e+(s?Math.round(2.4-a*a/18):0),c=t+a;Y(i,o,c,1,1,r)}s&&Y(i,e-1,t-7,1,15,"#f4f0e0")}function sx(i,e,t,n,s,r,a){const o=ix(r,s,a),c=n.tall||0,l=e+20,h=t+42,d=Ce(n.skin,.82),f=Ce(n.c1,.72),u=Ce(n.c1,1.15),g=Ce(n.hair,.72),_=Ce(n.hair,1.2),m=6+c-o.tuck,p=h-m-(o.swim,0),y=p-8+o.bob,x=y-11,v=l+o.lean,D=r===12||r===13,T=D?1:s,A=I=>[l+I[0],y+3+I[1]];if(o.glide){for(let I=0;I<15;I++){const K=15-I;Y(i,l-K,x-7+Math.floor(I/3),K*2,1,I<2?n.c3:I%5===0?Ce(n.c2,.85):n.c2)}Y(i,l-1,x-5,2,6,"#6a5a4a")}const k=()=>{if(o.wShow==="back")if(a==="claymore")wc(i,a,l+(T===2?-5:4),y+7,-2.1,n);else if(a==="bow")if(T===1)for(let I=-6;I<=6;I++)Y(i,l-1+Math.round(Math.abs(I)/3),y+3+I,1,1,Ce(n.c3,.8));else jh(i,l+(T===2?-5:5),y+3,n,!1);else(a==="polearm"||a==="sword")&&ni(i,l+(T===2?-4:4),y+9,-2,a==="polearm"?18:10,1,a==="polearm"?"#8a6a4a":"#dfe6f2")};if(T!==1&&k(),n.cape&&T!==0){const I=T===2?5:10;Y(i,T===2?l-6:l-5,y+1,I,10+c,Ce(n.c2==="#ffffff"?n.c3:n.c2,.75))}if(n.cape&&T===0&&(Y(i,l-7,y+1,2,9,Ce(n.c2,.7)),Y(i,l+5,y+1,2,9,Ce(n.c2,.7))),n.style==="long"||n.style,n.style==="long"&&T!==1){const I=T===2?v-6:v-7,K=T===2?6:14;Y(i,I,x+3,K,15,g)}n.style==="twin"&&T===0&&(Y(i,v-9,x+4,3,11,n.hair),Y(i,v+6,x+4,3,11,n.hair),Y(i,v-9,x+4,1,11,g),Y(i,v+8,x+4,1,11,g)),n.style==="twin"&&T===2&&Y(i,v-8,x+4,3,11,g),n.style==="ponytail"&&T===2&&(Y(i,v-9,x+3,4,3,n.hair),Y(i,v-10,x+5,3,8,g)),n.style==="ponytail"&&T===0&&Y(i,v+5,x+2,3,3,g);const w=(I,K,ae,xe)=>{const[Ue,Ke]=A(I),X=y+1,ne=Math.max(Math.abs(Ue-xe),Math.abs(Ke-X),1);for(let ye=0;ye<=ne;ye++){const ce=ye/ne,Ae=xe+(Ue-xe)*ce,Ne=X+(Ke-X)*ce;Y(i,Ae-1,Ne,2,2,ce>.75?K:ae)}return[Ue,Ke]};if(T===2&&!o.swim&&w(o.hand2,d,f,l),!o.swim){const I=(xe,Ue,Ke,X)=>{Y(i,xe,p,3,m-Ue,Ke),Y(i,xe,h-2-Ue,3,2,X)},K=n.skirt?n.skin:Ce(n.c1,.6),ae=Ce(n.c3,.55);T===2?(I(l-2+o.sR,o.lR,Ce(K,.8),Ce(ae,.8)),I(l-1+o.sL,o.lL,K,ae)):(I(l-4,o.lL,K,ae),I(l+1,o.lR,K,ae))}const M=T===2?7:10,R=T===2?l-3+o.lean:l-5+o.lean;if(Y(i,R,y,M,8,n.c1),Y(i,R,y,M,1,u),Y(i,R+M-2,y+1,2,7,f),T===0&&(Y(i,l-1+o.lean,y,2,5,n.c2),Y(i,l-2+o.lean,y,4,1,n.c2)),T===2&&Y(i,R+M-3,y,2,4,n.c2),Y(i,R,y+6,M,1,n.c3),n.skirt&&!o.swim?(Y(i,R-1,y+7,M+2,4,n.c2),Y(i,R-1,y+10,M+2,1,Ce(n.c2,.75))):o.swim||Y(i,R,y+7,M,2,f),n.cape&&T===1&&(Y(i,l-5,y,10,11+c,Ce(n.c2==="#ffffff"?n.c3:n.c2,.85)),Y(i,l-5,y,10,1,n.c3)),n.style==="long"&&T===1&&(Y(i,v-6,x+6,12,13,n.hair),Y(i,v-6,x+17,12,2,g)),n.style==="braid"){if(T===1)for(let I=0;I<6;I++)Y(i,v-1+I%2,x+9+I*2,2,2,I%2?g:n.hair);else if(T===0)for(let I=0;I<5;I++)Y(i,v+4+I%2,x+8+I*2,2,2,I%2?g:n.hair)}n.style==="ponytail"&&T===1&&(Y(i,v-2,x+7,4,10,n.hair),Y(i,v-1,x+16,2,2,g)),n.style==="twin"&&T===1&&(Y(i,v-9,x+4,3,11,n.hair),Y(i,v+6,x+4,3,11,n.hair)),T===1&&k();const z=T===2?11:12,U=T===2?v-5:v-6;if(Y(i,U,x,z,10,n.skin),Y(i,U+1,x+10,z-2,1,d),Y(i,U+z-2,x+2,1,7,d),T===0){const I=x+6;if(o.eyes==="open")for(const K of[v-4,v+2])Y(i,K,I-1,2,3,n.eye),Y(i,K,I-1,2,1,Ce(n.eye,.45)),Y(i,K+1,I,1,1,"#ffffff"),Y(i,K,I+1,1,1,Ce(n.eye,1.3));else Y(i,v-4,I+1,2,1,"#3a2a2a"),Y(i,v+2,I+1,2,1,"#3a2a2a");Y(i,v-5,I+2,1,1,Ce(n.skin,.88)),Y(i,v+4,I+2,1,1,Ce(n.skin,.88)),Y(i,v-1,I+3,2,1,Ce(n.skin,.75))}if(T===2){const I=x+6;o.eyes==="open"?(Y(i,v+2,I-1,2,3,n.eye),Y(i,v+2,I-1,2,1,Ce(n.eye,.45)),Y(i,v+3,I,1,1,"#ffffff")):Y(i,v+2,I+1,2,1,"#3a2a2a"),Y(i,v+5,I+2,1,1,d)}const j=(I,K,ae,xe)=>{Y(i,I+2,K-1,ae-4,1,n.hair),Y(i,I,K,ae,1,n.hair),Y(i,I-1,K+1,ae+2,xe-1,n.hair),Y(i,I+2,K-1,Math.max(2,ae/3),1,_),Y(i,I+1,K,3,1,_),Y(i,I+4,K,2,1,_)};if(T===0){j(U,x-1,z,4);const I=[3,2,4,3,1,3,4,2,3,1,4,3];for(let ae=0;ae<z;ae++)Y(i,U+ae,x+3,1,Math.min(I[(ae+n.hair.charCodeAt(2)%4)%12]-1,2),ae%3===1?g:n.hair);const K=n.style==="short"||n.style==="spiky"?6:n.style==="bob"?10:9;Y(i,U-1,x+1,2,K,n.hair),Y(i,U+z-1,x+1,2,K,g),Y(i,U-1,x+K,1,1,g)}else if(T===1){const I=n.style==="short"||n.style==="spiky"?10:12;j(U,x-1,z,I);for(let K=2;K<z;K+=3)Y(i,U+K,x+4,1,I-5,g);Y(i,U+z-1,x+1,2,I-2,g);for(let K=0;K<z+2;K+=2)Y(i,U-1+K,x+I-1,1,1,g)}else{j(U,x-1,z,4);const I=n.style==="short"||n.style==="spiky"?7:10;Y(i,U-1,x,6,I,n.hair),Y(i,U-1,x+3,1,I-3,g),Y(i,U+2,x+4,1,I-5,g),Y(i,U+z-4,x+3,3,1,n.hair),Y(i,U+z-1,x+3,1,2,n.hair),n.style==="bob"&&Y(i,U-1,x+3,7,8,n.hair)}if(n.style==="ponytail"&&T===1&&(Y(i,v-2,x+8,4,9,n.hair),Y(i,v-1,x+8,1,8,_),Y(i,v-1,x+16,2,2,g),Y(i,v-2,x+7,4,1,n.c3)),n.style==="spiky")for(let I=0;I<z;I+=3)Y(i,U+I,x-3+I%2,2,3,n.hair);n.style==="bun"&&(Y(i,v-2,x-4,5,4,n.hair),Y(i,v-1,x-4,3,1,_));const q=n.acc;if(q==="hat"&&(Y(i,U-3,x-1,z+6,2,n.c3==="#ffffff"?n.c1:Ce(n.c1,.9)),Y(i,U,x-6,z,5,Ce(n.c1,.9)),Y(i,U,x-3,z,1,n.c3)),q==="horns"&&(Y(i,U,x-3,2,3,"#f4ecd8"),Y(i,U+z-2,x-3,2,3,"#f4ecd8"),Y(i,U-1,x-4,1,2,"#f4ecd8"),Y(i,U+z,x-4,1,2,"#f4ecd8")),q==="ears"&&(Y(i,U,x-4,3,4,n.hair),Y(i,U+z-3,x-4,3,4,n.hair),Y(i,U+1,x-3,1,2,"#ffd0d0"),Y(i,U+z-2,x-3,1,2,"#ffd0d0")),q==="hood"&&(Y(i,U-2,x-2,z+4,3,n.c1),Y(i,U-2,x,2,10,n.c1),Y(i,U+z,x,2,10,f),T===1&&Y(i,U-1,x-2,z+2,12,n.c1)),q==="band"&&Y(i,U-1,x+1,z+2,1,n.c3),q==="crown"&&(Y(i,v-3,x-3,6,2,"#ffd84a"),Y(i,v-3,x-4,1,1,"#ffd84a"),Y(i,v,x-5,1,2,"#ffd84a"),Y(i,v+2,x-4,1,1,"#ffd84a"),Y(i,v,x-3,1,1,"#ff5a8a")),q==="flower"&&(Y(i,U+z-3,x,3,3,"#ffffff"),Y(i,U+z-2,x+1,1,1,"#ffd84a")),q==="mask"&&T!==1){const I=T===2?v-1:U+1,K=T===2?6:z-2;Y(i,I,x+8,K,3,Ce(n.c1,1.3))}T!==2&&!o.swim&&w(o.hand2,n.skin,n.c1,l-6);const[$,ee]=o.swim&&T!==2?A(o.hand):w(o.hand,n.skin,n.c1,T===2?l+1:l+5);if(o.swim&&T!==2&&(w(o.hand,n.skin,n.c1,l+5),w(o.hand2,n.skin,n.c1,l-6)),o.wShow==="hand"&&wc(i,a,$,ee+1,o.wAng,n),o.wShow==="aim"&&jh(i,$,ee,n,T===2),o.wShow==="float"){const I=T===2?$+2:l+9,K=y-2+r%2;Y(i,I-2,K-3,5,6,n.c3),Y(i,I-1,K-2,3,4,Ce(n.c3,1.4)),Y(i,I,K-4,1,1,"#ffffff")}}const Ao=new Map;function Ii(i,e,t){if(Ao.has(i))return Ao.get(i);const n=document.createElement("canvas");n.width=en*Xh,n.height=vn*3;const s=n.getContext("2d",{willReadFrequently:!0});for(let r=0;r<3;r++)for(let a=0;a<Xh;a++)sx(s,a*en,r*vn,e,r,a,t),Xs(s,a*en,r*vn,en,vn,"#1c1426");return Ao.set(i,n),n}function Rs(i,e,t=4,n=""){const s=Ii(n||JSON.stringify(i)+e,i,e),r=document.createElement("canvas");r.width=24*t,r.height=24*t;const a=r.getContext("2d");return a.imageSmoothingEnabled=!1,a.drawImage(s,8,6,24,24,0,0,24*t,24*t),r}function qh(i,e,t=4,n="",s=0){const r=Ii(n||JSON.stringify(i)+e,i,e),a=document.createElement("canvas");a.width=en*t,a.height=vn*t;const o=a.getContext("2d");return o.imageSmoothingEnabled=!1,o.drawImage(r,s*en,0,en,vn,0,0,en*t,vn*t),a}function Yh(i,e,t=3){const n=document.createElement("canvas");n.width=n.height=24;const s=n.getContext("2d",{willReadFrequently:!0}),r={c3:e};if(i==="bow"){for(let c=-9;c<=9;c++)s.fillStyle=Ce(e,.85),s.fillRect(Math.round(16-c*c/14),12+c,2,1);s.fillStyle="#f4f0e0",s.fillRect(9,3,1,19)}else i==="catalyst"?(s.fillStyle=e,s.fillRect(5,4,14,16),s.fillStyle=Ce(e,1.4),s.fillRect(7,6,10,12),s.fillStyle=Ce(e,.6),s.fillRect(11,4,2,16),s.fillStyle="#fff",s.fillRect(14,8,2,2)):wc(s,i,5,19,-Math.PI/4,r);Xs(s,0,0,24,24,"#1c1426");const a=document.createElement("canvas");a.width=a.height=24*t;const o=a.getContext("2d");return o.imageSmoothingEnabled=!1,o.drawImage(n,0,0,24*t,24*t),a}function xr(i,e){const t=Math.sin(i),n=Math.cos(i),s=t*Math.sin(e)+n*Math.cos(e),r=t*Math.cos(e)-n*Math.sin(e);return s>.45?{dir:0,flip:r<-.2&&!1}:s<-.45?{dir:1,flip:!1}:{dir:2,flip:r<0}}const rx=[];class ax{constructor(e,t){this.scene=e,this.pos=new P,this.vel=new P,this.face=0,this.mode="ground",this.stamina=240,this.stamMax=240,this.stamRegenDelay=0,this.charId="",this.animT=0,this.anim="idle",this.atkFrame=-1,this.hurtT=0,this.climbN=new P,this.sprintT=0,this.dashT=0,this.dashDir=new P,this.ground=nt,this.arenaR=0,this.arenaC=new P,this.fallStartY=0,this.landDamage=0,this.invuln=0,this.climbLeap=0,this.lastGroundY=0,this.moving=!1,this.bb=new oi(Ii(t,rt(t).look,rt(t).weapon),en,vn),e.add(this.bb.root),e.add(this.bb.shadow),this.setChar(t)}setChar(e){if(e===this.charId)return;this.charId=e;const t=rt(e),n=Ii(e,t.look,t.weapon);this.bb.dispose(),this.bb=new oi(n,en,vn),this.scene.add(this.bb.root),this.scene.add(this.bb.shadow)}groundAt(e,t){if(this.arenaR>0){const n=e-this.arenaC.x,s=t-this.arenaC.z;return n*n+s*s<this.arenaR*this.arenaR?this.arenaC.y:-200}return nt(e,t)}waterDeep(e,t){return this.arenaR===0&&nt(e,t)<Dn-1.2}canAct(){return this.mode==="ground"||this.mode==="swim"}spendStam(e){return this.stamina<e?!1:(this.stamina-=e,this.stamRegenDelay=1.2,!0)}update(e,t,n,s,r){const a=this.pos,o=this.vel,c=Math.min(1,Math.hypot(t,n));if(this.invuln=Math.max(0,this.invuln-e),this.hurtT=Math.max(0,this.hurtT-e),this.stamRegenDelay>0?this.stamRegenDelay-=e:this.mode==="ground"&&(this.stamina=Math.min(this.stamMax,this.stamina+30*e)),this.groundAt(a.x,a.z),this.mode!=="dead"){if(this.mode==="dash"){this.dashT-=e,a.addScaledVector(this.dashDir,e),this.collide();const l=this.groundAt(a.x,a.z);(a.y<l||this.dashT>0)&&(a.y=Math.max(l,a.y)),this.dashT<=0&&(this.mode=a.y>l+.3?"air":"ground");return}if(this.mode==="ground"){if(this.waterDeep(a.x,a.z)&&a.y<Dn-.9){this.mode="swim";return}let l=r?0:c>.6?6:3.4*(c/.6);s&&c>.1&&!r&&this.stamina>0&&(l=9,this.stamina-=16*e,this.stamRegenDelay=.6);const h=t/(c||1),d=n/(c||1);c>.05&&!r&&(this.face=Math.atan2(h,d));const f=a.x+h*l*e*(c>.05?1:0),u=a.z+d*l*e*(c>.05?1:0),g=As(f,u),_=this.groundAt(f,u);if(this.arenaR===0&&g[1]<.62&&_>a.y+.15&&c>.3&&!r){if(this.stamina>5){this.mode="climb",this.climbN.set(g[0],g[1],g[2]),this.vel.set(0,0,0);return}}else a.x=f,a.z=u;const m=this.groundAt(a.x,a.z),p=As(a.x,a.z);this.arenaR===0&&p[1]<.6&&(a.x+=p[0]*6*e,a.z+=p[2]*6*e),m<a.y-.6?(this.mode="air",o.set(h*l*(c>.05?1:0),0,d*l*(c>.05?1:0)),this.fallStartY=a.y):a.y=m,this.collide(),this.moving=l>.1&&c>.05,this.anim=this.moving?"walk":"idle",this.sprintT=s&&this.moving?1:0,this.lastGroundY=a.y;return}if(this.mode==="air"||this.mode==="glide"||this.mode==="plunge"){if(this.mode==="glide"){o.y=Math.max(o.y-20*e,-2.4);const h=7.5;c>.05?(this.face=Math.atan2(t,n),o.x+=(t*h-o.x)*Math.min(1,e*3),o.z+=(n*h-o.z)*Math.min(1,e*3)):(o.x*=1-e*.8,o.z*=1-e*.8),this.stamina-=9*e,this.stamRegenDelay=1,this.stamina<=0&&(this.stamina=0,this.mode="air"),this.anim="glide"}else this.mode==="plunge"?(o.x=0,o.z=0,o.y=-32,this.anim="atk"):(o.y-=24*e,c>.05&&!r&&(this.face=Math.atan2(t,n),o.x+=(t*6-o.x)*Math.min(1,e*2),o.z+=(n*6-o.z)*Math.min(1,e*2)),this.anim=(o.y>0,"jump"));a.addScaledVector(o,e),this.collide();const l=this.groundAt(a.x,a.z);if(this.arenaR>0&&a.y<this.arenaC.y-30){a.copy(this.arenaC),o.set(0,0,0),this.mode="ground";return}if(this.waterDeep(a.x,a.z)&&a.y<=Dn-.9){a.y=Dn-.9,this.mode="swim",o.set(0,0,0);return}if(a.y<=l){const h=As(a.x,a.z);if(this.arenaR===0&&h[1]<.62&&this.mode!=="plunge"&&this.stamina>5){a.y=l,this.mode="climb",this.climbN.set(h[0],h[1],h[2]),o.set(0,0,0);return}this.fallStartY-l,this.mode==="air"&&o.y<-19&&(this.landDamage=_n((-o.y-19)*.03,0,.6)),a.y=l;const d=this.mode;this.mode="ground",o.set(0,0,0),d==="plunge"&&this.onPlungeLand?.()}return}if(this.mode==="climb"){const l=As(a.x,a.z);this.climbN.set(l[0],l[1],l[2]);const h=l[0],d=l[2],f=Math.hypot(h,d)||1,u=-h/f,g=-d/f;this.face=Math.atan2(u,g);const _=t*u+n*g,m=t*-g+n*u;let p=2.8;this.climbLeap>0&&(this.climbLeap-=e,p=9);const y=Math.abs(_)+Math.abs(m)>.1||this.climbLeap>0;y&&(this.stamina-=(this.climbLeap>0?0:10)*e,this.stamRegenDelay=1);const x=this.climbLeap>0?1:_;if(a.x+=(u*x*Math.max(.25,l[1])+-g*m)*p*e,a.z+=(g*x*Math.max(.25,l[1])+u*m)*p*e,a.y=this.groundAt(a.x,a.z),this.anim="climb",this.moving=y,As(a.x,a.z)[1]>.7){this.mode="ground";return}this.stamina<=0&&(this.stamina=0,this.mode="air",o.set(h*3,0,d*3),a.x+=h*.6,a.z+=d*.6,this.fallStartY=a.y),this.waterDeep(a.x,a.z)&&a.y<Dn-.5&&(this.mode="swim");return}if(this.mode==="swim"){let l=3.2*c;s&&c>.1&&(l=5.6,this.stamina-=20*e),this.stamina-=4*e,this.stamRegenDelay=1,c>.05&&(this.face=Math.atan2(t,n),a.x+=t/c*l*e,a.z+=n/c*l*e),this.collide();const h=this.groundAt(a.x,a.z);if(h>Dn-1){a.y=h,this.mode="ground";return}a.y=Dn-.9,this.anim="swim",this.moving=c>.05,this.stamina<=0&&(this.stamina=0,this.onDrown?.());return}}}jump(){if(this.mode==="ground"){if(!this.spendStam(0))return;this.mode="air",this.vel.y=8;const e=this.moving?this.sprintT?8:5.5:0;return this.vel.x=Math.sin(this.face)*e,this.vel.z=Math.cos(this.face)*e,this.fallStartY=this.pos.y,this.pos.y+=.05,!0}return this.mode==="air"&&this.stamina>1&&this.pos.y>this.groundAt(this.pos.x,this.pos.z)+1.5?(this.mode="glide",this.vel.y=Math.max(this.vel.y,-1),!0):this.mode==="glide"?(this.mode="air",!0):this.mode==="climb"?(this.spendStam(25)&&(this.climbLeap=.35),!0):(this.mode==="swim",!1)}dash(e,t,n,s){this.mode="dash",this.dashT=s,this.dashDir.set(e*n/s,0,t*n/s),this.face=Math.atan2(e,t)}collide(){const e=this.pos;for(const t of Jv(e.x,e.z,rx)){if(t.top!==void 0&&e.y>t.top-.2)continue;const n=e.x-t.x,s=e.z-t.z,r=Math.hypot(n,s),a=t.r+.35;r<a&&r>1e-4&&(e.x=t.x+n/r*a,e.z=t.z+s/r*a)}}render(e,t,n,s){this.animT+=e;const{dir:r,flip:a}=xr(this.face,t);let o=0;this.mode==="dead"||this.hurtT>0?o=kt.hurt[0]:s>=0?o=s:this.anim==="walk"?o=kt.walk[Math.floor(this.animT*(this.sprintT?13:9))%4]:this.anim==="climb"?o=kt.climb[this.moving?Math.floor(this.animT*5)%2:0]:this.anim==="swim"?o=kt.swim[Math.floor(this.animT*(this.moving?4:2))%2]:this.anim==="glide"?o=kt.glide[0]:this.anim==="jump"?o=kt.jump[0]:o=kt.idle[Math.floor(this.animT*1.6)%2];const c=this.mode==="climb"?1:r;this.bb.setFrame(o,c,c===2?a:!1),this.bb.root.position.copy(this.pos),this.mode==="swim"&&(this.bb.root.position.y+=.2),this.mode==="climb"&&(this.bb.root.position.x+=this.climbN.x*.35,this.bb.root.position.z+=this.climbN.z*.35),this.bb.face(t,n);const l=this.groundAt(this.pos.x,this.pos.z);this.bb.shadow.visible=this.mode!=="swim"&&this.mode!=="climb"&&l>-100,this.bb.shadow.position.set(this.pos.x,Math.max(l,Dn)+.06,this.pos.z);const h=this.pos.y-l;this.bb.shadow.scale.setScalar(Math.max(.4,1.1-h*.05))}}const Ai=[20,40,50,60,70,80,90],ox=[0,.38,.65,1,1.28,1.55,1.83],cx=[0,0,.25,.5,.5,.75,1],lx=[0,.65,1.3,1.95,2.6,3.25,3.9],td=i=>i.rarity<=2?4:6;function hx(i,e,t){const n=1+(e-1)*.085+ox[t];return{hp:i.hp*n,atk:i.atk*n,def:i.def*n}}function nd(i,e,t){return i.atk*(1+(e-1)*.11)+i.atk*lx[t]}function id(i,e){return i.sub?i.sub.v*(.22+.78*(e-1)/89):0}function sd(i){const e=i.rarity>=5?1:i.rarity===4?.8:i.rarity===3?.6:.45,t=pl(i.rarity);return du[i.main]*e*(.15+.85*(i.lvl/t))}const pl=i=>i>=5?20:i===4?16:i===3?12:8,fx=i=>1+(i-1)*.1;function dx(i){return[i.tal[0],i.tal[1]+(i.cons>=3?3:0),i.tal[2]+(i.cons>=5?3:0)]}function rd(i){const e={};for(const t of i){const n=rt(t).el;e[n]=(e[n]||0)+1}return Object.keys(e).filter(t=>e[t]>=2)}function ux(i){const e={};for(const t of ka){const n=ya(i.relics[t]);n&&(e[n.set]=(e[n.set]||0)+1)}return e}function px(i,e,t,n=O.party){const s=rt(i.id),r=hx(s,i.lvl,i.asc),a={},o=(u,g)=>a[u]=(a[u]||0)+g;o(s.asc.k,s.asc.v*cx[i.asc]);let c=0;if(e){const u=Bt(e.id);if(c=nd(u,e.lvl,e.asc),u.sub&&o(u.sub.k,id(u,e.lvl)),u.eff)for(const g in u.eff)o(g,u.eff[g]*(1+.25*(e.ref-1)))}const l={};for(const u of t)if(u){o(u.main,sd(u));for(const g of u.subs)o(g.k,g.v);l[u.set]=(l[u.set]||0)+1}for(const u of $c){if((l[u.id]||0)>=2)for(const g in u.b2)o(g,u.b2[g]);if((l[u.id]||0)>=4)for(const g in u.b4)o(g,u.b4[g])}i.cons>=2&&o("cr",.1),i.cons>=4&&o("atkP",.2),i.cons>=6&&o("all",.3);let h=0;for(const u of rd(n))u==="fire"&&o("atkP",.25),u==="water"&&(o("hpP",.25),o("heal",.15)),u==="volt"&&o("er",.3),u==="frost"&&o("cr",.15),u==="star"&&(h+=.15),u==="shadow"&&o("all",.15);const d=r.atk+c,f={};for(const u of["fire","water","volt","frost","star","shadow","phys"])f[u]=(a[u]||0)+(u!=="phys"&&a.el||0)+(a.all||0);for(const u of["na","ca","skill","burst","react","plunge"])f[u]=a[u]||0;return{hp:r.hp*(1+(a.hpP||0))+(a.hp||0),atk:d*(1+(a.atkP||0))+(a.atk||0),def:r.def*(1+(a.defP||0))+(a.def||0),em:a.em||0,cr:.05+(a.cr||0),cd:.5+(a.cd||0),er:1+(a.er||0),heal:a.heal||0,dmg:f,baseAtk:d,cdr:h}}function ad(i,e){const t=O.chars[i];return px(t,O.weapons.find(n=>n.uid===t.weapon),ka.map(n=>ya(t.relics[n])),e)}class mx{constructor(e,t){this.id=e,this.party=t,this.hp=1,this.energy=0,this.cdE=0,this.infuse=null,this.dead=!1,this.tal=[1,1,1],this.def=rt(e),this.refresh(!0)}get cs(){return O.chars[this.id]}refresh(e=!1){const t=this.st?this.hp/this.st.hp:1;this.st=ad(this.id,this.party),this.tal=dx(this.cs),this.hp=e?this.st.hp:Math.max(this.dead?0:1,t*this.st.hp)}mult(e){return fx(this.tal[e])}get maxEnergy(){return this.def.burst.cost}}const Ss=(i,e)=>({id:"puff_"+i,name:e,body:"puff",el:i,hp:260,atk:14,spd:2.6,range:1.6,atkKind:"lunge",atkEl:i,cd:2.6,scale:1,drop:"puff",exp:20}),Es=(i,e)=>({id:"wisp_"+i,name:e,body:"wisp",el:i,hp:300,atk:16,spd:2.2,range:9,atkKind:"shoot",atkEl:i,cd:3.2,scale:1,drop:"wisp",exp:25}),gx=[Ss("fire","焔ぷるん"),Ss("water","潮ぷるん"),Ss("volt","雷ぷるん"),Ss("frost","霜ぷるん"),Ss("star","星ぷるん"),Ss("shadow","影ぷるん"),Es("fire","焔の精霊"),Es("water","潮の精霊"),Es("volt","雷の精霊"),Es("frost","霜の精霊"),Es("star","星の精霊"),Es("shadow","影の精霊"),{id:"bandit",name:"山賊",body:"humanoid",hp:420,atk:20,spd:3.2,range:2,atkKind:"smash",atkEl:"phys",cd:2.4,scale:1,drop:"humanoid",exp:30,weapon:"claymore",look:{hair:"#5a3a2a",style:"short",skin:"#d8a880",eye:"#2a1a1a",c1:"#6a4a2a",c2:"#a88a5a",c3:"#3a2a1a",acc:"mask"}},{id:"archer",name:"山賊の弓兵",body:"humanoid",hp:320,atk:18,spd:3,range:12,atkKind:"shoot",atkEl:"phys",cd:2.8,scale:1,drop:"humanoid",exp:30,weapon:"bow",look:{hair:"#3a3a2a",style:"short",skin:"#d8a880",eye:"#2a1a1a",c1:"#4a5a2a",c2:"#a8a07a",c3:"#2a2a1a",acc:"hood"}},{id:"shaman",name:"呪術師",body:"humanoid",el:"shadow",hp:360,atk:22,spd:2.6,range:11,atkKind:"cast",atkEl:"shadow",cd:3.4,scale:1,drop:"humanoid",exp:35,weapon:"catalyst",look:{hair:"#2a1a3a",style:"long",skin:"#c8a090",eye:"#c070ff",c1:"#3a1a4a",c2:"#7a4aa8",c3:"#c070ff",acc:"hood",skirt:!0}},{id:"golem",name:"岩兵",body:"golem",hp:900,atk:30,spd:1.8,range:2.6,atkKind:"smash",atkEl:"phys",cd:3.2,scale:1.4,drop:"golem",exp:50,res:.3},{id:"boss_puff",name:"ぷるん大王",body:"puff",el:"water",hp:9e3,atk:34,spd:2.4,range:4,atkKind:"smash",atkEl:"water",cd:2.6,scale:3.4,boss:!0,drop:"puff",exp:600},{id:"boss_golem",name:"岩鎧の巨人",body:"golem",el:"fire",hp:14e3,atk:44,spd:1.8,range:5,atkKind:"smash",atkEl:"fire",cd:3,scale:3.2,boss:!0,drop:"golem",exp:800,res:.2},{id:"boss_wisp",name:"霜の大精霊",body:"wisp",el:"frost",hp:12e3,atk:40,spd:2,range:14,atkKind:"cast",atkEl:"frost",cd:2.4,scale:3.4,boss:!0,drop:"wisp",exp:800},{id:"boss_knight",name:"影の騎士",body:"humanoid",el:"shadow",hp:2e4,atk:52,spd:3.6,range:3.2,atkKind:"smash",atkEl:"shadow",cd:2.2,scale:2.4,boss:!0,drop:"humanoid",exp:1200,weapon:"sword",look:{hair:"#1a1a28",style:"long",skin:"#8a8aa0",eye:"#ff4a6a",c1:"#14101c",c2:"#3a2a5a",c3:"#a070ff",acc:"horns",cape:!0}}],Sa=i=>gx.find(e=>e.id===i);let Ro=1;class _x{constructor(e,t,n,s,r,a){this.scene=e,this.pos=new P,this.home=new P,this.face=0,this.aura=null,this.innate=null,this.innateCd=0,this.icd=new Map,this.frozen=0,this.slow=0,this.slowT=0,this.resdown=0,this.resT=0,this.dots=[],this.state="idle",this.stateT=0,this.atkCd=1.5,this.target=null,this.targetPid=0,this.animT=Math.random()*3,this.pending=null,this.arena=!1,this.deadT=0,this.groundFn=nt,this.hurtFlash=0,this.remote=!1,this.netT=0,this.netPos=new P,this.moveTo=new P,this.moves=0,this.id=a??Ro++,a&&a>=Ro&&(Ro=a+1);const o=this.def=Sa(t);this.lvl=n,this.body=o.body;const c=Math.pow(1+n*.115,1.95),l=Math.pow(1+n*.1,1.5);this.maxHp=this.hp=o.hp*c*.55,this.atk=o.atk*l,this.innate=o.el&&o.body!=="humanoid"?o.el:null,this.innate&&(this.aura={el:this.innate,t:999});const h=o.el?_t[o.el].color:"#a8a8b0";o.body==="puff"?this.bb=new oi(Wv(h,!!o.boss),Is.puff,si.puff,o.scale,si.puff-2):o.body==="wisp"?this.bb=new oi($v(h),Is.wisp,si.wisp,o.scale,si.wisp-1):o.body==="golem"?this.bb=new oi(Xv(o.el?_t[o.el].color:"#ffb04a",o.boss?"#6a4a3a":"#8a8478"),Is.golem,si.golem,o.scale*.9,si.golem-2):this.bb=new oi(Ii("enemy_"+o.id,o.look,o.weapon||"sword"),en,vn,o.scale),this.radius=(o.body==="golem"?.9:.6)*o.scale,this.pos.set(s,nt(s,r),r),this.home.copy(this.pos),this.netPos.copy(this.pos),e.add(this.bb.root),e.add(this.bb.shadow)}get boss(){return!!this.def.boss}get alive(){return this.state!=="dead"}dispose(){this.bb.dispose()}render(e,t,n){this.animT+=e,this.hurtFlash=Math.max(0,this.hurtFlash-e),this.bb.flash=this.hurtFlash>.06?1:0;const s=this.body==="wisp"?1.2*this.def.scale+Math.sin(this.animT*2)*.2:0,r=this.state==="chase"||this.state==="return";if(this.body==="humanoid"){const{dir:o,flip:c}=xr(this.face,t);let l=kt.idle[Math.floor(this.animT*1.6)%2];this.state==="dead"?l=kt.hurt[0]:this.state==="wind"?l=kt.atk[0]:this.state==="recover"&&this.stateT>.25?l=this.stateT>.4?kt.atk[1]:kt.atk[2]:r?l=kt.walk[Math.floor(this.animT*8)%4]:this.hurtFlash>0&&(l=kt.hurt[0]),this.frozen>0&&(l=kt.idle[0]),this.bb.setFrame(l,o,o===2?c:!1)}else{let o=Math.floor(this.animT*2.5)%2;r&&(o=2+Math.floor(this.animT*5)%2),this.state==="wind"&&(o=4),this.state==="recover"&&this.stateT>.3&&(o=5),this.hurtFlash>.1&&(o=6),this.frozen>0&&(o=0);const{flip:c}=xr(this.face,t);this.bb.setFrame(o,0,c)}this.bb.root.position.set(this.pos.x,this.pos.y+s,this.pos.z),this.state==="dead"&&(this.deadT+=e,this.bb.root.scale.setScalar(Math.max(.01,1-this.deadT*2))),this.bb.face(t,this.frozen>0?new ke(.7,.9,1.4):n);const a=this.groundFn(this.pos.x,this.pos.z);this.bb.shadow.position.set(this.pos.x,Math.max(a,Dn)+.07,this.pos.z),this.bb.shadow.visible=this.state!=="dead"}inIcd(e,t,n){const s=this.icd.get(e)||-99;return n-s<t?!0:(this.icd.set(e,n),!1)}}const Cc={sword:{mv:[.48,.46,.6,.72],dur:[.3,.3,.34,.45],r:2.3,ca:1.3,caSt:20},claymore:{mv:[.8,.78,.92,1.2],dur:[.5,.5,.55,.7],r:2.8,ca:1.7,caSt:25},polearm:{mv:[.4,.4,.48,.55,.7],dur:[.26,.26,.28,.3,.42],r:3,ca:1.25,caSt:25},bow:{mv:[.42,.42,.5,.58],dur:[.32,.32,.36,.44],r:16,ca:1.8,caSt:0,ranged:!0},catalyst:{mv:[.52,.5,.68],dur:[.4,.4,.5],r:12,ca:1.6,caSt:50,ranged:!0}},vx=i=>18+i*9+Math.pow(i/10,2)*14;function pr(i,e,t,n,s,r,a,o={}){const c=e.st,l=i.buffAtk>0?i.buffAtkVal:0;let h=c.dmg[n]+(c.dmg[s]||0)+(e.infuse&&(s==="na"||s==="ca"||s==="plunge")?e.infuse.bonus:0);const d=c.cr+(i.eclipse>0?.2:0),f=Math.random()<d;return{src:e.id,pid:i.pid,atk:c.atk+l,mv:t,el:n,cat:s,cr:d,cd:c.cd,bonus:h,em:c.em,lvl:e.cs.lvl,rb:c.dmg.react||0,icd:e.id+r,icdT:a,crit:f,...o}}function od(i,e,t,n=0){if(!e.alive)return;let s=null;t.el!=="phys"&&!e.inIcd(t.icd+t.el,t.icdT,i.now)&&(e.aura&&e.aura.el!==t.el?(s=Pv(e.aura.el,t.el),e.aura=null,e.innate&&(e.innateCd=1.6)):e.aura={el:t.el,t:t.strong?9:6});const r=(t.lvl+100)/(t.lvl+100+(e.lvl+100)*(1-(e.resT>0,0))),a=(e.def.res||.1)+(e.innate===t.el?.3:0)-(e.resT>0?e.resdown:0),o=a<0?1-a/2:1-a;let c=t.atk*t.mv*(1+t.bonus)*(t.crit?1+t.cd:1)*r*o,l="";const h=1+16*t.em/(t.em+2e3)+t.rb,d=vx(t.lvl)*h;if(s){l=s.name,i.stats.reacts++,se.emit("daily","react",1);const f=e.pos.clone();switch(i.fxAt("react-bloom",f,s.kind==="freeze"?"frost":t.el,1),s.kind){case"amp":c*=s.v*(1+2.78*t.em/(t.em+1400)+t.rb);break;case"buff":c*=s.v,i.eclipse=s.dur;break;case"aoe":i.aoe(f,s.r,u=>{u!==e&&Si(i,u,d*s.v*.6,t)}),Si(i,e,d*s.v,t),s.dur&&i.aoe(f,s.r,u=>{u.slow=.6,u.slowT=s.dur}),s.name==="流星"&&i.fxAt("starfall",f,"volt",.6);break;case"chain":{let u=0;for(const g of i.enemiesNear(f,s.r))g===e||u>=s.v2||(u++,Si(i,g,d*s.v*.8,t),i.fxAt("hit-spark",g.pos,"fire",1));Si(i,e,d*s.v,t);break}case"energy":i.aoe(f,s.r,u=>Si(i,u,d*s.v,t)),i.gainEnergy(s.v2,null);break;case"dot":{const u=s.r?i.enemiesNear(f,s.r):[e];for(const g of u)g.dots.push({dmg:d*s.v,t:s.dur,tick:0,src:t.src,el:t.el});break}case"freeze":e.frozen=s.dur;break;case"heal":i.healParty(s.v,t.pid);break;case"pull":i.aoe(f,s.r,u=>{const g=f.clone().sub(u.pos);g.y=0;const _=g.length();_>.5&&!u.boss&&u.pos.addScaledVector(g,Math.min(1,(_-.5)/_)),Si(i,u,d*s.v*.5,t)});break;case"resdown":e.resdown=s.v2,e.resT=s.dur,s.r?i.aoe(f,s.r,u=>Si(i,u,d*s.v,t)):Si(i,e,d*s.v,t);break;case"shield":i.addShield(s.v,t.pid);break;case"slow":e.slow=s.v,e.slowT=s.dur;break}}if(i.damageEnemy(e,c,t.crit,t.el,l,t.src),t.kb&&!e.boss&&e.alive){const f=e.pos.clone().sub(i.posOfPid(t.pid));f.y=0,f.normalize(),e.pos.addScaledVector(f,t.kb)}}function Si(i,e,t,n){if(!e.alive)return;const s=1-((e.def.res||.1)-(e.resT>0?e.resdown:0));i.damageEnemy(e,t*s,!1,n.el,"",n.src,!0)}function Ac(i,e,t,n){let s=null,r=t*t;for(const a of i.enemies.values()){if(!a.alive)continue;const o=a.pos.x-e.x,c=a.pos.z-e.z,l=o*o+c*c;l<r&&(r=l,s=a)}return s}function Rc(i,e=7){const t=i.player,n=Ac(i,t.pos,e);return n&&(t.face=Math.atan2(n.pos.x-t.pos.x,n.pos.z-t.pos.z)),n}function xx(i,e,t,n){const s=Cc[e.def.weapon],r=i.player,a=Rc(i,s.ranged?14:6),o=e.infuse?e.infuse.el:e.def.weapon==="catalyst"?e.def.el:"phys",c=(n?s.ca:s.mv[t])*e.mult(0),l=n?"ca":"na",h=Math.sin(r.face),d=Math.cos(r.face);if(e.def.weapon==="bow"){const _=n?e.def.el:o;i.shoot(e,r.pos.clone().add(new P(h*.8,1.1,d*.8)),a,26,pr(i,e,c,_,l,n?"ca":"na",n?0:2.5,{strong:n}),{r:.6,scale:n?.9:.6});return}if(e.def.weapon==="catalyst"){i.shoot(e,r.pos.clone().add(new P(h*.6,1.2,d*.6)),a,15,pr(i,e,c,e.def.el,l,"na",2.5),{r:.7,scale:n?1.2:.8,aoe:n?2.5:0});return}const f=s.r*(n?1.15:1),u=r.pos.clone().add(new P(h*f*.45,0,d*f*.45)),g=e.def.weapon==="polearm";if(g){const _=r.pos.clone().add(new P(h*f*.85,.9,d*f*.85));i.fxAt("hit-spark",_,o,.7),i.fxAt("orb",r.pos.clone().add(new P(h*f*.5,.9,d*f*.5)),o,.8,h*Math.cos(i.camYaw)-d*Math.sin(i.camYaw)<0,{life:.12,loop:!0})}else i.fxAt("crescent",u.clone().setY(u.y+.2),o,e.def.weapon==="claymore"?1.3:1,t%2===1);i.hitArc(r.pos,r.face,f,g?.6:1.2,pr(i,e,c,o,l,"na",2.5,{kb:e.def.weapon==="claymore"?.8:.25})),i.gainEnergy(.4,e)}function yx(i,e){const t=i.player;i.fxAt("sigil-burst",t.pos,e.infuse?e.infuse.el:"phys",.7),i.shake(.25),i.hitCircle(t.pos,3,pr(i,e,1.9*e.mult(0),e.infuse?e.infuse.el:e.def.weapon==="catalyst"?e.def.el:"phys","plunge","pl",1,{kb:1.2}))}function Kh(i,e,t){const n=t?e.def.burst:e.def.skill,s=i.player,r=e.def.el,a=t?2:1,o=n.mv*e.mult(a),c=t?"burst":"skill",l=t?"Q":"E",h=Math.sin(s.face),d=Math.cos(s.face),f=s.pos.clone().add(new P(h*1.5,0,d*1.5)),u=(p=o,y=l,x=.4,v={})=>pr(i,e,p,r,c,y,x,{strong:t,...v});let g=!1;const _=()=>{!t&&!g&&(g=!0,i.later(.5,()=>i.gainEnergy(12,e,!0)))},m=(p,y,x)=>{const v=i.hitCircle(p,y,u(x,l+"f",.9));return v&&_(),v};switch(n.kind){case"wave":{Rc(i,10);const p=new P(Math.sin(s.face),0,Math.cos(s.face));i.shootDir(e,s.pos.clone().add(new P(0,1,0)),p,20,u(),{r:n.r||1.6,pierce:!0,scale:1.8,life:.8},_);break}case"nova":{const p=t?s.pos.clone():f,y=n.r||4;i.fxAt(t?"starfall":"sigil-burst",p,r,y/(t?4.8:3)),t&&i.shake(.35),i.later(t?.32:.25,()=>{i.hitCircle(p,y,u(o,l,0,{kb:1}))&&_()}),n.heal&&(i.healParty(n.heal,i.pid,e),i.fxAt("mend",s.pos,null,1.2));break}case"dash":{Rc(i,8);const p=Math.sin(s.face),y=Math.cos(s.face);s.dash(p,y,6,.22),s.invuln=.3,i.fxAt("crescent",s.pos.clone().add(new P(p*2,.4,y*2)),r,1.4);const x=s.pos.clone();i.later(.22,()=>{x.clone().lerp(s.pos,.5),i.fxAt("sigil-burst",s.pos,r,.7),i.hitCapsule(x,s.pos,n.r||2,u(o,l,0,{kb:.8}))&&_()});break}case"turret":{const p=f.clone();p.y=nt(p.x,p.z),i.addField({pos:p,r:n.r||10,t:n.dur||10,tick:0,every:1.5,fxName:"ward",el:r,fxEvery:1.2,fxScale:.8,onTick:y=>{const x=Ac(i,y.pos,y.r);x&&i.shoot(e,y.pos.clone().setY(y.pos.y+1.4),x,18,u(o,l+"t",1.5),{r:.6,scale:.7},_)}}),i.fxAt("beacon",p,r,.5);break}case"field":{const p=s.pos.clone(),y=n.r||5;i.addField({pos:p,r:y,t:n.dur||8,tick:0,every:1,fxName:"sigil-burst",el:r,fxEvery:1,fxScale:y/3,onTick:x=>{m(x.pos,x.r,o),n.heal&&i.healActive(n.heal,e)}});break}case"shield":{const p=s.pos.clone();i.fxAt("sigil-burst",p,r,(n.r||3.5)/3),i.later(.25,()=>{i.hitCircle(p,n.r||3.5,u(o,l,0,{kb:1}))&&_()});const y=e.def.asc.k==="defP"||e.def.id==="kohaku"?e.st.def*4:e.st.hp;i.addShieldAbs(y*(n.shield||.25),15),n.heal&&i.healParty(n.heal,i.pid,e);break}case"volley":{const p=i.enemiesNear(s.pos,n.r||10).filter(x=>x.alive),y=n.n||3;for(let x=0;x<y;x++)i.later(x*(t?.09:.08),()=>{const v=p.length?p[x%p.length]:null,D=s.face+(x-(y-1)/2)*.18,T=new P(Math.sin(D),0,Math.cos(D)),A=t?v?v.pos.clone().add(new P((Math.random()-.5)*3,9,(Math.random()-.5)*3)):s.pos.clone().addScaledVector(T,4+x*.4).setY(s.pos.y+9):s.pos.clone().add(new P(0,1.1,0));v?i.shoot(e,A,v,t?24:22,u(o,l+"v",.3),{r:.7,scale:.8},_):i.shootDir(e,A,t?new P(0,-1,0):T,22,u(o,l+"v",.3),{r:.7,scale:.8,life:.7},_)});break}case"infuse":{e.infuse={el:r,t:n.dur||10,bonus:n.buff||.2},t?(i.fxAt("starfall",s.pos,r,(n.r||4)/4.8),i.shake(.3),i.later(.32,()=>i.hitCircle(s.pos,n.r||4,u(o,l,0,{kb:1})))):(i.fxAt("sigil-burst",s.pos,r,.8),i.later(.2,()=>{i.hitCircle(s.pos,n.r||3,u(o,l))&&_()}));break}case"buff":{const p=s.pos.clone();i.buffAtk=n.dur||12,i.buffAtkVal=e.st.baseAtk*(n.buff||.3),i.addField({pos:p,r:n.r||5,t:n.dur||12,tick:0,every:2,fxName:"sigil-burst",el:r,fxEvery:1.5,fxScale:(n.r||5)/3,onTick:y=>{m(y.pos,y.r,o*.5)}}),i.later(.25,()=>{i.hitCircle(p,n.r||5,u())&&_()});break}case"meteor":{const p=n.n||1,y=i.enemiesNear(s.pos,14).filter(x=>x.alive).sort((x,v)=>x.pos.distanceToSquared(s.pos)-v.pos.distanceToSquared(s.pos));t&&i.shake(.2);for(let x=0;x<p;x++)i.later(x*.28,()=>{const v=y.length?y[x%y.length].pos.clone():s.pos.clone().add(new P(Math.sin(s.face+x)*(3+x),0,Math.cos(s.face+x)*(3+x)));v.y=nt(v.x,v.z),i.fxAt("starfall",v,r,(n.r||3.5)/4.8),i.later(.33,()=>{i.shake(.15),i.hitCircle(v,n.r||3.5,u(o,l+"m"+x,0,{kb:.8}))&&_()})});break}case"chain":{const p=new Set;let y=Ac(i,s.pos,n.r||8);for(let x=0;x<(n.n||3)&&y;x++){const v=y;p.add(v),i.later(x*.08,()=>{i.fxAt("hit-spark",v.pos.clone().setY(v.pos.y+.8),r,1.4),i.sendHit(v,u(o,l+"c",.2)),_()});let D=null,T=49;for(const A of i.enemies.values()){if(!A.alive||p.has(A))continue;const k=A.pos.distanceToSquared(v.pos);k<T&&(T=k,D=A)}y=D}p.size||i.fxAt("hit-spark",f.setY(f.y+1),r,1.5);break}case"vortex":{const p=f.clone().addScaledVector(new P(h,0,d),2);p.y=nt(p.x,p.z),i.addField({pos:p,r:n.r||6,t:n.dur||4,tick:0,every:.5,fxName:"react-bloom",el:r,fxEvery:.45,fxScale:1.3,onTick:y=>{i.pullEnemies(y.pos,y.r,1.6),m(y.pos,y.r*.6,o)}});break}}se.emit("daily","skill",t?0:1)}function bx(i,e,t){if(!e.alive)return;e.aura&&e.aura.t<900&&(e.aura.t-=t,e.aura.t<=0&&(e.aura=null)),e.innate&&!e.aura&&(e.innateCd-=t,e.innateCd<=0&&(e.aura={el:e.innate,t:999})),e.resT>0&&(e.resT-=t),e.slowT>0&&(e.slowT-=t,e.slowT<=0&&(e.slow=0));for(const d of e.dots)d.t-=t,d.tick-=t,d.tick<=0&&(d.tick=.6,i.damageEnemy(e,d.dmg*.5,!1,d.el,"",d.src,!0));if(e.dots=e.dots.filter(d=>d.t>0),!e.alive)return;if(e.frozen>0){e.frozen-=t;return}const n=e.def.spd*(e.slow?e.slow:1)*(e.boss&&e.hp<e.maxHp*.5?1.25:1),s=i.nearestPlayer(e.pos);e.stateT+=t,e.atkCd-=t*(e.boss&&e.hp<e.maxHp*.5?1.4:1);const r=e.boss?28:15,a=(d,f)=>e.groundFn(d,f),o=(d,f,u)=>{const g=d-e.pos.x,_=f-e.pos.z,m=Math.hypot(g,_);if(m<.05)return;e.face=Math.atan2(g,_);const p=Math.min(m,u*t)/m,y=e.pos.x+g*p,x=e.pos.z+_*p,v=a(y,x);v>-50&&Math.abs(v-e.pos.y)<2.5+u*t&&(e.pos.x=y,e.pos.z=x,e.pos.y=v)};if(e.state==="return"){o(e.home.x,e.home.z,n*1.5),e.hp=Math.min(e.maxHp,e.hp+e.maxHp*.3*t),e.pos.distanceTo(e.home)<1&&(e.state="idle");return}if(!s||s.d>r*r||!e.arena&&e.pos.distanceToSquared(e.home)>45*45){e.state!=="idle"&&(e.state=e.arena?"idle":"return",e.stateT=0),e.state==="idle"&&e.body!=="golem"&&Math.sin(i.now*.7+e.id)>.92&&o(e.home.x+Math.sin(e.id)*3,e.home.z+Math.cos(e.id)*3,n*.4);return}const c=s.pos,l=Math.sqrt(s.d);if(e.state==="wind"){e.face=Math.atan2(c.x-e.pos.x,c.z-e.pos.z),e.stateT>=(e.boss?.65:.5)&&(Mx(i,e,c),e.state="recover",e.stateT=0);return}if(e.state==="recover"){e.stateT>.7&&(e.state="chase",e.stateT=0);return}e.state="chase";const h=e.def.atkKind==="shoot"||e.def.atkKind==="cast"?Math.min(e.def.range*.8,9):e.def.range*.8;l>h?o(c.x,c.z,n):e.def.atkKind==="shoot"&&l<4?o(e.pos.x-(c.x-e.pos.x),e.pos.z-(c.z-e.pos.z),n*.7):e.face=Math.atan2(c.x-e.pos.x,c.z-e.pos.z),l<=e.def.range+.5&&e.atkCd<=0&&(e.state="wind",e.stateT=0,e.atkCd=e.def.cd*(.85+Math.random()*.3),e.moves++,(e.boss||e.def.atkKind==="cast")&&i.telegraph(e,c))}function Mx(i,e,t){const n=e.def,s=n.atkEl,r=n.scale;let a=n.atkKind;if(e.boss&&(a=["smash","shoot","cast"][e.moves%3]),a==="lunge"){const o=t.clone().sub(e.pos).setY(0).normalize();e.pos.addScaledVector(o,Math.min(2.2,e.pos.distanceTo(t)-.6)),i.enemyAttack(e,e.pos,1.6*Math.max(1,r*.8),1,s)}else if(a==="smash"){const o=Math.sin(e.face),c=Math.cos(e.face),l=e.pos.clone().add(new P(o*1.2*r,0,c*1.2*r));i.fxAt("hit-spark",l,s==="phys"?"phys":s,1.2*Math.max(1,r*.6)),e.boss&&(i.fxAt("sigil-burst",l,s,1.6),i.shake(.3)),i.enemyAttack(e,l,e.boss?4.5:2.2,e.boss?1.4:1.2,s)}else if(a==="shoot"){const o=e.boss?5:1;for(let c=0;c<o;c++){const l=Math.atan2(t.x-e.pos.x,t.z-e.pos.z)+(c-(o-1)/2)*.25;i.enemyProjectile(e,new P(Math.sin(l),0,Math.cos(l)),s)}}else if(a==="cast"){const o=t.clone();i.later(.5,()=>{i.fxAt("sigil-burst",o,s,e.boss?1.4:.9),i.enemyAttack(e,o,e.boss?4:2.6,e.boss?1.6:1.3,s)})}}const Oe=(i,e,t,n,s,r,a,o)=>({id:i,name:e,kind:t,rarity:n,icon:s,color:r,desc:a,v:o}),Pc=[Oe("coin","コイン","currency",3,"◎","#ffd24a","どこでも使えるお金。"),Oe("gem","星晶","currency",5,"✦","#ff9ad8","願いをかなえる星の結晶。160個で1回祈願できる。"),Oe("ticket_s","銀の願い札","currency",5,"▤","#c8d8ff","常設の祈願に使う札。"),Oe("ticket_g","金の願い札","currency",5,"▤","#ffd24a","イベントと武器の祈願に使う札。"),Oe("dust","星屑","currency",4,"✧","#ffe0a0","祈願で手に入る。ショップで願い札と交換できる。"),Oe("shard","星の欠片","special",4,"✶","#a0f0ff","世界のあちこちに浮かぶ光。星の像に捧げるとスタミナの上限が増える。"),Oe("exp1","旅の手記","exp",2,"▥","#8ad06a","キャラクター経験値+1000",1e3),Oe("exp2","冒険家の手記","exp",3,"▥","#5aa8ff","キャラクター経験値+5000",5e3),Oe("exp3","英雄の日記","exp",4,"▥","#c070ff","キャラクター経験値+20000",2e4),Oe("ore1","鉄の欠片","ore",2,"◆","#a8b0c0","武器経験値+400",400),Oe("ore2","精鉄","ore",3,"◆","#78b8ff","武器経験値+2000",2e3),Oe("ore3","魔鉄","ore",4,"◆","#c890ff","武器経験値+10000",1e4),Oe("jelly1","ぷるんゼリー","drop",1,"●","#9ae0a0","ぷるんから落ちる。"),Oe("jelly2","濃いゼリー","drop",2,"●","#5ac8ff","強いぷるんから落ちる。"),Oe("jelly3","虹のゼリー","drop",3,"●","#ff9ad8","とても強いぷるんから落ちる。"),Oe("cloth1","古い布","drop",1,"▰","#c8b090","山賊から落ちる。"),Oe("cloth2","丈夫な布","drop",2,"▰","#5ac8ff","山賊から落ちる。"),Oe("cloth3","錦の布","drop",3,"▰","#ff9ad8","山賊の頭から落ちる。"),Oe("stone1","石の欠片","drop",1,"⬢","#a0a0a8","岩兵から落ちる。"),Oe("stone2","刻まれた石","drop",2,"⬢","#5ac8ff","岩兵から落ちる。"),Oe("stone3","古代の核","drop",3,"⬢","#ff9ad8","強い岩兵から落ちる。"),Oe("dustw1","光の粉","drop",1,"✺","#fff0a0","精霊から落ちる。"),Oe("dustw2","光の結晶","drop",2,"✺","#5ac8ff","精霊から落ちる。"),Oe("dustw3","光の心臓","drop",3,"✺","#ff9ad8","強い精霊から落ちる。"),Oe("gem_fire","焔の結晶","gem",4,"◈","#ff7a3c","焔元素キャラクターの突破に使う。"),Oe("gem_water","潮の結晶","gem",4,"◈","#3cb0ff","潮元素キャラクターの突破に使う。"),Oe("gem_volt","雷の結晶","gem",4,"◈","#ffd23c","雷元素キャラクターの突破に使う。"),Oe("gem_frost","霜の結晶","gem",4,"◈","#9ae8ff","霜元素キャラクターの突破に使う。"),Oe("gem_star","星の結晶","gem",4,"◈","#ff9ad8","星元素キャラクターの突破に使う。"),Oe("gem_shadow","影の結晶","gem",4,"◈","#a070ff","影元素キャラクターの突破に使う。"),Oe("book_a1","勇気の教え","book",2,"❑","#8ad06a","天賦の育成に使う。"),Oe("book_a2","勇気の導き","book",3,"❑","#5aa8ff","天賦の育成に使う。"),Oe("book_a3","勇気の哲学","book",4,"❑","#c070ff","天賦の育成に使う。"),Oe("book_b1","知恵の教え","book",2,"❑","#8ad06a","天賦の育成に使う。"),Oe("book_b2","知恵の導き","book",3,"❑","#5aa8ff","天賦の育成に使う。"),Oe("book_b3","知恵の哲学","book",4,"❑","#c070ff","天賦の育成に使う。"),Oe("book_c1","調和の教え","book",2,"❑","#8ad06a","天賦の育成に使う。"),Oe("book_c2","調和の導き","book",3,"❑","#5aa8ff","天賦の育成に使う。"),Oe("book_c3","調和の哲学","book",4,"❑","#c070ff","天賦の育成に使う。"),Oe("food1","おにぎり","food",2,"▲","#f4f0e0","選んだキャラクターのHPを30%回復する。",.3),Oe("food2","焼き魚定食","food",3,"▲","#ffb060","選んだキャラクターのHPを60%回復する。",.6),Oe("food3","元気だんご","food",3,"▲","#ff9ad8","倒れたキャラクターを復活させ、HPを40%回復する。",.4)],es=i=>Pc.find(e=>e.id===i),Ba={puff:["jelly1","jelly2","jelly3"],humanoid:["cloth1","cloth2","cloth3"],golem:["stone1","stone2","stone3"],wisp:["dustw1","dustw2","dustw3"]},Ea=i=>Math.round(200+i*i*14),kc=(i,e)=>Math.round((60+i*i*4)*(.6+e*.12)),Ta=i=>200+i*i*30,cd=["puff","humanoid","golem","wisp"],ld=i=>cd[Wn.findIndex(e=>e.id===i)%4],Sx=i=>["a","b","c"][Wn.findIndex(e=>e.id===i)%3];function ha(i){return Object.entries(i).every(([e,t])=>ct(e)>=t)}function ml(i){if(!ha(i))return!1;for(const[e,t]of Object.entries(i))Tn(e,t);return!0}function hd(i){const e=rt(i.id),t=Ba[ld(i.id)],n=i.asc+1,s=[[0,3],[0,15],[1,12],[1,18],[2,12],[2,24]][n-1];return{coin:[2e4,4e4,6e4,8e4,1e5,12e4][n-1],["gem_"+e.el]:[1,3,6,10,15,20][n-1],[t[s[0]]]:s[1]}}function fd(i,e){const t=i.tal[e]+1,n=Sx(i.id),s=Ba[ld(i.id)],r=t<=3?1:t<=6?2:3,a=[0,0,3,6,3,4,6,4,6,9,12][t];return{coin:12500*t,[`book_${n}${r}`]:a,[s[r-1]]:Math.ceil(a*1.5)}}const dd=i=>[0,0,2,3,4,4,5,5,6,6,6][i];function ud(i){const e=Bt(i.id),t=i.asc+1,n=Ba[cd[(e.id.charCodeAt(2)+e.rarity)%4]],s=[[0,3],[0,10],[1,8],[1,14],[2,8],[2,14]][t-1];return{coin:[5e3,15e3,2e4,3e4,35e3,45e3][t-1]*(e.rarity/4),[n[s[0]]]:Math.ceil(s[1]*(e.rarity/5)),ore2:t*2}}function Ex(i,e){const t=Ai[i.asc];for(i.exp+=e;i.lvl<t&&i.exp>=Ea(i.lvl);)i.exp-=Ea(i.lvl),i.lvl++;i.lvl>=t&&(i.exp=0),et(),se.emit("chars")}function Jh(i,e,t){const n=es(e);if(t=Math.min(t,ct(e)),t<=0)return!1;const s=Math.round(n.v*t*.2);return ct("coin")<s?!1:(Tn(e,t),Tn("coin",s),Ex(i,n.v*t),!0)}function Tx(i){return i.asc>=6||i.lvl<Ai[i.asc]||!ml(hd(i))?!1:(i.asc++,et(),se.emit("chars"),!0)}function wx(i,e){const t=i.tal[e]+1;return t>10||i.asc<dd(t)||!ml(fd(i,e))?!1:(i.tal[e]=t,et(),se.emit("chars"),!0)}function Cx(i,e){const t=Bt(i.id),n=Ai[i.asc];for(i.exp+=e;i.lvl<n&&i.exp>=kc(i.lvl,t.rarity);)i.exp-=kc(i.lvl,t.rarity),i.lvl++;i.lvl>=n&&(i.exp=0),et(),se.emit("items")}function Zh(i,e,t){const n=es(e);if(t=Math.min(t,ct(e)),t<=0)return!1;const s=Math.round(n.v*t*.1);return ct("coin")<s?!1:(Tn(e,t),Tn("coin",s),Cx(i,n.v*t),!0)}function Ax(i){const e=Bt(i.id);return i.asc>=td(e)||i.lvl<Ai[i.asc]||!ml(ud(i))?!1:(i.asc++,et(),!0)}function Rx(i,e){return i.ref>=5||e.id!==i.id||e.uid===i.uid?!1:(O.weapons=O.weapons.filter(t=>t.uid!==e.uid),i.ref++,et(),!0)}function pd(i){return[0,100,200,420,1260,3780][i.rarity]+Math.round(i.exp*.8+Px(i)*.8)}function Px(i){let e=0;for(let t=0;t<i.lvl;t++)e+=Ta(t);return e}function kx(i,e){const t=e.reduce((a,o)=>a+pd(o),0);if(ct("coin")<t)return!1;Tn("coin",t);const n=new Set(e.map(a=>a.uid));O.relics=O.relics.filter(a=>!n.has(a.uid)),i.exp+=t;const s=pl(i.rarity),r=new fi(Date.now());for(;i.lvl<s&&i.exp>=Ta(i.lvl);)if(i.exp-=Ta(i.lvl),i.lvl++,i.lvl%4===0){const a=i.rarity>=5?1:i.rarity===4?.8:.6;if(i.subs.length<4){const o=Object.keys(fr).filter(l=>l!==i.main&&!i.subs.some(h=>h.k===l)),c=r.pick(o);i.subs.push({k:c,v:fr[c]*a*r.range(.7,1)})}else{const o=r.pick(i.subs);o.v+=fr[o.k]*a*r.range(.7,1)}}return i.lvl>=s&&(i.exp=0),et(),!0}function Dc(i){return 375+i*i*25}function wa(){return Math.min(8,Math.floor(Math.max(0,O.ar-12)/6))}function li(i){O.arExp+=i;let e=!1;for(;O.ar<60&&O.arExp>=Dc(O.ar);)O.arExp-=Dc(O.ar),O.ar++,e=!0,lt("gem",60);e&&se.emit("toast",`冒険ランクが ${O.ar} に上がった！`),et(),se.emit("ar")}const fa="ソラ",Ca=[{id:"m1",chapter:"第一章",title:"星の落ちた浜",reward:{char:"tsumugi",gem:300,coin:2e4,items:{exp2:5},ar:300},steps:[{type:"goto",target:"wp_ruko",text:"北のルコの町へ向かう",dlg:[["案内","町に着いた！ 町長ゴウを探して話しかけよう。近くで「話す」ボタンを押してね。"]]},{type:"talk",target:"npc_elder",text:"町長ゴウと話す",dlg:[["町長ゴウ","ほう、星と一緒に落ちてきた旅人とな。……最近、町の外にぷるんや山賊が増えて困っておる。"],["ツムギ","さっきの子だ！ わたし、ツムギ。弓なら任せて。一緒に片付けよう！"],["案内","攻撃ボタンで通常攻撃、長押しで重撃。Eボタンで元素スキルを使えるよ。"]]},{type:"camp",target:"@near_ruko",text:"町の近くの魔物を倒す"},{type:"talk",target:"npc_elder",text:"町長に報告する",dlg:[["町長ゴウ","見事じゃ！ これでしばらくは安心じゃな。"],["ツムギ","ソラ、記憶が戻るまで、わたしも一緒に旅をするよ！"]]}]},{id:"m2",chapter:"第二章",title:"疾風の剣客",reward:{char:"hayate",gem:300,coin:3e4,items:{ore2:10,exp2:8},ar:400},steps:[{type:"talk",target:"npc_guild",text:"受付のハナと話す",dlg:[["受付のハナ","旅人さん、いいところに！ 風車の丘で一人の剣士が山賊に囲まれてるって知らせが！"],["案内","右の顔アイコンをタップするとキャラクターを交代できるよ。"]]},{type:"goto",target:"wp_x3",text:"風車の丘へ向かう",dlg:[["ハヤテ","助太刀感謝する。……と言いたいが、まだ片付いてないぞ。"]]},{type:"camp",target:"@near_wp_x3",text:"山賊の拠点を片付ける"},{type:"talk",target:"npc_guild",text:"ハナに報告する",dlg:[["ハヤテ","俺はハヤテ。流れ者だ。お前の剣、星の匂いがするな。しばらく付き合わせてもらう。"],["受付のハナ","ギルドから毎日の依頼も出してるから、よかったら見ていってね！"]]}]},{id:"m3",chapter:"第三章",title:"水面の約束",reward:{char:"minamo",gem:400,coin:4e4,items:{exp3:3,gem_water:3},ar:500},steps:[{type:"talk",target:"npc_fisher",text:"漁師のハマと話す",dlg:[["漁師のハマ","西の湖で、でっかいぷるんが暴れててな。娘のミナモが一人で行っちまった！"]]},{type:"statue",target:"st_plains",text:"星の像に祈る",dlg:[[fa,"像に触れたら……体に力が流れてくる。"],["案内","星の欠片を集めて星の像に捧げると、スタミナの上限が増えるよ。"]]},{type:"boss",target:"b_puff",text:"ぷるん大王を倒す"},{type:"talk",target:"npc_fisher",text:"ハマに報告する",dlg:[["ミナモ","えへへ、助けてくれてありがとう。お礼に、わたしも旅についていくね！"]]}]},{id:"m4",chapter:"第四章",title:"紅砂の谷",reward:{gem:500,coin:6e4,items:{exp3:5,ore3:5,ticket_g:2},ar:600},steps:[{type:"goto",target:"wp_akatsuchi",text:"東のアカツチ村へ向かう"},{type:"talk",target:"npc_smith",text:"鍛冶屋テツと話す",dlg:[["鍛冶屋テツ","星の剣か……。谷の奥の遺跡に、昔の星の記録が眠ってるって話だ。"]]},{type:"domain",target:"dom_relic",text:"紅砂の遺跡を攻略する"},{type:"boss",target:"b_golem",text:"岩鎧の巨人を倒す",dlg:[[fa,"遺跡の壁に、星が北の高原へ落ちていく絵があった……。"]]}]},{id:"m5",chapter:"第五章",title:"霜嶺の灯",reward:{char:"kohaku",gem:500,coin:8e4,items:{exp3:6,gem_frost:4},ar:700},steps:[{type:"goto",target:"wp_shimotsuki",text:"北西のシモツキ村へ向かう"},{type:"talk",target:"npc_monk",text:"見張りのオウと話す",dlg:[["見張りのオウ","霜の大精霊が目覚めて、山の灯が消えかけておる。"],["コハク","わたしも行く！ 力仕事なら任せて！"]]},{type:"boss",target:"b_wisp",text:"霜の大精霊を鎮める"},{type:"talk",target:"npc_monk",text:"オウに報告する",dlg:[["見張りのオウ","灯が戻った。……影の高原の塔に、星を呼ぶ者がいると聞く。"]]}]},{id:"m6",chapter:"最終章",title:"影の塔",reward:{gem:1600,coin:15e4,items:{ticket_s:10,ticket_g:10},ar:1e3},steps:[{type:"goto",target:"wp_spire",text:"影の高原へ向かう",dlg:[["影の騎士","……星の子よ。お前が落ちてきたのは偶然ではない。"]]},{type:"boss",target:"b_knight",text:"影の騎士を倒す"},{type:"talk",target:"npc_elder",text:"ルコの町に帰る",dlg:[["影の騎士","（消えゆく声）……空の向こうに、まだお前の故郷がある……。"],[fa,"故郷……。みんな、ありがとう。もう少しだけ、この島を旅してもいいかな。"],["ツムギ","もちろん！ まだ行ってない場所、いっぱいあるよ！"],["案内","メインストーリーはここまで！ 世界の探索、祈願、星の塔への挑戦を楽しんでね。"]]}]}],Dx=[["？？？","……ねえ、大丈夫？ 空から光が落ちてきたと思ったら、あなたが倒れてたの。"],[fa,"ここは……どこだ？ 何も思い出せない。"],["？？？","ヨスガ諸島の南の浜だよ。北に行けばルコの町がある。まずは町長に会ってみて！"],["案内","左下をなぞって移動、右側をなぞるとカメラが回るよ。「走」を押し続けるとダッシュ、「跳」でジャンプ。空中でもう一度「跳」を押すと滑空できるよ。"],["案内","崖に向かって進むと登れるよ。黄色い◆がつぎの目的地！"]],Ix=[{type:"kill",goal:15,text:"魔物を15体倒す"},{type:"chest",goal:3,text:"宝箱を3つ開ける"},{type:"react",goal:12,text:"元素反応を12回起こす"},{type:"elite",goal:2,text:"岩兵か精霊を2体倒す"},{type:"domain",goal:1,text:"秘境を1回クリアする"},{type:"shard",goal:1,text:"星の欠片を1つ集める"},{type:"boss",goal:1,text:"ボスを1体倒す"},{type:"skill",goal:20,text:"元素スキルを20回使う"}];function gl(i){if(!i.startsWith("@near_"))return i;const e=i.slice(6),n=Qt.get(e)||Qt.get("wp_"+e)||Qt.get("wp_"+e.replace("wp_",""))||Qt.get("wp_ruko");let s="",r=1/0;for(const a of At)if(a.type==="camp"){const o=Ct(a.x,a.z,n.x,n.z);o<r&&(r=o,s=a.id)}return s}function Ha(){return O.quest.main<Ca.length?Ca[O.quest.main]:null}function ui(){const i=Ha();return i&&i.steps[O.quest.step]||null}function Ic(i){if(!i)return null;const e=Qt.get(gl(i.target));return e?{x:e.x,y:e.y,z:e.z}:null}function Qr(i,e,t){if(i.role==="guest"||da)return;const n=ui();if(!n)return;const s=gl(n.target);let r=!1;if(e==="near"){if(n.type==="goto"){const a=Qt.get(s);a&&Ct(i.player.pos.x,i.player.pos.z,a.x,a.z)<14*14&&(r=!0)}n.type==="camp"&&O.camps[s]&&Date.now()-O.camps[s]<3e5&&(r=!0)}else(e===n.type&&t===s||e==="goto"&&n.type==="goto"&&t===s)&&(r=!0);r&&Va(i,n)}let da=!1;function Va(i,e){if(da)return;da=!0;const t=Ha(),n=()=>{if(da=!1,O.quest.step++,O.quest.step>=t.steps.length){const s=t.reward;if(s.gem&&lt("gem",s.gem),s.coin&&lt("coin",s.coin),s.items)for(const r in s.items)lt(r,s.items[r]);s.ar&&li(s.ar),s.char&&Ia(s.char),se.emit("questDone",t,s),O.quest.main++,O.quest.step=0}et(),se.emit("quest")};e.dlg?se.emit("dialog",e.dlg,n):n()}function Lx(i,e){const t=ui();return!t||t.type!=="talk"||t.target!==e||i.role==="guest"?!1:(Va(i,t),!0)}function Ux(i,e){const t=ui();t&&t.type==="statue"&&t.target===e&&Va(i,t)}function Nx(i,e){const t=ui();t&&t.type==="domain"&&t.target===e&&Va(i,t)}function Fx(){const i=new Date;return`${i.getFullYear()}-${i.getMonth()+1}-${i.getDate()}`}function _l(){const i=Fx();if(O.daily.date===i)return;const e=new fi(i.split("-").reduce((s,r)=>s*37+Number(r),7)),t=[...Ix],n=[];for(let s=0;s<4;s++){const r=t.splice(e.int(0,t.length-1),1)[0];n.push({type:r.type,text:r.text,n:0,goal:r.goal})}O.daily={date:i,tasks:n,claimed:[!1,!1,!1,!1],bonus:!1},et()}function Ts(i,e){if(!e)return;_l();let t=!1;for(const n of O.daily.tasks)n.type===i&&n.n<n.goal&&(n.n=Math.min(n.goal,n.n+e),t=!0,n.n>=n.goal&&se.emit("toast",`依頼達成：${n.text}`));t&&(et(),se.emit("daily-ui"))}function Ox(i){const e=O.daily.tasks[i];return!e||e.n<e.goal||O.daily.claimed[i]?!1:(O.daily.claimed[i]=!0,lt("gem",50),lt("coin",8e3),lt("exp2",3),li(150),et(),!0)}function zx(){return O.daily.bonus||!O.daily.claimed.every(i=>i)?!1:(O.daily.bonus=!0,lt("gem",100),lt("exp3",2),lt("ore2",4),li(300),et(),!0)}class Qh{constructor(e,t){this.scene=e,this.charId="",this.pos=new P,this.target=new P,this.face=0,this.f=0,this.mode="ground",this.name="友達",this.hp=1,this.members=[],this.bb=new oi(Ii(t,rt(t).look,rt(t).weapon),en,vn),e.add(this.bb.root),e.add(this.bb.shadow),this.charId=t}setChar(e){e===this.charId||!rt(e)||(this.bb.dispose(),this.bb=new oi(Ii(e,rt(e).look,rt(e).weapon),en,vn),this.scene.add(this.bb.root),this.scene.add(this.bb.shadow),this.charId=e)}render(e,t,n){this.pos.lerp(this.target,Math.min(1,e*10));const{dir:s,flip:r}=xr(this.face,t),a=this.mode==="climb"?1:s;this.bb.setFrame(this.f,a,a===2?r:!1),this.bb.root.position.copy(this.pos),this.bb.face(t,n),this.bb.shadow.position.set(this.pos.x,Math.max(nt(this.pos.x,this.pos.z),Dn)+.06,this.pos.z)}dispose(){this.bb.dispose()}}class Bx{constructor(e){this.fx=new Fv(64),this.members=[],this.active=0,this.enemies=new Map,this.projs=[],this.eprojs=[],this.fields=[],this.timers=[],this.nums=[],this.tele=[],this.camYaw=0,this.camPitch=.42,this.camDist=11,this.camT=new P,this.shakeT=0,this.input={mx:0,my:0,sprint:!1,atkHeld:!1,atkTap:!1,atkHold:!1,eTap:!1,eHold:!1,qTap:!1,jump:!1,camDX:0,camDY:0,zoom:0},this.now=0,this.hour=9,this.stats={reacts:0},this.eclipse=0,this.buffAtk=0,this.buffAtkVal=0,this.shield=0,this.shieldT=0,this.switchCd=0,this.combo=0,this.comboT=0,this.atkT=0,this.atkFrameT=0,this.atkQueued=!1,this.holdT=0,this.charging=!1,this.burstLock=0,this.pid=1,this.role="solo",this.net=null,this.remotes=new Map,this.netEcho=!1,this.chestObjs=new Map,this.shardObjs=new Map,this.interactables=[],this.arena=null,this.bossActive=null,this.paused=!1,this.dialogOpen=!1,this.spawnT=0,this.saveT=0,this.netT=0,this.lastWpCheck=0,this.dead=!1,this.telePool=[],this.npcs=[],this.hitStopT=0,this.lastFrame=0,Gv(),this.gfx=new zv(e),this.gfx.tilt=O.settings.tilt,this.gfx.setQuality(O.settings.quality),this.view=new nx(this.gfx.scene),this.gfx.scene.add(this.fx.group),this.applyQuality(),!O.pos.x&&!O.pos.z&&(O.pos={x:Qi.x,y:nt(Qi.x,Qi.z),z:Qi.z}),this.player=new ax(this.gfx.scene,O.party[0]),this.player.pos.set(O.pos.x,nt(O.pos.x,O.pos.z),O.pos.z),this.player.stamMax=O.stamMax,this.player.stamina=O.stamMax,this.player.onPlungeLand=()=>yx(this,this.cur),this.player.onDrown=()=>this.wipe("溺れてしまった…"),this.camYaw=0,this.player.face=Math.PI,this.camT.copy(this.player.pos),this.buildParty();for(let t=0;t<8;t++){const n=new De(new cl(.85,1,32).rotateX(-Math.PI/2),new Jt({color:16726586,transparent:!0,opacity:.6,depthWrite:!1}));n.visible=!1,n.renderOrder=3,this.gfx.scene.add(n),this.telePool.push(n)}for(const t of At)if(t.type==="shard"&&!O.shards[t.id]){const n=new De(new Zi(.35),new Jt({color:10154239}));n.position.set(t.x,t.y,t.z),n.visible=!1,this.gfx.scene.add(n),this.shardObjs.set(t.id,n)}for(const t of At)if(t.type==="npc"){const n=new oi(Ii(t.id,t.data.look,"none"),en,vn);n.root.position.set(t.x,t.y,t.z),n.shadow.position.set(t.x,t.y+.06,t.z),this.gfx.scene.add(n.root,n.shadow),this.npcs.push({id:t.id,bb:n,x:t.x,z:t.z,face:0}),ti({x:t.x,z:t.z,r:.5})}se.on("chars",()=>{this.myParty().filter(n=>O.chars[n]).join()!==this.members.map(n=>n.id).join()?this.buildParty():this.members.forEach(n=>n.refresh())}),se.on("daily",(t,n)=>Ts(t,n))}applyQuality(){const e=Yf[this.gfx.q];this.view.near=e.near,this.view.grassN=e.grass}get cur(){return this.members[this.active]}myParty(){return this.role==="solo"?O.party.slice(0,4):O.party.slice(0,2)}buildParty(){const e=this.myParty().filter(n=>O.chars[n]),t=new Map(this.members.map(n=>[n.id,n]));this.members=e.map(n=>{const s=t.get(n);return s?(s.party=e,s.refresh(),s):new mx(n,e)}),this.active=_n(this.active,0,this.members.length-1),this.cur.dead&&(this.active=Math.max(0,this.members.findIndex(n=>!n.dead))),this.player.setChar(this.cur.id),se.emit("party")}later(e,t){this.timers.push({t:e,f:t})}shake(e){this.shakeT=Math.max(this.shakeT,e)}fxAt(e,t,n,s=1,r=!1,a={}){this.fx.spawn(e,t,{el:n,scale:s,flip:r,...a}),this.net&&!this.netEcho&&!a.vel&&this.net.send({t:"fx",n:e,p:[t.x,t.y,t.z],e:n,s,f:r})}enemiesNear(e,t){const n=[];for(const s of this.enemies.values())s.alive&&Ct(s.pos.x,s.pos.z,e.x,e.z)<(t+s.radius)**2&&Math.abs(s.pos.y-e.y)<6+t&&n.push(s);return n}aoe(e,t,n){for(const s of this.enemiesNear(e,t))n(s)}sendHit(e,t){this.elementAt(e.pos,t.el),this.role==="guest"?(this.net?.send({t:"hit",id:e.id,h:t}),e.hurtFlash=.15):od(this,e,t)}hitCircle(e,t,n){let s=0;for(const r of this.enemiesNear(e,t))this.sendHit(r,{...n,crit:Math.random()<n.cr}),s++;return this.elementAt(e,n.el,t),s}hitArc(e,t,n,s,r){let a=0;const o=Math.sin(t),c=Math.cos(t);for(const l of this.enemiesNear(e,n)){const h=l.pos.x-e.x,d=l.pos.z-e.z,f=Math.hypot(h,d)||1;((h*o+d*c)/f>Math.cos(s)||f<1)&&(this.sendHit(l,{...r,crit:Math.random()<r.cr}),a++,this.fxAt("hit-spark",l.pos.clone().setY(l.pos.y+.9),r.el,.8))}return this.elementAt(e.clone().add(new P(o*n*.6,0,c*n*.6)),r.el,n*.6),a&&this.hitStop(.04),a}hitCapsule(e,t,n,s){let r=0;const a=t.clone().sub(e),o=a.lengthSq()||1;for(const c of this.enemies.values()){if(!c.alive)continue;const l=_n(c.pos.clone().sub(e).dot(a)/o),h=e.clone().addScaledVector(a,l);Ct(h.x,h.z,c.pos.x,c.pos.z)<(n+c.radius)**2&&(this.sendHit(c,{...s,crit:Math.random()<s.cr}),r++)}return r}hitStop(e){this.hitStopT=Math.max(this.hitStopT,e)}shoot(e,t,n,s,r,a={},o){const c=n?n.pos.clone().add(new P(0,n.body==="wisp"?1.3*n.def.scale:.7*n.def.scale,0)).sub(t).normalize():new P(Math.sin(this.player.face),0,Math.cos(this.player.face));this.shootDir(e,t,c,s,r,a,o,n)}shootDir(e,t,n,s,r,a={},o,c=null){const l=n.clone().multiplyScalar(s),h=new P(Math.cos(this.camYaw),0,-Math.sin(this.camYaw)),d=l.dot(h)<0,f=this.fx.spawn("orb",t,{el:r.el,scale:a.scale||1,loop:!0,life:a.life||1.2,flip:d,vel:l});this.net&&!this.netEcho&&this.net.send({t:"proj",p:[t.x,t.y,t.z],v:[l.x,l.y,l.z],e:r.el,s:a.scale||1,l:a.life||1.2}),this.projs.push({pos:t.clone(),vel:l,hit:r,life:a.life||1.2,r:a.r||.6,pierce:!!a.pierce,hitIds:new Set,fx:f,home:c,aoe:a.aoe,...o?{onHit:o}:{}})}addField(e){this.fields.push(e)}pullEnemies(e,t,n){if(this.role==="guest"){this.net?.send({t:"pull",c:[e.x,e.y,e.z],r:t,k:n});return}for(const s of this.enemiesNear(e,t)){if(s.boss)continue;const r=e.clone().sub(s.pos);r.y=0;const a=r.length();a>.8&&s.pos.addScaledVector(r,Math.min(n,a-.8)/a)}}gainEnergy(e,t,n=!1){for(const s of this.members){if(s.dead)continue;const r=t&&s.def.el===t.def.el?1.3:1,a=s===this.cur?1:.6;s.energy=Math.min(s.maxEnergy,s.energy+e*r*a*s.st.er)}n&&t&&this.fxAt("mote",this.player.pos.clone().setY(this.player.pos.y+1.6),t.def.el,1.2,!1,{life:.5,loop:!0})}healParty(e,t,n){if(t!==this.pid){this.net?.send({t:"heal",v:e,to:t});return}const s=n?1+n.st.heal:1;for(const r of this.members)r.dead||(r.hp=Math.min(r.st.hp,r.hp+r.st.hp*e*s));this.num(this.player.pos,"+"+Math.round(this.cur.st.hp*e*s),"#8aff8a",!1)}healActive(e,t){const n=this.cur;if(n.dead)return;const s=(t.st.hp*.3+n.st.hp*.7)*e*(1+t.st.heal);n.hp=Math.min(n.st.hp,n.hp+s),this.num(this.player.pos,"+"+Math.round(s),"#8aff8a",!1)}addShield(e,t){if(t!==this.pid){this.net?.send({t:"shield",v:e,to:t});return}this.addShieldAbs(this.cur.st.hp*e,12)}addShieldAbs(e,t){this.shield=Math.max(this.shield,e),this.shieldT=t,this.fxAt("ward",this.player.pos,this.cur.def.el,1.2,!1,{follow:this.player.bb.root,loop:!0,life:Math.min(t,6)})}posOfPid(e){return e===this.pid?this.player.pos:this.remotes.get(e)?.pos||this.player.pos}nearestPlayer(e){let t=null;const n=(s,r,a)=>{if(a)return;const o=Ct(s.x,s.z,e.x,e.z)+(s.y-e.y)**2*.3;(!t||o<t.d)&&(t={pos:s,d:o,pid:r})};n(this.player.pos,this.pid,this.dead||this.player.mode==="dead");for(const[s,r]of this.remotes)n(r.pos,s,r.hp<=0);return t}telegraph(e,t){const n=e.boss?["smash","shoot","cast"][e.moves%3]:e.def.atkKind;if(n==="shoot"||n==="lunge")return;const s=n==="cast"?t.clone():e.pos.clone().add(new P(Math.sin(e.face)*1.2*e.def.scale,0,Math.cos(e.face)*1.2*e.def.scale)),r=n==="cast"?e.boss?4:2.6:e.boss?4.5:2.2;this.showTele(s,r,n==="cast"?1.1:.65),this.net&&!this.netEcho&&this.net.send({t:"tele",p:[s.x,s.y,s.z],r,d:n==="cast"?1.1:.65})}showTele(e,t,n){const s=this.telePool.find(r=>!r.visible);s&&(s.visible=!0,s.position.set(e.x,(this.arena?this.arena.center.y:nt(e.x,e.z))+.12,e.z),s.scale.setScalar(t),this.tele.push({mesh:s,t:0,max:n}))}enemyAttack(e,t,n,s,r){const a=e.atk*s*(e.slowT>0?.7:1);this.checkPlayerHit(t,n,a,r,e.lvl),this.net&&this.net.send({t:"eatk",c:[t.x,t.y,t.z],r:n,dmg:a,el:r,lvl:e.lvl})}checkPlayerHit(e,t,n,s,r){const a=this.player.pos;Ct(a.x,a.z,e.x,e.z)<(t+.4)**2&&Math.abs(a.y-e.y)<3+t*.3&&this.hurt(n,s,r)}enemyProjectile(e,t,n){const s=e.pos.clone().add(new P(0,e.body==="wisp"?1.3*e.def.scale:1,0)),r=t.clone().multiplyScalar(e.boss?13:11),a=e.atk*(e.boss?.9:.85);this.spawnEProj(s,r,a,n,!0),this.net&&this.net.send({t:"eproj",p:[s.x,s.y,s.z],v:[r.x,r.y,r.z],dmg:a,el:n})}spawnEProj(e,t,n,s,r){const a=this.fx.spawn("orb",e,{el:s==="phys"?"smoke":s,scale:.8,loop:!0,life:2,vel:t});this.eprojs.push({pos:e.clone(),vel:t,dmg:n,el:s,life:2,fx:a,local:r})}hurt(e,t,n){const s=this.player,r=this.cur;if(s.invuln>0||r.dead||this.burstLock>0)return;let a=e*(1-r.st.def/(r.st.def+5*n+500));if(this.shield>0){const o=Math.min(this.shield,a);this.shield-=o,a-=o,this.shield<=0&&(this.shieldT=0)}a<=0||(r.hp-=a,s.hurtT=.25,s.invuln=.35,this.num(s.pos,Math.round(a)+"","#ff6a6a",!1),this.shake(.12),r.hp<=0&&this.memberDown())}memberDown(){const e=this.cur;e.hp=0,e.dead=!0,se.emit("toast",`${e.def.name}が倒れた`);const t=this.members.findIndex(n=>!n.dead);if(t<0){this.wipe("全員倒れてしまった…");return}this.switchTo(t,!0)}wipe(e){se.emit("toast",e);for(const n of this.members)n.dead=!1,n.hp=n.st.hp*.3;if(this.player.stamina=this.player.stamMax,this.arena){this.leaveArena(!1);return}const t=this.nearestWaypoint(this.player.pos.x,this.player.pos.z)||Qt.get("wp_beach");this.teleport(t.x+2,t.z+2)}nearestWaypoint(e,t){let n=null,s=1/0;for(const r of At)if(r.type==="waypoint"&&(O.wps[r.id]||r.id==="wp_beach")){const a=Ct(e,t,r.x,r.z);a<s&&(s=a,n=r)}return n}teleport(e,t){if(!this.arena){this.player.pos.set(e,nt(e,t),t),this.player.vel.set(0,0,0),this.player.mode=this.player.waterDeep(e,t)?"swim":"ground",this.camT.copy(this.player.pos);for(const n of[...this.enemies.values()])!n.arena&&this.role!=="guest"&&this.removeEnemy(n);this.fxAt("beacon",this.player.pos,"water",1)}}num(e,t,n,s){this.nums.push({x:e.x+(Math.random()-.5)*.6,y:e.y+1.8,z:e.z,text:t,color:n,t:0,big:s}),this.nums.length>60&&this.nums.shift()}damageEnemy(e,t,n,s,r,a,o=!1){if(!e.alive)return;t=Math.max(1,Math.round(t)),e.hp-=t,o||se.emit("sfx",r?"react":"hit"),e.hurtFlash=o?.05:.15;const c=_t[s].color;this.num(e.pos,t+"",n?"#ffe04a":s==="phys"?"#ffffff":c,n),r&&this.nums.push({x:e.pos.x,y:e.pos.y+2.6,z:e.pos.z,text:r,color:c,t:0,big:!0}),this.net&&this.net.send({t:"dmg",id:e.id,d:t,c:n,e:s,l:r}),e.hp<=0&&this.killEnemy(e)}killEnemy(e){e.hp=0,e.state="dead",this.fxAt("poof",e.pos,"smoke",e.def.scale),this.later(.6,()=>this.removeEnemy(e)),this.rewardKill(e.def.id,e.lvl,e.pos),this.net&&this.net.send({t:"kill",id:e.id,def:e.def.id,lvl:e.lvl}),e.camp&&!e.arena&&this.checkCamp(e.camp),e.bossId&&this.bossDefeated(e.bossId,e)}rewardKill(e,t,n){const s=Sa(e),r=Ba[s.drop],a=t>=40?2:t>=20?1:0,o=Math.random;if(lt("coin",Math.round((40+t*6)*(s.boss?12:1))),lt(r[a],s.boss?4:o()<.6?1:2),a>0&&o()<.5&&lt(r[a-1],1),o()<.08+(s.boss?1:0)&&lt(r[Math.min(2,a+1)],1),li(s.boss?100:3),O.stats.kills++,s.boss&&s.el&&lt("gem_"+s.el,2+Math.floor(t/25)),s.boss){for(let c=0;c<2;c++)Uo(new fi(Date.now()+c),t>=40?5:4);lt("gem",20),se.emit("toast","遺紋を手に入れた！"),Ts("boss",1)}(s.body==="golem"||s.body==="wisp")&&Ts("elite",1),Ts("kill",1),this.gainEnergy(s.boss?10:2,null),et()}removeEnemy(e){e.dispose(),this.enemies.delete(e.id),this.bossActive===e&&(this.bossActive=null)}elementAt(e,t,n=1.5){var s,r;if(!(t==="phys"||this.role==="guest"))for(const a of At){if(a.type!=="puzzle"||O.opened["puz"+a.id]||Ct(a.x,a.z,e.x,e.z)>100)continue;const o=(s=O.flags)[r="lit_"+a.id]||(s[r]=[0,0,0]);a.data.els.forEach((c,l)=>{const h=l/3*Math.PI*2,d=a.x+Math.cos(h)*4,f=a.z+Math.sin(h)*4;if(c===t&&!o[l]&&Ct(d,f,e.x,e.z)<(n+1.6)**2){o[l]=1;const u=this.view.poiObjs.get(a.id)?.getObjectByName("orb"+l);u&&u.material.color.set(_t[t].color),this.fxAt("hit-spark",new P(d,nt(a.x,a.z)+2.8,f),t,1.2),et(),o.every(g=>g)&&(O.opened["puz"+a.id]=1,se.emit("toast","仕掛けが解けた！宝箱が現れた"),O.flags["pzc_"+a.id]=1)}})}}levelAt(e,t){const n=dl(e,t),s=Math.hypot(e-20,t-236),r=n==="plains"?Math.min(12,1+Math.floor(s/45)):n==="canyon"?22:n==="peaks"?32:45;return Math.min(95,r+wa()*8)}spawnAround(){if(this.arena||this.role==="guest")return;const e=[this.player.pos,...[...this.remotes.values()].map(s=>s.pos)],t=(s,r)=>e.some(a=>Ct(a.x,a.z,s.x,s.z)<r*r),n=Date.now();for(const s of At)if(s.type==="camp"){const r=[...this.enemies.values()].filter(o=>o.camp===s.id),a=O.camps[s.id]&&n-O.camps[s.id]<3e5;if(!r.length&&!a&&t(s,85)){const o=this.levelAt(s.x,s.z);s.data.enemies.forEach((c,l)=>{const h=l/s.data.enemies.length*Math.PI*2,d=this.addEnemy(c,o+(c==="golem"?2:0),s.x+Math.cos(h)*3.5,s.z+Math.sin(h)*3.5);d.camp=s.id})}else r.length&&!t(s,130)&&r.every(o=>o.state==="idle")&&r.forEach(o=>this.removeEnemy(o))}else if(s.type==="boss"){const r=[...this.enemies.values()].find(o=>o.bossId===s.id),a=!O.bosses[s.id]||n-O.bosses[s.id]>6e4;if(s.id==="b_knight"&&!this.questAllowsKnight())continue;if(!r&&a&&t(s,70)){const o=this.addEnemy(s.data.enemy,this.levelAt(s.x,s.z)+4,s.x,s.z);o.bossId=s.id}else r&&!t(s,120)&&this.removeEnemy(r)}}questAllowsKnight(){return O.quest.main>=5}addEnemy(e,t,n,s,r){const a=new _x(this.gfx.scene,e,t,n,s,r);return this.enemies.set(a.id,a),a}checkCamp(e){[...this.enemies.values()].filter(n=>n.camp===e&&n.alive).length||(O.camps[e]=Date.now(),et(),O.opened["campchest_"+e]||(O.flags["cc_"+e]=1,se.emit("toast","拠点を制圧した！宝箱が現れた")),Qr(this,"camp",e))}bossDefeated(e,t){O.bosses[e]=Date.now(),et(),se.emit("toast",`${t.def.name}を倒した！`),Qr(this,"boss",e)}chestList(){const e=[];for(const t of At)t.type==="chest"&&!O.opened[t.id]&&e.push({id:t.id,x:t.x,z:t.z,tier:t.data.tier}),t.type==="camp"&&O.flags["cc_"+t.id]&&!O.opened["campchest_"+t.id]&&e.push({id:"campchest_"+t.id,x:t.x,z:t.z,tier:2}),t.type==="puzzle"&&O.flags["pzc_"+t.id]&&!O.opened["pzchest_"+t.id]&&e.push({id:"pzchest_"+t.id,x:t.x,z:t.z,tier:3});return e}openChest(e,t){if(this.role==="guest"){se.emit("toast","マルチプレイ中は他の人の世界の宝箱は開けられません");return}O.opened[e]=1;const n=this.chestObjs.get(e);if(n){const l=n.getObjectByName("lid");l&&(l.rotation.x=-1.2,l.position.z-=.3,l.position.y+=.2),this.later(1.2,()=>{n.removeFromParent(),this.chestObjs.delete(e)})}const s=[0,2,5,10,20][t],r=[0,300,1200,3e3,6e3][t];lt("gem",s),lt("coin",r);const a=Math.random(),o=[`星晶 ×${s}`,`コイン ×${r}`],c=(l,h,d)=>{lt(l,h),o.push(`${d} ×${h}`)};t>=2?c(a<.5?"exp2":"ore2",t,a<.5?"冒険家の手記":"精鉄"):c("exp1",2,"旅の手記"),t>=3&&(Uo(new fi(Date.now()),t>=4?5:4),o.push("遺紋 ×1")),Math.random()<.3&&c("food1",1,"おにぎり"),li([0,10,20,40,80][t]),Ts("chest",1),et(),this.fxAt("wish-star",this.player.pos.clone().setY(this.player.pos.y+1.5),t>=3?"gold":"blue",.35),se.emit("loot",o)}updateInteract(){const e=this.player.pos,t=[],n=(s,r,a,o,c,l)=>{const h=Ct(e.x,e.z,r,a);h<o*o&&t.push({id:s,label:c,act:l,d:h})};for(const s of this.chestList()){if(Ct(e.x,e.z,s.x,s.z)<70*70&&!this.chestObjs.has(s.id)){const r=this.view.chestMesh(s.tier);r.position.set(s.x,nt(s.x,s.z),s.z),r.rotation.y=s.x*13%6,this.gfx.scene.add(r),this.chestObjs.set(s.id,r)}n(s.id,s.x,s.z,2.6,"宝箱を開ける",()=>this.openChest(s.id,s.tier))}for(const[s,r]of this.chestObjs)Ct(e.x,e.z,r.position.x,r.position.z)>90*90&&(r.removeFromParent(),this.chestObjs.delete(s));if(!this.arena)for(const s of At)s.type==="npc"?n(s.id,s.x,s.z,4.2,`${s.name}と話す`,()=>se.emit("npc",s.id)):s.type==="statue"?n(s.id,s.x,s.z,6,"星の像に祈る",()=>se.emit("statue",s.id)):s.type==="domain"?n(s.id,s.x,s.z,6,`${s.name}に入る`,()=>se.emit("domain",s.id)):s.type==="tower"?n(s.id,s.x,s.z+3,6,"星の塔に挑む",()=>se.emit("tower")):s.type==="waypoint"&&!O.wps[s.id]&&Ct(e.x,e.z,s.x,s.z)<36&&(O.wps[s.id]=1,et(),li(20),se.emit("toast",`ワープポイント「${s.name}」を解放した`),this.fxAt("beacon",new P(s.x,s.y,s.z),"water",1.2),Qr(this,"goto",s.id));this.now-this.lastWpCheck>.5&&(this.lastWpCheck=this.now,Qr(this,"near","")),t.sort((s,r)=>s.d-r.d),this.interactables=t.slice(0,3);for(const[s,r]of this.shardObjs){const a=Ct(e.x,e.z,r.position.x,r.position.z);r.visible=a<120*120,r.visible&&(r.rotation.y+=.03,r.position.y=Qt.get(s).y+Math.sin(this.now*2+r.position.x)*.2,a<1.8&&Math.abs(e.y+1-r.position.y)<2.2&&(O.shards[s]=1,lt("shard",1),li(10),r.removeFromParent(),this.shardObjs.delete(s),this.fxAt("hit-spark",r.position,"water",1.2),se.emit("toast","星の欠片を手に入れた"),Ts("shard",1),et()))}}enterArena(e,t,n,s,r,a=0){if(this.role!=="solo"){se.emit("toast","マルチプレイ中は入れません");return}const o=new P(0,60,-760),c=new jt,l=new De(new Sn(20,16,4,24),new Nt({color:e==="tower"?5921418:8022618}));l.position.y=-2,c.add(l);const h=new De(new Oa(19.5,.3,4,32),new Jt({color:e==="tower"?16767050:10121471}));h.rotation.x=Math.PI/2,h.position.y=.1,c.add(h),c.position.copy(o),this.gfx.scene.add(c);for(const d of[...this.enemies.values()])this.removeEnemy(d);this.arena={kind:e,id:t,lv:n,waves:s,wave:-1,t:0,center:o,ret:this.player.pos.clone(),mesh:c,elvl:r,done:!1,tlimit:a},this.player.arenaR=20,this.player.arenaC.copy(o),this.player.pos.copy(o).add(new P(0,0,12)),this.player.mode="ground";for(const d of this.members)d.dead=!1,d.hp=d.st.hp;this.player.stamina=this.player.stamMax,this.camT.copy(this.player.pos),this.camYaw=0,se.emit("arena",!0),this.later(1.2,()=>this.nextWave())}nextWave(){const e=this.arena;if(e.wave++,e.wave>=e.waves.length){e.done=!0,se.emit("arenaWin",e);return}se.emit("toast",`ウェーブ ${e.wave+1} / ${e.waves.length}`),e.waves[e.wave].forEach((t,n)=>{const s=n/e.waves[e.wave].length*Math.PI*2,r=this.addEnemy(t,e.elvl+(Sa(t).boss?3:0),e.center.x+Math.cos(s)*9,e.center.z-2+Math.sin(s)*6);r.arena=!0,r.groundFn=(a,o)=>this.player.groundAt(a,o),r.pos.y=e.center.y,r.home.copy(r.pos),this.fxAt("beacon",r.pos,"shadow",.8)})}leaveArena(e){const t=this.arena;if(t){for(const n of[...this.enemies.values()])this.removeEnemy(n);t.mesh.removeFromParent(),this.arena=null,this.player.arenaR=0,this.player.pos.copy(t.ret),this.player.mode="ground",this.camT.copy(this.player.pos),se.emit("arena",!1)}}switchTo(e,t=!1){e===this.active||e>=this.members.length||this.members[e].dead||!t&&(this.switchCd>0||this.atkT>0||!["ground","air","glide","swim"].includes(this.player.mode))||(this.active=e,this.switchCd=1,this.player.setChar(this.cur.id),this.fxAt("hit-spark",this.player.pos.clone().setY(this.player.pos.y+1),this.cur.def.el,1.2),se.emit("party"))}tryE(e){const t=this.cur;t.cdE>0||this.player.mode==="climb"||this.player.mode==="swim"||this.player.mode==="dash"||(t.cdE=t.def.skill.cd*(1-t.st.cdr)*(e?1.3:1),this.atkT=.35,this.atkFrameT=.35,Kh(this,t,!1),se.emit("sfx","skill"))}tryQ(){const e=this.cur;e.energy<e.maxEnergy||["climb","swim","dash","glide"].includes(this.player.mode)||(e.energy=0,this.burstLock=.8,this.atkT=.6,this.atkFrameT=.6,this.player.invuln=1,se.emit("burst",e.id),Kh(this,e,!0))}update(e){this.hitStopT>0&&(this.hitStopT-=e,e*=.15),this.now+=e,this.hour=(this.hour+e/60)%24,this.role!=="guest"?this.gfx.setDayTime(this.hour):this.gfx.setDayTime(this.hour),O.stats.play+=e;const t=this.input,n=this.player,s=this.cur;this.camYaw-=t.camDX*.006,this.camPitch=_n(this.camPitch+t.camDY*.004,.12,1.05),t.camDX=t.camDY=0,this.camDist=_n(this.camDist+t.zoom,5,16),t.zoom=0;const r=Math.sin(this.camYaw),a=Math.cos(this.camYaw);let o=t.my*r+t.mx*a,c=t.my*a-t.mx*r;const l=this.atkT>0&&n.mode==="ground"||this.dialogOpen||this.paused;if((this.dialogOpen||this.paused)&&(o=c=0),n.update(e,o,c,t.sprint&&!l,l),n.landDamage){const f=s.st.hp*n.landDamage;n.landDamage=0,s.hp-=f,this.num(n.pos,Math.round(f)+"","#ff6a6a",!1),s.hp<=0&&this.memberDown()}this.switchCd-=e,this.burstLock-=e,this.eclipse=Math.max(0,this.eclipse-e),this.buffAtk=Math.max(0,this.buffAtk-e),this.shieldT>0&&(this.shieldT-=e,this.shieldT<=0&&(this.shield=0));for(const f of this.members)f.cdE=Math.max(0,f.cdE-e),f.infuse&&(f.infuse.t-=e,f.infuse.t<=0&&(f.infuse=null));for(let f=this.timers.length-1;f>=0;f--){const u=this.timers[f];u.t-=e,u.t<=0&&(this.timers.splice(f,1),u.f())}if(!this.dialogOpen&&!this.paused&&!this.dead){if(t.jump&&(t.jump=!1,n.jump()),t.atkTap&&(t.atkTap=!1,n.mode==="air"||n.mode==="glide"?n.pos.y-n.groundAt(n.pos.x,n.pos.z)>1.2&&(n.mode="plunge"):n.mode==="ground"&&(this.atkT>.08?this.atkQueued=!0:this.doAttack(!1))),t.atkHold&&(t.atkHold=!1,n.mode==="ground"&&this.atkT<=.1)){const f=Cc[s.def.weapon];n.spendStam(f.caSt)&&(this.combo=0,this.doAttack(!0))}if(t.eTap||t.eHold){const f=t.eHold;t.eTap=t.eHold=!1,this.tryE(f)}t.qTap&&(t.qTap=!1,this.tryQ())}this.atkT>0&&(this.atkT-=e,this.atkT<=0&&this.atkQueued&&(this.atkQueued=!1,this.doAttack(!1))),this.atkFrameT-=e,this.comboT-=e,this.comboT<=0&&(this.combo=0);for(let f=this.projs.length-1;f>=0;f--){const u=this.projs[f];if(u.life-=e,u.home&&u.home.alive){const _=u.home.pos.clone().add(new P(0,.8,0)).sub(u.pos).normalize().multiplyScalar(u.vel.length());u.vel.lerp(_,Math.min(1,e*6)),u.fx&&(u.fx.o.vel=u.vel)}u.pos.addScaledVector(u.vel,e),u.fx&&u.fx.mesh.position.copy(u.pos);let g=u.life<=0||u.pos.y<(this.arena?this.arena.center.y-1:nt(u.pos.x,u.pos.z)-.3);for(const _ of this.enemies.values()){if(!_.alive||u.hitIds.has(_.id))continue;const m=_.pos.y+(_.body==="wisp"?1.3*_.def.scale:.7*_.def.scale);if(Ct(_.pos.x,_.pos.z,u.pos.x,u.pos.z)<(u.r+_.radius)**2&&Math.abs(m-u.pos.y)<1.4*_.def.scale+u.r&&(u.hitIds.add(_.id),this.sendHit(_,{...u.hit,crit:Math.random()<u.hit.cr}),this.fxAt("hit-spark",u.pos,u.hit.el,.8),u.onHit?.(),u.aoe&&this.hitCircle(u.pos,u.aoe,{...u.hit,mv:u.hit.mv*.5}),!u.pierce)){g=!0;break}}g&&(u.aoe&&u.life>0&&this.fxAt("react-bloom",u.pos,u.hit.el,.6),this.elementAt(u.pos,u.hit.el),u.fx?.kill(),this.projs.splice(f,1))}for(let f=this.eprojs.length-1;f>=0;f--){const u=this.eprojs[f];u.life-=e,u.pos.addScaledVector(u.vel,e),u.fx&&u.fx.mesh.position.copy(u.pos);let g=u.life<=0;Ct(u.pos.x,u.pos.z,n.pos.x,n.pos.z)<.7&&Math.abs(u.pos.y-n.pos.y-.9)<1.3&&(this.hurt(u.dmg,u.el,20+wa()*8),g=!0),g&&(u.fx?.kill(),this.eprojs.splice(f,1))}for(let f=this.fields.length-1;f>=0;f--){const u=this.fields[f];u.t-=e,u.tick-=e,u.tick<=0&&(u.tick=u.every,u.onTick(u)),u.fxName&&(u.fxT=(u.fxT??0)-e,u.fxT<=0&&(u.fxT=u.fxEvery||1,this.fxAt(u.fxName,u.pos,u.el||null,u.fxScale||1))),u.t<=0&&this.fields.splice(f,1)}if(this.role!=="guest")for(const f of this.enemies.values())bx(this,f,e);else for(const f of this.enemies.values())f.pos.lerp(f.netPos,Math.min(1,e*8));let h=null;for(const f of this.enemies.values())f.boss&&f.alive&&f.pos.distanceToSquared(n.pos)<40*40&&(h=f);this.bossActive=h,this.arena&&!this.arena.done&&(this.arena.t+=e,this.arena.wave>=0&&![...this.enemies.values()].some(f=>f.alive)&&(this.arena.wave>=this.arena.waves.length-1?(this.arena.wave++,this.arena.done=!0,se.emit("arenaWin",this.arena)):this.nextWave()),this.arena.tlimit&&this.arena.t>this.arena.tlimit&&(se.emit("toast","時間切れ…"),this.leaveArena(!1))),this.spawnT-=e,this.spawnT<=0&&(this.spawnT=.7,this.spawnAround()),this.updateInteract();const d=this.arena?this.arena.ret:n.pos;this.view.tint.copy(this.gfx.tint),this.view.update(d.x,d.z,this.now),this.net&&this.net.tick(e),this.saveT-=e,this.saveT<=0&&(this.saveT=8,this.arena||(O.pos={x:n.pos.x,y:n.pos.y,z:n.pos.z}),et(),_r()),this.render(e)}doAttack(e){const t=this.cur,n=Cc[t.def.weapon],s=e?0:this.combo%n.mv.length;this.atkT=e?.55:n.dur[s],this.atkFrameT=this.atkT,this.comboT=this.atkT+.6,e||this.combo++,xx(this,t,s,e)}render(e){const t=this.player,n=this.gfx.tint,s=t.pos.clone().add(new P(0,1.3,0));this.camT.lerp(s,Math.min(1,e*8));const r=this.camDist,a=Math.cos(this.camPitch),o=this.gfx.camera;o.position.set(this.camT.x+Math.sin(this.camYaw)*r*a,this.camT.y+Math.sin(this.camPitch)*r,this.camT.z+Math.cos(this.camYaw)*r*a);const c=this.arena?-999:nt(o.position.x,o.position.z)+.8;if(o.position.y<c&&(o.position.y=c),this.shakeT>0){this.shakeT-=e;const h=this.shakeT*.6;o.position.x+=(Math.random()-.5)*h,o.position.y+=(Math.random()-.5)*h}o.lookAt(this.camT);let l=-1;if(this.atkFrameT>0){const h=this.cur,d=1-this.atkFrameT/Math.max(.01,this.atkT||.4);l=h.def.weapon==="catalyst"||this.burstLock>0?kt.cast[0]:kt.atk[Math.min(2,Math.floor(d*3))]}t.mode==="plunge"&&(l=kt.atk[1]),t.render(e,this.camYaw,n,l),this.lastFrame=l>=0?l:t.bb.tex.offset.x*t.bb.W/en;for(const h of this.enemies.values())h.render(e,this.camYaw,n);for(const h of this.remotes.values())h.render(e,this.camYaw,n);for(const h of this.npcs){const d=Ct(h.x,h.z,t.pos.x,t.pos.z);if(h.bb.root.visible=h.bb.shadow.visible=d<120*120,!h.bb.root.visible)continue;d<64&&(h.face=Math.atan2(t.pos.x-h.x,t.pos.z-h.z));const{dir:f,flip:u}=xr(h.face,this.camYaw);h.bb.setFrame(Math.floor(this.now*1.5+h.x)%2,f,f===2?u:!1),h.bb.face(this.camYaw,n)}this.fx.update(e,this.camYaw);for(let h=this.tele.length-1;h>=0;h--){const d=this.tele[h];d.t+=e,d.mesh.material.opacity=.3+.5*(d.t/d.max),d.t>=d.max&&(d.mesh.visible=!1,this.tele.splice(h,1))}for(const[h,d]of this.view.poiObjs){const f=d.getObjectByName("gem");f&&(f.rotation.y+=e,Qt.get(h)?.type==="waypoint"&&f.material.color.set(O.wps[h]?5957887:6974074))}this.gfx.render()}}function S(i,e={},...t){const n=document.createElement(i);for(const s in e){const r=e[s];s==="class"?n.className=r:s==="style"?n.setAttribute("style",r):s.startsWith("on")?n.addEventListener(s.slice(2),r):r!=null&&r!==!1&&n.setAttribute(s,r===!0?"":r)}for(const s of t)s!=null&&s!==!1&&n.append(s);return n}const Aa=i=>document.querySelector(i);function Pt(i){for(;i.firstChild;)i.removeChild(i.firstChild);return i}function ws(i){return"★".repeat(i)}const Mn={1:"#8a8a9a",2:"#5aa86a",3:"#4a8ad8",4:"#9a5ad8",5:"#e8a83a"};let Po=null;function md(){if(Po)return Po;const i=240,e=document.createElement("canvas");e.width=e.height=i;const t=e.getContext("2d"),n=t.createImageData(i,i),s=[0,0,0];for(let r=0;r<i;r++)for(let a=0;a<i;a++){const o=a/i*Le*2-Le,c=r/i*Le*2-Le,l=nt(o,c),h=(r*i+a)*4;if(l<0){n.data[h]=40,n.data[h+1]=90+Math.max(-14,l)*3,n.data[h+2]=170,n.data[h+3]=255;continue}Jf(o,c,l,ul(o,c),s);const d=.8+Math.min(1,l/90)*.3,f=Math.floor(l/12)!==Math.floor(nt(o+4,c)/12)?.85:1;n.data[h]=s[0]*255*d*f,n.data[h+1]=s[1]*255*d*f,n.data[h+2]=s[2]*255*d*f,n.data[h+3]=255}return t.putImageData(n,0,0),Po=e,e}const ko=new Map;function ef(i,e,t=!1){const n=i+e+t;if(ko.has(n))return ko.get(n);const s=64,r=document.createElement("canvas");r.width=r.height=s;const a=r.getContext("2d");a.translate(s/2,s/2),a.lineCap="round",a.lineJoin="round",a.strokeStyle=e,a.fillStyle=e,a.lineWidth=5,a.shadowColor=e,a.shadowBlur=t?10:4;const o=(h,d,f)=>{a.beginPath();for(let u=0;u<10;u++){const g=-Math.PI/2+u*Math.PI/5,_=u%2?f*.45:f;a.lineTo(h+Math.cos(g)*_,d+Math.sin(g)*_)}a.closePath(),a.fill()},c=(h,d,f,u)=>{a.beginPath(),a.moveTo(h,d),a.lineTo(f,u),a.stroke();const g=Math.atan2(u-d,f-h);a.beginPath(),a.moveTo(f,u),a.lineTo(f-Math.cos(g-.5)*9,u-Math.sin(g-.5)*9),a.moveTo(f,u),a.lineTo(f-Math.cos(g+.5)*9,u-Math.sin(g+.5)*9),a.stroke()};switch(i){case"wave":a.beginPath(),a.arc(-6,0,18,-1.1,1.1),a.stroke(),a.beginPath(),a.arc(-14,0,14,-.9,.9),a.lineWidth=3,a.stroke();break;case"nova":a.beginPath(),a.arc(0,0,8,0,7),a.fill();for(let h=0;h<8;h++){const d=h*Math.PI/4;a.beginPath(),a.moveTo(Math.cos(d)*13,Math.sin(d)*13),a.lineTo(Math.cos(d)*22,Math.sin(d)*22),a.stroke()}break;case"dash":c(-20,10,18,-8),a.lineWidth=3,a.beginPath(),a.moveTo(-22,0),a.lineTo(-6,-6),a.moveTo(-18,18),a.lineTo(-2,12),a.stroke();break;case"turret":a.strokeRect(-9,-8,18,20),a.beginPath(),a.moveTo(-13,-8),a.lineTo(0,-20),a.lineTo(13,-8),a.stroke(),a.beginPath(),a.arc(0,3,4,0,7),a.fill();break;case"field":a.beginPath(),a.ellipse(0,8,22,9,0,0,7),a.stroke();for(const[h,d]of[[-8,-6],[6,-12],[10,0],[-2,-18]])a.beginPath(),a.arc(h,d,3,0,7),a.fill();break;case"shield":a.beginPath(),a.moveTo(0,-20),a.lineTo(17,-12),a.lineTo(14,8),a.lineTo(0,20),a.lineTo(-14,8),a.lineTo(-17,-12),a.closePath(),a.stroke(),a.lineWidth=3,a.beginPath(),a.moveTo(0,-10),a.lineTo(0,10),a.stroke();break;case"volley":for(const h of[-12,0,12])c(h-6,18,h+4,-16);break;case"infuse":a.beginPath(),a.moveTo(-14,16),a.lineTo(12,-12),a.stroke(),a.lineWidth=3,a.beginPath(),a.moveTo(-18,8),a.lineTo(-6,20),a.stroke(),a.beginPath(),a.moveTo(14,-20),a.quadraticCurveTo(22,-8,14,-2),a.quadraticCurveTo(8,-10,14,-20),a.fill();break;case"buff":c(0,18,0,-18),a.lineWidth=3,a.beginPath(),a.arc(0,2,20,.6,Math.PI-.6),a.stroke();break;case"meteor":o(8,-8,12),a.lineWidth=3;for(const h of[0,8])a.beginPath(),a.moveTo(-2-h,2+h),a.lineTo(-20-h,20+h),a.stroke();break;case"chain":a.beginPath(),a.moveTo(-18,-16),a.lineTo(-4,-4),a.lineTo(-10,2),a.lineTo(6,10),a.lineTo(0,14),a.lineTo(18,20),a.stroke();break;case"vortex":a.beginPath();for(let h=0;h<14;h+=.2){const d=2+h*1.6;a.lineTo(Math.cos(h)*d,Math.sin(h)*d)}a.lineWidth=4,a.stroke();break}t&&(a.shadowBlur=0,a.lineWidth=2,a.strokeStyle="rgba(255,255,255,.7)",a.beginPath(),a.arc(0,0,28,0,7),a.stroke());const l=r.toDataURL();return ko.set(n,l),l}class Hx{constructor(e,t){this.g=e,this.openMenu=t,this.root=Aa("#hud"),this.btn={},this.joyId=-1,this.joyO={x:0,y:0},this.camId=-1,this.camLast={x:0,y:0},this.atkDown=0,this.eDown=0,this.keys=new Set,this.iconFor="",this.interKey="",this.qKey="",this.miniT=0;const n=this.root;Pt(n),this.joyBase=S("div",{class:"joy"}),this.joyKnob=S("div",{class:"knob"}),this.joyBase.append(this.joyKnob),n.append(this.joyBase);const s=(a,o,c)=>{const l=S("div",{class:"btn "+o},S("span",{},c));return n.append(l),this.btn[a]=l,l};s("atk","b-atk","攻撃"),s("e","b-e",""),s("q","b-q",""),s("jump","b-jump","跳"),s("sprint","b-sprint","走"),this.btn.e.append(S("i",{class:"cd"}),S("b",{class:"cdt"})),this.btn.q.append(S("i",{class:"en"})),this.party=S("div",{class:"party"}),n.append(this.party),this.inter=S("div",{class:"inter"}),n.append(this.inter),this.toastBox=S("div",{class:"toasts"}),n.append(this.toastBox),this.mini=S("canvas",{class:"mini",width:128,height:128}),n.append(this.mini),this.mini.addEventListener("pointerdown",a=>{a.stopPropagation(),t("map")}),n.append(S("div",{class:"menu-btn",onpointerdown:a=>{a.stopPropagation(),t("main")}},"≡"));const r=S("div",{class:"tr"});for(const[a,o,c]of[["gacha","祈願","✦"],["quest","任務","!"],["coop","マルチ","⇄"],["chars","キャラ","☺"],["bag","バッグ","▣"]])r.append(S("div",{class:"ic",onpointerdown:l=>{l.stopPropagation(),t(a)}},S("b",{},c),S("small",{},o)));n.append(r),this.quest=S("div",{class:"qtrack",onpointerdown:a=>{a.stopPropagation(),t("quest")}}),n.append(this.quest),this.boss=S("div",{class:"bossbar"}),n.append(this.boss),this.coopTag=S("div",{class:"cooptag"}),n.append(this.coopTag),this.fpsEl=S("div",{class:"fps"}),n.append(this.fpsEl),this.bind(),se.on("party",()=>this.buildParty()),se.on("chars",()=>this.buildParty()),se.on("toast",a=>this.toast(a)),se.on("loot",a=>this.toast(a.join("　"))),this.buildParty()}toast(e){const t=S("div",{class:"toast"},e);for(this.toastBox.append(t),setTimeout(()=>t.classList.add("out"),2600),setTimeout(()=>t.remove(),3200);this.toastBox.children.length>4;)this.toastBox.firstChild.remove()}buildParty(){Pt(this.party),this.g.members.forEach((e,t)=>{const n=Rs(e.def.look,e.def.weapon,2,e.id);n.className="pp";const s=S("div",{class:"pm","data-i":t,onpointerdown:r=>{r.stopPropagation(),this.g.switchTo(t)}},S("div",{class:"pn"},S("span",{class:"num"},String(t+1)),e.def.name),n,S("i",{class:"hp"},S("b")),S("i",{class:"eb",style:`--c:${_t[e.def.el].color}`}));this.party.append(s)})}bind(){const e=this.g,t=e.input;Aa("#app").addEventListener("pointerdown",h=>{h.target.closest("#ui")||e.paused||(h.clientX<innerWidth*.42&&this.joyId<0?(this.joyId=h.pointerId,this.joyO={x:h.clientX,y:h.clientY},this.joyBase.style.cssText=`left:${h.clientX-60}px;top:${h.clientY-60}px;opacity:1`,this.joyKnob.style.transform=""):this.camId<0&&(this.camId=h.pointerId,this.camLast={x:h.clientX,y:h.clientY}))}),addEventListener("pointermove",h=>{if(h.pointerId===this.joyId){let d=h.clientX-this.joyO.x,f=h.clientY-this.joyO.y;const u=Math.hypot(d,f),g=50;u>g&&(d*=g/u,f*=g/u),this.joyKnob.style.transform=`translate(${d}px,${f}px)`,t.mx=d/g,t.my=f/g}else h.pointerId===this.camId&&(t.camDX+=h.clientX-this.camLast.x,t.camDY+=h.clientY-this.camLast.y,this.camLast={x:h.clientX,y:h.clientY})});const s=h=>{h.pointerId===this.joyId&&(this.joyId=-1,t.mx=t.my=0,this.joyBase.style.opacity="0.35",this.joyBase.style.left="60px",this.joyBase.style.top="",this.joyKnob.style.transform=""),h.pointerId===this.camId&&(this.camId=-1)};addEventListener("pointerup",s),addEventListener("pointercancel",s),addEventListener("wheel",h=>{t.zoom+=h.deltaY*.01},{passive:!0});const r=(h,d,f)=>{const u=this.btn[h];u.addEventListener("pointerdown",_=>{_.stopPropagation(),_.preventDefault(),u.classList.add("on"),d()});const g=_=>{_.stopPropagation(),u.classList.remove("on"),f?.()};u.addEventListener("pointerup",g),u.addEventListener("pointerleave",g),u.addEventListener("pointercancel",g)};let a=0,o=0,c=!1,l=!1;r("atk",()=>{c=!1,t.atkHeld=!0,clearTimeout(a),a=setTimeout(()=>{t.atkHeld&&(c=!0,t.atkHold=!0)},360)},()=>{t.atkHeld&&(t.atkHeld=!1,clearTimeout(a),c||(t.atkTap=!0))}),r("e",()=>{l=!1,clearTimeout(o),o=setTimeout(()=>{l=!0,t.eHold=!0},500)},()=>{clearTimeout(o),l||(t.eTap=!0),l=!0}),r("q",()=>{t.qTap=!0}),r("jump",()=>{t.jump=!0}),r("sprint",()=>{t.sprint=!0},()=>{t.sprint=!1}),addEventListener("keydown",h=>{if(h.target.tagName==="INPUT")return;const d=h.key.toLowerCase();this.keys.has(d)||(this.keys.add(d),d===" "&&(t.jump=!0),d==="shift"&&(t.sprint=!0),d==="j"&&(t.atkTap=!0),d==="k"&&(t.atkHold=!0),d==="e"&&(t.eTap=!0),d==="q"&&(t.qTap=!0),["1","2","3","4"].includes(d)&&e.switchTo(Number(d)-1),d==="f"&&e.interactables[0]?.act(),d==="m"&&this.openMenu("map"),d==="escape"&&this.openMenu("main"),this.keyMove())}),addEventListener("keyup",h=>{const d=h.key.toLowerCase();this.keys.delete(d),d==="shift"&&(t.sprint=!1),this.keyMove()})}keyMove(){if(this.joyId>=0)return;const e=this.keys,t=this.g.input;t.mx=(e.has("d")?1:0)-(e.has("a")?1:0),t.my=(e.has("s")?1:0)-(e.has("w")?1:0);const n=Math.hypot(t.mx,t.my);n>1&&(t.mx/=n,t.my/=n)}update(e,t){const n=this.g,s=n.cur,r=n.player,a=this.btn.e,o=s.cdE/(s.def.skill.cd*(1-s.st.cdr));if(a.querySelector(".cd").style.background=s.cdE>0?`conic-gradient(rgba(0,0,0,.6) ${o*360}deg, transparent 0)`:"none",a.querySelector(".cdt").textContent=s.cdE>0?s.cdE.toFixed(1):"",a.style.setProperty("--c",_t[s.def.el].color),this.iconFor!==s.id){this.iconFor=s.id;const m=_t[s.def.el].color;a.firstElementChild.style.backgroundImage=`url(${ef(s.def.skill.kind,m)})`,this.btn.q.firstElementChild.style.backgroundImage=`url(${ef(s.def.burst.kind,m,!0)})`}const c=this.btn.q,l=s.energy/s.maxEnergy;c.style.setProperty("--c",_t[s.def.el].color),c.querySelector(".en").style.background=`conic-gradient(${_t[s.def.el].color} ${l*360}deg, rgba(255,255,255,.12) 0)`,c.classList.toggle("ready",l>=1),this.btn.jump.firstElementChild.textContent=r.mode==="air"?"翔":r.mode==="glide"?"降":r.mode==="climb"?"登":"跳",this.btn.atk.firstElementChild.textContent=r.mode==="air"||r.mode==="glide"?"落下":"攻撃",[...this.party.children].forEach((m,p)=>{const y=n.members[p];y&&(m.classList.toggle("act",p===n.active),m.classList.toggle("dead",y.dead),m.querySelector(".hp b").style.width=y.hp/y.st.hp*100+"%",m.querySelector(".eb").style.background=`conic-gradient(${_t[y.def.el].color} ${y.energy/y.maxEnergy*360}deg, rgba(0,0,0,.3) 0)`)});const h=n.interactables.map(m=>m.id).join("|");if(h!==this.interKey){this.interKey=h,Pt(this.inter);for(const m of n.interactables)this.inter.append(S("div",{class:"ib",onpointerdown:p=>{p.stopPropagation(),m.act()}},S("b",{},"F"),m.label))}const d=ui(),f=Ha(),u=d?f.id+O.quest.step:"none"+O.daily.date;u!==this.qKey&&(this.qKey=u,Pt(this.quest),d?this.quest.append(S("div",{class:"qt"},f.chapter+"「"+f.title+"」"),S("div",{class:"qs"},"◆ "+d.text)):this.quest.append(S("div",{class:"qs"},"冒険を楽しもう！")));const g=Ic(d);if(g){const m=Math.hypot(g.x-r.pos.x,g.z-r.pos.z);this.quest.lastElementChild.dataset.d=Math.round(m)+"m"}const _=n.bossActive;this.boss.style.display=_?"block":"none",_&&(this.boss.innerHTML=`<div class="bn">${_.def.name} <small>Lv.${_.lvl}</small></div><div class="bb"><i style="width:${_.hp/_.maxHp*100}%"></i></div>`),this.coopTag.textContent=n.role==="solo"?"":n.role==="host"?`マルチ中（ホスト）・${n.remotes.size+1}人`:"マルチ中（ゲスト）",this.fpsEl.textContent=O.settings.fps?`${t.toFixed(0)} fps / ${n.gfx.q}`:"",this.miniT-=e,this.miniT<=0&&(this.miniT=.1,this.drawMini())}drawMini(){const e=this.mini.getContext("2d"),t=this.g,n=t.arena?t.arena.ret:t.player.pos,s=md(),r=128,a=90;e.save(),e.clearRect(0,0,r,r),e.beginPath(),e.arc(64,64,62,0,Math.PI*2),e.clip(),e.fillStyle="#1a3a6a",e.fillRect(0,0,r,r),e.translate(64,64),e.rotate(t.camYaw+Math.PI);const o=s.width/(Le*2),c=(n.x+Le)*o-a*o,l=(n.z+Le)*o-a*o;e.imageSmoothingEnabled=!1,e.drawImage(s,c,l,a*2*o,a*2*o,-64,-64,128,128);const h=64/a;for(const f of At){const u=(f.x-n.x)*h,g=(f.z-n.z)*h;u*u+g*g>64*64||(f.type==="waypoint"?(e.fillStyle=O.wps[f.id]?"#5ae8ff":"#6a7a8a",e.fillRect(u-2.5,g-2.5,5,5)):f.type==="boss"?(e.fillStyle="#ff4a8a",e.beginPath(),e.arc(u,g,3.5,0,7),e.fill()):f.type==="domain"||f.type==="statue"||f.type==="tower"?(e.fillStyle=f.type==="statue"?"#8aff8a":"#c08aff",e.fillRect(u-3,g-3,6,6)):f.type==="npc"&&(e.fillStyle="#ffd84a",e.beginPath(),e.arc(u,g,2.5,0,7),e.fill()))}const d=Ic(ui());if(d){let f=(d.x-n.x)*h,u=(d.z-n.z)*h;const g=Math.hypot(f,u);g>56&&(f*=56/g,u*=56/g),e.fillStyle="#ffd84a",e.beginPath(),e.moveTo(f,u-6),e.lineTo(f+5,u),e.lineTo(f,u+6),e.lineTo(f-5,u),e.fill()}for(const f of t.remotes.values())e.fillStyle="#ff9ad8",e.beginPath(),e.arc((f.pos.x-n.x)*h,(f.pos.z-n.z)*h,3.5,0,7),e.fill();e.restore(),e.save(),e.translate(64,64),e.rotate(-(t.player.face-t.camYaw-Math.PI)+Math.PI),e.fillStyle="#ffffff",e.beginPath(),e.moveTo(0,-7),e.lineTo(5,5),e.lineTo(0,2),e.lineTo(-5,5),e.fill(),e.restore(),e.strokeStyle="rgba(255,255,255,.7)",e.lineWidth=2,e.beginPath(),e.arc(64,64,62,0,7),e.stroke()}}const rr=new P;class Vx{constructor(e,t){this.cv=e,this.g=t,this.dpr=Math.min(2,devicePixelRatio||1),this.c=e.getContext("2d"),addEventListener("resize",()=>this.resize()),this.resize()}resize(){this.cv.width=innerWidth*this.dpr,this.cv.height=innerHeight*this.dpr,this.cv.style.width=innerWidth+"px",this.cv.style.height=innerHeight+"px"}proj(e,t,n){return rr.set(e,t,n).project(this.g.gfx.camera),{x:(rr.x*.5+.5)*innerWidth,y:(-rr.y*.5+.5)*innerHeight,ok:rr.z<1&&rr.z>-1}}draw(e){const t=this.c,n=this.g;t.setTransform(this.dpr,0,0,this.dpr,0,0),t.clearRect(0,0,innerWidth,innerHeight),t.textAlign="center",t.lineJoin="round";for(const a of n.enemies.values()){if(!a.alive||a.boss||a.pos.distanceToSquared(n.player.pos)>30*30)continue;const c=a.body==="wisp"?2.4:a.body==="golem"?2.5:1.8,l=this.proj(a.pos.x,a.pos.y+c*a.def.scale,a.pos.z);if(!l.ok)continue;const h=46;t.fillStyle="rgba(0,0,0,.55)",t.fillRect(l.x-h/2-1,l.y-1,h+2,6),t.fillStyle="#e84a4a",t.fillRect(l.x-h/2,l.y,h*(a.hp/a.maxHp),4),t.font="bold 10px sans-serif",t.fillStyle="#fff",t.strokeStyle="rgba(0,0,0,.8)",t.lineWidth=3,t.strokeText("Lv."+a.lvl,l.x-h/2+12,l.y-3),t.fillText("Lv."+a.lvl,l.x-h/2+12,l.y-3),a.aura&&(t.fillStyle=_t[a.aura.el].color,t.beginPath(),t.arc(l.x,l.y-12,6,0,7),t.fill(),t.fillStyle="#1a1424",t.font="bold 8px sans-serif",t.fillText(_t[a.aura.el].name,l.x,l.y-9)),a.frozen>0&&(t.fillStyle="#c8f4ff",t.font="bold 10px sans-serif",t.fillText("凍結",l.x+30,l.y+4))}for(const a of n.remotes.values()){const o=this.proj(a.pos.x,a.pos.y+2.4,a.pos.z);o.ok&&(t.font="bold 12px sans-serif",t.strokeStyle="rgba(0,0,0,.8)",t.lineWidth=3,t.fillStyle="#ff9ad8",t.strokeText(a.name,o.x,o.y),t.fillText(a.name,o.x,o.y))}for(let a=n.nums.length-1;a>=0;a--){const o=n.nums[a];if(o.t+=e,o.t>1){n.nums.splice(a,1);continue}const c=this.proj(o.x,o.y+o.t*1.2,o.z);if(!c.ok)continue;const l=o.t<.12?1+(.12-o.t)*4:1;t.globalAlpha=o.t>.7?(1-o.t)/.3:1,t.font=`bold ${Math.round((o.big?22:16)*l)}px sans-serif`,t.lineWidth=4,t.strokeStyle="rgba(20,10,30,.85)",t.strokeText(o.text,c.x,c.y),t.fillStyle=o.color,t.fillText(o.text,c.x,c.y)}t.globalAlpha=1;const s=n.player;if(s.stamina<s.stamMax-.5){const a=this.proj(s.pos.x,s.pos.y+1.2,s.pos.z),o=s.stamina/s.stamMax;t.lineWidth=5,t.strokeStyle="rgba(0,0,0,.45)",t.beginPath(),t.arc(a.x+34,a.y,13,0,7),t.stroke(),t.strokeStyle=o<.25?"#ff6a4a":"#ffd84a",t.beginPath(),t.arc(a.x+34,a.y,13,-Math.PI/2,-Math.PI/2+o*Math.PI*2),t.stroke()}if(n.shield>0){const a=this.proj(s.pos.x,s.pos.y+2.3,s.pos.z);t.fillStyle="#e8d8a0",t.font="bold 11px sans-serif",t.fillText("シールド "+Math.round(n.shield),a.x,a.y)}const r=Ic(ui());if(r&&!n.arena){const a=this.proj(r.x,r.y+4,r.z),o=Math.hypot(r.x-s.pos.x,r.z-s.pos.z);let c=a.x,l=a.y;const h=40;a.ok||(l=innerHeight-h,c=innerWidth-c),c=Math.max(h,Math.min(innerWidth-h,c)),l=Math.max(h+60,Math.min(innerHeight-h,l)),t.fillStyle="#ffd84a",t.strokeStyle="rgba(0,0,0,.6)",t.lineWidth=3,t.beginPath(),t.moveTo(c,l-10),t.lineTo(c+8,l),t.lineTo(c,l+10),t.lineTo(c-8,l),t.closePath(),t.stroke(),t.fill(),t.font="bold 11px sans-serif",t.lineWidth=3,t.strokeText(Math.round(o)+"m",c,l+24),t.fillStyle="#fff",t.fillText(Math.round(o)+"m",c,l+24)}}}const ea=["raika","kurou","mikoto","kagura"];function gd(){const i=Math.floor((Date.now()/864e5+3)/7),e=ea[i%ea.length],t=Wn.filter(a=>a.rarity===4&&!a.starter),n=[0,1,2].map(a=>t[(i*3+a)%t.length].id),s=[e,ea[(i+1)%ea.length]].map(a=>Ci.find(o=>o.sig===a).id),r=Ci.filter(a=>a.rarity===4).map(a=>a.id);return{featured:e,f4:n,sigs:s,fw4:[r[i%r.length],r[(i+3)%r.length]],endsIn:7-(Date.now()/864e5+3)%7}}const ua={standard:{name:"星降る願い",ticket:"ticket_s",desc:"常設の祈願。★5キャラ・★5武器がランダムで登場。"},event:{name:"期間限定・キャラ祈願",ticket:"ticket_g",desc:"期間限定★5キャラの登場確率がアップ！"},weapon:{name:"神鍛の願い",ticket:"ticket_g",desc:"持ち武器（★5）の登場確率がアップ！"}},ii=()=>Math.random(),On=i=>i[Math.floor(ii()*i.length)];function Gx(i,e){return i==="weapon"?e>=80?1:e>=63?.007+(e-62)*.07:.007:e>=90?1:e>=74?.006+(e-73)*.06:.006}function Wx(i){const e=O.gacha,t=gd();e.p5[i]++,e.p4[i]++;let n=3;ii()<Gx(i,e.p5[i])?n=5:(e.p4[i]>=10||ii()<.051)&&(n=4);let s="weapon",r="";if(n===5)e.p5[i]=0,i==="event"?(e.g.event||ii()<.5?(r=t.featured,e.g.event=!1):(r=On(Wn.filter(o=>o.rarity===5&&!o.limited&&!o.starter)).id,e.g.event=!0),s="char"):i==="weapon"?e.g.weapon||ii()<.75?(r=On(t.sigs),e.g.weapon=!1):(r=On(Ci.filter(o=>o.rarity===5&&o.standard)).id,e.g.weapon=!0):ii()<.5?(s="char",r=On(Wn.filter(o=>o.rarity===5&&!o.limited&&!o.starter)).id):r=On(Ci.filter(o=>o.rarity===5&&o.standard)).id;else if(n===4){e.p4[i]=0;const o=Wn.filter(l=>l.rarity===4).map(l=>l.id),c=Ci.filter(l=>l.rarity===4).map(l=>l.id);i==="event"&&ii()<.5?(s="char",r=On(t.f4)):i==="weapon"&&ii()<.75?r=On(t.fw4):ii()<(i==="weapon"?.3:.5)?(s="char",r=On(o)):r=On(c)}else r=On(Ci.filter(o=>o.rarity===3)).id;const a={kind:s,id:r,rarity:n,dust:0};if(s==="char"){const o=Ia(r);a.isNew=o.isNew,a.cons=o.cons,o.isNew||(a.dust=n===5?o.cons<0?25:10:o.cons<0?5:2)}else _f(r),a.dust=n===5?10:n===4?2:0;return a.dust&&lt("dust",a.dust),e.hist.unshift({t:Date.now(),b:i,id:r,r:n}),e.hist.length>200&&(e.hist.length=200),et(),a}function $x(i,e){const t=ua[i].ticket,n=ct(t),s=Math.max(0,e-n),r=s*160;if(ct("gem")<r)return`${i==="standard"?"銀":"金"}の願い札が足りません（星晶 ${r} 個で交換できます）`;s&&Tn("gem",r),Tn(t,e-s);const a=[];for(let o=0;o<e;o++)a.push(Wx(i));return se.emit("gacha"),a}const Do=(i,e)=>hu.has(i)?wt(e):Cs(e),Gi=i=>es(i)?.name||i;class Xx{constructor(e){this.g=e,this.ui=Aa("#ui"),this.stack=[],this.cur=null,this.selChar="",this.tab="info",this.bagTab="weapon",this.gTab="event",this.onChange=null,se.on("dialog",(t,n)=>this.dialog(t,n)),se.on("npc",t=>this.npc(t)),se.on("statue",t=>this.statue(t)),se.on("domain",t=>this.domain(t)),se.on("tower",()=>this.tower()),se.on("arenaWin",t=>this.arenaWin(t)),se.on("questDone",(t,n)=>this.banner(`${t.chapter}「${t.title}」完了！`,n.char?`${rt(n.char).name} が仲間になった！`:"報酬を受け取った")),se.on("chars",()=>this.onChange?.()),se.on("items",()=>this.onChange?.())}get isOpen(){return!!this.cur}close(){this.cur?.remove(),this.cur=null,this.onChange=null,this.g.paused=!1,this.g.buildParty(),_r(!0)}panel(e,t,n=""){this.cur?.remove(),this.onChange=null;const s=S("div",{class:"panel "+n},S("div",{class:"ph"},S("div",{class:"pt"},e),S("div",{class:"px",onclick:()=>this.close()},"✕")),t);return this.ui.append(s),this.cur=s,this.g.paused=this.g.role==="solo",s}open(e,t){if(this.g.dialogOpen)return;const n={main:()=>this.main(),chars:()=>this.chars(t),party:()=>this.partyMenu(),gacha:()=>this.gacha(),bag:()=>this.bag(),quest:()=>this.quests(),map:()=>this.map(),coop:()=>this.coop(),settings:()=>this.settings(),shop:()=>this.shop()}[e];n?.()}main(){const e=S("div",{class:"grid"}),t=(s,r,a)=>e.append(S("div",{class:"gi",onclick:()=>this.open(s)},S("b",{},r),S("span",{},a)));t("chars","☺","キャラクター"),t("party","◎","編成"),t("gacha","✦","祈願"),t("bag","▣","バッグ"),t("quest","!","任務・依頼"),t("map","◈","マップ"),t("coop","⇄","マルチプレイ"),t("settings","⚙","設定");const n=Dc(O.ar);this.panel("メニュー",S("div",{},S("div",{class:"arbox"},S("div",{},`冒険ランク ${O.ar}　世界ランク ${wa()}`),S("div",{class:"bar"},S("i",{style:`width:${O.arExp/n*100}%`})),S("small",{},`${wt(O.arExp)} / ${wt(n)}　・　プレイ時間 ${Math.floor(O.stats.play/3600)}時間${Math.floor(O.stats.play%3600/60)}分`)),e))}chars(e){const t=Ul();e&&(this.selChar=e),(!this.selChar||!O.chars[this.selChar])&&(this.selChar=this.g.cur.id);const n=S("div",{class:"chars"});this.panel("キャラクター",n,"wide");const s=()=>{Pt(n);const r=S("div",{class:"clist"});for(const f of t){const u=Rs(f.look,f.weapon,2,f.id);r.append(S("div",{class:"ci"+(f.id===this.selChar?" on":""),style:`--r:${Mn[f.rarity]}`,onclick:()=>{this.selChar=f.id,s()}},u,S("span",{},f.name),S("i",{style:`background:${_t[f.el].color}`})))}const a=rt(this.selChar),o=O.chars[a.id],c=S("div",{class:"tabs"});for(const[f,u]of[["info","属性"],["level","レベル"],["weapon","武器"],["relic","遺紋"],["talent","天賦"],["cons","覚醒"]])c.append(S("div",{class:"tab"+(this.tab===f?" on":""),onclick:()=>{this.tab=f,s()}},u));const l=qh(a.look,a.weapon,4,a.id);l.className="fullart";const h=S("div",{class:"chead"},l,S("div",{},S("div",{class:"cname"},a.name,S("small",{style:`color:${Mn[a.rarity]}`}," "+ws(a.rarity))),S("div",{class:"ctitle"},a.title),S("div",{class:"ctags"},S("span",{class:"eltag",style:`background:${_t[a.el].color}`},_t[a.el].name),S("span",{},Dl[a.weapon]),S("span",{},`Lv.${o.lvl}/${Ai[o.asc]}`),o.cons?S("span",{},`覚醒${o.cons}`):null))),d=S("div",{class:"cmain"},h,c,this.charTab(a.id,s));n.append(r,d)};this.onChange=s,s()}charTab(e,t){const n=rt(e),s=O.chars[e],r=ad(e),a=S("div",{class:"ctab"}),o=(l,h)=>S("div",{class:"row"},S("span",{},l),S("b",{},h)),c=l=>S("div",{class:"cost"},...Object.entries(l).map(([h,d])=>S("span",{class:ct(h)>=d?"":"lack"},`${Gi(h)} ${wt(ct(h))}/${wt(d)}`)));if(this.tab==="info")a.append(o("HP上限",wt(r.hp)),o("攻撃力",wt(r.atk)),o("防御力",wt(r.def)),o("元素熟知",wt(r.em)),o("会心率",Cs(r.cr)),o("会心ダメージ",Cs(r.cd)),o("元素チャージ効率",Cs(r.er)),o(_t[n.el].name+"元素ダメージ",Cs(r.dmg[n.el])),r.heal?o("回復効果",Cs(r.heal)):null),a.append(S("p",{class:"bio"},n.bio));else if(this.tab==="level"){const l=Ai[s.asc];if(a.append(S("div",{class:"big"},`Lv. ${s.lvl} / ${l}`)),s.lvl<l){a.append(S("div",{class:"bar"},S("i",{style:`width:${s.exp/Ea(s.lvl)*100}%`})),S("small",{},`経験値 ${wt(s.exp)} / ${wt(Ea(s.lvl))}`));const h=S("div",{class:"btns"});for(const d of["exp1","exp2","exp3"]){const f=ct(d);h.append(S("button",{disabled:!f,onclick:()=>{Jh(s,d,1),t()}},`${Gi(d)} (${f})`)),h.append(S("button",{disabled:!f,class:"sub",onclick:()=>{Jh(s,d,Math.min(10,f)),t()}},"×10"))}a.append(h,S("small",{},"※ 経験値1000ごとにコイン200を使います"))}else if(s.asc<6){const h=hd(s);a.append(S("div",{},"突破に必要な素材"),c(h),S("button",{class:"primary",disabled:!ha(h),onclick:()=>{Tx(s)&&se.emit("toast","突破成功！"),t()}},"突破する"))}else a.append(S("div",{},"最大レベルに到達！"))}else if(this.tab==="weapon"){const l=vu(s);Bt(l.id),a.append(this.weaponCard(l),S("div",{class:"btns"},S("button",{onclick:()=>this.pickWeapon(e,t)},"武器を替える"),S("button",{onclick:()=>this.weaponUpgrade(l.uid,t)},"強化する")))}else if(this.tab==="relic"){const l=S("div",{class:"rslots"});for(const d of ka){const f=ya(s.relics[d]);l.append(S("div",{class:"rslot",onclick:()=>this.pickRelic(e,d,t)},S("div",{class:"rs"},Rr[d]),f?this.relicMini(f):S("small",{},"空き")))}a.append(l);const h=ux(s);for(const[d,f]of Object.entries(h))if(f>=2){const u=Il(d);a.append(S("div",{class:"setb"},`${u.name}　2セット：${u.d2}`,f>=4?S("div",{},`4セット：${u.d4}`):null))}}else if(this.tab==="talent"){const l=["通常攻撃",n.skill.name+"（E）",n.burst.name+"（Q）"],h=["連続攻撃。長押しで重撃、空中で押すと落下攻撃。",n.skill.desc+` クールタイム${n.skill.cd}秒。`,n.burst.desc+` 必要エネルギー${n.burst.cost}。`];[0,1,2].forEach(d=>{const f=s.tal[d],u=f<10?fd(s,d):null,g=dd(f+1);a.append(S("div",{class:"tal"},S("div",{class:"tn"},`${l[d]}　Lv.${f}${d===1&&s.cons>=3||d===2&&s.cons>=5?"+3":""}`),S("small",{},h[d]),u?S("div",{},s.asc<g?S("small",{class:"lack"},`突破${g}段階目が必要`):c(u),S("button",{disabled:s.asc<g||!ha(u),onclick:()=>{wx(s,d),t()}},"レベルアップ")):S("small",{},"最大レベル")))})}else this.tab==="cons"&&(["元素スキルのダメージ+20%","会心率+10%","元素スキルのレベル+3","攻撃力+20%","元素爆発のレベル+3","与えるダメージ+30%"].forEach((h,d)=>a.append(S("div",{class:"cons"+(s.cons>d?" on":"")},S("b",{},`第${d+1}重`),h))),a.append(S("small",{},"同じキャラクターを祈願で引くと覚醒が進みます。")));return a}weaponCard(e){const t=Bt(e.id),n=Yh(t.type,Mn[t.rarity],2);return n.className="wic",S("div",{class:"wcard",style:`--r:${Mn[t.rarity]}`},n,S("div",{class:"wn"},t.name,S("small",{}," "+ws(t.rarity))),S("div",{},`${Dl[t.type]}　Lv.${e.lvl}/${Ai[e.asc]}　精錬${e.ref}`),S("div",{},`基礎攻撃力 ${wt(nd(t,e.lvl,e.asc))}`),t.sub?S("div",{},`${Wa[t.sub.k]} ${Do(t.sub.k,id(t,e.lvl))}`):null,t.pName?S("small",{},`【${t.pName}】${t.pDesc}`):null,t.sig?S("small",{class:"sig"},`${rt(t.sig).name}の持ち武器`):null)}pickWeapon(e,t){const n=rt(e),s=S("div",{class:"wlist"}),r=O.weapons.filter(a=>Bt(a.id).type===n.weapon).sort((a,o)=>Bt(o.id).rarity-Bt(a.id).rarity||o.lvl-a.lvl);for(const a of r){const o=$a(a.uid);s.append(S("div",{class:"wli",onclick:()=>{const c=O.chars[e];o&&o.id!==e&&(o.weapon=c.weapon),c.weapon=a.uid,et(),se.emit("chars"),this.chars(e)}},this.weaponCard(a),o?S("small",{},`装備中：${rt(o.id).name}`):null))}this.panel("武器を選ぶ",s)}weaponUpgrade(e,t){const n=S("div",{});this.panel("武器強化",n);const s=()=>{Pt(n);const r=O.weapons.find(l=>l.uid===e),a=Bt(r.id),o=Ai[r.asc];if(n.append(this.weaponCard(r)),r.lvl<o){n.append(S("div",{class:"bar"},S("i",{style:`width:${r.exp/kc(r.lvl,a.rarity)*100}%`})));const l=S("div",{class:"btns"});for(const h of["ore1","ore2","ore3"]){const d=ct(h);l.append(S("button",{disabled:!d,onclick:()=>{Zh(r,h,1),s()}},`${Gi(h)} (${d})`),S("button",{class:"sub",disabled:!d,onclick:()=>{Zh(r,h,Math.min(10,d)),s()}},"×10"))}n.append(l)}else if(r.asc<td(a)){const l=ud(r);n.append(S("div",{class:"cost"},...Object.entries(l).map(([h,d])=>S("span",{class:ct(h)>=d?"":"lack"},`${Gi(h)} ${wt(ct(h))}/${wt(d)}`))),S("button",{class:"primary",disabled:!ha(l),onclick:()=>{Ax(r),s()}},"突破する"))}const c=O.weapons.filter(l=>l.id===r.id&&l.uid!==r.uid&&!$a(l.uid));r.ref<5&&a.rarity>=3&&n.append(S("div",{class:"btns"},S("button",{disabled:!c.length,onclick:()=>{Rx(r,c[0]),s()}},`精錬する（同じ武器 ${c.length}本）`))),n.append(S("button",{onclick:()=>this.chars()},"もどる"))};this.onChange=s,s()}relicMini(e){const t=Il(e.set);return S("div",{class:"rmini",style:`--r:${Mn[e.rarity]}`},S("div",{class:"rn"},`${t.name}・${Rr[e.slot]}`,S("small",{},` ${ws(e.rarity)} +${e.lvl}`)),S("div",{class:"rm"},`${Wa[e.main]} ${Do(e.main,sd(e))}`),...e.subs.map(n=>S("small",{},`・${Wa[n.k]} +${Do(n.k,n.v)}`)))}pickRelic(e,t,n){const s=S("div",{class:"wlist"}),r=O.chars[e],a=ya(r.relics[t]);a&&s.append(S("div",{class:"btns"},S("button",{onclick:()=>{delete r.relics[t],et(),se.emit("chars"),this.chars(e)}},"外す"),S("button",{onclick:()=>this.relicUpgrade(a.uid,e)},"強化する")));const o=O.relics.filter(c=>c.slot===t).sort((c,l)=>l.rarity-c.rarity||l.lvl-c.lvl);for(const c of o){const l=Xa(c.uid);s.append(S("div",{class:"wli",onclick:()=>{if(l){const h=Object.keys(l.relics).find(d=>l.relics[d]===c.uid);a?l.relics[h]=a.uid:delete l.relics[h]}r.relics[t]=c.uid,et(),se.emit("chars"),this.chars(e)}},this.relicMini(c),l?S("small",{},`装備中：${rt(l.id).name}`):null))}o.length||s.append(S("p",{},"この部位の遺紋を持っていません。秘境「紅砂の遺跡」やボス、宝箱で手に入ります。")),this.panel(`${Rr[t]}を選ぶ`,s)}relicUpgrade(e,t){const n=S("div",{});this.panel("遺紋強化",n);const s=new Set,r=()=>{Pt(n);const a=O.relics.find(h=>h.uid===e);if(n.append(this.relicMini(a)),a.lvl>=pl(a.rarity)){n.append(S("p",{},"最大レベルです")),n.append(S("button",{onclick:()=>t?this.chars(t):this.bag()},"もどる"));return}n.append(S("div",{class:"bar"},S("i",{style:`width:${a.exp/Ta(a.lvl)*100}%`})));const o=O.relics.filter(h=>h.uid!==a.uid&&!Xa(h.uid)&&!h.lock).sort((h,d)=>h.rarity-d.rarity),c=o.filter(h=>s.has(h.uid)).reduce((h,d)=>h+pd(d),0);n.append(S("div",{class:"btns"},S("button",{onclick:()=>{o.filter(h=>h.rarity<=4).slice(0,10).forEach(h=>s.add(h.uid)),r()}},"★4以下を自動選択"),S("button",{class:"primary",disabled:!s.size||ct("coin")<c,onclick:()=>{kx(a,o.filter(h=>s.has(h.uid))),s.clear(),r()}},`強化（経験値 ${wt(c)} / コイン ${wt(c)}）`)));const l=S("div",{class:"fodder"});for(const h of o.slice(0,80))l.append(S("div",{class:"fi"+(s.has(h.uid)?" on":""),style:`--r:${Mn[h.rarity]}`,onclick:()=>{s.has(h.uid)?s.delete(h.uid):s.add(h.uid),r()}},`${Rr[h.slot]}`,S("small",{},`${ws(h.rarity)} +${h.lvl}`)));n.append(l,S("button",{onclick:()=>t?this.chars(t):this.bag()},"もどる"))};r()}partyMenu(){const e=S("div",{});this.panel("編成",e,"wide");const t=()=>{Pt(e);const n=S("div",{class:"pslots"});for(let a=0;a<4;a++){const o=O.party[a],c=o?rt(o):null;n.append(S("div",{class:"ps"+(c?"":" empty")},c?Rs(c.look,c.weapon,3,c.id):S("span",{},"＋"),S("div",{},c?c.name:"空き"),c&&O.party.length>1?S("button",{class:"sub",onclick:()=>{O.party.splice(a,1),et(),t()}},"外す"):null))}e.append(n);const s=rd(O.party);e.append(S("div",{class:"reso"},s.length?s.map(a=>`【${zh[a].name}】${zh[a].desc}`).join("　"):"元素共鳴：同じ元素のキャラを2人入れると効果が発動")),this.g.role!=="solo"&&e.append(S("small",{},"マルチ中は先頭2人で戦います。"));const r=S("div",{class:"plist"});for(const a of Ul()){const o=O.party.includes(a.id);r.append(S("div",{class:"ci"+(o?" on":""),style:`--r:${Mn[a.rarity]}`,onclick:()=>{o?O.party.length>1&&O.party.splice(O.party.indexOf(a.id),1):O.party.length<4?O.party.push(a.id):O.party[3]=a.id,et(),t()}},Rs(a.look,a.weapon,2,a.id),S("span",{},a.name),S("i",{style:`background:${_t[a.el].color}`})))}e.append(r)};t()}gacha(){const e=S("div",{class:"gacha"});this.panel("祈願",e,"wide");const t=()=>{Pt(e);const n=gd(),s=S("div",{class:"tabs"});for(const h of["event","weapon","standard"])s.append(S("div",{class:"tab"+(this.gTab===h?" on":""),onclick:()=>{this.gTab=h,t()}},ua[h].name));const r=ua[this.gTab],a=r.ticket;let o;if(this.gTab==="event"){const h=rt(n.featured),d=qh(h.look,h.weapon,5,h.id);o=S("div",{class:"feat",style:`--c:${_t[h.el].color}`},d,S("div",{},S("div",{class:"fname"},h.name),S("div",{},h.title),S("div",{class:"eltag",style:`background:${_t[h.el].color}`},_t[h.el].name),S("small",{},"★4 確率アップ："+n.f4.map(f=>rt(f).name).join("・")),S("small",{},`残り ${Math.ceil(n.endsIn)} 日`)))}else this.gTab==="weapon"?o=S("div",{class:"feat",style:"--c:#ffd84a"},S("div",{},S("div",{class:"fname"},n.sigs.map(h=>Bt(h).name).join(" / ")),S("small",{},"持ち武器の登場確率アップ！"),S("small",{},"★4 確率アップ："+n.fw4.map(h=>Bt(h).name).join("・")))):o=S("div",{class:"feat",style:"--c:#9ab8ff"},S("div",{},S("div",{class:"fname"},"星降る願い"),S("small",{},"★5："+Wn.filter(h=>h.rarity===5&&!h.limited&&!h.starter).map(h=>h.name).join("・")+"・常設★5武器")));const c=O.gacha.p5[this.gTab],l=this.gTab==="weapon"?80:90;e.append(s,o,S("p",{class:"gdesc"},r.desc,S("br"),`★5まであと最大 ${l-c} 回${this.gTab!=="standard"&&O.gacha.g[this.gTab]?"（次の★5は確定でピックアップ！）":""}`),S("div",{class:"gbtns"},S("div",{class:"have"},`${Gi(a)} ${ct(a)}　星晶 ${wt(ct("gem"))}　星屑 ${ct("dust")}`),S("button",{onclick:()=>this.doWish(1)},"1回祈願"),S("button",{class:"primary",onclick:()=>this.doWish(10)},"10回祈願")),S("button",{class:"sub",onclick:()=>this.gHist()},"履歴"))};this.onChange=t,t()}doWish(e){const t=$x(this.gTab,e);if(typeof t=="string"){se.emit("toast",t);return}this.wishAnim(t)}wishAnim(e){const t=Math.max(...e.map(g=>g.rarity)),n=t>=5?"gold":t===4?"purple":"blue",s=S("div",{class:"wishov"}),r=S("canvas",{width:176,height:184,class:"wishfx"});s.append(r),this.ui.append(s);const a=ll["wish-star"],o=r.getContext("2d"),c=hl(n);let l=0,h=performance.now();const d=document.createElement("canvas");d.width=176,d.height=184;const f=d.getContext("2d",{willReadFrequently:!0}),u=g=>{l+=(g-h)/1e3,h=g;const _=Math.floor(l*a.fps);if(_>=a.frames||!a.img){s.remove(),this.wishResults(e);return}f.clearRect(0,0,176,184),f.drawImage(a.img,_%a.columns*176,Math.floor(_/a.columns)*184,176,184,0,0,176,184);const m=f.getImageData(0,0,176,184);for(let p=0;p<m.data.length;p+=4){if(!m.data[p+3])continue;const y=(m.data[p]*.299+m.data[p+1]*.587+m.data[p+2]*.114)/255,x=Math.min(7,Math.floor(y*7.99));m.data[p]=c[x].x*255,m.data[p+1]=c[x].y*255,m.data[p+2]=c[x].z*255}o.clearRect(0,0,176,184),o.putImageData(m,0,0),requestAnimationFrame(u)};s.onclick=()=>{l=99},requestAnimationFrame(u)}wishResults(e){const t=S("div",{class:"wres"});for(const n of e.sort((s,r)=>r.rarity-s.rarity)){const s=n.kind==="char",r=s?rt(n.id).name:Bt(n.id).name,a=s?Rs(rt(n.id).look,rt(n.id).weapon,3,n.id):Yh(Bt(n.id).type,Mn[n.rarity],3);t.append(S("div",{class:"wr r"+n.rarity,style:`--r:${Mn[n.rarity]}`},a,S("div",{},r),S("small",{},ws(n.rarity)),n.isNew?S("b",{class:"new"},"NEW"):null,n.cons&&n.cons>0?S("small",{},`覚醒${n.cons}`):null,n.dust?S("small",{},`星屑+${n.dust}`):null))}this.panel("祈願結果",S("div",{},t,S("button",{class:"primary",onclick:()=>this.gacha()},"OK")),"wide")}gHist(){const e=S("div",{class:"hist"});for(const t of O.gacha.hist.slice(0,80)){const n=rt(t.id)?.name||Bt(t.id)?.name;e.append(S("div",{style:`color:${Mn[t.r]}`},`${new Date(t.t).toLocaleString("ja-JP")}　${ua[t.b].name}　${n} ${ws(t.r)}`))}this.panel("祈願履歴",S("div",{},e,S("button",{onclick:()=>this.gacha()},"もどる")))}bag(){const e=S("div",{});this.panel("バッグ",e,"wide");const t=()=>{Pt(e);const n=S("div",{class:"tabs"});for(const[r,a]of[["weapon","武器"],["relic","遺紋"],["mat","素材"],["food","料理"]])n.append(S("div",{class:"tab"+(this.bagTab===r?" on":""),onclick:()=>{this.bagTab=r,t()}},a));e.append(n);const s=S("div",{class:"items"});if(this.bagTab==="weapon")for(const r of[...O.weapons].sort((a,o)=>Bt(o.id).rarity-Bt(a.id).rarity)){const a=$a(r.uid);s.append(S("div",{class:"wli",onclick:()=>this.weaponUpgrade(r.uid,t)},this.weaponCard(r),a?S("small",{},`装備中：${rt(a.id).name}`):null))}if(this.bagTab==="relic"){e.append(S("small",{},`${O.relics.length} 個`));for(const r of[...O.relics].sort((a,o)=>o.rarity-a.rarity||o.lvl-a.lvl).slice(0,150)){const a=Xa(r.uid);s.append(S("div",{class:"wli",onclick:()=>this.relicUpgrade(r.uid)},this.relicMini(r),a?S("small",{},`装備中：${rt(a.id).name}`):null))}}if(this.bagTab==="mat")for(const r of Pc)r.kind==="food"||!ct(r.id)||s.append(S("div",{class:"it",style:`--r:${Mn[r.rarity]}`,title:r.desc},S("b",{style:`color:${r.color}`},r.icon),S("span",{},r.name),S("small",{},wt(ct(r.id)))));if(this.bagTab==="food")for(const r of Pc.filter(a=>a.kind==="food"))s.append(S("div",{class:"it",style:`--r:${Mn[r.rarity]}`},S("b",{style:`color:${r.color}`},r.icon),S("span",{},r.name),S("small",{},`${ct(r.id)}個`),S("small",{},r.desc),S("button",{disabled:!ct(r.id),onclick:()=>{this.eat(r.id),t()}},"使う")));e.append(s)};this.onChange=t,t()}eat(e){const t=es(e),n=this.g;if(e==="food3"){const r=n.members.find(a=>a.dead);if(!r){se.emit("toast","倒れているキャラクターがいません");return}Tn(e),r.dead=!1,r.hp=r.st.hp*t.v,se.emit("toast",`${r.def.name}が復活した`);return}const s=n.cur;s.dead||(Tn(e),s.hp=Math.min(s.st.hp,s.hp+s.st.hp*t.v),se.emit("toast",`${s.def.name}のHPが回復した`))}quests(){_l();const e=S("div",{});this.panel("任務・依頼",e,"wide");const t=()=>{Pt(e);const n=Ha();ui(),e.append(S("h3",{},"メインストーリー")),n?e.append(S("div",{class:"qcard"},S("b",{},`${n.chapter}「${n.title}」`),...n.steps.map((s,r)=>S("div",{class:r<O.quest.step?"done":r===O.quest.step?"now":"todo"},(r<O.quest.step?"✓ ":r===O.quest.step?"◆ ":"・ ")+s.text)))):e.append(S("p",{},"メインストーリーはすべてクリアしました！")),e.append(S("small",{},`進行度 ${Math.min(Ca.length,O.quest.main)} / ${Ca.length} 章`)),e.append(S("h3",{},"毎日の依頼")),O.daily.tasks.forEach((s,r)=>e.append(S("div",{class:"daily"},S("span",{},s.text),S("small",{},`${s.n}/${s.goal}`),S("button",{disabled:s.n<s.goal||O.daily.claimed[r],onclick:()=>{Ox(r),t()}},O.daily.claimed[r]?"受取済":"受け取る")))),e.append(S("button",{class:"primary",disabled:O.daily.bonus||!O.daily.claimed.every(s=>s),onclick:()=>{zx(),t()}},O.daily.bonus?"ボーナス受取済":"全部達成ボーナス（星晶100）")),e.append(S("small",{},"依頼は毎日0時に入れ替わります。何回でも遊べるよ！"))};this.onChange=t,t()}map(){const e=S("div",{class:"mapwrap"}),t=S("canvas",{class:"mapcv"}),n=S("div",{class:"mapinfo"});e.append(t,n),this.panel("マップ",e,"full");const s=md();let r=1,a=0,o=0;const c=this.g.arena?this.g.arena.ret:this.g.player.pos,l=()=>{const m=e.clientWidth,p=e.clientHeight-10;t.width=m,t.height=p,r=Math.min(m,p)/(Le*2)*1.6,a=m/2-(c.x+Le)*r,o=p/2-(c.z+Le)*r,d()},h=(m,p)=>[(m+Le)*r+a,(p+Le)*r+o],d=()=>{const m=t.getContext("2d");m.fillStyle="#1a3a6a",m.fillRect(0,0,t.width,t.height),m.imageSmoothingEnabled=!1,m.drawImage(s,a,o,Le*2*r,Le*2*r),m.font="bold 12px sans-serif",m.textAlign="center";for(const v of At){const[D,T]=h(v.x,v.z);v.type==="waypoint"&&(m.fillStyle=O.wps[v.id]||v.id==="wp_beach"?"#5ae8ff":"#7a8a9a",m.beginPath(),m.moveTo(D,T-7),m.lineTo(D+5,T),m.lineTo(D,T+7),m.lineTo(D-5,T),m.fill(),m.strokeStyle="#123",m.stroke()),v.type==="statue"&&(m.fillStyle="#8aff8a",m.fillRect(D-5,T-5,10,10)),(v.type==="domain"||v.type==="tower")&&(m.fillStyle="#c08aff",m.fillRect(D-5,T-5,10,10),m.fillStyle="#fff",m.fillText(v.name||"",D,T-9)),v.type==="boss"&&(m.fillStyle="#ff4a8a",m.beginPath(),m.arc(D,T,6,0,7),m.fill()),v.type==="npc"&&v.name&&(m.fillStyle="#ffd84a",m.beginPath(),m.arc(D,T,3,0,7),m.fill())}for(const v of[{n:"ルコの町",x:20,z:236},{n:"アカツチ村",x:262,z:-10},{n:"シモツキ村",x:-196,z:-150},{n:Zr.plains,x:-20,z:100},{n:Zr.canyon,x:300,z:-60},{n:Zr.peaks,x:-260,z:-230},{n:Zr.spire,x:190,z:-250}]){const[D,T]=h(v.x,v.z);m.fillStyle="#fff",m.strokeStyle="rgba(0,0,0,.7)",m.lineWidth=3,m.strokeText(v.n,D,T+22),m.fillText(v.n,D,T+22)}const p=ui();if(p){const v=Qt.get(p.target.startsWith("@")?"":p.target);if(v){const[D,T]=h(v.x,v.z);m.fillStyle="#ffd84a",m.beginPath(),m.arc(D,T,9,0,7),m.fill(),m.fillStyle="#000",m.fillText("!",D,T+4)}}const[y,x]=h(c.x,c.z);m.fillStyle="#fff",m.beginPath(),m.arc(y,x,6,0,7),m.fill(),m.fillStyle="#ff5a8a",m.beginPath(),m.arc(y,x,3.5,0,7),m.fill();for(const v of this.g.remotes.values()){const[D,T]=h(v.pos.x,v.pos.z);m.fillStyle="#ff9ad8",m.beginPath(),m.arc(D,T,5,0,7),m.fill()}};let f=null,u=0;const g=new Map;let _=0;t.onpointerdown=m=>{g.set(m.pointerId,{x:m.clientX,y:m.clientY}),f={x:m.clientX,y:m.clientY},u=0,t.setPointerCapture(m.pointerId)},t.onpointermove=m=>{if(g.has(m.pointerId)){if(g.set(m.pointerId,{x:m.clientX,y:m.clientY}),g.size===2){const[p,y]=[...g.values()],x=Math.hypot(p.x-y.x,p.y-y.y);if(_){const v=x/_,D=(p.x+y.x)/2-t.getBoundingClientRect().left,T=(p.y+y.y)/2-t.getBoundingClientRect().top;a=D-(D-a)*v,o=T-(T-o)*v,r*=v}_=x,u=99,d();return}f&&(a+=m.clientX-f.x,o+=m.clientY-f.y,u+=Math.abs(m.clientX-f.x)+Math.abs(m.clientY-f.y),f={x:m.clientX,y:m.clientY},d())}},t.onpointerup=m=>{if(g.delete(m.pointerId),g.size<2&&(_=0),f=null,u>8)return;const p=t.getBoundingClientRect(),y=m.clientX-p.left,x=m.clientY-p.top;let v=null,D=22*22;for(const w of At){if(!["waypoint","domain","statue","boss","tower"].includes(w.type))continue;const[M,R]=h(w.x,w.z),z=(M-y)**2+(R-x)**2;z<D&&(D=z,v=w)}if(Pt(n),!v)return;const T=O.wps[v.id]||v.id==="wp_beach",A=v.type==="boss"?Sa(v.data.enemy).name:v.name||"";n.append(S("b",{},A),S("small",{},v.type==="waypoint"?T?"ワープポイント":"未解放（近づくと解放）":v.type==="boss"?"ボス":v.type==="domain"?"秘境":v.type==="tower"?"星の塔":"星の像"));const k=v.type==="waypoint"?v:At.find(w=>w.id==="wp_"+v.id);k&&(O.wps[k.id]||k.id==="wp_beach")&&n.append(S("button",{class:"primary",onclick:()=>{this.close(),!this.g.arena&&this.g.teleport(k.x+2,k.z+2)}},"ワープする"))},t.onwheel=m=>{const p=m.deltaY<0?1.15:.8695652173913044,y=t.getBoundingClientRect(),x=m.clientX-y.left,v=m.clientY-y.top;a=x-(x-a)*p,o=v-(v-o)*p,r*=p,d()},requestAnimationFrame(l)}settings(){const e=O.settings,t=S("div",{class:"settings"}),n=(s,r,a,o)=>S("div",{class:"row"},S("span",{},s),S("div",{class:"seg"},...r.map(([c,l])=>S("button",{class:a===c?"on":"",onclick:()=>{o(c),et(),this.settings()}},l))));t.append(n("画質",[["auto","自動"],["low","低"],["mid","中"],["high","高"]],e.quality,s=>{e.quality=s,this.g.gfx.setQuality(s),this.g.applyQuality()}),n("ぼかし演出（HD-2D）",[["on","オン"],["off","オフ"]],e.tilt?"on":"off",s=>{e.tilt=s==="on",this.g.gfx.tilt=e.tilt,this.g.gfx.resize()}),n("FPS表示",[["on","オン"],["off","オフ"]],e.fps?"on":"off",s=>e.fps=s==="on"),n("効果音",[["on","オン"],["off","オフ"]],e.sfx?"on":"off",s=>e.sfx=s==="on"),S("div",{class:"row"},S("span",{},"名前（マルチで表示）"),S("input",{value:e.name,maxlength:10,onchange:s=>{e.name=s.target.value||"旅人",et()}})),S("h3",{},"データ"),S("div",{class:"btns"},S("button",{onclick:()=>{_r(!0);const s=mu();navigator.clipboard?.writeText(s).then(()=>se.emit("toast","引き継ぎコードをコピーしました"),()=>prompt("引き継ぎコード",s))}},"引き継ぎコードをコピー"),S("button",{onclick:()=>{const s=prompt("引き継ぎコードを貼り付けてください");if(s)try{gu(s),location.reload()}catch{alert("コードが正しくありません")}}},"コードから復元")),S("button",{class:"danger",onclick:()=>{confirm("本当にデータを消して最初からやり直しますか？")&&(_u(),location.reload())}},"データを消して最初から"),S("small",{},"NINJIN v0.1　セーブはこの端末のブラウザに自動保存されます。")),this.panel("設定",t)}coop(){const e=this.g,t=S("div",{class:"coop"});this.panel("マルチプレイ（2人）",t);const n=e.net;if(e.role!=="solo"){t.append(S("p",{},e.role==="host"?"ホストとして遊んでいます。部屋コード：":"ゲストとして参加中です。"),e.role==="host"?S("div",{class:"code"},n.code):null,S("p",{},`つながっている人：${[...e.remotes.values()].map(s=>s.name).join("、")||"まだいません"}`),S("button",{class:"danger",onclick:()=>{n.leave(),this.close()}},"マルチを終了する"));return}t.append(S("p",{},"友達と一緒に冒険できます。1人2キャラずつ操作します。"),S("button",{class:"primary",onclick:()=>{Pt(t),t.append(S("p",{},"部屋を作っています…")),window.NINJIN_NET.host().then(s=>{Pt(t),t.append(S("p",{},"この部屋コードを友達に送ってね："),S("div",{class:"code"},s),S("div",{class:"btns"},S("button",{onclick:()=>{navigator.clipboard?.writeText(s),se.emit("toast","コピーしました")}},"コピー"),navigator.share?S("button",{onclick:()=>navigator.share({text:`NINJINで一緒に遊ぼう！部屋コード：${s}`,url:location.href})},"送る（LINEなど）"):null),S("p",{},"友達が参加すると自動で始まります。このまま遊んでいてOK！"))}).catch(s=>{Pt(t),t.append(S("p",{},"部屋を作れませんでした："+s),S("button",{onclick:()=>this.coop()},"もどる"))})}},"部屋を作る（ホスト）"),S("div",{class:"join"},S("input",{id:"joincode",placeholder:"部屋コード（6文字）",maxlength:6,style:"text-transform:uppercase"}),S("button",{onclick:()=>{const s=Aa("#joincode").value.trim().toUpperCase();s.length<4||(Pt(t),t.append(S("p",{},"接続しています…")),window.NINJIN_NET.join(s).then(()=>this.close()).catch(r=>{Pt(t),t.append(S("p",{},"参加できませんでした："+r),S("button",{onclick:()=>this.coop()},"もどる"))}))}},"参加する")),S("small",{},"※ うまくつながらない時は、Wi-Fiを切ってモバイル回線で試してみてね。"))}dialog(e,t){this.cur?.remove(),this.cur=null,this.g.dialogOpen=!0;let n=0;const s=S("div",{class:"dlg"});this.ui.append(s);const r=()=>{if(n>=e.length){s.remove(),this.g.dialogOpen=!1,t();return}const[a,o]=e[n];Pt(s);const c=Wn.find(l=>l.name===a)||(a==="ソラ"?rt("sora"):null);s.append(c?Rs(c.look,c.weapon,3,c.id):S("div",{class:"nop"}),S("div",{class:"dt"},S("b",{},a),S("p",{},o),S("small",{},"タップで次へ ▼")))};s.onclick=()=>{n++,r()},r()}npc(e){const t=this.g;if(Lx(t,e))return;const n=Qt.get(e)?.name||"",s={npc_elder:"この島には、星の欠片がたくさん落ちておる。高いところを探してみるとよい。",npc_shop:"いらっしゃい！ 旅に必要なものはそろってるよ。",npc_guild:"毎日の依頼を確認する？",npc_smith:"いい武器は、いい素材から。岩兵の石はよく鍛えられるぞ。",npc_monk:"霜嶺は寒い。滑空で谷を越えるのが早いぞ。",npc_girl:"お兄ちゃん（お姉ちゃん）、宝箱って開けるとき、わくわくするよね！",npc_fisher:"海の向こうから、たまに不思議な光が見えるんだ。"};if(e==="npc_shop"){this.dialog([[n,s[e]]],()=>this.shop());return}if(e==="npc_guild"){this.dialog([[n,s[e]]],()=>this.quests());return}if(e==="npc_girl"&&!O.flags.girlDone){this.dialog([[n,"わたし、迷子になっちゃった……町まで連れてってくれる？ ……え、地図があるの？ ありがとう！ これ、お礼！"]],()=>{O.flags.girlDone=1,lt("gem",60),lt("food2",2),se.emit("toast","星晶×60、焼き魚定食×2を手に入れた"),et()});return}this.dialog([[n,s[e]||"……"]],()=>{})}shop(){const e=S("div",{class:"shop"});this.panel("商人ミツのお店",e,"wide");const t=[["food1",1,"coin",500],["food2",1,"coin",1500],["food3",1,"coin",3e3],["exp1",1,"coin",600],["exp2",1,"coin",2800],["ore1",1,"coin",300],["ore2",1,"coin",1400],["ticket_s",1,"dust",5],["ticket_g",1,"dust",5],["book_a1",1,"coin",1200],["book_b1",1,"coin",1200],["book_c1",1,"coin",1200]],n=()=>{Pt(e),e.append(S("div",{class:"have"},`コイン ${wt(ct("coin"))}　星屑 ${ct("dust")}`));for(const[s,r,a,o]of t)e.append(S("div",{class:"it"},S("b",{style:`color:${es(s).color}`},es(s).icon),S("span",{},es(s).name),S("small",{},`${Gi(a)} ${wt(o)}`),S("button",{disabled:ct(a)<o,onclick:()=>{Tn(a,o)&&lt(s,r),n()}},"買う")))};this.onChange=n,n()}statue(e){const t=this.g;Ux(t,e);for(const r of t.members)r.dead=!1,r.hp=r.st.hp;t.player.stamina=t.player.stamMax;const n=O.statues[e]||0,s=S("div",{});s.append(S("p",{},"星の像に祈ると、仲間のHPが全回復します。"),S("p",{},`この像のレベル：${n} / 10　　星の欠片 ${ct("shard")}個`),S("p",{},`スタミナ上限：${O.stamMax}`)),s.append(S("button",{class:"primary",disabled:n>=10||ct("shard")<4,onclick:()=>{Tn("shard",4)&&(O.statues[e]=n+1,O.stamMax+=15,t.player.stamMax=O.stamMax,lt("gem",40),lt("exp2",3),li(100),et(),se.emit("toast","スタミナの上限が増えた！"),this.statue(e))}},"星の欠片を4つ捧げる")),this.panel("星の像",s)}domain(e){const t=Qt.get(e),n=t.data.kind,s=S("div",{}),r={book:"天賦の育成素材（教え・導き・哲学）が手に入る",relic:"遺紋（装備）が手に入る",ore:"武器の強化素材とキャラの経験値本が手に入る"};s.append(S("p",{},r[n]),S("p",{},"何回でも挑戦できます。")),[1,2,3,4].forEach(a=>{const o=[8,24,42,62][a-1]+wa()*2;s.append(S("div",{class:"daily"},S("span",{},`難易度 ${a}`),S("small",{},`推奨 Lv.${o}`),S("button",{onclick:()=>{this.close();const c=n==="relic"?["bandit","archer","shaman","golem"]:n==="book"?["puff_fire","puff_water","wisp_volt","wisp_star"]:["golem","wisp_frost","puff_frost","bandit"],l=new fi(a*7+e.length),h=[0,1,2].slice(0,a>=3?3:2).map(d=>Array.from({length:3+d+(a>=3?1:0)},()=>l.pick(c)));this.g.enterArena("domain",e,a,h,o)}},"挑戦する")))}),this.panel(t.name||"秘境",s)}tower(){const e=S("div",{});e.append(S("p",{},"星の塔：強い敵を制限時間内に倒そう。早く倒すほど星がもらえます（星1つにつき星晶50、初回のみ）。"));for(let t=1;t<=12;t++){const n=O.tower["f"+t]||0,s=t===1||(O.tower["f"+(t-1)]||0)>0,r=15+t*6;e.append(S("div",{class:"daily"},S("span",{},`第${t}層`),S("small",{},`Lv.${r}　${"★".repeat(n)}${"☆".repeat(3-n)}`),S("button",{disabled:!s,onclick:()=>{this.close();const a=new fi(t*131),o=["bandit","archer","shaman","golem","puff_fire","puff_water","puff_volt","puff_frost","wisp_star","wisp_shadow"],c=[Array.from({length:3+(t>>2)},()=>a.pick(o)),t%4===0?[["boss_puff","boss_golem","boss_wisp","boss_knight"][(t/4-1)%4]]:Array.from({length:3+(t>>2)},()=>a.pick(o))];this.g.enterArena("tower","f"+t,t,c,r,180)}},"挑戦")))}this.panel("星の塔",e)}arenaWin(e){const t=this.g,n=[],s=new fi(Date.now()),r=(a,o)=>{lt(a,o),n.push(`${Gi(a)} ×${o}`)};if(e.kind==="domain"){const a=Qt.get(e.id).data.kind,o=e.lv;if(r("coin",2e3*o),a==="relic"){const c=1+Math.floor(o/2);for(let l=0;l<c+1;l++){const h=s.next()<.12*o?5:s.next()<.5?4:3;Uo(s,h)}n.push(`遺紋 ×${c+1}`)}if(a==="book"){const c=s.pick(["a","b","c"]);r(`book_${c}1`,2+o),o>=2&&r(`book_${c}2`,o),o>=3&&r(`book_${c}3`,o-2)}a==="ore"&&(r("ore2",2+o*2),r("exp2",2+o),o>=3&&(r("ore3",o-2),r("exp3",o-2))),li(60+o*20),se.emit("daily","domain",1),Nx(t,e.id)}else{const a=e.t<60?3:e.t<100?2:1,o=O.tower[e.id]||0;a>o&&(r("gem",50*(a-o)),O.tower[e.id]=a),r("coin",3e3+e.lv*800),n.push(`★${a}（${Math.round(e.t)}秒）`)}et(),setTimeout(()=>this.panel("クリア！",S("div",{},S("div",{class:"loot"},...n.map(a=>S("div",{},a))),S("div",{class:"btns"},S("button",{class:"primary",onclick:()=>{this.close(),t.leaveArena(!0)}},"外に出る"),e.kind==="domain"?S("button",{onclick:()=>{this.close(),t.leaveArena(!0),this.domain(e.id)}},"もう一度"):null))),900)}banner(e,t){const n=S("div",{class:"banner"},S("b",{},e),S("small",{},t));this.ui.append(n),setTimeout(()=>n.classList.add("out"),3200),setTimeout(()=>n.remove(),4e3)}}class jx{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return qx(e).buffer}}function qx(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i){const r=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);t.set(r,n),n+=s.byteLength}return t}function _d(i){return new Yx(i).unpack()}function vd(i){const e=new Kx,t=e.pack(i);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class Yx{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,s="",r,a;for(;n<e;)r=t[n],r<160?(a=r,n++):(r^192)<32?(a=(r&31)<<6|t[n+1]&63,n+=2):(r^224)<16?(a=(r&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(a=(r&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),s+=String.fromCodePoint(a);return this.index+=e,s}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const s=this.unpack();t[s]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,s=e&8388607|8388608;return(t===0?1:-1)*s*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,s=(e>>20&2047)-1023,a=(e&1048575|1048576)*2**(s-20)+t*2**(s-52);return(n===0?1:-1)*a}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class Kx{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=s=>{if(s<t){const r=this.pack(e[s]);return r instanceof Promise?r.then(()=>n(s+1)):n(s+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),s=e/2**n-1,r=Math.floor(s*2**52),a=2**32,o=t<<31|n+1023<<20|r/a&1048575,c=r%a;this._bufferBuilder.append(203),this.pack_int32(o),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const s=r=>{if(r<t.length){const a=t[r];if(e.hasOwnProperty(a)){this.pack(a);const o=this.pack(e[a]);if(o instanceof Promise)return o.then(()=>s(r+1))}return s(r+1)}};return s(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new jx,this._textEncoder=new TextEncoder}}let xd=!0,yd=!0;function hr(i,e,t){const n=i.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function ss(i,e,t){if(!i.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){vl("Unable to polyfill events");return}const s=i.RTCPeerConnection.prototype,r=s.addEventListener;s.addEventListener=function(o,c){if(o!==e)return r.apply(this,arguments);const l=h=>{const d=t(h);d&&(c.handleEvent?c.handleEvent(d):c(d))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,l),r.apply(this,[o,l])};const a=s.removeEventListener;s.removeEventListener=function(o,c){if(o!==e||!this._eventMap||!this._eventMap[e])return a.apply(this,arguments);if(!this._eventMap[e].has(c))return a.apply(this,arguments);const l=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,a.apply(this,[o,l])},Object.defineProperty(s,"on"+e,{get(){return this["_on"+e]},set(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}function Jx(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(xd=i,i?"adapter.js logging disabled":"adapter.js logging enabled")}function Zx(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(yd=!i,"adapter.js deprecation warnings "+(i?"disabled":"enabled"))}function vl(){if(typeof window=="object"){if(xd)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function xl(i,e){yd&&console.warn(i+" is deprecated, please use "+e+" instead.")}function Qx(i){const e={browser:null,version:null};if(typeof i>"u"||!i.navigator||!i.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=i;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(s=>s.brand==="Chromium");if(n){const s=parseInt(n.version,10);if(s>=90)return{browser:"chrome",version:s}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(hr(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||i.isSecureContext===!1&&i.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(hr(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(i.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(hr(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=i.RTCRtpTransceiver&&"currentDirection"in i.RTCRtpTransceiver.prototype,e._safariVersion=hr(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function tf(i){return Object.prototype.toString.call(i)==="[object Object]"}function bd(i){return tf(i)?Object.keys(i).reduce(function(e,t){const n=tf(i[t]),s=n?bd(i[t]):i[t],r=n&&!Object.keys(s).length;return s===void 0||r?e:Object.assign(e,{[t]:s})},{}):i}function Lc(i,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?Lc(i,i.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(s=>{Lc(i,i.get(s),t)})}))}function nf(i,e,t){const n=t?"outbound-rtp":"inbound-rtp",s=new Map;if(e===null)return s;const r=[];return i.forEach(a=>{a.type==="track"&&a.trackIdentifier===e.id&&r.push(a)}),r.forEach(a=>{i.forEach(o=>{o.type===n&&o.trackId===a.id&&Lc(i,o,s)})}),s}const sf=vl;function Md(i,e){if(e.version>=64)return;const t=i&&i.navigator;if(!t.mediaDevices)return;const n=function(o){if(typeof o!="object"||o.mandatory||o.optional)return o;const c={};return Object.keys(o).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const h=typeof o[l]=="object"?o[l]:{ideal:o[l]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);const d=function(f,u){return f?f+u.charAt(0).toUpperCase()+u.slice(1):u==="deviceId"?"sourceId":u};if(h.ideal!==void 0){c.optional=c.optional||[];let f={};typeof h.ideal=="number"?(f[d("min",l)]=h.ideal,c.optional.push(f),f={},f[d("max",l)]=h.ideal,c.optional.push(f)):(f[d("",l)]=h.ideal,c.optional.push(f))}h.exact!==void 0&&typeof h.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[d("",l)]=h.exact):["min","max"].forEach(f=>{h[f]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[d(f,l)]=h[f])})}),o.advanced&&(c.optional=(c.optional||[]).concat(o.advanced)),c},s=function(o,c){if(e.version>=61)return c(o);if(o=JSON.parse(JSON.stringify(o)),o&&typeof o.audio=="object"){const l=function(h,d,f){d in h&&!(f in h)&&(h[f]=h[d],delete h[d])};o=JSON.parse(JSON.stringify(o)),l(o.audio,"autoGainControl","googAutoGainControl"),l(o.audio,"noiseSuppression","googNoiseSuppression"),o.audio=n(o.audio)}if(o&&typeof o.video=="object"){let l=o.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const h=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!h)){delete o.video.facingMode;let d;if(l.exact==="environment"||l.ideal==="environment"?d=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(d=["front"]),d)return t.mediaDevices.enumerateDevices().then(f=>{f=f.filter(g=>g.kind==="videoinput");let u=f.find(g=>d.some(_=>g.label.toLowerCase().includes(_)));return!u&&f.length&&d.includes("back")&&(u=f[f.length-1]),u&&(o.video.deviceId=l.exact?{exact:u.deviceId}:{ideal:u.deviceId}),o.video=n(o.video),sf("chrome: "+JSON.stringify(o)),c(o)})}o.video=n(o.video)}return sf("chrome: "+JSON.stringify(o)),c(o)},r=function(o){return e.version>=64?o:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[o.name]||o.name,message:o.message,constraint:o.constraint||o.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},a=function(o,c,l){s(o,h=>{t.webkitGetUserMedia(h,c,d=>{l&&l(r(d))})})};if(t.getUserMedia=a.bind(t),t.mediaDevices.getUserMedia){const o=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return s(c,l=>o(l).then(h=>{if(l.audio&&!h.getAudioTracks().length||l.video&&!h.getVideoTracks().length)throw h.getTracks().forEach(d=>{d.stop()}),new DOMException("","NotFoundError");return h},h=>Promise.reject(r(h))))}}}function Sd(i){i.MediaStream=i.MediaStream||i.webkitMediaStream}function Ed(i,e){if(!(e.version>102))if(typeof i=="object"&&i.RTCPeerConnection&&!("ontrack"in i.RTCPeerConnection.prototype)){Object.defineProperty(i.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=s=>{s.stream.addEventListener("addtrack",r=>{let a;i.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===r.track.id):a={track:r.track};const o=new Event("track");o.track=r.track,o.receiver=a,o.transceiver={receiver:a},o.streams=[s.stream],this.dispatchEvent(o)}),s.stream.getTracks().forEach(r=>{let a;i.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===r.id):a={track:r};const o=new Event("track");o.track=r,o.receiver=a,o.transceiver={receiver:a},o.streams=[s.stream],this.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else ss(i,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function Td(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("getSenders"in i.RTCPeerConnection.prototype)&&"createDTMFSender"in i.RTCPeerConnection.prototype){const e=function(s,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=s.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:s}};if(!i.RTCPeerConnection.prototype.getSenders){i.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const s=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(o,c){let l=s.apply(this,arguments);return l||(l=e(this,o),this._senders.push(l)),l};const r=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(o){r.apply(this,arguments);const c=this._senders.indexOf(o);c!==-1&&this._senders.splice(c,1)}}const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],t.apply(this,[r]),r.getTracks().forEach(a=>{this._senders.push(e(this,a))})};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],n.apply(this,[r]),r.getTracks().forEach(a=>{const o=this._senders.find(c=>c.track===a);o&&this._senders.splice(this._senders.indexOf(o),1)})}}else if(typeof i=="object"&&i.RTCPeerConnection&&"getSenders"in i.RTCPeerConnection.prototype&&"createDTMFSender"in i.RTCPeerConnection.prototype&&i.RTCRtpSender&&!("dtmf"in i.RTCRtpSender.prototype)){const e=i.RTCPeerConnection.prototype.getSenders;i.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n},Object.defineProperty(i.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function wd(i,e){if(e.version>=67||!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender&&i.RTCRtpReceiver))return;if(!("getStats"in i.RTCRtpSender.prototype)){const n=i.RTCPeerConnection.prototype.getSenders;n&&(i.RTCPeerConnection.prototype.getSenders=function(){const a=n.apply(this,[]);return a.forEach(o=>o._pc=this),a});const s=i.RTCPeerConnection.prototype.addTrack;s&&(i.RTCPeerConnection.prototype.addTrack=function(){const a=s.apply(this,arguments);return a._pc=this,a}),i.RTCRtpSender.prototype.getStats=function(){const a=this;return this._pc.getStats().then(o=>nf(o,a.track,!0))}}if(!("getStats"in i.RTCRtpReceiver.prototype)){const n=i.RTCPeerConnection.prototype.getReceivers;n&&(i.RTCPeerConnection.prototype.getReceivers=function(){const r=n.apply(this,[]);return r.forEach(a=>a._pc=this),r}),ss(i,"track",s=>(s.receiver._pc=s.srcElement,s)),i.RTCRtpReceiver.prototype.getStats=function(){const r=this;return this._pc.getStats().then(a=>nf(a,r.track,!1))}}if(!("getStats"in i.RTCRtpSender.prototype&&"getStats"in i.RTCRtpReceiver.prototype))return;const t=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof i.MediaStreamTrack){const s=arguments[0];let r,a,o;return this.getSenders().forEach(c=>{c.track===s&&(r?o=!0:r=c)}),this.getReceivers().forEach(c=>(c.track===s&&(a?o=!0:a=c),c.track===s)),o||r&&a?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():a?a.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function Cd(i){i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(a=>this._shimmedLocalStreams[a][0])};const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(a,o){if(!o)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[o.id]?this._shimmedLocalStreams[o.id].indexOf(c)===-1&&this._shimmedLocalStreams[o.id].push(c):this._shimmedLocalStreams[o.id]=[o,c],c};const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(a){this._shimmedLocalStreams=this._shimmedLocalStreams||{},a.getTracks().forEach(l=>{if(this.getSenders().find(d=>d.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const o=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>o.indexOf(l)===-1);this._shimmedLocalStreams[a.id]=[a].concat(c)};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[a.id],n.apply(this,arguments)};const s=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},a&&Object.keys(this._shimmedLocalStreams).forEach(o=>{const c=this._shimmedLocalStreams[o].indexOf(a);c!==-1&&this._shimmedLocalStreams[o].splice(c,1),this._shimmedLocalStreams[o].length===1&&delete this._shimmedLocalStreams[o]}),s.apply(this,arguments)}}function Ad(i,e){if(!i.RTCPeerConnection)return;if(i.RTCPeerConnection.prototype.addTrack&&e.version>=65)return Cd(i);const t=i.RTCPeerConnection.prototype.getLocalStreams;i.RTCPeerConnection.prototype.getLocalStreams=function(){const h=t.apply(this);return this._reverseStreams=this._reverseStreams||{},h.map(d=>this._reverseStreams[d.id])};const n=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(h){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},h.getTracks().forEach(d=>{if(this.getSenders().find(u=>u.track===d))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[h.id]){const d=new i.MediaStream(h.getTracks());this._streams[h.id]=d,this._reverseStreams[d.id]=h,h=d}n.apply(this,[h])};const s=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(h){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},s.apply(this,[this._streams[h.id]||h]),delete this._reverseStreams[this._streams[h.id]?this._streams[h.id].id:h.id],delete this._streams[h.id]},i.RTCPeerConnection.prototype.addTrack=function(h,d){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const f=[].slice.call(arguments,1);if(f.length!==1||!f[0].getTracks().find(_=>_===h))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(_=>_.track===h))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const g=this._streams[d.id];if(g)g.addTrack(h),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const _=new i.MediaStream([h]);this._streams[d.id]=_,this._reverseStreams[_.id]=d,this.addStream(_)}return this.getSenders().find(_=>_.track===h)};function r(l,h){let d=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(f=>{const u=l._reverseStreams[f],g=l._streams[u.id];d=d.replace(new RegExp(g.id,"g"),u.id)}),new RTCSessionDescription({type:h.type,sdp:d})}function a(l,h){let d=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(f=>{const u=l._reverseStreams[f],g=l._streams[u.id];d=d.replace(new RegExp(u.id,"g"),g.id)}),new RTCSessionDescription({type:h.type,sdp:d})}["createOffer","createAnswer"].forEach(function(l){const h=i.RTCPeerConnection.prototype[l],d={[l](){const f=arguments;return arguments.length&&typeof arguments[0]=="function"?h.apply(this,[g=>{const _=r(this,g);f[0].apply(null,[_])},g=>{f[1]&&f[1].apply(null,g)},arguments[2]]):h.apply(this,arguments).then(g=>r(this,g))}};i.RTCPeerConnection.prototype[l]=d[l]});const o=i.RTCPeerConnection.prototype.setLocalDescription;i.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?o.apply(this,arguments):(arguments[0]=a(this,arguments[0]),o.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(i.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(i.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:r(this,l)}}),i.RTCPeerConnection.prototype.removeTrack=function(h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!h._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(h._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let f;Object.keys(this._streams).forEach(u=>{this._streams[u].getTracks().find(_=>h.track===_)&&(f=this._streams[u])}),f&&(f.getTracks().length===1?this.removeStream(this._reverseStreams[f.id]):f.removeTrack(h.track),this.dispatchEvent(new Event("negotiationneeded")))}}function Uc(i,e){!i.RTCPeerConnection&&i.webkitRTCPeerConnection&&(i.RTCPeerConnection=i.webkitRTCPeerConnection),i.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]})}function Rd(i,e){e.version>102||ss(i,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const rf=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:Rd,shimAddTrackRemoveTrack:Ad,shimAddTrackRemoveTrackWithNative:Cd,shimGetSendersWithDtmf:Td,shimGetUserMedia:Md,shimMediaStream:Sd,shimOnTrack:Ed,shimPeerConnection:Uc,shimSenderReceiverGetStats:wd},Symbol.toStringTag,{value:"Module"}));function Pd(i,e){const t=i&&i.navigator;if(!t.mediaDevices)return;const n=i&&i.MediaStreamTrack;if(t.getUserMedia=function(s,r,a){xl("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(s).then(r,a)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const s=function(a,o,c){o in a&&!(c in a)&&(a[c]=a[o],delete a[o])},r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(a){return typeof a=="object"&&typeof a.audio=="object"&&(a=JSON.parse(JSON.stringify(a)),s(a.audio,"autoGainControl","mozAutoGainControl"),s(a.audio,"noiseSuppression","mozNoiseSuppression")),r(a)},n&&n.prototype.getSettings){const a=n.prototype.getSettings;n.prototype.getSettings=function(){const o=a.apply(this,arguments);return s(o,"mozAutoGainControl","autoGainControl"),s(o,"mozNoiseSuppression","noiseSuppression"),o}}if(n&&n.prototype.applyConstraints){const a=n.prototype.applyConstraints;n.prototype.applyConstraints=function(o){return this.kind==="audio"&&typeof o=="object"&&(o=JSON.parse(JSON.stringify(o)),s(o,"autoGainControl","mozAutoGainControl"),s(o,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[o])}}}}function ey(i,e){i.navigator.mediaDevices&&(i.navigator.mediaDevices&&"getDisplayMedia"in i.navigator.mediaDevices||(i.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const s=new DOMException("getDisplayMedia without video constraints is undefined");return s.name="NotFoundError",s.code=8,Promise.reject(s)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,i.navigator.mediaDevices.getUserMedia(n)}))}function kd(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Nc(i,e){typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||(!i.RTCPeerConnection&&i.mozRTCPeerConnection&&(i.RTCPeerConnection=i.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]}))}function Dd(i,e){if(typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){const[r,a,o]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[r||null]).then(c=>{if(e.version<53&&!a)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((h,d)=>{c.set(d,Object.assign({},h,{type:t[h.type]||h.type}))})}return c}).then(a,o)}}function Id(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpSender.prototype)return;const e=i.RTCPeerConnection.prototype.getSenders;e&&(i.RTCPeerConnection.prototype.getSenders=function(){const s=e.apply(this,[]);return s.forEach(r=>r._pc=this),s});const t=i.RTCPeerConnection.prototype.addTrack;t&&(i.RTCPeerConnection.prototype.addTrack=function(){const s=t.apply(this,arguments);return s._pc=this,s}),i.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Ld(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpReceiver.prototype)return;const e=i.RTCPeerConnection.prototype.getReceivers;e&&(i.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n}),ss(i,"track",t=>(t.receiver._pc=t.srcElement,t)),i.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Ud(i){!i.RTCPeerConnection||"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){xl("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function Nd(i){i.DataChannel&&!i.RTCDataChannel&&(i.RTCDataChannel=i.DataChannel)}function Fd(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.addTransceiver;t&&(i.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let s=arguments[1]&&arguments[1].sendEncodings;s===void 0&&(s=[]),s=[...s];const r=s.length>0;r&&s.forEach(o=>{if("rid"in o&&!/^[a-z0-9]{0,16}$/i.test(o.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in o&&!(parseFloat(o.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in o&&!(parseFloat(o.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const a=t.apply(this,arguments);if(r){const{sender:o}=a,c=o.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=s,o.sendEncodings=s,this.setParametersPromises.push(o.setParameters(c).then(()=>{delete o.sendEncodings}).catch(()=>{delete o.sendEncodings})))}return a})}function Od(i,e){if(!(typeof i=="object"&&i.RTCRtpSender)||e.version>=110)return;const t=i.RTCRtpSender.prototype.getParameters;t&&(i.RTCRtpSender.prototype.getParameters=function(){const s=t.apply(this,arguments);return"encodings"in s||(s.encodings=[].concat(this.sendEncodings||[{}])),s})}function zd(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function Bd(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createAnswer;i.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const af=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Fd,shimCreateAnswer:Bd,shimCreateOffer:zd,shimGetDisplayMedia:ey,shimGetParameters:Od,shimGetStats:Dd,shimGetUserMedia:Pd,shimOnTrack:kd,shimPeerConnection:Nc,shimRTCDataChannel:Nd,shimReceiverGetStats:Ld,shimRemoveStream:Ud,shimSenderGetStats:Id},Symbol.toStringTag,{value:"Module"}));function Hd(i){if(!(typeof i!="object"||!i.RTCPeerConnection)){if("getLocalStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in i.RTCPeerConnection.prototype)){const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(s=>e.call(this,s,n)),n.getVideoTracks().forEach(s=>e.call(this,s,n))},i.RTCPeerConnection.prototype.addTrack=function(n,...s){return s&&s.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),e.apply(this,arguments)}}"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const s=t.getTracks();this.getSenders().forEach(r=>{s.includes(r.track)&&this.removeTrack(r)})})}}function Vd(i){if(!(typeof i!="object"||!i.RTCPeerConnection)&&("getRemoteStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in i.RTCPeerConnection.prototype))){Object.defineProperty(i.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(s=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(s))return;this._remoteStreams.push(s);const r=new Event("addstream");r.stream=s,this.dispatchEvent(r)})})}});const e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(s){s.streams.forEach(r=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(r)>=0)return;n._remoteStreams.push(r);const a=new Event("addstream");a.stream=r,n.dispatchEvent(a)})}),e.apply(n,arguments)}}}function Gd(i){if(typeof i!="object"||!i.RTCPeerConnection)return;const e=i.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,s=e.setLocalDescription,r=e.setRemoteDescription,a=e.addIceCandidate;e.createOffer=function(l,h){const d=arguments.length>=2?arguments[2]:arguments[0],f=t.apply(this,[d]);return h?(f.then(l,h),Promise.resolve()):f},e.createAnswer=function(l,h){const d=arguments.length>=2?arguments[2]:arguments[0],f=n.apply(this,[d]);return h?(f.then(l,h),Promise.resolve()):f};let o=function(c,l,h){const d=s.apply(this,[c]);return h?(d.then(l,h),Promise.resolve()):d};e.setLocalDescription=o,o=function(c,l,h){const d=r.apply(this,[c]);return h?(d.then(l,h),Promise.resolve()):d},e.setRemoteDescription=o,o=function(c,l,h){const d=a.apply(this,[c]);return h?(d.then(l,h),Promise.resolve()):d},e.addIceCandidate=o}function Wd(i){const e=i&&i.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=s=>n($d(s))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=function(n,s,r){e.mediaDevices.getUserMedia(n).then(s,r)}.bind(e))}function $d(i){return i&&i.video!==void 0?Object.assign({},i,{video:bd(i.video)}):i}function Xd(i){if(!i.RTCPeerConnection)return;const e=i.RTCPeerConnection;i.RTCPeerConnection=function(n,s){if(n&&n.iceServers){const r=[];for(let a=0;a<n.iceServers.length;a++){let o=n.iceServers[a];o.urls===void 0&&o.url?(xl("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,r.push(o)):r.push(n.iceServers[a])}n.iceServers=r}return new e(n,s)},i.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(i.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function jd(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function qd(i){const e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const s=this.getTransceivers().find(a=>a.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveAudio===!0&&!s&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const r=this.getTransceivers().find(a=>a.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function Yd(i){typeof i!="object"||i.AudioContext||(i.AudioContext=i.webkitAudioContext)}const of=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:Yd,shimCallbacksAPI:Gd,shimConstraints:$d,shimCreateOfferLegacy:qd,shimGetUserMedia:Wd,shimLocalStreamsAPI:Hd,shimRTCIceServerUrls:Xd,shimRemoteStreamsAPI:Vd,shimTrackEventTransceiver:jd},Symbol.toStringTag,{value:"Module"}));function ty(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Kd={exports:{}};(function(i){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
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
`},e.getDirection=function(t,n){const s=e.splitLines(t);for(let r=0;r<s.length;r++)switch(s[r]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return s[r].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const s=e.splitLines(t)[0].substring(2).split(" ");return{kind:s[0],port:parseInt(s[1],10),protocol:s[2],fmt:s.slice(3).join(" ")}},e.parseOLine=function(t){const s=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:s[0],sessionId:s[1],sessionVersion:parseInt(s[2],10),netType:s[3],addressType:s[4],address:s[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let s=0;s<n.length;s++)if(n[s].length<2||n[s].charAt(1)!=="=")return!1;return!0},i.exports=e})(Kd);var Jd=Kd.exports;const Ls=ty(Jd),ny=lu({__proto__:null,default:Ls},[Jd]);function pa(i){if(!i.RTCIceCandidate||i.RTCIceCandidate&&"foundation"in i.RTCIceCandidate.prototype)return;const e=i.RTCIceCandidate;i.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const s=new e(n),r=Ls.parseCandidate(n.candidate);for(const a in r)a in s||Object.defineProperty(s,a,{value:r[a]});return s.toJSON=function(){return{candidate:s.candidate,sdpMid:s.sdpMid,sdpMLineIndex:s.sdpMLineIndex,usernameFragment:s.usernameFragment}},s}return new e(n)},i.RTCIceCandidate.prototype=e.prototype,ss(i,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new i.RTCIceCandidate(t.candidate),writable:"false"}),t))}function Fc(i){!i.RTCIceCandidate||i.RTCIceCandidate&&"relayProtocol"in i.RTCIceCandidate.prototype||ss(i,"icecandidate",e=>{if(e.candidate){const t=Ls.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function ma(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in i.RTCPeerConnection.prototype||Object.defineProperty(i.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(o){if(!o||!o.sdp)return!1;const c=Ls.splitSections(o.sdp);return c.shift(),c.some(l=>{const h=Ls.parseMLine(l);return h&&h.kind==="application"&&h.protocol.indexOf("SCTP")!==-1})},n=function(o){const c=o.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},s=function(o){let c=65536;return e.browser==="firefox"&&(e.version<57?o===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},r=function(o,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const h=Ls.matchPrefix(o.sdp,"a=max-message-size:");return h.length>0?l=parseInt(h[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},a=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),l=s(c),h=r(arguments[0],c);let d;l===0&&h===0?d=Number.POSITIVE_INFINITY:l===0||h===0?d=Math.max(l,h):d=Math.min(l,h);const f={};Object.defineProperty(f,"maxMessageSize",{get(){return d}}),this._sctp=f}return a.apply(this,arguments)}}function ga(i,e){if(!(i.RTCPeerConnection&&"createDataChannel"in i.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(s,r){const a=s.send;s.send=function(){const c=arguments[0],l=c.length||c.size||c.byteLength;if(s.readyState==="open"&&r.sctp&&l>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return a.apply(s,arguments)}}const n=i.RTCPeerConnection.prototype.createDataChannel;i.RTCPeerConnection.prototype.createDataChannel=function(){const r=n.apply(this,arguments);return t(r,this),r},ss(i,"datachannel",s=>(t(s.channel,s.target),s))}function Oc(i){if(!i.RTCPeerConnection||"connectionState"in i.RTCPeerConnection.prototype)return;const e=i.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=s=>{const r=s.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;const a=new Event("connectionstatechange",s);r.dispatchEvent(a)}return s},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function zc(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(s){if(s&&s.sdp&&s.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const r=s.sdp.split(`
`).filter(a=>a.trim()!=="a=extmap-allow-mixed").join(`
`);i.RTCSessionDescription&&s instanceof i.RTCSessionDescription?arguments[0]=new i.RTCSessionDescription({type:s.type,sdp:r}):s.sdp=r}return t.apply(this,arguments)}}function _a(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(i.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function va(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(i.RTCPeerConnection.prototype.setLocalDescription=function(){let s=arguments[0]||{};if(typeof s!="object"||s.type&&s.sdp)return t.apply(this,arguments);if(s={type:s.type,sdp:s.sdp},!s.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":s.type="offer";break;default:s.type="answer";break}return s.sdp||s.type!=="offer"&&s.type!=="answer"?t.apply(this,[s]):(s.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(a=>t.apply(this,[a]))})}const iy=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:zc,shimAddIceCandidateNullOrEmpty:_a,shimConnectionState:Oc,shimMaxMessageSize:ma,shimParameterlessSetLocalDescription:va,shimRTCIceCandidate:pa,shimRTCIceCandidateRelayProtocol:Fc,shimSendThrowTypeError:ga},Symbol.toStringTag,{value:"Module"}));function sy({window:i}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=vl,n=Qx(i),s={browserDetails:n,commonShim:iy,extractVersion:hr,disableLog:Jx,disableWarnings:Zx,sdp:ny};switch(n.browser){case"chrome":if(!rf||!Uc||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),s;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),s;t("adapter.js shimming chrome."),s.browserShim=rf,_a(i,n),va(i),Md(i,n),Sd(i),Uc(i,n),Ed(i,n),Ad(i,n),Td(i),wd(i,n),Rd(i,n),pa(i),Fc(i),Oc(i),ma(i,n),ga(i,n),zc(i,n);break;case"firefox":if(!af||!Nc||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),s;t("adapter.js shimming firefox."),s.browserShim=af,_a(i,n),va(i),Pd(i,n),Nc(i,n),Dd(i,n),kd(i),Ud(i),Id(i),Ld(i),Nd(i),Fd(i,n),Od(i,n),zd(i,n),Bd(i,n),pa(i),Oc(i),ma(i,n),ga(i,n);break;case"safari":if(!of||!e.shimSafari)return t("Safari shim is not included in this adapter release."),s;t("adapter.js shimming safari."),s.browserShim=of,_a(i,n),va(i),Xd(i),qd(i),Gd(i),Hd(i),Vd(i),jd(i),Wd(i),Yd(i),pa(i),Fc(i),ma(i,n),ga(i,n),zc(i,n);break;default:t("Unsupported browser!");break}return s}const cf=sy({window:typeof window>"u"?void 0:window});function rs(i,e,t,n){Object.defineProperty(i,e,{get:t,set:n,enumerable:!0,configurable:!0})}class Zd{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,s=Math.ceil(n/this.chunkedMTU);let r=0,a=0;for(;a<n;){const o=Math.min(n,a+this.chunkedMTU),c=e.slice(a,o),l={__peerData:this._dataCount,n:r,data:c,total:s};t.push(l),a=o,r++}return this._dataCount++,t}}}function ry(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i)t.set(s,n),n+=s.byteLength;return t}const Io=cf.default||cf,ar=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const i=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(i)?i==="chrome"?e>=this.minChromeVersion:i==="firefox"?e>=this.minFirefoxVersion:i==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return Io.browserDetails.browser}getVersion(){return Io.browserDetails.version||0}isUnifiedPlanSupported(){const i=this.getBrowser(),e=Io.browserDetails.version||0;if(i==="chrome"&&e<this.minChromeVersion)return!1;if(i==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},ay=i=>!i||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(i),Qd=()=>Math.random().toString(36).slice(2),lf={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class oy extends Zd{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(s){s.target&&t(s.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=lf,this.browser=ar.getBrowser(),this.browserVersion=ar.getVersion(),this.pack=vd,this.unpack=_d,this.supports=function(){const t={browser:ar.isBrowserSupported(),webRTC:ar.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(lf),t.audioVideo=!0;let s;try{s=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!s.ordered;try{s.binaryType="blob",t.binaryBlob=!ar.isIOS}catch{}}catch{}finally{s&&s.close()}}catch{}finally{n&&n.close()}return t}(),this.validateId=ay,this.randomToken=Qd}}const on=new oy,cy="PeerJS: ";var hf;(function(i){i[i.Disabled=0]="Disabled",i[i.Errors=1]="Errors",i[i.Warnings=2]="Warnings",i[i.All=3]="All"})(hf||(hf={}));class ly{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[cy,...t];for(const s in n)n[s]instanceof Error&&(n[s]="("+n[s].name+") "+n[s].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var ve=new ly,yl={},hy=Object.prototype.hasOwnProperty,nn="~";function yr(){}Object.create&&(yr.prototype=Object.create(null),new yr().__proto__||(nn=!1));function fy(i,e,t){this.fn=i,this.context=e,this.once=t||!1}function eu(i,e,t,n,s){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new fy(t,n||i,s),a=nn?nn+e:e;return i._events[a]?i._events[a].fn?i._events[a]=[i._events[a],r]:i._events[a].push(r):(i._events[a]=r,i._eventsCount++),i}function xa(i,e){--i._eventsCount===0?i._events=new yr:delete i._events[e]}function Yt(){this._events=new yr,this._eventsCount=0}Yt.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)hy.call(t,n)&&e.push(nn?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};Yt.prototype.listeners=function(e){var t=nn?nn+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var s=0,r=n.length,a=new Array(r);s<r;s++)a[s]=n[s].fn;return a};Yt.prototype.listenerCount=function(e){var t=nn?nn+e:e,n=this._events[t];return n?n.fn?1:n.length:0};Yt.prototype.emit=function(e,t,n,s,r,a){var o=nn?nn+e:e;if(!this._events[o])return!1;var c=this._events[o],l=arguments.length,h,d;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,s),!0;case 5:return c.fn.call(c.context,t,n,s,r),!0;case 6:return c.fn.call(c.context,t,n,s,r,a),!0}for(d=1,h=new Array(l-1);d<l;d++)h[d-1]=arguments[d];c.fn.apply(c.context,h)}else{var f=c.length,u;for(d=0;d<f;d++)switch(c[d].once&&this.removeListener(e,c[d].fn,void 0,!0),l){case 1:c[d].fn.call(c[d].context);break;case 2:c[d].fn.call(c[d].context,t);break;case 3:c[d].fn.call(c[d].context,t,n);break;case 4:c[d].fn.call(c[d].context,t,n,s);break;default:if(!h)for(u=1,h=new Array(l-1);u<l;u++)h[u-1]=arguments[u];c[d].fn.apply(c[d].context,h)}}return!0};Yt.prototype.on=function(e,t,n){return eu(this,e,t,n,!1)};Yt.prototype.once=function(e,t,n){return eu(this,e,t,n,!0)};Yt.prototype.removeListener=function(e,t,n,s){var r=nn?nn+e:e;if(!this._events[r])return this;if(!t)return xa(this,r),this;var a=this._events[r];if(a.fn)a.fn===t&&(!s||a.once)&&(!n||a.context===n)&&xa(this,r);else{for(var o=0,c=[],l=a.length;o<l;o++)(a[o].fn!==t||s&&!a[o].once||n&&a[o].context!==n)&&c.push(a[o]);c.length?this._events[r]=c.length===1?c[0]:c:xa(this,r)}return this};Yt.prototype.removeAllListeners=function(e){var t;return e?(t=nn?nn+e:e,this._events[t]&&xa(this,t)):(this._events=new yr,this._eventsCount=0),this};Yt.prototype.off=Yt.prototype.removeListener;Yt.prototype.addListener=Yt.prototype.on;Yt.prefixed=nn;Yt.EventEmitter=Yt;yl=Yt;var as={};rs(as,"ConnectionType",()=>$n);rs(as,"PeerErrorType",()=>St);rs(as,"BaseConnectionErrorType",()=>br);rs(as,"DataConnectionErrorType",()=>Mr);rs(as,"SerializationType",()=>Hs);rs(as,"SocketEventType",()=>Gn);rs(as,"ServerMessageType",()=>Ft);var $n;(function(i){i.Data="data",i.Media="media"})($n||($n={}));var St;(function(i){i.BrowserIncompatible="browser-incompatible",i.Disconnected="disconnected",i.InvalidID="invalid-id",i.InvalidKey="invalid-key",i.Network="network",i.PeerUnavailable="peer-unavailable",i.SslUnavailable="ssl-unavailable",i.ServerError="server-error",i.SocketError="socket-error",i.SocketClosed="socket-closed",i.UnavailableID="unavailable-id",i.WebRTC="webrtc"})(St||(St={}));var br;(function(i){i.NegotiationFailed="negotiation-failed",i.ConnectionClosed="connection-closed"})(br||(br={}));var Mr;(function(i){i.NotOpenYet="not-open-yet",i.MessageToBig="message-too-big"})(Mr||(Mr={}));var Hs;(function(i){i.Binary="binary",i.BinaryUTF8="binary-utf8",i.JSON="json",i.None="raw"})(Hs||(Hs={}));var Gn;(function(i){i.Message="message",i.Disconnected="disconnected",i.Error="error",i.Close="close"})(Gn||(Gn={}));var Ft;(function(i){i.Heartbeat="HEARTBEAT",i.Candidate="CANDIDATE",i.Offer="OFFER",i.Answer="ANSWER",i.Open="OPEN",i.Error="ERROR",i.IdTaken="ID-TAKEN",i.InvalidKey="INVALID-KEY",i.Leave="LEAVE",i.Expire="EXPIRE"})(Ft||(Ft={}));var bl={};bl=JSON.parse('{"name":"peerjs","version":"1.5.4","keywords":["peerjs","webrtc","p2p","rtc"],"description":"PeerJS client","homepage":"https://peerjs.com","bugs":{"url":"https://github.com/peers/peerjs/issues"},"repository":{"type":"git","url":"https://github.com/peers/peerjs"},"license":"MIT","contributors":["Michelle Bu <michelle@michellebu.com>","afrokick <devbyru@gmail.com>","ericz <really.ez@gmail.com>","Jairo <kidandcat@gmail.com>","Jonas Gloning <34194370+jonasgloning@users.noreply.github.com>","Jairo Caro-Accino Viciana <jairo@galax.be>","Carlos Caballero <carlos.caballero.gonzalez@gmail.com>","hc <hheennrryy@gmail.com>","Muhammad Asif <capripio@gmail.com>","PrashoonB <prashoonbhattacharjee@gmail.com>","Harsh Bardhan Mishra <47351025+HarshCasper@users.noreply.github.com>","akotynski <aleksanderkotbury@gmail.com>","lmb <i@lmb.io>","Jairooo <jairocaro@msn.com>","Moritz Stückler <moritz.stueckler@gmail.com>","Simon <crydotsnakegithub@gmail.com>","Denis Lukov <denismassters@gmail.com>","Philipp Hancke <fippo@andyet.net>","Hans Oksendahl <hansoksendahl@gmail.com>","Jess <jessachandler@gmail.com>","khankuan <khankuan@gmail.com>","DUODVK <kurmanov.work@gmail.com>","XiZhao <kwang1imsa@gmail.com>","Matthias Lohr <matthias@lohr.me>","=frank tree <=frnktrb@googlemail.com>","Andre Eckardt <aeckardt@outlook.com>","Chris Cowan <agentme49@gmail.com>","Alex Chuev <alex@chuev.com>","alxnull <alxnull@e.mail.de>","Yemel Jardi <angel.jardi@gmail.com>","Ben Parnell <benjaminparnell.94@gmail.com>","Benny Lichtner <bennlich@gmail.com>","fresheneesz <bitetrudpublic@gmail.com>","bob.barstead@exaptive.com <bob.barstead@exaptive.com>","chandika <chandika@gmail.com>","emersion <contact@emersion.fr>","Christopher Van <cvan@users.noreply.github.com>","eddieherm <edhermoso@gmail.com>","Eduardo Pinho <enet4mikeenet@gmail.com>","Evandro Zanatta <ezanatta@tray.net.br>","Gardner Bickford <gardner@users.noreply.github.com>","Gian Luca <gianluca.cecchi@cynny.com>","PatrickJS <github@gdi2290.com>","jonnyf <github@jonathanfoss.co.uk>","Hizkia Felix <hizkifw@gmail.com>","Hristo Oskov <hristo.oskov@gmail.com>","Isaac Madwed <i.madwed@gmail.com>","Ilya Konanykhin <ilya.konanykhin@gmail.com>","jasonbarry <jasbarry@me.com>","Jonathan Burke <jonathan.burke.1311@googlemail.com>","Josh Hamit <josh.hamit@gmail.com>","Jordan Austin <jrax86@gmail.com>","Joel Wetzell <jwetzell@yahoo.com>","xizhao <kevin.wang@cloudera.com>","Alberto Torres <kungfoobar@gmail.com>","Jonathan Mayol <mayoljonathan@gmail.com>","Jefferson Felix <me@jsfelix.dev>","Rolf Erik Lekang <me@rolflekang.com>","Kevin Mai-Husan Chia <mhchia@users.noreply.github.com>","Pepijn de Vos <pepijndevos@gmail.com>","JooYoung <qkdlql@naver.com>","Tobias Speicher <rootcommander@gmail.com>","Steve Blaurock <sblaurock@gmail.com>","Kyrylo Shegeda <shegeda@ualberta.ca>","Diwank Singh Tomer <singh@diwank.name>","Sören Balko <Soeren.Balko@gmail.com>","Arpit Solanki <solankiarpit1997@gmail.com>","Yuki Ito <yuki@gnnk.net>","Artur Zayats <zag2art@gmail.com>"],"funding":{"type":"opencollective","url":"https://opencollective.com/peer"},"collective":{"type":"opencollective","url":"https://opencollective.com/peer"},"files":["dist/*"],"sideEffects":["lib/global.ts","lib/supports.ts"],"main":"dist/bundler.cjs","module":"dist/bundler.mjs","browser-minified":"dist/peerjs.min.js","browser-unminified":"dist/peerjs.js","browser-minified-msgpack":"dist/serializer.msgpack.mjs","types":"dist/types.d.ts","engines":{"node":">= 14"},"targets":{"types":{"source":"lib/exports.ts"},"main":{"source":"lib/exports.ts","sourceMap":{"inlineSources":true}},"module":{"source":"lib/exports.ts","includeNodeModules":["eventemitter3"],"sourceMap":{"inlineSources":true}},"browser-minified":{"context":"browser","outputFormat":"global","optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-unminified":{"context":"browser","outputFormat":"global","optimize":false,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-minified-msgpack":{"context":"browser","outputFormat":"esmodule","isLibrary":true,"optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 102, safari >= 15"},"source":"lib/dataconnection/StreamConnection/MsgPack.ts"}},"scripts":{"contributors":"git-authors-cli --print=false && prettier --write package.json && git add package.json package-lock.json && git commit -m \\"chore(contributors): update and sort contributors list\\"","check":"tsc --noEmit && tsc -p e2e/tsconfig.json --noEmit","watch":"parcel watch","build":"rm -rf dist && parcel build","prepublishOnly":"npm run build","test":"jest","test:watch":"jest --watch","coverage":"jest --coverage --collectCoverageFrom=\\"./lib/**\\"","format":"prettier --write .","format:check":"prettier --check .","semantic-release":"semantic-release","e2e":"wdio run e2e/wdio.local.conf.ts","e2e:bstack":"wdio run e2e/wdio.bstack.conf.ts"},"devDependencies":{"@parcel/config-default":"^2.9.3","@parcel/packager-ts":"^2.9.3","@parcel/transformer-typescript-tsc":"^2.9.3","@parcel/transformer-typescript-types":"^2.9.3","@semantic-release/changelog":"^6.0.1","@semantic-release/git":"^10.0.1","@swc/core":"^1.3.27","@swc/jest":"^0.2.24","@types/jasmine":"^4.3.4","@wdio/browserstack-service":"^8.11.2","@wdio/cli":"^8.11.2","@wdio/globals":"^8.11.2","@wdio/jasmine-framework":"^8.11.2","@wdio/local-runner":"^8.11.2","@wdio/spec-reporter":"^8.11.2","@wdio/types":"^8.10.4","http-server":"^14.1.1","jest":"^29.3.1","jest-environment-jsdom":"^29.3.1","mock-socket":"^9.0.0","parcel":"^2.9.3","prettier":"^3.0.0","semantic-release":"^21.0.0","ts-node":"^10.9.1","typescript":"^5.0.0","wdio-geckodriver-service":"^5.0.1"},"dependencies":{"@msgpack/msgpack":"^2.8.0","eventemitter3":"^4.0.7","peerjs-js-binarypack":"^2.1.0","webrtc-adapter":"^9.0.0"},"alias":{"process":false,"buffer":false}}');class dy extends yl.EventEmitter{constructor(e,t,n,s,r,a=5e3){super(),this.pingInterval=a,this._disconnected=!0,this._messagesQueue=[];const o=e?"wss://":"ws://";this._baseUrl=o+t+":"+n+s+"peerjs?key="+r}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+bl.version),this._disconnected=!1,this._socket.onmessage=s=>{let r;try{r=JSON.parse(s.data),ve.log("Server message received:",r)}catch{ve.log("Invalid server message",s.data);return}this.emit(Gn.Message,r)},this._socket.onclose=s=>{this._disconnected||(ve.log("Socket closed.",s),this._cleanup(),this._disconnected=!0,this.emit(Gn.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),ve.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){ve.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:Ft.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Gn.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class tu{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===$n.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,s={ordered:!!e.reliable},r=t.createDataChannel(n.label,s);n._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){ve.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,s=this.connection.type,r=this.connection.provider;ve.log("Listening for ICE candidates."),e.onicecandidate=a=>{!a.candidate||!a.candidate.candidate||(ve.log(`Received ICE candidates for ${t}:`,a.candidate),r.socket.send({type:Ft.Candidate,payload:{candidate:a.candidate,type:s,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":ve.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(br.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":ve.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(br.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":ve.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},ve.log("Listening for data channel"),e.ondatachannel=a=>{ve.log("Received data channel");const o=a.channel;r.getConnection(t,n)._initializeDataChannel(o)},ve.log("Listening for remote stream"),e.ontrack=a=>{ve.log("Received remote stream");const o=a.streams[0],c=r.getConnection(t,n);if(c.type===$n.Media){const l=c;this._addStreamToMediaConnection(o,l)}}}cleanup(){ve.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const s=this.connection.dataChannel;s&&(n=!!s.readyState&&s.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);ve.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),ve.log("Set localDescription:",n,`for:${this.connection.peer}`);let s={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===$n.Data){const r=this.connection;s={...s,label:r.label,reliable:r.reliable,serialization:r.serialization}}t.socket.send({type:Ft.Offer,payload:s,dst:this.connection.peer})}catch(s){s!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(St.WebRTC,s),ve.log("Failed to setLocalDescription, ",s))}}catch(n){t.emitError(St.WebRTC,n),ve.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();ve.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),ve.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:Ft.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(s){t.emitError(St.WebRTC,s),ve.log("Failed to setLocalDescription, ",s)}}catch(n){t.emitError(St.WebRTC,n),ve.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,s=this.connection.provider;ve.log("Setting remote description",t);const r=this;try{await n.setRemoteDescription(t),ve.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await r._makeAnswer()}catch(a){s.emitError(St.WebRTC,a),ve.log("Failed to setRemoteDescription, ",a)}}async handleCandidate(e){ve.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),ve.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(St.WebRTC,t),ve.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(ve.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return ve.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){ve.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class nu extends yl.EventEmitter{emitError(e,t){ve.error("Error:",t),this.emit("error",new uy(`${e}`,t))}}class uy extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class iu extends nu{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}var Hc;const mr=class mr extends iu{get type(){return $n.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||mr.ID_PREFIX+on.randomToken(),this._negotiator=new tu(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{ve.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{ve.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){ve.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case Ft.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case Ft.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:ve.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){ve.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const s of n)this.handleMessage(s);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};Hc=new WeakMap,Ys(mr,Hc,mr.ID_PREFIX="mc_");let Ra=mr;class py{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:s,path:r,key:a}=this._options,o=new URL(`${t}://${n}:${s}${r}${a}/${e}`);return o.searchParams.set("ts",`${Date.now()}${Math.random()}`),o.searchParams.set("version",bl.version),fetch(o.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){ve.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==on.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===on.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw ve.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var Vc,Gc;const Yi=class Yi extends iu{get type(){return $n.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||Yi.ID_PREFIX+Qd(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new tu(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{ve.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{ve.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{ve.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(Mr.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case Ft.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case Ft.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:ve.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};Vc=new WeakMap,Gc=new WeakMap,Ys(Yi,Vc,Yi.ID_PREFIX="dc_"),Ys(Yi,Gc,Yi.MAX_BUFFERED_AMOUNT=8388608);let Pa=Yi;class Ml extends Pa{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Pa.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return ve.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class Lo extends Ml{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new Zd,this.serialization=Hs.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=_d(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const s=ry(n.data);this._handleDataMessage({data:s})}}_send(e,t){const n=vd(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);ve.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class my extends Ml{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=Hs.None}}class gy extends Ml{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=on.chunkedMTU){this.emitError(Mr.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=Hs.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var Wc;const gr=class gr extends nu{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:my,json:gy,binary:Lo,"binary-utf8":Lo,default:Lo},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:on.CLOUD_HOST,port:on.CLOUD_PORT,path:"/",key:gr.DEFAULT_KEY,token:on.randomToken(),config:on.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==on.CLOUD_HOST?this._options.secure=on.isSecure():this._options.host==on.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&ve.setLogFunction(this._options.logFunction),ve.logLevel=this._options.debug||0,this._api=new py(t),this._socket=this._createServerConnection(),!on.supports.audioVideo&&!on.supports.data){this._delayedAbort(St.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!on.validateId(n)){this._delayedAbort(St.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(s=>this._initialize(s)).catch(s=>this._abort(St.ServerError,s))}_createServerConnection(){const e=new dy(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Gn.Message,t=>{this._handleMessage(t)}),e.on(Gn.Error,t=>{this._abort(St.SocketError,t)}),e.on(Gn.Disconnected,()=>{this.disconnected||(this.emitError(St.Network,"Lost connection to server."),this.disconnect())}),e.on(Gn.Close,()=>{this.disconnected||this._abort(St.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,s=e.src;switch(t){case Ft.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case Ft.Error:this._abort(St.ServerError,n.msg);break;case Ft.IdTaken:this._abort(St.UnavailableID,`ID "${this.id}" is taken`);break;case Ft.InvalidKey:this._abort(St.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case Ft.Leave:ve.log(`Received leave message from ${s}`),this._cleanupPeer(s),this._connections.delete(s);break;case Ft.Expire:this.emitError(St.PeerUnavailable,`Could not connect to peer ${s}`);break;case Ft.Offer:{const r=n.connectionId;let a=this.getConnection(s,r);if(a&&(a.close(),ve.warn(`Offer received for existing Connection ID:${r}`)),n.type===$n.Media){const c=new Ra(s,this,{connectionId:r,_payload:n,metadata:n.metadata});a=c,this._addConnection(s,a),this.emit("call",c)}else if(n.type===$n.Data){const c=new this._serializers[n.serialization](s,this,{connectionId:r,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});a=c,this._addConnection(s,a),this.emit("connection",c)}else{ve.warn(`Received malformed connection type:${n.type}`);return}const o=this._getMessages(r);for(const c of o)a.handleMessage(c);break}default:{if(!n){ve.warn(`You received a malformed message from ${s} of type ${t}`);return}const r=n.connectionId,a=this.getConnection(s,r);a&&a.peerConnection?a.handleMessage(e):r?this._storeMessage(r,e):ve.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){ve.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(St.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){ve.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(St.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){ve.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const s=new Ra(e,this,{...n,_stream:t});return this._addConnection(e,s),s}_addConnection(e,t){ve.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const s of n)if(s.connectionId===t)return s;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){ve.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(ve.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;ve.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)ve.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)ve.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(St.ServerError,t))}};Wc=new WeakMap,Ys(gr,Wc,gr.DEFAULT_KEY="peerjs");let Bc=gr;var ff=Bc;const df="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",uf="ninjin-v1-",pf={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"stun:stun.cloudflare.com:3478"}]},su={idle:0,chase:1,wind:2,recover:3,dead:4,return:5},_y=Object.keys(su);class vy{constructor(e){this.g=e,this.peer=null,this.conn=null,this.code="",this.pT=0,this.eT=0,this.soloPos=null}mkPeer(e){return new Promise((t,n)=>{const s=new URLSearchParams(location.search).get("peer"),r=s?{host:s.split(":")[0],port:Number(s.split(":")[1]||9e3),path:"/",secure:!1}:{},a=e?new ff(e,{config:pf,debug:0,...r}):new ff({config:pf,debug:0,...r}),o=setTimeout(()=>n("サーバーに接続できません"),15e3);a.on("open",()=>{clearTimeout(o),t(a)}),a.on("error",c=>{clearTimeout(o),n(c?.type==="unavailable-id"?"コードが使われています":c?.type==="peer-unavailable"?"部屋が見つかりません":c?.type||String(c))})})}async host(){this.leave(!0);for(let e=0;e<3;e++){const t=Array.from({length:6},()=>df[Math.floor(Math.random()*df.length)]).join("");try{this.peer=await this.mkPeer(uf+t),this.code=t;break}catch(n){if(e===2)throw n}}return this.peer.on("connection",e=>{if(this.conn){e.on("open",()=>{e.send({t:"full"}),setTimeout(()=>e.close(),300)});return}this.conn=e,this.wire(e),e.on("open",()=>{this.g.role="host",this.g.pid=1,this.g.net=this,this.g.buildParty(),this.send({t:"hello",name:O.settings.name,hour:this.g.hour,pos:this.g.player.pos.toArray()}),se.emit("toast","友達が参加しました！")})}),this.peer.on("disconnected",()=>this.peer?.reconnect()),this.g.net=this,this.code}async join(e){return this.leave(!0),this.peer=await this.mkPeer(),new Promise((t,n)=>{const s=this.peer.connect(uf+e,{reliable:!0,serialization:"json"}),r=setTimeout(()=>n("接続がタイムアウトしました"),2e4);this.peer.on("error",a=>{clearTimeout(r),n(a?.type==="peer-unavailable"?"部屋が見つかりません":a?.type||String(a))}),s.on("open",()=>{clearTimeout(r),this.conn=s,this.code=e,this.wire(s),this.g.role="guest",this.g.pid=2,this.g.net=this,this.soloPos=this.g.player.pos.clone();for(const a of[...this.g.enemies.values()])this.g.removeEnemy(a);this.g.buildParty(),this.send({t:"hello",name:O.settings.name}),t()})})}wire(e){e.on("data",t=>{try{this.onMsg(t)}catch(n){console.warn(n)}}),e.on("close",()=>this.dropped()),e.on("error",()=>this.dropped())}dropped(){if(!this.conn)return;this.conn=null;const e=this.g;for(const t of e.remotes.values())t.dispose();if(e.remotes.clear(),se.emit("toast","マルチプレイが終了しました"),e.role==="guest"){for(const t of[...e.enemies.values()])e.removeEnemy(t);e.role="solo",e.pid=1,e.net=null,this.peer?.destroy(),this.peer=null,this.soloPos&&e.teleport(this.soloPos.x,this.soloPos.z),e.buildParty()}else e.role==="host"&&(e.role="solo",e.buildParty())}leave(e=!1){if(this.conn){try{this.send({t:"bye"})}catch{}const t=this.conn;this.dropped(),t.close()}this.peer?.destroy(),this.peer=null,this.code="",this.g.net===this&&(this.g.net=null),this.g.role="solo",this.g.pid=1,e||this.g.buildParty()}send(e){this.conn&&this.conn.open&&this.conn.send(e)}tick(e){const t=this.g;if(this.conn){if(this.pT-=e,this.pT<=0){this.pT=1/15;const n=t.player;this.send({t:"p",x:+n.pos.x.toFixed(2),y:+n.pos.y.toFixed(2),z:+n.pos.z.toFixed(2),f:+n.face.toFixed(2),a:Math.round(t.lastFrame),m:n.mode,c:t.cur.id,hp:+(t.cur.hp/t.cur.st.hp).toFixed(2),n:O.settings.name,h:t.role==="host"?t.hour:void 0})}if(t.role==="host"&&(this.eT-=e,this.eT<=0)){this.eT=.1;const n=[...t.remotes.values()][0],s=[];for(const r of t.enemies.values())n&&r.pos.distanceToSquared(n.pos)>110*110||s.push([r.id,r.def.id,r.lvl,+r.pos.x.toFixed(2),+r.pos.y.toFixed(2),+r.pos.z.toFixed(2),+r.face.toFixed(2),Math.round(r.hp),Math.round(r.maxHp),r.aura?r.aura.el:0,su[r.state],r.frozen>0?1:0,r.boss?1:0]);this.send({t:"es",l:s,ar:t.arena?1:0})}}}onMsg(e){const t=this.g;switch(e.t){case"hello":{const n=t.remotes.get(t.role==="host"?2:1)||new Qh(t.gfx.scene,"sora");n.name=e.name||"友達",t.remotes.set(t.role==="host"?2:1,n),t.role==="guest"&&e.pos&&(t.player.pos.set(e.pos[0]+2,e.pos[1],e.pos[2]+2),t.camT.copy(t.player.pos),t.hour=e.hour,se.emit("toast",`${n.name}の世界に参加しました！`));break}case"full":se.emit("toast","その部屋はいっぱいです"),this.leave();break;case"bye":this.dropped();break;case"p":{const n=t.role==="host"?2:1;let s=t.remotes.get(n);s||(s=new Qh(t.gfx.scene,e.c),t.remotes.set(n,s),s.pos.set(e.x,e.y,e.z)),s.setChar(e.c),s.target.set(e.x,e.y,e.z),s.face=e.f,s.f=e.a,s.mode=e.m,s.hp=e.hp,s.name=e.n||s.name,e.h!==void 0&&t.role==="guest"&&(t.hour=e.h);break}case"es":{if(t.role!=="guest")break;const n=new Set;for(const s of e.l){const[r,a,o,c,l,h,d,f,u,g,_,m]=s;n.add(r);let p=t.enemies.get(r);p||(p=t.addEnemy(a,o,c,h,r),p.remote=!0,p.pos.set(c,l,h)),p.netPos.set(c,l,h),p.face=d,p.hp=f,p.maxHp=u,p.aura=g?{el:g,t:999}:null,p.state=_y[_],p.frozen=m?1:0}for(const s of[...t.enemies.values()])!n.has(s.id)&&s.state!=="dead"&&t.removeEnemy(s);break}case"hit":{const n=t.enemies.get(e.id);n&&t.role!=="guest"&&od(t,n,e.h);break}case"dmg":{if(t.role!=="guest")break;const n=t.enemies.get(e.id);if(!n)break;n.hurtFlash=.15,t.num(n.pos,String(e.d),e.c?"#ffe04a":e.e==="phys"?"#ffffff":window.EL_COL?.[e.e]||"#fff",e.c),e.l&&t.nums.push({x:n.pos.x,y:n.pos.y+2.6,z:n.pos.z,text:e.l,color:"#ffe8ff",t:0,big:!0});break}case"kill":{if(t.role!=="guest")break;const n=t.enemies.get(e.id);n&&(n.state="dead",t.later(.6,()=>t.removeEnemy(n))),t.rewardKill(e.def,e.lvl);break}case"fx":t.netEcho=!0,t.fxAt(e.n,new P(e.p[0],e.p[1],e.p[2]),e.e,e.s,e.f),t.netEcho=!1;break;case"proj":{const n=new P(Math.cos(t.camYaw),0,-Math.sin(t.camYaw)),s=new P(e.v[0],e.v[1],e.v[2]);t.fx.spawn("orb",new P(e.p[0],e.p[1],e.p[2]),{el:e.e,scale:e.s,loop:!0,life:e.l,vel:s,flip:s.dot(n)<0});break}case"eatk":t.checkPlayerHit(new P(e.c[0],e.c[1],e.c[2]),e.r,e.dmg,e.el,e.lvl);break;case"eproj":t.spawnEProj(new P(e.p[0],e.p[1],e.p[2]),new P(e.v[0],e.v[1],e.v[2]),e.dmg,e.el,!1);break;case"tele":t.showTele(new P(e.p[0],e.p[1],e.p[2]),e.r,e.d);break;case"heal":e.to===t.pid&&t.healParty(e.v,t.pid);break;case"shield":e.to===t.pid&&t.addShield(e.v,t.pid);break;case"pull":t.role==="host"&&t.pullEnemies(new P(e.c[0],e.c[1],e.c[2]),e.r,e.k);break}}}let wi=null,mf=0;function Ei(i,e,t,n,s){if(!wi||!O.settings.sfx)return;const r=wi.currentTime,a=wi.createOscillator(),o=wi.createGain();a.type=n,a.frequency.setValueAtTime(i,r),a.frequency.exponentialRampToValueAtTime(Math.max(20,e),r+t),o.gain.setValueAtTime(s,r),o.gain.exponentialRampToValueAtTime(.001,r+t),a.connect(o).connect(wi.destination),a.start(r),a.stop(r+t)}function xy(){const i=()=>{if(!wi)try{wi=new AudioContext}catch{}wi?.resume()};addEventListener("pointerdown",i,{passive:!0}),se.on("sfx",e=>{if(e==="ui"&&Ei(660,990,.08,"square",.04),e==="hit"){const t=performance.now();if(t-mf<60)return;mf=t,Ei(220,80,.09,"square",.05)}e==="skill"&&Ei(400,1200,.2,"sawtooth",.04),e==="burst"&&(Ei(200,900,.5,"sawtooth",.05),Ei(300,1500,.5,"triangle",.04)),e==="chest"&&[523,659,784,1046].forEach((t,n)=>setTimeout(()=>Ei(t,t,.12,"triangle",.06),n*80)),e==="react"&&Ei(880,300,.25,"triangle",.06),e==="wish"&&[392,523,659,784,1046,1318].forEach((t,n)=>setTimeout(()=>Ei(t,t*1.01,.25,"triangle",.05),n*110))}),se.on("burst",()=>se.emit("sfx","burst")),se.on("loot",()=>se.emit("sfx","chest")),se.on("gacha",()=>se.emit("sfx","wish"))}const qi=document.getElementById("boot"),yy=qi.querySelector(".bar i"),Sl=qi.querySelector(".msg"),ta=(i,e)=>(yy.style.width=i*100+"%",Sl.textContent=e,new Promise(t=>setTimeout(t,16)));window.EL_COL=Object.fromEntries(Object.entries(_t).map(([i,e])=>[i,e.color]));async function by(){window.NINJIN_BOOTED=!0,await ta(.1,"セーブデータを読み込み中…");const i=pu();_l(),await ta(.3,"エフェクトを読み込み中…"),await Iv("./fx/"),await ta(.6,"世界を作っています…");const e=new Bx(document.getElementById("gl")),t=new Xx(e),n=new Hx(e,(h,d)=>t.open(h,d)),s=new Vx(document.getElementById("overlay"),e),r=new vy(e);window.NINJIN_NET=r,window.NINJIN=e,window.NINJIN_DBG={S:O,POIS:At,byId:Qt,resolveTarget:gl,addChar:Ia},xy();for(let h=0;h<14;h++)e.view.update(e.player.pos.x,e.player.pos.z,0);e.render(.016),await ta(1,"準備完了"),qi.classList.add("ready"),Sl.textContent="タップしてはじめる";const a=()=>{qi.removeEventListener("pointerdown",a),qi.classList.add("out"),setTimeout(()=>qi.remove(),600);try{matchMedia("(pointer:coarse)").matches&&(document.documentElement.requestFullscreen?.().catch(()=>{}),screen.orientation?.lock?.("landscape").catch(()=>{}))}catch{}se.emit("sfx","ui"),O.flags.intro?i&&se.emit("toast","おかえりなさい！"):(O.flags.intro=1,et(),se.emit("dialog",Dx,()=>{}))};qi.addEventListener("pointerdown",a);let o=performance.now(),c=60;const l=h=>{const d=Math.min(100,h-o);o=h;const f=Math.min(.05,d/1e3);c=c*.95+1e3/Math.max(1,d)*.05,e.paused&&e.role==="solo"?e.render(0):e.update(f);const u=e.gfx.q;e.gfx.sample(d,h),u!==e.gfx.q&&e.applyQuality(),n.update(f,c),s.draw(e.paused&&e.role==="solo"?0:f),requestAnimationFrame(l)};requestAnimationFrame(l),addEventListener("visibilitychange",()=>{document.hidden&&(O.pos={x:e.player.pos.x,y:e.player.pos.y,z:e.player.pos.z},_r(!0))}),addEventListener("pagehide",()=>_r(!0))}by().catch(i=>{Sl.textContent="エラー："+i,console.error(i)});const My=S("div",{id:"rotate"},S("div",{},"↻"),S("p",{},"スマホを横向きにしてね"));document.body.append(My);"serviceWorker"in navigator&&location.protocol==="https:"&&addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
