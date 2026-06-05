"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { companyConfig } from "@/lib/company-config";

export function CompanyServices() {
  return (
    <section className="relative overflow-hidden py-32 bg-black text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/company/abstract-tech.jpg"
          alt="Tech Background"
          fill
          className="object-cover opacity-20 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="container-app relative z-10">
        <FadeIn>
          <h2 className="text-center text-display font-bold tracking-tight">What we do</h2>
        </FadeIn>
        
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {companyConfig.services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.15}>
              <div className="group relative flex h-[320px] flex-col justify-between overflow-hidden rounded-3xl bg-white/5 p-10 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/20 border border-white/10 backdrop-blur-md">
                <div className="text-5xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 origin-bottom-left">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-h3 font-semibold text-white group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 opacity-0 transition-all duration-500 group-hover:bg-primary group-hover:opacity-100">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

