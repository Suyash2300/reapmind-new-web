"use client";

import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { gsap, registerGsapPlugins } from "@/lib/animation/gsap-register";
import { homeCuttingEdgeTech } from "@/lib/home-cutting-edge-tech";

const ORBIT_RADIUS = 42;
const AUTO_INTERVAL_MS = 5000;

type TechItem = (typeof homeCuttingEdgeTech.items)[number];

function TechIcon({ id }: { id: string }) {
  const className = "size-5 text-primary sm:size-6";

  switch (id) {
    case "blockchain":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M4 8h4v8H4V8Zm6-4h4v16h-4V4Zm6 6h4v6h-4v-6Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M8 12h4M14 12h4"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M7 18h10a4 4 0 0 0 .5-8 5.5 5.5 0 0 0-10.6-1.5A4 4 0 0 0 7 18Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <rect
            x="5"
            y="5"
            width="14"
            height="14"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <path
            d="M9 9h2v2H9V9Zm4 0h2v2h-2V9ZM9 13h2v2H9v-2Zm4 0h2v2h-2v-2Z"
            fill="currentColor"
          />
        </svg>
      );
    case "data-science":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M4 19V5M4 19h16M8 15l3-4 3 3 4-6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "iot":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.75" />
          <path
            d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "ar-vr":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M4 10v4a2 2 0 0 0 2 2h1.2a2 2 0 0 0 1.6-.8l.6-.8a1 1 0 0 1 1.6 0l.6.8a2 2 0 0 0 1.6.8H18a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "startup":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M12 3 14 9h6l-5 4 2 7-7-4-7 4 2-7-5-4h6l2-6Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

function nodePosition(index: number, total: number) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  return {
    x: 50 + Math.cos(angle) * ORBIT_RADIUS,
    y: 50 + Math.sin(angle) * ORBIT_RADIUS,
  };
}

function OrbitConnections({
  activeIndex,
  total,
}: {
  activeIndex: number;
  total: number;
}) {
  const positions = useMemo(
    () => Array.from({ length: total }, (_, i) => nodePosition(i, total)),
    [total],
  );

  return (
    <svg
      className="pointer-events-none absolute inset-0 size-full"
      viewBox="0 0 100 100"
      aria-hidden
    >
      <circle
        cx="50"
        cy="50"
        r={ORBIT_RADIUS}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.15"
        className="text-white/10"
      />
      {positions.map((pos, i) => {
        const active = i === activeIndex;
        return (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={pos.x}
            y2={pos.y}
            stroke="currentColor"
            strokeWidth={active ? 0.35 : 0.15}
            strokeDasharray={active ? "2 1.5" : "1 2"}
            className={
              active
                ? "text-primary transition-[stroke-width] duration-300"
                : "text-white/15"
            }
          />
        );
      })}
    </svg>
  );
}

