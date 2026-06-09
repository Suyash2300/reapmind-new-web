import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/about/about-hero-section";
import { AboutStorySection } from "@/components/about/about-story-section";
import { AboutEthicsSection } from "@/components/about/about-ethics-section";
import { AboutClientsCtaSection } from "@/components/about/about-clients-cta-section";
import { aboutOurCompanySeo } from "@/lib/about-our-company";

export const metadata: Metadata = {
  title: aboutOurCompanySeo.title,
  description: aboutOurCompanySeo.description,
  alternates: {
    canonical: aboutOurCompanySeo.canonical,
  },
  openGraph: {
    title: aboutOurCompanySeo.title,
    description: aboutOurCompanySeo.description,
    url: aboutOurCompanySeo.canonical,
    type: "website",
  },
};

export default function AboutOurCompanyPage() {
  return (
    <main className="bg-surface-dark text-primary-foreground">
      <AboutHeroSection />
      <AboutStorySection />
      <AboutEthicsSection />
      <AboutClientsCtaSection />
    </main>
  );
}
