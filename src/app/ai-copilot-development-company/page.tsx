"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, CheckCircle2, ChevronDown, Code2, Sparkles,
  HeartPulse, Landmark, ShoppingCart, GraduationCap, Car, Utensils,
  Smartphone, Truck, Plane, Radio, Bitcoin, Film, Layers,
  Zap, ShieldCheck, Lightbulb, Phone, Mail, Star, Brain,
  TrendingUp, BarChart3, Lock, Users, Target, Cpu,
} from "lucide-react";

// ── Animation Presets ─────────────────────────────────────────────────
const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" } as const,
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};
const slideLeft = {
  initial: { opacity: 0, x: -32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" } as const,
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};
const slideRight = {
  initial: { opacity: 0, x: 32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" } as const,
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

// ── DATA ──────────────────────────────────────────────────────────────

const CLIENT_LOGOS = [
  { name: "Bosch", src: "https://reapmind.com/wp-content/uploads/2023/10/bosch.png" },
  { name: "Oracle", src: "https://reapmind.com/wp-content/uploads/2023/10/oracle.png" },
  { name: "Disney", src: "https://reapmind.com/wp-content/uploads/2023/10/disney-client.png" },
  { name: "Siemens", src: "https://reapmind.com/wp-content/uploads/2023/10/Siemens-client.png" },
];

const PROCESS_STEPS = [
  { num: "01", title: "Step 1", desc: "We start by understanding your business goals and requirements, diving deep into the specifics to lay a solid foundation for the project.", icon: Target },
  { num: "02", title: "Step 2", desc: "Team ReapMind then conducts thorough research and analysis to identify the most effective AI solutions tailored to your needs.", icon: BarChart3 },
  { num: "03", title: "Step 3", desc: "Next, we create prototypes and design mockups to visualize the AI Copilot's functionality and ensure alignment with your vision.", icon: Lightbulb },
  { num: "04", title: "Step 4", desc: "Our skilled developers bring the AI Copilot to life, rigorously testing each component to ensure optimal performance and reliability.", icon: Code2 },
  { num: "05", title: "Step 5", desc: "Finally, we integrate the AI Copilot into your existing systems and processes, ensuring a smooth transition and minimal disruption.", icon: Layers },
  { num: "06", title: "Step 6", desc: "Our commitment doesn't end with deployment. We provide ongoing support and maintenance to keep your AI Copilot running smoothly and efficiently.", icon: Users },
];

const RECENT_WORKS = [
  { title: "DQS Deutsche Quality Systems India – Audit App", category: "Enterprise", href: "/portfolio/deutsche-quality-systems-india-dqs-india-audit-app", img: "/images/1.jpg" },
  { title: "Lakshya Academy: Empowering Education Through Technology", category: "Education", href: "/portfolio/lakshya-academy-empowering-education", img: "/images/2.jpg" },
  { title: "MTeducare: Revolutionizing Education Management", category: "Education", href: "/portfolio/mt-educare-education-management", img: "/images/3.jpg" },
  { title: "Organic World", category: "Grocery Delivery", href: "/portfolio/organic-world", img: "/images/4.png" },
  { title: "PawSpace", category: "Pet Care", href: "/portfolio/pawspace", img: "/images/5.png" },
  { title: "Municipal Banking", category: "Banking", href: "/portfolio/muncipal-banking", img: "/images/6.png" },
];

const SERVICES = [
  { title: "AI Copilot Integration", icon: Layers, desc: "Integrating AI Copilots seamlessly into development workflows is essential for maximizing efficiency and productivity. We specialize in providing custom integration solutions tailored to clients' specific needs. Our service offers easy-to-use APIs and SDKs, enabling developers to effortlessly incorporate AI Copilots into their existing workflows." },
  { title: "Domain-Specific Copilots", icon: Brain, desc: "We develop specialized AI Copilots tailored to specific industries and domains, ensuring deep expertise and relevant assistance for your unique business needs." },
  { title: "Advanced Features Offering", icon: Sparkles, desc: "Our AI Copilots come with cutting-edge features including intelligent code suggestions, rapid code generation, error detection, and real-time assistance to boost your team's productivity." },
  { title: "Security Enhancement", icon: ShieldCheck, desc: "We prioritize security in every AI Copilot we build, implementing robust encryption, access controls, and compliance measures to protect your sensitive data and workflows." },
  { title: "Data & Analytics Insights", icon: BarChart3, desc: "Our AI Copilots provide valuable insights through data analytics, helping you make informed decisions and optimize your operations continuously." },
  { title: "Security and Compliance Assurance", icon: Lock, desc: "We ensure that all AI Copilot solutions meet industry standards and regulatory requirements, providing peace of mind and protecting your organization from compliance risks." },
];

const BENEFITS = [
  { title: "Streamlined Operations", desc: "ReapMind's AI Copilots streamline information organization and retrieval, saving time on tasks. This leads to increased efficiency and focus on essential responsibilities.", icon: TrendingUp },
  { title: "Resource Optimization", desc: "Our intelligent assistants manage routine queries, allowing agents and managers to allocate time strategically. This optimized resource allocation improves productivity and accelerates user support.", icon: Users },
  { title: "Seamless Tool Integration", desc: "ReapMind's AI Copilots seamlessly integrate with advanced tools, enhancing productivity across domains. This integration ensures a fluid flow of information and access to comprehensive features.", icon: Layers },
  { title: "Continuous Learning", desc: "Our AI Copilots evolve through continuous learning and adaptation, providing increasingly effective support and guidance, contributing to ongoing efficiency gains within organizations.", icon: Brain },
];

const WHY_CHOOSE = [
  "Our team of AI experts is here to craft top-notch solutions just for you. We bring deep knowledge and skill to the table, ensuring your AI Copilot is the best fit for your needs.",
  "No two businesses are the same, and we get that. That's why we offer personalized AI Copilot development services. Your solution will be custom-built to match your goals and workflows perfectly.",
  "Our AI Copilot solutions seamlessly integrate into your existing systems and processes, minimizing disruption and maximizing efficiency from day one.",
  "At ReapMind, we're all about delivering the best. From the first idea to the final product, we're committed to excellence. Our goal is to make sure you get exceptional results every time.",
];

const SECTORS = [
  { title: "Healthcare", icon: HeartPulse, img: "https://reapmind.com/wp-content/uploads/2023/05/doctor.png" },
  { title: "Banking", icon: Landmark, img: "https://reapmind.com/wp-content/uploads/2023/05/mobile-payment.png" },
  { title: "eCommerce & Retail", icon: ShoppingCart, img: "https://reapmind.com/wp-content/uploads/2023/05/mobile-shopping.png" },
  { title: "Education", icon: GraduationCap, img: "https://reapmind.com/wp-content/uploads/2023/05/edu.png" },
  { title: "Electric Vehicles", icon: Car, img: "https://reapmind.com/wp-content/uploads/2023/05/electric-car.png" },
  { title: "Food & Restaurants", icon: Utensils, img: "https://reapmind.com/wp-content/uploads/2023/05/smartphone.png" },
  { title: "On-Demand Solutions", icon: Smartphone, img: "https://reapmind.com/wp-content/uploads/2023/05/car-service.png" },
  { title: "Supply chain & Logistics", icon: Truck, img: "https://reapmind.com/wp-content/uploads/2023/05/logistics-1.png" },
  { title: "Travel & Hospitality", icon: Plane, img: "https://reapmind.com/wp-content/uploads/2023/05/vacation.png" },
  { title: "Media", icon: Radio, img: "https://reapmind.com/wp-content/uploads/2023/05/newspaper.png" },
  { title: "NFT & Crypto", icon: Bitcoin, img: "https://reapmind.com/wp-content/uploads/2023/05/blockchain.png" },
  { title: "Entertainment", icon: Film, img: "https://reapmind.com/wp-content/uploads/2023/05/cinema.png" },
];

const TESTIMONIALS = [
  { name: "S. D. Shibulal", role: "Founder: Innovations Investment Management India Private Ltd (INDIA)", text: "Reapmind's e-commerce web application development has been instrumental in our success. Their expertise has enabled us to establish a comprehensive e-retail ecosystem, and their contribution has added significant value to our business, enhancing our overall system and driving our success forward. Highly recommended!", img: "/images/contact/shibulal.png" },
  { name: "Roland Owens", role: "Director: Synerphase, Inc., Silicon Valley (USA)", text: "At Synerphase, Inc., our collaboration with Reapmind has been transformational. Their unwavering support for technological innovation turned our unique concept into a functional product. Reapmind's expertise and commitment breathed life into our vision. We highly recommend Reapmind to those seeking a partner capable of translating innovative concepts into tangible, efficient solutions.", img: "/images/contact/roland.png" },
  { name: "Dr. Murugan Kandasamy", role: "CEO – Deutsch Quality Systems (India)", text: "At Deutsch Quality Systems (India), our collaboration with Reapmind speaks volumes. They developed a unique offline auditor app, a rarity that demanded an exceptional team. Reapmind crafted a solution that not only addressed our specific needs but also added significant value to our business. The app's innovative approach, efficient time-saving, and user-friendly navigation have been remarkable!", img: "/images/contact/murugan.jpg" },
  { name: "Miss Gunjan Jain", role: "Founder and CEO of Internationally Awarded Healthtech Ventures", text: "At Vytal, our collaboration with Reapmind on two applications was exceptional. Their dynamic team grasped our unique needs, collaborating closely with our own. They not only created visually appealing apps but also ensured functionality and user-friendliness. Prompt issue resolution, transparent communication, and adaptable professionalism defined our experience. Highly recommend!", img: "/images/contact/gunjan.png" },
  { name: "Mr. Matthew Carter", role: "CTO of Leep Rideshare LLC", text: "Partnering with Reapmind was a game-changer for Leep Rideshare. Their deep understanding and close collaboration resulted in appealing and user-friendly apps. Quick issue resolution, clear communication, and a flexible and professional approach made the journey remarkable. We highly recommend Reapmind for its exceptional relationship-driven solutions.", img: "/images/contact/matthew.jpg" },
  { name: "Mr. Jeremy Del Zotto", role: "Founder & CEO – & Connection INC. (Canada)", text: "Reapmind has been an outstanding product partner for & Connection INC. Their exceptional technical support has brought to life unique and innovative features that have significantly elevated our app's functionality and user experience. Reapmind's commitment to delivering excellence has been instrumental in our success. Highly recommended for top-notch app development services.", img: "/images/contact/jeremy.png" },
];

const INSIGHTS = [
  { title: "The Role of AI in Intelligent Document Processing and Management – Benefits and Applications", category: "Artificial Intelligence", author: "ReapMind Innovations", date: "May 6, 2025", href: "/ai-in-document-processing-benefits-applications" },
  { title: "EMR Integration in Healthcare Systems – Benefits, Features, Process, Costs", category: "Technology", author: "Prakhar Lohia", date: "May 5, 2025", href: "/emr-integration-in-healthcare" },
  { title: "Cybersecurity in Manufacturing: Building Cyber Resilience for Smart Factories", category: "Technology", author: "Prakhar Lohia", date: "May 1, 2025", href: "/cybersecurity-in-manufacturing-smart-factories" },
  { title: "How Much Does It Cost to Develop a Mutual Fund Investment Portal or App?", category: "Mobile App Development Cost", author: "ReapMind Innovations", date: "April 30, 2025", href: "/cost-to-develop-mutual-fund-investment-app" },
  { title: "Healthcare Workforce Management Software: A Catalyst for Streamlined Business Operations", category: "Technology", author: "ReapMind Innovations", date: "April 29, 2025", href: "/healthcare-workforce-management-software" },
  { title: "How an AI Chatbot for Higher Education Revolutionizes Student Support Services", category: "Artificial Intelligence", author: "ReapMind Innovations", date: "April 28, 2025", href: "/ai-chatbot-for-higher-education-student-support" },
];

const FAQS = [
  { q: "What's an AI Copilot, and how can it help my business?", a: "An AI Copilot is a smart assistant that boosts your work. It helps with tasks like writing, coding, and more, making you more productive and creative." },
  { q: "Can your AI Copilot services be personalized for my business?", a: "Absolutely! We customize our AI Copilot services to fit your unique needs, ensuring they seamlessly integrate into your workflow for maximum efficiency." },
  { q: "Which industries benefit from AI Copilot development?", a: "AI Copilots are versatile. They benefit various industries, including software development, marketing, and design. Whatever your field, our services can be adapted to suit your needs." },
  { q: "What makes your AI Copilot company stand out?", a: "ReapMind stands out with cutting-edge tech, a skilled team, and a focus on user-friendly solutions. Our commitment includes ongoing support to ensure the success of your AI Copilot." },
  { q: "Is AI Copilot development for individuals or just for big companies?", a: "It's for everyone! Whether you're a solo professional or part of a large company, ReapMind's AI Copilot development scales to meet your specific needs." },
  { q: "What support do you provide after implementing an AI Copilot solution?", a: "Team ReapMind is with you for the long run. Our support includes troubleshooting, updates, and help with growth, ensuring your AI Copilot keeps delivering success." },
];

// ── FAQ Component ──────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-surface hover:bg-elevated transition-colors"
      >
        <span className="font-semibold text-heading text-base">{q}</span>
        <ChevronDown className={`w-5 h-5 shrink-0 text-accent transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 py-5 text-muted-foreground leading-relaxed border-t border-border bg-background">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────
export default function AICopilotDevelopmentPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ── 1. HERO ───────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-deep/10 blur-[100px]" />
        <div className="pointer-events-none absolute inset-0 grid-texture opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div {...slideLeft}>
            <span className="badge-pill mb-6">AI Copilot Development</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-heading mb-6">
              AI Copilot Development <span className="gradient-text">Company</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              AI Copilots are transforming the global business landscape by offering real-time
              assistance, intelligent code suggestions, rapid code generation, error detection,
              and seamless integrations with industry-specific tools. These AI Copilots enable
              professionals in diverse fields to boost productivity and streamline their roles
              within companies. That's where ReapMind, the top AI Copilot development company
              steps in, with the best AI Copilot development services and developers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact-us" className="btn-primary gap-2">
                Reach out to get started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact-us" className="btn-secondary gap-2">
                Request Callback
              </Link>
            </div>
          </motion.div>

          <motion.div {...slideRight}>
            <div className="section-card rounded-3xl p-8 md:p-10">
              <h3 className="text-xl font-bold text-heading mb-6">Have an Idea? Contact Us</h3>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <input required type="text" placeholder="NAME *"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition" />
                <input required type="email" placeholder="EMAIL *"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition" />
                <input required type="tel" placeholder="PHONE *"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition" />
                <button type="submit" className="btn-primary w-full justify-center">
                  Contact Us Today
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. CLIENT LOGOS ──────────────────────────────────────── */}
      <section className="py-16 border-y border-border bg-section-tint">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p {...fadeUp} className="text-center eyebrow mb-8">
            Celebrating Success Stories · Empowering Our Clients to Achieve Unprecedented Heights
          </motion.p>
          <motion.div {...fadeUp} className="flex flex-wrap justify-center items-center gap-10">
            {CLIENT_LOGOS.map((logo) => (
              <img key={logo.name} src={logo.src} alt={logo.name}
                className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition grayscale hover:grayscale-0" />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. WHY CHOOSE US ──────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div {...slideLeft}>
              <span className="eyebrow mb-4 block">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6">
                Why Choose Us for Your AI Copilot Development Journey?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                AI Copilots stand as vital tools, revolutionizing operations across industries.
                These intelligent assistants streamline tasks and boost productivity, shaping the
                future of business. But finding the right team of AI Copilot developers to develop
                your AI Copilot is key to success. That's where ReapMind, the top AI Copilot
                development company, steps in!
              </p>
              <Link href="/contact-us" className="btn-primary gap-2">
                Request Callback <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div {...slideRight} className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://reapmind.com/wp-content/uploads/2023/10/Reapmind-Client-Testimonials.jpg"
                alt="ReapMind AI Copilot Development"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. PROCESS INTRO ───────────────────────────────────────  */}
      <section className="py-6 bg-section-tint border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <motion.div {...fadeUp}>
            <span className="eyebrow mb-4 block">Our Process</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6">
              ReapMind's Proven AI Copilot Development Process
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We follow a meticulous AI Copilot development process to ensure success at every
              stage. Team ReapMind's approach is designed to deliver tailored solutions that meet
              your unique business needs.
            </p>
            <Link href="/contact-us" className="btn-primary gap-2 inline-flex">
              Offshore development center setup <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 5. PROCESS STEPS ───────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="section-card section-card-interactive rounded-2xl p-7 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="icon-box w-12 h-12 rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-bold text-accent/30">{step.num}</span>
                </div>
                <h3 className="font-bold text-heading text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. RECENT WORKS ──────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="eyebrow mb-4 block">Portfolio</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading">Our Recent Works</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {RECENT_WORKS.map((w, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}>
                <Link href={w.href}
                  className="group block section-card section-card-interactive rounded-2xl overflow-hidden">
                  <div className="aspect-[16/10] overflow-hidden bg-surface">
                    <img src={w.img} alt={w.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">{w.category}</span>
                    <h3 className="mt-2 font-bold text-heading leading-snug group-hover:text-accent transition-colors">{w.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="text-center mt-12">
            <Link href="/contact-us" className="btn-primary gap-2">
              Get a Callback from Expert <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 7. SERVICES ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="eyebrow mb-4 block">What We Do</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
              ReapMind's Comprehensive AI Copilot Development Services
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="section-card section-card-interactive rounded-2xl p-7 flex flex-col gap-4">
                <div className="icon-box w-12 h-12 rounded-xl flex items-center justify-center">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-heading text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="text-center mt-12">
            <Link href="/contact-us" className="btn-primary gap-2">
              Book a Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 8. BENEFITS ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14 max-w-3xl mx-auto">
            <span className="eyebrow mb-4 block">Benefits</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
              Benefits of ReapMind's AI Copilots
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {BENEFITS.map((b, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="section-card rounded-2xl p-7 flex gap-4">
                <div className="icon-box w-11 h-11 rounded-xl shrink-0 flex items-center justify-center">
                  <b.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-heading mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FREE CONSULTATION FORM ────────────────────────────── */}
      <section className="py-20 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div {...slideLeft}>
            <span className="eyebrow mb-4 block">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">Get a Free Consultation</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ready to transform your business with AI Copilots? Fill in your details and our experts will reach out to discuss your requirements.
            </p>
          </motion.div>
          <motion.div {...slideRight}>
            <div className="section-card rounded-3xl p-8">
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <input required type="text" placeholder="NAME *"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition" />
                <input required type="email" placeholder="EMAIL *"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition" />
                <input required type="tel" placeholder="PHONE *"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition" />
                <textarea placeholder="MESSAGE"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition resize-none h-28" />
                <button type="submit" className="btn-primary w-full justify-center">
                  Contact Us Today
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 10. HOW IT WORKS ──────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div {...slideLeft}>
              <span className="eyebrow mb-4 block">How It Works</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6">
                How does ReapMinds' AI Copilot work?
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  At ReapMind, we're dedicated to bridging the gap between complex AI Copilot
                  technology and user-friendly solutions for businesses like yours. Our copilots
                  leverage advanced algorithms in natural language processing and machine learning
                  to anticipate user needs and provide valuable suggestions, enhancing efficiency
                  and productivity.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We simplify the intricate workings of AI Copilots, ensuring they seamlessly
                  integrate with your existing systems and processes. From basic API calls to large
                  language models to advanced enterprise-wide deployment, our copilots offer
                  tailored solutions to meet your unique business requirements.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact-us" className="btn-primary gap-2">
                  Request Callback <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            {/* <motion.div {...slideRight} className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://reapmind.com/wp-content/uploads/2023/10/Reapmind-Client-Testimonials.jpg"
                alt="How AI Copilot Works"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/50 to-transparent" />
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* ── 11. SECTORS ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="eyebrow mb-4 block">Industries We Serve</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading">
              Catering to Diverse Sectors: Our Targeted Industry Solutions
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {SECTORS.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="section-card section-card-interactive rounded-2xl p-5 flex flex-col items-center gap-3 text-center cursor-default">
                <div className="w-14 h-14 flex items-center justify-center">
                  <img src={s.img} alt={s.title} className="w-12 h-12 object-contain" />
                </div>
                <span className="text-sm font-semibold text-heading">{s.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. WHY CHOOSE DETAIL ─────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div {...slideLeft}>
            <span className="eyebrow mb-4 block">Why Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-8">
              Why Choose Us for Your AI Copilot Development Journey?
            </h2>
            <ul className="space-y-4">
              {WHY_CHOOSE.map((point, i) => (
                <motion.li key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-muted-foreground leading-relaxed">{point}</p>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/contact-us" className="btn-primary gap-2">
                Book a Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
          <motion.div {...slideRight} className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
            <img
              src="https://reapmind.com/wp-content/uploads/2023/10/Reapmind-Client-Testimonials.jpg"
              alt="ReapMind AI Copilot Excellence"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ── 13. TESTIMONIALS ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="eyebrow mb-4 block">Client Stories</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading">
              What Clients Say About Us
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="section-card rounded-2xl p-7 flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-surface border border-border shrink-0">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-heading text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 14. LATEST INSIGHTS ────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="eyebrow mb-4 block">Blog</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading">Latest Insights</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSIGHTS.map((post, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}>
                <Link href={post.href}
                  className="group section-card section-card-interactive rounded-2xl p-6 flex flex-col gap-3 h-full block">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-heading leading-snug group-hover:text-accent transition-colors flex-1">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t border-border">
                    <span>By {post.author}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent mt-1">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 15. FAQ ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="eyebrow mb-4 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}>
                <FaqItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 16. FINAL CTA ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div {...slideLeft}>
              <span className="eyebrow mb-4 block">Free Consultation</span>
              <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
                Get a Free Consultation from our Technology Expert
              </h2>
              <div className="flex flex-col gap-3 mt-8">
                <a href="tel:+919637828283"
                  className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition">
                  <div className="icon-box w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  +91-9637828283
                </a>
                <a href="mailto:info@reapmind.com"
                  className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition">
                  <div className="icon-box w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  info@reapmind.com
                </a>
              </div>
            </motion.div>
            <motion.div {...slideRight}>
              <div className="section-card rounded-3xl p-8">
                <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                  <input required type="text" placeholder="NAME *"
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition" />
                  <input required type="email" placeholder="EMAIL *"
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition" />
                  <input required type="tel" placeholder="PHONE *"
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition" />
                  <button type="submit" className="btn-primary w-full justify-center">Send</button>
                </form>
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeUp} className="mt-16 text-center">
            <p className="eyebrow mb-6">Trusted by Global Companies. Contact Us Today!</p>
            <div className="flex flex-wrap justify-center items-center gap-10">
              {CLIENT_LOGOS.map((logo) => (
                <img key={logo.name} src={logo.src} alt={logo.name}
                  className="h-10 w-auto object-contain opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0" />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
