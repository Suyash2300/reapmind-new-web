'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowRight, ChevronDown, CheckCircle2,
  Code, Shield, Zap, Users, Clock,
  Star, Globe, Phone, Mail, MapPin, Smartphone,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { IconBox } from '@/components/ui/icon-box';
import { Counter } from '@/components/ui/counter';
import { TestimonialCarousel } from '@/components/ui/testimonial-carousel';
import { PortfolioGrid } from '@/components/ui/portfolio-grid';
import { HireAndroidForm } from '@/components/ui/hire-android-form';
import { SHARED_INDUSTRIES, SHARED_CLIENT_LOGOS, SHARED_BLOG_POSTS } from '@/data/shared-page-data';
import { fadeUp, fadeLeft, fadeRight } from '@/lib/scroll-motion';

/* ─── page data ───────────────────────────────────────────────────── */
const heroStats = [
  { value: 1000, suffix: '+', label: 'Apps Delivered' },
  { value: 16,   suffix: '+', label: 'Years of Experience' },
  { value: 250,  suffix: '+', label: 'App Developers' },
  { value: 99,   suffix: '+', label: 'Certified Experts' },
];

const heroBullets = [
  '80+ successful iOS apps launched — proven track record of App Store results.',
  '98% client satisfaction — commitment to exceeding every expectation.',
  'Top 1% iOS talent — the most skilled, Apple-certified engineers.',
  '24/7 support — always available to keep your project on track.',
];

const whyUs = [
  { icon: Code,    title: 'Code Documentation',      description: 'Every line of our Swift and Objective-C code is thoroughly documented — making handovers seamless and future maintenance effortless.' },
  { icon: Globe,   title: 'Time-Zone Compatibility',  description: 'With teams across India, USA, and UAE, we align with your working hours so collaboration never misses a beat.' },
  { icon: Users,   title: 'Flexibility and Retention',description: 'Scale your iOS team up or down on demand. Flexible contracts mean you always have exactly the talent you need.' },
  { icon: Shield,  title: 'Flexible Contracts',       description: 'No rigid agreements. Engage on hourly, part-time, or full-time terms — structured to fit your project and budget.' },
  { icon: Zap,     title: 'Data Security Assurance',  description: 'NDAs, secure environments, and Apple-platform security best practices protect your IP and user data throughout.' },
  { icon: Star,    title: 'Top 1% Talent',            description: 'We hire the top 1% of iOS engineers through a rigorous 5-stage vetting process covering Swift depth, HIG adherence, and delivery track record.' },
];

const techCategories = [
  { label: 'Languages',         items: ['Swift', 'Objective-C'] },
  { label: 'UI Frameworks',     items: ['SwiftUI', 'UIKit', 'Core Data', 'Combine'] },
  { label: 'Advanced APIs',     items: ['ARKit', 'Core ML', 'CloudKit'] },
  { label: 'Backend & Storage', items: ['Firebase', 'AWS', 'Azure'] },
  { label: 'Networking',        items: ['RESTful APIs', 'GraphQL', 'Alamofire'] },
  { label: 'DevOps & Tools',    items: ['Git', 'Xcode', 'TestFlight', 'Fastlane', 'CI/CD Pipelines'] },
  { label: 'Architecture',      items: ['MVVM', 'Clean Architecture', 'Combine', 'Async/Await'] },
];

const hiringProcess = [
  { num: '01', title: 'Inquiry',            description: 'We assess project alignment for potential collaboration — understanding your app goals, timeline, and technical requirements.' },
  { num: '02', title: 'Developer Selection', description: 'We select iOS developers from our tech pool as per your project needs — matched on skills, experience, and communication style.' },
  { num: '03', title: 'Integration',         description: 'Upon ETA approval, developers start with direct task alignments — integrating with your team from day one.' },
  { num: '04', title: 'Scaling',             description: 'Modify team size as needed, aided by a dedicated account manager who ensures smooth execution at every stage.' },
];

const hiringModels = [
  {
    title: 'Full Time',
    icon: Clock,
    hours: '8 hrs / day',
    commitment: '160 hrs / month',
    highlight: true,
    description: 'Best for long-term projects requiring deep integration and full daily focus on your iOS product.',
  },
  {
    title: 'Part Time',
    icon: Zap,
    hours: '4 hrs / day',
    commitment: '60 hrs / month',
    highlight: false,
    description: 'Ideal for ongoing support, maintenance, or feature additions alongside an existing team.',
  },
  {
    title: 'Hourly Basis',
    icon: Star,
    hours: 'Open hrs / day',
    commitment: '50 hrs minimum',
    highlight: false,
    description: 'Perfect for short-scope work, audits, or consultations with no long-term commitment.',
  },
];

