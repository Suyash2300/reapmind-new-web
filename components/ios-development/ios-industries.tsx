"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { iosDevelopmentConfig } from "@/lib/ios-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

type IndustryId = (typeof iosDevelopmentConfig.industries.items)[number]["id"];

export function IosIndustries() {
  const { industries } = iosDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [activeId, setActiveId] = useState<IndustryId>("healthcare");
  const sector = industries.items.find((item) => item.id === activeId) ?? industries.items[0];

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="ios-industries-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="ios-industries-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {industries.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] lg:items-stretch lg:gap-8">
          <div
            className="flex flex-wrap gap-2 lg:max-h-[520px] lg:flex-col lg:overflow-y-auto lg:pr-1"
            role="tablist"
            aria-label="Industry sectors"
          >
            {industries.items.map((item) => (
              <HydrationButton
                key={item.id}
                type="button"
                role="tab"
                aria-selected={item.id === activeId}
                onClick={() => setActiveId(item.id)}
                className={`min-h-12 flex-1 rounded-xl border px-4 py-3.5 text-left text-sm font-semibold transition-all lg:flex-none ${
                  item.id === activeId
                    ? "border-white/25 text-white shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)]"
                    : "border-white/10 bg-black/30 text-white/55 hover:border-white/20"
                }`}
                style={
                  item.id === activeId
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
              key={sector.id}
              role="tabpanel"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: smoothEase }}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/55 shadow-[0_32px_80px_-40px_rgba(0,0,0,0.65)]"
            >
              <div className="relative h-56 sm:h-64 md:h-72 lg:h-80">
                <Image
                  src={sector.image}
                  alt={`iOS apps for ${sector.label}`}
                  fill
                  quality={92}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  priority={activeId === "healthcare"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" aria-hidden />
                <div
                  className="absolute inset-0 opacity-40"
                  style={{ background: `linear-gradient(135deg, ${sector.accent}33, transparent 55%)` }}
                  aria-hidden
                />
                <h3 className="absolute bottom-5 left-5 right-5 text-h4 font-bold text-white sm:text-h3">
                  {sector.label}
                </h3>
              </div>
              <div className="p-5 sm:p-7">
                <p className="text-para leading-relaxed text-white/65">{sector.description}</p>
                <Link
                  href="/contact-us#free-consultation"
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: sector.accent }}
                >
                  Contact Us
                </Link>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
