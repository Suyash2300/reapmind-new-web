"use client";

import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topGolangConfig } from "@/lib/top-golang-config";

export function TgoWhyGolang() {
  const { whyGolang } = topGolangConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden bg-black py-14 md:py-20" aria-labelledby="tgo-why-golang-heading">
      <motion.div
        className="pointer-events-none absolute right-10 top-20 h-40 w-40 rounded-full border border-[#00ADD8]/20"
        animate={reducedMotion ? undefined : { y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute bottom-16 left-8 h-32 w-32 rounded-3xl bg-[#00ADD8]/5 backdrop-blur-sm"
        animate={reducedMotion ? undefined : { x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        aria-hidden
      />

      <div className="container-app relative">
        <BlurFadeIn as="h2" id="tgo-why-golang-heading" className="text-h3 font-bold text-white sm:text-h2">
          {whyGolang.title}
        </BlurFadeIn>
        <ul className="mt-10 space-y-4">
          {whyGolang.bullets.map((bullet, i) => (
            <motion.li
              key={i}
              initial={reducedMotion ? false : { opacity: 0, x: -50, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className={`flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md sm:p-5 ${i % 2 === 1 ? "ml-0 md:ml-12" : "mr-0 md:mr-12"}`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#00ADD8] text-sm font-bold text-[#0a1014]">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-white/75 sm:text-base">{bullet}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
