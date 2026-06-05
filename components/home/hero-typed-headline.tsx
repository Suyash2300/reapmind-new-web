"use client";

import { useEffect, useState } from "react";
import { homeHero } from "@/lib/home-hero-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const PHRASES = homeHero.rotatingPhrases;
const { typeMs, deleteMs, pauseAfterTypeMs, pauseAfterDeleteMs } =
  homeHero.typewriter;

export function HeroTypedHeadline() {
  const reducedMotion = usePrefersReducedMotion();
  const [display, setDisplay] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setDisplay(PHRASES[0]);
      setIsDeleting(false);
      return;
    }

    const target = PHRASES[phraseIndex];

    if (!isDeleting && display === target) {
      const pause = window.setTimeout(() => setIsDeleting(true), pauseAfterTypeMs);
      return () => window.clearTimeout(pause);
    }

    if (isDeleting && display === "") {
      const pause = window.setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % PHRASES.length);
        setIsDeleting(false);
      }, pauseAfterDeleteMs);
      return () => window.clearTimeout(pause);
    }

    const delay = isDeleting ? deleteMs : typeMs;
    const tick = window.setTimeout(() => {
      if (!isDeleting) {
        setDisplay(target.slice(0, display.length + 1));
      } else {
        setDisplay(target.slice(0, Math.max(0, display.length - 1)));
      }
    }, delay);

    return () => window.clearTimeout(tick);
  }, [display, isDeleting, phraseIndex, reducedMotion]);

  return (
    <h1 id="home-hero-title" className="mt-5 max-w-4xl text-balance">
      <span className="block text-h3 font-semibold text-white/90 sm:text-h2">
        {homeHero.partnerLine}
      </span>
      <span
        className="mt-2 block min-h-[1.2em] text-h1 text-accent"
        aria-live="polite"
      >
        {display}
        {!reducedMotion ? (
          <span
            className="ml-0.5 inline-block w-[3px] animate-pulse bg-accent align-middle"
            style={{ height: "0.85em" }}
            aria-hidden
          />
        ) : null}
      </span>
    </h1>
  );
}
