"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  User, 
  Briefcase, 
  FileText, 
  DollarSign, 
  Layers, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Quote,
  MessageCircle,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { HERO_CLIENT_LOGOS } from "@/data/site-content";

interface Office {
  city: string;
  address: string;
  mapsUrl: string;
}

const OFFICES: Office[] = [
  {
    city: "Mumbai",
    address: "Kalpataru Plaza, 503, Chincholi Bunder Rd, Malad, Nadiyawala Colony 2, W, Mumbai, Maharashtra 400064",
    mapsUrl: "https://maps.google.com/?q=Kalpataru+Plaza+Malad+Mumbai"
  },
  {
    city: "Bangalore",
    address: "175, Bannerghatta Main Rd, Dollars Colony, Phase 4, J. P. Nagar, Bengaluru, Karnataka 560076",
    mapsUrl: "https://maps.google.com/?q=175+Bannerghatta+Main+Rd+Dollars+Colony+Bangalore"
  },
  {
    city: "Development Center (Kolhapur)",
    address: "4th Floor, Business Hub, IDFC Bank, 401, Sykes Extension, Kolhapur, Maharashtra, 416001",
    mapsUrl: "https://maps.google.com/?q=Business+Hub+IDFC+Bank+Sykes+Extension+Kolhapur"
  },
  {
    city: "USA",
    address: "Atlanta, Georgia, United States of America (USA).",
    mapsUrl: "https://maps.google.com/?q=Atlanta+Georgia+USA"
  }
];

const TESTIMONIALS = [
  {
    quote: "Reapmind’s e-commerce web application development has been instrumental in our success. Their expertise has enabled us to establish a comprehensive e-retail ecosystem, and their contribution has added significant value to our business, enhancing our overall system and driving our success forward. Highly recommended!",
    author: "S. D. Shibulal",
    role: "Co-Founder, Infosys & Founder, Innovations Investment Management India Private Ltd",
    avatar: "/images/contact/shibulal.png"
  },
  {
    quote: "Reapmind has been an outstanding product partner for & Connection INC. Their exceptional technical support has brought to life unique and innovative features that have significantly elevated our app’s functionality and user experience. Reapmind’s commitment to delivering excellence has been instrumental in our success. Highly recommended for top-notch app development services.",
    author: "Mr. Jeremy Del Zotto",
    role: "Founder & CEO, & Connection INC. (Canada)",
    avatar: "/images/contact/jeremy.png"
  },
  {
    quote: "At Synerphase, Inc., our collaboration with Reapmind has been truly transformational. Their unwavering support for cutting-edge technological innovation turned our concept into a functional product. Reapmind’s expertise and commitment breathed life into our vision. We highly recommend Reapmind to those seeking a reliable partner capable of translating innovative concepts into tangible, efficient solutions.",
    author: "Roland Owens",
    role: "Director, Synerphase, Inc., Silicon Valley (USA)",
    avatar: "/images/contact/roland.png"
  },
  {
    quote: "At Vytal, our collaboration with Reapmind on two applications was exceptional. Their dynamic team grasped our unique needs, collaborating closely with our own. They not only created visually appealing apps but also ensured functionality and user-friendliness. Prompt issue resolution, transparent communication, and adaptable professionalism defined our experience. Highly recommend!",
    author: "Miss Gunjan Jain",
    role: "Founder and CEO of Internationally Awarded Healthtech Ventures",
    avatar: "/images/contact/gunjan.png"
  },
  {
    quote: "Partnering with Reapmind was a game-changer for Leep Rideshare. Their deep understanding and close collaboration resulted in appealing and user-friendly apps. Quick issue resolution, clear communication, and a flexible and professional approach made the journey remarkable. We highly recommend Reapmind for its exceptional relationship-driven solutions.",
    author: "Leep Rideshare Team",
    role: "CTO of Leep Rideshare LLC",
    avatar: ""
  },
  {
    quote: "At Deutsch Quality Systems (India), our collaboration with Reapmind speaks volumes. They developed a unique offline auditor app, a rarity that demanded an exceptional team. Reapmind crafted a solution that not only addressed our specific needs but also added significant value to our business. The app’s innovative approach, efficient time-saving, and user-friendly navigation have been remarkable!",
    author: "DQS Team",
    role: "CEO, Deutsch Quality Systems (India)",
    avatar: ""
  }
];

