"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { emrConfig } from "@/lib/emr-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function EmrProcess() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section ref={ref} className="section-app relative overflow-hidden bg-surface-header py-20 sm:py-24">
      {!reduced && (
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#2563EB]/30"
          style={{ rotate: ringRotate }}
        />
      )}

      <div className="container-app relative">
        <h2 className="mx-auto max-w-4xl text-center text-h2 font-black text-white md:text-display">
          {emrConfig.process.title}
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-center text-para text-white/70">{emrConfig.process.subtitle}</p>

        <div className="relative mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {emrConfig.process.steps.map((step, index) => (
            <motion.div
              key={step}
              className="relative rounded-2xl border border-white/10 bg-black/50 p-5 text-center"
              initial={reduced ? false : { opacity: 0, scale: 0.5 }}
              whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", bounce: 0.35 }}
            >
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#2563EB]/20 text-sm font-bold text-[#93C5FD]">
                {index + 1}
              </span>
              <p className="mt-3 text-sm font-semibold text-white sm:text-base">{step}</p>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-white/60">{emrConfig.process.tagline}</p>
        <div className="mt-8 text-center">
          <Link
            href="/contact-us"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#2563EB] px-8 text-sm font-bold text-white"
          >
            {emrConfig.process.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
