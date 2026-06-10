import fs from "fs";

const html = fs.readFileSync("public/oams-source.html", "utf8");
const strip = (s) =>
  s.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#8217;/g, "'").replace(/\s+/g, " ").trim();

const boxes = [];
for (const m of html.matchAll(
  /<h3 class="elementskit-info-box-title">\s*([\s\S]*?)<\/h3>[\s\S]*?elementskit-box-style-content">\s*([\s\S]*?)\s*<\/div>/gi,
)) {
  const title = strip(m[1]);
  const description = strip(m[2]);
  if (title && description.length > 20) boxes.push({ title, description });
}

const h3 = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map((m) => strip(m[1]));
const h2 = [...new Set([...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((m) => strip(m[1])))];

// management sections from box-heading pattern
const mgmt = [];
for (const m of html.matchAll(
  /<h4 class="box-heading">\s*([^<]+?)\s*<\/h4>\s*<div class="box-description">\s*([\s\S]*?)\s*<\/div>/g,
)) {
  mgmt.push({ label: strip(m[1]), description: strip(m[2]) });
}

// tab panels
const tabs = [];
for (const m of html.matchAll(
  /<h5 class="the7-e-tab-title-text">\s*([^<]+?)\s*<\/h5>[\s\S]*?<p>([^<]+)<\/p>/g,
)) {
  const title = strip(m[1]);
  const description = strip(m[2]);
  if (!tabs.find((t) => t.title === title)) tabs.push({ title, description });
}

// customer tabs
const customerTabs = [];
const custIdx = html.indexOf("Customer Management");
if (custIdx > 0) {
  const chunk = html.slice(custIdx, custIdx + 15000);
  for (const m of chunk.matchAll(/<h5 class="the7-e-tab-title-text">\s*([^<]+?)\s*<\/h5>[\s\S]*?<p>([^<]+)<\/p>/g)) {
    const title = strip(m[1]);
    const description = strip(m[2]);
    if (!customerTabs.find((t) => t.title === title)) customerTabs.push({ title, description });
  }
}

console.log("H2:", h2);
console.log("H3 sample:", h3.filter((t) => /Patient|Appointment|Pharma|Courier|Admin|Customer|Feature|Management|Service/i.test(t)));
console.log("BOXES", boxes.length);
boxes.forEach((b) => console.log("-", b.title));
console.log("MGMT", mgmt.length);
console.log("TABS", tabs.length);
console.log("CUSTOMER TABS", customerTabs.length);

fs.writeFileSync(
  "public/oams-boxes.json",
  JSON.stringify({ boxes, mgmt, tabs, customerTabs, h2, h3 }, null, 2),
);
