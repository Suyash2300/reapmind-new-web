'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Lightbulb,
  Cpu,
  Layers,
  Rocket,
  Users,
  Award,
  Zap,
  Target,
  Shield,
  Globe,
  Code,
  Database,
  Cloud,
  MessageSquare,
  TestTube,
  FolderKanban,
  Quote,
  Search,
  Brain,
  Clock,
  Settings,
  ShoppingCart,
  GraduationCap,
  Heart,
  Car,
  Newspaper,
  Building2,
  ChevronDown,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const capabilities = [
  {
    icon: Lightbulb,
    title: 'Product Design',
    description: 'Our product design service is dedicated to providing smart and innovative solutions that seamlessly combine physical objects and digital services to offer personalized convenience. Our design-relevant features are specifically crafted to meet the needs of the modern consumer, who expects high-quality products that offer a superior user experience.',
    color: 'var(--brand-cyan)',
    image: '/images/svc-mobile-1.jpg'
  },
  {
    icon: Target,
    title: 'Product Strategy',
    description: 'Developing a successful product requires more than just a great idea - it requires a comprehensive product strategy that takes into account market trends, customer needs, and competitive pressures. We specialize in helping businesses of all sizes develop winning product strategies that drive growth and profitability.',
    color: 'var(--brand-blue)',
    image: '/images/svc-web-1.jpg'
  },
  {
    icon: Layers,
    title: 'Product and Organization Transformation',
    description: 'We understand that a successful product strategy is only half the battle. Even the most well-conceived product strategy can fail if it is not supported by an efficient, effective delivery organization. We offer transformation services designed to help businesses translate their product strategy into a high-performing organization.',
    color: '#7c3aed',
    image: '/images/svc-blockchain-1.jpg'
  },
  {
    icon: Cpu,
    title: 'Product Engineering Service',
    description: 'Transforming your product ideas into reality requires innovative design and efficient engineering. We specialize in providing businesses with comprehensive and customized design and engineering solutions to bring their products to market. Our team of experienced engineers collaborates with clients to understand their specific requirements and challenges.',
    color: '#059669',
    image: '/images/svc-mobile-2.jpg'
  }
];

const portfolioItems = [
  {
    title: 'Deutsche Quality Systems India (DQS India) – Audit App',
    image: '/images/portfolio/wp-content/uploads/2023/05/Connection-1.webp',
    category: 'Audit Management'
  },
  {
    title: 'Lakshya Academy: Empowering Education Through Technology',
    image: '/images/portfolio/wp-content/uploads/2023/05/Happy-Harvest-2.webp',
    category: 'Education'
  },
  {
    title: 'MTeducare: Revolutionizing Education Management',
    image: '/images/portfolio/wp-content/uploads/2023/05/Carloana.webp',
    category: 'Education'
  },
  {
    title: 'Organic World',
    image: '/images/portfolio/wp-content/uploads/2023/05/Feature-Image-Happy-H-1-1024x683.webp',
    category: 'E-commerce'
  },
  {
    title: 'PawSpace',
    image: '/images/portfolio/wp-content/uploads/2023/05/Multiple-Screen-Design-copy-1024x853.webp',
    category: 'Pet Care'
  },
  {
    title: 'Municipal Banking',
    image: '/images/portfolio/wp-content/uploads/2023/05/VKonnect-copy.webp',
    category: 'Banking'
  }
];

const challenges = [
  {
    icon: Users,
    title: 'Meeting Customer Needs',
    description: 'One of the main challenges is to design and develop a product that meets the needs of your target customers. To tackle this, we conduct market research, analyze customer feedback, and take a user-centric approach to product development.'
  },
  {
    icon: Clock,
    title: 'Managing Project Timelines',
    description: 'Developing a product can take longer than expected, leading to missed deadlines and cost overruns. We cautiously craft a project management plan in place, use agile methodologies, and have a strong communication system between team members.'
  },
  {
    icon: Settings,
    title: 'Design for Manufacturability',
    description: 'Designing a product that is manufacturable at scale is crucial to ensure profitability. To tackle this, we work closely with manufacturers, involve them in the design process, and consider factors such as cost, materials, and assembly.'
  },
  {
    icon: Zap,
    title: 'Keeping Up with Emerging Technologies',
    description: 'Keeping up with emerging technologies is essential to stay competitive. Our expert product designers and developers stay up-to-date with technological advancements, invest in research and development, and have a flexible product development process.'
  },
  {
    icon: Shield,
    title: 'Ensuring Regulatory Compliance',
    description: 'Depending on the industry, products need to comply with various regulations and standards. Our team thoroughly understand the regulations and standards, involve regulatory experts in the development process, and conduct regular testing and validation.'
  }
];

