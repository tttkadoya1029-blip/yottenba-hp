import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { HowToEnjoy } from "@/components/sections/how-to-enjoy";
import { MenuShowcase } from "@/components/sections/menu-showcase";
import { Location } from "@/components/sections/location";
import { SocialNews } from "@/components/sections/social-news";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <HowToEnjoy />
        <MenuShowcase />
        <Location />
        <SocialNews />
      </main>
      <SiteFooter />
    </>
  );
}
