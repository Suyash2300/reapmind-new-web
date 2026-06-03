'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import {
  ArrowRight, Quote, Star, ChevronLeft, ChevronRight,
  Smartphone, Layers, Zap,
  Users, Globe, Award, ChevronDown,
  Wifi, Database, Cloud, RefreshCw, BarChart3,
  ArrowUpRight, Phone, Mail, MapPin, Shield,
} from 'lucide-react';
import {
  SHARED_TESTIMONIALS, SHARED_BLOG_POSTS,
  SHARED_PORTFOLIO_ITEMS, SHARED_INDUSTRIES,
  SHARED_STATS, SHARED_CLIENT_LOGOS,
} from '@/data/shared-page-data';

/* ─── page-specific data ──────────────────────────────────────────── */
const services = [
  {
    icon: Smartphone, num: '01',
    title: 'Custom Enterprise App Development',
    description: 'Tailor-made apps built around your exact workflows—from ideation to deployment—using the latest frameworks for scalable, secure, high-performance delivery.',
  },
  {
    icon: Users, num: '02',
    title: 'User-Centric Design',
    description: 'Intuitive interfaces crafted from deep user research. Every screen is designed to be efficient, delightful, and drive real engagement and adoption.',
  },
  {
    icon: Layers, num: '03',
    title: 'Cross-Platform Development',
    description: 'One codebase, every platform. We build iOS, Android and web apps that look and perform like natives using React Native and Flutter.',
  },
  {
    icon: Database, num: '04',
    title: 'Integration & API Development',
    description: 'Connect your enterprise apps to ERP, CRM, legacy systems and third-party APIs with rock-solid security, real-time sync and zero data loss.',
  },
  {
    icon: Cloud, num: '05',
    title: 'Mobile Backend Development',
    description: 'Scalable cloud architectures, secure APIs and high-performance databases that form the invisible backbone powering every user interaction.',
  },
  {
    icon: RefreshCw, num: '06',
    title: 'App Maintenance & Support',
    description: 'Proactive monitoring, OS updates, performance tuning and 24/7 support keeping your apps fast, secure and competitive long after launch.',
  },
  {
    icon: Zap, num: '07',
    title: 'Enterprise App Modernization',
    description: 'Breathe new life into legacy applications—upgrading architecture, UX and performance so your enterprise tools match today\'s expectations.',
  },
];

const whyUs = [
  { icon: Award,       title: 'Proven Methodology',        description: 'A refined delivery framework ensuring every project lands on time, on budget, and to spec — no surprises.' },
  { icon: Zap,         title: 'Agile at Every Stage',      description: 'Sprint-based delivery with weekly demos so you see progress and shape direction throughout the build.' },
  { icon: Shield,      title: 'Security-First',            description: 'Enterprise-grade encryption, OAuth2, role-based access and compliance baked in from day one.' },
  { icon: Globe,       title: 'Global Delivery',           description: 'Teams in India, USA and UAE giving you round-the-clock coverage and genuine local expertise.' },
  { icon: Users,       title: 'Client-Centric Culture',    description: 'A dedicated project manager, transparent communication and a shared Slack channel on every engagement.' },
  { icon: BarChart3,   title: 'Measurable Outcomes',       description: 'KPIs agreed upfront. We measure adoption, performance and ROI — not just delivery milestones.' },
];

const importancePoints = [
  { icon: Wifi,      title: 'Enhanced Productivity',          description: 'Employees work anytime, anywhere on any device — accessing business-critical data and collaboration tools without friction.' },
  { icon: Users,     title: 'Improved Collaboration',         description: 'Real-time messaging, file sharing and video conferencing break down silos and keep distributed teams in perfect sync.' },
  { icon: RefreshCw, title: 'Agility & Flexibility',          description: 'Deploy new features, scale operations or pivot in response to market shifts — all without disrupting your workforce.' },
  { icon: BarChart3, title: 'Data Accessibility & Insights',  description: 'Secure mobile access to live analytics empowers on-the-go decision-making and proactive, data-driven strategy.' },
];

