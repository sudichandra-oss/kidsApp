export type AnimalDef = {
  id: string;
  name: string;
  soundText: string;
  svgPath: string;
};

export const defaultAnimals: AnimalDef[] = [
  {
    id: 'dog',
    name: 'Dog',
    soundText: 'Woof woof!',
    // Detailed Dog body path
    svgPath: 'M 60 100 Q 60 60 100 60 Q 140 60 140 100 Q 140 140 100 140 Q 60 140 60 100 M 70 80 Q 50 60 60 40 Q 80 40 90 70 M 130 80 Q 150 60 140 40 Q 120 40 110 70 M 80 140 L 80 180 M 120 140 L 120 180 M 60 110 Q 30 110 30 150 M 140 110 Q 170 110 170 150',
  },
  {
    id: 'elephant',
    name: 'Elephant',
    soundText: 'Pawoo!',
    svgPath: 'M 100 50 Q 160 50 160 100 L 160 150 L 130 150 L 130 120 L 70 120 L 70 150 L 40 150 L 40 80 Q 40 50 100 50 M 40 80 L 10 120 L 10 140 Q 30 140 40 110 M 160 80 Q 180 80 180 120 L 160 120',
  },
  {
    id: 'lion',
    name: 'Lion',
    soundText: 'Roar!',
    svgPath: 'M 100 40 Q 130 40 130 70 Q 130 100 100 100 Q 70 100 70 70 Q 70 40 100 40 M 100 20 Q 150 20 150 70 Q 150 120 100 120 Q 50 120 50 70 Q 50 20 100 20 M 60 120 L 40 160 M 140 120 L 160 160 M 100 120 L 100 180',
  },
  {
    id: 'fish',
    name: 'Fish',
    soundText: 'Blub blub!',
    svgPath: 'M 30 100 Q 80 50 130 100 Q 80 150 30 100 M 130 100 L 160 70 L 160 130 Z M 60 85 Q 70 85 70 75 M 65 100 Q 75 100 75 110',
  },
  {
    id: 'bird',
    name: 'Bird',
    soundText: 'Tweet tweet!',
    svgPath: 'M 50 100 Q 75 50 100 100 Q 75 150 50 100 M 100 100 L 140 80 L 120 100 L 140 120 Z M 100 90 Q 110 80 120 90 M 60 100 Q 40 80 20 100 Q 40 120 60 100',
  },
  {
    id: 'rabbit',
    name: 'Rabbit',
    soundText: 'Boing boing!',
    svgPath: 'M 100 100 Q 140 100 140 140 Q 140 180 100 180 Q 60 180 60 140 Q 60 100 100 100 M 80 100 L 70 40 Q 85 30 100 60 M 120 100 L 130 40 Q 115 30 100 60 M 100 140 Q 100 120 120 120',
  }
];
