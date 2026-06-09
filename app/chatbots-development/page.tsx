import type { Metadata } from "next";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { CbAiVerticals } from "@/components/chatbots/cb-ai-verticals";
import { CbConsultationSection } from "@/components/chatbots/cb-consultation-section";
import { CbEraIntro } from "@/components/chatbots/cb-era-intro";
import { CbHero } from "@/components/chatbots/cb-hero";
import { CbProcessCta } from "@/components/chatbots/cb-process-cta";
import { CbWhyChoose } from "@/components/chatbots/cb-why-choose";
import { CbWhyUs } from "@/components/chatbots/cb-why-us";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { chatbotsConfig } from "@/lib/chatbots-config";
import { homeClients } from "@/lib/home-sections";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";

export const metadata: Metadata = {
  title: chatbotsConfig.meta.title,
  description: chatbotsConfig.meta.description,
  alternates: {
    canonical: chatbotsConfig.meta.canonical,
  },
  openGraph: {
    title: chatbotsConfig.meta.title,
    description: chatbotsConfig.meta.description,
    url: chatbotsConfig.meta.canonical,
    type: "website",
  },
};

export default function ChatbotsPage() {
  const { partners, process, faqs } = chatbotsConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <CbHero />
      <ServiceClientsSection
        title={partners.title}
        subtitle={partners.subtitle}
        logos={homeClients.logos}
      />
      <CbEraIntro />
      <CbWhyChoose />
      <HomePortfolioSection />
      <CbAiVerticals />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <CbProcessCta />
      <AmIndustryRadar />
      <CbWhyUs />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <ServiceFaqSection faqs={[...faqs]} />
      <CbConsultationSection />
      <CompanyLocations />
    </main>
  );
}