const processSteps = [
  {
    num: '01',
    title: 'Discovery',
    description: 'Our product design and development process starts with the discovery phase, where we connect with clients to understand their business needs, challenges, and goals. Then conduct research to identify user needs, market trends, and industry best practices.',
    icon: Search
  },
  {
    num: '02',
    title: 'Ideation',
    description: 'Based on the findings from the discovery phase, our professional conducts brainstorming sessions to generate ideas and concepts that will solve the client business problems. They evaluate the ideas based on their feasibility, market demand, and potential profitability.',
    icon: Lightbulb
  },
  {
    num: '03',
    title: 'Design Thinking',
    description: 'We use a design thinking approach to develop user-centric products. We identify user personas, create user journey maps, and conduct usability testing to ensure that the product meets the user needs and expectations.',
    icon: Brain
  },
  {
    num: '04',
    title: 'Prototyping',
    description: 'Once the concept has been developed, we create prototypes to test the product functionality, usability, and design. Our experts use various prototyping tools and techniques, including wireframes, mockups, and functional prototypes.',
    icon: Layers
  },
  {
    num: '05',
    title: 'Development',
    description: 'Once the prototype has been tested and validated, we move to the development phase. We use agile development methodologies to ensure that the product is developed efficiently and cost-effectively, using various programming languages and frameworks.',
    icon: Code
  },
  {
    num: '06',
    title: 'Testing and Validation',
    description: 'Once the product has been developed, we conduct rigorous testing to ensure that it is functioning as intended. We use various testing methodologies, including functional testing, regression testing, and user acceptance testing.',
    icon: TestTube
  },
  {
    num: '07',
    title: 'Launch and Maintenance',
    description: 'Once the product has been tested and validated, we launch the product in the market. Additionally we provide post-launch support and maintenance to ensure that the product continues to meet the user needs and remains competitive.',
    icon: Rocket
  }
];

const techStack = [
  {
    category: 'Design Tools',
    icon: Code,
    items: ['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Framer']
  },
  {
    category: 'Development Frameworks',
    icon: Code,
    items: ['React', 'Next.js', 'Node.js', 'Python', 'Flutter', 'React Native']
  },
  {
    category: 'Database Technologies',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase']
  },
  {
    category: 'Cloud Services',
    icon: Cloud,
    items: ['AWS', 'Google Cloud', 'Azure', 'Vercel', 'DigitalOcean']
  },
  {
    category: 'Collaboration Tools',
    icon: MessageSquare,
    items: ['Slack', 'Jira', 'Trello', 'Notion', 'GitHub']
  },
  {
    category: 'Testing Tools',
    icon: TestTube,
    items: ['Jest', 'Cypress', 'Selenium', 'Playwright', 'Mocha']
  },
  {
    category: 'Project Management',
    icon: FolderKanban,
    items: ['Jira', 'Asana', 'Monday', 'ClickUp', 'Linear']
  }
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'Proven Methodology',
    description: 'ReapMind follows a proven methodology for product design and development that has been refined over many years of experience. This methodology is designed to ensure that every project is completed on time, on budget, and to the highest standards of quality.'
  },
  {
    icon: Zap,
    title: 'Agile Development',
    description: 'We use an agile development methodology that allows for rapid prototyping, iterative development, and continuous improvement. This approach ensures that clients have frequent opportunities to review and provide feedback on the progress of their project.'
  },
  {
    icon: Layers,
    title: 'End-to-End Services',
    description: 'We offer end-to-end product design and development services, from ideation to launch and beyond. This means that we can handle every aspect of the product development process, from conceptualization to market launch and post-launch support.'
  },
  {
    icon: Globe,
    title: 'Global Presence',
    description: 'We have a global presence with offices in the USA, India, UAE, and Australia. This means that we can work with clients from anywhere in the world, and provide localized support and services as needed.'
  },
  {
    icon: Lightbulb,
    title: 'Focus on Innovation',
    description: 'We have a strong focus on innovation and are committed to pushing the boundaries of what is possible in product design and development. We have a culture of experimentation and continuous learning, which enables us to stay at the forefront of the industry.'
  },
  {
    icon: Users,
    title: 'Strong Partnerships',
    description: 'We have strong partnerships with leading technology companies, which allows us to leverage the latest tools and technologies in the product development projects. These partnerships also provide access to a wealth of resources and expertise.'
  }
];

