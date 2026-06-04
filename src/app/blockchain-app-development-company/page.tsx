"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ChevronDown, Code2,
  HeartPulse, Landmark, Truck, Building2, Zap, Gamepad2,
  Network, FileCode, Blocks, Globe,
  TrendingUp, Sparkles, Target, Layers, Bitcoin,
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

const SERVICES = [
  {
    title: "Blockchain Consulting",
    icon: Target,
    desc: "At ReapMind, we understand that every business has unique needs, and we provide comprehensive blockchain consulting services in Dubai to help our clients understand the potential of blockchain technology and how it can be applied to their specific industries. Our team of experts works closely with clients to identify the best blockchain solutions for their needs, enabling them to optimize their operations and reduce costs. We help businesses analyze their current processes and identify areas where blockchain technology can add value, and then provide a roadmap for implementing blockchain solutions. Our blockchain consulting services are designed to deliver measurable results, enabling businesses to stay ahead of the competition.",
  },
  {
    title: "Blockchain Development",
    icon: Code2,
    desc: "At ReapMind, we understand that every business has unique needs, and we provide comprehensive blockchain consulting services in Dubai to help our clients understand the potential of blockchain technology and how it can be applied to their specific industries. Our team of experts works closely with clients to identify the best blockchain solutions for their needs, enabling them to optimize their operations and reduce costs.",
  },
  {
    title: "Smart Contract Development",
    icon: FileCode,
    desc: "At ReapMind, we understand that every business has unique needs, and we provide comprehensive blockchain consulting services in Dubai to help our clients understand the potential of blockchain technology and how it can be applied to their specific industries. Our team of experts works closely with clients to identify the best blockchain solutions for their needs, enabling them to optimize their operations and reduce costs.",
  },
];

const BLOCKCHAIN_NETWORKS = [
  { name: "Bitcoin (BTC)", desc: "The first and most well-known blockchain network, used for peer-to-peer transactions and as a store of value.", icon: Bitcoin },
  { name: "Ethereum (ETH)", desc: "A blockchain network that supports smart contracts, enabling the creation of decentralized applications (dApps) and tokens.", icon: Blocks },
  { name: "Binance Smart Chain (BSC)", desc: "A blockchain network created by the cryptocurrency exchange Binance, designed for high-performance dApps and low-cost transactions.", icon: Zap },
  { name: "Cardano (ADA)", desc: "A blockchain network that focuses on scalability, sustainability, and security, and is designed for building decentralized financial applications.", icon: Network },
  { name: "Ripple (XRP)", desc: "A blockchain network designed for global financial transactions, particularly cross-border payments.", icon: TrendingUp },
  { name: "Polkadot (DOT)", desc: "A blockchain network that aims to connect multiple specialized blockchain networks into one interoperable ecosystem.", icon: Globe },
  { name: "Solana (SOL)", desc: "A high-performance blockchain network that supports smart contracts and decentralized applications.", icon: Zap },
  { name: "Chainlink (LINK)", desc: "A decentralized oracle network that provides data to smart contracts on various blockchain networks.", icon: Network },
  { name: "Cosmos (ATOM)", desc: "A network of independent blockchain networks that can interoperate with each other, enabling seamless transfers of tokens and data.", icon: Layers },
];

const DEVELOPMENT_PROCESS = [
  {
    title: "Discovery",
    desc: "In the discovery phase, we work with our clients to understand their business needs, goals, objectives, and requirements. We collaborate with them to determine the best blockchain technology and approach to meet their specific needs.",
    img: "/images/image (7).png",
  },
  {
    title: "Planning",
    desc: "After the discovery phase, we move on to the planning phase. In this phase, we create a detailed project plan, including project timelines, budget, and resource allocation. We also define the development methodology and project management approach that we will use.",
    img: "/images/image (7).png",
  },
  {
    title: "Design",
    desc: "The design phase involves creating the technical architecture and design of the blockchain solution. This includes defining the data models, creating smart contracts, and designing the user interface (if applicable).",
    img: "/images/image (7).png",
  },
  {
    title: "Development",
    desc: "Once the design is finalized, we move on to the development phase. In this phase, we build and integrate the blockchain solution. We follow an agile development methodology, which allows us to deliver working software quickly and incrementally.",
    img: "/images/image (7).png",
  },
  {
    title: "Testing",
    desc: "In the testing phase, we thoroughly test the blockchain solution to ensure that it meets the client's requirements and is free from bugs and errors. We use various testing methodologies, including functional testing, integration testing, and security testing.",
    img: "/images/image (7).png",
  },
  {
    title: "Deployment",
    desc: "After testing is complete, we deploy the blockchain solution to the production environment. We ensure that the solution is properly configured, and all necessary components are in place. We also provide ongoing support and maintenance to ensure that the solution continues to function smoothly.",
    img: "/images/image (7).png",
  },
];

