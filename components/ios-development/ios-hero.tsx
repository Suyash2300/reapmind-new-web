"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IosHeroVisual } from "@/components/ios-hire/ios-hire-hero-visual";
import { HeroWordHeading, MountBlurFade } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { IOS_ACCENT, iosDevelopmentConfig } from "@/lib/ios-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function IosHero() {
  const { hero } = iosDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();
  return (
    <section className="relative overflow-hidden bg-surface-dark pb-12 pt-10 text-primary-foreground md:pb-14 md:pt-12 lg:pt-14">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={hero.image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.16]"
          priority
          quality={90}
        />
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse 85% 65% at 50% -15%, rgba(10,132,255,0.32), transparent)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/95 to-black" />
      </div>

      <div className="container-app relative">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/50">
          <ol className="flex flex-wrap items-center gap-2">
            {hero.breadcrumb.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-white/30">›</span>}
                {i < hero.breadcrumb.length - 1 ? (
                  <Link href={crumb.href} className="transition-colors hover:text-[#0A84FF]">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-medium text-white/80">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
          <div>
            <MountBlurFade as="p" className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0A84FF]">
              {hero.badge}
            </MountBlurFade>

            <div className="mt-3">
              <HeroWordHeading text={hero.heading} accentWord="IOS" />
            </div>

            <div className="mt-5 space-y-3">
              {hero.paragraphs.map((paragraph, i) => (
                <MountBlurFade
                  key={paragraph.slice(0, 32)}
                  as="p"
                  delay={0.35 + i * 0.06}
                  className="max-w-2xl text-md leading-relaxed text-white/78 sm:text-lg"
                >
                  {paragraph}
                </MountBlurFade>
              ))}
            </div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: smoothEase }}
              className="mt-8"
            >
              <Link
                href="/contact-us#free-consultation"
                className="inline-flex min-h-11 items-center justify-center rounded-full px-8 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(10,132,255,0.55)] transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: IOS_ACCENT }}
              >
                {hero.cta}
              </Link>
            </motion.div>

            <div className="mt-8 grid gap-2 sm:grid-cols-2">
              {hero.trustPills.map((pill, i) => (
                <motion.div
                  key={pill.label}
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.07, duration: 0.45, ease: smoothEase }}
                  className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-black/40 px-3 py-2.5"
                >
                  <span className="text-sm" aria-hidden>
                    {pill.icon}
                  </span>
                  <span className="text-xs font-medium leading-snug text-white/65">{pill.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.25, duration: 0.85, ease: smoothEase }}
            className="relative mx-auto w-full max-w-[420px] lg:ml-auto"
          >
            <IosHeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