const testimonials = [
  {
    name: 'S. D. Shibulal',
    role: 'Founder: Innovations Investment Management India Private Ltd (INDIA)',
    content: "Reapmind's e-commerce web application development has been instrumental in our success. Their expertise has enabled us to establish a comprehensive e-retail ecosystem, and their contribution has added significant value to our business, enhancing our overall system and driving our success forward. Highly recommended!",
    image: '/images/contact/shibulal.png' as string | null,
    initials: undefined as string | undefined,
  },
  {
    name: 'Roland Owens',
    role: 'Director: Synerphase, Inc., Silicon Valley (USA)',
    content: "At Synerphase, Inc., our collaboration with Reapmind has been transformational. Their unwavering support for technological innovation turned our unique concept into a functional product. Reapmind's expertise and commitment breathed life into our vision. We highly recommend Reapmind to those seeking a partner capable of translating innovative concepts into tangible, efficient solutions.",
    image: '/images/contact/roland.png' as string | null,
    initials: undefined as string | undefined,
  },
  {
    name: 'Dr. Murugan Kandasamy',
    role: 'CEO- Deutsch Quality Systems (India)',
    content: "At Deutsch Quality Systems (India), our collaboration with Reapmind speaks volumes. They developed a unique offline auditor app, a rarity that demanded an exceptional team. Reapmind crafted a solution that not only addressed our specific needs but also added significant value to our business. The app's innovative approach, efficient time-saving, and user-friendly navigation have been remarkable!",
    image: null as string | null,
    initials: 'MK' as string | undefined,
  },
  {
    name: 'Miss Gunjan Jain',
    role: 'Founder and CEO of Internationally Awarded Healthtech Ventures',
    content: "At Vytal, our collaboration with Reapmind on two applications was exceptional. Their dynamic team grasped our unique needs, collaborating closely with our own. They not only created visually appealing apps but also ensured functionality and user-friendliness. Prompt issue resolution, transparent communication, and adaptable professionalism defined our experience. Highly recommend!",
    image: '/images/contact/gunjan.png' as string | null,
    initials: undefined as string | undefined,
  },
  {
    name: 'Mr. Matthew Carter',
    role: 'CTO of Leep Rideshare LLC',
    content: "Partnering with Reapmind was a game-changer for Leep Rideshare. Their deep understanding and close collaboration resulted in appealing and user-friendly apps. Quick issue resolution, clear communication, and a flexible and professional approach made the journey remarkable. We highly recommend Reapmind for its exceptional relationship-driven solutions.",
    image: null as string | null,
    initials: 'MC' as string | undefined,
  },
  {
    name: 'Mr. Jeremy Del Zotto',
    role: 'Founder & CEO - & Connection INC. (Canada)',
    content: "Reapmind has been an outstanding product partner for & Connection INC. Their exceptional technical support has brought to life unique and innovative features that have significantly elevated our app's functionality and user experience. Reapmind's commitment to delivering excellence has been instrumental in our success. Highly recommended for top-notch app development services.",
    image: '/images/contact/jeremy.png' as string | null,
    initials: undefined as string | undefined,
  },
];

const blogPosts = [
  {
    title: 'The Role of AI in Intelligent Document Processing and Management',
    category: 'Artificial Intelligence',
    author: 'ReapMind Innovations',
    date: 'May 6, 2025',
    excerpt: 'Documents are everywhere—invoices, contracts, ID proofs. AI-powered Intelligent Document Processing automates reading, extracting, and organizing information so your teams can focus on what matters.',
    link: '/ai-in-document-processing-benefits-applications',
  },
  {
    title: 'EMR Integration in Healthcare Systems – Benefits, Features, Process, Costs',
    category: 'Technology',
    author: 'Prakhar Lohia',
    date: 'May 5, 2025',
    excerpt: 'EMR integration bridges departments in real time—labs, billing, pharmacy, radiology—enabling better patient care, streamlined workflows, and full HIPAA/HL7/FHIR compliance.',
    link: '/emr-integration-in-healthcare',
  },
  {
    title: 'Cybersecurity in Manufacturing: Building Cyber Resilience for Smart Factories',
    category: 'Technology',
    author: 'Prakhar Lohia',
    date: 'May 1, 2025',
    excerpt: 'Smart factories saw a 300% rise in cyber incidents. Industry 4.0 demands a parallel evolution in OT/IT security—from network segmentation to AI-powered threat detection.',
    link: '/cybersecurity-in-manufacturing-smart-factories',
  },
  {
    title: 'How Much Does It Cost to Develop a Mutual Fund Investment Portal or App?',
    category: 'Mobile App Development Cost',
    author: 'ReapMind Innovations',
    date: 'April 30, 2025',
    excerpt: 'From KYC compliance to real-time portfolio tracking—here is a full breakdown of development costs for a mutual fund investment app, from basic MVP to AI-powered platform.',
    link: '/cost-to-develop-mutual-fund-investment-app',
  },
  {
    title: 'Healthcare Workforce Management Software: A Catalyst for Streamlined Operations',
    category: 'Technology',
    author: 'ReapMind Innovations',
    date: 'April 29, 2025',
    excerpt: 'With 57% of hospitals facing critical staff shortages, intelligent workforce management software is no longer optional—it is the backbone of operational efficiency in healthcare.',
    link: '/healthcare-workforce-management-software',
  },
  {
    title: 'How an AI Chatbot for Higher Education Revolutionizes Student Support',
    category: 'Artificial Intelligence',
    author: 'ReapMind Innovations',
    date: 'April 28, 2025',
    excerpt: 'AI chatbots are rewriting student support—from 24/7 admissions guidance to on-demand mental health assistance—while reducing operational costs for institutions.',
    link: '/ai-chatbot-for-higher-education-student-support',
  },
  {
    title: 'How Much Does It Cost to Develop an AI Agent for the HR Industry?',
    category: 'Artificial Intelligence',
    author: 'Prakhar Lohia',
    date: 'November 5, 2025',
    excerpt: 'AI agents are transforming HR—from screening resumes to answering employee queries 24/7. Here is an honest cost breakdown so you can plan your investment wisely.',
    link: '/ai-agent-development-cost-for-hr-industry',
  },
  {
    title: 'How Much Does It Cost to Develop an AI Agent in 2025?',
    category: 'Artificial Intelligence',
    author: 'Prakhar Lohia',
    date: 'October 31, 2025',
    excerpt: 'Sales agents that never sleep, HR assistants running 24/7, code agents that debug autonomously—here is what it actually costs to build each type of AI agent in 2025.',
    link: '/cost-to-develop-an-ai-agent-in-2025',
  },
  {
    title: 'Why Your Enterprise Needs a Custom Intranet Portal',
    category: 'Offshore Development',
    author: 'Prakhar Lohia',
    date: 'October 14, 2025',
    excerpt: 'Employees waste 2.5 hours a day searching for information. A custom intranet tailored to your workflows, integrations, and culture pays for itself within 12–18 months.',
    link: '/why-your-enterprise-needs-a-custom-intranet-portal',
  },
  {
    title: 'How to Build an AI-Powered Language Learning App: Features, Process & Costs (2025 Guide)',
    category: 'Artificial Intelligence',
    author: 'ReapMind Innovations',
    date: 'August 14, 2025',
    excerpt: 'The language learning market hits $25B by 2028. This guide covers every step—features, tech stack, AI integration, costs ($30k–$60k+), and monetization strategies.',
    link: '/how-to-build-an-ai-powered-language-learning-app-features-process-costs-2025-guide',
  },
];

