import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { CompanyLocations } from "@/components/company/company-locations";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServicePortfolioSection } from "@/components/service-landing/service-portfolio-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { SnBenefits } from "@/components/social-networking/sn-benefits";
import { SnFeatures } from "@/components/social-networking/sn-features";
import { SnFeaturesIntro } from "@/components/social-networking/sn-features-intro";
import { SnHero } from "@/components/social-networking/sn-hero";
import { SnInsightsSection } from "@/components/social-networking/sn-insights-section";
import { SnMidConsultation } from "@/components/social-networking/sn-mid-consultation";
import { SnPortfolioCta } from "@/components/social-networking/sn-portfolio-cta";
import { SnProcessFooter } from "@/components/social-networking/sn-process-footer";
import { SnSectors } from "@/components/social-networking/sn-sectors";
import { SnWhyBuild } from "@/components/social-networking/sn-why-build";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import {
  socialNetworkingConfig,
  socialNetworkingPortfolio,
  socialNetworkingTestimonialIds,
} from "@/lib/social-networking-config";
import { testimonials } from "@/lib/testimonials";

const { meta, clientSuccess, process, consultation } = socialNetworkingConfig;

const testimonialItems = socialNetworkingTestimonialIds
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

export default function SocialNetworkingPlatformPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <SnHero />
      <ServiceClientsSection title={clientSuccess.title} subtitle={clientSuccess.subtitle} logos={clientSuccess.logos} />
      <SnFeaturesIntro />
      <SnFeatures />
      <ServicePortfolioSection items={socialNetworkingPortfolio} />
      <SnPortfolioCta />
      <SnBenefits />
      <ServiceProcessSection title={process.title} subtitle={process.subtitle} intro={process.intro} steps={[...process.steps]} />
      <SnProcessFooter />
      <SnMidConsultation />
      <SnSectors />
      <SnWhyBuild />
      <TestimonialsShowcase title="What clients say about us" items={testimonialItems} />
      <SnInsightsSection />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
