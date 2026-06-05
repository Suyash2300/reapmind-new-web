/**
 * Animation stack — use the right tool per job:
 *
 * Framer Motion     → UI motion: hovers, page sections, stagger grids, modals
 * GSAP + ScrollTrigger → Pinned sections, scroll-scrubbed timelines, complex sequences
 * Lenis             → Site-wide smooth scroll (pairs with ScrollTrigger)
 * Lottie            → Icon/illustration JSON animations (hero accents, loaders)
 * react-intersection-observer → Trigger counters / lazy GSAP only when visible
 */

export * from "./framer-variants";
export * from "./gsap-register";
