"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ChevronDown, Rocket, Code2, Cloud, FlaskConical,
  Smartphone, Lightbulb, HeartPulse, Landmark, ShoppingCart,
  GraduationCap, Layers, Database, ShieldCheck, Users, Zap,
  CheckCircle2, TrendingUp, Clock, Star, Phone, Mail,
  BarChart3, RefreshCw, Target, Award,
} from "lucide-react";

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

// ── DATA ─────────────────────────────────────────────────────────────

const CLIENT_LOGOS = [
  { name: "Bosch", src: "https://reapmind.com/wp-content/uploads/2023/10/bosch.png" },
  { name: "Oracle", src: "https://reapmind.com/wp-content/uploads/2023/10/oracle.png" },
  { name: "Disney", src: "https://reapmind.com/wp-content/uploads/2023/10/disney-client.png" },
  { name: "Siemens", src: "https://reapmind.com/wp-content/uploads/2023/10/Siemens-client.png" },
  { name: "Times Group", src: "https://reapmind.com/wp-content/uploads/2023/04/client-logos-21.png" },
  { name: "Hyundai", src: "https://reapmind.com/wp-content/uploads/2023/04/client-logos-6.png" },
  { name: "Zydus", src: "https://reapmind.com/wp-content/uploads/2023/04/client-logos-23.png" },
];

const SERVICES = [
  {
    title: "Minimum Viable Product (MVP) Development",
    desc: "ReapMind a leading Startup development company in Bangalore India helps you quickly bring your core product vision to life with a minimum viable product (MVP). We focus on essential features, rapid development, and user feedback to validate your idea and get your startup off the ground quickly and cost-effectively. Our agile approach ensures flexibility and responsiveness to market demands, allowing you to iterate and improve your product based on real-world data.",
    icon: Rocket,
  },
  {
    title: "Custom Software Development",
    desc: "We build bespoke software solutions tailored to your unique startup needs. Whether it's a web application, mobile app, or complex enterprise system, our expert engineers craft high-quality, scalable solutions that align with your business goals. From concept to deployment and beyond, we provide ongoing support and maintenance to ensure your software remains secure, efficient, and optimized for growth.",
    icon: Code2,
  },
  {
    title: "Cloud Computing & DevOps",
    desc: "Leverage the power of the cloud with ReapMind's expertise in cloud computing and DevOps. We help you design, deploy, and manage scalable and reliable cloud infrastructure, ensuring your product can handle rapid growth and evolving demands. Our DevOps practices automate deployment and streamline operations, maximizing efficiency and minimizing downtime.",
    icon: Cloud,
  },
  {
    title: "Proof of Concept (PoC) Development",
    desc: "Transform your vision into a tangible reality with our PoC development services. We'll build functional prototypes that undergo rigorous testing, providing you with concrete evidence to make informed decisions and validate your ideas before investing significant resources.",
    icon: FlaskConical,
  },
  {
    title: "Mobile Application Development",
    desc: "Reach your target audience on their preferred devices with our mobile app development expertise. We build high-quality, cross-platform applications that are user-friendly, engaging, and tailored to your specific business needs.",
    icon: Smartphone,
  },
  {
    title: "Concept Discovery",
    desc: "Unsure where to start? Our concept discovery services help you explore new opportunities and validate your ideas. We'll conduct thorough research, brainstorm creative solutions, and evaluate concepts to ensure your innovations align with market demands and customer needs.",
    icon: Lightbulb,
  },
];

const RECENT_WORKS = [
  { title: "DQS Deutsche Quality Systems India – Audit App", category: "Enterprise", href: "/portfolio/deutsche-quality-systems-india-dqs-india-audit-app", img: "/images/1.jpg" },
  { title: "Lakshya Academy: Empowering Education Through Technology", category: "Education", href: "/portfolio/lakshya-academy-empowering-education", img: "/images/2.jpg" },
  { title: "MTeducare: Revolutionizing Education Management", category: "Education", href: "/portfolio/mt-educare-education-management", img: "/images/3.jpg" },
  { title: "Organic World", category: "Grocery Delivery", href: "/portfolio/organic-world", img: "/images/4.png" },
  { title: "PawSpace", category: "Pet Care", href: "/portfolio/pawspace", img: "/images/5.png" },
  { title: "Municipal Banking", category: "Banking", href: "/portfolio/muncipal-banking", img: "/images/6.png" },
];

