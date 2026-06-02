'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import {
  ArrowRight, Quote, Star, ChevronLeft, ChevronRight, ChevronDown,
  Database, Settings, BarChart3, Shield, Cloud, Users,
  Layers, Award, CheckCircle2, Zap, Globe,
  Phone, Mail, MapPin, ArrowUpRight,
} from 'lucide-react';
import {
  SHARED_TESTIMONIALS, SHARED_BLOG_POSTS, SHARED_PORTFOLIO_ITEMS,
  SHARED_INDUSTRIES, SHARED_STATS, SHARED_CLIENT_LOGOS,
} from '@/data/shared-page-data';

const engagementModels = [
  { icon: Users,     title: 'Dedicated Team Model',   description: 'A dedicated team of developers, designers, and project managers focused exclusively on your ERP project — ideal for long-term engagements with evolving requirements and direct communication.' },
  { icon: Shield,    title: 'Fixed-Price Model',       description: 'Scope, timeline, and budget defined upfront with a fixed price agreed. Best for clearly defined projects with stable requirements that are unlikely to change significantly.' },
  { icon: BarChart3, title: 'Time & Material Model',   description: 'Project cost calculated on time and resources used. Provides flexibility to handle changing requirements and supports incremental development and continuous improvement.' },
  { icon: Layers,    title: 'Hybrid Model',            description: 'Combines fixed-price structure with time & material flexibility — defined milestones and deliverables alongside the ability to adjust scope as the project evolves.' },
  { icon: Cloud,     title: 'Cloud Migration',         description: 'Seamless migration of your ERP to the cloud — optimizing performance, reducing operational costs, and ensuring minimal downtime through meticulous planning and execution.' },
];

const erpBenefits = [
  { icon: Settings,  title: 'Efficient Business Operations',  description: 'ERP unifies core processes — inventory, accounting, procurement — eliminating redundancy, reducing manual errors, and freeing teams to focus on growth.' },
  { icon: BarChart3, title: 'Improved Decision-Making',       description: 'Real-time dashboards and unified reporting give leadership a single source of truth — enabling faster, more accurate decisions at every level.' },
  { icon: Users,     title: 'Enhanced Collaboration',         description: 'Shared data and integrated workflows break down departmental silos, improving coordination across sales, finance, operations, and HR.' },
  { icon: Shield,    title: 'Compliance & Governance',        description: 'Built-in audit trails, role-based access, and automated compliance workflows ensure regulatory requirements are met without manual overhead.' },
  { icon: Globe,     title: 'Scalability & Growth',           description: 'Modern ERP systems scale with your business — adding modules, users, and geographies without disrupting current operations.' },
  { icon: Zap,       title: 'Customer Satisfaction',          description: 'Faster order processing, accurate invoicing, and real-time delivery visibility translate directly into better customer experiences and stronger retention.' },
];

const devProcess = [
  { num: '01', title: 'Agile Approach',    description: 'Sprint-based delivery with frequent demos keeps you in control and lets the solution evolve with your feedback.' },
  { num: '02', title: 'Planning',          description: 'Detailed discovery sessions map your business processes, integration points, and success criteria before any code is written.' },
  { num: '03', title: 'UI/UX Designing',   description: 'Role-appropriate interfaces designed to drive adoption — intuitive dashboards for executives, efficient workflows for operations staff.' },
  { num: '04', title: 'Coding',            description: 'Clean, documented, maintainable code built on proven ERP frameworks with custom modules tailored to your exact workflows.' },
  { num: '05', title: 'Quality Assurance', description: 'Functional, integration, performance, and user acceptance testing at every milestone ensures a system your team can trust from day one.' },
  { num: '06', title: 'Launch',            description: 'Structured go-live with data migration validation, staff training, and a hypercare period for a smooth cutover from legacy systems.' },
];

const whyUs = [
  { icon: Award,        title: 'Deep ERP Expertise',        description: 'Years of ERP development across manufacturing, retail, healthcare, and logistics — we understand the domain, not just the code.' },
  { icon: Users,        title: 'Client-Centric Approach',   description: 'We start with your requirements, not a template. Detailed discovery and continuous consultation ensure the solution fits your processes.' },
  { icon: Layers,       title: 'Comprehensive Services',    description: 'Consulting, implementation, integration, customization, training, and ongoing support — the full ERP lifecycle under one roof.' },
  { icon: CheckCircle2, title: 'Quality & Reliability',     description: 'Industry best practices, rigorous QA, and documented handover processes guarantee a reliable, scalable system.' },
  { icon: Globe,        title: 'Collaborative Partnership', description: 'Open communication, transparent reporting, and shared accountability — you are never out of the loop on your own project.' },
  { icon: Zap,          title: 'Innovation & Adaptability', description: 'Cutting-edge frameworks and forward-thinking architecture ensure your ERP can evolve with emerging business needs.' },
];

