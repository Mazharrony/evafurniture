import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { Marquee } from "@/components/ui/Marquee";

const stats = [
  { to: 15, suffix: "+", label: "Years of craft" },
  { to: 150, suffix: "+", label: "Spaces delivered" },
  { to: 40, suffix: "", label: "Artisans & designers" },
  { to: 100, suffix: "%", label: "Made to measure" },
];

const marqueeItems = [
  "Residential",
  "Commercial",
  "Retail",
  "Hospitality",
  "Bespoke Furniture",
  "Turnkey Fit-Out",
];

export function StatsBar() {
  return (
    <section className="border-y border-bone/10 bg-onyx-2">
      <div className="border-b border-bone/10 py-7">
        <Marquee items={marqueeItems} />
      </div>
      <Container className="grid grid-cols-2 gap-y-12 py-16 md:grid-cols-4 md:py-20">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 0.08}
            className="text-center md:border-r md:border-bone/10 md:last:border-r-0"
          >
            <p className="font-display text-5xl font-light text-gold-leaf md:text-6xl">
              <Counter to={stat.to} suffix={stat.suffix} />
            </p>
            <p className="eyebrow mt-4 text-muted">{stat.label}</p>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
