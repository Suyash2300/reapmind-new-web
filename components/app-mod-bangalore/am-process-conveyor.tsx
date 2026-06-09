"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { appModBangaloreConfig } from "@/lib/app-mod-bangalore-config";

export function AmProcessConveyor() {
  const { process } = appModBangaloreConfig;
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const nodes = stepRefs.current.filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (!visible.length) return;
        const idx = Number(visible[0].target.getAttribute("data-step-index"));
        if (!Number.isNaN(idx)) setActiveIndex(idx);
      },
      { rootMargin: "-20% 0px -35% 0px", threshold: [0.2, 0.5, 0.75] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const progressPct = ((activeIndex + 1) / process.steps.length) * 100;

  return (
    <section
      className="border-t border-white/10 bg-black py-10 text-primary-foreground md:py-12 lg:py-14"
      aria-labelledby="am-process-heading"
    >
      <div className="container-app">
        <FadeIn>
          <h2 id="am-process-heading" className="text-h3 font-bold text-white sm:text-h2">
            {process.title}
          </h2>
          <p className="mt-4 max-w-4xl text-para leading-relaxed text-white/60">
            {process.subtitle}
          </p>
        </FadeIn>

        <div className="mt-10 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[240px_minmax(0,1fr)]">
          {/* Sticky step rail — desktop */}
          <div className="mb-6 lg:sticky lg:top-24 lg:mb-0 lg:self-start">
            <div className="relative hidden lg:block">
              <div className="absolute bottom-2 left-[19px] top-2 w-0.5 bg-white/10" aria-hidden />
              <motion.div
                className="absolute left-[19px] top-2 w-0.5 origin-top bg-primary"
                animate={{ height: `${progressPct}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                aria-hidden
              />
              <ol className="space-y-1">
                {process.steps.map((step, i) => {
                  const active = i === activeIndex;
                  return (
                    <li key={step.id}>
                      <button
                        type="button"
                        onClick={() =>
                          stepRefs.current[i]?.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                          })
                        }
                        className={`flex w-full items-center gap-3 rounded-xl px-2 py-2.5 text-left transition-colors ${
                          active ? "text-white" : "text-white/45 hover:text-white/75"
                        }`}
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xs font-bold tabular-nums transition-colors ${
                            active
                              ? "border-primary bg-primary text-white shadow-[0_0_20px_rgba(26,105,253,0.45)]"
                              : "border-white/15 bg-black"
                          }`}
                        >
                          {step.index}
                        </span>
                        <span className="text-sm font-semibold leading-snug">{step.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* Mobile progress */}
            <div className="lg:hidden">
              <div className="mb-2 flex items-center justify-between text-xs font-semibold text-white/50">
                <span>Step {process.steps[activeIndex].index}</span>
                <span>
                  {activeIndex + 1} / {process.steps.length}
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  animate={{ width: `${progressPct}%` }}
                  transition={{ duration: 0.35 }}
                />
              </div>
            </div>
          </div>

          {/* Scroll-linked step panels */}
          <div className="space-y-4 sm:space-y-5">
            {process.steps.map((step, i) => {
              const active = i === activeIndex;
              return (
                <article
                  key={step.id}
                  data-step-index={i}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  className={`scroll-mt-28 rounded-[1.25rem] border p-5 transition-all duration-500 sm:p-6 lg:p-7 ${
                    active
                      ? "border-primary/35 bg-surface-elevated shadow-[0_16px_48px_-16px_rgba(26,105,253,0.35)]"
                      : "border-white/8 bg-white/[0.02] opacity-70 lg:opacity-55"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold tabular-nums lg:hidden ${
                        active ? "bg-primary text-white" : "bg-white/10 text-white/60"
                      }`}
                    >
                      {step.index}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                        Phase {step.index}
                      </p>
                      <h3 className="mt-2 text-h4 font-bold text-white sm:text-h3">{step.title}</h3>
                      <p className="mt-3 text-para leading-relaxed text-white/65">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
