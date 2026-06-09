import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { EbsFeatureStack, EbsWhyReapmind } from "@/components/ecommerce-business/ebs-feature-stack";
import { EbsHero } from "@/components/ecommerce-business/ebs-hero";
import { EbsOrbitAdvantages } from "@/components/ecommerce-business/ebs-orbit-advantages";
import { EbsPlatformIntro } from "@/components/ecommerce-business/ebs-platform-intro";
import { EbsPortfolioCta } from "@/components/ecommerce-business/ebs-portfolio-cta";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { ecommerceBusinessConfig } from "@/lib/ecommerce-business-config";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";

export const metadata: Metadata = {
  title: ecommerceBusinessConfig.meta.title,
  description: ecommerceBusinessConfig.meta.description,
  alternates: {
    canonical: ecommerceBusinessConfig.meta.canonical,
  },
  openGraph: {
    title: ecommerceBusinessConfig.meta.title,
    description: ecommerceBusinessConfig.meta.description,
    url: ecommerceBusinessConfig.meta.canonical,
    type: "website",
  },
};

export default function EcommerceBusinessSolutionPage() {
  const { clientSuccess, process, consultation } = ecommerceBusinessConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <EbsHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <EbsPlatformIntro />
      <EbsOrbitAdvantages />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <HomePortfolioSection />
      <EbsPortfolioCta />
      <AmIndustryRadar />
      <EbsWhyReapmind />
      <TestimonialsShowcase title="What clients say about us" />
      <EbsFeatureStack />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
