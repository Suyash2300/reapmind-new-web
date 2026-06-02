'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import {
  ArrowRight, Quote, Star, ChevronLeft, ChevronRight, ChevronDown,
  Rocket, Target, Zap, TrendingUp, Users, Shield,
  CheckCircle2, BarChart3, Lightbulb, Code, Clock, Award,
  Phone, Mail, MapPin, Globe, Layers, RefreshCw,
} from 'lucide-react';
import {
  SHARED_TESTIMONIALS, SHARED_BLOG_POSTS, SHARED_PORTFOLIO_ITEMS,
  SHARED_INDUSTRIES, SHARED_STATS, SHARED_CLIENT_LOGOS,
} from '@/data/shared-page-data';

/* ─── page data ───────────────────────────────────────────────────── */
const mvpServices = [
  {
    icon: Lightbulb,
    title: 'MVP Strategy & Consulting',
    description: 'We help you define your riskiest assumptions, identify the smallest experiment that answers them, and map a build strategy that reaches market without wasting runway.',
  },
  {
    icon: Code,
    title: 'Custom MVP Development',
    description: 'Full-stack MVP engineering — web, mobile, or both — built lean without shortcuts. Clean architecture from day one means no costly rebuilds when you scale.',
  },
  {
    icon: Target,
    title: 'Rapid Prototyping',
    description: 'Interactive prototypes and clickable demos in days, not months — so you can validate with real users and stakeholders before committing a single line of production code.',
  },
  {
    icon: BarChart3,
    title: 'Product Analytics & Testing',
    description: 'We instrument your MVP with analytics from launch day — tracking user flows, drop-offs, and engagement metrics so iteration is driven by evidence, not opinion.',
  },
  {
    icon: RefreshCw,
    title: 'Post-Launch Iteration',
    description: 'Feedback loops built in. We stay engaged after launch, running sprint-based improvement cycles that translate user insights into features that drive retention and growth.',
  },
  {
    icon: Layers,
    title: 'MVP to Scale',
    description: 'When your MVP finds traction, we architect the path to scale — adding infrastructure, features, and team capacity in a way that honours the foundations already built.',
  },
];

const whyMvp = [
  { icon: Clock,        title: 'Faster Time to Market',   description: 'Reach your first users in weeks. An MVP captures early adopters and market position while competitors are still planning.' },
  { icon: Shield,       title: 'De-Risk Your Investment',  description: 'Test the market with a fraction of a full product budget. Validate demand before committing to the full build.' },
  { icon: Users,        title: 'Real User Validation',     description: 'Assumptions become facts. Real users tell you what works, what doesn\'t, and what they actually need — before it costs a fortune to change.' },
  { icon: TrendingUp,   title: 'Investor-Ready Faster',   description: 'A working product in users\' hands is the strongest pitch. MVPs convert investor conversations into term sheets.' },
  { icon: RefreshCw,    title: 'Iterative Learning',       description: 'Ship, measure, learn, repeat. The MVP mindset turns every release into a data-gathering exercise that improves the next one.' },
  { icon: Zap,          title: 'Competitive Advantage',    description: 'Speed is strategy. Getting to market first with a validated product gives you a moat that late, slow-moving competitors can\'t easily cross.' },
];

const buildPhases = [
  {
    num: '01',
    title: 'Discovery & Definition',
    description: 'We run intensive workshops to map your target user, core problem, and the smallest feature set that delivers real value. Output: a clear MVP scope and success metrics.',
    image: '/images/process/process-planning.jpg',
    duration: '1–2 weeks',
  },
  {
    num: '02',
    title: 'UX Design & Prototype',
    description: 'Wireframes and high-fidelity designs validated with stakeholders before development begins. You see and feel the product before a line of code is written.',
    image: '/images/process/process-design.jpg',
    duration: '1–2 weeks',
  },
  {
    num: '03',
    title: 'Agile Development',
    description: 'Sprint-based development with weekly demos. You see working software at every stage and influence direction with real-time feedback — no black boxes.',
    image: '/images/process/process-agile.jpg',
    duration: '4–10 weeks',
  },
  {
    num: '04',
    title: 'QA & Performance',
    description: 'Functional testing, device compatibility, and performance validation ensure your MVP is stable and fast — first impressions with users are make-or-break.',
    image: '/images/process/process-qa.jpg',
    duration: '1 week',
  },
  {
    num: '05',
    title: 'Launch & Analytics',
    description: 'Structured go-live with analytics instrumented from day one. We set up dashboards so you start learning from your first real user the moment they hit the product.',
    image: '/images/process/process-launch.jpg',
    duration: '1 week',
  },
  {
    num: '06',
    title: 'Iterate & Grow',
    description: 'Post-launch sprint cycles translate real user feedback into prioritised improvements. We help you find product-market fit, then build toward scale.',
    image: '/images/process/process-coding.jpg',
    duration: 'Ongoing',
  },
];

