"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { emrConfig } from "@/lib/emr-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function EmrClientLogos() {
  const reduced = usePrefersReducedMotion();
  const rowA = [...emrConfig.clientLogos.logos, ...emrConfig.clientLogos.logos];
  const rowB = [...emrConfig.clientLogos.logos].reverse().concat(
    [...emrConfig.clientLogos.logos].reverse(),
  );

  return (
    <section className="section-app overflow-hidden border-y border-white/10 bg-surface-header py-16">
      <div className="container-app">
        <h2 className="mx-auto max-w-4xl text-center text-h3 font-bold text-white">
          {emrConfig.clientLogos.title}
        </h2>
      </div>

      <div className="mt-10 space-y-5">
        <motion.div
          className="flex w-max items-center gap-5 px-4 sm:gap-8"
          animate={reduced ? undefined : { x: ["0%", "-50%"] }}
          transition={reduced ? undefined : { duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {rowA.map((logo, idx) => (
            <div
              key={`a-${logo.name}-${idx}`}
              className="relative flex h-20 w-[170px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 sm:h-24 sm:w-[210px]"
            >
              <Image src={logo.src} alt={logo.name} fill className="object-contain p-1" sizes="220px" />
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex w-max items-center gap-5 px-4 sm:gap-8"
          animate={reduced ? undefined : { x: ["-50%", "0%"] }}
          transition={reduced ? undefined : { duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {rowB.map((logo, idx) => (
            <div
              key={`b-${logo.name}-${idx}`}
              className="relative flex h-20 w-[170px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 sm:h-24 sm:w-[210px]"
            >
              <Image src={logo.src} alt={logo.name} fill className="object-contain p-1" sizes="220px" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
