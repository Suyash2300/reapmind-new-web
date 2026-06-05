import { Metadata } from "next";
import { productDesignConfig } from "@/lib/product-design-config";
import { PdHero } from "@/components/product-design/pd-hero";
import { PdOverview } from "@/components/product-design/pd-overview";
import { PdServices } from "@/components/product-design/pd-services";
import { PdPortfolio } from "@/components/product-design/pd-portfolio";
import { PdChallenges } from "@/components/product-design/pd-challenges";
import { PdProcess } from "@/components/product-design/pd-process";
import { PdTechStack } from "@/components/product-design/pd-tech-stack";
import { PdWhyUs } from "@/components/product-design/pd-why-us";
import { PdTestimonials } from "@/components/product-design/pd-testimonials";
import { PdInsights } from "@/components/product-design/pd-insights";
import { CompanyLocations } from "@/components/company/company-locations";

export const metadata: Metadata = {
  title: productDesignConfig.meta.title,
  description: productDesignConfig.meta.description,
};

export default function ProductDesignPage() {
  return (
    <main className="flex flex-col bg-black text-white selection:bg-primary/30">
      <PdHero />
      <PdOverview />
      <PdServices />
      <PdPortfolio />
      <PdChallenges />
      <PdProcess />
      <PdTechStack />
      <PdWhyUs />
      <PdTestimonials />
      <PdInsights />
      <CompanyLocations />
    </main>
  );
}