const INDUSTRIES = [
  {
    title: "Finance and Banking",
    icon: Landmark,
    desc: "Our blockchain professionals specialize in developing secure and transparent blockchain-based solutions for the finance and banking industry. Our services include digital asset management, fraud detection, and fast, cost-effective financial transactions.",
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
    desc: "With our out-of-the-box blockchain development services, healthcare providers can store and share medical data securely and transparently. This can help prevent data breaches and improve patient care.",
  },
  {
    title: "Supply Chain Management",
    icon: Truck,
    desc: "We help businesses in the supply chain management industry track and trace products, ensuring transparency and authenticity. This can reduce inefficiencies and prevent counterfeit products from entering the market.",
  },
  {
    title: "Real Estate",
    icon: Building2,
    desc: "We offer blockchain-based solutions that streamline the real estate buying and selling process, including secure and transparent smart contracts. This ensures that transactions are safe and transparent.",
  },
  {
    title: "Energy and Utilities",
    icon: Zap,
    desc: "We as reliable blockchain service providers in Dubai unleash the blockchain solutions for energy and utility companies including energy trading, renewable energy certification, and carbon credit tracking. This promotes sustainable practices and reduces carbon emissions.",
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    desc: "We empower secure and transparent in-game asset management, decentralized gaming platforms, and player reward systems. This ensures that players have a fair and enjoyable experience.",
  },
];

const WHY_REAPMIND = [
  {
    title: "Expertise",
    icon: Target,
    desc: "Our team of skilled developers, designers, and project managers are experts in Metaverse development, and we use the latest technology and tools to create cutting-edge solutions.",
  },
  {
    title: "Innovative approach",
    icon: Sparkles,
    desc: "We are among clients for an innovative approach to technology and digital transformation. We are always exploring new technologies and methodologies to help businesses stay ahead of the curve.",
  },
  {
    title: "Proven track record",
    icon: TrendingUp,
    desc: "We have a proven track record of delivering successful projects for our clients. We have worked with companies of various sizes, from startups to large enterprises, and have helped them achieve their digital transformation goals.",
  },
  {
    title: "Global presence",
    icon: Globe,
    desc: "We have a global presence with offices in various locations, including Dubai. This can be an advantage for businesses that have a global reach and require a development partner that can operate across different regions.",
  },
];

