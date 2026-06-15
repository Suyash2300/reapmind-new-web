"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { risConfig } from "@/lib/ris-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function RisClientLogos() {
  const reduced = usePrefersReducedMotion();
  const logos = [...risConfig.clientLogos.logos, ...risConfig.clientLogos.logos];

  return (
    <section className="section-app relative overflow-hidden border-y border-white/10 bg-surface-header py-16">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent sm:w-24" />

      <div className="container-app">
        <motion.h2
          className="mx-auto max-w-4xl text-center text-h3 font-bold text-white"
          initial={reduced ? false : { opacity: 0, letterSpacing: "0.2em" }}
          whileInView={reduced ? undefined : { opacity: 1, letterSpacing: "0.02em" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          {risConfig.clientLogos.title}
        </motion.h2>
      </div>

      <div className="mt-10 overflow-hidden">
        <motion.div
          className="flex w-max items-center gap-5 px-4 sm:gap-8"
          animate={reduced ? undefined : { x: ["0%", "-50%"] }}
          transition={reduced ? undefined : { duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {logos.map((logo, idx) => (
            <motion.div
              key={`${logo.name}-${idx}`}
              className="relative flex h-20 w-[170px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 sm:h-24 sm:w-[210px]"
              whileHover={reduced ? undefined : { scale: 1.05, borderColor: "rgba(167,139,250,0.5)" }}
            >
              <Image src={logo.src} alt={logo.name} fill className="object-contain p-3" sizes="220px" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
