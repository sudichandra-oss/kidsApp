export type AlphabetDef = {
  letter: string;
  word: string;
  svgPath: string; // The primary drawing path
};

export const defaultAlphabets: AlphabetDef[] = [
  {
    letter: 'A',
    word: 'Apple',
    // Simple A shape path
    svgPath: 'M 50 100 L 75 20 L 100 100 M 60 70 L 90 70',
  },
  {
    letter: 'B',
    word: 'Bear',
    // Simple B shape path
    svgPath: 'M 50 20 L 50 100 M 50 20 Q 90 20 80 50 Q 100 80 50 100 M 50 60 L 80 60',
  },
  {
    letter: 'C',
    word: 'Cat',
    svgPath: 'M 100 30 Q 50 0 50 60 Q 50 120 100 90',
  }
];
