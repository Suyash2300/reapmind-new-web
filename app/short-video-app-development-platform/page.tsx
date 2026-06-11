import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { CompanyLocations } from "@/components/company/company-locations";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServicePortfolioSection } from "@/components/service-landing/service-portfolio-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { SvadFeatures } from "@/components/short-video-app/svad-features";
import { SvadHero } from "@/components/short-video-app/svad-hero";
import { SvadInsightsSection } from "@/components/short-video-app/svad-insights-section";
import { SvadMidConsultation } from "@/components/short-video-app/svad-mid-consultation";
import { SvadPortfolioCta } from "@/components/short-video-app/svad-portfolio-cta";
import { SvadProcessFooter } from "@/components/short-video-app/svad-process-footer";
import { SvadSectors } from "@/components/short-video-app/svad-sectors";
import { SvadWhyBuild } from "@/components/short-video-app/svad-why-build";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import {
  shortVideoAppConfig,
  shortVideoAppPortfolio,
  shortVideoAppTestimonialIds,
} from "@/lib/short-video-app-config";
import { testimonials } from "@/lib/testimonials";

const { meta, clientSuccess, process, consultation } = shortVideoAppConfig;

const testimonialItems = shortVideoAppTestimonialIds
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

export default function ShortVideoAppDevelopmentPlatformPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <SvadHero />
      <ServiceClientsSection title={clientSuccess.title} subtitle={clientSuccess.subtitle} logos={clientSuccess.logos} />
      <SvadFeatures />
      <ServicePortfolioSection items={shortVideoAppPortfolio} />
      <SvadPortfolioCta />
      <ServiceProcessSection title={process.title} subtitle={process.subtitle} intro={process.intro} steps={[...process.steps]} />
      <SvadProcessFooter />
      <SvadMidConsultation />
      <SvadSectors />
      <SvadWhyBuild />
      <TestimonialsShowcase title="What clients say about us" items={testimonialItems} />
      <SvadInsightsSection />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
