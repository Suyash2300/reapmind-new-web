import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { B2mBusinessBenefits } from "@/components/b2b-marketplace/b2m-business-benefits";
import { B2mCapabilities } from "@/components/b2b-marketplace/b2m-capabilities";
import { B2mHero } from "@/components/b2b-marketplace/b2m-hero";
import { B2mPartnerPillars } from "@/components/b2b-marketplace/b2m-partner-pillars";
import { B2mPortfolioCta } from "@/components/b2b-marketplace/b2m-portfolio-cta";
import { B2mServicesIntro } from "@/components/b2b-marketplace/b2m-services-intro";
import { B2mWhyReapmind } from "@/components/b2b-marketplace/b2m-why-reapmind";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { b2bMarketplaceConfig } from "@/lib/b2b-marketplace-config";
import { homeClients } from "@/lib/home-sections";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";

export const metadata: Metadata = {
  title: b2bMarketplaceConfig.meta.title,
  description: b2bMarketplaceConfig.meta.description,
  alternates: {
    canonical: b2bMarketplaceConfig.meta.canonical,
  },
  openGraph: {
    title: b2bMarketplaceConfig.meta.title,
    description: b2bMarketplaceConfig.meta.description,
    url: b2bMarketplaceConfig.meta.canonical,
    type: "website",
  },
};

export default function B2bMarketplacePage() {
  const { clientSuccess, process, consultation } = b2bMarketplaceConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <B2mHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <B2mServicesIntro />
      <B2mPartnerPillars />
      <HomePortfolioSection />
      <B2mPortfolioCta />
      <B2mBusinessBenefits />
      <B2mCapabilities />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <AmIndustryRadar />
      <B2mWhyReapmind />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
