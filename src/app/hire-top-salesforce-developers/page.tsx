'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowRight, ChevronDown, CheckCircle2,
  Code, Shield, Zap, Users, Clock, Star, Globe,
  Phone, Mail, MapPin, Smartphone, Layers, RefreshCw,
  TrendingUp, Award,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { IconBox } from '@/components/ui/icon-box';
import { Counter } from '@/components/ui/counter';
import { TestimonialCarousel } from '@/components/ui/testimonial-carousel';
import { PortfolioGrid } from '@/components/ui/portfolio-grid';
import { HireAndroidForm } from '@/components/ui/hire-android-form';
import { SHARED_INDUSTRIES, SHARED_CLIENT_LOGOS, SHARED_BLOG_POSTS } from '@/data/shared-page-data';
import { fadeUp, fadeLeft, fadeRight } from '@/lib/scroll-motion';

/* ─── data ────────────────────────────────────────────────────────── */
const heroStats = [
  { value: 1000, suffix: '+', label: 'Apps Delivered' },
  { value: 16,   suffix: '+', label: 'Years Experience' },
  { value: 250,  suffix: '+', label: 'Salesforce Developers' },
  { value: 99,   suffix: '+', label: 'Certified Experts' },
];

const heroBullets = [
  'Dominate the Salesforce landscape with ReapMind\'s elite developers.',
  'Meticulously vetted Salesforce developers with proven CRM expertise.',
  'Scale your team with flexible solutions, from individual experts to dedicated squads.',
  'ReapMind: Your key to Salesforce supremacy.',
];

const whyUs = [
  { icon: Code,       title: 'Code Documentation',      description: 'Every Apex class, LWC component, and Flow is thoroughly documented for seamless handovers.' },
  { icon: Globe,      title: 'Time-Zone Compatibility',  description: 'Our developers align with your working hours across India, USA, and UAE for constant collaboration.' },
  { icon: Users,      title: 'Flexibility & Retention',  description: 'Easily scale your Salesforce squad up or down on demand to match your project cycles.' },
  { icon: Shield,     title: 'Flexible Contracts',       description: 'Hourly, part-time, or full-time engagement options structured perfectly to fit your budget.' },
  { icon: Zap,        title: 'Data Security Assurance',  description: 'Strict NDAs, secure configurations, and Salesforce Shield best practices keep your client data secure.' },
  { icon: Star,       title: 'Top 1% Talent',            description: 'Rigorous vetting covering Apex, LWC, integrations, and Salesforce architectural best practices.' },
];

const techStack = [
  { label: 'Core / CRM',     items: ['Salesforce Einstein', 'Sales Cloud', 'Service Cloud', 'Marketing Cloud'] },
  { label: 'Frontend / UI',  items: ['Lightning Web Components (LWC)', 'Visualforce'] },
  { label: 'Integrations',   items: ['Mulesoft', 'Salesforce APIs'] },
  { label: 'DevOps & Cloud', items: ['Salesforce DX', 'Heroku', 'CD Pipelines'] },
];

const hiringSteps = [
  { num: '01', title: 'Inquiry',             icon: Users,      description: 'We assess project alignment and goals for potential collaboration.' },
  { num: '02', title: 'Developer Selection', icon: Award,      description: 'We select matches from our pre-vetted tech pool as per your requirements within 48 hours.' },
  { num: '03', title: 'Integration',         icon: CheckCircle2, description: 'Upon ETA approval, Developers start with direct task alignments.' },
  { num: '04', title: 'Scaling',             icon: Layers,     description: 'Modify team size as needed, aided by a dedicated account manager.' },
];

const hiringModels = [
  { title: 'Full Time',    icon: Clock,    hours: '8 hrs / day',    commitment: '160 hrs / month', highlight: true,  description: 'Deep integration and full daily focus on your Salesforce CRM product.' },
  { title: 'Part Time',    icon: Zap,      hours: '4 hrs / day',    commitment: '60 hrs / month',  highlight: false, description: 'Ongoing support, customization, or Flow automation alongside your team.' },
  { title: 'Hourly Basis', icon: RefreshCw,hours: 'Open hrs / day', commitment: '50 hrs minimum',  highlight: false, description: 'Short-scope customization, integrations, or consultations with no lock-in.' },
];

