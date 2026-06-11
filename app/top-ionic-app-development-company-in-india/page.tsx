import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { IdxBenefits } from "@/components/ionic-development/idx-benefits";
import { IdxCustomProcess } from "@/components/ionic-development/idx-custom-process";
import { IdxEngagement } from "@/components/ionic-development/idx-engagement";
import { IdxHero } from "@/components/ionic-development/idx-hero";
import { IdxHireCta } from "@/components/ionic-development/idx-hire-cta";
import { IdxIndustries } from "@/components/ionic-development/idx-industries";
import { IdxIonicWhy } from "@/components/ionic-development/idx-ionic-why";
import { IdxServices } from "@/components/ionic-development/idx-services";
import { IdxStats } from "@/components/ionic-development/idx-stats";
import { IdxTechStack } from "@/components/ionic-development/idx-tech-stack";
import { IdxWhyReapmind } from "@/components/ionic-development/idx-why-reapmind";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";
import { ionicDevelopmentConfig } from "@/lib/ionic-development-config";

export const metadata: Metadata = {
  title: ionicDevelopmentConfig.meta.title,
  description: ionicDevelopmentConfig.meta.description,
  alternates: {
    canonical: ionicDevelopmentConfig.meta.canonical,
  },
  openGraph: {
    title: ionicDevelopmentConfig.meta.title,
    description: ionicDevelopmentConfig.meta.description,
    url: ionicDevelopmentConfig.meta.canonical,
    type: "website",
  },
};

export default function TopIonicAppDevelopmentCompanyInIndiaPage() {
  const { clientSuccess, consultation, faqs } = ionicDevelopmentConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <IdxHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <IdxServices />
      <IdxIonicWhy />
      <HomePortfolioSection />
      <IdxHireCta />
      <IdxBenefits />
      <IdxStats />
      <IdxCustomProcess />
      <IdxWhyReapmind />
      <IdxIndustries />
      <IdxEngagement />
      <IdxTechStack />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <ServiceFaqSection faqs={[...faqs]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
