import './style.css';
import { makeLoco, makeWagon, colorFor, TRAINS, type TrainType } from './train';
import { unlockAudio, say, sayNumber, setSpeech, sounds } from './audio';
import { loadSettings, saveSettings, pickChoices } from './game';

const $ = <T extends HTMLElement>(sel: string) => document.querySelector(sel) as T;
const trainEl = $('#train');
const choicesEl = $('#choices');
const overlay = $('#overlay');
const settingsDialog = $<HTMLDialogElement>('#settings');

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

let settings = loadSettings();
setSpeech(settings.speech);

let next = 1;
let busy = true;
let wrongTaps = 0;
let hintTimer = 0;
let round = 0;
let train: TrainType = TRAINS[0];

// Size wagons so the full train always fits, and choice wagons as big as the space allows.
function layout() {
  const W = innerWidth;
  const H = innerHeight;
  const u = Math.min((W * 0.94) / (settings.max + 1.6), H * 0.24);
  const c = Math.min(W * (settings.choices === 2 ? 0.32 : 0.27), (H * 0.35 - 24) / 1.0);
  document.documentElement.style.setProperty('--u', `${u}px`);
  document.documentElement.style.setProperty('--c', `${c}px`);
}

function dots(n: number): HTMLElement {
  const el = document.createElement('div');
  el.className = 'dots';
  for (let i = 0; i < n; i++) {
    const d = document.createElement('span');
    d.style.background = colorFor(n);
    el.append(d);
  }
  return el;
}

async function startRound() {
  const thisRound = ++round;
  busy = true;
  next = 1;
  choicesEl.innerHTML = '';
  trainEl.innerHTML = '';
  trainEl.getAnimations().forEach((a) => a.cancel());
  trainEl.append(makeLoco(train.id));
  trainEl.classList.add('driving');
  sounds.toot();
  await trainEl.animate(
    [{ transform: `translateX(${innerWidth}px)` }, { transform: 'translateX(0)' }],
    { duration: 1800, easing: 'cubic-bezier(.2,.7,.3,1)' },
  ).finished;
  if (thisRound !== round) return;
  trainEl.classList.remove('driving');
  showChoices();
}

function showChoices() {
  choicesEl.innerHTML = '';
  wrongTaps = 0;
  pickChoices(next, settings).forEach((n, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice';
    btn.dataset.n = String(n);
    btn.append(makeWagon(n, train.id), dots(n));
    btn.addEventListener('pointerdown', () => onPick(n, btn));
    btn.animate(
      [{ transform: 'scale(0)', opacity: 0 }, { transform: 'scale(1.1)', offset: 0.7 }, { transform: 'scale(1)', opacity: 1 }],
      { duration: 400, delay: i * 120, fill: 'backwards', easing: 'ease-out' },
    );
    choicesEl.append(btn);
  });
  setTimeout(sounds.pop, 0);
  busy = false;
  clearTimeout(hintTimer);
  hintTimer = window.setTimeout(showHint, 6000);
}

function showHint() {
  choicesEl.querySelector(`[data-n="${next}"]`)?.classList.add('hint');
}

function onPick(n: number, btn: HTMLButtonElement) {
  if (busy) return;
  if (n !== next) {
    sounds.boing();
    btn.classList.remove('wobble');
    void btn.offsetWidth; // restart the CSS animation
    btn.classList.add('wobble');
    if (++wrongTaps >= 2) showHint();
    return;
  }
  busy = true;
  clearTimeout(hintTimer);
  void couple(n, btn);
}

