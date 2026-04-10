'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { defaultNumbers } from '@/constants/numbers';
import { useTracingLogic } from '@/hooks/useTracingLogic';
import { ArrowBigRight, ArrowBigLeft, Play, RotateCcw } from 'lucide-react';

const DynamicDrawingCanvas = dynamic(
  () => import('@/components/DrawingCanvas/DynamicDrawingCanvas'),
  { ssr: false }
);

export default function NumberSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentNum = defaultNumbers[currentIndex];
  const { success, checkTracing, resetTracing } = useTracingLogic();
  const [canvasKey, setCanvasKey] = useState(0); // To force clear canvas

  // Speak number on change
  useEffect(() => {
    speak(`${currentNum.number}. ${currentNum.word}`);
    resetTracing();
    setCanvasKey((prev) => prev + 1);
  }, [currentIndex]);

  const speak = (text: string) => {
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=en&client=tw-ob`;
    const audio = new Audio(url);
    
    audio.play().catch((err) => {
      console.warn("External TTS model failed, falling back to browser synthesis.", err);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => v.lang.includes('en') && (v.name.includes('Female') || v.name.includes('Google')));
        if (preferredVoice) utterance.voice = preferredVoice;
        window.speechSynthesis.speak(utterance);
      }
    });
  };

  const handleNext = () => {
    if (currentIndex < defaultNumbers.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleClear = () => {
    resetTracing();
    setCanvasKey((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-xl p-2 space-y-4">
      <div className="flex w-full justify-between items-center bg-white p-4 rounded-3xl kid-shadow">
        <button 
          onClick={handlePrev} 
          disabled={currentIndex === 0}
          className="p-3 bg-blue-100 text-blue-500 rounded-full disabled:opacity-50 bouncy"
        >
          <ArrowBigLeft />
        </button>
        
        <div className="text-center">
          <h2 className="text-6xl font-extrabold text-blue-500 animate-tada">
            {currentNum.number}
          </h2>
          <p className="text-xl text-slate-500 font-bold">{currentNum.word}</p>
        </div>

        <button 
          onClick={handleNext} 
          disabled={currentIndex === defaultNumbers.length - 1}
          className="p-3 bg-blue-100 text-blue-500 rounded-full disabled:opacity-50 bouncy"
        >
          <ArrowBigRight />
        </button>
      </div>

      <div className="relative bg-white rounded-[40px] kid-shadow overflow-hidden border-8 border-white p-2">
        <DynamicDrawingCanvas
          key={canvasKey}
          width={400}
          height={520}
          bgPath={currentNum.svgPath}
          currentTool={{ toolType: 'pen', color: '#3b82f6', brushSize: 15 }} // Blue color brush for numbers
          onStrokeComplete={checkTracing}
        />
        
        {success && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center animate-sparkle">
            <div className="bg-white/90 p-6 rounded-full text-green-500 font-bold text-3xl kid-shadow animate-tada">
              ✨ {currentNum.number}! ✨
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-4">
        <button 
          onClick={() => speak(`${currentNum.number}. ${currentNum.word}`)}
          className="px-8 py-3 bg-emerald-400 text-white font-bold rounded-2xl kid-shadow flex items-center gap-2 bouncy"
        >
          <Play size={20} /> Sound
        </button>
        <button 
          onClick={handleClear}
          className="px-8 py-3 bg-rose-400 text-white font-bold rounded-2xl kid-shadow flex items-center gap-2 bouncy"
        >
          <RotateCcw size={20} /> Clear
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-4 px-4 overflow-y-auto max-h-32">
        {/* Number quick selector for 1-50 */}
        {defaultNumbers.map((num, idx) => (
          <button
            key={num.number}
            onClick={() => setCurrentIndex(idx)}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
              currentIndex === idx ? 'bg-blue-500 text-white scale-110 kid-shadow' : 'bg-white text-slate-400 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {num.number}
          </button>
        ))}
      </div>
    </div>
  );
}
