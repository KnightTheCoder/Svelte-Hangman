import phrases from '@/lib/config/phrases.json';

function getFromRange(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min));
}

export function getRandomPhrase(lang: string) {
  const correctPhrases: string[] = phrases[lang];

  return correctPhrases[getFromRange(0, correctPhrases.length)];
}
