import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { posts, getPost } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Header */}
      <article className="bg-onyx">
        <header className="pt-32 pb-12 md:pt-44 md:pb-16">
          <Container className="max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3 text-xs text-muted">
              <span className="eyebrow text-gold">{post.category}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="mt-5 font-display text-4xl font-light leading-[1.1] text-bone text-balance md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-sm text-muted">By {post.author}</p>
          </Container>
        </header>

        <Container className="max-w-4xl">
          <div className="relative aspect-[16/9] overflow-hidden bg-coal">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 56rem"
              className="object-cover"
            />
          </div>
        </Container>

        <Container className="max-w-2xl py-16 md:py-20">
          <div className="space-y-7 text-lg leading-relaxed text-bone-soft/80">
            <p className="font-display text-2xl font-light leading-snug text-bone text-balance">
              {post.excerpt}
            </p>
            {post.body.map((para, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <p>{para}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 border-t border-bone/10 pt-8">
            <Link
              href="/journal"
              className="group inline-flex items-center gap-2 text-sm tracking-wide text-muted transition-colors hover:text-bone"
            >
              <ArrowLeft size={16} /> Back to Journal
            </Link>
          </div>
        </Container>
      </article>

      {/* More */}
      <section className="border-t border-bone/10 bg-onyx-2 py-20 md:py-24">
        <Container>
          <h2 className="font-display text-2xl font-light text-bone md:text-3xl">
            Continue reading
          </h2>
          <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2">
            {more.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link href={`/journal/${p.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-coal">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[900ms] ease-[var(--ease-luxe)] group-hover:scale-105"
                    />
                  </div>
                  <span className="eyebrow mt-4 block text-gold">
                    {p.category}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-light text-bone transition-colors group-hover:text-gold">
                    {p.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <ButtonLink href="/contact" variant="outline">
              Work With Our Atelier
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
