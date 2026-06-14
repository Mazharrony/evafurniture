import type { Metadata } from "next";
import { Fraunces, Space_Grotesk, Reem_Kufi } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema } from "@/lib/structured-data";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const reemKufi = Reem_Kufi({
  variable: "--font-reem-kufi",
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://evafurniture.ae"),
  title: {
    default:
      "Eva Design Furniture — Luxury Interiors & Custom Furniture, Dubai",
    template: "%s · Eva Design Furniture",
  },
  description:
    "Eva Design Furniture is a Dubai-based atelier crafting bespoke interiors and custom furniture for discerning homes, villas and hospitality spaces.",
  keywords: [
    "luxury interior design Dubai",
    "custom furniture Dubai",
    "bespoke furniture",
    "interior decoration",
    "Eva Design Furniture",
  ],
  openGraph: {
    title: "Eva Design Furniture — Luxury Interiors & Custom Furniture",
    description:
      "A Dubai atelier crafting bespoke interiors and custom furniture.",
    type: "website",
    locale: "en_AE",
    url: "https://evafurniture.ae",
    siteName: "Eva Design Furniture",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eva Design Furniture — Luxury Interiors & Custom Furniture",
    description:
      "A Dubai atelier crafting bespoke interiors and custom furniture.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${spaceGrotesk.variable} ${reemKufi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-onyx text-bone">
        <JsonLd data={organizationSchema()} />
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