const developerTiers = [
  { level: 'Junior Salesforce Developer',    exp: '1–3 Years Experienced', priceRange: '$800 – $1,200' },
  { level: 'Mid Level Salesforce Developer', exp: '3–5 Years Experienced', priceRange: '$1,300 – $1,800' },
  { level: 'Senior Salesforce Developer',    exp: '5+ Years Experienced',  priceRange: '$1,900 – $2,500' },
];

const relatedHires = [
  { title: 'Hire Flutter Developers',       description: 'Cross-platform mobile developers using Flutter and Dart for high-performance apps.', href: '/hire-flutter-developers' },
  { title: 'Hire Android Developers',       description: 'Native Android engineers specializing in Kotlin, Jetpack Compose, and Android SDK.', href: '/hire-top-android-developers' },
  { title: 'Hire iOS Developers',           description: 'Swift and SwiftUI specialists crafting polished Apple-platform experiences.', href: '/hire-the-best-ios-developers' },
];

const faqs = [
  { q: "Why should I hire Salesforce developers from ReapMind?", a: "Our Salesforce developers are highly vetted experts with deep certification credentials. They have experience in configuring, customizing, and building on Salesforce Sales, Service, and Marketing clouds. We offer flexible contracts, quick developer integration (typically 3-5 days), and a dedicated account manager." },
  { q: "What certifications do your Salesforce developers hold?", a: "Our Salesforce talent pool includes Salesforce Certified Administrators, Platform Developers (PD1 & PD2), Application Architects, and Integration Architects. We align developers with the specific expertise your project demands." },
  { q: "Can you assist with migrating our CRM system to Salesforce?", a: "Yes. Our Salesforce developers have extensive experience migrating data, workflows, and logic from legacy CRMs (like HubSpot, Zoho, or Microsoft Dynamics) to Salesforce, ensuring zero data loss and minimal business interruption." },
  { q: "How do you handle integrations between Salesforce and third-party systems?", a: "We utilize Salesforce APIs (REST/SOAP), middleware solutions like MuleSoft, and custom Apex callouts to integrate Salesforce seamlessly with your ERPs, databases, payment gateways, and marketing tools." },
  { q: "Is there a replacement guarantee if the developer is not a fit?", a: "Absolutely. We pride ourselves on cultural and technical alignment. However, if a developer does not meet your expectations, we will provide a qualified replacement within 72 hours, ensuring project continuity." },
];

