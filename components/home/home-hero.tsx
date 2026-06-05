"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { HeroBackgroundVideo } from "@/components/home/hero-background-video";
import { HeroTypedHeadline } from "@/components/home/hero-typed-headline";
import { homeHero } from "@/lib/home-hero-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/**
 * Hero aligned with live reapmind.com: video background + official headline & CTAs.
 */
export function HomeHero() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      className="relative isolate flex min-h-[calc(100svh-80px)] items-center overflow-hidden bg-surface-dark text-primary-foreground"
      aria-labelledby="home-hero-title"
    >
      <div className="absolute inset-0 z-0" aria-hidden>
        {!reducedMotion ? (
          <HeroBackgroundVideo src={homeHero.video.mp4} />
        ) : (
          <Image
            src={homeHero.video.fallbackPoster}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
            unoptimized
          />
        )}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/65 via-black/50 to-black/35" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/30 via-transparent to-black/15" />
      </div>

      <div className="container-app relative z-10 w-full py-16 sm:py-20 lg:py-24">
        <FadeIn delay={0.08}>
          <HeroTypedHeadline />
        </FadeIn>

        <FadeIn delay={0.16}>
          <p className="mt-6 max-w-2xl text-para text-white/75">
            {homeHero.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.24}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={homeHero.primaryCta.href}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              {homeHero.primaryCta.label}
            </Link>
            <Link
              href={homeHero.secondaryCta.href}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/60"
            >
              {homeHero.secondaryCta.label}
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.32}>
          <p className="mt-8 text-para font-medium text-white/50">
            {homeHero.trustLine}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
