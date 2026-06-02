'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import {
  ArrowRight, Quote, Star, ChevronLeft, ChevronRight, ChevronDown,
  Smartphone, RefreshCw, Shield, Zap, BarChart3, Layers,
  Code, Cloud, Lock, TrendingUp, Users, Award,
  Phone, Mail, MapPin, ArrowUpRight, CheckCircle2,
} from 'lucide-react';
import {
  SHARED_TESTIMONIALS, SHARED_BLOG_POSTS, SHARED_PORTFOLIO_ITEMS,
  SHARED_INDUSTRIES, SHARED_STATS, SHARED_CLIENT_LOGOS,
} from '@/data/shared-page-data';

/* ─── page-specific data ──────────────────────────────────────────── */
const modernizationProcess = [
  { num: '01', icon: BarChart3, title: 'Comprehensive App Assessment', description: 'We start with a deep audit of your existing app — identifying performance bottlenecks, outdated dependencies, security gaps, and UX friction points that are costing you users.' },
  { num: '02', icon: Layers, title: 'Strategic Planning & Consultation', description: 'Our consultants align modernization goals with your business objectives — crafting a phased roadmap that minimises risk, controls cost, and maximises ROI.' },
  { num: '03', icon: Code, title: 'Technology Stack Upgrade', description: 'From legacy codebases to modern frameworks — we migrate your app to the right stack for your scale, whether that\'s React Native, Flutter, Kotlin, or Swift.' },
  { num: '04', icon: Smartphone, title: 'User-Centric Design Revamp', description: 'Your app\'s interface gets a complete overhaul using current design systems — cleaner navigation, faster flows, and an aesthetic that builds user trust.' },
  { num: '05', icon: Zap, title: 'Performance Enhancement', description: 'We eliminate the sluggishness — optimizing load times, reducing memory footprint, fixing crashes, and improving responsiveness across all device classes.' },
  { num: '06', icon: Shield, title: 'Security & Compliance Hardening', description: 'Modern encryption, secure APIs, OAuth2 authentication, and compliance with GDPR, HIPAA, or industry-specific regulations baked in from the ground up.' },
];

const modernizationServices = [
  { icon: Code,       title: 'Technology Stack Migration',  description: 'Seamless transition from legacy systems to modern frameworks — minimizing disruption, maximizing performance. Our experts handle Android, iOS, and cross-platform migrations end-to-end.' },
  { icon: Cloud,      title: 'Cloud Integration',           description: 'Move your app infrastructure to AWS, Azure, or GCP — unlocking auto-scaling, global CDN delivery, and significant reduction in on-premise maintenance overhead.' },
  { icon: Zap,        title: 'Performance Optimization',    description: 'Profiling, caching strategies, network layer improvements and lazy loading — turning sluggish experiences into fast, fluid ones that users actually enjoy.' },
  { icon: Lock,       title: 'Security Enhancement',        description: 'End-to-end encryption, certificate pinning, penetration testing, and regular vulnerability scans — protecting your users and your reputation.' },
  { icon: Smartphone, title: 'UX and UI Redesign',          description: 'Design system overhaul aligned with current platform guidelines — Material 3 for Android, Human Interface for iOS — with accessibility built in from day one.' },
  { icon: RefreshCw,  title: 'Feature Modernization',       description: 'Replace outdated feature sets with AI-powered capabilities, real-time sync, offline-first architecture, and push notification systems that re-engage your user base.' },
];

