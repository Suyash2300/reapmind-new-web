import type { Metadata } from "next";
import { AcBenefits } from "@/components/ai-copilot/ac-benefits";
import { AcConsultationSection } from "@/components/ai-copilot/ac-consultation-section";
import { AcHero } from "@/components/ai-copilot/ac-hero";
import { AcHowItWorks } from "@/components/ai-copilot/ac-how-it-works";
import { AcOffshorePromo } from "@/components/ai-copilot/ac-offshore-promo";
import { AcServices } from "@/components/ai-copilot/ac-services";
import { AcWhyIntro } from "@/components/ai-copilot/ac-why-intro";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { AcWhyUsSection } from "@/components/ai-copilot/ac-why-us-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { aiCopilotConfig } from "@/lib/ai-copilot-config";
import { homeClients } from "@/lib/home-sections";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";

export const metadata: Metadata = {
  title: aiCopilotConfig.meta.title,
  description: aiCopilotConfig.meta.description,
  alternates: {
    canonical: aiCopilotConfig.meta.canonical,
  },
  openGraph: {
    title: aiCopilotConfig.meta.title,
    description: aiCopilotConfig.meta.description,
    url: aiCopilotConfig.meta.canonical,
    type: "website",
  },
};

export default function AiCopilotPage() {
  const { partners, process, faqs } = aiCopilotConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <AcHero />
      <ServiceClientsSection
        title={partners.title}
        subtitle={partners.subtitle}
        logos={homeClients.logos}
      />
      <AcWhyIntro />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <AcOffshorePromo />
      <HomePortfolioSection />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <AcServices />
      <AcBenefits />
      <AcHowItWorks />
      <AmIndustryRadar />
      <AcWhyUsSection />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceFaqSection faqs={[...faqs]} />
      <AcConsultationSection />
      <CompanyLocations />
    </main>
  );
}