const STAND_OUT_STATS = [
  { value: "15+ Million", label: "User Engagement", desc: "Our products successfully scale and support millions of active interactions." },
  { value: "Guaranteed", label: "Project Delivery", desc: "Rigorous standards ensure projects are delivered on-schedule and scope." },
  { value: "Free", label: "Business Analysis", desc: "We map out your logic, workflows, and blueprints before writing any code." },
  { value: "Project", label: "Penalty Enforcement", desc: "We hold ourselves accountable with penalty clauses for missed milestones." },
  { value: "IBM Certified", label: "Partners", desc: "Top-tier certification and partnership credentials with industry leaders." },
  { value: "1000+", label: "Projects Delivered", desc: "A robust track record of deploying web, mobile, and automation solutions." },
  { value: "12+ Years", label: "IT Exposure", desc: "Experienced technology engineering leadership steering complex pipelines." },
  { value: "24*7 Support", label: "Availability", desc: "Round-the-clock specialized engineering support whenever you need it." }
];

const BEGIN_STEPS = [
  {
    step: "01",
    title: "Contact Us",
    desc: "Fill out the form to schedule a personalized consultation with our experts.",
    icon: "/images/contact/connect.jpg"
  },
  {
    step: "02",
    title: "Get A Quotation",
    desc: "Based on your project, we will share a proposal for cost and timeline estimates.",
    icon: "/images/contact/collaborate.png"
  },
  {
    step: "03",
    title: "Project Kickoff",
    desc: "Sign the contract and form a partnership with us to kick-start your project.",
    icon: "/images/contact/create.png"
  }
];

const AWARDS = [
  { title: "Clutch’s Top Software Developers Winner 2023", src: "/images/contact/clutch.svg" },
  { title: "Forbes Technology Council Member 2023", src: "/images/contact/forbes.png" },
  { title: "Top Software Development Companies by Goodfirms", src: "/images/contact/goodfirms.svg" }
];

type FormType = "client" | "team" | "general";

