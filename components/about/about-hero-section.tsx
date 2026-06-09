"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { aboutOurCompanyHero } from "@/lib/about-our-company";

export function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface-dark pb-8 pt-10 text-primary-foreground md:pb-10 md:pt-12 lg:pt-14">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(26,105,253,0.14),transparent)]"
        aria-hidden
      />

      <div className="container-app relative">
        <FadeIn>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5">
            <span className="size-2 rounded-full bg-primary" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Mission brief · ReapMind Innovations
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.06}>
          <h1 className="mt-5 text-h2 font-bold tracking-tight text-white sm:text-h1 lg:max-w-4xl">
            {aboutOurCompanyHero.title}
          </h1>
          <p className="mt-3 text-h4 font-semibold text-primary sm:text-h3">
            {aboutOurCompanyHero.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ul className="mt-6 flex flex-wrap gap-2">
            {aboutOurCompanyHero.stamps.map((stamp) => (
              <li
                key={stamp}
                className="rounded-md border border-dashed border-white/20 bg-black/40 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white/60"
              >
                {stamp}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