const engagementModels = [
  { icon: Users,     title: 'Fixed-Price MVP',         description: 'Scope, deliverables, and cost agreed upfront. Ideal when your requirements are well-defined and you need budget certainty before your next funding round.' },
  { icon: Clock,     title: 'Time & Material',          description: 'Flexible sprint-by-sprint engagement. Best for products where requirements will evolve as you learn from early users and feedback.' },
  { icon: Rocket,    title: 'Dedicated Squad',          description: 'A focused pod of engineers and a designer embedded in your team — move at startup speed with senior talent and direct communication every day.' },
  { icon: TrendingUp,'title': 'Startup Partnership',   description: 'For early-stage founders: equity or hybrid arrangements available for the right ideas. We back bold products and become genuine co-builders.' },
];

const whyReapMind = [
  { icon: Rocket,       title: 'Startup DNA',             description: 'We\'ve built and launched products ourselves. We understand the pressure of runway, investor timelines, and the need to move fast without breaking everything.' },
  { icon: Award,        title: 'Validated Track Record',  description: '250+ products shipped across sectors. We know which shortcuts kill products and which optimisations actually move the needle on traction.' },
  { icon: CheckCircle2, title: 'Technical Excellence',    description: 'No tech debt from day one. Our engineers build with clean architecture so your MVP\'s foundation can scale to Series A and beyond.' },
  { icon: Globe,        title: 'India, USA & UAE',        description: 'Global delivery teams giving you around-the-clock development velocity and genuine local market knowledge in key regions.' },
  { icon: Users,        title: 'Founder-Friendly',        description: 'Transparent pricing, weekly demos, and open Slack/Notion access. You\'re never out of the loop on your own product.' },
  { icon: Zap,          title: 'Speed Without Sacrifice', description: '6–12 week MVP delivery without sacrificing quality or architectural integrity. Lean execution, never careless execution.' },
];

