import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { collections } from "@/data/collections";

export function CollectionsShowcase() {
  return (
    <section className="relative overflow-hidden bg-onyx-2 py-28 md:py-36">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Furniture Collections"
          arabic="مجموعاتنا"
          title="Original pieces, designed and built in our workshop."
          description="Limited collections of seating, dining, lighting and storage — each made to order and finished by hand."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection, i) => (
            <Reveal key={collection.slug} delay={i * 0.06}>
              <Link
                href={`/collections/${collection.slug}`}
                className="group block"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-coal">
                  <Image
                    src={collection.cover}
                    alt={collection.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-[1100ms] ease-[var(--ease-luxe)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="mt-5 flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl font-light text-bone">
                      {collection.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {collection.tagline}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="mt-1 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
