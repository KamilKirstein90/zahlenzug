// SVG drawings for the locomotives and the numbered wagons of every train type.

const NS = 'http://www.w3.org/2000/svg';

const COLORS = [
  '#ff595e', '#ff924c', '#ffca3a', '#8ac926', '#2ec4b6',
  '#1982c4', '#4267ac', '#6a4c93', '#e05ebd', '#f4845f',
];

export const colorFor = (n: number) => COLORS[(n - 1) % COLORS.length];

export type TrainId = 'bunt' | 'ice' | 'tgv' | 'shinkansen';

export type TrainType = {
  id: TrainId;
  name: string;
  country: string;
  speech: string;
  accent: string;
  steam: boolean;
  flag: string;
};

export const TRAINS: TrainType[] = [
  {
    id: 'bunt', name: 'Bunter Zug', country: 'Zahlenzug', speech: 'Der bunte Zug!',
    accent: '#ff924c', steam: true,
    flag: `<svg viewBox="0 0 30 20"><rect width="30" height="20" rx="2" fill="#fff"/>
      ${COLORS.slice(0, 6).map((c, i) => `<circle cx="${6 + (i % 3) * 9}" cy="${6 + Math.floor(i / 3) * 8}" r="3.4" fill="${c}"/>`).join('')}</svg>`,
  },
  {
    id: 'ice', name: 'ICE', country: 'Deutschland', speech: 'Der I C E aus Deutschland!',
    accent: '#ec0016', steam: false,
    flag: `<svg viewBox="0 0 5 3" preserveAspectRatio="none"><rect width="5" height="1" fill="#000"/><rect y="1" width="5" height="1" fill="#dd0000"/><rect y="2" width="5" height="1" fill="#ffce00"/></svg>`,
  },
  {
    id: 'tgv', name: 'TGV', country: 'Frankreich', speech: 'Der T G V aus Frankreich!',
    accent: '#3a3f8f', steam: false,
    flag: `<svg viewBox="0 0 3 2"><rect width="1" height="2" fill="#002654"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#ed2939"/></svg>`,
  },
  {
    id: 'shinkansen', name: 'Shinkansen', country: 'Japan', speech: 'Der Shinkansen aus Japan!',
    accent: '#1d4fa3', steam: false,
    flag: `<svg viewBox="0 0 3 2"><rect width="3" height="2" fill="#fff"/><circle cx="1.5" cy="1" r="0.6" fill="#bc002d"/></svg>`,
  },
];

export const trainById = (id: string) => TRAINS.find((t) => t.id === id) ?? TRAINS[0];

function shade(hex: string, amount: number): string {
  const v = parseInt(hex.slice(1), 16);
  const ch = (shift: number) => {
    const c = (v >> shift) & 255;
    return Math.round(amount < 0 ? c * (1 + amount) : c + (255 - c) * amount);
  };
  return `rgb(${ch(16)},${ch(8)},${ch(0)})`;
}

function svg(viewBox: string, cls: string, body: string): SVGSVGElement {
  const el = document.createElementNS(NS, 'svg');
  el.setAttribute('viewBox', viewBox);
  el.setAttribute('class', cls);
  el.innerHTML = body;
  return el;
}

function wheel(cx: number, cy: number, r: number): string {
  return `<g class="wheel">
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="#333" stroke="#111" stroke-width="2"/>
    <path d="M${cx - r + 3} ${cy}H${cx + r - 3}M${cx} ${cy - r + 3}V${cy + r - 3}" stroke="#aaa" stroke-width="2.5"/>
    <circle cx="${cx}" cy="${cy}" r="${Math.min(3.5, r / 3)}" fill="#ddd"/>
  </g>`;
}

// Small bogie wheels of the high-speed trains, touching the rail at y=98 like the big ones.
const bogie = (...xs: number[]) => xs.map((x) => wheel(x, 90, 8)).join('');

const TGV_GRADIENT = `<defs><linearGradient id="tgv-stripe">
  <stop offset="0" stop-color="#8e3fa8"/><stop offset="1" stop-color="#2f6fd0"/></linearGradient></defs>`;

