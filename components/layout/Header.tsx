"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, company } from "@/data/nav";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { ButtonLink } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-luxe)]",
          solid
            ? "border-b border-bone/10 bg-onyx/80 py-3 backdrop-blur-xl"
            : "bg-transparent py-6",
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-10">
          <Logo showWordmark={false} />

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative text-[0.82rem] tracking-wide transition-colors hover:text-bone",
                  active
                    ? "text-bone"
                    : solid
                      ? "text-muted"
                      : "text-bone/85",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300",
                    active ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" size="sm" variant="gold">
            Book a Consultation
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 inline-flex h-10 w-10 items-center justify-center text-bone lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            className="fixed inset-0 z-40 lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute inset-0 h-full w-full bg-onyx/70 backdrop-blur-sm"
              variants={{ closed: { opacity: 0 }, open: { opacity: 1 } }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Panel */}
            <motion.nav
              className="grain absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col border-l border-bone/10 bg-onyx-2 px-7 pb-10 pt-28"
              variants={{
                closed: { x: "100%" },
                open: { x: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow mb-6 text-gold/70">Menu</span>

              <div className="flex flex-col">
                {navLinks.map((link, i) => {
                  const active =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      variants={{
                        closed: { opacity: 0, x: 24 },
                        open: { opacity: 1, x: 0 },
                      }}
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.15 + i * 0.05,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "group flex items-center gap-4 border-b border-bone/10 py-4 transition-colors",
                          active ? "text-bone" : "text-muted hover:text-bone",
                        )}
                      >
                        <span
                          className={cn(
                            "h-px transition-all duration-300",
                            active ? "w-7 bg-gold" : "w-0 bg-gold group-hover:w-7",
                          )}
                        />
                        <span className="font-display text-2xl font-light">
                          {link.label}
                        </span>
                        <span className="ml-auto font-mono text-xs tabular-nums text-gold/50">
                          0{i + 1}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                className="mt-auto pt-8"
                variants={{
                  closed: { opacity: 0, y: 16 },
                  open: { opacity: 1, y: 0 },
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.15 + navLinks.length * 0.05,
                }}
              >
                <ButtonLink
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="w-full"
                  variant="gold"
                >
                  Book a Consultation
                </ButtonLink>

                <div className="mt-8 space-y-2 text-sm text-muted">
                  <a
                    href={company.phoneHref}
                    className="block transition-colors hover:text-bone"
                  >
                    {company.phone}
                  </a>
                  <a
                    href={company.phone2Href}
                    className="block transition-colors hover:text-bone"
                  >
                    {company.phone2}
                  </a>
                  <a
                    href={company.emailHref}
                    className="block transition-colors hover:text-bone"
                  >
                    {company.email}
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                  {company.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-gold"
                    >
                      {social.label}
                      <ArrowUpRight
                        size={12}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
