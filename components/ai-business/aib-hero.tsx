"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { GaiNeuralVisual } from "@/components/generative-ai/gai-neural-visual";
import { HeroWordHeading, MountBlurFade } from "@/components/digital-product-marketplace/dpm-text-motion";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { AI_ACCENT, AI_CYAN, aiBusinessConfig } from "@/lib/ai-business-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function AibHero() {
  const { hero } = aiBusinessConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [bgFailed, setBgFailed] = useState(false);
  const bgSrc = bgFailed ? hero.fallbackImage : hero.image;

  return (
    <section className="relative overflow-hidden bg-surface-dark pb-12 pt-10 text-primary-foreground md:pb-14 md:pt-12 lg:pt-14">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={bgSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.16]"
          priority
          quality={90}
          onError={() => setBgFailed(true)}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 30% -10%, rgba(139,92,246,0.3), transparent), radial-gradient(ellipse 50% 45% at 90% 80%, rgba(34,211,238,0.15), transparent)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/60 via-surface-dark/95 to-surface-dark" />
      </div>

      <div className="container-app relative">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/50">
          <ol className="flex flex-wrap items-center gap-2">
            {hero.breadcrumb.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-white/30">›</span>}
                {i < hero.breadcrumb.length - 1 ? (
                  <Link href={crumb.href} className="transition-colors hover:text-violet-400">
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
            <MountBlurFade as="p" className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
              {hero.badge}
            </MountBlurFade>

            <div className="mt-3">
              <HeroWordHeading text={hero.heading} accentWord="Intelligence" />
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
                className="inline-flex min-h-11 items-center justify-center rounded-full px-8 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(139,92,246,0.55)] transition-transform hover:scale-[1.02]"
                style={{ background: `linear-gradient(135deg, ${AI_ACCENT}, ${AI_CYAN})` }}
              >
                {hero.cta}
              </Link>
            </motion.div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7, ease: smoothEase }}
              className="relative mt-10 hidden h-48 overflow-hidden rounded-[1.5rem] border border-white/10 sm:block lg:h-56"
            >
              <GaiNeuralVisual className="h-full w-full rounded-[1.5rem] bg-black/60" />
            </motion.div>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.85, ease: smoothEase }}
          >
            <div className="rounded-[1.5rem] border border-white/10 bg-black/55 p-5 backdrop-blur-md sm:p-6">
              <h2 className="text-h5 font-bold text-white">{hero.formTitle}</h2>
              <p className="mt-2 text-sm text-white/60">
                Tell us about your project — free consultation within 24 hours.
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
