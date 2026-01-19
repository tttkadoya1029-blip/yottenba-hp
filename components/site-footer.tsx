import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-paper-dark border-t border-white/5 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <div className="relative h-16 w-16">
                <Image
                  src="/logo.png"
                  alt="YOTTEBA Izakaya Revolution Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="leading-tight">
                <div className="font-semibold tracking-wide text-white">YOTTEBA</div>
                <div className="text-xs text-white/70">Izakaya Revolution</div>
              </div>
            </div>
            <p className="mt-3 max-w-sm text-sm text-white/70">
              Authentic Japanese izakaya in the heart of Makati.
              Legendary tebasaki, craft drinks, and good vibes.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold text-white">Menu</div>
              <div className="mt-3 space-y-2 text-sm text-white/70">
                <a href="#menu" className="block hover:text-white">
                  Food
                </a>
                <a href="#menu" className="block hover:text-white">
                  Drinks
                </a>
                <a href="#howto" className="block hover:text-white">
                  How to Enjoy
                </a>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-white">Visit</div>
              <div className="mt-3 space-y-2 text-sm text-white/70">
                <a href="#location" className="block hover:text-white">
                  Location
                </a>
                <a
                  href="https://maps.app.goo.gl/LP8BkF1ynUFAYstA9"
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:text-white"
                >
                  Directions
                </a>
                <a href="tel:+639171333460" className="block hover:text-white">
                  Call Us
                </a>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-white">Connect</div>
              <div className="mt-3 space-y-2 text-sm text-white/70">
                <a
                  href="https://www.instagram.com/yotteba_makati/"
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:text-white"
                >
                  Instagram
                </a>
                <a href="#news" className="block hover:text-white">
                  News
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 text-center text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} YOTTEBA Makati. All rights reserved.
          </p>
          <p className="mt-2">
            Unit G-H, Marvin Plaza Building, 2153 Chino Roces Ave, Makati City
          </p>
        </div>
      </div>
    </footer>
  );
}
