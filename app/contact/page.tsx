import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ConsultationForm } from "@/components/sections/ConsultationForm";
import { company } from "@/data/nav";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a private consultation with Eva Design Furniture at our Al Satwa atelier in Dubai.",
};

const details = [
  { icon: MapPin, label: "Atelier", value: company.address },
  { icon: Phone, label: "Telephone", value: company.phone, href: company.phoneHref },
  { icon: Mail, label: "Email", value: company.email, href: company.emailHref },
  { icon: Clock, label: "Hours", value: company.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        arabic="تواصلوا معنا"
        title="Begin the conversation."
        description="Tell us about your space and your vision. We will arrange a private consultation at our atelier or at your home."
        image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="bg-onyx py-24 md:py-32">
        <Container className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Details */}
          <div className="lg:col-span-4">
            <h2 className="font-display text-2xl font-light text-bone md:text-3xl">
              Visit our atelier
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Located in the heart of Al Satwa, our studio and
              workshop are open for scheduled visits — the best way to
              experience our materials and craft first-hand.
            </p>
            <ul className="mt-10 space-y-7">
              {details.map((d) => (
                <li key={d.label} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coal text-gold">
                    <d.icon size={18} />
                  </span>
                  <div>
                    <p className="eyebrow text-muted">{d.label}</p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="mt-1 block text-bone transition-colors hover:text-gold"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-bone">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <h2 className="font-display text-2xl font-light text-bone md:text-3xl">
              Request a consultation
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
              Complete the form below and a member of our team will respond
              within one business day.
            </p>
            <div className="mt-10">
              <ConsultationForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Map placeholder */}
      <section className="border-t border-bone/10">
        <div className="relative h-[360px] w-full bg-coal">
          <iframe
            title="Eva Design Furniture location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=55.25%2C25.21%2C55.29%2C25.24&layer=mapnik&marker=25.2285%2C55.2700"
            className="h-full w-full opacity-80 grayscale invert"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
