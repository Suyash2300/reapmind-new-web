"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { employeeTransportationConfig } from "@/lib/employee-transportation-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

type RoleKey = keyof typeof employeeTransportationConfig.roles;

const ROLE_KEYS: RoleKey[] = ["employee", "driver", "admin"];

export function EtmsRoleHub() {
  const { roles } = employeeTransportationConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [activeRole, setActiveRole] = useState<RoleKey>("employee");
  const [activeFeature, setActiveFeature] = useState(0);
  const role = roles[activeRole];
  const features = role.items;
  const activeItem = features[activeFeature];

  useEffect(() => {
    setActiveFeature(0);
  }, [activeRole]);

  const advanceFeature = useCallback(() => {
    setActiveFeature((prev) => (prev + 1) % features.length);
  }, [features.length]);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(advanceFeature, 5000);
    return () => clearInterval(id);
  }, [advanceFeature, reducedMotion, activeRole]);

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="etms-roles-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="etms-roles-heading" className="sr-only">
          Employee, Driver, and Admin Configuration
        </BlurFadeIn>

        <div className="flex flex-wrap gap-2 sm:gap-3" role="tablist" aria-label="Transport management roles">
          {ROLE_KEYS.map((key) => {
            const r = roles[key];
            const isActive = activeRole === key;
            return (
              <button
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
              </button>
            );
          })}
        </div>

        <motion.div
          key={activeRole}
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: smoothEase }}
          className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface-elevated/40"
        >
          <div
            className="border-b border-white/10 px-5 py-4 sm:px-6"
            style={{ background: `linear-gradient(90deg, ${role.accent}18, transparent)` }}
          >
            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: role.accent }}>
              {role.label} Configuration
            </p>
          </div>

          <div className="grid gap-0 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)]">
            <nav
              className="flex gap-2 overflow-x-auto border-b border-white/10 p-4 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:border-b-0 lg:border-r lg:p-5 [&::-webkit-scrollbar]:hidden"
              aria-label={`${role.label} features`}
            >
              {features.map((item, i) => {
                const isActive = i === activeFeature;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveFeature(i)}
                    aria-pressed={isActive}
                    className={`flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors lg:w-full ${
                      isActive
                        ? "border-white/20 bg-black/50 text-white"
                        : "border-transparent text-white/50 hover:bg-white/5 hover:text-white/75"
                    }`}
                  >
                    <span
                      className="text-xs font-bold tabular-nums"
                      style={{ color: isActive ? role.accent : "rgba(255,255,255,0.3)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold whitespace-nowrap lg:whitespace-normal">{item.title}</span>
                  </button>
                );
              })}
            </nav>

            <div className="relative min-h-[220px] p-5 sm:min-h-[260px] sm:p-7">
              <AnimatePresence mode="wait">
                <motion.article
                  key={`${activeRole}-${activeItem.id}`}
                  initial={reducedMotion ? false : { opacity: 0, x: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={reducedMotion ? undefined : { opacity: 0, x: -16, filter: "blur(6px)" }}
                  transition={{ duration: 0.4, ease: smoothEase }}
                >
                  <span className="text-xs font-bold tabular-nums text-white/35">
                    {String(activeFeature + 1).padStart(2, "0")} / {String(features.length).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">{activeItem.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-para">{activeItem.description}</p>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
