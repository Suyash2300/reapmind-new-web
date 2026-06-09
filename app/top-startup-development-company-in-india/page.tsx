import type { Metadata } from "next";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { SuConsultationSection } from "@/components/startup/su-consultation-section";
import { SuForgeIntro } from "@/components/startup/su-forge-intro";
import { SuHero } from "@/components/startup/su-hero";
import { SuIndustries } from "@/components/startup/su-industries";
import { SuMazePartner } from "@/components/startup/su-maze-partner";
import { SuProcessCta } from "@/components/startup/su-process-cta";
import { SuScaling } from "@/components/startup/su-scaling";
import { SuServices } from "@/components/startup/su-services";
import { SuTechStack } from "@/components/startup/su-tech-stack";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";
import { startupConfig } from "@/lib/startup-config";

export const metadata: Metadata = {
  title: startupConfig.meta.title,
  description: startupConfig.meta.description,
  alternates: {
    canonical: startupConfig.meta.canonical,
  },
  openGraph: {
    title: startupConfig.meta.title,
    description: startupConfig.meta.description,
    url: startupConfig.meta.canonical,
    type: "website",
  },
};

export default function StartupPage() {
  const { process, faqs } = startupConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <SuHero />
      <SuForgeIntro />
      <SuServices />
      <HomePortfolioSection />
      <SuIndustries />
      <SuScaling />
      <SuTechStack />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <SuProcessCta />
      <AmIndustryRadar />
      <SuMazePartner />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <ServiceFaqSection faqs={[...faqs]} />
      <SuConsultationSection />
      <CompanyLocations />
    </main>
  );
}
