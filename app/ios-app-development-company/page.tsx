import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { IosBenefitsOfferings } from "@/components/ios-development/ios-benefits-offerings";
import { IosHero } from "@/components/ios-development/ios-hero";
import { IosIndustries } from "@/components/ios-development/ios-industries";
import { IosMidCta } from "@/components/ios-development/ios-mid-cta";
import { IosPlatforms } from "@/components/ios-development/ios-platforms";
import { IosPortfolioCta } from "@/components/ios-development/ios-portfolio-cta";
import { IosProcessCta } from "@/components/ios-development/ios-process-cta";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { IosWhyReapmind } from "@/components/ios-development/ios-why-reapmind";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { iosDevelopmentConfig } from "@/lib/ios-development-config";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";

export const metadata: Metadata = {
  title: iosDevelopmentConfig.meta.title,
  description: iosDevelopmentConfig.meta.description,
  alternates: {
    canonical: iosDevelopmentConfig.meta.canonical,
  },
  openGraph: {
    title: iosDevelopmentConfig.meta.title,
    description: iosDevelopmentConfig.meta.description,
    url: iosDevelopmentConfig.meta.canonical,
    type: "website",
  },
};

export default function IosAppDevelopmentCompanyPage() {
  const { process, consultation } = iosDevelopmentConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <IosHero />
      <IosBenefitsOfferings />
      <IosMidCta />
      <HomePortfolioSection />
      <IosPortfolioCta />
      <IosPlatforms />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <IosProcessCta />
      <IosIndustries />
      <IosWhyReapmind />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
