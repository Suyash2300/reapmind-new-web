"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { FadeIn } from "@/components/motion/fade-in";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { enterpriseMobilityConfig } from "@/lib/enterprise-mobility-config";

export function EmHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-black pb-10 pt-10 md:pb-12 md:pt-12 lg:pt-14">
      {/* Parallax Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image
          src={enterpriseMobilityConfig.hero.image}
          alt="Enterprise Mobility"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </motion.div>

      <div className="container-app relative z-10 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-10">
        <div className="max-w-3xl">
          <GsapScrollReveal>
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-6">
              {enterpriseMobilityConfig.hero.badge}
            </span>
          </GsapScrollReveal>

          <GsapScrollReveal start="top 85%" delay={0.1}>
            <h1 className="text-display font-black text-white leading-[1.1]">
              {enterpriseMobilityConfig.hero.heading.split(' / ').map((part, i) => (
                <span key={i} className="block">
                  {part}
                </span>
              ))}
            </h1>
          </GsapScrollReveal>

          <div className="mt-8 space-y-6">
            <GsapScrollReveal start="top 85%" delay={0.2}>
              <p className="text-h6 text-white/90 font-medium leading-relaxed">
                {enterpriseMobilityConfig.hero.description}
              </p>
            </GsapScrollReveal>
            
            <GsapScrollReveal start="top 85%" delay={0.3}>
              <div className="space-y-4">
                {enterpriseMobilityConfig.hero.paragraphs.map((p, i) => (
                  <p key={i} className="text-para text-white/70 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </GsapScrollReveal>
          </div>

          <GsapScrollReveal start="top 90%" delay={0.4} className="mt-10">
            <Link
              href="/contact-us"
              className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-primary px-10 font-bold text-black transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/30" />
              </div>
              <span className="relative flex items-center gap-2">
                {enterpriseMobilityConfig.hero.cta}
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </GsapScrollReveal>
        </div>

        <FadeIn delay={0.08}>
          <div className="rounded-[1.5rem] border border-border-strong bg-surface-elevated p-5 sm:p-6 lg:sticky lg:top-24">
            <h2 className="text-h5 font-bold text-white">Have a Idea? Contact Us</h2>
            <p className="mt-2 text-sm text-white/60">
              Free consultation within 24 hours — tell us about your mobility project.
            </p>
            <div className="mt-4">
              <ContactInquiryForm submitLabel="Contact Us Today" showMessage={false} />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
