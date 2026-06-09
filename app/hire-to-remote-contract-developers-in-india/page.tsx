import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { RcCtaBand } from "@/components/remote-contract/rc-cta-band";
import { RcHero } from "@/components/remote-contract/rc-hero";
import { RcHireCards } from "@/components/remote-contract/rc-hire-cards";
import { RcHiringModels } from "@/components/remote-contract/rc-hiring-models";
import { RcPricing } from "@/components/remote-contract/rc-pricing";
import { RcProcess } from "@/components/remote-contract/rc-process";
import { RcTalentIntro } from "@/components/remote-contract/rc-talent-intro";
import { RcTechStack } from "@/components/remote-contract/rc-tech-stack";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { remoteContractConfig } from "@/lib/remote-contract-config";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";

export const metadata: Metadata = {
  title: remoteContractConfig.meta.title,
  description: remoteContractConfig.meta.description,
  alternates: {
    canonical: remoteContractConfig.meta.canonical,
  },
  openGraph: {
    title: remoteContractConfig.meta.title,
    description: remoteContractConfig.meta.description,
    url: remoteContractConfig.meta.canonical,
    type: "website",
  },
};

export default function RemoteContractDevelopersPage() {
  const { clientSuccess, ctaBands, consultation, faqs } = remoteContractConfig;

  return (
    <main className="flex flex-col bg-surface-dark text-primary-foreground">
      <RcHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <RcTalentIntro />
      <RcTechStack />
      <RcPricing />
      <RcCtaBand {...ctaBands[0]} />
      <RcHiringModels />
      <RcProcess />
      <RcCtaBand {...ctaBands[1]} />
      <HomePortfolioSection />
      <RcHireCards />
      <AmIndustryRadar />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <ServiceFaqSection faqs={[...faqs]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
