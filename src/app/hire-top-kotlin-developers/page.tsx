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
  { value: 200,  suffix: '+', label: 'Kotlin Developers' },
  { value: 90,   suffix: '+', label: 'Certified Experts' },
];

const heroBullets = [
  'Build sleek, high-performing native Android apps with elite Kotlin developers.',
  'Vetted for Jetpack Compose UI layout models, Coroutines concurrency, and local DB (Room).',
  'Scale your engineering squad up or down based on your dynamic roadmap cycles.',
  'ReapMind: Sourcing and onboarding top 1% Kotlin talent in India.',
];

const whyUs = [
  { icon: Code,       title: 'Code Documentation',      description: 'Well-structured, clean directories and codebases documented for seamless handovers.' },
  { icon: Globe,      title: 'Time-Zone Compatibility',  description: 'Our developers align with your team hours across India, USA, and UAE for sync.' },
  { icon: Users,      title: 'Flexibility & Retention',  description: 'Scale your Kotlin engineering squad up or down based on your roadmap cycles.' },
  { icon: Shield,     title: 'Flexible Contracts',       description: 'Engagement contracts configured around your scope and resources.' },
  { icon: Zap,        title: 'Data Security Assurance',  description: 'Strict NDAs, secure workspace setups, and intellectual property compliance.' },
  { icon: Star,       title: 'Top 1% Vetted Talent',     description: 'A 5-stage assessment covering Jetpack Compose, MVVM/MVI architectures, and memory diagnostics.' },
];

const techStack = [
  { label: 'Core Language',   items: ['Kotlin', 'Java'] },
  { label: 'UI & Design',      items: ['Jetpack Compose'] },
  { label: 'Asynchronous',     items: ['Coroutines'] },
  { label: 'Ecosystem',        items: ['Android Studio', 'Android SDK', 'Firebase'] },
  { label: 'Storage & DB',     items: ['Room'] },
  { label: 'Network & DI',     items: ['Retrofit', 'Hilt'] },
  { label: 'Machine Learning', items: ['TensorFlow Lite'] },
];

const hiringSteps = [
  { num: '01', title: 'Inquiry',             icon: Users,      description: 'We assess project alignment and goals for potential collaboration.' },
  { num: '02', title: 'Developer Selection', icon: Award,      description: 'We select developers from our pre-vetted tech pool as per project needs within 48 hours.' },
  { num: '03', title: 'Integration',         icon: CheckCircle2, description: 'Upon ETA approval, Developers start with direct task alignments.' },
  { num: '04', title: 'Scaling',             icon: Layers,     description: 'Modify team size as needed, supported by a dedicated account manager.' },
];

const hiringModels = [
  { title: 'Full Time',    icon: Clock,    hours: '8 hrs / day',    commitment: '160 hrs / month', highlight: true,  description: 'Deep integration and full daily focus on your native Android application development.' },
  { title: 'Part Time',    icon: Zap,      hours: '4 hrs / day',    commitment: '60 hrs / month',  highlight: false, description: 'Ongoing support, migrations to Jetpack Compose, or SDK alignments alongside your team.' },
  { title: 'Hourly Basis', icon: RefreshCw,hours: 'Open hrs / day', commitment: '50 hrs minimum',  highlight: false, description: 'Short-scope consultations, UI bug fixes resolution, or database optimization.' },
];

const developerTiers = [
  { level: 'Junior Kotlin Developer',    exp: '1–3 Years Experienced', priceRange: '$1,000 – $1,300' },
  { level: 'Mid Level Kotlin Developer', exp: '3–5 Years Experienced', priceRange: '$1,400 – $1,900' },
  { level: 'Senior Kotlin Developer',    exp: '5+ Years Experienced',  priceRange: '$2,000 – $2,800' },
];

const relatedHires = [
  { title: 'Hire Android Developers',  description: 'Elite native mobile developers specialized in the full Google/Android ecosystem.', href: '/hire-android-developers' },
  { title: 'Hire Flutter Developers',  description: 'Cross-platform mobile developers using Flutter and Dart for high-performance apps.', href: '/hire-flutter-developers' },
  { title: 'Hire ReactJS Developers',  description: 'Build fast, responsive interfaces matching state-of-the-art architectures.', href: '/hire-top-react-js-developers' },
];

