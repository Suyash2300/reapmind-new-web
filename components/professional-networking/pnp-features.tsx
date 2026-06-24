"use client";

import { AnimatePresence, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { professionalNetworkingConfig } from "@/lib/professional-networking-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function PnpFeatures() {
  const { features } = professionalNetworkingConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const item = features.items[active];
  const panelRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, ${item.accent}28, transparent 70%)`;

  function onPanelMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16" aria-labelledby="pnp-features-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="pnp-features-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {features.title}
        </BlurFadeIn>

        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:gap-8">
          <div className="flex flex-col gap-2 lg:w-[38%]">
            {features.items.map((feat, i) => (
              <button
                key={feat.id}
                type="button"
                onClick={() => setActive(i)}
                aria-expanded={i === active}
                className="group flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors"
                style={{
                  borderColor: i === active ? `${feat.accent}66` : "rgba(255,255,255,0.1)",
                  backgroundColor: i === active ? `${feat.accent}14` : "transparent",
                }}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold"
                  style={{ backgroundColor: `${feat.accent}22`, color: feat.accent }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`text-sm font-semibold ${i === active ? "text-white" : "text-white/55"}`}>{feat.title}</span>
              </button>
            ))}
          </div>

          <div
            ref={panelRef}
            onMouseMove={onPanelMove}
            className="relative min-h-[220px] flex-1 overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated/70 p-6 sm:p-8"
            style={{ perspective: 900 }}
          >
            <motion.div className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id}
                initial={reducedMotion ? false : { opacity: 0, x: 24, rotateY: -12 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, x: -24, rotateY: 12 }}
                transition={{ duration: 0.45, ease: smoothEase }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <h3 className="text-xl font-bold text-white sm:text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-para">{item.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
