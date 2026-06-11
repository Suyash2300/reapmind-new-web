import fs from "fs";

const files = [
  "lib/flutter-hire-config.ts",
  "lib/ios-hire-config.ts",
  "lib/android-hire-config.ts",
  "lib/angular-hire-config.ts",
  "lib/react-hire-config.ts",
  "lib/nodejs-hire-config.ts",
  "lib/python-hire-config.ts",
  "lib/javascript-hire-config.ts",
  "lib/kotlin-hire-config.ts",
  "lib/swift-hire-config.ts",
  "lib/aws-hire-config.ts",
  "lib/salesforce-hire-config.ts",
  "lib/fullstack-hire-config.ts",
  "lib/mvp-config.ts",
  "lib/enterprise-mobility-config.ts",
  "lib/pwa-config.ts",
  "lib/rpm-config.ts",
];

const importLine = 'import { hireTestimonialImages } from "./hire-testimonial-images";\n';

const reps = [
  [/image: "[^"]*testimonial-mirza[^"]*"/g, "image: hireTestimonialImages.mirza"],
  [/image: "[^"]*testimonial-jeremy[^"]*"/g, "image: hireTestimonialImages.jeremy"],
  [/image: "[^"]*testimonial-gunjan[^"]*"/g, "image: hireTestimonialImages.gunjan"],
  [/image: "[^"]*testimonial-roland[^"]*"/g, "image: hireTestimonialImages.roland"],
  [/image: "[^"]*testimonial-shibulal[^"]*"/g, "image: hireTestimonialImages.shibulal"],
  [/image: "[^"]*testimonial-matthew[^"]*"/g, "image: hireTestimonialImages.matthew"],
  [/image: "[^"]*testimonial-murugan[^"]*"/g, "image: hireTestimonialImages.murugan"],
  [/image: "\/mvp\/testimonial-0\.jpg"/g, "image: hireTestimonialImages.gunjan"],
  [/image: "\/mvp\/testimonial-1\.jpg"/g, "image: hireTestimonialImages.matthew"],
  [/image: "\/mvp\/testimonial-2\.jpg"/g, "image: hireTestimonialImages.jeremy"],
  [/image: "\/mvp\/testimonial-sd\.jpg"/g, "image: hireTestimonialImages.shibulal"],
  [/image: "\/mvp\/testimonial-5\.jpg"/g, "image: hireTestimonialImages.roland"],
  [/image: "\/mvp\/testimonial-6\.jpg"/g, "image: hireTestimonialImages.murugan"],
  [/image: "\/enterprise-mobility\/testimonial-0\.jpg"/g, "image: hireTestimonialImages.gunjan"],
  [/image: "\/enterprise-mobility\/testimonial-1\.jpg"/g, "image: hireTestimonialImages.matthew"],
  [/image: "\/enterprise-mobility\/testimonial-2\.jpg"/g, "image: hireTestimonialImages.jeremy"],
  [/image: "\/enterprise-mobility\/testimonial-sd\.jpg"/g, "image: hireTestimonialImages.shibulal"],
  [/image: "\/enterprise-mobility\/testimonial-5\.jpg"/g, "image: hireTestimonialImages.roland"],
  [/image: "\/enterprise-mobility\/testimonial-6\.jpg"/g, "image: hireTestimonialImages.murugan"],
  [/image: "\/pwa\/testimonial-0\.jpg"/g, "image: hireTestimonialImages.gunjan"],
  [/image: "\/pwa\/testimonial-1\.jpg"/g, "image: hireTestimonialImages.matthew"],
  [/image: "\/pwa\/testimonial-2\.jpg"/g, "image: hireTestimonialImages.jeremy"],
  [/image: "\/pwa\/testimonial-sd\.jpg"/g, "image: hireTestimonialImages.shibulal"],
  [/image: "\/pwa\/testimonial-5\.jpg"/g, "image: hireTestimonialImages.roland"],
  [/image: "\/pwa\/testimonial-6\.jpg"/g, "image: hireTestimonialImages.murugan"],
  [/image: "\/rpm\/testimonial-0\.jpg"/g, "image: hireTestimonialImages.gunjan"],
  [/image: "\/rpm\/testimonial-1\.jpg"/g, "image: hireTestimonialImages.matthew"],
  [/image: "\/rpm\/testimonial-2\.jpg"/g, "image: hireTestimonialImages.jeremy"],
  [/image: "\/rpm\/testimonial-sd\.jpg"/g, "image: hireTestimonialImages.shibulal"],
  [/image: "\/rpm\/testimonial-5\.jpg"/g, "image: hireTestimonialImages.roland"],
  [/image: "\/rpm\/testimonial-6\.jpg"/g, "image: hireTestimonialImages.murugan"],
];

for (const f of files) {
  let s = fs.readFileSync(f, "utf8");
  if (!s.includes("hire-testimonial-images")) {
    s = importLine + s;
  }
  for (const [re, rep] of reps) s = s.replace(re, rep);
  fs.writeFileSync(f, s);
  console.log("updated", f);
}