const faqs = [
  { q: "What makes ReapMind's Kotlin developers stand out?", a: "Each engineer is hand-picked for their deep Kotlin expertise (mastery of language features, DSLs), passion for native Android development, commitment to clean architectures, and collaborative communication skills." },
  { q: "What types of Kotlin projects can ReapMind handle?", a: "Our developers are versatile. We build native Android apps, modern UIs with Jetpack Compose, complex backend APIs, cross-platform modules with Kotlin Multiplatform, and migrate legacy Java codebases to Kotlin." },
  { q: "What if I need to replace a developer on my project?", a: "We facilitate smooth replacements. We'll understand your feedback, match you with a suitable replacement developer, manage the knowledge transfer process, and ensure zero disruption to your project timelines." },
  { q: "Why Choose ReapMind over Freelancers or Other Agencies?", a: "We offer elite, pre-vetted engineers (top 1% talent), structured daily management, transparent communication, code backups, IP protection (NDAs), and scalable engagement models." },
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
export default function HireKotlinDevelopersPage() {
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
              Hire Kotlin Developers
            </motion.span>

            <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-black leading-[1.02] mb-7"
              style={{ color: 'var(--heading)', letterSpacing: '-0.04em' }}>
              {['Kotlin Rockstars,', 'Ready to Roll with', 'ReapMind.'].map((word, i) => (
                <motion.span key={word} className="block"
                  initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}>
                  {i === 2 ? <><span style={{ color: 'var(--brand-blue)' }}>ReapMind</span>{' Kotlin.'}</> : word}
                </motion.span>
              ))}
            </h1>

            <motion.p className="text-[1.05rem] leading-[1.75] mb-8 max-w-lg"
              style={{ color: 'var(--muted-foreground)' }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}>
              Imagine your native Android app running faster and smoother than ever. Scale your business and make that vision a reality by hiring the top vetted Kotlin developers in India.
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
      <HireAndroidForm devRole="Kotlin Developer" image="/images/kotlin/kotlin-developers.png" />

      {/* ══ WHY US ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeLeft} className="lg:sticky lg:top-32">
              <span className="eyebrow mb-4 block">Why ReapMind</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6"
                style={{ color: 'var(--heading)' }}>
                Kotlin Developers, Ready to<br />Roll with ReapMind
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--muted-foreground)' }}>
                Our India-based Kotlin experts go beyond coding; they craft high-performance, user-centric solutions that are as intuitive as they are powerful. Fluent in the latest Android technologies, we ensure your app is visually polished, secure, and ready to scale.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--accent)' }}>
                  <Smartphone className="w-5 h-5 text-white" />
                </motion.div>
                <div>
                  <p className="font-black text-sm" style={{ color: 'var(--heading)' }}>Native Android Excellence</p>
                  <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Jetpack Compose interfaces, Coroutines threads handling, dependency injections with Hilt</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-52">
                <Image src="/images/company-workspace.png" alt="Kotlin engineering team" fill className="object-cover" />
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
            title="Explore Our Cutting-Edge Kotlin Technologies"
            description="Our Kotlin experts build native layouts using Jetpack Compose, asynchronous flows with Coroutines, and local storage architectures."
            className="mb-14"
          />
          <div className="max-w-5xl mx-auto space-y-6">
            {techStack.map((cat, ci) => (
              <div key={cat.label}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="eyebrow shrink-0 w-36 text-right hidden sm:block">{cat.label}</span>
                  <div className="h-px flex-1 hidden sm:block" style={{ background: 'var(--border)' }} />
                  {cat.items.map((tech, ti) => {
                    const AVAILABLE_ICONS = [
                      'kotlin.png',
                      'jetpack-compose.png',
                      'coroutines.png',
                      'android-studio.png',
                      'java.png',
                      'android-sdk.png',
                      'firebase.png',
                      'room.png',
                      'retrofit.png',
                      'hilt.png',
                      'tensorflow-lite.png'
                    ];
                    const imgName = tech.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and') + '.png';
                    const hasIcon = AVAILABLE_ICONS.includes(imgName);
                    const imgSrc = `/images/kotlin/${imgName}`;
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
            title="Hire Kotlin Developers in 4 Simple Steps"
            description="Take a look at the simple & straightforward process to hire Kotlin developers from ReapMind Innovations."
            className="mb-16"
          />
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            {/* image with floating badge */}
            <motion.div {...fadeLeft} className="relative rounded-3xl overflow-hidden h-96 lg:h-[480px]">
              <Image src="/images/svc-mobile-2.jpg" alt="Kotlin Developers at ReapMind" fill className="object-cover" />
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
                <span className="text-xs font-bold" style={{ color: 'var(--heading)' }}>Actively matching Kotlin developers</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="section-card rounded-2xl px-5 py-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--accent)' }}>
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-black" style={{ color: 'var(--heading)' }}>Top 1% Kotlin Talent</p>
                    <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Vetted on memory safety, Jetpack Compose layouts, Retrofit networking, and Coroutines flows</p>
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
                Want to build high-performance native Android application?
              </h3>
              <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                ReapMind delivers qualified Kotlin developers to scale your Android capabilities immediately.
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
            description="Build your dream Kotlin application on a budget. Our flexible engagement models ensure you get the expertise you need at a price that works for you."
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
            title="Scale Your Team with Top-Tier Kotlin Developers"
            description="ReapMind's expert Kotlin developers accelerate your development timelines without compromising quality."
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
            description="Vetted engineering specialists in other mobile technologies."
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
          <SectionHeading badge="Industries We Serve" title="Kotlin Apps Across Every Sector" className="mb-14" />
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
            description="Everything you need to know before hiring your Kotlin developer from ReapMind."
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
              Ready to Hire Your<br />Kotlin Android Developer?
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              Share your project requirements today. We&apos;ll match you with pre-vetted Kotlin developer profiles within 48 hours.
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
