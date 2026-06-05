import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "interior-design",
    title: "Interior Design",
    tagline: "Full-service interiors, conceived end to end",
    description:
      "From the first mood board to the final styling, we shape spaces that feel inevitable. Our designers compose light, material and proportion into interiors that are as liveable as they are luxurious.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1600&q=80",
    icon: "Sofa",
    features: [
      "Concept & spatial planning",
      "Material & finish curation",
      "Lighting & ambience design",
      "Art & accessory styling",
    ],
  },
  {
    slug: "custom-furniture",
    title: "Custom Furniture",
    tagline: "Made-to-measure pieces, crafted by hand",
    description:
      "Every commission begins as a sketch and ends in our atelier. We design and build one-of-a-kind furniture using rare timbers, stone, brass and leather — tailored to your space and proportions.",
    image:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1600&q=80",
    icon: "Hammer",
    features: [
      "Bespoke design & prototyping",
      "Solid hardwood & veneer joinery",
      "Upholstery & leatherwork",
      "Metal & stone detailing",
    ],
  },
  {
    slug: "turnkey-fit-out",
    title: "Turnkey Fit-Out",
    tagline: "Design, build and deliver — one accountable team",
    description:
      "We manage the full execution: joinery, MEP coordination, finishes and installation. You receive a complete, photograph-ready space with a single point of responsibility.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
    icon: "Ruler",
    features: [
      "Project & site management",
      "Joinery & millwork production",
      "Procurement & logistics",
      "Installation & handover",
    ],
  },
  {
    slug: "styling-consultation",
    title: "Styling & Consultation",
    tagline: "Considered guidance for refined spaces",
    description:
      "For clients seeking direction rather than a full build, our consultancy offers material palettes, layout advice and curated furniture sourcing — the atelier eye, distilled.",
    image:
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1600&q=80",
    icon: "Compass",
    features: [
      "Design consultation sessions",
      "Palette & material boards",
      "Furniture sourcing",
      "Final styling & dressing",
    ],
  },
];
