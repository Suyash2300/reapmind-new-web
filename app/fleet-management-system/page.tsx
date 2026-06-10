import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { FmsBusinessBenefits } from "@/components/fleet-management/fms-business-benefits";
import { FmsHero } from "@/components/fleet-management/fms-hero";
import { FmsPortfolioCta } from "@/components/fleet-management/fms-portfolio-cta";
import { FmsServicesIntro } from "@/components/fleet-management/fms-services-intro";
import { FmsTelemetryModules } from "@/components/fleet-management/fms-telemetry-modules";
import { FmsWhyReapmind } from "@/components/fleet-management/fms-why-reapmind";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { fleetManagementConfig } from "@/lib/fleet-management-config";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";

export const metadata: Metadata = {
  title: fleetManagementConfig.meta.title,
  description: fleetManagementConfig.meta.description,
  alternates: {
    canonical: fleetManagementConfig.meta.canonical,
  },
  openGraph: {
    title: fleetManagementConfig.meta.title,
    description: fleetManagementConfig.meta.description,
    url: fleetManagementConfig.meta.canonical,
    type: "website",
  },
};

export default function FleetManagementSystemPage() {
  const { clientSuccess, process, consultation } = fleetManagementConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <FmsHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <FmsServicesIntro />
      <FmsTelemetryModules />
      <HomePortfolioSection />
      <FmsPortfolioCta />
      <FmsBusinessBenefits />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <AmIndustryRadar />
      <FmsWhyReapmind />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
