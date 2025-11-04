import React, { useMemo, useState } from 'react';
import { MapPinned, Users, FileText, Utensils, Camera, Film, Landmark, ShieldCheck, CreditCard, ChevronDown, Send, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const regions = [
  { key: 'north', name: 'North', color: 'from-sky-400 to-indigo-500', trips: ['Himalayan Trails', 'Ladakhi Stargaze', 'Golden Triangle Heritage'] },
  { key: 'south', name: 'South', color: 'from-emerald-400 to-teal-500', trips: ['Backwaters & Beaches', 'Chettinad Culture', 'Coffee & Kodagu'] },
  { key: 'east', name: 'East', color: 'from-fuchsia-400 to-pink-500', trips: ['Sunderbans Wild', 'Kolkata Stories', 'Temples of Odisha'] },
  { key: 'west', name: 'West', color: 'from-amber-400 to-orange-500', trips: ['Rann of Kutch', 'Sahyadri Treks', 'Royal Rajasthan'] },
  { key: 'northeast', name: 'North-East', color: 'from-cyan-400 to-sky-500', trips: ['Living Root Bridges', 'Tawang Monasteries', 'Meghalaya Caves'] },
];

export default function Sections() {
  const [activeRegion, setActiveRegion] = useState('north');
  const [faqOpen, setFaqOpen] = useState(null);

  const activeTrips = useMemo(() => regions.find(r => r.key === activeRegion)?.trips ?? [], [activeRegion]);

  return (
    <>
      {/* Story & Vision */}
      <section id="story" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">The RIVÉROS Story</h2>
              <p className="mt-4 text-slate-300">
                Born from backpack trails and chai-side conversations, RIVÉROS began as a promise—to travel India with integrity and heart. We curate journeys that bridge cultures, celebrate local wisdom, and honor the people who make each place special.
              </p>
              <div className="mt-6 p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="font-semibold">Our Vision</div>
                <p className="text-slate-300 text-sm mt-1">A world where travel is a gentle exchange—adventure wrapped in respect, stories shared with kindness, and memories that keep you coming back home to India.</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-sky-500/20 to-indigo-500/10 border border-white/10 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1588692048618-3445b7c2940f?q=80&w=1600&auto=format&fit=crop"
                  alt="Soulful India"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Trip Map */}
      <section id="map" className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.2),transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <MapPinned className="w-6 h-6 text-sky-300" />
            <h2 className="text-3xl font-bold">Dynamic Trip Map</h2>
          </div>
          <p className="mt-2 text-slate-300 max-w-3xl">Explore region-based journeys. Choose a vibe and discover crafted routes with culture, nature, and cuisine woven in.</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {regions.map((r) => (
              <button
                key={r.key}
                onClick={() => setActiveRegion(r.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium border border-white/10 bg-white/5 hover:bg-white/10 transition ${activeRegion === r.key ? 'ring-2 ring-sky-400/50' : ''}`}
              >
                {r.name}
              </button>
            ))}
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {activeTrips.map((trip, i) => (
                <motion.div
                  key={trip}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ delay: i * 0.05 }}
                  className={`p-5 rounded-xl bg-gradient-to-br ${regions.find(r=>r.key===activeRegion)?.color} text-slate-900 border border-white/10`}
                >
                  <div className="text-sm uppercase tracking-wide opacity-80">{regions.find(r=>r.key===activeRegion)?.name}</div>
                  <div className="text-lg font-semibold">{trip}</div>
                  <p className="text-slate-900/80 text-sm mt-1">Guided by local youth companions. Slow, safe, and soulful.</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Team / Join Us */}
      <section id="team" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-sky-300" />
            <h2 className="text-3xl font-bold">Team RIVÉROS — Join Us</h2>
          </div>
          <p className="mt-2 text-slate-300 max-w-3xl">We welcome passionate youth guides and culture keepers. If you love your region and want to host travelers with warmth and care, we’d love to hear from you.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              <div className="font-semibold">Who we’re looking for</div>
              <ul className="mt-2 space-y-2 text-slate-300 text-sm list-disc list-inside">
                <li>Fluent in local language + conversational English</li>
                <li>Respectful, safety-first, guest-centric mindset</li>
                <li>Curious storytellers who cherish local culture</li>
              </ul>
            </div>
            <form className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3" onSubmit={(e)=>e.preventDefault()}>
              <div className="font-semibold">Apply as a Youth Guide</div>
              <div className="grid sm:grid-cols-2 gap-3">
                <input className="bg-white/10 border border-white/10 rounded-md px-3 py-2 placeholder:text-slate-400" placeholder="Full name" required />
                <input className="bg-white/10 border border-white/10 rounded-md px-3 py-2 placeholder:text-slate-400" type="email" placeholder="Email" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <input className="bg-white/10 border border-white/10 rounded-md px-3 py-2 placeholder:text-slate-400" placeholder="Region / City" />
                <input className="bg-white/10 border border-white/10 rounded-md px-3 py-2 placeholder:text-slate-400" placeholder="Languages" />
              </div>
              <textarea className="w-full bg-white/10 border border-white/10 rounded-md px-3 py-2 placeholder:text-slate-400" placeholder="A short note about you" rows={3} />
              <button className="inline-flex items-center gap-2 bg-sky-400/90 hover:bg-sky-400 text-slate-900 font-semibold px-4 py-2 rounded-md">
                <Send className="w-4 h-4" /> Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-sky-300" />
            <h2 className="text-3xl font-bold">Booking & Interest Form</h2>
          </div>
          <p className="mt-2 text-slate-300 max-w-3xl">Tell us your interests and dates. We’ll craft options and share secure payment links upon confirmation.</p>
          <form className="mt-6 grid lg:grid-cols-3 gap-4" onSubmit={(e)=>e.preventDefault()}>
            <div className="lg:col-span-2 space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input className="bg-white/10 border border-white/10 rounded-md px-3 py-2 placeholder:text-slate-400 w-full" placeholder="Full name" required />
                <input className="bg-white/10 border border-white/10 rounded-md px-3 py-2 placeholder:text-slate-400 w-full" type="email" placeholder="Email" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <input className="bg-white/10 border border-white/10 rounded-md px-3 py-2 placeholder:text-slate-400 w-full" placeholder="Preferred region" />
                <input className="bg-white/10 border border-white/10 rounded-md px-3 py-2 placeholder:text-slate-400 w-full" placeholder="Travel dates" />
              </div>
              <textarea className="w-full bg-white/10 border border-white/10 rounded-md px-3 py-2 placeholder:text-slate-400" placeholder="Interests (food, culture, trekking, calm stays...)" rows={4} />
              <button className="inline-flex items-center gap-2 bg-sky-400/90 hover:bg-sky-400 text-slate-900 font-semibold px-4 py-2 rounded-md">
                <Send className="w-4 h-4" /> Send Request
              </button>
            </div>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="font-semibold flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-sky-300"/> Security & Payments</div>
                <ul className="text-sm text-slate-300 mt-2 space-y-1 list-disc list-inside">
                  <li>Payments via UPI, cards, and bank transfer</li>
                  <li>Only charged after trip confirmation</li>
                  <li>Transparent cancellation & reschedule options</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="font-semibold">Contact for quick help</div>
                <div className="text-sm text-slate-300 flex items-center gap-2 mt-1"><Phone className="w-4 h-4"/> +91-90000-00000</div>
                <div className="text-sm text-slate-300">hello@riveros.travel</div>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Brochure Library */}
      <section id="brochures" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-sky-300" />
            <h2 className="text-3xl font-bold">Trip Brochure Library</h2>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {["Himalayan Retreat","Coastal Slow Travel","Royal Heritage","Tea Trails","Wild India","Sacred Circuits"].map((title)=> (
              <div key={title} className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
                <div className="aspect-[16/9] bg-gradient-to-br from-indigo-500/20 to-sky-500/10" />
                <div className="p-4">
                  <div className="font-semibold">{title}</div>
                  <div className="text-sm text-slate-300">Download a sample itinerary or request a custom brochure.</div>
                  <div className="mt-3 flex gap-2">
                    <a href="#booking" className="px-3 py-1.5 text-sm rounded-md bg-sky-400/90 text-slate-900 font-semibold">Request</a>
                    <a href="#" className="px-3 py-1.5 text-sm rounded-md bg-white/10">View sample</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Immersion */}
      <section id="culture" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Utensils className="w-6 h-6 text-sky-300" />
            <h2 className="text-3xl font-bold">Cultural Immersion</h2>
          </div>
          <div className="mt-6 grid lg:grid-cols-3 gap-4">
            {[{icon: Utensils, title: 'Local Food', desc:'From home-cooked thalis to secret street eats.'}, {icon: Landmark, title: 'Living Heritage', desc:'Crafts, rituals, music, and community life.'}, {icon: Camera, title: 'Stories & Trails', desc:'Walks with storytellers and photographers.'}].map((c) => (
              <div key={c.title} className="p-5 rounded-xl bg-white/5 border border-white/10">
                <c.icon className="w-6 h-6 text-sky-300" />
                <div className="mt-2 font-semibold">{c.title}</div>
                <div className="text-sm text-slate-300">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Camera className="w-6 h-6 text-sky-300" />
            <h2 className="text-3xl font-bold">Travel Photo & Video Gallery</h2>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1603264047959-3617da8a7a1a?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1561378491-77a0aa3b3a3d?q=80&w=1200&auto=format&fit=crop',
            ].map((src, i) => (
              <div key={src} className="group relative rounded-xl overflow-hidden border border-white/10">
                <img src={src} alt="India travel" className="h-56 w-full object-cover group-hover:scale-105 transition" />
                {i === 1 && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-sm">Varanasi Ghats at dawn</div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 aspect-video rounded-xl overflow-hidden border border-white/10">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/kEi2-2Z9GxI?rel=0"
              title="India Travel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* India in One Frame */}
      <section id="oneframe" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Film className="w-6 h-6 text-sky-300" />
            <h2 className="text-3xl font-bold">India in One Frame</h2>
          </div>
          <div className="mt-6 rounded-2xl overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop"
              alt="India in one frame collage"
              className="w-full h-[380px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Security & Payment Terms */}
      <section id="security" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-sky-300" />
            <h2 className="text-3xl font-bold">Security & Payment Terms</h2>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              {title: 'Safe & Responsible', desc:'Background-verified guides, SOS protocols, and health-first itineraries.'},
              {title: 'Transparent Pricing', desc:'No hidden fees. Clear inclusions and exclusions in every proposal.'},
              {title: 'Flexible Options', desc:'Easy reschedules with fair cancellation terms.'},
            ].map((b) => (
              <div key={b.title} className="p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="font-semibold">{b.title}</div>
                <div className="text-sm text-slate-300">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">FAQ</h2>
          <div className="mt-6 divide-y divide-white/10 rounded-xl border border-white/10 overflow-hidden">
            {[
              {q:'How are companions selected?', a:'We work with trained local youth, community hosts, and certified partners who prioritize safety and cultural respect.'},
              {q:'Do you arrange flights and hotels?', a:'We recommend stays and help you book verified properties. Flights can be arranged through trusted partners.'},
              {q:'What about dietary preferences?', a:'We curate food experiences to match your needs—vegetarian, vegan, Jain, halal, and more.'},
              {q:'How do payments work?', a:'Once you confirm an itinerary, we share secure links for UPI/cards/bank transfer. No charges until you approve.'},
            ].map((item, idx) => (
              <div key={item.q} className="bg-white/5">
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-white/10"
                >
                  <span className="font-medium">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 transition ${faqOpen === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {faqOpen === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-4 pb-4 text-slate-300 text-sm"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold">Contact</h2>
              <p className="mt-2 text-slate-300">We’re here to help you craft a heartfelt journey across India.</p>
              <div className="mt-4 text-sm text-slate-300">
                <div>hello@riveros.travel</div>
                <div className="flex items-center gap-2 mt-1"><Phone className="w-4 h-4"/> +91-90000-00000</div>
              </div>
            </div>
            <form className="lg:col-span-2 grid sm:grid-cols-2 gap-3" onSubmit={(e)=>e.preventDefault()}>
              <input className="bg-white/10 border border-white/10 rounded-md px-3 py-2 placeholder:text-slate-400" placeholder="Name" required />
              <input className="bg-white/10 border border-white/10 rounded-md px-3 py-2 placeholder:text-slate-400" placeholder="Email" type="email" required />
              <input className="sm:col-span-2 bg-white/10 border border-white/10 rounded-md px-3 py-2 placeholder:text-slate-400" placeholder="Subject" />
              <textarea className="sm:col-span-2 bg-white/10 border border-white/10 rounded-md px-3 py-2 placeholder:text-slate-400" placeholder="Message" rows={4} />
              <button className="sm:col-span-2 inline-flex items-center justify-center gap-2 bg-sky-400/90 hover:bg-sky-400 text-slate-900 font-semibold px-4 py-2 rounded-md">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
