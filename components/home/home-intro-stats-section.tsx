"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { CountUp } from "@/components/motion/count-up";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { homeIntro } from "@/lib/home-sections";

export function HomeIntroStatsSection() {
  return (
    <section className="bg-surface-dark py-10 text-primary-foreground md:py-12 lg:py-14">
      <div className="container-app">
        <div className="grid gap-5 lg:grid-cols-2 lg:items-start lg:gap-8">
          <FadeIn>
            <h2 className="text-h3 font-bold text-white sm:text-h2">
              {homeIntro.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="text-para leading-relaxed text-white/70">
              {homeIntro.body}
            </p>
          </FadeIn>
        </div>

        <div className="mt-4 space-y-4 sm:mt-5 sm:space-y-5">
        <StaggerGrid className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {homeIntro.pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="h-full border-l-2 border-primary/80 pl-3 sm:pl-4">
                <h3 className="text-subtitle font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-1 text-para leading-snug text-white/55">
                  {pillar.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <StaggerGrid className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5">
          {homeIntro.stats.map((stat) => (
            <StaggerItem key={stat.label} className="h-full" hoverable>
              <article className="group flex h-full cursor-pointer flex-col rounded-2xl border border-border-strong bg-surface-elevated p-4 transition-[box-shadow,border-color,background-color] duration-200 ease-out hover:border-primary hover:bg-white/[0.04] hover:shadow-[0_12px_40px_-12px_rgba(26,105,253,0.35)] sm:p-5">
                <p className="text-h2 font-bold tabular-nums text-accent">
                  <CountUp
                    end={stat.value}
                    prefix={"prefix" in stat ? stat.prefix : undefined}
                    suffix={stat.suffix}
                  />
                </p>
                <span className="mt-1.5 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-white/70 transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
                  {stat.tag}
                </span>
                <h3 className="mt-1.5 text-subtitle font-bold text-white transition-colors group-hover:text-white">
                  {stat.label}
                </h3>
                <p className="mt-1.5 flex-1 text-para leading-snug text-white/60 transition-colors group-hover:text-white/75">
                  {stat.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGrid>
        </div>

        <FadeIn delay={0.1} className="mt-6 flex flex-col items-center text-center sm:mt-8">
          <p className="text-h4 font-bold text-white">{homeIntro.cta.headline}</p>
          <Link
            href={homeIntro.cta.href}
            className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            {homeIntro.cta.buttonLabel}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
