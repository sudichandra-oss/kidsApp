'use client';
import { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Line, Path, Image as KonvaImage } from 'react-konva';
import { v4 as uuidv4 } from 'uuid';

export type ToolProps = {
  color: string;
  brushSize: number;
  toolType: 'pen' | 'eraser';
};

export type Point = { x: number; y: number };
export type LineData = {
  tool: ToolProps['toolType'];
  points: number[];
  color: string;
  brushSize: number;
};

interface DrawingCanvasProps {
  width: number;
  height: number;
  currentTool: ToolProps;
  bgPath?: string; // Optional path for dot-tracing
  onStrokeComplete?: (lines: LineData[]) => void;
}

export default function DrawingCanvas({
  width,
  height,
  currentTool,
  bgPath,
  onStrokeComplete
}: DrawingCanvasProps) {
  const [lines, setLines] = useState<LineData[]>([]);
  const isDrawing = useRef(false);

  const handleMouseDown = (e: any) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { 
      tool: currentTool.toolType, 
      points: [pos.x, pos.y], 
      color: currentTool.color, 
      brushSize: currentTool.brushSize 
    }]);
  };

  const handleMouseMove = (e: any) => {
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
    if (onStrokeComplete && lines.length > 0) {
      onStrokeComplete(lines);
    }
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden border-4 border-slate-200" style={{ width, height, touchAction: 'none' }}>
      <Stage
        width={width}
        height={height}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        className="touch-none"
      >
        <Layer>
          {/* Guide Path (e.g. Dotted Alphabet or Animal Outline) */}
          {bgPath && (
            <Path
              data={bgPath}
              stroke="#cbd5e1" /* Slate 300 */
              strokeWidth={5}
              lineCap="round"
              lineJoin="round"
              dash={[1, 15]} /* Creates circular dots */
              scale={{ x: 2, y: 2 }} // Reduced scale so it fits the canvas
              x={10} // Reduced offset to center it better
              y={30}
            />
          )}

          {/* User Drawings */}
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={line.tool === 'eraser' ? '#ffffff' : line.color}
              strokeWidth={line.brushSize}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              globalCompositeOperation={
                line.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}
