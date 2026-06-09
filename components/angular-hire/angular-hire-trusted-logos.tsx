"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { angularHireConfig } from "@/lib/angular-hire-config";

const LOGO_SLOT =
  "relative h-14 w-[130px] shrink-0 sm:h-16 sm:w-[150px] md:h-20 md:w-[180px]";

export function AngularHireTrustedLogos() {
  const reducedMotion = usePrefersReducedMotion();
  const logos = [...angularHireConfig.trustedBy.logos, ...angularHireConfig.trustedBy.logos];

  if (reducedMotion) {
    return (
      <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
        {angularHireConfig.trustedBy.logos.map((logo, i) => (
          <li key={`${logo.src}-${i}`} className="flex justify-center">
            <div className={LOGO_SLOT}>
              <Image src={logo.src} alt={logo.name} fill unoptimized className="object-contain brightness-0 invert" sizes="180px" />
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="relative overflow-hidden py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-black to-transparent" />
      <motion.ul
        className="flex w-max items-center gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
      >
        {logos.map((logo, i) => (
          <motion.li
            key={`${logo.src}-${i}`}
            className={LOGO_SLOT}
            animate={{ scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2.8 + (i % 4) * 0.35, ease: "easeInOut", delay: i * 0.05 }}
          >
            <Image src={logo.src} alt={logo.name} fill unoptimized className="object-contain brightness-0 invert" sizes="180px" />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
