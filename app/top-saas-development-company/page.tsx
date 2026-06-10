import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { SdcHero } from "@/components/saas-development/sdc-hero";
import { SdcIndustries } from "@/components/saas-development/sdc-industries";
import { SdcPortfolioCta } from "@/components/saas-development/sdc-portfolio-cta";
import { SdcProcessCta } from "@/components/saas-development/sdc-process-cta";
import { SdcScaleIntro } from "@/components/saas-development/sdc-scale-intro";
import { SdcServices } from "@/components/saas-development/sdc-services";
import { SdcSpecialist } from "@/components/saas-development/sdc-specialist";
import { SdcTechStack } from "@/components/saas-development/sdc-tech-stack";
import { SdcWhyReapmind } from "@/components/saas-development/sdc-why-reapmind";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";
import { saasDevelopmentConfig } from "@/lib/saas-development-config";

export const metadata: Metadata = {
  title: saasDevelopmentConfig.meta.title,
  description: saasDevelopmentConfig.meta.description,
  alternates: {
    canonical: saasDevelopmentConfig.meta.canonical,
  },
  openGraph: {
    title: saasDevelopmentConfig.meta.title,
    description: saasDevelopmentConfig.meta.description,
    url: saasDevelopmentConfig.meta.canonical,
    type: "website",
  },
};

export default function TopSaasDevelopmentCompanyPage() {
  const { clientSuccess, process, consultation, faqs } = saasDevelopmentConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <SdcHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <SdcScaleIntro />
      <SdcServices />
      <HomePortfolioSection />
      <SdcPortfolioCta />
      <SdcIndustries />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <SdcSpecialist />
      <SdcProcessCta />
      <AmIndustryRadar />
      <SdcWhyReapmind />
      <SdcTechStack />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <ServiceFaqSection faqs={[...faqs]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
