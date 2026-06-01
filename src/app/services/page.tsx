'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Phone, Mail, User, Smartphone, Globe, Link2, Glasses, Brain } from 'lucide-react';

const services = [
  {
    id: 'mobile-app',
    num: '01',
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'We are enthusiastic about developing outstanding mobile apps for iOS, Android, and hybrid platforms. Our team of talented developers curates unique solutions that focus on user experience, functionality, and scalability.',
    tags: ['Android App', 'iPhone App', 'Flutter App', 'React Native', 'Hybrid App', 'Cross Platform'],
    imageLeft: '/images/svc-mobile-1.jpg',
    imageRight: '/images/svc-mobile-2.jpg',
    color: '#00aeef',
    imgFirst: true,
  },
  {
    id: 'web-cms',
    num: '02',
    icon: Globe,
    title: 'Web & CMS Development',
    description:
      'We specialize in Web & CMS Development services that empower businesses to reach their full potential. Our team of skilled developers delivers custom solutions that optimize website performance, enhance user experiences, and streamline content management.',
    tags: ['NodeJS', 'Python', 'TypeScript', 'PHP', 'Java', 'VueJS'],
    imageLeft: '/images/svc-web-1.jpg',
    imageRight: '/images/svc-web-2.jpg',
    color: '#0071bc',
    imgFirst: false,
  },
  {
    id: 'blockchain',
    num: '03',
    icon: Link2,
    title: 'Blockchain Development',
    description:
      'We provide Blockchain Solutions to help businesses realize the full potential of this transformational technology. Our team of expert developers delivers custom solutions that are secure, scalable, and optimized for performance.',
    tags: ['NFT Marketplace', 'Ethereum', 'Wallet', 'Exchange', 'Web3', 'Smart Contracts'],
    imageLeft: '/images/svc-blockchain-1.jpg',
    imageRight: '/images/svc-blockchain-2.jpg',
    color: '#7c3aed',
    imgFirst: true,
  },
  {
    id: 'ar-vr-xr',
    num: '04',
    icon: Glasses,
    title: 'AR, VR & XR',
    description:
      'We provide AR, VR, and XR services that transform how businesses interact with their consumers. Our team of passionate developers develops immersive experiences that enhance engagement, boost sales, and drive growth.',
    tags: ['Object Recognition', 'Counter', 'Business Intelligence', 'Text To Speech', 'Data Analytics', 'Sentimental Analysis'],
    imageLeft: '/images/svc-blockchain-1.jpg',
    imageRight: '/images/svc-blockchain-2.jpg',
    color: '#059669',
    imgFirst: false,
  },
  {
    id: 'ai-ml',
    num: '05',
    icon: Brain,
    title: 'AI & ML',
    description:
      'We offer AI and ML services to help businesses harness the full potential of these cutting-edge technologies. Our skilled team of developers offers innovative solutions that optimize processes, enhance decision-making, and drive growth.',
    tags: ['WebAR', 'Wikitude', '8th Wall', 'ARCore', 'ARKit', 'Hololense'],
    imageLeft: '/images/svc-blockchain-1.jpg',
    imageRight: '/images/svc-blockchain-2.jpg',
    color: '#dc2626',
    imgFirst: true,
  },
];

