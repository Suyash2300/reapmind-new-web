import { Metadata } from "next";
import { oamsConfig } from "@/lib/oams-config";
import { OamsHero } from "@/components/oams/oams-hero";
import { OamsClientLogos } from "@/components/oams/oams-client-logos";
import { OamsFeatures } from "@/components/oams/oams-features";
import { OamsFeatureCards } from "@/components/oams/oams-feature-cards";
import { OamsBenefits } from "@/components/oams/oams-benefits";
import { OamsPortfolio } from "@/components/oams/oams-portfolio";
import { ServiceCta } from "@/components/shared/service-cta";
import { OamsTestimonials } from "@/components/oams/oams-testimonials";
import { OamsProcess } from "@/components/oams/oams-process";
import { OamsSectors } from "@/components/oams/oams-sectors";
import { OamsInsights } from "@/components/oams/oams-insights";
import { OamsConsultation } from "@/components/oams/oams-consultation";
import { CompanyLocations } from "@/components/company/company-locations";

export const metadata: Metadata = {
  title: oamsConfig.meta.title,
  description: oamsConfig.meta.description,
  alternates: {
    canonical: oamsConfig.meta.canonicalPath,
  },
};

export default function OnlineAppointmentManagementSystemPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-white selection:bg-primary/30">
      <OamsHero />
      <OamsClientLogos />
      <OamsFeatures />
      <OamsFeatureCards />
      <OamsBenefits />
      <OamsPortfolio />
      <ServiceCta
        title={oamsConfig.ctas.afterPortfolio.title}
        primaryLabel={oamsConfig.ctas.afterPortfolio.primaryLabel}
        motionStyle="glow"
      />
      <OamsTestimonials />
      <OamsProcess />
      <ServiceCta
        title={oamsConfig.ctas.afterProcess.title}
        primaryLabel={oamsConfig.ctas.afterProcess.primaryLabel}
        motionStyle="slide"
      />
      <OamsSectors />
      <ServiceCta
        title={oamsConfig.ctas.afterSectors.title}
        primaryLabel={oamsConfig.ctas.afterSectors.primaryLabel}
        motionStyle="zoom"
      />
      <OamsInsights />
      <OamsConsultation />
      <CompanyLocations />
    </main>
  );
}
