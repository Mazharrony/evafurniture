import type { Sector } from "@/lib/types";

export const sectors: Sector[] = [
  {
    slug: "residential",
    name: "Residential",
    arabic: "سكني",
    tagline: "Villas, penthouses & private homes",
    intro:
      "Bespoke interiors and custom furniture for the region's most private addresses.",
    cover: "/image/residential/boho-majlis.jpg",
    gallery: [
      "/image/residential/moroccan-living-room.jpg",
      "/image/residential/traditional-majlis.jpg",
      "/image/residential/arabic-majlis.jpg",
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
    cover: "/image/commercial/commercial1.jpeg",
    gallery: [
      "/image/commercial/commercial2.jpeg",
      "/image/commercial/commercial1.jpeg",
      "/image/commercial/commercial2.jpeg",
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
    cover: "/image/retail/reatail1.jpeg",
    gallery: [
      "/image/retail/reatail2.jpeg",
      "/image/retail/reatail1.jpeg",
      "/image/retail/reatail2.jpeg",
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
    cover: "/image/hospitality/hospitality1.jpeg",
    gallery: [
      "/image/hospitality/hospitality2.jpeg",
      "/image/hospitality/hospitality3.jpeg",
      "/image/hospitality/hospitality1.jpeg",
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
