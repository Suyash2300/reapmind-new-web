"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const TRUST_SNIPPETS = [
  { quote: "Exceptional collaboration — highly recommend.", author: "Gunjan Jain, Vytal" },
  { quote: "A game-changer for our rideshare platform.", author: "Matthew Carter, Leep" },
  { quote: "Brought unique features to life at scale.", author: "Jeremy Del Zotto, & Connection" },
  { quote: "Transformed our concept into a product.", author: "Roland Owens, Synerphase" },
] as const;

const STATS = [
  { value: "500+", label: "AI professionals" },
  { value: "98%", label: "Client satisfaction" },
  { value: "20+", label: "Countries served" },
] as const;

/** Animated trust band replacing low-res testimonials banner */
export function GaiTrustBand() {
  const reducedMotion = usePrefersReducedMotion();
  const track = reducedMotion
    ? TRUST_SNIPPETS
    : [...TRUST_SNIPPETS, ...TRUST_SNIPPETS];

  return (
    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[1.5rem] border border-primary/25 bg-surface-elevated">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(26,105,253,0.18),transparent)]"
        aria-hidden
      />
      {!reducedMotion ? (
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(26,105,253,0.15) 50%, transparent 60%)",
          }}
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
          aria-hidden
        />
      ) : null}

      <div className="relative border-b border-white/10 px-5 py-6 sm:px-8 sm:py-8">
        <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-primary">
          Client testimonials
        </p>
        <h3 className="mt-2 text-center text-h5 font-bold text-white sm:text-h4">
          Voices that speak volumes about our excellence
        </h3>

        <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="rounded-xl border border-white/10 bg-black/30 px-2 py-3 text-center sm:px-4 sm:py-4"
            >
              <p className="text-h4 font-bold tabular-nums text-accent sm:text-h3">{stat.value}</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-white/55 sm:text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden py-4 sm:py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-surface-elevated to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface-elevated to-transparent sm:w-16" />

        <div
          className={`flex w-max gap-4 ${reducedMotion ? "flex-wrap justify-center px-4" : "animate-gai-trust-marquee px-4"}`}
        >
          {track.map((item, i) => (
            <figure
              key={`${item.author}-${i}`}
              className="w-[min(280px,70vw)] shrink-0 rounded-xl border border-white/10 bg-black/40 px-4 py-3 sm:w-[300px] sm:px-5 sm:py-4"
            >
              <blockquote className="text-sm leading-snug text-white/80">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-2 text-xs font-semibold text-primary">
                {item.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
