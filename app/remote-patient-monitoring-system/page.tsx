import { Metadata } from "next";
import { CompanyLocations } from "@/components/company/company-locations";
import { RpmBenefits } from "@/components/rpm/rpm-benefits";
import { RpmClientLogos } from "@/components/rpm/rpm-client-logos";
import { RpmConsultation } from "@/components/rpm/rpm-consultation";
import { RpmFeatures } from "@/components/rpm/rpm-features";
import { RpmHero } from "@/components/rpm/rpm-hero";
import { RpmInsights } from "@/components/rpm/rpm-insights";
import { RpmInterfaces } from "@/components/rpm/rpm-interfaces";
import { RpmPortfolio } from "@/components/rpm/rpm-portfolio";
import { RpmProcess } from "@/components/rpm/rpm-process";
import { RpmSectors } from "@/components/rpm/rpm-sectors";
import { RpmTestimonials } from "@/components/rpm/rpm-testimonials";
import { RpmWhyUs } from "@/components/rpm/rpm-why-us";
import { ServiceCta } from "@/components/shared/service-cta";
import { rpmConfig } from "@/lib/rpm-config";

export const metadata: Metadata = {
  title: rpmConfig.meta.title,
  description: rpmConfig.meta.description,
  alternates: {
    canonical: rpmConfig.meta.canonicalPath,
  },
};

export default function RemotePatientMonitoringPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-white selection:bg-primary/30">
      <RpmHero />
      <RpmClientLogos />
      <RpmFeatures />
      <RpmInterfaces />
      <RpmPortfolio />
      <ServiceCta
        title={rpmConfig.ctas.afterPortfolio.title}
        primaryLabel={rpmConfig.ctas.afterPortfolio.primaryLabel}
        motionStyle="glow"
      />
      <RpmBenefits />
      <RpmProcess />
      <ServiceCta
        title={rpmConfig.ctas.afterProcess.title}
        primaryLabel={rpmConfig.ctas.afterProcess.primaryLabel}
        motionStyle="slide"
      />
      <RpmSectors />
      <RpmWhyUs />
      <ServiceCta
        title={rpmConfig.ctas.afterWhyUs.title}
        primaryLabel={rpmConfig.ctas.afterWhyUs.primaryLabel}
        motionStyle="zoom"
      />
      <RpmTestimonials />
      <RpmInsights />
      <RpmConsultation />
      <CompanyLocations />
    </main>
  );
}
