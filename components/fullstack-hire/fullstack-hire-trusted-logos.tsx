"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { fullstackHireConfig } from "@/lib/fullstack-hire-config";

const SLOT = "relative h-14 w-[120px] sm:h-16 sm:w-[140px]";

export function FullstackHireTrustedLogos() {
  const reduced = usePrefersReducedMotion();
  const logos = fullstackHireConfig.trustedBy.logos;

  if (reduced) {
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
      {logos.map((logo, i) => (
        <motion.li
          key={`${logo.src}-${i}`}
          initial={{ opacity: 0, rotateY: -90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: 600 }}
          className="flex justify-center"
        >
          <div className={SLOT}>
            <Image src={logo.src} alt={logo.name} fill unoptimized className="object-contain brightness-0 invert" sizes="140px" />
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
