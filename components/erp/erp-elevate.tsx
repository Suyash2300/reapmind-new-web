"use client";

import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { erpConfig } from "@/lib/erp-config";
import Link from "next/link";

export function ErpElevate() {
  return (
    <section className="section-app bg-surface-dark relative overflow-hidden py-32">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container-app relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <GsapScrollReveal>
              <h2 className="text-h2 font-black text-white leading-tight sticky top-32">
                {erpConfig.elevate.title}
              </h2>
            </GsapScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <GsapScrollReveal delay={0.2}>
              <div className="space-y-8">
                {erpConfig.elevate.paragraphs.map((p, i) => (
                  <div key={i} className="relative pl-8 border-l-4 border-primary group hover:border-white transition-colors duration-500">
                    <p className="text-h6 text-white/70 leading-relaxed font-medium">
                      {p}
                    </p>
                  </div>
                ))}
              </div>
            </GsapScrollReveal>
            
            <GsapScrollReveal className="mt-12" delay={0.3}>
              <Link 
                href="/contact-us"
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 font-bold text-white transition-all hover:bg-white hover:text-black"
              >
                {erpConfig.elevate.cta}
              </Link>
            </GsapScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
