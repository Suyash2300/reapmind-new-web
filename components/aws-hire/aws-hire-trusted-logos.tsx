"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { awsHireConfig } from "@/lib/aws-hire-config";

const SLOT = "relative h-14 w-[120px] sm:h-16 sm:w-[140px]";

export function AwsHireTrustedLogos() {
  const reducedMotion = usePrefersReducedMotion();
  const logos = awsHireConfig.trustedBy.logos;

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
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
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
