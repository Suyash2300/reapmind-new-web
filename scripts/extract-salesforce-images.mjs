import fs from "fs";

const html = fs.readFileSync("public/salesforce-source.html", "utf8");
const urls = [...html.matchAll(/https:\/\/reapmind\.com\/wp-content\/uploads\/[^"'\s)]+/g)].map((m) => m[0]);
const uniq = [...new Set(urls)];

const terms = ["Lightning", "LWC", "CI", "Mulesoft", "Apex", "Einstein", "Heroku", "Visualforce", "Salesforce", "SalesForce", "Large"];
for (const term of terms) {
  const matches = uniq.filter((u) => u.toLowerCase().includes(term.toLowerCase()));
  if (matches.length) {
    console.log(`\n# ${term}`);
    matches.forEach((u) => console.log(u));
  }
}
