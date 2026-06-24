"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { oltConfig } from "@/lib/olt-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function OltClientLogos() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app border-y border-white/8 bg-[#0a0f1a] py-16 sm:py-20">
      <div className="container-app">
        <motion.h2
          className="mx-auto max-w-4xl text-center text-h3 font-bold text-white"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {oltConfig.clientLogos.title}
        </motion.h2>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {oltConfig.clientLogos.logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              className="relative flex h-[100px] sm:h-[120px]"
              initial={reduced ? false : { opacity: 0, scale: 0.85 }}
              whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, type: "spring", stiffness: 280, damping: 22 }}
              whileHover={reduced ? undefined : { y: -4, borderColor: "rgba(6,182,212,0.4)" }}
            >
              <Image src={logo.src} alt={logo.name} fill className="object-contain p-1" sizes="180px" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
