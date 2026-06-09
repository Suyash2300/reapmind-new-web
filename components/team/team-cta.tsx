"use client";

import Link from "next/link";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { teamConfig } from "@/lib/team-config";

export function TeamCTA() {
  return (
    <section className="relative overflow-hidden bg-black py-32 text-center text-primary-foreground">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-black to-accent/10 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      
      <div className="container-app relative z-10 mx-auto max-w-4xl">
        <GsapScrollReveal>
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            {teamConfig.cta.title}
          </span>
          <h2 className="mt-6 text-display font-bold leading-tight text-white tracking-tight">
            {teamConfig.cta.heading}
          </h2>
          <p className="mt-8 text-h4 font-medium text-white/70">
            {teamConfig.cta.description}
          </p>
          
          <div className="mt-12 flex flex-col items-center justify-center gap-6">
            <Link 
              href="/contact-reapmind"
              className="inline-flex min-h-[64px] items-center justify-center rounded-full bg-primary px-12 text-lg font-bold text-white transition-all hover:scale-105 hover:bg-primary-hover hover:shadow-[0_0_40px_rgba(var(--primary),0.4)]"
            >
              {teamConfig.cta.buttonText}
            </Link>
            <p className="text-sm font-medium text-white/40">
              {teamConfig.cta.subtext}
            </p>
          </div>
        </GsapScrollReveal>
      </div>
    </section>
  );
}
