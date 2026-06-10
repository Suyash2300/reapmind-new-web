import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { ReaApplications } from "@/components/real-estate/rea-applications";
import { ReaDevelopmentProcess } from "@/components/real-estate/rea-development-process";
import { ReaEngagement } from "@/components/real-estate/rea-engagement";
import { ReaHero } from "@/components/real-estate/rea-hero";
import { ReaPortfolioCta } from "@/components/real-estate/rea-portfolio-cta";
import { ReaTechSolution } from "@/components/real-estate/rea-tech-solution";
import { ReaWhyReapmind } from "@/components/real-estate/rea-why-reapmind";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";
import { realEstateConfig } from "@/lib/real-estate-config";

export const metadata: Metadata = {
  title: realEstateConfig.meta.title,
  description: realEstateConfig.meta.description,
  alternates: {
    canonical: realEstateConfig.meta.canonical,
  },
  openGraph: {
    title: realEstateConfig.meta.title,
    description: realEstateConfig.meta.description,
    url: realEstateConfig.meta.canonical,
    type: "website",
  },
};

export default function TopRealEstateAppDevelopmentPage() {
  const { clientSuccess, consultation, faqs } = realEstateConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <ReaHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <ReaApplications />
      <HomePortfolioSection />
      <ReaPortfolioCta />
      <ReaEngagement />
      <ReaTechSolution />
      <ReaDevelopmentProcess />
      <AmIndustryRadar />
      <ReaWhyReapmind />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <ServiceFaqSection faqs={[...faqs]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
