"use client";

import Link from "next/link";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { lifeConfig } from "@/lib/life-config";

export function LifeCta() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-surface-dark py-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="pointer-events-none absolute -right-1/4 top-0 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="container-app relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <GsapScrollReveal>
              <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">
                {lifeConfig.cta.title}
              </span>
              <h2 className="text-display mb-6 font-black leading-tight text-white">
                {lifeConfig.cta.heading}
              </h2>
              <p className="text-h6 mb-10 max-w-xl font-medium text-white/70">
                {lifeConfig.cta.description}
              </p>
              <Link
                href="/careers"
                className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-primary px-10 font-bold text-primary-foreground transition-transform hover:scale-105 hover:bg-primary-hover"
              >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20" />
                </div>
                <span className="relative flex items-center gap-2">
                  {lifeConfig.cta.buttonText}
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </GsapScrollReveal>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lifeConfig.stats.map((stat, i) => (
              <GsapScrollReveal
                key={stat.label}
                delay={i * 0.1}
                className="rounded-3xl border border-border-strong bg-surface-elevated p-8 text-center transition-colors hover:border-primary/30 hover:bg-white/5"
              >
                <div className="mb-2 text-4xl font-black text-accent md:text-5xl">
                  {stat.value}
                </div>
                <div className="text-sm font-bold uppercase tracking-wider text-white/65">
                  {stat.label}
                </div>
              </GsapScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
