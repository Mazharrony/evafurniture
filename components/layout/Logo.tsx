import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  light = true,
  showWordmark = true,
  className,
}: {
  light?: boolean;
  showWordmark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Eva Design Furniture — home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span className="relative h-12 w-24 shrink-0 transition-transform duration-500 group-hover:scale-105">
        <Image
          src="/brand/eva-mark.png"
          alt="Eva Design Furniture monogram"
          fill
          sizes="96px"
          className="object-contain object-left"
          priority
        />
      </span>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-lg tracking-tight",
              light ? "text-bone" : "text-onyx",
            )}
          >
            Eva Design
          </span>
          <span
            className={cn(
              "eyebrow mt-1 text-[0.55rem]",
              light ? "text-gold/70" : "text-gold-deep",
            )}
          >
            Furnitures Trading L.L.C
          </span>
        </span>
      )}
    </Link>
  );
}

