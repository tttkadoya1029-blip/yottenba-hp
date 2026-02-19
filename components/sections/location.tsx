import { Section } from "@/components/ui/section";

export function Location() {
  return (
    <Section id="location" className="bg-diagonal-navy lantern-border-top lantern-border-bottom">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 content-overlay">
        <div>
          <h2 className="text-2xl font-bold text-white">Location</h2>
          <p className="mt-2 text-sm text-white/90">
            Visit us at Chino Roces Avenue, Makati.
          </p>

          <div className="mt-6 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 text-sm">
            <div className="text-white/80">Address</div>
            <div className="mt-1 font-semibold leading-relaxed text-white">
              Unit G-H, Ground Floor, Marvin Plaza Building,<br />
              2153 Chino Roces Ave, Brgy Pio del Pilar,<br />
              Makati City, 1230 Metro Manila
            </div>

            <div className="mt-4 text-white/80">Hours</div>
            <div className="mt-1 font-semibold text-white">
              Open daily 11:00 AM – 1:00 AM
            </div>

            <div className="mt-4 text-white/80">Contact</div>
            <a
              href="tel:+639171333460"
              className="mt-1 block font-semibold text-white hover:underline"
            >
              +63 917 133 3460
            </a>

            <div className="mt-4 text-white/80">Payment</div>
            <div className="mt-1 text-white/90">
              Credit Card & GCash accepted<br />
              <span className="text-white/70 text-xs">(Wi-Fi not available)</span>
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
                className="rounded-2xl border border-white/30 px-4 py-2 text-sm text-white hover:bg-white/20"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm p-4">
          <iframe
            src="https://www.google.com/maps?q=Yotteba+Izakaya+Revolution+Makati&output=embed"
            className="h-full min-h-[400px] w-full rounded-2xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="YOTTEBA Makati Location"
          />
        </div>
      </div>

      <div
        id="delivery"
        className="mt-6 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 content-overlay scroll-mt-20"
      >
        <h3 className="text-lg font-bold text-white">Delivery</h3>
        <p className="mt-1 text-sm text-white/90">
          Order YOTTEBA at home via GrabFood or Foodpanda.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="https://food.grab.com/ph/en/restaurant/yotteba-izakaya-revolution-chino-roces-delivery/2-C7NWVJDECB4JVE?"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-green-500 px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
          >
            GrabFood
          </a>
          <a
            href="https://www.foodpanda.ph/restaurant/ojrw/yotteba-marvin-plaza"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-[#d70f64] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
          >
            Foodpanda
          </a>
        </div>
      </div>
    </Section>
  );
}
