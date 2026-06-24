"use client";

import Image from "next/image";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { teamConfig } from "@/lib/team-config";

export function TeamGrid() {
  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <GsapScrollReveal>
          <div className="flex items-end justify-between border-b border-white/10 pb-8">
            <h2 className="text-display font-bold text-white tracking-tight">Our Experts</h2>
          </div>
        </GsapScrollReveal>

        <div className="mt-20 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {teamConfig.members.map((member, i) => (
            <GsapScrollReveal key={member.name} start={`top ${85 + (i % 3) * 5}%`}>
              <div className="group relative">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-white/5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                  
                  <div className="absolute bottom-0 left-0 p-8 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                    <div className="h-1 w-12 bg-primary mb-4 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                    <h3 className="text-h3 font-bold text-white">{member.name}</h3>
                    <p className="mt-2 text-para font-medium text-primary/90">{member.role}</p>
                  </div>
                </div>
              </div>
            </GsapScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
