'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { TestimonialAvatar } from '@/components/ui/testimonial-avatar';
import { SectionHeading } from '@/components/ui/section-heading';
import { SHARED_TESTIMONIALS } from '@/data/shared-page-data';

export function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const t = SHARED_TESTIMONIALS[active];

  return (
    <section className="py-20 md:py-32" style={{ background: 'var(--section-tint)' }}>
      <div className="container mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="What Clients Say About Us"
          className="mb-14"
        />

        {/* featured card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto mb-10"
        >
          <div className="section-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start"
            style={{ background: 'var(--card)' }}>
            <div className="shrink-0">
              <TestimonialAvatar image={t.image} initials={t.initials} name={t.name} size="lg" />
              <div className="flex gap-1 mt-3 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'var(--brand-cyan)' }} />
                ))}
              </div>
            </div>
            <div className="flex-1">
              <Quote className="w-10 h-10 mb-4 opacity-20" style={{ color: 'var(--accent)' }} />
              <p className="text-lg leading-relaxed mb-6 italic" style={{ color: 'var(--foreground)' }}>
                &ldquo;{t.content}&rdquo;
              </p>
              <div>
                <h4 className="text-base font-bold" style={{ color: 'var(--heading)' }}>{t.name}</h4>
                <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{t.role}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* avatar nav */}
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <button
            onClick={() => setActive(a => (a - 1 + SHARED_TESTIMONIALS.length) % SHARED_TESTIMONIALS.length)}
            className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-colors"
            style={{ borderColor: 'var(--border)', background: 'var(--card)', color: 'var(--muted-foreground)' }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-3 overflow-x-auto flex-1 pb-1">
            {SHARED_TESTIMONIALS.map((item, i) => (
              <button
                key={item.name}
                onClick={() => setActive(i)}
                className="shrink-0 flex flex-col items-center gap-2 p-3 rounded-2xl transition-all duration-200"
                style={{
                  background: i === active ? 'var(--accent-soft)' : 'var(--card)',
                  border: `1px solid ${i === active ? 'var(--accent)' : 'var(--border)'}`,
                  minWidth: '80px',
                }}
                aria-label={`View testimonial from ${item.name}`}
              >
                <TestimonialAvatar image={item.image} initials={item.initials} name={item.name} size="sm" />
                <span
                  className="text-[10px] font-semibold text-center leading-tight line-clamp-2"
                  style={{ color: i === active ? 'var(--accent-text)' : 'var(--muted-foreground)' }}
                >
                  {item.name.split(' ').slice(-1)[0]}
                </span>
              </button>
            ))}
          </div>
          <button
            onClick={() => setActive(a => (a + 1) % SHARED_TESTIMONIALS.length)}
            className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-colors"
            style={{ borderColor: 'var(--border)', background: 'var(--card)', color: 'var(--muted-foreground)' }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
