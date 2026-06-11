import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { AndAdvancedTech } from "@/components/android-development/and-advanced-tech";
import { AndHero } from "@/components/android-development/and-hero";
import { AndIndustries } from "@/components/android-development/and-industries";
import { AndMidCta } from "@/components/android-development/and-mid-cta";
import { AndPortfolioCta } from "@/components/android-development/and-portfolio-cta";
import { AndProcessCta } from "@/components/android-development/and-process-cta";
import { AndServices } from "@/components/android-development/and-services";
import { AndStats } from "@/components/android-development/and-stats";
import { AndTechStack } from "@/components/android-development/and-tech-stack";
import { AndTrendsIntro } from "@/components/android-development/and-trends-intro";
import { AndWhyBelieve } from "@/components/android-development/and-why-believe";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { androidDevelopmentConfig } from "@/lib/android-development-config";
import { homeClients } from "@/lib/home-sections";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";

export const metadata: Metadata = {
  title: androidDevelopmentConfig.meta.title,
  description: androidDevelopmentConfig.meta.description,
  alternates: {
    canonical: androidDevelopmentConfig.meta.canonical,
  },
  openGraph: {
    title: androidDevelopmentConfig.meta.title,
    description: androidDevelopmentConfig.meta.description,
    url: androidDevelopmentConfig.meta.canonical,
    type: "website",
  },
};

export default function AndroidAppDevelopmentServicesPage() {
  const { clientSuccess, process, consultation, faqs } = androidDevelopmentConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <AndHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <AndStats />
      <AndTrendsIntro />
      <AndServices />
      <AndMidCta />
      <AndWhyBelieve />
      <HomePortfolioSection />
      <AndPortfolioCta />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <AndProcessCta />
      <AndTechStack />
      <AndAdvancedTech />
      <AndIndustries />
      <AmIndustryRadar />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <ServiceFaqSection faqs={[...faqs]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
