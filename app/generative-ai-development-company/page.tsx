import type { Metadata } from "next";
import { GaiConsultationSection } from "@/components/generative-ai/gai-consultation-section";
import { GaiHero } from "@/components/generative-ai/gai-hero";
import { GaiOffshorePromo } from "@/components/generative-ai/gai-offshore-promo";
import { GaiOverview } from "@/components/generative-ai/gai-overview";
import { GaiServices } from "@/components/generative-ai/gai-services";
import { GaiWhyUsSection } from "@/components/generative-ai/gai-why-us-section";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { ServiceSectorsSection } from "@/components/service-landing/service-sectors-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { generativeAiConfig } from "@/lib/generative-ai-config";
import {
  aiInsightsArticles,
  industrySectors,
} from "@/lib/recent-works-portfolio";

export const metadata: Metadata = {
  title: generativeAiConfig.meta.title,
  description: generativeAiConfig.meta.description,
  alternates: {
    canonical: generativeAiConfig.meta.canonical,
  },
  openGraph: {
    title: generativeAiConfig.meta.title,
    description: generativeAiConfig.meta.description,
    url: generativeAiConfig.meta.canonical,
    type: "website",
  },
};

export default function GenerativeAiPage() {
  const { process, faqs } = generativeAiConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <GaiHero />
      <GaiOverview />
      <GaiServices />
      <GaiOffshorePromo />
      <HomePortfolioSection />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <ServiceSectorsSection
        title={industrySectors.title}
        items={[...industrySectors.items]}
      />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <GaiWhyUsSection />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceFaqSection faqs={[...faqs]} />
      <GaiConsultationSection />
      <CompanyLocations />
    </main>
  );
}