function DetailPanel({ item }: { item: TechItem }) {
  return (
    <motion.article
      key={item.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl border border-border-strong bg-surface-elevated p-5 sm:p-6 lg:p-8"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent}`}
        aria-hidden
      />
      <div className="relative">
        <div className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/15 sm:size-14">
          <TechIcon id={item.id} />
        </div>
        <h3 className="mt-5 text-h4 font-bold text-white sm:text-h3">
          {item.title}
        </h3>
        <p className="mt-3 text-para leading-relaxed text-white/65 sm:text-md">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

export function HomeCuttingEdgeTechSection() {
  const reducedMotion = usePrefersReducedMotion();
  const items = homeCuttingEdgeTech.items;
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const orbitRingRef = useRef<HTMLDivElement>(null);
  const counterRotateRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);
  const autoIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const activeItem = items[activeIndex];

  const clearAutoRotate = useCallback(() => {
    if (autoIntervalRef.current) {
      clearInterval(autoIntervalRef.current);
      autoIntervalRef.current = null;
    }
  }, []);

  const startAutoRotate = useCallback(() => {
    clearAutoRotate();
    if (reducedMotion) return;

    autoIntervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, AUTO_INTERVAL_MS);
  }, [clearAutoRotate, items.length, reducedMotion]);

  const selectNode = useCallback(
    (index: number) => {
      setActiveIndex(index);
      startAutoRotate();
    },
    [startAutoRotate],
  );

  useEffect(() => {
    startAutoRotate();
    return clearAutoRotate;
  }, [startAutoRotate, clearAutoRotate]);

  useGSAP(
    () => {
      registerGsapPlugins();
      if (reducedMotion) return;

      const orbit = orbitRingRef.current;
      const counter = counterRotateRef.current;
      const pulse = pulseRef.current;
      if (!orbit || !counter) return;

      gsap.to(orbit, {
        rotation: 360,
        duration: 90,
        repeat: -1,
        ease: "none",
      });

      gsap.to(counter, {
        rotation: -360,
        duration: 90,
        repeat: -1,
        ease: "none",
      });

      if (pulse) {
        gsap.to(pulse, {
          scale: 1.08,
          opacity: 0.55,
          duration: 2.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    },
    { scope: sectionRef, dependencies: [reducedMotion] },
  );

  const nodePositions = useMemo(
    () => items.map((_, i) => nodePosition(i, items.length)),
    [items],
  );

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-surface-dark py-10 text-primary-foreground md:py-12 lg:py-14"
      aria-labelledby="cutting-edge-tech-heading"
    >
      <div className="container-app">
        <div className="mx-auto max-w-6xl text-center lg:max-w-7xl">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              {homeCuttingEdgeTech.eyebrow}
            </p>
            <h2
              id="cutting-edge-tech-heading"
              className="mt-4 text-h4 font-bold leading-snug tracking-tight text-white sm:text-h3 lg:text-h2"
            >
              {homeCuttingEdgeTech.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </FadeIn>
        </div>

        {/* Desktop / tablet — constellation orbit */}
        {!reducedMotion && (
        <div className="mt-10 hidden md:mt-12 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center md:gap-8 lg:gap-12">
          <div className="relative mx-auto aspect-square w-full max-w-[min(100%,28rem)] lg:max-w-[32rem]">
            <OrbitConnections activeIndex={activeIndex} total={items.length} />

            <div
              ref={pulseRef}
              className="pointer-events-none absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-2xl"
              aria-hidden
            />

            <div className="absolute left-1/2 top-1/2 z-10 flex size-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-primary/40 bg-surface-elevated shadow-[0_0_40px_-8px_rgba(26,105,253,0.5)] sm:size-24">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary">
                Core
              </span>
              <span className="mt-0.5 text-xs font-medium text-white/80">
                Innovation
              </span>
            </div>

            <div
              ref={orbitRingRef}
              className="absolute inset-0 will-change-transform"
              style={{ transformOrigin: "50% 50%" }}
            >
              <div
                ref={counterRotateRef}
                className="relative size-full will-change-transform"
                style={{ transformOrigin: "50% 50%" }}
              >
                {items.map((item, index) => {
                  const pos = nodePositions[index];
                  const active = index === activeIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => selectNode(index)}
                      aria-pressed={active}
                      aria-label={`${item.title}. ${item.description}`}
                      className="absolute z-20 -translate-x-1/2 -translate-y-1/2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark"
                      style={{
                        left: `${pos.x}%`,
                        top: `${pos.y}%`,
                      }}
                    >
                      <span
                        className={`flex min-h-11 min-w-11 flex-col items-center justify-center gap-1 rounded-full border px-2 py-1.5 transition-[border-color,box-shadow,background-color,transform] duration-300 sm:min-h-12 sm:min-w-[4.5rem] ${
                          active
                            ? "scale-110 border-primary bg-primary/20 shadow-[0_0_24px_-4px_rgba(26,105,253,0.65)]"
                            : "border-white/15 bg-surface-elevated/90 hover:border-primary/50 hover:bg-white/[0.06]"
                        }`}
                      >
                        <TechIcon id={item.id} />
                        <span
                          className={`max-w-[4.5rem] truncate text-[0.6rem] font-semibold leading-none sm:text-[0.65rem] ${
                            active ? "text-white" : "text-white/70"
                          }`}
                        >
                          {item.shortLabel}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="min-h-[16rem] lg:min-h-[18rem]" aria-live="polite">
            <AnimatePresence mode="wait">
              <DetailPanel item={activeItem} />
            </AnimatePresence>
          </div>
        </div>
        )}

        {/* Desktop / tablet — reduced motion: selectable card grid */}
        {reducedMotion && (
          <div className="mt-10 hidden gap-3 md:mt-12 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => selectNode(index)}
                className={`rounded-xl border p-4 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:p-5 ${
                  index === activeIndex
                    ? "border-primary bg-primary/10"
                    : "border-border-strong bg-surface-elevated hover:border-primary/40"
                }`}
              >
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/15">
                  <TechIcon id={item.id} />
                </div>
                <h3 className="mt-3 text-subtitle font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-snug text-white/60">
                  {item.description}
                </p>
              </button>
            ))}
          </div>
        )}

        {/* Mobile: snap strip + detail */}
        <div className="mt-8 md:hidden">
          <div
            className="-mx-[var(--container-padding)] flex gap-2 overflow-x-auto px-[var(--container-padding)] pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Technologies"
          >
            {items.map((item, index) => {
              const active = index === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => selectNode(index)}
                  className={`flex min-h-11 shrink-0 snap-start items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    active
                      ? "border-primary bg-primary/20 text-white"
                      : "border-white/15 bg-surface-elevated text-white/70"
                  }`}
                >
                  <TechIcon id={item.id} />
                  {item.shortLabel}
                </button>
              );
            })}
          </div>

          <div className="mt-4" aria-live="polite">
            <AnimatePresence mode="wait">
              <DetailPanel item={activeItem} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
