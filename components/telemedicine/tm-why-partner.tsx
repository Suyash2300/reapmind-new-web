"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { FmTestimonialVideo } from "@/components/freelance-marketplace/fm-testimonial-video";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { telemedicineConfig } from "@/lib/telemedicine-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

function PillarCard({
  title,
  description,
  reducedMotion,
  index,
}: {
  title: string;
  description: string;
  reducedMotion: boolean;
  index: number;
}) {
  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: smoothEase }}
      whileHover={reducedMotion ? undefined : { y: -4 }}
      className="flex h-full flex-col rounded-2xl border border-border-strong bg-surface-elevated/80 p-5 backdrop-blur-sm sm:p-6"
    >
      <h3 className="text-subtitle font-bold text-white">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60 sm:text-para">{description}</p>
    </motion.article>
  );
}

export function TmWhyPartner() {
  const { whyPartner } = telemedicineConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [customization, compliance, scalability, ux, support] = whyPartner.items;

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="tm-why-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tm-why-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {whyPartner.title}
        </BlurFadeIn>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:grid-rows-3 lg:items-stretch lg:gap-6">
          <BlurFadeIn delay={0.04} className="h-full lg:col-start-1 lg:row-start-1">
            <PillarCard {...customization} reducedMotion={reducedMotion} index={0} />
          </BlurFadeIn>

          <FmTestimonialVideo
            src={whyPartner.video.src}
            poster={whyPartner.video.poster}
            title={whyPartner.video.title}
            fillHeight
            className="h-full min-h-[240px] lg:col-start-2 lg:row-start-1 lg:row-span-3 lg:min-h-0"
          />

          <BlurFadeIn delay={0.08} className="h-full lg:col-start-1 lg:row-start-2">
            <PillarCard {...compliance} reducedMotion={reducedMotion} index={1} />
          </BlurFadeIn>

          <BlurFadeIn delay={0.1} className="h-full lg:col-start-1 lg:row-start-3">
            <PillarCard {...scalability} reducedMotion={reducedMotion} index={2} />
          </BlurFadeIn>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <PillarCard {...ux} reducedMotion={reducedMotion} index={3} />
          <PillarCard {...support} reducedMotion={reducedMotion} index={4} />
        </div>

        <BlurFadeIn delay={0.15} className="mt-10 text-center">
          <motion.div whileHover={reducedMotion ? undefined : { scale: 1.03 }} transition={{ duration: 0.3, ease: smoothEase }}>
            <Link
              href="/contact-us#free-consultation"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              {whyPartner.cta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </section>
  );
}