function ServiceSection({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon;

  const ImageBlock = (
    <motion.div
      className="w-full lg:w-[48%] flex flex-col sm:flex-row gap-4 h-auto sm:h-[400px] lg:h-[500px] relative flex-shrink-0"
      initial={{ opacity: 0, x: service.imgFirst ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
    >
      {/* Decorative accent block */}
      <div
        className="absolute -bottom-4 -right-4 w-32 h-32 rounded-3xl opacity-20 -z-10 hidden sm:block"
        style={{ background: service.color }}
      />
      {/* Left image — taller */}
      <div className="w-full sm:w-[55%] h-[240px] sm:h-full rounded-3xl overflow-hidden relative group">
        <Image
          src={service.imageLeft}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Number overlay */}
        <div
          className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black shadow-lg"
          style={{ background: service.color }}
        >
          {service.num}
        </div>
      </div>
      {/* Right image — shorter, offset up */}
      <div className="w-full sm:w-[42%] h-[240px] sm:h-[80%] sm:mb-auto rounded-3xl overflow-hidden relative group">
        <Image
          src={service.imageRight}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
    </motion.div>
  );

  const TextBlock = (
    <motion.div
      className="w-full lg:w-[48%] flex flex-col justify-center gap-5 flex-shrink-0"
      initial={{ opacity: 0, x: service.imgFirst ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      {/* Icon + label */}
      <div className="flex items-center gap-3">
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-md"
          style={{ background: `${service.color}18` }}
        >
          <Icon className="w-5 h-5" style={{ color: service.color }} />
        </div>
        <span className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: service.color }}>
          Service {service.num}
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-heading leading-tight">
        {service.title}
      </h2>

      {/* Accent line */}
      <div className="w-12 h-1 rounded-full" style={{ background: service.color }} />

      <p className="text-muted-foreground leading-relaxed">{service.description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mt-1">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{
              color: service.color,
              background: `${service.color}15`,
            }}
          >
            <CheckCircle2 className="w-3 h-3" />
            {tag}
          </span>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-3 mt-2">
        <Link
          href={`/services/${service.id}`}
          className="inline-flex items-center gap-2 text-white text-sm font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          style={{ background: service.color }}
        >
          More about Services <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-full hover:-translate-y-0.5 transition-all duration-200"
          style={{
            background: `${service.color}15`,
            color: service.color,
          }}
        >
          Contact Us
        </Link>
      </div>
    </motion.div>
  );

  return (
    <section
      id={service.id}
      className={`py-20 md:py-24 ${index % 2 !== 0 ? 'bg-[var(--section-tint)]' : 'bg-background'}`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div
          className={`flex flex-col gap-12 lg:gap-16 items-center ${
            service.imgFirst ? 'lg:flex-row' : 'lg:flex-row-reverse'
          }`}
        >
          {ImageBlock}
          {TextBlock}
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col pt-20 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[var(--brand-navy)]">
        {/* Animated gradient blobs */}
        <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full blur-[120px] opacity-30"
          style={{ background: 'radial-gradient(circle, #00aeef, transparent)' }} />
        <div className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] rounded-full blur-[100px] opacity-20"
          style={{ background: 'radial-gradient(circle, #0071bc, transparent)' }} />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] uppercase bg-white/10 border border-white/15 text-white/70 px-5 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00d1ff] animate-pulse" />
              What We Offer
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] mb-6 tracking-tight">
              <span style={{ color: '#00d1ff' }}>Our</span>
              <span style={{ color: 'white' }}> Services</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-10">
              Delivering services that empower businesses to reap the benefits of digital transformation
            </p>

            {/* Service quick-nav pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors bg-white/5 shadow-sm"
                >
                  <span className="text-[10px]">{s.num}</span>
                  {s.title}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 md:h-16">
            <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="var(--background)" />
          </svg>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ── */}
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      {/* ── CTA STRIP ── */}
      <section className="py-16 bg-[var(--brand-navy)] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/50 text-sm font-semibold tracking-widest uppercase mb-3">Take the first step</p>
            <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ color: '#00d1ff' }}>
              Ready to start your next project?
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#00aeef] hover:bg-[#00c8ff] text-white font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg"
              >
                Contact Us Online <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919637828283"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3.5 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4" /> +91-9637828283
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FREE CONSULTATION FORM ── */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left text */}
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-black text-heading leading-tight">
                Why select ReapMind for your next project?
              </h2>
              <div className="w-12 h-1 rounded-full bg-accent" />
              <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                <p>Get the best team to listen to your thoughts, plan the app, design and create it — we help you to develop your ideal application every step of the way.</p>
                <p>We are the only ones in the industry who serve <strong className="text-heading">post-delivery of project</strong>. Our after-project delivery service helps us stand out from our competitors.</p>
                <p>Looking to get an app developed? Fill in your details &amp; we will get in touch with you!</p>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Call us anytime</p>
                  <a href="tel:+919637828283" className="font-bold text-heading hover:text-accent transition-colors">+91-9637828283</a>
                </div>
              </div>
            </motion.div>

            {/* Right form card */}
            <motion.div
              className="rounded-3xl overflow-hidden bg-white"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Card header */}
              <div className="bg-[var(--brand-navy)] px-8 py-6">
                <h3 className="text-xl font-black mb-1" style={{ color: '#00d1ff' }}>
                  Tell Us About Your Project
                </h3>
                <p className="text-white/50 text-sm">
                  Get a <span className="text-[#00d1ff] font-semibold">FREE consultation</span> · Callback within 12 Hours
                </p>
              </div>
              {/* Form body */}
              <div className="bg-white px-8 py-8">
                <form className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full pl-10 pr-4 py-3 text-sm bg-background/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full pl-10 pr-4 py-3 text-sm bg-background/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="w-full pl-10 pr-4 py-3 text-sm bg-background/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[var(--brand-navy)] hover:bg-[var(--accent)] text-white font-bold py-3.5 rounded-xl transition-colors duration-300 mt-1"
                  >
                    Send Request <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
                <p className="text-muted-foreground text-xs text-center mt-5 leading-relaxed">
                  You are just one step away from unlocking the full potential of innovation excellence with ReapMind Innovations.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}
