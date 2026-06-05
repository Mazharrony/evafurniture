import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Eva Design Furniture — a Dubai atelier of designers and master craftspeople creating bespoke interiors and custom furniture.",
};

const values = [
  {
    title: "Craft above all",
    body: "Every joint, seam and finish is executed by hand in our workshop. We never outsource the parts that matter.",
  },
  {
    title: "Considered, not loud",
    body: "We design for longevity and calm — interiors that feel inevitable rather than fashionable.",
  },
  {
    title: "One accountable team",
    body: "Design and build under one roof means a single point of responsibility, from sketch to handover.",
  },
  {
    title: "Materials with integrity",
    body: "Rare timbers, natural stone and solid brass — honestly sourced and built to last generations.",
  },
];

const timeline = [
  { year: "2010", text: "Eva founds a small furniture workshop in Al Quoz, Dubai." },
  { year: "2014", text: "The studio expands into full-service interior design." },
  { year: "2018", text: "Atelier relocates to its Al Satwa showroom and workshop." },
  { year: "2021", text: "Launch of our first signature furniture collection, Noor." },
  { year: "2025", text: "Over 120 spaces delivered across the UAE and the Gulf." },
];

const team = [
  {
    name: "Eva Karim",
    role: "Founder & Creative Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Daniel Hwang",
    role: "Head of Interiors",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Amira Saleh",
    role: "Lead Furniture Designer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Marco Bellini",
    role: "Master Craftsman",
    image:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=800&q=80",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        arabic="قصتنا"
        title="A Dubai atelier built on craft, calm and detail."
        description="For over fifteen years, Eva Design Furniture has united designers and makers to create interiors and furniture of quiet, lasting luxury."
        image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Story */}
      <section className="bg-onyx py-24 md:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden arch-top ring-1 ring-gold/20">
              <Image
                src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80"
                alt="Master craftsman at work in the Eva atelier"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="From the Workshop"
              arabic="الورشة"
              title="It began with a single, perfectly made table."
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted md:text-lg">
              <p>
                Eva Design Furniture started in 2010 as a modest workshop in Al
                Quoz, where founder Eva Karim built furniture for friends who
                wanted something that simply could not be bought.
              </p>
              <p>
                Word travelled. As clients asked us to shape entire rooms around
                our pieces, the studio grew into a full interior design practice
                — yet we never let go of the workshop. That dual nature, equal
                parts design house and atelier, remains our defining quality.
              </p>
              <p>
                Today, from our home in Al Satwa, a team of
                forty designers and craftspeople creates interiors and furniture
                for the region&apos;s most discerning homes and hospitality
                spaces.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-onyx-2 py-24 md:py-32">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="What We Believe"
            arabic="مبادئنا"
            title="Principles that guide every project."
          />
          <div className="mt-16 grid gap-px overflow-hidden border border-bone/10 bg-bone/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal
                key={value.title}
                delay={i * 0.07}
                className="flex h-full flex-col bg-onyx-2 p-8 md:p-10"
              >
                <span className="font-display text-3xl font-light text-gold-leaf">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-display text-xl font-light text-bone">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {value.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="bg-onyx py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Our Journey"
            arabic="مسيرتنا"
            title="Fifteen years of growth and craft."
          />
          <div className="mt-14 border-t border-bone/10">
            {timeline.map((item, i) => (
              <Reveal
                key={item.year}
                delay={i * 0.05}
                className="grid grid-cols-1 gap-2 border-b border-bone/10 py-8 md:grid-cols-12 md:items-baseline"
              >
                <span className="font-display text-2xl font-light text-gold-leaf md:col-span-2">
                  {item.year}
                </span>
                <p className="text-base text-bone-soft md:col-span-10 md:text-lg">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="bg-onyx-2 py-24 md:py-32">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="The People"
            arabic="فريقنا"
            title="Designers and makers, working as one."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.06}>
                <div className="relative aspect-[3/4] overflow-hidden bg-coal">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-light text-bone">
                  {member.name}
                </h3>
                <p className="eyebrow mt-2 text-gold">{member.role}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
