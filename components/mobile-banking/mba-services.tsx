"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { mobileBankingConfig } from "@/lib/mobile-banking-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

type ServiceId = (typeof mobileBankingConfig.services.items)[number]["id"];

export function MbaServices() {
  const { services } = mobileBankingConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [activeId, setActiveId] = useState<ServiceId>("security-advanced");
  const items = services.items;

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="mba-services-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="mba-services-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {services.title}
        </BlurFadeIn>

        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3" role="tablist" aria-label="Mobile banking development services">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <HydrationButton
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(item.id)}
                className={`min-h-11 rounded-full border px-3 py-2.5 text-xs font-semibold transition-colors sm:px-4 sm:text-sm ${
                  isActive ? "border-white/25 text-white" : "border-white/10 bg-black/40 text-white/55 hover:border-white/20"
                }`}
                style={isActive ? { borderColor: `${item.accent}66`, backgroundColor: `${item.accent}18` } : undefined}
              >
                <span className="mr-1" aria-hidden>
                  {item.icon}
                </span>
                {item.label}
              </HydrationButton>
            );
          })}
        </div>

        <div className="relative mx-auto mt-8 max-w-4xl min-h-[280px] sm:min-h-[300px]" role="tabpanel">
          {items.map((item, i) => {
            const isActive = item.id === activeId;
            return (
              <motion.article
                key={item.id}
                initial={false}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.28, ease: smoothEase }}
                className={`overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/55 ${
                  isActive ? "relative z-10" : "pointer-events-none absolute inset-0 z-0"
                }`}
                aria-hidden={!isActive}
              >
                <div
                  className="border-b border-white/10 px-5 py-4 sm:px-8"
                  style={{ background: `linear-gradient(90deg, ${item.accent}18, transparent)` }}
                >
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: item.accent }}>
                    {item.label}
                  </p>
                </div>
                <div className="p-5 sm:p-8">
                  <p className="text-sm leading-relaxed text-white/65 sm:text-para">{item.description}</p>
                  <p className="mt-4 text-xs tabular-nums text-white/40">
                    {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
