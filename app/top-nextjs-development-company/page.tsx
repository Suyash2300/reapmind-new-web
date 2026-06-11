import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { NdxBenefits } from "@/components/nextjs-development/ndx-benefits";
import { NdxCustomProcess } from "@/components/nextjs-development/ndx-custom-process";
import { NdxEngagement } from "@/components/nextjs-development/ndx-engagement";
import { NdxHero } from "@/components/nextjs-development/ndx-hero";
import { NdxHireCta } from "@/components/nextjs-development/ndx-hire-cta";
import { NdxIndustries } from "@/components/nextjs-development/ndx-industries";
import { NdxNextWhy } from "@/components/nextjs-development/ndx-next-why";
import { NdxServices } from "@/components/nextjs-development/ndx-services";
import { NdxStats } from "@/components/nextjs-development/ndx-stats";
import { NdxTechStack } from "@/components/nextjs-development/ndx-tech-stack";
import { NdxWhyReapmind } from "@/components/nextjs-development/ndx-why-reapmind";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";
import { nextjsDevelopmentConfig } from "@/lib/nextjs-development-config";

export const metadata: Metadata = {
  title: nextjsDevelopmentConfig.meta.title,
  description: nextjsDevelopmentConfig.meta.description,
  alternates: {
    canonical: nextjsDevelopmentConfig.meta.canonical,
  },
  openGraph: {
    title: nextjsDevelopmentConfig.meta.title,
    description: nextjsDevelopmentConfig.meta.description,
    url: nextjsDevelopmentConfig.meta.canonical,
    type: "website",
  },
};

export default function TopNextjsDevelopmentCompanyPage() {
  const { clientSuccess, consultation, faqs } = nextjsDevelopmentConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <NdxHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <NdxServices />
      <NdxNextWhy />
      <HomePortfolioSection />
      <NdxHireCta />
      <NdxBenefits />
      <NdxStats />
      <NdxCustomProcess />
      <NdxWhyReapmind />
      <NdxIndustries />
      <NdxEngagement />
      <NdxTechStack />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <ServiceFaqSection faqs={[...faqs]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
