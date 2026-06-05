import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { CalligraphyAccent } from "./Motifs";

export function SectionHeading({
  eyebrow,
  arabic,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  arabic?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  /** kept for backwards compatibility; theme is dark by default */
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          {arabic ? (
            <CalligraphyAccent
              text={eyebrow}
              arabic={arabic}
              className={align === "center" ? "justify-center" : ""}
            />
          ) : (
            <span className="eyebrow block text-gold">{eyebrow}</span>
          )}
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-5 font-display text-[2rem] font-light leading-[1.08] tracking-tight text-balance text-bone md:text-4xl lg:text-[2.9rem]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

