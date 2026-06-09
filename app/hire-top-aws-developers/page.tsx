import { Metadata } from "next";
import { awsHireConfig } from "@/lib/aws-hire-config";
import { AwsHireHero } from "@/components/aws-hire/aws-hire-hero";
import { AwsHireLogos } from "@/components/aws-hire/aws-hire-logos";
import { AwsHireAbout } from "@/components/aws-hire/aws-hire-about";
import { AwsHirePortfolio } from "@/components/aws-hire/aws-hire-portfolio";
import { AwsHireTechnologies } from "@/components/aws-hire/aws-hire-technologies";
import { AwsHireHiringModels } from "@/components/aws-hire/aws-hire-hiring-models";
import { AwsHireProcess } from "@/components/aws-hire/aws-hire-process";
import { AwsHirePricing } from "@/components/aws-hire/aws-hire-pricing";
import { AwsHireTestimonials } from "@/components/aws-hire/aws-hire-testimonials";
import { AwsHireRelated } from "@/components/aws-hire/aws-hire-related";
import { AwsHireFaq } from "@/components/aws-hire/aws-hire-faq";
import { ServiceCta } from "@/components/shared/service-cta";
import { CompanyLocations } from "@/components/company/company-locations";

export const metadata: Metadata = {
  title: awsHireConfig.meta.title,
  description: awsHireConfig.meta.description,
  alternates: { canonical: "/hire-top-aws-developers" },
};

export default function HireTopAwsDevelopersPage() {
  const { ctas } = awsHireConfig;

  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-white selection:bg-primary/30">
      <AwsHireHero />
      <AwsHireLogos />
      <AwsHireAbout />
      <AwsHirePortfolio />
      <AwsHireTechnologies />
      <ServiceCta
        title={ctas.afterTechnologies.title}
        subtitle={ctas.afterTechnologies.subtitle}
        primaryLabel={ctas.afterTechnologies.primaryLabel}
        motionStyle="glow"
      />
      <AwsHireHiringModels />
      <AwsHireProcess />
      <AwsHirePricing />
      <ServiceCta
        title={ctas.afterPricing.title}
        subtitle={ctas.afterPricing.subtitle}
        primaryLabel={ctas.afterPricing.primaryLabel}
        motionStyle="spotlight"
      />
      <AwsHireTestimonials />
      <AwsHireRelated />
      <AwsHireFaq />
      <CompanyLocations />
    </main>
  );
}
