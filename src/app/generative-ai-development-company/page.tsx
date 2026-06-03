"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Rocket,
  Workflow,
  Wrench,
  Search,
  Lightbulb,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Repeat,
  Settings,
  Zap,
  Target,
  Lock,
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Car,
  Utensils,
  Smartphone,
  Truck,
  Plane,
  Radio,
  Bitcoin,
  Film,
} from "lucide-react";

// Standard scroll animation variants
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { staggerChildren: 0.1 },
};

const SERVICES = [
  {
    title: "Generative AI Model development",
    description:
      "Address back-breaking business challenges one to one with our exclusive business-driven approach to generative AI. Our team harnesses a diverse toolkit of machine learning algorithms — including RNNs, Transformers, Markov Chain, GANs, and Autoencoders to ship out incredible AI solutions that enable you to sparkle in a competitive evolving market. We precisely configure and train these models, sticking to industry best practices, and enforcing the delivery of high-quality, high-performance generative AI solutions that not only shoot out your problems but also open the door for new avenues of growth.",
    icon: BrainCircuit,
  },
  {
    title: "Generative AI Model Replication",
    description:
      "We are not just imitating the other AI models but facilitating your business to be a leader in the AI revolution. We arm you with the tools to kick off innovation, open up new avenues for expansion, and overstep your rivals by leveraging our specialty in replicating industry titans such as ChatGPT and DALL-E. With our generative AI model replication solutions, let's recreate what is feasible for your company.",
    icon: Repeat,
  },
  {
    title: "Model integration and deployment",
    description:
      "We prioritize providing a personalized approach to AI. We dig deeper into your business requirements, assuring the safe and smooth integration of custom-made generative AI models. Our all-inclusive services watch out every step of the process, from selecting and customizing models to rigorously testing and deploying them, guaranteeing a seamless and effective AI implementation that produces tangible outcomes.",
    icon: Workflow,
  },
  {
    title: "Upgrade and Maintenance",
    description:
      "By accessing our AI upgrade and Maintenance service, you can be stress-free that your AI solutions are innovative and scalable. Our lively approach will teach you about minute flaws and resolve any arising problems, ensuring the unbroken and effective operation of your systems. You can let out a never-ending stream of innovation that will uplift your company in coming years by investing in our on-going assistance.",
    icon: Wrench,
  },
];

const PROCESS = [
  {
    title: "Identify your business wants",
    description:
      "Your vision for your business is the map for your Generative AI journey. Reflect us about your business’s struggling challenges, the zeal that drives you, and the target audience you are ambitious to serve. Given that we fabricate a generative AI business road map that points out the pain points as well as the unbeatable AI solution",
    icon: Search,
  },
  {
    title: "Discover data sets",
    description:
      "Discovering the real value of your data begins with an in-depth understanding of your data environment. We will plot out your current and future data sources, both in structured and unstructured ways. Later on, we will move ahead for examining and prioritizing the sources to recognize the hidden gems- the data that is the asset to your business goals",
    icon: Lightbulb,
  },
  {
    title: "Picking the top tools and frameworks for your business",
    description:
      "We unbox flexible solutions to surpass your specific generative AI requirements. You can take benefit of proven tools such as ChatGPT, a versatile language model that can deliver stunning content based on your input. Alternatively, our professionals can build custom generative AI models with advanced approaches like GANs, VAEs, and autoregressive models. These custom-built models serve top-notch flexibility, control, and precision, guaranteeing that the generated content is completely lined up with your individual needs and objectives.",
    icon: Settings,
  },
  {
    title: "Fine-tuning or training your generative AI Model",
    description:
      "Fine-tuning and training are two significant ways to optimize generative AI models, each possessing its own set of advantages. Fine-tuning deals with the knowledge built into existing models, enabling them to be more potent at certain tasks by patching them to your specific data and requirements. Training, on the other hand, allows us to create a model from scratch, providing unmatched flexibility in structuring the model’s architecture and parameters to your specific requirements. Our specialists will understand your individual use case and goals to establish the right method, ensuring that your generative AI solution provides maximum impact and performance.",
    icon: Cpu,
  },
  {
    title: "Testing",
    description:
      "After the completion of the training process, your AI model is tested in different ways to ensure its accuracy in generating the required output. We then carefully evaluate the quality of the result generated, fine-tuning the model consistently until it matches the desired objective and exceeds your expectations",
    icon: CheckCircle2,
  },
  {
    title: "Deployment of generative AI Model",
    description:
      "For smooth and successful deployment of a generative AI model necessitates a comprehensive approach that encompasses robust training on required data, seamless integration into your existing systems, continuous performance optimization, and unwavering adherence to ethical and legal guidelines.",
    icon: Rocket,
  },
];