async function couple(n: number, btn: HTMLButtonElement) {
  const source = btn.querySelector('svg')!;
  for (const other of choicesEl.querySelectorAll<HTMLElement>('.choice')) {
    if (other !== btn) other.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 250, fill: 'forwards' });
  }

  const target = makeWagon(n, train.id);
  target.style.visibility = 'hidden';
  trainEl.append(target);
  const from = source.getBoundingClientRect();
  const to = target.getBoundingClientRect();

  const flyer = makeWagon(n, train.id);
  flyer.classList.add('flyer');
  Object.assign(flyer.style, {
    left: `${from.left}px`, top: `${from.top}px`, width: `${from.width}px`, height: `${from.height}px`,
  });
  document.body.append(flyer);
  source.style.visibility = 'hidden';
  btn.classList.remove('hint');

  const dx = to.left - from.left;
  const dy = to.top - from.top;
  const s = to.width / from.width;
  await flyer.animate(
    [
      { transform: 'translate(0,0) scale(1)' },
      { transform: `translate(${dx * 0.5}px, ${dy * 0.5 - innerHeight * 0.12}px) scale(${(1 + s) / 2})`, offset: 0.5 },
      { transform: `translate(${dx}px, ${dy}px) scale(${s})` },
    ],
    { duration: 850, easing: 'ease-in-out' },
  ).finished;

  flyer.remove();
  target.style.visibility = '';
  sounds.click();
  sayNumber(n);
  stars(target.getBoundingClientRect(), colorFor(n));
  trainEl.animate(
    [{ transform: 'translateX(0)' }, { transform: 'translateX(-6px)' }, { transform: 'translateX(0)' }],
    { duration: 250 },
  );
  btn.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200, fill: 'forwards' });

  next++;
  if (next > settings.max) {
    void finish();
  } else {
    await wait(900);
    showChoices();
  }
}

function stars(rect: DOMRect, color: string) {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  for (let i = 0; i < 9; i++) {
    const el = document.createElement('div');
    el.className = 'star';
    el.textContent = '★';
    el.style.color = i % 2 ? color : '#ffd166';
    el.style.left = `${cx}px`;
    el.style.top = `${cy}px`;
    document.body.append(el);
    const angle = (i / 9) * Math.PI * 2;
    const dist = rect.width * (0.9 + Math.random() * 0.6);
    el.animate(
      [
        { transform: 'translate(-50%,-50%) scale(.3)', opacity: 1 },
        { transform: `translate(calc(-50% + ${Math.cos(angle) * dist}px), calc(-50% + ${Math.sin(angle) * dist}px)) scale(1.2) rotate(180deg)`, opacity: 0 },
      ],
      { duration: 800, easing: 'ease-out' },
    ).finished.then(() => el.remove());
  }
}

function confetti() {
  const colors = ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93', '#e05ebd'];
  for (let i = 0; i < 70; i++) {
    const el = document.createElement('div');
    el.className = 'confetti';
    el.style.left = `${Math.random() * 100}vw`;
    el.style.background = colors[i % colors.length];
    document.body.append(el);
    el.animate(
      [
        { transform: 'translateY(-5vh) rotate(0deg)' },
        { transform: `translate(${(Math.random() - 0.5) * 30}vw, 105vh) rotate(${Math.random() * 1080}deg)` },
      ],
      { duration: 2200 + Math.random() * 1800, delay: Math.random() * 600, easing: 'ease-in', fill: 'backwards' },
    ).finished.then(() => el.remove());
  }
}

function puff() {
  const loco = trainEl.querySelector('.loco');
  if (!loco) return;
  const r = loco.getBoundingClientRect();
  const el = document.createElement('div');
  el.className = 'puff';
  el.style.left = `${r.left + r.width * (31 / 142)}px`;
  el.style.top = `${r.top}px`;
  el.style.width = el.style.height = `${r.width * 0.25}px`;
  document.body.append(el);
  el.animate(
    [
      { transform: 'translate(-50%,-50%) scale(.4)', opacity: 0.9 },
      { transform: `translate(-50%, -${r.height * 1.5}px) scale(1.8)`, opacity: 0 },
    ],
    { duration: 1200, easing: 'ease-out' },
  ).finished.then(() => el.remove());
}