const developerTiers = [
  { level: 'Junior iOS Developer',    exp: '1–3 Years Experienced', priceRange: '$800 – $1,200' },
  { level: 'Mid Level iOS Developer', exp: '3–5 Years Experienced', priceRange: '$1,300 – $1,800' },
  { level: 'Senior iOS Developer',    exp: '5+ Years Experienced',  priceRange: '$1,900 – $2,500' },
];

const relatedHires = [
  { title: 'Hire Mobile App Developers',   description: 'Deploy our handpicked talent to build enterprise-grade mobile applications for simplifying your business operations.', href: '/contact-us' },
  { title: 'Hire Android App Developers',  description: 'Hire Android developers from ReapMind Innovations to inject growth into your business with powerful native apps.', href: '/hire-top-android-developers' },
  { title: 'Hire React Native Developers', description: 'Deploy cross-platform engineers with extensive knowledge and creativity in crafting user-appealing mobile applications.', href: '/contact-us' },
];

const faqs = [
  { q: "Why should I hire iOS developers from ReapMind?", a: "Our iOS developers are hand-picked through a rigorous 5-stage vetting process. They have deep expertise in Swift, SwiftUI, and Apple's Human Interface Guidelines — and they've shipped real, App Store-approved products with measurable business outcomes. You get top 1% talent with a dedicated account manager, replace guarantee, and transparent communication throughout." },
  { q: "What kind of iOS projects can your developers handle?", a: "We cover the full spectrum: consumer apps, enterprise mobility, healthtech (HealthKit integration), fintech, edtech, rideshare, real-time collaboration tools, AR experiences (ARKit), and on-demand services. If it runs on iPhone or iPad, our team has likely built something in that space." },
  { q: "What technologies do your iOS developers specialise in?", a: "Our developers are proficient in Swift, Objective-C, SwiftUI, UIKit, Core Data, Combine, ARKit, Core ML, CloudKit, Firebase, and AWS. They follow MVVM and Clean Architecture patterns and are experienced with Xcode, TestFlight, and Fastlane-based CI/CD pipelines." },
  { q: "Where are your iOS developers located?", a: "Our iOS developers are based primarily in India — Mumbai, Bangalore, and Kolhapur — with delivery managers in the USA and UAE. We operate across time zones so you always have coverage during your working hours." },
  { q: "How does the hiring process work?", a: "Share your requirements and receive matched iOS developer profiles within 48 hours. Interview your shortlisted candidates, then onboard your selected developer. Most clients have a developer contributing within 5–7 business days of initial contact. If the developer is not the right fit, we replace them — no questions, no fees." },
];

