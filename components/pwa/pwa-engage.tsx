"use client";

import Link from "next/link";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { pwaConfig } from "@/lib/pwa-config";

export function PwaEngage() {
  return (
    <section className="section-app relative overflow-hidden bg-surface-dark py-32">
      <div className="pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] translate-y-1/2 -translate-x-1/3 rounded-full bg-blue-500/5 blur-[100px]" />

      <div className="container-app relative z-10">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <GsapScrollReveal className="lg:sticky lg:top-32">
              <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">
                Cross-Device Experience
              </span>
              <h2 className="text-h2 font-black leading-tight text-white">
                {pwaConfig.engage.title}
              </h2>
              <p className="mt-6 text-h6 font-medium leading-relaxed text-white/80">
                {pwaConfig.engage.intro}
              </p>
            </GsapScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-12">
              {pwaConfig.engage.paragraphs.map((p, i) => (
                <GsapScrollReveal key={i} start={`top ${85 + i * 2}%`} delay={i * 0.1}>
                  <div className="group relative border-l border-white/10 pl-8 before:absolute before:top-0 before:left-0 before:h-0 before:w-[2px] before:bg-primary before:transition-all before:duration-1000 hover:before:h-full">
                    <p className="text-para leading-relaxed text-white/60 transition-colors duration-500 group-hover:text-white/90">
                      {p}
                    </p>
                  </div>
                </GsapScrollReveal>
              ))}
            </div>

            <GsapScrollReveal className="mt-16" delay={0.3}>
              <Link
                href="/contact-us"
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 font-bold text-white transition-all hover:bg-white hover:text-black"
              >
                {pwaConfig.engage.cta}
              </Link>
            </GsapScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
