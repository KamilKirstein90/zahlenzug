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

const PAGODA = `<svg viewBox="0 0 50 80">
  <rect x="24" y="0" width="2" height="12" fill="#6b4434"/>
  <circle cx="25" cy="4" r="1.6" fill="#e2b33c"/><circle cx="25" cy="8" r="1.6" fill="#e2b33c"/>
  ${[0, 1, 2, 3].map((i) => {
    const y = 12 + i * 16;
    const w = 12 + i * 3;
    return `<rect x="${25 - w / 2 + 3}" y="${y + 4}" width="${w - 6}" height="12" fill="#c0392b"/>
      <rect x="${25 - w / 2 + 6}" y="${y + 7}" width="${w - 12}" height="5" fill="#f6e3b4"/>
      <path d="M${25 - w / 2 - 6},${y + 5} Q25,${y - 2} ${25 + w / 2 + 6},${y + 5} L${25 + w / 2 + 2},${y + 7} L${25 - w / 2 - 2},${y + 7} Z" fill="#3b3b4f"/>`;
  }).join('')}
  <rect x="10" y="76" width="30" height="4" fill="#8b8b8b"/>
</svg>`;

const BAMBOO = `<svg viewBox="0 0 24 60">
  ${[3, 9, 15, 20].map((x, i) => `<rect x="${x}" y="${4 + i * 3}" width="3" height="${56 - i * 3}" fill="${i % 2 ? '#5aa04a' : '#6fbf55'}"/>
    ${[18, 30, 42].map((y) => `<rect x="${x - 0.3}" y="${y + i * 2}" width="3.6" height="1.2" fill="#3f7d36"/>`).join('')}
    <path d="M${x + 1.5},${12 + i * 3} q6,-4 9,-2 q-5,1 -9,4z M${x + 1.5},${24 + i * 2} q-6,-4 -9,-2 q5,1 9,4z" fill="#4c9a3f"/>`).join('')}
</svg>`;

const POPLAR = `<svg viewBox="0 0 12 50">
  <rect x="5" y="38" width="2" height="12" fill="#6b4434"/>
  <ellipse cx="6" cy="22" rx="5.5" ry="20" fill="#3f8a3a"/>
  <ellipse cx="4.5" cy="20" rx="2" ry="14" fill="#56a64b"/>
</svg>`;

const SUNFLOWERS = `<svg viewBox="0 0 60 30">
  ${[6, 16, 26, 36, 46, 54].map((x, i) => {
    const y = 8 + (i % 2) * 4;
    return `<path d="M${x},${y} V30" stroke="#4e8a2e" stroke-width="1.5"/>
      <ellipse cx="${x + 3}" cy="${y + 10}" rx="3" ry="1.5" fill="#5f9e3a"/>
      <circle cx="${x}" cy="${y}" r="5" fill="#ffc928"/>
      <circle cx="${x}" cy="${y}" r="2.4" fill="#7a4a1c"/>`;
  }).join('')}
</svg>`;

const FIRS = `<svg viewBox="0 0 62 50">
  ${[[10, 6, 44], [24, 0, 50], [38, 8, 42], [51, 3, 47]].map(([x, top, h], i) => `
    <rect x="${x - 1.5}" y="${top + h - 6}" width="3" height="6" fill="#5b3a29"/>
    <path d="M${x},${top} L${x + 9},${top + h * 0.45} L${x + 5},${top + h * 0.45} L${x + 11},${top + h - 6} L${x - 11},${top + h - 6} L${x - 5},${top + h * 0.45} L${x - 9},${top + h * 0.45} Z"
      fill="${i % 2 ? '#2f6b3a' : '#3c7f45'}"/>`).join('')}
</svg>`;

const house = (x: number, top: number, w: number, wall: string) => `
  <rect x="${x}" y="${top + 12}" width="${w}" height="${34 - top}" fill="${wall}" stroke="#5a3a24" stroke-width="1.6"/>
  <path d="M${x},${top + 24} H${x + w} M${x + w / 3},${top + 12} V46 M${x + (2 * w) / 3},${top + 12} V46 M${x},${top + 12} L${x + w / 3},${top + 24} M${x + w},${top + 12} L${x + (2 * w) / 3},${top + 24}" stroke="#5a3a24" stroke-width="1.6"/>
  <path d="M${x - 3},${top + 13} L${x + w / 2},${top} L${x + w + 3},${top + 13} Z" fill="#b5462f"/>
  <rect x="${x + w / 3 + 2}" y="${top + 28}" width="${w / 3 - 4}" height="7" fill="#8fc5e8" stroke="#5a3a24"/>
  <rect x="${x + 2}" y="${top + 15}" width="${w / 3 - 4}" height="6" fill="#8fc5e8"/>`;

