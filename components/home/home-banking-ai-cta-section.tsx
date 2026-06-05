"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { motion } from "framer-motion";
import { homeBankingAiShowcase } from "@/lib/home-banking-ai-showcase";

function StatIcon({ kind }: { kind: string }) {
  // Simple monochrome icons for a consistent enterprise look.
  switch (kind) {
    case "clients":
      return (
        <svg
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M16 11a4 4 0 1 0-8 0c0 5-7 4.5-7 8.5V21h22v-1.5c0-4-7-3.5-7-8.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "talent":
      return (
        <svg
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 12l1.8 1.8L15.5 9.6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "industries":
      return (
        <svg
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9 22V12h6v10"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "years":
      return (
        <svg
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M12 22c5 0 9-4 9-9S17 4 12 4 3 8 3 13s4 9 9 9Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M12 8v5l3 2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function HomeBankingAiCtaSection() {
  return (
    <section className="bg-surface-dark py-10 text-primary-foreground md:py-12 lg:py-14">
      <div className="container-app">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 md:p-10">
          {/* Premium mesh/glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(600px circle at 15% 25%, rgba(26,105,253,0.22), transparent 55%), radial-gradient(460px circle at 80% 10%, rgba(255,255,55,0.12), transparent 60%), linear-gradient(to bottom, rgba(255,255,255,0.04), rgba(0,0,0,0))",
            }}
          />

          <div className="relative">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <FadeIn>
                  <h2 className="text-h3 font-bold text-white sm:text-h2">
                    {homeBankingAiShowcase.cta.headline}
                  </h2>
                </FadeIn>

                <FadeIn delay={0.1} className="mt-8">
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
                      href={homeBankingAiShowcase.cta.href}
                      className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
                    >
                      <span>{homeBankingAiShowcase.cta.buttonLabel}</span>
                      <span
                        aria-hidden
                        className="relative grid size-7 place-items-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
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
                        <span className="absolute inset-0 rounded-full bg-primary/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </span>
                    </Link>
                  </motion.div>
                </FadeIn>

                <p className="mt-5 max-w-2xl text-para leading-relaxed text-white/60">
                  Build your next-gen banking experiences with AI-ready
                  foundations and flawless execution.
                </p>
              </div>

              {/* Stats block (was missing) */}
              <div className="grid gap-3 sm:grid-cols-2">
                {homeBankingAiShowcase.stats.map((stat, idx) => (
                  <FadeIn key={stat.id} delay={0.06 + idx * 0.05}>
                    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-primary/40">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-h4 font-bold text-white">
                            {stat.value}
                          </div>
                          <div className="mt-1 text-para text-white/60">
                            {stat.label}
                          </div>
                        </div>
                        <div className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-primary transition-colors group-hover:border-primary/30">
                          <StatIcon kind={stat.id} />
                        </div>
                      </div>
                      <div className="mt-4 h-px w-full bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-70 transition-opacity group-hover:opacity-100" />
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

