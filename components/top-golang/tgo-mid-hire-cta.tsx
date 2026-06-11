"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topGolangConfig } from "@/lib/top-golang-config";

export function TgoMidHireCta() {
  const { midHireCta } = topGolangConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="bg-black py-12 md:py-16" aria-labelledby="tgo-mid-hire-heading">
      <div className="container-app">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-[#00ADD8]/30 bg-gradient-to-r from-[#00ADD8]/10 to-transparent px-8 py-10 text-center backdrop-blur-xl md:px-12"
        >
          <BlurFadeIn as="h3" id="tgo-mid-hire-heading" className="text-h4 font-bold text-white sm:text-h3">
            {midHireCta.title}
          </BlurFadeIn>
          <BlurFadeIn delay={0.08} className="mt-6">
            <Link href={midHireCta.href} className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#00ADD8] px-10 text-sm font-bold text-[#0a1014] hover:bg-[#00c4f0]">
              {midHireCta.cta}
            </Link>
          </BlurFadeIn>
        </motion.div>
      </div>
    </section>
  );
}
