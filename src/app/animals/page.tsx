import Link from 'next/link';
import { Home } from 'lucide-react';
import AnimalSection from '@/components/Animals/AnimalSection';

export default function AnimalsPage() {
  return (
    <div className="flex flex-col flex-1 p-4 bg-gradient-to-b from-indigo-50 to-indigo-100 min-h-screen">
      <header className="flex justify-between items-center mb-6">
        <Link href="/" className="p-3 bg-white text-indigo-500 rounded-full kid-shadow bouncy">
          <Home size={24} />
        </Link>
        <span className="bg-indigo-400 text-white px-4 py-2 rounded-2xl font-bold kid-shadow">
          Draw Animals
        </span>
        <div className="w-12"></div> {/* Spacer */}
      </header>
      
      <div className="flex-1 flex items-center justify-center">
        <AnimalSection />
      </div>
    </div>
  );
}
