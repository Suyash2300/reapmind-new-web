"use client";

import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { companyConfig } from "@/lib/company-config";

export function CompanyStats() {
  return (
    <section className="section-app bg-surface-dark text-white">
      <div className="container-app mx-auto">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {companyConfig.stats.map((stat, i) => (
            <GsapScrollReveal key={stat.label} start={`top ${85 + i * 2}%`} className="flex flex-col border-l border-white/20 pl-6">
              <span className="text-h2 font-bold text-primary">{stat.value}</span>
              <span className="mt-2 text-sm font-medium uppercase tracking-wider text-white/60">
                {stat.label}
              </span>
            </GsapScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
