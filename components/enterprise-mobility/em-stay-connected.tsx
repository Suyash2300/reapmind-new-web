"use client";

import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { enterpriseMobilityConfig } from "@/lib/enterprise-mobility-config";

export function EmStayConnected() {
  return (
    <section className="section-app bg-surface-dark relative overflow-hidden py-32">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container-app relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <GsapScrollReveal className="sticky top-32">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                Stay Connected
              </span>
              <h2 className="text-h2 font-black text-white leading-tight">
                {enterpriseMobilityConfig.stayConnected.title}
              </h2>
              <p className="mt-6 text-h6 text-white/80 leading-relaxed font-medium">
                {enterpriseMobilityConfig.stayConnected.intro}
              </p>
            </GsapScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-12">
              {enterpriseMobilityConfig.stayConnected.paragraphs.map((p, i) => (
                <GsapScrollReveal key={i} start={`top ${85 + i * 2}%`} delay={i * 0.1}>
                  <div className="relative pl-8 border-l border-white/10 before:absolute before:left-0 before:top-0 before:w-[2px] before:h-0 before:bg-primary before:transition-all before:duration-1000 hover:before:h-full group">
                    <p className="text-para text-white/60 leading-relaxed transition-colors duration-500 group-hover:text-white/90">
                      {p}
                    </p>
                  </div>
                </GsapScrollReveal>
              ))}
            </div>
            
            <GsapScrollReveal className="mt-16" delay={0.3}>
              <a 
                href="/contact-us"
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 font-bold text-white transition-all hover:bg-white hover:text-black"
              >
                {enterpriseMobilityConfig.stayConnected.cta}
              </a>
            </GsapScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
