'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import {
  ArrowRight, Quote, Star, ChevronLeft, ChevronRight, ChevronDown,
  Smartphone, Code, Shield, Zap, RefreshCw, TestTube,
  Globe, Download, Wifi, TrendingDown, Users, Award,
  CheckCircle2, BarChart3, Layers, Phone, Mail, MapPin,
} from 'lucide-react';
import {
  SHARED_TESTIMONIALS, SHARED_BLOG_POSTS, SHARED_PORTFOLIO_ITEMS,
  SHARED_INDUSTRIES, SHARED_STATS, SHARED_CLIENT_LOGOS,
} from '@/data/shared-page-data';

/* ─── page data ───────────────────────────────────────────────────── */
const pwaServices = [
  {
    icon: Smartphone,
    title: 'Custom PWA Development',
    description: 'Bespoke Progressive Web Apps engineered around your brand, audience, and business objectives — from design to deployment, optimised for every device.',
  },
  {
    icon: BarChart3,
    title: 'PWA Consulting',
    description: 'Not sure where to start? We analyse your business, define your target market, and craft a PWA strategy with a clear roadmap from ideation to launch.',
  },
  {
    icon: RefreshCw,
    title: 'PWA Migration',
    description: 'Transform your existing website or web app into a fast, installable, offline-capable PWA — without losing SEO, content, or user data.',
  },
  {
    icon: TestTube,
    title: 'PWA Testing',
    description: 'Comprehensive functional, performance, compatibility, security, and UX testing across devices and browsers to ensure a flawless user experience.',
  },
  {
    icon: Shield,
    title: 'PWA Maintenance & Support',
    description: 'Ongoing monitoring, security updates, performance tuning, and feature enhancements — keeping your PWA fast, secure, and competitive post-launch.',
  },
];

const pwaAdvantages = [
  { icon: Zap,         title: 'Instant Loading',             description: 'PWAs load instantly even on slow networks — service workers pre-cache assets so users get content in under a second, every time.' },
  { icon: Globe,       title: 'Cross-Platform',              description: 'One codebase runs on every device and browser. No App Store friction, no platform lock-in, and a fraction of native app development cost.' },
  { icon: Download,    title: 'No Download Required',        description: 'Users access your PWA directly from any browser. Add to Home Screen in one tap — no app store approval, no install barrier.' },
  { icon: Wifi,        title: 'Offline Capable',             description: 'Service workers enable full offline functionality. Users keep working even with zero connectivity, and sync automatically when back online.' },
  { icon: TrendingDown,title: 'Lower Development Cost',      description: 'A single PWA replaces separate iOS, Android, and web builds — cutting development time and maintenance costs significantly.' },
  { icon: Users,       title: 'Higher Engagement',           description: 'Push notifications, home screen presence, and app-like UX drive 3× higher engagement compared to standard mobile websites.' },
];

// ReapMind process — locally hosted images
const processSteps = [
  {
    num: '01',
    title: 'Agile Approach',
    description: 'Sprint-based delivery with weekly checkpoints. You see working software at every stage and shape direction with your feedback — never waiting until the end to find out what was built.',
    image: '/images/process/process-agile.jpg',
  },
  {
    num: '02',
    title: 'Planning',
    description: 'In-depth discovery sessions map your user journeys, technical requirements, integration points, and success metrics before development begins.',
    image: '/images/process/process-planning.jpg',
  },
  {
    num: '03',
    title: 'UI / UX Designing',
    description: 'Pixel-perfect interfaces designed for engagement. Every screen is crafted to be fast, intuitive, and delightful — optimised for both mobile and desktop.',
    image: '/images/process/process-design.jpg',
  },
  {
    num: '04',
    title: 'Coding',
    description: 'Clean, documented, maintainable code built with modern web standards — React, Next.js, service workers, and Web App Manifests — for peak PWA performance.',
    image: '/images/process/process-coding.jpg',
  },
  {
    num: '05',
    title: 'Quality Assurance',
    description: 'Thorough functional, performance, cross-browser, and security testing at every milestone ensures your PWA meets the highest quality bar before any release.',
    image: '/images/process/image.png',
  },
  {
    num: '06',
    title: 'Launch',
    description: 'Structured go-live with performance monitoring, analytics setup, and a hypercare period — ensuring a smooth rollout and rapid iteration post-launch.',
    image: '/images/process/process-launch.jpg',
  },
];

