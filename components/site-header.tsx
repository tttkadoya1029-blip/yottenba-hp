"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const nav = [
  { label: "Top", href: "#top" },
  { label: "How to Enjoy", href: "#howto" },
  { label: "Menu", href: "#menu" },
  { label: "Location", href: "#location" },
  { label: "News", href: "#news" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition",
        scrolled
          ? "border-neutral-200/30 bg-[#f5f1e8]/95 backdrop-blur"
          : "border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <Image
              src="/logo.png"
              alt="YOTTEBA Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide text-neutral-900">YOTTEBA</div>
            <div className="text-xs text-neutral-600">Makati</div>
          </div>
        </a>

        <nav className="hidden items-center gap-5 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-neutral-700 hover:text-neutral-900 font-medium"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.instagram.com/yotteba_makati/"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl border border-neutral-300 px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 md:block"
            aria-label="Instagram"
          >
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="tel:+639171333460"
            className="rounded-xl border border-neutral-300 px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
            data-cta="call"
          >
            Call
          </a>
          <a
            href="#location"
            className="rounded-xl bg-neutral-900 px-3 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
            data-cta="reserve"
          >
            Reserve
          </a>
          <a
            href="#delivery"
            className="rounded-xl bg-[#c41e3a] px-3 py-2 text-sm font-semibold text-white hover:bg-[#a01830]"
            data-cta="delivery"
          >
            Delivery
          </a>
        </div>
      </div>
    </header>
  );
}
