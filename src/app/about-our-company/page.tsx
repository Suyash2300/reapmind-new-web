import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Company | ReapMind",
  description: "Learn about ReapMind, our mission, vision, and the team driving digital transformation.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background px-6 pb-24 pt-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
          About ReapMind
        </h1>
        <p className="mb-12 text-xl text-muted-foreground">
          We are a team of passionate technologists dedicated to accelerating digital
          transformation for businesses worldwide.
        </p>

        <div className="prose max-w-none text-left">
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower enterprises and startups with cutting-edge technology, enabling
                them to achieve unprecedented growth and efficiency in the digital age.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the world&apos;s most trusted digital transformation partner, renowned
                for our innovation, quality, and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
