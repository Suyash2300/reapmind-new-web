"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { healthcareConfig } from "@/lib/healthcare-config";
import { ShieldCheck, Zap, Server, Code2 } from "lucide-react";

const icons = [ShieldCheck, Zap, Server, Code2];

export function HealthcareTrustedPartner() {
  const { title, features } = healthcareConfig.trustedPartner;

  return (
    <section className="bg-surface-dark py-16 md:py-24 border-t border-border-strong">
      <div className="container-app">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-h3 font-bold text-white sm:text-h2">
              {title}
            </h2>
            <p className="mt-4 text-white/70">
              Partner with a team that understands the unique challenges of healthcare technology.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <FadeIn key={feature.title} delay={idx * 0.1}>
                <div className="group relative h-full rounded-3xl border border-border-strong bg-surface-elevated/30 p-6 transition-all hover:border-primary/50 hover:bg-surface-elevated">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {feature.desc}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
