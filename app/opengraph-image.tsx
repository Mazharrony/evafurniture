import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Eva Design Furniture — Luxury Interiors & Custom Furniture, Dubai";

export default function Image() {
  return renderOgImage({
    eyebrow: "Dubai Atelier",
    title: "Bespoke Interiors & Custom Furniture",
  });
}
