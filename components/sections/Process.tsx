import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    n: "01",
    title: "Consultation",
    body: "We begin with conversation — understanding how you live, what you love and the feeling you want a space to hold.",
  },
  {
    n: "02",
    title: "Concept & Design",
    body: "Mood boards, spatial plans and material palettes bring the vision into focus, refined together until it feels right.",
  },
  {
    n: "03",
    title: "Craft & Build",
    body: "Our artisans build every bespoke piece in-house, while we coordinate the full fit-out with a single point of contact.",
  },
  {
    n: "04",
    title: "Install & Reveal",
    body: "We deliver, install and style the finished space — handing over a home that is complete to the last detail.",
  },
];

export function Process() {
  return (
    <section className="bg-onyx py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="The Process"
          arabic="منهجنا"
          title="A considered journey, from first idea to final reveal."
        />
        <div className="mt-16 grid gap-px overflow-hidden border border-bone/10 bg-bone/10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal
              key={step.n}
              delay={i * 0.08}
              className="group flex h-full flex-col bg-onyx p-8 transition-colors hover:bg-coal md:p-10"
            >
              <span className="font-display text-5xl font-light text-stone transition-colors group-hover:text-gold-leaf">
                {step.n}
              </span>
              <h3 className="mt-6 font-display text-xl font-light text-bone">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
