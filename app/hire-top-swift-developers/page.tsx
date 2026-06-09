import { Metadata } from "next";
import { swiftHireConfig } from "@/lib/swift-hire-config";
import { SwiftHireHero } from "@/components/swift-hire/swift-hire-hero";
import { SwiftHireLogos } from "@/components/swift-hire/swift-hire-logos";
import { SwiftHireAbout } from "@/components/swift-hire/swift-hire-about";
import { SwiftHirePortfolio } from "@/components/swift-hire/swift-hire-portfolio";
import { SwiftHireTechnologies } from "@/components/swift-hire/swift-hire-technologies";
import { SwiftHireHiringModels } from "@/components/swift-hire/swift-hire-hiring-models";
import { SwiftHireProcess } from "@/components/swift-hire/swift-hire-process";
import { SwiftHirePricing } from "@/components/swift-hire/swift-hire-pricing";
import { SwiftHireTestimonials } from "@/components/swift-hire/swift-hire-testimonials";
import { SwiftHireRelated } from "@/components/swift-hire/swift-hire-related";
import { SwiftHireFaq } from "@/components/swift-hire/swift-hire-faq";
import { ServiceCta } from "@/components/shared/service-cta";
import { CompanyLocations } from "@/components/company/company-locations";

export const metadata: Metadata = {
  title: swiftHireConfig.meta.title,
  description: swiftHireConfig.meta.description,
  alternates: { canonical: "/hire-top-swift-developers" },
};

export default function HireTopSwiftDevelopersPage() {
  const { ctas } = swiftHireConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-white selection:bg-primary/30">
      <SwiftHireHero />
      <SwiftHireLogos />
      <SwiftHireAbout />
      <SwiftHirePortfolio />
      <SwiftHireTechnologies />
      <ServiceCta
        title={ctas.afterTechnologies.title}
        subtitle={ctas.afterTechnologies.subtitle}
        primaryLabel={ctas.afterTechnologies.primaryLabel}
        motionStyle="rise"
      />
      <SwiftHireHiringModels />
      <SwiftHireProcess />
      <SwiftHirePricing />
      <ServiceCta
        title={ctas.afterPricing.title}
        subtitle={ctas.afterPricing.subtitle}
        primaryLabel={ctas.afterPricing.primaryLabel}
        motionStyle="zoom"
      />
      <SwiftHireTestimonials />
      <SwiftHireRelated />
      <SwiftHireFaq />
      <CompanyLocations />
    </main>
  );
}
