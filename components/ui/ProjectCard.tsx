import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  project: Project;
  className?: string;
  sizes?: string;
}) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={cn("group block", className)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-coal">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[1100ms] ease-[var(--ease-luxe)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-bone/30 bg-onyx/30 text-bone opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={16} />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6">
          <span className="eyebrow text-gold">{project.category}</span>
          <h3 className="mt-2 font-display text-2xl font-light text-bone">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-bone/60">
            {project.location} · {project.year}
          </p>
        </div>
      </div>
    </Link>
  );
}

