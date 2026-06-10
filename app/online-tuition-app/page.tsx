import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { AmIndustryRadar } from "@/components/app-mod-bangalore/am-industry-radar";
import { OtaAdvantages } from "@/components/online-tuition/ota-advantages";
import { OtaHero } from "@/components/online-tuition/ota-hero";
import { OtaKeyElements } from "@/components/online-tuition/ota-key-elements";
import { OtaPortfolioCta } from "@/components/online-tuition/ota-portfolio-cta";
import { OtaStudentFeatures } from "@/components/online-tuition/ota-student-features";
import { OtaTutorInterface } from "@/components/online-tuition/ota-tutor-interface";
import { OtaWhyReapmind } from "@/components/online-tuition/ota-why-reapmind";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { ServiceClientsSection } from "@/components/service-landing/service-clients-section";
import { ServiceInsightsSection } from "@/components/service-landing/service-insights-section";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { CompanyLocations } from "@/components/company/company-locations";
import { homeClients } from "@/lib/home-sections";
import { aiInsightsArticles } from "@/lib/recent-works-portfolio";
import { onlineTuitionConfig } from "@/lib/online-tuition-config";

export const metadata: Metadata = {
  title: onlineTuitionConfig.meta.title,
  description: onlineTuitionConfig.meta.description,
  alternates: {
    canonical: onlineTuitionConfig.meta.canonical,
  },
  openGraph: {
    title: onlineTuitionConfig.meta.title,
    description: onlineTuitionConfig.meta.description,
    url: onlineTuitionConfig.meta.canonical,
    type: "website",
  },
};

export default function OnlineTuitionAppPage() {
  const { clientSuccess, process, consultation } = onlineTuitionConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <OtaHero />
      <ServiceClientsSection
        title={clientSuccess.title}
        subtitle={clientSuccess.subtitle}
        logos={homeClients.logos}
      />
      <OtaKeyElements />
      <OtaStudentFeatures />
      <HomePortfolioSection />
      <OtaPortfolioCta />
      <OtaTutorInterface />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <OtaAdvantages />
      <AmIndustryRadar />
      <OtaWhyReapmind />
      <TestimonialsShowcase title="What clients say about us" />
      <ServiceInsightsSection articles={[...aiInsightsArticles]} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
