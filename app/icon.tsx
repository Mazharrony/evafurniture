import { ImageResponse } from "next/og";
import { brand, markDataUrl } from "@/lib/brand";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: brand.onyx,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={markDataUrl()} width={48} height={24} alt="" />
      </div>
    ),
    { ...size },
  );
}
