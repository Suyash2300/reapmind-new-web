"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export type MvpMotionVariant =
  | "fadeUp"
  | "fadeLeft"
  | "fadeRight"
  | "scaleIn"
  | "blurIn"
  | "rotateIn"
  | "clipUp"
  | "springPop";

export const mvpMotionVariants: Record<MvpMotionVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 56 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -64 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 64 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.65, ease: [0.34, 1.56, 0.64, 1] } },
  },
  blurIn: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 24 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -6, y: 32 },
    visible: { opacity: 1, rotate: 0, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  },
  clipUp: {
    hidden: { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
    visible: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  },
  springPop: {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } },
  },
};

export const mvpStaggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const mvpStaggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.02 } },
};

type MvpRevealProps = {
  children: ReactNode;
  className?: string;
  variant?: MvpMotionVariant;
  delay?: number;
};

export function MvpReveal({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
}: MvpRevealProps) {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  const base = mvpMotionVariants[variant];

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: base.hidden,
        visible: {
          ...(typeof base.visible === "object" ? base.visible : {}),
          transition: {
            ...(typeof base.visible === "object" &&
            base.visible !== null &&
            "transition" in base.visible
              ? (base.visible.transition as object)
              : {}),
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function getAlternatingVariant(index: number): MvpMotionVariant {
  const list: MvpMotionVariant[] = ["fadeLeft", "fadeRight", "scaleIn", "blurIn", "rotateIn", "clipUp"];
  return list[index % list.length];
}
