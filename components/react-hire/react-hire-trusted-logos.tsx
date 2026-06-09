"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { reactHireConfig } from "@/lib/react-hire-config";

const SLOT = "relative h-12 w-[110px] shrink-0 sm:h-14 sm:w-[130px] md:h-16 md:w-[150px]";

export function ReactHireTrustedLogos() {
  const reducedMotion = usePrefersReducedMotion();
  const doubled = [...reactHireConfig.trustedBy.logos, ...reactHireConfig.trustedBy.logos];

  if (reducedMotion) {
    return (
      <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {reactHireConfig.trustedBy.logos.map((logo, i) => (
          <li key={`${logo.src}-${i}`} className="flex justify-center">
            <div className={SLOT}>
              <Image src={logo.src} alt={logo.name} fill unoptimized className="object-contain brightness-0 invert" sizes="150px" />
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="relative overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent" />
      <motion.ul
        className="flex w-max items-center gap-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 55, ease: "linear" }}
      >
        {doubled.map((logo, i) => (
          <motion.li
            key={`${logo.src}-${i}`}
            className={SLOT}
            animate={{ rotate: [0, 2, 0, -2, 0] }}
            transition={{ duration: 4 + (i % 4), repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src={logo.src} alt={logo.name} fill unoptimized className="object-contain brightness-0 invert" sizes="150px" />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
