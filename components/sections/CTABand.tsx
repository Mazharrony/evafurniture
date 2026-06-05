import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CalligraphyAccent, MashrabiyaPattern } from "@/components/ui/Motifs";

export function CTABand() {
  return (
    <section className="grain relative overflow-hidden bg-coal py-28 md:py-36">
      <Image
        src="https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&w=2000&q=80"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-onyx/95 to-onyx/60" />
      <MashrabiyaPattern opacity={0.06} />
      <Container className="relative text-center">
        <Reveal>
          <CalligraphyAccent
            text="Begin Your Project"
            arabic="لنبدأ"
            className="justify-center"
          />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-light leading-[1.08] tracking-tight text-bone text-balance md:text-5xl">
            Let&apos;s create a space that is{" "}
            <span className="text-gold-leaf italic">unmistakably</span> yours.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted">
            Book a private consultation at our Dubai atelier and let us bring
            your vision to life — designed, crafted and delivered by hand.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/contact" size="lg" variant="gold">
              Book a Consultation <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink href="/collections" size="lg" variant="outline">
              Explore Collections
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
