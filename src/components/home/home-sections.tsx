"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaPython, FaJava, FaPhp, FaSwift, FaNodeJs, FaReact, FaAngular, FaVuejs, FaAws, FaDocker, FaJenkins, FaGitAlt, FaCloud, FaDatabase, FaCode
} from "react-icons/fa";
import {
  SiJavascript, SiCplusplus, SiKotlin, SiRuby, SiDotnet, SiSpringboot, SiDjango, SiRubyonrails, SiTensorflow, SiPytorch, SiGooglecloud, SiAlibabacloud, SiMysql, SiPostgresql, SiMongodb, SiRedis, SiApachecassandra, SiKubernetes, SiAnsible, SiChef, SiPuppet
} from "react-icons/si";
import {
  ArrowRight,
  Blocks,
  Brain,
  Cloud,
  Cpu,
  Download,
  Layers,
  Lightbulb,
  LineChart,
  Monitor,
  Quote,
  Rocket,
  Smartphone,
  Sparkles,
  UserPlus,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconBox } from "@/components/ui/icon-box";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  BUILT_ICONS,
  CONVERSATION_ICONS,
  ENGAGEMENT_ICONS,
  GLOBAL_STAT_ICONS,
  HIRING_ICONS,
  INDUSTRY_ICONS,
  METRIC_ICONS,
  PROCESS_STEP_ICONS,
  VIFI_ICONS,
  WHY_CHOOSE_ICONS,
  getTechStackIcon,
} from "@/data/section-icons";
import { fadeUp } from "@/lib/scroll-motion";
import {
  CONVERSATION_CTA,
  DIGITAL_EXCELLENCE,
  ENGAGEMENT_MODELS,
  GLOBAL_STATS,
  GLOBAL_STATS_CTA,
  HIRING,
  INDUSTRIES,
  INDUSTRIES_SECTION,
  PORTFOLIO_CASES,
  PORTFOLIO_SECTION,
  PROCESS_SECTION,
  TECH_STACK,
  TECHNOLOGIES_SECTION,
  TESTIMONIALS_SECTION,
  VIFI_SECTION,
  WHO_WE_ARE,
  WHY_CHOOSE,
} from "@/data/home-sections";

const SERVICE_ICONS = [
  Smartphone,
  Monitor,
  Layers,
  Rocket,
  Lightbulb,
  Wrench,
] as const;

const TECH_ICONS: Record<string, React.ElementType> = {
  "Python": FaPython, "Java": FaJava, "JavaScript": SiJavascript, "C++": SiCplusplus, "PHP": FaPhp, "Swift": FaSwift, "Kotlin": SiKotlin, "Ruby": SiRuby, "C#": FaCode, "React": FaReact, "Angular": FaAngular, "Vue.js": FaVuejs, "Node.js": FaNodeJs, ".NET": SiDotnet, "Spring Boot": SiSpringboot, "Django": SiDjango, "Ruby on Rails": SiRubyonrails, "TensorFlow": SiTensorflow, "PyTorch": SiPytorch, "AWS": FaAws, "Azure": FaCloud, "GCP": SiGooglecloud, "IBM Cloud": FaCloud, "Alibaba Cloud": SiAlibabacloud, "MySQL": SiMysql, "PostgreSQL": SiPostgresql, "MongoDB": SiMongodb, "Oracle": FaDatabase, "Microsoft SQL Server": FaDatabase, "Redis": SiRedis, "Cassandra": SiApachecassandra, "Git": FaGitAlt, "Jenkins": FaJenkins, "Docker": FaDocker, "Kubernetes": SiKubernetes, "Ansible": SiAnsible, "Chef": SiChef, "Puppet": SiPuppet,
};

