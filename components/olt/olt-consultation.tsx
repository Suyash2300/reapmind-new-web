"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { oltConfig } from "@/lib/olt-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function OltConsultation() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app relative overflow-hidden bg-black py-20 sm:py-24">
      {!reduced && (
        <motion.div
          className="pointer-events-none absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(6,182,212,0.12) 0%, transparent 50%, rgba(245,158,11,0.08) 100%)",
              "linear-gradient(225deg, rgba(6,182,212,0.12) 0%, transparent 50%, rgba(245,158,11,0.08) 100%)",
              "linear-gradient(135deg, rgba(6,182,212,0.12) 0%, transparent 50%, rgba(245,158,11,0.08) 100%)",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="container-app relative grid items-center gap-10 lg:grid-cols-2">
        <div>
          <motion.h2
            className="text-h2 font-black text-white md:text-display"
            initial={reduced ? false : { opacity: 0, y: 30 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {oltConfig.consultation.title}
          </motion.h2>
          <p className="mt-4 text-para text-white/70">{oltConfig.consultation.subtitle}</p>
        </div>

        <motion.div
          className="flex justify-center lg:justify-end"
          initial={reduced ? false : { opacity: 0, scale: 0.9 }}
          whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Link
            href="/contact-us"
            className="group relative inline-flex min-h-[58px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-cyan-600 px-10 text-sm font-bold text-white sm:text-base"
          >
            {!reduced && (
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%", skewX: -20 }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            )}
            <span className="relative">Get free consultation now</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