/* ─── page ───────────────────────────────────────────────────────── */
export default function HireIosDevelopersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="overflow-x-hidden">

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--brand-sky-soft) 0%, var(--accent-soft) 40%, var(--background) 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(var(--brand-sky) 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.35 }} />
        <div className="absolute top-0 right-0 w-[55vw] h-[70vh] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(0,174,239,0.12) 0%, transparent 65%)' }} />

        <div className="relative container mx-auto px-6 lg:px-8 py-36 lg:py-44 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeLeft}>
            <span className="badge-pill mb-8">Hire iOS Developers</span>
            <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-black leading-[1.02] mb-7"
              style={{ color: 'var(--heading)', letterSpacing: '-0.04em' }}>
              Hire the Best<br />iOS Developers<br />
              <span style={{ color: 'var(--brand-blue)' }}>in India.</span>
            </h1>
            <p className="text-[1.05rem] leading-[1.75] mb-8 max-w-lg" style={{ color: 'var(--muted-foreground)' }}>
              Access a curated network of elite iOS engineers hand-picked for their expertise. Scale your development capacity on-demand, accelerate time-to-market, and ship apps users love.
            </p>
            <ul className="mb-10 space-y-3">
              {heroBullets.map(b => (
                <li key={b} className="flex items-start gap-3 text-sm" style={{ color: 'var(--muted-foreground)' }}>
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--accent)' }} />
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a href="#hire-form" className="btn-primary px-7 py-3.5 text-sm">
                Hire a Developer <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="#models" className="btn-secondary px-7 py-3.5 text-sm">
                View Hiring Models
              </Link>
            </div>
          </motion.div>

          <motion.div {...fadeRight} className="hidden lg:grid grid-cols-2 gap-4">
            {heroStats.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.28 + i * 0.1 }}
                className="section-card rounded-2xl p-7 flex flex-col gap-1.5">
                <span className="text-[2.25rem] font-black tracking-tight stat-value">
                  <Counter to={s.value} suffix={s.suffix} />
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

      {/* ══ HIRE FORM — top placement ═════════════════════════════════ */}
      <HireAndroidForm devRole="iOS Developer" image="/images/ios-developers.png" />

      {/* ══ WHY HIRE FROM REAPMIND ════════════════════════════════════ */}
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeLeft} className="lg:sticky lg:top-32">
              <span className="eyebrow mb-4 block">Why ReapMind</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6"
                style={{ color: 'var(--heading)' }}>
                Fuel Your App&apos;s Success with Furiously Talented iOS Developers
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--muted-foreground)' }}>
                Our iOS developers pour their hearts into every line of code — crafting human-centric experiences that are functional, delightful, intuitive, and engaging.
              </p>
              <div className="relative rounded-2xl overflow-hidden h-56">
                <Image src="/images/company-workspace.png" alt="iOS development team" fill className="object-cover" />
                <div className="absolute inset-0 rounded-2xl"
                  style={{ background: 'linear-gradient(135deg, rgba(0,33,71,0.5) 0%, transparent 65%)' }} />
                <div className="absolute bottom-4 left-4">
                  <a href="#hire-form" className="btn-primary px-6 py-3 text-sm inline-flex">
                    Hire Now <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-4">
              {whyUs.map((item, i) => (
                <motion.div key={item.title}
                  initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="section-card section-card-interactive rounded-2xl p-6 flex flex-col gap-4">
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
            title="Cutting-Edge iOS Technologies"
            description="Our iOS developers blend technical brilliance with a deep understanding of Apple's design principles — ensuring your app is not only functional but a delight to interact with."
            className="mb-14"
          />
          <div className="max-w-5xl mx-auto space-y-6">
            {techCategories.map((cat, ci) => (
              <motion.div key={cat.label}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: ci * 0.06 }}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="eyebrow shrink-0 w-36 text-right hidden sm:block">{cat.label}</span>
                  <div className="h-px flex-1 hidden sm:block" style={{ background: 'var(--border)' }} />
                  {cat.items.map((tech, ti) => (
                    <motion.span key={tech}
                      initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }} transition={{ duration: 0.3, delay: ci * 0.04 + ti * 0.04 }}
                      className="px-4 py-2 rounded-full text-xs font-semibold section-card section-card-interactive"
                      style={{ color: 'var(--muted-foreground)' }}>
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <p className="eyebrow mt-1 sm:hidden" style={{ color: 'var(--accent-text)' }}>{cat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HIRING PROCESS ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="How It Works"
            title="Hire iOS Developers in 4 Simple Steps"
            description="A simple, transparent process to get your dedicated iOS developer on board fast — most clients are up and running within a week."
            className="mb-16"
          />
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <motion.div {...fadeLeft} className="relative rounded-3xl overflow-hidden h-96 lg:h-[480px]">
              <Image src="/images/ios-developers.png" alt="iOS Developers at ReapMind" fill className="object-cover object-top" />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(0,33,71,0.55))' }} />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="section-card rounded-2xl px-5 py-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--accent)' }}>
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-black" style={{ color: 'var(--heading)' }}>Top 1% Vetted iOS Talent</p>
                    <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>5-stage technical screening</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeRight} className="flex flex-col gap-6">
              {hiringProcess.map((step, i) => (
                <motion.div key={step.num}
                  initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="section-card rounded-2xl p-6 flex gap-5 items-start">
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
              <a href="#hire-form" className="btn-primary px-7 py-3.5 text-sm mt-2 self-start">
                Book a Free Consultation <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* mid-page CTA */}
          <motion.div {...fadeUp}
            className="mt-16 max-w-5xl mx-auto section-card rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ background: 'linear-gradient(135deg, var(--brand-sky-soft), var(--accent-soft))' }}>
            <div>
              <h3 className="text-xl font-black mb-2" style={{ color: 'var(--heading)' }}>
                Your iOS app deserves the best.
              </h3>
              <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                Don&apos;t settle for ordinary. Hire exceptional iOS developers passionate about crafting beautiful, user-friendly apps.
              </p>
            </div>
            <Link href="/contact-us" className="btn-primary px-7 py-3.5 text-sm shrink-0">
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
            description="Build your dream iOS application on a budget. Our flexible engagement models ensure you get the expertise you need at a price that works for you."
            className="mb-14"
          />
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {hiringModels.map((model, i) => (
              <motion.div key={model.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="section-card rounded-3xl p-8 flex flex-col gap-5 relative overflow-hidden"
                style={model.highlight ? { border: '2px solid var(--accent)' } : {}}>
                {model.highlight && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
                    style={{ background: 'var(--accent)' }}>
                    Most Popular
                  </span>
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
                <a href="#hire-form"
                  className={`text-sm font-semibold inline-flex items-center gap-1.5 ${model.highlight ? 'btn-primary px-5 py-2.5' : 'accent-link'}`}>
                  Get Started <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DEVELOPER TIERS — flip cards ═════════════════════════════ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="Top 1% of Indian Developers"
            title="Your iOS App Journey Starts Here"
            description="Partner with our skilled iOS developers and build something incredible together."
            className="mb-14"
          />
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {developerTiers.map((tier, i) => (
              <motion.div key={tier.level}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
                style={{ perspective: '1000px', height: '280px' }}>
                {/* flip container */}
                <div className="relative w-full h-full transition-transform duration-700"
                  style={{ transformStyle: 'preserve-3d', transform: 'rotateY(0deg)' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'rotateY(180deg)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'rotateY(0deg)')}>

                  {/* ── FRONT ── */}
                  <div className="absolute inset-0 section-card rounded-3xl p-8 flex flex-col gap-4 text-center"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      border: i === 1 ? '2px solid var(--accent)' : '1px solid var(--border)',
                    }}>
                    {i === 1 && (
                      <span className="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
                        style={{ background: 'var(--accent)' }}>
                        Popular
                      </span>
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

                  {/* ── BACK ── */}
                  <div className="absolute inset-0 rounded-3xl p-8 flex flex-col items-center justify-center gap-5 text-center"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      background: i === 1 ? 'var(--accent)' : 'var(--brand-navy)',
                    }}>
                    <h3 className="font-black text-xl text-white leading-snug">{tier.level}</h3>
                    <p className="text-white/80 text-sm">{tier.exp}</p>
                    <p className="text-3xl font-black text-white">{tier.priceRange}<span className="text-sm ml-1 opacity-70">/mo</span></p>
                    <a href="#hire-form"
                      className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-opacity hover:opacity-80"
                      style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.35)' }}>
                      Hire Now <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RELATED HIRE OPTIONS ═════════════════════════════════════ */}
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="Also Hire"
            title="Explore More Talent"
            description="Beyond iOS — access our full bench of vetted mobile and web engineers."
            className="mb-12"
          />
          <div className="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {relatedHires.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="section-card section-card-interactive rounded-3xl p-7 flex flex-col gap-4 group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center icon-box shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
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

      {/* ══ INDUSTRIES ═══════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="Industries We Serve"
            title="iOS Apps Across Every Sector"
            className="mb-14"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {SHARED_INDUSTRIES.map((ind, i) => (
              <motion.div key={ind.title}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
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
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know before hiring your iOS developer from ReapMind."
            className="mb-14"
          />
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={faq.q}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="section-card rounded-2xl overflow-hidden" style={{ background: 'var(--card)' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
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

      {/* ══ CTA ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--brand-sky-soft) 0%, var(--accent-soft) 40%, var(--background) 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(var(--brand-sky) 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.35 }} />
        <div className="relative container mx-auto px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <span className="badge-pill mb-8">Get Started Today</span>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6"
              style={{ color: 'var(--heading)', letterSpacing: '-0.04em' }}>
              Ready to Hire Your<br />iOS Developer?
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              Share your requirements today. We&apos;ll send you a shortlist of matched, pre-vetted iOS developers within 48 hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-14">
              <a href="#hire-form" className="btn-primary px-8 py-4 text-base">
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
