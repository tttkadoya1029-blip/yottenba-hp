"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="top" className="retro-section bg-hero-retro lantern-border-bottom overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-20 md:grid-cols-2 md:py-28 content-overlay">
        <div className="relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-white/70"
          >
            Izakaya Revolution in Makati
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-3 text-4xl font-bold leading-tight md:text-5xl"
          >
            Eat, Drink & Get{" "}
            <span className="text-white/90">YOTTEBA!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-5 max-w-xl text-base text-white/75"
          >
            Your go-to spot for authentic Japanese izakaya vibes in Makati.
            Famous tebasaki wings, craft drinks, and daily specials.
            Perfect for after-work sessions, late-night cravings, and group celebrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#menu"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 hover:opacity-90"
            >
              View Menu
            </a>
            <a
              href="#howto"
              className="rounded-2xl border border-white/20 px-5 py-3 text-sm text-white hover:bg-white/10"
            >
              How to Enjoy
            </a>
          </motion.div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl">
            <div className="h-full w-full rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5">
              <div className="text-sm text-white/70">♪ Yotteba Experience</div>
              <div className="mt-2 text-2xl font-semibold">Lanterns & Energy</div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-black/30 p-4">
                  <div className="text-white/70">Signature</div>
                  <div className="mt-1 font-semibold">Legendary Tebasaki</div>
                </div>
                <div className="rounded-2xl bg-black/30 p-4">
                  <div className="text-white/70">Drinks</div>
                  <div className="mt-1 font-semibold">Highball & Sours</div>
                </div>
                <div className="rounded-2xl bg-black/30 p-4">
                  <div className="text-white/70">Daily</div>
                  <div className="mt-1 font-semibold">Special Promos</div>
                </div>
                <div className="rounded-2xl bg-black/30 p-4">
                  <div className="text-white/70">Vibe</div>
                  <div className="mt-1 font-semibold">Groups Welcome</div>
                </div>
              </div>
              <div className="mt-5 text-xs text-white/55">
                Open daily 11AM–1AM | Walk-ins & Reservations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
