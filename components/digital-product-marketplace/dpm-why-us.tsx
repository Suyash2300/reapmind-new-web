"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { digitalProductMarketplaceConfig } from "@/lib/digital-product-marketplace-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function DpmWhyUs() {
  const { whyUs } = digitalProductMarketplaceConfig;
  const reducedMotion = usePrefersReducedMotion();
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [24, -24]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], reducedMotion ? [1, 1, 1] : [1.06, 1, 1.04]);

  return (
    <section
      className="border-t border-white/10 bg-black py-10 text-primary-foreground md:py-12 lg:py-14"
      aria-labelledby="dpm-why-heading"
    >
      <div className="container-app">
        <BlurFadeIn as="h2" id="dpm-why-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {whyUs.title}
        </BlurFadeIn>
        <BlurFadeIn as="p" delay={0.08} className="mt-4 max-w-4xl text-para leading-relaxed text-white/65">
          <WordReveal text={whyUs.intro} delay={0.1} />
        </BlurFadeIn>

        <div className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-2 lg:gap-5 lg:items-stretch">
          <BlurFadeIn delay={0.06}>
            <div
              ref={imageRef}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] border border-border-strong bg-surface-elevated sm:aspect-[5/6] lg:aspect-auto lg:min-h-[420px]"
            >
              <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
                <Image
                  src={whyUs.promoImage.src}
                  alt={whyUs.promoImage.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="object-cover object-center"
                />
              </motion.div>
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent"
                aria-hidden
              />
            </div>
          </BlurFadeIn>

          <StaggerGrid className="grid gap-4">
            {whyUs.items.map((item) => (
              <StaggerItem key={item.id} hoverable>
                <motion.article
                  whileHover={reducedMotion ? undefined : { y: -4 }}
                  transition={{ duration: 0.35, ease: smoothEase }}
                  className="flex h-full flex-col rounded-2xl border border-border-strong bg-surface-elevated p-5 sm:p-6"
                >
                  <h3 className="text-subtitle font-bold text-white">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60 sm:text-para">
                    {item.description}
                  </p>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>

        <BlurFadeIn delay={0.15} className="mt-8 text-center lg:mt-10">
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
