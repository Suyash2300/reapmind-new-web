"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
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

function resetRouteScroll(lenis: Lenis | null) {
  if (typeof window === "undefined") return;

  window.history.scrollRestoration = "manual";
  ScrollTrigger.clearScrollMemory();
  gsap.killTweensOf(window);

  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
  }

  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  window.scrollTo(0, 0);
}

/**
 * Runs after page content so we win over Next.js layout-router scroll-into-view
 * and GSAP ScrollTrigger's recorded scroll positions.
 */
function RouteScrollReset({ lenisRef }: { lenisRef: React.RefObject<Lenis | null> }) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    resetRouteScroll(lenisRef.current);
  }, [pathname, lenisRef]);

  useEffect(() => {
    const lenis = lenisRef.current;
    resetRouteScroll(lenis);

    const run = () => resetRouteScroll(lenisRef.current);

    const raf1 = requestAnimationFrame(() => {
      run();
      requestAnimationFrame(run);
    });
    const t0 = window.setTimeout(run, 0);
    const t1 = window.setTimeout(run, 50);
    const t2 = window.setTimeout(() => {
      run();
      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.refresh();
    }, 120);

    return () => {
      cancelAnimationFrame(raf1);
      window.clearTimeout(t0);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [pathname, lenisRef]);

  return null;
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const setNavMenuOpenStable = useCallback((open: boolean) => {
    setNavMenuOpen(open);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    registerGsapPlugins();

    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.12,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      prevent: (node) => isNavMegaPanelNode(node),
    });

    lenisRef.current = lenis;

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
    });

    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);

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
      <RouteScrollReset lenisRef={lenisRef} />
    </NavScrollLockContext.Provider>
  );
}
