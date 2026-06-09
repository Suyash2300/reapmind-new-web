"use client";

import Link from "next/link";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { companyConfig } from "@/lib/company-config";

export function CompanyCTA() {
  return (
    <section className="relative overflow-hidden bg-surface-header py-32 text-center text-primary-foreground">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
      
      <div className="container-app relative z-10 mx-auto max-w-4xl">
        <GsapScrollReveal>
          <h2 className="text-display font-bold leading-tight text-white tracking-tight">
            {companyConfig.cta.title}
          </h2>
          <p className="mt-6 text-h4 font-medium text-white/70">
            {companyConfig.cta.subtitle}
          </p>
          
          <div className="mt-12">
            <Link 
              href="/contact-us"
              className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-primary px-10 text-base font-semibold text-white transition-all hover:scale-105 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/30"
            >
              Get free consultation now
            </Link>
          </div>
        </GsapScrollReveal>
      </div>
    </section>
  );
}
