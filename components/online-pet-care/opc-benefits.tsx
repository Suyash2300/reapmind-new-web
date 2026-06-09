"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { onlinePetCareConfig } from "@/lib/online-pet-care-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const ACCENTS = ["#14B8A6", "#1A69FD", "#10B981", "#8B5CF6"] as const;

export function OpcBenefits() {
  const { benefits } = onlinePetCareConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="opc-benefits-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="opc-benefits-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
          {benefits.title}
        </BlurFadeIn>

        <StaggerGrid className="mt-10 grid gap-4 sm:grid-cols-2">
          {benefits.items.map((item, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <StaggerItem key={item.id} hoverable className="h-full">
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

        <BlurFadeIn delay={0.12} className="mt-10 text-center">
          <motion.div whileHover={reducedMotion ? undefined : { scale: 1.03 }} transition={{ duration: 0.3, ease: smoothEase }}>
            <Link
              href="/contact-us#free-consultation"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              {benefits.cta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </section>
  );
}
