import { Section } from "@/components/ui/section";

export function Location() {
  return (
    <Section id="location">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">Location</h2>
          <p className="mt-2 text-sm text-white/70">
            Visit us at Chino Roces Avenue, Makati.
          </p>

          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm">
            <div className="text-white/70">Address</div>
            <div className="mt-1 font-semibold leading-relaxed">
              Unit G-H, Ground Floor, Marvin Plaza Building,<br />
              2153 Chino Roces Ave, Brgy Pio del Pilar,<br />
              Makati City, 1230 Metro Manila
            </div>

            <div className="mt-4 text-white/70">Hours</div>
            <div className="mt-1 font-semibold">
              Open daily 11:00 AM – 1:00 AM
            </div>

            <div className="mt-4 text-white/70">Contact</div>
            <a
              href="tel:+639171333460"
              className="mt-1 block font-semibold hover:underline"
            >
              +63 917 133 3460
            </a>

            <div className="mt-4 text-white/70">Payment</div>
            <div className="mt-1">
              Credit Card & GCash accepted<br />
              <span className="text-white/60 text-xs">(Wi-Fi not available)</span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href="https://maps.app.goo.gl/LP8BkF1ynUFAYstA9"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-neutral-950 hover:opacity-90"
              >
                Open in Google Maps
              </a>
              <a
                href="https://www.instagram.com/yotteba_makati/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
          <iframe
            src="https://www.google.com/maps?q=Yotteba+Izakaya+Revolution+Makati&output=embed"
            className="h-full min-h-[400px] w-full rounded-2xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="YOTTEBA Makati Location"
          />
        </div>
      </div>
    </Section>
  );
}