const INDUSTRIES = [
  { title: "Healthcare", desc: "Revolutionizing patient care with telehealth platforms, AI-powered diagnostics, and health monitoring solutions.", icon: HeartPulse },
  { title: "Fintech", desc: "Building secure, scalable financial platforms including payment gateways, investment tools, and banking apps.", icon: Landmark },
  { title: "E-commerce", desc: "Creating powerful online marketplaces and retail platforms that drive sales and enhance customer experience.", icon: ShoppingCart },
  { title: "Education", desc: "Developing innovative edtech solutions that transform learning and empower students and educators alike.", icon: GraduationCap },
  { title: "Software & SaaS", desc: "Building robust, scalable SaaS products that deliver continuous value to businesses across all industries.", icon: Layers },
  { title: "And more", desc: "We partner with startups across all industries. Whatever your domain, we bring the expertise to help you succeed.", icon: Target },
];

const TECH_STACK = [
  { title: "Cloud Power", desc: "AWS, Azure, and GCP for scalability & cost-efficiency.", icon: Cloud },
  { title: "AI & ML", desc: "Machine learning models and AI-driven features that give your product a competitive edge.", icon: Zap },
  { title: "DevOps", desc: "Automated CI/CD pipelines, containerization, and infrastructure as code for rapid, reliable deployments.", icon: RefreshCw },
  { title: "Data Insights", desc: "Advanced analytics, real-time dashboards, and data pipelines to drive informed business decisions.", icon: BarChart3 },
  { title: "Cybersecurity", desc: "End-to-end security protocols, vulnerability assessments, and compliance frameworks to protect your product.", icon: ShieldCheck },
  { title: "Collaboration", desc: "Modern communication and project management tools ensuring seamless teamwork across distributed teams.", icon: Users },
];

const MODERNIZATION_PROCESS = [
  "Legacy System Assessment",
  "Cloud Migration Strategy",
  "Data Management and Integration",
  "Continuous Improvement and Maintenance",
  "Training and Support",
  "Coding",
];

const SECTORS = [
  { title: "Healthcare", img: "https://reapmind.com/wp-content/uploads/2023/05/doctor.png" },
  { title: "Banking", img: "https://reapmind.com/wp-content/uploads/2023/05/mobile-payment.png" },
  { title: "eCommerce & Retail", img: "https://reapmind.com/wp-content/uploads/2023/05/mobile-shopping.png" },
  { title: "Education", img: "https://reapmind.com/wp-content/uploads/2023/05/edu.png" },
  { title: "Electric Vehicles", img: "https://reapmind.com/wp-content/uploads/2023/05/electric-car.png" },
  { title: "Food & Restaurants", img: "https://reapmind.com/wp-content/uploads/2023/05/smartphone.png" },
  { title: "On-Demand Solutions", img: "https://reapmind.com/wp-content/uploads/2023/05/car-service.png" },
  { title: "Supply chain & Logistics", img: "https://reapmind.com/wp-content/uploads/2023/05/logistics-1.png" },
  { title: "Travel & Hospitality", img: "https://reapmind.com/wp-content/uploads/2023/05/vacation.png" },
  { title: "Media", img: "https://reapmind.com/wp-content/uploads/2023/05/newspaper.png" },
  { title: "NFT & Crypto", img: "https://reapmind.com/wp-content/uploads/2023/05/blockchain.png" },
  { title: "Entertainment", img: "https://reapmind.com/wp-content/uploads/2023/05/cinema.png" },
];

