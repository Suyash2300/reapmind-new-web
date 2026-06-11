import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { MbaChallenges } from "@/components/mobile-banking/mba-challenges";
import { MbaHero } from "@/components/mobile-banking/mba-hero";
import { MbaPartnerIntro } from "@/components/mobile-banking/mba-partner-intro";
import { MbaPortfolioCta } from "@/components/mobile-banking/mba-portfolio-cta";
import { MbaServices } from "@/components/mobile-banking/mba-services";
import { MbaTechStack } from "@/components/mobile-banking/mba-tech-stack";
import { MbaWhyReapmind } from "@/components/mobile-banking/mba-why-reapmind";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";
import { mobileBankingConfig } from "@/lib/mobile-banking-config";

export const metadata: Metadata = {
  title: mobileBankingConfig.meta.title,
  description: mobileBankingConfig.meta.description,
  alternates: {
    canonical: mobileBankingConfig.meta.canonical,
  },
  openGraph: {
    title: mobileBankingConfig.meta.title,
    description: mobileBankingConfig.meta.description,
    url: mobileBankingConfig.meta.canonical,
    type: "website",
  },
};

export default function MobileBankingAppDevelopmentPage() {
  const { clientSuccess, process, consultation, faqs } = mobileBankingConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <MbaHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <MbaPartnerIntro />
      <MbaServices />
      <HomePortfolioSection />
      <MbaPortfolioCta />
      <MbaTechStack />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <MbaChallenges />
      <AmIndustryRadar />
      <MbaWhyReapmind />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <ServiceFaqSection faqs={[...faqs]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
