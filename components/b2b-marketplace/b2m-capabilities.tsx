"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { b2bMarketplaceConfig } from "@/lib/b2b-marketplace-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function B2mCapabilities() {
  const { capabilities } = b2bMarketplaceConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = capabilities.items;
  const activeItem = items[active];

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(advance, 5000);
    return () => clearInterval(id);
  }, [advance, reducedMotion]);

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16" aria-labelledby="b2m-capabilities-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="b2m-capabilities-heading" className="sr-only">
          B2B marketplace platform capabilities
        </BlurFadeIn>

        <div className="flex flex-wrap justify-center gap-2">
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <HydrationButton
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className="relative min-h-11 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors sm:px-5"
                style={{
                  borderColor: isActive ? `${item.accent}88` : "rgba(255,255,255,0.12)",
                  backgroundColor: isActive ? `${item.accent}18` : "rgba(0,0,0,0.4)",
                  color: isActive ? "#fff" : "rgba(255,255,255,0.55)",
                  boxShadow: isActive ? `0 0 24px ${item.accent}33` : undefined,
                }}
              >
                {item.title}
              </HydrationButton>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={reducedMotion ? false : { opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -12, filter: "blur(6px)" }}
            transition={{ duration: 0.45, ease: smoothEase }}
            className="mx-auto mt-8 max-w-3xl rounded-[1.75rem] border border-white/10 bg-black/55 p-6 text-center backdrop-blur-sm sm:p-8"
            style={{ borderTopWidth: 3, borderTopColor: activeItem.accent }}
          >
            <h3 className="text-xl font-bold text-white sm:text-2xl">{activeItem.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-para">{activeItem.description}</p>
            <Link
              href="/contact-us#free-consultation"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact Us
            </Link>
          </motion.div>
        </AnimatePresence>

        <StaggerGrid className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <StaggerItem key={item.id} hoverable className="h-full">
              <HydrationButton
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className="h-full w-full rounded-xl border border-white/10 bg-black/40 p-4 text-left transition-colors hover:border-white/20"
                style={{
                  borderColor: i === active ? `${item.accent}66` : undefined,
                  backgroundColor: i === active ? `${item.accent}10` : undefined,
                }}
              >
                <span className="inline-block h-1 w-8 rounded-full" style={{ backgroundColor: item.accent }} aria-hidden />
                <p className="mt-3 text-sm font-bold text-white">{item.title}</p>
              </HydrationButton>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
