const englishPhrases = [
  'jazz',
  'building',
  'passive',
  'communication',
  'galaxy',
  'Star Wars',
  'The Witcher',
  'Fallout',
  "Sid Meier's Civilization V",
  "No Man's Sky",
  'automation',
  'jail',
  'janitor',
  'gaming',
  'adjacent',
  'awkward',
  'nightclub',
  'aeroplane',
  'nowadays',
  'vodka',
  'sprint',
  'espionage',
  'Hearts of Iron IV',
  'strenght',
  'zombie',
  'rust',
  'javascript',
  'svelte',
  'fjord',
  'flying',
  'interesting',
  'Hungary',
  'Norway',
  'United States of America',
  'yummy',
  'glitch',
];

const hungarianPhrases = [
  'alma',
  'vodka',
  'zombi',
  'jazz',
  'börtön',
  'börtönőr',
  'Magyaroszág',
  'Amerikai Egyesült Államok',
  'Norvégia',
  'galaxis',
  'passzív',
  'kommunikáció',
  'repülőgép',
  'The Witcher',
  'Star Wars',
  'The Witcher',
  'Fallout',
  "Sid Meier's Civilization V",
  "No Man's Sky",
  'Hearts of Iron IV',
  'klubb',
  'ízletes',
  'rust',
  'javascript',
  'svelte',
  'web fejlesztő',
  'írógép',
  'írónő',
  'titkárnő',
  'telefon',
  'számítógép',
  'képeslap',
];

function getFromRange(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

export function getRandomPhrase(lang) {
  switch (lang) {
    case 'en':
      return englishPhrases[getFromRange(0, englishPhrases.length)];
      break;

    case 'hu':
      return hungarianPhrases[getFromRange(0, hungarianPhrases.length)];
      break;
  }
}