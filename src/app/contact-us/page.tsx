import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | ReapMind",
  description: "Get in touch with ReapMind for a free consultation on your next digital transformation project.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background px-6 pb-24 pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Ready to start your next project? Get in touch with our team of experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-surface p-8">
            <h3 className="mb-6 text-2xl font-bold text-foreground">Our Office</h3>
            <p className="mb-8 text-muted-foreground">
              175, Bannerghatta Main Rd, Dollars Colony,
              <br />
              J. P. Nagar, Bangalore, India
            </p>

            <h3 className="mb-6 text-2xl font-bold text-foreground">Contact Details</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Phone:{" "}
                <a
                  href="tel:+919637828283"
                  className="text-accent transition-colors hover:text-brand"
                >
                  +91 9637828283
                </a>
              </p>
              <p className="text-muted-foreground">
                Email:{" "}
                <a
                  href="mailto:info@reapmind.com"
                  className="text-accent transition-colors hover:text-brand"
                >
                  info@reapmind.com
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-surface p-8">
            <h3 className="mb-6 text-2xl font-bold text-foreground">Send us a message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="button"
                className="btn-primary w-full justify-center py-3"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
