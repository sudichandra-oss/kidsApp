'use client';
import { ToolProps } from '../DrawingCanvas/DrawingCanvas';
import { Eraser, Pencil, Palette } from 'lucide-react';

interface ToolbarProps {
  currentTool: ToolProps;
  onChange: (tool: ToolProps) => void;
}

const colors = ['#f472b6', '#3b82f6', '#34d399', '#fbbf24', '#f87171', '#a78bfa', '#1e293b'];
const brushes = [5, 15, 30];

export default function Toolbar({ currentTool, onChange }: ToolbarProps) {
  return (
    <div className="bg-white rounded-3xl p-4 kid-shadow flex flex-col gap-4 w-full">
      <div className="flex justify-center gap-4">
        <button
          onClick={() => onChange({ ...currentTool, toolType: 'pen' })}
          className={`p-3 rounded-2xl kid-shadow bouncy ${currentTool.toolType === 'pen' ? 'bg-pink-100 border-4 border-pink-400' : 'bg-slate-50 border-4 border-transparent'}`}
        >
          <Pencil className={currentTool.toolType === 'pen' ? 'text-pink-500' : 'text-slate-400'} />
        </button>
        <button
          onClick={() => onChange({ ...currentTool, toolType: 'eraser' })}
          className={`p-3 rounded-2xl kid-shadow bouncy ${currentTool.toolType === 'eraser' ? 'bg-blue-100 border-4 border-blue-400' : 'bg-slate-50 border-4 border-transparent'}`}
        >
          <Eraser className={currentTool.toolType === 'eraser' ? 'text-blue-500' : 'text-slate-400'} />
        </button>
      </div>

      <div className="flex justify-center gap-2 flex-wrap">
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => onChange({ ...currentTool, color: c, toolType: 'pen' })} // select pen automatically
            className={`w-10 h-10 rounded-full bouncy border-4 ${currentTool.color === c && currentTool.toolType === 'pen' ? 'border-slate-800 scale-110' : 'border-transparent'}`}
            style={{ backgroundColor: c }}
          />
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 pt-2 border-t-2 border-slate-100">
        <span className="text-sm font-bold text-slate-400">Brush Size:</span>
        {brushes.map((b, i) => (
          <button
            key={b}
            onClick={() => onChange({ ...currentTool, brushSize: b })}
            className={`rounded-full bg-slate-800 bouncy flex items-center justify-center ${currentTool.brushSize === b ? 'ring-4 ring-pink-300' : ''}`}
            style={{ width: 10 + i * 10, height: 10 + i * 10 }}
          />
        ))}
      </div>
    </div>
  );
}
