import type { Post } from "@/lib/types";

export const posts: Post[] = [
  {
    slug: "art-of-quiet-luxury",
    title: "The Art of Quiet Luxury in Modern Interiors",
    excerpt:
      "Why the most coveted spaces today whisper rather than shout — and how to achieve restrained opulence at home.",
    category: "Design Philosophy",
    date: "May 2025",
    readTime: "6 min read",
    author: "Eva Atelier",
    cover:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
    body: [
      "Quiet luxury is not the absence of richness — it is the discipline of it. In our Dubai projects, we find that the most enduring interiors rely on a tightly edited palette, honest materials and impeccable proportion rather than overt ornament.",
      "Begin with a restrained envelope: plaster, stone and timber in close tonal harmony. Let texture carry the interest where colour steps back. A single sculptural piece of furniture will always speak louder than a room full of competing statements.",
      "Finally, invest in the details no one notices at first — the hidden joinery, the hand-stitched seam, the way light grazes a wall at dusk. This is where true luxury lives.",
    ],
  },
  {
    slug: "choosing-timber-bespoke",
    title: "Choosing the Right Timber for Bespoke Furniture",
    excerpt:
      "A guide to the hardwoods we love — from white oak to smoked walnut — and where each truly belongs.",
    category: "Craft",
    date: "April 2025",
    readTime: "5 min read",
    author: "Eva Atelier",
    cover:
      "https://images.unsplash.com/photo-1611288875785-f43da3f9c4ef?auto=format&fit=crop&w=1600&q=80",
    body: [
      "Timber is the soul of bespoke furniture. The species you choose will shape not only how a piece looks, but how it ages, feels and lives in the Gulf climate.",
      "White oak remains our most-requested timber: pale, durable and beautifully receptive to finishes. Walnut, by contrast, brings depth and drama, ideal for statement dining tables and cabinetry.",
      "Whatever the species, we kiln-dry and acclimatise every board to the UAE's conditions before a single joint is cut — the unglamorous step that guarantees a lifetime of stability.",
    ],
  },
  {
    slug: "dubai-design-district-guide",
    title: "A Designer's Guide to Dubai Design District",
    excerpt:
      "Our favourite showrooms, ateliers and material houses in d3 for sourcing with a discerning eye.",
    category: "Dubai",
    date: "March 2025",
    readTime: "7 min read",
    author: "Eva Atelier",
    cover:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    body: [
      "Dubai Design District — d3 — has become the creative heart of the city's interiors scene, and it is where our own atelier calls home.",
      "We source stone from the district's specialist yards, textiles from its boutique mills, and inspiration from the rotating exhibitions that pass through each season.",
      "For clients, a walk through d3 is the fastest way to fall in love with material. There is no substitute for running your hand across a slab of travertine before it becomes your dining table.",
    ],
  },
  {
    slug: "layering-light-warm-homes",
    title: "Layering Light for Warm, Liveable Homes",
    excerpt:
      "Lighting is the most underrated tool in luxury design. Here is how we build atmosphere in layers.",
    category: "How-To",
    date: "February 2025",
    readTime: "4 min read",
    author: "Eva Atelier",
    cover:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
    body: [
      "A single ceiling light flattens a room. Layered light gives it depth, mood and a sense of time passing through the day.",
      "We work in three layers: ambient for general glow, task for function, and accent to sculpt and dramatise. Dimmers on every circuit are non-negotiable.",
      "Choose warm colour temperatures — 2700K or lower — and hide the source wherever possible. The goal is to feel the light, not see the fixture.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
