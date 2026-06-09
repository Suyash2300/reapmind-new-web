"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { flutterHireConfig } from "@/lib/flutter-hire-config";

const LOGO_SLOT = "relative h-16 w-[150px] shrink-0 sm:h-20 sm:w-[180px] md:h-24 md:w-[200px]";

export function FlutterHireTrustedLogos() {
  const reducedMotion = usePrefersReducedMotion();
  const logos = flutterHireConfig.trustedBy.logos;
  const half = Math.ceil(logos.length / 2);
  const rowOne = [...logos.slice(0, half), ...logos.slice(0, half)];
  const rowTwo = [...logos.slice(half), ...logos.slice(half)];

  if (reducedMotion) {
    return (
      <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
        {logos.map((logo, i) => (
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
    <div className="space-y-8">
      {[rowOne, rowTwo].map((row, ri) => (
        <div key={ri} className="relative overflow-hidden py-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent sm:w-24" />
          <motion.ul
            className="flex w-max items-center gap-10 sm:gap-14"
            animate={{ x: ri === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: ri === 0 ? 40 : 34, ease: "linear" }}
          >
            {row.map((logo, i) => (
              <li key={`${logo.src}-${ri}-${i}`} className={LOGO_SLOT}>
                <Image src={logo.src} alt={logo.name} fill unoptimized className="object-contain brightness-0 invert" sizes="200px" />
              </li>
            ))}
          </motion.ul>
        </div>
      ))}
    </div>
  );
}
