"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { onlineTuitionConfig } from "@/lib/online-tuition-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function OtaStudentFeatures() {
  const { studentFeatures } = onlineTuitionConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = studentFeatures.items;

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="ota-student-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="ota-student-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {studentFeatures.title}
        </BlurFadeIn>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <HydrationButton
                key={item.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(i)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                  isActive
                    ? "border-sky-400/40 bg-sky-500/15 text-white"
                    : "border-white/10 bg-black/40 text-white/55 hover:border-white/20"
                }`}
                style={isActive ? { borderColor: `${item.accent}66` } : undefined}
              >
                {item.title}
              </HydrationButton>
            );
          })}
        </div>

        <div className="relative mx-auto mt-8 max-w-3xl min-h-[240px]">
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <motion.article
                key={item.id}
                initial={false}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.28, ease: smoothEase }}
                className={`rounded-[1.75rem] border border-white/10 bg-black/55 p-6 sm:p-8 ${
                  isActive ? "relative z-10" : "pointer-events-none absolute inset-0 z-0"
                }`}
                aria-hidden={!isActive}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-xl"
                    style={{ backgroundColor: `${item.accent}22` }}
                    aria-hidden
                  >
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest" style={{ color: item.accent }}>
                      Student · {item.code}
                    </p>
                    <h3 className="text-lg font-bold text-white sm:text-xl">{item.title}</h3>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/65 sm:text-para">{item.description}</p>
                <p className="mt-4 text-xs tabular-nums text-white/40">
                  {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
