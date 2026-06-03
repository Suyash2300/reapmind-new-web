"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, CheckCircle2, ChevronDown, ClipboardList, Code2,
  HeartPulse, Landmark, ShoppingCart, GraduationCap, Car, Utensils,
  Smartphone, Truck, Plane, Radio, Bitcoin, Film, Layers, Cloud,
  Zap, ShieldCheck, Paintbrush, GitMerge, Phone, Mail, Star,
  TrendingUp, BarChart3, Rocket,
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

// ── DATA ──────────────────────────────────────────────────────────────

const CLIENT_LOGOS = [
  { name: "Bosch", src: "https://reapmind.com/wp-content/uploads/2023/10/bosch.png" },
  { name: "Oracle", src: "https://reapmind.com/wp-content/uploads/2023/10/oracle.png" },
  { name: "Disney", src: "https://reapmind.com/wp-content/uploads/2023/10/disney-client.png" },
  { name: "Siemens", src: "https://reapmind.com/wp-content/uploads/2023/10/Siemens-client.png" },
];

const STATS = [
  { value: "316%", label: "ROI on Modernization" },
  { value: "25%", label: "Engagement Boost" },
  { value: "18%", label: "Revenue Increase" },
  { value: "78%", label: "Users Abandon Legacy Apps" },
];

