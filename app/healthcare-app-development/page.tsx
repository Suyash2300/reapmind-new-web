import { Metadata } from "next";
import dynamic from "next/dynamic";
import { HealthcareHero } from "@/components/healthcare/healthcare-hero";
import { HealthcareClients } from "@/components/healthcare/healthcare-clients";
import { healthcareConfig } from "@/lib/healthcare-config";

// Lazy-load all below-the-fold sections to reduce initial JS payload
const HealthcareStats = dynamic(() =>
  import("@/components/healthcare/healthcare-stats").then((m) => m.HealthcareStats)
);
const HealthcareServices = dynamic(() =>
  import("@/components/healthcare/healthcare-services").then((m) => m.HealthcareServices)
);
const HealthcareSolutionsBento = dynamic(() =>
  import("@/components/healthcare/healthcare-solutions-bento").then((m) => m.HealthcareSolutionsBento)
);
const HealthcarePortfolio = dynamic(() =>
  import("@/components/healthcare/healthcare-portfolio").then((m) => m.HealthcarePortfolio)
);
const HealthcareFeaturesTabs = dynamic(() =>
  import("@/components/healthcare/healthcare-features-tabs").then((m) => m.HealthcareFeaturesTabs)
);
const HealthcareTrustedPartner = dynamic(() =>
  import("@/components/healthcare/healthcare-trusted-partner").then((m) => m.HealthcareTrustedPartner)
);
const HealthcareProcessTimeline = dynamic(() =>
  import("@/components/healthcare/healthcare-process-timeline").then((m) => m.HealthcareProcessTimeline)
);
const HealthcareTechnologies = dynamic(() =>
  import("@/components/healthcare/healthcare-technologies").then((m) => m.HealthcareTechnologies)
);
const HealthcareFaq = dynamic(() =>
  import("@/components/healthcare/healthcare-faq").then((m) => m.HealthcareFaq)
);
const HealthcareBlogs = dynamic(() =>
  import("@/components/healthcare/healthcare-blogs").then((m) => m.HealthcareBlogs)
);
const HealthcareCTA = dynamic(() =>
  import("@/components/healthcare/healthcare-cta").then((m) => m.HealthcareCTA)
);

export const metadata: Metadata = {
  title: healthcareConfig.meta.title,
  description: healthcareConfig.meta.description,
  alternates: {
    canonical: "https://reapmind.com/healthcare-app-development/",
  },
};

export default function HealthcareAppDevelopmentPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface-dark">
      <main className="flex-1">
        <HealthcareHero />
        <HealthcareClients />
        <HealthcareStats />
        <HealthcareServices />
        <HealthcareSolutionsBento />
        <HealthcarePortfolio />
        <HealthcareFeaturesTabs />
        <HealthcareTrustedPartner />
        <HealthcareProcessTimeline />
        <HealthcareTechnologies />
        <HealthcareFaq />
        <HealthcareBlogs />
        <HealthcareCTA />
      </main>
    </div>
  );
}
