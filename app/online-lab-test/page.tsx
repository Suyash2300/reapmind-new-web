import { Metadata } from "next";
import { oltConfig } from "@/lib/olt-config";
import { OltHero } from "@/components/olt/olt-hero";
import { OltClientLogos } from "@/components/olt/olt-client-logos";
import { OltFeatures } from "@/components/olt/olt-features";
import { OltInterfaces } from "@/components/olt/olt-interfaces";
import { OltPortfolio } from "@/components/olt/olt-portfolio";
import { ServiceCta } from "@/components/shared/service-cta";
import { OltProcess } from "@/components/olt/olt-process";
import { OltSectors } from "@/components/olt/olt-sectors";
import { OltTestimonials } from "@/components/olt/olt-testimonials";
import { OltInsights } from "@/components/olt/olt-insights";
import { OltConsultation } from "@/components/olt/olt-consultation";
import { CompanyLocations } from "@/components/company/company-locations";

export const metadata: Metadata = {
  title: oltConfig.meta.title,
  description: oltConfig.meta.description,
  alternates: {
    canonical: oltConfig.meta.canonicalPath,
  },
};

export default function OnlineLabTestPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-white selection:bg-primary/30">
      <OltHero />
      <OltClientLogos />
      <OltFeatures />
      <OltInterfaces />
      <OltPortfolio />
      <ServiceCta
        title={oltConfig.ctas.afterPortfolio.title}
        primaryLabel={oltConfig.ctas.afterPortfolio.primaryLabel}
        motionStyle="glow"
      />
      <OltProcess />
      <ServiceCta
        title={oltConfig.ctas.afterProcess.title}
        primaryLabel={oltConfig.ctas.afterProcess.primaryLabel}
        motionStyle="slide"
      />
      <OltSectors />
      <OltTestimonials />
      <OltInsights />
      <OltConsultation />
      <CompanyLocations />
    </main>
  );
}
