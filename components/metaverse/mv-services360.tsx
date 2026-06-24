"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { metaverseConfig } from "@/lib/metaverse-config";

export function MvServices360() {
  const { services360 } = metaverseConfig;
  const [activeId, setActiveId] = useState<string>(services360.items[0].id);
  const active =
    services360.items.find((item) => item.id === activeId) ?? services360.items[0];

  return (
    <section
      className="border-t border-white/10 bg-surface-dark py-10 md:py-12 lg:py-14"
      aria-labelledby="mv-services-heading"
    >
      <div className="container-app">
        <FadeIn>
          <h2 id="mv-services-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
            {services360.title}
          </h2>
          <p className="mt-4 max-w-4xl text-para leading-relaxed text-white/65">
            {services360.intro}
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-stretch">
          <FadeIn delay={0.06}>
            <div className="flex flex-wrap gap-2 lg:flex-col">
              {services360.items.map((item) => {
                const selected = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    aria-pressed={selected}
                    className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors ${
                      selected
                        ? "border-primary/50 bg-primary/10 text-white"
                        : "border-white/10 text-white/55 hover:border-white/25"
                    }`}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <AnimatePresence mode="wait">
              <motion.article
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-[1.5rem] border border-border-strong bg-surface-elevated"
              >
                <div className="relative aspect-[16/9] bg-black/40">
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-h4 font-bold text-white">{active.title}</h3>
                  <p className="mt-3 text-para leading-relaxed text-white/65">
                    {active.description}
                  </p>
                </div>
              </motion.article>
            </AnimatePresence>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
