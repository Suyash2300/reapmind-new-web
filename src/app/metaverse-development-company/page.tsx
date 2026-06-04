"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ChevronDown, Globe2, HeartPulse, Landmark,
  ShoppingCart, GraduationCap, Car, Utensils, Smartphone, Truck,
  Plane, Radio, Bitcoin, Film, Phone, Mail, Star,
  ShieldCheck, Zap, Layers, Box, Users, Award,
  TrendingUp, Clock, CheckCircle2, Gamepad2, Building2, Store, Briefcase,
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

const SERVICES_360 = [
  {
    title: "Metaverse application development",
    desc: "At ReapMind, we specialize in creating immersive and engaging Metaverse applications that cater to your unique needs. Our expert developers, designers, and innovators work closely with you to create customized solutions that deliver an exceptional user experience. We utilize cutting-edge tools and technologies to craft solutions that help you stand out in a crowded digital landscape. Whether you're looking to create a virtual reality game, an augmented reality app, or a 3D marketplace, our team has the expertise and experience to deliver solutions that exceed your expectations.",
    icon: Globe2,
    img: "/images/image (1).png",
  },
  {
    title: "Metaverse development consulting",
    desc: "Metaverse development is an exciting and rapidly-evolving field, and our consulting services are designed to help you navigate the complex and dynamic Metaverse landscape. We provide comprehensive solutions that are designed to help you achieve the business objectives and stay ahead of the curve in the competitive digital landscape. Our team of experienced professionals has a deep understanding of the technologies and strategies that are required to build successful metaverse environments, and we work closely with you to help you bring your visions to life.",
    icon: Briefcase,
    img: "/images/image (2).png",
  },
  {
    title: "Metaverse Integration",
    desc: "Unlock new possibilities for your business with our Metaverse Integration Services. Our team of experts has the knowledge and experience to help you leverage metaverse technology for marketing, employee training, and more. Whether you're looking to create a branded virtual experience or build an immersive training simulation, we can guide you through the process of designing and implementing effective metaverse solutions. Our team brings together expertise in areas such as software engineering, game design, and virtual economics to provide a comprehensive approach to metaverse integration.",
    icon: Layers,
    img: "/images/image (3).png",
  },
  {
    title: "Metaverse 3D Avatars Development",
    desc: "In the metaverse, 3D avatars are the embodiment of the user's virtual presence, and creating high-quality, visually stunning avatars is essential to creating an engaging and immersive metaverse experience. We specialize in developing customized avatars that capture the unique identity and personality of individual users. Our team of experts has extensive experience in 3D modeling, animation, and rigging, and work with you to understand your needs and preferences, providing a range of customization options to ensure that each avatar is unique and personalized.",
    icon: Users,
    img: "/images/image (4).png",
  },
  {
    title: "Metaverse 3D Space Development",
    desc: "At ReapMind, we understand that the user experience is paramount. That's why we focus on designing fully functional and user-friendly virtual environments that prioritize the needs and preferences of your users. With our attention to detail and commitment to excellence, we can help you create a virtual space that inspires, educates, and entertains. Our expertise in 3D modeling, animation, and programming ensures that your virtual space is not only visually impressive but also user-friendly and easy to navigate. From immersive gaming worlds to interactive virtual shopping experiences, we can create virtual environments that captivate and engage your users.",
    icon: Box,
    img: "/images/image (5).png",
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

const SOFTWARE_SOLUTIONS = [
  {
    title: "Metaverse Game development",
    desc: "Are you ready to enter a world beyond your wildest imagination? The Metaverse represents a new frontier in gaming and virtual experiences, offering players the opportunity to explore and interact in ways that were once only the stuff of science fiction. Our team of experienced developers and designers is at the forefront of Metaverse game development, using the latest technologies and tools to create immersive, interactive worlds that transport players to new realms of adventure and excitement. From creating breath-taking visual landscapes to developing engaging gameplay mechanics, we understand the complexities of creating a Metaverse experience that captures the hearts and minds of players around the world.",
    icon: Gamepad2,
  },
  {
    title: "Metaverse Real Estate Development",
    desc: "We build powerful virtual real estate platforms that allow users to buy, sell, and develop digital properties in the metaverse. Our solutions enable brands and individuals to establish their presence in virtual worlds with fully functional, visually stunning properties.",
    icon: Building2,
  },
  {
    title: "Metaverse NFT Marketplace development",
    desc: "We develop cutting-edge NFT marketplaces tailored for the metaverse, enabling seamless buying, selling, and trading of digital assets. Our platforms support secure transactions, smart contracts, and intuitive user interfaces for both creators and collectors.",
    icon: Store,
  },
  {
    title: "Metaverse Virtual office development",
    desc: "Transform the way your team collaborates with our Metaverse Virtual Office solutions. We create immersive, interactive virtual workspaces that replicate the feel of a physical office, enabling remote teams to connect, collaborate, and communicate in engaging digital environments.",
    icon: Briefcase,
  },
];

const STATS = [
  { value: "10+", label: "Years of experience in developing Metaverse solutions" },
  { value: "100+", label: "Successful Metaverse projects delivered to satisfied clients" },
  { value: "50+", label: "Expert developers, designers, and innovators with diverse skill sets" },
  { value: "90%", label: "Client retention rate, showcasing our commitment to building long-lasting relationships" },
  { value: "95%", label: "Client satisfaction rate, highlighting our focus on delivering high-quality solutions" },
  { value: "10,000+", label: "Hours of dedicated work in developing Metaverse solutions" },
  { value: "3+", label: "Award-winning Metaverse projects, showcasing our expertise and creativity" },
];

const WHY_REAPMIND = [
  { title: "Experience", desc: "We have years of experience in Metaverse development, with a track record of delivering innovative and high-quality solutions to our clients.", icon: Award },
  { title: "Expertise", desc: "Our team of skilled developers, designers, and project managers are experts in Metaverse development, and we use the latest technology and tools to create cutting-edge solutions.", icon: Zap },
  { title: "Comprehensive services", desc: "We provide comprehensive Metaverse development services, including consultation, planning, design, development, testing, and deployment. We offer end-to-end support for your Metaverse project.", icon: Layers },
  { title: "Customized solutions", desc: "We work closely with our clients to create customized Metaverse solutions that meet their specific needs and objectives. We take a client-centric approach, ensuring that our solutions are tailored to your unique requirements.", icon: ShieldCheck },
  { title: "Quality assurance", desc: "We place a strong emphasis on quality assurance, ensuring that our solutions are bug-free, secure, and operate seamlessly. We conduct rigorous testing to ensure that our solutions meet our high standards of quality.", icon: CheckCircle2 },
  { title: "Cost-effective", desc: "We offer cost-effective Metaverse development services, without compromising on quality. We work within your budget to deliver solutions that meet your needs and exceed your expectations.", icon: TrendingUp },
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
  { title: "How Much Does It Cost to Develop an AI Agent in 2025?", category: "Artificial Intelligence", author: "Prakhar Lohia", date: "November 5, 2025", href: "/ai-agent-development-cost-for-hr-industry", img: null },
  { title: "How Much Does It Cost to Develop an AI Agent in 2025?", category: "Artificial Intelligence", author: "Prakhar Lohia", date: "October 31, 2025", href: "/cost-to-develop-an-ai-agent-in-2025", img: "/images/Featured-Image-2.png" },
  { title: "Why Your Enterprise Needs a Custom Intranet Portal (And How to Build One That Actually Works)", category: "Offshore Development", author: "Prakhar Lohia", date: "October 14, 2025", href: "/why-your-enterprise-needs-a-custom-intranet-portal", img: null },
  { title: "The Role of AI in Intelligent Document Processing and Management – Benefits and Applications", category: "Artificial Intelligence", author: "ReapMind Innovations", date: "May 6, 2025", href: "/ai-in-document-processing-benefits-applications", img: null },
  { title: "EMR Integration in Healthcare Systems – Benefits, Features, Process, Costs", category: "Technology", author: "Prakhar Lohia", date: "May 5, 2025", href: "/emr-integration-in-healthcare", img: null },
  { title: "Cybersecurity in Manufacturing: Building Cyber Resilience for Smart Factories", category: "Technology", author: "Prakhar Lohia", date: "May 1, 2025", href: "/cybersecurity-in-manufacturing-smart-factories", img: null },
];

const FAQS = [
  { q: "What is the Metaverse, and why is it important?", a: "The Metaverse is a virtual world that consists of interconnected digital spaces, allowing users to interact with each other and digital objects in real-time. It has gained importance in recent years as a potential new frontier for business, social, and entertainment experiences." },
  { q: "What types of Metaverse solutions does ReapMind develop?", a: "ReapMind develops a wide range of Metaverse solutions, including virtual events and conferences, virtual real estate and property management, virtual education and training, and more. We work closely with clients to understand their specific needs and develop customized solutions that meet those needs." },
  { q: "What technologies does ReapMind use to develop Metaverse solutions?", a: "ReapMind uses a variety of technologies to develop Metaverse solutions, including virtual and augmented reality, blockchain, artificial intelligence, and more. They use the most appropriate technology for each project based on the specific requirements and goals of the client." },
  { q: "What services do metaverse development companies offer?", a: "Metaverse development companies offer a range of services, including consultation, planning, design, development, testing, and deployment of metaverse solutions." },
  { q: "How do I choose the right metaverse development company?", a: "When choosing a metaverse development company, consider their experience, expertise, portfolio, cost-effectiveness, and quality assurance standards." },
  { q: "What is the cost of metaverse development services?", a: "The cost of metaverse development services varies based on factors such as the complexity of the project, the scope of work, the technologies used, and the company's pricing policies." },
  { q: "What technologies are used in metaverse development?", a: "Metaverse development companies use a variety of technologies, including virtual reality (VR), augmented reality (AR), blockchain, artificial intelligence (AI), and the internet of things (IoT) to create immersive digital experiences." },
  { q: "What industries can benefit from metaverse development services?", a: "Metaverse development services can benefit a wide range of industries, including gaming, entertainment, education, real estate, retail, healthcare, and more." },
  { q: "What is the timeframe for metaverse development projects?", a: "The timeframe for metaverse development projects varies based on factors such as the scope of work, the complexity of the project, and the technologies used. A metaverse development company can provide an estimated timeframe for your project during the consultation phase." },
  { q: "How much does it cost to develop a small business mobile app?", a: "The reputable mobile app development company in India such as Reapmind costs for an app with a restricted amount of features will range between $5,000 and $60,000." },
  { q: "How much does it cost to design an Android app?", a: "There is no proper answer for android app development cost in India as it varies based on app development concept and scope. Share your android app development requirements on info@reapmind.com to know the accurate cost." },
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
export default function MetaverseDevelopmentPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ── 1. HERO ───────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-deep/10 blur-[100px]" />
        <div className="pointer-events-none absolute inset-0 grid-texture opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div {...slideLeft}>
            <span className="badge-pill mb-6">Metaverse Development Company</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-heading mb-6">
              Experience the limitless possibilities of the{" "}
              <span className="gradient-text">Metaverse</span> with us.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Step into a world of boundless creativity and endless possibilities with Metaverse Development.
              Our team of expert developers, designers, and innovators create immersive digital experiences
              that transport you to alternate realities. From virtual worlds to augmented reality solutions,
              we as a top Metaverse development company in India, the USA, Australia, and UAE bring your
              imagination to life with cutting-edge technology and unmatched expertise.
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

      {/* ── 3. ESSENTIALITY OF METAVERSE ─────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div {...slideLeft}>
              <span className="eyebrow mb-4 block">Why Metaverse Matters</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6">
                The Essentiality of Metaverse development in Today's Competitive world
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Mobile devices have become the one-stop platform for users to access the relevant services or
                products on the figure tips comfortably and conveniently. Without stepping into this thriving
                mobile app development world, it is hard to sustain your business as per the users' needs and
                demands. That's where the expertise Mobile app Development Company in India ReapMind helping
                the businesses to embrace the best in class mobile apps fused with new-age technologies that
                result in satisfying the users evolving wants.
              </p>
              <Link href="/contact-us" className="btn-primary gap-2">
                Request Callback <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div {...slideRight} className="grid grid-cols-2 gap-4">
              {[
                { label: "Virtual Worlds", icon: Globe2 },
                { label: "3D Experiences", icon: Box },
                { label: "Immersive Reality", icon: Layers },
                { label: "Future-Ready", icon: Zap },
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

      {/* ── 4. 360* SERVICES ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14 max-w-4xl mx-auto">
            <span className="eyebrow mb-4 block">Our Services</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
              Experience the full spectrum of the Metaverse with our 360* development services
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              With our 360* Metaverse development services in India, the USA, UK, and Australia, you can be
              sure that your brand is well-equipped to navigate the rapidly evolving digital landscape. We take
              a holistic approach to development, focusing on creating solutions that are not only visually
              stunning but also intuitive, engaging, and user-friendly. Our team of expert developers,
              designers, and innovators work tirelessly to ensure that your Metaverse experience is second to none.
            </p>
            <div className="mt-6">
              <Link href="/contact-us" className="btn-primary gap-2 inline-flex">
                Offshore development center setup <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
          <div className="space-y-16">
            {SERVICES_360.map((svc, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative rounded-3xl overflow-hidden aspect-[16/10] shadow-xl border border-border">
                  <img src={svc.img} alt={svc.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/30 to-transparent" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 flex items-center justify-center shadow">
                    <svc.icon className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="w-7 h-7 rounded-full bg-accent/15 text-accent text-xs font-bold flex items-center justify-center">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="eyebrow">Service {i + 1}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-heading mb-4">{svc.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{svc.desc}</p>
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

      {/* ── 6. SOFTWARE SOLUTIONS ────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14 max-w-3xl mx-auto">
            <span className="eyebrow mb-4 block">Game-Changing Solutions</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
              Embark on a journey into the Metaverse with our game-changing software development solutions
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {SOFTWARE_SOLUTIONS.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="section-card section-card-interactive rounded-2xl p-7 flex gap-4">
                <div className="icon-box w-12 h-12 rounded-xl shrink-0 flex items-center justify-center">
                  <s.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-heading text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="text-center mt-12">
            <Link href="/contact-us" className="btn-primary gap-2">Book a Free Consultation <ArrowRight className="w-4 h-4" /></Link>
          </motion.div>
        </div>
      </section>

      {/* ── 7. DEVELOPMENT PROCESS ───────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14 max-w-3xl mx-auto">
            <span className="eyebrow mb-4 block">How We Work</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
              Our Metaverse Development Process
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At our company, we follow a systematic process for Metaverse development that ensures our clients
              receive the highest quality and most innovative Metaverse solutions. Our process involves the
              following steps:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: "Discovery",
                desc: "We begin with a comprehensive discovery phase, where we work with our clients to identify their specific requirements and objectives. We conduct thorough research to gain a deep understanding of their business and industry, and we use this information to develop a clear plan for Metaverse development.",
                img: "/images/image (9).png",
              },
              {
                title: "Design",
                desc: "Once we have a clear understanding of our client's needs, we move on to the design phase. Here, our expert designers create visually stunning Metaverse solutions that are tailored to our client's unique requirements. We use the latest design software and technology to create immersive, engaging, and interactive virtual environments.",
                img: "/images/image (10).png",
              },
              {
                title: "Development",
                desc: "With the design phase complete, we move on to development. Our skilled developers use advanced programming languages and tools to create highly functional and efficient Metaverse solutions. We place a strong emphasis on quality assurance to ensure that our solutions are bug-free and operate seamlessly.",
                img: "/images/image (11).png",
              },
              {
                title: "Testing",
                desc: "Before we deliver our Metaverse solutions to our clients, we conduct rigorous testing to ensure that they meet our high standards of quality. We perform functional testing, security testing, and performance testing to ensure that our solutions operate smoothly and securely.",
                img: "/images/image (12).png",
              },
            ].map((step, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="section-card section-card-interactive rounded-2xl overflow-hidden flex flex-col sm:flex-row gap-0">
                {/* image */}
                <div className="w-full sm:w-48 shrink-0 overflow-hidden">
                  <img src={step.img} alt={step.title}
                    className="w-full h-48 sm:h-full object-cover" />
                </div>
                {/* content */}
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="font-bold text-heading text-xl">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. TRUSTED PARTNER + STATS ───────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <motion.div {...slideLeft}>
              <span className="eyebrow mb-4 block">Trusted Partner</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6">
                We are Trusted Partner for many Startups &amp; Enterprises
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As your desired Metaverse development service provider in Australia, the USA, and UAE we are
                  committed to delivering solutions that go beyond just meeting your expectations. We believe in
                  creating experiences that leave a lasting impact on your users and help your brand stand out in
                  a crowded digital landscape.
                </p>
                <p>
                  Our team's deep understanding of the latest Metaverse technologies, coupled with our creative
                  and strategic approach, allows us to create innovative solutions that cater to the unique needs
                  of your brand and audience.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact-us" className="btn-primary gap-2">
                  Convert your Idea into Mobile App <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div {...slideRight} className="grid grid-cols-1 gap-4">
              {STATS.map((stat, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="section-card rounded-2xl p-5 flex items-center gap-5">
                  <div className="shrink-0">
                    <p className="stat-value text-2xl md:text-3xl">{stat.value}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-snug">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 8. FREE CONSULTATION FORM ────────────────────────────── */}
      <section className="py-20 bg-section-tint border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div {...slideLeft}>
            <span className="eyebrow mb-4 block">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">Get a Free Consultation</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ready to explore the Metaverse? Fill in your details and our experts will reach out to discuss your requirements.
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
              Why ReapMind as your desired Metaverse development company in India, the USA, and UK?
            </h2>
            <div className="space-y-4">
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
            <img src="/images/Reapmind-Client-Testimonials.jpg" alt="ReapMind Metaverse Development"
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
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}>
                <Link href={post.href}
                  className="group section-card section-card-interactive rounded-2xl flex flex-col gap-0 h-full block overflow-hidden">
                  {post.img && (
                    <div className="w-full h-44 overflow-hidden shrink-0">
                      <img src={post.img} alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
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
                viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }}>
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
