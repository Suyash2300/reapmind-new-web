"use client";

import { motion } from "framer-motion";
import {
  defaultTransition,
  fadeUp,
} from "@/lib/animation/framer-variants";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/** Scroll-reveal for sections and cards — default Appinventiv-style fade-up */
export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </motion.div>
  );
}
