import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { FmAdvantages } from "@/components/freelance-marketplace/fm-advantages";
import { FmFeatures } from "@/components/freelance-marketplace/fm-features";
import { FmHero } from "@/components/freelance-marketplace/fm-hero";
import { FmPartnerBento } from "@/components/freelance-marketplace/fm-partner-bento";
import { FmPortfolioCta } from "@/components/freelance-marketplace/fm-portfolio-cta";
import { FmServicesIntro } from "@/components/freelance-marketplace/fm-services-intro";
import { FmWhyReapmind } from "@/components/freelance-marketplace/fm-why-reapmind";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { freelanceMarketplaceConfig } from "@/lib/freelance-marketplace-config";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";

export const metadata: Metadata = {
  title: freelanceMarketplaceConfig.meta.title,
  description: freelanceMarketplaceConfig.meta.description,
  alternates: {
    canonical: freelanceMarketplaceConfig.meta.canonical,
  },
  openGraph: {
    title: freelanceMarketplaceConfig.meta.title,
    description: freelanceMarketplaceConfig.meta.description,
    url: freelanceMarketplaceConfig.meta.canonical,
    type: "website",
  },
};

export default function FreelanceMarketplacePage() {
  const { clientSuccess, process, consultation } = freelanceMarketplaceConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <FmHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <FmServicesIntro />
      <FmPartnerBento />
      <HomePortfolioSection />
      <FmPortfolioCta />
      <FmAdvantages />
      <FmFeatures />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <FmWhyReapmind />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
