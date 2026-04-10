'use strict';
import Link from 'next/link';
import { Palette, Baseline, Dog, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 p-6 items-center justify-center space-y-8 bg-gradient-to-b from-[var(--background)] to-[#dcfce7]">
      <div className="text-center space-y-2 animate-tada">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
          Kids Learn <br /> & Draw!
        </h1>
        <div className="flex justify-center items-center gap-2 text-amber-500">
          <Star className="w-6 h-6 fill-amber-400" />
          <span className="font-bold text-lg text-slate-700">12 Stars</span>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-sm gap-4">
        <Link href="/alphabets" className="block w-full bouncy">
          <button className="w-full bg-pink-400 text-white rounded-3xl p-6 flex items-center justify-between kid-shadow kid-shadow-active hover:bg-pink-500 transition-colors">
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-full text-pink-500">
                <Baseline size={32} />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">Alphabets</h2>
                <p className="text-pink-100 text-sm">Trace A to Z</p>
              </div>
            </div>
          </button>
        </Link>

        <Link href="/animals" className="block w-full bouncy">
          <button className="w-full bg-blue-400 text-white rounded-3xl p-6 flex items-center justify-between kid-shadow kid-shadow-active hover:bg-blue-500 transition-colors">
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-full text-blue-500">
                <Dog size={32} />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">Animals</h2>
                <p className="text-blue-100 text-sm">Draw & Color</p>
              </div>
            </div>
          </button>
        </Link>
        
        <Link href="/free-draw" className="block w-full bouncy">
          <button className="w-full bg-emerald-400 text-white rounded-3xl p-6 flex items-center justify-between kid-shadow kid-shadow-active hover:bg-emerald-500 transition-colors">
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-full text-emerald-500">
                <Palette size={32} />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">Free Draw</h2>
                <p className="text-emerald-100 text-sm">Color your world</p>
              </div>
            </div>
          </button>
        </Link>
      </div>
      
      <div className="mt-auto pt-6 w-full text-center">
        <p className="text-slate-400 text-sm font-medium">Ready to play and learn?</p>
      </div>
    </div>
  );
}
