"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { androidHireConfig } from "@/lib/android-hire-config";

const LOGO_SLOT =
  "relative h-16 w-full max-w-[200px] sm:h-20 md:h-24 mx-auto";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.82, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 18 },
  },
};

export function AndroidHireTrustedLogos() {
  const reducedMotion = usePrefersReducedMotion();
  const logos = androidHireConfig.trustedBy.logos;

  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-12 md:grid-cols-4 lg:gap-x-10 lg:gap-y-14"
    >
      {logos.map((logo, i) => (
        <motion.li
          key={`${logo.src}-${i}`}
          variants={itemVariants}
          whileHover={
            reducedMotion
              ? undefined
              : { y: -6, scale: 1.04, transition: { duration: 0.25 } }
          }
          className="flex items-center justify-center"
        >
          <motion.div
            className={LOGO_SLOT}
            animate={
              reducedMotion
                ? undefined
                : {
                    y: [0, i % 2 === 0 ? -5 : 5, 0],
                  }
            }
            transition={
              reducedMotion
                ? undefined
                : {
                    repeat: Infinity,
                    duration: 3.2 + (i % 4) * 0.35,
                    ease: "easeInOut",
                    delay: i * 0.15,
                  }
            }
          >
            <Image
              src={logo.src}
              alt={logo.name}
              fill
              unoptimized
              sizes="(max-width: 640px) 45vw, 200px"
              className="object-contain brightness-0 invert"
            />
          </motion.div>
        </motion.li>
      ))}
    </motion.ul>
  );
}
