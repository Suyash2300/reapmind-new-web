import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { AibHero } from "@/components/ai-business/aib-hero";
import { AibHighlights } from "@/components/ai-business/aib-highlights";
import { AibPartnerPillars } from "@/components/ai-business/aib-partner-pillars";
import { AibPortfolioCta } from "@/components/ai-business/aib-portfolio-cta";
import { AibProcessCta } from "@/components/ai-business/aib-process-cta";
import { AibSectorCards } from "@/components/ai-business/aib-sector-cards";
import { AibServicesIntro } from "@/components/ai-business/aib-services-intro";
import { AibWhyMobile } from "@/components/ai-business/aib-why-mobile";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { aiBusinessConfig } from "@/lib/ai-business-config";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";

export const metadata: Metadata = {
  title: aiBusinessConfig.meta.title,
  description: aiBusinessConfig.meta.description,
  alternates: {
    canonical: aiBusinessConfig.meta.canonical,
  },
  openGraph: {
    title: aiBusinessConfig.meta.title,
    description: aiBusinessConfig.meta.description,
    url: aiBusinessConfig.meta.canonical,
    type: "website",
  },
};

export default function ArtificialIntelligenceFutureOfYourBusinessPage() {
  const { clientSuccess, process, consultation } = aiBusinessConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <AibHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <AibServicesIntro />
      <AibPartnerPillars />
      <HomePortfolioSection />
      <AibPortfolioCta />
      <AibHighlights />
      <AibSectorCards />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <AibProcessCta />
      <AmIndustryRadar />
      <AibWhyMobile />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
