"use client";

import { motion } from "framer-motion";
import { emrConfig } from "@/lib/emr-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function EmrFeatures() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app relative overflow-hidden bg-black py-20 sm:py-24">
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-30"
        animate={reduced ? undefined : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={reduced ? undefined : { duration: 16, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(110deg, transparent 30%, rgba(37,99,235,0.25) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
        }}
      />

      <div className="container-app relative">
        <motion.h2
          className="text-h2 font-black text-white md:text-display"
          initial={reduced ? false : { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
          whileInView={reduced ? undefined : { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {emrConfig.features.title}
        </motion.h2>
        <motion.p
          className="mt-6 max-w-5xl text-para leading-relaxed text-white/75"
          initial={reduced ? false : { opacity: 0, filter: "blur(8px)" }}
          whileInView={reduced ? undefined : { opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          {emrConfig.features.intro}
        </motion.p>
      </div>
    </section>
  );
}
