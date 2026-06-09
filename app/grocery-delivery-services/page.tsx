import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { GdsHero } from "@/components/grocery-delivery/gds-hero";
import { GdsInterfaces } from "@/components/grocery-delivery/gds-interfaces";
import { GdsPortfolioCta } from "@/components/grocery-delivery/gds-portfolio-cta";
import { GdsServicesIntro } from "@/components/grocery-delivery/gds-services-intro";
import { GdsWhyReapmind } from "@/components/grocery-delivery/gds-why-reapmind";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { groceryDeliveryConfig } from "@/lib/grocery-delivery-config";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";

export const metadata: Metadata = {
  title: groceryDeliveryConfig.meta.title,
  description: groceryDeliveryConfig.meta.description,
  alternates: {
    canonical: groceryDeliveryConfig.meta.canonical,
  },
  openGraph: {
    title: groceryDeliveryConfig.meta.title,
    description: groceryDeliveryConfig.meta.description,
    url: groceryDeliveryConfig.meta.canonical,
    type: "website",
  },
};

export default function GroceryDeliveryServicesPage() {
  const { clientSuccess, process, consultation } = groceryDeliveryConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <GdsHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <GdsServicesIntro />
      <GdsInterfaces />
      <HomePortfolioSection />
      <GdsPortfolioCta />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <AmIndustryRadar />
      <GdsWhyReapmind />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
