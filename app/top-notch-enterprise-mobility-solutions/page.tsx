import { Metadata } from "next";
import { enterpriseMobilityConfig } from "@/lib/enterprise-mobility-config";
import { EmHero } from "@/components/enterprise-mobility/em-hero";
import { EmStayConnected } from "@/components/enterprise-mobility/em-stay-connected";
import { EmServices } from "@/components/enterprise-mobility/em-services";
import { EmPortfolio } from "@/components/enterprise-mobility/em-portfolio";
import { EmProcess } from "@/components/enterprise-mobility/em-process";
import { EmImportance } from "@/components/enterprise-mobility/em-importance";
import { EmSectors } from "@/components/enterprise-mobility/em-sectors";
import { EmTechStack } from "@/components/enterprise-mobility/em-tech-stack";
import { EmWhyUs } from "@/components/enterprise-mobility/em-why-us";
import { EmTestimonials } from "@/components/enterprise-mobility/em-testimonials";
import { EmFaq } from "@/components/enterprise-mobility/em-faq";
import { CompanyLocations } from "@/components/company/company-locations";

export const metadata: Metadata = {
  title: enterpriseMobilityConfig.meta.title,
  description: enterpriseMobilityConfig.meta.description,
};

export default function EnterpriseMobilityPage() {
  return (
    <main className="flex flex-col bg-black text-white selection:bg-primary/30 overflow-x-hidden">
      <EmHero />
      <EmStayConnected />
      <EmServices />
      <EmPortfolio />
      <EmProcess />
      <EmImportance />
      <EmSectors />
      <EmTechStack />
      <EmWhyUs />
      <EmTestimonials />
      <EmFaq />
      <CompanyLocations />
    </main>
  );
}
