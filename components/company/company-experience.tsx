"use client";

import Image from "next/image";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { companyConfig } from "@/lib/company-config";

export function CompanyExperience() {
  return (
    <section className="relative min-h-[120svh] bg-surface-header text-primary-foreground">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/company/experience.jpg"
            alt="Experience"
            fill
            className="object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-header via-surface-header/50 to-transparent" />
          <div className="absolute inset-0 bg-surface-header/40 backdrop-blur-[2px]" />
        </div>

        <div className="container-app relative z-10 w-full">
          <GsapScrollReveal start="top 70%">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
              <div className="max-w-xl">
                <h2 className="text-display font-extrabold leading-none text-white tracking-tighter">
                  {companyConfig.experience.title}
                </h2>
                <div className="mt-8 h-1 w-24 bg-primary" />
              </div>
              
              <div className="max-w-2xl">
                <p className="text-h4 font-medium leading-relaxed text-white/90">
                  {companyConfig.experience.description}
                </p>
              </div>
            </div>
          </GsapScrollReveal>
        </div>
      </div>
    </section>
  );
}

