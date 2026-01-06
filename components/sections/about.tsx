import { Section } from "@/components/ui/section";

export function About() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">
            Laugh, Eat, Drink. Repeat.
          </h2>
          <p className="mt-4 text-white/75">
            YOTTEBA brings the authentic Japanese izakaya experience to Makati.
            We&apos;re all about good vibes, great food, and even better drinks—
            without the pretense. Come as you are, leave with a smile.
          </p>
          <p className="mt-3 text-white/75">
            Whether you&apos;re unwinding after work, catching up with friends,
            or looking for a late-night bite, we&apos;ve got you covered.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <ul className="space-y-3 text-sm text-white/80">
            <li>🍗 Signature: Legendary tebasaki (tare & salt)</li>
            <li>🍺 Draft beer / Super carbonated highball / Sours / Shochu</li>
            <li>🔥 Daily specials: Check our board for today&apos;s deals</li>
            <li>👥 Solo diners, groups, after-work crowds—all welcome</li>
            <li>💳 Credit card & GCash accepted</li>
            <li>🕐 Open 11AM–1AM daily (perfect for late-night cravings)</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
