"use client";

import { Section } from "@/components/ui/section";
import { Carousel } from "@/components/ui/carousel";

const food = [
  { title: "Tebasaki (Tare)", desc: "Crispy outside, juicy inside. Our signature." },
  { title: "Tebasaki (Salt)", desc: "Simple seasoning, pure flavor." },
  { title: "House Karaage", desc: "Classic crispy fried chicken." },
  { title: "Legendary Gyoza", desc: "Perfect with drinks." },
  { title: "Motsu煮 (Offal Stew)", desc: "Rich and comforting." },
  { title: "French Fries", desc: "Always a crowd pleaser." },
  { title: "Tsukune Skewers", desc: "Chicken meatballs with egg yolk." },
  { title: "Edamame", desc: "Classic starter." },
];

const drinks = [
  { title: "Draft Beer", desc: "Start with a cold one." },
  { title: "Super Carbonated Highball", desc: "Refreshing and crisp." },
  { title: "Lemon Sour", desc: "Classic Japanese favorite." },
  { title: "Ocha-wari", desc: "Tea-infused shochu. Smooth." },
  { title: "Shochu", desc: "On the rocks / Water / Hot water." },
  { title: "Sake", desc: "Pairs perfectly with our dishes." },
  { title: "Cocktails", desc: "Something for everyone." },
  { title: "Soft Drinks", desc: "Non-alcoholic options available." },
];

export function MenuShowcase() {
  return (
    <Section id="menu">
      <h2 className="text-2xl font-bold">Our Menu</h2>
      <p className="mt-2 text-sm text-white/70">
        Signature dishes and drinks. Images coming soon.
      </p>

      <div className="mt-8 space-y-10">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Food</h3>
          </div>
          <Carousel
            items={food.map((f) => ({
              title: f.title,
              desc: f.desc,
              badge: "Food",
            }))}
          />
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Drinks</h3>
          </div>
          <Carousel
            items={drinks.map((d) => ({
              title: d.title,
              desc: d.desc,
              badge: "Drink",
            }))}
          />
        </div>
      </div>
    </Section>
  );
}
