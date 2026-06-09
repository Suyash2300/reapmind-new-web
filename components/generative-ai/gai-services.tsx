"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { HydrationButton } from "@/components/ui/hydration-button";
import { generativeAiConfig } from "@/lib/generative-ai-config";

export function GaiServices() {
  const { services } = generativeAiConfig;
  const [activeId, setActiveId] = useState(services.items[0].id);
  const active =
    services.items.find((item) => item.id === activeId) ?? services.items[0];

  return (
    <section
      className="border-t border-white/10 bg-surface-dark py-10 text-primary-foreground md:py-12 lg:py-14"
      aria-labelledby="gai-services-heading"
    >
      <div className="container-app">
        <FadeIn>
          <h2 id="gai-services-heading" className="text-h3 font-bold text-white sm:text-h2">
            {services.title}
          </h2>
          <p className="mt-4 max-w-3xl text-para leading-relaxed text-white/65">
            {services.subtitle}
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10 lg:items-stretch">
          <FadeIn delay={0.06}>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:flex-col">
              {services.items.map((item) => {
                const selected = item.id === activeId;
                return (
                  <HydrationButton
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    aria-pressed={selected}
                    className={`min-h-11 rounded-xl border px-4 py-3 text-left transition-colors ${
                      selected
                        ? "border-primary/50 bg-primary/10 text-white"
                        : "border-white/10 bg-white/[0.03] text-white/55 hover:border-white/25 hover:text-white/85"
                    }`}
                  >
                    <span
                      className={`text-xs font-bold tabular-nums ${
                        selected ? "text-primary" : "text-white/40"
                      }`}
                    >
                      {item.index}
                    </span>
                    <span className="mt-1 block text-sm font-semibold">{item.title}</span>
                  </HydrationButton>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-border-strong bg-surface-elevated">
              <div className="relative aspect-[16/10] sm:aspect-[2/1]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={active.image}
                      alt={active.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
                      aria-hidden
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="border-t border-white/10 p-5 sm:p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.28 }}
                  >
                    <h3 className="text-h4 font-bold text-white">{active.title}</h3>
                    <p className="mt-3 text-para leading-relaxed text-white/70">
                      {active.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {active.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-white/75"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
