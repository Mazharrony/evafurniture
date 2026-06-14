"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MashrabiyaPattern } from "@/components/ui/Motifs";

const slides = [
  {
    src: "/image/residential/moroccan-living-room.jpg",
    alt: "A luxurious Arabian majlis with gold detailing and arched alcoves",
  },
  {
    src: "/image/residential/modern-majlis.jpg",
    alt: "A modern majlis with low seating and warm natural tones",
  },
  {
    src: "/image/residential/boho-majlis.jpg",
    alt: "A boho-styled majlis layered with textiles and woven detail",
  },
  {
    src: "/image/residential/traditional-majlis.jpg",
    alt: "A traditional majlis with hand-carved geometric wall panels",
  },
  {
    src: "/image/residential/arabic-majlis.jpg",
    alt: "An opulent Arabic majlis with rich cushions and patterned rugs",
  },
];

const SLIDE_DURATION = 6000;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setActive((index + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => window.clearTimeout(id);
  }, [active, paused]);

  return (
    <section
      ref={ref}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-onyx"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        {slides.map((slide, i) => (
          <motion.div
            key={slide.src}
            aria-hidden={i !== active}
            initial={false}
            animate={{ opacity: i === active ? 1 : 0 }}
            transition={{ duration: 1.3, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <motion.div
              className="absolute inset-0"
              initial={false}
              animate={
                reduceMotion
                  ? { scale: 1 }
                  : { scale: i === active ? 1.08 : 1 }
              }
              transition={{
                duration: i === active ? SLIDE_DURATION / 1000 + 1.3 : 0,
                ease: "linear",
              }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/55 to-onyx/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx/80 via-transparent to-transparent" />
      </motion.div>

      <MashrabiyaPattern opacity={0.05} />

      <motion.div style={{ opacity }} className="relative w-full">
        <Container className="pt-32 pb-28 md:pb-0">
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
            <ButtonLink href="/services" size="lg" variant="outline">
              View Our Work
            </ButtonLink>
          </motion.div>
        </Container>
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex items-center justify-center px-6 md:inset-x-auto md:bottom-8 md:right-10 md:justify-end md:px-0">
        <div className="flex items-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === active}
              className={`group relative h-1.5 overflow-hidden rounded-full transition-all duration-500 ${
                i === active ? "w-8 bg-bone/20" : "w-2.5 bg-bone/30 hover:bg-bone/60"
              }`}
            >
              {i === active && (
                <motion.span
                  key={`${active}-${paused}`}
                  className="absolute inset-y-0 left-0 rounded-full bg-gold"
                  initial={{ width: reduceMotion ? "100%" : 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: reduceMotion || paused ? 0 : SLIDE_DURATION / 1000,
                    ease: "linear",
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-bone/40">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
