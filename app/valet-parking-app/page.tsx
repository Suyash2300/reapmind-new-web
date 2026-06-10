import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { VpaHero } from "@/components/valet-parking-app/vpa-hero";
import { VpaHighlights } from "@/components/valet-parking-app/vpa-highlights";
import { VpaPortfolioCta } from "@/components/valet-parking-app/vpa-portfolio-cta";
import { VpaServicesIntro } from "@/components/valet-parking-app/vpa-services-intro";
import { VpaTicketFeatures } from "@/components/valet-parking-app/vpa-ticket-features";
import { VpaWhyReapmind } from "@/components/valet-parking-app/vpa-why-reapmind";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";
import { valetParkingAppConfig } from "@/lib/valet-parking-app-config";

export const metadata: Metadata = {
  title: valetParkingAppConfig.meta.title,
  description: valetParkingAppConfig.meta.description,
  alternates: {
    canonical: valetParkingAppConfig.meta.canonical,
  },
  openGraph: {
    title: valetParkingAppConfig.meta.title,
    description: valetParkingAppConfig.meta.description,
    url: valetParkingAppConfig.meta.canonical,
    type: "website",
  },
};

export default function ValetParkingAppPage() {
  const { clientSuccess, process, consultation, faqs } = valetParkingAppConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <VpaHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <VpaServicesIntro />
      <VpaTicketFeatures />
      <HomePortfolioSection />
      <VpaPortfolioCta />
      <VpaHighlights />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <AmIndustryRadar />
      <VpaWhyReapmind />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <ServiceFaqSection faqs={[...faqs]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
