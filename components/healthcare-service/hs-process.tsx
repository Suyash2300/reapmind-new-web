"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useHealthcareServiceConfig } from "./healthcare-service-context";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function HsProcess() {
  const config = useHealthcareServiceConfig();
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.3"] });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="section-app bg-black py-20 sm:py-24">
      <div className="container-app">
        <h2 className="mx-auto max-w-4xl text-center text-h2 font-black text-white md:text-display">
          {config.process.title}
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-center text-para text-white/70">{config.process.subtitle}</p>

        <div className="relative mx-auto mt-14 max-w-lg">
          {!reduced && (
            <motion.div
              className="pointer-events-none absolute left-[2.35rem] top-6 h-[calc(100%-3rem)] w-0.5 origin-top bg-gradient-to-b from-cyan-500 to-amber-500"
              style={{ scaleY: pathLength }}
            />
          )}

          <div className="space-y-5">
            {config.process.steps.map((step, index) => (
              <motion.div
                key={step}
                className="relative flex items-center gap-5 pl-4"
                initial={reduced ? false : { opacity: 0, x: -30 }}
                whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.09, duration: 0.45 }}
              >
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-cyan-500/50 bg-black text-sm font-bold text-cyan-300">
                  {index + 1}
                </span>
                <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <p className="font-semibold text-white">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-white/60">{config.process.tagline}</p>
        <div className="mt-8 text-center">
          <Link
            href="/contact-us"
            className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-8 text-sm font-bold text-black"
          >
            {config.process.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
