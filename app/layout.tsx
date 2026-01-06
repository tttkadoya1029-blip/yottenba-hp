import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YOTTEBA Makati | Authentic Japanese Izakaya in Chino Roces",
  description:
    "Experience authentic Japanese izakaya in the heart of Makati. Famous tebasaki wings, craft drinks, and daily specials. Open 11AM-1AM. Perfect for after-work drinks, group dining, and late-night cravings.",
  keywords: [
    "izakaya Makati",
    "Japanese restaurant Makati",
    "tebasaki Makati",
    "chicken wings Makati",
    "Japanese pub Chino Roces",
    "late night dining Makati",
    "Japanese bar Manila",
    "craft beer Makati",
  ],
  openGraph: {
    title: "YOTTEBA Makati | Authentic Japanese Izakaya Revolution",
    description:
      "Famous tebasaki wings, craft drinks & daily specials. Open 11AM-1AM at Chino Roces Ave, Makati.",
    type: "website",
    locale: "en_PH",
    siteName: "YOTTEBA Makati",
  },
  twitter: {
    card: "summary_large_image",
    title: "YOTTEBA Makati | Japanese Izakaya Revolution",
    description:
      "Famous tebasaki wings, craft drinks & daily specials. Open 11AM-1AM.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-paper antialiased">
        {children}
      </body>
    </html>
  );
}
