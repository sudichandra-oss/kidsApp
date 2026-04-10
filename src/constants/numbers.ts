export type NumberDef = {
  number: number;
  word: string;
  svgPath: string;
};

// SVG Paths for digits 0-9 centered in a 100x100 space
const digits = {
  '0': 'M 50 20 Q 80 20 80 60 Q 80 100 50 100 Q 20 100 20 60 Q 20 20 50 20',
  '1': 'M 50 20 L 50 100 M 35 30 L 50 20',
  '2': 'M 30 40 Q 30 20 50 20 Q 70 20 70 40 Q 70 60 30 100 L 70 100',
  '3': 'M 30 30 Q 70 20 70 45 Q 70 60 50 60 Q 70 60 70 75 Q 70 100 30 90',
  '4': 'M 70 80 L 20 80 L 60 20 L 60 100',
  '5': 'M 70 20 L 30 20 L 30 50 Q 70 45 70 75 Q 70 100 30 100',
  '6': 'M 70 30 Q 50 20 40 60 Q 30 100 50 100 Q 70 100 70 60 Q 70 40 50 40',
  '7': 'M 30 20 L 70 20 L 40 100',
  '8': 'M 50 20 Q 70 20 70 40 Q 70 60 50 60 Q 30 60 30 40 Q 30 20 50 20 M 50 60 Q 75 60 75 80 Q 75 100 50 100 Q 25 100 25 80 Q 25 60 50 60',
  '9': 'M 30 80 Q 50 90 60 50 Q 70 10 50 10 Q 30 10 30 40 Q 30 70 50 70',
};

// Helper to generate a path for double digits
const combineDigits = (d1: string, d2: string) => {
  // Simple horizontal offset for tracing
  // We'll shift the second digit to the right
  const path1 = digits[d1 as keyof typeof digits];
  const path2 = digits[d2 as keyof typeof digits];
  
  // To keep it simple for tracing, we'll just use a relative spacing
  // In a real SVG world we would parse and shift coords, 
  // but for Konva we can just return a multi-segment path.
  // We shift d1 left and d2 right in a 200x100 space.
  
  // Shift digit 1 by -40 and digit 2 by +40
  // (This is a hacky way but works if the Path component handles it)
  // Cleaner: Just use the paths as is and the component will render them.
  // For simplicity, we'll return a path that contains both Digit segments.
  return `${path1} ${path2.replace(/M /g, 'M 80 ').replace(/L /g, 'L 80 ').replace(/Q /g, 'Q 80 ')}`;
};

const numberWords = [
  "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
  "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty",
  "Twenty-one", "Twenty-two", "Twenty-three", "Twenty-four", "Twenty-five", "Twenty-six", "Twenty-seven", "Twenty-eight", "Twenty-nine", "Thirty",
  "Thirty-one", "Thirty-two", "Thirty-three", "Thirty-four", "Thirty-five", "Thirty-six", "Thirty-seven", "Thirty-eight", "Thirty-nine", "Forty",
  "Forty-one", "Forty-two", "Forty-three", "Forty-four", "Forty-five", "Forty-six", "Forty-seven", "Forty-eight", "Forty-nine", "Fifty"
];

export const defaultNumbers: NumberDef[] = Array.from({ length: 50 }, (_, i) => {
  const n = i + 1;
  const s = n.toString();
  let path = "";
  
  if (s.length === 1) {
    path = digits[s as keyof typeof digits];
  } else {
    // Basic double digit combination logic
    const d1 = s[0];
    const d2 = s[1];
    // We'll roughly offset the second digit in the SVG string
    // This is a bit brute force but effective for tracing guides
    const p1 = digits[d1 as keyof typeof digits];
    const p2 = digits[d2 as keyof typeof digits];
    
    // We shift the second digit path to the right
    // Simple approach: append a translated move command
    // We'll use a 150x100 space for double digits
    path = `${p1} m 60 0 ${p2.replace(/M/g, '').replace(/m/g, '')}`;
  }
  
  return {
    number: n,
    word: numberWords[n],
    svgPath: path
  };
});
