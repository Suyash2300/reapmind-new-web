import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AnEraIntro } from "@/components/audio-networking/an-era-intro";
import { AnEnvision } from "@/components/audio-networking/an-envision";
import { AnHero } from "@/components/audio-networking/an-hero";
import { AnInsightsSection } from "@/components/audio-networking/an-insights-section";
import { AnMidConsultation } from "@/components/audio-networking/an-mid-consultation";
import { AnPortfolioCta } from "@/components/audio-networking/an-portfolio-cta";
import { AnProcessFooter } from "@/components/audio-networking/an-process-footer";
import { AnServiceHighlights } from "@/components/audio-networking/an-service-highlights";
import { AnWhyBuild } from "@/components/audio-networking/an-why-build";
import { CompanyLocations } from "@/components/company/company-locations";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServicePortfolioSection } from "@/components/service-landing/service-portfolio-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import {
  audioNetworkingConfig,
  audioNetworkingPortfolio,
  audioNetworkingTestimonialIds,
} from "@/lib/audio-networking-config";
import { testimonials } from "@/lib/testimonials";

const { meta, clientSuccess, process, consultation } = audioNetworkingConfig;

const testimonialItems = audioNetworkingTestimonialIds
  .map((id) => testimonials.find((item) => item.id === id))
  .filter((item): item is NonNullable<typeof item> => Boolean(item));

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: meta.canonical,
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.canonical,
    type: "website",
    images: [{ url: meta.ogImage }],
  },
};

export default function AudioNetworkingPlatformPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <AnHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={clientSuccess.logos}
      />
      <AnEraIntro />
      <AnEnvision />
      <AnServiceHighlights />
      <ServicePortfolioSection items={audioNetworkingPortfolio} />
      <AnPortfolioCta />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <AnProcessFooter />
      <AnMidConsultation />
      <AnWhyBuild />
      <TestimonialsShowcase title="What clients say about us" items={testimonialItems} />
      <AnInsightsSection />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
