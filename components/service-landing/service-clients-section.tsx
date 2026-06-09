"use client";

import { ClientLogoShowcase } from "@/components/home/client-logo-showcase";
import { FadeIn } from "@/components/motion/fade-in";

type Logo = { name: string; src: string };

type ServiceClientsSectionProps = {
  title: string;
  subtitle?: string;
  logos: readonly Logo[];
};

export function ServiceClientsSection({
  title,
  subtitle,
  logos,
}: ServiceClientsSectionProps) {
  return (
    <section className="border-t border-white/10 bg-black py-10 text-primary-foreground md:py-12 lg:py-14">
      <div className="container-app">
        <FadeIn>
          <h2 className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
            {title}
          </h2>
          {subtitle ? (
            <p className="mx-auto mt-3 max-w-2xl text-center text-para text-white/60">
              {subtitle}
            </p>
          ) : null}
        </FadeIn>

        <div className="mt-10 sm:mt-14">
          <ClientLogoShowcase logos={logos} variant="dark" />
        </div>
      </div>
    </section>
  );
}
