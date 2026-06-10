"use client";

import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { onlineCabBookingConfig } from "@/lib/online-cab-booking-config";

export function OcbsIntro() {
  const { intro } = onlineCabBookingConfig;

  return (
    <section
      className="relative overflow-hidden border-t border-white/10 bg-black py-12 text-primary-foreground md:py-16 lg:py-20"
      aria-labelledby="ocbs-intro-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(139,92,246,0.1),transparent)]"
        aria-hidden
      />

      <div className="container-app relative">
        <BlurFadeIn as="h2" id="ocbs-intro-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {intro.title}
        </BlurFadeIn>

        <div className="mx-auto mt-8 max-w-3xl space-y-6">
          {intro.paragraphs.map((p, i) => (
            <BlurFadeIn key={p.slice(0, 40)} as="p" delay={0.08 + i * 0.1} className="text-center text-para leading-relaxed text-white/65">
              <WordReveal text={p} delay={0.12 + i * 0.05} />
            </BlurFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