const FACHWERK = `<svg viewBox="-4 0 86 46">
  ${house(2, 14, 34, '#f6ecd6')}${house(42, 8, 36, '#fbf3e2')}
  <g fill="#e04a5f"><circle cx="50" cy="44" r="1.6"/><circle cx="54" cy="45" r="1.6"/><circle cx="70" cy="44" r="1.6"/></g>
</svg>`;

const WINDRAD = `<svg viewBox="-30 -30 60 120">
  <path d="M-1.2,0 L-2.5,90 L2.5,90 L1.2,0 Z" fill="#f2f4f6" stroke="#c9ccd1" stroke-width=".6"/>
  <g class="rotor">
    ${[0, 120, 240].map((a) => `<path d="M0,0 L-2,-4 L0,-28 L2,-4 Z" fill="#fff" stroke="#c9ccd1" stroke-width=".6" transform="rotate(${a})"/>`).join('')}
    <circle r="2.4" fill="#e1e4e8" stroke="#aab0b8" stroke-width=".6"/>
  </g>
</svg>`;

const BALLOON = `<svg viewBox="0 0 40 56">
  <path d="M20,2 C8,2 2,12 2,20 C2,30 12,36 15,42 L25,42 C28,36 38,30 38,20 C38,12 32,2 20,2 Z" fill="#002654"/>
  <path d="M20,2 C15,2 13,12 13,20 C13,30 16,36 17,42 L23,42 C24,36 27,30 27,20 C27,12 25,2 20,2 Z" fill="#fff"/>
  <path d="M20,2 C32,2 38,12 38,20 C38,30 28,36 25,42 L23,42 C24,36 27,30 27,20 C27,12 25,2 20,2 Z" fill="#ed2939"/>
  <path d="M16,42 L17,48 M24,42 L23,48" stroke="#6b4434"/>
  <rect x="15" y="48" width="10" height="7" rx="1.5" fill="#a8743c"/>
</svg>`;

const BIRD = `<svg viewBox="0 0 24 10"><path class="wings" d="M1,7 Q6,0 12,6 Q18,0 23,7" stroke="#34495e" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`;

const PIECES: Record<TrainId, Piece[]> = {
  bunt: [],
  shinkansen: [
    { svg: FUJI, left: 16, height: 44, far: true },
    { svg: BAMBOO, left: 0, height: 20 },
    { svg: CHERRY, left: 8, height: 15 },
    { svg: CHERRY, left: 40, height: 9 },
    { svg: TORII, left: 66, height: 13 },
    { svg: PAGODA, left: 89, height: 24 },
  ],
  tgv: [
    { svg: EIFFEL, left: 54, height: 40 },
    ...[2, 5, 8, 11, 14].map((left) => ({ svg: POPLAR, left, height: 15 })),
    { svg: SUNFLOWERS, left: 22, height: 9 },
    { svg: PARIS_HOUSES, left: 72, height: 11 },
    { svg: SUNFLOWERS, left: 88, height: 8 },
  ],
  ice: [
    { svg: FERNSEHTURM, left: 28, height: 46, far: true },
    { svg: WINDRAD, left: 80, height: 30, far: true },
    { svg: WINDRAD, left: 90, height: 22, far: true },
    { svg: FIRS, left: 0, height: 15 },
    { svg: FIRS, left: 14, height: 12 },
    { svg: BRANDENBURGER_TOR, left: 46, height: 24 },
    { svg: FACHWERK, left: 70, height: 13 },
  ],
};

// Hills along the horizon (viewBox 100×13, stretched to the hills band).
const firRow = Array.from({ length: 40 }, (_, i) => {
  const x = i * 2.5 + 1;
  const y = 5 - 2.5 * Math.sin((x / 100) * Math.PI * 3);
  return `<path d="M${x},${y - 3} L${x + 1},${y} L${x - 1},${y} Z" fill="${i % 2 ? '#2d6436' : '#356f3d'}"/>`;
}).join('');

