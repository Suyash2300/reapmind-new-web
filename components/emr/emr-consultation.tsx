"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { emrConfig } from "@/lib/emr-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function EmrConsultation() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app relative overflow-hidden bg-surface-header py-20 sm:py-24">
      {!reduced && (
        <>
          <motion.div
            className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#2563EB]/25 blur-3xl"
            animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[#60A5FA]/20 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <div className="container-app relative text-center">
        <motion.h2
          className="mx-auto max-w-3xl text-h2 font-black text-white md:text-display"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {emrConfig.consultation.title}
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-xl text-para text-white/70"
          initial={reduced ? false : { opacity: 0 }}
          whileInView={reduced ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          {emrConfig.consultation.subtitle}
        </motion.p>
        <motion.div
          className="mt-8"
          initial={reduced ? false : { opacity: 0, scale: 0.9 }}
          whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, type: "spring" }}
        >
          <Link
            href="/contact-us"
            className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#2563EB] px-9 text-sm font-bold text-white sm:text-base"
          >
            Get free consultation now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
