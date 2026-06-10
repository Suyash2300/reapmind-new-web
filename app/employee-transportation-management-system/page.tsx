import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { EtmsAdvantages } from "@/components/employee-transportation/etms-advantages";
import { EtmsHero } from "@/components/employee-transportation/etms-hero";
import { EtmsOfferings } from "@/components/employee-transportation/etms-offerings";
import { EtmsPartnerPillars } from "@/components/employee-transportation/etms-partner-pillars";
import { EtmsPortfolioCta } from "@/components/employee-transportation/etms-portfolio-cta";
import { EtmsRoleHub } from "@/components/employee-transportation/etms-role-hub";
import { EtmsWhyReapmind } from "@/components/employee-transportation/etms-why-reapmind";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { employeeTransportationConfig } from "@/lib/employee-transportation-config";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";

export const metadata: Metadata = {
  title: employeeTransportationConfig.meta.title,
  description: employeeTransportationConfig.meta.description,
  alternates: {
    canonical: employeeTransportationConfig.meta.canonical,
  },
  openGraph: {
    title: employeeTransportationConfig.meta.title,
    description: employeeTransportationConfig.meta.description,
    url: employeeTransportationConfig.meta.canonical,
    type: "website",
  },
};

export default function EmployeeTransportationManagementSystemPage() {
  const { clientSuccess, process, consultation } = employeeTransportationConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <EtmsHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <EtmsOfferings />
      <EtmsPartnerPillars />
      <EtmsRoleHub />
      <HomePortfolioSection />
      <EtmsPortfolioCta />
      <EtmsAdvantages />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <AmIndustryRadar />
      <EtmsWhyReapmind />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
