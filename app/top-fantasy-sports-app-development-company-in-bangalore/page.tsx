import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { FsaBangaloreHub } from "@/components/fantasy-sports/fsa-bangalore-hub";
import { FsaDevelopmentServices } from "@/components/fantasy-sports/fsa-development-services";
import { FsaHero } from "@/components/fantasy-sports/fsa-hero";
import { FsaLucrative } from "@/components/fantasy-sports/fsa-lucrative";
import { FsaPortfolioCta } from "@/components/fantasy-sports/fsa-portfolio-cta";
import { FsaProcessCta } from "@/components/fantasy-sports/fsa-process-cta";
import { FsaWhyReapmind } from "@/components/fantasy-sports/fsa-why-reapmind";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";
import { fantasySportsConfig } from "@/lib/fantasy-sports-config";

export const metadata: Metadata = {
  title: fantasySportsConfig.meta.title,
  description: fantasySportsConfig.meta.description,
  alternates: {
    canonical: fantasySportsConfig.meta.canonical,
  },
  openGraph: {
    title: fantasySportsConfig.meta.title,
    description: fantasySportsConfig.meta.description,
    url: fantasySportsConfig.meta.canonical,
    type: "website",
  },
};

export default function FantasySportsAppDevelopmentPage() {
  const { clientSuccess, process, consultation, faqs } = fantasySportsConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <FsaHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <FsaBangaloreHub />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        steps={[...process.steps]}
      />
      <FsaProcessCta />
      <HomePortfolioSection />
      <FsaPortfolioCta />
      <FsaLucrative />
      <FsaDevelopmentServices />
      <AmIndustryRadar />
      <FsaWhyReapmind />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <ServiceFaqSection faqs={[...faqs]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
