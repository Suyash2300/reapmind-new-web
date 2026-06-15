"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { omdConfig } from "@/lib/omd-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function OmdConsultation() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app bg-black py-20 sm:py-24">
      <div className="container-app">
        <motion.div
          className="relative overflow-hidden rounded-[2rem] border border-[#0D9488]/35 bg-surface-elevated px-6 py-12 text-center sm:px-12"
          initial={reduced ? false : { opacity: 0, scale: 0.95 }}
          whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          {!reduced && (
            <motion.div
              className="pointer-events-none absolute inset-0"
              animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(13,148,136,0.35), transparent 42%), radial-gradient(circle at 80% 70%, rgba(94,234,212,0.24), transparent 40%)",
              }}
            />
          )}
          <div className="relative">
            <h2 className="text-h2 font-black text-white md:text-display">{omdConfig.consultation.title}</h2>
            <p className="mx-auto mt-4 max-w-3xl text-para text-white/75">{omdConfig.consultation.subtitle}</p>
            <Link
              href="/contact-us"
              className="mt-8 inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#0D9488] px-8 text-sm font-bold text-black sm:text-base"
            >
              Contact Us Today
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
