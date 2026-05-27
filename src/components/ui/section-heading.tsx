"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/scroll-motion";

type SectionHeadingProps = {
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
  badge?: string;
};

export function SectionHeading({
  title,
  description,
  className,
  align = "center",
  badge,
}: SectionHeadingProps) {
  return (
    <motion.div
      {...fadeUp}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <span className="badge-pill mb-4 inline-flex">{badge}</span>
      )}
      <div
        className={cn(
          "flex flex-col gap-4",
          align === "center" && "items-center"
        )}
      >
        <h2 className="text-balance text-3xl font-bold tracking-tight text-heading md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
          {title}
        </h2>
        <div
          className={cn(
            "h-0.5 w-12 rounded-full bg-accent",
            align === "center" && "mx-auto"
          )}
          aria-hidden
        />
      </div>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
