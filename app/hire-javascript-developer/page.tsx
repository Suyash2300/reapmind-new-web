import { Metadata } from "next";
import { javascriptHireConfig } from "@/lib/javascript-hire-config";
import { JavascriptHireHero } from "@/components/javascript-hire/javascript-hire-hero";
import { JavascriptHireLogos } from "@/components/javascript-hire/javascript-hire-logos";
import { JavascriptHireAbout } from "@/components/javascript-hire/javascript-hire-about";
import { JavascriptHirePortfolio } from "@/components/javascript-hire/javascript-hire-portfolio";
import { JavascriptHireTechnologies } from "@/components/javascript-hire/javascript-hire-technologies";
import { JavascriptHireHiringModels } from "@/components/javascript-hire/javascript-hire-hiring-models";
import { JavascriptHireProcess } from "@/components/javascript-hire/javascript-hire-process";
import { JavascriptHirePricing } from "@/components/javascript-hire/javascript-hire-pricing";
import { JavascriptHireTestimonials } from "@/components/javascript-hire/javascript-hire-testimonials";
import { JavascriptHireRelated } from "@/components/javascript-hire/javascript-hire-related";
import { JavascriptHireFaq } from "@/components/javascript-hire/javascript-hire-faq";
import { ServiceCta } from "@/components/shared/service-cta";
import { CompanyLocations } from "@/components/company/company-locations";

export const metadata: Metadata = {
  title: javascriptHireConfig.meta.title,
  description: javascriptHireConfig.meta.description,
  alternates: { canonical: "/hire-javascript-developer" },
};

export default function HireJavascriptDeveloperPage() {
  const { ctas } = javascriptHireConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-white selection:bg-primary/30">
      <JavascriptHireHero />
      <JavascriptHireLogos />
      <JavascriptHireAbout />
      <JavascriptHirePortfolio />
      <JavascriptHireTechnologies />
      <ServiceCta
        title={ctas.afterTechnologies.title}
        subtitle={ctas.afterTechnologies.subtitle}
        primaryLabel={ctas.afterTechnologies.primaryLabel}
        motionStyle="rise"
      />
      <JavascriptHireHiringModels />
      <JavascriptHireProcess />
      <JavascriptHirePricing />
      <ServiceCta
        title={ctas.afterPricing.title}
        subtitle={ctas.afterPricing.subtitle}
        primaryLabel={ctas.afterPricing.primaryLabel}
        motionStyle="spotlight"
      />
      <JavascriptHireTestimonials />
      <JavascriptHireRelated />
      <JavascriptHireFaq />
      <CompanyLocations />
    </main>
  );
}
