"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { ecommerceBusinessConfig } from "@/lib/ecommerce-business-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function EbsFeatureStack() {
  const { features } = ecommerceBusinessConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = features.items;
  const activeItem = items[active];

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(advance, 5500);
    return () => clearInterval(id);
  }, [advance, reducedMotion]);

  return (
    <section
      className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20"
      aria-labelledby="ebs-features-heading"
    >
      <div className="container-app">
        <BlurFadeIn as="h2" id="ebs-features-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
          {features.title}
        </BlurFadeIn>
        <BlurFadeIn as="p" delay={0.06} className="mt-4 max-w-3xl text-para text-white/60">
          {features.intro}
        </BlurFadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:gap-8 lg:items-start">
          <nav
            className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden"
            aria-label="eCommerce feature categories"
          >
            {items.map((item, i) => {
              const isActive = i === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors lg:w-full lg:px-4 lg:py-3.5 ${
                    isActive
                      ? "border-primary/50 bg-primary/10 text-white"
                      : "border-white/10 bg-surface-elevated/50 text-white/55 hover:border-white/20 hover:text-white/80"
                  }`}
                >
                  <span
                    className={`text-xs font-bold tabular-nums ${isActive ? "text-primary" : "text-white/35"}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold whitespace-nowrap lg:whitespace-normal">{item.title}</span>
                </button>
              );
            })}
          </nav>

          <div className="relative min-h-[280px] sm:min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeItem.id}
                initial={reducedMotion ? false : { opacity: 0, x: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={reducedMotion ? undefined : { opacity: 0, x: -20, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: smoothEase }}
                className={`flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-gradient-to-br ${activeItem.accent} p-6 sm:p-8`}
              >
                <span className="text-xs font-bold tabular-nums text-primary/80">
                  {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">{activeItem.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-white/70 sm:text-para">
                  {activeItem.description}
                </p>
                <Link
                  href="/contact-us#free-consultation"
                  className="mt-6 inline-flex min-h-11 w-fit items-center text-sm font-semibold text-primary transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-1.5 lg:hidden" aria-hidden>
          {items.map((item, i) => (
            <span
              key={item.id}
              className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-primary" : "w-1.5 bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function EbsWhyReapmind() {
  const { whyUs } = ecommerceBusinessConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20"
      aria-labelledby="ebs-why-heading"
    >
      <div className="container-app">
        <BlurFadeIn as="h2" id="ebs-why-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {whyUs.title}
        </BlurFadeIn>
        <BlurFadeIn as="p" delay={0.08} className="mt-4 max-w-4xl text-para leading-relaxed text-white/65">
          <WordReveal text={whyUs.intro} delay={0.1} />
        </BlurFadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-10">
          <BlurFadeIn delay={0.06}>
            <div className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-border-strong bg-gradient-to-br from-primary/25 via-surface-elevated to-violet-500/15 p-6 sm:aspect-[5/6] sm:p-8 lg:aspect-auto lg:min-h-[440px]">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(26,105,253,0.35),transparent_55%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,rgba(139,92,246,0.2),transparent_45%)]"
                aria-hidden
              />

              <div className="relative z-10 flex flex-col items-center pt-4 text-center sm:pt-8">
                <Image
                  src="/generative-ai/Reapmind-New-Logo.png"
                  alt="ReapMind Innovations"
                  width={160}
                  height={80}
                  className="h-auto w-28 object-contain sm:w-36"
                />
                <p className="mt-8 max-w-xs text-lg font-bold leading-snug text-white sm:text-xl">
                  Client testimonials that speak volumes about our excellence
                </p>
              </div>

              <motion.div
                className="relative z-10 rounded-xl border border-white/10 bg-black/45 p-4 backdrop-blur-md"
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6, ease: smoothEase }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Client success</p>
                <p className="mt-1 text-sm text-white/75">
                  Trusted by e-commerce leaders building scalable storefronts worldwide.
                </p>
              </motion.div>
            </div>
          </BlurFadeIn>

          <StaggerGrid className="grid gap-4">
            {whyUs.items.map((item) => (
              <StaggerItem key={item.id} hoverable>
                <motion.article
                  whileHover={reducedMotion ? undefined : { x: 6 }}
                  transition={{ duration: 0.35, ease: smoothEase }}
                  className="rounded-2xl border border-border-strong bg-black/40 p-5 backdrop-blur-sm sm:p-6"
                >
                  <h3 className="text-subtitle font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-para">{item.description}</p>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>

        <BlurFadeIn delay={0.15} className="mt-10 text-center">
          <motion.div whileHover={reducedMotion ? undefined : { scale: 1.03 }} transition={{ duration: 0.3, ease: smoothEase }}>
            <Link
              href="/contact-us#free-consultation"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              {whyUs.cta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </section>
  );
}
