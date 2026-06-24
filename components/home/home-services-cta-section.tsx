"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { homeServicesCta } from "@/lib/home-services-cta";

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M3 7H11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M8.2 3.8L11 7L8.2 10.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceMarquee() {
  const reducedMotion = usePrefersReducedMotion();
  const items = homeServicesCta.highlights;

  if (reducedMotion) {
    return (
      <ul className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-2.5">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="inline-flex min-h-11 items-center rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-primary/40 hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  const rowOne = [...items, ...items];
  const rowTwo = [...[...items].reverse(), ...[...items].reverse()];

  return (
    <div className="relative mt-8 sm:mt-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-surface-dark via-black/90 to-transparent sm:w-20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface-dark via-black/90 to-transparent sm:w-20"
      />

      <MarqueeRow track={rowOne} duration="48s" />
      <MarqueeRow track={rowTwo} className="mt-3 sm:mt-4" duration="40s" reverse />
    </div>
  );
}

function MarqueeRow({
  track,
  className = "",
  duration,
  reverse = false,
}: {
  track: (typeof homeServicesCta.highlights)[number][];
  className?: string;
  duration: string;
  reverse?: boolean;
}) {
  return (
    <div className={`overflow-hidden py-1 ${className}`}>
      <div
        className={`flex w-max items-center gap-3 animate-logo-marquee sm:gap-4 ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
        style={{ animationDuration: duration }}
      >
        {track.map((item, i) => (
          <Link
            key={`${item.label}-${i}`}
            href={item.href}
            className="inline-flex min-h-11 shrink-0 items-center rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/75 transition-[border-color,background-color,color] hover:border-primary/45 hover:bg-primary/10 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function HomeServicesCtaSection() {
  const { eyebrow, headline, body, primaryCta, secondaryCta } = homeServicesCta;

  return (
    <section
      className="bg-surface-dark py-10 text-primary-foreground md:py-12 lg:py-14"
      aria-labelledby="services-cta-heading"
    >
      <div className="container-app">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(520px circle at 10% 20%, rgba(26,105,253,0.24), transparent 55%), radial-gradient(420px circle at 90% 80%, rgba(26,105,253,0.14), transparent 60%), linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(0,0,0,0))",
            }}
          />

          <div className="relative mx-auto max-w-4xl text-center">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                {eyebrow}
              </p>
              <h2
                id="services-cta-heading"
                className="mt-4 text-h3 font-bold tracking-tight text-white sm:text-h2"
              >
                {headline}
              </h2>
            </FadeIn>

            <FadeIn delay={0.06}>
              <p className="mx-auto mt-4 max-w-2xl text-para leading-relaxed text-white/65 sm:text-md">
                {body}
              </p>
            </FadeIn>

            <ServiceMarquee />

            <FadeIn delay={0.12} className="mt-8 sm:mt-10">
              <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <motion.div
                  whileHover={
                    {
                      filter:
                        "drop-shadow(0px 14px 30px rgba(26,105,253,0.35))",
                    } as const
                  }
                  transition={{ duration: 0.25 }}
                >
                  <Link
                    href={primaryCta.href}
                    className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover sm:w-auto"
                  >
                    <span>{primaryCta.label}</span>
                    <span
                      aria-hidden
                      className="relative grid size-7 place-items-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <ArrowIcon />
                    </span>
                  </Link>
                </motion.div>

                <Link
                  href={secondaryCta.href}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 bg-transparent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-primary/50 hover:bg-white/[0.04] sm:w-auto"
                >
                  {secondaryCta.label}
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