/* ─── animated floating orbs ─────────────────────────────────────── */
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[
        { w: 300, h: 300, x: '10%', y: '20%', delay: 0,   dur: 8  },
        { w: 200, h: 200, x: '75%', y: '15%', delay: 1.5, dur: 10 },
        { w: 150, h: 150, x: '60%', y: '65%', delay: 0.8, dur: 7  },
        { w: 100, h: 100, x: '25%', y: '70%', delay: 2,   dur: 9  },
      ].map((orb, i) => (
        <motion.div key={i}
          className="absolute rounded-full"
          style={{
            width: orb.w, height: orb.h,
            left: orb.x, top: orb.y,
            background: 'radial-gradient(circle, rgba(0,174,239,0.12) 0%, transparent 70%)',
          }}
          animate={{ y: [0, -24, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: orb.dur, delay: orb.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

/* ─── page ───────────────────────────────────────────────────────── */
export default function HireSalesforceDevelopersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="overflow-x-hidden">

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--brand-sky-soft) 0%, var(--accent-soft) 40%, var(--background) 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(var(--brand-sky) 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.35 }} />
        <FloatingOrbs />

        <div className="relative container mx-auto px-6 lg:px-8 py-36 lg:py-44 grid lg:grid-cols-2 gap-16 items-center">
          {/* left copy */}
          <div>
            <motion.span className="badge-pill mb-8 inline-flex"
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}>
              Hire Salesforce Developers
            </motion.span>

            <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-black leading-[1.02] mb-7"
              style={{ color: 'var(--heading)', letterSpacing: '-0.04em' }}>
              {['Reap The', 'Rewards of Top', 'Salesforce Talent.'].map((word, i) => (
                <motion.span key={word} className="block"
                  initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}>
                  {i === 2 ? <><span style={{ color: 'var(--brand-blue)' }}>Salesforce</span>{' Talent.'}</> : word}
                </motion.span>
              ))}
            </h1>

            <motion.p className="text-[1.05rem] leading-[1.75] mb-8 max-w-lg"
              style={{ color: 'var(--muted-foreground)' }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}>
              Tired of sifting through endless resumes and interviewing candidates who just don&apos;t cut it? At ReapMind, we do the heavy lifting for you. We meticulously vet every candidate to ensure they have the technical expertise and real-world experience to excel in your projects.
            </motion.p>

            <motion.ul className="mb-10 space-y-3"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.65 }}>
              {heroBullets.map((b, i) => (
                <motion.li key={b} className="flex items-start gap-3 text-sm"
                  style={{ color: 'var(--muted-foreground)' }}
                  initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}>
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--accent)' }} />
                  {b}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}>
              <a href="#hire-form" className="btn-primary px-7 py-3.5 text-sm inline-flex items-center gap-2">
                Hire a Developer <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="#models" className="btn-secondary px-7 py-3.5 text-sm">
                View Hiring Models
              </Link>
            </motion.div>
          </div>

          {/* right stats */}
          <motion.div className="hidden lg:grid grid-cols-2 gap-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }}>
            {heroStats.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, scale: 0.7, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.4 + i * 0.1 }}
                className="section-card rounded-2xl p-7 flex flex-col gap-1.5">
                <span className="text-[2.25rem] font-black tracking-tight stat-value">
                  <Counter to={s.value} suffix={s.suffix} />
                </span>
                <span className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* logo strip */}
        <div className="absolute bottom-0 inset-x-0 border-t py-6"
          style={{ borderColor: 'var(--border)', background: 'var(--surface)', backdropFilter: 'blur(16px)' }}>
          <div className="container mx-auto px-6 lg:px-8">
            <p className="text-center text-sm font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ color: 'var(--muted-foreground)', opacity: 0.7 }}>
              Trusted by startups &amp; Fortune 500 companies
            </p>
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

      {/* ══ HIRE FORM ════════════════════════════════════════════════ */}
      <HireAndroidForm devRole="Salesforce Developer" image="/images/svc-web-1.jpg" />

      {/* ══ WHY US ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeLeft} className="lg:sticky lg:top-32">
              <span className="eyebrow mb-4 block">Why ReapMind</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6"
                style={{ color: 'var(--heading)' }}>
                Scale Your Salesforce<br />Capabilities Efficiently
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--muted-foreground)' }}>
                Our Salesforce engineers work directly with your stakeholders to custom-build, automate, and scale your CRM platform, maximizing your Salesforce ROI.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--accent)' }}>
                  <TrendingUp className="w-5 h-5 text-white" />
                </motion.div>
                <div>
                  <p className="font-black text-sm" style={{ color: 'var(--heading)' }}>Comprehensive Integrations</p>
                  <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>APIs, MuleSoft, and ERP system connections</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-52">
                <Image src="/images/company-workspace.png" alt="Salesforce dev team" fill className="object-cover" />
                <div className="absolute inset-0 rounded-2xl"
                  style={{ background: 'linear-gradient(135deg, rgba(0,33,71,0.5) 0%, transparent 65%)' }} />
                <div className="absolute bottom-4 left-4">
                  <a href="#hire-form" className="btn-primary px-6 py-3 text-sm inline-flex items-center gap-2">
                    Hire Now <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {whyUs.map((item, i) => (
                <motion.div key={item.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? 32 : -32, y: 16 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="section-card section-card-interactive rounded-2xl p-6 flex flex-col gap-4 cursor-default">
                  <IconBox icon={item.icon} size="md" />
                  <div>
                    <h3 className="font-black text-sm mb-1.5" style={{ color: 'var(--heading)' }}>{item.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PORTFOLIO ════════════════════════════════════════════════ */}
      <PortfolioGrid />

      {/* ══ TECH STACK ═══════════════════════════════════════════════ */}
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="Technologies"
            title="Explore Our Cutting-Edge Salesforce Technologies"
            description="Experience the power of true partnership with ReapMind's Salesforce developers. They listen, they understand, and they work tirelessly to bring your vision to life using trending Salesforce tools."
            className="mb-14"
          />
          <div className="max-w-5xl mx-auto space-y-6">
            {techStack.map((cat, ci) => (
              <div key={cat.label}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="eyebrow shrink-0 w-36 text-right hidden sm:block">{cat.label}</span>
                  <div className="h-px flex-1 hidden sm:block" style={{ background: 'var(--border)' }} />
                  {cat.items.map((tech, ti) => {
                    // Map name to local image name format
                    const imgName = tech.toLowerCase().replace(/ \((lwc)\)/, '').replace(/ /g, '-').replace(/&/g, 'and') + '.png';
                    const imgSrc = `/images/salesforce/${imgName}`;
                    const AVAILABLE_ICONS = [
                      'salesforce-einstein.png',
                      'lightning-web-components.png',
                      'mulesoft.png',
                      'visualforce.png',
                      'salesforce-apis.png',
                      'salesforce-dx.png',
                      'cd-pipelines.png',
                      'heroku.png'
                    ];
                    const hasIcon = AVAILABLE_ICONS.includes(imgName);
                    return (
                      <motion.div key={tech}
                        initial={{ opacity: 0, y: 12, scale: 0.88 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: ci * 0.05 + ti * 0.05 }}
                        className="px-4 py-2.5 rounded-2xl text-xs font-semibold section-card cursor-default flex items-center gap-2">
                        {hasIcon && (
                          <Image src={imgSrc} alt={tech} width={16} height={16} className="w-4 h-4 object-contain rounded-sm" />
                        )}
                        <span style={{ color: 'var(--muted-foreground)' }}>{tech}</span>
                      </motion.div>
                    );
                  })}
                </div>
                <p className="eyebrow mt-1 sm:hidden" style={{ color: 'var(--accent-text)' }}>{cat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HIRING PROCESS ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="How It Works"
            title="Hire Salesforce Developers in 4 Simple Steps"
            description="Take a look at the simple & straightforward process to hire Salesforce developers from Reapmind Innovations."
            className="mb-16"
          />
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            {/* image with floating badge */}
            <motion.div {...fadeLeft} className="relative rounded-3xl overflow-hidden h-96 lg:h-[480px]">
              <Image src="/images/svc-mobile-2.jpg" alt="Salesforce Developers at ReapMind" fill className="object-cover" />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(0,33,71,0.6))' }} />
              {/* active matching badge */}
              <div className="absolute top-6 left-6 flex items-center gap-3 px-4 py-3 rounded-2xl section-card">
                <span className="relative flex h-3 w-3">
                  <motion.span className="absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ background: 'var(--accent)' }}
                    animate={{ scale: [1, 2, 1], opacity: [0.75, 0, 0.75] }}
                    transition={{ duration: 1.6, repeat: Infinity }} />
                  <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: 'var(--accent)' }} />
                </span>
                <span className="text-xs font-bold" style={{ color: 'var(--heading)' }}>Actively matching CRM developers</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="section-card rounded-2xl px-5 py-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--accent)' }}>
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-black" style={{ color: 'var(--heading)' }}>Top 1% Salesforce Experts</p>
                    <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Thorough technical & system architecture vetting</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* step cards */}
            <div className="flex flex-col gap-5">
              {hiringSteps.map((step, i) => (
                <motion.div key={step.num}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="section-card rounded-2xl p-6 flex gap-5 items-start cursor-default">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm shrink-0"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent-text)', border: '2px solid var(--accent)' }}>
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-1" style={{ color: 'var(--heading)' }}>{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{step.description}</p>
                  </div>
                </motion.div>
              ))}
              <motion.div {...fadeUp} className="mt-2">
                <a href="#hire-form" className="btn-primary px-7 py-3.5 text-sm inline-flex items-center gap-2 self-start">
                  Book a Free Consultation <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>

          {/* mid-page CTA banner */}
          <motion.div {...fadeUp}
            className="mt-16 max-w-5xl mx-auto rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative"
            style={{ background: 'linear-gradient(135deg, var(--brand-sky-soft), var(--accent-soft))' }}>
            <motion.div className="absolute inset-0 pointer-events-none"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              style={{ background: 'linear-gradient(270deg, rgba(0,174,239,0.06), transparent, rgba(0,174,239,0.06))', backgroundSize: '400% 400%' }} />
            <div className="relative">
              <h3 className="text-xl font-black mb-2" style={{ color: 'var(--heading)' }}>
                Want to build custom flows, configurations & dashboards?
              </h3>
              <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                ReapMind delivers Salesforce developers who configure systems perfectly aligned with your business processes.
              </p>
            </div>
            <Link href="/contact-us" className="btn-primary px-7 py-3.5 text-sm shrink-0 relative">
              Book a Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══ HIRING MODELS ════════════════════════════════════════════ */}
      <section id="models" className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="Engagement Models"
            title="Our Flexible Hiring Models"
            description="Hire Salesforce CRM developers within your budget. Our engagement options ensure you get the best outcomes at a cost that makes sense."
            className="mb-14"
          />
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {hiringModels.map((model, i) => (
              <motion.div key={model.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,174,239,0.15)', transition: { duration: 0.25 } }}
                className="section-card rounded-3xl p-8 flex flex-col gap-5 relative overflow-hidden cursor-default"
                style={model.highlight ? { border: '2px solid var(--accent)' } : {}}>
                {model.highlight && (
                  <motion.span
                    animate={{ opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
                    style={{ background: 'var(--accent)' }}>
                    Most Popular
                  </motion.span>
                )}
                <IconBox icon={model.icon} size="lg" />
                <div>
                  <h3 className="font-black text-xl mb-1" style={{ color: 'var(--heading)' }}>{model.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{model.description}</p>
                </div>
                <div className="mt-auto space-y-2 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: 'var(--muted-foreground)' }}>Hours / Day</span>
                    <span className="font-bold" style={{ color: 'var(--heading)' }}>{model.hours}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: 'var(--muted-foreground)' }}>Commitment</span>
                    <span className="font-bold" style={{ color: 'var(--heading)' }}>{model.commitment}</span>
                  </div>
                </div>
                <Link href="/contact-us"
                  className={`text-sm font-semibold inline-flex items-center gap-1.5 ${model.highlight ? 'btn-primary px-5 py-2.5' : 'accent-link'}`}>
                  Get Started <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DEVELOPER TIERS ══════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="Top 1% of Indian Developers"
            title="Scale Your Team with Top-Tier Salesforce Developers"
            description="ReapMind's expert CRM engineers accelerate your implementation timelines without compromising quality."
            className="mb-14"
          />
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {developerTiers.map((tier, i) => (
              <motion.div key={tier.level}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ perspective: '1000px', height: '280px' }}>
                <div className="relative w-full h-full transition-transform duration-700"
                  style={{ transformStyle: 'preserve-3d' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'rotateY(180deg)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'rotateY(0deg)')}>
                  {/* front */}
                  <div className="absolute inset-0 section-card rounded-3xl p-8 flex flex-col gap-4 text-center"
                    style={{
                      backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
                      border: i === 1 ? '2px solid var(--accent)' : '1px solid var(--border)',
                    }}>
                    {i === 1 && (
                      <span className="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
                        style={{ background: 'var(--accent)' }}>Popular</span>
                    )}
                    <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center icon-box">
                      <Star className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="eyebrow mb-2">{tier.exp}</p>
                      <h3 className="font-black text-lg leading-snug" style={{ color: 'var(--heading)' }}>{tier.level}</h3>
                    </div>
                    <p className="text-3xl font-black mt-auto" style={{ color: 'var(--accent)' }}>
                      {tier.priceRange}
                      <span className="text-sm font-semibold ml-1" style={{ color: 'var(--muted-foreground)' }}>/mo</span>
                    </p>
                    <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Hover to hire →</p>
                  </div>
                  {/* back */}
                  <div className="absolute inset-0 rounded-3xl p-8 flex flex-col items-center justify-center gap-5 text-center"
                    style={{
                      backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      background: i === 1 ? 'var(--accent)' : 'var(--brand-navy)',
                    }}>
                    <h3 className="font-black text-xl text-white">{tier.level}</h3>
                    <p className="text-white/75 text-sm">{tier.exp}</p>
                    <p className="text-3xl font-black text-white">{tier.priceRange}<span className="text-sm ml-1 opacity-60">/mo</span></p>
                    <a href="#hire-form"
                      className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-opacity hover:opacity-80"
                      style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}>
                      Hire Now <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RELATED HIRES ════════════════════════════════════════════ */}
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading badge="Also Hire" title="Explore More Talent"
            description="Access our highly skilled developers in other key technological areas."
            className="mb-12" />
          <div className="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {relatedHires.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="section-card section-card-interactive rounded-3xl p-7 flex flex-col gap-4 cursor-default">
                <IconBox icon={Smartphone} size="md" />
                <div className="flex-1">
                  <h3 className="font-black text-base mb-2" style={{ color: 'var(--heading)' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{item.description}</p>
                </div>
                <Link href={item.href} className="accent-link inline-flex items-center gap-1.5 text-sm mt-auto">
                  Hire Now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES We Serve ══════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading badge="Industries We Serve" title="Salesforce Integrations Across Every Sector" className="mb-14" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {SHARED_INDUSTRIES.map((ind, i) => (
              <motion.div key={ind.title}
                initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ scale: 1.06, transition: { duration: 0.15 } }}>
                <Link href={ind.link}
                  className="section-card section-card-interactive rounded-2xl p-5 flex flex-col items-center gap-3 text-center group block">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center icon-box transition-transform duration-300 group-hover:scale-110">
                    <ind.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold leading-tight" style={{ color: 'var(--muted-foreground)' }}>
                    {ind.title}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ═════════════════════════════════════════════ */}
      <TestimonialCarousel />

      {/* ══ BLOG ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading badge="Insights" title="Latest Insights" className="mb-14" />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {SHARED_BLOG_POSTS.slice(0, 4).map((post, i) => (
              <motion.div key={post.link}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="section-card section-card-interactive rounded-3xl p-8"
                style={{ background: 'linear-gradient(135deg, var(--section-tint), var(--accent-soft))' }}>
                <span className="text-xs font-bold uppercase tracking-wider mb-3 block"
                  style={{ color: 'var(--accent-text)' }}>{post.category}</span>
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

      {/* ══ FAQ ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading badge="FAQ" title="Frequently Asked Questions"
            description="Everything you need to know before hiring your Salesforce developers from ReapMind."
            className="mb-14" />
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={faq.q}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="section-card rounded-2xl overflow-hidden" style={{ background: 'var(--card)' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="font-bold text-base" style={{ color: 'var(--heading)' }}>{faq.q}</span>
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-5 h-5 shrink-0" style={{ color: 'var(--accent)' }} />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: 'hidden' }}>
                  <div className="px-6 pb-5 border-t" style={{ borderColor: 'var(--border)' }}>
                    <p className="pt-4 leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{faq.a}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--brand-sky-soft) 0%, var(--accent-soft) 40%, var(--background) 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(var(--brand-sky) 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.35 }} />
        <FloatingOrbs />
        <div className="relative container mx-auto px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <motion.span className="badge-pill mb-8 inline-flex"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
              Get Started Today
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6"
              style={{ color: 'var(--heading)', letterSpacing: '-0.04em' }}>
              Ready to Seize Salesforce Success?
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              Get in touch with us today. We&apos;ll send you matched, pre-vetted Salesforce developer profiles within 48 hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-14">
              <a href="#hire-form" className="btn-primary px-8 py-4 text-base inline-flex items-center gap-2">
                Book a Free Consultation <ArrowRight className="w-5 h-5" />
              </a>
              <a href="tel:+919637828283" className="btn-secondary px-8 py-4 text-base inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call Us Now
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
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