const benefits = [
  { icon: TrendingUp,   title: 'Enhanced User Experience',           description: 'Cleaner interfaces, intuitive navigation, and faster loading drive measurable increases in engagement and session length.' },
  { icon: Zap,          title: 'Improved Performance & Stability',    description: 'Modern frameworks eliminate crashes and slow performance — delivering a smooth, reliable experience on every device.' },
  { icon: Shield,       title: 'Boosted Security & Compliance',       description: 'Cutting-edge security protocols and encryption protect user data and fortify your app against evolving cyber threats.' },
  { icon: Cloud,        title: 'Increased Scalability & Flexibility', description: 'Cloud-based architectures and flexible designs scale effortlessly with growing user bases and changing business needs.' },
  { icon: BarChart3,    title: 'Reduced Maintenance Costs',           description: 'Cleaner, well-documented codebases drastically cut ongoing maintenance effort and cost — freeing budget for new features.' },
  { icon: Code,         title: 'Access to New Capabilities',          description: 'Modernization unlocks AI integrations, advanced analytics, real-time features, and third-party ecosystems unavailable to legacy apps.' },
];

const faqs = [
  { q: 'How do I know if my app needs modernization?', a: 'Key signals include slow performance, frequent crashes, declining user ratings, difficulty adding new features, security vulnerabilities, or incompatibility with current OS versions. If your app is over 3 years old without major updates, a modernization audit is overdue.' },
  { q: 'What benefits can I expect from modernizing my app?', a: 'Clients typically see improved user retention, faster performance, reduced crash rates, lower maintenance costs, improved security posture, and the ability to integrate modern capabilities like AI, real-time features, and cloud-native architecture.' },
  { q: 'How long does the modernization process typically take?', a: 'Scope drives timeline. A focused performance and security modernization can complete in 6–10 weeks. A full stack migration with UX redesign typically runs 16–24 weeks. We provide a precise timeline after the initial assessment.' },
  { q: 'Can you ensure my app remains compatible with different devices post-modernization?', a: 'Absolutely. Cross-device and cross-OS compatibility testing is a core deliverable. We test against the full spectrum of active device and OS combinations before any release.' },
  { q: 'Will modernization disrupt my current users?', a: 'We use feature flagging, staged rollouts, and parallel environment testing to ensure zero disruption. Users experience improvements, not outages.' },
  { q: 'Do you handle both iOS and Android modernization?', a: 'Yes — we cover native iOS (Swift/Objective-C), native Android (Kotlin/Java), and cross-platform apps built with React Native or Flutter. We can also migrate from one paradigm to another.' },
];

