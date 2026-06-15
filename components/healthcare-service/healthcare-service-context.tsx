"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { HealthcareServiceConfig } from "@/lib/healthcare-service-types";

const HealthcareServiceContext = createContext<HealthcareServiceConfig | null>(null);

export function HealthcareServiceProvider({
  config,
  children,
}: {
  config: HealthcareServiceConfig;
  children: ReactNode;
}) {
  return (
    <HealthcareServiceContext.Provider value={config}>
      {children}
    </HealthcareServiceContext.Provider>
  );
}

export function useHealthcareServiceConfig() {
  const config = useContext(HealthcareServiceContext);
  if (!config) {
    throw new Error("useHealthcareServiceConfig must be used within HealthcareServiceProvider");
  }
  return config;
}
