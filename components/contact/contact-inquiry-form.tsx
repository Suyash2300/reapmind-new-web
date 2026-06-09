"use client";

import { FormEvent, useState } from "react";
import { HydrationButton } from "@/components/ui/hydration-button";
import {
  contactDirect,
  contactQuoteForm,
} from "@/lib/contact-page";

const countryCodes = [
  { label: "India (+91)", value: "+91" },
  { label: "USA (+1)", value: "+1" },
  { label: "UK (+44)", value: "+44" },
  { label: "UAE (+971)", value: "+971" },
  { label: "Singapore (+65)", value: "+65" },
] as const;

type ContactInquiryFormProps = {
  submitLabel?: string;
  showMessage?: boolean;
  id?: string;
  className?: string;
};

const inputClass =
  "w-full min-h-11 rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none transition-[border-color,box-shadow] placeholder:text-muted focus:border-primary/50 focus:ring-2 focus:ring-primary/20";

const labelClass = "mb-1.5 block text-sm font-medium text-secondary";

export function ContactInquiryForm({
  submitLabel = contactQuoteForm.submitLabel,
  showMessage = true,
  id,
  className = "",
}: ContactInquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    // Placeholder until backend / CRM integration — mirrors live-site mail fallback.
    await new Promise((resolve) => window.setTimeout(resolve, 600));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={`rounded-2xl border border-primary/20 bg-white p-6 sm:p-8 ${className}`}
      >
        <h3 className="text-h4 font-bold text-foreground">Thank you!</h3>
        <p className="mt-2 text-para leading-relaxed text-secondary">
          We&apos;ve received your inquiry and will reach out within 24 hours.
          You can also email us directly at{" "}
          <a
            href={`mailto:${contactDirect.email}`}
            className="font-semibold text-primary hover:underline"
          >
            {contactDirect.email}
          </a>{" "}
          or call{" "}
          <a
            href={contactDirect.phoneHref}
            className="font-semibold text-primary hover:underline"
          >
            {contactDirect.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={`space-y-4 ${className}`}
      noValidate
      suppressHydrationWarning
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Your full name"
            suppressHydrationWarning
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@company.com"
            suppressHydrationWarning
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-phone" className={labelClass}>
          Phone Number
        </label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <select
            id="contact-country"
            name="countryCode"
            defaultValue="+91"
            className={`${inputClass} sm:max-w-[9.5rem]`}
            aria-label="Country code"
            suppressHydrationWarning
          >
            {countryCodes.map((code) => (
              <option key={code.value} value={code.value}>
                {code.label}
              </option>
            ))}
          </select>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass}
            placeholder="Phone number"
            suppressHydrationWarning
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-budget" className={labelClass}>
            Budget
          </label>
          <select
            id="contact-budget"
            name="budget"
            required
            className={inputClass}
            defaultValue=""
            suppressHydrationWarning
          >
            <option value="" disabled>
              Select budget range
            </option>
            {contactQuoteForm.budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="contact-interest" className={labelClass}>
            I Prefer To
          </label>
          <select
            id="contact-interest"
            name="interest"
            required
            className={inputClass}
            defaultValue=""
            suppressHydrationWarning
          >
            <option value="" disabled>
              Select service interest
            </option>
            {contactQuoteForm.interestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {showMessage ? (
        <div>
          <label htmlFor="contact-message" className={labelClass}>
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            className={`${inputClass} min-h-[7rem] resize-y`}
            placeholder="Tell us about your project goals..."
            suppressHydrationWarning
          />
        </div>
      ) : null}

      <HydrationButton
        type="submit"
        disabled={loading}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {loading ? "Sending..." : submitLabel}
      </HydrationButton>

      <p className="text-sm text-muted">
        {contactQuoteForm.fallbackNote}{" "}
        <a
          href={`mailto:${contactDirect.email}`}
          className="text-primary hover:underline"
        >
          {contactDirect.email}
        </a>
        .
      </p>
    </form>
  );
}
