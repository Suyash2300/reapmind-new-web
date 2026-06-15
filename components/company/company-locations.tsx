"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { companyConfig } from "@/lib/company-config";

export function CompanyLocations() {
  return (
    <section className="section-app bg-black text-white">
      <div className="container-app">
        <FadeIn>
          <h2 className="text-display font-bold tracking-tight text-white">Our Global Presence</h2>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {companyConfig.locations.map((location, i) => (
            <FadeIn key={location.title} delay={i * 0.1}>
              <div className="flex h-full flex-col border-t border-white/20 pt-6 transition-colors hover:border-primary">
                <div className="flex items-center gap-3">
                  <span className="relative h-7 w-10 shrink-0 overflow-hidden rounded-sm border border-white/15 shadow-sm">
                    <Image
                      src={location.flag}
                      alt={`${location.flagLabel} flag`}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </span>
                  <h3 className="text-h4 font-semibold text-white">{location.title}</h3>
                </div>
                <p className="mt-4 text-para leading-relaxed text-white/60">
                  {location.address}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
