import { cn } from "@/lib/utils";

/** Decorative bilingual flourish — small Arabic word + a gold rule. */
export function CalligraphyAccent({
  text,
  arabic,
  className,
  light = true,
}: {
  text: string;
  arabic: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-xs tracking-[0.32em] uppercase",
        light ? "text-gold" : "text-gold-deep",
        className,
      )}
    >
      <span className="h-px w-8 bg-current opacity-50" />
      {text}
      <span
        aria-hidden
        className="font-arabic text-base tracking-normal normal-case opacity-90"
      >
        {arabic}
      </span>
    </span>
  );
}

/** Thin gold divider with a central diamond motif. */
export function GoldDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
    </div>
  );
}

/** Faint mashrabiya pattern panel used as a texture layer. */
export function MashrabiyaPattern({
  className,
  opacity = 0.06,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn("mashrabiya pointer-events-none absolute inset-0", className)}
      style={{ opacity }}
    />
  );
}
