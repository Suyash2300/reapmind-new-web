"use client";

import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { ClientLogoShowcase } from "@/components/home/client-logo-showcase";
import { pwaConfig } from "@/lib/pwa-config";

export function PwaClientLogos() {
  return (
    <section className="section-app border-y border-white/5 bg-surface-header py-20">
      <div className="container-app">
        <GsapScrollReveal className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">
            Trusted Partners
          </span>
          <h2 className="text-h3 font-bold leading-snug text-white md:text-h2">
            {pwaConfig.clientLogos.title}
          </h2>
        </GsapScrollReveal>

        <ClientLogoShowcase logos={pwaConfig.clientLogos.logos} />
      </div>
    </section>
  );
}
