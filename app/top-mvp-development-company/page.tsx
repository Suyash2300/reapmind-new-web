import { Metadata } from "next";
import { mvpConfig } from "@/lib/mvp-config";
import { MvpHero } from "@/components/mvp/mvp-hero";
import { MvpClientLogos } from "@/components/mvp/mvp-client-logos";
import { MvpWinning } from "@/components/mvp/mvp-winning";
import { MvpServices } from "@/components/mvp/mvp-services";
import { MvpPortfolio } from "@/components/mvp/mvp-portfolio";
import { ServiceCta } from "@/components/shared/service-cta";
import { MvpProcess } from "@/components/mvp/mvp-process";
import { MvpBenefits } from "@/components/mvp/mvp-benefits";
import { MvpTechStack } from "@/components/mvp/mvp-tech-stack";
import { MvpSectors } from "@/components/mvp/mvp-sectors";
import { MvpWhyUs } from "@/components/mvp/mvp-why-us";
import { MvpTestimonials } from "@/components/mvp/mvp-testimonials";
import { MvpInsights } from "@/components/mvp/mvp-insights";
import { MvpFaq } from "@/components/mvp/mvp-faq";
import { CompanyLocations } from "@/components/company/company-locations";

export const metadata: Metadata = {
  title: mvpConfig.meta.title,
  description: mvpConfig.meta.description,
  alternates: {
    canonical: "/top-mvp-development-company",
  },
};

export default function MvpDevelopmentPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-white selection:bg-primary/30">
      <MvpHero />
      <MvpClientLogos />
      <MvpWinning />
      <MvpServices />
      <MvpPortfolio />
      <ServiceCta
        title={mvpConfig.ctas.afterPortfolio.title}
        primaryLabel={mvpConfig.ctas.afterPortfolio.primaryLabel}
        motionStyle="zoom"
      />
      <MvpProcess />
      <MvpBenefits />
      <ServiceCta
        title={mvpConfig.ctas.afterBenefits.title}
        primaryLabel={mvpConfig.ctas.afterBenefits.primaryLabel}
        motionStyle="slide"
      />
      <MvpTechStack />
      <MvpSectors />
      <MvpWhyUs />
      <ServiceCta
        title={mvpConfig.ctas.afterWhyUs.title}
        primaryLabel={mvpConfig.ctas.afterWhyUs.primaryLabel}
        motionStyle="glow"
      />
      <MvpTestimonials />
      <MvpInsights />
      <MvpFaq />
      <CompanyLocations />
    </main>
  );
}
