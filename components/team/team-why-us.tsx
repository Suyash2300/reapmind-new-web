"use client";

import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { teamConfig } from "@/lib/team-config";

export function TeamWhyUs() {
  return (
    <section className="section-app bg-black text-white py-32">
      <div className="container-app">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <GsapScrollReveal>
            <div className="max-w-xl">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">
                {teamConfig.whyUs.title}
              </span>
              <h2 className="mt-4 text-display font-bold leading-tight tracking-tight text-white">
                {teamConfig.whyUs.heading}
              </h2>
              <p className="mt-8 text-para text-white/70 leading-relaxed">
                {teamConfig.whyUs.description}
              </p>
            </div>
          </GsapScrollReveal>

          <div className="flex flex-col justify-center gap-8">
            {teamConfig.whyUs.points.map((point, i) => (
              <GsapScrollReveal key={point} start={`top ${80 + i * 5}%`}>
                <div className="group flex items-center gap-6 border-b border-white/10 pb-8 transition-colors hover:border-primary">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h3 className="text-h3 font-semibold text-white group-hover:text-primary transition-colors">
                    {point}
                  </h3>
                </div>
              </GsapScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
