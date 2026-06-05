/**
 * Homepage hero — copy from https://reapmind.com/ (Jan 2025).
 *
 * Hero video: `public/ai.mp4` → served at `/ai.mp4`
 */
export const homeHero = {
  /** Small line above headline (brand URL) */
  domain: "reapmind.com",
  /** Live site H2 */
  partnerLine: "Your Digital Partners for",
  /** Live typed headline strings */
  rotatingPhrases: [
    "Digital Transformation",
    "Application Development",
    "Business Automation",
    "DATA & AI",
  ] as const,
  /** Typewriter timing (matches live reapmind.com typed plugin ~40ms) */
  typewriter: {
    typeMs: 58,
    deleteMs: 52,
    pauseAfterTypeMs: 2200,
    pauseAfterDeleteMs: 550,
  },
  /** Yoast meta description — used under hero + layout metadata */
  description:
    "ReapMind Digital Transformation & Innovation Partner for mobile apps, AI, blockchain, and cloud. Accelerate growth with expert tech solutions.",
  primaryCta: {
    label: "Schedule a call",
    href: "/contact-us",
  },
  secondaryCta: {
    label: "Case Studies",
    href: "/portfolio-reapmind",
  },
  trustLine: "Trusted by startups & Fortune 500 companies",

  video: {
    mp4: "/ai.mp4",
    fallbackMp4:
      "https://videos.pexels.com/video-files/7578552/7578552-hd_1920_1080_30fps.mp4",
    fallbackPoster:
      "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
} as const;

/** Matches live homepage `<title>` */
export const homeSeo = {
  title: "ReapMind Digital Transformation & Innovation Partner",
  description: homeHero.description,
} as const;
