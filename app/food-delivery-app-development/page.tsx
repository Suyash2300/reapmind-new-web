import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { FdaHero } from "@/components/food-delivery/fda-hero";
import { FdaPortfolioCta } from "@/components/food-delivery/fda-portfolio-cta";
import { FdaRoleInterfaces } from "@/components/food-delivery/fda-role-interfaces";
import { FdaSolutionIntro } from "@/components/food-delivery/fda-solution-intro";
import { FdaWhyReapmind } from "@/components/food-delivery/fda-why-reapmind";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";
import { foodDeliveryConfig } from "@/lib/food-delivery-config";

export const metadata: Metadata = {
  title: foodDeliveryConfig.meta.title,
  description: foodDeliveryConfig.meta.description,
  alternates: {
    canonical: foodDeliveryConfig.meta.canonical,
  },
  openGraph: {
    title: foodDeliveryConfig.meta.title,
    description: foodDeliveryConfig.meta.description,
    url: foodDeliveryConfig.meta.canonical,
    type: "website",
  },
};

export default function FoodDeliveryAppDevelopmentPage() {
  const { clientSuccess, consultation } = foodDeliveryConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <FdaHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <FdaSolutionIntro />
      <FdaRoleInterfaces />
      <HomePortfolioSection />
      <FdaPortfolioCta />
      <AmIndustryRadar />
      <FdaWhyReapmind />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
