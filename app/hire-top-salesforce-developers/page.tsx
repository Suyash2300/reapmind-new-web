import { Metadata } from "next";
import { salesforceHireConfig } from "@/lib/salesforce-hire-config";
import { SalesforceHireHero } from "@/components/salesforce-hire/salesforce-hire-hero";
import { SalesforceHireLogos } from "@/components/salesforce-hire/salesforce-hire-logos";
import { SalesforceHireAbout } from "@/components/salesforce-hire/salesforce-hire-about";
import { SalesforceHirePortfolio } from "@/components/salesforce-hire/salesforce-hire-portfolio";
import { SalesforceHireTechnologies } from "@/components/salesforce-hire/salesforce-hire-technologies";
import { SalesforceHireHiringModels } from "@/components/salesforce-hire/salesforce-hire-hiring-models";
import { SalesforceHireProcess } from "@/components/salesforce-hire/salesforce-hire-process";
import { SalesforceHirePricing } from "@/components/salesforce-hire/salesforce-hire-pricing";
import { SalesforceHireTestimonials } from "@/components/salesforce-hire/salesforce-hire-testimonials";
import { SalesforceHireRelated } from "@/components/salesforce-hire/salesforce-hire-related";
import { SalesforceHireFaq } from "@/components/salesforce-hire/salesforce-hire-faq";
import { ServiceCta } from "@/components/shared/service-cta";
import { CompanyLocations } from "@/components/company/company-locations";

export const metadata: Metadata = {
  title: salesforceHireConfig.meta.title,
  description: salesforceHireConfig.meta.description,
  alternates: { canonical: "/hire-top-salesforce-developers" },
};

export default function HireTopSalesforceDevelopersPage() {
  const { ctas } = salesforceHireConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-white selection:bg-primary/30">
      <SalesforceHireHero />
      <SalesforceHireLogos />
      <SalesforceHireAbout />
      <SalesforceHirePortfolio />
      <SalesforceHireTechnologies />
      <ServiceCta
        title={ctas.afterTechnologies.title}
        subtitle={ctas.afterTechnologies.subtitle}
        primaryLabel={ctas.afterTechnologies.primaryLabel}
        motionStyle="spotlight"
      />
      <SalesforceHireHiringModels />
      <SalesforceHireProcess />
      <SalesforceHirePricing />
      <ServiceCta
        title={ctas.afterPricing.title}
        subtitle={ctas.afterPricing.subtitle}
        primaryLabel={ctas.afterPricing.primaryLabel}
        motionStyle="rise"
      />
      <SalesforceHireTestimonials />
      <SalesforceHireRelated />
      <SalesforceHireFaq />
      <CompanyLocations />
    </main>
  );
}
