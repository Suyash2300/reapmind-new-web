"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { omdConfig } from "@/lib/omd-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function OmdProcess() {
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-38%"]);
  const lineScale = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  return (
    <section ref={sectionRef} className="section-app overflow-hidden bg-black py-20 sm:py-24">
      <div className="container-app">
        <h2 className="text-h2 font-black text-white md:text-display">{omdConfig.process.title}</h2>
        <p className="mt-5 max-w-4xl text-para leading-relaxed text-white/75">{omdConfig.process.subtitle}</p>
        <p className="mt-4 text-sm font-semibold text-[#5eead4] sm:text-base">{omdConfig.process.tagline}</p>

        <div className="relative mt-12">
          <motion.div
            className="absolute left-0 top-5 h-px w-full origin-left bg-gradient-to-r from-[#0D9488] to-[#5eead4]"
            style={reduced ? undefined : { scaleX: lineScale }}
          />
          <motion.div
            className="flex gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={reduced ? undefined : { x }}
          >
            {omdConfig.process.steps.map((step, index) => (
              <motion.div
                key={step}
                className="w-[260px] shrink-0 rounded-2xl border border-white/10 bg-surface-elevated p-5"
                initial={reduced ? false : { opacity: 0, y: 24 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
              >
                <span className="text-xs font-bold tracking-widest text-[#5eead4]">STEP {String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{step}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-10">
          <Link
            href="/contact-us"
            className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#0D9488] px-8 text-sm font-bold text-black sm:text-base"
          >
            {omdConfig.process.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
