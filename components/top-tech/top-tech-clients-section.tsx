"use client";

import { ClientLogoShowcase } from "@/components/home/client-logo-showcase";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { topTechClientLogos } from "@/lib/top-tech-client-logos";

type Logo = { name: string; src: string };

type TopTechClientsSectionProps = {
  title?: string;
  logos?: readonly Logo[];
};

export function TopTechClientsSection({
  title = "Top Client Work with Us",
  logos = topTechClientLogos,
}: TopTechClientsSectionProps) {
  return (
    <section
      className="border-y border-white/10 bg-black py-12 md:py-16 lg:py-20"
      aria-labelledby="top-tech-clients-heading"
    >
      <div className="container-app">
        <BlurFadeIn
          as="h2"
          id="top-tech-clients-heading"
          className="mb-10 text-center text-h4 font-bold text-white sm:text-h3 md:mb-14"
        >
          {title}
        </BlurFadeIn>
        <ClientLogoShowcase logos={logos} variant="dark" size="large" />
      </div>
    </section>
  );
}