const pantograph = `<path d="M94,36 L102,27 L112,31 M97,27 H114" stroke="#555" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;

// Every locomotive faces left; the coupler sits on its right where wagon 1 attaches.
const LOCOS: Record<TrainId, string> = {
  bunt: `
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
    ${wheel(36, 86, 12)}${wheel(68, 86, 12)}${wheel(112, 86, 12)}`,
  ice: `
    ${pantograph}
    <rect x="12" y="78" width="126" height="8" rx="3" fill="#555"/>
    <path d="M4,76 C4,60 18,46 46,38 Q53,36 60,36 L134,36 Q139,36 139,41 L139,78 L8,78 Q4,78 4,76Z"
      fill="#f7f7f7" stroke="#9aa0a6" stroke-width="2"/>
    <path d="M20,55 C26,47 38,41 52,40 L58,40 L58,55 Z" fill="#2b2f36"/>
    <rect x="66" y="43" width="66" height="12" rx="3" fill="#2b2f36"/>
    <path d="M8,65 L139,65 L139,71 L6,71 Z" fill="#ec0016"/>
    <ellipse cx="13" cy="60" rx="4" ry="2.4" fill="#fff6b0" stroke="#999"/>
    <rect x="138" y="72" width="4" height="6" fill="#444"/>
    ${bogie(28, 46, 108, 126)}`,
  tgv: `
    ${TGV_GRADIENT}${pantograph}
    <rect x="12" y="78" width="126" height="8" rx="3" fill="#555"/>
    <path d="M4,76 C6,58 26,42 62,36 L134,36 Q139,36 139,41 L139,78 L8,78 Q4,78 4,76Z"
      fill="#e3e6eb" stroke="#8c929c" stroke-width="2"/>
    <path d="M16,57 C24,47 40,41 62,39 L139,39 L139,56 L16,57 Z" fill="#232a5c"/>
    <path d="M24,55 C30,48 40,44 54,42 L56,55 Z" fill="#5a6aa8"/>
    <path d="M9,62 L139,62 L139,69 L7,69 Z" fill="url(#tgv-stripe)"/>
    <ellipse cx="12" cy="66" rx="4" ry="2.4" fill="#fff6b0" stroke="#999"/>
    <rect x="138" y="72" width="4" height="6" fill="#444"/>
    ${bogie(28, 46, 108, 126)}`,
  shinkansen: `
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
    ${bogie(26, 44, 108, 126)}`,
};

export function makeLoco(train: TrainId = 'bunt'): SVGSVGElement {
  return svg('0 8 142 90', 'piece loco', LOCOS[train]);
}

// Wagon livery per high-speed train: body, window band and stripe.
const LIVERY: Record<Exclude<TrainId, 'bunt'>, { body: string; edge: string; windows: string; stripe: string; defs?: string }> = {
  ice: { body: '#f7f7f7', edge: '#9aa0a6', windows: '#2b2f36', stripe: '#ec0016' },
  tgv: { body: '#e3e6eb', edge: '#8c929c', windows: '#232a5c', stripe: 'url(#tgv-stripe)', defs: TGV_GRADIENT },
  shinkansen: { body: '#fbfbfb', edge: '#9aa0a6', windows: '#1f2a44', stripe: '#1d4fa3' },
};

function number(n: number, x: number, y: number, size: number, fill: string, stroke: string): string {
  return `<text x="${x}" y="${y}" text-anchor="middle" font-size="${size}" font-weight="900"
    fill="${fill}" stroke="${stroke}" stroke-width="3" paint-order="stroke">${n}</text>`;
}

export function makeWagon(n: number, train: TrainId = 'bunt'): SVGSVGElement {
  const c = colorFor(n);
  if (train === 'bunt') {
    return svg('0 24 100 74', 'piece wagon', `
      <rect x="0" y="72" width="8" height="6" fill="#444"/>
      <rect x="6" y="30" width="90" height="48" rx="10" fill="${c}" stroke="${shade(c, -0.3)}" stroke-width="3"/>
      <rect x="10" y="34" width="82" height="8" rx="4" fill="${shade(c, 0.35)}"/>
      ${number(n, 51, 72, 40, '#fff', shade(c, -0.45))}
      <rect x="4" y="76" width="94" height="7" rx="3" fill="#333"/>
      ${wheel(28, 86, 11)}${wheel(74, 86, 11)}`);
  }
  // High-speed wagons keep their livery; the number keeps its colour so it matches the dots.
  const l = LIVERY[train];
  return svg('0 24 100 74', 'piece wagon', `${l.defs ?? ''}
    <rect x="0" y="72" width="6" height="6" fill="#444"/>
    <rect x="6" y="78" width="90" height="8" rx="3" fill="#555"/>
    <rect x="4" y="32" width="94" height="46" rx="6" fill="${l.body}" stroke="${l.edge}" stroke-width="2"/>
    <rect x="10" y="37" width="82" height="9" rx="3" fill="${l.windows}"/>
    <rect x="5" y="47.5" width="92" height="3.5" fill="${l.stripe}"/>
    ${number(n, 51, 77, 34, c, shade(c, -0.5))}
    ${bogie(18, 34, 68, 84)}`);
}
