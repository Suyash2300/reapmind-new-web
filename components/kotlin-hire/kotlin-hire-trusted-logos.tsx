"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { kotlinHireConfig } from "@/lib/kotlin-hire-config";

const SLOT = "relative h-14 w-[120px] sm:h-16 sm:w-[140px]";

export function KotlinHireTrustedLogos() {
  const reducedMotion = usePrefersReducedMotion();
  const logos = kotlinHireConfig.trustedBy.logos;
  const center = Math.floor(logos.length / 2);

  if (reducedMotion) {
    return (
      <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {logos.map((logo, i) => (
          <li key={`${logo.src}-${i}`} className="flex justify-center">
            <div className={SLOT}>
              <Image src={logo.src} alt={logo.name} fill unoptimized className="object-contain brightness-0 invert" sizes="140px" />
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {logos.map((logo, i) => {
        const dist = Math.abs(i - center);
        return (
          <motion.li
            key={logo.src}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: dist * 0.08, type: "spring", stiffness: 260, damping: 18 }}
            className="flex justify-center"
          >
            <div className={SLOT}>
              <Image src={logo.src} alt={logo.name} fill unoptimized className="object-contain brightness-0 invert" sizes="140px" />
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
}