const whyReapMind = [
  { icon: Award,        title: 'Ensure Innovation',      description: 'Creative, original PWA concepts that set your product apart — our team brings fresh thinking to every brief.' },
  { icon: CheckCircle2, title: 'Quality Assurance',      description: 'Rigorous testing and debugging at every stage ensures stability, scalability, and a user experience that earns trust.' },
  { icon: Zap,          title: 'On-Time Delivery',       description: 'We respect your timeline. Agile methodology and transparent project management means no surprises at the finish line.' },
  { icon: Users,        title: 'Client-First Culture',   description: 'Your success is the metric we optimize for. Dedicated project managers and open communication throughout.' },
  { icon: Globe,        title: 'India, USA & UAE',       description: 'Global delivery teams giving you around-the-clock support and genuine local expertise in key markets.' },
  { icon: Layers,       title: 'Full-Spectrum Service',  description: 'Strategy, design, development, testing, launch, and ongoing maintenance — everything under one roof.' },
];

const faqs = [
  { q: 'What is a Progressive Web App (PWA)?', a: 'A PWA is a web application that uses modern browser capabilities to deliver a native app-like experience — including offline access, push notifications, and home screen installation — without requiring an app store download. Built with HTML, CSS, and JavaScript, PWAs work on any device with a modern browser.' },
  { q: 'Why should I choose PWA over a native app?', a: 'PWAs cost less to build and maintain, reach users on every platform with a single codebase, load faster, and remove the friction of app store downloads. For most consumer-facing use cases, a well-built PWA delivers 90% of the native app experience at a fraction of the investment.' },
  { q: 'What industries do you serve?', a: 'We build PWAs for e-commerce, healthcare, education, finance, media, travel, and logistics. Our approach adapts to the unique workflows and compliance requirements of each sector.' },
  { q: 'What engagement models do you offer?', a: 'We offer fixed-price, time and material, dedicated team, and hybrid models. After understanding your project, we recommend the structure that best fits your timeline, budget, and risk profile.' },
  { q: 'What technologies do you use?', a: 'We primarily build with React and Next.js for the application layer, backed by service workers, Web App Manifests, and the latest PWA APIs. We stay current with evolving browser capabilities to ensure maximum compatibility and performance.' },
  { q: 'Do you provide post-launch support?', a: 'Yes — all engagements include a warranty period, and we offer tiered maintenance plans covering monitoring, security updates, performance optimisation, and feature enhancements.' },
];

