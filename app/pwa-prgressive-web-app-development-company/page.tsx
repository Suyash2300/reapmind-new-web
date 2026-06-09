import { Metadata } from "next";
import { pwaConfig } from "@/lib/pwa-config";
import { PwaHero } from "@/components/pwa/pwa-hero";
import { PwaClientLogos } from "@/components/pwa/pwa-client-logos";
import { PwaEngage } from "@/components/pwa/pwa-engage";
import { PwaServices } from "@/components/pwa/pwa-services";
import { PwaPortfolio } from "@/components/pwa/pwa-portfolio";
import { PwaIndustries } from "@/components/pwa/pwa-industries";
import { PwaEngagement } from "@/components/pwa/pwa-engagement";
import { PwaBenefits } from "@/components/pwa/pwa-benefits";
import { PwaSectors } from "@/components/pwa/pwa-sectors";
import { PwaWhyUs } from "@/components/pwa/pwa-why-us";
import { PwaTestimonials } from "@/components/pwa/pwa-testimonials";
import { PwaInsights } from "@/components/pwa/pwa-insights";
import { PwaFaq } from "@/components/pwa/pwa-faq";
import { CompanyLocations } from "@/components/company/company-locations";

export const metadata: Metadata = {
  title: pwaConfig.meta.title,
  description: pwaConfig.meta.description,
  alternates: {
    canonical: "/pwa-prgressive-web-app-development-company",
  },
};

export default function PwaDevelopmentPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-white selection:bg-primary/30">
      <PwaHero />
      <PwaClientLogos />
      <PwaEngage />
      <PwaServices />
      <PwaPortfolio />
      <PwaIndustries />
      <PwaEngagement />
      <PwaBenefits />
      <PwaSectors />
      <PwaWhyUs />
      <PwaTestimonials />
      <PwaInsights />
      <PwaFaq />
      <CompanyLocations />
    </main>
  );
}