const TechStackCard = ({ category, items, index, StackIcon }: { category: string, items: readonly string[], index: number, StackIcon: any }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={() => { setIsFocused(true); setOpacity(1); }}
      onBlur={() => { setIsFocused(false); setOpacity(0); }}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      {...fadeUp}
      transition={{ delay: index * 0.06 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border/50 bg-background/40 p-8 shadow-2xl backdrop-blur-xl transition-all duration-700 hover:-translate-y-2 hover:border-primary/30 hover:shadow-primary/20"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(120, 119, 198, 0.15), transparent 40%)`,
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0" />

      <div className="relative z-10 mb-8 flex items-center gap-5">
        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-white/10 backdrop-blur-xl transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(120,119,198,0.3)]">
          <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
          <StackIcon className="relative z-10 h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold tracking-tight text-heading transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">{category}</h3>
      </div>

      <div className="relative z-10 flex flex-wrap gap-3">
        {items.map((item) => {
          const IconComponent = TECH_ICONS[item] || Blocks;
          return (
            <div
              key={item}
              className="group/tag relative flex cursor-default items-center gap-2.5 rounded-xl border border-border/40 bg-elevated/30 px-4 py-2 text-sm font-semibold text-muted-foreground shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-primary/50 hover:bg-elevated hover:text-foreground hover:shadow-xl hover:shadow-primary/20"
            >
              <IconComponent className="h-[18px] w-[18px] transition-transform duration-300 group-hover/tag:scale-125 group-hover/tag:text-primary" />
              {item}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export function HomeSections() {
  return (
    <>
      {/* Digital Excellence */}
      <section className="relative z-10 border-t border-border py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="Capabilities"
            title={DIGITAL_EXCELLENCE.title}
            description={DIGITAL_EXCELLENCE.description}
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DIGITAL_EXCELLENCE.services.map((service, i) => {
              const Icon = SERVICE_ICONS[i] ?? Sparkles;
              return (
                <motion.div
                  key={service.title}
                  {...fadeUp}
                  transition={{ delay: i * 0.05 }}
                  className="section-card section-card-interactive group rounded-2xl p-6"
                >
                  <IconBox icon={Icon} size="lg" className="mb-4" />
                  <h3 className="text-lg font-semibold text-heading">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VIFI Banking */}
      <section className="section-tint relative z-10 border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.p {...fadeUp} className="eyebrow text-center">
            {VIFI_SECTION.eyebrow}
          </motion.p>
          <motion.h2
            {...fadeUp}
            className="mx-auto mt-4 max-w-4xl text-center text-2xl font-bold leading-snug text-foreground md:text-3xl lg:text-4xl"
          >
            {VIFI_SECTION.title}
          </motion.h2>
          <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="grid gap-4 sm:grid-cols-2">
              {VIFI_SECTION.products.map((product, i) => {
                const VifiIcon = VIFI_ICONS[i] ?? Sparkles;
                return (
                  <motion.div
                    key={product.name}
                    {...fadeUp}
                    transition={{ delay: i * 0.08 }}
                    className="section-card section-card-interactive rounded-2xl p-5"
                  >
                    <IconBox icon={VifiIcon} className="mb-3" />
                    <h3 className="text-lg font-bold text-brand-navy dark:text-brand-light">{product.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
                  </motion.div>
                );
              })}
            </div>
            <motion.div
              {...fadeUp}
              className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-black/5 shadow-2xl dark:bg-black/40"
            >
              <iframe
                src={`https://www.youtube.com/embed/${VIFI_SECTION.videoId}`}
                title="VIFI banking"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global stats CTA */}
      <section className="relative z-10 border-t border-border py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="section-card rounded-2xl p-10 md:p-14">
            <motion.h2
              {...fadeUp}
              className="mx-auto max-w-3xl text-center text-xl font-semibold leading-snug text-foreground md:text-2xl"
            >
              {GLOBAL_STATS_CTA.title}
            </motion.h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {GLOBAL_STATS.map((stat, i) => {
                const StatIcon = GLOBAL_STAT_ICONS[i] ?? Sparkles;
                return (
                  <motion.div
                    key={stat.label}
                    {...fadeUp}
                    transition={{ delay: i * 0.06 }}
                    className="flex flex-col items-center text-center"
                  >
                    <IconBox icon={StatIcon} className="mb-4" />
                    <p className="text-3xl font-bold text-heading md:text-4xl">{stat.value}</p>
                    <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
            <motion.div {...fadeUp} className="mt-10 flex justify-center">
              <Link
                href="/contact-us"
                className="btn-primary px-8 py-4 shadow-lg shadow-brand-navy/25"
              >
                {GLOBAL_STATS_CTA.button}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative z-10 border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading title={INDUSTRIES_SECTION.title} align="left" className="mx-0 text-left max-w-2xl" />
            <Link
              href="/portfolio-reapmind"
              className="btn-primary flex-shrink-0"
            >
              Explore Our Industries
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Modern editorial / floating rail layout */}
          <div className="relative mt-20">
            {/* subtle line */}
            <div className="absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-border/60 lg:block" />

            <div className="relative flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {INDUSTRIES.map((industry, i) => {
                const IndustryIcon = INDUSTRY_ICONS[industry] ?? Sparkles;

                return (
                  <motion.div
                    key={industry}
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: i * 0.025,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                    whileHover={{
                      y: -2,
                    }}
                    className="group relative"
                  >
                    {/* hover glow */}
                    <div className="absolute inset-0 rounded-full bg-accent/10 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

                    {/* chip */}
                    <div className="relative flex items-center gap-3 rounded-full border border-border bg-surface px-4 py-3 transition-all duration-300 hover:border-accent/20 hover:bg-surface/80">

                      {/* icon wrapper */}
                      <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-border bg-background">

                        {/* animated dot */}
                        <motion.div
                          animate={{
                            scale: [1, 1.8, 1],
                            opacity: [0.15, 0, 0.15],
                          }}
                          transition={{
                            duration: 2.2,
                            repeat: Infinity,
                            ease: "easeOut",
                            delay: i * 0.1,
                          }}
                          className="absolute h-full w-full rounded-full bg-accent"
                        />

                        <IndustryIcon
                          className="relative z-10 h-3.5 w-3.5 text-accent transition-transform duration-300 group-hover:scale-110"
                          aria-hidden
                        />
                      </div>

                      {/* typography preserved */}
                      <span className="relative text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-accent">
                        {industry}
                      </span>

                      {/* modern live indicator */}
                      <motion.div
                        animate={{
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.08,
                        }}
                        className="h-1 w-1 rounded-full bg-accent"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio */}
      <section className="relative z-10 border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={PORTFOLIO_SECTION.title} />
          <div className="mt-16 space-y-16">
            {PORTFOLIO_CASES.map((project, i) => (
              <motion.article
                key={project.title}
                {...fadeUp}
                className={`grid gap-8 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Results
                  </p>
                  <div className="mt-3 flex flex-wrap gap-8">
                    {project.stats.map((s, si) => {
                      const StatIcon = si === 0 ? Download : UserPlus;
                      return (
                        <div key={s.label} className="flex items-start gap-2">
                          <IconBox icon={StatIcon} size="sm" className="mt-0.5" />
                          <div>
                            <p className="stat-value text-2xl">{s.value}</p>
                            <p className="text-xs text-muted-foreground">{s.label}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <Link
                    href={project.href}
                    className="accent-link mt-6 inline-flex items-center gap-2 text-sm"
                  >
                    View case study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us badges */}
      <section className="relative z-10 border-t border-border py-24 overflow-hidden">

        {/* ambient accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute right-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-brand/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title={WHY_CHOOSE.title}
            description={WHY_CHOOSE.description}
          />

          {/* OUT OF SYLLABUS LAYOUT */}
          <div className="relative mt-20">

            {/* center beam */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent lg:block" />

            <div className="grid gap-y-6 lg:grid-cols-2 lg:gap-x-16">
              {WHY_CHOOSE.badges.map((badge, i) => {
                const BadgeIcon = WHY_CHOOSE_ICONS[i] ?? Sparkles;
                const isEven = i % 2 === 0;

                return (
                  <motion.div
                    key={badge}
                    initial={{
                      opacity: 0,
                      x: isEven ? -40 : 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`relative flex ${isEven ? "lg:justify-end" : "lg:justify-start"
                      }`}
                  >
                    {/* floating node */}
                    <div className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-background lg:block">
                      <div className="absolute inset-0 animate-ping rounded-full bg-accent/30" />
                    </div>

                    {/* CARD */}
                    <motion.div
                      whileHover={{
                        y: -4,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 18,
                      }}
                      className="
                  group relative w-full max-w-md overflow-hidden
                  rounded-[28px]
                  border border-border
                  bg-surface/80
                  backdrop-blur-xl
                "
                    >
                      {/* animated top gradient */}
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* futuristic side glow */}
                      <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* mesh gradient */}
                      <div className="absolute inset-0 opacity-[0.03]">
                        <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,white,transparent_30%)]" />
                      </div>

                      {/* content */}
                      <div className="relative flex items-center gap-5 px-6 py-5">

                        {/* icon block */}
                        <div className="relative">

                          {/* soft pulse */}
                          <motion.div
                            animate={{
                              scale: [1, 1.4, 1],
                              opacity: [0.15, 0, 0.15],
                            }}
                            transition={{
                              duration: 2.4,
                              repeat: Infinity,
                              ease: "easeOut",
                              delay: i * 0.2,
                            }}
                            className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl"
                          />

                          <div className="
                      relative flex h-14 w-14 items-center justify-center
                      rounded-2xl
                      border border-border
                      bg-background
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                    ">
                            <BadgeIcon
                              className="
                          h-5 w-5 text-accent
                          transition-transform duration-300
                          group-hover:scale-110
                        "
                              aria-hidden
                            />
                          </div>
                        </div>

                        {/* text */}
                        <div className="flex-1">
                          <span className="
                      block text-sm font-medium text-foreground
                      transition-colors duration-300
                      group-hover:text-accent
                    ">
                            {badge}
                          </span>

                          {/* scanner line */}
                          <div className="mt-3 h-px overflow-hidden bg-border">
                            <motion.div
                              animate={{
                                x: ["-100%", "200%"],
                              }}
                              transition={{
                                duration: 2.2,
                                repeat: Infinity,
                                ease: "linear",
                                delay: i * 0.15,
                              }}
                              className="h-full w-20 skew-x-12 bg-gradient-to-r from-transparent via-accent to-transparent"
                            />
                          </div>
                        </div>

                        {/* futuristic number
                  <div className="
                    text-[10px] font-medium tracking-[0.3em]
                    text-muted-foreground/50
                  ">
                    0{i + 1}
                  </div> */}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Technologies */}
      <section className="relative z-10 border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.p {...fadeUp} className="mb-4 flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[.12em] text-muted-foreground">
            <span className="h-px w-6 bg-border" />
            Technologies
          </motion.p>

          <motion.h2 {...fadeUp} transition={{ delay: 0.05 }}
            className="mb-14 text-[30px] font-semibold leading-tight text-heading"
          >
            Built on the Right Stack
          </motion.h2>

          {/* Bento grid — not a uniform 3-col card dump */}
          <div className="grid grid-cols-3 grid-rows-2 divide-x divide-y divide-border overflow-hidden rounded-2xl border border-border">

            {/* [0] Featured — AI/ML — spans 2 cols */}
            <motion.div {...fadeUp} transition={{ delay: 0 }}
              className="group relative col-span-2 overflow-hidden bg-background p-8
                   before:absolute before:inset-x-0 before:top-0 before:h-[2px]
                   before:origin-left before:scale-x-0 before:bg-accent
                   before:transition-transform before:duration-300 hover:before:scale-x-100
                   hover:bg-surface"
            >
              <p className="mb-5 font-mono text-[11px] tracking-widest text-muted-foreground">01</p>
              <Blocks className="mb-4 h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
              <h3 className="mb-2 text-[19px] font-semibold text-heading">AI & Machine Learning</h3>
              <p className="max-w-md text-[13.5px] leading-relaxed text-muted-foreground">
                {TECHNOLOGIES_SECTION.items[0].description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {["OpenAI", "Claude", "LangChain", "TensorFlow", "PyTorch", "RAG"].map(t => (
                  <span key={t} className="rounded-full border border-border bg-elevated px-2.5 py-1 text-[11px] text-muted-foreground transition-colors group-hover:border-border/80 group-hover:text-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* [1] Tall — Cloud — spans 2 rows */}
            <motion.div {...fadeUp} transition={{ delay: 0.08 }}
              className="group relative row-span-2 flex flex-col justify-between overflow-hidden bg-background p-9
                   before:absolute before:inset-x-0 before:top-0 before:h-[2px]
                   before:origin-left before:scale-x-0 before:bg-accent
                   before:transition-transform before:duration-300 hover:before:scale-x-100
                   hover:bg-surface"
            >
              <div>
                <p className="mb-5 font-mono text-[11px] tracking-widest text-muted-foreground">02</p>
                <Cloud className="mb-4 h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
                <h3 className="mb-2 text-base font-semibold text-heading">{TECHNOLOGIES_SECTION.items[1].title}</h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground">{TECHNOLOGIES_SECTION.items[1].description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {["AWS", "GCP", "Azure", "Terraform"].map(t => (
                    <span key={t} className="rounded-full border border-border bg-elevated px-2.5 py-1 text-[11px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto pt-8 border-t border-border">
                <p className="text-[38px] font-semibold leading-none text-heading">99.9%</p>
                <p className="mt-1 text-xs text-muted-foreground">uptime SLA delivered</p>
              </div>
            </motion.div>

            {/* [2–5] Regular cells */}
            {TECHNOLOGIES_SECTION.items.slice(2).map((tech, i) => {
              const icons = [Layers, Cpu, LineChart, Rocket];
              const Icon = icons[i] ?? Sparkles;
              const nums = ["03", "04", "05", "06"];
              return (
                <motion.div key={tech.title} {...fadeUp} transition={{ delay: (i + 2) * 0.08 }}
                  className="group relative overflow-hidden bg-background p-8
                       before:absolute before:inset-x-0 before:top-0 before:h-[2px]
                       before:origin-left before:scale-x-0 before:bg-accent
                       before:transition-transform before:duration-300 hover:before:scale-x-100
                       hover:bg-surface"
                >
                  <p className="mb-5 font-mono text-[11px] tracking-widest text-muted-foreground">{nums[i]}</p>
                  <Icon className="mb-4 h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
                  <h3 className="mb-2 text-base font-semibold text-heading">{tech.title}</h3>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">{tech.description}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Process flow */}
      <section className="relative z-10 border-t border-border py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">

          <motion.p {...fadeUp} className="eyebrow text-center">
            {PROCESS_SECTION.eyebrow}
          </motion.p>
          <SectionHeading title={PROCESS_SECTION.title} className="mt-4" />

          {/* Timeline */}
          <div className="relative mt-14">

            {/* Spine track */}
            <div
              aria-hidden="true"
              className="absolute top-0 bottom-0 w-px bg-border"
              style={{ left: 27 }}
            />

            {/* Animated spine fill */}
            <motion.div
              aria-hidden="true"
              className="absolute top-0 w-px"
              style={{
                left: 27,
                background: "linear-gradient(180deg, hsl(var(--brand-light)), hsl(var(--brand)))",
                transformOrigin: "top center",
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            />

            <div className="flex flex-col">
              {PROCESS_SECTION.steps.map((step, i) => {
                const StepIcon = PROCESS_STEP_ICONS[i] ?? Sparkles;
                return (
                  <div key={step.title}>
                    <motion.div
                      {...fadeUp}
                      transition={{ delay: i * 0.14 }}
                      className="group flex items-start"
                    >
                      {/* Node dot */}
                      <div
                        aria-hidden="true"
                        className="flex-shrink-0 flex justify-center"
                        style={{ width: 56, paddingTop: 22 }}
                      >
                        <div className="relative z-10 h-3.5 w-3.5 rounded-full border-2 border-brand-light/60 bg-background transition-all duration-300 group-hover:bg-brand-light group-hover:shadow-[0_0_0_5px_hsl(var(--brand-light)/0.12)]" />
                      </div>

                      {/* Card — your exact classes */}
                      <div className="section-card section-card-interactive relative flex-1 mb-1 rounded-2xl overflow-hidden transition-all duration-300 group-hover:translate-x-1.5">
                        <div className="p-6">

                          {/* Ghost numeral */}
                          <span
                            aria-hidden="true"
                            className="pointer-events-none select-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[80px] font-bold leading-none text-brand-light/[.07] dark:text-brand/[.08]"
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>

                          {/* Top row — your exact IconBox + number pattern */}
                          <div className="flex items-start justify-between gap-3">
                            <IconBox icon={StepIcon} />
                            <span className="text-3xl font-bold text-brand-light/80 dark:text-brand/40">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                          </div>

                          {/* Your exact title style */}
                          <h3 className="mt-4 text-lg font-semibold text-heading">
                            {step.title}
                          </h3>

                          {/* Your exact description style */}
                          <p className="mt-2 text-sm text-muted-foreground">
                            {step.description}
                          </p>
                        </div>

                        {/* Accent line */}
                        <div
                          className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                          style={{ background: "linear-gradient(90deg, hsl(var(--brand-light)), hsl(var(--brand)))" }}
                        />
                      </div>
                    </motion.div>

                    {/* Gap between steps */}
                    {i < PROCESS_SECTION.steps.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="w-px bg-border"
                        style={{ height: 14, marginLeft: 27 }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Engagement models */}
      <section className="relative z-10 border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Flexibility Built For You" />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {ENGAGEMENT_MODELS.map((model, i) => {
              const ModelIcon = ENGAGEMENT_ICONS[i] ?? Sparkles;
              return (
                <motion.div
                  key={model.title}
                  {...fadeUp}
                  transition={{ delay: i * 0.08 }}
                  className="section-card section-card-interactive group relative rounded-2xl p-8 overflow-hidden"
                >
                  {/* Top accent bar sweeps in on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 rounded-t-2xl transition-transform duration-300 group-hover:scale-x-100"
                    style={{ background: "linear-gradient(90deg, hsl(var(--brand-light)), hsl(var(--brand)))" }}
                  />

                  {/* Step number */}
                  <span className="absolute top-6 right-6 text-xs font-bold tracking-[.1em] text-brand-light/35 dark:text-brand/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Faint watermark icon */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-2 -right-2 text-[96px] leading-none text-brand-light/[.05] transition-colors duration-300 group-hover:text-brand-light/[.1] dark:text-brand/[.05]"
                  >
                    <ModelIcon size={96} strokeWidth={1} />
                  </div>

                  {/* Your exact original markup below */}
                  <IconBox icon={ModelIcon} className="mb-4" />
                  <h3 className="text-xl font-bold text-heading">{model.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{model.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={TESTIMONIALS_SECTION.title} />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS_SECTION.items.map((t, i) => (
              <motion.div
                key={t.name}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className="section-card section-card-interactive flex flex-col rounded-2xl p-6"
              >
                <Quote className="mb-3 h-8 w-8 text-accent" aria-hidden />
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-4 border-t border-border pt-6">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                    <Image src={t.image} alt={t.name} fill className="object-cover" sizes="48px" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="relative z-10 overflow-hidden border-t border-border py-24">
        {/* Subtle background glow effect */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-0 transition-opacity duration-1000 md:opacity-100">
          <div className="h-[600px] w-[800px] rounded-full bg-foreground/[0.02] blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Tech and Platforms we use" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(TECH_STACK).map(([category, items], i) => {
              const StackIcon = getTechStackIcon(category);
              return (
                <TechStackCard key={category} category={category} items={items} index={i} StackIcon={StackIcon} />
              );
            })}
          </div>
        </div>
      </section>
{/* Hiring partner */}
<section className="relative z-10 overflow-hidden border-t border-border py-32">

  {/* ambient background */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
    <div className="absolute right-0 top-1/4 h-[380px] w-[380px] rounded-full bg-primary/5 blur-[140px]" />
    <div className="absolute left-0 bottom-0 h-[320px] w-[320px] rounded-full bg-primary/5 blur-[120px]" />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
    <SectionHeading
      title={HIRING.title}
      description={HIRING.description}
    />

    <div className="mt-24 space-y-5">
      {HIRING.models.map((model, i) => {
        const HireIcon = HIRING_ICONS[i] ?? Sparkles;

        return (
          <motion.div
            key={model.title}
            {...fadeUp}
            transition={{
              delay: i * 0.06,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative overflow-hidden rounded-[30px] border border-gray-300 bg-background/[0.22] backdrop-blur-xl"
          >
            {/* hover glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.07] via-primary/[0.03] to-transparent opacity-0 transition-all duration-700 group-hover:opacity-100" />

            {/* top shine */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* side glow */}
            <div className="absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl opacity-0 transition-all duration-700 group-hover:opacity-100" />

            <div className="relative flex flex-col gap-8 px-8 py-8 md:flex-row md:items-center md:gap-12">
              
              {/* left side */}
              <div className="flex items-center gap-7 md:min-w-[280px]">
                
                {/* number */}
                <div className="relative">
                  <span className="text-6xl font-black tracking-[-0.08em] text-muted-foreground/[0.22] transition-all duration-700 group-hover:text-primary/40">
                    0{i + 1}
                  </span>

                  {/* number blur */}
                  <div className="absolute inset-0 bg-primary/10 blur-2xl opacity-0 transition-all duration-700 group-hover:opacity-100" />
                </div>

                {/* separator */}
                <div className="h-20 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

                {/* icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-border/80 bg-background/60 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary/50">
                  
                  {/* icon glow */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/10 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

                  <HireIcon className="relative z-10 h-7 w-7 text-foreground transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" />
                </div>
              </div>

              {/* center content */}
              <div className="flex-1">
                <div className="flex items-center gap-5">
                  
                  {/* title */}
                  <h3 className="text-2xl font-semibold tracking-tight text-heading transition-all duration-500 group-hover:translate-x-1">
                    {model.title}
                  </h3>

                  {/* animated line */}
                  <div className="hidden h-px flex-1 overflow-hidden rounded-full bg-gray-300 md:block">
                    <div className="h-full w-0 bg-gradient-to-r from-primary via-primary/70 to-transparent transition-all duration-700 group-hover:w-full" />
                  </div>
                </div>

                {/* description */}
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                  {model.description}
                </p>
              </div>

              {/* right interaction */}
              <div className="hidden md:flex">
                <div className="flex items-center gap-4">
                  
                  {/* label */}
                  <span className="text-[11px] tracking-[0.28em] text-muted-foreground/55 transition-all duration-500 group-hover:text-primary">
                    DISCOVER
                  </span>

                  {/* arrow button */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-400 bg-background/60 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl transition-all duration-500 group-hover:translate-x-2 group-hover:border-primary/50">
                    <svg
                      className="h-4 w-4 text-muted-foreground transition-all duration-500 group-hover:text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>
      {/* Who we are + team */}
      <section className="relative z-10 border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title={WHO_WE_ARE.title} />
          <div className="mx-auto mt-8 max-w-3xl space-y-4 text-center text-sm leading-relaxed text-muted-foreground md:text-base">
            {WHO_WE_ARE.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <Link
            href="/about-our-company"
            className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-brand/40 hover:bg-surface"
          >
            About us
            <ArrowRight className="h-4 w-4" />
          </Link>

          <motion.h3
            {...fadeUp}
            className="mt-20 text-center text-xl font-semibold text-foreground md:text-2xl"
          >
            {WHO_WE_ARE.teamTitle}
          </motion.h3>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {WHO_WE_ARE.team.map((member, i) => (
              <motion.div
                key={member.name}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="relative mx-auto aspect-[37/40] w-full max-w-[200px] overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                <h4 className="mt-4 font-semibold text-foreground">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>

          <motion.h3
            {...fadeUp}
            className="mt-20 text-center text-xl font-semibold text-foreground"
          >
            {WHO_WE_ARE.whyChooseTitle}
          </motion.h3>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHO_WE_ARE.metrics.map((m, i) => {
              const MetricIcon = METRIC_ICONS[i] ?? Sparkles;
              return (
                <motion.div
                  key={m.label}
                  {...fadeUp}
                  transition={{ delay: i * 0.05 }}
                  className="section-card rounded-xl p-5 text-center"
                >
                  <IconBox icon={MetricIcon} size="sm" className="mx-auto mb-3" />
                  <p className="text-xs text-muted-foreground">{m.label}</p>
                  <p className="stat-value mt-1 text-2xl">{m.value}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.p {...fadeUp} className="mt-16 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {WHO_WE_ARE.builtTitle}
          </motion.p>
          <div className="mt-8 flex flex-wrap justify-center gap-12">
            {WHO_WE_ARE.built.map((b, i) => {
              const BuiltIcon = BUILT_ICONS[i] ?? Sparkles;
              return (
                <motion.div key={b.label} {...fadeUp} transition={{ delay: i * 0.1 }} className="flex flex-col items-center text-center">
                  <IconBox icon={BuiltIcon} className="mb-3" />
                  <p className="text-4xl font-bold text-heading">{b.value}</p>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{b.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 overflow-hidden border-t border-border py-28 pb-36">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading badge="Let's talk" title={CONVERSATION_CTA.title} />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {CONVERSATION_CTA.steps.map((step, i) => {
              const CtaIcon = CONVERSATION_ICONS[i] ?? Sparkles;
              return (
                <motion.div
                  key={step.title}
                  {...fadeUp}
                  transition={{ delay: i * 0.08 }}
                  className="section-card section-card-interactive rounded-2xl p-8 text-center"
                >
                  <IconBox icon={CtaIcon} size="lg" className="mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-heading">{step.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
          <motion.div {...fadeUp} className="mt-12 flex flex-wrap justify-center gap-4">
            <Button href="/contact-us" variant="primary">
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact-us" variant="secondary">
              Get A Quotation
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
