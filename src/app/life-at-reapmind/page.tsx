"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Users,
  Code,
  Zap,
  Clock,
  HeartPulse,
  BookOpen,
  Award,
  ArrowRight,
  Briefcase,
  Users2,
  CheckCircle,
  ThumbsUp,
  ChevronDown,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeUp, fadeLeft, fadeRight } from "@/lib/scroll-motion";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/ui/social-icons";

/* ─── TEAM MEMBERS (same data as team-reapmind) ─── */
const TEAM_MEMBERS = [
  {
    id: "aroof",
    name: "Aroof Shaikh",
    role: "CEO / Founder",
    image: "/images/team-aroof.jpg",
    fallbackImage:
      "https://reapmind.com/wp-content/uploads/2023/05/Aroof_370x400-370x400-1.jpg",
  },
  {
    id: "bhaskar",
    name: "Bhaskar Nallamelli",
    role: "Head of Business Strategies",
    image: "/images/team-bhaskar.jpg",
    fallbackImage:
      "https://reapmind.com/wp-content/uploads/2023/05/Bhaskar_370x400-370x400-1.jpg",
  },
  {
    id: "keith",
    name: "Keith Wallace",
    role: "Head of Operational Strategies",
    image: "/images/team-keith.jpg",
    fallbackImage:
      "https://reapmind.com/wp-content/uploads/2024/11/keith.jpeg",
  },
  {
    id: "venkat",
    name: "Venkatashwara Kakula",
    role: "Enterprise Architect",
    image: "/images/team-venkat.jpg",
    fallbackImage:
      "https://reapmind.com/wp-content/uploads/2023/05/Venkat_370x400-370x400-1.jpg",
  },
];

/* ─── WHAT MAKES US THE BEST CHOICE ─── */
const BEST_CHOICES = [
  {
    title: "Technical Expertise",
    description:
      "Our team of industry-leading experts possesses deep knowledge and expertise in cutting-edge technologies, enabling us to deliver innovative solutions that drive results.",
    icon: Terminal,
  },
  {
    title: "Client-Centric Approach",
    description:
      "We prioritize the needs and goals of our clients, tailoring our services to meet their unique requirements. Our dedication to client satisfaction is unmatched.",
    icon: Users,
  },
  {
    title: "Technology",
    description:
      "We stay ahead of the curve by embracing the latest advancements in technology, enabling our clients to leverage the power of innovation in their industries.",
    icon: Code,
  },
  {
    title: "Youngster-Driven",
    description:
      "Our dynamic team of young professionals brings fresh perspectives and boundless energy to every project, ensuring creative and agile solutions.",
    icon: Zap,
  },
];

/* ─── PASSIONATE TEAM BENEFITS ─── */
const TEAM_BENEFITS = [
  { title: "Flexible Working Hours", icon: Clock },
  { title: "Health Insurance", icon: HeartPulse },
  { title: "Working Learner Program", icon: BookOpen },
  { title: "Rewarding Work Culture", icon: Award },
];

/* ─── STATS ─── */
const STATS = [
  { value: "200+", label: "Specialists", icon: Briefcase },
  { value: "100+", label: "Corporate Clients", icon: Users2 },
  { value: "250+", label: "Projects Delivered", icon: CheckCircle },
  { value: "95+", label: "Client satisfaction rate", icon: ThumbsUp },
];

