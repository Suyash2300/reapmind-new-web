"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { salesforceDevelopmentConfig } from "@/lib/salesforce-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function SfxCoreProducts() {
  const { coreProducts } = salesforceDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();
  type ProductId = (typeof coreProducts.items)[number]["id"];
  const [activeId, setActiveId] = useState<ProductId>(coreProducts.items[0].id);
  const active = coreProducts.items.find((item) => item.id === activeId) ?? coreProducts.items[0];
  return (
    <section
      className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20"
      aria-labelledby="sfx-core-products-heading"
    >
      <div className="container-app">
        <BlurFadeIn as="h2" id="sfx-core-products-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {coreProducts.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] lg:items-stretch lg:gap-8">
          <div className="flex flex-wrap gap-2 lg:flex-col" role="tablist" aria-label="Salesforce core products">
            {coreProducts.items.map((item) => {
              const selected = item.id === activeId;
              return (
                <HydrationButton
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveId(item.id)}
                  className={`min-h-12 flex-1 rounded-xl border px-4 py-3.5 text-left text-sm font-semibold transition-all lg:flex-none ${
                    selected
                      ? "border-white/25 text-white shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)]"
                      : "border-white/10 bg-black/30 text-white/55 hover:border-white/20"
                  }`}
                  style={
                    selected
                      ? { borderColor: `${item.accent}66`, backgroundColor: `${item.accent}14` }
                      : undefined
                  }
                >
                  <span className="mr-2" aria-hidden>
                    {item.icon}
                  </span>
                  {item.label}
                </HydrationButton>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={active.id}
              role="tabpanel"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: smoothEase }}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/55 shadow-[0_32px_80px_-40px_rgba(0,0,0,0.65)]"
            >
              <div className="relative h-56 sm:h-64 md:h-72">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  quality={92}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  style={{ objectPosition: active.imagePosition ?? "center center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" aria-hidden />
                <div
                  className="absolute inset-0 opacity-40"
                  style={{ background: `linear-gradient(135deg, ${active.accent}33, transparent 55%)` }}
                  aria-hidden
                />
                <h3 className="absolute bottom-5 left-5 right-5 text-h4 font-bold text-white sm:text-h3">
                  {active.title}
                </h3>
              </div>
              <div className="p-5 sm:p-7">
                <p className="text-para leading-relaxed text-white/65">{active.description}</p>
                <Link
                  href="/contact-us#free-consultation"
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: active.accent }}
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
