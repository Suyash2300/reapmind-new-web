"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { oamsConfig } from "@/lib/oams-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function OamsProcess() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.4"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="section-app bg-surface-dark py-20 sm:py-24">
      <div className="container-app">
        <h2 className="mx-auto max-w-4xl text-center text-h2 font-black text-white md:text-display">
          {oamsConfig.process.title}
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-center text-para text-white/70">{oamsConfig.process.subtitle}</p>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <motion.div
            className="absolute left-4 top-0 hidden h-full w-0.5 origin-top bg-emerald-500/40 sm:left-1/2 sm:block"
            style={reduced ? undefined : { scaleY: lineScale }}
          />
          <div className="space-y-6">
            {oamsConfig.process.steps.map((step, index) => (
              <motion.div
                key={step}
                className={`relative flex sm:w-[calc(50%-1rem)] ${
                  index % 2 === 0 ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"
                }`}
                initial={reduced ? false : { opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <div className="w-full rounded-2xl border border-white/10 bg-black/50 p-5">
                  <span className="text-xs font-bold text-emerald-400">Step {index + 1}</span>
                  <p className="mt-1 font-semibold text-white">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-white/60">{oamsConfig.process.tagline}</p>
        <div className="mt-8 text-center">
          <Link
            href="/contact-us"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-emerald-600 px-8 text-sm font-bold text-white"
          >
            {oamsConfig.process.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
