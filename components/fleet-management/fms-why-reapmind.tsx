"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { FmTestimonialVideo } from "@/components/freelance-marketplace/fm-testimonial-video";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { fleetManagementConfig } from "@/lib/fleet-management-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function FmsWhyReapmind() {
  const { whyUs } = fleetManagementConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="fms-why-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="fms-why-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {whyUs.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start lg:gap-10">
          <div className="space-y-6">
            <BlurFadeIn as="p" delay={0.06} className="text-para leading-relaxed text-white/65">
              <WordReveal text={whyUs.paragraphs[0]} delay={0.1} />
            </BlurFadeIn>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: smoothEase }}
              className="rounded-2xl border border-emerald-400/25 bg-emerald-500/10 p-5 sm:p-6"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">Reapmind Client Testimonials</p>
              <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-para">
                <WordReveal text={whyUs.paragraphs[1]} delay={0.15} />
              </p>
            </motion.div>

            <BlurFadeIn delay={0.15}>
              <Link
                href="/contact-us#free-consultation"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                {whyUs.cta}
              </Link>
            </BlurFadeIn>
          </div>

          <FmTestimonialVideo
            src={whyUs.video.src}
            poster={whyUs.video.poster}
            title={whyUs.video.title}
            fillHeight
            className="h-full min-h-[260px] lg:min-h-[380px]"
          />
        </div>
      </div>
    </section>
  );
}
