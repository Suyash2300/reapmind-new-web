'use client';

import { useRef, useState, useEffect, ReactNode } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ReadingProgress } from '../../components/blog/ReadingProgress';
import { SharePanel } from '../../components/blog/SharePanel';

/* ── FadeUp wrapper (avoids TS spread issues with FM v12) ── */
function FadeUp({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── data ── */
const FEATURES = [
  {
    icon: '🗺️',
    title: 'Interactive AR Maps',
    body: 'AR VR apps immerse users in interactive navigation sessions for finding preferred destinations. No more getting lost — precise search results delivered in real time over the physical world.',
    accent: '#1a69fd',
    size: 'lg',
  },
  {
    icon: '🌐',
    title: 'Language Translation',
    body: 'Immersive technology bridges communication gaps. Simply aim a camera at foreign text and AR overlays the translation instantly — much like Google Translate\'s live camera mode.',
    accent: '#7c3aed',
    size: 'sm',
  },
  {
    icon: '✨',
    title: 'Enriched Experiences',
    body: 'Point a camera at monuments and learn instantly. Museums offer AR views of extinct animals. Theme parks deliver participatory immersive rides. Restaurants preview dishes in 3D before ordering.',
    accent: '#0891b2',
    size: 'sm',
  },
  {
    icon: '📈',
    title: 'Marketing & Ads Boom',
    body: 'Hotels and airlines immerse guests in virtual environments using AR gadgets — letting customers preview rooms, flights, and experiences before booking, dramatically boosting conversions.',
    accent: '#059669',
    size: 'lg',
  },
];

const STATS = [
  { value: '$5.91B', label: 'AR market size in 2021' },
  { value: '$250B+', label: 'Projected by end of 2025' },
  { value: '4x', label: 'Faster booking decisions with VR previews' },
  { value: '68%', label: 'Travellers prefer AR-assisted navigation' },
];

const TOC = [
  { id: 'intro', label: 'How Immersive Tech Reshapes Travel' },
  { id: 'ways', label: 'Ways AR VR is Transforming Tourism' },
  { id: 'final', label: 'Final Words' },
];

const RELATED = [
  {
    href: '/blogs/how-to-develop-a-pci-compliant-mobile-app',
    title: 'How to Develop a PCI-Compliant Mobile App?',
    date: 'Jul 17, 2024',
    excerpt: 'Seamless payment integration demands PCI DSS compliance. Learn the full development roadmap.',
  },
  {
    href: '/blogs/benefits-of-utilizing-ai-in-data-center-ops',
    title: 'Benefits of Utilizing AI in Data Center Ops',
    date: 'Jul 15, 2024',
    excerpt: 'AI predicts failures, optimises energy, and strengthens security across modern data centers.',
  },
  {
    href: '/blogs/how-blockchain-is-transforming-enterprise',
    title: 'How Blockchain is Transforming Enterprise',
    date: 'Jul 17, 2024',
    excerpt: 'An immutable ledger shared across networks — security, transparency, and trust for business.',
  },
];

/* ══════════════════════════════════════════════════════════════ */
export function ImmersiveTravelClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  /* spotlight follow */
  const [spot, setSpot] = useState({ x: 50, y: 50 });
  useEffect(() => {
    const h = (e: MouseEvent) => setSpot({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    window.addEventListener('mousemove', h);
    return () => window.removeEventListener('mousemove', h);
  }, []);

  /* active TOC */
  const [activeToc, setActiveToc] = useState('intro');
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setActiveToc(e.target.id); }); },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    TOC.forEach(t => { const el = document.getElementById(t.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      <ReadingProgress />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* parallax bg */}
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1800&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
        </motion.div>

        {/* spotlight overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity"
          style={{
            background: `radial-gradient(600px circle at ${spot.x}% ${spot.y}%, rgba(26,105,253,0.08), transparent 70%)`,
          }}
        />

        {/* hero content */}
        <div className="relative z-20 container-app pt-32 pb-24 text-center max-w-5xl mx-auto px-4">
          {/* breadcrumb */}
          <FadeUp delay={0} className="flex justify-center gap-2 text-xs text-white/50 mb-8">
            <nav aria-label="Breadcrumb" className="flex gap-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blogs" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/80">AR Travel &amp; Tourism</span>
            </nav>
          </FadeUp>

          {/* badges */}
          <FadeUp delay={0.1} className="flex flex-wrap justify-center gap-3 mb-8">
            {['Travel & Tourism', 'AR / VR', 'Immersive Tech'].map(tag => (
              <span key={tag} className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-white/20 bg-white/5 backdrop-blur-md">
                {tag}
              </span>
            ))}
          </FadeUp>

          {/* h1 */}
          <motion.h1
            initial={{ opacity: 0, y: 60, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-h1 font-extrabold tracking-tight leading-[1.06] mb-8"
          >
            How{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              AR is Transforming
            </span>
            <br />Travel &amp; Tourism Industry?
          </motion.h1>

          <FadeUp delay={0.4} className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
            <p>Discover how AR VR is reshaping the way we explore the world — from interactive maps and live translation to virtual hotel previews and immersive museum tours.</p>
          </FadeUp>

          {/* meta row */}
          <FadeUp delay={0.5} className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
            <span>📅 July 17, 2024</span>
            <span>⏱ 5 min read</span>
            <span>✍️ ReapMind Innovations</span>
          </FadeUp>

          {/* scroll cue */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-16 flex flex-col items-center gap-2 text-white/30"
          >
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
            <span className="text-xs uppercase tracking-widest">Scroll</span>
          </motion.div>
        </div>
      </section>

      {/* ── STATS MARQUEE ─────────────────────────────────────────────── */}
      <div className="relative z-10 border-y border-white/10 bg-black/80 backdrop-blur-xl overflow-hidden py-5">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
          className="flex gap-0 whitespace-nowrap"
        >
          {[...STATS, ...STATS].map((s, i) => (
            <div key={i} className="flex items-center gap-8 px-12">
              <span className="text-2xl font-black text-primary">{s.value}</span>
              <span className="text-sm text-white/50">{s.label}</span>
              <span className="text-white/20 text-2xl">·</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── MAIN BODY ─────────────────────────────────────────────────── */}
      <div className="relative z-10 container-app mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-24">
        <div className="lg:grid lg:grid-cols-[220px_1fr_64px] lg:gap-12">

          {/* ── TOC sidebar ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-6">Contents</p>
              <nav className="flex flex-col gap-3">
                {TOC.map(item => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`text-sm transition-all duration-300 pl-4 border-l-2 ${
                      activeToc === item.id
                        ? 'border-primary text-white font-semibold'
                        : 'border-white/10 text-white/40 hover:text-white/70 hover:border-white/30'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* ── Article ── */}
          <article className="min-w-0">

            {/* INTRO */}
            <section id="intro" className="mb-20 scroll-mt-28">
              <FadeUp delay={0} className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Introduction</span>
              </FadeUp>

              <FadeUp delay={0.05} className="text-h2 font-extrabold mb-6">
                <h2>How is Immersive Technology reshaping Travel &amp; Tourism?</h2>
              </FadeUp>

              <FadeUp delay={0.1} className="space-y-5 text-white/70 leading-relaxed text-base">
                <p>
                  AR VR is revolutionizing almost every aspect of existence. AR is altering the game for marketers because of its capacity to capture human imaginations — allowing a variety of companies to dramatically improve their client experience.
                </p>
                <p>
                  The Augmented Reality market is expected to increase from <strong className="text-white">$5.91 billion</strong> to more than <strong className="text-white">$250 billion by the end of 2025</strong>. The travel and tourism business has gone through significant changes as a result. Immersive technology is a new aspect that has the potential to elevate the travel experience entirely.
                </p>
                <p>
                  When travelers see a special application for their journey, they pay attention.{' '}
                  <Link href="/immersive-technologies-ar-vr-mr/" className="text-primary hover:underline">AR VR-based</Link> travel apps overlay digital components to create a visually pleasing experience. Do you want to know what changes AR VR has brought to this industry? That is what we will discover in this article.
                </p>
              </FadeUp>

              {/* floating glass card */}
              <FadeUp delay={0.2} className="mt-10">
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 30px 60px rgba(26,105,253,0.15)' }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="text-5xl flex-shrink-0">🌍</div>
                <div>
                  <p className="font-bold text-white mb-2">AR VR technology in travel app development</p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Is assisting service providers in improving the quality and effectiveness of their offerings. A user may utilize AR VR apps to experience places and journeys from the comfort of their own home, thanks to Immersive technology-powered gadgets.
                  </p>
                </div>
              </motion.div>
              </FadeUp>
            </section>

            {/* WAYS — bento grid */}
            <section id="ways" className="mb-20 scroll-mt-28">
              <FadeUp delay={0} className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Key Applications</span>
              </FadeUp>
              <FadeUp delay={0.05} className="text-h2 font-extrabold mb-4">
                <h2>Ways AR VR is Transforming Travel &amp; Tourism</h2>
              </FadeUp>
              <FadeUp delay={0.1} className="text-white/60 mb-12 max-w-2xl">
                <p>Using{' '}
                <a href="https://www.forbes.com/sites/bernardmarr/2021/04/12/the-amazing-ways-vr-and-ar-are-transforming-the-travel-industry/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  AR VR technology in travel app development
                </a>{' '}
                is transforming how service providers deliver and travellers experience the world.</p>
              </FadeUp>

              {/* bento grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {FEATURES.map((f, i) => (
                  <BentoCard key={i} feature={f} index={i} />
                ))}
              </div>
            </section>

            {/* FINAL WORDS */}
            <section id="final" className="mb-20 scroll-mt-28">
              <FadeUp delay={0} className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Conclusion</span>
              </FadeUp>
              <FadeUp delay={0.05} className="text-h2 font-extrabold mb-6"><h2>Final Words</h2></FadeUp>
              <FadeUp delay={0.1} className="space-y-5 text-white/70 leading-relaxed">
                <p>
                  With modernized gadgets and instruments,{' '}
                  <Link href="/mobile-app-development-company/" className="text-primary hover:underline">immersive technology in the Travel</Link>{' '}
                  and Tourist sector has become quite useful for inn visits, booking-boosting info, and providing an unequalled route.
                </p>
                <p>
                  AR VR is already pleasing to the eye, enhancing travel experiences with novel mobile applications. The importance of technology in the Travel &amp; tourism industry cannot be overstated.
                </p>
                <p>
                  Immersive Technology has such a broad range of capabilities that it may even help you with new business start-ups. The travel industry is mostly focused on selling <em>experiences</em>, and AR VR helps to solve a range of problems while also providing better travel knowledge and experience to travellers.
                </p>
              </FadeUp>

              {/* CTA */}
              <FadeUp delay={0.2} className="mt-12">
              <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-blue-600/5 backdrop-blur-xl p-8 sm:p-12 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Your Digital Dreams · Our Mission</p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Ready to Build an Immersive Travel App?
                </h3>
                <p className="text-white/60 mb-8 max-w-lg mx-auto">
                  Get your first consultation 100% free. We drive progress with cutting-edge AR VR technology and innovative mobile solutions.
                </p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-bold text-sm hover:bg-primary-hover transition-all hover:shadow-[0_0_40px_rgba(26,105,253,0.5)] hover:-translate-y-1 active:scale-95"
                >
                  Get Free Consultation
                  <span className="text-lg">→</span>
                </Link>
              </div>
              </FadeUp>
            </section>
          </article>

          {/* ── Share ── */}
          <div className="hidden lg:block">
            <SharePanel
              title="How AR is Transforming Travel & Tourism Industry?"
              slug="how-is-immersive-technology-reshaping-travel-and-tourism"
            />
          </div>
        </div>
      </div>

      {/* ── RELATED POSTS ──────────────────────────────────────────────── */}
      <section className="relative z-10 border-t border-white/10 py-24">
        <div className="container-app mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <FadeUp delay={0} className="text-3xl font-extrabold text-white mb-12 flex items-center gap-4">
            <h2 className="flex items-center gap-4">
              <span className="w-2 h-8 rounded-full bg-primary shadow-[0_0_15px_rgba(26,105,253,0.6)]" />
              Keep Reading
            </h2>
          </FadeUp>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RELATED.map((p, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <Link
                  href={p.href}
                  className="group flex flex-col gap-4 h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-white/8 hover:shadow-[0_0_30px_rgba(26,105,253,0.1)] hover:-translate-y-1"
                >
                  <span className="text-xs font-semibold text-primary">{p.date}</span>
                  <h3 className="font-bold text-white leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed flex-1">{p.excerpt}</p>
                  <span className="text-xs font-bold text-primary/70 group-hover:text-primary transition-colors">Read more →</span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── Bento Card ─────────────────────────────────────────────────────────── */
function BentoCard({ feature, index }: { feature: typeof FEATURES[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden cursor-default"
      style={{
        boxShadow: hovered ? `0 20px 60px ${feature.accent}22` : '0 0 0 transparent',
        borderColor: hovered ? `${feature.accent}44` : undefined,
        transition: 'box-shadow 0.4s ease, border-color 0.4s ease',
      }}
    >
      {/* glow blob */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none"
            style={{ background: `${feature.accent}33` }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <motion.span
          animate={hovered ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="text-4xl block mb-5"
        >
          {feature.icon}
        </motion.span>
        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{feature.body}</p>

        <motion.div
          animate={{ width: hovered ? '60%' : '2rem' }}
          transition={{ duration: 0.4 }}
          className="mt-6 h-px rounded-full"
          style={{ background: feature.accent }}
        />
      </div>
    </motion.div>
  );
}
