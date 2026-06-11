"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { FmTestimonialVideo } from "@/components/freelance-marketplace/fm-testimonial-video";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { IOS_ACCENT, iosDevelopmentConfig } from "@/lib/ios-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function IosWhyReapmind() {
  const { whyReapmind } = iosDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="ios-why-heading">
      <div className="container-app">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14">
          <div>
            <BlurFadeIn as="h2" id="ios-why-heading" className="max-w-2xl text-h3 font-bold text-white sm:text-h2">
              {whyReapmind.title}
            </BlurFadeIn>
            {whyReapmind.paragraphs.map((paragraph, i) => (
              <BlurFadeIn key={paragraph.slice(0, 40)} as="p" delay={0.06 + i * 0.04} className="mt-5 max-w-2xl text-para leading-relaxed text-white/65">
                <WordReveal text={paragraph} delay={0.08 + i * 0.04} />
              </BlurFadeIn>
            ))}
            <BlurFadeIn delay={0.14} className="mt-8">
              <motion.div whileHover={reducedMotion ? undefined : { scale: 1.03 }} transition={{ duration: 0.3, ease: smoothEase }}>
                <Link
                  href="/contact-us#free-consultation"
                  className="inline-flex min-h-11 items-center justify-center rounded-full px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: IOS_ACCENT }}
                >
                  {whyReapmind.cta}
                </Link>
              </motion.div>
            </BlurFadeIn>
          </div>

          <FmTestimonialVideo
            src={whyReapmind.video.src}
            poster={whyReapmind.video.poster}
            title={whyReapmind.video.title}
            className="min-h-[260px] sm:min-h-[320px]"
          />
        </div>
      </div>
    </section>
  );
}
