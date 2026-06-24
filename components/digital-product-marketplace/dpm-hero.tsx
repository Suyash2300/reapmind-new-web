"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { HeroWordHeading, MountBlurFade } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { digitalProductMarketplaceConfig } from "@/lib/digital-product-marketplace-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function DpmHero() {
  const { hero } = digitalProductMarketplaceConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);
  const imageSrc = imgFailed ? hero.fallbackImage : hero.image;
  const paragraphs = hero.description.split("\n\n");

  return (
    <section className="relative overflow-hidden bg-surface-dark pb-10 pt-10 text-primary-foreground md:pb-12 md:pt-12 lg:pt-14">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.28] saturate-[1.15]"
          priority
          quality={90}
          onError={() => setImgFailed(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/95 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_15%_0%,rgba(26,105,253,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_90%_20%,rgba(139,92,246,0.12),transparent)]" />
      </div>

      <div className="container-app relative">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)] lg:gap-10">
          <div>
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.55, ease: smoothEase }}
              className="text-sm font-semibold uppercase tracking-[0.22em] text-primary"
            >
              {hero.badge}
            </motion.p>

            <div className="mt-3">
              <HeroWordHeading text={hero.heading} accentWord="Marketplace" />
            </div>

            <div className="mt-5 max-w-2xl space-y-4">
              {paragraphs.map((paragraph, i) => (
                <MountBlurFade
                  key={paragraph.slice(0, 40)}
                  as="p"
                  delay={0.45 + i * 0.18}
                  className="text-md leading-relaxed text-white/78 sm:text-lg"
                >
                  {paragraph}
                </MountBlurFade>
              ))}
            </div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6, ease: smoothEase }}
              className="mt-7"
            >
              <Link
                href="/contact-us#free-consultation"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(26,105,253,0.5)] transition-transform hover:scale-[1.02] hover:bg-primary-hover"
              >
                {hero.cta}
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 32, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.85, ease: smoothEase }}
            className="space-y-4"
          >
            <div className="relative overflow-hidden rounded-[1.5rem] border border-border-strong bg-surface-elevated/80 p-1 backdrop-blur-sm">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem]">
                <Image
                  src={hero.sideImage}
                  alt="Digital product marketplace app preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-center"
                  priority
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-border-strong bg-surface-elevated/95 p-5 backdrop-blur-sm sm:p-6">
              <h2 className="text-h5 font-bold text-white">Have a Idea? Contact Us</h2>
              <p className="mt-2 text-sm text-white/60">{hero.formSubtitle}</p>
              <div className="mt-5">
                <ContactInquiryForm submitLabel="Contact Us Today" showMessage={false} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
