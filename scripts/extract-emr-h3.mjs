import fs from "fs";

const html = fs.readFileSync("public/emr-source.html", "utf8");
const strip = (s) =>
  s.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#8211;/g, "–").replace(/&#8217;/g, "'").replace(/\s+/g, " ").trim();

const re = /<h3[^>]*>([\s\S]*?)<\/h3>/gi;
const matches = [...html.matchAll(re)].map((m) => ({ title: strip(m[1]), index: m.index }));

function chunkText(start, end) {
  const chunk = html.slice(start, end);
  const texts = [
    ...chunk.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi),
    ...chunk.matchAll(/elementor-icon-list-text[^>]*>([^<]+)</gi),
    ...chunk.matchAll(/elementor-widget-text-editor[^>]*>([\s\S]*?)<\/div>/gi),
  ]
    .map((m) => strip(m[1]))
    .filter((t) => t.length > 20 && !/android|google play store|APK/i.test(t));
  return texts;
}

const wanted = [
  "Service Highlights",
  "Patient Scheduling",
  "Patient Flow for Electronic Medical Record",
  "Task Management",
  "Patient History Charts",
  "Sort Patients with Similar Condition",
  "Detailed Reports for Medical Record",
];

const sections = [];
for (const title of wanted) {
  const match = matches.find((m) => m.title === title);
  if (!match) continue;
  const start = match.index;
  const next = matches.find((m) => m.index > start);
  const end = next?.index ?? start + 8000;
  const texts = chunkText(start, end);
  sections.push({ title, texts });
}

// Service highlight tab content from emr-extract tabs + paragraph blobs
const tabs = [
  {
    title: "Popular Platform",
    description:
      "Around 84.7% of Mobile devices are based out of the android platform and known to be the most user-friendly and beloved one among developers. Enjoy the benefit of embracing heavy downloads by creating android apps through accessing a proficient Android app development company. We are born to help businesses in developing comprehensive android apps with responsive UI design and impactful features that lead them to achieve required success.",
  },
  {
    title: "Open Source",
    description:
      "Android is an Open source platform implies it is royalty free and isn't just stuck to the android market. This platform uncovers a lot of features for creativity and innovativeness. But for leveraging the android platform uniqueness you have to go behind the right android app developers in India, USA, and UK region that processes great skills in shaping out the incredible apps. And ReapMind android developers are been recognized for developing business transformational apps for global and local clients.",
  },
  {
    title: "Easier Installation",
    description:
      "In addition to the Google play store, android apps can be hosted on any third-party website. Android software development kit unlocks these impressive abilities to install the app directly on the device or through the command line. It can be the best reason for investing in the Android app development platform as the apps are available for a larger number of users. For the best utilization of the android platform to achieve your business goals need to emphasize choosing our android development team.",
  },
  {
    title: "Lower Development Cost",
    description:
      "When compared to any other mobile app platform, android is notable as an affordable platform as Google play store subscription for uploading the APK is lesser than other platforms. Gain higher revenue in less investment by preferring android as your desired app development platform for bringing out the best in your business. Achieve users winning android applications by getting greater support from our developers who are knowledgeable and experienced for crafting out the apps with advanced languages.",
  },
];

fs.writeFileSync("public/emr-h3-sections.json", JSON.stringify({ sections, tabs }, null, 2));
console.log(JSON.stringify({ sections, tabs }, null, 2));
