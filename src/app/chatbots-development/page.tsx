"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ChevronDown, MessageSquare, HeartPulse, Landmark,
  ShoppingCart, Smartphone, Phone, Mail, Star, TrendingUp,
  ShieldCheck, Zap, Clock, Brain, Target,
  CheckCircle2, RefreshCw, Settings,
} from "lucide-react";

// ── Animation presets ──────────────────────────────────────────────────
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
  { name: "Times Group", src: "https://reapmind.com/wp-content/uploads/2023/04/client-logos-21.png" },
  { name: "Hyundai", src: "https://reapmind.com/wp-content/uploads/2023/04/client-logos-6.png" },
  { name: "Zydus", src: "https://reapmind.com/wp-content/uploads/2023/04/client-logos-23.png" },
];

const WHY_CHOOSE = [
  {
    title: "Mobile is present and also future",
    desc: "According to a survey, it has been estimated that more than 70% of businesses have adopted a mobile-centric approach and gained an 80% increase in sales and 42% revenue. Besides everyone is becoming used to browsing and buying their required things through mobile apps so it has become imperative to make your business go mobile by leveraging our A1 app development solutions.",
    icon: Smartphone,
  },
  {
    title: "Better customer services",
    desc: "Mobile apps are an incredible way that helps businesses to build trust with their customers. Along with providing services this apps enables users to make safe transactions, check notifications about offers and discounts, view product description with reviews, and make them do much more things without visiting any physical store.",
    icon: HeartPulse,
  },
  {
    title: "Boost Profits",
    desc: "When customer satisfaction increases, then the business sales directly get increased. That's where mobile apps come in for influencing the customer buying experiences that make them to stick your business. To Standout unique in this cut-throat mobile app development market, you need to trust us as your one-stop mobile app development partner.",
    icon: TrendingUp,
  },
  {
    title: "Accessibility",
    desc: "Mobile apps have no constraint and limits imply your business services are easily accessible anytime, anywhere. Keeping your business always available to customers empowers you to get collaborate with them for a longer time. It's high time to reach out to your customers digitally by getting the best support from ReapMind.",
    icon: Clock,
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

const AI_USE_CASES = [
  {
    title: "AI in Financial Sector",
    desc: "AI is used in banks majorly for detecting transactional frauds. AI can scan transactional data and discover unusual user behavior trends. Detect and prevent payments fraud. Improve processes for anti-money laundering (AML) and perform know-your-customer (KYC) regulatory checks.",
    icon: Landmark,
    img: "/images/pexels-dvaughn-bell-2068664-min-2048x1363.jpg",
  },
  {
    title: "AI in Healthcare",
    desc: "AI has helped in the diagnoses and treatment of diseases. Assists in surgeries and developing highly effective medicines. Stores records of medical history, which helps doctors to understand the course of a patient's previous treatment.",
    icon: HeartPulse,
    img: "/images/pexels-mart-production-7088530-min-2048x1365.jpg",
  },
  {
    title: "AI in Retail Industry",
    desc: "Biometric & face recognition helps in the identification of customers revisiting the store, letting the staff know about likes & dislikes. Enhances the personalized experience to an individual customer. Help in making a smarter business decision.",
    icon: ShoppingCart,
    img: "/images/svc-mobile-1.jpg",
  },
  {
    title: "AI in Marketing",
    desc: "Automated decisions making based on data collection, analysis, and further observations. AI is frequently utilized in marketing campaigns where speed is essential. Assists in understanding economy & buying patterns.",
    icon: Target,
    img: "/images/svc-web-1.jpg",
  },
  {
    title: "AI in ChatBox",
    desc: "Offers customer support which feels like a human conversation. Saves time and operational cost. Engaging customers and leads to retention.",
    icon: MessageSquare,
    img: "/images/svc-mobile-2.jpg",
  },
  {
    title: "AI in Security",
    desc: "AI-powered security solutions include facial, speech, and handwriting recognition software with biometric, biographic, and contextual matching capabilities. Object detection, situational analysis, and threat assessments are some of the other security procedures that AI can automate.",
    icon: ShieldCheck,
    img: "/images/svc-web-2.jpg",
  },
];

const DEV_PROCESS = [
  { title: "Agile Approach", icon: RefreshCw, img: "/images/process/process-agile.jpg" },
  { title: "Planning", icon: Target, img: "/images/process/process-planning.jpg" },
  { title: "UI / UX Designing", icon: Settings, img: "/images/process/process-design.jpg" },
  { title: "Coding", icon: Brain, img: "/images/process/process-coding.jpg" },
  { title: "Quality Assurance", icon: CheckCircle2, img: "/images/process/process-qa.jpg" },
  { title: "Launch", icon: Zap, img: "/images/process/process-launch.jpg" },
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
  { q: "Personalized shopping experience", a: "Personalizing marketing to customers boosts customer engagement, loyalty, and sales." },
  { q: "Automated customer interaction", a: "AI-integrated software will respond appropriately to customers and deal with their inquiries by analyzing data collected from past contacts." },
  { q: "Real-Time assistance", a: "AI is also beneficial to a firm that communicates with large numbers of clients daily." },
  { q: "Swiftly identify key and relevant aspects while processing large amounts of data.", a: "Metaverse development companies offer a range of services, including consultation, planning, design, development, testing, and deployment of metaverse solutions." },
  { q: "Predicting Outcomes", a: "Depending on consumer buying patterns, AI helps one forecast when demand will decrease." },
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

// ── MAIN PAGE ─────────────────────────────────────────────────────────
export default function ChatbotsDevelopmentPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ── 1. HERO ───────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-deep/10 blur-[100px]" />
        <div className="pointer-events-none absolute inset-0 grid-texture opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div {...slideLeft}>
            <span className="badge-pill mb-6">Chatbot Development</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-heading mb-6">
              Top Chatbot Development <span className="gradient-text">Company</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Streamline your business operations and easily get hooked to obsessed mobile users
              by leaning on our profit generating mobile app development services on Android, iOS,
              and Windows platforms that absolutely level up your business to new heights.
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
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-heading">
              Celebrating Success Stories
            </h2>
            <p className="text-xl md:text-2xl font-bold text-heading mt-1">
              Empowering Our Clients to Achieve Unprecedented Heights
            </p>
          </motion.div>
          <motion.div {...fadeUp}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 items-center justify-items-center">
            {CLIENT_LOGOS.map((logo, i) => (
              <motion.div key={logo.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="section-card rounded-2xl p-4 w-full flex items-center justify-center h-20 hover:shadow-md transition-shadow">
                <img src={logo.src} alt={logo.name}
                  className="max-h-10 max-w-[120px] w-auto object-contain" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. THE START TO NEW ERA ──────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div {...slideLeft}>
              <span className="eyebrow mb-4 block">The Start to New Era</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6">
                The Start to New Era
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The customer being king of the market, it becomes at most important to be available to serve the customer as and when needed, a chatbot is a conversational agent that uses human-like language to connect with users in a given domain.
                </p>
                <p>
                  Harness AI chatbots and speech bots to boost sales, deliver consistent customer service, and improve organizational efficiency. So now let you let the chatbot work for you 24*7, without asking for payment or time off.
                </p>
                <p>
                  ReapMind is the top Chatbot Mobile App Development firm, providing enterprise and startup chatbot solutions, assisting businesses in providing the best possible service to their consumers.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact-us" className="btn-primary gap-2">
                  Request Callback <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div {...slideRight}
              className="grid grid-cols-2 gap-4">
              {[
                { label: "24×7 Availability", icon: Clock },
                { label: "AI-Powered Responses", icon: Brain },
                { label: "Boost Sales", icon: TrendingUp },
                { label: "Secure Integrations", icon: ShieldCheck },
              ].map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
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

      {/* ── 4. WHY CHOOSE REAPMIND ───────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-10 max-w-3xl mx-auto">
            <span className="eyebrow mb-4 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
              Why Choose ReapMind as your Envisioned Chatbot Development?
            </h2>
          </motion.div>

          {/* Offshore Banner */}
          <motion.div {...fadeUp} className="mb-10">
            <div className="relative w-full rounded-2xl overflow-hidden h-48 md:h-56">
              {/* image blurred + fully covered so no baked-in text shows */}
              <img
                src="/images/Offshore-development-center-setup.jpg"
                alt="Offshore Development"
                className="absolute inset-0 w-full h-full object-cover object-center blur-sm scale-105"
              />
              {/* 100% solid overlay — no bleed-through */}
              <div className="absolute inset-0" style={{ background: "rgba(0,21,40,0.96)" }} />
              {/* single clean content block */}
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
            {WHY_CHOOSE.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="section-card section-card-interactive rounded-2xl p-7 flex gap-4">
                <div className="icon-box w-12 h-12 rounded-xl shrink-0 flex items-center justify-center">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-heading text-lg mb-2">{item.title}</h3>
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
        </div>
      </section>

      {/* ── 6. AI USE CASES ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_USE_CASES.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="section-card section-card-interactive rounded-2xl overflow-hidden flex flex-col">
                {/* image on top */}
                <div className="w-full h-48 overflow-hidden shrink-0">
                  <img src={item.img} alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                {/* content */}
                <div className="p-7 flex flex-col gap-3 flex-1">
                  <h3 className="font-bold text-heading text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
                  <Link href="/contact-us"
                    className="btn-primary gap-2 self-start text-sm px-5 py-2.5">
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. DEVELOPMENT PROCESS ───────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14 max-w-3xl mx-auto">
            <span className="eyebrow mb-4 block">Our Process</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
              Our end-end development process to get develop a perfect app
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We believe in delivering flawless mobile apps that ensure our clients gain a legacy
              in their business space. With the standard development process our team design,
              deploy and deliver quality products that result in bringing intended outcome in terms
              of quality and efficiency.
            </p>
          </motion.div>

          {/* process steps grid with images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {DEV_PROCESS.map((step, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="section-card rounded-2xl overflow-hidden flex flex-col items-center text-center">
                <div className="w-full h-28 overflow-hidden">
                  <img src={step.img} alt={step.title}
                    className="w-full h-full object-cover" />
                </div>
                <div className="p-3 flex flex-col items-center gap-2">
                  <div className="icon-box w-10 h-10 rounded-xl flex items-center justify-center">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-heading leading-tight">{step.title}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp} className="text-center mt-10 text-muted-foreground font-medium">
            Delivering services that empower businesses to reap the benefits of digital transformation
          </motion.p>
          <motion.div {...fadeUp} className="text-center mt-6">
            <Link href="/contact-us" className="btn-primary gap-2">
              Convert your Idea into Mobile App <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 8. FREE CONSULTATION FORM ────────────────────────────── */}
      <section className="py-20 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div {...slideLeft}>
            <span className="eyebrow mb-4 block">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">Get a Free Consultation</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ready to transform your customer experience with AI-powered chatbots? Fill in your details and our experts will reach out.
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

      {/* ── 9. SECTORS ───────────────────────────────────────────── */}
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

      {/* ── 10. WHY REAPMIND FOR CHATBOT ─────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div {...slideLeft}>
            <span className="eyebrow mb-4 block">Why Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6">
              Why choose ReapMind for Chatbot App Development?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Through the AI based chatbot app development solutions platform, our team of chatbot developers design a chatbot or build automated assistants intended at altering the way businesses communicate with customers, providing automated customer service, and interactive experiences.
              </p>
              <p>
                Team ReapMind helps you integrate chatbots at multiple platforms with ease and with all security.
              </p>
              <p>
                We the Team ReapMind, are the only one in the industry who serves post-delivery of project. Our after-project delivery service helps us stand out from our competitors.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/contact-us" className="btn-primary gap-2">
                Book a Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
          <motion.div {...slideRight} className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
            <img
              src="https://reapmind.com/wp-content/uploads/2023/10/Reapmind-Client-Testimonials.jpg"
              alt="ReapMind Client Testimonials"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/60 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ── 11. TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-20 md:py-28">
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

      {/* ── 12. LATEST INSIGHTS ──────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
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

      {/* ── 13. FAQ ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
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

      {/* ── 14. FINAL CTA ────────────────────────────────────────── */}
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
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="section-card rounded-2xl p-4 w-full flex items-center justify-center h-16">
                  <img src={logo.src} alt={logo.name}
                    className="max-h-8 max-w-[100px] w-auto object-contain" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
