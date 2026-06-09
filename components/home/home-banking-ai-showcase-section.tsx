"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { homeBankingAiShowcase } from "@/lib/home-banking-ai-showcase";

export function HomeBankingAiShowcaseSection() {
  const embedUrl = `https://www.youtube.com/embed/${homeBankingAiShowcase.video.youtubeId}?rel=0`;

  return (
    <section className="bg-surface-dark py-10 text-primary-foreground md:py-12 lg:py-14">
      <div className="container-app">
        <FadeIn>
          <h2 className="max-w-5xl text-h3 font-bold text-white sm:text-h2">
            {homeBankingAiShowcase.title}
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-2 lg:items-stretch lg:gap-10">
          <StaggerGrid className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {homeBankingAiShowcase.services.map((service) => (
              <StaggerItem key={service.id} className="h-full" hoverable>
                <article className="group flex h-full flex-col rounded-2xl border border-border-strong bg-surface-elevated p-5 transition-[box-shadow,border-color,background-color] duration-200 ease-out hover:border-primary hover:bg-white/[0.04] hover:shadow-[0_12px_40px_-12px_rgba(26,105,253,0.35)] sm:p-6">
                  <h3 className="text-subtitle font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-para leading-snug text-white/60 transition-colors group-hover:text-white/75">
                    {service.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <FadeIn delay={0.1} className="h-full min-h-[240px]">
            <div className="relative h-full overflow-hidden rounded-2xl border border-border-strong bg-surface-elevated shadow-[0_12px_40px_-12px_rgba(26,105,253,0.2)]">
              <div className="relative aspect-video w-full lg:absolute lg:inset-0 lg:aspect-auto">
                <iframe
                  src={embedUrl}
                  title={homeBankingAiShowcase.video.title}
                  className="absolute inset-0 size-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
