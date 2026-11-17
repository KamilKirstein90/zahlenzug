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
    ${s(26,44,108,126)}`};function d(e=`bunt`){return a(`0 8 142 90`,`piece loco`,u[e])}var f={ice:{body:`#f7f7f7`,edge:`#9aa0a6`,windows:`#2b2f36`,stripe:`#ec0016`},tgv:{body:`#f47b20`,edge:`#b5520c`,windows:`#1f5d36`,stripe:`url(#tgv-stripe)`,defs:c,plate:!0},shinkansen:{body:`#fbfbfb`,edge:`#9aa0a6`,windows:`#1f2a44`,stripe:`#1d4fa3`}};function p(e,t,n,r,i,a){return`<text x="${t}" y="${n}" text-anchor="middle" font-size="${r}" font-weight="900"
    fill="${i}" stroke="${a}" stroke-width="3" paint-order="stroke">${e}</text>`}function m(e,t=`bunt`){let r=n(e);if(t===`bunt`)return a(`0 24 100 74`,`piece wagon`,`
      <rect x="0" y="72" width="8" height="6" fill="#444"/>
      <rect x="6" y="30" width="90" height="48" rx="10" fill="${r}" stroke="${i(r,-.3)}" stroke-width="3"/>
      <rect x="10" y="34" width="82" height="8" rx="4" fill="${i(r,.35)}"/>
      ${p(e,51,72,40,`#fff`,i(r,-.45))}
      <rect x="4" y="76" width="94" height="7" rx="3" fill="#333"/>
      ${o(28,86,11)}${o(74,86,11)}`);let c=f[t];return a(`0 24 100 74`,`piece wagon`,`${c.defs??``}
    <rect x="0" y="72" width="6" height="6" fill="#444"/>
    <rect x="6" y="78" width="90" height="8" rx="3" fill="#555"/>
    <rect x="4" y="32" width="94" height="46" rx="6" fill="${c.body}" stroke="${c.edge}" stroke-width="2"/>
    <rect x="10" y="37" width="82" height="9" rx="3" fill="${c.windows}"/>
    <rect x="5" y="47.5" width="92" height="3.5" fill="${c.stripe}"/>
    ${c.plate?`<rect x="27" y="52.5" width="48" height="25" rx="6" fill="#fff"/>`:``}
    ${p(e,51,77,34,r,i(r,-.5))}
    ${s(18,34,68,84)}`)}var h,g=!0,_=[`Null`,`Eins`,`Zwei`,`Drei`,`Vier`,`Fünf`,`Sechs`,`Sieben`,`Acht`,`Neun`,`Zehn`];function v(){h??=new AudioContext,h.state===`suspended`&&h.resume(),`speechSynthesis`in window&&speechSynthesis.speak(new SpeechSynthesisUtterance(``))}function y(e){g=e}function b(){return speechSynthesis.getVoices().find(e=>e.lang.toLowerCase().startsWith(`de`))}function x(e){if(!g||!(`speechSynthesis`in window))return;speechSynthesis.cancel();let t=new SpeechSynthesisUtterance(e);t.lang=`de-DE`;let n=b();return n&&(t.voice=n),t.rate=.9,t.pitch=1.15,speechSynthesis.speak(t),t}var ee=e=>x(`${_[e]??e}!`);function S(e,t,n,r=`sine`,i=.2,a){if(!h)return;let o=h.currentTime+t,s=h.createOscillator(),c=h.createGain();s.type=r,s.frequency.setValueAtTime(e,o),a&&s.frequency.exponentialRampToValueAtTime(a,o+n),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(i,o+.02),c.gain.exponentialRampToValueAtTime(1e-4,o+n),s.connect(c).connect(h.destination),s.start(o),s.stop(o+n+.05)}var C={toot(){for(let e of[0,.45])S(392,e,.35,`triangle`,.18),S(494,e,.35,`triangle`,.12),S(587,e,.35,`sine`,.1)},click(){S(1400,0,.05,`square`,.08),S(900,.06,.06,`square`,.08)},boing(){S(320,0,.35,`sine`,.2,120)},pop(){S(600,0,.12,`sine`,.12,900)},fanfare(){[523,659,784,1047].forEach((e,t)=>S(e,t*.14,t===3?.6:.2,`triangle`,.18))}},w=`zahlenzug-settings`,T={max:10,choices:3,speech:!0};function te(){try{return{...T,...JSON.parse(localStorage.getItem(w)??`{}`)}}catch{return{...T}}}function ne(e){try{localStorage.setItem(w,JSON.stringify(e))}catch{}}function E(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function re(e,t){return E([e,...E(Array.from({length:t.max},(e,t)=>t+1).filter(t=>t!==e)).slice(0,t.choices-1)])}var ie={bunt:[],shinkansen:[{svg:`<svg viewBox="0 0 200 80">
  <path d="M0,80 C40,60 60,30 82,12 Q100,6 118,12 C140,30 160,60 200,80 Z" fill="#5b7fb8"/>
  <path d="M82,12 C70,24 66,26 64,28 L72,32 L80,26 L90,33 L100,26 L110,33 L120,26 L128,32 L136,28 C134,26 130,24 118,12 Q100,6 82,12 Z" fill="#fff"/>
  <path d="M100,26 L110,33 L120,26 L128,32 L136,28 C140,32 150,44 160,52 C140,48 125,40 100,26 Z" fill="#4a6ea6" opacity=".5"/>
