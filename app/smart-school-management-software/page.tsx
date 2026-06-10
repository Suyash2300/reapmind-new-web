import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { SsmsAdminModules } from "@/components/smart-school-management/ssms-admin-modules";
import { SsmsFeaturesIntro } from "@/components/smart-school-management/ssms-features-intro";
import { SsmsHero } from "@/components/smart-school-management/ssms-hero";
import { SsmsPortfolioCta } from "@/components/smart-school-management/ssms-portfolio-cta";
import { SsmsWhyReapmind } from "@/components/smart-school-management/ssms-why-reapmind";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";
import { smartSchoolManagementConfig } from "@/lib/smart-school-management-config";

export const metadata: Metadata = {
  title: smartSchoolManagementConfig.meta.title,
  description: smartSchoolManagementConfig.meta.description,
  alternates: {
    canonical: smartSchoolManagementConfig.meta.canonical,
  },
  openGraph: {
    title: smartSchoolManagementConfig.meta.title,
    description: smartSchoolManagementConfig.meta.description,
    url: smartSchoolManagementConfig.meta.canonical,
    type: "website",
  },
};

export default function SmartSchoolManagementSoftwarePage() {
  const { clientSuccess, process, consultation } = smartSchoolManagementConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <SsmsHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <SsmsFeaturesIntro />
      <SsmsAdminModules />
      <HomePortfolioSection />
      <SsmsPortfolioCta />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <AmIndustryRadar />
      <SsmsWhyReapmind />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
