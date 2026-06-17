"use client";

import Image from "next/image";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { teamConfig } from "@/lib/team-config";

export function TeamGrid() {
  return (
    <section className="section-app bg-surface-dark py-24">
      <div className="container-app">
        <GsapScrollReveal>
          <div className="flex flex-col items-center justify-center text-center pb-12 border-b border-white/10">
            <h2 className="text-display font-bold text-white tracking-tight">Our Experts</h2>
          </div>
        </GsapScrollReveal>

        <div className="mt-20 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {teamConfig.members.map((member, i) => (
            <GsapScrollReveal key={member.name} start={`top ${85 + (i % 3) * 5}%`}>
              <div className="group flex flex-col items-center text-center max-w-[300px]">
                <div className="relative aspect-square w-64 overflow-hidden rounded-full border border-white/10 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-primary/50">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                  <p className="mt-2 text-base font-medium text-white/60">{member.role}</p>
                </div>
              </div>
            </GsapScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