const WHY_US = [
  {
    title: "Stimulate Your Creative Engine",
    description:
      "Catch the wave of innovation with our generative AI solutions. We’ll help you win the evolving ideas and solutions by leveraging models such as ChatGPT, Midjourney, DALL-E, and Stable Diffusion.",
    icon: Zap,
  },
  {
    title: "Measurable Results",
    description:
      "We don’t just blow off our results instead we deliver it. Our AI solutions are crafted to burden down your business challenges and achieve incredible growth and value",
    icon: Target,
  },
  {
    title: "Future-Proof Your Business",
    description:
      "We leave no stone unturned to offer you adaptable, scalable AI solutions that encourage you to stand out in a competitive market and prosper in a constantly evolving marketplace.",
    icon: ShieldCheck,
  },
  {
    title: "Guardians of your data",
    description:
      "We follow strict security protocols and data privacy best practices while building your desired AI-based solutions because we value your data as much as you do.",
    icon: Lock,
  },
];

const RECENT_WORKS = [
  { title: "DQS Company", category: "Enterprise Grade Document Control", image: "/images/1.jpg" },
  { title: "Educational and Coaching institute", category: "Lakshya", image: "/images/2.jpg" },
  { title: "Coaching And Test Preparation Company", category: "MT Educare", image: "/images/3.jpg" },
  { title: "Organic Grocery Delivery App", category: "Organic World", image: "/images/4.png" },
  { title: "Pet Care Services", category: "PawSpace", image: "/images/5.png" },
  { title: "Municipal Bank", category: "Banking", image: "/images/6.png" },
];

const SECTORS = [
  { title: "Healthcare", icon: HeartPulse },
  { title: "Banking", icon: Landmark },
  { title: "eCommerce & Retail", icon: ShoppingCart },
  { title: "Education", icon: GraduationCap },
  { title: "Electric Vehicles", icon: Car },
  { title: "Food & Restaurants", icon: Utensils },
  { title: "On-Demand Solutions", icon: Smartphone },
  { title: "Supply chain & Logistics", icon: Truck },
  { title: "Travel & Hospitality", icon: Plane },
  { title: "Media", icon: Radio },
  { title: "NFT & Crypto", icon: Bitcoin },
  { title: "Entertainment", icon: Film },
];

const TESTIMONIALS = [
  {
    name: "Mr. Jeremy Del Zotto",
    role: "Founder & CEO - & Connection INC. (Canada)",
    text: "Reapmind has been an outstanding product partner for & Connection INC. Their exceptional technical support has brought to life unique and innovative features that have significantly elevated our app's functionality and user experience. Reapmind's commitment to delivering excellence has been instrumental in our success. Highly recommended for top-notch app development services.",
    image: "/images/im-main-10164.jpg" // fallback placeholder
  },
  {
    name: "S. D. Shibulal",
    role: "Founder: Innovations Investment Management India Private Ltd (INDIA)",
    text: "Reapmind's e-commerce web application development has been instrumental in our success. Their expertise has enabled us to establish a comprehensive e-retail ecosystem, and their contribution has added significant value to our business, enhancing our overall system and driving our success forward. Highly recommended!",
    image: "/images/im-main-14503.jpg" // fallback placeholder
  }
];

