"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { BcChainVisual } from "@/components/blockchain/bc-chain-visual";
import { HeroWordHeading, MountBlurFade } from "@/components/digital-product-marketplace/dpm-text-motion";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { BC_ACCENT, BC_GOLD, blockchainConfig } from "@/lib/blockchain-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function BcHero() {
  const { hero } = blockchainConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);
  const imageSrc = imgFailed ? hero.fallbackImage : hero.image;

  return (
    <section className="relative overflow-hidden bg-surface-dark pb-12 pt-10 text-primary-foreground md:pb-14 md:pt-12 lg:pt-14">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top opacity-[0.2]"
          priority
          quality={90}
          onError={() => setImgFailed(true)}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 75% 55% at 20% -5%, ${BC_ACCENT}44, transparent), radial-gradient(ellipse 45% 40% at 85% 90%, ${BC_GOLD}22, transparent)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/65 via-surface-dark/95 to-surface-dark" />
      </div>

      <div className="container-app relative">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/50">
          <ol className="flex flex-wrap items-center gap-2">
            {hero.breadcrumb.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-white/30">›</span>}
                {i < hero.breadcrumb.length - 1 ? (
                  <Link href={crumb.href} className="transition-colors hover:text-[#627EEA]">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-medium text-white/80">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)] lg:gap-10">
          <div>
            <MountBlurFade as="p" className="text-sm font-semibold uppercase tracking-[0.22em] text-[#627EEA]">
              {hero.badge}
            </MountBlurFade>

            <div className="mt-3">
              <HeroWordHeading text={hero.heading} accentWord="Blockchain" />
            </div>

            <MountBlurFade as="p" delay={0.35} className="mt-5 max-w-2xl text-md leading-relaxed text-white/78 sm:text-lg">
              {hero.description}
            </MountBlurFade>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: smoothEase }}
              className="mt-8"
            >
              <Link
                href="/contact-us#free-consultation"
                className="inline-flex min-h-11 items-center justify-center rounded-full px-8 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(98,126,234,0.55)] transition-transform hover:scale-[1.02]"
                style={{ background: `linear-gradient(135deg, ${BC_ACCENT}, ${BC_GOLD})` }}
              >
                {hero.cta}
              </Link>
            </motion.div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7, ease: smoothEase }}
              className="mt-10 hidden lg:block"
            >
              <BcChainVisual />
            </motion.div>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.85, ease: smoothEase }}
          >
            <div className="mb-6 lg:hidden">
              <BcChainVisual />
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-black/55 p-5 backdrop-blur-md sm:p-6">
              <h2 className="text-h5 font-bold text-white">{hero.formTitle}</h2>
              <p className="mt-2 text-sm text-white/60">
                Free consultation within 24 hours — tell us about your blockchain project.
              </p>
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
