"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ChevronDown, Bitcoin, Code2, Layers, Globe2,
  Wrench, Phone, Mail, Star, ShieldCheck, Zap, CheckCircle2,
  RefreshCw, Target, Settings, Brain, Users, Award, TrendingUp,
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

const NFT_SERVICES = [
  {
    title: "NFT Creation",
    desc: "Are you looking to make a splash in the world of NFTs? Our team of experts is dedicated to crafting unique and valuable non-fungible tokens that are sure to capture the attention of your audience. Whether you're an artist, musician, athlete, or entrepreneur, our NFT creation service can help you turn your digital assets into valuable treasures that are optimized for maximum exposure and value. We understand that every client has unique needs and goals, which is why we offer a fully customizable NFT creation service tailored to your specific requirements. Our NFT creation service is designed to help you stand out in the crowded world of NFTs.",
    icon: Bitcoin,
  },
  {
    title: "Smart Contract Development",
    desc: "Smart contracts are a crucial component of NFTs as they automate the creation, distribution, and management of tokens. Our blockchain experts can develop custom smart contracts that match your visionary requirements. This includes defining the token metadata, setting the parameters for token creation and distribution, and defining the rules for token ownership and transfer. We ensure that the smart contracts are secure, efficient, and fully optimized for the chosen blockchain platform.",
    icon: Code2,
  },
  {
    title: "NFT Marketplace Integration",
    desc: "With our NFT Marketplace Integration service, we handle all the technical details, so you can focus on creating your NFTs and building your brand. Our team of experts will configure the necessary API integrations, ensure that your NFTs are properly listed and displayed on the marketplace, and manage the sale and transfer of the tokens. We provide end-to-end solutions that are tailored to your specific needs, so you can reach your target audience and maximize the value of your digital assets.",
    icon: Layers,
  },
  {
    title: "Metaverse NFT Development",
    desc: "Are you interested in bringing your NFTs to the forefront of the metaverse and unlocking their full potential? Our Metaverse NFT Marketplace Development service offers an exclusive and cutting-edge solution. We understand that the metaverse represents the future of digital interaction and commerce and that NFTs are poised to play a pivotal role in this new digital landscape. Our team of experts can help you create a dynamic and user-friendly NFT marketplace within a metaverse platform, allowing you to reach new audiences and enhance the value of your digital assets.",
    icon: Globe2,
  },
  {
    title: "Metaverse NFT Marketplace Development service",
    desc: "Unlock the full potential of your NFTs in the world of the metaverse with our Metaverse NFT Marketplace Development service. As the digital world continues to evolve, the metaverse has emerged as the new frontier of digital interaction and commerce. With our Metaverse NFT Marketplace Development service, we offer a cutting-edge solution that allows you to create your own NFT marketplace within the metaverse and take advantage of this exciting new digital landscape. Our solutions are designed to be highly scalable and customizable.",
    icon: Globe2,
  },
  {
    title: "NFT Marketplace Maintenance and Upgradation",
    desc: "We believe that the success of your NFT marketplace doesn't end with its launch. That's why we offer a comprehensive NFT Marketplace Maintenance and Upgradation service to ensure that your marketplace is always running at peak performance. Our team of experienced professionals is dedicated to providing ongoing support for your NFT marketplace, which includes identifying areas for improvement and implementing necessary upgrades and maintenance tasks. From bug fixes to security updates, we ensure that your marketplace is always optimized for success.",
    icon: Wrench,
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

const DEV_PROCESS = [
  { title: "Understanding the client's requirements", desc: "Our NFT development process starts with understanding the client's needs and business objectives. We identify your goals, target audience, and other requirements for the NFT. Our team of experts analyzes the client's business model to determine the best approach to creating an NFT that meets their needs.", icon: Target },
  { title: "Conceptualization and design", desc: "Based on the client's requirements, we conceptualize and design the NFT marketplace. Our team creates wireframes and prototypes to visualize the final product and ensure alignment with your vision.", icon: Settings },
  { title: "Smart Contract Development", desc: "We develop secure and efficient smart contracts tailored to your NFT marketplace requirements, ensuring proper token creation, ownership rules, and transfer mechanisms.", icon: Code2 },
  { title: "Integration with Blockchain", desc: "Our team integrates the marketplace with the appropriate blockchain network, ensuring seamless operation, security, and compatibility with leading platforms like Ethereum, Binance Smart Chain, and Polkadot.", icon: Layers },
  { title: "Deployment and Maintenance", desc: "We deploy the NFT marketplace and provide ongoing maintenance and support to ensure it continues to operate at peak performance, with regular updates and security patches.", icon: Zap },
];

const AGILE_STEPS = [
  { title: "Agile Approach", icon: RefreshCw },
  { title: "Planning", icon: Target },
  { title: "UI / UX Designing", icon: Settings },
  { title: "Coding", icon: Brain },
  { title: "Quality Assurance", icon: CheckCircle2 },
  { title: "Launch", icon: Zap },
];

const TECH_STACK = [
  {
    title: "Blockchain Platform",
    desc: "We use various blockchain platforms like Ethereum, Binance Smart Chain, Polkadot, etc., to develop NFT marketplaces. We select the most appropriate blockchain platform based on the client's requirements, scalability, security, and other factors.",
    img: "/images/image (13).png",
  },
  {
    title: "Smart Contracts",
    desc: "Smart Contracts are self-executing contracts with the terms of the agreement between buyer and seller being directly written into lines of code. We use smart contracts to manage NFT ownership, transactions, and other functions in the NFT marketplace.",
    img: "/images/image (14).png",
  },
  {
    title: "IPFS",
    desc: "InterPlanetary File System (IPFS) is a decentralized file storage system that we use to store NFTs. IPFS ensures that NFTs are stored securely and are accessible to users at all times.",
    img: "/images/image (15).png",
  },
  {
    title: "Web3.js",
    desc: "We use Web3.js to interact with the blockchain platform and smart contracts. Web3.js is a collection of libraries that allow developers to interact with the Ethereum blockchain and other blockchain platforms.",
    img: "/images/image (16).png",
  },
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

const WHY_REAPMIND = [
  { title: "Expertise", desc: "We have a team of experienced blockchain developers who have worked on several NFT development projects. Our team is proficient in developing NFT marketplaces on different blockchain platforms like Ethereum, Binance Smart Chain, Polkadot, etc.", icon: Award },
  { title: "Customization", desc: "We understand that every client has unique requirements for their NFT marketplace. Therefore, we offer customized solutions tailored to your specific needs.", icon: Settings },
  { title: "End-to-end NFT Marketplace Development", desc: "We provide end-to-end NFT marketplace development services, from conceptualization to deployment and maintenance. We ensure that the NFT marketplace is secure, user-friendly, and visually appealing.", icon: Layers },
  { title: "Agile Development Methodology", desc: "We follow an Agile development methodology, which allows us to deliver projects on time and within budget. Our team of experts works in sprints to ensure that the project is on track and that the client's requirements are met at every stage of the project.", icon: RefreshCw },
  { title: "Quality Assurance", desc: "We perform rigorous testing to ensure that the NFT marketplace we develop is secure and functions seamlessly. We ensure that the NFT marketplace is scalable, reliable, and user-friendly. Our team of experts performs extensive testing to ensure that the marketplace works seamlessly on different devices and platforms.", icon: ShieldCheck },
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
  { title: "The Role of AI in Intelligent Document Processing and Management – Benefits and Applications", category: "Artificial Intelligence", author: "ReapMind Innovations", date: "May 6, 2025", href: "/ai-in-document-processing-benefits-applications", img: "/images/Featured-Image-2.png" },
  { title: "EMR Integration in Healthcare Systems – Benefits, Features, Process, Costs", category: "Technology", author: "Prakhar Lohia", date: "May 5, 2025", href: "/emr-integration-in-healthcare", img: "/images/im-main-10164.jpg" },
  { title: "Cybersecurity in Manufacturing: Building Cyber Resilience for Smart Factories", category: "Technology", author: "Prakhar Lohia", date: "May 1, 2025", href: "/cybersecurity-in-manufacturing-smart-factories", img: "/images/im-main-14503.jpg" },
  { title: "How Much Does It Cost to Develop a Mutual Fund Investment Portal or App?", category: "Mobile App Development Cost", author: "ReapMind Innovations", date: "April 30, 2025", href: "/cost-to-develop-mutual-fund-investment-app", img: "/images/image (1).png" },
  { title: "Healthcare Workforce Management Software: A Catalyst for Streamlined Business Operations", category: "Technology", author: "ReapMind Innovations", date: "April 29, 2025", href: "/healthcare-workforce-management-software", img: "/images/image (2).png" },
  { title: "How an AI Chatbot for Higher Education Revolutionizes Student Support Services", category: "Artificial Intelligence", author: "ReapMind Innovations", date: "April 28, 2025", href: "/ai-chatbot-for-higher-education-student-support", img: "/images/image (3).png" },
];

const FAQS = [
  { q: "What is an NFT marketplace?", a: "An NFT marketplace is a platform that allows users to buy, sell, and trade NFTs (Non-Fungible Tokens). It serves as a digital marketplace where NFT creators can showcase their digital assets to potential buyers." },
  { q: "Why do businesses need NFT marketplace development services?", a: "Businesses need NFT marketplace development services to create a platform where they can showcase their digital assets to a wider audience, attract potential buyers, and earn revenue by selling their NFTs." },
  { q: "What are the key features of an NFT marketplace?", a: "The key features of an NFT marketplace include a user-friendly interface, secure payment gateways, NFT browsing and search functionalities, customizable smart contracts, and support for multiple blockchain networks." },
  { q: "How long does it take to develop an NFT marketplace?", a: "The time it takes to develop an NFT marketplace depends on the complexity of the project and the specific requirements of the client. Generally, it can take anywhere from a few weeks to a few months to develop a fully functional NFT marketplace." },
  { q: "What are some of the popular NFT marketplace development platforms?", a: "Some of the popular NFT marketplace development platforms include OpenSea, SuperRare, Rarible, Mintable, and Nifty Gateway, among others." },
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
export default function NFTMarketplaceDevelopmentPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ── 1. HERO ───────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-deep/10 blur-[100px]" />
        <div className="pointer-events-none absolute inset-0 grid-texture opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div {...slideLeft}>
            <span className="badge-pill mb-6">NFT Marketplace Development Company</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-heading mb-6">
              Building secure and scalable{" "}
              <span className="gradient-text">NFT marketplaces</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Welcome to ReapMind, a leading NFT development company in India, the USA, UAE, and Australia
              that brings innovation and creativity to the world of blockchain technology. Our team of
              experienced developers specializes in creating unique and customizable NFT solutions for
              individuals, businesses, and organizations. From concept to deployment, we strive to provide
              our clients with top-notch NFT development services that meet their specific needs and
              requirements. Join us in shaping the future of digital assets with our cutting-edge NFT solutions.
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

      {/* ── 3. REPUTABLE NFT COMPANY ─────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div {...slideLeft}>
              <span className="eyebrow mb-4 block">About Us</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6">
                Reputable NFT Marketplace Development Company
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>We as trustable NFT marketplace development service providers in India, UK and USA are driven by a passion for innovation and a commitment to delivering exceptional value to our clients. We understand that the NFT ecosystem is constantly evolving, which is why we stay ahead of the curve by leveraging the latest technologies and trends.</p>
                <p>At the core of our approach is a deep understanding of the power of NFTs to transform the way businesses and individuals interact with digital assets. We believe that NFTs offer a unique opportunity to unlock the value of digital assets and create new revenue streams for businesses and organizations.</p>
                <p>Our team is made up of experienced developers, designers, and industry experts who are dedicated to delivering the highest quality NFT solutions. We believe in a collaborative approach that involves working closely with our clients to understand their needs, objectives, and challenges.</p>
                <p>We are committed to transparency, integrity, and excellence in everything we do. We believe that our success is directly tied to our client's success, which is why we go above and beyond to ensure that each project is delivered on time, within budget, and to the highest possible standards.</p>
              </div>
              <div className="mt-8">
                <Link href="/contact-us" className="btn-primary gap-2">Request Callback <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </motion.div>
            <motion.div {...slideRight} className="grid grid-cols-2 gap-4">
              {[
                { label: "Blockchain Experts", icon: Bitcoin },
                { label: "Secure Smart Contracts", icon: ShieldCheck },
                { label: "Scalable Solutions", icon: TrendingUp },
                { label: "End-to-End Support", icon: Users },
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

      {/* ── 4. NFT DEVELOPMENT SERVICES ──────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-10 max-w-3xl mx-auto">
            <span className="eyebrow mb-4 block">What We Offer</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
              Experience the future of ownership with our NFT development services
            </h2>
            <div className="mt-6 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/Offshore-development-center-setup.jpg"
                alt="Offshore development center setup"
                className="w-full object-cover"
              />
            </div>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {NFT_SERVICES.map((svc, i) => (
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

      {/* ── 6. TECH STACK ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14 max-w-3xl mx-auto">
            <span className="eyebrow mb-4 block">Technologies</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
              Tech stack we use for NFT Marketplace development
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We use a range of technologies and tools to develop NFT marketplaces that are secure, scalable, and user-friendly. Here are some of the key technologies and tools we use in NFT Marketplace development
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-8">
            {TECH_STACK.map((tech, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="section-card section-card-interactive rounded-2xl overflow-hidden flex flex-col sm:flex-row gap-0">
                <div className="w-full sm:w-48 shrink-0 aspect-[4/3] sm:aspect-auto overflow-hidden bg-surface">
                  <img src={tech.img} alt={tech.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="font-bold text-heading text-xl mb-2">{tech.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. DEV PROCESS ───────────────────────────────────────── */}      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14 max-w-3xl mx-auto">
            <span className="eyebrow mb-4 block">How We Work</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
              Our Systematic NFT Marketplace development process
            </h2>
          </motion.div>
          <div className="space-y-4">
            {DEV_PROCESS.map((step, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="section-card section-card-interactive rounded-2xl p-6 flex gap-4 items-start">
                <div className="flex items-center gap-3 shrink-0">
                  <span className="w-8 h-8 rounded-full bg-accent/15 text-accent text-xs font-bold flex items-center justify-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="icon-box w-10 h-10 rounded-xl flex items-center justify-center">
                    <step.icon className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-heading text-base mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="text-center mt-10">
            <Link href="/contact-us" className="btn-primary gap-2">Book a Free Consultation <ArrowRight className="w-4 h-4" /></Link>
          </motion.div>
        </div>
      </section>

      {/* ── 7. TRUSTED PARTNER + AGILE ───────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14 max-w-3xl mx-auto">
            <span className="eyebrow mb-4 block">Our Approach</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
              NFT Marketplace Development Trusted Partner for many Startups &amp; Enterprises
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Delivering services that empower businesses to reap the benefits of digital transformation
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {AGILE_STEPS.map((step, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="section-card rounded-2xl p-5 flex flex-col items-center gap-3 text-center">
                <div className="icon-box w-12 h-12 rounded-xl flex items-center justify-center">
                  <step.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold text-heading">{step.title}</span>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="text-center">
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
              Ready to build your NFT marketplace? Fill in your details and our blockchain experts will reach out.
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

      {/* ── 10. WHY REAPMIND ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div {...slideLeft}>
            <span className="eyebrow mb-4 block">Why Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-8">
              Why ReapMind for NFT Marketplace development service?
            </h2>
            <div className="space-y-5">
              {WHY_REAPMIND.map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-4 items-start">
                  <div className="icon-box w-10 h-10 rounded-xl shrink-0 flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-heading text-base mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
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
            <img src="/images/Reapmind-Client-Testimonials.jpg" alt="ReapMind NFT Development"
              className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ── 11. TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-20 md:py-28">
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
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}>
                <Link href={post.href}
                  className="group section-card section-card-interactive rounded-2xl overflow-hidden flex flex-col h-full block">
                  <div className="aspect-[16/9] overflow-hidden bg-surface">
                    <img src={post.img} alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">{post.category}</span>
                    <h3 className="font-bold text-heading leading-snug group-hover:text-accent transition-colors flex-1">{post.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t border-border">
                      <span>By {post.author}</span><span>·</span><span>{post.date}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent mt-1">
                      Read more <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. FAQ ───────────────────────────────────────────────── */}
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
