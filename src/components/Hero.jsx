import React from 'react';
import { Sparkles, Map, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),rgba(29,78,216,0.05),transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-24 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
        >
          Journey India with Heart
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg text-slate-300"
        >
          RIVÉROS is your soulful travel companion—blending cultures, stories, and authentic local experiences into unforgettable adventures across India.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#booking" className="inline-flex items-center gap-2 rounded-lg bg-sky-400/90 hover:bg-sky-400 text-slate-900 font-semibold px-5 py-3 shadow-lg shadow-sky-900/30">
            <Sparkles className="w-5 h-5" /> Plan a Trip
          </a>
          <a href="#map" className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3">
            <Map className="w-5 h-5" /> Explore Regions
          </a>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: HeartHandshake, title: 'Authenticity', desc: 'Local hosts, real stories, genuine warmth.' },
            { icon: Map, title: 'Crafted Journeys', desc: 'Region-based trips tailored to your vibe.' },
            { icon: Sparkles, title: 'Soulful Moments', desc: 'Food, culture, and adventures that linger.' },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * i }}
              className="p-5 rounded-xl bg-white/5 border border-white/10"
            >
              <f.icon className="w-6 h-6 text-sky-300" />
              <div className="mt-2 font-semibold">{f.title}</div>
              <div className="text-sm text-slate-300">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
