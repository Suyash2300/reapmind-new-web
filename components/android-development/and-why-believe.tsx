"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { FmTestimonialVideo } from "@/components/freelance-marketplace/fm-testimonial-video";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { AND_ACCENT, androidDevelopmentConfig } from "@/lib/android-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

function BelieveCard({
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

export function AndWhyBelieve() {
  const { whyBelieve } = androidDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [quality, agile, transparency, team] = whyBelieve.items;

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="and-why-believe-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="and-why-believe-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {whyBelieve.title}
        </BlurFadeIn>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:grid-rows-4 lg:items-stretch lg:gap-6">
          <BlurFadeIn delay={0.04} className="h-full lg:col-start-1 lg:row-start-1">
            <BelieveCard {...quality} reducedMotion={reducedMotion} />
          </BlurFadeIn>

          <FmTestimonialVideo
            src={whyBelieve.video.src}
            poster={whyBelieve.video.poster}
            title={whyBelieve.video.title}
            fillHeight
            className="h-full min-h-[260px] sm:min-h-[300px] lg:col-start-2 lg:row-start-1 lg:row-span-4 lg:min-h-0"
          />

          <BlurFadeIn delay={0.06} className="h-full lg:col-start-1 lg:row-start-2">
            <BelieveCard {...agile} reducedMotion={reducedMotion} />
          </BlurFadeIn>

          <BlurFadeIn delay={0.08} className="h-full lg:col-start-1 lg:row-start-3">
            <BelieveCard {...transparency} reducedMotion={reducedMotion} />
          </BlurFadeIn>

          <BlurFadeIn delay={0.1} className="h-full lg:col-start-1 lg:row-start-4">
            <BelieveCard {...team} reducedMotion={reducedMotion} />
          </BlurFadeIn>
        </div>

        <BlurFadeIn delay={0.12} className="mt-10 text-center">
          <motion.div whileHover={reducedMotion ? undefined : { scale: 1.03 }} transition={{ duration: 0.3, ease: smoothEase }}>
            <Link
              href="/contact-us#free-consultation"
              className="inline-flex min-h-11 items-center justify-center rounded-full px-8 text-sm font-semibold text-black transition-opacity hover:opacity-90"
              style={{ backgroundColor: AND_ACCENT }}
            >
              {whyBelieve.cta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </section>
  );
}
