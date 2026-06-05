"use client";

import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { companyConfig } from "@/lib/company-config";

export function CompanyWhyUs() {
  return (
    <section className="section-app bg-surface-dark text-white">
      <div className="container-app">
        <GsapScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-display font-bold tracking-tight text-white">
              What makes us the best choice
            </h2>
          </div>
        </GsapScrollReveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {companyConfig.features.map((feature, i) => (
            <GsapScrollReveal key={feature.title} start={`top ${80 + (i % 2) * 10}%`}>
              <div className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 transition-colors hover:bg-white/10">
                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <h3 className="text-h4 font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-para text-white/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </GsapScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
