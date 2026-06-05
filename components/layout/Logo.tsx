import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  light = true,
  className,
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Eva Design Furniture — home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span className="relative flex h-10 w-10 items-center justify-center">
        <span className="absolute inset-0 rotate-45 rounded-[6px] border border-gold/50 transition-all duration-500 group-hover:rotate-[135deg] group-hover:border-gold" />
        <span className="font-display text-lg leading-none text-gold">E</span>
      </span>
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
          Furniture · Dubai
        </span>
      </span>
    </Link>
  );
}
