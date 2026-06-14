import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Process } from "@/components/sections/Process";
import { CTABand } from "@/components/sections/CTABand";
import { sectors } from "@/data/sectors";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interior design, custom furniture and turnkey fit-out across residential, commercial, retail and hospitality — a complete luxury atelier in Dubai.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        arabic="خدماتنا"
        title="Every kind of space, made to measure."
        description="We work across four sectors — each backed by the same in-house design studio and furniture workshop, from first concept to final installation."
        image="https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Sectors */}
      <section className="bg-onyx py-24 md:py-32">
        <Container className="space-y-20 md:space-y-28">
          {sectors.map((sector, i) => (
            <div
              key={sector.slug}
              id={sector.slug}
              className="grid scroll-mt-28 items-center gap-12 lg:grid-cols-2 lg:gap-20"
            >
              <Reveal className={cn(i % 2 === 1 && "lg:order-2")}>
                <Link
                  href={`/services/${sector.slug}`}
                  className="group relative block aspect-[4/3] overflow-hidden arch-top"
                >
                  <Image
                    src={sector.cover}
                    alt={sector.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1100ms] ease-[var(--ease-luxe)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx/60 to-transparent" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-gold/20 arch-top" />
                </Link>
              </Reveal>
              <div className={cn(i % 2 === 1 && "lg:order-1")}>
                <Reveal>
                  <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-gold">
                    0{i + 1} · Sector
                    <span className="font-arabic text-lg tracking-normal normal-case">
                      {sector.arabic}
                    </span>
                  </span>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="mt-4 font-display text-3xl font-light text-bone md:text-4xl">
                    {sector.name}
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-3 text-lg text-gold">{sector.tagline}</p>
                </Reveal>
                <Reveal delay={0.15}>
                  <p className="mt-5 text-base leading-relaxed text-muted">
                    {sector.intro}
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {sector.offerings.map((o) => (
                      <li
                        key={o}
                        className="flex items-center gap-3 text-sm text-bone-soft"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coal text-gold">
                          <Check size={14} />
                        </span>
                        {o}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.25}>
                  <Link
                    href={`/services/${sector.slug}`}
                    className="group mt-8 inline-flex items-center gap-2 text-sm tracking-wide text-bone transition-colors hover:text-gold"
                  >
                    Explore {sector.name}
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </Reveal>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Capabilities */}
      <section className="border-t border-bone/10 bg-onyx-2 py-24 md:py-32">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Capabilities"
            arabic="إمكاناتنا"
            title="The disciplines behind every project."
          />
          <div className="mt-16 grid gap-px overflow-hidden border border-bone/10 bg-bone/10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal
                key={service.slug}
                delay={i * 0.06}
                className="flex h-full flex-col bg-onyx-2 p-8 md:p-9"
              >
                <span className="font-display text-3xl font-light text-gold-leaf">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-display text-xl font-light text-bone">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.tagline}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Process />

      <CTABand />
    </>
  );
}
