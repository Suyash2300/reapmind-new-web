import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmHero } from "@/components/app-mod-bangalore/am-hero";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { TmBenefits } from "@/components/time-material/tm-benefits";
import { TmHowItWorks } from "@/components/time-material/tm-how-it-works";
import { TmMajorServices } from "@/components/time-material/tm-major-services";
import { TmPortfolioCta } from "@/components/time-material/tm-portfolio-cta";
import { TmPricingIntro } from "@/components/time-material/tm-pricing-intro";
import { TmTechStack } from "@/components/time-material/tm-tech-stack";
import { TmWhyChoose } from "@/components/time-material/tm-why-choose";
import { CompanyLocations } from "@/components/company/company-locations";
import { timeMaterialConfig } from "@/lib/time-material-config";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";

export const metadata: Metadata = {
  title: timeMaterialConfig.meta.title,
  description: timeMaterialConfig.meta.description,
  alternates: {
    canonical: timeMaterialConfig.meta.canonical,
  },
  openGraph: {
    title: timeMaterialConfig.meta.title,
    description: timeMaterialConfig.meta.description,
    url: timeMaterialConfig.meta.canonical,
    type: "website",
  },
};

export default function TimeAndMaterialModelPage() {
  const { hero, process, consultation, faqs } = timeMaterialConfig;

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
      <TmPricingIntro />
      <TmBenefits />
      <HomePortfolioSection />
      <TmPortfolioCta />
      <TmHowItWorks />
      <TmMajorServices />
      <TmTechStack />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <AmIndustryRadar />
      <TmWhyChoose />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <ServiceFaqSection faqs={[...faqs]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
