import { Metadata } from "next";
import { iosHireConfig } from "@/lib/ios-hire-config";
import { IosHireHero } from "@/components/ios-hire/ios-hire-hero";
import { IosHireLogos } from "@/components/ios-hire/ios-hire-logos";
import { IosHireAbout } from "@/components/ios-hire/ios-hire-about";
import { IosHirePortfolio } from "@/components/ios-hire/ios-hire-portfolio";
import { IosHireTechnologies } from "@/components/ios-hire/ios-hire-technologies";
import { IosHireHiringModels } from "@/components/ios-hire/ios-hire-hiring-models";
import { IosHireProcess } from "@/components/ios-hire/ios-hire-process";
import { IosHirePricing } from "@/components/ios-hire/ios-hire-pricing";
import { IosHireTestimonials } from "@/components/ios-hire/ios-hire-testimonials";
import { IosHireRelated } from "@/components/ios-hire/ios-hire-related";
import { IosHireFaq } from "@/components/ios-hire/ios-hire-faq";
import { ServiceCta } from "@/components/shared/service-cta";
import { CompanyLocations } from "@/components/company/company-locations";

export const metadata: Metadata = {
  title: iosHireConfig.meta.title,
  description: iosHireConfig.meta.description,
  alternates: { canonical: "/hire-the-best-ios-developers" },
};

export default function HireTheBestIosDevelopersPage() {
  const { ctas } = iosHireConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-white selection:bg-primary/30">
      <IosHireHero />
      <IosHireLogos />
      <IosHireAbout />
      <IosHirePortfolio />
      <IosHireTechnologies />
      <ServiceCta
        title={ctas.afterTechnologies.title}
        subtitle={ctas.afterTechnologies.subtitle}
        primaryLabel={ctas.afterTechnologies.primaryLabel}
        motionStyle="rise"
      />
      <IosHireHiringModels />
      <IosHireProcess />
      <IosHirePricing />
      <ServiceCta
        title={ctas.afterPricing.title}
        subtitle={ctas.afterPricing.subtitle}
        primaryLabel={ctas.afterPricing.primaryLabel}
        motionStyle="spotlight"
      />
      <IosHireTestimonials />
      <IosHireRelated />
      <IosHireFaq />
      <CompanyLocations />
    </main>
  );
}