const FAQS = [
  {
    q: "What is blockchain, and how does it work?",
    a: "Blockchain is a decentralized, digital ledger technology that enables secure, transparent, and tamper-proof transactions. It works by creating a network of nodes that validate and store transaction data in blocks. Each block contains a cryptographic hash of the previous block, creating a chain of blocks that cannot be altered without consensus from the network.",
  },
  {
    q: "What sets ReapMind apart from other blockchain development companies in Dubai?",
    a: "ReapMind is known for its innovative approach to technology and digital transformation. We have a team of experienced developers who have a deep understanding of blockchain technology and its potential applications. We have a proven track record of delivering successful projects for our clients, and take a collaborative approach to working with clients to ensure their specific needs are met.",
  },
  {
    q: "What industries can benefit from ReapMind blockchain development services in Dubai?",
    a: "ReapMind blockchain development services can benefit many industries, including finance, healthcare, supply chain management, logistics, real estate, and more. We work with businesses of all sizes, from startups to large enterprises, and can develop custom blockchain solutions that are tailored to each client's specific needs.",
  },
  {
    q: "What is the cost of ReapMind blockchain development services in Dubai?",
    a: "The cost of ReapMind blockchain development services can vary depending on the specific requirements of the project. We offer flexible pricing models and work with clients to develop solutions that fit within their budgets. We can provide a detailed quote for your services after a consultation to understand the scope of the project.",
  },
  {
    q: "What blockchain technologies does ReapMind use?",
    a: "ReapMind has expertise in developing solutions using a variety of blockchain technologies, including Ethereum, Hyperledger, Corda, and more. They use the most appropriate technology for each project based on the specific requirements and goals of the client.",
  },
  {
    q: "What is ReapMind's development process for blockchain solutions?",
    a: "ReapMind follows an Agile development process, which involves iterative development, continuous testing, and frequent client feedback. This approach allows for greater flexibility and adaptability throughout the development process and enables them to deliver high-quality blockchain solutions on time and within budget.",
  },
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
export default function BlockchainDevelopmentPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ── 1. HERO ───────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-deep/10 blur-[100px]" />
        <div className="pointer-events-none absolute inset-0 grid-texture opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div {...slideLeft}>
            <span className="badge-pill mb-6">Blockchain Development · Dubai</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-heading mb-6">
              Blockchain Development Company in <span className="gradient-text">Dubai</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Revolutionizing industries with innovative and secure blockchain solutions. We are the leading blockchain development company in Dubai you can trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact-us" className="btn-primary gap-2">
                Reach out to get started on your requirements <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div {...slideRight}>
            <div className="section-card rounded-3xl p-8 md:p-10">
              <h3 className="text-xl font-bold text-heading mb-6">Have a Idea? Contact Us</h3>
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

      {/* ── 2. INTRO – Experience the future ────────────────────── */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto">
            <span className="eyebrow mb-4 block text-center">About Our Blockchain Expertise</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-8 text-center">
              Experience the future of technology with our blockchain expertise in Dubai
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                At the forefront of technological innovation, blockchain technology is transforming the way businesses operate across various industries in Dubai. With its secure, transparent, and decentralized nature, blockchain is bringing unprecedented levels of trust and accountability to business processes, from supply chain management to financial transactions and beyond.
              </p>
              <p>
                At ReapMind, we are proud to be leading the charge in delivering cutting-edge blockchain development services in Dubai that are shaping the future of technology. Our team of blockchain experts in Dubai is passionate about creating innovative solutions that enable businesses to harness the power of blockchain technology and stay ahead of the competition.
              </p>
              <p>
                Whether you are looking to streamline your supply chain, enhance security in your financial transactions, or build a decentralized platform, we have the expertise and experience to help you achieve your objectives. We offer end-to-end blockchain solutions, including consulting, development, and implementation services that are customized to meet the unique needs of each client.
              </p>
              <p>
                With a deep understanding of the latest blockchain tools, technologies, and frameworks, we are able to deliver solutions that are scalable, secure, and future-proof. Our focus on quality and innovation ensures that you are always at the forefront of the latest technological advancements, giving a competitive edge in your respective industries.
              </p>
              <p>
                We as a reputable Blockchain Development Company in Dubai believe that the future of technology lies in blockchain. Experience the future today with our blockchain expertise in Dubai.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. SERVICES ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="eyebrow mb-4 block">Our Services</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
              Revolutionize your business with our cutting-edge blockchain development services
            </h2>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="section-card section-card-interactive rounded-2xl p-8 flex flex-col gap-4">
                <div className="icon-box w-14 h-14 rounded-xl flex items-center justify-center">
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-heading text-xl">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. BLOCKCHAIN NETWORKS ─────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-6">
            <span className="eyebrow mb-4 block">Supported Networks</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
              Blockchain Networks we support
            </h2>
          </motion.div>
          <motion.p {...fadeUp} className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-14">
            Blockchain connects a decentralized network on which users can send transactions and build applications without the need for a central authority or server. Utilize our extensive network support for you, which we use as a custom blockchain software development company to provide you with the best blockchain development services.
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOCKCHAIN_NETWORKS.map((network, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="section-card rounded-2xl p-6 flex gap-4">
                <div className="icon-box w-11 h-11 rounded-xl shrink-0 flex items-center justify-center">
                  <network.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-heading mb-1">{network.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{network.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FREE CONSULTATION FORM ────────────────────────────── */}
      <section className="py-20 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="section-card rounded-3xl p-10 md:p-14 grid lg:grid-cols-2 gap-10 items-center">
            <motion.div {...slideLeft}>
              <span className="eyebrow mb-4 block">Free Consultation</span>
              <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
                Get a Free Consultation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ready to explore how blockchain can transform your business? Our blockchain experts are here to help you get started.
              </p>
            </motion.div>
            <motion.div {...slideRight}>
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. NFT MARKETPLACE ───────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <span className="eyebrow mb-4 block">NFT Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">
              NFT Market place development
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Do you want to create a one-of-a-kind marketplace to showcase your NFT creations? We specialize in providing customized NFT marketplace development services that cater to your business requirements. Our team of skilled developers and blockchain experts is equipped with the latest tools and techniques to build an easy-to-use platform that streamlines the process of buying and selling NFTs. With our solutions, you can expand your reach and create new revenue streams while providing a seamless user experience for your customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 7. DEVELOPMENT PROCESS ───────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="eyebrow mb-4 block">Our Process</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
              Our Blockchain Development Process
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {DEVELOPMENT_PROCESS.map((step, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="section-card section-card-interactive rounded-2xl overflow-hidden flex flex-col">
                <div className="aspect-[4/3] overflow-hidden bg-surface">
                  <img src={step.img} alt={step.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="font-bold text-heading text-xl">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. MORE SERVICES (ICO, Integration, Supply Chain, Identity, dApps) ─── */}
      <section className="py-20 md:py-28 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-10">
            {/* ICO Development */}
            <motion.div {...fadeUp} className="section-card rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-heading mb-4">ICO Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                An initial Coin Offering (ICO) is a popular fundraising mechanism used by blockchain startups to raise funds for their projects. At ReapMind, we provide complete ICO development services, including whitepaper development, token creation, and marketing. Our team of experts has a deep understanding of the ICO market and can help businesses navigate the complex process of launching a successful ICO. We provide end-to-end ICO development services, from ideation to launch, enabling blockchain startups to raise funds and grow their businesses.
              </p>
            </motion.div>

            {/* Blockchain Integration */}
            <motion.div {...fadeUp} className="section-card rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-heading mb-4">Blockchain Integration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our team of experts has extensive experience in integrating blockchain technology with existing systems and applications, enabling businesses to leverage the benefits of blockchain without disrupting their current processes. We provide end-to-end blockchain integration services, including consulting, design, development, and testing, to ensure a seamless integration of blockchain with existing systems. Our solutions are scalable and can be customized to meet the specific needs of each client.
              </p>
            </motion.div>

            {/* Supply Chain Management */}
            <motion.div {...fadeUp} className="section-card rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-heading mb-4">Blockchain Supply Chain Management</h3>
              <p className="text-muted-foreground leading-relaxed">
                Blockchain technology has the potential to revolutionize supply chain management by providing end-to-end visibility and transparency, reducing costs, and enhancing security. We unleash you with remarkable blockchain supply chain management solutions that enable your businesses to track the products from the source to the end-user, ensuring authenticity, quality, and compliance. Our solutions are designed to streamline supply chain operations and reduce the risk of fraud and counterfeiting.
              </p>
            </motion.div>

            {/* Identity Management */}
            <motion.div {...fadeUp} className="section-card rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-heading mb-4">Blockchain Identity Management</h3>
              <p className="text-muted-foreground leading-relaxed">
                Blockchain technology can be used to create secure and decentralized identity management solutions, enabling individuals to control their personal data and protect their privacy. We provide blockchain identity management solutions that enable businesses to authenticate and verify their users, protect their data, and comply with regulations. Our solutions are scalable, secure, and user-friendly, providing a seamless user experience
              </p>
            </motion.div>

            {/* dApps Development */}
            <motion.div {...fadeUp} className="section-card rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-heading mb-4">dApps development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Are you looking to create a decentralized application that leverages the power of blockchain technology to transform your business? Stress down, our team of experienced developers and blockchain experts can help you build a cutting-edge dApp that meets your specific needs. Our end-to-end dApp development services include ideation, design, development, testing, deployment, and maintenance, ensuring that your dApp is scalable, secure, and user-friendly. Our solutions are tailored to your business needs and can help you streamline operations, reduce costs, and enhance the user experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 9. INDUSTRIES ────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="eyebrow mb-4 block">Industries We Serve</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
              Empowering diverse Industries with Secure and Transparent Blockchain Solutions
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((industry, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="section-card section-card-interactive rounded-2xl p-7 flex flex-col gap-4">
                <div className="icon-box w-12 h-12 rounded-xl flex items-center justify-center">
                  <industry.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-heading text-lg">{industry.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. WHY REAPMIND ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="eyebrow mb-4 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
              Why ReapMind as your desired blockchain development company in Dubai?
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {WHY_REAPMIND.map((reason, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="section-card rounded-2xl p-7 flex flex-col gap-4 text-center">
                <div className="icon-box w-14 h-14 rounded-xl flex items-center justify-center mx-auto">
                  <reason.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-heading text-lg">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="text-center">
            <Link href="/contact-us" className="btn-primary gap-2">
              Book a Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 11. FAQ ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="eyebrow mb-4 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading">Frequently Asked Questions</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}>
                <FaqItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. FINAL CTA WITH CLIENT LOGOS ─────────────────────── */}
      <section className="py-20 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Get a Free Consultation from our Technology Expert
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="max-w-2xl mx-auto mb-12">
            <form className="flex gap-3" onSubmit={e => e.preventDefault()}>
              <input required type="email" placeholder="Your Email"
                className="flex-1 rounded-xl border border-border bg-surface px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition" />
              <button type="submit" className="btn-primary">
                Send
              </button>
            </form>
          </motion.div>
          <motion.p {...fadeUp} className="text-center eyebrow mb-8">
            Trusted by Global Companies. Contact Us Today!
          </motion.p>
          <motion.div {...fadeUp} className="flex flex-wrap justify-center items-center gap-10">
            {CLIENT_LOGOS.map((logo) => (
              <img key={logo.name} src={logo.src} alt={logo.name}
                className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition grayscale hover:grayscale-0" />
            ))}
          </motion.div>
        </div>
      </section>

    </main>
  );
}
