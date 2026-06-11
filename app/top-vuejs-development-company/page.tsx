import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { VdxBenefits } from "@/components/vue-development/vdx-benefits";
import { VdxCustomProcess } from "@/components/vue-development/vdx-custom-process";
import { VdxEngagement } from "@/components/vue-development/vdx-engagement";
import { VdxHero } from "@/components/vue-development/vdx-hero";
import { VdxHireCta } from "@/components/vue-development/vdx-hire-cta";
import { VdxIndustries } from "@/components/vue-development/vdx-industries";
import { VdxServices } from "@/components/vue-development/vdx-services";
import { VdxStats } from "@/components/vue-development/vdx-stats";
import { VdxTechStack } from "@/components/vue-development/vdx-tech-stack";
import { VdxVueWhy } from "@/components/vue-development/vdx-vue-why";
import { VdxWhyReapmind } from "@/components/vue-development/vdx-why-reapmind";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";
import { vueDevelopmentConfig } from "@/lib/vue-development-config";

export const metadata: Metadata = {
  title: vueDevelopmentConfig.meta.title,
  description: vueDevelopmentConfig.meta.description,
  alternates: {
    canonical: vueDevelopmentConfig.meta.canonical,
  },
  openGraph: {
    title: vueDevelopmentConfig.meta.title,
    description: vueDevelopmentConfig.meta.description,
    url: vueDevelopmentConfig.meta.canonical,
    type: "website",
  },
};

export default function TopVuejsDevelopmentCompanyPage() {
  const { clientSuccess, consultation, faqs } = vueDevelopmentConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <VdxHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <VdxServices />
      <VdxVueWhy />
      <HomePortfolioSection />
      <VdxHireCta />
      <VdxBenefits />
      <VdxStats />
      <VdxCustomProcess />
      <VdxWhyReapmind />
      <VdxIndustries />
      <VdxEngagement />
      <VdxTechStack />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <ServiceFaqSection faqs={[...faqs]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
