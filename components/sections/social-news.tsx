"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

const cards = [
  {
    title: "Grand Opening Special",
    body: "Join us for our opening celebration! Check Instagram for exclusive promos and limited-time offers.",
    meta: "January 2026",
  },
  {
    title: "Daily Specials Board",
    body: "Something different every day. Follow us on Instagram to see today's deals before you visit.",
    meta: "Updated Daily",
  },
  {
    title: "Group Reservations Welcome",
    body: "Planning a party? Call us to reserve space for your group. Perfect for team events and celebrations.",
    meta: "Now Booking",
  },
];

export function SocialNews() {
  return (
    <Section id="news" className="bg-paper">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900">News & Updates</h2>
          <p className="mt-2 text-sm text-neutral-600">
            Follow us on Instagram for the latest promos and events
          </p>
        </div>
        <a
          href="https://www.instagram.com/yotteba_makati/"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-neutral-600 hover:text-neutral-900"
        >
          @yotteba_makati
        </a>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {cards.map((c, idx) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            className="rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-sm"
          >
            <div className="text-xs text-neutral-500">{c.meta}</div>
            <h3 className="mt-2 text-base font-semibold text-neutral-900">{c.title}</h3>
            <p className="mt-3 text-sm text-neutral-700">{c.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
