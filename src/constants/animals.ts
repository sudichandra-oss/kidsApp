export type AnimalDef = {
  id: string;
  name: string;
  soundText: string;
  svgPath: string; // Simplistic outline for testing
};

export const defaultAnimals: AnimalDef[] = [
  {
    id: 'dog',
    name: 'Dog',
    soundText: 'Woof woof!',
    // Simplified Dog Head shape
    svgPath: 'M 100 50 Q 150 50 150 100 Q 150 150 100 150 Q 50 150 50 100 Q 50 50 100 50 M 50 80 Q 20 80 20 120 M 150 80 Q 180 80 180 120',
  },
  {
    id: 'cat',
    name: 'Cat',
    soundText: 'Meow!',
    // Simplified Cat Head shape
    svgPath: 'M 50 150 L 50 50 L 100 100 L 150 50 L 150 150 Z',
  }
];
