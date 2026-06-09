"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { portfolioCarouselCases } from "@/lib/portfolio";
import { PortfolioCaseCard } from "./portfolio-case-card";

const cases = portfolioCarouselCases;
const total = cases.length;

/** Smooth flip — slightly faster than before */
const flipEase = [0.22, 1, 0.36, 1] as const;
const flipTransition = { duration: 0.78, ease: flipEase };
const instantTransition = { duration: 0.2, ease: flipEase };

const centerVariants = {
  enter: (dir: number) => ({
    rotateY: dir * 68,
    opacity: 0,
    scale: 0.88,
    filter: "blur(4px)",
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: (dir: number) => ({
    rotateY: dir * -68,
    opacity: 0,
    scale: 0.88,
    filter: "blur(4px)",
  }),
};

const sideContentVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    rotateY: dir * 24,
  }),
  show: {
    opacity: 1,
    rotateY: 0,
  },
  exit: (dir: number) => ({
    opacity: 0,
    rotateY: dir * -24,
  }),
};

export function PortfolioClockCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [locked, setLocked] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const tabsRef = useRef<HTMLDivElement>(null);

  const transition = reducedMotion ? instantTransition : flipTransition;

  const goTo = useCallback(
    (index: number, dir: number) => {
      if (locked || index === active) return;
      setDirection(dir);
      setActive(index);
      if (!reducedMotion) {
        setLocked(true);
        window.setTimeout(() => setLocked(false), 820);
      }
    },
    [active, locked, reducedMotion],
  );

  const step = useCallback(
    (delta: 1 | -1) => {
      goTo((active + delta + total) % total, delta);
    },
    [active, goTo],
  );

  const prevIndex = (active - 1 + total) % total;
  const nextIndex = (active + 1) % total;

  useEffect(() => {
    const tab = tabsRef.current?.querySelector<HTMLElement>(
      `[data-tab-index="${active}"]`,
    );
    tab?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [active, reducedMotion]);

  const tabBar = (
    <div className="flex items-center gap-2 sm:gap-3">
      <CarouselArrow
        direction="prev"
        disabled={locked}
        onClick={() => step(-1)}
        label="Previous project"
      />
      <div
        ref={tabsRef}
        className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto py-1 scrollbar-hide"
      >
        {cases.map((study, index) => (
          <HydrationButton
            key={study.slug}
            type="button"
            data-tab-index={index}
            disabled={locked}
            onClick={() =>
              goTo(index, index > active ? 1 : index < active ? -1 : 1)
            }
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors disabled:opacity-50 ${
              index === active
                ? "bg-white text-black"
                : "text-white/55 hover:text-white"
            }`}
          >
            {study.tabLabel}
          </HydrationButton>
        ))}
      </div>
      <CarouselArrow
        direction="next"
        disabled={locked}
        onClick={() => step(1)}
        label="Next project"
      />
    </div>
  );

  return (
    <div
      className="relative"
      aria-roledescription="carousel"
      aria-label="Portfolio case studies"
    >
      {tabBar}

      {/* Mobile — center card only */}
      <div
        className="relative mt-8 lg:hidden"
        style={{ perspective: "1400px" }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={cases[active].slug}
            custom={direction}
            variants={centerVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            style={{ transformStyle: "preserve-3d" }}
          >
            <PortfolioCaseCard study={cases[active]} variant="center" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop — 180° fan: side cards turned inward, center faces camera */}
      <div
        className="relative mt-10 hidden min-h-[560px] items-center justify-center overflow-hidden lg:flex"
        style={{ perspective: "1600px" }}
      >
        <div
          className="relative flex w-full max-w-6xl items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Left slot — ~180° arc, turned toward center */}
          <div
            className="absolute left-[0%] top-1/2 z-10 w-[min(28vw,300px)] xl:left-[4%]"
            style={{
              transform: "translateY(-50%) rotateY(58deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`left-${cases[prevIndex].slug}`}
                custom={direction}
                variants={sideContentVariants}
                initial="enter"
                animate="show"
                exit="exit"
                transition={transition}
                style={{ transformStyle: "preserve-3d" }}
              >
                <PortfolioCaseCard study={cases[prevIndex]} variant="side" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center — flat to viewer */}
          <div
            className="relative z-20 w-[min(38vw,420px)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`center-${cases[active].slug}`}
                custom={direction}
                variants={centerVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
                style={{ transformStyle: "preserve-3d" }}
              >
                <PortfolioCaseCard study={cases[active]} variant="center" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right slot — mirrored turn */}
          <div
            className="absolute right-[0%] top-1/2 z-10 w-[min(28vw,300px)] xl:right-[4%]"
            style={{
              transform: "translateY(-50%) rotateY(-58deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`right-${cases[nextIndex].slug}`}
                custom={direction}
                variants={sideContentVariants}
                initial="enter"
                animate="show"
                exit="exit"
                transition={transition}
                style={{ transformStyle: "preserve-3d" }}
              >
                <PortfolioCaseCard study={cases[nextIndex]} variant="side" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col items-center gap-4 lg:mt-6">
        <Link
          href={cases[active].href}
          className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/25 px-8 py-3 text-sm font-semibold text-white transition-colors hover:border-primary hover:bg-primary/10"
        >
          View {cases[active].title} case study
        </Link>
        <p className="text-center text-xs text-white/40">
          Use the arrows or project names above to browse
        </p>
      </div>
    </div>
  );
}

function CarouselArrow({
  direction,
  onClick,
  label,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
  disabled?: boolean;
}) {
  return (
    <HydrationButton
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary text-base font-semibold text-white shadow-[0_0_20px_rgba(26,105,253,0.45)] transition-colors hover:bg-primary-hover hover:border-primary-hover disabled:pointer-events-none disabled:border-white/20 disabled:bg-white/10 disabled:text-white/40 disabled:shadow-none sm:size-11"
    >
      {direction === "prev" ? "←" : "→"}
    </HydrationButton>
  );
}
