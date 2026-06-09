"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { HydrationButton } from "@/components/ui/hydration-button";
import { remoteContractConfig } from "@/lib/remote-contract-config";

export function RcProcess() {
  const { process } = remoteContractConfig;
  const [activeId, setActiveId] = useState(process.items[0].id);
  const active = process.items.find((item) => item.id === activeId) ?? process.items[0];

  return (
    <section
      className="border-t border-white/10 bg-black py-10 md:py-12 lg:py-14"
      aria-labelledby="rc-process-heading"
    >
      <div className="container-app">
        <FadeIn>
          <h2 id="rc-process-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
            {process.title}
          </h2>
          <p className="mt-4 max-w-4xl text-para leading-relaxed text-white/65">{process.intro}</p>
        </FadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-10">
          <FadeIn delay={0.06}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-border-strong lg:sticky lg:top-24">
              <Image
                src={process.image}
                alt={process.imageAlt}
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                aria-hidden
              />
            </div>
          </FadeIn>

          <div className="grid gap-4">
            <FadeIn delay={0.08}>
              <ul className="flex flex-wrap gap-2 lg:flex-col">
                {process.items.map((item, i) => {
                  const selected = item.id === activeId;
                  return (
                    <li key={item.id} className="shrink-0 lg:shrink">
                      <HydrationButton
                        type="button"
                        onClick={() => setActiveId(item.id)}
                        aria-pressed={selected}
                        className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors ${
                          selected
                            ? "border-primary/50 bg-primary/10 text-white"
                            : "border-white/10 text-white/55 hover:border-white/25"
                        }`}
                      >
                        <span className="mr-2 text-xs font-bold tabular-nums text-primary">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item.title}
                      </HydrationButton>
                    </li>
                  );
                })}
              </ul>
            </FadeIn>

            <FadeIn delay={0.1}>
              <AnimatePresence mode="wait">
                <motion.article
                  key={active.id}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-[1.5rem] border border-border-strong bg-surface-elevated p-6 sm:p-8"
                >
                  <h3 className="text-h3 font-bold text-white sm:text-h2">{active.title}</h3>
                  <p className="mt-4 text-para leading-relaxed text-white/65">{active.description}</p>
                </motion.article>
              </AnimatePresence>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
