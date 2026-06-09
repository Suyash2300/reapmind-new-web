"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { swiftHireConfig } from "@/lib/swift-hire-config";

const SLOT = "relative h-14 w-[120px] sm:h-16 sm:w-[140px]";

export function SwiftHireTrustedLogos() {
  const reducedMotion = usePrefersReducedMotion();
  const logos = swiftHireConfig.trustedBy.logos;

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
      {logos.map((logo, i) => (
        <motion.li
          key={logo.src}
          initial={{ opacity: 0, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04, duration: 0.5 }}
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
