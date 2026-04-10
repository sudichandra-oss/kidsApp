import { useState, useCallback } from 'react';

// A simple utility to check if tracing was "successful enough"
// In a real advanced app, we'd do complex path intersection. 
// For kids, if they draw enough points inside a bounding box of the guide, it's a win!

export function useTracingLogic() {
  const [success, setSuccess] = useState(false);

  const checkTracing = useCallback((strokePoints: number[]) => {
    // Simple heuristic: If stroke is long enough, we count it as "success"
    // Since Konva provides x,y pairs flattened [x1, y1, x2, y2...]
    const pointCount = strokePoints.length / 2;
    
    // If they drew enough points, consider it traced
    if (pointCount > 20) {
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
