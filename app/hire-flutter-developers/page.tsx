import { Metadata } from "next";
import { flutterHireConfig } from "@/lib/flutter-hire-config";
import { FlutterHireHero } from "@/components/flutter-hire/flutter-hire-hero";
import { FlutterHireLogos } from "@/components/flutter-hire/flutter-hire-logos";
import { FlutterHireAbout } from "@/components/flutter-hire/flutter-hire-about";
import { FlutterHirePortfolio } from "@/components/flutter-hire/flutter-hire-portfolio";
import { FlutterHireTechnologies } from "@/components/flutter-hire/flutter-hire-technologies";
import { FlutterHireHiringModels } from "@/components/flutter-hire/flutter-hire-hiring-models";
import { FlutterHireProcess } from "@/components/flutter-hire/flutter-hire-process";
import { FlutterHirePricing } from "@/components/flutter-hire/flutter-hire-pricing";
import { FlutterHireTestimonials } from "@/components/flutter-hire/flutter-hire-testimonials";
import { FlutterHireRelated } from "@/components/flutter-hire/flutter-hire-related";
import { FlutterHireFaq } from "@/components/flutter-hire/flutter-hire-faq";
import { ServiceCta } from "@/components/shared/service-cta";
import { CompanyLocations } from "@/components/company/company-locations";

export const metadata: Metadata = {
  title: flutterHireConfig.meta.title,
  description: flutterHireConfig.meta.description,
  alternates: { canonical: "/hire-flutter-developers" },
};

export default function HireFlutterDevelopersPage() {
  const { ctas } = flutterHireConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-white selection:bg-primary/30">
      <FlutterHireHero />
      <FlutterHireLogos />
      <FlutterHireAbout />
      <FlutterHirePortfolio />
      <FlutterHireTechnologies />
      <ServiceCta
        title={ctas.afterTechnologies.title}
        subtitle={ctas.afterTechnologies.subtitle}
        primaryLabel={ctas.afterTechnologies.primaryLabel}
        motionStyle="slide"
      />
      <FlutterHireHiringModels />
      <FlutterHireProcess />
      <FlutterHirePricing />
      <ServiceCta
        title={ctas.afterPricing.title}
        subtitle={ctas.afterPricing.subtitle}
        primaryLabel={ctas.afterPricing.primaryLabel}
        motionStyle="spotlight"
      />
      <FlutterHireTestimonials />
      <FlutterHireRelated />
      <FlutterHireFaq />
      <CompanyLocations />
    </main>
  );
}
