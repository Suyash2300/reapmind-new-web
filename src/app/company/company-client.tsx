"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Globe,
  Cpu,
  Sparkles,
  Brain,
  Cloud,
  Terminal,
  Users,
  Code,
  Zap,
  Lightbulb,
  Heart,
  ShieldCheck,
  BookOpen,
  Key,
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  ArrowRight,
  Headphones,
  Info
} from "lucide-react";
import { HERO_CLIENT_LOGOS } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconBox } from "@/components/ui/icon-box";
import { fadeUp, fadeIn, fadeLeft, fadeRight } from "@/lib/scroll-motion";

// Custom Spotlight Card with cursor tracking for v4 modern glow styling
function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onFocus={() => { setIsFocused(true); setOpacity(1); }}
      onBlur={() => { setIsFocused(false); setOpacity(0); }}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      {...fadeUp}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/50 bg-card/40 p-8 shadow-md backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-lg ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(0, 174, 239, 0.1), transparent 50%)`,
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0" />
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </motion.div>
  );
}

const SERVICES = [
  {
    title: "Mobile App Development",
    description: "Next-gen iOS & Android apps built for performance and user retention using Swift, Kotlin, and React Native.",
    icon: Smartphone,
  },
  {
    title: "Web & CMS Development",
    description: "SEO-optimized, ultra-fast web architectures powered by Next.js, Headless CMS, and custom API systems.",
    icon: Globe,
  },
  {
    title: "Blockchain Solutions",
    description: "Decentralized trust engines, smart contract programming, tokenomics design, and dApp engineering.",
    icon: Cpu,
  },
  {
    title: "AR, VR, and XR",
    description: "Immersive extended reality designs to enhance real estate, training, operations, and commerce.",
    icon: Sparkles,
  },
  {
    title: "AI and ML",
    description: "Intelligent workflows, custom trained models, predictive analytics, and natural language agents.",
    icon: Brain,
  },
  {
    title: "Cloud Management",
    description: "Secure AWS & GCP devops management, microservices auto-scaling, and CI/CD automation pipelines.",
    icon: Cloud,
  },
];

const CHOICES = [
  {
    title: "Technical Expertise",
    description: "We deploy bleeding-edge frameworks to create high-concurrency solutions prepared for scaling demands.",
    icon: Terminal,
  },
  {
    title: "Client-Centric Approach",
    description: "Transparent feedback loops, rapid iterations, and roadmap milestones mapped explicitly to your goals.",
    icon: Users,
  },
  {
    title: "Advanced Technology",
    description: "Integrations featuring robust data structures, serverless paradigms, and distributed ledger systems.",
    icon: Code,
  },
  {
    title: "Youngster-Driven Force",
    description: "An agile, energetic engineering cohort adopting technology shifts with passion and speed.",
    icon: Zap,
  },
];

const VALUES = [
  {
    title: "Innovation",
    description: "Constantly pushing tech thresholds to find simpler, better solutions.",
    icon: Lightbulb,
  },
  {
    title: "Customer Satisfaction",
    description: "We align all processes toward meeting and exceeding user expectations.",
    icon: Heart,
  },
  {
    title: "Integrity",
    description: "Guaranteed transparency, ethical tech, and absolute data protection.",
    icon: ShieldCheck,
  },
  {
    title: "Continuous Learning",
    description: "Iterating on our collective wisdom to stay ahead of the technology curve.",
    icon: BookOpen,
  },
  {
    title: "Teamwork",
    description: "Synergistic collaboration built across cross-functional world zones.",
    icon: Users,
  },
  {
    title: "Empowerment",
    description: "Enabling teams and businesses to lead code structures with autonomy.",
    icon: Key,
  },
  {
    title: "Social Responsibility",
    description: "Creating tech that adds value, supports green policies, and empowers communities.",
    icon: Globe,
  },
];

const OFFICES = [
  {
    city: "Mumbai",
    address: "Kalpataru Plaza, 503, Chincholi Bunder Rd, Malad (W), Mumbai, Maharashtra 400064",
    phone: "+91 96378 28283",
    email: "info@reapmind.com",
    mapUrl: "https://maps.google.com/?q=Kalpataru+Plaza+Malad+Mumbai",
  },
  {
    city: "Bangalore",
    address: "175, Bannerghatta Main Rd, Dollars Colony, Phase 4, J. P. Nagar, Bengaluru, Karnataka 560076",
    phone: "+91 96378 28283",
    email: "info@reapmind.com",
    mapUrl: "https://maps.google.com/?q=175+Bannerghatta+Main+Rd+Dollars+Colony+Bangalore",
  },
  {
    city: "Kolhapur (R&D)",
    address: "4th Floor, Business Hub, IDFC Bank, 401, Sykes Extension, Kolhapur, Maharashtra 416001",
    phone: "+91 96378 28283",
    email: "info@reapmind.com",
    mapUrl: "https://maps.google.com/?q=Business+Hub+IDFC+Bank+Sykes+Extension+Kolhapur",
  },
  {
    city: "USA",
    address: "Atlanta, Georgia, United States of America (USA).",
    phone: "+1 (404) 555-0199",
    email: "usa@reapmind.com",
    mapUrl: "https://maps.google.com/?q=Atlanta+Georgia+USA",
  },
];

export default function CompanyClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    budget: "",
    preference: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const consultationRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const handleScrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      countryCode: "+91",
      phone: "",
      budget: "",
      preference: "",
      message: ""
    });
    setStatus("idle");
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent/20">
      
      {/* 2026 Grid Background texture & ambient glowing accents */}
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-40 z-0" />
      <div className="absolute top-[-5%] left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[25%] right-1/4 w-[700px] h-[700px] bg-brand-light/5 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* ── 1. HERO SECTION ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <span className="badge-pill mb-5 inline-flex gap-2">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Who We Are
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-heading leading-[1.08] mb-4">
                We drive progress with <span className="gradient-text">cutting-edge tech</span> and innovation.
              </h1>
            </div>
            
            <div className="flex flex-col gap-5 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                We are proud to be acknowledged as a top digital transformation company in India and the United States. As a premium brand, we work with innovative technologies in a results-oriented environment.
              </p>
              <p>
                At ReapMind Innovations, we are dedicated to delivering world-class IT and digital solutions that meet and surpass our client’s expectations while maintaining the highest standards.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-4">
              <button 
                onClick={() => handleScrollTo(consultationRef)}
                className="btn-primary cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Headphones className="h-4 w-4" />
                Get Free Consultation
              </button>
              <button 
                onClick={() => handleScrollTo(servicesRef)}
                className="btn-secondary cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Discover What We Do
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          {/* Overlapping Rounded Image Layout */}
          <motion.div 
            className="relative flex gap-6 h-[400px] sm:h-[480px] lg:h-[520px] mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Left Image (Lower & overlapping) */}
            <div className="w-1/2 h-[85%] mt-auto relative z-10 group">
              <div className="w-full h-full relative rounded-3xl overflow-hidden border-4 border-card bg-card shadow-md transition-all duration-700 hover:scale-[1.03] hover:shadow-xl">
                <Image 
                  src="/images/im-main-14503.jpg"
                  alt="ReapMind digital workspace collaboration"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 50vw, 30vw"
                />
              </div>
            </div>

            {/* Right Image (Higher & overlapping) */}
            <div className="w-1/2 h-[85%] mb-auto relative z-10 group">
              <div className="w-full h-full relative rounded-3xl overflow-hidden border-4 border-card bg-card shadow-md transition-all duration-700 hover:scale-[1.03] hover:shadow-xl">
                <Image 
                  src="/images/im-main-10164.jpg"
                  alt="ReapMind engineering team brainstorming"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 50vw, 30vw"
                />
              </div>
            </div>

            {/* Decorative background visual elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-accent/10 rounded-full pointer-events-none -z-10" />
            <div className="absolute top-1/4 left-[10%] w-6 h-6 bg-accent/20 rounded-full animate-float pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 right-[10%] w-10 h-10 bg-brand-light/10 rounded-full animate-float pointer-events-none -z-10" style={{ animationDelay: "2s" }} />
          </motion.div>
        </div>
      </section>

      {/* ── 2. STATS STRIP ── */}
      <section className="border-y border-border bg-brand-navy-deep text-white py-16 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,174,239,0.06),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.08 }}
          >
            {[
              { value: "2018", label: "Year Established", desc: "Five years of innovation" },
              { value: "200+", label: "Specialists", desc: "Expert engineers & designers" },
              { value: "100+", label: "Corporate Clients", desc: "Global brands who trust us" },
              { value: "250+", label: "Completed Projects", desc: "High scale software deployed" },
              { value: "95%+", label: "Satisfaction Rate", desc: "Client success benchmark" },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp}
                className="flex flex-col items-center text-center group"
              >
                <span className="text-4xl md:text-5xl font-bold text-accent group-hover:scale-110 transition-transform duration-300 font-serif" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-white/90 uppercase tracking-widest mt-3 mb-1">
                  {stat.label}
                </span>
                <span className="text-11 text-white/50 font-light">
                  {stat.desc}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. WHAT WE DO (SERVICES) ── */}
      <section ref={servicesRef} className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 relative z-10 scroll-mt-20">
        <SectionHeading 
          badge="What We Do"
          title="Full-cycle solutions designed to elevate your company"
          description="ReapMind offers innovative solutions that enable businesses to stay competitive in the digital transformation market. Our services are intended to assist businesses in harnessing the power of innovative technology and staying ahead of the curve."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {SERVICES.map((service, i) => (
            <SpotlightCard key={service.title}>
              <div>
                <IconBox icon={service.icon} size="lg" className="mb-6" />
                <h3 className="text-xl font-bold text-heading mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* ── 4. WHAT MAKES US THE BEST CHOICE ── */}
      <section className="bg-section-tint border-y border-border py-24 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading 
            badge="Best Choice"
            title="What makes ReapMind the leading choice?"
            description="We leverage our engineering knowledge to guarantee product performance, speed of deployment, and modern software architectures."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {CHOICES.map((choice, i) => (
              <motion.div
                key={choice.title}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="section-card section-card-interactive group rounded-2xl p-7 bg-background"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <IconBox icon={choice.icon} size="md" className="relative z-10" />
                </div>
                <h3 className="text-lg font-bold text-heading mb-3 group-hover:text-accent transition-colors duration-300">
                  {choice.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {choice.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. EXPERIENCE ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left illustration image */}
          <motion.div 
            className="relative h-[320px] sm:h-[400px] lg:h-[520px] rounded-3xl overflow-hidden border border-border/80 bg-card shadow-lg"
            {...fadeLeft}
          >
            <Image 
              src="/images/company-workspace.png"
              alt="ReapMind digital workspace drawing board"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right side Experience bars */}
          <motion.div 
            className="flex flex-col gap-6"
            {...fadeRight}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-heading mb-8">
                Experience
              </h2>
            </div>
            
            <div className="flex flex-col gap-5">
              {[
                { label: "Mobile App Development", years: 10, percentage: 90 },
                { label: "Web & CMS Development", years: 8, percentage: 75 },
                { label: "Blockchain Solutions", years: 2, percentage: 20 },
                { label: "AR, VR, and XR", years: 2, percentage: 20 },
                { label: "AI and ML", years: 2, percentage: 20 },
                { label: "Cloud Management", years: 8, percentage: 75 },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-sm font-semibold text-heading">
                    {item.label} - {item.years} years
                  </span>
                  <div className="w-full h-1.5 bg-muted/40 rounded-full mt-2 overflow-hidden">
                    <motion.div 
                      className="h-full bg-brand-navy rounded-full"
                      style={{ backgroundColor: "var(--brand-navy, #0a2540)" }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mt-6">
              With years of digital transformation experience, we have successfully delivered tailored solutions to businesses all over the world, boosting growth and streamlining operations using cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 5.5 CONNECT BANNER ── */}
      <section className="border-t border-border/60 py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-heading tracking-tight mb-8 leading-tight max-w-3xl mx-auto"
            {...fadeUp}
          >
            Take the first step towards a new project or collaboration. Let's connect!
          </motion.h2>
          <motion.div 
            className="flex flex-wrap gap-4 justify-center items-center"
            {...fadeUp}
            transition={{ delay: 0.1 }}
          >
            <a 
              href="tel:+919637828283"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-base font-semibold text-heading hover:bg-surface/50 transition-colors"
            >
              <Phone className="h-4 w-4 text-accent" />
              +91-9637828283
            </a>
            <button 
              onClick={() => handleScrollTo(consultationRef)}
              className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-8 py-3 text-base font-semibold text-white hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer shadow-md"
              style={{ backgroundColor: "var(--brand-navy, #0a2540)" }}
            >
              Contact us online
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── 6. OUR VALUES ── */}
      <section className="bg-section-tint border-y border-border py-24 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading 
            badge="Our Values"
            title="The principles that guide our success"
            description="Our core values guide our decisions, actions, and partnerships to ensure we deliver the highest quality results."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className="section-card rounded-2xl p-6 bg-card"
              >
                <div className="flex items-center gap-4 mb-4">
                  <IconBox icon={value.icon} size="sm" />
                  <h3 className="text-base font-bold text-heading">{value.title}</h3>
                </div>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. REAPMIND OFFICES ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <SectionHeading 
          badge="Global Footprint"
          title="Find our offices across the globe"
          description="Drop by for a coffee or reach out to our local operational teams."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {OFFICES.map((office, i) => (
            <motion.div
              key={office.city}
              {...fadeUp}
              transition={{ delay: i * 0.08 }}
              className="section-card group rounded-2xl p-6 flex flex-col justify-between min-h-[220px] bg-card"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">{office.city}</span>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                  {office.address}
                </p>
              </div>
              
              <div className="pt-4 border-t border-border/60 flex flex-col gap-1.5 text-xs text-heading">
                <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone className="h-3 w-3 shrink-0 text-accent/80" />
                  {office.phone}
                </a>
                <a href={`mailto:${office.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail className="h-3 w-3 shrink-0 text-accent/80" />
                  {office.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 8. AMONG OUR CLIENTS ── */}
      <section className="bg-section-tint border-y border-border py-16 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
          <SectionHeading 
            badge="Trusted Globally"
            title="Among our corporate clients"
          />
        </div>

        {/* Endless marquee client logo ribbon */}
        <div className="marquee-mask relative overflow-hidden">
          <div className="flex w-max animate-marquee gap-16 py-4">
            {[...HERO_CLIENT_LOGOS, ...HERO_CLIENT_LOGOS].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex h-14 w-40 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-card px-6 opacity-60 grayscale transition duration-300 hover:border-accent/30 hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={56}
                  className="h-auto max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8.5 TEAM & OFFICE GALLERY ── */}
      <section className="py-24 relative z-10 overflow-hidden border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 text-center">
          <span className="badge-pill mb-3 inline-flex">Our Workspace</span>
          <h2 className="text-3xl md:text-5xl font-bold text-heading tracking-tight">
            Life @ ReapMind
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mt-4">
            A glimpse into our collaborative environments, client sessions, and youngster-driven development spaces.
          </p>
        </div>

        {/* Sliding carousel track of team images */}
        <div className="relative flex w-full overflow-hidden select-none">
          <div className="flex w-max animate-marquee gap-6 py-2">
            {[
              "/images/company-team.jpg",
              "/images/im-main-14503.jpg",
              "/images/im-main-10164.jpg",
              "/images/company-workspace.png",
            ].concat([
              "/images/company-team.jpg",
              "/images/im-main-14503.jpg",
              "/images/im-main-10164.jpg",
              "/images/company-workspace.png",
            ]).map((src, i) => (
              <div 
                key={i} 
                className="relative w-[300px] sm:w-[420px] h-[200px] sm:h-[280px] rounded-3xl overflow-hidden shadow-md border border-border/80 group shrink-0"
              >
                <Image 
                  src={src} 
                  alt={`ReapMind Team Office Life ${i}`} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  sizes="(max-width: 640px) 300px, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. CONSULTATION FORM ── */}
      <section ref={consultationRef} className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10 scroll-mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Stats & Advice */}
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-between gap-10"
            {...fadeLeft}
          >
            <div>
              <span className="badge-pill mb-4 inline-flex">Connect</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-heading leading-tight mb-4">
                For Project Queries
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Fill out the form and our technical sales representatives will contact you in less than 24 hours.
              </p>
            </div>

            {/* Premium checkmarks list */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold text-heading uppercase tracking-wider block mb-2 text-heading">
                Get Free Expert Advice Before You Go
              </span>
              {[
                "Strategic Development Plan",
                "Cost & Time Estimates",
                "Solutions to Scale Your Business",
                "Future-Ready Technology Suggestions"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="h-5 w-5 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                    <CheckCircle2 className="h-3 w-3" />
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Embedded Mini-Stats Grid */}
            <div className="grid grid-cols-2 gap-4 border-t border-border/60 pt-8">
              {[
                { value: "200+", label: "Specialists" },
                { value: "100+", label: "Corporate Clients" },
                { value: "250+", label: "Projects Delivered" },
                { value: "95%+", label: "Client Satisfaction" }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xl md:text-2xl font-bold text-heading">{stat.value}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-heading uppercase tracking-wider mr-2">Follow Us</span>
              {[
                { name: "Facebook", url: "https://www.facebook.com/reapmindinnovations", icon: "F" },
                { name: "Instagram", url: "https://www.instagram.com/reapmind.innovations/", icon: "I" },
                { name: "Twitter", url: "https://twitter.com/ReapmindI", icon: "T" },
                { name: "LinkedIn", url: "https://www.linkedin.com/company/reapmind/", icon: "L" }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-full border border-border/80 bg-card flex items-center justify-center text-xs font-bold text-heading hover:bg-accent hover:text-white hover:border-transparent transition-all shadow-sm"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Form Container Card */}
          <motion.div 
            className="lg:col-span-7 border border-border/80 rounded-3xl bg-card/65 backdrop-blur-md p-8 md:p-10 shadow-xl relative overflow-hidden"
            {...fadeRight}
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Info className="h-44 w-44 text-accent" />
            </div>

            <AnimatePresence mode="wait">
              {status !== "success" ? (
                <motion.form 
                  onSubmit={handleSubmit} 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Name field */}
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="form-name" className="text-xs font-bold text-heading uppercase tracking-wider">Name *</label>
                    <input 
                      type="text" 
                      id="form-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Full Name" 
                      className="p-3 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all text-foreground" 
                    />
                  </div>
                  
                  {/* Phone number field with country code prefix */}
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="form-phone" className="text-xs font-bold text-heading uppercase tracking-wider">Phone Number</label>
                    <div className="flex gap-2">
                      <select 
                        value={formData.countryCode}
                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                        className="p-3 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all text-foreground cursor-pointer w-[96px] shrink-0"
                      >
                        <option value="+91">IN (+91)</option>
                        <option value="+1">US (+1)</option>
                        <option value="+44">UK (+44)</option>
                        <option value="+971">UAE (+971)</option>
                      </select>
                      <input 
                        type="tel" 
                        id="form-phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Phone Number" 
                        className="p-3 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all text-foreground w-full" 
                      />
                    </div>
                  </div>

                  {/* Email address field */}
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="form-email" className="text-xs font-bold text-heading uppercase tracking-wider">Email Address *</label>
                    <input 
                      type="email" 
                      id="form-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com" 
                      className="p-3 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all text-foreground" 
                    />
                  </div>

                  {/* Budget Estimate field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-budget" className="text-xs font-bold text-heading uppercase tracking-wider">Budget Estimate</label>
                    <select 
                      id="form-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="p-3 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all text-foreground cursor-pointer"
                    >
                      <option value="">Select a budget...</option>
                      <option value="<10k">Less than $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value=">100k">More than $100,000</option>
                    </select>
                  </div>

                  {/* Prefer To field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-preference" className="text-xs font-bold text-heading uppercase tracking-wider">I Prefer To</label>
                    <select 
                      id="form-preference"
                      value={formData.preference}
                      onChange={(e) => setFormData({ ...formData, preference: e.target.value })}
                      className="p-3 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all text-foreground cursor-pointer"
                    >
                      <option value="">Select preference...</option>
                      <option value="discuss">Discuss a new project</option>
                      <option value="hire">Hire a dedicated team</option>
                      <option value="partnership">Partnership inquiry</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="form-message" className="text-xs font-bold text-heading uppercase tracking-wider">Describe your project *</label>
                    <textarea 
                      id="form-message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Provide details about your ideas or requirements..." 
                      rows={4}
                      className="p-3 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all resize-none text-foreground"
                    ></textarea>
                  </div>

                  {/* Submit button */}
                  <div className="md:col-span-2 flex justify-center mt-4">
                    <button 
                      type="submit" 
                      disabled={status === "submitting"}
                      className="btn-primary cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all w-full md:w-auto font-semibold py-3.5 px-12 text-sm disabled:opacity-50"
                    >
                      {status === "submitting" ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Submit Request
                          <Send className="h-4 w-4" />
                        </span>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 flex flex-col items-center justify-center"
                >
                  <div className="h-16 w-16 bg-accent-soft text-accent flex items-center justify-center rounded-full mb-6">
                    <CheckCircle2 className="h-8 w-8 animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-heading mb-2">Request Received!</h3>
                  <p className="text-muted-foreground text-sm max-w-sm mb-6">
                    Thank you. Our sales consultation experts will contact you at your email or phone number within 24 hours.
                  </p>
                  <button 
                    onClick={handleReset}
                    className="btn-secondary cursor-pointer"
                  >
                    Send another request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
