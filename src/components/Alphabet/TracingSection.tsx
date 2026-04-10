'use client';
import { useState, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { defaultAlphabets } from '@/constants/alphabets';
import { useTracingLogic } from '@/hooks/useTracingLogic';
import { ArrowBigRight, ArrowBigLeft, Play, RotateCcw } from 'lucide-react';

const DynamicDrawingCanvas = dynamic(
  () => import('@/components/DrawingCanvas/DynamicDrawingCanvas'),
  { ssr: false }
);

export default function TracingSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentLetter = defaultAlphabets[currentIndex];
  const { success, checkTracing, resetTracing } = useTracingLogic();
  const [canvasKey, setCanvasKey] = useState(0); // To force clear canvas

  // Speak letter on change
  useEffect(() => {
    speak(`${currentLetter.letter} for ${currentLetter.word}`);
    resetTracing();
    setCanvasKey((prev) => prev + 1);
  }, [currentIndex]);

  const speak = (text: string) => {
    // Try to play using a high-quality "Agent" TTS model API endpoint 
    // Uses Google's translation TTS engine which sounds very realistic and model-like.
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=en&client=tw-ob`;
    const audio = new Audio(url);
    
    audio.play().catch((err) => {
      console.warn("External TTS model failed, falling back to browser synthesis.", err);
      // Fallback to local synth
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
    if (currentIndex < defaultAlphabets.length - 1) {
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
    <div className="flex flex-col items-center w-full max-w-md p-4 space-y-6">
      <div className="flex w-full justify-between items-center bg-white p-4 rounded-3xl kid-shadow">
        <button 
          onClick={handlePrev} 
          disabled={currentIndex === 0}
          className="p-3 bg-pink-100 text-pink-500 rounded-full disabled:opacity-50 bouncy"
        >
          <ArrowBigLeft />
        </button>
        
        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-700 animate-tada">
            {currentLetter.letter}
          </h2>
          <p className="text-xl text-pink-500 font-bold">{currentLetter.word}</p>
        </div>

        <button 
          onClick={handleNext} 
          disabled={currentIndex === defaultAlphabets.length - 1}
          className="p-3 bg-blue-100 text-blue-500 rounded-full disabled:opacity-50 bouncy"
        >
          <ArrowBigRight />
        </button>
      </div>

      <div className="relative">
        <DynamicDrawingCanvas
          key={canvasKey}
          width={340}
          height={380}
          bgPath={currentLetter.svgPath}
          currentTool={{ toolType: 'pen', color: '#fbbf24', brushSize: 15 }} // Amber color brush
          onStrokeComplete={checkTracing}
        />
        
        {success && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center animate-sparkle">
            <div className="bg-white/80 p-6 rounded-full text-success font-bold text-2xl kid-shadow">
              ⭐ Great! ⭐
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-4">
        <button 
          onClick={() => speak(`${currentLetter.letter} for ${currentLetter.word}`)}
          className="px-6 py-3 bg-indigo-400 text-white font-bold rounded-2xl kid-shadow flex items-center gap-2 bouncy"
        >
          <Play size={20} /> Sound
        </button>
        <button 
          onClick={handleClear}
          className="px-6 py-3 bg-rose-400 text-white font-bold rounded-2xl kid-shadow flex items-center gap-2 bouncy"
        >
          <RotateCcw size={20} /> Clear
        </button>
      </div>
    </div>
  );
}
