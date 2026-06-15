import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { navLinks, company } from "@/data/nav";
import { GoldDivider, MashrabiyaPattern } from "@/components/ui/Motifs";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-bone/10 bg-onyx text-bone">
      <MashrabiyaPattern opacity={0.04} />
      <Container className="relative py-20 md:py-24">
        {/* Top callout */}
        <div className="flex flex-col items-start justify-between gap-8 pb-16 md:flex-row md:items-end">
          <h2 className="max-w-xl font-display text-3xl font-light leading-tight tracking-tight text-balance md:text-5xl">
            Let&apos;s craft something{" "}
            <span className="text-gold-leaf">extraordinary</span> together.
          </h2>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 text-sm tracking-wide text-bone transition-colors hover:text-gold"
          >
            <span className="font-arabic text-base text-gold">ابدأ</span>
            Start your project
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/25 transition-all group-hover:border-gold group-hover:bg-gold group-hover:text-onyx">
              →
            </span>
          </Link>
        </div>

        <GoldDivider className="mb-16" />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
              A Dubai atelier crafting bespoke interiors and custom furniture
              across residential, commercial, retail and hospitality.
            </p>
            <div className="mt-6 flex gap-3">
              {company.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 text-xs tracking-wide text-muted transition-colors hover:border-gold hover:text-gold"
                >
                  {s.label.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="eyebrow text-gold">Explore</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-bone"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h3 className="eyebrow text-gold">Visit the Atelier</h3>
            <ul className="mt-5 space-y-4 text-sm text-muted">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                <span>{company.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-gold" />
                <span className="flex flex-col gap-1">
                  <a href={company.phoneHref} className="hover:text-bone">
                    {company.phone}
                  </a>
                  <a href={company.phone2Href} className="hover:text-bone">
                    {company.phone2}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-gold" />
                <a href={company.emailHref} className="hover:text-bone">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-gold" />
                <span>{company.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-bone/10 pt-8 text-xs text-muted-2 md:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="tracking-wide">
            Designed &amp; crafted in {company.city}
          </p>
        </div>
      </Container>
    </footer>
  );
}
