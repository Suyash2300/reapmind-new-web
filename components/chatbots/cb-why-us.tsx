"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { FmTestimonialVideo } from "@/components/freelance-marketplace/fm-testimonial-video";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { CB_ACCENT, chatbotsConfig } from "@/lib/chatbots-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

function PillarCard({
  title,
  description,
  accent,
  reducedMotion,
}: {
  title: string;
  description: string;
  accent: string;
  reducedMotion: boolean;
}) {
  return (
    <motion.article
      whileHover={reducedMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.35, ease: smoothEase }}
      className="flex h-full flex-col rounded-2xl border border-white/10 bg-surface-elevated/80 p-5 backdrop-blur-sm sm:p-6"
    >
      <span className="mb-2 inline-flex h-1 w-8 rounded-full" style={{ backgroundColor: accent }} aria-hidden />
      <h3 className="text-subtitle font-bold text-white">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60 sm:text-para">{description}</p>
    </motion.article>
  );
}

export function CbWhyUs() {
  const { whyUs } = chatbotsConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [platform, nlp, support] = whyUs.pillars;

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="cb-why-us-heading">
      <div className="container-app">
        <BlurFadeIn as="p" className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1A69FD]">
          Why ReapMind
        </BlurFadeIn>
        <BlurFadeIn as="h2" id="cb-why-us-heading" delay={0.04} className="mt-3 max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {whyUs.title}
        </BlurFadeIn>

        {whyUs.paragraphs.map((paragraph, i) => (
          <BlurFadeIn key={paragraph.slice(0, 40)} as="p" delay={0.06 + i * 0.04} className="mt-4 max-w-4xl text-para leading-relaxed text-white/65">
            <WordReveal text={paragraph} delay={0.08 + i * 0.04} />
          </BlurFadeIn>
        ))}

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:grid-rows-3 lg:items-stretch lg:gap-6">
          <BlurFadeIn delay={0.04} className="h-full lg:col-start-1 lg:row-start-1">
            <PillarCard {...platform} reducedMotion={reducedMotion} />
          </BlurFadeIn>

          <FmTestimonialVideo
            src={whyUs.video.src}
            poster={whyUs.video.poster}
            title={whyUs.video.title}
            fillHeight
            className="h-full min-h-[260px] sm:min-h-[300px] lg:col-start-2 lg:row-start-1 lg:row-span-3 lg:min-h-0"
          />

          <BlurFadeIn delay={0.08} className="h-full lg:col-start-1 lg:row-start-2">
            <PillarCard {...nlp} reducedMotion={reducedMotion} />
          </BlurFadeIn>

          <BlurFadeIn delay={0.12} className="h-full lg:col-start-1 lg:row-start-3">
            <PillarCard {...support} reducedMotion={reducedMotion} />
          </BlurFadeIn>
        </div>

        <BlurFadeIn delay={0.15} className="mt-10 text-center">
          <motion.div whileHover={reducedMotion ? undefined : { scale: 1.03 }} transition={{ duration: 0.3, ease: smoothEase }}>
            <Link
              href="/contact-us#free-consultation"
              className="inline-flex min-h-11 items-center justify-center rounded-full px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: CB_ACCENT }}
            >
              {whyUs.cta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </section>
  );
}
