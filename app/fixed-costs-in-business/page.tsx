import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmHero } from "@/components/app-mod-bangalore/am-hero";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { FcDifferentiators } from "@/components/fixed-cost/fc-differentiators";
import { FcPortfolioCta } from "@/components/fixed-cost/fc-portfolio-cta";
import { FcPricingIntro } from "@/components/fixed-cost/fc-pricing-intro";
import { FcSolutions } from "@/components/fixed-cost/fc-solutions";
import { FcWhenToUse } from "@/components/fixed-cost/fc-when-to-use";
import { FcWhyChoose } from "@/components/fixed-cost/fc-why-choose";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { fixedCostConfig } from "@/lib/fixed-cost-config";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";

export const metadata: Metadata = {
  title: fixedCostConfig.meta.title,
  description: fixedCostConfig.meta.description,
  alternates: {
    canonical: fixedCostConfig.meta.canonical,
  },
  openGraph: {
    title: fixedCostConfig.meta.title,
    description: fixedCostConfig.meta.description,
    url: fixedCostConfig.meta.canonical,
    type: "website",
  },
};

export default function FixedCostsInBusinessPage() {
  const { hero, process, consultation, faqs } = fixedCostConfig;

  return (
    <main className="flex flex-col bg-surface-dark text-primary-foreground">
      <AmHero
        hero={{
          badge: hero.badge,
          heading: hero.heading,
          description: hero.description,
          cta: hero.cta,
          image: "/generative-ai/gai-offshore-visual.png",
          fallbackImage: "/generative-ai/Featured-Image-1-scaled.png",
        }}
        formSubtitle={hero.formSubtitle}
      />
      <FcPricingIntro />
      <FcSolutions />
      <HomePortfolioSection />
      <FcPortfolioCta />
      <FcDifferentiators />
      <FcWhenToUse />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <AmIndustryRadar />
      <FcWhyChoose />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <ServiceFaqSection faqs={[...faqs]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