const faqs = [
  {
    q: 'What is an MVP and why does my startup need one?',
    a: 'An MVP (Minimum Viable Product) is the smallest version of your product that delivers enough value to attract early adopters and gather real-world feedback. It lets you validate core assumptions — does anyone want this, will they pay for it — before investing in a full build. For most startups, it\'s the difference between building the right product and building an expensive one no one uses.',
  },
  {
    q: 'How long does it take to build an MVP with ReapMind?',
    a: 'Most MVPs are delivered in 6–14 weeks from kickoff to launch, depending on scope. We run an intensive 1-week discovery to pin down requirements and scope, then move straight into design and development sprints. We\'ll give you a precise timeline after our first scoping call.',
  },
  {
    q: 'What does MVP development cost?',
    a: 'MVP development with ReapMind typically ranges from $15,000 to $60,000 depending on complexity, platform (web / mobile / both), and required integrations. We offer fixed-price engagements for well-defined scopes, so you always know what you\'re committing before we start.',
  },
  {
    q: 'Can you help me define what to include in my MVP?',
    a: 'Yes — this is often where we add the most value. Our discovery process helps you separate must-have features from nice-to-haves, identify your riskiest assumptions, and design the smallest experiment that validates them. Many founders arrive with a 12-month roadmap and leave with a focused 8-week MVP.',
  },
  {
    q: 'What tech stack do you use for MVPs?',
    a: 'We choose the stack that fits your product and future scale, not a default template. Common choices: React / Next.js for web, React Native or Flutter for mobile, Node.js or Python for backend, AWS / GCP for infrastructure. We\'ll recommend and justify the right stack for your specific context.',
  },
  {
    q: 'What happens after the MVP launches?',
    a: 'We build the feedback loop in from day one — analytics, user interviews, and a structured iteration plan. Post-launch, we offer ongoing sprint-based development to incorporate real-world learning, optimise for retention, and build toward your full product roadmap as traction grows.',
  },
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
export default function MvpPage() {
  const [activeTab,   setActiveTab]   = useState(0);
  const [activePhase, setActivePhase] = useState(0);
  const [openFaq,     setOpenFaq]     = useState<number | null>(null);

  return (
    <div className="overflow-x-hidden">

      {/* ══ HERO ═══════════════════════════════════════════════════════
          Unique layout: left copy + right split image panel (2 stacked images)
          with a floating "timeline chip" badge overlay
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--brand-sky-soft) 0%, var(--accent-soft) 40%, var(--background) 100%)' }}>

        {/* grid dot overlay */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(var(--brand-sky) 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.35 }} />

        {/* cyan glow */}
        <div className="absolute top-0 right-0 w-[55vw] h-[70vh] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(0,174,239,0.12) 0%, transparent 65%)' }} />

        <div className="relative container mx-auto px-6 lg:px-8 py-36 lg:py-44 grid lg:grid-cols-2 gap-16 items-center">

          {/* — Left copy — */}
          <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="badge-pill mb-8">
              <Rocket className="w-3.5 h-3.5" /> MVP Development Company
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-black leading-[1.02] mb-7"
              style={{ color: 'var(--heading)', letterSpacing: '-0.04em' }}>
              Launch Your<br />Startup Idea.<br />
              <span style={{ color: 'var(--brand-blue)' }}>Validate Fast.</span>
            </h1>
            <p className="text-[1.05rem] leading-[1.75] mb-10 max-w-lg" style={{ color: 'var(--muted-foreground)' }}>
              We turn your product vision into a live, tested MVP in 6–12 weeks — giving you real user data, investor traction, and the foundation to scale with confidence.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link href="/contact-us" className="btn-primary px-7 py-3.5 text-sm">
                Start Your MVP <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#phases" className="btn-secondary px-7 py-3.5 text-sm">
                Our Process <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            {/* trust row */}
            <div className="flex flex-wrap gap-6">
              {['6–12 wk delivery', 'Fixed-price available', '250+ products launched'].map(t => (
                <span key={t} className="flex items-center gap-2 text-sm" style={{ color: 'var(--muted-foreground)' }}>
                  <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: 'var(--accent)' }} />
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* — Right: image pair + stat cards — */}
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative">
            {/* top-right image */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-3xl overflow-hidden h-64 col-span-2">
                <Image src="/images/company-workspace.png" alt="MVP development workspace" fill className="object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(0,33,71,0.55))' }} />
                {/* floating chip */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white"
                  style={{ background: 'var(--accent)', backdropFilter: 'blur(8px)' }}>
                  <Rocket className="w-3.5 h-3.5" /> 6-week avg. time to launch
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden h-44">
                <Image src="/images/company-team.jpg" alt="ReapMind MVP team" fill className="object-cover" />
                <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(0,33,71,0.45))' }} />
              </div>
              <div className="flex flex-col gap-4">
                {SHARED_STATS.slice(0, 2).map((s, i) => (
                  <motion.div key={s.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, delay: 0.4 + i * 0.12 }}
                    className="rounded-2xl p-5 flex flex-col gap-1 flex-1 section-card">
                    <span className="text-3xl font-black tracking-tight stat-value">
                      <Counter to={parseInt(s.value)} suffix={s.value.replace(/[0-9]/g, '')} />
                    </span>
                    <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* logo strip */}
        <div className="absolute bottom-0 inset-x-0 border-t py-6"
          style={{ borderColor: 'var(--border)', background: 'var(--surface)', backdropFilter: 'blur(16px)' }}>
          <div className="container mx-auto px-6 lg:px-8">
            <p className="text-center text-sm font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ color: 'var(--muted-foreground)', opacity: 0.7 }}>
              Trusted by global ventures
            </p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
              {SHARED_CLIENT_LOGOS.map(l => (
                <div key={l.name} className="relative h-6 w-20 opacity-50 hover:opacity-90 transition-opacity duration-300">
                  <Image src={l.src} alt={l.name} fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY MVP ════════════════════════════════════════════════════
          Dark-tinted section with large icon grid
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4 block">Why MVP First</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--heading)' }}>
              Why Start With an MVP?
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              The fastest path from idea to product-market fit isn't building everything — it's building the right thing first.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {whyMvp.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="section-card rounded-2xl p-7 flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center icon-box shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-base mb-1.5" style={{ color: 'var(--heading)' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHAT WE BUILD ══════════════════════════════════════════════
          Image-backed intro + 2-col services list
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          {/* heading + feature image */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="eyebrow mb-4 block">Our Services</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6" style={{ color: 'var(--heading)' }}>
                End-to-End MVP Development Services
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--muted-foreground)' }}>
                From a blank page to a live product in users' hands — we cover every stage of the MVP journey so you can focus on your market, not your tech stack.
              </p>
              <Link href="/contact-us" className="btn-primary px-7 py-3.5 text-sm inline-flex">
                Discuss Your Idea <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
              className="relative rounded-3xl overflow-hidden h-80 lg:h-96">
              <Image src="/images/svc-mobile-1.jpg" alt="MVP development services" fill className="object-cover" />
              <div className="absolute inset-0 rounded-3xl"
                style={{ background: 'linear-gradient(135deg, rgba(0,33,71,0.45) 0%, transparent 60%)' }} />
              {/* floating stat */}
              <div className="absolute top-6 right-6 rounded-2xl px-5 py-4 text-center section-card">
                <div className="text-3xl font-black" style={{ color: 'var(--brand-blue)' }}>6–12</div>
                <div className="text-xs font-semibold" style={{ color: 'var(--muted-foreground)' }}>weeks to launch</div>
              </div>
            </motion.div>
          </div>

          {/* services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {mvpServices.map((svc, i) => (
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

      {/* ══ BUILD PHASES ═══════════════════════════════════════════════
          Unique: left image tab panel + right step list with duration badges
      ════════════════════════════════════════════════════════════════ */}
      <section id="phases" className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4 block">How We Build</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--heading)' }}>
              From Idea to Launched Product
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              A structured, time-boxed process that ships a live product in weeks — not months.
            </p>
          </motion.div>

          {/* desktop: image left, steps right */}
          <div className="hidden lg:grid grid-cols-[1fr_360px] gap-8 max-w-5xl mx-auto">
            {/* image panel */}
            <motion.div key={activePhase} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="section-card rounded-3xl overflow-hidden relative">
              <div className="relative h-80 w-full">
                <Image src={buildPhases[activePhase].image} alt={buildPhases[activePhase].title} fill className="object-cover" />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(0,20,40,0.75))' }} />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black text-white shrink-0"
                    style={{ background: 'var(--accent)' }}>
                    {buildPhases[activePhase].num}
                  </span>
                  <h3 className="text-xl font-black" style={{ color: 'var(--heading)' }}>
                    {buildPhases[activePhase].title}
                  </h3>
                  <span className="ml-auto text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent-text)' }}>
                    {buildPhases[activePhase].duration}
                  </span>
                </div>
                <p className="text-base leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                  {buildPhases[activePhase].description}
                </p>
              </div>
            </motion.div>

            {/* step list */}
            <div className="flex flex-col gap-2 justify-center">
              {buildPhases.map((phase, i) => (
                <button key={phase.num} onClick={() => setActivePhase(i)}
                  className="flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-200"
                  style={{
                    background: activePhase === i ? 'var(--accent-soft)' : 'transparent',
                    border: `1px solid ${activePhase === i ? 'var(--accent)' : 'transparent'}`,
                  }}>
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black shrink-0 transition-all duration-200"
                    style={{
                      background: activePhase === i ? 'var(--accent)' : 'var(--border)',
                      color: activePhase === i ? '#fff' : 'var(--muted-foreground)',
                    }}>
                    {phase.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm" style={{ color: activePhase === i ? 'var(--accent-text)' : 'var(--muted-foreground)' }}>
                      {phase.title}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: 'var(--muted-foreground)', opacity: 0.7 }}>
                      {phase.duration}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* mobile: vertical cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:hidden">
            {buildPhases.map((phase, i) => (
              <motion.div key={phase.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                className="section-card rounded-2xl overflow-hidden">
                <div className="relative h-40">
                  <Image src={phase.image} alt={phase.title} fill className="object-cover" />
                  <div className="absolute inset-0" style={{ background: 'rgba(0,20,40,0.45)' }} />
                  <span className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-lg text-white"
                    style={{ background: 'var(--accent)' }}>{phase.duration}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-black text-white"
                      style={{ background: 'var(--accent)' }}>{phase.num}</span>
                    <h3 className="font-black text-sm" style={{ color: 'var(--heading)' }}>{phase.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ENGAGEMENT MODELS ══════════════════════════════════════════
          Sticky left copy + scrolling right cards
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-32">
              <span className="eyebrow mb-4 block">How We Engage</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6" style={{ color: 'var(--heading)' }}>
                Flexible Models<br />for Every Stage
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--muted-foreground)' }}>
                Whether you're a pre-seed founder or a growth-stage team spinning up a new product line — we have an engagement structure that fits your constraints.
              </p>
              <div className="relative rounded-2xl overflow-hidden h-56">
                <Image src="/images/svc-web-1.jpg" alt="ReapMind engagement" fill className="object-cover" />
                <div className="absolute inset-0 rounded-2xl"
                  style={{ background: 'linear-gradient(135deg, rgba(0,33,71,0.55) 0%, transparent 65%)' }} />
                <div className="absolute bottom-4 left-4">
                  <Link href="/contact-us" className="btn-primary px-6 py-3 text-sm inline-flex">
                    Talk to Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
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

      {/* ══ PORTFOLIO ═════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="eyebrow mb-4 block">Our Work</span>
              <h2 className="text-3xl md:text-4xl font-black leading-tight" style={{ color: 'var(--heading)' }}>
                Products We've Launched
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

      {/* ══ WHY REAPMIND ══════════════════════════════════════════════
          Full-bleed dark banner + 3-col grid below
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          {/* dark image banner */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden mb-16 h-64 md:h-80">
            <Image src="/images/im-main-10164.jpg" alt="ReapMind team" fill className="object-cover object-center" />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(0,174,239,0.55) 0%, rgba(0,120,200,0.35) 100%)' }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
              <span className="eyebrow mb-3 block" style={{ color: 'rgba(255,255,255,0.85)' }}>Why ReapMind</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                Built by Builders,<br />for Builders
              </h2>
            </div>
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

      {/* ══ INDUSTRIES ════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4 block">Industries We Serve</span>
            <h2 className="text-3xl md:text-4xl font-black leading-tight" style={{ color: 'var(--heading)' }}>
              MVPs Across Every Sector
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

      {/* ══ TESTIMONIALS ══════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4 block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight" style={{ color: 'var(--heading)' }}>
              What Founders Say
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

      {/* ══ BLOG ══════════════════════════════════════════════════════ */}
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
            {SHARED_BLOG_POSTS.slice(0, 4).map((post, i) => (
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

      {/* ══ FAQ ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--heading)' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              Everything you need to know about MVP development before we start building.
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

      {/* ══ CTA ═══════════════════════════════════════════════════════
          Full dark gradient matching hero — bookends the page visually
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--brand-sky-soft) 0%, var(--accent-soft) 40%, var(--background) 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(var(--brand-sky) 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.35 }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, rgba(0,174,239,0.1) 0%, transparent 60%)' }} />

        {/* side image accent */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden xl:block overflow-hidden">
          <Image src="/images/im-main-14503.jpg" alt="Launch" fill className="object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, var(--background) 25%, transparent)' }} />
        </div>

        <div className="relative container mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="badge-pill mb-8">
              <Rocket className="w-3.5 h-3.5" /> Get Started
            </span>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6"
              style={{ color: 'var(--heading)', letterSpacing: '-0.04em' }}>
              Ready to Launch<br />Your MVP?
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              A 30-minute discovery call is all it takes. We'll scope your MVP, estimate a timeline, and show you exactly how we'd build it.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-14">
              <Link href="/contact-us" className="btn-primary px-8 py-4 text-base">
                Book a Free Discovery Call <ArrowRight className="w-5 h-5" />
              </Link>
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
