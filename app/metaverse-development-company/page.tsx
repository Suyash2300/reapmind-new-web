import type { Metadata } from "next";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { MvConsultationSection } from "@/components/metaverse/mv-consultation-section";
import { MvEssentialIntro } from "@/components/metaverse/mv-essential-intro";
import { MvHero } from "@/components/metaverse/mv-hero";
import { MvJourneySolutions } from "@/components/metaverse/mv-journey-solutions";
import { MvProcessCta } from "@/components/metaverse/mv-process-cta";
import { MvServices360 } from "@/components/metaverse/mv-services360";
import { MvTrustedPartner } from "@/components/metaverse/mv-trusted-partner";
import { MvWhyUs } from "@/components/metaverse/mv-why-us";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { metaverseConfig } from "@/lib/metaverse-config";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";

export const metadata: Metadata = {
  title: metaverseConfig.meta.title,
  description: metaverseConfig.meta.description,
  alternates: {
    canonical: metaverseConfig.meta.canonical,
  },
  openGraph: {
    title: metaverseConfig.meta.title,
    description: metaverseConfig.meta.description,
    url: metaverseConfig.meta.canonical,
    type: "website",
  },
};

export default function MetaversePage() {
  const { partners, process, faqs } = metaverseConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <MvHero />
      <ServiceClientsSection
        title={partners.title}
        subtitle={partners.subtitle}
        logos={homeClients.logos}
      />
      <MvEssentialIntro />
      <MvServices360 />
      <HomePortfolioSection />
      <MvJourneySolutions />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <MvProcessCta />
      <MvTrustedPartner />
      <AmIndustryRadar />
      <MvWhyUs />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <ServiceFaqSection faqs={[...faqs]} />
      <MvConsultationSection />
      <CompanyLocations />
    </main>
  );
}
