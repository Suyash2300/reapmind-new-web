"use client";

import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { telemedicineConfig } from "@/lib/telemedicine-config";

export function TmBridgeIntro() {
  const { bridge } = telemedicineConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="tm-bridge-heading">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {!reducedMotion && (
          <>
            <motion.div
              className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-[100px]"
              animate={{ borderRadius: ["40% 60% 55% 45%", "55% 45% 50% 50%", "40% 60% 55% 45%"] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-primary/12 blur-[90px]"
              animate={{ borderRadius: ["50% 50% 40% 60%", "45% 55% 60% 40%", "50% 50% 40% 60%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </>
        )}
      </div>

      <div className="container-app relative">
        <BlurFadeIn as="h2" id="tm-bridge-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {bridge.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {bridge.paragraphs.map((para, i) => (
            <BlurFadeIn key={i} delay={0.06 * i} className={i === 3 ? "md:col-span-2" : ""}>
              <motion.p
                whileHover={reducedMotion ? undefined : { x: 4 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 text-para leading-relaxed text-white/68 backdrop-blur-sm sm:p-6"
              >
                <WordReveal text={para} delay={0.08 + i * 0.04} />
              </motion.p>
            </BlurFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
