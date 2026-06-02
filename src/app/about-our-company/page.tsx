"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Building2, CheckCircle2, HeartHandshake, Lightbulb, ShieldCheck, Target, Lock } from "lucide-react";

export default function AboutPage() {
  const clients = [
    "/images/client-logos-9.png",
    "/images/client-logos-11.png",
    "/images/client-logos-23.png",
    "/images/client-logos-13.png",
    "/images/client-logos-18.png",
    "/images/client-logos-14.png",
    "/images/client-logos-16.png",
    "/images/client-logos-17.png",
    "/images/client-logos-19.png",
    "/images/client-logos-20.png",
    "/images/client-logos-22.png",
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <main className="min-h-screen bg-background relative flex flex-col pt-20 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
                Who We Are
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-[1.15]">
                Glance our <span className="text-accent">Uplifting story</span>
              </h1>
            </div>
            
            <div className="flex flex-col gap-4 text-muted-foreground text-lg leading-relaxed mt-2">
              <p>
                Since the enthusiast beginning, ReapMind is in the way to bring digital disruption in the conventional market space and ambitiously missions to deliver cutting-edge technology solutions to auspicious start-ups, small and medium growing businesses, and established enterprises that make them reach never touching heights.
              </p>
              <p>
                Being glorified as a Digital IT partner, we empower businesses to figure out the complexities in today’s market space and encourage them to incorporate the best-fit technology solution that certainly delivers new value to their end customers.
              </p>
              <div className="bg-accent-soft border-l-4 border-accent p-6 rounded-r-xl mt-2">
                <p className="text-heading font-medium italic">
                  "Our ultimate goal is to bring wonders in your business with new-age technology solutions. We are here to cheers our client’s success, regardless of whether they are newly found ventures, companies aiming to outperform the competition, or well-established associations focused to maintain their positions."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Unique Image Layout */}
          <motion.div 
            className="flex flex-col lg:flex-row gap-6 lg:gap-6 h-auto lg:h-[600px] relative mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Left Image (Lower on Desktop, Top on Mobile) */}
            <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[85%] lg:mt-auto relative z-10">
              <div className="w-full h-full relative rounded-3xl overflow-hidden group border-[8px] border-white bg-white">
                <Image 
                  src="/images/im-main-14503.jpg"
                  alt="Our Story"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>

            {/* Right Image (Higher on Desktop, Bottom on Mobile) */}
            <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[85%] lg:mb-auto relative rounded-3xl overflow-hidden group border-[8px] border-white bg-white">
              <Image 
                src="/images/im-main-10164.jpg"
                alt="Our Team"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="bg-brand-navy py-16 text-white relative z-10">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {[
              { value: "200+", label: "Specialists", icon: Users },
              { value: "100+", label: "Corporate Clients", icon: Building2 },
              { value: "250+", label: "Projects Delivered", icon: CheckCircle2 },
              { value: "95%+", label: "Client Satisfaction", icon: HeartHandshake },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="flex flex-col items-center text-center"
              >
                <stat.icon className="w-8 h-8 text-brand-cyan mb-4 opacity-80" />
                <span className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</span>
                <span className="text-sm font-medium text-brand-sky uppercase tracking-widest">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. CORE ETHICS SECTION */}
      <section className="container mx-auto px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6">
            Our core ethics that make us reputable
          </h2>
          <p className="text-muted-foreground text-lg">
            We have identified what can make us stand exclusive from others. Our core ethics, thus, narrates the genuineness and transparency in our behavior.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div 
            className="grid sm:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {[
              { title: "Innovation", desc: "We never aim to offer the same solutions for diverse clients but help them to rule out with our unique and innovative solutions.", icon: Lightbulb },
              { title: "Integrity", desc: "We respect our client’s visions, ideas, and business strategy and vow to safeguard the internal information with extreme care.", icon: ShieldCheck },
              { title: "Reliability", desc: "For us client’s success is superior. We target to provide exceptional technology-based solutions that stun expectations.", icon: Target },
              { title: "Trust", desc: "Trust is everything for us to produce an impeccable digital solution and we can mount up your business to peak levels.", icon: Lock },
            ].map((ethic, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="bg-card p-8 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-soft text-accent flex items-center justify-center mb-6">
                  <ethic.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-heading mb-3">{ethic.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{ethic.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="w-full h-[400px] lg:h-full min-h-[500px] rounded-2xl overflow-hidden bg-white"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            <iframe 
              src="https://maps.google.com/maps?q=reapmind%20innovatios&t=m&z=10&output=embed&iwloc=near" 
              title="reapmind innovatios" 
              className="w-full h-full"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>

      {/* 4. CLIENTS SECTION */}
      <section className="bg-section-tint py-20 border-y border-border overflow-hidden">
        <motion.div 
          className="container mx-auto px-6 text-center mb-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
            Trusted Worldwide
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading">Among our clients</h2>
        </motion.div>
        
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 md:gap-12 px-4">
            {[...clients, ...clients].map((src, idx) => (
              <div key={idx} className="w-[140px] md:w-[180px] h-[70px] md:h-[90px] relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 flex-shrink-0">
                <Image 
                  src={src} 
                  alt={`Client ${idx}`} 
                  fill 
                  className="object-contain" 
                  unoptimized 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section className="container mx-auto px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-6 md:p-10 shadow-lg"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-heading mb-2">
              Contact Us for project discussion
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Once you fill out this form, our sales representatives will contact you within 24 hours.
            </p>
          </div>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-heading uppercase tracking-wide">Name</label>
              <input type="text" placeholder="Your Full Name" className="p-3 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" />
            </div>
            
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-heading uppercase tracking-wide">Phone Number</label>
              <div className="flex gap-2">
                <select className="p-3 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all w-[88px] shrink-0">
                  <option value="+91">IN (+91)</option>
                  <option value="+1">US (+1)</option>
                  <option value="+44">UK (+44)</option>
                </select>
                <input type="tel" placeholder="Phone Number" className="p-3 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all w-full" />
              </div>
            </div>

            <div className="flex flex-col gap-1 md:col-span-2">
              <label className="text-xs font-semibold text-heading uppercase tracking-wide">Email</label>
              <input type="email" placeholder="you@company.com" className="p-3 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-heading uppercase tracking-wide">Budget</label>
              <select className="p-3 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all">
                <option value="">Select a budget...</option>
                <option value="<10k">Less than $10,000</option>
                <option value="10k-50k">$10,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value=">100k">More than $100,000</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-heading uppercase tracking-wide">I Prefer To</label>
              <select className="p-3 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all">
                <option value="">Select preference...</option>
                <option value="discuss">Discuss a new project</option>
                <option value="hire">Hire a dedicated team</option>
                <option value="partnership">Partnership inquiry</option>
              </select>
            </div>

            <div className="flex flex-col gap-1 md:col-span-2">
              <label className="text-xs font-semibold text-heading uppercase tracking-wide">Message</label>
              <textarea 
                placeholder="Describe your idea to help us assign the relevant consultation expert." 
                rows={3}
                className="p-3 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>

            <div className="md:col-span-2 flex justify-center mt-2">
              <button 
                type="button" 
                className="bg-brand-navy hover:bg-brand-blue text-white font-semibold text-sm py-3 px-10 rounded-full shadow-md transition-colors w-full md:w-auto"
              >
                Submit Request
              </button>
            </div>
          </form>
        </motion.div>
      </section>
    </main>
  );
}