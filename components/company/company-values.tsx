"use client";

import Image from "next/image";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { companyConfig } from "@/lib/company-config";

export function CompanyValues() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-black text-primary-foreground">
      <div className="absolute inset-0 z-0">
        <Image
          src="/company/values.jpg"
          alt="Our Values"
          fill
          className="object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-transparent to-surface-dark" />
      </div>

      <div className="container-app relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <GsapScrollReveal>
            <h2 className="text-display font-bold text-white tracking-tight">Our Values</h2>
            <p className="mt-6 text-h4 font-medium text-white/70">
              The core principles that drive our culture and shape our decisions.
            </p>
          </GsapScrollReveal>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {companyConfig.values.map((value, i) => (
            <GsapScrollReveal key={value.title} start={`top ${85 + (i % 4) * 5}%`}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <h3 className="relative z-10 text-h4 font-semibold text-white group-hover:text-primary transition-colors">{value.title}</h3>
                <p className="relative z-10 mt-4 text-para text-white/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </GsapScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

