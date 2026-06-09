"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { iosHireConfig } from "@/lib/ios-hire-config";

const LOGO_SLOT = "relative h-16 w-[150px] shrink-0 sm:h-20 sm:w-[180px] md:h-24 md:w-[200px]";

export function IosHireTrustedLogos() {
  const reducedMotion = usePrefersReducedMotion();
  const logos = [...iosHireConfig.trustedBy.logos, ...iosHireConfig.trustedBy.logos];

  if (reducedMotion) {
    return (
      <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
        {iosHireConfig.trustedBy.logos.map((logo, i) => (
          <li key={`${logo.src}-${i}`} className="flex justify-center">
            <div className={LOGO_SLOT}>
              <Image src={logo.src} alt={logo.name} fill unoptimized className="object-contain brightness-0 invert" sizes="200px" />
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="relative overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent sm:w-24" />
      <motion.ul
        className="flex w-max items-center gap-10 sm:gap-14 md:gap-16"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 38, ease: "linear" }}
      >
        {logos.map((logo, i) => (
          <motion.li
            key={`${logo.src}-${i}`}
            whileHover={{ scale: 1.08, y: -4 }}
            className={LOGO_SLOT}
          >
            <Image src={logo.src} alt={logo.name} fill unoptimized className="object-contain brightness-0 invert" sizes="200px" />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
