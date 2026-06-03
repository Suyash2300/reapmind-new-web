'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, CheckCircle2, User, Mail, Phone, MessageSquare, Briefcase, Code } from 'lucide-react';
import { fadeLeft, fadeRight } from '@/lib/scroll-motion';

const ENGAGEMENT_OPTIONS = ['Full Time (8 hrs/day)', 'Part Time (4 hrs/day)', 'Hourly Basis'];
const EXPERIENCE_OPTIONS = ['Junior (1–3 yrs)', 'Mid Level (3–5 yrs)', 'Senior (5+ yrs)'];
const DEV_TYPES = [
  'Android Developer',
  'iOS Developer',
  'Flutter Developer',
  'React Native Developer',
  'Full Stack Developer',
  'Salesforce Developer',
  'AngularJS Developer',
  'ReactJS Developer',
  'AWS Developer',
  'Swift Developer',
  'Kotlin Developer',
  'Python Developer',
  'JavaScript Developer',
  'NodeJS Developer',
  'FullStack Developer',
];

interface HireFormProps {
  /** Pre-fills and tags the submission so ReapMind knows which role was requested */
  devRole?: string;
  /** Hero image shown on the left side of the form */
  image?: string;
}

export function HireAndroidForm({ devRole = 'Android Developer', image = '/images/android-developers.png' }: HireFormProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    devType: devRole,           // pre-filled from prop — client can change if needed
    engagement: '',
    experience: '',
    message: '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Pass all fields as query params to the contact page
    // — ReapMind team can read devType to know exactly who was requested
    const params = new URLSearchParams({
      name: form.name,
      email: form.email,
      phone: form.phone,
      role: form.devType,           // the key field — which developer type
      engagement: form.engagement,
      experience: form.experience,
      message: form.message,
    });
    window.location.href = `/contact-us?${params.toString()}`;
  }

  return (
    <section id="hire-form" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14">
          <span className="eyebrow mb-4 block">Hire Now</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4"
            style={{ color: 'var(--heading)' }}>
            Hire {devRole}s from<br />ReapMind Innovations
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
            Take a look at the simple &amp; straightforward process to hire {devRole}s from ReapMind Innovations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">

          {/* ── left: image + trust badges + quick stats ── */}
          <motion.div {...fadeLeft} className="flex flex-col gap-6">
            <div className="relative rounded-3xl overflow-hidden h-80 lg:h-[460px]">
              <Image
                src={image}
                alt={`Hire ${devRole}s from ReapMind`}
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, transparent 45%, rgba(0,33,71,0.72))' }} />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3">
                {[
                  'Top 1% vetted talent — 5-stage screening',
                  'Matched profiles delivered within 48 hours',
                  'Replace guarantee — no questions asked',
                ].map(t => (
                  <div key={t} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: 'var(--accent)' }} />
                    <span className="text-sm font-semibold text-white">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* quick stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { val: '1000+', label: 'Apps Delivered' },
                { val: '98%',   label: 'Client Satisfaction' },
                { val: '24/7',  label: 'Support' },
              ].map(s => (
                <div key={s.label} className="section-card rounded-2xl p-4 text-center">
                  <p className="text-xl font-black stat-value">{s.val}</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--muted-foreground)' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── right: form ── */}
          <motion.div {...fadeRight}>
            <form onSubmit={handleSubmit}
              className="section-card rounded-3xl p-8 flex flex-col gap-5">
              <div className="mb-1">
                <h3 className="text-xl font-black" style={{ color: 'var(--heading)' }}>
                  Share Your Requirements
                </h3>
                <p className="text-sm mt-1" style={{ color: 'var(--muted-foreground)' }}>
                  Fill in the details and we&apos;ll match you with the right developer within 48 hours.
                </p>
              </div>

              {/* Developer Type — the key field so ReapMind knows who was requested */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold" style={{ color: 'var(--heading)' }}>
                  Developer Type *
                </label>
                <div className="relative">
                  <Code className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                    style={{ color: 'var(--muted-foreground)' }} />
                  <select
                    required
                    name="devType"
                    value={form.devType}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none appearance-none transition-colors"
                    style={{
                      background: 'var(--elevated)',
                      border: '1px solid var(--border)',
                      color: 'var(--foreground)',
                    }}
                  >
                    {DEV_TYPES.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <p className="text-[11px]" style={{ color: 'var(--muted-foreground)' }}>
                  Pre-selected based on this page. Change if you need a different role.
                </p>
              </div>

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold" style={{ color: 'var(--heading)' }}>
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4"
                    style={{ color: 'var(--muted-foreground)' }} />
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none transition-colors"
                    style={{
                      background: 'var(--elevated)',
                      border: '1px solid var(--border)',
                      color: 'var(--foreground)',
                    }}
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold" style={{ color: 'var(--heading)' }}>
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4"
                      style={{ color: 'var(--muted-foreground)' }} />
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none transition-colors"
                      style={{
                        background: 'var(--elevated)',
                        border: '1px solid var(--border)',
                        color: 'var(--foreground)',
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold" style={{ color: 'var(--heading)' }}>
                    Phone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4"
                      style={{ color: 'var(--muted-foreground)' }} />
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none transition-colors"
                      style={{
                        background: 'var(--elevated)',
                        border: '1px solid var(--border)',
                        color: 'var(--foreground)',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Engagement + Experience */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold" style={{ color: 'var(--heading)' }}>
                    Engagement Model *
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                      style={{ color: 'var(--muted-foreground)' }} />
                    <select
                      required
                      name="engagement"
                      value={form.engagement}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none appearance-none transition-colors"
                      style={{
                        background: 'var(--elevated)',
                        border: '1px solid var(--border)',
                        color: form.engagement ? 'var(--foreground)' : 'var(--muted-foreground)',
                      }}
                    >
                      <option value="" disabled>Select model</option>
                      {ENGAGEMENT_OPTIONS.map(o => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold" style={{ color: 'var(--heading)' }}>
                    Experience Level *
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                      style={{ color: 'var(--muted-foreground)' }} />
                    <select
                      required
                      name="experience"
                      value={form.experience}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none appearance-none transition-colors"
                      style={{
                        background: 'var(--elevated)',
                        border: '1px solid var(--border)',
                        color: form.experience ? 'var(--foreground)' : 'var(--muted-foreground)',
                      }}
                    >
                      <option value="" disabled>Select level</option>
                      {EXPERIENCE_OPTIONS.map(o => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Project description */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold" style={{ color: 'var(--heading)' }}>
                  Project Description
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4"
                    style={{ color: 'var(--muted-foreground)' }} />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your app idea, required skills, timeline..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none resize-none transition-colors"
                    style={{
                      background: 'var(--elevated)',
                      border: '1px solid var(--border)',
                      color: 'var(--foreground)',
                    }}
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary w-full justify-center py-3.5 text-sm mt-1">
                Get Matched with a Developer <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-xs text-center" style={{ color: 'var(--muted-foreground)' }}>
                We respond within 48 hours. No spam, ever.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
