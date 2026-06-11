"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { androidDevelopmentConfig } from "@/lib/android-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function AndAdvancedTech() {
  const { advancedTech } = androidDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const item = advancedTech.items[active];

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="and-advanced-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="and-advanced-heading" className="text-h3 font-bold text-white sm:text-h2">
          {advancedTech.title}
        </BlurFadeIn>

        <div className="mt-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Advanced technologies">
          {advancedTech.items.map((tech, i) => (
            <HydrationButton
              key={tech.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`min-h-11 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
                i === active ? "border-white/25 text-white" : "border-white/10 bg-black/40 text-white/55 hover:border-white/20"
              }`}
              style={
                i === active
                  ? { borderColor: `${tech.accent}66`, backgroundColor: `${tech.accent}18` }
                  : undefined
              }
            >
              {tech.label}
            </HydrationButton>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={item.id}
            role="tabpanel"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: smoothEase }}
            className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/55"
          >
            <div className="relative h-48 sm:h-56">
              <Image
                src={item.image}
                alt={item.title}
                fill
                quality={92}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                style={{ objectPosition: item.imagePosition ?? "center center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" aria-hidden />
            </div>
            <div className="p-5 sm:p-7">
              <h3 className="text-h4 font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-para leading-relaxed text-white/65">{item.description}</p>
              <Link
                href="/contact-us#free-consultation"
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full px-8 text-sm font-semibold text-black transition-opacity hover:opacity-90"
                style={{ backgroundColor: item.accent }}
              >
                Contact Us
              </Link>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
