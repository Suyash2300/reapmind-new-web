import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { CompanyLocations } from "@/components/company/company-locations";
import { PnpBenefits } from "@/components/professional-networking/pnp-benefits";
import { PnpFeatures } from "@/components/professional-networking/pnp-features";
import { PnpFeaturesIntro } from "@/components/professional-networking/pnp-features-intro";
import { PnpHero } from "@/components/professional-networking/pnp-hero";
import { PnpInsightsSection } from "@/components/professional-networking/pnp-insights-section";
import { PnpMidConsultation } from "@/components/professional-networking/pnp-mid-consultation";
import { PnpPortfolioCta } from "@/components/professional-networking/pnp-portfolio-cta";
import { PnpProcessFooter } from "@/components/professional-networking/pnp-process-footer";
import { PnpSectors } from "@/components/professional-networking/pnp-sectors";
import { PnpWhyBuild } from "@/components/professional-networking/pnp-why-build";
import { ServicePortfolioSection } from "@/components/service-landing/service-portfolio-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import {
  professionalNetworkingConfig,
  professionalNetworkingPortfolio,
  professionalNetworkingTestimonialIds,
} from "@/lib/professional-networking-config";
import { testimonials } from "@/lib/testimonials";

const { meta, process, consultation } = professionalNetworkingConfig;

const testimonialItems = professionalNetworkingTestimonialIds
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

export default function ProfessionalNetworkingPlatformPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <PnpHero />
      <PnpFeaturesIntro />
      <PnpFeatures />
      <ServicePortfolioSection items={professionalNetworkingPortfolio} />
      <PnpPortfolioCta />
      <PnpBenefits />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <PnpProcessFooter />
      <PnpMidConsultation />
      <PnpSectors />
      <PnpWhyBuild />
      <TestimonialsShowcase title="What clients say about us" items={testimonialItems} />
      <PnpInsightsSection />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
