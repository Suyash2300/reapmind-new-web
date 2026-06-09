import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmHero } from "@/components/app-mod-bangalore/am-hero";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { ObBenefits } from "@/components/offshore-bangalore/ob-benefits";
import { ObDifferentiators } from "@/components/offshore-bangalore/ob-differentiators";
import { ObProcess } from "@/components/offshore-bangalore/ob-process";
import { ObServices } from "@/components/offshore-bangalore/ob-services";
import { ObWhyBangalore } from "@/components/offshore-bangalore/ob-why-bangalore";
import { ObWhyUs } from "@/components/offshore-bangalore/ob-why-us";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { offshoreBangaloreConfig } from "@/lib/offshore-bangalore-config";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";

export const metadata: Metadata = {
  title: offshoreBangaloreConfig.meta.title,
  description: offshoreBangaloreConfig.meta.description,
  alternates: {
    canonical: offshoreBangaloreConfig.meta.canonical,
  },
  openGraph: {
    title: offshoreBangaloreConfig.meta.title,
    description: offshoreBangaloreConfig.meta.description,
    url: offshoreBangaloreConfig.meta.canonical,
    type: "website",
  },
};

export default function OffshoreBangalorePage() {
  const { hero, clientSuccess, agileProcess, consultation, faqs } = offshoreBangaloreConfig;

  return (
    <main className="flex flex-col bg-surface-dark text-primary-foreground">
      <AmHero hero={hero} formSubtitle={hero.formSubtitle} />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <ObBenefits />
      <ObWhyBangalore />
      <ObServices />
      <HomePortfolioSection />
      <ObProcess />
      <ObDifferentiators />
      <ServiceProcessSection
        title={agileProcess.title}
        subtitle={agileProcess.subtitle}
        intro={agileProcess.intro}
        steps={[...agileProcess.steps]}
      />
      <AmIndustryRadar />
      <ObWhyUs />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <ServiceFaqSection faqs={[...faqs]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
