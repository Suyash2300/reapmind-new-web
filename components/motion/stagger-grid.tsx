"use client";

import { motion } from "framer-motion";
import {
  defaultTransition,
  fadeUp,
  staggerContainer,
} from "@/lib/animation/framer-variants";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type StaggerGridProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ul";
};

/** Service / stat card grids — children should be direct motion items or wrapped in FadeIn */
export function StaggerGrid({
  children,
  className,
  as = "div",
}: StaggerGridProps) {
  const reducedMotion = usePrefersReducedMotion();
  const Component = motion[as];

  if (reducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  children,
  className,
  hoverable = false,
}: {
  children: React.ReactNode;
  className?: string;
  /** Lift on hover — use on interactive cards (motion handles pointer reliably) */
  hoverable?: boolean;
}) {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      transition={defaultTransition}
      whileHover={
        hoverable
          ? { y: -6, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
