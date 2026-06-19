"use client";

import Link from "next/link";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { lifeConfig } from "@/lib/life-config";

export function LifeCta() {
  return (
    <section className="relative overflow-hidden bg-surface-dark py-32 border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute left-0 right-0 top-0 -mt-8 h-96 bg-primary/10 blur-[120px]" />
      </div>

      <div className="container-app relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <GsapScrollReveal>
              <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">
                {lifeConfig.cta.title}
              </span>
              <h2 className="text-display font-black text-white leading-tight mb-6">
                {lifeConfig.cta.heading}
              </h2>
              <p className="text-h6 text-white/70 font-medium max-w-xl mb-10">
                {lifeConfig.cta.description}
              </p>
              <Link
                href={lifeConfig.cta.href}
                className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-primary px-10 font-bold text-primary-foreground transition-transform hover:scale-105"
              >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/30" />
                </div>
                <span className="relative flex items-center gap-2">
                  {lifeConfig.cta.buttonText}
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </GsapScrollReveal>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {lifeConfig.stats.map((stat, i) => (
              <GsapScrollReveal 
                key={stat.label} 
                delay={i * 0.1}
                className="bg-surface-elevated/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-surface-elevated hover:border-primary/30 transition-colors"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/50 font-bold uppercase tracking-wider text-sm">
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
