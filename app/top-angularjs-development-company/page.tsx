import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AngAngularFive } from "@/components/angular-development/ang-angular-five";
import { AngBenefits } from "@/components/angular-development/ang-benefits";
import { AngCustomProcess } from "@/components/angular-development/ang-custom-process";
import { AngEngagement } from "@/components/angular-development/ang-engagement";
import { AngHero } from "@/components/angular-development/ang-hero";
import { AngHireCta } from "@/components/angular-development/ang-hire-cta";
import { AngIndustries } from "@/components/angular-development/ang-industries";
import { AngServices } from "@/components/angular-development/ang-services";
import { AngStats } from "@/components/angular-development/ang-stats";
import { AngTechStack } from "@/components/angular-development/ang-tech-stack";
import { AngWhyReapmind } from "@/components/angular-development/ang-why-reapmind";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";
import { angularDevelopmentConfig } from "@/lib/angular-development-config";

export const metadata: Metadata = {
  title: angularDevelopmentConfig.meta.title,
  description: angularDevelopmentConfig.meta.description,
  alternates: {
    canonical: angularDevelopmentConfig.meta.canonical,
  },
  openGraph: {
    title: angularDevelopmentConfig.meta.title,
    description: angularDevelopmentConfig.meta.description,
    url: angularDevelopmentConfig.meta.canonical,
    type: "website",
  },
};

export default function TopAngularjsDevelopmentCompanyPage() {
  const { clientSuccess, consultation, faqs } = angularDevelopmentConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <AngHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <AngServices />
      <AngAngularFive />
      <HomePortfolioSection />
      <AngHireCta />
      <AngBenefits />
      <AngStats />
      <AngCustomProcess />
      <AngWhyReapmind />
      <AngIndustries />
      <AngEngagement />
      <AngTechStack />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <ServiceFaqSection faqs={[...faqs]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
