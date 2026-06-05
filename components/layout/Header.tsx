"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav";
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

  const solid = scrolled || open;

  return (
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
          className="inline-flex h-10 w-10 items-center justify-center text-bone lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "overflow-hidden border-t border-bone/10 bg-onyx transition-[max-height,opacity] duration-500 ease-[var(--ease-luxe)] lg:hidden",
          open ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col px-6 py-6">
          {navLinks.map((link, i) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between border-b border-bone/10 py-4 font-display text-2xl font-light transition-colors hover:text-gold",
                  active ? "text-bone" : "text-muted",
                )}
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {link.label}
                <span className="text-xs text-gold">0{i + 1}</span>
              </Link>
            );
          })}
          <ButtonLink href="/contact" className="mt-6 w-full" variant="gold">
            Book a Consultation
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
