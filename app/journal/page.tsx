import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes on luxury interior design, craft and considered living from the Eva Design Furniture atelier in Dubai.",
};

export default function JournalPage() {
  const [lead, ...rest] = posts;

  return (
    <>
      <PageHeader
        eyebrow="Journal"
        arabic="مدونتنا"
        title="Notes on craft, design and considered living."
        description="Perspectives from our atelier — on materials, process and the art of quiet luxury."
        image="https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="bg-onyx py-24 md:py-32">
        <Container>
          {/* Lead post */}
          <Reveal>
            <Link
              href={`/journal/${lead.slug}`}
              className="group grid items-center gap-10 md:grid-cols-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-coal">
                <Image
                  src={lead.cover}
                  alt={lead.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[900ms] ease-[var(--ease-luxe)] group-hover:scale-105"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="eyebrow text-gold">
                    {lead.category}
                  </span>
                  <span>·</span>
                  <span>{lead.date}</span>
                  <span>·</span>
                  <span>{lead.readTime}</span>
                </div>
                <h2 className="mt-4 font-display text-3xl font-light leading-tight text-bone text-balance md:text-4xl">
                  {lead.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                  {lead.excerpt}
                </p>
                <span className="mt-6 inline-block text-sm tracking-wide text-bone transition-colors group-hover:text-gold">
                  Read article →
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Grid */}
          <div className="mt-20 grid gap-x-6 gap-y-12 border-t border-bone/10 pt-16 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.08}>
                <Link href={`/journal/${post.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-coal">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[900ms] ease-[var(--ease-luxe)] group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-center gap-3 text-xs text-muted">
                    <span className="eyebrow text-gold">
                      {post.category}
                    </span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-light leading-snug text-bone transition-colors group-hover:text-gold">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
