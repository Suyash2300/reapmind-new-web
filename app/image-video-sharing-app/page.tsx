import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { CompanyLocations } from "@/components/company/company-locations";
import { IvsBenefits } from "@/components/image-video-sharing/ivs-benefits";
import { IvsFeatures } from "@/components/image-video-sharing/ivs-features";
import { IvsHero } from "@/components/image-video-sharing/ivs-hero";
import { IvsInsightsSection } from "@/components/image-video-sharing/ivs-insights-section";
import { IvsMidConsultation } from "@/components/image-video-sharing/ivs-mid-consultation";
import { IvsPortfolioCta } from "@/components/image-video-sharing/ivs-portfolio-cta";
import { IvsProcessFooter } from "@/components/image-video-sharing/ivs-process-footer";
import { IvsTraitsIntro } from "@/components/image-video-sharing/ivs-traits-intro";
import { IvsWhyBuild } from "@/components/image-video-sharing/ivs-why-build";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServicePortfolioSection } from "@/components/service-landing/service-portfolio-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import {
  imageVideoSharingConfig,
  imageVideoSharingPortfolio,
  imageVideoSharingTestimonialIds,
} from "@/lib/image-video-sharing-config";
import { testimonials } from "@/lib/testimonials";

const { meta, clientSuccess, process, consultation } = imageVideoSharingConfig;

const testimonialItems = imageVideoSharingTestimonialIds
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

export default function ImageVideoSharingAppPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <IvsHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={clientSuccess.logos}
      />
      <IvsTraitsIntro />
      <IvsFeatures />
      <ServicePortfolioSection items={imageVideoSharingPortfolio} />
      <IvsPortfolioCta />
      <IvsBenefits />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <IvsProcessFooter />
      <IvsMidConsultation />
      <IvsWhyBuild />
      <TestimonialsShowcase title="What clients say about us" items={testimonialItems} />
      <IvsInsightsSection />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
