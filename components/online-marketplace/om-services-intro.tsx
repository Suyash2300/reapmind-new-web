"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { onlineMarketplaceConfig } from "@/lib/online-marketplace-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function OmServicesIntro() {
  const { services } = onlineMarketplaceConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16" aria-labelledby="om-services-heading">
      <div className="container-app">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,260px)] lg:items-start lg:gap-14">
          <div>
            <BlurFadeIn as="h2" id="om-services-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
              {services.title}
            </BlurFadeIn>
            <div className="mt-5 space-y-4">
              {services.paragraphs.map((paragraph, i) => (
                <BlurFadeIn key={paragraph.slice(0, 40)} as="p" delay={0.04 + i * 0.06} className="text-para leading-relaxed text-white/65">
                  {i === services.paragraphs.length - 1 ? <WordReveal text={paragraph} delay={0.1 + i * 0.04} /> : paragraph}
                </BlurFadeIn>
              ))}
            </div>
            <BlurFadeIn delay={0.2} className="mt-8">
              <Link
                href="/contact-us#free-consultation"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                {services.cta}
              </Link>
            </BlurFadeIn>
          </div>

          <div className="space-y-3">
            {services.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={reducedMotion ? false : { opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.55, ease: smoothEase }}
                className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-4"
              >
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="mt-0.5 text-sm text-white/55">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
