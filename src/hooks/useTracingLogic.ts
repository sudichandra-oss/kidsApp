import { useState, useCallback } from 'react';
import { LineData } from '@/components/DrawingCanvas/DrawingCanvas';

// A simple utility to check if tracing was "successful enough"
export function useTracingLogic() {
  const [success, setSuccess] = useState(false);

  const checkTracing = useCallback((allLines: LineData[]) => {
    // calculate total points across all strokes
    let totalPoints = 0;
    for (const line of allLines) {
      if (line.tool === 'pen') {
        totalPoints += line.points.length / 2;
      }
    }
    
    // Require substantial drawing to trigger completion -> requires multiple full strokes
    if (totalPoints > 200) {
      setSuccess(true);
      return true;
    }
    return false;
  }, []);

  const resetTracing = () => {
    setSuccess(false);
  };

  return {
    success,
    checkTracing,
    resetTracing
  };
}