const locations = [
  {
    city: 'Mumbai',
    address: 'Kalpataru Plaza, 503, Chincholi Bunder Rd, Malad, Nadiyawala Colony 2, W, Mumbai, Maharashtra 400064'
  },
  {
    city: 'Bangalore',
    address: '175, Bannerghatta Main Rd, Dollars Colony, Phase 4, J. P. Nagar, Bengaluru, Karnataka 560076'
  },
  {
    city: 'Development Center',
    address: '4th Floor, Business Hub, IDFC Bank, 401, Sykes Extension, Kolhapur, Maharashtra, 416001'
  },
  {
    city: 'USA',
    address: 'Atlanta, Georgia, United States of America (USA)'
  }
];

// ─── NEW DATA ARRAYS ──────────────────────────────────────────────────────────

const stats = [
  { value: '250+', label: 'Projects Delivered' },
  { value: '50+', label: 'Expert Engineers' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '12+', label: 'Years Experience' },
];

const trustedLogos = [
  { name: 'Bosch', src: '/images/logos/bosch.svg' },
  { name: 'Oracle', src: '/images/logos/oracle.svg' },
  { name: 'Siemens', src: '/images/logos/siemens.svg' },
  { name: 'Hyundai', src: '/images/logos/hyundai.svg' },
  { name: 'ABB', src: '/images/logos/abb.svg' },
];

const industries = [
  { icon: Building2,   title: 'Banking / Finance',   link: '/contact-us' },
  { icon: ShoppingCart, title: 'Ecommerce',           link: '/ecommerce-business-solution' },
  { icon: GraduationCap, title: 'Education',          link: '/galileo-smart-school-management' },
  { icon: Car,          title: 'Travel / Transport',  link: '/transport-booking-software' },
  { icon: Heart,        title: 'Healthcare',          link: '/healthcare-app-development' },
  { icon: Newspaper,    title: 'Media',               link: '/short-video-app-development-platform' },
];

