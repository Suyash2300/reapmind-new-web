import { Variants } from 'framer-motion';

// Hero Animations
export const splitTextVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
  }),
};

export const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: -90, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring' as const, damping: 12, stiffness: 100 },
  },
};

// Layout / Section Reveals
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
  },
};

// Card Animations
export const cardRevealVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring' as const, damping: 25, stiffness: 100 },
  },
};

export const cardHoverVariants: Variants = {
  initial: { scale: 1, rotateX: 0, rotateY: 0 },
  hover: {
    scale: 1.02,
    transition: { type: 'spring' as const, damping: 20, stiffness: 300 },
  },
};

// Liquid Pill / Category
export const liquidPillVariants: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { type: 'spring' as const, bounce: 0.3 } },
  exit: { scale: 0.8, opacity: 0 },
};

// Search / Input
export const searchExpandVariants = {
  collapsed: { width: '48px', backgroundColor: 'rgba(255, 255, 255, 0.05)' },
  expanded: { width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.1)' },
};

// Article Block Reveals
export const blockRevealVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};
