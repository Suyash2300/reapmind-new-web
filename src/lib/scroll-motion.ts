/** Scroll-triggered motion — replays whenever the element re-enters the viewport */
export const scrollViewport = {
  once: false as const,
  amount: 0.18,
  margin: "-48px" as const,
};

export const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: scrollViewport,
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: scrollViewport,
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

export const fadeLeft = {
  initial: { opacity: 0, x: -28 },
  whileInView: { opacity: 1, x: 0 },
  viewport: scrollViewport,
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

export const fadeRight = {
  initial: { opacity: 0, x: 28 },
  whileInView: { opacity: 1, x: 0 },
  viewport: scrollViewport,
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};
