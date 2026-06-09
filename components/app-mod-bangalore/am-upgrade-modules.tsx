"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { HydrationButton } from "@/components/ui/hydration-button";
import { appModBangaloreConfig } from "@/lib/app-mod-bangalore-config";

const ICONS: Record<string, string> = {
  stack: "⌁",
  cloud: "☁",
  speed: "⚡",
  shield: "◆",
  design: "◈",
  spark: "✦",
};

export function AmUpgradeModules() {
  const { serviceHighlights } = appModBangaloreConfig;
  const [activeId, setActiveId] = useState(serviceHighlights.items[0].id);
  const active =
    serviceHighlights.items.find((i) => i.id === activeId) ?? serviceHighlights.items[0];

  return (
    <section
      className="border-t border-white/10 bg-surface-dark py-10 md:py-12 lg:py-14"
      aria-labelledby="am-highlights-heading"
    >
      <div className="container-app">
        <FadeIn>
          <h2 id="am-highlights-heading" className="text-h3 font-bold text-white sm:text-h2">
            {serviceHighlights.title}
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <div
              className="absolute inset-[12%] rounded-[2.5rem] border-2 border-primary/40 bg-black shadow-[inset_0_0_60px_-20px_rgba(26,105,253,0.5)]"
              aria-hidden
            />
            <div className="absolute inset-[18%] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/5 to-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  className="flex h-full flex-col justify-center p-4 text-center"
                >
                  <span className="text-3xl text-primary">{ICONS[active.icon] ?? "◆"}</span>
                  <p className="mt-3 text-sm font-bold text-white">{active.title}</p>
                  <p className="mt-2 line-clamp-4 text-xs text-white/55">{active.description}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {serviceHighlights.items.map((item, i) => {
              const angle = (i / serviceHighlights.items.length) * Math.PI * 2 - Math.PI / 2;
              const radius = 46;
              const x = 50 + Math.cos(angle) * radius;
              const y = 50 + Math.sin(angle) * radius;
              const selected = item.id === activeId;
              return (
                <HydrationButton
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  aria-pressed={selected}
                  className={`absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-lg transition-all sm:h-12 sm:w-12 ${
                    selected
                      ? "z-10 scale-110 border-primary bg-primary text-white shadow-[0_0_24px_rgba(26,105,253,0.6)]"
                      : "border-white/20 bg-surface-elevated text-primary hover:border-primary/50"
                  }`}
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  {ICONS[item.icon] ?? "◆"}
                </HydrationButton>
              );
            })}
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm font-bold uppercase tracking-widest text-primary">
                  Upgrade module
                </p>
                <h3 className="mt-2 text-h4 font-bold text-white sm:text-h3">{active.title}</h3>
                <p className="mt-4 text-para leading-relaxed text-white/65">{active.description}</p>
              </motion.div>
            </AnimatePresence>
            <Link
              href="/contact-us#free-consultation"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white hover:bg-primary-hover"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
