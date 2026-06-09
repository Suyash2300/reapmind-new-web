import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { OmHero } from "@/components/online-marketplace/om-hero";
import { OmImpact } from "@/components/online-marketplace/om-impact";
import { OmPortfolioCta } from "@/components/online-marketplace/om-portfolio-cta";
import { OmServicesIntro } from "@/components/online-marketplace/om-services-intro";
import { OmTypesShowcase } from "@/components/online-marketplace/om-types-showcase";
import { OmWhyReapmind } from "@/components/online-marketplace/om-why-reapmind";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { onlineMarketplaceConfig } from "@/lib/online-marketplace-config";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";

export const metadata: Metadata = {
  title: onlineMarketplaceConfig.meta.title,
  description: onlineMarketplaceConfig.meta.description,
  alternates: {
    canonical: onlineMarketplaceConfig.meta.canonical,
  },
  openGraph: {
    title: onlineMarketplaceConfig.meta.title,
    description: onlineMarketplaceConfig.meta.description,
    url: onlineMarketplaceConfig.meta.canonical,
    type: "website",
  },
};

export default function OnlineMarketplacePage() {
  const { clientSuccess, process, consultation } = onlineMarketplaceConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <OmHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <OmServicesIntro />
      <OmTypesShowcase />
      <HomePortfolioSection />
      <OmPortfolioCta />
      <OmImpact />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <AmIndustryRadar />
      <OmWhyReapmind />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
