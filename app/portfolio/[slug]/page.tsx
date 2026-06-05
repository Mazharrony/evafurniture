import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { projects, getProject } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  const facts = [
    { label: "Category", value: project.category },
    { label: "Location", value: project.location },
    { label: "Year", value: project.year },
    { label: "Area", value: project.area },
  ];

  return (
    <>
      {/* Hero */}
      <section className="grain relative h-[72vh] min-h-[480px] overflow-hidden bg-onyx">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/50 to-transparent" />
        <Container className="absolute inset-x-0 bottom-0 pb-14">
          <span className="eyebrow text-gold">{project.category}</span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-light leading-[1.05] text-bone md:text-6xl">
            {project.title}
          </h1>
        </Container>
      </section>

      {/* Facts + intro */}
      <section className="bg-onyx py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <dl className="grid grid-cols-2 gap-y-8 border-t border-gold/30 pt-8 lg:grid-cols-1">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="eyebrow text-muted">{fact.label}</dt>
                  <dd className="mt-2 font-display text-xl font-light text-bone">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 border-t border-bone/10 pt-8">
              <dt className="eyebrow text-muted">Scope</dt>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.scope.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-bone/15 px-3 py-1 text-xs text-bone-soft"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <p className="font-display text-2xl font-light leading-snug text-bone text-balance md:text-3xl">
                {project.summary}
              </p>
            </Reveal>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted md:text-lg">
              {project.description.map((para, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p>{para}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="bg-onyx pb-24 md:pb-32">
        <Container className="grid gap-6 md:grid-cols-2">
          {project.gallery.map((src, i) => (
            <Reveal
              key={src}
              delay={(i % 2) * 0.08}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <div
                className={`relative overflow-hidden bg-coal ${
                  i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={src}
                  alt={`${project.title} — view ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Next + back */}
      <section className="border-t border-bone/10 bg-onyx-2 py-16">
        <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-sm tracking-wide text-muted transition-colors hover:text-bone"
          >
            <ArrowLeft size={16} /> All projects
          </Link>
          <ButtonLink href={`/portfolio/${next.slug}`} variant="outline">
            Next: {next.title} <ArrowRight size={16} />
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
