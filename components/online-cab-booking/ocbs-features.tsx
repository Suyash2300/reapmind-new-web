"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { onlineCabBookingConfig } from "@/lib/online-cab-booking-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

type RoleKey = keyof typeof onlineCabBookingConfig.features.roles;

const ROLE_KEYS: RoleKey[] = ["rider", "driver", "admin"];

export function OcbsFeatures() {
  const { features } = onlineCabBookingConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [activeRole, setActiveRole] = useState<RoleKey>("rider");
  const role = features.roles[activeRole];
  const items = role.items;

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="ocbs-features-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="ocbs-features-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
          {features.title}
        </BlurFadeIn>

        <div className="mt-8 flex flex-wrap gap-2 sm:gap-3" role="tablist" aria-label="Cab booking app roles">
          {ROLE_KEYS.map((key) => {
            const r = features.roles[key];
            const isActive = activeRole === key;
            return (
              <HydrationButton
                key={key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveRole(key)}
                className={`min-h-11 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors sm:px-6 ${
                  isActive
                    ? "border-white/25 text-white"
                    : "border-white/10 bg-white/5 text-white/55 hover:border-white/20 hover:text-white/80"
                }`}
                style={isActive ? { borderColor: `${r.accent}66`, backgroundColor: `${r.accent}18` } : undefined}
              >
                {r.label}
                <span className="ml-2 hidden text-xs font-medium text-white/45 sm:inline">· {r.tag}</span>
              </HydrationButton>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole}
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: smoothEase }}
            className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface-elevated/30"
          >
            <div
              className="border-b border-white/10 px-5 py-4 sm:px-6"
              style={{ background: `linear-gradient(90deg, ${role.accent}18, transparent)` }}
            >
              <p className="text-xs font-bold uppercase tracking-wider" style={{ color: role.accent }}>
                {role.label}
              </p>
            </div>

            <ol className="divide-y divide-white/8 p-5 sm:p-6">
              {items.map((item, i) => (
                <motion.li
                  key={`${activeRole}-${i}`}
                  initial={reducedMotion ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.45, ease: smoothEase }}
                  className="flex gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold tabular-nums"
                    style={{ backgroundColor: `${role.accent}22`, color: role.accent }}
                  >
                    {i + 1}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-white/65 sm:text-para">{item}</p>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