const INSIGHTS = [
  {
    title: "How Much Does It Cost to Develop an AI Agent in 2025?",
    category: "Artificial Intelligence",
    author: "Prakhar Lohia",
    date: "November 5, 2025",
    desc: "How Much Does It Cost to Develop an AI Agent for the Human Resource Industry? Blog ReapmindInnovations / Nov 5, 2025 If you've been thinking about using AI in your HR department, you're definitely not...",
    image: null
  },
  {
    title: "How Much Does It Cost to Develop an AI Agent in 2025?",
    category: "Artificial Intelligence",
    author: "Prakhar Lohia",
    date: "October 31, 2025",
    desc: "How Much Does It Cost to Develop an AI Agent in 2025? Blog ReapmindInnovations / Nov 5, 2025 Imagine a world where your sales never sleep, your HR department handles queries 24/7...",
    image: "/images/Featured-Image-2.png"
  },
  {
    title: "Why Your Enterprise Needs a Custom Intranet Portal (And How to Build One That Actually Works)",
    category: "Offshore Development",
    author: "Prakhar Lohia",
    date: "October 14, 2025",
    desc: "Why Your Enterprise Needs a Custom Intranet Portal (And How to Build One That Actually Works) Blog ReapmindInnovations / Oct 18, 2025 Picture this: Sarah from HR needs last month's onboarding metrics...",
    image: null
  }
];

const FAQS = [
  {
    question: "What is Generative AI, and how can turn out beneficial to my business?",
    answer: "Generative AI is a kind of artificial intelligence that can generate new content, such as text, images, music, or even code based on your input. It has the potential to revolutionize how businesses perform by automating tasks, enhancing creativity, and driving innovation. Our team can help you identify specific use cases where generative AI can deliver tangible value to your business."
  },
  {
    question: "How can I get started with your Generative AI services?",
    answer: "We suggest you get in touch with us for a free consultation. Where we will talk about your company's visions, evaluate your requirements, and suggest the best course of action for your journey toward generative AI."
  },
  {
    question: "How can you ensure your solutions ethically employ generative AI?",
    answer: "One of our primary priorities is ethical AI. To guarantee that our generative AI models are clear, objective, and applied ethically, we abide by stringent policies and industry best practices. Our dedication lies in creating AI solutions that complement your principles and make a constructive impact on society."
  }
];

const PROCESS_IMAGES = [
  "/images/image (1).png",
  "/images/image (2).png",
  "/images/image (3).png",
  "/images/image (4).png",
  "/images/image (5).png",
  "/images/image (6).png"
];

