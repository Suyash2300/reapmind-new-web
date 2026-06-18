"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { healthcareConfig } from "@/lib/healthcare-config";
import { ShieldCheck, Zap, Server, Code2 } from "lucide-react";

const icons = [ShieldCheck, Zap, Server, Code2];
const ease = [0.22, 1, 0.36, 1] as const;

export function HealthcareTrustedPartner() {
  const { title, features } = healthcareConfig.trustedPartner;
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="bg-surface-dark py-16 md:py-24 border-t border-border-strong overflow-hidden">
      <div className="container-app relative">
        {/* Background glow burst */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"
        />

        <div className="mx-auto max-w-3xl text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="text-h3 font-bold text-white sm:text-h2"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mt-4 text-white/70"
          >
            Partner with a team that understands the unique challenges of healthcare technology.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
          {features.map((feature, idx) => {
            const Icon = icons[idx % icons.length];
            return <PartnerCard key={feature.title} feature={feature} Icon={Icon} index={idx} />;
          })}
        </div>
      </div>
    </section>
  );
}

function PartnerCard({ feature, Icon, index }: { feature: any; Icon: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative h-full rounded-3xl border border-border-strong bg-surface-elevated/30 p-6 sm:p-8 transition-colors hover:bg-surface-elevated overflow-hidden"
    >
      {/* Animated Border Draw */}
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-primary z-0"
        initial={{ clipPath: "polygon(0 0, 0 0, 0 0, 0 0)", opacity: 0 }}
        animate={
          hovered
            ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 0.5 }
            : { clipPath: "polygon(0 0, 0 0, 0 0, 0 0)", opacity: 0 }
        }
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />

      <div className="relative z-10">
        <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:text-white transition-colors duration-300">
          {/* Orbiting dots on hover */}
          <motion.div
            animate={hovered ? { rotate: 360 } : { rotate: 0 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-primary/50" />
          </motion.div>

          <motion.div
            initial={false}
            animate={hovered ? { scale: 1.1, rotate: [0, -10, 10, -10, 0] } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 bg-surface-elevated/80 w-full h-full rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300"
          >
            <Icon className="h-7 w-7" />
          </motion.div>
        </div>

        <h3 className="mb-3 text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-sm md:text-base leading-relaxed text-white/70">
          {feature.desc}
        </p>
      </div>
    </motion.div>
  );
}
