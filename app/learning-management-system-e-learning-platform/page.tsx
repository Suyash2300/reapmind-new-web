import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { LmsHero } from "@/components/learning-management/lms-hero";
import { LmsHighlights } from "@/components/learning-management/lms-highlights";
import { LmsLearningPath } from "@/components/learning-management/lms-learning-path";
import { LmsPortfolioCta } from "@/components/learning-management/lms-portfolio-cta";
import { LmsWhyReapmind } from "@/components/learning-management/lms-why-reapmind";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { learningManagementConfig } from "@/lib/learning-management-config";

export const metadata: Metadata = {
  title: learningManagementConfig.meta.title,
  description: learningManagementConfig.meta.description,
  alternates: {
    canonical: learningManagementConfig.meta.canonical,
  },
  openGraph: {
    title: learningManagementConfig.meta.title,
    description: learningManagementConfig.meta.description,
    url: learningManagementConfig.meta.canonical,
    type: "website",
  },
};

export default function LearningManagementElearningPage() {
  const { clientSuccess, process, consultation, faqs } = learningManagementConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <LmsHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <LmsHighlights />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <HomePortfolioSection />
      <LmsPortfolioCta />
      <LmsLearningPath />
      <AmIndustryRadar />
      <LmsWhyReapmind />
      <ServiceFaqSection faqs={[...faqs]} />
      <TestimonialsShowcase title="What clients say about us" />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
