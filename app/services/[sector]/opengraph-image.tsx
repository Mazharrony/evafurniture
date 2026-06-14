import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { sectors, getSector } from "@/data/sectors";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Eva Design Furniture — Sector";

export function generateStaticParams() {
  return sectors.map((s) => ({ sector: s.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ sector: string }>;
}) {
  const { sector } = await params;
  const data = getSector(sector);
  return renderOgImage({
    eyebrow: "Interiors & Furniture",
    title: data ? data.name : "Services",
  });
}
