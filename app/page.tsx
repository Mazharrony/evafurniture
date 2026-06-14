import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Intro } from "@/components/sections/Intro";
import { SectorsShowcase } from "@/components/sections/SectorsShowcase";
import { CollectionsShowcase } from "@/components/sections/CollectionsShowcase";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  description:
    "Eva Design Furniture is a Dubai-based atelier crafting bespoke interiors and custom furniture for villas, penthouses, hospitality and commercial spaces across the UAE.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Intro />
      <SectorsShowcase />
      <CollectionsShowcase />
      <Process />
      <Testimonials />
      <CTABand />
    </>
  );
}
