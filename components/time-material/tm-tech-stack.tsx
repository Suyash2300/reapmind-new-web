"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { HydrationButton } from "@/components/ui/hydration-button";
import { timeMaterialConfig } from "@/lib/time-material-config";

export function TmTechStack() {
  const { techStack } = timeMaterialConfig;
  const [activeId, setActiveId] = useState<string>(techStack.categories[0].id);
  const active =
    techStack.categories.find((cat) => cat.id === activeId) ?? techStack.categories[0];

  return (
    <section
      className="border-t border-white/10 bg-black py-10 md:py-12 lg:py-14"
      aria-labelledby="tm-tech-heading"
    >
      <div className="container-app">
        <FadeIn>
          <h2 id="tm-tech-heading" className="text-h3 font-bold text-white sm:text-h2">
            {techStack.title}
          </h2>
        </FadeIn>

        <div className="mt-8 flex flex-wrap gap-2">
          {techStack.categories.map((cat) => {
            const selected = cat.id === activeId;
            return (
              <HydrationButton
                key={cat.id}
                type="button"
                onClick={() => setActiveId(cat.id)}
                aria-pressed={selected}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  selected
                    ? "border-primary/50 bg-primary/10 text-white"
                    : "border-white/10 text-white/55 hover:border-white/25"
                }`}
              >
                {cat.title.replace(/^For /, "")}
              </HydrationButton>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="mt-6 rounded-[1.25rem] border border-white/10 bg-surface-elevated p-6 sm:p-8"
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
              {active.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {active.lines.map((line) => (
                <li key={line.slice(0, 40)} className="text-sm leading-relaxed text-white/65 sm:text-para">
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