const faqs = [
  { q: 'Why should we choose ReapMind for ERP development?', a: 'We combine deep ERP domain knowledge with a client-first delivery model. Our team acts as strategic partners — understanding your business objectives and translating them into scalable, maintainable software rather than just fulfilling a spec.' },
  { q: 'What industries do you specialize in for ERP development?', a: 'We have delivered ERP solutions across manufacturing, retail, healthcare, finance, logistics, education, and professional services. Our solutions adapt to each sector\'s unique workflows and compliance requirements.' },
  { q: 'How do you ensure ERP solutions meet our specific requirements?', a: 'Every engagement starts with detailed requirement workshops and process mapping sessions. Our team documents workflows, integration points, and success criteria alongside your stakeholders before development begins.' },
  { q: 'What services do you offer beyond ERP development?', a: 'We provide end-to-end ERP services including consulting, implementation, system integration, module customization, data migration, staff training, and ongoing maintenance and support.' },
  { q: 'How do you handle data security in ERP systems?', a: 'Security is architected from day one — role-based access control, end-to-end encryption, secure API design, audit logging, and compliance with relevant regulations are standard in every engagement.' },
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
export default function ErpSoftwarePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq]     = useState<number | null>(null);

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
            <span className="badge-pill mb-8">ERP Software Development</span>
            <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-black leading-[1.02] mb-7"
              style={{ color: 'var(--heading)', letterSpacing: '-0.04em' }}>
              Build an ERP That<br />Fits Your Business.<br />
              <span style={{ color: 'var(--brand-blue)' }}>Drive Real Results.</span>
            </h1>
            <p className="text-[1.05rem] leading-[1.75] mb-10 max-w-lg" style={{ color: 'var(--muted-foreground)' }}>
              We design and build bespoke ERP software for Mumbai businesses — replacing fragmented tools with unified systems that give you control, visibility, and the efficiency to scale.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us" className="btn-primary px-7 py-3.5 text-sm">
                Start Your ERP Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#engagement" className="btn-secondary px-7 py-3.5 text-sm">
                Explore Our Approach
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
        {/* logo strip */}
        <div className="absolute bottom-0 inset-x-0 border-t py-6"
          style={{ borderColor: 'var(--border)', background: 'var(--surface)', backdropFilter: 'blur(16px)' }}>
          <div className="container mx-auto px-6 lg:px-8">
            <p className="text-center text-sm font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ color: 'var(--muted-foreground)', opacity: 0.7 }}>Trusted by global enterprises</p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
              {SHARED_CLIENT_LOGOS.map(l => (
                <div key={l.name} className="relative h-20 w-50 opacity-50 hover:opacity-90 transition-opacity duration-300">
                  <Image src={l.src} alt={l.name} fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY ERP ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4 block">Why ERP</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--heading)' }}>
              Why Your Mumbai Business Needs ERP
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              Mumbai&apos;s competitive landscape rewards businesses that move fast and operate lean. ERP is the foundation that makes both possible.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {erpBenefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="section-card rounded-2xl p-7 flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center icon-box shrink-0">
                  <b.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-base mb-1.5" style={{ color: 'var(--heading)' }}>{b.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{b.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ENGAGEMENT MODELS ════════════════════════════════════════ */}
      <section id="engagement" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-32">
              <span className="eyebrow mb-4 block">How We Engage</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6" style={{ color: 'var(--heading)' }}>
                Flexible Engagement Models
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--muted-foreground)' }}>
                Every ERP project is different. We offer engagement structures that match your budget, timeline, and risk profile — so you get the right level of flexibility and predictability for your situation.
              </p>
              <Link href="/contact-us" className="btn-primary px-7 py-3.5 text-sm inline-flex">
                Discuss Your Project <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <div className="flex flex-col gap-4">
              {engagementModels.map((m, i) => (
                <motion.div key={m.title} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="section-card section-card-interactive rounded-2xl p-6 flex gap-5 items-start">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center icon-box shrink-0">
                    <m.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-black text-base mb-1.5" style={{ color: 'var(--heading)' }}>{m.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{m.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ DEV PROCESS ══════════════════════════════════════════════ */}
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4 block">How We Build</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--heading)' }}>
              Our Development Process
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              A structured, transparent process from discovery to go-live — designed to minimise risk and maximise adoption.
            </p>
          </motion.div>
          <div className="relative max-w-5xl mx-auto">
            {/* connector line */}
            <div className="absolute top-8 left-8 right-8 h-0.5 hidden lg:block"
              style={{ background: 'var(--gradient-line)' }} />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {devProcess.map((step, i) => (
                <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center font-black text-base z-10 shrink-0"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent-text)', border: '2px solid var(--accent)' }}>
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1" style={{ color: 'var(--heading)' }}>{step.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{step.description}</p>
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
              Why ReapMind as Your ERP Partner
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              We bring the technical depth and business understanding that enterprise software demands.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
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
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4 block">Industries We Serve</span>
            <h2 className="text-3xl md:text-4xl font-black leading-tight" style={{ color: 'var(--heading)' }}>
              ERP Solutions Across Every Sector
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
                <span className="text-xs font-bold uppercase tracking-wider mb-3 block" style={{ color: 'var(--accent-text)' }}>
                  {post.category}
                </span>
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
              Common questions about ERP development before we start the conversation.
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
              Ready to Build<br />Your ERP System?
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              Let&apos;s scope your project together. A 30-minute discovery call is all it takes to understand your current setup and map out the right ERP strategy for your business.
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
