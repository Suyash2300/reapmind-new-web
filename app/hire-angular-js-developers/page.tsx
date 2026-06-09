import { Metadata } from "next";
import { angularHireConfig } from "@/lib/angular-hire-config";
import { AngularHireHero } from "@/components/angular-hire/angular-hire-hero";
import { AngularHireLogos } from "@/components/angular-hire/angular-hire-logos";
import { AngularHireAbout } from "@/components/angular-hire/angular-hire-about";
import { AngularHirePortfolio } from "@/components/angular-hire/angular-hire-portfolio";
import { AngularHireTechnologies } from "@/components/angular-hire/angular-hire-technologies";
import { AngularHireHiringModels } from "@/components/angular-hire/angular-hire-hiring-models";
import { AngularHireProcess } from "@/components/angular-hire/angular-hire-process";
import { AngularHirePricing } from "@/components/angular-hire/angular-hire-pricing";
import { AngularHireTestimonials } from "@/components/angular-hire/angular-hire-testimonials";
import { AngularHireRelated } from "@/components/angular-hire/angular-hire-related";
import { AngularHireFaq } from "@/components/angular-hire/angular-hire-faq";
import { ServiceCta } from "@/components/shared/service-cta";
import { CompanyLocations } from "@/components/company/company-locations";

export const metadata: Metadata = {
  title: angularHireConfig.meta.title,
  description: angularHireConfig.meta.description,
  alternates: { canonical: "/hire-angular-js-developers" },
};

export default function HireAngularJsDevelopersPage() {
  const { ctas } = angularHireConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-white selection:bg-primary/30">
      <AngularHireHero />
      <AngularHireLogos />
      <AngularHireAbout />
      <AngularHirePortfolio />
      <AngularHireTechnologies />
      <ServiceCta
        title={ctas.afterTechnologies.title}
        subtitle={ctas.afterTechnologies.subtitle}
        primaryLabel={ctas.afterTechnologies.primaryLabel}
        motionStyle="glow"
      />
      <AngularHireHiringModels />
      <AngularHireProcess />
      <AngularHirePricing />
      <ServiceCta
        title={ctas.afterPricing.title}
        subtitle={ctas.afterPricing.subtitle}
        primaryLabel={ctas.afterPricing.primaryLabel}
        motionStyle="pulse"
      />
      <AngularHireTestimonials />
      <AngularHireRelated />
      <AngularHireFaq />
      <CompanyLocations />
    </main>
  );
}
