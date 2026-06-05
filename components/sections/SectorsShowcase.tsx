import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { sectors } from "@/data/sectors";

export function SectorsShowcase() {
  return (
    <section className="relative bg-onyx-2 py-28 md:py-36">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What We Do"
            arabic="خدماتنا"
            title="One atelier, every kind of space."
            description="Across four sectors we deliver interior design, custom furniture and turnkey fit-out — end to end, under one roof."
          />
          <Reveal delay={0.1}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm tracking-wide text-bone/80 transition-colors hover:text-gold"
            >
              All services
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-bone/10 bg-bone/10 sm:grid-cols-2">
          {sectors.map((sector, i) => (
            <Reveal key={sector.slug} delay={i * 0.06}>
              <Link
                href={`/services/${sector.slug}`}
                className="group relative flex h-full flex-col overflow-hidden bg-onyx p-8 transition-colors hover:bg-coal md:p-10"
              >
                <div className="relative mb-8 aspect-[16/10] overflow-hidden">
                  <Image
                    src={sector.cover}
                    alt={sector.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1100ms] ease-[var(--ease-luxe)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx/70 to-transparent" />
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="eyebrow text-gold">0{i + 1}</span>
                  <span className="font-arabic text-lg text-gold/70">
                    {sector.arabic}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-light text-bone">
                  {sector.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {sector.tagline}
                </p>
                <ArrowUpRight
                  size={20}
                  className="mt-6 text-bone/30 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
