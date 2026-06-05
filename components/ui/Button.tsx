import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "light" | "gold";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-all duration-500 ease-[var(--ease-luxe)] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-onyx";

const variants: Record<Variant, string> = {
  primary:
    "bg-bone text-onyx hover:bg-gold border border-bone hover:border-gold",
  gold: "bg-gold text-onyx hover:bg-gold-light border border-gold",
  light: "bg-bone text-onyx hover:bg-gold border border-bone hover:border-gold",
  outline: "border border-bone/25 text-bone hover:border-gold hover:text-gold",
  ghost: "text-bone hover:text-gold",
};

const sizes: Record<Size, string> = {
  sm: "text-xs px-5 py-2.5",
  md: "text-[0.82rem] px-7 py-3.5",
  lg: "text-sm px-9 py-4",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  href,
  children,
}: CommonProps & { href: string }) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </Link>
  );
}
