import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { GoldDivider, MashrabiyaPattern } from "@/components/ui/Motifs";
import { CTABand } from "@/components/sections/CTABand";
import { sectors, getSector } from "@/data/sectors";

export function generateStaticParams() {
  return sectors.map((s) => ({ sector: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sector: string }>;
}): Promise<Metadata> {
  const { sector } = await params;
  const data = getSector(sector);
  if (!data) return { title: "Sector Not Found" };
  return {
    title: `${data.name} Interiors & Furniture`,
    description: data.intro,
  };
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ sector: string }>;
}) {
  const { sector } = await params;
  const data = getSector(sector);
  if (!data) notFound();

  const index = sectors.findIndex((s) => s.slug === sector);
  const next = sectors[(index + 1) % sectors.length];

  return (
    <>
      {/* Hero */}
      <section className="grain relative flex min-h-[68vh] items-end overflow-hidden bg-onyx pt-32">
        <Image
          src={data.cover}
          alt={data.name}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/70 to-onyx/40" />
        <MashrabiyaPattern opacity={0.05} />
        <Container className="relative pb-16">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-gold">
              <span className="h-px w-8 bg-gold/60" />
              Sector
              <span className="font-arabic text-lg tracking-normal normal-case">
                {data.arabic}
              </span>
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 max-w-3xl font-display text-[2.6rem] font-light leading-[1.02] tracking-tight text-bone md:text-7xl">
              {data.name}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-lg text-gold">{data.tagline}</p>
          </Reveal>
        </Container>
      </section>

      {/* Intro + offerings */}
      <section className="bg-onyx py-24 md:py-32">
        <Container className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
              {data.description.map((para, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p>{para}</p>
                </Reveal>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {data.stats.map((stat) => (
                <Reveal key={stat.label}>
                  <div className="border-t border-gold/30 pt-4">
                    <p className="font-display text-3xl font-light text-gold-leaf md:text-4xl">
                      {stat.value}
                    </p>
                    <p className="eyebrow mt-2 text-muted">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="border border-bone/10 bg-onyx-2 p-8 md:p-10">
                <h2 className="eyebrow text-gold">What we deliver</h2>
                <ul className="mt-6 space-y-4">
                  {data.offerings.map((o) => (
                    <li
                      key={o}
                      className="flex items-center gap-3 border-b border-bone/10 pb-4 text-sm text-bone-soft last:border-0 last:pb-0"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-coal text-gold">
                        <Check size={14} />
                      </span>
                      {o}
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href="/contact"
                  variant="gold"
                  className="mt-8 w-full"
                >
                  Enquire About {data.name}
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="bg-onyx-2 py-20 md:py-24">
        <Container className="grid gap-6 md:grid-cols-3">
          {data.gallery.map((src, i) => (
            <Reveal key={src} delay={i * 0.08}>
              <div className="relative aspect-[3/4] overflow-hidden bg-coal">
                <Image
                  src={src}
                  alt={`${data.name} interior ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Next sector */}
      <section className="border-t border-bone/10 bg-onyx-2 py-16">
        <Container>
          <GoldDivider className="mb-10" />
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm tracking-wide text-muted transition-colors hover:text-bone"
            >
              <ArrowLeft size={16} /> All sectors
            </Link>
            <ButtonLink href={`/services/${next.slug}`} variant="outline">
              Next: {next.name} →
            </ButtonLink>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
