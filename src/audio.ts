// Speech (German number words) and small synthesized sound effects.

let ctx: AudioContext | undefined;
let speechOn = true;

const WORDS = ['Null', 'Eins', 'Zwei', 'Drei', 'Vier', 'Fünf', 'Sechs', 'Sieben', 'Acht', 'Neun', 'Zehn'];

export function unlockAudio() {
  ctx ??= new AudioContext();
  if (ctx.state === 'suspended') void ctx.resume();
  // Browsers only allow speech after a user gesture; speak once silently to unlock it.
  if ('speechSynthesis' in window) speechSynthesis.speak(new SpeechSynthesisUtterance(''));
}

export function setSpeech(on: boolean) {
  speechOn = on;
}

function germanVoice(): SpeechSynthesisVoice | undefined {
  return speechSynthesis.getVoices().find((v) => v.lang.toLowerCase().startsWith('de'));
}

export function say(text: string) {
  if (!speechOn || !('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'de-DE';
  const v = germanVoice();
  if (v) u.voice = v;
  u.rate = 0.9;
  u.pitch = 1.15;
  speechSynthesis.speak(u);
}

export const sayNumber = (n: number) => say(`${WORDS[n] ?? n}!`);

function tone(freq: number, start: number, dur: number, type: OscillatorType = 'sine', vol = 0.2, freqEnd?: number) {
  if (!ctx) return;
  const t = ctx.currentTime + start;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (freqEnd) osc.frequency.exponentialRampToValueAtTime(freqEnd, t + dur);
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(vol, t + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(gain).connect(ctx.destination);
  osc.start(t);
  osc.stop(t + dur + 0.05);
}

export const sounds = {
  toot() {
    for (const start of [0, 0.45]) {
      tone(392, start, 0.35, 'triangle', 0.18);
      tone(494, start, 0.35, 'triangle', 0.12);
      tone(587, start, 0.35, 'sine', 0.1);
    }
  },
  click() {
    tone(1400, 0, 0.05, 'square', 0.08);
    tone(900, 0.06, 0.06, 'square', 0.08);
  },
  boing() {
    tone(320, 0, 0.35, 'sine', 0.2, 120);
  },
  pop() {
    tone(600, 0, 0.12, 'sine', 0.12, 900);
  },
  fanfare() {
    [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.14, i === 3 ? 0.6 : 0.2, 'triangle', 0.18));
  },
};
