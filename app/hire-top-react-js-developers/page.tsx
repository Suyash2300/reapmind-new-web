import { Metadata } from "next";
import { reactHireConfig } from "@/lib/react-hire-config";
import { ReactHireHero } from "@/components/react-hire/react-hire-hero";
import { ReactHireLogos } from "@/components/react-hire/react-hire-logos";
import { ReactHireAbout } from "@/components/react-hire/react-hire-about";
import { ReactHirePortfolio } from "@/components/react-hire/react-hire-portfolio";
import { ReactHireTechnologies } from "@/components/react-hire/react-hire-technologies";
import { ReactHireHiringModels } from "@/components/react-hire/react-hire-hiring-models";
import { ReactHireProcess } from "@/components/react-hire/react-hire-process";
import { ReactHirePricing } from "@/components/react-hire/react-hire-pricing";
import { ReactHireTestimonials } from "@/components/react-hire/react-hire-testimonials";
import { ReactHireRelated } from "@/components/react-hire/react-hire-related";
import { ReactHireFaq } from "@/components/react-hire/react-hire-faq";
import { ServiceCta } from "@/components/shared/service-cta";
import { CompanyLocations } from "@/components/company/company-locations";

export const metadata: Metadata = {
  title: reactHireConfig.meta.title,
  description: reactHireConfig.meta.description,
  alternates: { canonical: "/hire-top-react-js-developers" },
};

export default function HireTopReactJsDevelopersPage() {
  const { ctas } = reactHireConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-white selection:bg-primary/30">
      <ReactHireHero />
      <ReactHireLogos />
      <ReactHireAbout />
      <ReactHirePortfolio />
      <ReactHireTechnologies />
      <ServiceCta
        title={ctas.afterTechnologies.title}
        subtitle={ctas.afterTechnologies.subtitle}
        primaryLabel={ctas.afterTechnologies.primaryLabel}
        motionStyle="zoom"
      />
      <ReactHireHiringModels />
      <ReactHireProcess />
      <ReactHirePricing />
      <ServiceCta
        title={ctas.afterPricing.title}
        subtitle={ctas.afterPricing.subtitle}
        primaryLabel={ctas.afterPricing.primaryLabel}
        motionStyle="slide"
      />
      <ReactHireTestimonials />
      <ReactHireRelated />
      <ReactHireFaq />
      <CompanyLocations />
    </main>
  );
}