const PARTNER_POINTS = [
  { title: "Idea Validation", desc: "We help you test your assumptions and validate your ideas early on, ensuring you're building a product that the market truly wants.", icon: Lightbulb },
  { title: "Rapid Development", desc: "We use agile methodologies and lean development principles to build and iterate quickly, getting your product to market faster.", icon: Zap },
  { title: "Scalable Solutions", desc: "We design your product with scalability in mind, ensuring it can handle growth and adapt to changing demands.", icon: TrendingUp },
  { title: "Expert Guidance", desc: "Our team of experienced professionals provides strategic advice and mentorship to help you navigate the challenges of startup growth.", icon: Award },
  { title: "Cost-Effective Solutions", desc: "We offer flexible engagement models and transparent pricing to ensure you get the most value for your investment.", icon: CheckCircle2 },
  { title: "Ongoing Support", desc: "We're with you every step of the way, providing ongoing support and maintenance to ensure your product thrives in the competitive market.", icon: Clock },
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
  { q: "What types of startups does ReapMind typically work with?", a: "We work with a wide range of startups, from early-stage ventures with a fresh idea to growing companies seeking to scale their operations. We're industry-agnostic and have experience working with startups in software, healthcare, fintech, e-commerce, and more." },
  { q: "How involved do I need to be in the development process?", a: "We believe in a collaborative approach. While we handle the technical heavy lifting, we'll keep you informed and engaged throughout the process. We value your input and feedback to ensure the final product aligns perfectly with your vision." },
  { q: "How does ReapMind handle project budgeting and pricing?", a: "We offer flexible engagement models and transparent pricing tailored to your specific needs and budget. We can work on a fixed-price basis for well-defined projects or on an hourly basis for more iterative development." },
  { q: "What if my startup needs to change during the development process?", a: "We understand that startups are dynamic. We embrace agile methodologies that allow for flexibility and adaptation. We'll work with you to adjust the scope and priorities as needed to ensure the final product meets your evolving requirements." },
  { q: "Does ReapMind provide ongoing support after the product launch?", a: "Absolutely! We offer ongoing support and maintenance to ensure your product continues to run smoothly and evolve with your business needs. We're your long-term technology partner, committed to your success." },
];

