'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Home, Trash2 } from 'lucide-react';
import dynamic from 'next/dynamic';
import Toolbar from '@/components/UI/Toolbar';
import { ToolProps } from '@/components/DrawingCanvas/DrawingCanvas';

const DynamicDrawingCanvas = dynamic(
  () => import('@/components/DrawingCanvas/DynamicDrawingCanvas'),
  { ssr: false }
);

export default function FreeDrawPage() {
  const [tool, setTool] = useState<ToolProps>({
    color: '#f472b6',
    brushSize: 15,
    toolType: 'pen'
  });
  const [canvasKey, setCanvasKey] = useState(0);

  const handleClear = () => setCanvasKey((prev) => prev + 1);

  return (
    <div className="flex flex-col flex-1 p-4 bg-gradient-to-b from-emerald-50 to-emerald-100 min-h-screen">
      <header className="flex justify-between items-center mb-6">
        <Link href="/" className="p-3 bg-white text-emerald-500 rounded-full kid-shadow bouncy">
          <Home size={24} />
        </Link>
        <span className="bg-emerald-400 text-white px-4 py-2 rounded-2xl font-bold kid-shadow">
          Free Draw
        </span>
        <button onClick={handleClear} className="p-3 bg-white text-rose-500 rounded-full kid-shadow bouncy">
          <Trash2 size={24} />
        </button>
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-start space-y-6">
        <DynamicDrawingCanvas
          key={canvasKey}
          width={340}
          height={400}
          currentTool={tool}
        />
        <div className="w-full max-w-sm">
          <Toolbar currentTool={tool} onChange={setTool} />
        </div>
      </div>
    </div>
  );
}
