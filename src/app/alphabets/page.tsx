import Link from 'next/link';
import { Home } from 'lucide-react';
import TracingSection from '@/components/Alphabet/TracingSection';

export default function AlphabetsPage() {
  return (
    <div className="flex flex-col flex-1 p-4 bg-gradient-to-b from-pink-50 to-pink-100 min-h-screen">
      <header className="flex justify-between items-center mb-6">
        <Link href="/" className="p-3 bg-white text-pink-500 rounded-full kid-shadow bouncy">
          <Home size={24} />
        </Link>
        <span className="bg-pink-400 text-white px-4 py-2 rounded-2xl font-bold kid-shadow">
          Learn ABCs
        </span>
        <div className="w-12"></div> {/* Spacer */}
      </header>
      
      <div className="flex-1 flex items-center justify-center">
        <TracingSection />
      </div>
    </div>
  );
}
