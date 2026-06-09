"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { groceryDeliveryConfig } from "@/lib/grocery-delivery-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function GdsInterfaces() {
  const { interfaces } = groceryDeliveryConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const roles = interfaces.roles;
  const activeRole = roles[active];

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % roles.length);
  }, [roles.length]);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(advance, 6000);
    return () => clearInterval(id);
  }, [advance, reducedMotion]);

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="gds-interfaces-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="gds-interfaces-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {interfaces.title}
        </BlurFadeIn>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {roles.map((role, i) => {
            const isActive = i === active;
            return (
              <button
                key={role.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className="relative min-h-11 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors"
                style={{
                  borderColor: isActive ? role.accent : "rgba(255,255,255,0.12)",
                  backgroundColor: isActive ? `${role.accent}18` : "rgba(0,0,0,0.4)",
                  color: isActive ? "#fff" : "rgba(255,255,255,0.55)",
                  boxShadow: isActive ? `0 0 24px ${role.accent}33` : undefined,
                }}
              >
                {role.label} Interface
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole.id}
            initial={reducedMotion ? false : { opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -12, filter: "blur(6px)" }}
            transition={{ duration: 0.45, ease: smoothEase }}
            className="mt-8"
          >
            <div
              className="mb-6 h-px w-full"
              style={{ background: `linear-gradient(90deg, transparent, ${activeRole.accent}88, transparent)` }}
              aria-hidden
            />

            <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {activeRole.features.map((feature, i) => (
                <StaggerItem key={feature.title} hoverable className="h-full">
                  <motion.article
                    whileHover={reducedMotion ? undefined : { y: -5 }}
                    transition={{ duration: 0.3, ease: smoothEase }}
                    className="flex h-full flex-col rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur-sm sm:p-6"
                    style={{ borderTopWidth: 3, borderTopColor: activeRole.accent }}
                  >
                    <span className="text-xs font-bold tabular-nums" style={{ color: activeRole.accent }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-base font-bold text-white sm:text-lg">{feature.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{feature.description}</p>
                  </motion.article>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
