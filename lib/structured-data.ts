import { company } from "@/data/nav";

const baseUrl = "https://evafurniture.ae";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "InteriorDesigner",
    "@id": `${baseUrl}/#organization`,
    name: company.name,
    url: baseUrl,
    image: `${baseUrl}/opengraph-image`,
    logo: `${baseUrl}/brand/eva-logo.png`,
    description:
      "Dubai-based atelier crafting bespoke interiors and custom furniture for villas, hospitality and commercial spaces.",
    telephone: [company.phone, company.phone2],
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop 1 - 20A St - Al Satwa",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    openingHours: "Su-Th 09:00-18:00",
    sameAs: company.socials.map((s) => s.href),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

export function articleSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  author: string;
  date: string;
}) {
  const published = new Date(post.date);
  const datePublished = Number.isNaN(published.getTime())
    ? undefined
    : published.toISOString();
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${baseUrl}/journal/${post.slug}/opengraph-image`,
    datePublished,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/brand/eva-logo.png`,
      },
    },
    mainEntityOfPage: `${baseUrl}/journal/${post.slug}`,
  };
}