async function finish() {
  const thisRound = round;
  await wait(700);
  choicesEl.innerHTML = '';
  sounds.fanfare();
  say('Super gemacht!');
  confetti();
  await wait(1600);
  if (thisRound !== round) return;
  sounds.toot();
  trainEl.classList.add('driving');
  const puffs = setInterval(() => train.steam && puff(), 220);
  const right = trainEl.getBoundingClientRect().right;
  await trainEl.animate(
    [{ transform: 'translateX(0)' }, { transform: `translateX(${-right - 40}px)` }],
    { duration: 3800, easing: 'cubic-bezier(.5,0,.8,.6)', fill: 'forwards' },
  ).finished;
  clearInterval(puffs);
  trainEl.classList.remove('driving');
  if (thisRound !== round) return;
  overlay.classList.remove('hidden');
}

// Before each game the child picks a train: four big picture tiles with flag and name.
function buildPicker() {
  const picker = $('#picker');
  TRAINS.forEach((t, i) => {
    const tile = document.createElement('button');
    tile.className = 'tile';
    tile.setAttribute('role', 'listitem');
    tile.setAttribute('aria-label', `${t.name} – ${t.country}`);
    tile.style.setProperty('--accent', t.accent);
    tile.style.animationDelay = `${i * 0.25}s`;

    const pic = document.createElement('div');
    pic.className = 'tile-pic';
    pic.append(makeLoco(t.id), makeWagon(1, t.id));

    const flag = document.createElement('div');
    flag.className = 'flag';
    flag.innerHTML = t.flag;

    const label = document.createElement('div');
    label.className = 'tile-label';
    label.innerHTML = `<b>${t.name}</b><span>${t.country}</span>`;

    tile.append(flag, pic, label);
    tile.addEventListener('click', () => choose(t, tile));
    picker.append(tile);
  });
}

let choosing = false;
async function choose(t: TrainType, tile: HTMLElement) {
  if (choosing) return;
  choosing = true;
  unlockAudio();
  document.documentElement.requestFullscreen?.()
    .then(() => (screen.orientation as ScreenOrientation & { lock?: (o: string) => Promise<void> }).lock?.('landscape'))
    .catch(() => {});
  train = t;
  sounds.pop();
  say(t.speech);
  await tile.animate(
    [{ transform: 'scale(1)' }, { transform: 'scale(1.15)' }, { transform: 'scale(1)' }],
    { duration: 450, easing: 'ease-out' },
  ).finished;
  overlay.classList.add('hidden');
  choosing = false;
  void startRound();
}

buildPicker();

// Parents open the settings by holding the gear button for a second.
let holdTimer = 0;
const settingsBtn = $('#settings-btn');
settingsBtn.addEventListener('pointerdown', () => {
  holdTimer = window.setTimeout(() => {
    const form = settingsDialog.querySelector('form')!;
    (form.elements.namedItem('max') as HTMLSelectElement).value = String(settings.max);
    (form.elements.namedItem('choices') as HTMLSelectElement).value = String(settings.choices);
    (form.elements.namedItem('speech') as HTMLSelectElement).value = settings.speech ? '1' : '0';
    settingsDialog.showModal();
  }, 1000);
});
for (const ev of ['pointerup', 'pointerleave', 'pointercancel']) {
  settingsBtn.addEventListener(ev, () => clearTimeout(holdTimer));
}
settingsDialog.addEventListener('close', () => {
  const form = settingsDialog.querySelector('form')!;
  settings = {
    max: Number((form.elements.namedItem('max') as HTMLSelectElement).value),
    choices: Number((form.elements.namedItem('choices') as HTMLSelectElement).value),
    speech: (form.elements.namedItem('speech') as HTMLSelectElement).value === '1',
  };
  saveSettings(settings);
  setSpeech(settings.speech);
  layout();
  if (overlay.classList.contains('hidden')) void startRound();
});

document.addEventListener('contextmenu', (e) => e.preventDefault());
addEventListener('resize', layout);
layout();

if ('serviceWorker' in navigator && !('Capacitor' in window) && location.protocol === 'https:') {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
