import type { Metadata } from "next";
import { BcConsultationSection } from "@/components/blockchain/bc-consultation-section";
import { BcCoreServices } from "@/components/blockchain/bc-core-services";
import { BcExtendedServices } from "@/components/blockchain/bc-extended-services";
import { BcHero } from "@/components/blockchain/bc-hero";
import { BcIndustries } from "@/components/blockchain/bc-industries";
import { BcNetworks } from "@/components/blockchain/bc-networks";
import { BcOverview } from "@/components/blockchain/bc-overview";
import { BcWhyUs } from "@/components/blockchain/bc-why-us";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { blockchainConfig } from "@/lib/blockchain-config";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";

export const metadata: Metadata = {
  title: blockchainConfig.meta.title,
  description: blockchainConfig.meta.description,
  alternates: {
    canonical: blockchainConfig.meta.canonical,
  },
  openGraph: {
    title: blockchainConfig.meta.title,
    description: blockchainConfig.meta.description,
    url: blockchainConfig.meta.canonical,
    type: "website",
  },
};

export default function BlockchainPage() {
  const { process, faqs } = blockchainConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <BcHero />
      <BcOverview />
      <BcCoreServices />
      <BcExtendedServices />
      <BcNetworks />
      <BcIndustries />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <HomePortfolioSection />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <BcWhyUs />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceFaqSection faqs={[...faqs]} />
      <BcConsultationSection />
      <CompanyLocations />
    </main>
  );
}
