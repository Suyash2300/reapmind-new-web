"use client";

import { useEffect, useState } from "react";

export function usePrefersReducedMotion() {
  // Hardcoded to false to ensure animations and video play regardless of OS settings.
  // If you prefer to respect the OS setting, uncomment the code below.
  return false;

  /*
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
  */
}