// ── FAQ Component ─────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-surface hover:bg-elevated transition-colors">
        <span className="font-semibold text-heading text-base">{q}</span>
        <ChevronDown className={`w-5 h-5 shrink-0 text-accent transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden">
            <p className="px-6 py-5 text-muted-foreground leading-relaxed border-t border-border bg-background">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────
export default function StartupDevelopmentPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ── 1. HERO ───────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-deep/10 blur-[100px]" />
        <div className="pointer-events-none absolute inset-0 grid-texture opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div {...slideLeft}>
            <span className="badge-pill mb-6">Top Startup Development Company · India</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-heading mb-6">
              Top Startup Development Company in <span className="gradient-text">India</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              ReapMind thrives on the boundless potential of startups, fueling individual dreams and
              revolutionizing the business landscape. Got a product idea that sets your soul on fire?
              ReapMind is your partner in bringing it to life. We&apos;re dedicated to developing your
              vision and maximizing its market impact, regardless of budget or time constraints.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact-us" className="btn-primary gap-2">
                Reach out to get started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact-us" className="btn-secondary gap-2">Request Callback</Link>
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
                <button type="submit" className="btn-primary w-full justify-center">Contact Us Today</button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. CLIENT LOGOS ──────────────────────────────────────── */}
      <section className="py-16 border-y border-border bg-section-tint">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-heading">Celebrating Success Stories</h2>
            <p className="text-xl md:text-2xl font-bold text-heading mt-1">Empowering Our Clients to Achieve Unprecedented Heights</p>
          </motion.div>
          <motion.div {...fadeUp} className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 items-center justify-items-center">
            {CLIENT_LOGOS.map((logo, i) => (
              <motion.div key={logo.name}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="section-card rounded-2xl p-4 w-full flex items-center justify-center h-20 hover:shadow-md transition-shadow">
                <img src={logo.src} alt={logo.name} className="max-h-10 max-w-[120px] w-auto object-contain" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. FORGE YOUR STARTUP ────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div {...slideLeft}>
              <span className="eyebrow mb-4 block">Our Mission</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6">
                Forge Your Startup in the Flames of Success with ReapMind
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  More than just Startup developers, we&apos;re cultivators of innovation. We provide the fertile ground,
                  expert guidance, and essential resources for your startup seed to germinate, grow strong roots, and
                  ultimately blossom into a thriving business. From concept to launch and beyond, ReapMind nurtures your
                  vision, ensuring it reaches its full potential in the market.
                </p>
                <p>
                  We believe in fostering a collaborative ecosystem where your team works hand-in-hand with our experts
                  throughout the development journey. Our agile methodology ensures transparency, adaptability, and
                  continuous improvement, allowing your vision to evolve and thrive in the ever-changing startup landscape.
                  With ReapMind, you&apos;re not just building a product; you&apos;re cultivating a lasting partnership dedicated
                  to your continued success.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact-us" className="btn-primary gap-2">
                  Request Callback <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div {...slideRight} className="grid grid-cols-2 gap-4">
              {[
                { label: "MVP Development", icon: Rocket },
                { label: "Agile Methodology", icon: RefreshCw },
                { label: "Scalable Products", icon: TrendingUp },
                { label: "Ongoing Support", icon: Clock },
              ].map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="section-card rounded-2xl p-6 flex flex-col items-center gap-3 text-center">
                  <div className="icon-box w-12 h-12 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-heading text-sm">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. STARTUP SOFTWARE DEVELOPMENT SERVICES ────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-10 max-w-3xl mx-auto">
            <span className="eyebrow mb-4 block">What We Build</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
              Our Startup Software Development Services
            </h2>
          </motion.div>

          {/* Offshore Banner */}
          <motion.div {...fadeUp} className="mb-10">
            <div className="relative w-full rounded-2xl overflow-hidden h-48 md:h-56">
              <img src="/images/Offshore-development-center-setup.jpg" alt="Offshore Development"
                className="absolute inset-0 w-full h-full object-cover object-center blur-sm scale-105" />
              <div className="absolute inset-0" style={{ background: "rgba(0,21,40,0.96)" }} />
              <div className="relative z-10 h-full flex flex-col items-center justify-center gap-5 text-center px-6">
                <p className="text-white text-lg md:text-2xl font-bold leading-snug">
                  Unlock Efficiency, Slash Costs :<br />
                  Your Dream Team Awaits with Offshore Development!
                </p>
                <Link href="/contact-us"
                  className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-2 rounded-lg hover:bg-white hover:text-[#001528] transition-colors text-sm">
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {SERVICES.map((svc, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="section-card section-card-interactive rounded-2xl p-7 flex gap-4">
                <div className="icon-box w-12 h-12 rounded-xl shrink-0 flex items-center justify-center">
                  <svc.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-heading text-lg mb-2">{svc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4b. MVP TO v1.0 GROWTH SECTION ──────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14 max-w-4xl mx-auto">
            <span className="eyebrow mb-4 block">From MVP to v1.0 and Beyond</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
              Taking Your Startup to the Next Level
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Taking your startup to the next level requires more than just a great idea. It demands strategic
              execution, technical expertise, and a relentless focus on growth. Here&apos;s how as a top startup
              development company in Bangalore we help you advance from MVP to a thriving v1.0 and beyond
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Feature Enrichment",
                desc: "We'll collaborate with you to identify and develop the crucial market-driven features that will resonate with your target audience. By augmenting your product with valuable functionalities, we'll enhance user engagement and drive adoption.",
                img: "/images/image (9).png",
              },
              {
                title: "Effortless Scaling",
                desc: "As your user base grows, your infrastructure needs to keep pace. We'll optimize your architecture to handle increased traffic and data loads, ensuring seamless scalability and a smooth user experience.",
                img: "/images/image (10).png",
              },
              {
                title: "Monetization Strategies",
                desc: "Turning your vision into a profitable business requires a solid monetization strategy. We'll help you implement the right model for your product, whether it's through in-app purchases, subscriptions, or other revenue generating approaches.",
                img: "/images/image (11).png",
              },
              {
                title: "Data-Driven Decisions",
                desc: "We empower you to make informed decisions through rigorous data analysis. We'll help you set up analytics tools and conduct experiments to understand user behavior, optimize your product, and drive growth.",
                img: "/images/image (12).png",
              },
            ].map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="section-card section-card-interactive rounded-2xl overflow-hidden flex flex-col sm:flex-row">
                <div className="w-full sm:w-44 shrink-0 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-44 sm:h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="font-bold text-heading text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. RECENT WORKS ──────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="eyebrow mb-4 block">Portfolio</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading">Our Recent Works</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {RECENT_WORKS.map((w, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}>
                <Link href={w.href} className="group block section-card section-card-interactive rounded-2xl overflow-hidden">
                  <div className="aspect-[16/10] overflow-hidden bg-surface">
                    <img src={w.img} alt={w.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
            <Link href="/contact-us" className="btn-primary gap-2">Get a Callback from Expert <ArrowRight className="w-4 h-4" /></Link>
          </motion.div>
        </div>
      </section>

      {/* ── 6. INDUSTRIES WE EMPOWER ─────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14 max-w-3xl mx-auto">
            <span className="eyebrow mb-4 block">Industries</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
              Industries We Empower
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We believe that innovative ideas can come from anywhere. That&apos;s why we partner with startups
              across a diverse range of industries, including:
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="section-card section-card-interactive rounded-2xl p-7 flex gap-4">
                <div className="icon-box w-12 h-12 rounded-xl shrink-0 flex items-center justify-center">
                  <ind.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-heading text-lg mb-2">{ind.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="text-center mt-12">
            <Link href="/contact-us" className="btn-primary gap-2">Book a Free Consultation <ArrowRight className="w-4 h-4" /></Link>
          </motion.div>
        </div>
      </section>

      {/* ── 7. TECH WE USE ───────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14 max-w-3xl mx-auto">
            <span className="eyebrow mb-4 block">Technology</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
              Tech We Use for Startups
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_STACK.map((tech, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="section-card section-card-interactive rounded-2xl p-7 flex flex-col gap-4">
                <div className="icon-box w-12 h-12 rounded-xl flex items-center justify-center">
                  <tech.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-heading text-lg">{tech.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="text-center mt-12">
            <Link href="/contact-us" className="btn-primary gap-2">Book a Free Consultation <ArrowRight className="w-4 h-4" /></Link>
          </motion.div>
        </div>
      </section>

      {/* ── 8. MODERNIZATION PROCESS ─────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div {...slideLeft}>
              <span className="eyebrow mb-4 block">Our Process</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6">
                Our end-to-end Application Modernization process
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We believe in delivering impeccable Application Modernization services that enable our clients
                to establish a lasting legacy in their business domain. We follow a standardized approach to
                modernization, ensuring that our clients receive top-notch applications that align with their
                business objectives.
              </p>
              <ul className="space-y-3 mb-8">
                {MODERNIZATION_PROCESS.map((step, i) => (
                  <motion.li key={i}
                    initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-muted-foreground">{step}</span>
                  </motion.li>
                ))}
              </ul>
              <Link href="/contact-us" className="btn-primary gap-2">
                Convert your Idea into Mobile App <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
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
              Ready to bring your startup idea to life? Fill in your details and our experts will reach out.
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
                <button type="submit" className="btn-primary w-full justify-center">Contact Us Today</button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 10. SECTORS ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
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
                initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }}
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

      {/* ── 11. LATEST INSIGHTS ──────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="eyebrow mb-4 block">Blog</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading">Latest Insights</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSIGHTS.map((post, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}>
                <Link href={post.href}
                  className="group section-card section-card-interactive rounded-2xl p-6 flex flex-col gap-3 h-full block">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">{post.category}</span>
                  <h3 className="font-bold text-heading leading-snug group-hover:text-accent transition-colors flex-1">{post.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t border-border">
                    <span>By {post.author}</span><span>·</span><span>{post.date}</span>
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

      {/* ── 12. PARTNER IN NAVIGATING THE STARTUP MAZE ───────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div {...slideLeft}>
            <span className="eyebrow mb-4 block">Your Partner</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6">
              ReapMind: Your Partner in Navigating the Startup Maze
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The startup journey is a thrilling adventure, but it&apos;s also filled with twists, turns, and
              unexpected obstacles. ReapMind is here to guide you through the maze, providing the expertise
              and support you need to turn your vision into a thriving reality.
            </p>
            <div className="space-y-4">
              {PARTNER_POINTS.map((point, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-4 items-start">
                  <div className="icon-box w-10 h-10 rounded-xl shrink-0 flex items-center justify-center">
                    <point.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-heading text-base mb-1">{point.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/contact-us" className="btn-primary gap-2">
                Book a Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
          <motion.div {...slideRight} className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
            <img src="/images/Reapmind-Client-Testimonials.jpg" alt="ReapMind Startup Partner"
              className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ── 13. TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="eyebrow mb-4 block">Client Stories</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading">What Clients Say About Us</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="section-card rounded-2xl p-7 flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-accent text-accent" />)}
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

      {/* ── 14. FAQ ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="eyebrow mb-4 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}>
                <FaqItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 15. FINAL CTA ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-t border-border">
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
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 items-center justify-items-center max-w-5xl mx-auto">
              {CLIENT_LOGOS.map((logo, i) => (
                <motion.div key={logo.name}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="section-card rounded-2xl p-4 w-full flex items-center justify-center h-16">
                  <img src={logo.src} alt={logo.name} className="max-h-8 max-w-[100px] w-auto object-contain" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
