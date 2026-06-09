"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { nodejsHireConfig } from "@/lib/nodejs-hire-config";

const SLOT = "relative h-14 w-[120px] sm:h-16 sm:w-[140px]";

export function NodejsHireTrustedLogos() {
  const reduced = usePrefersReducedMotion();
  const logos = nodejsHireConfig.trustedBy.logos;

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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: i * 0.06,
            type: "spring",
            stiffness: 180,
            damping: 14,
          }}
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          className="flex justify-center"
        >
          <motion.div
            className={SLOT}
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ repeat: Infinity, duration: 3.5, delay: i * 0.15 }}
          >
            <Image src={logo.src} alt={logo.name} fill unoptimized className="object-contain brightness-0 invert" sizes="140px" />
          </motion.div>
        </motion.li>
      ))}
    </ul>
  );
}
