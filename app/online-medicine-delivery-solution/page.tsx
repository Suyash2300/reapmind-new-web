import { Metadata } from "next";
import { omdConfig } from "@/lib/omd-config";
import { OmdHero } from "@/components/omd/omd-hero";
import { OmdClientLogos } from "@/components/omd/omd-client-logos";
import { OmdFeatures } from "@/components/omd/omd-features";
import { OmdManagement } from "@/components/omd/omd-management";
import { OmdPortfolio } from "@/components/omd/omd-portfolio";
import { ServiceCta } from "@/components/shared/service-cta";
import { OmdCustomer } from "@/components/omd/omd-customer";
import { OmdProcess } from "@/components/omd/omd-process";
import { OmdSectors } from "@/components/omd/omd-sectors";
import { OmdWhyUs } from "@/components/omd/omd-why-us";
import { OmdInsights } from "@/components/omd/omd-insights";
import { OmdConsultation } from "@/components/omd/omd-consultation";
import { CompanyLocations } from "@/components/company/company-locations";

export const metadata: Metadata = {
  title: omdConfig.meta.title,
  description: omdConfig.meta.description,
  alternates: {
    canonical: omdConfig.meta.canonicalPath,
  },
};

export default function OnlineMedicineDeliverySolutionPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-white selection:bg-primary/30">
      <OmdHero />
      <OmdClientLogos />
      <OmdFeatures />
      <OmdManagement />
      <OmdPortfolio />
      <ServiceCta
        title={omdConfig.ctas.afterPortfolio.title}
        primaryLabel={omdConfig.ctas.afterPortfolio.primaryLabel}
        motionStyle="zoom"
      />
      <OmdCustomer />
      <OmdProcess />
      <ServiceCta
        title={omdConfig.ctas.afterProcess.title}
        primaryLabel={omdConfig.ctas.afterProcess.primaryLabel}
        motionStyle="slide"
      />
      <OmdSectors />
      <OmdWhyUs />
      <ServiceCta
        title={omdConfig.ctas.afterWhyUs.title}
        primaryLabel={omdConfig.ctas.afterWhyUs.primaryLabel}
        motionStyle="glow"
      />
      <OmdInsights />
      <OmdConsultation />
      <CompanyLocations />
    </main>
  );
}
