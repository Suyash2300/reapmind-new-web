"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { digitalProductMarketplaceConfig } from "@/lib/digital-product-marketplace-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function DpmServicesIntro() {
  const { services, processBlurb } = digitalProductMarketplaceConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      className="border-t border-white/10 bg-black py-10 text-primary-foreground md:py-12 lg:py-14"
      aria-labelledby="dpm-services-heading"
    >
      <div className="container-app">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center lg:gap-14">
          <div>
            <BlurFadeIn as="h2" id="dpm-services-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
              {services.title}
            </BlurFadeIn>

            <BlurFadeIn as="p" delay={0.08} className="mt-5 max-w-4xl text-para leading-relaxed text-white/65">
              <WordReveal text={services.intro} delay={0.12} />
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

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: smoothEase }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-border-strong bg-surface-elevated">
              <Image
                src={services.image.src}
                alt={services.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-primary/10"
                aria-hidden
              />
            </div>
            <div
              className="pointer-events-none absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-primary/20 blur-3xl"
              aria-hidden
            />
          </motion.div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-10">
          <BlurFadeIn as="h3" className="max-w-3xl text-h4 font-bold text-white sm:text-h3">
            {processBlurb.title}
          </BlurFadeIn>
          <BlurFadeIn as="p" delay={0.1} className="mt-4 max-w-4xl text-para leading-relaxed text-white/65">
            {processBlurb.intro}
          </BlurFadeIn>
        </div>
      </div>
    </section>
  );
}
