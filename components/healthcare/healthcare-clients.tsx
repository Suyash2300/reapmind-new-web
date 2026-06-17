"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { homeClients } from "@/lib/home-sections";
import { ClientLogoShowcase } from "@/components/home/client-logo-showcase";

export function HealthcareClients() {
  return (
    <section className="section-app border-b border-border-strong bg-surface-header text-primary-foreground py-16">
      <div className="container-app">
        <FadeIn>
          <h2 className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
            Top Client Work with Us
          </h2>
        </FadeIn>

        <div className="mt-10 sm:mt-14">
          <ClientLogoShowcase logos={homeClients.logos} />
        </div>
      </div>
    </section>
  );
}