const whyReapMind = [
  { icon: Award,        title: 'Legacy App Specialists',   description: 'We specialize in transforming legacy applications — understanding the unique constraints, technical debt, and risks they carry.' },
  { icon: BarChart3,    title: 'Results-Driven Approach',  description: 'Our modernization efforts are anchored to measurable outcomes — security scores, performance benchmarks, and engagement metrics agreed before work begins.' },
  { icon: Code,         title: 'Cutting-Edge Technology',  description: 'We leverage the latest frameworks and tools to ensure your modernized app is equipped to innovate and adapt as the market evolves.' },
  { icon: Users,        title: 'Tailored Solutions',       description: 'Every organization is unique. We design modernization strategies that address your specific constraints — whether that\'s budget, timeline, or technical complexity.' },
  { icon: CheckCircle2, title: 'End-to-End Support',       description: 'From the initial assessment through to post-launch monitoring, our dedicated team is with you at every stage of the modernization journey.' },
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

/* ─── main page ──────────────────────────────────────────────────── */
export default function MobileModernizationPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="overflow-x-hidden">

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center"
        style={{ background: 'linear-gradient(135deg, var(--brand-sky-soft) 0%, #daeef9 40%, var(--background) 100%)' }}>
        {/* dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(var(--brand-sky) 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.35 }} />
        {/* soft cyan glow top-right */}
        <div className="absolute top-0 right-0 w-[55vw] h-[70vh] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(0,174,239,0.12) 0%, transparent 65%)' }} />

        <div className="relative container mx-auto px-6 lg:px-8 pt-36 pb-8 lg:pt-44 lg:pb-10 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.22,1,0.36,1] }}>
            <span className="badge-pill mb-8">Mobile App Modernization</span>
            <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-black leading-[1.02] mb-7"
              style={{ color: 'var(--heading)', letterSpacing: '-0.04em' }}>
              Modernize Your<br />
              Mobile App.<br />
              <span style={{ color: 'var(--brand-blue)' }}>Reignite Growth.</span>
            </h1>
            <p className="text-[1.05rem] leading-[1.75] mb-10 max-w-lg" style={{ color: 'var(--muted-foreground)' }}>
              We transform legacy mobile applications into high-performance, secure, and scalable products — helping Mumbai businesses stay competitive in an era of rapid digital change.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us" className="btn-primary px-7 py-3.5 text-sm">
                Start Modernizing <ArrowRight className="w-4 h-4" />
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

        {/* stats chips strip */}
        <div className="relative container mx-auto px-6 lg:px-8 pb-6">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { num: '84%', label: 'of apps haven\'t been updated in 3 years' },
              { num: '25%', label: 'engagement boost after modernization' },
              { num: '18%', label: 'revenue increase post-modernization' },
              { num: '12%', label: 'reduction in operational costs' },
            ].map(chip => (
              <div key={chip.num} className="section-card rounded-xl px-5 py-3 flex items-center gap-3">
                <span className="font-black text-lg stat-value">{chip.num}</span>
                <span className="text-xs leading-snug max-w-[140px]" style={{ color: 'var(--muted-foreground)' }}>{chip.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* client logo strip */}
        <div className="border-t py-6 mt-4"
          style={{ borderColor: 'var(--border)', background: 'var(--surface)', backdropFilter: 'blur(16px)' }}>
          <div className="container mx-auto px-6 lg:px-8">
            <p className="text-center text-sm font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ color: 'var(--muted-foreground)', opacity: 0.7 }}>Trusted by global enterprises</p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
              {SHARED_CLIENT_LOGOS.map(l => (
                <div key={l.name} className="relative h-18 w-50 opacity-50 hover:opacity-90 transition-opacity duration-300">
                  <Image src={l.src} alt={l.name} fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ MODERNIZATION PROCESS ════════════════════════════════════ */}
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16">
            <span className="eyebrow mb-4 block">How We Work</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--heading)' }}>
              Our End-to-End Modernization Process
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              A structured, transparent process that takes your legacy app from audit to production without disrupting your users or your team.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* vertical connector line (desktop) */}
            <div className="absolute left-[calc(50%-1px)] top-8 bottom-8 w-0.5 hidden lg:block"
              style={{ background: 'var(--gradient-line)' }} />

            <div className="flex flex-col gap-10">
              {modernizationProcess.map((step, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div key={step.num} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                    className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-10 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    {/* content card */}
                    <div className="flex-1 section-card rounded-2xl p-7 flex gap-5 items-start">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 icon-box">
                        <step.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-black text-base mb-2" style={{ color: 'var(--heading)' }}>{step.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{step.description}</p>
                      </div>
                    </div>
                    {/* number badge — center column */}
                    <div className="shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-black text-xl z-10"
                      style={{ background: 'var(--accent-soft)', color: 'var(--accent-text)', border: '3px solid var(--accent)' }}>
                      {step.num}
                    </div>
                    {/* spacer for the other side */}
                    <div className="flex-1 hidden lg:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══════════════════════════════════════════════════ */}
      <section id="services" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4 block">What We Modernize</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--heading)' }}>
              Our Modernization Services
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              From stack migration to UX overhauls — a complete modernization capability stack for mobile apps of every kind.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modernizationServices.map((svc, i) => (
              <motion.div key={svc.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                className="section-card section-card-interactive rounded-3xl p-8 flex flex-col gap-5 group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 icon-box transition-transform duration-300 group-hover:scale-110">
                  <svc.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-lg mb-2" style={{ color: 'var(--heading)' }}>{svc.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{svc.description}</p>
                </div>
                <div className="mt-auto pt-2">
                  <Link href="/contact-us" className="accent-link inline-flex items-center gap-1.5 text-sm">
                    Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BENEFITS ══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4 block">Why Modernize</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--heading)' }}>
              What You Gain
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              The cost of inaction is real. Here&apos;s what businesses unlock when they modernize.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* stat callout */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="lg:col-span-1 section-card rounded-3xl p-8 flex flex-col gap-5">
              <p className="text-5xl font-black leading-none gradient-text">84%</p>
              <p className="text-xl font-bold leading-snug" style={{ color: 'var(--heading)' }}>
                of businesses haven&apos;t updated their apps in 3 years
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                Outdated apps bleed users, revenue, and trust — silently. Every month without modernization widens the gap between you and competitors who&apos;ve invested in their product.
              </p>
              <Link href="/contact-us" className="btn-primary px-6 py-3 text-sm mt-auto">
                Get a Free Audit <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* benefits grid */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
              {benefits.map((b, i) => (
                <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="section-card rounded-2xl p-6 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 icon-box">
                    <b.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1.5" style={{ color: 'var(--heading)' }}>{b.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{b.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
              Why Choose ReapMind
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              Mumbai&apos;s trusted partner for mobile modernization — combining deep technical expertise with a genuine commitment to your outcomes.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {whyReapMind.map((w, i) => (
              <motion.div key={w.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.09 }}
                className={`section-card section-card-interactive rounded-2xl p-7 flex flex-col gap-4 ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
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
              Modernization Across Every Sector
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
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4 block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight" style={{ color: 'var(--heading)' }}>
              What Clients Say About Us
            </h2>
          </motion.div>

          {/* featured testimonial card */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl mx-auto mb-10">
            <div className="section-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start"
              style={{ background: 'var(--card)' }}>
              <div className="shrink-0">
                <TestimonialAvatar image={SHARED_TESTIMONIALS[activeTab].image}
                  initials={SHARED_TESTIMONIALS[activeTab].initials}
                  name={SHARED_TESTIMONIALS[activeTab].name} size="lg" />
                <div className="flex gap-1 mt-3 justify-center">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" style={{ color: 'var(--brand-cyan)' }} />
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
              <button
                onClick={() => setActiveTab(t => (t - 1 + SHARED_TESTIMONIALS.length) % SHARED_TESTIMONIALS.length)}
                className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-colors"
                style={{ borderColor: 'var(--border)', background: 'var(--card)', color: 'var(--muted-foreground)' }}>
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-3 overflow-x-auto flex-1 pb-1">
                {SHARED_TESTIMONIALS.map((t, i) => (
                  <button key={t.name} onClick={() => setActiveTab(i)}
                    className="shrink-0 flex flex-col items-center gap-2 p-3 rounded-2xl transition-all duration-200"
                    style={{
                      background: i === activeTab ? 'var(--accent-soft)' : 'var(--card)',
                      border: `1px solid ${i === activeTab ? 'var(--accent)' : 'var(--border)'}`,
                      minWidth: '80px',
                    }}>
                    <TestimonialAvatar image={t.image} initials={t.initials} name={t.name} size="sm" />
                    <span className="text-[10px] font-semibold text-center leading-tight line-clamp-2"
                      style={{ color: i === activeTab ? 'var(--accent-text)' : 'var(--muted-foreground)' }}>
                      {t.name.split(' ').slice(-1)[0]}
                    </span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setActiveTab(t => (t + 1) % SHARED_TESTIMONIALS.length)}
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
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4 block">Support</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--heading)' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              Everything you need to know about mobile app modernization before we talk.
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
              Ready to Modernize<br />Your Mobile App?
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              Let&apos;s scope your modernization together. A 30-minute assessment call is all it takes to understand your app&apos;s current state and map out a practical plan.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact-us" className="btn-primary px-8 py-4 text-base">
                Book a Free Assessment <ArrowRight className="w-5 h-5" />
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
