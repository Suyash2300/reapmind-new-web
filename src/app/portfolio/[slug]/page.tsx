"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { PORTFOLIO_DETAILS } from "@/data/portfolio-details";
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Briefcase, 
  Cpu, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  TrendingUp,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { fadeUp } from "@/lib/scroll-motion";

const JUNK_KEYWORDS = [
  "dqs india", "deutsche quality", "lakshya academy", "mteducare", "mt-educare",
  "organic world", "pawspace", "muncipal banking", "municipal banking", "beemate",
  "leep rideshare", "leep-rideshare", "vkonnect", "mechuni", "carloana",
  "personal connections", "happy harvest", "formulaw", "i30 coaching", "i30 -",
  "how much does it cost", "why your enterprise needs", "how to build", "smarter school",
  "devops automation", "intelligent document", "emr integration", "cybersecurity",
  "mutual fund", "workforce management", "recent works", "latest insights",
  "contact us", "blog reapmind", "category android", "read more"
];

function isJunkSection(heading: string, content: string): boolean {
  const hLower = heading.toLowerCase();
  const cLower = content.toLowerCase();
  return JUNK_KEYWORDS.some(keyword => hLower.includes(keyword) || cLower.includes(keyword));
}

export default function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const data = PORTFOLIO_DETAILS[resolvedParams.slug];

  if (!data) {
    notFound();
  }

  // Core Sections extraction
  const briefSection = data.sections.find(s => s.heading.toLowerCase().includes("brief"));
  const approachSection = data.sections.find(s => s.heading.toLowerCase().includes("approach"));
  const resultsSection = data.sections.find(s => s.heading.toLowerCase().includes("results"));

  // Additional genuine case study sections (e.g. key features, screen breakdowns, unique pointers)
  const coreHeadings = [
    briefSection?.heading.toLowerCase(),
    approachSection?.heading.toLowerCase(),
    resultsSection?.heading.toLowerCase()
  ].filter(Boolean) as string[];

  const additionalSections = data.sections.filter(s => {
    const isCore = coreHeadings.some(ch => s.heading.toLowerCase().includes(ch));
    if (isCore) return false;
    
    // Ignore junk blog links & other navigation scrapings
    if (isJunkSection(s.heading, s.content)) return false;
    
    // If heading and content are both basically empty or duplicate of overview
    if (!s.heading.trim()) return false;
    
    return true;
  });

  return (
    <div className="relative min-h-screen bg-background pt-44 lg:pt-48 pb-24 px-6 overflow-hidden">
      {/* Decorative premium ambient backgrounds */}
      <div className="absolute inset-0 grid-texture opacity-25 pointer-events-none" />
      <div
        className="pointer-events-none absolute left-1/4 top-1/6 h-[600px] w-[600px] rounded-full blur-3xl opacity-20 transition-all duration-1000"
        style={{ backgroundColor: data.colorTheme.glow || "rgba(0,209,255,0.15)" }}
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-1/6 h-[500px] w-[500px] rounded-full blur-3xl opacity-10 transition-all duration-1000"
        style={{ backgroundColor: data.colorTheme.glow || "rgba(0,209,255,0.15)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back Link */}
        <Link
          href="/portfolio-reapmind"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-accent transition-all duration-300 mb-12 group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Case Studies
        </Link>

        {/* Hero Header Section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-bold uppercase tracking-widest rounded-full bg-accent/10 ${data.colorTheme.secondary || "text-accent"} border border-accent/25 shadow-sm`}>
              <Sparkles className="h-3.5 w-3.5" />
              {data.category}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-heading mb-6 leading-tight">
              {data.title}
            </h1>
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              {data.overview || (briefSection?.content ? `${briefSection.content.substring(0, 180)}...` : "")}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {data.tags.map(tag => (
                <span key={tag} className="badge-pill !px-3.5 !py-1.5 !text-[10px] !font-bold tracking-wider uppercase bg-surface/40 hover:bg-surface transition-colors duration-300">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Featured Image Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[16/10] w-full overflow-hidden rounded-[2.5rem] border border-border/80 shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-surface/20 group"
          >
            <Image
              src={data.image}
              alt={data.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
          </motion.div>
        </div>

        {/* Highlight Stats Block */}
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-4 mb-20">
          {data.stats.slice(0, 4).map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="section-card rounded-[1.5rem] p-6 text-center border border-border/40 hover:border-accent/30 transition-all duration-300 group"
            >
              <p className={`text-3xl sm:text-4xl font-black bg-gradient-to-r ${data.colorTheme.primary} bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300`}>
                {stat.value}
              </p>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-normal">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Two-Column Details Area */}
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] mb-20">
          {/* Metadata Sidebar (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="section-card rounded-[2rem] p-8 h-fit space-y-8 border border-border/40 bg-surface/30 backdrop-blur-xl shadow-xl"
          >
            <div>
              <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-2">
                <User className="h-4 w-4 text-accent" /> Client
              </h4>
              <p className="text-base font-bold text-heading leading-tight">{data.client}</p>
            </div>

            <div>
              <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-accent" /> Launch Year
              </h4>
              <p className="text-base font-bold text-heading leading-tight">{data.year}</p>
            </div>

            <div>
              <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-accent" /> Key Services
              </h4>
              <div className="flex flex-col gap-2">
                {data.services.map(srv => (
                  <p key={srv} className="text-sm text-muted-foreground font-semibold flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {srv}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
                <Cpu className="h-4 w-4 text-accent" /> Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {data.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1.5 rounded-xl bg-surface/50 border border-border/60 text-xs font-bold text-muted-foreground hover:text-heading hover:border-accent/40 transition-colors duration-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Detailed Content Case Study Section (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* The Brief & Challenge */}
            {briefSection && briefSection.content && (
              <div className="section-card rounded-[2rem] p-8 border border-border/30 hover:border-accent/20 transition-all duration-500">
                <h2 className="text-2xl font-extrabold text-heading mb-4 flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/15 text-accent text-sm">#</span>
                  {briefSection.heading}
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground font-medium">
                  {briefSection.content}
                </p>
              </div>
            )}

            {/* Our Strategic Approach */}
            {approachSection && approachSection.content && (
              <div className="section-card rounded-[2rem] p-8 border border-border/30 hover:border-accent/20 transition-all duration-500">
                <h2 className="text-2xl font-extrabold text-heading mb-4 flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/15 text-accent text-sm">#</span>
                  {approachSection.heading}
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground font-medium">
                  {approachSection.content}
                </p>
              </div>
            )}

            {/* Additional Features, Screen Breakdowns & Pointers */}
            {additionalSections.length > 0 && (
              <div className="section-card rounded-[2rem] p-8 border border-border/30 space-y-6">
                <h2 className="text-2xl font-extrabold text-heading mb-2 flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/15 text-accent text-sm">
                    <Layers className="h-4 w-4" />
                  </span>
                  Features & Details
                </h2>
                
                <div className="grid gap-6 sm:grid-cols-2">
                  {additionalSections.map((sec, idx) => {
                    const hasContent = sec.content && sec.content.trim().length > 0;
                    return (
                      <div key={idx} className="p-5 rounded-2xl bg-surface/20 border border-border/40 hover:border-accent/25 hover:bg-surface/30 transition-all duration-300">
                        <h3 className="text-sm font-bold text-heading flex items-center gap-2 mb-2">
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                          {sec.heading}
                        </h3>
                        {hasContent && (
                          <p className="text-xs text-muted-foreground font-semibold leading-relaxed pl-6">
                            {sec.content}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Key Results & Impact */}
            {resultsSection && resultsSection.content && (
              <div className={`section-card rounded-[2rem] p-8 border border-accent/20 bg-accent/5 hover:border-accent/30 transition-all duration-500`}>
                <h2 className="text-2xl font-extrabold text-heading mb-4 flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/20 text-accent text-sm">
                    <TrendingUp className="h-4 w-4" />
                  </span>
                  {resultsSection.heading}
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground font-medium">
                  {resultsSection.content}
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Project Screenshots Gallery */}
        {data.images && data.images.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-20 border-t border-border/50 pt-20"
          >
            <h2 className="text-3xl font-black text-heading mb-2 flex items-center gap-2.5">
              <span className="text-accent">#</span> Case Gallery &amp; Interfaces
            </h2>
            <p className="text-muted-foreground text-sm font-semibold mb-10 pl-6">
              A visual walkthrough of the custom user interfaces and experiences created.
            </p>
            
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {data.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ duration: 0.4 }}
                  className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-border/80 shadow-lg bg-surface/50 group cursor-pointer"
                >
                  <Image
                    src={img}
                    alt={`${data.title} screenshot ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white text-xs font-bold px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-2">
                      Maximize Interface
                      <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