export default function GenerativeAIPage() {
  return (
    <main className="min-h-screen bg-background relative flex flex-col pt-20 overflow-x-hidden">
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--mesh-1)_1px,transparent_1px)] [background-size:24px_24px] opacity-35 z-0" />
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] rounded-full bg-brand-deep/5 blur-[150px] pointer-events-none z-0" />

      {/* ── 1. HERO SECTION ── */}
      <section className="relative z-10 bg-gradient-to-b from-white to-[#f4f7f9] text-[#002b49] overflow-hidden">
        {/* Background Wave/Mesh for Hero */}
        <div className="absolute inset-0 bg-[url('https://reapmind.com/wp-content/uploads/2024/02/wave-bg.svg')] bg-cover bg-center opacity-[0.05] z-0 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: Hero Text */}
          <div className="flex-1 text-left">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] mb-6 text-[#002b49]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Top Generative AI development company
            </motion.h1>
            <motion.p
              className="text-[#334155] text-lg leading-relaxed mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Envision owning an associate who figures out your enterprise in and out, based on that brings out the modern ways to grow and who is always ready to put new ideas on your table. That’s the power you can embrace from our Generative AI development services.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#001528] text-white px-6 py-3 rounded-full hover:bg-black transition-colors text-sm font-semibold">
                Reach out to get started on your requirements
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Contact Form */}
          <motion.div
            // className="w-full max-w-md bg-[#001c36] p-8 rounded-xl shadow-2xl border border-white/10"
            // initial={{ opacity: 0, scale: 0.95 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* <h3 className="text-xl font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">
              Have a Idea? Contact Us
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-brand-cyan"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-brand-cyan"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-brand-cyan"
              />
              <button
                type="button"
                className="w-full py-3 bg-[#42a5f5] hover:bg-[#2196f3] text-white font-semibold rounded transition-colors"
              >
                Contact Us Today
              </button>
            </form> */}
             <div className="flex justify-center py-12">
                  <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#002b49] text-white px-6 py-3 rounded-full font-medium hover:bg-black transition-colors">
                    Contact Us
                  </Link>
                </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. INTRO SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto flex flex-col items-center gap-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-heading text-[#002b49]">
            The Art of AI rolled out for your business obstacles
          </h2>
          <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed mt-4">
            <p>
              Business obstacles? Expect it to be the major source for your next breakthrough.
            </p>
            <p>
              We are your daring <strong>Generative AI development company</strong>, that keeps the capability to turn problems into solutions. With the endless possibilities of generative AI, ReapMind can transform hurdles into growth opportunities and enable you to skyrocket your business to untouchable heights.
            </p>
            <p>
              Our powerhouse team of 500+ AI professionals exacts the revolutionary potential of generative AI to fetch the smart applications that rewire the boundaries of possibility. By smoothly fusing this modern technology into your existing infrastructure, we entitle your business to unlock unparalleled efficiency gains, streamline puzzled workflows, and accelerate growth in ways you never thought possible.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="mt-6 btn-primary bg-[#002b49] text-white hover:bg-[#0071bc]"
          >
            Request Callback
          </Link>
        </motion.div>
      </section>

      {/* ── SEIZE THE SPOTLIGHT SECTION ── */}
      <section className="py-16 relative z-10 text-center">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6 text-[#002b49]">
              Seize the global spotlight with our Generative AI Services
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              By delving into our deep expertise across a wide range of AI technologies – from deep learning and machine learning to computer vision, reinforcement learning, and natural language processing – we structure bespoke generative AI models and services that root out your unique business challenges.
            </p>
          </motion.div>
        </div>

        {/* Offshore Banner Image */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              href="/contact-us" 
              className="block relative w-full rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform"
            >
              <img 
                src="/images/Offshore-development-center-setup.jpg" 
                alt="Offshore Development Team" 
                className="w-full h-auto object-cover" 
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 3. SERVICES GRID ── */}
      <section className="bg-section-tint border-y border-border/30 py-20 md:py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeUp}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6">
              Our Generative AI Capabilities
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {SERVICES.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="section-card section-card-interactive bg-card p-8 md:p-10 rounded-2xl flex flex-col gap-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent-soft text-accent flex items-center justify-center">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-heading">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── RECENT WORKS ── */}
      <section className="py-16 md:py-24 bg-section-tint border-y border-border/30 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeUp}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6 text-[#002b49]">
              Our Recent Works
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {RECENT_WORKS.map((work, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="section-card bg-card p-0 rounded-2xl flex flex-col text-center gap-0 hover:scale-[1.02] transition-transform overflow-hidden shadow-sm"
              >
                {/* Fallback mockups using local generic placeholder images based on what's available */}
                <div className="w-full aspect-[16/11] bg-white flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-heading mb-1">
                    {work.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {work.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. PROCESS ROADMAP ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          {...fadeUp}
        >
          <span className="eyebrow block mb-4 text-[#cfb384]">REAPMIND PROCESS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6 text-[#002b49]">
            Our generative AI development Process
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4">
            Our client-centric and standard generative AI development methodology is structured with the mindset to unleash you with optimum AI performance and smooth integration. By attentively building AI generic solutions that are selective to your unique objectives, we enable your company to fully utilize AI.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 z-0 hidden md:block" />
          
          <div className="space-y-16">
            {PROCESS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-stretch ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Center Icon */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white border border-[#e5e7eb] shadow-sm items-center justify-center z-10">
                  <div className="text-[#002b49]">
                    <step.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Image Side */}
                <div className="flex-1">
                  <div className="w-full h-full min-h-[300px] bg-[#f0f4f8] rounded-xl overflow-hidden relative shadow-sm border border-border/50 flex items-center justify-center">
                    <img src={PROCESS_IMAGES[i]} alt="Process Illustration" className="absolute inset-0 w-full h-full object-cover" />
                    {/* Step label removed for cleaner UI */}
                  </div>
                </div>

                {/* Text Side */}
                <div className="flex-1 flex flex-col justify-center bg-white p-8 md:p-12 shadow-lg border border-border/50 rounded-xl relative z-10">
                  <h3 className="text-2xl font-bold text-[#002b49] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATERING TO DIVERSE SECTORS ── */}
      <section className="bg-section-tint py-20 relative z-10 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            {...fadeUp}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading text-[#002b49]">
              Catering to Diverse Sectors: Our Targeted Industry Solutions
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
            {SECTORS.map((sector, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex flex-col items-center justify-center gap-3 p-4 hover:-translate-y-1 transition-transform"
              >
                <div className="text-[#002b49]">
                  <sector.icon className="w-12 h-12" strokeWidth={1.5} />
                </div>
                <h4 className="font-semibold text-heading">{sector.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LATEST INSIGHTS ── */}
      <section className="bg-section-tint py-20 md:py-28 relative z-10 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            {...fadeUp}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading text-[#002b49]">
              Latest Insights
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INSIGHTS.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-sm flex flex-col h-full hover:shadow-md transition-shadow"
              >
                {post.image ? (
                  <div className="w-full h-48 bg-white flex items-center justify-center relative overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                ) : null}
                <div className={`p-8 flex-1 flex flex-col ${post.image ? 'border-t-0' : ''}`}>
                  <h3 className="text-xl font-bold text-heading mb-4 hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <div className="text-sm text-muted-foreground mb-4">
                    {post.category} • By {post.author} • {post.date}
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1 mb-6 line-clamp-4">
                    {post.desc}
                  </p>
                  <Link href="#" className="inline-flex items-center gap-2 bg-[#002b49] text-white px-5 py-2 rounded-full font-medium self-start hover:bg-black transition-colors text-sm">
                    Read more
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US AS PARTNER ── */}
      <section className="bg-[#467d96] py-20 md:py-32 relative z-10 overflow-hidden text-white border-y border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--brand-blue)_0%,transparent_50%)] opacity-20" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#3d7088] rounded-l-[100px] opacity-40 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="mb-16"
            {...fadeUp}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Why us as your Generative AI development partner?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Points */}
            <div className="space-y-8">
              {WHY_US.map((reason, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                >
                  <p className="leading-relaxed text-lg">
                    <strong className="font-bold text-white text-xl">{reason.title} : </strong>
                    <span className="opacity-90">{reason.description}</span>
                  </p>
                </motion.div>
              ))}
              <motion.div {...fadeUp} className="pt-6">
                <Link
                  href="/contact-us"
                  className="bg-[#002b49] text-white font-semibold px-8 py-4 rounded-full hover:bg-black transition-colors flex items-center justify-center gap-2 max-w-[300px]"
                >
                  Book a Free Consultation
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </Link>
              </motion.div>
            </div>

            {/* Right: Video */}
            <motion.div
              {...fadeUp}
              className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white/20 bg-black/20"
            >
              <img src="/images/Reapmind-Client-Testimonials.jpg" alt="Client Testimonials" className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 cursor-pointer hover:scale-110 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
                {/* <h3 className="text-xl md:text-2xl font-bold drop-shadow-md">
                  Client Testimonials That Speak Volumes About Our Excellence
                </h3> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHAT CLIENTS SAY ABOUT US ── */}
      <section className="py-20 md:py-28 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            {...fadeUp}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading text-[#002b49]">
              What clients say about us
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-6"
              >
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover border border-border shadow-sm flex-shrink-0"
                />
                <div className="flex flex-col">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {testimonial.text}
                  </p>
                  <h4 className="font-bold text-[#002b49] text-lg">{testimonial.name}</h4>
                  <span className="text-sm text-brand-sky-soft font-medium uppercase tracking-wider mt-1">{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      <section className="bg-[#002b49] py-20 relative z-10 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            {...fadeUp}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white text-heading rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6 border-b border-border/50 bg-[#f8f9fa]">
                  <h3 className="text-lg font-bold text-[#002b49]">{faq.question}</h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      ── GET A FREE CONSULTATION ──
      <section>
         <div className="flex justify-center py-12">
                  <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#002b49] text-white px-6 py-3 rounded-full font-medium hover:bg-black transition-colors">
                    Contact Us
                  </Link>
                </div>
      </section>
    </main>
  );
}
