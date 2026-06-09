import { Metadata } from "next";
import { kotlinHireConfig } from "@/lib/kotlin-hire-config";
import { KotlinHireHero } from "@/components/kotlin-hire/kotlin-hire-hero";
import { KotlinHireLogos } from "@/components/kotlin-hire/kotlin-hire-logos";
import { KotlinHireAbout } from "@/components/kotlin-hire/kotlin-hire-about";
import { KotlinHirePortfolio } from "@/components/kotlin-hire/kotlin-hire-portfolio";
import { KotlinHireTechnologies } from "@/components/kotlin-hire/kotlin-hire-technologies";
import { KotlinHireHiringModels } from "@/components/kotlin-hire/kotlin-hire-hiring-models";
import { KotlinHireProcess } from "@/components/kotlin-hire/kotlin-hire-process";
import { KotlinHirePricing } from "@/components/kotlin-hire/kotlin-hire-pricing";
import { KotlinHireTestimonials } from "@/components/kotlin-hire/kotlin-hire-testimonials";
import { KotlinHireRelated } from "@/components/kotlin-hire/kotlin-hire-related";
import { KotlinHireFaq } from "@/components/kotlin-hire/kotlin-hire-faq";
import { ServiceCta } from "@/components/shared/service-cta";
import { CompanyLocations } from "@/components/company/company-locations";

export const metadata: Metadata = {
  title: kotlinHireConfig.meta.title,
  description: kotlinHireConfig.meta.description,
  alternates: { canonical: "/hire-top-kotlin-developers" },
};

export default function HireTopKotlinDevelopersPage() {
  const { ctas } = kotlinHireConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-white selection:bg-primary/30">
      <KotlinHireHero />
      <KotlinHireLogos />
      <KotlinHireAbout />
      <KotlinHirePortfolio />
      <KotlinHireTechnologies />
      <ServiceCta
        title={ctas.afterTechnologies.title}
        subtitle={ctas.afterTechnologies.subtitle}
        primaryLabel={ctas.afterTechnologies.primaryLabel}
        motionStyle="spotlight"
      />
      <KotlinHireHiringModels />
      <KotlinHireProcess />
      <KotlinHirePricing />
      <ServiceCta
        title={ctas.afterPricing.title}
        subtitle={ctas.afterPricing.subtitle}
        primaryLabel={ctas.afterPricing.primaryLabel}
        motionStyle="slide"
      />
      <KotlinHireTestimonials />
      <KotlinHireRelated />
      <KotlinHireFaq />
      <CompanyLocations />
    </main>
  );
}
