import fs from "node:fs";

const html = fs.readFileSync("public/nodejs-hire-source.html", "utf8");

function ctx(needle, before = 0, after = 2000) {
  const idx = html.indexOf(needle);
  if (idx === -1) return null;
  return html.slice(Math.max(0, idx - before), idx + after);
}

const needles = [
  "Forge ahead with our elite",
  "Ready to see your Node.js project",
  "Our hiring models for Node JS",
  "Take a look at the simple",
  "Get Access to the top talent",
  "Huge thank you to ReapMind",
  "What types of Node.js projects",
  "Hire React Native Developers",
  "Deploy the finest web engineers",
  "Hire Android app developers",
  "App Delivered",
  "Expert Programmers",
  "Book a free Consultation",
  "Hire Dedicated Developer",
  "elementor-toggle-title",
  "testimonial__text",
  "Hours Per Day",
  "8 Hrs/ Day",
];

for (const n of needles) {
  const c = ctx(n, 200, 1500);
  console.log("\n\n==========", n, "==========");
  if (!c) {
    console.log("NOT FOUND");
    continue;
  }
  // strip tags for readability but keep structure hints
  console.log(
    c
      .replace(/></g, ">\n<")
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .slice(0, 2500)
  );
}
