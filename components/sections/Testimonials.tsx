"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section className="grain relative overflow-hidden bg-onyx-2 py-28 text-bone md:py-36">
      <Container className="relative max-w-4xl text-center">
        <Quote size={40} className="mx-auto text-gold" />
        <div className="relative mt-10 min-h-[200px] md:min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-2xl font-light leading-snug text-bone text-balance md:text-[2.1rem]">
                “{active.quote}”
              </p>
              <footer className="mt-8">
                <p className="text-sm tracking-wide text-bone">
                  {active.author}
                </p>
                <p className="eyebrow mt-2 text-gold">{active.role}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 text-bone/70 transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-gold" : "w-1.5 bg-bone/30"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 text-bone/70 transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </Container>
    </section>
  );
}
