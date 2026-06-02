"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Building2,
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Target,
  ArrowRight,
  Mail,
  Cpu,
  Award,
  Terminal,
  Zap,
  Globe,
  Plus,
  Compass,
  ArrowUpRight,
  Info,
  Briefcase,
  Users2,
  CheckCircle,
  ThumbsUp
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeUp, fadeIn, fadeLeft, fadeRight } from "@/lib/scroll-motion";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "@/components/ui/social-icons";

// Custom Spotlight Card with cursor tracking for v4 modern glow styling
function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
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
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      {...fadeUp}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/40 bg-card/45 p-8 shadow-md backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(0, 174, 239, 0.15), transparent 50%)`,
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0" />
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </motion.div>
  );
}

const TEAM_MEMBERS = [
  {
    id: "aroof",
    name: "Aroof Shaikh",
    role: "CEO & Founder",
    image: "/images/team-aroof.jpg",
    fallbackImage: "https://reapmind.com/wp-content/uploads/2023/05/Aroof_370x400-370x400-1.jpg",
    linkedin: "https://www.linkedin.com/company/reapmind/",
    twitter: "https://twitter.com/ReapmindI",
    bio: "With over 5 years of pioneering digital innovation, Aroof Shaikh leads ReapMind with a clear vision: to empower organizations with revolutionary technologies and drive digital disruption across global markets.",
    focus: "Strategic Vision, Venture Growth, Deeptech Investments",
    icon: Lightbulb
  },
  {
    id: "bhaskar",
    name: "Bhaskar Nallamelli",
    role: "Head of Business Strategies",
    image: "/images/team-bhaskar.jpg",
    fallbackImage: "https://reapmind.com/wp-content/uploads/2023/05/Bhaskar_370x400-370x400-1.jpg",
    linkedin: "https://www.linkedin.com/company/reapmind/",
    twitter: "https://twitter.com/ReapmindI",
    bio: "Bhaskar drives ReapMind's commercial and strategic partnerships worldwide, designing scalable enterprise models that align perfectly with our clients' immediate and long-term milestones.",
    focus: "Global Expansion, Strategic Partnerships, Venture Models",
    icon: Target
  },
  {
    id: "keith",
    name: "Keith Wallace",
    role: "Head of Operational Strategies",
    image: "/images/team-keith.jpg",
    fallbackImage: "https://reapmind.com/wp-content/uploads/2024/11/keith.jpeg",
    linkedin: "https://www.linkedin.com/company/reapmind/",
    twitter: "https://twitter.com/ReapmindI",
    bio: "Keith oversees cross-functional engineering squads and operational processes, ensuring that our agile methodologies consistently deliver high-performance, robust software products.",
    focus: "Agile Operations, Engineering Cohorts, Client Delivery Success",
    icon: Award
  },
  {
    id: "venkat",
    name: "Venkatashwara Kakula",
    role: "Enterprise Architect",
    image: "/images/team-venkat.jpg",
    fallbackImage: "https://reapmind.com/wp-content/uploads/2023/05/Venkat_370x400-370x400-1.jpg",
    linkedin: "https://www.linkedin.com/company/reapmind/",
    twitter: "https://twitter.com/ReapmindI",
    bio: "Venkatashwara designs core frameworks and complex architectures for high-concurrency systems, ensuring premium security, scalability, and distributed ledger systems integration.",
    focus: "High-Concurrency Architectures, Web3/Blockchain Systems, Infrastructure",
    icon: Cpu
  }
];

const VALUES = [
  {
    title: "Five Years of Digital Innovation",
    description: "Our history is marked by pushing technological limits. We leverage emerging architectures to engineer competitive advantages for our clients.",
    icon: Cpu,
    color: "from-cyan-400 to-blue-500"
  },
  {
    title: "Commitment to Excellence",
    description: "We enforce high engineering rigor, clean code methodologies, and rigorous validation to deliver premium product scalability.",
    icon: ShieldCheck,
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Skilled Team of Professionals",
    description: "Our cross-functional teams consist of certified architects, creative experience designers, and meticulous agile product specialists.",
    icon: Users,
    color: "from-indigo-600 to-cyan-500"
  }
];

const BEST_CHOICES = [
  {
    title: "Technical Expertise",
    description: "Deep proficiency in building high-concurrency systems, robust database structures, and advanced AI architectures prepared for modern scaling demands.",
    icon: Terminal
  },
  {
    title: "Client-Centric Approach",
    description: "Transparent development pipelines, rapid feedback loops, and solutions designed to solve real-world problems and delight end customers.",
    icon: HeartHandshake
  },
  {
    title: "Youngster-Driven Force",
    description: "An agile, energetic engineering cohort adopting technology shifts with passion and speed, breathing innovative thinking into every codebase.",
    icon: Zap
  }
];

const STATS = [
  { value: "200+", label: "Specialists", icon: Briefcase },
  { value: "100+", label: "Corporate Clients", icon: Users2 },
  { value: "250+", label: "Projects Delivered", icon: CheckCircle },
  { value: "95+", label: "Client satisfaction rate", icon: ThumbsUp }
];

export default function TeamClient() {
  const [selectedLeader, setSelectedLeader] = useState<string>("aroof");
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const activeLeader = TEAM_MEMBERS.find((m) => m.id === selectedLeader) || TEAM_MEMBERS[0];

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mocking real lead generation or submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-background relative flex flex-col pt-20 overflow-x-hidden">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--mesh-1)_1px,transparent_1px)] [background-size:24px_24px] opacity-35 z-0" />
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] rounded-full bg-brand-deep/5 blur-[150px] pointer-events-none z-0" />

      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-pill mb-4 inline-flex">Our Team</span>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Know our <span className="text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent to-brand-bright">experts</span>
          </motion.h1>
          <motion.p 
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Leading the way to digital transformation with brilliant minds. Step into a world where digital transformation wonders abound, where innovation reigns supreme, and where your business soars to unprecedented heights.
          </motion.p>
        </div>

        {/* 2. CORE VALUES / PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {VALUES.map((val, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card/40 border border-border/50 rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${val.color} text-white flex items-center justify-center mb-6 shadow-md shadow-accent/10 transition-transform duration-500 group-hover:scale-110`}>
                <val.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-heading mb-4 group-hover:text-accent transition-colors duration-300">{val.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE LEADERSHIP SECTION */}
      <section className="bg-section-tint py-20 md:py-28 relative border-y border-border/30 z-10">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading
            title="Our Leadership Team"
            description="Meet the core leaders driving strategic innovations and engineering excellence at ReapMind."
            badge="Executive Leadership"
            align="center"
            className="mb-16 md:mb-20"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column: Interactive Selector List */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {TEAM_MEMBERS.map((member) => (
                <motion.button
                  key={member.id}
                  onClick={() => setSelectedLeader(member.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-5 p-5 rounded-2xl text-left border transition-all duration-300 ${
                    selectedLeader === member.id
                      ? "bg-card border-accent shadow-md shadow-accent/5 ring-1 ring-accent/10"
                      : "bg-card/35 border-border/40 hover:bg-card/85 hover:border-border"
                  }`}
                >
                  <div className="w-14 h-14 rounded-full overflow-hidden relative border-2 border-border flex-shrink-0">
                    <Image
                      src={imageErrors[member.id] ? member.fallbackImage : member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      onError={() => handleImageError(member.id)}
                      sizes="56px"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg transition-colors ${selectedLeader === member.id ? "text-accent" : "text-heading"}`}>
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-sm font-medium">{member.role}</p>
                  </div>
                  {selectedLeader === member.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-auto w-2 h-2 rounded-full bg-accent"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Right Column: Display Card with Transitions */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLeader.id}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.4 }}
                  className="bg-card border border-border/50 rounded-3xl p-8 md:p-10 shadow-xl backdrop-blur-sm relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden relative border border-border flex-shrink-0 shadow-lg bg-background">
                      <Image
                        src={imageErrors[activeLeader.id] ? activeLeader.fallbackImage : activeLeader.image}
                        alt={activeLeader.name}
                        fill
                        className="object-cover"
                        onError={() => handleImageError(activeLeader.id)}
                        sizes="(max-width: 768px) 128px, 160px"
                        unoptimized
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="text-accent-text font-bold text-sm tracking-wider uppercase bg-accent-soft px-3 py-1 rounded-full border border-accent/20">
                          {activeLeader.role}
                        </span>
                        <div className="flex gap-2">
                          <Link 
                            href={activeLeader.linkedin} 
                            target="_blank" 
                            className="p-1.5 rounded-lg bg-surface border border-border/50 text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors"
                          >
                            <LinkedInIcon className="w-4 h-4" />
                          </Link>
                          <Link 
                            href={activeLeader.twitter} 
                            target="_blank" 
                            className="p-1.5 rounded-lg bg-surface border border-border/50 text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors"
                          >
                            <TwitterIcon className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                      <h2 className="text-3xl font-extrabold text-heading mb-3">{activeLeader.name}</h2>
                      
                      <div className="flex items-center gap-2 text-brand font-semibold text-sm">
                        <activeLeader.icon className="w-4 h-4" />
                        <span>Focus: {activeLeader.focus}</span>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-border/50 my-6" />
                  
                  <div>
                    <h4 className="text-heading font-bold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                      <Compass className="w-4 h-4 text-accent" />
                      About Executive Leader
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-base">{activeLeader.bio}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "WHAT MAKES US THE BEST CHOICE" SECTION */}
      <section className="container mx-auto px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <SectionHeading
          title="Where brilliant minds attain unattainable innovation"
          description="ReapMind Innovations delivers an exceptional value proposition that distinguishes us from our competitors, thanks to a winning combination of cutting-edge technologies, unrivaled expertise, and a highly talented team of professional engineers."
          badge="Why ReapMind"
          align="center"
          className="mb-16 md:mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {BEST_CHOICES.map((item, i) => (
            <SpotlightCard key={i}>
              <div className="w-12 h-12 rounded-xl bg-accent-soft text-accent flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-heading mb-4">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.description}</p>
              <Link 
                href="/company" 
                className="text-accent font-semibold text-sm inline-flex items-center gap-1.5 mt-auto hover:text-accent-text transition-colors duration-300"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* 5. CAREERS SECTION */}
      <section className="container mx-auto px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left: Image with blob shape */}
          <motion.div
            variants={fadeRight}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="relative w-full aspect-[4/3] lg:aspect-[1.1] flex justify-center items-center"
          >
            <div className="absolute inset-0 bg-[#F5F7FA] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] scale-105 pointer-events-none" />
            <div className="relative w-full h-full overflow-hidden rounded-[50%] lg:rounded-[45%_55%_45%_55%/55%_45%_55%_45%] shadow-xl">
              <Image 
                src="/images/group.png" 
                alt="ReapMind Team"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            variants={fadeLeft}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <span className="font-semibold text-lg md:text-xl tracking-wide text-[#0B4E85]">
              Want to join our Team?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] text-[#00274C]">
              A successful company is built with reliable employees
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-2">
              If you are a passionate professional seeking professional adventure that will push the boundaries of innovation, Team ReapMind is waiting for you!
            </p>
            
            <Link 
              href="/contact-us" 
              className="mt-4 inline-flex items-center gap-2 font-semibold text-[#0B4E85] hover:text-[#00274C] transition-colors group"
            >
              Get in touch now 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6. CONTACT US & STATS SECTION (FOOTER BLOCK) */}
      <section className="relative w-full bg-[#2a93d5] overflow-hidden flex flex-col lg:flex-row z-10">
        {/* Background Decorative Waves (Approximation of Elementor waves) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-[40%] h-[150%] bg-[#1a74ae] opacity-30 rounded-full blur-[80px] -translate-x-[50%] -translate-y-[20%]" />
          <div className="absolute bottom-0 right-0 w-[50%] h-[150%] bg-[#1c78b4] opacity-40 rounded-full blur-[100px] translate-x-[30%] translate-y-[20%]" />
        </div>

        {/* Left Column: Dark Blue Box */}
        <div className="w-full lg:w-1/2 bg-[#124b7a] relative z-10 flex justify-center lg:justify-end py-16 px-6 lg:py-24 lg:pr-16 lg:pl-8 shadow-2xl">
          {/* Subtle wave on the left edge of the dark box to mimic screenshot */}
          <div className="absolute top-0 left-0 w-24 h-full bg-[#185d94] opacity-50 blur-[40px] -translate-x-1/2 pointer-events-none" />
          
          <div className="w-full max-w-[550px] flex flex-col gap-10">
            <motion.div
              variants={fadeRight}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Contact Us<br />for project discussion
              </h2>
              <p className="text-[#32a8e6] text-lg font-medium mt-6 leading-relaxed max-w-[450px]">
                Once you fill out this form, our sales representatives will contact you within 24 hours.
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-y-12 gap-x-8 mt-4"
            >
              {STATS.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <stat.icon className="w-10 h-10 text-[#27b968] mb-3" strokeWidth={1.5} />
                  <span className="text-3xl font-bold text-white tracking-tight">{stat.value}</span>
                  <span className="text-[15px] font-semibold text-[#eb8824]">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="flex items-center gap-4 mt-6"
            >
              {[
                { icon: FacebookIcon, href: "https://www.facebook.com/ReapMind/" },
                { icon: LinkedInIcon, href: "https://www.linkedin.com/company/reapmind/" },
                { icon: InstagramIcon, href: "https://www.instagram.com/reapmind.innovations/" },
                { icon: TwitterIcon, href: "https://twitter.com/ReapmindI" }
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center text-white hover:text-[#2da5f0] transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full lg:w-1/2 relative z-10 flex justify-center lg:justify-start py-16 px-6 lg:py-24 lg:pl-16 lg:pr-8">
          <div className="w-full max-w-[550px]">
            <motion.form 
              variants={fadeLeft}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="flex flex-col gap-8" 
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-semibold uppercase tracking-wider">
                  Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-white rounded-none px-4 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#124b7a]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-white text-sm font-semibold uppercase tracking-wider">
                    Code
                  </label>
                  <div className="relative">
                    <select className="w-full bg-white rounded-none px-4 py-4 pr-10 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#124b7a] appearance-none">
                      <option>IN (+91)</option>
                      <option>US (+1)</option>
                      <option>UK (+44)</option>
                      <option>AE (+971)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white text-sm font-semibold uppercase tracking-wider">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full bg-white rounded-none px-4 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#124b7a]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-semibold uppercase tracking-wider">
                  Email <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-white rounded-none px-4 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#124b7a]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-white text-sm font-semibold uppercase tracking-wider">
                    Budget
                  </label>
                  <div className="relative">
                    <select className="w-full bg-white rounded-none px-4 py-4 pr-10 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#124b7a] appearance-none">
                      <option>Budget</option>
                      <option>&lt; $10k</option>
                      <option>$10k - $50k</option>
                      <option>&gt; $50k</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white text-sm font-semibold uppercase tracking-wider">
                    I Prefer To
                  </label>
                  <div className="relative">
                    <select className="w-full bg-white rounded-none px-4 py-4 pr-10 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#124b7a] appearance-none">
                      <option>I Prefer To</option>
                      <option>Discuss a Project</option>
                      <option>Hire Developers</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-semibold uppercase tracking-wider">
                  Message
                </label>
                <textarea 
                  rows={4}
                  placeholder="Describe your idea to help us assign the relevant consultation expert." 
                  className="w-full bg-white rounded-none px-4 py-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#124b7a] resize-none"
                />
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </main>
  );
}
