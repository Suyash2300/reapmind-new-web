import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { CompanyLocations } from "@/components/company/company-locations";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceFaqSection } from "@/components/service-landing/service-faq-section";
import { ServicePortfolioSection } from "@/components/service-landing/service-portfolio-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { TmAdminPanel } from "@/components/telemedicine/tm-admin-panel";
import { TmBenefits } from "@/components/telemedicine/tm-benefits";
import { TmBridgeIntro } from "@/components/telemedicine/tm-bridge-intro";
import { TmConsultationMid } from "@/components/telemedicine/tm-consultation-mid";
import { TmConsultationStack } from "@/components/telemedicine/tm-consultation-stack";
import { TmDevProcess } from "@/components/telemedicine/tm-dev-process";
import { TmDoctorPanel } from "@/components/telemedicine/tm-doctor-panel";
import { TmHero } from "@/components/telemedicine/tm-hero";
import { TmInsightsSection } from "@/components/telemedicine/tm-insights-section";
import { TmPartnership } from "@/components/telemedicine/tm-partnership";
import { TmPatientPanel } from "@/components/telemedicine/tm-patient-panel";
import { TmPortfolioCta } from "@/components/telemedicine/tm-portfolio-cta";
import { TmProcessVisual } from "@/components/telemedicine/tm-process-visual";
import { TmTechStack } from "@/components/telemedicine/tm-tech-stack";
import { TmWhyPartner } from "@/components/telemedicine/tm-why-partner";
import { testimonials } from "@/lib/testimonials";
import {
  telemedicineConfig,
  telemedicinePortfolio,
  telemedicineTestimonialIds,
} from "@/lib/telemedicine-config";

const telemedicineTestimonials = telemedicineTestimonialIds
  .map((id) => testimonials.find((t) => t.id === id))
  .filter((t): t is (typeof testimonials)[number] => Boolean(t));

export const metadata: Metadata = {
  title: telemedicineConfig.meta.title,
  description: telemedicineConfig.meta.description,
  alternates: {
    canonical: telemedicineConfig.meta.canonical,
  },
  openGraph: {
    title: telemedicineConfig.meta.title,
    description: telemedicineConfig.meta.description,
    url: telemedicineConfig.meta.canonical,
    type: "website",
    images: [{ url: telemedicineConfig.meta.ogImage }],
  },
};

export default function TelemedicinePage() {
  const { clientSuccess, consultation, faqs } = telemedicineConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <TmHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={clientSuccess.logos}
      />
      <TmBridgeIntro />
      <TmDevProcess />
      <ServicePortfolioSection items={telemedicinePortfolio} title="Our Recent Works" />
      <TmPortfolioCta />
      <TmPatientPanel />
      <TmConsultationMid />
      <TmDoctorPanel />
      <TmAdminPanel />
      <TmPartnership />
      <TmProcessVisual />
      <TmBenefits />
      <TmTechStack />
      <TmConsultationStack />
      <AmIndustryRadar />
      <TmWhyPartner />
      <TestimonialsShowcase title="What clients say about us" items={telemedicineTestimonials} />
      <TmInsightsSection />
      <ServiceFaqSection faqs={[...faqs]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
