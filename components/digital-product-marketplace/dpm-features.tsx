"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { digitalProductMarketplaceConfig } from "@/lib/digital-product-marketplace-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function DpmFeatures() {
  const { features } = digitalProductMarketplaceConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      className="border-t border-white/10 bg-surface-dark py-10 md:py-12 lg:py-14"
      aria-labelledby="dpm-features-heading"
    >
      <div className="container-app">
        <BlurFadeIn as="h2" id="dpm-features-heading" className="max-w-2xl text-h3 font-bold text-white sm:text-h2">
          Marketplace capabilities built for digital goods
        </BlurFadeIn>
        <BlurFadeIn as="p" delay={0.08} className="mt-3 max-w-2xl text-para text-white/55">
          Catalog, checkout, delivery, and trust — everything buyers and sellers need in one platform.
        </BlurFadeIn>

        <StaggerGrid className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item, i) => (
            <StaggerItem key={item.id} hoverable className="h-full">
              <motion.article
                className="group flex h-full flex-col bg-black p-6 sm:p-7"
                whileHover={reducedMotion ? undefined : { backgroundColor: "rgba(26,105,253,0.04)" }}
                transition={{ duration: 0.35, ease: smoothEase }}
              >
                <span className="text-xs font-bold tabular-nums text-primary/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-bold text-white transition-colors group-hover:text-primary sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">{item.description}</p>
                <Link
                  href="/contact-us#free-consultation"
                  className="mt-5 inline-flex min-h-11 w-fit items-center text-sm font-semibold text-primary transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