export default function ContactClient() {
  const [activeTab, setActiveTab] = useState<FormType>("client");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "Below $10K",
    preference: "Software Development",
    position: "Frontend Developer",
    resumeUrl: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [testimonialIdx, setTestimonialIdx] = useState(0);

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
      phone: "",
      budget: "Below $10K",
      preference: "Software Development",
      position: "Frontend Developer",
      resumeUrl: "",
      subject: "",
      message: ""
    });
    setStatus("idle");
  };

  const nextTestimonial = () => {
    setTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-accent/20">
      
      {/* 2026 Grid Background & Light Orbs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,174,239,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,174,239,0.08)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-brand/15 to-transparent blur-[140px] pointer-events-none -z-10" />
      
      {/* Main Container */}
      <div className="mx-auto max-w-6xl px-6 pb-32 pt-44 lg:pt-48">
        
        {/* Modern Hero with scaled typography */}
        <div className="mb-20 text-left max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-350 dark:border-slate-650 bg-surface/35 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Contact Us
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-5xl font-extrabold tracking-tight md:text-7xl text-foreground font-sans leading-[1.05] mb-6"
          >
            Connect with our <span className="bg-gradient-to-r from-accent to-brand bg-clip-text text-transparent">innovation experts</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-2xl text-muted-foreground font-normal leading-relaxed"
          >
            Whether you want to launch a new product, join our team, or obtain a project quote, we're ready to partner with you.
          </motion.p>
        </div>

        {/* Dynamic Interaction Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 mb-32 items-start">
          
          {/* Left panel: Direct Channels */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-3">
                Connect Directly
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Choose the channel that works best for you. We're ready to help optimize and automate your business operations.
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <a 
                href="tel:+919637828283"
                className="group flex items-center justify-between p-5 rounded-xl border border-slate-350 dark:border-slate-650 bg-surface/20 hover:bg-surface/50 transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface/50 border border-slate-350 dark:border-slate-650 text-muted-foreground group-hover:text-accent group-hover:border-accent/40 transition-colors duration-300">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-muted-foreground font-bold uppercase tracking-widest">Call Us</span>
                    <span className="text-base font-bold text-foreground">+91 9637828283</span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/919637828283"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-xl border border-slate-350 dark:border-slate-650 bg-surface/20 hover:bg-surface/50 transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface/50 border border-slate-350 dark:border-slate-650 text-muted-foreground group-hover:text-accent group-hover:border-accent/40 transition-colors duration-300">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-muted-foreground font-bold uppercase tracking-widest">WhatsApp Chat</span>
                    <span className="text-base font-bold text-foreground">Chat on WhatsApp</span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>

              {/* Email */}
              <a 
                href="mailto:info@reapmind.com"
                className="group flex items-center justify-between p-5 rounded-xl border border-slate-350 dark:border-slate-650 bg-surface/20 hover:bg-surface/50 transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface/50 border border-slate-350 dark:border-slate-650 text-muted-foreground group-hover:text-accent group-hover:border-accent/40 transition-colors duration-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-muted-foreground font-bold uppercase tracking-widest">Email Us</span>
                    <span className="text-base font-bold text-foreground">info@reapmind.com</span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            </div>

            <div className="rounded-xl border border-slate-350 dark:border-slate-650 bg-surface/10 p-6 shadow-sm">
              <h4 className="text-sm font-bold text-foreground mb-2 uppercase tracking-widest flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                Dedicated Support
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our support specialists are online to ensure your digital transformation journey is smooth and successful.
              </p>
            </div>
          </motion.div>

          {/* Right Panel: Sleek developer-grade tabbed form with larger fields */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            {/* Vercel-style Tab Bar */}
            <div className="flex border-b border-slate-300 dark:border-slate-700 mb-8 w-full">
              {(["client", "team", "general"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => { setActiveTab(tab); handleReset(); }}
                  className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative px-4 cursor-pointer flex-1 text-center ${
                    activeTab === tab ? "text-accent" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab === "client" ? "Become a Client" : tab === "team" ? "Join Our Team" : "General"}
                  {activeTab === tab && (
                    <motion.div layoutId="contactUnderline" className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-accent" />
                  )}
                </button>
              ))}
            </div>

            {/* Form Fields container with larger sizing */}
            <div className="border border-slate-350 dark:border-slate-650 rounded-2xl bg-surface/20 p-8 md:p-10 backdrop-blur-md shadow-lg">
              <AnimatePresence mode="wait">
                {status !== "success" ? (
                  <motion.form 
                    key={activeTab}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1.5 flex items-center gap-2">
                        {activeTab === "client" && <>Request a Quote <Sparkles className="h-5 w-5 text-accent animate-pulse" /></>}
                        {activeTab === "team" && <>Join Our Team <Briefcase className="h-5 w-5 text-accent" /></>}
                        {activeTab === "general" && <>Send a Message <MessageSquare className="h-5 w-5 text-accent" /></>}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {activeTab === "client" && "Fill out the form to receive a customized quote tailored to your needs & receive pricing & availability information."}
                        {activeTab === "team" && "Tell us a bit about your experience and why you'd like to join ReapMind."}
                        {activeTab === "general" && "Submit a general inquiry message, and we'll reply within 24 hours."}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full text-base rounded-lg border border-slate-350 dark:border-slate-650 bg-background/50 px-4 py-3 text-foreground transition-all placeholder:text-muted-foreground/60 focus:border-accent focus:bg-background focus:outline-none focus:ring-1 focus:ring-accent"
                          placeholder="Your Name *"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full text-base rounded-lg border border-slate-350 dark:border-slate-650 bg-background/50 px-4 py-3 text-foreground transition-all placeholder:text-muted-foreground/60 focus:border-accent focus:bg-background focus:outline-none focus:ring-1 focus:ring-accent"
                          placeholder="Your Email *"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full text-base rounded-lg border border-slate-350 dark:border-slate-650 bg-background/50 px-4 py-3 text-foreground transition-all placeholder:text-muted-foreground/60 focus:border-accent focus:bg-background focus:outline-none focus:ring-1 focus:ring-accent"
                          placeholder="Phone No. *"
                        />
                      </div>

                      {/* Option select */}
                      <div>
                        {activeTab === "client" && (
                          <>
                            <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Budget *</label>
                            <select
                              id="budget"
                              value={formData.budget}
                              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                              className="w-full text-base rounded-lg border border-slate-350 dark:border-slate-650 bg-background/50 px-4 py-3 text-foreground transition-all focus:border-accent focus:bg-background focus:outline-none cursor-pointer"
                            >
                              <option value="Below $10K">Below $10K</option>
                              <option value="$10K - $25K">$10K - $25K</option>
                              <option value="$25K - $50K">$25K - $50K</option>
                              <option value="$50 - $100K">$50 - $100K</option>
                              <option value="$100K and more">$100K and more</option>
                            </select>
                          </>
                        )}

                        {activeTab === "team" && (
                          <>
                            <label htmlFor="position" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Position of Interest *</label>
                            <select
                              id="position"
                              value={formData.position}
                              onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                              className="w-full text-base rounded-lg border border-slate-350 dark:border-slate-650 bg-background/50 px-4 py-3 text-foreground transition-all focus:border-accent focus:bg-background focus:outline-none cursor-pointer"
                            >
                              <option value="Frontend Developer">Frontend Developer</option>
                              <option value="Backend Developer">Backend Developer</option>
                              <option value="Full Stack Developer">Full Stack Developer</option>
                              <option value="Mobile App Developer">Mobile App Developer</option>
                              <option value="UI/UX Designer">UI/UX Designer</option>
                              <option value="Project Manager">Project Manager</option>
                            </select>
                          </>
                        )}

                        {activeTab === "general" && (
                          <>
                            <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Subject *</label>
                            <input
                              type="text"
                              id="subject"
                              required
                              value={formData.subject}
                              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                              className="w-full text-base rounded-lg border border-slate-350 dark:border-slate-650 bg-background/50 px-4 py-3 text-foreground transition-all placeholder:text-muted-foreground/60 focus:border-accent focus:bg-background focus:outline-none focus:ring-1 focus:ring-accent"
                              placeholder="Subject"
                            />
                          </>
                        )}
                      </div>
                    </div>

                    {/* Preference / Resume link */}
                    {activeTab === "client" && (
                      <div>
                        <label htmlFor="preference" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">I Prefer To *</label>
                        <select
                          id="preference"
                          value={formData.preference}
                          onChange={(e) => setFormData({ ...formData, preference: e.target.value })}
                          className="w-full text-base rounded-lg border border-slate-350 dark:border-slate-650 bg-background/50 px-4 py-3 text-foreground transition-all focus:border-accent focus:bg-background focus:outline-none cursor-pointer"
                        >
                          <option value="Software Development">Software Development</option>
                          <option value="Digital Transformation">Digital Transformation</option>
                          <option value="App Development">App Development</option>
                          <option value="Team Extension">Team Extension</option>
                          <option value="DevOps">DevOps</option>
                          <option value="IoT">IoT</option>
                        </select>
                      </div>
                    )}

                    {activeTab === "team" && (
                      <div>
                        <label htmlFor="resumeUrl" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Resume / Portfolio Link *</label>
                        <input
                          type="url"
                          id="resumeUrl"
                          required
                          value={formData.resumeUrl}
                          onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                          className="w-full text-base rounded-lg border border-slate-350 dark:border-slate-650 bg-background/50 px-4 py-3 text-foreground transition-all placeholder:text-muted-foreground/60 focus:border-accent focus:bg-background focus:outline-none focus:ring-1 focus:ring-accent"
                          placeholder="https://drive.google.com/..."
                        />
                      </div>
                    )}

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        {activeTab === "client" ? "Tell us more about your project" : "Message / Cover Letter *"}
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full text-base rounded-lg border border-slate-350 dark:border-slate-650 bg-background/50 px-4 py-3 text-foreground transition-all placeholder:text-muted-foreground/60 focus:border-accent focus:bg-background focus:outline-none resize-none focus:ring-1 focus:ring-accent"
                        placeholder={
                          activeTab === "client" 
                            ? "Describe your idea to help us assign the relevant consultation expert." 
                            : "Your message..."
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full rounded-lg bg-foreground text-background py-4 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-all hover:opacity-90 active:scale-[0.99] disabled:opacity-50"
                    >
                      {status === "submitting" ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-current" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Submit Now
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="h-16 w-16 bg-accent/10 border border-accent/20 flex items-center justify-center rounded-full text-accent mb-6 animate-bounce">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2.5">
                      Message Received!
                    </h3>
                    <p className="max-w-md text-sm text-muted-foreground mb-8 leading-relaxed">
                      Thank you for contacting ReapMind. Our technical advisors are reviewing your inquiry and will reach out shortly.
                    </p>
                    <button
                      onClick={handleReset}
                      className="border border-slate-350 dark:border-slate-650 bg-surface/20 py-3 px-6 text-xs uppercase tracking-widest font-bold inline-flex items-center gap-2 rounded-lg hover:bg-surface transition-colors cursor-pointer"
                    >
                      Submit Another Message
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Section: How ReapMind Stand Out for You? */}
        <div className="border-t border-slate-300 dark:border-slate-700 pt-24 pb-24">
          <div className="mb-16">
            <span className="badge-pill mb-4 inline-flex">How ReapMind Stand Out for You ?</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl mb-4 leading-none">
              How ReapMind Stand Out for You ?
            </h2>
            <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
              ReapMind is not an idea but an initiative to bring transformation aided by technology. Learning with a team of seasoned experts and agile thinkers is a real-life experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STAND_OUT_STATS.map((stat) => (
              <div
                key={stat.label}
                className="border border-slate-300 dark:border-slate-700 bg-surface/10 p-6 rounded-xl hover:bg-surface/25 hover:border-slate-400 hover:dark:border-slate-500 transition-all duration-300 flex flex-col justify-between shadow-sm min-h-[180px]"
              >
                <div>
                  <div className="text-accent text-3xl font-black mb-3 select-none tracking-tight">
                    {stat.value}
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-1.5">
                    {stat.label}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: How to Begin? (Process steps with scaled step icons) */}
        <div className="border-t border-slate-300 dark:border-slate-700 pt-24 pb-24">
          <div className="mb-16">
            <span className="badge-pill mb-4 inline-flex">How to Begin?</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl mb-4 leading-none">
              How to Begin?
            </h2>
            <p className="text-muted-foreground max-w-xl text-base leading-relaxed">
              Embark on a structured process built for quality, accountability, and project speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            <div className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-[1px] bg-slate-300 dark:bg-slate-700 -z-10" />

            {BEGIN_STEPS.map((step) => (
              <div key={step.step} className="flex flex-col items-start group">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-surface border border-slate-300 dark:border-slate-700 shadow-md mb-6 group-hover:border-accent transition-colors duration-300 overflow-hidden relative">
                  <Image 
                    src={step.icon}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: What our clients say (Testimonials Slider with scaled avatars) */}
        <div className="border-t border-slate-300 dark:border-slate-700 pt-24 pb-24">
          <div className="mb-16">
            <span className="badge-pill mb-4 inline-flex">What Our Clients Say</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl mb-4 leading-none">
              What Our Clients Say About Us
            </h2>
            <p className="text-muted-foreground max-w-xl text-base leading-relaxed">
              Read real-life testimonials from international startup founders, healthtech innovators, and enterprise directors.
            </p>
          </div>

          <div className="max-w-3xl">
            <div className="border border-slate-300 dark:border-slate-700 rounded-2xl bg-surface/10 p-10 relative overflow-hidden shadow-md">
              <Quote className="absolute right-6 bottom-6 h-32 w-32 text-slate-300/10 dark:text-slate-700/10 pointer-events-none" />

              <div className="min-h-[180px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonialIdx}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="text-base md:text-lg text-foreground font-medium italic leading-relaxed mb-6">
                      "{TESTIMONIALS[testimonialIdx].quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      {TESTIMONIALS[testimonialIdx].avatar ? (
                        <div className="h-16 w-16 rounded-full border border-slate-300 dark:border-slate-700 overflow-hidden relative bg-slate-100 shadow-sm">
                          <Image 
                            src={TESTIMONIALS[testimonialIdx].avatar}
                            alt={TESTIMONIALS[testimonialIdx].author}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="h-16 w-16 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center bg-accent-soft text-accent text-sm font-bold shadow-sm">
                          {TESTIMONIALS[testimonialIdx].author.split(' ').map(n => n[0]).join('').substring(0, 2)}
                        </div>
                      )}
                      <div>
                        <h4 className="text-base font-extrabold text-foreground leading-none">
                          {TESTIMONIALS[testimonialIdx].author}
                        </h4>
                        <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mt-2 leading-none">
                          {TESTIMONIALS[testimonialIdx].role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex gap-2 mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 justify-end">
                  <button
                    type="button"
                    onClick={prevTestimonial}
                    className="h-9 w-9 rounded-lg border border-slate-300 dark:border-slate-700 flex items-center justify-center hover:bg-surface text-foreground transition-all cursor-pointer shadow-sm"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextTestimonial}
                    className="h-9 w-9 rounded-lg border border-slate-300 dark:border-slate-700 flex items-center justify-center hover:bg-surface text-foreground transition-all cursor-pointer shadow-sm"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Industry Recognitions & Awards (with scaled award cards) */}
        <div className="border-t border-slate-300 dark:border-slate-700 pt-24 pb-24">
          <div className="mb-16">
            <span className="badge-pill mb-4 inline-flex">Recognitions</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl leading-none">
              Industry Recognitions & Awards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            {AWARDS.map((award) => (
              <div
                key={award.title}
                className="border border-slate-300 dark:border-slate-700 p-8 rounded-xl flex flex-col items-center justify-between text-center bg-surface/10 hover:border-slate-400 hover:bg-surface/20 transition-all duration-300 shadow-sm min-h-[220px]"
              >
                <div className="h-24 w-44 relative mb-5 flex items-center justify-center">
                  <img
                    src={award.src}
                    alt={award.title}
                    className="max-h-20 max-w-[150px] object-contain grayscale opacity-65 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <h4 className="text-sm font-bold text-foreground leading-relaxed max-w-[200px]">
                  {award.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Among our clients */}
        <div className="border-t border-slate-300 dark:border-slate-700 pt-24 pb-16 overflow-hidden">
          <div className="mb-10 text-center md:text-left">
            <span className="badge-pill mb-4 inline-flex">Clients</span>
            <h2 className="text-2xl font-extrabold text-foreground">
              Among our clients
            </h2>
          </div>

          {/* Seamless Marquee Loop */}
          <div className="relative w-full overflow-hidden marquee-mask py-2">
            <div className="flex w-[200%] animate-marquee gap-10 items-center justify-around">
              {HERO_CLIENT_LOGOS.map((logo, idx) => (
                <div 
                  key={`logo-1-${idx}`} 
                  className="flex items-center justify-center h-12 w-28 relative grayscale opacity-45 grayscale-0 opacity-100 transition-all duration-300"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name}
                    className="max-h-18 max-w-[200px] object-contain"
                  />
                </div>
              ))}
              {HERO_CLIENT_LOGOS.map((logo, idx) => (
                <div 
                  key={`logo-2-${idx}`} 
                  className="flex items-center justify-center h-12 w-28 relative grayscale opacity-45 grayscale-0 opacity-100 transition-all duration-300"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name}
                    className="max-h-8 max-w-[100px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section: Offices & Locations */}
        <div className="border-t border-slate-300 dark:border-slate-700 pt-24">
          <div className="mb-12">
            <span className="badge-pill mb-4 inline-flex">Global</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Our Offices
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {OFFICES.map((office) => (
              <div
                key={office.city}
                className="border border-slate-300 dark:border-slate-700 p-5 rounded-xl bg-surface/10 flex flex-col justify-between shadow-sm min-h-[220px]"
              >
                <div>
                  <div className="h-8 w-8 rounded-lg bg-surface/50 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{office.city}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {office.address}
                  </p>
                </div>
                
                <a
                  href={office.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold uppercase tracking-wider inline-flex items-center gap-1 text-accent hover:text-foreground transition-colors mt-auto group w-fit"
                >
                  View on Map
                  <ExternalLink className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
