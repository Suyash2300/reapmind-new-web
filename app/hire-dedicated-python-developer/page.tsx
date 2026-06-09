import { Metadata } from "next";
import { pythonHireConfig } from "@/lib/python-hire-config";
import { PythonHireHero } from "@/components/python-hire/python-hire-hero";
import { PythonHireLogos } from "@/components/python-hire/python-hire-logos";
import { PythonHireAbout } from "@/components/python-hire/python-hire-about";
import { PythonHirePortfolio } from "@/components/python-hire/python-hire-portfolio";
import { PythonHireTechnologies } from "@/components/python-hire/python-hire-technologies";
import { PythonHireHiringModels } from "@/components/python-hire/python-hire-hiring-models";
import { PythonHireProcess } from "@/components/python-hire/python-hire-process";
import { PythonHirePricing } from "@/components/python-hire/python-hire-pricing";
import { PythonHireTestimonials } from "@/components/python-hire/python-hire-testimonials";
import { PythonHireRelated } from "@/components/python-hire/python-hire-related";
import { PythonHireFaq } from "@/components/python-hire/python-hire-faq";
import { ServiceCta } from "@/components/shared/service-cta";
import { CompanyLocations } from "@/components/company/company-locations";

export const metadata: Metadata = {
  title: pythonHireConfig.meta.title,
  description: pythonHireConfig.meta.description,
  alternates: { canonical: "/hire-dedicated-python-developer" },
};

export default function HireDedicatedPythonDeveloperPage() {
  const { ctas } = pythonHireConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-white selection:bg-primary/30">
      <PythonHireHero />
      <PythonHireLogos />
      <PythonHireAbout />
      <PythonHirePortfolio />
      <PythonHireTechnologies />
      <ServiceCta
        title={ctas.afterTechnologies.title}
        subtitle={ctas.afterTechnologies.subtitle}
        primaryLabel={ctas.afterTechnologies.primaryLabel}
        motionStyle="glow"
      />
      <PythonHireHiringModels />
      <PythonHireProcess />
      <PythonHirePricing />
      <ServiceCta
        title={ctas.afterPricing.title}
        subtitle={ctas.afterPricing.subtitle}
        primaryLabel={ctas.afterPricing.primaryLabel}
        motionStyle="pulse"
      />
      <PythonHireTestimonials />
      <PythonHireRelated />
      <PythonHireFaq />
      <CompanyLocations />
    </main>
  );
}
