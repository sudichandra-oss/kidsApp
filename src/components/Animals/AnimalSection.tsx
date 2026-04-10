'use strict';
'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { defaultAnimals } from '@/constants/animals';
import Toolbar from '@/components/UI/Toolbar';
import { ToolProps } from '@/components/DrawingCanvas/DrawingCanvas';
import { ArrowBigRight, ArrowBigLeft, Volume2, RotateCcw } from 'lucide-react';

const DynamicDrawingCanvas = dynamic(
  () => import('@/components/DrawingCanvas/DynamicDrawingCanvas'),
  { ssr: false }
);

export default function AnimalSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentAnimal = defaultAnimals[currentIndex];
  
  const [tool, setTool] = useState<ToolProps>({
    color: '#3b82f6',
    brushSize: 15,
    toolType: 'pen'
  });
  
  const [canvasKey, setCanvasKey] = useState(0); // To force clear canvas

  // Speak on change
  useEffect(() => {
    speak(`${currentAnimal.name}! ${currentAnimal.soundText}`);
    setCanvasKey((prev) => prev + 1);
  }, [currentIndex]);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = 1.4;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleNext = () => {
    if (currentIndex < defaultAnimals.length - 1) setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const handleClear = () => {
    setCanvasKey((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md p-4 space-y-6">
      <div className="flex w-full justify-between items-center bg-white p-4 rounded-3xl kid-shadow">
        <button 
          onClick={handlePrev} 
          disabled={currentIndex === 0}
          className="p-3 bg-indigo-100 text-indigo-500 rounded-full disabled:opacity-50 bouncy"
        >
          <ArrowBigLeft />
        </button>
        
        <div className="text-center" onClick={() => speak(currentAnimal.soundText)}>
          <h2 className="text-4xl font-bold text-indigo-500 animate-tada">
            {currentAnimal.name}
          </h2>
        </div>

        <button 
          onClick={handleNext} 
          disabled={currentIndex === defaultAnimals.length - 1}
          className="p-3 bg-indigo-100 text-indigo-500 rounded-full disabled:opacity-50 bouncy"
        >
          <ArrowBigRight />
        </button>
      </div>

      <div className="relative">
        <DynamicDrawingCanvas
          key={canvasKey}
          width={300}
          height={300}
          bgPath={currentAnimal.svgPath}
          currentTool={tool}
        />
      </div>
      
      <Toolbar currentTool={tool} onChange={setTool} />

      <div className="flex gap-4 w-full justify-center">
        <button 
          onClick={() => speak(currentAnimal.soundText)}
          className="flex-1 py-3 bg-amber-400 text-white font-bold rounded-2xl kid-shadow flex items-center justify-center gap-2 bouncy"
        >
          <Volume2 size={20} /> Sound
        </button>
        <button 
          onClick={handleClear}
          className="flex-1 py-3 bg-rose-400 text-white font-bold rounded-2xl kid-shadow flex items-center justify-center gap-2 bouncy"
        >
          <RotateCcw size={20} /> Clear
        </button>
      </div>
    </div>
  );
}
