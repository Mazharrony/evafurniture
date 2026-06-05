import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CTABand } from "@/components/sections/CTABand";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore signature interior design and custom furniture projects by Eva Design Furniture across Dubai and the Gulf.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        arabic="أعمالنا"
        title="Spaces we have shaped, down to the last detail."
        description="A selection of private residences, hospitality, retail and commercial projects delivered by our atelier."
        image="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="bg-onyx py-24 md:py-32">
        <Container>
          <PortfolioGrid projects={projects} />
        </Container>
      </section>

      <CTABand />
    </>
  );
}