/* ─── helpers ─────────────────────────────────────────────────────── */
function TestimonialAvatar({ image, initials, name, size }: {
  image: string | null; initials?: string; name: string; size: 'lg' | 'sm';
}) {
  const dim    = size === 'lg' ? 'w-20 h-20' : 'w-10 h-10';
  const text   = size === 'lg' ? 'text-xl'   : 'text-sm';
  const radius = size === 'lg' ? 'rounded-2xl' : 'rounded-xl';
  const label  = initials ?? name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  if (image) return (
    <div className={`relative ${dim} ${radius} overflow-hidden shrink-0`}>
      <Image src={image} alt={name} fill className="object-cover" />
    </div>
  );
  return (
    <div className={`${dim} ${radius} flex items-center justify-center font-bold ${text} shrink-0 select-none`}
      style={{ background: 'var(--accent-soft)', color: 'var(--accent-text)' }} aria-label={name}>
      {label}
    </div>
  );
}

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    const step = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * to));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─── page ───────────────────────────────────────────────────────── */
export default function PwaPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="overflow-x-hidden">

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center"
        style={{ background: 'linear-gradient(135deg, var(--brand-sky-soft) 0%, #daeef9 40%, var(--background) 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(var(--brand-sky) 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.35 }} />
        <div className="absolute top-0 right-0 w-[55vw] h-[70vh] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(0,174,239,0.12) 0%, transparent 65%)' }} />
        <div className="relative container mx-auto px-6 lg:px-8 py-36 lg:py-44 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
            <span className="badge-pill mb-8">Progressive Web App Development</span>
            <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-black leading-[1.02] mb-7"
              style={{ color: 'var(--heading)', letterSpacing: '-0.04em' }}>
              One App.<br />Every Device.<br />
              <span style={{ color: 'var(--brand-blue)' }}>Zero Compromise.</span>
            </h1>
            <p className="text-[1.05rem] leading-[1.75] mb-10 max-w-lg" style={{ color: 'var(--muted-foreground)' }}>
              We build Progressive Web Apps that load instantly, work offline, and feel native — giving your users a seamless experience on any device without the friction of an app store download.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us" className="btn-primary px-7 py-3.5 text-sm">
                Build Your PWA <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#process" className="btn-secondary px-7 py-3.5 text-sm">
                See Our Process
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.18 }}
            className="hidden lg:grid grid-cols-2 gap-4">
            {SHARED_STATS.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.28 + i * 0.09 }}
                className="rounded-2xl p-7 flex flex-col gap-1.5 section-card">
                <span className="text-[2.25rem] font-black tracking-tight stat-value">
                  <Counter to={parseInt(s.value)} suffix={s.value.replace(/[0-9]/g, '')} />
                </span>
                <span className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="absolute bottom-0 inset-x-0 border-t py-6"
          style={{ borderColor: 'var(--border)', background: 'var(--surface)', backdropFilter: 'blur(16px)' }}>
          <div className="container mx-auto px-6 lg:px-8">
            <p className="text-center text-sm font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ color: 'var(--muted-foreground)', opacity: 0.7 }}>Trusted by global enterprises</p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
              {SHARED_CLIENT_LOGOS.map(l => (
                <Image key={l.name} src={l.src} alt={l.name} height={24} width={80}
                  style={{ width: 'auto', height: '24px', opacity: 0.5 }}
                  className="hover:opacity-90 transition-opacity duration-300 object-contain" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PWA ADVANTAGES ════════════════════════════════════════════ */}
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4 block">Why PWA</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--heading)' }}>
              Why Choose PWA for Your Product?
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              Progressive Web Apps combine the reach of the web with the experience of a native app — at a fraction of the cost and complexity.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {pwaAdvantages.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="section-card rounded-2xl p-7 flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center icon-box shrink-0">
                  <a.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-base mb-1.5" style={{ color: 'var(--heading)' }}>{a.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{a.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4 block">Our Services</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--heading)' }}>
              Our PWA Development Services
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              From strategy and consulting through to ongoing maintenance — everything your PWA needs under one roof.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {pwaServices.map((svc, i) => (
              <motion.div key={svc.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="section-card section-card-interactive rounded-3xl p-8 flex flex-col gap-5 group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center icon-box shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <svc.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-lg mb-2" style={{ color: 'var(--heading)' }}>{svc.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{svc.description}</p>
                </div>
                <div className="mt-auto pt-2">
                  <Link href="/contact-us" className="accent-link inline-flex items-center gap-1.5 text-sm">
                    Get started <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS — interactive image tabs ═════════════════════════ */}
      <section id="process" className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4 block">How We Build</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--heading)' }}>
              Our Development Process
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              A transparent, structured process that delivers working software at every stage — no black boxes, no surprises.
            </p>
          </motion.div>

          {/* desktop: sticky left tabs + right content */}
          <div className="hidden lg:grid grid-cols-[280px_1fr] gap-8 max-w-5xl mx-auto">
            {/* step tabs */}
            <div className="flex flex-col gap-2">
              {processSteps.map((step, i) => (
                <button key={step.num} onClick={() => setActiveStep(i)}
                  className="flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-200 group"
                  style={{
                    background: activeStep === i ? 'var(--accent-soft)' : 'transparent',
                    border: `1px solid ${activeStep === i ? 'var(--accent)' : 'transparent'}`,
                  }}>
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black shrink-0 transition-all duration-200"
                    style={{
                      background: activeStep === i ? 'var(--accent)' : 'var(--border)',
                      color: activeStep === i ? '#fff' : 'var(--muted-foreground)',
                    }}>
                    {step.num}
                  </span>
                  <span className="font-semibold text-sm transition-colors duration-200"
                    style={{ color: activeStep === i ? 'var(--accent-text)' : 'var(--muted-foreground)' }}>
                    {step.title}
                  </span>
                </button>
              ))}
            </div>

            {/* content panel */}
            <motion.div key={activeStep} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
              className="section-card rounded-3xl overflow-hidden flex flex-col">
              <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-accent-soft to-background flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, var(--accent-soft), var(--brand-sky-soft))' }}>
                <Image
                  src={processSteps[activeStep].image}
                  alt={processSteps[activeStep].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black text-white shrink-0"
                    style={{ background: 'var(--accent)' }}>
                    {processSteps[activeStep].num}
                  </span>
                  <h3 className="text-xl font-black" style={{ color: 'var(--heading)' }}>
                    {processSteps[activeStep].title}
                  </h3>
                </div>
                <p className="text-base leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                  {processSteps[activeStep].description}
                </p>
              </div>
            </motion.div>
          </div>

          {/* mobile: vertical cards with images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:hidden">
            {processSteps.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                className="section-card rounded-2xl overflow-hidden">
                <div className="relative h-40 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, var(--accent-soft), var(--brand-sky-soft))' }}>
                  <Image src={step.image} alt={step.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-black text-white"
                      style={{ background: 'var(--accent)' }}>{step.num}</span>
                    <h3 className="font-black text-sm" style={{ color: 'var(--heading)' }}>{step.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PORTFOLIO ════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="eyebrow mb-4 block">Recent Work</span>
              <h2 className="text-3xl md:text-4xl font-black leading-tight" style={{ color: 'var(--heading)' }}>
                Built &amp; Shipped
              </h2>
            </div>
            <Link href="/portfolio-reapmind" className="btn-secondary inline-flex shrink-0">
              View all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SHARED_PORTFOLIO_ITEMS.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="section-card section-card-interactive rounded-3xl overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,33,71,0.6) 0%, transparent 60%)' }} />
                  <span className="absolute bottom-3 left-4 text-xs font-bold text-white/80 tracking-wider uppercase">{item.category}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-sm leading-snug" style={{ color: 'var(--heading)' }}>{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY REAPMIND ══════════════════════════════════════════════ */}
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4 block">Why ReapMind</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--heading)' }}>
              Why Choose ReapMind for Your PWA?
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              Technical depth, creative thinking, and a genuine commitment to your outcomes — not just delivery.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {whyReapMind.map((w, i) => (
              <motion.div key={w.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="section-card section-card-interactive rounded-2xl p-7 flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center icon-box shrink-0">
                  <w.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-base mb-1.5" style={{ color: 'var(--heading)' }}>{w.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{w.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES ═══════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4 block">Industries We Serve</span>
            <h2 className="text-3xl md:text-4xl font-black leading-tight" style={{ color: 'var(--heading)' }}>
              PWAs for Every Industry
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {SHARED_INDUSTRIES.map((ind, i) => (
              <motion.div key={ind.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <Link href={ind.link} className="section-card section-card-interactive rounded-2xl p-5 flex flex-col items-center gap-3 text-center group block">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center icon-box transition-transform duration-300 group-hover:scale-110">
                    <ind.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold leading-tight" style={{ color: 'var(--muted-foreground)' }}>{ind.title}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ═════════════════════════════════════════════ */}
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4 block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight" style={{ color: 'var(--heading)' }}>
              What Clients Say About Us
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl mx-auto mb-10">
            <div className="section-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start" style={{ background: 'var(--card)' }}>
              <div className="shrink-0">
                <TestimonialAvatar image={SHARED_TESTIMONIALS[activeTab].image} initials={SHARED_TESTIMONIALS[activeTab].initials} name={SHARED_TESTIMONIALS[activeTab].name} size="lg" />
                <div className="flex gap-1 mt-3 justify-center">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" style={{ color: 'var(--brand-cyan)' }} />)}
                </div>
              </div>
              <div className="flex-1">
                <Quote className="w-10 h-10 mb-4 opacity-20" style={{ color: 'var(--accent)' }} />
                <p className="text-lg leading-relaxed mb-6 italic" style={{ color: 'var(--foreground)' }}>
                  &ldquo;{SHARED_TESTIMONIALS[activeTab].content}&rdquo;
                </p>
                <div>
                  <h4 className="text-base font-bold" style={{ color: 'var(--heading)' }}>{SHARED_TESTIMONIALS[activeTab].name}</h4>
                  <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{SHARED_TESTIMONIALS[activeTab].role}</p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <button onClick={() => setActiveTab(t => (t - 1 + SHARED_TESTIMONIALS.length) % SHARED_TESTIMONIALS.length)}
                className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-colors"
                style={{ borderColor: 'var(--border)', background: 'var(--card)', color: 'var(--muted-foreground)' }}>
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-3 overflow-x-auto flex-1 pb-1">
                {SHARED_TESTIMONIALS.map((t, i) => (
                  <button key={t.name} onClick={() => setActiveTab(i)}
                    className="shrink-0 flex flex-col items-center gap-2 p-3 rounded-2xl transition-all duration-200"
                    style={{ background: i === activeTab ? 'var(--accent-soft)' : 'var(--card)', border: `1px solid ${i === activeTab ? 'var(--accent)' : 'var(--border)'}`, minWidth: '80px' }}>
                    <TestimonialAvatar image={t.image} initials={t.initials} name={t.name} size="sm" />
                    <span className="text-[10px] font-semibold text-center leading-tight line-clamp-2"
                      style={{ color: i === activeTab ? 'var(--accent-text)' : 'var(--muted-foreground)' }}>
                      {t.name.split(' ').slice(-1)[0]}
                    </span>
                  </button>
                ))}
              </div>
              <button onClick={() => setActiveTab(t => (t + 1) % SHARED_TESTIMONIALS.length)}
                className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-colors"
                style={{ borderColor: 'var(--border)', background: 'var(--card)', color: 'var(--muted-foreground)' }}>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BLOG ═════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16">
            <span className="eyebrow mb-4 block">Insights</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6" style={{ color: 'var(--heading)' }}>
              Latest Insights
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {SHARED_BLOG_POSTS.map((post, i) => (
              <motion.div key={post.link} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="section-card section-card-interactive rounded-3xl p-8"
                style={{ background: 'linear-gradient(135deg, var(--section-tint), var(--accent-soft))' }}>
                <span className="text-xs font-bold uppercase tracking-wider mb-3 block" style={{ color: 'var(--accent-text)' }}>{post.category}</span>
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--heading)' }}>{post.title}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--muted-foreground)' }}>{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm mb-6" style={{ color: 'var(--muted-foreground)' }}>
                  <span>By {post.author}</span><span>{post.date}</span>
                </div>
                <Link href={post.link} className="accent-link inline-flex items-center gap-2">
                  Read more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4 block">Support</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--heading)' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              Everything you need to know about PWA development before we start.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={faq.q} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="section-card rounded-2xl overflow-hidden" style={{ background: 'var(--card)' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="font-bold text-base" style={{ color: 'var(--heading)' }}>{faq.q}</span>
                  <ChevronDown className="w-5 h-5 shrink-0 transition-transform duration-300"
                    style={{ color: 'var(--accent)', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 border-t" style={{ borderColor: 'var(--border)' }}>
                    <p className="pt-4 leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--brand-sky-soft) 0%, #daeef9 40%, var(--background) 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(var(--brand-sky) 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.35 }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, rgba(0,174,239,0.1) 0%, transparent 60%)' }} />
        <div className="relative container mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="badge-pill mb-8">Get Started Today</span>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6"
              style={{ color: 'var(--heading)', letterSpacing: '-0.04em' }}>
              Ready to Build Your PWA?
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              Let&apos;s scope your project together. A 30-minute discovery call is all it takes to map out the right PWA strategy for your product and timeline.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact-us" className="btn-primary px-8 py-4 text-base">
                Book a Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+919637828283" className="btn-secondary px-8 py-4 text-base">
                <Phone className="w-4 h-4" /> Call Us Now
              </a>
            </div>
            <div className="mt-14 flex flex-wrap justify-center gap-8">
              {[
                { icon: Phone,  label: '+91 9637828283',          href: 'tel:+919637828283' },
                { icon: Mail,   label: 'info@reapmind.com',        href: 'mailto:info@reapmind.com' },
                { icon: MapPin, label: 'Mumbai · Bangalore · USA', href: '/contact-us' },
              ].map(c => (
                <a key={c.label} href={c.href}
                  className="flex items-center gap-2.5 text-sm font-medium transition-opacity hover:opacity-70"
                  style={{ color: 'var(--muted-foreground)' }}>
                  <c.icon className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                  {c.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
