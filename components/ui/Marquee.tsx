import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div
      className={cn(
        "group flex overflow-hidden whitespace-nowrap",
        className,
      )}
    >
      <div className="flex shrink-0 animate-[marquee_32s_linear_infinite] items-center group-hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display text-2xl text-bone/70 md:text-3xl">
              {item}
            </span>
            <span className="mx-8 inline-block h-1.5 w-1.5 rotate-45 bg-gold md:mx-12" />
          </span>
        ))}
      </div>
    </div>
  );
}
