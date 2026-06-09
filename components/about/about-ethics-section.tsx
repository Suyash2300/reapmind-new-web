"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { HydrationButton } from "@/components/ui/hydration-button";
import { aboutOurCompanyEthics } from "@/lib/about-our-company";

function EthicsSeal({
  short,
  title,
  active,
  onSelect,
}: {
  short: string;
  title: string;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <HydrationButton
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      aria-label={title}
      className={`group relative mx-auto flex size-28 flex-col items-center justify-center rounded-full border-2 transition-[border-color,box-shadow,transform] sm:size-32 ${
        active
          ? "scale-105 border-primary bg-primary/15 shadow-[0_0_40px_-8px_rgba(26,105,253,0.7)]"
          : "border-white/15 bg-black/50 hover:border-primary/35 hover:bg-primary/5"
      }`}
    >
      <span
        className={`text-[10px] font-bold uppercase tracking-[0.18em] sm:text-xs ${
          active ? "text-primary" : "text-white/45 group-hover:text-white/70"
        }`}
      >
        Seal
      </span>
      <span className="mt-1 px-2 text-center text-xs font-bold leading-tight text-white sm:text-sm">
        {short}
      </span>
      <span
        className="pointer-events-none absolute inset-2 rounded-full border border-dashed border-white/10"
        aria-hidden
      />
    </HydrationButton>
  );
}

export function AboutEthicsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = aboutOurCompanyEthics.items[activeIndex];

  return (
    <section
      className="border-t border-white/10 bg-black py-10 text-primary-foreground md:py-12 lg:py-16"
      aria-labelledby="about-ethics-heading"
    >
      <div className="container-app">
        <FadeIn>
          <h2
            id="about-ethics-heading"
            className="max-w-3xl text-h3 font-bold text-white sm:text-h2"
          >
            {aboutOurCompanyEthics.title}
          </h2>
          <p className="mt-4 max-w-3xl text-para leading-relaxed text-white/65">
            {aboutOurCompanyEthics.intro}
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-10">
          <div className="relative hidden min-h-[420px] lg:block">
            <div
              className="pointer-events-none absolute inset-0 rounded-[1.75rem] border border-white/8 bg-[radial-gradient(circle_at_50%_50%,rgba(26,105,253,0.1),transparent_62%)]"
              aria-hidden
            />
            <div className="absolute left-1/2 top-1/2 flex size-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/25 bg-surface-elevated">
              <div className="text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
                  Core
                </p>
                <p className="mt-1 text-lg font-bold text-white">Ethics</p>
              </div>
            </div>
            <div className="absolute left-[6%] top-[10%]">
              <EthicsSeal
                short={aboutOurCompanyEthics.items[0].short}
                title={aboutOurCompanyEthics.items[0].title}
                active={activeIndex === 0}
                onSelect={() => setActiveIndex(0)}
              />
            </div>
            <div className="absolute right-[6%] top-[10%]">
              <EthicsSeal
                short={aboutOurCompanyEthics.items[1].short}
                title={aboutOurCompanyEthics.items[1].title}
                active={activeIndex === 1}
                onSelect={() => setActiveIndex(1)}
              />
            </div>
            <div className="absolute bottom-[10%] left-[6%]">
              <EthicsSeal
                short={aboutOurCompanyEthics.items[2].short}
                title={aboutOurCompanyEthics.items[2].title}
                active={activeIndex === 2}
                onSelect={() => setActiveIndex(2)}
              />
            </div>
            <div className="absolute bottom-[10%] right-[6%]">
              <EthicsSeal
                short={aboutOurCompanyEthics.items[3].short}
                title={aboutOurCompanyEthics.items[3].title}
                active={activeIndex === 3}
                onSelect={() => setActiveIndex(3)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:hidden">
            {aboutOurCompanyEthics.items.map((item, index) => (
              <EthicsSeal
                key={item.id}
                short={item.short}
                title={item.title}
                active={activeIndex === index}
                onSelect={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <div className="rounded-2xl border border-border-strong bg-surface-elevated p-5 sm:p-6 lg:shadow-[0_24px_64px_-20px_rgba(0,0,0,0.8)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  {active.short}
                </p>
                <h3 className="mt-2 text-h4 font-bold text-white">{active.title}</h3>
                <p className="mt-4 text-para leading-relaxed text-white/70">
                  {active.body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
