"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[80vh] overflow-hidden lantern-border-bottom">
      {/* Full-screen background video */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/mOD3sC1FEHE?autoplay=1&mute=1&loop=1&playlist=mOD3sC1FEHE&controls=0&showinfo=0&rel=0&modestbranding=1"
          title="Yotteba Izakaya Experience"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="border-0 w-full h-full object-cover"
        ></iframe>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-white/90 font-medium"
          >
            Izakaya Revolution in Makati
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-3 text-5xl font-bold leading-tight md:text-6xl text-white drop-shadow-lg"
          >
            Eat, Drink & Get{" "}
            <span className="text-white">YOTTEBA!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-5 max-w-xl text-lg text-white/90 drop-shadow-md"
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
              className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-neutral-950 hover:opacity-90 shadow-lg"
            >
              View Menu
            </a>
            <a
              href="#howto"
              className="rounded-2xl border-2 border-white px-6 py-3 text-sm text-white font-semibold hover:bg-white/20 backdrop-blur-sm"
            >
              How to Enjoy
            </a>
          </motion.div>

          {/* Signature items */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-12 grid grid-cols-2 gap-3 text-sm max-w-md"
          >
            <div className="rounded-2xl bg-black/50 backdrop-blur-md border border-white/20 p-4">
              <div className="text-white/80">Signature</div>
              <div className="mt-1 font-semibold text-white">Legendary Tebasaki</div>
            </div>
            <div className="rounded-2xl bg-black/50 backdrop-blur-md border border-white/20 p-4">
              <div className="text-white/80">Drinks</div>
              <div className="mt-1 font-semibold text-white">Highball & Sours</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
