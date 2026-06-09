"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { servicesHero, servicesImages } from "@/lib/services-page";

export function ServicesHeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface-dark pb-10 pt-10 text-primary-foreground md:pb-12 md:pt-12 lg:pt-14">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_-10%,rgba(26,105,253,0.16),transparent)]"
        aria-hidden
      />
      <Image
        src={servicesImages.heroAccent}
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-20"
        aria-hidden
        priority
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/95 to-surface-dark/70"
        aria-hidden
      />

      <div className="container-app relative">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-10">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              {servicesHero.eyebrow}
            </p>
            <h1 className="mt-3 text-h2 font-bold tracking-tight text-white sm:text-h1">
              {servicesHero.title}
            </h1>
            <p className="mt-4 max-w-xl text-md leading-relaxed text-white/75 sm:text-lg">
              {servicesHero.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/3] sm:aspect-[5/4]">
              <div className="absolute left-[4%] top-[8%] z-10 w-[58%] rotate-[-6deg] overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-[0_24px_64px_-16px_rgba(26,105,253,0.45)]">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={servicesImages.mobilePrimary}
                    alt="Mobile application development"
                    fill
                    sizes="(max-width: 1024px) 55vw, 28vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="absolute bottom-[6%] right-[2%] z-20 w-[54%] rotate-[5deg] overflow-hidden rounded-2xl border border-primary/30 bg-black/50 shadow-[0_28px_72px_-18px_rgba(26,105,253,0.55)]">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={servicesImages.mobileSecondary}
                    alt="Cross-platform mobile apps"
                    fill
                    sizes="(max-width: 1024px) 50vw, 26vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div
                className="pointer-events-none absolute inset-0 rounded-[1.75rem] border border-dashed border-white/10"
                aria-hidden
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
