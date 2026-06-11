import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { SfxCoreProducts } from "@/components/salesforce-development/sfx-core-products";
import { SfxHero } from "@/components/salesforce-development/sfx-hero";
import { SfxIndustries } from "@/components/salesforce-development/sfx-industries";
import { SfxPortfolioCta } from "@/components/salesforce-development/sfx-portfolio-cta";
import { SfxProcessCta } from "@/components/salesforce-development/sfx-process-cta";
import { SfxServices } from "@/components/salesforce-development/sfx-services";
import { SfxTechStack } from "@/components/salesforce-development/sfx-tech-stack";
import { SfxUnboxIntro } from "@/components/salesforce-development/sfx-unbox-intro";
import { SfxWhyReapmind } from "@/components/salesforce-development/sfx-why-reapmind";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";
import { salesforceDevelopmentConfig } from "@/lib/salesforce-development-config";

export const metadata: Metadata = {
  title: salesforceDevelopmentConfig.meta.title,
  description: salesforceDevelopmentConfig.meta.description,
  alternates: {
    canonical: salesforceDevelopmentConfig.meta.canonical,
  },
  openGraph: {
    title: salesforceDevelopmentConfig.meta.title,
    description: salesforceDevelopmentConfig.meta.description,
    url: salesforceDevelopmentConfig.meta.canonical,
    type: "website",
  },
};

export default function TopSalesforceDevelopmentCompanyInMumbaiPage() {
  const { clientSuccess, process, consultation, faqs } = salesforceDevelopmentConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <SfxHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <SfxUnboxIntro />
      <SfxCoreProducts />
      <HomePortfolioSection />
      <SfxPortfolioCta />
      <SfxServices />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <SfxProcessCta />
      <SfxIndustries />
      <AmIndustryRadar />
      <SfxWhyReapmind />
      <SfxTechStack />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <ServiceFaqSection faqs={[...faqs]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
