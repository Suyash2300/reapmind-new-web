import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { RdxBenefits } from "@/components/react-development/rdx-benefits";
import { RdxCustomProcess } from "@/components/react-development/rdx-custom-process";
import { RdxEngagement } from "@/components/react-development/rdx-engagement";
import { RdxHero } from "@/components/react-development/rdx-hero";
import { RdxHireCta } from "@/components/react-development/rdx-hire-cta";
import { RdxIndustries } from "@/components/react-development/rdx-industries";
import { RdxReactWhy } from "@/components/react-development/rdx-react-why";
import { RdxServices } from "@/components/react-development/rdx-services";
import { RdxStats } from "@/components/react-development/rdx-stats";
import { RdxTechStack } from "@/components/react-development/rdx-tech-stack";
import { RdxWhyReapmind } from "@/components/react-development/rdx-why-reapmind";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";
import { reactDevelopmentConfig } from "@/lib/react-development-config";

export const metadata: Metadata = {
  title: reactDevelopmentConfig.meta.title,
  description: reactDevelopmentConfig.meta.description,
  alternates: {
    canonical: reactDevelopmentConfig.meta.canonical,
  },
  openGraph: {
    title: reactDevelopmentConfig.meta.title,
    description: reactDevelopmentConfig.meta.description,
    url: reactDevelopmentConfig.meta.canonical,
    type: "website",
  },
};

export default function TopReactjsDevelopmentCompanyPage() {
  const { clientSuccess, consultation, faqs } = reactDevelopmentConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <RdxHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <RdxServices />
      <RdxReactWhy />
      <HomePortfolioSection />
      <RdxHireCta />
      <RdxBenefits />
      <RdxStats />
      <RdxCustomProcess />
      <RdxWhyReapmind />
      <RdxIndustries />
      <RdxEngagement />
      <RdxTechStack />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <ServiceFaqSection faqs={[...faqs]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
