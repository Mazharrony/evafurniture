import { ImageResponse } from "next/og";
import { brand, markDataUrl } from "@/lib/brand";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

type OgOptions = {
  title: string;
  eyebrow?: string;
};

/**
 * Renders a branded 1200×630 Open Graph card shared across all routes.
 */
export function renderOgImage({ title, eyebrow }: OgOptions): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: `linear-gradient(135deg, ${brand.onyx} 0%, ${brand.onyx2} 100%)`,
          color: brand.bone,
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markDataUrl()} width={132} height={67} alt="" />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {eyebrow ? (
            <div
              style={{
                fontFamily: "sans-serif",
                fontSize: 26,
                letterSpacing: 8,
                textTransform: "uppercase",
                color: brand.gold,
                marginBottom: 28,
              }}
            >
              {eyebrow}
            </div>
          ) : null}
          <div
            style={{
              fontSize: 76,
              lineHeight: 1.05,
              fontWeight: 300,
              maxWidth: 960,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "sans-serif",
            fontSize: 24,
            color: brand.muted,
            borderTop: `1px solid ${brand.gold}33`,
            paddingTop: 28,
          }}
        >
          <span>{brand.name}</span>
          <span>Dubai · UAE</span>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
