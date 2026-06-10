"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { fleetManagementConfig } from "@/lib/fleet-management-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

function GaugeRing({ value, reducedMotion }: { value: number; reducedMotion: boolean }) {
  const circumference = 2 * Math.PI * 36;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg className="h-20 w-20 sm:h-24 sm:w-24" viewBox="0 0 88 88" aria-hidden>
      <circle cx="44" cy="44" r="36" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
      <motion.circle
        cx="44"
        cy="44"
        r="36"
        fill="none"
        stroke="#10B981"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={reducedMotion ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: reducedMotion ? 0 : 1.2, ease: smoothEase, delay: 0.2 }}
        transform="rotate(-90 44 44)"
      />
      <text x="44" y="48" textAnchor="middle" className="fill-white text-sm font-bold sm:text-base">
        {value}%
      </text>
    </svg>
  );
}

export function FmsBusinessBenefits() {
  const { businessBenefits } = fleetManagementConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = businessBenefits.items;
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
      aria-labelledby="fms-benefits-heading"
    >
      <div className="container-app">
        <BlurFadeIn as="h2" id="fms-benefits-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
          {businessBenefits.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <HydrationButton
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={`flex flex-col items-center rounded-2xl border p-5 text-center transition-colors sm:p-6 ${
                  isActive
                    ? "border-emerald-400/40 bg-emerald-500/10"
                    : "border-white/10 bg-surface-elevated/50 hover:border-white/20"
                }`}
              >
                <GaugeRing value={isActive ? item.gauge : Math.round(item.gauge * 0.65)} reducedMotion={reducedMotion || !isActive} />
                <h3 className="mt-4 text-sm font-bold leading-snug text-white sm:text-base">{item.title}</h3>
              </HydrationButton>
            );
          })}
        </div>

        <div className="relative mt-8 min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.article
              key={activeItem.id}
              initial={reducedMotion ? false : { opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -12, filter: "blur(6px)" }}
              transition={{ duration: 0.45, ease: smoothEase }}
              className={`rounded-[1.75rem] border border-white/10 bg-gradient-to-br ${activeItem.accent} p-6 sm:p-8`}
            >
              <span className="text-xs font-bold tabular-nums text-emerald-400/90">
                {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">{activeItem.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-para">{activeItem.description}</p>
            </motion.article>
          </AnimatePresence>
        </div>

        <BlurFadeIn delay={0.12} className="mt-8 text-center">
          <Link
            href="/contact-us#free-consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            {businessBenefits.cta}
          </Link>
        </BlurFadeIn>
      </div>
    </section>
  );
}
