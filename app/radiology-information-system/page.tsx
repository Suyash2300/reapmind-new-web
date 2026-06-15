import { Metadata } from "next";
import { risConfig } from "@/lib/ris-config";
import { RisHero } from "@/components/ris/ris-hero";
import { RisClientLogos } from "@/components/ris/ris-client-logos";
import { RisHowItWorks } from "@/components/ris/ris-how-it-works";
import { RisWorkflow } from "@/components/ris/ris-workflow";
import { RisPortfolio } from "@/components/ris/ris-portfolio";
import { ServiceCta } from "@/components/shared/service-cta";
import { RisAdvantages } from "@/components/ris/ris-advantages";
import { RisProcess } from "@/components/ris/ris-process";
import { RisSectors } from "@/components/ris/ris-sectors";
import { RisWhyUs } from "@/components/ris/ris-why-us";
import { RisTestimonials } from "@/components/ris/ris-testimonials";
import { RisInsights } from "@/components/ris/ris-insights";
import { RisConsultation } from "@/components/ris/ris-consultation";
import { CompanyLocations } from "@/components/company/company-locations";

export const metadata: Metadata = {
  title: risConfig.meta.title,
  description: risConfig.meta.description,
  alternates: {
    canonical: risConfig.meta.canonicalPath,
  },
};

export default function RadiologyInformationSystemPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-white selection:bg-primary/30">
      <RisHero />
      <RisClientLogos />
      <RisHowItWorks />
      <RisWorkflow />
      <RisPortfolio />
      <ServiceCta
        title={risConfig.ctas.afterPortfolio.title}
        primaryLabel={risConfig.ctas.afterPortfolio.primaryLabel}
        motionStyle="spotlight"
      />
      <RisAdvantages />
      <RisProcess />
      <ServiceCta
        title={risConfig.ctas.afterProcess.title}
        primaryLabel={risConfig.ctas.afterProcess.primaryLabel}
        motionStyle="pulse"
      />
      <RisSectors />
      <ServiceCta
        title={risConfig.ctas.afterSectors.title}
        primaryLabel={risConfig.ctas.afterSectors.primaryLabel}
        motionStyle="rise"
      />
      <RisWhyUs />
      <RisTestimonials />
      <RisInsights />
      <RisConsultation />
      <CompanyLocations />
    </main>
  );
}
