import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { DpmFeatures } from "@/components/digital-product-marketplace/dpm-features";
import { DpmHero } from "@/components/digital-product-marketplace/dpm-hero";
import { DpmPortfolioCta } from "@/components/digital-product-marketplace/dpm-portfolio-cta";
import { DpmServicesIntro } from "@/components/digital-product-marketplace/dpm-services-intro";
import { DpmWhyUs } from "@/components/digital-product-marketplace/dpm-why-us";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { digitalProductMarketplaceConfig } from "@/lib/digital-product-marketplace-config";

export const metadata: Metadata = {
  title: digitalProductMarketplaceConfig.meta.title,
  description: digitalProductMarketplaceConfig.meta.description,
  alternates: {
    canonical: digitalProductMarketplaceConfig.meta.canonical,
  },
  openGraph: {
    title: digitalProductMarketplaceConfig.meta.title,
    description: digitalProductMarketplaceConfig.meta.description,
    url: digitalProductMarketplaceConfig.meta.canonical,
    type: "website",
  },
};

export default function DigitalProductMarketplacePage() {
  const { clientSuccess, consultation, faqs } = digitalProductMarketplaceConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <DpmHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <DpmServicesIntro />
      <HomePortfolioSection />
      <DpmPortfolioCta />
      <DpmFeatures />
      <DpmWhyUs />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceFaqSection faqs={[...faqs]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
