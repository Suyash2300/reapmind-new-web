import { Metadata } from "next";
import { androidHireConfig } from "@/lib/android-hire-config";
import { AndroidHireHero } from "@/components/android-hire/android-hire-hero";
import { AndroidHireLogos } from "@/components/android-hire/android-hire-logos";
import { AndroidHireAbout } from "@/components/android-hire/android-hire-about";
import { AndroidHirePortfolio } from "@/components/android-hire/android-hire-portfolio";
import { AndroidHireTechnologies } from "@/components/android-hire/android-hire-technologies";
import { AndroidHireHiringModels } from "@/components/android-hire/android-hire-hiring-models";
import { AndroidHireProcess } from "@/components/android-hire/android-hire-process";
import { AndroidHirePricing } from "@/components/android-hire/android-hire-pricing";
import { AndroidHireTestimonials } from "@/components/android-hire/android-hire-testimonials";
import { AndroidHireRelated } from "@/components/android-hire/android-hire-related";
import { AndroidHireFaq } from "@/components/android-hire/android-hire-faq";
import { ServiceCta } from "@/components/shared/service-cta";
import { CompanyLocations } from "@/components/company/company-locations";

export const metadata: Metadata = {
  title: androidHireConfig.meta.title,
  description: androidHireConfig.meta.description,
  alternates: { canonical: "/hire-top-android-developers" },
};

export default function HireTopAndroidDevelopersPage() {
  const { ctas } = androidHireConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-white selection:bg-primary/30">
      <AndroidHireHero />
      <AndroidHireLogos />
      <AndroidHireAbout />
      <AndroidHirePortfolio />
      <AndroidHireTechnologies />
      <ServiceCta
        title={ctas.afterTechnologies.title}
        subtitle={ctas.afterTechnologies.subtitle}
        primaryLabel={ctas.afterTechnologies.primaryLabel}
        motionStyle="spotlight"
      />
      <AndroidHireHiringModels />
      <AndroidHireProcess />
      <AndroidHirePricing />
      <ServiceCta
        title={ctas.afterPricing.title}
        subtitle={ctas.afterPricing.subtitle}
        primaryLabel={ctas.afterPricing.primaryLabel}
        motionStyle="pulse"
      />
      <AndroidHireTestimonials />
      <AndroidHireRelated />
      <AndroidHireFaq />
      <CompanyLocations />
    </main>
  );
}
