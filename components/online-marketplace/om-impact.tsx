"use client";

import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { onlineMarketplaceConfig } from "@/lib/online-marketplace-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const ACCENTS = ["#1A69FD", "#8B5CF6", "#10B981", "#F97316", "#06B6D4"] as const;

export function OmImpact() {
  const { impact } = onlineMarketplaceConfig;
  const reducedMotion = usePrefersReducedMotion();
  const items = impact.items;

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="om-impact-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="om-impact-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
          {impact.title}
        </BlurFadeIn>

        <StaggerGrid className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            const isWide = i === items.length - 1 && items.length % 3 !== 0;

            return (
              <StaggerItem key={item.id} hoverable className={`h-full ${isWide ? "sm:col-span-2 lg:col-span-1" : ""}`}>
                <motion.article
                  whileHover={reducedMotion ? undefined : { y: -6 }}
                  transition={{ duration: 0.35, ease: smoothEase }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated/80 p-6 backdrop-blur-sm sm:p-7"
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `radial-gradient(circle at top left, ${accent}22, transparent 60%)` }}
                    aria-hidden
                  />
                  <span className="inline-block h-1 w-10 rounded-full" style={{ backgroundColor: accent }} aria-hidden />
                  <h3 className="relative mt-4 text-lg font-bold text-white sm:text-xl">{item.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-white/60 sm:text-para">{item.description}</p>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}
