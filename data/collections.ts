import type { Collection } from "@/lib/types";

export const collections: Collection[] = [
  {
    slug: "noor",
    name: "Noor",
    tagline: "Light made tangible",
    description:
      "Our signature seating collection in solid oak and hand-stitched leather, designed around soft curves and golden-hour warmth.",
    cover:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1600&q=80",
    materials: ["Solid white oak", "Full-grain leather", "Aged brass"],
    pieces: [
      {
        name: "Noor Lounge Chair",
        type: "Seating",
        price: "From AED 9,800",
        image:
          "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Noor Three-Seat Sofa",
        type: "Seating",
        price: "From AED 24,500",
        image:
          "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Noor Ottoman",
        type: "Seating",
        price: "From AED 4,200",
        image:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    slug: "sahra",
    name: "Sahra",
    tagline: "Desert tones, dining redefined",
    description:
      "A dining collection inspired by dune light — sculptural tables and chairs in travertine, bronze and bouclé.",
    cover:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=80",
    materials: ["Travertine", "Patinated bronze", "Wool bouclé"],
    pieces: [
      {
        name: "Sahra Dining Table",
        type: "Tables",
        price: "From AED 32,000",
        image:
          "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Sahra Dining Chair",
        type: "Seating",
        price: "From AED 3,600",
        image:
          "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Sahra Console",
        type: "Storage",
        price: "From AED 14,800",
        image:
          "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    slug: "majlis",
    name: "Majlis",
    tagline: "A modern ode to gathering",
    description:
      "Low, generous seating that reinterprets the traditional majlis for contemporary homes — modular, tactile and endlessly hospitable.",
    cover:
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=1600&q=80",
    materials: ["Kiln-dried beech", "Linen blend", "Hand-knotted wool"],
    pieces: [
      {
        name: "Majlis Modular Sofa",
        type: "Seating",
        price: "From AED 28,000",
        image:
          "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Majlis Floor Cushion",
        type: "Seating",
        price: "From AED 1,400",
        image:
          "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Majlis Coffee Table",
        type: "Tables",
        price: "From AED 8,900",
        image:
          "https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    slug: "lumen",
    name: "Lumen",
    tagline: "Sculptural lighting in brass",
    description:
      "A lighting family of pendants, sconces and floor lamps in hand-spun brass and alabaster, casting a warm, diffuse glow.",
    cover:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1600&q=80",
    materials: ["Hand-spun brass", "Alabaster", "Opal glass"],
    pieces: [
      {
        name: "Lumen Pendant",
        type: "Lighting",
        price: "From AED 5,400",
        image:
          "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Lumen Floor Lamp",
        type: "Lighting",
        price: "From AED 6,800",
        image:
          "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Lumen Wall Sconce",
        type: "Lighting",
        price: "From AED 2,900",
        image:
          "https://images.unsplash.com/photo-1530603907829-659ab1f7c45c?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
];

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}