const faqs = [
  { q: 'What is enterprise mobility development?', a: 'It\'s the process of building mobile apps and solutions designed specifically for business operations — enhancing employee productivity, streamlining workflows, and improving customer engagement through purpose-built mobile technology.' },
  { q: 'What types of enterprise mobility solutions do you develop?', a: 'We build employee productivity apps, field service management tools, CRM apps, sales force automation, inventory management systems, and mobile-enabled business process automation solutions across iOS, Android and web.' },
  { q: 'Can you integrate with our existing ERP or CRM systems?', a: 'Absolutely. We specialize in connecting enterprise apps to SAP, Oracle, Salesforce, Microsoft Dynamics and custom legacy systems via secure REST and SOAP APIs with real-time data synchronization.' },
  { q: 'How do you ensure the security of our enterprise data?', a: 'We implement HTTPS, end-to-end encryption, OAuth2 authentication, role-based access control, MDM compliance and regular security audits. Data protection regulations including GDPR and HIPAA are addressed from the architecture phase.' },
  { q: 'Do you provide post-launch support and maintenance?', a: 'Yes. All engagements include a warranty period and we offer tiered SLA-based maintenance plans covering monitoring, bug fixes, OS compatibility updates and feature enhancements.' },
  { q: 'What is the typical development timeline?', a: 'A focused enterprise app typically takes 10–20 weeks from kick-off to production. Timeline depends on complexity, integrations required and approval cycles. We provide a detailed estimate after the discovery workshop.' },
];

/* ─── shared avatar helper ───────────────────────────────────────── */
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

/* ─── animated counter ───────────────────────────────────────────── */
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

