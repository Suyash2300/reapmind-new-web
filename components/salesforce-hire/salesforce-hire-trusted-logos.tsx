"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { salesforceHireConfig } from "@/lib/salesforce-hire-config";

const LOGO_SLOT =
  "relative h-14 w-full max-w-[160px] sm:h-16 sm:max-w-[180px] md:h-20 md:max-w-[200px]";

export function SalesforceHireTrustedLogos() {
  const reducedMotion = usePrefersReducedMotion();
  const logos = salesforceHireConfig.trustedBy.logos;

  if (reducedMotion) {
    return (
      <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
        {logos.map((logo, i) => (
          <li key={`${logo.src}-${i}`} className="flex justify-center">
            <div className={LOGO_SLOT}>
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                unoptimized
                className="object-contain brightness-0 invert"
                sizes="200px"
              />
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:gap-x-10">
      {logos.map((logo, i) => (
        <motion.li
          key={`${logo.src}-${i}`}
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            delay: (i % 4) * 0.07 + Math.floor(i / 4) * 0.1,
            type: "spring",
            stiffness: 200,
            damping: 18,
          }}
          className="flex justify-center"
        >
          <motion.div
            className={LOGO_SLOT}
            animate={{ scale: [1, 1.06, 1] }}
            transition={{
              delay: i * 0.15,
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-[#00A1E0]/10"
              initial={{ scale: 0, opacity: 0.6 }}
              whileInView={{ scale: 2.2, opacity: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.06, duration: 0.9 }}
              aria-hidden
            />
            <Image
              src={logo.src}
              alt={logo.name}
              fill
              unoptimized
              className="object-contain brightness-0 invert"
              sizes="200px"
            />
          </motion.div>
        </motion.li>
      ))}
    </ul>
  );
}
