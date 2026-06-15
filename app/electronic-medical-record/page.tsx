import { Metadata } from "next";
import { emrConfig } from "@/lib/emr-config";
import { EmrHero } from "@/components/emr/emr-hero";
import { EmrClientLogos } from "@/components/emr/emr-client-logos";
import { EmrFeatures } from "@/components/emr/emr-features";
import { EmrServiceHighlights } from "@/components/emr/emr-service-highlights";
import { EmrModules } from "@/components/emr/emr-modules";
import { EmrPortfolio } from "@/components/emr/emr-portfolio";
import { ServiceCta } from "@/components/shared/service-cta";
import { EmrTestimonials } from "@/components/emr/emr-testimonials";
import { EmrProcess } from "@/components/emr/emr-process";
import { EmrValueCards } from "@/components/emr/emr-value-cards";
import { EmrSectors } from "@/components/emr/emr-sectors";
import { EmrWhyUs } from "@/components/emr/emr-why-us";
import { EmrInsights } from "@/components/emr/emr-insights";
import { EmrConsultation } from "@/components/emr/emr-consultation";
import { CompanyLocations } from "@/components/company/company-locations";

export const metadata: Metadata = {
  title: emrConfig.meta.title,
  description: emrConfig.meta.description,
  alternates: {
    canonical: emrConfig.meta.canonicalPath,
  },
};

export default function ElectronicMedicalRecordPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-white selection:bg-primary/30">
      <EmrHero />
      <EmrClientLogos />
      <EmrFeatures />
      <EmrServiceHighlights />
      <EmrModules />
      <EmrPortfolio />
      <ServiceCta
        title={emrConfig.ctas.afterPortfolio.title}
        primaryLabel={emrConfig.ctas.afterPortfolio.primaryLabel}
        motionStyle="rise"
      />
      <EmrTestimonials />
      <EmrProcess />
      <ServiceCta
        title={emrConfig.ctas.afterProcess.title}
        primaryLabel={emrConfig.ctas.afterProcess.primaryLabel}
        motionStyle="spotlight"
      />
      <EmrValueCards />
      <EmrSectors />
      <EmrWhyUs />
      <ServiceCta
        title={emrConfig.ctas.afterWhyUs.title}
        primaryLabel={emrConfig.ctas.afterWhyUs.primaryLabel}
        motionStyle="pulse"
      />
      <EmrInsights />
      <EmrConsultation />
      <CompanyLocations />
    </main>
  );
}
