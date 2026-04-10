import Link from 'next/link';
import { Home, Hash } from 'lucide-react';
import NumberSection from '@/components/Numbers/NumberSection';

export default function NumbersPage() {
  return (
    <div className="flex flex-col flex-1 p-4 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen relative overflow-hidden">
      {/* Playful background decor */}
      <div className="absolute top-20 right-[-20px] w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30 floating" />
      <div className="absolute bottom-10 left-[-20px] w-60 h-60 bg-emerald-100 rounded-full blur-3xl opacity-30 floating-slow" />

      <header className="flex justify-between items-center mb-6 z-10">
        <Link href="/" className="p-3 bg-white text-blue-500 rounded-2xl kid-shadow bouncy">
          <Home size={28} />
        </Link>
        <div className="flex items-center gap-3 bg-white px-6 py-2 rounded-3xl kid-shadow border-4 border-white">
          <Hash className="text-blue-500" size={24} />
          <span className="text-slate-600 font-extrabold text-xl">Numbers 1-50</span>
        </div>
        <div className="w-12"></div> {/* Spacer */}
      </header>
      
      <main className="flex-1 flex items-center justify-center z-10">
        <NumberSection />
      </main>
      
      <footer className="mt-8 text-center text-slate-400 text-sm font-medium z-10">
        Keep going! You're doing amazing! ✨
      </footer>
    </div>
  );
}
