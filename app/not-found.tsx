import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { MashrabiyaPattern } from "@/components/ui/Motifs";

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-[80vh] items-center overflow-hidden bg-onyx text-bone">
      <MashrabiyaPattern opacity={0.05} />
      <Container className="relative text-center">
        <span className="font-arabic text-4xl text-gold/70">٤٠٤</span>
        <p className="eyebrow mt-4 text-gold">Error 404</p>
        <h1 className="mx-auto mt-5 max-w-xl font-display text-4xl font-light leading-tight text-bone md:text-6xl">
          This page has stepped out of the showroom.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-muted">
          The page you are looking for can&apos;t be found. Let us guide you back
          to something beautiful.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/" variant="gold">
            Return Home
          </ButtonLink>
          <Link
            href="/collections"
            className="inline-flex items-center px-6 py-3 text-sm text-bone/80 transition-colors hover:text-gold"
          >
            View Collections
          </Link>
        </div>
      </Container>
    </section>
  );
}
