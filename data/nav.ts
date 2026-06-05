import type { NavLink } from "@/lib/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Collections", href: "/collections" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export const company = {
  name: "Eva Design Furniture",
  shortName: "Eva",
  tagline: "Bespoke Interiors & Custom Furniture",
  city: "Dubai, United Arab Emirates",
  address: "Shop 1 - 20A St - Al Satwa - Dubai, UAE",
  phone: "+971 50 573 5761",
  phoneHref: "tel:+971505735761",
  email: "info@evafurniture.ae",
  emailHref: "mailto:info@evafurniture.ae",
  hours: "Sun–Thu · 9:00 – 18:00 GST",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};
