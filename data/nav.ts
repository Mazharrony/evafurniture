import type { NavLink } from "@/lib/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Collections", href: "/collections" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export const company = {
  name: "Eva Design Furniture",
  shortName: "Eva",
  tagline: "Bespoke Interiors & Custom Furniture",
  city: "Dubai, United Arab Emirates",
  address: "Design District (d3), Building 6, Dubai, UAE",
  phone: "+971 4 000 0000",
  phoneHref: "tel:+97140000000",
  email: "atelier@evadesignfurniture.ae",
  emailHref: "mailto:atelier@evadesignfurniture.ae",
  hours: "Sun–Thu · 9:00 – 18:00 GST",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};
