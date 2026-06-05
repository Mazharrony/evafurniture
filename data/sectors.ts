import type { Sector } from "@/lib/types";

export const sectors: Sector[] = [
  {
    slug: "residential",
    name: "Residential",
    arabic: "سكني",
    tagline: "Villas, penthouses & private homes",
    intro:
      "Bespoke interiors and custom furniture for the region's most private addresses.",
    cover: "/image/arab/boho-majlis.jpg",
    gallery: [
      "/image/arab/moroccan-living-room.jpg",
      "/image/arab/traditional-majlis.jpg",
      "/image/arab/arabic-majlis.jpg",
    ],
    description: [
      "From waterfront villas to sky-high penthouses, we design homes that balance grandeur with the intimacy of everyday living. Each project is tailored to how a family truly lives.",
      "Our atelier crafts every principal piece — dining tables, headboards, joinery and cabinetry — so the home feels singular, considered and entirely its own.",
    ],
    offerings: [
      "Full interior design",
      "Bespoke furniture",
      "Turnkey fit-out",
      "Majlis & entertaining spaces",
      "Lighting & styling",
    ],
    stats: [
      { value: "70+", label: "Homes delivered" },
      { value: "2,400m²", label: "Largest residence" },
    ],
  },
  {
    slug: "commercial",
    name: "Commercial",
    arabic: "تجاري",
    tagline: "Offices, headquarters & workspaces",
    intro:
      "Workspaces with the warmth of hospitality and the rigour of corporate design.",
    cover:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    ],
    description: [
      "We design commercial environments that express a brand and elevate the people within them — reception suites, boardrooms and executive floors with the soul of a private club.",
      "From space planning and MEP coordination to bespoke millwork, we deliver complete, photograph-ready workplaces on programme.",
    ],
    offerings: [
      "Workplace strategy & planning",
      "Executive & boardroom design",
      "Bespoke joinery & desks",
      "Brand-led fit-out",
      "Project management",
    ],
    stats: [
      { value: "30+", label: "Workspaces" },
      { value: "900m²", label: "Average floor" },
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    arabic: "تجزئة",
    tagline: "Boutiques, showrooms & flagships",
    intro:
      "Retail environments engineered to seduce, built to convert and made to last.",
    cover:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?auto=format&fit=crop&w=1200&q=80",
    ],
    description: [
      "We craft boutiques and flagships that turn browsing into ritual — sculptural displays, considered lighting and material palettes that flatter the merchandise and the brand.",
      "Our in-house workshop produces bespoke fixtures, vitrines and counters with a precision that off-the-shelf joinery simply cannot match.",
    ],
    offerings: [
      "Retail concept design",
      "Bespoke fixtures & vitrines",
      "Visual merchandising fit-out",
      "Flagship & pop-up builds",
      "Lighting design",
    ],
    stats: [
      { value: "25+", label: "Stores fitted" },
      { value: "14", label: "Day fast-track build" },
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    arabic: "ضيافة",
    tagline: "Hotels, restaurants & lounges",
    intro:
      "Immersive hospitality interiors that create a sense of arrival and stay in the memory.",
    cover:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    ],
    description: [
      "For hotels, restaurants and lounges we design complete guest journeys — jewel-box lobbies, statement bars and suites with atelier-made furniture that gives each property a collectible identity.",
      "We manage the full scope, from FF&E procurement to bespoke production and on-site installation across multi-key projects.",
    ],
    offerings: [
      "Guest experience design",
      "FF&E design & procurement",
      "Bespoke casegoods & seating",
      "Bar, lobby & suite fit-out",
      "Turnkey delivery",
    ],
    stats: [
      { value: "12", label: "Properties" },
      { value: "42", label: "Keys, latest hotel" },
    ],
  },
];

export function getSector(slug: string) {
  return sectors.find((s) => s.slug === slug);
}
