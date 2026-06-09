"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { industrySectors } from "@/lib/recent-works-portfolio";

type SectorItem = (typeof industrySectors.items)[number];

type SectorTheme = {
  accent: string;
  glow: string;
  ring: string;
  gradient: string;
  icon: string;
};

const SECTOR_THEMES: Record<string, SectorTheme> = {
  Healthcare: {
    accent: "#34d399",
    glow: "rgba(52,211,153,0.35)",
    ring: "rgba(52,211,153,0.45)",
    gradient: "from-emerald-400/25 via-teal-500/10 to-transparent",
    icon: "healthcare",
  },
  Banking: {
    accent: "#60a5fa",
    glow: "rgba(96,165,250,0.35)",
    ring: "rgba(96,165,250,0.45)",
    gradient: "from-blue-400/25 via-primary/15 to-transparent",
    icon: "banking",
  },
  "eCommerce & Retail": {
    accent: "#c084fc",
    glow: "rgba(192,132,252,0.35)",
    ring: "rgba(192,132,252,0.45)",
    gradient: "from-violet-400/25 via-fuchsia-500/10 to-transparent",
    icon: "retail",
  },
  Education: {
    accent: "#fbbf24",
    glow: "rgba(251,191,36,0.35)",
    ring: "rgba(251,191,36,0.45)",
    gradient: "from-amber-400/25 via-orange-500/10 to-transparent",
    icon: "education",
  },
  "Electric Vehicles": {
    accent: "#4ade80",
    glow: "rgba(74,222,128,0.35)",
    ring: "rgba(74,222,128,0.45)",
    gradient: "from-lime-400/25 via-green-500/10 to-transparent",
    icon: "ev",
  },
  "Food & Restaurants": {
    accent: "#fb7185",
    glow: "rgba(251,113,133,0.35)",
    ring: "rgba(251,113,133,0.45)",
    gradient: "from-rose-400/25 via-red-500/10 to-transparent",
    icon: "food",
  },
  "On-Demand Solutions": {
    accent: "#22d3ee",
    glow: "rgba(34,211,238,0.35)",
    ring: "rgba(34,211,238,0.45)",
    gradient: "from-cyan-400/25 via-sky-500/10 to-transparent",
    icon: "ondemand",
  },
  "Supply chain & Logistics": {
    accent: "#818cf8",
    glow: "rgba(129,140,248,0.35)",
    ring: "rgba(129,140,248,0.45)",
    gradient: "from-indigo-400/25 via-blue-500/10 to-transparent",
    icon: "logistics",
  },
  "Travel & Hospitality": {
    accent: "#38bdf8",
    glow: "rgba(56,189,248,0.35)",
    ring: "rgba(56,189,248,0.45)",
    gradient: "from-sky-400/25 via-primary/10 to-transparent",
    icon: "travel",
  },
  Media: {
    accent: "#f472b6",
    glow: "rgba(244,114,182,0.35)",
    ring: "rgba(244,114,182,0.45)",
    gradient: "from-pink-400/25 via-purple-500/10 to-transparent",
    icon: "media",
  },
  "NFT & Crypto": {
    accent: "#facc15",
    glow: "rgba(250,204,21,0.3)",
    ring: "rgba(250,204,21,0.45)",
    gradient: "from-yellow-400/20 via-amber-500/10 to-transparent",
    icon: "crypto",
  },
  Entertainment: {
    accent: "#fb923c",
    glow: "rgba(251,146,60,0.35)",
    ring: "rgba(251,146,60,0.45)",
    gradient: "from-orange-400/25 via-rose-500/10 to-transparent",
    icon: "entertainment",
  },
};

const SECTOR_BLURBS: Record<string, string> = {
  Healthcare:
    "HIPAA-ready patient portals, telehealth flows, and legacy EHR integrations modernized for mobile-first care.",
  Banking:
    "Secure mobile banking, UPI-ready wallets, and compliance-hardened APIs that replace aging core-banking frontends.",
  "eCommerce & Retail":
    "Headless storefronts, real-time inventory sync, and checkout experiences tuned for conversion on every device.",
  Education:
    "LMS platforms, live-class apps, and admin dashboards rebuilt for scale, accessibility, and offline resilience.",
  "Electric Vehicles":
    "Charging-network apps, fleet telemetry dashboards, and IoT-linked mobility experiences built for the EV era.",
  "Food & Restaurants":
    "Ordering, kitchen ops, and loyalty programs unified in fast, brand-consistent mobile experiences.",
  "On-Demand Solutions":
    "Real-time dispatch, geo-tracking, and payment rails engineered for peak demand and sub-second response.",
  "Supply chain & Logistics":
    "Route optimization, warehouse scanners, and shipment visibility apps that replace paper-heavy legacy workflows.",
  "Travel & Hospitality":
    "Booking engines, guest self-service, and property-management tools redesigned for seamless travel journeys.",
  Media:
    "Streaming-ready apps, content CMS bridges, and ad-monetization layers that keep audiences engaged.",
  "NFT & Crypto":
    "Wallet UX, marketplace flows, and Web3 integrations with security-first architecture and smooth onboarding.",
  Entertainment:
    "Interactive streaming, event ticketing, and social features that turn passive viewers into active communities.",
};

