import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { UmsAdvantages } from "@/components/university-management/ums-advantages";
import { UmsCampusModules } from "@/components/university-management/ums-campus-modules";
import { UmsHero } from "@/components/university-management/ums-hero";
import { UmsModulesIntro } from "@/components/university-management/ums-modules-intro";
import { UmsPortfolioCta } from "@/components/university-management/ums-portfolio-cta";
import { UmsWhyReapmind } from "@/components/university-management/ums-why-reapmind";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";
import { universityManagementConfig } from "@/lib/university-management-config";

export const metadata: Metadata = {
  title: universityManagementConfig.meta.title,
  description: universityManagementConfig.meta.description,
  alternates: {
    canonical: universityManagementConfig.meta.canonical,
  },
  openGraph: {
    title: universityManagementConfig.meta.title,
    description: universityManagementConfig.meta.description,
    url: universityManagementConfig.meta.canonical,
    type: "website",
  },
};

export default function UniversityManagementSystemPage() {
  const { clientSuccess, process, consultation } = universityManagementConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <UmsHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <UmsModulesIntro />
      <UmsCampusModules />
      <HomePortfolioSection />
      <UmsPortfolioCta />
      <UmsAdvantages />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <AmIndustryRadar />
      <UmsWhyReapmind />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
