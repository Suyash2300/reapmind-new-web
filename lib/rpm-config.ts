// Stub config — replace with real data when building the RPM page
const mockItem = { id: '1', title: '', name: '', description: '', image: '', src: '', href: '', icon: '', text: '', role: '', link: '', label: '', items: [{ image: '' }] };

export const rpmConfig: any = {
  meta: {
    title: 'Remote Patient Monitoring System | ReapMind',
    description: '',
    canonicalPath: '/remote-patient-monitoring-system',
  },

  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Remote Patient Monitoring System', href: '/remote-patient-monitoring-system' },
  ],

  hero: {
    heading: 'Remote Patient Monitoring System',
    title: 'Remote Patient Monitoring System',
    description: '',
    primaryCta: 'Get a Free Consultation',
    secondaryCta: 'View Portfolio',
    // legacy shape kept for compatibility
    primaryCTA: { text: 'Get a Free Consultation', href: '/contact-us' },
    secondaryCTA: { text: 'View Portfolio', href: '#portfolio' },
    image: '/rpm-hero.jpg',
    points: [],
  },

  clientLogos: {
    title: 'Trusted by leading healthcare organisations',
    logos: [mockItem],
  },

  features: {
    title: 'Key Features',
    envisionedTitle: '',
    intro: '',
    image: '',
    items: [mockItem],
  },

  interfaces: [mockItem],

  portfolio: [mockItem],

  process: {
    title: 'Our Development Process',
    subtitle: '',
    tagline: '',
    cta: 'Start Your Project',
    steps: ['Mock step'],
  },

  sectors: {
    title: 'Industries We Serve',
    items: [mockItem],
  },

  benefits: {
    title: 'Benefits',
    description: '',
    items: [mockItem],
  },

  whyUs: {
    title: 'Why Choose ReapMind',
    description: '',
    items: [mockItem],
  },

  testimonials: {
    title: 'What Our Clients Say',
    items: [mockItem],
  },

  insights: {
    title: 'Latest Insights',
    articles: [mockItem],
  },

  consultation: {
    title: 'Ready to Build Your RPM Solution?',
    subtitle: 'Talk to our healthcare tech experts today.',
  },

  ctas: {
    afterPortfolio: { title: 'Let\u2019s Build Together', primaryLabel: 'Get a Free Consultation' },
    afterProcess:   { title: 'Ready to Start?',         primaryLabel: 'Schedule a Call' },
    afterWhyUs:     { title: 'Partner with ReapMind',   primaryLabel: 'Contact Us' },
  },
};
