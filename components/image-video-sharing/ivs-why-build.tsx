"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { FmTestimonialVideo } from "@/components/freelance-marketplace/fm-testimonial-video";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { imageVideoSharingConfig } from "@/lib/image-video-sharing-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

function PillarCard({
  title,
  description,
  index,
  reducedMotion,
}: {
  title: string;
  description: string;
  index: number;
  reducedMotion: boolean;
}) {
  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.12, duration: 0.55, ease: smoothEase }}
      whileHover={reducedMotion ? undefined : { scale: 1.02, boxShadow: "0 20px 50px -20px rgba(244,63,94,0.25)" }}
      className="flex h-full flex-col rounded-2xl border border-border-strong bg-surface-elevated/80 p-5 backdrop-blur-sm sm:p-6"
    >
      <h3 className="text-subtitle font-bold text-white">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60 sm:text-para">{description}</p>
    </motion.article>
  );
}

export function IvsWhyBuild() {
  const { whyBuild } = imageVideoSharingConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [innovation, commitment, quality] = whyBuild.items;

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="ivs-why-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="ivs-why-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {whyBuild.title}
        </BlurFadeIn>
        <BlurFadeIn as="p" delay={0.08} className="mt-4 max-w-4xl text-para leading-relaxed text-white/65">
          <WordReveal text={whyBuild.intro} delay={0.1} />
        </BlurFadeIn>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:grid-rows-3 lg:items-stretch lg:gap-6">
          <div className="h-full lg:col-start-1 lg:row-start-1">
            <PillarCard {...innovation} index={0} reducedMotion={reducedMotion} />
          </div>

          <FmTestimonialVideo
            src={whyBuild.video.src}
            poster={whyBuild.video.poster}
            title={whyBuild.video.title}
            fillHeight
            className="h-full min-h-[240px] lg:col-start-2 lg:row-start-1 lg:row-span-3 lg:min-h-0"
          />

          <div className="h-full lg:col-start-1 lg:row-start-2">
            <PillarCard {...commitment} index={1} reducedMotion={reducedMotion} />
          </div>

          <div className="h-full lg:col-start-1 lg:row-start-3">
            <PillarCard {...quality} index={2} reducedMotion={reducedMotion} />
          </div>
        </div>

        <BlurFadeIn delay={0.15} className="mt-10 text-center">
          <motion.div whileHover={reducedMotion ? undefined : { scale: 1.03 }} transition={{ duration: 0.3, ease: smoothEase }}>
            <Link
              href="/contact-us#free-consultation"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              {whyBuild.cta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </section>
  );
}
