import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { OhdBenefits } from "@/components/online-home-delivery/ohd-benefits";
import { OhdCategoryHub } from "@/components/online-home-delivery/ohd-category-hub";
import { OhdHero } from "@/components/online-home-delivery/ohd-hero";
import { OhdPortfolioCta } from "@/components/online-home-delivery/ohd-portfolio-cta";
import { OhdServicesIntro } from "@/components/online-home-delivery/ohd-services-intro";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { onlineHomeDeliveryConfig } from "@/lib/online-home-delivery-config";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";

export const metadata: Metadata = {
  title: onlineHomeDeliveryConfig.meta.title,
  description: onlineHomeDeliveryConfig.meta.description,
  alternates: {
    canonical: onlineHomeDeliveryConfig.meta.canonical,
  },
  openGraph: {
    title: onlineHomeDeliveryConfig.meta.title,
    description: onlineHomeDeliveryConfig.meta.description,
    url: onlineHomeDeliveryConfig.meta.canonical,
    type: "website",
  },
};

export default function OnlineHomeDeliveryServicesPage() {
  const { clientSuccess, process, consultation } = onlineHomeDeliveryConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <OhdHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <OhdServicesIntro />
      <OhdCategoryHub />
      <HomePortfolioSection />
      <OhdPortfolioCta />
      <OhdBenefits />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <AmIndustryRadar />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
