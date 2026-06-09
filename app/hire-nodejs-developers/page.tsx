import { Metadata } from "next";
import { nodejsHireConfig } from "@/lib/nodejs-hire-config";
import { NodejsHireHero } from "@/components/nodejs-hire/nodejs-hire-hero";
import { NodejsHireLogos } from "@/components/nodejs-hire/nodejs-hire-logos";
import { NodejsHireAbout } from "@/components/nodejs-hire/nodejs-hire-about";
import { NodejsHirePortfolio } from "@/components/nodejs-hire/nodejs-hire-portfolio";
import { NodejsHireTechnologies } from "@/components/nodejs-hire/nodejs-hire-technologies";
import { NodejsHireHiringModels } from "@/components/nodejs-hire/nodejs-hire-hiring-models";
import { NodejsHireProcess } from "@/components/nodejs-hire/nodejs-hire-process";
import { NodejsHirePricing } from "@/components/nodejs-hire/nodejs-hire-pricing";
import { NodejsHireTestimonials } from "@/components/nodejs-hire/nodejs-hire-testimonials";
import { NodejsHireRelated } from "@/components/nodejs-hire/nodejs-hire-related";
import { NodejsHireFaq } from "@/components/nodejs-hire/nodejs-hire-faq";
import { ServiceCta } from "@/components/shared/service-cta";
import { CompanyLocations } from "@/components/company/company-locations";

export const metadata: Metadata = {
  title: nodejsHireConfig.meta.title,
  description: nodejsHireConfig.meta.description,
  alternates: { canonical: "/hire-nodejs-developers" },
};

export default function HireNodejsDevelopersPage() {
  const { ctas } = nodejsHireConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-white selection:bg-primary/30">
      <NodejsHireHero />
      <NodejsHireLogos />
      <NodejsHireAbout />
      <NodejsHirePortfolio />
      <NodejsHireTechnologies />
      <ServiceCta
        title={ctas.afterTechnologies.title}
        subtitle={ctas.afterTechnologies.subtitle}
        primaryLabel={ctas.afterTechnologies.primaryLabel}
        motionStyle="glow"
      />
      <NodejsHireHiringModels />
      <NodejsHireProcess />
      <NodejsHirePricing />
      <ServiceCta
        title={ctas.afterPricing.title}
        subtitle={ctas.afterPricing.subtitle}
        primaryLabel={ctas.afterPricing.primaryLabel}
        motionStyle="rise"
      />
      <NodejsHireTestimonials />
      <NodejsHireRelated />
      <NodejsHireFaq />
      <CompanyLocations />
    </main>
  );
}
