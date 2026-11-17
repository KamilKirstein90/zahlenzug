// Background landmarks that match the chosen train's country. The colourful train keeps
// the plain default landscape.
import type { TrainId } from './train';

type Piece = {
  svg: string;
  left: number; // vw
  height: number; // vh
  far?: boolean; // drawn behind the hills
};

const FUJI = `<svg viewBox="0 0 200 80">
  <path d="M0,80 C40,60 60,30 82,12 Q100,6 118,12 C140,30 160,60 200,80 Z" fill="#5b7fb8"/>
  <path d="M82,12 C70,24 66,26 64,28 L72,32 L80,26 L90,33 L100,26 L110,33 L120,26 L128,32 L136,28 C134,26 130,24 118,12 Q100,6 82,12 Z" fill="#fff"/>
  <path d="M100,26 L110,33 L120,26 L128,32 L136,28 C140,32 150,44 160,52 C140,48 125,40 100,26 Z" fill="#4a6ea6" opacity=".5"/>
</svg>`;

const TORII = `<svg viewBox="0 0 60 52">
  <rect x="12" y="12" width="5" height="40" fill="#d7263d"/>
  <rect x="43" y="12" width="5" height="40" fill="#d7263d"/>
  <rect x="6" y="19" width="48" height="4" fill="#d7263d"/>
  <rect x="27.5" y="12" width="5" height="8" fill="#d7263d"/>
  <path d="M0,4 Q30,11 60,4 L58,11 Q30,16 2,11 Z" fill="#d7263d"/>
  <path d="M0,4 Q30,11 60,4 L60,6 Q30,13 0,6 Z" fill="#2b2b2b"/>
  <rect x="10" y="48" width="9" height="4" fill="#2b2b2b"/>
  <rect x="41" y="48" width="9" height="4" fill="#2b2b2b"/>
</svg>`;

const CHERRY = `<svg viewBox="0 0 50 56">
  <path d="M23,56 L24,34 L16,24 M24,36 L33,26" stroke="#6b4434" stroke-width="4" stroke-linecap="round" fill="none"/>
  <g fill="#ffb7cf">
    <circle cx="14" cy="20" r="10"/><circle cx="26" cy="12" r="12"/><circle cx="38" cy="20" r="10"/>
    <circle cx="22" cy="26" r="9"/><circle cx="33" cy="28" r="8"/>
  </g>
  <g fill="#ff8fb5"><circle cx="18" cy="14" r="2"/><circle cx="30" cy="8" r="2"/><circle cx="38" cy="22" r="2"/><circle cx="24" cy="24" r="2"/></g>
</svg>`;

const EIFFEL = `<svg viewBox="0 0 60 140">
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
</svg>`;

const PARIS_HOUSES = `<svg viewBox="0 0 90 40">
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
</svg>`;

const FERNSEHTURM = `<svg viewBox="0 0 30 160">
  <rect x="14" y="0" width="2" height="30" fill="#d33"/>
  <rect x="14" y="4" width="2" height="4" fill="#fff"/><rect x="14" y="12" width="2" height="4" fill="#fff"/><rect x="14" y="20" width="2" height="4" fill="#fff"/>
  <rect x="13" y="28" width="4" height="4" fill="#c9ccd1"/>
  <rect x="12.5" y="44" width="5" height="116" fill="#c9ccd1"/>
  <circle cx="15" cy="40" r="10" fill="#b9bec6" stroke="#8e949c" stroke-width="1"/>
  <rect x="5" y="39" width="20" height="3" fill="#6f7680"/>
</svg>`;

const BRANDENBURGER_TOR = `<svg viewBox="0 -20 120 100">
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
</svg>`;

const PIECES: Record<TrainId, Piece[]> = {
  bunt: [],
  shinkansen: [
    { svg: FUJI, left: 16, height: 44, far: true },
    { svg: CHERRY, left: 6, height: 14 },
    { svg: TORII, left: 74, height: 13 },
  ],
  tgv: [
    { svg: EIFFEL, left: 54, height: 40 },
    { svg: PARIS_HOUSES, left: 74, height: 10 },
  ],
  ice: [
    { svg: FERNSEHTURM, left: 28, height: 46, far: true },
    { svg: BRANDENBURGER_TOR, left: 48, height: 24 },
  ],
};

export function setScenery(id: TrainId) {
  const scene = document.querySelector<HTMLElement>('.scene')!;
  scene.dataset.theme = id;
  for (const layer of ['far', 'near'] as const) {
    const el = scene.querySelector<HTMLElement>(`.landmarks.${layer}`)!;
    el.innerHTML = '';
    for (const p of PIECES[id].filter((p) => !!p.far === (layer === 'far'))) {
      const wrap = document.createElement('div');
      wrap.className = 'landmark';
      wrap.style.left = `${p.left}vw`;
      wrap.style.height = `${p.height}vh`;
      wrap.innerHTML = p.svg;
      el.append(wrap);
    }
  }
}
