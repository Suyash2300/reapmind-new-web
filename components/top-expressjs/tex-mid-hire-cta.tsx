"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topExpressjsConfig } from "@/lib/top-expressjs-config";

export function TexMidHireCta() {
  const { midHireCta } = topExpressjsConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="bg-[#0c0f1a] py-12 md:py-16" aria-labelledby="tex-mid-hire-heading">
      <div className="container-app">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-[#a78bfa]/30 bg-gradient-to-br from-[#a78bfa]/15 via-transparent to-[#22d3ee]/10 p-8 text-center backdrop-blur-xl md:p-12"
        >
          <BlurFadeIn as="h3" id="tex-mid-hire-heading" className="text-h4 font-bold text-white sm:text-h3">
            {midHireCta.title}
          </BlurFadeIn>
          <BlurFadeIn delay={0.08} className="mt-6">
            <Link
              href={midHireCta.href}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#a78bfa] px-10 text-sm font-bold text-[#0c0f1a] hover:bg-[#9370db]"
            >
              {midHireCta.cta}
            </Link>
          </BlurFadeIn>
        </motion.div>
      </div>
    </section>
  );
}
