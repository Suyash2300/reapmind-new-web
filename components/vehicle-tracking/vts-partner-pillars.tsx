"use client";

import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { vehicleTrackingConfig } from "@/lib/vehicle-tracking-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function VtsPartnerPillars() {
  const { partner } = vehicleTrackingConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16" aria-labelledby="vts-partner-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="vts-partner-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {partner.title}
        </BlurFadeIn>

        <StaggerGrid className="mt-10 grid gap-4 sm:grid-cols-2">
          {partner.items.map((item) => (
            <StaggerItem key={item.id} hoverable className="h-full">
              <motion.article
                whileHover={reducedMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.35, ease: smoothEase }}
                className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-sm sm:p-7"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ background: `radial-gradient(circle at top left, ${item.accent}22, transparent 60%)` }}
                  aria-hidden
                />
                <span className="inline-block h-1 w-10 rounded-full" style={{ backgroundColor: item.accent }} aria-hidden />
                <h3 className="relative mt-4 text-lg font-bold text-white">{item.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-white/60 sm:text-para">{item.description}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
