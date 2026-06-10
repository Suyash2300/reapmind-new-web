"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { foodDeliveryConfig } from "@/lib/food-delivery-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

type RoleId = (typeof foodDeliveryConfig.interfaces.roles)[number]["id"];

export function FdaRoleInterfaces() {
  const { interfaces } = foodDeliveryConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [activeId, setActiveId] = useState<RoleId>("user");
  const roles = interfaces.roles;
  const activeIndex = roles.findIndex((r) => r.id === activeId);

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="fda-interfaces-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="fda-interfaces-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {interfaces.title}
        </BlurFadeIn>

        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3" role="tablist" aria-label="Food delivery app interfaces">
          {roles.map((role) => {
            const isActive = activeId === role.id;
            return (
              <HydrationButton
                key={role.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(role.id)}
                className={`min-h-11 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors sm:px-5 ${
                  isActive ? "border-white/25 text-white" : "border-white/10 bg-black/40 text-white/55 hover:border-white/20"
                }`}
                style={isActive ? { borderColor: `${role.accent}66`, backgroundColor: `${role.accent}18` } : undefined}
              >
                <span className="mr-1.5" aria-hidden>
                  {role.icon}
                </span>
                {role.label}
              </HydrationButton>
            );
          })}
        </div>

        <div className="relative mx-auto mt-8 max-w-4xl min-h-[320px] sm:min-h-[360px]" role="tabpanel">
          {roles.map((role, i) => {
            const isActive = role.id === activeId;
            return (
              <motion.article
                key={role.id}
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
                  style={{ background: `linear-gradient(90deg, ${role.accent}18, transparent)` }}
                >
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: role.accent }}>
                    {role.label} · {role.tag}
                  </p>
                </div>
                <div className="p-5 sm:p-8">
                  <p className="text-sm leading-relaxed text-white/65 sm:text-para">{role.description}</p>
                  <p className="mt-4 text-xs tabular-nums text-white/40">
                    {String(i + 1).padStart(2, "0")} / {String(roles.length).padStart(2, "0")}
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
