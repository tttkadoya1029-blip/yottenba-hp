"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

const items = [
  {
    title: "① Get Hooked on Tebasaki",
    body:
      "Start here. Crispy on the outside, juicy inside. Our secret tare sauce and spices will keep you coming back.",
    tag: "Signature",
  },
  {
    title: "② Drink Like a Local",
    body:
      "Beer, super carbonated highball, sours, ocha-wari, cocktails, shochu, sake, soft drinks—we've got it all.",
    tag: "Drink",
  },
  {
    title: "③ Ride the Daily Specials",
    body:
      "Something special every day. Check our board for today's deals and limited-time offers.",
    tag: "Daily",
  },
];

export function HowToEnjoy() {
  return (
    <Section id="howto">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">The YOTTEBA Way</h2>
          <p className="mt-2 text-sm text-white/70">
            How to make the most of your visit
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((it, idx) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="text-xs text-white/60">{it.tag}</div>
            <h3 className="mt-2 text-base font-semibold">{it.title}</h3>
            <p className="mt-3 text-sm text-white/75">{it.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
