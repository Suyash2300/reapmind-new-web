"use client";

import Image from "next/image";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { lifeConfig } from "@/lib/life-config";

export function LifeWhyUs() {
  return (
    <section className="section-app bg-black py-32 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container-app relative z-10">
        <GsapScrollReveal>
          <h2 className="text-display font-bold text-white mb-20 max-w-2xl leading-tight">
            {lifeConfig.whyUs.title}
          </h2>
        </GsapScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="space-y-12">
            {lifeConfig.whyUs.points.map((point, i) => (
              <GsapScrollReveal key={point.name} delay={i * 0.1}>
                <div className="flex gap-6 group">
                  <div className="shrink-0 relative w-20 h-20 rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-primary/30 transition-colors">
                    <Image
                      src={point.image}
                      alt={point.name}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                  </div>
                  <div>
                    <h3 className="text-h4 font-bold text-white mb-2">{point.name}</h3>
                    <p className="text-para text-white/60 leading-relaxed font-medium">
                      {point.description}
                    </p>
                  </div>
                </div>
              </GsapScrollReveal>
            ))}
          </div>

          <GsapScrollReveal className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 lg:sticky lg:top-32">
            <Image
              src={lifeConfig.whyUs.image}
              alt="Why Choose Us"
              fill
              className="object-cover"
            />
          </GsapScrollReveal>
        </div>
      </div>
    </section>
  );
}
