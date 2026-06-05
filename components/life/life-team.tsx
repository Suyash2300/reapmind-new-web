"use client";

import Image from "next/image";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { lifeConfig } from "@/lib/life-config";

export function LifeTeam() {
  return (
    <section className="section-app bg-surface-dark py-32 relative overflow-hidden">
      <div className="container-app relative z-10">
        <GsapScrollReveal className="text-center mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">
            Our Team
          </span>
          <h2 className="text-display font-bold text-white leading-tight">
            Meet the leaders
          </h2>
        </GsapScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lifeConfig.members.map((member, i) => (
            <GsapScrollReveal 
              key={member.name} 
              delay={i * 0.1}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 bg-white/5 border border-white/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>
              <div className="text-center">
                <h3 className="text-h5 font-bold text-white mb-2">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            </GsapScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
