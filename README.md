# Zahlenzug 🚂

A simple counting game for toddlers (ages 2–3). A locomotive waits on the track, and the child taps the wagons numbered **1 to 10 in the right order**. Every correct wagon couples onto the train, so the train grows longer and longer. When the train is complete, it steams off with confetti and "Super gemacht!".

**Play now:** https://kamilkirstein90.github.io/zahlenzug/

## What kind of app is this?

Right now Zahlenzug is a **web app**, more precisely a *Progressive Web App (PWA)*. It runs in the phone's browser and can be added to the home screen, where it then behaves like an app: fullscreen, its own icon, and it works offline.

It is **not yet a native Android app (APK)**. That's planned: [Capacitor](https://capacitorjs.com/) will wrap the same game code in an Android app, which will then be offered as an APK download under *Releases*.

## Installing on an Android phone

1. Open **https://kamilkirstein90.github.io/zahlenzug/** in **Chrome**.
2. Tap the **⋮** menu (top right) and choose **"Add to Home screen"** (or **"Install app"**).
3. Confirm. A *Zahlenzug* icon appears on the home screen.
4. Start the game from that icon, turn the phone **sideways** and the **volume up**.

After the first visit, the game also works without internet.

> Tip: to stop the child from leaving the game, use Android's **App pinning** (Settings → Security → App pinning).

## How to play

Before each game the child picks a train from four big picture tiles, each with the flag of its home country and a caption. A voice asks "Wähle deinen Zug aus!" (if the browser blocks speech before the first touch, it is said on the first tap next to the tiles).

| Tile | Train |
|---|---|
| Bunter Zug | the colourful steam train |
| ICE 🇩🇪 | German high-speed train (white with a red stripe) |
| TGV 🇫🇷 | French high-speed train (orange and green) |
| Shinkansen 🇯🇵 | Japanese bullet train (white with blue stripes) |

The high-speed wagons keep their livery, but the numbers keep their colours so they still match the dots.


| What happens | Game reaction |
|---|---|
| Tap a train tile | The voice names the train, the locomotive drives in with a toot |
| Tap the **right** wagon | It flies to the train, clicks on, the voice says the number ("Drei!"), stars appear |
| Tap a **wrong** wagon | It wobbles gently with a "boing", no penalty |
| No tap for 6 s or 2 wrong taps | The right wagon pulses as a hint |
| Wagon 10 coupled | Fanfare, confetti, the train drives away, then the train selection appears again |

Each choice wagon shows the number **and the same amount of dots**, so the child can also count.

### Parent settings

**Hold** the ⚙ button in the top-right corner for one second:

- **Numbers:** 1–5 or 1–10
- **Choices:** 2 or 3 wagons
- **Speech:** on / off

Settings are saved on the device.

## Development

Built with **TypeScript + Vite**, no game engine; graphics are hand-drawn SVG, speech uses the browser's Web Speech API (German voice) and sounds are synthesized with the Web Audio API, so there are no asset files.

```bash
npm install
npm run dev      # local dev server (also reachable from phones in the same Wi-Fi)
npm run build    # production build into dist/
npm run deploy   # build + publish to GitHub Pages (gh-pages branch)
```

| File | Purpose |
|---|---|
| `src/main.ts` | Screen flow, taps, animations |
| `src/game.ts` | Settings and choice generation |
| `src/train.ts` | Train types (flags, captions) and their SVG locomotives and wagons |
| `src/audio.ts` | Speech and sound effects |
| `public/` | PWA manifest, service worker, icon |