export default function LifeAtReapMind() {
  const [showAll, setShowAll] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const contactRef = useRef<HTMLDivElement>(null);

  const visibleMembers = showAll ? TEAM_MEMBERS : TEAM_MEMBERS.slice(0, 4);

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <main className="min-h-screen bg-background relative flex flex-col pt-20 overflow-x-hidden">
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--mesh-1)_1px,transparent_1px)] [background-size:24px_24px] opacity-35 z-0" />
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] rounded-full bg-brand-deep/5 blur-[150px] pointer-events-none z-0" />

      {/* ── 1. HERO / BREADCRUMB ── */}
      
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 md:py-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="badge-pill mb-4 inline-flex">Life @ ReapMind</span>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading text-center leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Brilliant professionals –{" "}
            <span className="text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent to-brand-bright">
              that&apos;s what makes us different!
            </span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto text-center leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Showcasing Innovation, Delivering Excellence. Meet the team that
            drives our digital transformation success story.
          </motion.p>
        </div>
      

      {/* ── 2. LEADERSHIP TEAM SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <SectionHeading
          title="Our Leadership Team"
          description="Meet the core leaders driving strategic innovations and engineering excellence at ReapMind."
          badge="Executive Leadership"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <AnimatePresence>
            {visibleMembers.map((member, i) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative bg-card/60 border border-border/40 rounded-3xl overflow-hidden shadow-md backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-xl"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image */}
                <div className="relative w-full aspect-[370/400] bg-background overflow-hidden">
                  <Image
                    src={
                      imageErrors[member.id]
                        ? member.fallbackImage
                        : member.image
                    }
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={() => handleImageError(member.id)}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    unoptimized
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-heading mb-1 group-hover:text-accent transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {TEAM_MEMBERS.length > 4 && (
          <motion.div className="flex justify-center mt-12" {...fadeUp}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
            >
              {showAll ? "Show Less" : "Load more"}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </motion.div>
        )}
      </section>

      {/* ── 3. WHAT MAKES US THE BEST CHOICE ── */}
      <section className="bg-section-tint border-y border-border/30 py-20 md:py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            title="What makes us the best choice"
            description="ReapMind Innovations delivers an exceptional value proposition that distinguishes us from our competitors."
            badge="Best Choice"
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {BEST_CHOICES.map((choice, i) => (
              <motion.div
                key={choice.title}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="section-card section-card-interactive group rounded-2xl p-7 bg-background text-center"
              >
                <div className="relative mb-6 flex justify-center">
                  <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-accent-soft text-accent-text flex items-center justify-center border border-accent/15 shadow-sm transition-transform duration-500 group-hover:scale-110">
                    <choice.icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-heading mb-3 group-hover:text-accent transition-colors duration-300">
                  {choice.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {choice.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. OUR PASSIONATE TEAM SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left: Text Content */}
          <motion.div
            variants={fadeRight}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <span className="badge-pill inline-flex self-start">
              Our People
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-heading">
              Our passionate team is at the{" "}
              <span className="text-accent">heart</span> of our success
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Our employees are the beating heart of our company&apos;s success,
              with every member playing a vital role in shaping our achievements.
              Their dedication, expertise, and passion are what drive us forward,
              and we recognise and appreciate their contributions every step of
              the way.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Together, as Team ReapMind, we are bound by a shared vision of
              revolutionising the digital transformation industry.
            </p>

            {/* Benefits grid */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {TEAM_BENEFITS.map((benefit, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card/60 border border-border/40 hover:border-accent/30 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent-text flex items-center justify-center flex-shrink-0 border border-accent/15">
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-heading leading-snug">
                    {benefit.title}
                  </span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/contact-us"
              className="mt-4 btn-primary self-start cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Join our team today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right: Image with blob shape */}
          <motion.div
            variants={fadeLeft}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="relative w-full aspect-[4/3] lg:aspect-[1.1] flex justify-center items-center"
          >
            <div className="absolute inset-0 bg-accent-soft rounded-[40%_60%_70%_30%/40%_50%_60%_50%] scale-105 pointer-events-none" />
            <div className="relative w-full h-full overflow-hidden rounded-[50%] lg:rounded-[45%_55%_45%_55%/55%_45%_55%_45%] shadow-xl">
              <Image
                src="/images/group.png"
                alt="ReapMind Team"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. CONTACT US + STATS (Blue Split-Screen Footer Section) ── */}
      <section
        ref={contactRef}
        className="relative w-full bg-[#2a93d5] overflow-hidden flex flex-col lg:flex-row z-10"
      >
        {/* Background Decorative */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-[40%] h-[150%] bg-[#1a74ae] opacity-30 rounded-full blur-[80px] -translate-x-[50%] -translate-y-[20%]" />
          <div className="absolute bottom-0 right-0 w-[50%] h-[150%] bg-[#1c78b4] opacity-40 rounded-full blur-[100px] translate-x-[30%] translate-y-[20%]" />
        </div>

        {/* Left Column: Dark Blue Box */}
        <div className="w-full lg:w-1/2 bg-[#124b7a] relative z-10 flex justify-center lg:justify-end py-16 px-6 lg:py-24 lg:pr-16 lg:pl-8 shadow-2xl">
          <div className="absolute top-0 left-0 w-24 h-full bg-[#185d94] opacity-50 blur-[40px] -translate-x-1/2 pointer-events-none" />

          <div className="w-full max-w-[550px] flex flex-col gap-10">
            <motion.div
              variants={fadeRight}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Contact Us
                <br />
                for project discussion
              </h2>
              <p className="text-[#32a8e6] text-lg font-medium mt-6 leading-relaxed max-w-[450px]">
                Once you fill out this form, our sales representatives will
                contact you within 24 hours.
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-y-12 gap-x-8 mt-4"
            >
              {STATS.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <stat.icon
                    className="w-10 h-10 text-[#27b968] mb-3"
                    strokeWidth={1.5}
                  />
                  <span className="text-3xl font-bold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[15px] font-semibold text-[#eb8824]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="flex items-center gap-4 mt-6"
            >
              {[
                {
                  icon: FacebookIcon,
                  href: "https://www.facebook.com/ReapMind/",
                },
                {
                  icon: LinkedInIcon,
                  href: "https://www.linkedin.com/company/reapmind/",
                },
                {
                  icon: InstagramIcon,
                  href: "https://www.instagram.com/reapmind.innovations/",
                },
                {
                  icon: TwitterIcon,
                  href: "https://twitter.com/ReapmindI",
                },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center text-white hover:text-[#2da5f0] transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full lg:w-1/2 relative z-10 flex justify-center lg:justify-start py-16 px-6 lg:py-24 lg:pl-16 lg:pr-8">
          <div className="w-full max-w-[550px]">
            <motion.form
              variants={fadeLeft}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="flex flex-col gap-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-semibold uppercase tracking-wider">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white rounded-none px-4 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#124b7a]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-white text-sm font-semibold uppercase tracking-wider">
                    Code
                  </label>
                  <div className="relative">
                    <select className="w-full bg-white rounded-none px-4 py-4 pr-10 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#124b7a] appearance-none">
                      <option>IN (+91)</option>
                      <option>US (+1)</option>
                      <option>UK (+44)</option>
                      <option>AE (+971)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white text-sm font-semibold uppercase tracking-wider">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-white rounded-none px-4 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#124b7a]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-semibold uppercase tracking-wider">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white rounded-none px-4 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#124b7a]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-white text-sm font-semibold uppercase tracking-wider">
                    Budget
                  </label>
                  <div className="relative">
                    <select className="w-full bg-white rounded-none px-4 py-4 pr-10 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#124b7a] appearance-none">
                      <option>Budget</option>
                      <option>&lt; $10k</option>
                      <option>$10k - $50k</option>
                      <option>&gt; $50k</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white text-sm font-semibold uppercase tracking-wider">
                    I Prefer To
                  </label>
                  <div className="relative">
                    <select className="w-full bg-white rounded-none px-4 py-4 pr-10 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#124b7a] appearance-none">
                      <option>I Prefer To</option>
                      <option>Discuss a Project</option>
                      <option>Hire Developers</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-semibold uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your idea to help us assign the relevant consultation expert."
                  className="w-full bg-white rounded-none px-4 py-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#124b7a] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0d3a5e] hover:bg-[#124b7a] text-white font-semibold py-4 px-8 transition-colors duration-300 uppercase tracking-wider text-sm cursor-pointer"
              >
                Submit
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </main>
  );
}
