"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { oamsConfig } from "@/lib/oams-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function OamsConsultation() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app relative overflow-hidden bg-black py-20 sm:py-24">
      {!reduced && (
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-40"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(16,185,129,0.35), transparent 50%)",
              "radial-gradient(circle at 80% 60%, rgba(16,185,129,0.35), transparent 50%)",
              "radial-gradient(circle at 20% 30%, rgba(16,185,129,0.35), transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="container-app relative text-center">
        <motion.h2
          className="mx-auto max-w-3xl text-h2 font-black text-white md:text-display"
          initial={reduced ? false : { opacity: 0, y: 30 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {oamsConfig.consultation.title}
        </motion.h2>
        <p className="mx-auto mt-4 max-w-xl text-para text-white/70">{oamsConfig.consultation.subtitle}</p>
        <Link
          href="/contact-us"
          className="mt-8 inline-flex min-h-[54px] items-center justify-center rounded-full bg-emerald-600 px-9 text-sm font-bold text-white sm:text-base"
        >
          Get free consultation now
        </Link>
      </div>
    </section>
  );
}
