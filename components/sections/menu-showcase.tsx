"use client";

import { Section } from "@/components/ui/section";
import { Carousel } from "@/components/ui/carousel";

const food = [
  {
    title: "Tebasaki（手羽先）",
    desc: "Crispy outside, juicy inside. Our signature.",
    image: "/images/menu/tebasaki.png"
  },
  {
    title: "Gyoza（餃子）",
    desc: "Perfect with drinks.",
    image: "/images/menu/gyoza.png"
  },
  {
    title: "Ramen Tonkotsu（豚骨ラーメン）",
    desc: "Rich and creamy pork bone broth.",
    image: "/images/menu/ramen-tonkotsu.png"
  },
  {
    title: "Sashimi（刺身）",
    desc: "Fresh and delicate.",
    image: "/images/menu/sashimi.png"
  },
  {
    title: "Yakitori Skewers（焼き鳥）",
    desc: "Grilled chicken perfection.",
    image: "/images/menu/skewer.png"
  },
  {
    title: "Sukiyaki（すき焼き）",
    desc: "Sweet and savory hot pot.",
    image: "/images/menu/sukiyaki.png"
  },
  {
    title: "House Karaage",
    desc: "Classic crispy fried chicken.",
    image: "/images/menu/skewer.png"
  },
  {
    title: "Yotteba Skewers (Fried chicken skewers)",
    desc: "Crispy and flavorful fried chicken skewers.",
    image: "/images/menu/skewer.png"
  },
];

const drinks = [
  {
    title: "Draft Beer（生ビール）",
    desc: "Start with a cold one.",
    image: "/images/menu/beer.jpg"
  },
  {
    title: "Lemon Sour（レモンサワー）",
    desc: "Classic Japanese favorite.",
    image: "/images/menu/lemon-sour.jpg"
  },
  {
    title: "Mega Lemon Sour（メガレモンサワー）",
    desc: "Super-sized refreshment.",
    image: "/images/menu/mega-lemon-sour.png"
  },
  { title: "Super Carbonated Highball", desc: "Refreshing and crisp." },
  { title: "Ocha-wari", desc: "Tea-infused shochu. Smooth." },
  { title: "Shochu", desc: "On the rocks / Water / Hot water." },
  { title: "Sake", desc: "Pairs perfectly with our dishes." },
  { title: "Cocktails", desc: "Something for everyone." },
  { title: "Soft Drinks", desc: "Non-alcoholic options available." },
];

export function MenuShowcase() {
  return (
    <Section id="menu" className="bg-paper lantern-border-top">
      <h2 className="text-2xl font-bold text-neutral-900">Our Menu</h2>
      <p className="mt-2 text-sm text-neutral-600">
        Signature dishes and drinks that keep you coming back.
      </p>

      <div className="mt-8 space-y-10">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-neutral-900">Food</h3>
          </div>
          <Carousel
            items={food.map((f) => ({
              title: f.title,
              desc: f.desc,
              badge: "Food",
              image: f.image,
            }))}
          />
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-neutral-900">Drinks</h3>
          </div>
          <Carousel
            items={drinks.map((d) => ({
              title: d.title,
              desc: d.desc,
              badge: "Drink",
              image: d.image,
            }))}
          />
        </div>
      </div>
    </Section>
  );
}
