/** Shared Framer Motion variants — cards, heroes, staggered grids */
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
} as const;

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
} as const;

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
} as const;

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
} as const;

export const defaultTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const springTransition = {
  type: "spring" as const,
  stiffness: 120,
  damping: 18,
};
