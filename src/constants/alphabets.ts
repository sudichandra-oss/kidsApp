export type AlphabetDef = {
  letter: string;
  word: string;
  svgPath: string; // The primary drawing path
};

export const defaultAlphabets: AlphabetDef[] = [
  { letter: 'A', word: 'Apple', svgPath: 'M 50 100 L 75 20 L 100 100 M 60 70 L 90 70' },
  { letter: 'B', word: 'Bear', svgPath: 'M 50 20 L 50 100 M 50 20 Q 100 20 80 50 Q 110 80 50 100 M 50 60 L 80 60' },
  { letter: 'C', word: 'Cat', svgPath: 'M 100 30 Q 50 0 50 60 Q 50 120 100 90' },
  { letter: 'D', word: 'Dog', svgPath: 'M 50 20 L 50 100 M 50 20 Q 110 20 110 60 Q 110 100 50 100' },
  { letter: 'E', word: 'Elephant', svgPath: 'M 100 20 L 50 20 L 50 100 L 100 100 M 50 60 L 90 60' },
  { letter: 'F', word: 'Frog', svgPath: 'M 100 20 L 50 20 L 50 100 M 50 60 L 90 60' },
  { letter: 'G', word: 'Giraffe', svgPath: 'M 100 30 Q 50 0 50 60 Q 50 120 100 90 L 100 60 L 80 60' },
  { letter: 'H', word: 'Horse', svgPath: 'M 50 20 L 50 100 M 100 20 L 100 100 M 50 60 L 100 60' },
  { letter: 'I', word: 'Ice Cream', svgPath: 'M 75 20 L 75 100 M 50 20 L 100 20 M 50 100 L 100 100' },
  { letter: 'J', word: 'Jellyfish', svgPath: 'M 75 20 L 75 90 Q 75 110 50 100 M 50 20 L 100 20' },
  { letter: 'K', word: 'Kangaroo', svgPath: 'M 50 20 L 50 100 M 100 20 L 50 60 L 100 100' },
  { letter: 'L', word: 'Lion', svgPath: 'M 50 20 L 50 100 L 100 100' },
  { letter: 'M', word: 'Monkey', svgPath: 'M 40 100 L 40 20 L 70 60 L 100 20 L 100 100' },
  { letter: 'N', word: 'Nest', svgPath: 'M 40 100 L 40 20 L 100 100 L 100 20' },
  { letter: 'O', word: 'Owl', svgPath: 'M 75 20 Q 30 20 30 60 Q 30 100 75 100 Q 120 100 120 60 Q 120 20 75 20' },
  { letter: 'P', word: 'Pig', svgPath: 'M 50 100 L 50 20 M 50 20 Q 100 20 100 50 Q 100 70 50 70' },
  { letter: 'Q', word: 'Queen', svgPath: 'M 75 20 Q 30 20 30 60 Q 30 100 75 100 Q 120 100 120 60 Q 120 20 75 20 M 85 70 L 110 105' },
  { letter: 'R', word: 'Rabbit', svgPath: 'M 50 100 L 50 20 M 50 20 Q 100 20 100 50 Q 100 70 50 70 M 70 70 L 100 100' },
  { letter: 'S', word: 'Sun', svgPath: 'M 100 35 Q 75 15 50 35 Q 25 55 75 65 Q 125 75 100 95 Q 75 115 50 95' },
  { letter: 'T', word: 'Tiger', svgPath: 'M 75 20 L 75 100 M 40 20 L 110 20' },
  { letter: 'U', word: 'Umbrella', svgPath: 'M 40 20 L 40 70 Q 40 110 75 110 Q 110 110 110 70 L 110 20' },
  { letter: 'V', word: 'Van', svgPath: 'M 40 20 L 75 100 L 110 20' },
  { letter: 'W', word: 'Whale', svgPath: 'M 40 20 L 55 100 L 75 60 L 95 100 L 110 20' },
  { letter: 'X', word: 'Xylophone', svgPath: 'M 40 20 L 110 100 M 110 20 L 40 100' },
  { letter: 'Y', word: 'Yak', svgPath: 'M 40 20 L 75 60 L 110 20 M 75 60 L 75 100' },
  { letter: 'Z', word: 'Zebra', svgPath: 'M 40 20 L 110 20 L 40 100 L 110 100' },
];
