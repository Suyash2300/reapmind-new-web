"use client";

import { ServiceSectorsSection } from "@/components/service-landing/service-sectors-section";
import { enterpriseMobilityConfig } from "@/lib/enterprise-mobility-config";

export function EmSectors() {
  const { sectors } = enterpriseMobilityConfig;
  return <ServiceSectorsSection title={sectors.title} items={sectors.items} />;
}
