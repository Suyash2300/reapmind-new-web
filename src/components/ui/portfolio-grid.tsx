import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { SHARED_PORTFOLIO_ITEMS } from '@/data/shared-page-data';

export function PortfolioGrid() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading badge="Our Work" title="Built & Shipped" align="left" />
          <Link href="/portfolio-reapmind" className="btn-secondary inline-flex shrink-0">
            View all projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SHARED_PORTFOLIO_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="section-card section-card-interactive rounded-3xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(0,33,71,0.6) 0%, transparent 60%)' }} />
                <span className="absolute bottom-3 left-4 text-xs font-bold text-white/80 tracking-wider uppercase">
                  {item.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-sm leading-snug" style={{ color: 'var(--heading)' }}>{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
