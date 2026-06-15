"use client";

import { motion } from "framer-motion";
import { omdConfig } from "@/lib/omd-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function OmdFeatures() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app relative overflow-hidden bg-black py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-20 top-8 h-64 w-64 rounded-full bg-[#0D9488]/25 blur-3xl"
          animate={reduced ? undefined : { x: [0, 80, 0], y: [0, -24, 0], scale: [1, 1.2, 1] }}
          transition={reduced ? undefined : { duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
          animate={reduced ? undefined : { x: [0, -60, 0], y: [0, 40, 0], scale: [1.1, 0.95, 1.1] }}
          transition={reduced ? undefined : { duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl"
          animate={reduced ? undefined : { y: [0, -50, 0], scale: [1, 1.16, 1] }}
          transition={reduced ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-app relative">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-black/55 p-7 backdrop-blur-xl sm:p-12">
          <motion.h2
            className="text-h2 font-black text-white md:text-display"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {omdConfig.features.title}
          </motion.h2>
          <motion.p
            className="mt-6 text-para leading-relaxed text-white/75"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            {omdConfig.features.intro}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
