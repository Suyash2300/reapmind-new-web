import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

let registered = false;

/** Call once on the client before GSAP scroll timelines (SmoothScrollProvider does this). */
export function registerGsapPlugins() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  registered = true;
}

export { gsap, ScrollTrigger };