const HILLS: Partial<Record<TrainId, string>> = {
  shinkansen: `
    <path d="M0,13 L0,5 Q12,0 24,4 Q36,8 48,3 Q62,-1 74,4 Q88,8 100,3 L100,13 Z" fill="#4f9a55"/>
    <path d="M0,13 L0,8 Q20,3 38,8 Q55,12 72,7 Q86,3 100,7 L100,13 Z" fill="#6cbb5f"/>`,
  tgv: `
    <defs><clipPath id="vines"><path d="M0,13 L0,6 Q18,0 36,5 Q52,9 68,3 Q84,-1 100,5 L100,13 Z"/></clipPath></defs>
    <path d="M0,13 L0,6 Q18,0 36,5 Q52,9 68,3 Q84,-1 100,5 L100,13 Z" fill="#b9cf63"/>
    <g clip-path="url(#vines)" stroke="#6f9a3a" stroke-width=".7" stroke-dasharray="1 .6">
      ${Array.from({ length: 12 }, (_, i) => `<path d="M-5,${i * 1.3} L105,${i * 1.3 + 1.5}"/>`).join('')}
    </g>
    <path d="M0,13 L0,10 Q30,6 60,10 Q80,12 100,9 L100,13 Z" fill="#9ccc5e"/>`,
  ice: `
    <path d="M0,13 L0,5 Q15,1 30,4 Q45,7 60,3 Q80,0 100,5 L100,13 Z" fill="#3f7f45"/>
    ${firRow}
    <path d="M0,13 L0,9 Q25,5 50,9 Q75,12 100,8 L100,13 Z" fill="#6db556"/>`,
};

// Fields in the foreground, drawn in perspective towards a point above the horizon.
function field(rows: number, cols: number, fill: (col: number, row: number) => string, line = ''): string {
  const ys = Array.from({ length: rows + 1 }, (_, k) => 40 * (k / rows) ** 1.35);
  const x = (j: number, y: number) => 50 + (j - cols / 2) * (5 + (y / 40) * 17);
  let out = '';
  for (let k = 0; k < rows; k++) {
    for (let j = 0; j < cols; j++) {
      const [y0, y1] = [ys[k], ys[k + 1]];
      out += `<path d="M${x(j, y0)},${y0} L${x(j + 1, y0)},${y0} L${x(j + 1, y1)},${y1} L${x(j, y1)},${y1} Z" fill="${fill(j, k)}"${
        line ? ` stroke="${line}" stroke-width=".35"` : ''}/>`;
    }
  }
  return `<svg viewBox="0 0 100 40" preserveAspectRatio="none">${out}</svg>`;
}

const PATCH = ['#ffd93b', '#7cc35a', '#c9a66b', '#a6d86b', '#ffe066', '#5fae4f'];

const FIELDS: Partial<Record<TrainId, string>> = {
  // Rice paddies: green rice and water that mirrors the sky, separated by earth dikes.
  shinkansen: field(9, 14, (j, k) => ((j * 7 + k * 3) % 5 === 0 ? '#9fd8ea' : (j + k) % 2 ? '#8ed26b' : '#7fc65f'), '#b89a6a'),
  // Lavender rows.
  tgv: field(1, 30, (j) => (j % 2 ? '#9a7bd4' : '#86b85a')),
  // Patchwork of rapeseed, meadows and ploughed fields.
  ice: field(6, 10, (j, k) => PATCH[(j * 5 + k * 3) % PATCH.length], '#6b9a4a'),
};

function fx(id: TrainId): string {
  if (id === 'bunt') return '';
  const birds = [0, 1, 2].map((i) =>
    `<div class="bird" style="top:${8 + i * 5}vh;animation-delay:${-i * 9 - 3}s;animation-duration:${26 + i * 5}s">${BIRD}</div>`).join('');
  if (id === 'shinkansen') {
    return birds + Array.from({ length: 16 }, (_, i) =>
      `<div class="petal" style="left:${(i * 37) % 100}vw;animation-delay:${-i * 1.3}s;animation-duration:${9 + (i % 5) * 2}s"></div>`).join('');
  }
  if (id === 'tgv') return birds + `<div class="balloon">${BALLOON}</div>`;
  return birds;
}

export function setScenery(id: TrainId) {
  const scene = document.querySelector<HTMLElement>('.scene')!;
  if (id === 'bunt') delete scene.dataset.theme;
  else scene.dataset.theme = id;
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
  const hills = HILLS[id];
  scene.querySelector('.hills')!.innerHTML = hills ? `<svg viewBox="0 0 100 13" preserveAspectRatio="none">${hills}</svg>` : '';
  scene.querySelector('.field')!.innerHTML = FIELDS[id] ?? '';
  scene.querySelector('.fx')!.innerHTML = fx(id);
}

