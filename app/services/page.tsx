import type { Metadata } from "next";
import { ServicesHeroSection } from "@/components/services/services-hero-section";
import { ServicesLinksSection } from "@/components/services/services-links-section";
import { ServicesWorkshopSection } from "@/components/services/services-workshop-section";
import { ServicesSupportingSection } from "@/components/services/services-supporting-section";
import { servicesPageSeo } from "@/lib/services-page";

export const metadata: Metadata = {
  title: servicesPageSeo.title,
  description: servicesPageSeo.description,
  alternates: {
    canonical: servicesPageSeo.canonical,
  },
  openGraph: {
    title: servicesPageSeo.title,
    description: servicesPageSeo.description,
    url: servicesPageSeo.canonical,
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-surface-dark text-primary-foreground">
      <ServicesHeroSection />
      <ServicesWorkshopSection />
      <ServicesLinksSection />
      <ServicesSupportingSection />
    </main>
  );
}
