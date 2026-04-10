'use client';
import dynamic from 'next/dynamic';

const DynamicDrawingCanvas = dynamic(
  () => import('./DrawingCanvas'),
  { ssr: false, loading: () => <div className="absolute inset-0 flex items-center justify-center bg-slate-100 rounded-3xl animate-pulse text-slate-400 font-bold">Loading Canvas...</div> }
);

export default DynamicDrawingCanvas;
