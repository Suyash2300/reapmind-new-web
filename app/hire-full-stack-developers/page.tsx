import { Metadata } from "next";
import { fullstackHireConfig } from "@/lib/fullstack-hire-config";
import { FullstackHireHero } from "@/components/fullstack-hire/fullstack-hire-hero";
import { FullstackHireLogos } from "@/components/fullstack-hire/fullstack-hire-logos";
import { FullstackHireAbout } from "@/components/fullstack-hire/fullstack-hire-about";
import { FullstackHirePortfolio } from "@/components/fullstack-hire/fullstack-hire-portfolio";
import { FullstackHireTechnologies } from "@/components/fullstack-hire/fullstack-hire-technologies";
import { FullstackHireHiringModels } from "@/components/fullstack-hire/fullstack-hire-hiring-models";
import { FullstackHireProcess } from "@/components/fullstack-hire/fullstack-hire-process";
import { FullstackHirePricing } from "@/components/fullstack-hire/fullstack-hire-pricing";
import { FullstackHireTestimonials } from "@/components/fullstack-hire/fullstack-hire-testimonials";
import { FullstackHireRelated } from "@/components/fullstack-hire/fullstack-hire-related";
import { FullstackHireFaq } from "@/components/fullstack-hire/fullstack-hire-faq";
import { ServiceCta } from "@/components/shared/service-cta";
import { CompanyLocations } from "@/components/company/company-locations";

export const metadata: Metadata = {
  title: fullstackHireConfig.meta.title,
  description: fullstackHireConfig.meta.description,
  alternates: { canonical: "/hire-full-stack-developers" },
};

export default function HireFullStackDevelopersPage() {
  const { ctas } = fullstackHireConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-white selection:bg-primary/30">
      <FullstackHireHero />
      <FullstackHireLogos />
      <FullstackHireAbout />
      <FullstackHirePortfolio />
      <FullstackHireTechnologies />
      <ServiceCta
        title={ctas.afterTechnologies.title}
        subtitle={ctas.afterTechnologies.subtitle}
        primaryLabel={ctas.afterTechnologies.primaryLabel}
        motionStyle="spotlight"
      />
      <FullstackHireHiringModels />
      <FullstackHireProcess />
      <FullstackHirePricing />
      <ServiceCta
        title={ctas.afterPricing.title}
        subtitle={ctas.afterPricing.subtitle}
        primaryLabel={ctas.afterPricing.primaryLabel}
        motionStyle="zoom"
      />
      <FullstackHireTestimonials />
      <FullstackHireRelated />
      <FullstackHireFaq />
      <CompanyLocations />
    </main>
  );
}
