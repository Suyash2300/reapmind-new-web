import type { Metadata } from "next";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { NftConsultationSection } from "@/components/nft-marketplace/nft-consultation-section";
import { NftDevProcess } from "@/components/nft-marketplace/nft-dev-process";
import { NftHero } from "@/components/nft-marketplace/nft-hero";
import { NftReputableIntro } from "@/components/nft-marketplace/nft-reputable-intro";
import { NftServices } from "@/components/nft-marketplace/nft-services";
import { NftTechStack } from "@/components/nft-marketplace/nft-tech-stack";
import { NftTrustedCta } from "@/components/nft-marketplace/nft-trusted-cta";
import { NftWhyUs } from "@/components/nft-marketplace/nft-why-us";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { nftMarketplaceConfig } from "@/lib/nft-marketplace-config";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";

export const metadata: Metadata = {
  title: nftMarketplaceConfig.meta.title,
  description: nftMarketplaceConfig.meta.description,
  alternates: {
    canonical: nftMarketplaceConfig.meta.canonical,
  },
  openGraph: {
    title: nftMarketplaceConfig.meta.title,
    description: nftMarketplaceConfig.meta.description,
    url: nftMarketplaceConfig.meta.canonical,
    type: "website",
  },
};

export default function NftMarketplacePage() {
  const { partners, trustedPartner, faqs } = nftMarketplaceConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <NftHero />
      <ServiceClientsSection
        title={partners.title}
        subtitle={partners.subtitle}
        logos={homeClients.logos}
      />
      <NftReputableIntro />
      <NftServices />
      <HomePortfolioSection />
      <NftDevProcess />
      <NftTechStack />
      <ServiceProcessSection
        title="Process"
        subtitle={trustedPartner.title}
        intro={trustedPartner.subtitle}
        steps={[...trustedPartner.steps]}
      />
      <NftTrustedCta />
      <AmIndustryRadar />
      <NftWhyUs />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <ServiceFaqSection faqs={[...faqs]} />
      <NftConsultationSection />
      <CompanyLocations />
    </main>
  );
}
