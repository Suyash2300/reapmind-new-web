"use client";

import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { teamConfig } from "@/lib/team-config";

export function TeamStats() {
  return (
    <section className="bg-surface-header border-y border-white/10 py-16">
      <div className="container-app">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 divide-x divide-white/10">
          {teamConfig.stats.map((stat, i) => (
            <GsapScrollReveal key={stat.label} start={`top ${85 + i * 2}%`} className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-display font-extrabold text-primary mb-2">{stat.value}</span>
              <span className="text-sm font-bold uppercase tracking-widest text-white/60">
                {stat.label}
              </span>
            </GsapScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
