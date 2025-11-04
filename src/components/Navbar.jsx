import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'map', label: 'Dynamic Trip Map' },
  { id: 'team', label: 'Team' },
  { id: 'booking', label: 'Booking' },
  { id: 'brochures', label: 'Brochures' },
  { id: 'culture', label: 'Cultural Immersion' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'oneframe', label: 'India in One Frame' },
  { id: 'security', label: 'Security & Payments' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0b1e3d]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-900/30">
            <span className="font-extrabold text-slate-900">R</span>
          </div>
          <div>
            <div className="text-xl font-semibold tracking-wide">RIVÉROS</div>
            <div className="text-[11px] text-slate-300 -mt-1">Indian Travel Companion Agency</div>
          </div>
        </div>
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="text-slate-300 hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button
          className="lg:hidden p-2 rounded-md hover:bg-white/10"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[#0b1e3d]/90">
          <div className="px-4 py-3 grid grid-cols-2 gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="text-left text-slate-200 py-2 px-3 rounded-md hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
