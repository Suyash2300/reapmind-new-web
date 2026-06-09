"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { onlineHomeDeliveryConfig } from "@/lib/online-home-delivery-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function OhdServicesIntro() {
  const { services } = onlineHomeDeliveryConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16" aria-labelledby="ohd-services-heading">
      <div className="container-app">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,280px)] lg:items-start lg:gap-14">
          <div>
            <BlurFadeIn as="h2" id="ohd-services-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
              {services.title}
            </BlurFadeIn>
            <BlurFadeIn as="p" delay={0.08} className="mt-5 text-para leading-relaxed text-white/65">
              <WordReveal text={services.intro} delay={0.1} />
            </BlurFadeIn>
            <BlurFadeIn delay={0.16} className="mt-8">
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
                className="rounded-xl border border-orange-500/20 bg-orange-500/5 px-5 py-4"
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