</svg>`,left:16,height:44,far:!0},{svg:`<svg viewBox="0 0 50 56">
  <path d="M23,56 L24,34 L16,24 M24,36 L33,26" stroke="#6b4434" stroke-width="4" stroke-linecap="round" fill="none"/>
  <g fill="#ffb7cf">
    <circle cx="14" cy="20" r="10"/><circle cx="26" cy="12" r="12"/><circle cx="38" cy="20" r="10"/>
    <circle cx="22" cy="26" r="9"/><circle cx="33" cy="28" r="8"/>
  </g>
  <g fill="#ff8fb5"><circle cx="18" cy="14" r="2"/><circle cx="30" cy="8" r="2"/><circle cx="38" cy="22" r="2"/><circle cx="24" cy="24" r="2"/></g>
</svg>`,left:6,height:14},{svg:`<svg viewBox="0 0 60 52">
  <rect x="12" y="12" width="5" height="40" fill="#d7263d"/>
  <rect x="43" y="12" width="5" height="40" fill="#d7263d"/>
  <rect x="6" y="19" width="48" height="4" fill="#d7263d"/>
  <rect x="27.5" y="12" width="5" height="8" fill="#d7263d"/>
  <path d="M0,4 Q30,11 60,4 L58,11 Q30,16 2,11 Z" fill="#d7263d"/>
  <path d="M0,4 Q30,11 60,4 L60,6 Q30,13 0,6 Z" fill="#2b2b2b"/>
  <rect x="10" y="48" width="9" height="4" fill="#2b2b2b"/>
  <rect x="41" y="48" width="9" height="4" fill="#2b2b2b"/>
</svg>`,left:74,height:13}],tgv:[{svg:`<svg viewBox="0 0 60 140">
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
</svg>`,left:54,height:40},{svg:`<svg viewBox="0 0 90 40">
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
</svg>`,left:74,height:10}],ice:[{svg:`<svg viewBox="0 0 30 160">
  <rect x="14" y="0" width="2" height="30" fill="#d33"/>
  <rect x="14" y="4" width="2" height="4" fill="#fff"/><rect x="14" y="12" width="2" height="4" fill="#fff"/><rect x="14" y="20" width="2" height="4" fill="#fff"/>
  <rect x="13" y="28" width="4" height="4" fill="#c9ccd1"/>
  <rect x="12.5" y="44" width="5" height="116" fill="#c9ccd1"/>
  <circle cx="15" cy="40" r="10" fill="#b9bec6" stroke="#8e949c" stroke-width="1"/>
  <rect x="5" y="39" width="20" height="3" fill="#6f7680"/>