function getTheme(name: string): SectorTheme {
  return (
    SECTOR_THEMES[name] ?? {
      accent: "#1a69fd",
      glow: "rgba(26,105,253,0.35)",
      ring: "rgba(26,105,253,0.45)",
      gradient: "from-primary/25 via-primary/10 to-transparent",
      icon: "ondemand",
    }
  );
}

function SectorGlyph({ id, className = "size-7" }: { id: string; className?: string }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    className,
    "aria-hidden": true as const,
  };

  switch (id) {
    case "healthcare":
      return (
        <svg {...props}>
          <path
            d="M12 21s-5-3.5-7-7.5C3.5 10 6 6.5 9.5 6.5c1.8 0 2.5 1.2 2.5 1.2s.7-1.2 2.5-1.2C17 6.5 19.5 10 19 13.5 17 17.5 12 21 12 21Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M12 10v4M10 12h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "banking":
      return (
        <svg {...props}>
          <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3 11h18M7 15h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M12 7V4M8 4h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "retail":
      return (
        <svg {...props}>
          <path
            d="M6 7h12l-1.2 12H7.2L6 7Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M9 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "education":
      return (
        <svg {...props}>
          <path d="M4 9.5 12 5l8 4.5-8 4.5-8-4.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M7 11.5V16c0 1.2 2.2 2.5 5 2.5s5-1.3 5-2.5v-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "ev":
      return (
        <svg {...props}>
          <path
            d="M5 15h11l2-6H7l-2 6Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="8" cy="17" r="1.5" fill="currentColor" />
          <circle cx="15" cy="17" r="1.5" fill="currentColor" />
          <path d="M13 9l2-3h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "food":
      return (
        <svg {...props}>
          <path d="M6 4v8M10 4v8M6 8h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path
            d="M14 4c2 0 3 1.5 3 4v4H14V4Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M6 20h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "ondemand":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "logistics":
      return (
        <svg {...props}>
          <path
            d="M3 7h11v8H3V7Zm11 3h4l2 3v2h-6v-5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="7" cy="17" r="1.5" fill="currentColor" />
          <circle cx="17" cy="17" r="1.5" fill="currentColor" />
        </svg>
      );
    case "travel":
      return (
        <svg {...props}>
          <path
            d="M4 14l8-4 8 4-8 4-8-4Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M12 6v4M9 8h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "media":
      return (
        <svg {...props}>
          <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="m10 10 4 2-4 2v-4Z" fill="currentColor" />
        </svg>
      );
    case "crypto":
      return (
        <svg {...props}>
          <path
            d="M8 4h6a4 4 0 0 1 0 8h-2v4H8V4Zm0 4h6a2 2 0 0 0 0-4H8v4Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "entertainment":
      return (
        <svg {...props}>
          <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9 9l6 3-6 3V9Z" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
  }
}

function IconBadge({
  theme,
  size = "md",
  active = false,
}: {
  theme: SectorTheme;
  size?: "sm" | "md" | "lg";
  active?: boolean;
}) {
  const dims = size === "lg" ? "h-20 w-20 sm:h-24 sm:w-24" : size === "md" ? "h-12 w-12" : "h-10 w-10";
  const iconSize = size === "lg" ? "size-10 sm:size-12" : size === "md" ? "size-6" : "size-5";

  return (
    <span
      className={`relative flex shrink-0 items-center justify-center rounded-2xl ${dims}`}
      style={{
        color: theme.accent,
        background: `linear-gradient(145deg, ${theme.glow}, rgba(0,0,0,0.5))`,
        boxShadow: active
          ? `0 0 32px ${theme.glow}, inset 0 1px 0 rgba(255,255,255,0.15)`
          : `inset 0 1px 0 rgba(255,255,255,0.08)`,
        border: `1px solid ${active ? theme.ring : "rgba(255,255,255,0.1)"}`,
      }}
    >
      <SectorGlyph id={theme.icon} className={iconSize} />
    </span>
  );
}

function SectorChip({
  sector,
  index,
  active,
  onSelect,
  chipRef,
}: {
  sector: SectorItem;
  index: number;
  active: boolean;
  onSelect: () => void;
  chipRef?: (el: HTMLButtonElement | null) => void;
}) {
  const theme = getTheme(sector.name);

  return (
    <HydrationButton
      ref={chipRef}
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={`group flex shrink-0 snap-center flex-col items-center gap-2.5 rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-5 sm:py-4 ${
        active
          ? "scale-[1.02] border-white/20 bg-white/[0.06]"
          : "border-transparent bg-transparent hover:bg-white/[0.03]"
      }`}
      style={
        active
          ? { boxShadow: `0 12px 40px -16px ${theme.glow}` }
          : undefined
      }
    >
      <IconBadge theme={theme} size="md" active={active} />
      <span
        className={`max-w-[88px] text-center text-[11px] font-semibold leading-tight sm:max-w-[96px] sm:text-xs ${
          active ? "text-white" : "text-white/50 group-hover:text-white/75"
        }`}
      >
        {sector.name}
      </span>
      <span className="text-[10px] font-bold tabular-nums text-white/25">
        {String(index + 1).padStart(2, "0")}
      </span>
    </HydrationButton>
  );
}

export function AmIndustryRadar() {
  const items = useMemo(() => [...industrySectors.items], []);
  const reducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = items[activeIndex];
  const theme = getTheme(active.name);

  useEffect(() => {
    const chip = chipRefs.current[activeIndex];
    if (!chip) return;

    const isFirst = activeIndex === 0;
    const isLast = activeIndex === items.length - 1;

    chip.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      inline: isFirst ? "start" : isLast ? "end" : "center",
      block: "nearest",
    });
  }, [activeIndex, reducedMotion, items.length]);

  return (
    <section
      className="relative overflow-hidden border-t border-white/10 bg-black py-10 text-primary-foreground md:py-12 lg:py-14"
      aria-labelledby="am-sectors-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(26,105,253,0.14),transparent)]"
        aria-hidden
      />

      <div className="container-app relative">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Industries we modernize
            </p>
            <h2 id="am-sectors-heading" className="mt-3 text-h3 font-bold text-white sm:text-h2">
              {industrySectors.title}
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.06} className="relative mt-10 lg:mt-12">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-black to-transparent sm:w-12"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-black to-transparent sm:w-12"
            aria-hidden
          />

          <div
            ref={railRef}
            className="-mx-4 flex snap-x snap-mandatory gap-1 overflow-x-auto scroll-pl-4 scroll-pr-4 px-4 pb-2 [scrollbar-width:none] sm:-mx-0 sm:justify-start sm:gap-2 sm:scroll-pl-0 sm:scroll-pr-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {items.map((sector, i) => (
              <SectorChip
                key={sector.name}
                sector={sector}
                index={i}
                active={i === activeIndex}
                onSelect={() => setActiveIndex(i)}
                chipRef={(el) => {
                  chipRefs.current[i] = el;
                }}
              />
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-6 sm:mt-8">
          <AnimatePresence mode="wait">
            <motion.article
              key={active.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[1.75rem] border border-border-strong bg-surface-elevated"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${theme.gradient}`}
                aria-hidden
              />
              {!reducedMotion ? (
                <motion.div
                  className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full blur-3xl"
                  style={{ backgroundColor: theme.glow }}
                  animate={{ opacity: [0.4, 0.7, 0.4], x: [0, 24, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden
                />
              ) : null}

              <div className="relative grid gap-6 p-6 sm:p-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center lg:gap-10 lg:p-10">
                <div className="flex flex-col items-center gap-4 lg:items-start">
                  <IconBadge theme={theme} size="lg" active />
                  <p
                    className="text-xs font-bold uppercase tracking-[0.22em]"
                    style={{ color: theme.accent }}
                  >
                    Sector {String(activeIndex + 1).padStart(2, "0")}
                  </p>
                </div>

                <div>
                  <h3 className="text-h3 font-bold text-white sm:text-h2">{active.name}</h3>
                  <p className="mt-4 max-w-2xl text-para leading-relaxed text-white/70 sm:text-md">
                    {SECTOR_BLURBS[active.name] ??
                      "Tailored application modernization strategies that align with your industry's compliance, UX, and performance demands."}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {["Legacy uplift", "Cloud-ready", "Mobile-first"].map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/10 bg-black/30 px-3.5 py-1.5 text-xs font-semibold"
                        style={{ color: theme.accent }}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </FadeIn>

        <ul className="sr-only">
          {items.map((sector) => (
            <li key={sector.name}>
              <h3>{sector.name}</h3>
              <p>{SECTOR_BLURBS[sector.name] ?? ""}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