const faqs = [
  {
    question: 'What is product design and development?',
    answer: 'Product design and development is the end-to-end process of taking a product from ideation to market. It encompasses user research, concept development, prototyping, engineering, testing, and launch — ensuring the final product solves real user problems while being technically feasible and commercially viable.'
  },
  {
    question: 'How long does the product design and development process typically take?',
    answer: 'The timeline varies based on the product complexity. A simple MVP can take 2–3 months, while a full-featured product typically takes 6–12 months. At ReapMind, we define clear milestones and use agile sprints to keep projects on track and transparent throughout every phase.'
  },
  {
    question: 'What industries does ReapMind serve?',
    answer: 'ReapMind has delivered products across banking & finance, healthcare, education, e-commerce, travel & transport, and media. Our cross-domain experience lets us apply proven patterns from one industry to solve novel challenges in another.'
  },
  {
    question: 'How does ReapMind ensure the quality of the product?',
    answer: 'Quality is embedded at every stage: we conduct design reviews, automated and manual QA testing, user acceptance testing, and security audits before any release. Post-launch we monitor performance and ship fixes and improvements in continuous delivery cycles.'
  },
  {
    question: 'What is the cost of product design and development?',
    answer: 'Costs depend on scope, complexity, and team composition. A discovery-phase project may start from $5,000, while a fully engineered product platform can range from $50,000 upward. We provide detailed cost and time estimates after an initial consultation so there are no surprises.'
  },
  {
    question: 'Can ReapMind help with an existing product that needs improvement?',
    answer: 'Absolutely. We regularly engage on product modernisation, UX redesigns, performance optimisation, and feature expansion for existing digital products. We start with a thorough audit to identify gaps and prioritise improvements for maximum impact.'
  },
];

const trustBadges = [
  { name: 'Clutch', src: '/images/badges/clutch.svg' },
  { name: 'GoodFirms', src: '/images/badges/goodfirms.svg' },
  { name: 'Yablo', src: '/images/badges/yablo.svg' },
  { name: 'ISO Certified', src: '/images/badges/iso.svg' },
];

// ─────────────────────────────────────────────────────────────────────────────

