import type { Metadata } from "next";
import { AmBenefitsOrbit } from "@/components/app-mod-bangalore/am-benefits-orbit";
import { AmClientSuccess } from "@/components/app-mod-bangalore/am-client-success";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmHero } from "@/components/app-mod-bangalore/am-hero";
import { AmOffshorePromo } from "@/components/app-mod-bangalore/am-offshore-promo";
import { AmProcessConveyor } from "@/components/app-mod-bangalore/am-process-conveyor";
import { AmUpgradeModules } from "@/components/app-mod-bangalore/am-upgrade-modules";
import { AmWhyChoose } from "@/components/app-mod-bangalore/am-why-choose";
import { AmWhyUs } from "@/components/app-mod-bangalore/am-why-us";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { appModBangaloreConfig } from "@/lib/app-mod-bangalore-config";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";

export const metadata: Metadata = {
  title: appModBangaloreConfig.meta.title,
  description: appModBangaloreConfig.meta.description,
  alternates: {
    canonical: appModBangaloreConfig.meta.canonical,
  },
  openGraph: {
    title: appModBangaloreConfig.meta.title,
    description: appModBangaloreConfig.meta.description,
    url: appModBangaloreConfig.meta.canonical,
    type: "website",
  },
};

export default function AppModBangalorePage() {
  const { faqs } = appModBangaloreConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <AmHero />
      <AmClientSuccess />
      <AmWhyChoose />
      <AmProcessConveyor />
      <AmOffshorePromo />
      <HomePortfolioSection />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <AmUpgradeModules />
      <AmBenefitsOrbit />
      <AmIndustryRadar />
      <AmWhyUs />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceFaqSection faqs={[...faqs]} />
      <AmConsultationSection />
      <CompanyLocations />
    </main>
  );
}
