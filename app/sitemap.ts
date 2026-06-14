import type { MetadataRoute } from "next";
import { collections } from "@/data/collections";
import { sectors } from "@/data/sectors";
import { posts } from "@/data/posts";

const baseUrl = "https://evafurniture.ae";

function parseDate(value: string): Date {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/collections`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/journal`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];

  const sectorRoutes: MetadataRoute.Sitemap = sectors.map((sector) => ({
    url: `${baseUrl}/services/${sector.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const collectionRoutes: MetadataRoute.Sitemap = collections.map((collection) => ({
    url: `${baseUrl}/collections/${collection.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/journal/${post.slug}`,
    lastModified: parseDate(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...sectorRoutes, ...collectionRoutes, ...postRoutes];
}
