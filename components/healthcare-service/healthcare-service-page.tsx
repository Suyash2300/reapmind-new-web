import { CompanyLocations } from "@/components/company/company-locations";
import { ServiceCta } from "@/components/shared/service-cta";
import type { HealthcareServiceConfig } from "@/lib/healthcare-service-types";
import { HealthcareServiceProvider } from "./healthcare-service-context";
import { HsBenefits } from "./hs-benefits";
import { HsClientLogos } from "./hs-client-logos";
import { HsConsultation } from "./hs-consultation";
import { HsFeatures } from "./hs-features";
import { HsHero } from "./hs-hero";
import { HsInsights } from "./hs-insights";
import { HsInterfaces } from "./hs-interfaces";
import { HsPortfolio } from "./hs-portfolio";
import { HsProcess } from "./hs-process";
import { HsSectors } from "./hs-sectors";
import { HsTestimonials } from "./hs-testimonials";
import { HsWhyUs } from "./hs-why-us";

export function HealthcareServicePage({ config }: { config: HealthcareServiceConfig }) {
  return (
    <HealthcareServiceProvider config={config}>
      <main className="flex flex-col overflow-x-hidden bg-black text-white selection:bg-primary/30">
        <HsHero />
        <HsClientLogos />
        <HsFeatures />
        <HsInterfaces />
        <HsPortfolio />
        <ServiceCta
          title={config.ctas.afterPortfolio.title}
          primaryLabel={config.ctas.afterPortfolio.primaryLabel}
          motionStyle="glow"
        />
        {config.benefits.hidden ? null : <HsBenefits />}
        <HsProcess />
        <ServiceCta
          title={config.ctas.afterProcess.title}
          primaryLabel={config.ctas.afterProcess.primaryLabel}
          motionStyle="slide"
        />
        <HsSectors />
        <HsWhyUs />
        <ServiceCta
          title={config.ctas.afterWhyUs.title}
          primaryLabel={config.ctas.afterWhyUs.primaryLabel}
          motionStyle="zoom"
        />
        <HsTestimonials />
        <HsInsights />
        <HsConsultation />
        <CompanyLocations />
      </main>
    </HealthcareServiceProvider>
  );
}
