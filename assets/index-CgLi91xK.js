(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`http://www.w3.org/2000/svg`,t=[`#ff595e`,`#ff924c`,`#ffca3a`,`#8ac926`,`#2ec4b6`,`#1982c4`,`#4267ac`,`#6a4c93`,`#e05ebd`,`#f4845f`],n=e=>t[(e-1)%t.length],r=[{id:`bunt`,name:`Bunter Zug`,country:`Zahlenzug`,speech:`Der bunte Zug!`,accent:`#ff924c`,steam:!0,flag:`<svg viewBox="0 0 30 20"><rect width="30" height="20" rx="2" fill="#fff"/>
      ${t.slice(0,6).map((e,t)=>`<circle cx="${6+t%3*9}" cy="${6+Math.floor(t/3)*8}" r="3.4" fill="${e}"/>`).join(``)}</svg>`},{id:`ice`,name:`ICE`,country:`Deutschland`,speech:`Der I C E aus Deutschland!`,accent:`#ec0016`,steam:!1,flag:`<svg viewBox="0 0 5 3" preserveAspectRatio="none"><rect width="5" height="1" fill="#000"/><rect y="1" width="5" height="1" fill="#dd0000"/><rect y="2" width="5" height="1" fill="#ffce00"/></svg>`},{id:`tgv`,name:`TGV`,country:`Frankreich`,speech:`Der T G V aus Frankreich!`,accent:`#f07a1a`,steam:!1,flag:`<svg viewBox="0 0 3 2"><rect width="1" height="2" fill="#002654"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#ed2939"/></svg>`},{id:`shinkansen`,name:`Shinkansen`,country:`Japan`,speech:`Der Shinkansen aus Japan!`,accent:`#1d4fa3`,steam:!1,flag:`<svg viewBox="0 0 3 2"><rect width="3" height="2" fill="#fff"/><circle cx="1.5" cy="1" r="0.6" fill="#bc002d"/></svg>`}];function i(e,t){let n=parseInt(e.slice(1),16),r=e=>{let r=n>>e&255;return Math.round(t<0?r*(1+t):r+(255-r)*t)};return`rgb(${r(16)},${r(8)},${r(0)})`}function a(t,n,r){let i=document.createElementNS(e,`svg`);return i.setAttribute(`viewBox`,t),i.setAttribute(`class`,n),i.innerHTML=r,i}function o(e,t,n){return`<g class="wheel">
    <circle cx="${e}" cy="${t}" r="${n}" fill="#333" stroke="#111" stroke-width="2"/>
    <path d="M${e-n+3} ${t}H${e+n-3}M${e} ${t-n+3}V${t+n-3}" stroke="#aaa" stroke-width="2.5"/>
    <circle cx="${e}" cy="${t}" r="${Math.min(3.5,n/3)}" fill="#ddd"/>
  </g>`}var s=(...e)=>e.map(e=>o(e,90,8)).join(``),c=`<defs><linearGradient id="tgv-stripe">
  <stop offset="0" stop-color="#1f7a3c"/><stop offset="1" stop-color="#5fbf3f"/></linearGradient></defs>`,l=`<path d="M94,36 L102,27 L112,31 M97,27 H114" stroke="#555" stroke-width="2.2" fill="none" stroke-linecap="round"/>`,u={bunt:`
    <polygon points="2,92 16,64 16,92" fill="#555"/>
    <rect x="22" y="14" width="18" height="30" fill="#333"/>
    <rect x="17" y="10" width="28" height="9" rx="3" fill="#222"/>
    <rect x="12" y="40" width="80" height="40" rx="12" fill="#e63946" stroke="#a4262f" stroke-width="2"/>
    <rect x="14" y="54" width="76" height="5" fill="#ffd166"/>
    <circle cx="62" cy="40" r="9" fill="#ffd166" stroke="#c99a2e" stroke-width="2"/>
    <circle cx="16" cy="60" r="6" fill="#fff6b0" stroke="#c99a2e" stroke-width="2"/>
    <rect x="86" y="20" width="48" height="60" rx="6" fill="#1d6fd6" stroke="#124a91" stroke-width="2"/>
    <rect x="80" y="12" width="60" height="11" rx="4" fill="#123e7a"/>
    <rect x="96" y="30" width="28" height="22" rx="5" fill="#cdeeff" stroke="#124a91" stroke-width="2"/>
    <rect x="6" y="78" width="132" height="8" rx="3" fill="#333"/>
    <rect x="134" y="72" width="8" height="6" fill="#444"/>
    ${o(36,86,12)}${o(68,86,12)}${o(112,86,12)}`,ice:`
    ${l}
    <rect x="12" y="78" width="126" height="8" rx="3" fill="#555"/>
    <path d="M4,76 C4,60 18,46 46,38 Q53,36 60,36 L134,36 Q139,36 139,41 L139,78 L8,78 Q4,78 4,76Z"
      fill="#f7f7f7" stroke="#9aa0a6" stroke-width="2"/>
    <path d="M20,55 C26,47 38,41 52,40 L58,40 L58,55 Z" fill="#2b2f36"/>
    <rect x="66" y="43" width="66" height="12" rx="3" fill="#2b2f36"/>
    <path d="M8,65 L139,65 L139,71 L6,71 Z" fill="#ec0016"/>
    <ellipse cx="13" cy="60" rx="4" ry="2.4" fill="#fff6b0" stroke="#999"/>
    <rect x="138" y="72" width="4" height="6" fill="#444"/>
    ${s(28,46,108,126)}`,tgv:`
    ${c}${l}
    <rect x="12" y="78" width="126" height="8" rx="3" fill="#555"/>
    <path d="M4,76 C6,58 26,42 62,36 L134,36 Q139,36 139,41 L139,78 L8,78 Q4,78 4,76Z"
      fill="#f47b20" stroke="#b5520c" stroke-width="2"/>
    <path d="M16,57 C24,47 40,41 62,39 L139,39 L139,56 L16,57 Z" fill="#1f5d36"/>
    <path d="M24,55 C30,48 40,44 54,42 L56,55 Z" fill="#9fd3b0"/>
    <path d="M9,62 L139,62 L139,69 L7,69 Z" fill="url(#tgv-stripe)"/>
    <ellipse cx="12" cy="66" rx="4" ry="2.4" fill="#fff6b0" stroke="#999"/>
    <rect x="138" y="72" width="4" height="6" fill="#444"/>
    ${s(28,46,108,126)}`,shinkansen:`
    <rect x="96" y="31" width="22" height="6" rx="3" fill="#cfd4da"/>
    <rect x="12" y="78" width="126" height="8" rx="3" fill="#555"/>
    <path d="M2,78 L2,74 C16,72 34,66 48,53 C60,42 72,36 90,36 L134,36 Q139,36 139,41 L139,78 Z"
      fill="#fbfbfb" stroke="#9aa0a6" stroke-width="2"/>
    <path d="M56,48 C63,42 72,39 82,39 L84,48 Z" fill="#1f2a44"/>
    <rect x="92" y="43" width="40" height="9" rx="3" fill="#1f2a44"/>
    <path d="M30,68 C40,65 50,62 58,59 L139,59 L139,66 L58,66 C48,69 40,71 30,72 Z" fill="#1d4fa3"/>
    <rect x="40" y="71" width="99" height="2.5" fill="#1d4fa3"/>
    <ellipse cx="9" cy="74" rx="4" ry="1.8" fill="#fff6b0" stroke="#999"/>
    <rect x="138" y="72" width="4" height="6" fill="#444"/>
    ${s(26,44,108,126)}`};function d(e=`bunt`){return a(`0 8 142 90`,`piece loco`,u[e])}var ee={ice:{body:`#f7f7f7`,edge:`#9aa0a6`,windows:`#2b2f36`,stripe:`#ec0016`},tgv:{body:`#f47b20`,edge:`#b5520c`,windows:`#1f5d36`,stripe:`url(#tgv-stripe)`,defs:c,plate:!0},shinkansen:{body:`#fbfbfb`,edge:`#9aa0a6`,windows:`#1f2a44`,stripe:`#1d4fa3`}};function f(e,t,n,r,i,a){return`<text x="${t}" y="${n}" text-anchor="middle" font-size="${r}" font-weight="900"
    fill="${i}" stroke="${a}" stroke-width="3" paint-order="stroke">${e}</text>`}function p(e,t=`bunt`){let r=n(e);if(t===`bunt`)return a(`0 24 100 74`,`piece wagon`,`
      <rect x="0" y="72" width="8" height="6" fill="#444"/>
      <rect x="6" y="30" width="90" height="48" rx="10" fill="${r}" stroke="${i(r,-.3)}" stroke-width="3"/>
      <rect x="10" y="34" width="82" height="8" rx="4" fill="${i(r,.35)}"/>
      ${f(e,51,72,40,`#fff`,i(r,-.45))}
      <rect x="4" y="76" width="94" height="7" rx="3" fill="#333"/>
      ${o(28,86,11)}${o(74,86,11)}`);let c=ee[t];return a(`0 24 100 74`,`piece wagon`,`${c.defs??``}
    <rect x="0" y="72" width="6" height="6" fill="#444"/>
    <rect x="6" y="78" width="90" height="8" rx="3" fill="#555"/>
    <rect x="4" y="32" width="94" height="46" rx="6" fill="${c.body}" stroke="${c.edge}" stroke-width="2"/>
    <rect x="10" y="37" width="82" height="9" rx="3" fill="${c.windows}"/>
    <rect x="5" y="47.5" width="92" height="3.5" fill="${c.stripe}"/>
    ${c.plate?`<rect x="27" y="52.5" width="48" height="25" rx="6" fill="#fff"/>`:``}
    ${f(e,51,77,34,r,i(r,-.5))}
    ${s(18,34,68,84)}`)}var m,h=!0,te=[`Null`,`Eins`,`Zwei`,`Drei`,`Vier`,`Fünf`,`Sechs`,`Sieben`,`Acht`,`Neun`,`Zehn`];function g(){m??=new AudioContext,m.state===`suspended`&&m.resume(),`speechSynthesis`in window&&speechSynthesis.speak(new SpeechSynthesisUtterance(``))}function _(e){h=e}function ne(){return speechSynthesis.getVoices().find(e=>e.lang.toLowerCase().startsWith(`de`))}function v(e){if(!h||!(`speechSynthesis`in window))return;speechSynthesis.cancel();let t=new SpeechSynthesisUtterance(e);t.lang=`de-DE`;let n=ne();return n&&(t.voice=n),t.rate=.9,t.pitch=1.15,speechSynthesis.speak(t),t}var re=e=>v(`${te[e]??e}!`);function y(e,t,n,r=`sine`,i=.2,a){if(!m)return;let o=m.currentTime+t,s=m.createOscillator(),c=m.createGain();s.type=r,s.frequency.setValueAtTime(e,o),a&&s.frequency.exponentialRampToValueAtTime(a,o+n),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(i,o+.02),c.gain.exponentialRampToValueAtTime(1e-4,o+n),s.connect(c).connect(m.destination),s.start(o),s.stop(o+n+.05)}var b={toot(){for(let e of[0,.45])y(392,e,.35,`triangle`,.18),y(494,e,.35,`triangle`,.12),y(587,e,.35,`sine`,.1)},click(){y(1400,0,.05,`square`,.08),y(900,.06,.06,`square`,.08)},boing(){y(320,0,.35,`sine`,.2,120)},pop(){y(600,0,.12,`sine`,.12,900)},fanfare(){[523,659,784,1047].forEach((e,t)=>y(e,t*.14,t===3?.6:.2,`triangle`,.18))}},x=`zahlenzug-settings`,S={max:10,choices:3,speech:!0};function ie(){try{return{...S,...JSON.parse(localStorage.getItem(x)??`{}`)}}catch{return{...S}}}function ae(e){try{localStorage.setItem(x,JSON.stringify(e))}catch{}}function C(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function oe(e,t){return C([e,...C(Array.from({length:t.max},(e,t)=>t+1).filter(t=>t!==e)).slice(0,t.choices-1)])}var se=`<svg viewBox="0 0 200 80">
  <path d="M0,80 C40,60 60,30 82,12 Q100,6 118,12 C140,30 160,60 200,80 Z" fill="#5b7fb8"/>
  <path d="M82,12 C70,24 66,26 64,28 L72,32 L80,26 L90,33 L100,26 L110,33 L120,26 L128,32 L136,28 C134,26 130,24 118,12 Q100,6 82,12 Z" fill="#fff"/>
  <path d="M100,26 L110,33 L120,26 L128,32 L136,28 C140,32 150,44 160,52 C140,48 125,40 100,26 Z" fill="#4a6ea6" opacity=".5"/>
</svg>`,ce=`<svg viewBox="0 0 60 52">
  <rect x="12" y="12" width="5" height="40" fill="#d7263d"/>
  <rect x="43" y="12" width="5" height="40" fill="#d7263d"/>
  <rect x="6" y="19" width="48" height="4" fill="#d7263d"/>
  <rect x="27.5" y="12" width="5" height="8" fill="#d7263d"/>
  <path d="M0,4 Q30,11 60,4 L58,11 Q30,16 2,11 Z" fill="#d7263d"/>
  <path d="M0,4 Q30,11 60,4 L60,6 Q30,13 0,6 Z" fill="#2b2b2b"/>
  <rect x="10" y="48" width="9" height="4" fill="#2b2b2b"/>
  <rect x="41" y="48" width="9" height="4" fill="#2b2b2b"/>
</svg>`,w=`<svg viewBox="0 0 50 56">
  <path d="M23,56 L24,34 L16,24 M24,36 L33,26" stroke="#6b4434" stroke-width="4" stroke-linecap="round" fill="none"/>
  <g fill="#ffb7cf">
    <circle cx="14" cy="20" r="10"/><circle cx="26" cy="12" r="12"/><circle cx="38" cy="20" r="10"/>
    <circle cx="22" cy="26" r="9"/><circle cx="33" cy="28" r="8"/>
  </g>
  <g fill="#ff8fb5"><circle cx="18" cy="14" r="2"/><circle cx="30" cy="8" r="2"/><circle cx="38" cy="22" r="2"/><circle cx="24" cy="24" r="2"/></g>
</svg>`,le=`<svg viewBox="0 0 60 140">
  <g fill="#8a5a3c">
    <line x1="30" y1="0" x2="30" y2="8" stroke="#8a5a3c" stroke-width="1.5"/>
    <rect x="27" y="6" width="6" height="5" rx="1"/>
    <path d="M27,11 L33,11 L35,42 L25,42 Z"/>
    <path d="M24,42 L36,42 C38,74 44,104 56,140 L46,140 C42,118 36,106 30,104 C24,106 18,118 14,140 L4,140 C16,104 22,74 24,42 Z"/>
    <rect x="20" y="64" width="20" height="4" rx="1"/>
    <rect x="11" y="94" width="38" height="5" rx="1"/>
  </g>
  <g stroke="#c48a5e" stroke-width="1" fill="none" opacity=".8">
    <path d="M26,46 L34,62 M34,46 L26,62 M23,70 L37,92 M37,70 L23,92"/>
    <path d="M28,14 L32,40 M32,14 L28,40"/>
  </g>
</svg>`,ue=`<svg viewBox="0 0 90 40">
  <g stroke="#b8a98c" stroke-width="1">
    <rect x="2" y="14" width="26" height="26" fill="#f3e6c8"/>
    <path d="M0,15 L4,6 L26,6 L30,15 Z" fill="#6c7a94"/>
    <rect x="30" y="8" width="30" height="32" fill="#efe0bd"/>
    <path d="M28,9 L33,0 L57,0 L62,9 Z" fill="#5f6d88"/>
    <rect x="62" y="16" width="26" height="24" fill="#f3e6c8"/>
    <path d="M60,17 L64,9 L86,9 L90,17 Z" fill="#6c7a94"/>
  </g>
  <g fill="#7fb0d8">
    <rect x="7" y="19" width="5" height="7"/><rect x="18" y="19" width="5" height="7"/>
    <rect x="35" y="13" width="5" height="7"/><rect x="43" y="13" width="5" height="7"/><rect x="51" y="13" width="5" height="7"/>
    <rect x="35" y="25" width="5" height="7"/><rect x="51" y="25" width="5" height="7"/>
    <rect x="67" y="21" width="5" height="7"/><rect x="78" y="21" width="5" height="7"/>
  </g>
  <rect x="43" y="28" width="5" height="12" fill="#2d4f86"/>
  <g fill="#e04a5f"><rect x="6" y="27" width="7" height="2"/><rect x="17" y="27" width="7" height="2"/><rect x="66" y="29" width="7" height="2"/></g>
</svg>`,de=`<svg viewBox="0 0 30 160">
  <rect x="14" y="0" width="2" height="30" fill="#d33"/>
  <rect x="14" y="4" width="2" height="4" fill="#fff"/><rect x="14" y="12" width="2" height="4" fill="#fff"/><rect x="14" y="20" width="2" height="4" fill="#fff"/>
  <rect x="13" y="28" width="4" height="4" fill="#c9ccd1"/>
  <rect x="12.5" y="44" width="5" height="116" fill="#c9ccd1"/>
  <circle cx="15" cy="40" r="10" fill="#b9bec6" stroke="#8e949c" stroke-width="1"/>
  <rect x="5" y="39" width="20" height="3" fill="#6f7680"/>
</svg>`,fe=`<svg viewBox="0 -20 120 100">
  <g fill="#5e8f7a">
    <rect x="45" y="0" width="30" height="6" rx="2"/>
    <circle cx="47" cy="-1" r="2.6"/><circle cx="54" cy="-2" r="2.6"/><circle cx="66" cy="-2" r="2.6"/><circle cx="73" cy="-1" r="2.6"/>
    <rect x="58" y="-10" width="4" height="11" rx="1.5"/>
    <circle cx="60" cy="-12" r="2.4"/>
    <rect x="64" y="-19" width="1.4" height="20"/>
    <path d="M61,-17 L68,-17 L66,-14 L63,-14 Z"/>
  </g>
  <g fill="#ecd8a8" stroke="#b89a62" stroke-width="1">
    <rect x="34" y="6" width="52" height="8"/>
    <rect x="2" y="14" width="116" height="12"/>
    <rect x="8" y="26" width="8" height="46"/><rect x="27" y="26" width="8" height="46"/><rect x="46" y="26" width="8" height="46"/>
    <rect x="66" y="26" width="8" height="46"/><rect x="85" y="26" width="8" height="46"/><rect x="104" y="26" width="8" height="46"/>
    <rect x="4" y="72" width="112" height="8"/>
  </g>
  <rect x="2" y="21" width="116" height="1.5" fill="#b89a62"/>
</svg>`,pe=`<svg viewBox="0 0 50 80">
  <rect x="24" y="0" width="2" height="12" fill="#6b4434"/>
  <circle cx="25" cy="4" r="1.6" fill="#e2b33c"/><circle cx="25" cy="8" r="1.6" fill="#e2b33c"/>
  ${[0,1,2,3].map(e=>{let t=12+e*16,n=12+e*3;return`<rect x="${25-n/2+3}" y="${t+4}" width="${n-6}" height="12" fill="#c0392b"/>
      <rect x="${25-n/2+6}" y="${t+7}" width="${n-12}" height="5" fill="#f6e3b4"/>
      <path d="M${25-n/2-6},${t+5} Q25,${t-2} ${25+n/2+6},${t+5} L${25+n/2+2},${t+7} L${25-n/2-2},${t+7} Z" fill="#3b3b4f"/>`}).join(``)}
  <rect x="10" y="76" width="30" height="4" fill="#8b8b8b"/>
</svg>`,me=`<svg viewBox="0 0 24 60">
  ${[3,9,15,20].map((e,t)=>`<rect x="${e}" y="${4+t*3}" width="3" height="${56-t*3}" fill="${t%2?`#5aa04a`:`#6fbf55`}"/>
    ${[18,30,42].map(n=>`<rect x="${e-.3}" y="${n+t*2}" width="3.6" height="1.2" fill="#3f7d36"/>`).join(``)}
    <path d="M${e+1.5},${12+t*3} q6,-4 9,-2 q-5,1 -9,4z M${e+1.5},${24+t*2} q-6,-4 -9,-2 q5,1 9,4z" fill="#4c9a3f"/>`).join(``)}
</svg>`,he=`<svg viewBox="0 0 12 50">
  <rect x="5" y="38" width="2" height="12" fill="#6b4434"/>
  <ellipse cx="6" cy="22" rx="5.5" ry="20" fill="#3f8a3a"/>
  <ellipse cx="4.5" cy="20" rx="2" ry="14" fill="#56a64b"/>
</svg>`,T=`<svg viewBox="0 0 60 30">
  ${[6,16,26,36,46,54].map((e,t)=>{let n=8+t%2*4;return`<path d="M${e},${n} V30" stroke="#4e8a2e" stroke-width="1.5"/>
      <ellipse cx="${e+3}" cy="${n+10}" rx="3" ry="1.5" fill="#5f9e3a"/>
      <circle cx="${e}" cy="${n}" r="5" fill="#ffc928"/>
      <circle cx="${e}" cy="${n}" r="2.4" fill="#7a4a1c"/>`}).join(``)}
</svg>`,E=`<svg viewBox="0 0 62 50">
  ${[[10,6,44],[24,0,50],[38,8,42],[51,3,47]].map(([e,t,n],r)=>`
    <rect x="${e-1.5}" y="${t+n-6}" width="3" height="6" fill="#5b3a29"/>
    <path d="M${e},${t} L${e+9},${t+n*.45} L${e+5},${t+n*.45} L${e+11},${t+n-6} L${e-11},${t+n-6} L${e-5},${t+n*.45} L${e-9},${t+n*.45} Z"
      fill="${r%2?`#2f6b3a`:`#3c7f45`}"/>`).join(``)}
</svg>`,D=(e,t,n,r)=>`
  <rect x="${e}" y="${t+12}" width="${n}" height="${34-t}" fill="${r}" stroke="#5a3a24" stroke-width="1.6"/>
  <path d="M${e},${t+24} H${e+n} M${e+n/3},${t+12} V46 M${e+2*n/3},${t+12} V46 M${e},${t+12} L${e+n/3},${t+24} M${e+n},${t+12} L${e+2*n/3},${t+24}" stroke="#5a3a24" stroke-width="1.6"/>
  <path d="M${e-3},${t+13} L${e+n/2},${t} L${e+n+3},${t+13} Z" fill="#b5462f"/>
  <rect x="${e+n/3+2}" y="${t+28}" width="${n/3-4}" height="7" fill="#8fc5e8" stroke="#5a3a24"/>
  <rect x="${e+2}" y="${t+15}" width="${n/3-4}" height="6" fill="#8fc5e8"/>`,ge=`<svg viewBox="-4 0 86 46">
  ${D(2,14,34,`#f6ecd6`)}${D(42,8,36,`#fbf3e2`)}
  <g fill="#e04a5f"><circle cx="50" cy="44" r="1.6"/><circle cx="54" cy="45" r="1.6"/><circle cx="70" cy="44" r="1.6"/></g>
</svg>`,O=`<svg viewBox="-30 -30 60 120">
  <path d="M-1.2,0 L-2.5,90 L2.5,90 L1.2,0 Z" fill="#f2f4f6" stroke="#c9ccd1" stroke-width=".6"/>
  <g class="rotor">
    ${[0,120,240].map(e=>`<path d="M0,0 L-2,-4 L0,-28 L2,-4 Z" fill="#fff" stroke="#c9ccd1" stroke-width=".6" transform="rotate(${e})"/>`).join(``)}
    <circle r="2.4" fill="#e1e4e8" stroke="#aab0b8" stroke-width=".6"/>
  </g>
</svg>`,_e=`<svg viewBox="0 0 40 56">
  <path d="M20,2 C8,2 2,12 2,20 C2,30 12,36 15,42 L25,42 C28,36 38,30 38,20 C38,12 32,2 20,2 Z" fill="#002654"/>
  <path d="M20,2 C15,2 13,12 13,20 C13,30 16,36 17,42 L23,42 C24,36 27,30 27,20 C27,12 25,2 20,2 Z" fill="#fff"/>
  <path d="M20,2 C32,2 38,12 38,20 C38,30 28,36 25,42 L23,42 C24,36 27,30 27,20 C27,12 25,2 20,2 Z" fill="#ed2939"/>
  <path d="M16,42 L17,48 M24,42 L23,48" stroke="#6b4434"/>
  <rect x="15" y="48" width="10" height="7" rx="1.5" fill="#a8743c"/>
</svg>`,ve=`<svg viewBox="0 0 24 10"><path class="wings" d="M1,7 Q6,0 12,6 Q18,0 23,7" stroke="#34495e" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,ye={bunt:[],shinkansen:[{svg:se,left:16,height:44,far:!0},{svg:me,left:0,height:20},{svg:w,left:8,height:15},{svg:w,left:40,height:9},{svg:ce,left:66,height:13},{svg:pe,left:89,height:24}],tgv:[{svg:le,left:54,height:40},...[2,5,8,11,14].map(e=>({svg:he,left:e,height:15})),{svg:T,left:22,height:9},{svg:ue,left:72,height:11},{svg:T,left:88,height:8}],ice:[{svg:de,left:28,height:46,far:!0},{svg:O,left:80,height:30,far:!0},{svg:O,left:90,height:22,far:!0},{svg:E,left:0,height:15},{svg:E,left:14,height:12},{svg:fe,left:46,height:24},{svg:ge,left:70,height:13}]},be=Array.from({length:40},(e,t)=>{let n=t*2.5+1,r=5-2.5*Math.sin(n/100*Math.PI*3);return`<path d="M${n},${r-3} L${n+1},${r} L${n-1},${r} Z" fill="${t%2?`#2d6436`:`#356f3d`}"/>`}).join(``),xe={shinkansen:`
    <path d="M0,13 L0,5 Q12,0 24,4 Q36,8 48,3 Q62,-1 74,4 Q88,8 100,3 L100,13 Z" fill="#4f9a55"/>
    <path d="M0,13 L0,8 Q20,3 38,8 Q55,12 72,7 Q86,3 100,7 L100,13 Z" fill="#6cbb5f"/>`,tgv:`
    <defs><clipPath id="vines"><path d="M0,13 L0,6 Q18,0 36,5 Q52,9 68,3 Q84,-1 100,5 L100,13 Z"/></clipPath></defs>
    <path d="M0,13 L0,6 Q18,0 36,5 Q52,9 68,3 Q84,-1 100,5 L100,13 Z" fill="#b9cf63"/>
    <g clip-path="url(#vines)" stroke="#6f9a3a" stroke-width=".7" stroke-dasharray="1 .6">
      ${Array.from({length:12},(e,t)=>`<path d="M-5,${t*1.3} L105,${t*1.3+1.5}"/>`).join(``)}
    </g>
    <path d="M0,13 L0,10 Q30,6 60,10 Q80,12 100,9 L100,13 Z" fill="#9ccc5e"/>`,ice:`
    <path d="M0,13 L0,5 Q15,1 30,4 Q45,7 60,3 Q80,0 100,5 L100,13 Z" fill="#3f7f45"/>
    ${be}
    <path d="M0,13 L0,9 Q25,5 50,9 Q75,12 100,8 L100,13 Z" fill="#6db556"/>`};function k(e,t,n,r=``){let i=Array.from({length:e+1},(t,n)=>40*(n/e)**1.35),a=(e,n)=>50+(e-t/2)*(5+n/40*17),o=``;for(let s=0;s<e;s++)for(let e=0;e<t;e++){let[t,c]=[i[s],i[s+1]];o+=`<path d="M${a(e,t)},${t} L${a(e+1,t)},${t} L${a(e+1,c)},${c} L${a(e,c)},${c} Z" fill="${n(e,s)}"${r?` stroke="${r}" stroke-width=".35"`:``}/>`}return`<svg viewBox="0 0 100 40" preserveAspectRatio="none">${o}</svg>`}var A=[`#ffd93b`,`#7cc35a`,`#c9a66b`,`#a6d86b`,`#ffe066`,`#5fae4f`],Se={shinkansen:k(9,14,(e,t)=>(e*7+t*3)%5==0?`#9fd8ea`:(e+t)%2?`#8ed26b`:`#7fc65f`,`#b89a6a`),tgv:k(1,30,e=>e%2?`#9a7bd4`:`#86b85a`),ice:k(6,10,(e,t)=>A[(e*5+t*3)%A.length],`#6b9a4a`)};function Ce(e){if(e===`bunt`)return``;let t=[0,1,2].map(e=>`<div class="bird" style="top:${8+e*5}vh;animation-delay:${-e*9-3}s;animation-duration:${26+e*5}s">${ve}</div>`).join(``);return e===`shinkansen`?t+Array.from({length:16},(e,t)=>`<div class="petal" style="left:${t*37%100}vw;animation-delay:${-t*1.3}s;animation-duration:${9+t%5*2}s"></div>`).join(``):e===`tgv`?t+`<div class="balloon">${_e}</div>`:t}function we(e){let t=document.querySelector(`.scene`);e===`bunt`?delete t.dataset.theme:t.dataset.theme=e;for(let n of[`far`,`near`]){let r=t.querySelector(`.landmarks.${n}`);r.innerHTML=``;for(let t of ye[e].filter(e=>!!e.far==(n===`far`))){let e=document.createElement(`div`);e.className=`landmark`,e.style.left=`${t.left}vw`,e.style.height=`${t.height}vh`,e.innerHTML=t.svg,r.append(e)}}let n=xe[e];t.querySelector(`.hills`).innerHTML=n?`<svg viewBox="0 0 100 13" preserveAspectRatio="none">${n}</svg>`:``,t.querySelector(`.field`).innerHTML=Se[e]??``,t.querySelector(`.fx`).innerHTML=Ce(e)}var j=e=>document.querySelector(e),M=j(`#train`),N=j(`#choices`),P=j(`#overlay`),F=j(`#settings`),I=e=>new Promise(t=>setTimeout(t,e)),L=ie();_(L.speech);var R=1,z=!0,B=0,V=0,H=0,U=r[0];function W(){let e=innerWidth,t=innerHeight,n=Math.min(e*.94/(L.max+1.6),t*.24),r=Math.min(e*(L.choices===2?.32:.27),(t*.35-24)/1);document.documentElement.style.setProperty(`--u`,`${n}px`),document.documentElement.style.setProperty(`--c`,`${r}px`)}function Te(e){let t=document.createElement(`div`);t.className=`dots`;for(let r=0;r<e;r++){let r=document.createElement(`span`);r.style.background=n(e),t.append(r)}return t}async function G(){let e=++H;z=!0,R=1,N.innerHTML=``,M.innerHTML=``,M.getAnimations().forEach(e=>e.cancel()),M.append(d(U.id)),M.classList.add(`driving`),b.toot(),await M.animate([{transform:`translateX(${innerWidth}px)`},{transform:`translateX(0)`}],{duration:1800,easing:`cubic-bezier(.2,.7,.3,1)`}).finished,e===H&&(M.classList.remove(`driving`),K())}function K(){N.innerHTML=``,B=0,oe(R,L).forEach((e,t)=>{let n=document.createElement(`button`);n.className=`choice`,n.dataset.n=String(e),n.append(p(e,U.id),Te(e)),n.addEventListener(`pointerdown`,()=>Ee(e,n)),n.animate([{transform:`scale(0)`,opacity:0},{transform:`scale(1.1)`,offset:.7},{transform:`scale(1)`,opacity:1}],{duration:400,delay:t*120,fill:`backwards`,easing:`ease-out`}),N.append(n)}),setTimeout(b.pop,0),z=!1,clearTimeout(V),V=window.setTimeout(q,6e3)}function q(){N.querySelector(`[data-n="${R}"]`)?.classList.add(`hint`)}function Ee(e,t){z||(e===R?(z=!0,clearTimeout(V),De(e,t)):(b.boing(),t.classList.remove(`wobble`),t.offsetWidth,t.classList.add(`wobble`),++B>=2&&q()))}async function De(e,t){let r=t.querySelector(`svg`);for(let e of N.querySelectorAll(`.choice`))e!==t&&e.animate([{opacity:1},{opacity:0}],{duration:250,fill:`forwards`});let i=p(e,U.id);i.style.visibility=`hidden`,M.append(i);let a=r.getBoundingClientRect(),o=i.getBoundingClientRect(),s=p(e,U.id);s.classList.add(`flyer`),Object.assign(s.style,{left:`${a.left}px`,top:`${a.top}px`,width:`${a.width}px`,height:`${a.height}px`}),document.body.append(s),r.style.visibility=`hidden`,t.classList.remove(`hint`);let c=o.left-a.left,l=o.top-a.top,u=o.width/a.width;await s.animate([{transform:`translate(0,0) scale(1)`},{transform:`translate(${c*.5}px, ${l*.5-innerHeight*.12}px) scale(${(1+u)/2})`,offset:.5},{transform:`translate(${c}px, ${l}px) scale(${u})`}],{duration:850,easing:`ease-in-out`}).finished,s.remove(),i.style.visibility=``,b.click(),re(e),Oe(i.getBoundingClientRect(),n(e)),M.animate([{transform:`translateX(0)`},{transform:`translateX(-6px)`},{transform:`translateX(0)`}],{duration:250}),t.animate([{opacity:1},{opacity:0}],{duration:200,fill:`forwards`}),R++,R>L.max?je():(await I(900),K())}function Oe(e,t){let n=e.left+e.width/2,r=e.top+e.height/2;for(let i=0;i<9;i++){let a=document.createElement(`div`);a.className=`star`,a.textContent=`★`,a.style.color=i%2?t:`#ffd166`,a.style.left=`${n}px`,a.style.top=`${r}px`,document.body.append(a);let o=i/9*Math.PI*2,s=e.width*(.9+Math.random()*.6);a.animate([{transform:`translate(-50%,-50%) scale(.3)`,opacity:1},{transform:`translate(calc(-50% + ${Math.cos(o)*s}px), calc(-50% + ${Math.sin(o)*s}px)) scale(1.2) rotate(180deg)`,opacity:0}],{duration:800,easing:`ease-out`}).finished.then(()=>a.remove())}}function ke(){let e=[`#ff595e`,`#ffca3a`,`#8ac926`,`#1982c4`,`#6a4c93`,`#e05ebd`];for(let t=0;t<70;t++){let n=document.createElement(`div`);n.className=`confetti`,n.style.left=`${Math.random()*100}vw`,n.style.background=e[t%e.length],document.body.append(n),n.animate([{transform:`translateY(-5vh) rotate(0deg)`},{transform:`translate(${(Math.random()-.5)*30}vw, 105vh) rotate(${Math.random()*1080}deg)`}],{duration:2200+Math.random()*1800,delay:Math.random()*600,easing:`ease-in`,fill:`backwards`}).finished.then(()=>n.remove())}}function Ae(){let e=M.querySelector(`.loco`);if(!e)return;let t=e.getBoundingClientRect(),n=document.createElement(`div`);n.className=`puff`,n.style.left=`${t.left+t.width*(31/142)}px`,n.style.top=`${t.top}px`,n.style.width=n.style.height=`${t.width*.25}px`,document.body.append(n),n.animate([{transform:`translate(-50%,-50%) scale(.4)`,opacity:.9},{transform:`translate(-50%, -${t.height*1.5}px) scale(1.8)`,opacity:0}],{duration:1200,easing:`ease-out`}).finished.then(()=>n.remove())}async function je(){let e=H;if(await I(700),N.innerHTML=``,b.fanfare(),v(`Super gemacht!`),ke(),await I(1600),e!==H)return;b.toot(),M.classList.add(`driving`);let t=setInterval(()=>U.steam&&Ae(),220),n=M.getBoundingClientRect().right;await M.animate([{transform:`translateX(0)`},{transform:`translateX(${-n-40}px)`}],{duration:3800,easing:`cubic-bezier(.5,0,.8,.6)`,fill:`forwards`}).finished,clearInterval(t),M.classList.remove(`driving`),e===H&&Pe()}function Me(){let e=j(`#picker`);r.forEach((t,n)=>{let r=document.createElement(`button`);r.className=`tile`,r.setAttribute(`role`,`listitem`),r.setAttribute(`aria-label`,`${t.name} – ${t.country}`),r.style.setProperty(`--accent`,t.accent),r.style.animationDelay=`${n*.25}s`;let i=document.createElement(`div`);i.className=`tile-pic`,i.append(d(t.id),p(1,t.id));let a=document.createElement(`div`);a.className=`flag`,a.innerHTML=t.flag;let o=document.createElement(`div`);o.className=`tile-label`,o.innerHTML=`<b>${t.name}</b><span>${t.country}</span>`,r.append(a,i,o),r.addEventListener(`click`,()=>Y(t,r)),e.append(r)})}var J=!1;async function Y(e,t){J||(J=!0,g(),document.documentElement.requestFullscreen?.().then(()=>screen.orientation.lock?.(`landscape`)).catch(()=>{}),U=e,b.pop(),v(e.speech),await t.animate([{transform:`scale(1)`},{transform:`scale(1.15)`},{transform:`scale(1)`}],{duration:450,easing:`ease-out`}).finished,we(e.id),P.classList.add(`hidden`),J=!1,G())}var Ne=`Wähle deinen Zug aus!`,X=!1;function Z(){v(Ne)?.addEventListener(`start`,()=>X=!0)}function Pe(){P.classList.remove(`hidden`),Z()}P.addEventListener(`pointerdown`,e=>{X||e.target.closest(`.tile`)||(g(),Z())}),Me(),setTimeout(Z,400);var Q=0,$=j(`#settings-btn`);$.addEventListener(`pointerdown`,()=>{Q=window.setTimeout(()=>{let e=F.querySelector(`form`);e.elements.namedItem(`max`).value=String(L.max),e.elements.namedItem(`choices`).value=String(L.choices),e.elements.namedItem(`speech`).value=L.speech?`1`:`0`,F.showModal()},1e3)});for(let e of[`pointerup`,`pointerleave`,`pointercancel`])$.addEventListener(e,()=>clearTimeout(Q));F.addEventListener(`close`,()=>{let e=F.querySelector(`form`);L={max:Number(e.elements.namedItem(`max`).value),choices:Number(e.elements.namedItem(`choices`).value),speech:e.elements.namedItem(`speech`).value===`1`},ae(L),_(L.speech),W(),P.classList.contains(`hidden`)&&G()}),document.addEventListener(`contextmenu`,e=>e.preventDefault()),addEventListener(`resize`,W),W(),`serviceWorker`in navigator&&!(`Capacitor`in window)&&location.protocol===`https:`&&navigator.serviceWorker.register(`sw.js`).catch(()=>{});