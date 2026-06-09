import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { OpcBenefits } from "@/components/online-pet-care/opc-benefits";
import { OpcFeatureHub } from "@/components/online-pet-care/opc-feature-hub";
import { OpcHero } from "@/components/online-pet-care/opc-hero";
import { OpcPortfolioCta } from "@/components/online-pet-care/opc-portfolio-cta";
import { OpcServicesIntro } from "@/components/online-pet-care/opc-services-intro";
import { OpcWhyReapmind } from "@/components/online-pet-care/opc-why-reapmind";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { onlinePetCareConfig } from "@/lib/online-pet-care-config";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";

export const metadata: Metadata = {
  title: onlinePetCareConfig.meta.title,
  description: onlinePetCareConfig.meta.description,
  alternates: {
    canonical: onlinePetCareConfig.meta.canonical,
  },
  openGraph: {
    title: onlinePetCareConfig.meta.title,
    description: onlinePetCareConfig.meta.description,
    url: onlinePetCareConfig.meta.canonical,
    type: "website",
  },
};

export default function OnlinePetCarePage() {
  const { clientSuccess, process, consultation } = onlinePetCareConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <OpcHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <OpcServicesIntro />
      <OpcFeatureHub />
      <HomePortfolioSection />
      <OpcPortfolioCta />
      <OpcBenefits />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <AmIndustryRadar />
      <OpcWhyReapmind />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
