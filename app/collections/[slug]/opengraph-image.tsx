import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { collections, getCollection } from "@/data/collections";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Eva Design Furniture Collection";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  return renderOgImage({
    eyebrow: "Collection",
    title: collection ? collection.name : "Collections",
  });
}
