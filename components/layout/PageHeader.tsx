import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CalligraphyAccent, MashrabiyaPattern } from "@/components/ui/Motifs";

export function PageHeader({
  eyebrow,
  arabic,
  title,
  description,
  image,
}: {
  eyebrow: string;
  arabic?: string;
  title: string;
  description?: string;
  image: string;
}) {
  return (
    <section className="grain relative overflow-hidden bg-onyx pt-40 pb-24 md:pt-52 md:pb-32">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/85 to-onyx/50" />
      <MashrabiyaPattern opacity={0.05} />
      <Container className="relative">
        <div className="max-w-3xl">
          <Reveal>
            {arabic ? (
              <CalligraphyAccent text={eyebrow} arabic={arabic} />
            ) : (
              <span className="eyebrow text-gold">{eyebrow}</span>
            )}
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[2.6rem] font-light leading-[1.03] tracking-tight text-bone text-balance md:text-6xl lg:text-7xl">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                {description}
              </p>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}