const PROCESS_STEPS = [
  {
    title: "Comprehensive App Assessment",
    desc: "Our process begins with a thorough assessment of your existing mobile application. We identify pain points, outdated features, and areas that need improvement. This initial analysis lays the foundation for a customized modernization strategy.",
    icon: ClipboardList,
    img: "/images/image (1).png",
  },
  {
    title: "Strategic Planning and Consultation",
    desc: "Our team collaborates with you to understand your business goals and user expectations. We devise a strategic modernization plan tailored to enhance your app's performance, user interface, and overall functionality. Our consultants specialize in crafting solutions that align with your unique business objectives.",
    icon: Layers,
    img: "/images/image (2).png",
  },
  {
    title: "Technology Stack Upgrade",
    desc: "Keeping pace with the latest technologies is crucial for a modern mobile app. ReapMind ensures a seamless transition by upgrading your app's technology stack. Whether it's Android or iOS, we optimize the codebase, integrate the latest frameworks, and enhance compatibility to deliver a cutting-edge user experience.",
    icon: Code2,
    img: "/images/image (3).png",
  },
  {
    title: "User-Centric Design Revamp",
    desc: "Engaging user interfaces are key to retaining and attracting users. Our design team revamps your app's interface with a focus on user-centric design principles. The result is an aesthetically pleasing, intuitive, and responsive application that captivates your audience.",
    icon: Paintbrush,
    img: "/images/image (4).png",
  },
  {
    title: "Performance Enhancement",
    desc: "A modernized app should not only look good but also perform exceptionally well. ReapMind fine-tunes your app's performance, addressing speed, responsiveness, and overall efficiency. Our goal is to create a seamless and enjoyable user experience that encourages increased engagement.",
    icon: Zap,
    img: "/images/image (5).png",
  },
  {
    title: "Cost-Effective Solutions",
    desc: "We understand the importance of budget considerations. ReapMind offers transparent and cost-effective mobile app modernization services. Our solutions are designed to provide maximum value for your investment, ensuring a positive return on modernization.",
    icon: CheckCircle2,
    img: "/images/image (6).png",
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

const SERVICE_HIGHLIGHTS = [
  { title: "Technology Stack Migration", icon: GitMerge, desc: "Outdated technology stacks hinder scalability, performance, and compatibility with new features and integrations. Our technology stack migration service ensures that your mobile applications are equipped with the most advanced frameworks, enhancing scalability, agility, and future-proofing. Our expert team manages the entire migration process seamlessly, minimizing disruptions and downtime while ensuring a smooth transition that keeps your app ahead of the technological curve." },
  { title: "Cloud Integration", icon: Cloud, desc: "By adopting cloud-based solutions and flexible architectures, we ensure that the apps are scalable, easily accommodating growing user bases and evolving needs without major revamps." },
  { title: "Performance Optimization", icon: Zap, desc: "By leveraging modern frameworks and tools, we eliminate slow performance, bugs, and crashes, offering a smoother and more reliable app experience for users." },
  { title: "Security Enhancement", icon: ShieldCheck, desc: "ReapMind integrates cutting-edge security protocols and encryption technologies, safeguarding user data and fortifying apps against cyber threats, enhancing user trust and compliance adherence." },
  { title: "UX and UI Redesign", icon: Paintbrush, desc: "By revamping your app's UI/UX with the latest design trends and practices, we ensure cleaner interfaces, intuitive navigation, and faster loading times, fostering delight among users and driving increased engagement and loyalty." },
  { title: "Feature Modernization", icon: Layers, desc: "By modernizing, ReapMind enables the integration of cutting-edge features like AI-powered chatbots and advanced analytics tools, giving apps a competitive edge and enhancing value for users." },
];

const BENEFITS = [
  { title: "Enhanced User Experience (UX)", desc: "By revamping your app's UI/UX with the latest design trends and practices, we ensure cleaner interfaces, intuitive navigation, and faster loading times. This fosters delight among users, driving increased engagement and loyalty.", icon: Paintbrush },
  { title: "Improved Performance and Stability", desc: "By leveraging modern frameworks and tools, we eliminate slow performance, bugs, and crashes, offering a smoother and more reliable app experience for users.", icon: TrendingUp },
  { title: "Boosted Security and Compliance", desc: "ReapMind integrates cutting-edge security protocols and encryption technologies, safeguarding user data and fortifying apps against cyber threats, enhancing user trust and compliance adherence.", icon: ShieldCheck },
  { title: "Increased Scalability and Flexibility", desc: "By adopting cloud-based solutions and flexible architectures, we ensure that the apps are scalable, easily accommodating growing user bases and evolving needs without major revamps.", icon: BarChart3 },
  { title: "Reduced Development and Maintenance Costs", desc: "With cleaner and more efficient codebases, we minimize maintenance efforts and expenses, providing long-term cost savings and efficient resource allocation.", icon: CheckCircle2 },
  { title: "Access to New Features and Functionality", desc: "By modernizing, ReapMind enables the integration of cutting-edge features like AI-powered chatbots and advanced analytics tools, giving apps a competitive edge and enhancing value for users.", icon: Rocket },
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

const WHY_REAPMIND = [
  "ReapMind specializes in transforming legacy applications, understanding the unique challenges and vulnerabilities they pose.",
  "Backed by extensive research, our modernization efforts guarantee tangible results, elevating security, performance, and overall operational efficiency.",
  "We leverage cutting-edge technologies, ensuring that your modernized applications are equipped to innovate and adapt to market changes seamlessly.",
  "Recognizing the uniqueness of each organization, we offer tailored modernization solutions to address specific needs, be they enhancing the user experience or reducing maintenance costs.",
  "From initial assessment to post-modernization support, our dedicated team ensures a hassle-free experience throughout your modernization journey.",
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
  { q: "How do I know if my app needs modernization?", a: "If your app feels slow, crashes often, or seems outdated compared to newer ones, it's probably time for an upgrade." },
  { q: "What benefits can I expect from modernizing my app?", a: "Modernizing your app means it'll run faster, be more secure, offer a smoother user experience, keep users coming back, and help you stay ahead of the competition." },
  { q: "How long does the modernization process typically take?", a: "It really depends on how complex your app is and how much work it needs. Our team will work efficiently to get it done well and as quickly as possible." },
  { q: "Can you ensure my app remains compatible with different devices post-modernization?", a: "Absolutely! We'll make sure your app works seamlessly on all sorts of devices, so no matter what your users are using, they'll have a great experience." },
];

// ── FAQ Accordion ──────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-surface hover:bg-elevated transition-colors"
      >
        <span className="font-semibold text-heading text-base">{q}</span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 text-accent transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
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
            <p className="px-6 py-5 text-muted-foreground leading-relaxed border-t border-border bg-background">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── MAIN PAGE COMPONENT ───────────────────────────────────────────────
export default function AppModernizationBangalorePage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        {/* ambient blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-deep/10 blur-[100px]" />
        <div className="pointer-events-none absolute inset-0 grid-texture opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div {...slideLeft}>
            <span className="badge-pill mb-6">Application Modernization · Bangalore</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-heading mb-6">
              Application Modernization Services in{" "}
              <span className="gradient-text">Bangalore</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Bangalore, India&apos;s Silicon Valley, pulsates with the energy of a tech revolution.
              Mobile apps, once an infant industry, now drive the city&apos;s digital heartbeat. But as
              the landscape evolves, legacy applications built on outdated technologies threaten to
              hold businesses back. That&apos;s where ReapMind steps in — not just with the best
              application modernization services in Bangalore but with a specialized approach that
              breathes new life into your apps.
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

          {/* contact mini-form card */}
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

      {/* ── 2. CLIENT LOGOS + STATS ─────────────────────────────────── */}
      <section className="py-16 border-y border-border bg-section-tint">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p {...fadeUp} className="text-center eyebrow mb-8">
            Celebrating Success Stories · Empowering Our Clients to Achieve Unprecedented Heights
          </motion.p>
          <motion.div {...fadeUp} className="flex flex-wrap justify-center items-center gap-10 mb-14">
            {CLIENT_LOGOS.map((logo) => (
              <img key={logo.name} src={logo.src} alt={logo.name}
                className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition grayscale hover:grayscale-0" />
            ))}
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <motion.div key={i} {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="section-card rounded-2xl p-6 text-center">
                <p className="stat-value text-3xl md:text-4xl mb-1">{s.value}</p>
                <p className="text-sm text-muted-foreground leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHY CHOOSE REAPMIND ──────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div {...slideLeft}>
              <span className="eyebrow mb-4 block">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6">
                Why Choose ReapMind for Your Application Modernization Journey?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                In a rapidly evolving tech landscape, modernization isn&apos;t optional; it&apos;s the key
                to a world of endless possibilities. Research shows legacy applications hinder
                agility, but modernization yields a 316% ROI, with updated apps seeing a 25%
                engagement boost and an 18% revenue increase. This is where ReapMind, the top
                mobile application modernization company in Bangalore, steps in as your trusted
                partner for a transformative application modernization journey.
              </p>
              <Link href="/contact-us" className="btn-primary gap-2">
                Request Callback <ArrowRight className="w-4 h-4" />
              </Link>
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
        </div>
      </section>

      {/* ── 4. END-TO-END PROCESS INTRO ─────────────────────────────── */}
      <section className="py-6 bg-section-tint border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <motion.div {...fadeUp}>
            <span className="eyebrow mb-4 block">Our Process</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6">
              ReapMind&apos;s End-to-End Application Modernization Process
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Mobile application modernization isn&apos;t a suggestion; it&apos;s a strategic move. It&apos;s
              about survival, relevance, and agility in a world that demands constant evolution.
              A recent Statista survey found that 78% of users abandon apps with poor performance
              or clunky interfaces. ReapMind, the top mobile app modernization company in
              Bangalore, is your trusted partner for end-to-end mobile application modernization
              services, ensuring your app not only keeps up with the times but excels in
              performance and engagement.
            </p>
            <Link href="/contact-us" className="btn-primary gap-2 inline-flex">
              Offshore development center setup <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 5. PROCESS STEPS ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-20">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative rounded-3xl overflow-hidden aspect-[16/10] shadow-xl border border-border">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/30 to-transparent" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 flex items-center justify-center shadow">
                    <step.icon className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="w-7 h-7 rounded-full bg-accent/15 text-accent text-xs font-bold flex items-center justify-center">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="eyebrow">Step {i + 1}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-heading mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. RECENT WORKS ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="eyebrow mb-4 block">Portfolio</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading">Our Recent Works</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {RECENT_WORKS.map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
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

      {/* ── 7. SERVICE HIGHLIGHTS ───────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="eyebrow mb-4 block">What We Do</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">Service Highlights</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_HIGHLIGHTS.map((s, i) => (
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
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
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

      {/* ── 8. BENEFITS ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14 max-w-3xl mx-auto">
            <span className="eyebrow mb-4 block">Benefits</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
              Benefits of Mobile App Modernization with ReapMind
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Mobile applications serve as the driving force behind your business operations.
              Whether it&apos;s web experiences, employee management portals, inventory and order
              fulfillment tools, or other essential functionalities, mobile apps play a crucial
              role in enhancing customer engagement and ensuring operational effectiveness.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* ── 9. FREE CONSULTATION FORM ───────────────────────────────── */}
      <section className="py-20 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div {...slideLeft}>
            <span className="eyebrow mb-4 block">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">Get a Free Consultation</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ready to modernize your application? Fill in your details and our experts will reach out to discuss your requirements.
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

      {/* ── 10. SECTORS ─────────────────────────────────────────────── */}
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

      {/* ── 11. WHY REAPMIND ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div {...slideLeft}>
            <span className="eyebrow mb-4 block">Why Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-8">
              Why ReapMind for Application Modernization Services in Bangalore?
            </h2>
            <ul className="space-y-4">
              {WHY_REAPMIND.map((point, i) => (
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
              alt="ReapMind Application Modernization"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ── 12. TESTIMONIALS ────────────────────────────────────────── */}
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

      {/* ── 13. LATEST INSIGHTS ─────────────────────────────────────── */}
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
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
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

      {/* ── 14. FAQ ─────────────────────────────────────────────────── */}
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
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <FaqItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 15. FINAL CTA ───────────────────────────────────────────── */}
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
                  <button type="submit" className="btn-primary w-full justify-center">
                    Send
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Trusted by logos */}
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
