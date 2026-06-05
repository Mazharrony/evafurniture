"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MashrabiyaPattern } from "@/components/ui/Motifs";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-onyx"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80"
          alt="A serenely styled luxury interior with bespoke furniture"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/55 to-onyx/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx/80 via-transparent to-transparent" />
      </motion.div>

      <MashrabiyaPattern opacity={0.05} />

      <motion.div style={{ opacity }} className="relative w-full">
        <Container className="pt-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.32em] text-gold"
          >
            <span className="h-px w-10 bg-gold/60" />
            Dubai · Interiors &amp; Custom Furniture
            <span className="font-arabic text-base tracking-normal normal-case">
              إيفا
            </span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-4xl font-display text-[2.9rem] font-light leading-[0.98] tracking-tight text-bone text-balance sm:text-6xl lg:text-[5.4rem]"
          >
            Where modern design meets{" "}
            <span className="text-gold-leaf italic">Arabian</span> soul.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-base leading-relaxed text-bone-soft md:text-lg"
          >
            Eva Design Furniture is a Dubai atelier shaping residential,
            commercial, retail and hospitality spaces — designed, built and
            finished by hand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <ButtonLink href="/contact" size="lg" variant="gold">
              Book a Consultation <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink href="/portfolio" size="lg" variant="outline">
              View Our Work
            </ButtonLink>
          </motion.div>
        </Container>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-bone/40">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
