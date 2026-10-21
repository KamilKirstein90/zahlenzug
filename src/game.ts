// Game state and settings, kept free of DOM code.

export type Settings = { max: number; choices: number; speech: boolean };

const KEY = 'zahlenzug-settings';
const DEFAULTS: Settings = { max: 10, choices: 3, speech: true };

export function loadSettings(): Settings {
  try {
    return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(KEY) ?? '{}') };
  } catch {
    return { ...DEFAULTS };
  }
}

export function saveSettings(s: Settings) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    // Storage unavailable (private mode): settings just won't persist.
  }
}

function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// The correct next number plus random distractors from the range, in random order.
export function pickChoices(next: number, settings: Settings): number[] {
  const others = shuffle(
    Array.from({ length: settings.max }, (_, i) => i + 1).filter((n) => n !== next),
  ).slice(0, settings.choices - 1);
  return shuffle([next, ...others]);
}
