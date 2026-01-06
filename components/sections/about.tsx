"use client";

import { Section } from "@/components/ui/section";
import { Carousel } from "@/components/ui/carousel";

const venuePhotos = [
  {
    title: "Inside",
    desc: "Cozy interior atmosphere",
    image: "/images/venue/inside.jpg",
    badge: "Venue"
  },
  {
    title: "Inside View",
    desc: "Counter seating area",
    image: "/images/venue/inside-3.jpg",
    badge: "Venue"
  },
  {
    title: "Outside",
    desc: "Welcoming entrance",
    image: "/images/venue/outside-2.jpg",
    badge: "Venue"
  },
  {
    title: "Outside View",
    desc: "Street-side ambiance",
    image: "/images/venue/outside-over-view.jpg",
    badge: "Venue"
  },
  {
    title: "Private Room",
    desc: "Perfect for groups",
    image: "/images/venue/private-room.jpg",
    badge: "Venue"
  },
  {
    title: "Private Room",
    desc: "Spacious seating",
    image: "/images/venue/private-room-2.jpg",
    badge: "Venue"
  },
];

export function About() {
  return (
    <Section className="bg-paper">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900">
            Laugh, Eat, Drink. Repeat.
          </h2>
          <p className="mt-4 text-neutral-700">
            YOTTEBA brings the authentic Japanese izakaya experience to Makati.
            We&apos;re all about good vibes, great food, and even better drinks—
            without the pretense. Come as you are, leave with a smile.
          </p>
          <p className="mt-3 text-neutral-700">
            Whether you&apos;re unwinding after work, catching up with friends,
            or looking for a late-night bite, we&apos;ve got you covered.
          </p>
        </div>
        <div className="rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-sm">
          <ul className="space-y-3 text-sm text-neutral-800">
            <li>🍗 Signature: Legendary tebasaki (tare & salt)</li>
            <li>🍺 Draft beer / Super carbonated highball / Sours / Shochu</li>
            <li>🔥 Daily specials: Check our board for today&apos;s deals</li>
            <li>👥 Solo diners, groups, after-work crowds—all welcome</li>
            <li>💳 Credit card & GCash accepted</li>
            <li>🕐 Open 11AM–1AM daily (perfect for late-night cravings)</li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold text-neutral-900 mb-4">Our Venue</h3>
        <Carousel items={venuePhotos} />
      </div>
    </Section>
  );
}
