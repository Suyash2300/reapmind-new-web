"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { risConfig } from "@/lib/ris-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function RisProcess() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.35"] });
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const steps = risConfig.process.steps;

  return (
    <section ref={ref} className="section-app bg-surface-dark py-20 sm:py-24">
      <div className="container-app">
        <h2 className="mx-auto max-w-4xl text-center text-h2 font-black text-white md:text-display">
          {risConfig.process.title}
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-center text-para text-white/70">{risConfig.process.subtitle}</p>

        <div className="relative mx-auto mt-14 flex max-w-3xl flex-col items-center">
          {!reduced && (
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-500/30"
              style={{ rotate: ringRotate }}
            />
          )}

          <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step}
                className="relative rounded-2xl border border-white/10 bg-black/50 p-5 text-center"
                initial={reduced ? false : { opacity: 0, scale: 0.8 }}
                whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, type: "spring", stiffness: 220 }}
                whileHover={reduced ? undefined : { y: -4, boxShadow: "0 12px 40px rgba(124,58,237,0.2)" }}
              >
                <motion.span
                  className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white"
                  animate={reduced ? undefined : { rotate: [0, 360] }}
                  transition={reduced ? undefined : { duration: 8, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                >
                  {index + 1}
                </motion.span>
                <p className="mt-3 font-semibold text-white">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-white/60">{risConfig.process.tagline}</p>
        <div className="mt-8 text-center">
          <Link
            href="/contact-us"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-violet-600 px-8 text-sm font-bold text-white"
          >
            {risConfig.process.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
