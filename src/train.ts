// SVG drawings for the locomotive and the numbered wagons.

const NS = 'http://www.w3.org/2000/svg';

const COLORS = [
  '#ff595e', '#ff924c', '#ffca3a', '#8ac926', '#2ec4b6',
  '#1982c4', '#4267ac', '#6a4c93', '#e05ebd', '#f4845f',
];

export const colorFor = (n: number) => COLORS[(n - 1) % COLORS.length];

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
    <circle cx="${cx}" cy="${cy}" r="3.5" fill="#ddd"/>
  </g>`;
}

// Faces left; the coupler sits on its right where wagon 1 attaches.
export function makeLoco(): SVGSVGElement {
  return svg('0 8 142 90', 'piece loco', `
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
    ${wheel(36, 86, 12)}${wheel(68, 86, 12)}${wheel(112, 86, 12)}
  `);
}

export function makeWagon(n: number): SVGSVGElement {
  const c = colorFor(n);
  return svg('0 24 100 74', 'piece wagon', `
    <rect x="0" y="72" width="8" height="6" fill="#444"/>
    <rect x="6" y="30" width="90" height="48" rx="10" fill="${c}" stroke="${shade(c, -0.3)}" stroke-width="3"/>
    <rect x="10" y="34" width="82" height="8" rx="4" fill="${shade(c, 0.35)}"/>
    <text x="51" y="72" text-anchor="middle" font-size="40" font-weight="900"
      fill="#fff" stroke="${shade(c, -0.45)}" stroke-width="3" paint-order="stroke">${n}</text>
    <rect x="4" y="76" width="94" height="7" rx="3" fill="#333"/>
    ${wheel(28, 86, 11)}${wheel(74, 86, 11)}
  `);
}
