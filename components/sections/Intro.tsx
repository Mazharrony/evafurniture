import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CalligraphyAccent } from "@/components/ui/Motifs";

export function Intro() {
  return (
    <section className="bg-onyx py-28 md:py-36">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <div className="relative">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden arch-top">
              <Image
                src="/image/residential/traditional-majlis.jpg"
                alt="A traditional Arabian majlis with hand-carved geometric wall panels"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/20 arch-top" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="absolute -bottom-8 -right-4 hidden w-48 border border-gold/30 bg-coal p-6 md:block">
              <p className="font-display text-4xl text-gold-leaf">Satwa</p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Our atelier in Al Satwa, Dubai
              </p>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <CalligraphyAccent text="Our Atelier" arabic="الورشة" />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-3xl font-light leading-[1.1] tracking-tight text-bone text-balance md:text-[2.9rem]">
              Considered design, met by the hand of the maker.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              Founded in Dubai, Eva Design Furniture unites a studio of interior
              designers with a workshop of master craftspeople. We design every
              space and build every piece under one roof — controlling quality
              from the first sketch to the final, hand-rubbed finish.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Design & build under one roof",
                "Rare timbers, stone & brass",
                "Tailored to your space",
                "Delivered turnkey, on time",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-t border-bone/10 pt-4 text-sm text-bone-soft"
                >
                  <ArrowUpRight size={18} className="mt-0.5 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <ButtonLink href="/about" variant="outline" className="mt-10">
              Discover Our Story
            </ButtonLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
