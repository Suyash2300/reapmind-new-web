#!/usr/bin/env python3
"""Extract structured content from nodejs-hire-source.html"""
import re
import json
import html
from pathlib import Path

try:
    from bs4 import BeautifulSoup
except ImportError:
    BeautifulSoup = None

SRC = Path(__file__).resolve().parent.parent / "public" / "nodejs-hire-source.html"
OUT = Path(__file__).resolve().parent.parent / "public" / "nodejs-hire-extracted.json"


def strip_tags(s: str) -> str:
    s = re.sub(r"<[^>]+>", " ", s)
    s = html.unescape(s)
    return re.sub(r"\s+", " ", s).strip()


def get_text(el):
    if el is None:
        return ""
    return re.sub(r"\s+", " ", el.get_text(" ", strip=True))


def main():
    content = SRC.read_text(encoding="utf-8", errors="replace")
    if not BeautifulSoup:
        raise SystemExit("pip install beautifulsoup4")

    soup = BeautifulSoup(content, "html.parser")

    # Meta
    meta_title = soup.title.string.strip() if soup.title and soup.title.string else ""
    meta_desc_el = soup.find("meta", attrs={"name": "description"})
    meta_desc = meta_desc_el["content"] if meta_desc_el else ""

    # Breadcrumb from schema
    schema = soup.find("script", class_="yoast-schema-graph")
    breadcrumb = []
    if schema:
        try:
            data = json.loads(schema.string)
            for node in data.get("@graph", []):
                if node.get("@type") == "BreadcrumbList":
                    for item in node.get("itemListElement", []):
                        breadcrumb.append({"label": item.get("name", ""), "href": item.get("item", "")})
        except json.JSONDecodeError:
            pass

    # Main page content only (elementor page 108546)
    main = soup.find("div", attrs={"data-elementor-type": "wp-page", "data-elementor-id": "108546"})
    if not main:
        main = soup.find(class_=re.compile(r"elementor-page-108546"))

    if not main:
        raise SystemExit("Could not find main page content")

    # Collect all headings in order with their text
    headings = []
    for tag in main.find_all(["h1", "h2", "h3", "h4", "h5", "h6"]):
        headings.append({"tag": tag.name, "text": get_text(tag)})

    # Hero - first h1 section
    h1 = main.find("h1")
    hero_heading = get_text(h1) if h1 else ""

    # Hero description - first p after h1 in same section
    hero_desc = ""
    if h1:
        parent = h1.find_parent("div", class_=re.compile("elementor-element"))
        for _ in range(5):
            if parent is None:
                break
            p = parent.find("p")
            if p:
                hero_desc = get_text(p)
                break
            parent = parent.parent

    # Stats - look for counter/number widgets near hero
    stats = []
    for widget in main.find_all("div", class_=re.compile(r"elementor-widget-counter")):
        number = widget.find(class_=re.compile(r"elementor-counter-number"))
        title = widget.find(class_=re.compile(r"elementor-counter-title"))
        if number and title:
            stats.append({"value": get_text(number), "label": get_text(title)})
    stats = stats[:4]

    # CTAs in hero
    hero_ctas = []
    hero_section = h1.find_parent("div", class_=re.compile("elementor-section")) if h1 else None
    if hero_section:
        for btn in hero_section.find_all("a", class_=re.compile(r"elementor-button")):
            hero_ctas.append(get_text(btn))

    # Hero image
    hero_img = ""
    if hero_section:
        img = hero_section.find("img")
        if img:
            hero_img = img.get("data-src") or img.get("src") or ""

    # Client logos section - "Celebrating Success"
    client_logos = {"title": "", "logos": []}
    trusted_by = {"title": "", "logos": []}

    for h2 in main.find_all("h2"):
        text = get_text(h2)
        section = h2.find_parent("div", class_=re.compile("elementor-section"))
        if not section:
            continue
        imgs_in_section = []
        for img in section.find_all("img"):
            src = img.get("data-src") or img.get("src") or ""
            if src and "wp-content/uploads" in src:
                imgs_in_section.append(src.split("?")[0])
        if "Celebrating Success" in text:
            client_logos["title"] = text
            client_logos["logos"] = imgs_in_section
        elif "Trusted by startups" in text:
            trusted_by["title"] = text
            trusted_by["logos"] = imgs_in_section

    # About section
    about = {"title": "", "description": "", "bulletsLeft": [], "bulletsRight": []}
    for h2 in main.find_all("h2"):
        text = get_text(h2)
        if "Node" in text and ("Developer" in text or "Price" in text or "Premium" in text or "Expert" in text):
            section = h2.find_parent("div", class_=re.compile("elementor-section"))
            if section and "Portfolio" not in text and "Technolog" not in text:
                about["title"] = text
                for p in section.find_all("p"):
                    t = get_text(p)
                    if len(t) > 80:
                        about["description"] = t
                        break
                lists = section.find_all("ul")
                if len(lists) >= 2:
                    about["bulletsLeft"] = [get_text(li) for li in lists[0].find_all("li")]
                    about["bulletsRight"] = [get_text(li) for li in lists[1].find_all("li")]
                elif len(lists) == 1:
                    items = [get_text(li) for li in lists[0].find_all("li")]
                    mid = len(items) // 2
                    about["bulletsLeft"] = items[:mid]
                    about["bulletsRight"] = items[mid:]
                break

    # Portfolio
    portfolio = {"title": "", "subtitle": "", "items": []}
    for h2 in main.find_all("h2"):
        if "Portfolio" in get_text(h2):
            section = h2.find_parent("div", class_=re.compile("elementor-section"))
            portfolio["title"] = get_text(h2)
            if section:
                ps = section.find_all("p")
                if ps:
                    portfolio["subtitle"] = get_text(ps[0])
            break

    # Portfolio items from image-box or portfolio widgets
    for box in main.find_all("div", class_=re.compile(r"elementor-image-box|the7-image-box|portfolio")):
        title_el = box.find(["h3", "h4", "h5"])
        if not title_el:
            continue
        title = get_text(title_el)
        if title in [i["title"] for i in portfolio["items"]]:
            continue
        cat = ""
        desc_el = box.find("p")
        if desc_el:
            cat = get_text(desc_el)
        img_el = box.find("img")
        img_url = ""
        if img_el:
            img_url = (img_el.get("data-src") or img_el.get("src") or "").split("?")[0]
        link_el = box.find("a", href=True)
        link = link_el["href"] if link_el else ""
        if title and img_url:
            portfolio["items"].append({"title": title, "category": cat, "imageUrl": img_url, "link": link})

    # If portfolio items not found, try alternate structure
    if not portfolio["items"]:
        for h3 in main.find_all("h3"):
            section = h3.find_parent("div", class_=re.compile("elementor-widget"))
            if not section:
                continue
            title = get_text(h3)
            img_el = section.find("img")
            if not img_el:
                continue
            parent_section = h3.find_parent("div", class_=re.compile("elementor-section"))
            if parent_section and "Portfolio" not in get_text(parent_section.find("h2") or ""):
                # check if in portfolio area
                pass
            cat = ""
            p = section.find("p")
            if p:
                cat = get_text(p)
            img_url = (img_el.get("data-src") or img_el.get("src") or "").split("?")[0]
            link_el = section.find("a", href=True)
            link = link_el["href"] if link_el else ""
            if title and img_url and any(
                k in img_url.lower() for k in ["portfolio", "leep", "happy", "carlo", "2023", "2024"]
            ):
                portfolio["items"].append({"title": title, "category": cat, "imageUrl": img_url, "link": link})

    # Technologies
    technologies = {"title": "", "description": "", "illustrationUrl": "", "items": []}
    for h2 in main.find_all("h2"):
        text = get_text(h2)
        if "Technolog" in text:
            section = h2.find_parent("div", class_=re.compile("elementor-section"))
            technologies["title"] = text
            if section:
                for p in section.find_all("p"):
                    t = get_text(p)
                    if len(t) > 50:
                        technologies["description"] = t
                        break
                for img in section.find_all("img"):
                    src = (img.get("data-src") or img.get("src") or "").split("?")[0]
                    alt = img.get("alt", "")
                    if "illustration" in src.lower() or "tech" in alt.lower() or "node" in alt.lower():
                        if not technologies["illustrationUrl"] and "icon" not in src.lower():
                            technologies["illustrationUrl"] = src
            break

    # Tech items - icon boxes in tech section
    tech_section = None
    for h2 in main.find_all("h2"):
        if "Technolog" in get_text(h2):
            tech_section = h2.find_parent("div", class_=re.compile("elementor-section"))
            break
    if tech_section:
        parent = tech_section.parent
        for _ in range(3):
            if parent:
                parent = parent.parent
        # search sibling sections
        tech_area = tech_section
        for _ in range(5):
            tech_area = tech_area.find_next_sibling("div") or tech_area.parent
            if tech_area is None:
                break
        for widget in main.find_all("div", class_=re.compile(r"elementor-widget-image-box|elementor-widget-icon-box")):
            h3 = widget.find(["h3", "h4", "span"])
            img = widget.find("img")
            if img:
                name = get_text(widget.find(["h3", "h4"])) or get_text(widget.find(class_=re.compile("title")))
                if not name:
                    name = img.get("alt", "")
                icon = (img.get("data-src") or img.get("src") or "").split("?")[0]
                if name and icon and name not in [t["name"] for t in technologies["items"]]:
                    technologies["items"].append({"name": name, "iconUrl": icon})

    # CTA sections
    ctas = {"afterTechnologies": {}, "afterPricing": {}}
    cta_candidates = []
    for h2 in main.find_all("h2"):
        text = get_text(h2)
        section = h2.find_parent("div", class_=re.compile("elementor-section"))
        btn = section.find("a", class_=re.compile("elementor-button")) if section else None
        subtitle = ""
        if section:
            for p in section.find_all("p"):
                t = get_text(p)
                if t:
                    subtitle = t
                    break
        if btn and ("Consultation" in get_text(btn) or "Book" in get_text(btn) or "Launch" in text or "Hire" in text):
            cta_candidates.append({
                "title": text,
                "subtitle": subtitle,
                "buttonLabel": get_text(btn),
            })

    if len(cta_candidates) >= 1:
        ctas["afterTechnologies"] = cta_candidates[0]
    if len(cta_candidates) >= 2:
        ctas["afterPricing"] = cta_candidates[-1]

    # Hiring models
    hiring_models = {"title": "", "subtitle": "", "models": [], "finalizeCta": ""}
    for h2 in main.find_all("h2"):
        if "Hiring Model" in get_text(h2) or "Flexible Hiring" in get_text(h2):
            section = h2.find_parent("div", class_=re.compile("elementor-section"))
            hiring_models["title"] = get_text(h2)
            if section:
                for p in section.find_all("p"):
                    t = get_text(p)
                    if len(t) > 30:
                        hiring_models["subtitle"] = t
                        break
            break

    for h3 in main.find_all("h3"):
        text = get_text(h3)
        if text in ("Full Time", "Part Time", "Hourly Basis"):
            widget = h3.find_parent("div", class_=re.compile("elementor-widget"))
            model = {"title": text, "hoursPerDay": "", "commitment": ""}
            if widget:
                for p in widget.find_all("p"):
                    t = get_text(p)
                    if "Hrs" in t or "Day" in t or "Month" in t or "Minimum" in t:
                        if not model["hoursPerDay"]:
                            model["hoursPerDay"] = t
                        else:
                            model["commitment"] = t
            hiring_models["models"].append(model)

    for btn in main.find_all("a", class_=re.compile("elementor-button")):
        t = get_text(btn)
        if "Finalize" in t or "hiring Model" in t:
            hiring_models["finalizeCta"] = t
            break

    # Process
    process = {"title": "", "subtitle": "", "steps": []}
    for h2 in main.find_all("h2"):
        text = get_text(h2)
        if "Hire" in text and "Node" in text and "ReapMind" in text:
            section = h2.find_parent("div", class_=re.compile("elementor-section"))
            process["title"] = text
            if section:
                for p in section.find_all("p"):
                    t = get_text(p)
                    if "process" in t.lower() or "straight" in t.lower():
                        process["subtitle"] = t
                        break
            break

    step_titles = ["Inquiry", "Developer Section", "Integration", "Scaling"]
    for st in step_titles:
        for h3 in main.find_all("h3"):
            if get_text(h3) == st:
                widget = h3.find_parent("div", class_=re.compile("elementor-widget"))
                desc = ""
                if widget:
                    p = widget.find("p")
                    if p:
                        desc = get_text(p)
                process["steps"].append({"title": st, "description": desc})
                break

    # Pricing
    pricing = {"title": "", "subtitle": "", "tiers": []}
    for h2 in main.find_all("h2"):
        text = get_text(h2)
        if "Top 1%" in text or "Indian Developers" in text:
            section = h2.find_parent("div", class_=re.compile("elementor-section"))
            pricing["title"] = text
            if section:
                for p in section.find_all("p"):
                    t = get_text(p)
                    if t:
                        pricing["subtitle"] = t
                        break
            break

    for h3 in main.find_all("h3"):
        text = get_text(h3)
        if "Node" in text and "Developer" in text:
            widget = h3.find_parent("div", class_=re.compile("elementor-widget"))
            tier = {"title": text, "price": "", "experience": ""}
            if widget:
                for el in widget.find_all(["h4", "h5", "p", "span"]):
                    t = get_text(el)
                    if "$" in t:
                        tier["price"] = t
                    elif "Year" in t or "Experienced" in t:
                        tier["experience"] = t
            if tier["price"]:
                pricing["tiers"].append(tier)

    # Testimonials
    testimonials = {"title": "", "subtitle": "", "items": []}
    for h2 in main.find_all("h2"):
        text = get_text(h2)
        if "Clients Have to Say" in text or "What Our Clients" in text:
            section = h2.find_parent("div", class_=re.compile("elementor-section"))
            testimonials["title"] = text
            if section:
                for p in section.find_all("p"):
                    t = get_text(p)
                    if len(t) > 50:
                        testimonials["subtitle"] = t
                        break
            break

    for slide in main.find_all("div", class_=re.compile(r"swiper-slide|elementor-testimonial")):
        quote_el = slide.find(class_=re.compile(r"testimonial-content|elementor-testimonial-content"))
        if not quote_el:
            quote_el = slide.find("p")
        name_el = slide.find(class_=re.compile(r"testimonial-name|elementor-testimonial-name"))
        job_el = slide.find(class_=re.compile(r"testimonial-job|elementor-testimonial-job"))
        img_el = slide.find("img")
        if quote_el:
            item = {
                "quote": get_text(quote_el),
                "name": get_text(name_el) if name_el else "",
                "role": get_text(job_el) if job_el else "",
                "imageUrl": (img_el.get("data-src") or img_el.get("src") or "").split("?")[0] if img_el else "",
            }
            if item["quote"] and item not in testimonials["items"]:
                testimonials["items"].append(item)

    # Related hire
    related = {"items": []}
    for h3 in main.find_all("h3"):
        text = get_text(h3)
        if "Hire" in text and text not in [i["title"] for i in related["items"]]:
            widget = h3.find_parent("div", class_=re.compile("elementor-widget"))
            desc = ""
            href = ""
            if widget:
                p = widget.find("p")
                if p:
                    desc = get_text(p)
                a = widget.find("a", href=True)
                if a:
                    href = a["href"]
            if desc and href:
                related["items"].append({"title": text, "description": desc, "href": href})

    # FAQs
    faqs = []
    for toggle in main.find_all("div", class_=re.compile(r"elementor-toggle-item|e-n-accordion-item")):
        q_el = toggle.find(["a", "summary", "h3", "h4"], class_=re.compile(r"toggle-title|accordion-title|elementor-toggle-title"))
        if not q_el:
            q_el = toggle.find(["a", "summary"])
        a_el = toggle.find(class_=re.compile(r"toggle-content|accordion-content|elementor-tab-content"))
        if not a_el:
            a_el = toggle.find("div", class_=re.compile("elementor-toggle-content"))
        if q_el and a_el:
            q = get_text(q_el)
            a = get_text(a_el)
            if q and a:
                faqs.append({"question": q, "answer": a})

    # All unique page images (main content only)
    page_imgs = sorted(set(
        (img.get("data-src") or img.get("src") or "").split("?")[0]
        for img in main.find_all("img")
        if (img.get("data-src") or img.get("src") or "") and "wp-content/uploads" in (img.get("data-src") or img.get("src") or "")
    ))

    # Also dump all headings for manual review
    result = {
        "meta": {"title": meta_title, "description": meta_desc},
        "breadcrumb": breadcrumb,
        "hero": {
            "heading": hero_heading,
            "description": hero_desc,
            "stats": stats,
            "primaryCta": hero_ctas[0] if hero_ctas else "",
            "secondaryCta": hero_ctas[1] if len(hero_ctas) > 1 else "",
            "heroImageUrl": hero_img.split("?")[0] if hero_img else "",
        },
        "clientLogos": client_logos,
        "trustedBy": trusted_by,
        "about": about,
        "portfolio": portfolio,
        "technologies": technologies,
        "ctas": ctas,
        "hiringModels": hiring_models,
        "process": process,
        "pricing": pricing,
        "testimonials": testimonials,
        "relatedHire": related,
        "faqs": faqs,
        "allHeadings": headings,
        "allPageImageUrls": page_imgs,
    }

    OUT.write_text(json.dumps(result, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Written to {OUT}")
    print(json.dumps(result, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
