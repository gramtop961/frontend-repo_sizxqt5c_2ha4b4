import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-slate-300">© {new Date().getFullYear()} RIVÉROS. All rights reserved.</div>
        <div className="flex items-center gap-2 text-slate-300">
          Made with <Heart className="w-4 h-4 text-sky-300" /> for soulful journeys.
        </div>
      </div>
    </footer>
  );
}
