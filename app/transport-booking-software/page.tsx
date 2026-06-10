import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { TbsBenefits } from "@/components/transport-booking/tbs-benefits";
import { TbsDigitizedFeatures } from "@/components/transport-booking/tbs-digitized-features";
import { TbsHero } from "@/components/transport-booking/tbs-hero";
import { TbsOperations } from "@/components/transport-booking/tbs-operations";
import { TbsPortfolioCta } from "@/components/transport-booking/tbs-portfolio-cta";
import { TbsWhyReapmind } from "@/components/transport-booking/tbs-why-reapmind";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";
import { transportBookingConfig } from "@/lib/transport-booking-config";

export const metadata: Metadata = {
  title: transportBookingConfig.meta.title,
  description: transportBookingConfig.meta.description,
  alternates: {
    canonical: transportBookingConfig.meta.canonical,
  },
  openGraph: {
    title: transportBookingConfig.meta.title,
    description: transportBookingConfig.meta.description,
    url: transportBookingConfig.meta.canonical,
    type: "website",
  },
};

export default function TransportBookingSoftwarePage() {
  const { clientSuccess, process, consultation } = transportBookingConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <TbsHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <TbsBenefits />
      <TbsDigitizedFeatures />
      <HomePortfolioSection />
      <TbsPortfolioCta />
      <TbsOperations />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <AmIndustryRadar />
      <TbsWhyReapmind />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
