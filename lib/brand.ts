import { readFileSync } from "node:fs";
import { join } from "node:path";

export const brand = {
  onyx: "#0a0a0b",
  onyx2: "#0f0e0d",
  bone: "#f4efe7",
  boneSoft: "#ded6c8",
  gold: "#c9a86a",
  goldLight: "#e6cf9c",
  muted: "#8a8175",
  name: "Eva Design Furniture",
} as const;

/**
 * Reads the gold brand mark from /public/brand and returns it as a base64 data
 * URL so it can be embedded inside an `ImageResponse` (icons, OG images).
 */
export function markDataUrl(): string {
  const file = readFileSync(join(process.cwd(), "public/brand/eva-mark.png"));
  return `data:image/png;base64,${file.toString("base64")}`;
}
