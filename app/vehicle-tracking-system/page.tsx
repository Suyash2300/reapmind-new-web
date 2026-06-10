import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { VtsEssentials } from "@/components/vehicle-tracking/vts-essentials";
import { VtsGpsCapabilities } from "@/components/vehicle-tracking/vts-gps-capabilities";
import { VtsHero } from "@/components/vehicle-tracking/vts-hero";
import { VtsHighlights } from "@/components/vehicle-tracking/vts-highlights";
import { VtsPartnerPillars } from "@/components/vehicle-tracking/vts-partner-pillars";
import { VtsPortfolioCta } from "@/components/vehicle-tracking/vts-portfolio-cta";
import { VtsWhyReapmind } from "@/components/vehicle-tracking/vts-why-reapmind";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";
import { vehicleTrackingConfig } from "@/lib/vehicle-tracking-config";

export const metadata: Metadata = {
  title: vehicleTrackingConfig.meta.title,
  description: vehicleTrackingConfig.meta.description,
  alternates: {
    canonical: vehicleTrackingConfig.meta.canonical,
  },
  openGraph: {
    title: vehicleTrackingConfig.meta.title,
    description: vehicleTrackingConfig.meta.description,
    url: vehicleTrackingConfig.meta.canonical,
    type: "website",
  },
};

export default function VehicleTrackingSystemPage() {
  const { clientSuccess, process, consultation } = vehicleTrackingConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <VtsHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <VtsEssentials />
      <VtsPartnerPillars />
      <HomePortfolioSection />
      <VtsPortfolioCta />
      <VtsHighlights />
      <VtsGpsCapabilities />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <AmIndustryRadar />
      <VtsWhyReapmind />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
