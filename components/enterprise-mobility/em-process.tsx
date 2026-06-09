"use client";

import { ServiceProcessSection } from "@/components/service-landing/service-process-section";
import { enterpriseMobilityConfig } from "@/lib/enterprise-mobility-config";

export function EmProcess() {
  const { process } = enterpriseMobilityConfig;
  return (
    <ServiceProcessSection
      title={process.title}
      subtitle={process.subtitle}
      steps={process.steps}
    />
  );
}
