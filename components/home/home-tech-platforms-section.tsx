"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { TechBrandIcon } from "@/components/tech/tech-brand-icon";
import { FadeIn } from "@/components/motion/fade-in";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { homeTechPlatforms, type TechPlatformItem } from "@/lib/home-tech-platforms";

function FlipCell({
  item,
  cellKey,
  reducedMotion,
  index,
}: {
  item: TechPlatformItem;
  cellKey: string;
  reducedMotion: boolean;
  index: number;
}) {
  return (
    <div className="[perspective:640px]">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={cellKey}
          initial={
            reducedMotion ? false : { rotateX: -88, opacity: 0, y: 6 }
          }
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          exit={
            reducedMotion ? undefined : { rotateX: 88, opacity: 0, y: -6 }
          }
          transition={{
            duration: reducedMotion ? 0 : 0.42,
            delay: reducedMotion ? 0 : index * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex min-h-[4.5rem] flex-col items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.02)_100%)] px-2.5 py-3 text-center sm:min-h-[5.25rem] sm:px-3"
          style={{ transformOrigin: "center center" }}
        >
          <TechBrandIcon
            name={item.name}
            slug={item.icon}
            color={item.color}
            src={item.iconSrc}
            size={28}
            className="sm:h-8 sm:w-8"
          />
          <span className="text-xs font-semibold leading-tight tracking-wide text-white sm:text-sm">
            {item.name}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function HomeTechPlatformsSection() {
  const reducedMotion = usePrefersReducedMotion();
  const { eyebrow, title, subtitle, categories, autoPlayMs } = homeTechPlatforms;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const activeCategory = categories[activeIndex];

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + categories.length) % categories.length);
  }, [categories.length]);

  useEffect(() => {
    if (reducedMotion || paused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % categories.length);
    }, autoPlayMs);
    return () => window.clearInterval(timer);
  }, [autoPlayMs, categories.length, paused, reducedMotion]);

  return (
    <section
      className="overflow-hidden bg-black py-10 text-primary-foreground md:py-12 lg:py-16"
      aria-labelledby="tech-platforms-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-app">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              {eyebrow}
            </p>
            <h2
              id="tech-platforms-heading"
              className="mt-4 text-h3 font-bold tracking-tight text-white sm:text-h2"
            >
              {title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.06}>
            <p className="mt-4 text-para leading-relaxed text-white/65 sm:text-md">
              {subtitle}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="mt-10 md:mt-12">
          <div
            className={`relative overflow-hidden rounded-[1.75rem] border bg-surface-elevated p-5 sm:rounded-[2rem] sm:p-6 md:p-8 ${activeCategory.borderClass} transition-[border-color,box-shadow] duration-500`}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.06] to-transparent"
              aria-hidden
            />

            <div className="relative">
              <nav
                className="flex flex-wrap gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                aria-label="Technology categories"
              >
                {categories.map((cat, index) => {
                  const active = index === activeIndex;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => goTo(index)}
                      aria-pressed={active}
                      className={`inline-flex min-h-11 shrink-0 items-center rounded-full border px-4 py-2 text-sm font-semibold whitespace-nowrap transition-[border-color,background-color,color,box-shadow] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                        active
                          ? "border-white/20 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                          : "border-white/10 bg-black/20 text-white/55 hover:border-white/20 hover:text-white/80"
                      }`}
                    >
                      {cat.shortLabel}
                    </button>
                  );
                })}
              </nav>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6 md:mt-8"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p
                        className={`text-xs font-bold uppercase tracking-[0.24em] ${activeCategory.accentClass}`}
                      >
                        {activeCategory.shortLabel}
                      </p>
                      <h3 className="mt-2 text-h4 font-bold text-white sm:text-h3">
                        {activeCategory.title}
                      </h3>
                    </div>
                    <p className="max-w-md text-sm leading-relaxed text-white/50 sm:text-right">
                      {activeCategory.tagline}
                    </p>
                  </div>

                  <ul
                    className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-3"
                    aria-label={activeCategory.title}
                  >
                    {activeCategory.items.map((item, index) => (
                      <li key={item.id}>
                        <FlipCell
                          item={item}
                          cellKey={`${activeCategory.id}-${item.id}`}
                          reducedMotion={reducedMotion}
                          index={index}
                        />
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/8 pt-5">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/35">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(categories.length).padStart(2, "0")}
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => goTo(activeIndex - 1)}
                    aria-label="Previous category"
                    className="inline-flex size-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] text-white/75 transition-colors hover:border-primary/40 hover:text-white"
                  >
                    <svg viewBox="0 0 20 20" className="size-4" aria-hidden>
                      <path
                        d="M12.5 15 7.5 10l5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(activeIndex + 1)}
                    aria-label="Next category"
                    className="inline-flex size-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] text-white/75 transition-colors hover:border-primary/40 hover:text-white"
                  >
                    <svg viewBox="0 0 20 20" className="size-4" aria-hidden>
                      <path
                        d="m7.5 15 5-5-5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
