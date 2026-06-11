"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { iosDevelopmentConfig } from "@/lib/ios-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

type PlatformId = (typeof iosDevelopmentConfig.platforms.items)[number]["id"];

export function IosPlatforms() {
  const { platforms } = iosDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState<PlatformId>("iphone");
  const platform = platforms.items.find((p) => p.id === active) ?? platforms.items[0];

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="ios-platforms-heading">
      <div className="container-app">
        <BlurFadeIn as="p" className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A84FF]">
          {platforms.eyebrow}
        </BlurFadeIn>
        <BlurFadeIn as="h2" id="ios-platforms-heading" delay={0.04} className="mt-3 max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {platforms.title}
        </BlurFadeIn>
        <BlurFadeIn as="p" delay={0.08} className="mt-4 max-w-3xl text-para leading-relaxed text-white/65">
          {platforms.subtitle}
        </BlurFadeIn>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_40px_100px_-50px_rgba(10,132,255,0.45)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={platform.id}
                initial={reducedMotion ? false : { opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: smoothEase }}
                className="absolute inset-0"
              >
                <Image
                  src={platform.image}
                  alt={`${platform.label} iOS development`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                  quality={92}
                  priority={platform.id === "iphone"}
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" aria-hidden />

            {platforms.items.map((item, i) => {
              const positions = [
                "left-[8%] top-[12%]",
                "right-[6%] top-[18%]",
                "left-[10%] bottom-[14%]",
                "right-[8%] bottom-[12%]",
              ];
              const isActive = item.id === active;
              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(item.id)}
                  initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.45, ease: smoothEase }}
                  whileHover={reducedMotion ? undefined : { scale: 1.08 }}
                  className={`absolute z-10 ${positions[i]} flex min-h-11 min-w-11 items-center justify-center rounded-2xl border px-3 py-2 text-xs font-bold shadow-lg backdrop-blur-md transition-colors sm:text-sm ${
                    isActive ? "border-white/40 text-white" : "border-white/15 text-white/70"
                  }`}
                  style={{
                    backgroundColor: isActive ? `${item.accent}44` : "rgba(0,0,0,0.55)",
                    boxShadow: isActive ? `0 8px 32px -8px ${item.accent}88` : undefined,
                  }}
                  aria-pressed={isActive}
                >
                  <span className="mr-1.5 text-base" aria-hidden>
                    {item.icon}
                  </span>
                  {item.label}
                </motion.button>
              );
            })}
          </div>

          <div>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Apple platforms">
              {platforms.items.map((item) => (
                <HydrationButton
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={item.id === active}
                  onClick={() => setActive(item.id)}
                  className={`min-h-11 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all ${
                    item.id === active
                      ? "border-white/25 text-white"
                      : "border-white/10 bg-black/30 text-white/55 hover:border-white/20"
                  }`}
                  style={
                    item.id === active
                      ? { borderColor: `${item.accent}66`, backgroundColor: `${item.accent}14` }
                      : undefined
                  }
                >
                  {item.label}
                </HydrationButton>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.article
                key={platform.id}
                role="tabpanel"
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: smoothEase }}
                className="mt-6 rounded-2xl border border-white/10 bg-surface-elevated/80 p-6 backdrop-blur-sm sm:p-7"
              >
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                  style={{ backgroundColor: `${platform.accent}22` }}
                  aria-hidden
                >
                  {platform.icon}
                </span>
                <h3 className="mt-4 text-h4 font-bold text-white sm:text-h3">{platform.label}</h3>
                <p className="mt-3 text-para leading-relaxed text-white/65">{platform.description}</p>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
