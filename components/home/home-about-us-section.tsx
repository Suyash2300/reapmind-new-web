"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { CountUp } from "@/components/motion/count-up";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { HomeBrilliantProfessionals } from "@/components/home/home-brilliant-professionals";
import { homeAboutUs } from "@/lib/home-about-us";

export function HomeAboutUsSection() {
  return (
    <section
      className="relative overflow-hidden bg-surface-dark py-10 text-primary-foreground md:py-12 lg:py-16"
      aria-labelledby="home-about-us-heading"
    >
      <div
        className="pointer-events-none absolute -left-32 top-0 size-[520px] rounded-full bg-primary/10 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 size-[420px] rounded-full bg-primary/5 blur-[100px]"
        aria-hidden
      />

      <div className="container-app relative">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-10 xl:gap-14">
          <div>
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                {homeAboutUs.eyebrow}
              </p>
              <h2
                id="home-about-us-heading"
                className="mt-3 text-h3 font-bold tracking-tight text-white sm:text-h2"
              >
                {homeAboutUs.title}
              </h2>
              <p className="mt-5 text-md leading-relaxed text-white/85 sm:text-lg">
                {homeAboutUs.lead}
              </p>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-5">
                {homeAboutUs.supporting.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-para leading-relaxed text-white/60"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <Link
                href={homeAboutUs.companyCta.href}
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white transition-colors hover:border-primary/40 hover:bg-primary/10"
              >
                {homeAboutUs.companyCta.label}
              </Link>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface-elevated shadow-[0_24px_64px_-24px_rgba(26,105,253,0.35)]">
              <div className="relative aspect-[5/4] sm:aspect-[4/3] lg:aspect-[5/4]">
                <Image
                  src={homeAboutUs.image.src}
                  alt={homeAboutUs.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Since 2018
                  </p>
                  <p className="mt-2 max-w-sm text-subtitle font-bold text-white">
                    India &amp; United States — one team, global delivery.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <HomeBrilliantProfessionals />

        <FadeIn delay={0.16} className="mt-8 md:mt-10">
          <div className="overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/[0.12] via-surface-elevated to-surface-elevated">
            <div className="border-b border-white/10 px-5 py-5 sm:px-6 lg:px-8 lg:py-6">
              <h3 className="text-h4 font-bold text-white sm:text-h3">
                {homeAboutUs.proof.title}
              </h3>
              <p className="mt-1 text-para text-white/55">
                {homeAboutUs.proof.subtitle}
              </p>
            </div>

            <StaggerGrid className="grid grid-cols-2 divide-x divide-y divide-white/10 sm:grid-cols-3 lg:divide-y-0">
              {homeAboutUs.proof.stats.map((stat) => (
                <StaggerItem key={stat.id} className="h-full">
                  <article className="flex h-full flex-col justify-center px-5 py-6 sm:px-6 lg:px-8 lg:py-8">
                    <p className="text-h2 font-bold tabular-nums text-accent sm:text-h1">
                      {stat.kind === "static" ? (
                        stat.display
                      ) : (
                        <CountUp end={stat.end} suffix={stat.suffix} />
                      )}
                    </p>
                    <p className="mt-2 text-sm leading-snug text-white/65 sm:text-para">
                      {stat.label}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
