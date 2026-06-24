"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import {
  homeStrategicHiring,
  type HiringDimension,
  type HiringModel,
} from "@/lib/home-strategic-hiring";

function HiringIcon({
  type,
  className = "size-5",
}: {
  type: HiringModel["icon"];
  className?: string;
}) {
  switch (type) {
    case "contract":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M7 4h7l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M14 4v4h4M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "c2h":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M5 12h9m0 0-3-3m3 3-3 3M14 7h5v10h-5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "permanent":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M4 20V9l8-5 8 5v11M9 20v-6h6v6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "onsite":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="10" r="2.25" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "remote":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M3 12h18M12 3c2.5 2.8 4 6.1 4 9s-1.5 6.2-4 9M12 3c-2.5 2.8-4 6.1-4 9s1.5 6.2 4 9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "pre-hiring":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6" />
          <path d="m16 16 4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M9 11h4M11 9v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "post-hiring":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M9 11l2 2 5-5M7 4h10a2 2 0 0 1 2 2v14l-3-2-3 2-3-2-3 2V6a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

function DimensionTower({
  dimension,
  selectedId,
  onSelect,
}: {
  dimension: HiringDimension;
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <article
      className="relative flex h-full min-h-[280px] flex-col rounded-[1.5rem] border border-border-strong bg-surface-elevated/90 p-5 sm:min-h-[320px] sm:p-6"
      style={{ ["--tower-glow" as string]: dimension.accentGlow }}
    >
      <div
        className={`pointer-events-none absolute inset-y-6 left-5 w-px bg-gradient-to-b sm:left-6 ${dimension.accentLine}`}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-6 -top-6 size-28 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: dimension.accentGlow }}
        aria-hidden
      />

      <div className="relative pl-4 sm:pl-5">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/45">
          {dimension.shortLabel}
        </p>
        <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
          {dimension.label}
        </h3>
      </div>

      <ul className="relative mt-6 flex flex-1 flex-col gap-2 sm:mt-8 sm:gap-2.5">
        {dimension.items.map((model, index) => {
          const active = model.id === selectedId;
          return (
            <li key={model.id}>
              <button
                type="button"
                onClick={() => onSelect(model.id)}
                aria-pressed={active}
                className={`group flex w-full min-h-11 items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-[border-color,background-color,box-shadow,transform] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:px-4 sm:py-3 ${
                  active
                    ? "translate-x-1 border-primary/45 bg-white/[0.07] shadow-[0_12px_36px_-16px_var(--tower-glow)]"
                    : "border-transparent bg-transparent hover:border-white/10 hover:bg-white/[0.03]"
                }`}
              >
                <span
                  className={`flex size-9 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300 sm:size-10 ${
                    active
                      ? "border-primary/40 bg-primary/15 text-primary"
                      : "border-white/10 bg-white/[0.03] text-white/55 group-hover:text-white/75"
                  }`}
                >
                  <HiringIcon type={model.icon} />
                </span>
                <span className="flex min-w-0 flex-1 items-center justify-between gap-2">
                  <span
                    className={`text-sm font-semibold sm:text-base ${
                      active ? "text-white" : "text-white/70"
                    }`}
                  >
                    {model.title}
                  </span>
                  <span
                    className={`text-[0.65rem] font-bold tabular-nums tracking-wider ${
                      active ? "text-primary" : "text-white/25"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export function HomeStrategicHiringSection() {
  const reducedMotion = usePrefersReducedMotion();
  const { eyebrow, title, intro, dimensions, cta } = homeStrategicHiring;
  const [selectedId, setSelectedId] = useState<string>(dimensions[0].items[0].id);

  const selected = useMemo(() => {
    for (const dim of dimensions) {
      const model = dim.items.find((m) => m.id === selectedId);
      if (model) return { model, dimension: dim };
    }
    return { model: dimensions[0].items[0], dimension: dimensions[0] };
  }, [dimensions, selectedId]);

  return (
    <section
      className="bg-surface-dark py-10 text-primary-foreground md:py-12 lg:py-14"
      aria-labelledby="strategic-hiring-heading"
    >
      <div className="container-app">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              {eyebrow}
            </p>
            <h2
              id="strategic-hiring-heading"
              className="mt-4 text-h3 font-bold tracking-tight text-white sm:text-h2"
            >
              {title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.06}>
            <p className="mt-4 text-para leading-relaxed text-white/65 sm:text-md">
              {intro}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="mt-10 md:mt-12">
          <div className="grid gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
            {dimensions.map((dimension) => (
              <DimensionTower
                key={dimension.id}
                dimension={dimension}
                selectedId={selectedId}
                onSelect={setSelectedId}
              />
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.14} className="mt-6 md:mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.model.id}
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-2xl border border-border-strong bg-black/40 p-6 sm:p-8"
              style={{
                boxShadow: `0 24px 80px -32px ${selected.dimension.accentGlow}`,
              }}
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-8">
                <div
                  className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-primary/35 bg-primary/10 text-primary sm:size-16"
                  aria-hidden
                >
                  <HiringIcon type={selected.model.icon} className="size-7 sm:size-8" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                    {selected.dimension.label}
                  </p>
                  <h3 className="mt-2 text-h4 font-bold text-white sm:text-h3">
                    {selected.model.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-para leading-relaxed text-white/70">
                    {selected.model.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </FadeIn>

        <FadeIn delay={0.16} className="mt-8 flex justify-center md:mt-10">
          <Link
            href={cta.href}
            className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-8 py-3.5 text-sm font-semibold text-white transition-[border-color,background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_16px_48px_-16px_rgba(26,105,253,0.5)]"
          >
            {cta.label}
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            >
              <path
                d="M4.5 11.5 11.5 4.5M11.5 4.5H6M11.5 4.5V10"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