/* ─── main page ──────────────────────────────────────────────────── */
export default function EnterpriseMobilityPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="overflow-x-hidden">

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center"
        style={{ background: 'linear-gradient(135deg, var(--brand-sky-soft) 0%, #daeef9 40%, var(--background) 100%)' }}>
        {/* dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(var(--brand-sky) 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.35 }} />
        {/* soft cyan glow top-right */}
        <div className="absolute top-0 right-0 w-[55vw] h-[70vh] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(0,174,239,0.12) 0%, transparent 65%)' }} />

        <div className="relative container mx-auto px-6 lg:px-8 py-36 lg:py-44 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.22,1,0.36,1] }}>
            <span className="badge-pill mb-8">
              Enterprise Mobility Solutions
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-black leading-[1.02] mb-7" style={{ color: 'var(--heading)', letterSpacing: '-0.04em' }}>
              Mobilize Your<br />
              Enterprise.<br />
              <span style={{ color: 'var(--brand-blue)' }}>Multiply Your Edge.</span>
            </h1>
            <p className="text-[1.05rem] leading-[1.75] mb-10 max-w-lg" style={{ color: 'var(--muted-foreground)' }}>
              We build enterprise mobility solutions that connect your workforce, streamline operations, and deliver measurable ROI — whether you need a field app, a cross-platform suite, or a full mobility transformation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us" className="btn-primary px-7 py-3.5 text-sm">
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#services" className="btn-secondary px-7 py-3.5 text-sm">
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* stat cards */}
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

        {/* client logo strip */}
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

      {/* ══ INTRO BAND ════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="eyebrow mb-4 block">Why Mobility Matters</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6" style={{ color: 'var(--heading)' }}>
              Stay Connected. Stay Ahead.
            </h2>
            <p className="text-lg leading-relaxed mx-auto max-w-3xl" style={{ color: 'var(--muted-foreground)' }}>
              Mobility is no longer about reading email on a phone. It is about giving every person in your enterprise instant, secure access to the tools and data they need — wherever they are. At ReapMind, we build the systems that make that possible at scale.
            </p>
          </motion.div>
          {/* importance bento */}
          <div className="mt-14 grid sm:grid-cols-2 gap-5">
            {importancePoints.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="section-card rounded-2xl p-7 text-left flex gap-5 items-start">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 icon-box">
                  <p.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1.5" style={{ color: 'var(--heading)' }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══════════════════════════════════════════════════ */}
      <section id="services" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mb-14">
            <span className="eyebrow mb-4 block">What We Build</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--heading)' }}>
              Our Enterprise<br />Mobility Services
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              A full-spectrum capability stack — from first-pixel design through to post-launch optimization.
            </p>
          </motion.div>

          {/* services grid: 3-col with large left card */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <motion.div key={svc.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`section-card section-card-interactive rounded-3xl p-8 flex flex-col gap-5 group ${i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 icon-box transition-transform duration-300 group-hover:scale-110">
                    <svc.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold tracking-widest opacity-20" style={{ color: 'var(--heading)' }}>{svc.num}</span>
                </div>
                <div>
                  <h3 className="font-black text-lg mb-2" style={{ color: 'var(--heading)' }}>{svc.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{svc.description}</p>
                </div>
                <div className="mt-auto pt-2">
                  <Link href="/contact-us" className="accent-link inline-flex items-center gap-1.5 text-sm">
                    Get started <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PORTFOLIO ════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="eyebrow mb-4 block">Recent Work</span>
              <h2 className="text-3xl md:text-4xl font-black leading-tight" style={{ color: 'var(--heading)' }}>
                Built & Shipped
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

      {/* ══ WHY REAPMIND — alternating split ═════════════════════════ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4 block">Why ReapMind</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--heading)' }}>
              Your Mobility Partner,<br />Not Just a Vendor
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              We embed ourselves in your goals and deliver outcomes — not just output.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((w, i) => (
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
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4 block">Industries We Serve</span>
            <h2 className="text-3xl md:text-4xl font-black leading-tight" style={{ color: 'var(--heading)' }}>
              Mobility for Every Sector
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {SHARED_INDUSTRIES.map((ind, i) => (
              <motion.div key={ind.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <Link href={ind.link}
                  className="section-card section-card-interactive rounded-2xl p-5 flex flex-col items-center gap-3 text-center group block">
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
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4 block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight" style={{ color: 'var(--heading)' }}>
              What Clients Say About Us
            </h2>
          </motion.div>

          {/* featured card */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl mx-auto mb-10">
            <div className="section-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start"
              style={{ background: 'var(--card)' }}>
              <div className="shrink-0">
                <TestimonialAvatar image={SHARED_TESTIMONIALS[activeTab].image}
                  initials={SHARED_TESTIMONIALS[activeTab].initials}
                  name={SHARED_TESTIMONIALS[activeTab].name} size="lg" />
                <div className="flex gap-1 mt-3 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'var(--brand-cyan)' }} />
                  ))}
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

          {/* thumbnail nav */}
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
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
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
                <span className="text-xs font-bold uppercase tracking-wider mb-3 block" style={{ color: 'var(--accent-text)' }}>
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--heading)' }}>
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--muted-foreground)' }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm mb-6" style={{ color: 'var(--muted-foreground)' }}>
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
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
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4 block">Support</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--heading)' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              Everything you need to know before your first conversation with us.
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

      {/* ══ CTA BAND ═════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--brand-sky-soft) 0%, #daeef9 40%, var(--background) 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(var(--brand-sky) 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.35 }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, rgba(0,174,239,0.1) 0%, transparent 60%)' }} />
        <div className="relative container mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="badge-pill mb-8">Get Started Today</span>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6" style={{ color: 'var(--heading)', letterSpacing: '-0.04em' }}>
              Ready to Mobilize<br />Your Enterprise?
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              Let&apos;s scope your project together. A 30-minute discovery call is all it takes to understand what&apos;s possible and map out a plan that fits your timeline and budget.
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
