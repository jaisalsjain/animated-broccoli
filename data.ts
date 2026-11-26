import rms from './rms.json';
export const RMS: number[] = rms as number[];
export const TOTAL = 31.0;   // voice duration (29.23) + ~1.5 s

// captions: s/e in seconds (voice-aligned), text uses {red} for key words, \n for line break
export type Cap = { s: number; e: number; t: string; who?: string };
export const CAPS: Cap[] = [
  { s: 0.14, e: 3.45, t: 'ಚಿನ್ನ ಮತ್ತು {ಬೆಳ್ಳಿಯ ಇಂದಿನ ಬೆಲೆ}\nತಿಳಿಯಲು ನೀವು ಕಾಯುತ್ತಿದ್ದೀರಾ?' },
  { s: 3.92, e: 4.42, t: 'ಇನ್ಮುಂದೆ ಪ್ರತಿ ದಿನದ' },
  { s: 4.55, e: 7.13, t: 'ಚಿನ್ನ ಮತ್ತು ಬೆಳ್ಳಿಯ {ಬೆಲೆಗಳ update}\nನಿಮ್ಮ WhatsApp ನಲ್ಲೇ.' },
  { s: 7.26, e: 8.29, t: 'ಹೊಸ {ಆಭರಣಗಳ ಆಗಮನ}，’ },
  { s: 8.64, e: 10.24, t: 'ಹೊಸ {product ಗಳ delivery ಮಾಹಿತಿ} ಒಂದೂ' },
  { s: 10.50, e: 12.36, t: 'ಮತ್ತೆ stock ಗೆ ಬಂದಿರುವ\n{ನಿಮ್ಮ ನೆಚ್ಚಿನ ಆಭರಣಗಳ update} ಕೂಡ' },
  { s: 12.56, e: 13.12, t: 'ನಿಮಗೆ ಸಿಗಲಿದೆ.' },
  { s: 13.25, e: 17.31, t: 'ಹಾಗಾದರೆ {ತಡವೇಕೆ}? ಇಂದೇ {ಶ್ರೀ ಎ ಬಿ jewelers}\nWhatsApp community ಗೆ ಸೇರಿ' },
  { s: 17.68, e: 18.81, t: 'ಒಳಗೆ ಎಲ್ಲಾ ಹೊಸ {updates ಗಳನ್ನು}' },
  { s: 19.18, e: 22.17, t: 'ತಪ್ಪದೆ {ತಿಳಿದುಕೊಳ್ಳಿ}.' },
  { s: 22.38, e: 24.15, t: '{ಶ್ರೀ ಎ ಬಿ jewelers}' },
  { s: 24.31, e: 25.25, t: '{stay updated,} {stay connected}.' },
];

export const SPEAK: Record<string, [number, number][]> = {
  narrator: [[0.14, 29.03]],  // single narrator throughout
};

export const SCENE_TAGS: { s: number; e: number; tag: string }[] = [
  { s: 0, e: 3.9, tag: 'ಬೆಲೆ ಇ Lantern' },
  { s: 3.9, e: 8.6, tag: 'WhatsApp Updates' },
  { s: 8.6, e: 13.3, tag: 'ನವीन ಆಭರಣಗಳು' },
  { s: 13.3, e: 17.7, tag: 'Community ಸೇರಿ' },
  { s: 17.7, e: 22.4, tag: 'Updates ದೃಷ್ಟಿ' },
  { s: 22.4, e: 31.0, tag: 'Stay Connected' },
];

/** sound effects: [file in public/sfx without .wav, start second, volume] */
export const SFX: [string, number, number][] = [
  ['pop', 0.14, 0.3],
  ['pop', 3.92, 0.3],
  ['pop', 7.26, 0.3],
  ['pop', 13.25, 0.3],
  ['pop', 19.18, 0.3],
  ['stamp', 22.38, 0.5],
  ['pop', 24.31, 0.3],
];
