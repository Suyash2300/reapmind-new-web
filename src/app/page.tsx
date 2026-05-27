import { Hero } from "@/components/home/hero";
import { HomeSections } from "@/components/home/home-sections";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Hero />
      <HomeSections />
    </div>
  );
}
