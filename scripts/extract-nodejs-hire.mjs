/**
 * Extract structured content from nodejs-hire-source.html
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, "../public/nodejs-hire-source.html");
const OUT = path.join(__dirname, "../public/nodejs-hire-extracted.json");

function stripTags(s) {
  return s
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function getTextBetween(html, startTag, endTag) {
  const re = new RegExp(`${startTag}([^]*?)${endTag}`, "i");
  const m = html.match(re);
  return m ? stripTags(m[1]) : "";
}

function findAll(html, re) {
  const results = [];
  let m;
  const r = new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g");
  while ((m = r.exec(html)) !== null) results.push(m);
  return results;
}

function extractImgUrls(html) {
  const urls = new Set();
  const re = /(?:data-src|src)=["'](https:\/\/reapmind\.com\/wp-content\/uploads\/[^"']+)["']/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    urls.add(m[1].split("?")[0]);
  }
  return [...urls].sort();
}

function extractHeadings(html) {
  const headings = [];
  const re = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    headings.push({ tag: m[1].toLowerCase(), text: stripTags(m[2]) });
  }
  return headings;
}

function extractBetweenMarkers(html, startMarker, endMarker) {
  const start = html.indexOf(startMarker);
  if (start === -1) return "";
  const end = html.indexOf(endMarker, start + startMarker.length);
  return end === -1 ? html.slice(start) : html.slice(start, end);
}

function extractToggleFaqs(html) {
  const faqs = [];
  const re =
    /class="[^"]*elementor-toggle-title[^"]*"[^>]*>([\s\S]*?)<\/a>[\s\S]*?class="[^"]*elementor-toggle-content[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const q = stripTags(m[1]);
    const a = stripTags(m[2]);
    if (q && a) faqs.push({ question: q, answer: a });
  }
  return faqs;
}

function extractTestimonials(html) {
  const items = [];
  const re =
    /class="[^"]*elementor-testimonial-content[^"]*"[^>]*>([\s\S]*?)<\/div>[\s\S]*?class="[^"]*elementor-testimonial-name[^"]*"[^>]*>([\s\S]*?)<\/div>[\s\S]*?class="[^"]*elementor-testimonial-job[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    items.push({
      quote: stripTags(m[1]),
      name: stripTags(m[2]),
      role: stripTags(m[3]),
    });
  }
  // attach images
  const imgRe =
    /swiper-slide[\s\S]*?<img[^>]+(?:data-src|src)=["']([^"']+)["'][\s\S]*?elementor-testimonial-content[^>]*>([\s\S]*?)<\/div>[\s\S]*?elementor-testimonial-name[^>]*>([\s\S]*?)<\/div>[\s\S]*?elementor-testimonial-job[^>]*>([\s\S]*?)<\/div>/gi;
  const withImg = [];
  let im;
  while ((im = imgRe.exec(html)) !== null) {
    withImg.push({
      imageUrl: im[1].split("?")[0],
      quote: stripTags(im[2]),
      name: stripTags(im[3]),
      role: stripTags(im[4]),
    });
  }
  return withImg.length >= items.length ? withImg : items;
}

function extractCounters(html) {
  const stats = [];
  const re =
    /elementor-counter-number[^>]*>([\s\S]*?)<\/[\s\S]*?elementor-counter-title[^>]*>([\s\S]*?)<\//gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    stats.push({ value: stripTags(m[1]), label: stripTags(m[2]) });
  }
  return stats.slice(0, 4);
}

function extractHiringModels(html) {
  const models = [];
  for (const title of ["Full Time", "Part Time", "Hourly Basis"]) {
    const re = new RegExp(
      `<h3[^>]*>\\s*${title.replace(/ /g, "\\s*")}\\s*<\\/h3>([\\s\\S]{0,800})`,
      "i"
    );
    const m = html.match(re);
    if (m) {
      const block = m[1];
      const ps = [...block.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map((x) => stripTags(x[1]));
      const hrs = ps.filter((p) => /Hrs|Day|Month|Minimum|Flexible/i.test(p));
      models.push({
        title,
        hoursPerDay: hrs[0] || "",
        commitment: hrs[1] || "",
      });
    }
  }
  return models;
}

function extractPricingTiers(html) {
  const tiers = [];
  const re =
    /<h3[^>]*>([\s\S]*?Node[\s\S]*?Developer[\s\S]*?)<\/h3>([\s\S]{0,600})/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const title = stripTags(m[1]);
    const block = m[2];
    const price = stripTags(block.match(/<h[45][^>]*>([\s\S]*?\$[\s\S]*?)<\/h[45]>/i)?.[1] || "");
    const exp = stripTags(block.match(/<p[^>]*>([\s\S]*?Year[\s\S]*?)<\/p>/i)?.[1] || "");
    if (price) tiers.push({ title, price, experience: exp });
  }
  return tiers.slice(0, 3);
}

function extractRelatedHire(html) {
  const items = [];
  const re =
    /<h3[^>]*>(Hire[\s\S]*?)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>[\s\S]*?href=["']([^"']+)["']/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const title = stripTags(m[1]);
    if (title.includes("Node")) continue;
    items.push({
      title,
      description: stripTags(m[2]),
      href: m[3],
    });
  }
  return items.slice(0, 3);
}

function extractPortfolioItems(html) {
  const items = [];
  const portfolioStart = html.indexOf("Our Portfolio Works");
  if (portfolioStart === -1) return items;
  const portfolioEnd = html.indexOf("Explore Our Cutting-Edge", portfolioStart);
  const block = html.slice(portfolioStart, portfolioEnd > -1 ? portfolioEnd : portfolioStart + 15000);

  const re =
    /href=["']([^"']+)["'][^>]*>[\s\S]*?<img[^>]+(?:data-src|src)=["']([^"']+)["'][\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi;
  let m;
  while ((m = re.exec(block)) !== null) {
    items.push({
      title: stripTags(m[3]),
      category: stripTags(m[4]),
      imageUrl: m[2].split("?")[0],
      link: m[1],
    });
  }

  if (!items.length) {
    const re2 =
      /<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>[\s\S]*?(?:data-src|src)=["']([^"']+)["']/gi;
    while ((m = re2.exec(block)) !== null) {
      items.push({
        title: stripTags(m[1]),
        category: stripTags(m[2]),
        imageUrl: m[3].split("?")[0],
        link: "",
      });
    }
  }
  return items.slice(0, 3);
}

function extractTechItems(html) {
  const items = [];
  const start = html.indexOf("Explore Our Cutting-Edge");
  const end = html.indexOf("Don't wait", start);
  const block = html.slice(start, end > -1 ? end : start + 20000);

  const re =
    /<img[^>]+(?:data-src|src)=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>/gi;
  let m;
  while ((m = re.exec(block)) !== null) {
    const name = stripTags(m[3]) || m[2];
    if (name) items.push({ name, iconUrl: m[1].split("?")[0] });
  }

  if (!items.length) {
    const re2 =
      /<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]{0,400}?(?:data-src|src)=["']([^"']+)["']/gi;
    while ((m = re2.exec(block)) !== null) {
      items.push({ name: stripTags(m[1]), iconUrl: m[2].split("?")[0] });
    }
  }
  return items;
}

function extractSectionImages(html, titleFragment) {
  const idx = html.indexOf(titleFragment);
  if (idx === -1) return [];
  const end = html.indexOf("</section>", idx);
  const block = html.slice(idx, end > -1 ? end : idx + 8000);
  return extractImgUrls(block);
}

function extractHeroButtons(html) {
  const h1Idx = html.indexOf("<h1");
  if (h1Idx === -1) return [];
  const block = html.slice(h1Idx, h1Idx + 5000);
  const btns = [];
  const re = /class="[^"]*elementor-button[^"]*"[^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(block)) !== null) btns.push(stripTags(m[1]));
  return btns;
}

function extractHeroImage(html) {
  const h1Idx = html.indexOf("<h1");
  if (h1Idx === -1) return "";
  const block = html.slice(h1Idx, h1Idx + 8000);
  const m = block.match(/(?:data-src|src)=["'](https:\/\/reapmind\.com\/wp-content\/uploads\/[^"']+)["']/);
  return m ? m[1].split("?")[0] : "";
}

function extractAboutBullets(html) {
  const start = html.search(/Access Expert|without the Premium|Node\.js Developer/i);
  if (start === -1) return { left: [], right: [] };
  const end = html.indexOf("Our Portfolio Works", start);
  const block = html.slice(start, end > -1 ? end : start + 6000);
  const lists = [...block.matchAll(/<ul[^>]*>([\s\S]*?)<\/ul>/gi)];
  const all = [];
  for (const l of lists) {
    const items = [...l[1].matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map((x) => stripTags(x[1]));
    all.push(...items);
  }
  const mid = Math.ceil(all.length / 2);
  return { left: all.slice(0, mid), right: all.slice(mid) };
}

function extractCtas(html) {
  const ctas = [];
  const re =
    /<h2[^>]*>([\s\S]*?)<\/h2>[\s\S]{0,1200}?class="[^"]*elementor-button[^"]*"[^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const title = stripTags(m[1]);
    const btn = stripTags(m[2]);
    if (/Consultation|Book|Launch|Hire Node|vision/i.test(title + btn)) {
      const block = m[0];
      const subtitle = stripTags(block.match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1] || "");
      ctas.push({ title, subtitle, buttonLabel: btn });
    }
  }
  return ctas;
}

function extractProcessSteps(html) {
  const steps = [];
  for (const title of ["Inquiry", "Developer Section", "Integration", "Scaling"]) {
    const re = new RegExp(
      `<h3[^>]*>\\s*${title.replace(/ /g, "\\s*")}\\s*<\\/h3>[\\s\\S]{0,500}?<p[^>]*>([\\s\\S]*?)<\\/p>`,
      "i"
    );
    const m = html.match(re);
    steps.push({ title, description: m ? stripTags(m[1]) : "" });
  }
  return steps;
}

function main() {
  const content = fs.readFileSync(SRC, "utf8");

  const metaTitle = content.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() || "";
  const metaDesc =
    content.match(/<meta name="description" content="([^"]*)"/i)?.[1] || "";

  let breadcrumb = [];
  const schema = content.match(/class="yoast-schema-graph">([\s\S]*?)<\/script>/);
  if (schema) {
    try {
      const data = JSON.parse(schema[1]);
      for (const node of data["@graph"] || []) {
        if (node["@type"] === "BreadcrumbList") {
          breadcrumb = (node.itemListElement || []).map((item) => ({
            label: item.name,
            href: item.item || "",
          }));
        }
      }
    } catch {}
  }

  const mainStart = content.indexOf('data-elementor-type="wp-page"');
  const mainEnd = content.indexOf("<footer", mainStart);
  const main = content.slice(mainStart, mainEnd > -1 ? mainEnd : undefined);

  const headings = extractHeadings(main);
  const h1Text = headings.find((h) => h.tag === "h1")?.text || "";

  const heroDescMatch = main.match(/<h1[\s\S]*?<\/h1>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);
  const heroDesc = heroDescMatch ? stripTags(heroDescMatch[1]) : "";

  const stats = extractCounters(main);
  const heroButtons = extractHeroButtons(main);
  const heroImage = extractHeroImage(main);

  const clientLogosTitle =
    headings.find((h) => h.text.includes("Celebrating Success"))?.text || "";
  const trustedByTitle =
    headings.find((h) => h.text.includes("Trusted by startups"))?.text || "";

  const clientLogosImgs = extractSectionImages(main, "Celebrating Success");
  const trustedByImgs = extractSectionImages(main, "Trusted by startups");

  const aboutTitle =
    headings.find(
      (h) =>
        h.tag === "h2" &&
        /Node|Developer|Premium|Expert/i.test(h.text) &&
        !/Portfolio|Technolog|Hiring|Clients|Top 1%|ReapMind innovations/i.test(h.text)
    )?.text || "";

  const aboutStart = main.indexOf(aboutTitle);
  let aboutDesc = "";
  if (aboutStart > -1) {
    const block = main.slice(aboutStart, aboutStart + 3000);
    const pm = block.match(/<p[^>]*>([\s\S]{80,}?)<\/p>/);
    aboutDesc = pm ? stripTags(pm[1]) : "";
  }
  const aboutBullets = extractAboutBullets(main);

  const portfolioTitle = headings.find((h) => h.text.includes("Portfolio Works"))?.text || "";
  const portfolioSubtitleMatch = main.match(
    /Our Portfolio Works[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i
  );
  const portfolioItems = extractPortfolioItems(main);

  const techTitle =
    headings.find((h) => h.text.includes("Cutting-Edge") || h.text.includes("Technolog"))?.text ||
    "";
  const techDescMatch = main.match(/Explore Our Cutting-Edge[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);
  const techItems = extractTechItems(main);
  const techIllustration =
    extractSectionImages(main, "Explore Our Cutting-Edge").find(
      (u) => !techItems.some((t) => t.iconUrl === u) && /illustration|tech|node|Group/i.test(u)
    ) ||
    extractSectionImages(main, "Explore Our Cutting-Edge").find(
      (u) => !techItems.some((t) => t.iconUrl === u)
    ) ||
    "";

  const ctaCandidates = extractCtas(main);

  const hiringTitle =
    headings.find((h) => h.text.includes("Flexible Hiring") || h.text.includes("Hiring Model"))
      ?.text || "";
  const hiringSubtitleMatch = main.match(
    /Flexible Hiring Models[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i
  );
  const hiringModels = extractHiringModels(main);
  const finalizeCta =
    stripTags(
      main.match(/elementor-button[\s\S]*?Finalize[\s\S]*?<\/a>/i)?.[0]?.match(
        />([\s\S]*?)<\/a>/
      )?.[1] || ""
    ) || "Finalize the hiring Model";

  const processTitle =
    headings.find(
      (h) => h.text.includes("Hire") && h.text.includes("Node") && h.text.includes("ReapMind")
    )?.text || "";
  const processSubtitleMatch = main.match(
    /Hire Node[\s\S]*?ReapMind[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i
  );
  const processSteps = extractProcessSteps(main);

  const pricingTitle =
    headings.find((h) => h.text.includes("Top 1%") || h.text.includes("Indian Developers"))
      ?.text || "";
  const pricingSubtitleMatch = main.match(/Top 1%[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);
  const pricingTiers = extractPricingTiers(main);

  const testimonialsTitle =
    headings.find((h) => h.text.includes("What Our Clients"))?.text || "";
  const testimonialsSubtitleMatch = main.match(
    /What Our Clients[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i
  );
  const testimonials = extractTestimonials(main);

  const relatedItems = extractRelatedHire(main);
  const faqs = extractToggleFaqs(main);
  const allPageImageUrls = extractImgUrls(main);

  const result = {
    meta: { title: metaTitle, description: metaDesc },
    breadcrumb,
    hero: {
      heading: h1Text,
      description: heroDesc,
      stats,
      primaryCta: heroButtons[0] || "",
      secondaryCta: heroButtons[1] || "",
      heroImageUrl: heroImage,
    },
    clientLogos: { title: clientLogosTitle, logoImageUrls: clientLogosImgs },
    trustedBy: { title: trustedByTitle, logoUrls: trustedByImgs },
    about: {
      title: aboutTitle,
      description: aboutDesc,
      bulletsLeft: aboutBullets.left,
      bulletsRight: aboutBullets.right,
    },
    portfolio: {
      title: portfolioTitle,
      subtitle: portfolioSubtitleMatch ? stripTags(portfolioSubtitleMatch[1]) : "",
      items: portfolioItems,
    },
    technologies: {
      title: techTitle,
      description: techDescMatch ? stripTags(techDescMatch[1]) : "",
      illustrationUrl: techIllustration,
      items: techItems,
    },
    ctas: {
      afterTechnologies: ctaCandidates[0] || {},
      afterPricing: ctaCandidates[ctaCandidates.length - 1] || {},
    },
    hiringModels: {
      title: hiringTitle,
      subtitle: hiringSubtitleMatch ? stripTags(hiringSubtitleMatch[1]) : "",
      models: hiringModels,
      finalizeCta,
    },
    process: {
      title: processTitle,
      subtitle: processSubtitleMatch ? stripTags(processSubtitleMatch[1]) : "",
      steps: processSteps,
    },
    pricing: {
      title: pricingTitle,
      subtitle: pricingSubtitleMatch ? stripTags(pricingSubtitleMatch[1]) : "",
      tiers: pricingTiers,
    },
    testimonials: {
      title: testimonialsTitle,
      subtitle: testimonialsSubtitleMatch ? stripTags(testimonialsSubtitleMatch[1]) : "",
      items: testimonials,
    },
    relatedHire: { items: relatedItems },
    faqs,
    allHeadings: headings,
    allPageImageUrls,
  };

  fs.writeFileSync(OUT, JSON.stringify(result, null, 2), "utf8");
  console.log(JSON.stringify(result, null, 2));
}

main();