function TestimonialAvatar({
  image, initials, name, size,
}: {
  image: string | null;
  initials?: string;
  name: string;
  size: 'lg' | 'sm';
}) {
  const dim   = size === 'lg' ? 'w-24 h-24' : 'w-10 h-10';
  const text  = size === 'lg' ? 'text-2xl'  : 'text-sm';
  const radius = size === 'lg' ? 'rounded-2xl' : 'rounded-xl';
  const label = initials ?? name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  if (image) {
    return (
      <div className={`relative ${dim} ${radius} overflow-hidden shrink-0`}>
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
    );
  }
  return (
    <div
      className={`${dim} ${radius} flex items-center justify-center font-bold ${text} shrink-0 select-none`}
      style={{ background: 'var(--accent-soft)', color: 'var(--accent-text)' }}
      aria-label={name}
    >
      {label}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export default function ProductDesignPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <main className="min-h-screen bg-background">

      {/* ─── HERO SECTION ─────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-brand-navy"
        style={{ backgroundImage: 'linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-navy-deep) 100%)' }}
      >
        {/* decorative blobs */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div
            className="absolute top-20 left-20 w-72 h-72 rounded-full animate-pulse"
            style={{ background: 'var(--brand-blue)', filter: 'blur(100px)' }}
          />
          <div
            className="absolute bottom-20 right-20 w-96 h-96 rounded-full animate-pulse"
            style={{ background: 'var(--brand-cyan)', filter: 'blur(120px)', animationDelay: '1s' }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* eyebrow badge */}
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border text-xs font-bold tracking-[0.2em] uppercase"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(8px)',
                  borderColor: 'rgba(255,255,255,0.2)',
                  color: 'var(--brand-sky)'
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: 'var(--brand-cyan-bright)' }}
                />
                Product Design &amp; Development
              </motion.span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black !text-white leading-tight mb-6">
                Top Product Design and
                <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(90deg, var(--brand-cyan-bright), var(--brand-sky))' }}
                >
                  Development Company In India
                </span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Set yourself to bring your product ideas to life with ReapMind, your one-stop shop for innovative product
                design and development. Our team of experts is committed to putting innovation, creativity, and
                problem-solving at the forefront of each project.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, var(--brand-cyan), var(--brand-blue))',
                    color: '#fff',
                    boxShadow: '0 4px 20px var(--glow-cyan)'
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px var(--glow-cyan)';
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px var(--glow-cyan)';
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                  }}
                >
                  Reach out to get started <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full transition-all duration-300 border"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(8px)',
                    borderColor: 'rgba(255,255,255,0.2)',
                    color: '#fff'
                  }}
                >
                  Have an Idea? Contact Us
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-square max-w-lg mx-auto">
                <Image src="/images/company-workspace.png" alt="Product Design Workspace" fill className="object-cover" />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(0,43,73,0.5), transparent)' }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* wave divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-20 md:h-32">
            <path d="M0,64 C480,150 960,-20 1440,64 L1440,120 L0,120 Z" fill="var(--background)" />
          </svg>
        </div>
      </section>

      {/* ─── STATS + TRUSTED LOGOS ─────────────────────────────────── */}
      <section className="py-12 bg-background border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          {/* Celebrating Success Stories header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--accent-text)' }}>
              Celebrating Success Stories
            </p>
            <h3 className="text-xl font-black" style={{ color: 'var(--heading)' }}>
              Empowering Our Clients to Achieve Unprecedented Insights
            </h3>
          </motion.div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-black stat-value mb-1">{stat.value}</div>
                <div className="text-sm font-medium" style={{ color: 'var(--muted-foreground)' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Trusted by logos */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-14"
          >
            {['Bosch', 'Oracle', 'Siemens', 'Hyundai', 'ABB'].map((name) => (
              <span
                key={name}
                className="text-lg font-black tracking-wide"
                style={{ color: 'var(--muted-foreground)', opacity: 0.6 }}
              >
                {name.toUpperCase()}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CONCEPT TO REALITY ────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="eyebrow mb-4 block">Our Approach</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6" style={{ color: 'var(--heading)' }}>
              From Concept to Reality
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              Revolutionizing the product design and development industry
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div
              className="section-card rounded-3xl p-8 md:p-12"
              style={{ background: 'linear-gradient(135deg, var(--section-tint), var(--accent-soft))' }}
            >
              {[
                'At ReapMind, we believe that excellent ideas merit the chance to become a reality. As a result of this, we as a reputable product design and development company in India, USA and UK specialize in transforming concepts into actual products that are not only functional but also aesthetically pleasing and easy to use.',
                'By combining the most recent technology and methodologies with our extensive knowledge and experience, we are transforming the product design and development industry. We are dedicated to achieving your vision and exceeding your expectations at every stage, from ideation and prototype to design and engineering.',
                'We are not just another product design and development company in India that develops products. We are a group of creative problem solvers who are enthusiastic about making your ideas a reality. Every product, in our eyes, has the ability to transform lives and upend entire markets, and we are dedicated to making that happen for you.',
                'Our user-centric approach to product design and development ensures that we are resolving real-world problems and satisfying the demands and preferences of your target market. We take the time to fully comprehend the market and user base for your product, and we use that understanding to develop products that are genuinely innovative and paradigm-shifting.'
              ].map((para, i) => (
                <p key={i} className="text-lg leading-relaxed mb-6 last:mb-0" style={{ color: 'var(--foreground)' }}>
                  {para}
                </p>
              ))}

              <div className="mt-8">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, var(--brand-cyan), var(--brand-blue))', color: '#fff' }}
                >
                  Request Callback <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CAPABILITIES ──────────────────────────────────────────── */}
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="eyebrow mb-4 block">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6" style={{ color: 'var(--heading)' }}>
              Our Product Design and
              <br />
              Engineering Capabilities
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              By fostering the expansion of company cultures, we dismantle engineering and technological silos. Our
              technological specialists are aware of opportunities and constraints, our behavioral experts are
              knowledgeable about change management, and we produce realistic business models.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="section-card section-card-interactive rounded-3xl overflow-hidden"
                  style={{ background: 'var(--card)' }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image src={capability.image} alt={capability.title} fill className="object-cover" />
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(0,43,73,0.5), transparent)' }}
                    />
                  </div>
                  <div className="p-8">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 -mt-12 relative z-10"
                      style={{ background: `${capability.color}20` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: capability.color }} />
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--heading)' }}>
                      {capability.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                      {capability.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="eyebrow mb-4 block">Our Work</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6" style={{ color: 'var(--heading)' }}>
              Our Recent Works
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,43,73,0.75) 0%, rgba(0,43,73,0.15) 60%, transparent 100%)'
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span
                    className="text-xs font-bold uppercase tracking-wider mb-2"
                    style={{ color: 'var(--brand-cyan-bright)' }}
                  >
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, var(--brand-cyan), var(--brand-blue))', color: '#fff' }}
            >
              Get a Callback from Expert <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── CHALLENGES ────────────────────────────────────────────── */}
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="eyebrow mb-4 block">Problem Solving</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6" style={{ color: 'var(--heading)' }}>
              Typical Product Design and
              <br />
              Development Challenges We Tackle
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="section-card section-card-interactive rounded-2xl p-6"
                  style={{ background: 'var(--card)' }}
                >
                  {/* icon-box utility from global CSS */}
                  <div className="icon-box w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--heading)' }}>
                    {challenge.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                    {challenge.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-14"
          >
            <span className="eyebrow mb-4 block">Industry Focus</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--heading)' }}>
              Catering to Diverse Sectors: Our Targeted Industry Solutions
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              We architect and deliver digital products that fit the unique regulatory, workflow, and user demands of each industry we serve.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto mb-10">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                >
                  <Link
                    href={industry.link}
                    className="group flex flex-col items-center gap-3 p-5 rounded-2xl text-center
                               section-card section-card-interactive transition-all duration-300"
                    style={{ background: 'var(--card)' }}
                  >
                    <div className="icon-box w-14 h-14 rounded-xl flex items-center justify-center
                                    group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-sm font-bold leading-tight" style={{ color: 'var(--heading)' }}>
                      {industry.title}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center text-sm max-w-xl mx-auto"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Not seeing your industry? We adapt our product design & development expertise to virtually any domain.{' '}
            <Link href="/contact-us" className="accent-link">Get in touch</Link>.
          </motion.p>
        </div>
      </section>

      {/* ─── PROCESS ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="eyebrow mb-4 block">Our Process</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6" style={{ color: 'var(--heading)' }}>
              Product Development Lifecycle
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col gap-6 mb-8 md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* step number badge */}
                  <div className="shrink-0">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-xl text-white shadow-lg"
                      style={{ background: 'linear-gradient(135deg, var(--brand-cyan), var(--brand-blue))' }}
                    >
                      {step.num}
                    </div>
                  </div>

                  <div
                    className="flex-1 section-card rounded-2xl p-6"
                    style={{ background: 'linear-gradient(135deg, var(--section-tint), var(--accent-soft))' }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {/* icon-box utility */}
                      <div className="icon-box w-10 h-10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold" style={{ color: 'var(--heading)' }}>
                        {step.title}
                      </h3>
                    </div>
                    <p className="leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-brand-navy">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase mb-4 block text-brand-light">
              Technology
            </span>
            {/* !text-white overrides the global h2 { color: var(--heading) } rule */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 !text-white">
              Advanced Tech Stack We Include
            </h2>
            <p className="text-lg leading-relaxed text-white/80">
              The specific tech stack used by our team may depend on factors such as the product being developed, the
              team skillset, and the client requirements. Usually we use the following tools for different purposes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {techStack.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm
                             hover:border-brand/50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-brand-bright" />
                    {/* !text-white overrides global h3 color */}
                    <h3 className="text-lg font-bold !text-white">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map(item => (
                      <span
                        key={item}
                        className="text-[0.7rem] font-semibold px-3 py-1.5 rounded-full
                                   bg-white/10 text-white/85 border border-white/15"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─────────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="eyebrow mb-4 block">Why Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6" style={{ color: 'var(--heading)' }}>
              Why Choose ReapMind as Your
              <br />
              Desired Mobile App Development Partner?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="section-card section-card-interactive rounded-3xl p-8"
                  style={{ background: 'linear-gradient(135deg, var(--section-tint), var(--accent-soft))' }}
                >
                  {/* icon-box utility */}
                  <div className="icon-box w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--heading)' }}>
                    {item.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, var(--brand-cyan), var(--brand-blue))', color: '#fff' }}
            >
              Book a Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIALS (carousel) ───────────────────────────────── */}
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-14"
          >
            <span className="eyebrow mb-4 block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--heading)' }}>
              What Clients Say About Us
            </h2>
          </motion.div>

          {/* Featured large testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-5xl mx-auto mb-10"
          >
            <div
              className="section-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start"
              style={{ background: 'var(--card)' }}
            >
              <div className="shrink-0">
                <TestimonialAvatar
                  image={testimonials[activeTab].image}
                  initials={testimonials[activeTab].initials}
                  name={testimonials[activeTab].name}
                  size="lg"
                />
                {/* Stars */}
                <div className="flex gap-1 mt-3 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'var(--brand-cyan)' }} />
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <Quote className="w-10 h-10 mb-4 opacity-30" style={{ color: 'var(--accent)' }} />
                <p className="text-lg leading-relaxed mb-6 italic" style={{ color: 'var(--foreground)' }}>
                  &ldquo;{testimonials[activeTab].content}&rdquo;
                </p>
                <div>
                  <h4 className="text-lg font-bold" style={{ color: 'var(--heading)' }}>
                    {testimonials[activeTab].name}
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                    {testimonials[activeTab].role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Thumbnail navigation */}
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveTab(t => (t - 1 + testimonials.length) % testimonials.length)}
                className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-colors"
                style={{ borderColor: 'var(--border)', background: 'var(--card)', color: 'var(--muted-foreground)' }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-3 overflow-x-auto flex-1 pb-1">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    onClick={() => setActiveTab(i)}
                    className="shrink-0 flex flex-col items-center gap-2 p-3 rounded-2xl transition-all duration-200"
                    style={{
                      background: i === activeTab ? 'var(--accent-soft)' : 'var(--card)',
                      border: `1px solid ${i === activeTab ? 'var(--accent)' : 'var(--border)'}`,
                      minWidth: '80px'
                    }}
                  >
                    <TestimonialAvatar
                      image={t.image}
                      initials={t.initials}
                      name={t.name}
                      size="sm"
                    />
                    <span
                      className="text-[10px] font-semibold text-center leading-tight line-clamp-2"
                      style={{ color: i === activeTab ? 'var(--accent-text)' : 'var(--muted-foreground)' }}
                    >
                      {t.name.split(' ').slice(-1)[0]}
                    </span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setActiveTab(t => (t + 1) % testimonials.length)}
                className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-colors"
                style={{ borderColor: 'var(--border)', background: 'var(--card)', color: 'var(--muted-foreground)' }}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLOG ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="eyebrow mb-4 block">Insights</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6" style={{ color: 'var(--heading)' }}>
              Latest Insights
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title + index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="section-card section-card-interactive rounded-3xl p-8"
                style={{ background: 'linear-gradient(135deg, var(--section-tint), var(--accent-soft))' }}
              >
                <span
                  className="text-xs font-bold uppercase tracking-wider mb-3 block"
                  style={{ color: 'var(--accent-text)' }}
                >
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--heading)' }}>
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--muted-foreground)' }}>
                  {post.excerpt}
                </p>
                <div
                  className="flex items-center justify-between text-sm mb-6"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
                <Link
                  href={post.link}
                  className="accent-link inline-flex items-center gap-2"
                >
                  Read more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14"
          >
            <span className="eyebrow mb-4 block">Support</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--heading)' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              Everything you need to know about our product design &amp; development services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="section-card rounded-2xl overflow-hidden"
                style={{ background: 'var(--card)' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-bold text-base" style={{ color: 'var(--heading)' }}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className="w-5 h-5 shrink-0 transition-transform duration-300"
                    style={{
                      color: 'var(--accent)',
                      transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 border-t" style={{ borderColor: 'var(--border)' }}>
                    <p className="pt-4 leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ───────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-20 md:py-32 bg-brand-navy"
        style={{ backgroundImage: 'linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-navy-deep) 100%)' }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase mb-4 block text-brand-light">
              Contact
            </span>
            {/* !text-white overrides global h2 { color: var(--heading) } */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 !text-white">
              Get a Free Consultation from our Technology Expert
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-white/80">
              Trusted by Global Companies. Contact Us Today!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* left column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* !text-white overrides global h3 color */}
              <h3 className="text-2xl font-bold mb-6 !text-white">Explore More</h3>
              <p className="leading-relaxed mb-8 text-white/80">
                With our innovative technology solutions, you can experience the future of technology today and stay ahead
                of the curve in the rapidly evolving digital landscape.
              </p>

              <h3 className="text-2xl font-bold mb-6 !text-white">Get In Touch</h3>
              <div className="space-y-4 mb-8">
                <a
                  href="tel:+919637828283"
                  className="flex items-center gap-3 text-white/80 hover:text-brand-light transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +91-9637828283
                </a>
                <a
                  href="mailto:info@reapmind.com"
                  className="flex items-center gap-3 text-white/80 hover:text-brand-light transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  info@reapmind.com
                </a>
              </div>

              <h3 className="text-2xl font-bold mb-6 !text-white">Our Locations</h3>
              <div className="space-y-4">
                {locations.map(location => (
                  <div key={location.city} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 shrink-0 text-brand-bright" />
                    <div>
                      {/* !text-brand-light overrides global h4 color */}
                      <h4 className="font-bold !text-brand-light">{location.city}</h4>
                      <p className="text-sm text-white/80">{location.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* right column — glass card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl p-8 border border-white/20 bg-white/10 backdrop-blur-xl"
            >
              {/* !text-brand-light overrides global h3 color */}
              <h3 className="text-2xl font-bold mb-6 !text-brand-light">
                Hold On! Your Success Story Begins Here... 👋
              </h3>
              <p className="mb-6 font-semibold text-white/80">
                Get Free Expert Advice Before You Go
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Strategic Development Plan',
                  'Cost & Time Estimates',
                  'Solutions to Scale Your Business',
                  'Future-Ready Technology Suggestions'
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-white/85">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-brand-bright" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl p-6 bg-white/[0.06] border border-white/10">
                {/* !text-brand-light overrides global h4 color */}
                <h4 className="font-bold mb-4 !text-brand-light">
                  Let Spark A Transformative Conversation
                </h4>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Contact Us',
                      body: 'Fill out the form to schedule a personalized consultation with our experts.'
                    },
                    {
                      title: 'Project Kickoff',
                      body: 'Sign the contract and form a partnership with us to kick-start your project.'
                    }
                  ].map(step => (
                    <div key={step.title}>
                      {/* !text-white overrides global h5 color */}
                      <h5 className="font-semibold mb-1 !text-white">{step.title}</h5>
                      <p className="text-sm text-white/75">{step.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 max-w-6xl mx-auto"
          >
            <p className="text-center text-xs font-bold tracking-[0.18em] uppercase mb-6 text-white/50">
              Recognised &amp; Trusted By
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {['Clutch', 'GoodFirms', 'Yablo', 'ISO 9001', 'NASSCOM'].map((badge) => (
                <div
                  key={badge}
                  className="px-5 py-2.5 rounded-xl border border-white/15 bg-white/8 backdrop-blur-sm"
                >
                  <span className="text-sm font-black text-white/70 tracking-wide">{badge}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}