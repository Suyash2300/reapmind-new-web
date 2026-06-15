"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { risConfig } from "@/lib/ris-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const dots = Array.from({ length: 12 }, (_, i) => i);

export function RisConsultation() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app relative overflow-hidden bg-black py-20 sm:py-24">
      {!reduced &&
        dots.map((i) => (
          <motion.span
            key={i}
            aria-hidden
            className="pointer-events-none absolute h-2 w-2 rounded-full bg-violet-500/40"
            style={{ left: `${8 + (i * 7) % 85}%`, top: `${12 + (i * 11) % 75}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

      <div className="container-app relative text-center">
        <motion.h2
          className="mx-auto max-w-3xl text-h2 font-black text-white md:text-display"
          initial={reduced ? false : { opacity: 0, scale: 0.92 }}
          whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 180 }}
        >
          {risConfig.consultation.title}
        </motion.h2>
        <p className="mx-auto mt-4 max-w-xl text-para text-white/70">{risConfig.consultation.subtitle}</p>

        <motion.div
          className="relative mt-8 inline-block"
          animate={reduced ? undefined : { boxShadow: ["0 0 0 0 rgba(124,58,237,0.4)", "0 0 0 16px rgba(124,58,237,0)", "0 0 0 0 rgba(124,58,237,0)"] }}
          transition={reduced ? undefined : { duration: 2.5, repeat: Infinity }}
        >
          <Link
            href="/contact-us"
            className="relative inline-flex min-h-[54px] items-center justify-center rounded-full bg-violet-600 px-9 text-sm font-bold text-white sm:text-base"
          >
            Get free consultation now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
