import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";
import { collections, getCollection } from "@/data/collections";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return { title: "Collection Not Found" };
  return {
    title: `${collection.name} Collection`,
    description: collection.description,
    alternates: { canonical: `/collections/${collection.slug}` },
    openGraph: {
      title: `${collection.name} Collection · Eva Design Furniture`,
      description: collection.description,
      type: "website",
      url: `/collections/${collection.slug}`,
    },
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Collections", url: "/collections" },
          { name: collection.name, url: `/collections/${collection.slug}` },
        ])}
      />
      <PageHeader
        eyebrow={`${collection.tagline}`}
        title={`The ${collection.name} Collection`}
        description={collection.description}
        image={collection.cover}
      />

      {/* Materials */}
      <section className="border-b border-bone/10 bg-onyx-2 py-12">
        <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <span className="eyebrow text-muted">Crafted in</span>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {collection.materials.map((m) => (
              <li key={m} className="font-display text-xl font-light text-bone">
                {m}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Pieces */}
      <section className="bg-onyx py-24 md:py-32">
        <Container>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {collection.pieces.map((piece, i) => (
              <Reveal key={piece.name} delay={(i % 3) * 0.08}>
                <div className="group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-coal">
                    <Image
                      src={piece.image}
                      alt={piece.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[900ms] ease-[var(--ease-luxe)] group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <span className="eyebrow text-muted">{piece.type}</span>
                      <h3 className="mt-2 font-display text-xl font-light text-bone">
                        {piece.name}
                      </h3>
                    </div>
                    <p className="shrink-0 pt-1 text-sm text-gold">
                      {piece.price}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-6 border-t border-bone/10 pt-12 text-center">
            <p className="max-w-lg text-base text-muted">
              Every piece is made to order and can be tailored in dimension,
              finish and upholstery. Enquire for lead times and bespoke options.
            </p>
            <ButtonLink href="/contact" variant="gold">
              Enquire About {collection.name}
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="border-t border-bone/10 bg-onyx-2 py-16">
        <Container>
          <Link
            href="/collections"
            className="group inline-flex items-center gap-2 text-sm tracking-wide text-muted transition-colors hover:text-bone"
          >
            <ArrowLeft size={16} /> All collections
          </Link>
        </Container>
      </section>
    </>
  );
}
