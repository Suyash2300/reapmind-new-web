"use client";

import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { lifeConfig } from "@/lib/life-config";

export function LifeBenefits() {
  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <GsapScrollReveal>
          <h2 className="text-display font-bold text-white mb-16 max-w-2xl leading-tight">
            Perks of joining our universe
          </h2>
        </GsapScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lifeConfig.benefits.map((benefit, i) => {
            const isLarge = i === 0 || i === 3;
            
            return (
              <GsapScrollReveal 
                key={benefit.title} 
                start={`top ${85 + i * 5}%`}
                className={`group relative overflow-hidden rounded-[2rem] bg-surface-dark p-10 transition-colors hover:bg-white/5 border border-white/5 ${
                  isLarge ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-9xl font-black text-white mix-blend-overlay">0{i + 1}</span>
                </div>
                
                <div className="relative z-10 flex h-full flex-col justify-end min-h-[240px]">
                  <h3 className="text-h3 font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-para text-white/60 font-medium">
                    {benefit.description}
                  </p>
                </div>
              </GsapScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
