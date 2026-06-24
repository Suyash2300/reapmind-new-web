"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { HydrationButton } from "@/components/ui/hydration-button";
import { offshoreBangaloreConfig } from "@/lib/offshore-bangalore-config";

export function ObProcess() {
  const { devProcess } = offshoreBangaloreConfig;
  const [activeId, setActiveId] = useState<string>(devProcess.items[0].id);
  const active = devProcess.items.find((item) => item.id === activeId) ?? devProcess.items[0];

  return (
    <section
      className="border-t border-white/10 bg-black py-10 md:py-12 lg:py-14"
      aria-labelledby="ob-process-heading"
    >
      <div className="container-app">
        <FadeIn>
          <h2 id="ob-process-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
            {devProcess.title}
          </h2>
          <p className="mt-4 max-w-4xl text-para leading-relaxed text-white/65">{devProcess.intro}</p>
        </FadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-10">
          <FadeIn delay={0.06}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-border-strong lg:sticky lg:top-24">
              <Image
                src={devProcess.image}
                alt={devProcess.imageAlt}
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                aria-hidden
              />
              <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white">
                {devProcess.imageAlt}
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-4">
            <FadeIn delay={0.08}>
              <ul className="flex flex-wrap gap-2 lg:flex-col">
                {devProcess.items.map((item, i) => {
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

        <FadeIn className="mt-8 text-center">
          <Link
            href="/contact-us#free-consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            {devProcess.cta}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
