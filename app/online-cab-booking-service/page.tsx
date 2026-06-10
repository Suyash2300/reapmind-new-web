import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { OcbsFeatures } from "@/components/online-cab-booking/ocbs-features";
import { OcbsHero } from "@/components/online-cab-booking/ocbs-hero";
import { OcbsIntro } from "@/components/online-cab-booking/ocbs-intro";
import { OcbsSolutions } from "@/components/online-cab-booking/ocbs-solutions";
import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { CompanyLocations } from "@/components/company/company-locations";
import { onlineCabBookingConfig } from "@/lib/online-cab-booking-config";

export const metadata: Metadata = {
  title: onlineCabBookingConfig.meta.title,
  description: onlineCabBookingConfig.meta.description,
  alternates: {
    canonical: onlineCabBookingConfig.meta.canonical,
  },
  openGraph: {
    title: onlineCabBookingConfig.meta.title,
    description: onlineCabBookingConfig.meta.description,
    url: onlineCabBookingConfig.meta.canonical,
    type: "website",
  },
};

export default function OnlineCabBookingServicePage() {
  const { process, consultation } = onlineCabBookingConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <OcbsHero />
      <OcbsIntro />
      <OcbsSolutions />
      <OcbsFeatures />
      <ServiceProcessSection
        title={process.title}
        subtitle={process.subtitle}
        intro={process.intro}
        steps={[...process.steps]}
      />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
