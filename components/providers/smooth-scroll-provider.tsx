"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { registerGsapPlugins, gsap, ScrollTrigger } from "@/lib/animation/gsap-register";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type NavScrollLockContextValue = {
  setNavMenuOpen: (open: boolean) => void;
};

const NavScrollLockContext = createContext<NavScrollLockContextValue | null>(
  null,
);

export function useNavMenuScrollLock() {
  return useContext(NavScrollLockContext)?.setNavMenuOpen;
}

function isNavMegaPanelNode(node: Element) {
  return node instanceof HTMLElement && Boolean(node.closest("[data-nav-mega-panel]"));
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const setNavMenuOpenStable = useCallback((open: boolean) => {
    setNavMenuOpen(open);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    registerGsapPlugins();

    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.08,
      prevent: (node) => isNavMegaPanelNode(node),
    });

    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTick);
      lenisRef.current = null;
      lenis.destroy();
    };
  }, [reducedMotion]);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    if (navMenuOpen) lenis.stop();
    else lenis.start();
  }, [navMenuOpen]);

  useEffect(() => {
    if (!navMenuOpen) return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    return () => {
      html.style.overflow = prev;
    };
  }, [navMenuOpen]);

  return (
    <NavScrollLockContext.Provider value={{ setNavMenuOpen: setNavMenuOpenStable }}>
      {children}
    </NavScrollLockContext.Provider>
  );
}
