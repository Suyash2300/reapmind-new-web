"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topPythonConfig } from "@/lib/top-python-config";

export function TpyMidHireCta() {
  const { midHireCta } = topPythonConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="bg-[#0a1628] py-12 md:py-16" aria-labelledby="tpy-mid-hire-heading">
      <div className="container-app">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative overflow-hidden rounded-3xl border border-[#FFD43B]/25 bg-gradient-to-r from-[#3776AB]/20 via-black/40 to-[#FFD43B]/10 px-8 py-10 text-center backdrop-blur-xl md:px-12"
        >
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-30"
            animate={reducedMotion ? undefined : { backgroundPosition: ["0% 50%", "100% 50%"] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            style={{ backgroundImage: "linear-gradient(90deg, transparent, rgba(255,212,59,0.15), transparent)", backgroundSize: "200% 100%" }}
            aria-hidden
          />
          <BlurFadeIn as="h3" id="tpy-mid-hire-heading" className="relative text-h4 font-bold text-white sm:text-h3">
            {midHireCta.title}
          </BlurFadeIn>
          <BlurFadeIn delay={0.08} className="relative mt-6">
            <Link
              href={midHireCta.href}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#FFD43B] px-10 text-sm font-bold text-[#0a1628] hover:bg-[#e6bf35]"
            >
              {midHireCta.cta}
            </Link>
          </BlurFadeIn>
        </motion.div>
      </div>
    </section>
  );
}
