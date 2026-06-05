import { Metadata } from "next";
import { erpConfig } from "@/lib/erp-config";
import { ErpHero } from "@/components/erp/erp-hero";
import { ErpElevate } from "@/components/erp/erp-elevate";
import { ErpEngagement } from "@/components/erp/erp-engagement";
import { ErpCloud } from "@/components/erp/erp-cloud";
import { EmPortfolio } from "@/components/enterprise-mobility/em-portfolio";
import { ErpWhyNeed } from "@/components/erp/erp-why-need";
import { ErpProcess } from "@/components/erp/erp-process";
import { ErpEndToEnd } from "@/components/erp/erp-end-to-end";
import { EmSectors } from "@/components/enterprise-mobility/em-sectors";
import { ErpWhyUs } from "@/components/erp/erp-why-us";
import { EmTestimonials } from "@/components/enterprise-mobility/em-testimonials";
import { ErpFaq } from "@/components/erp/erp-faq";
import { CompanyLocations } from "@/components/company/company-locations";

export const metadata: Metadata = {
  title: erpConfig.meta.title,
  description: erpConfig.meta.description,
};

export default function ErpSoftwarePage() {
  return (
    <main className="flex flex-col bg-black text-white selection:bg-primary/30 overflow-x-hidden">
      <ErpHero />
      <ErpElevate />
      <ErpEngagement />
      <ErpCloud />
      <EmPortfolio />
      <ErpWhyNeed />
      <ErpProcess />
      <ErpEndToEnd />
      <EmSectors />
      <ErpWhyUs />
      <EmTestimonials />
      <ErpFaq />
      <CompanyLocations />
    </main>
  );
}
