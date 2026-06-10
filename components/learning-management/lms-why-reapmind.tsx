"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { FmTestimonialVideo } from "@/components/freelance-marketplace/fm-testimonial-video";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { learningManagementConfig } from "@/lib/learning-management-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

function PillarCard({
  title,
  description,
  reducedMotion,
}: {
  title: string;
  description: string;
  reducedMotion: boolean;
}) {
  return (
    <motion.article
      whileHover={reducedMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.35, ease: smoothEase }}
      className="flex h-full flex-col rounded-2xl border border-border-strong bg-surface-elevated/80 p-5 backdrop-blur-sm sm:p-6"
    >
      <h3 className="text-subtitle font-bold text-white">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60 sm:text-para">{description}</p>
    </motion.article>
  );
}

export function LmsWhyReapmind() {
  const { whyUs } = learningManagementConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [innovation, commitment, quality] = whyUs.items;

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="lms-why-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="lms-why-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {whyUs.title}
        </BlurFadeIn>
        <BlurFadeIn as="p" delay={0.08} className="mt-4 max-w-4xl text-para leading-relaxed text-white/65">
          <WordReveal text={whyUs.intro} delay={0.1} />
        </BlurFadeIn>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:grid-rows-3 lg:items-stretch lg:gap-6">
          <BlurFadeIn delay={0.04} className="h-full lg:col-start-1 lg:row-start-1">
            <PillarCard {...innovation} reducedMotion={reducedMotion} />
          </BlurFadeIn>

          <FmTestimonialVideo
            src={whyUs.video.src}
            poster={whyUs.video.poster}
            title={whyUs.video.title}
            fillHeight
            className="h-full min-h-[240px] lg:col-start-2 lg:row-start-1 lg:row-span-3 lg:min-h-0"
          />

          <BlurFadeIn delay={0.08} className="h-full lg:col-start-1 lg:row-start-2">
            <PillarCard {...commitment} reducedMotion={reducedMotion} />
          </BlurFadeIn>

          <BlurFadeIn delay={0.12} className="h-full lg:col-start-1 lg:row-start-3">
            <PillarCard {...quality} reducedMotion={reducedMotion} />
          </BlurFadeIn>
        </div>

        <BlurFadeIn delay={0.15} className="mt-10 text-center">
          <motion.div whileHover={reducedMotion ? undefined : { scale: 1.03 }} transition={{ duration: 0.3, ease: smoothEase }}>
            <Link
              href="/contact-us#free-consultation"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              {whyUs.cta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </section>
  );
}
