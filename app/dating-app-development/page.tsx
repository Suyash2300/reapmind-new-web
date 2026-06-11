import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { CompanyLocations } from "@/components/company/company-locations";
import { DadFeatures } from "@/components/dating-app/dad-features";
import { DadFeaturesIntro } from "@/components/dating-app/dad-features-intro";
import { DadHero } from "@/components/dating-app/dad-hero";
import { DadInsightsSection } from "@/components/dating-app/dad-insights-section";
import { DadMidConsultation } from "@/components/dating-app/dad-mid-consultation";
import { DadPortfolioCta } from "@/components/dating-app/dad-portfolio-cta";
import { DadProcessFooter } from "@/components/dating-app/dad-process-footer";
import { DadSectors } from "@/components/dating-app/dad-sectors";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServicePortfolioSection } from "@/components/service-landing/service-portfolio-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import {
  datingAppConfig,
  datingAppPortfolio,
  datingAppTestimonialIds,
} from "@/lib/dating-app-config";
import { testimonials } from "@/lib/testimonials";

const { meta, clientSuccess, process, consultation } = datingAppConfig;

const testimonialItems = datingAppTestimonialIds
  .map((id) => testimonials.find((item) => item.id === id))
  .filter((item): item is NonNullable<typeof item> => Boolean(item));

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.canonical,
    type: "website",
    images: [{ url: meta.ogImage }],
  },
};

export default function DatingAppDevelopmentPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <DadHero />
      <ServiceClientsSection title={clientSuccess.title} subtitle={clientSuccess.subtitle} logos={clientSuccess.logos} />
      <DadFeaturesIntro />
      <DadFeatures />
      <ServicePortfolioSection items={datingAppPortfolio} />
      <DadPortfolioCta />
      <ServiceProcessSection title={process.title} subtitle={process.subtitle} intro={process.intro} steps={[...process.steps]} />
      <DadProcessFooter />
      <DadMidConsultation />
      <DadSectors />
      <TestimonialsShowcase title="What clients say about us" items={testimonialItems} />
      <DadInsightsSection />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