</svg>`,left:28,height:46,far:!0},{svg:`<svg viewBox="0 -20 120 100">
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
</svg>`,left:48,height:24}]};function D(e){let t=document.querySelector(`.scene`);t.dataset.theme=e;for(let n of[`far`,`near`]){let r=t.querySelector(`.landmarks.${n}`);r.innerHTML=``;for(let t of ie[e].filter(e=>!!e.far==(n===`far`))){let e=document.createElement(`div`);e.className=`landmark`,e.style.left=`${t.left}vw`,e.style.height=`${t.height}vh`,e.innerHTML=t.svg,r.append(e)}}}var O=e=>document.querySelector(e),k=O(`#train`),A=O(`#choices`),j=O(`#overlay`),M=O(`#settings`),N=e=>new Promise(t=>setTimeout(t,e)),P=te();y(P.speech);var F=1,I=!0,L=0,R=0,z=0,B=r[0];function V(){let e=innerWidth,t=innerHeight,n=Math.min(e*.94/(P.max+1.6),t*.24),r=Math.min(e*(P.choices===2?.32:.27),(t*.35-24)/1);document.documentElement.style.setProperty(`--u`,`${n}px`),document.documentElement.style.setProperty(`--c`,`${r}px`)}function H(e){let t=document.createElement(`div`);t.className=`dots`;for(let r=0;r<e;r++){let r=document.createElement(`span`);r.style.background=n(e),t.append(r)}return t}async function U(){let e=++z;I=!0,F=1,A.innerHTML=``,k.innerHTML=``,k.getAnimations().forEach(e=>e.cancel()),k.append(d(B.id)),k.classList.add(`driving`),C.toot(),await k.animate([{transform:`translateX(${innerWidth}px)`},{transform:`translateX(0)`}],{duration:1800,easing:`cubic-bezier(.2,.7,.3,1)`}).finished,e===z&&(k.classList.remove(`driving`),W())}function W(){A.innerHTML=``,L=0,re(F,P).forEach((e,t)=>{let n=document.createElement(`button`);n.className=`choice`,n.dataset.n=String(e),n.append(m(e,B.id),H(e)),n.addEventListener(`pointerdown`,()=>K(e,n)),n.animate([{transform:`scale(0)`,opacity:0},{transform:`scale(1.1)`,offset:.7},{transform:`scale(1)`,opacity:1}],{duration:400,delay:t*120,fill:`backwards`,easing:`ease-out`}),A.append(n)}),setTimeout(C.pop,0),I=!1,clearTimeout(R),R=window.setTimeout(G,6e3)}function G(){A.querySelector(`[data-n="${F}"]`)?.classList.add(`hint`)}function K(e,t){I||(e===F?(I=!0,clearTimeout(R),q(e,t)):(C.boing(),t.classList.remove(`wobble`),t.offsetWidth,t.classList.add(`wobble`),++L>=2&&G()))}async function q(e,t){let r=t.querySelector(`svg`);for(let e of A.querySelectorAll(`.choice`))e!==t&&e.animate([{opacity:1},{opacity:0}],{duration:250,fill:`forwards`});let i=m(e,B.id);i.style.visibility=`hidden`,k.append(i);let a=r.getBoundingClientRect(),o=i.getBoundingClientRect(),s=m(e,B.id);s.classList.add(`flyer`),Object.assign(s.style,{left:`${a.left}px`,top:`${a.top}px`,width:`${a.width}px`,height:`${a.height}px`}),document.body.append(s),r.style.visibility=`hidden`,t.classList.remove(`hint`);let c=o.left-a.left,l=o.top-a.top,u=o.width/a.width;await s.animate([{transform:`translate(0,0) scale(1)`},{transform:`translate(${c*.5}px, ${l*.5-innerHeight*.12}px) scale(${(1+u)/2})`,offset:.5},{transform:`translate(${c}px, ${l}px) scale(${u})`}],{duration:850,easing:`ease-in-out`}).finished,s.remove(),i.style.visibility=``,C.click(),ee(e),J(i.getBoundingClientRect(),n(e)),k.animate([{transform:`translateX(0)`},{transform:`translateX(-6px)`},{transform:`translateX(0)`}],{duration:250}),t.animate([{opacity:1},{opacity:0}],{duration:200,fill:`forwards`}),F++,F>P.max?se():(await N(900),W())}function J(e,t){let n=e.left+e.width/2,r=e.top+e.height/2;for(let i=0;i<9;i++){let a=document.createElement(`div`);a.className=`star`,a.textContent=`★`,a.style.color=i%2?t:`#ffd166`,a.style.left=`${n}px`,a.style.top=`${r}px`,document.body.append(a);let o=i/9*Math.PI*2,s=e.width*(.9+Math.random()*.6);a.animate([{transform:`translate(-50%,-50%) scale(.3)`,opacity:1},{transform:`translate(calc(-50% + ${Math.cos(o)*s}px), calc(-50% + ${Math.sin(o)*s}px)) scale(1.2) rotate(180deg)`,opacity:0}],{duration:800,easing:`ease-out`}).finished.then(()=>a.remove())}}function ae(){let e=[`#ff595e`,`#ffca3a`,`#8ac926`,`#1982c4`,`#6a4c93`,`#e05ebd`];for(let t=0;t<70;t++){let n=document.createElement(`div`);n.className=`confetti`,n.style.left=`${Math.random()*100}vw`,n.style.background=e[t%e.length],document.body.append(n),n.animate([{transform:`translateY(-5vh) rotate(0deg)`},{transform:`translate(${(Math.random()-.5)*30}vw, 105vh) rotate(${Math.random()*1080}deg)`}],{duration:2200+Math.random()*1800,delay:Math.random()*600,easing:`ease-in`,fill:`backwards`}).finished.then(()=>n.remove())}}function oe(){let e=k.querySelector(`.loco`);if(!e)return;let t=e.getBoundingClientRect(),n=document.createElement(`div`);n.className=`puff`,n.style.left=`${t.left+t.width*(31/142)}px`,n.style.top=`${t.top}px`,n.style.width=n.style.height=`${t.width*.25}px`,document.body.append(n),n.animate([{transform:`translate(-50%,-50%) scale(.4)`,opacity:.9},{transform:`translate(-50%, -${t.height*1.5}px) scale(1.8)`,opacity:0}],{duration:1200,easing:`ease-out`}).finished.then(()=>n.remove())}async function se(){let e=z;if(await N(700),A.innerHTML=``,C.fanfare(),x(`Super gemacht!`),ae(),await N(1600),e!==z)return;C.toot(),k.classList.add(`driving`);let t=setInterval(()=>B.steam&&oe(),220),n=k.getBoundingClientRect().right;await k.animate([{transform:`translateX(0)`},{transform:`translateX(${-n-40}px)`}],{duration:3800,easing:`cubic-bezier(.5,0,.8,.6)`,fill:`forwards`}).finished,clearInterval(t),k.classList.remove(`driving`),e===z&&de()}function ce(){let e=O(`#picker`);r.forEach((t,n)=>{let r=document.createElement(`button`);r.className=`tile`,r.setAttribute(`role`,`listitem`),r.setAttribute(`aria-label`,`${t.name} – ${t.country}`),r.style.setProperty(`--accent`,t.accent),r.style.animationDelay=`${n*.25}s`;let i=document.createElement(`div`);i.className=`tile-pic`,i.append(d(t.id),m(1,t.id));let a=document.createElement(`div`);a.className=`flag`,a.innerHTML=t.flag;let o=document.createElement(`div`);o.className=`tile-label`,o.innerHTML=`<b>${t.name}</b><span>${t.country}</span>`,r.append(a,i,o),r.addEventListener(`click`,()=>le(t,r)),e.append(r)})}var Y=!1;async function le(e,t){Y||(Y=!0,v(),document.documentElement.requestFullscreen?.().then(()=>screen.orientation.lock?.(`landscape`)).catch(()=>{}),B=e,C.pop(),x(e.speech),await t.animate([{transform:`scale(1)`},{transform:`scale(1.15)`},{transform:`scale(1)`}],{duration:450,easing:`ease-out`}).finished,D(e.id),j.classList.add(`hidden`),Y=!1,U())}var ue=`Wähle deinen Zug aus!`,X=!1;function Z(){x(ue)?.addEventListener(`start`,()=>X=!0)}function de(){j.classList.remove(`hidden`),Z()}j.addEventListener(`pointerdown`,e=>{X||e.target.closest(`.tile`)||(v(),Z())}),ce(),setTimeout(Z,400);var Q=0,$=O(`#settings-btn`);$.addEventListener(`pointerdown`,()=>{Q=window.setTimeout(()=>{let e=M.querySelector(`form`);e.elements.namedItem(`max`).value=String(P.max),e.elements.namedItem(`choices`).value=String(P.choices),e.elements.namedItem(`speech`).value=P.speech?`1`:`0`,M.showModal()},1e3)});for(let e of[`pointerup`,`pointerleave`,`pointercancel`])$.addEventListener(e,()=>clearTimeout(Q));M.addEventListener(`close`,()=>{let e=M.querySelector(`form`);P={max:Number(e.elements.namedItem(`max`).value),choices:Number(e.elements.namedItem(`choices`).value),speech:e.elements.namedItem(`speech`).value===`1`},ne(P),y(P.speech),V(),j.classList.contains(`hidden`)&&U()}),document.addEventListener(`contextmenu`,e=>e.preventDefault()),addEventListener(`resize`,V),V(),`serviceWorker`in navigator&&!(`Capacitor`in window)&&location.protocol===`https:`&&navigator.serviceWorker.register(`sw.js`).catch(()=>{});