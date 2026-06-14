import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/sections/CTABand";
import { collections } from "@/data/collections";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Browse Eva Design Furniture's signature collections — bespoke seating, dining, lighting and storage, made to order in Dubai.",
  alternates: { canonical: "/collections" },
};

export default function CollectionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Furniture Collections"
        arabic="مجموعاتنا"
        title="Original pieces, made to order in our atelier."
        description="Each collection is designed in-house and built by hand, in materials chosen to age beautifully."
        image="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="bg-onyx py-24 md:py-32">
        <Container className="space-y-8">
          {collections.map((collection, i) => (
            <Reveal key={collection.slug} delay={(i % 2) * 0.06}>
              <Link
                href={`/collections/${collection.slug}`}
                className="group grid items-center gap-8 border-t border-bone/10 pt-8 md:grid-cols-12"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-coal md:col-span-5">
                  <Image
                    src={collection.cover}
                    alt={collection.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover transition-transform duration-[900ms] ease-[var(--ease-luxe)] group-hover:scale-105"
                  />
                </div>
                <div className="md:col-span-6">
                  <span className="eyebrow text-gold">
                    Collection 0{i + 1}
                  </span>
                  <h2 className="mt-3 font-display text-3xl font-light text-bone md:text-4xl">
                    {collection.name}
                  </h2>
                  <p className="mt-2 text-lg text-gold">
                    {collection.tagline}
                  </p>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                    {collection.description}
                  </p>
                </div>
                <div className="hidden justify-end md:col-span-1 md:flex">
                  <ArrowUpRight
                    size={28}
                    className="text-muted transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>

      <CTABand />
    </>
  );
}
