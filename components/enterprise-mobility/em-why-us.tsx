"use client";

import { ServiceWhyUsSection } from "@/components/service-landing/service-why-us-section";
import { enterpriseMobilityConfig } from "@/lib/enterprise-mobility-config";

export function EmWhyUs() {
  const { whyUs } = enterpriseMobilityConfig;
  return <ServiceWhyUsSection title={whyUs.title} items={whyUs.items} />;
}
