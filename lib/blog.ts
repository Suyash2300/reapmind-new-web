import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import { BlogPost } from '../types/blog';

const BLOGS_DIR = path.join(process.cwd(), 'data', 'blogs');

let cachedBlogs: BlogPost[] | null = null;

// Read all JSON files from the data directory
export async function getAllBlogs(): Promise<BlogPost[]> {
  if (cachedBlogs) {
    return cachedBlogs;
  }

  if (!fs.existsSync(BLOGS_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOGS_DIR);
  const blogs: BlogPost[] = [];

  for (const file of files) {
    if (file.endsWith('.json')) {
      const filePath = path.join(BLOGS_DIR, file);
      const content = fs.readFileSync(filePath, 'utf8');
      try {
        const blog: BlogPost = JSON.parse(content);
        blogs.push(blog);
      } catch (e) {
        console.error(`Error parsing blog file: ${file}`, e);
      }
    }
  }

  // Sort by date descending
  cachedBlogs = blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return cachedBlogs;
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const blogs = await getAllBlogs();
  const blog = blogs.find((b) => b.slug === slug);
  return blog || null;
}

export async function getRelatedBlogs(currentSlug: string, categories: string[], limit: number = 3): Promise<BlogPost[]> {
  const blogs = await getAllBlogs();
  
  // Filter out the current blog
  const otherBlogs = blogs.filter(b => b.slug !== currentSlug);
  
  // Find blogs that share at least one category
  const related = otherBlogs.filter(b => {
    return b.categories.some(cat => categories.includes(cat));
  });

  return related.slice(0, limit);
}

export async function getAllCategories(): Promise<string[]> {
  const blogs = await getAllBlogs();
  const categories = new Set<string>();
  
  for (const blog of blogs) {
    for (const cat of blog.categories) {
      if (cat !== 'Uncategorized') {
        categories.add(cat);
      }
    }
  }
  
  return Array.from(categories).sort();
}

/**
 * Sanitizes WordPress/Elementor HTML content for rendering.
 * - Preserves structure (headings, paragraphs, lists, etc.)
 * - Removes empty elementor wrappers.
 * - Removes inline scripts.
 */
export function sanitizeBlogContent(rawHtml: string): string {
  if (!rawHtml) return '';
  
  // Load HTML into cheerio
  const $ = cheerio.load(rawHtml, null, false);
  
  // Remove script tags
  $('script').remove();
  
  // Remove style tags
  $('style').remove();
  
  // Remove elementor-specific empty elements or layout blocks that add no content
  // Sometimes Elementor has deeply nested empty divs
  // Remove empty divs up to a maximum depth of 5 to avoid infinite loops
  for (let i = 0; i < 5; i++) {
    const emptyDivs = $('div:empty');
    if (emptyDivs.length === 0) break;
    emptyDivs.remove();
  }
  
  // Remove inline styles from all elements to allow Tailwind Typography to style them
  $('*').removeAttr('style');
  
  // Unwrap specific elementor containers that just add DOM depth without semantic meaning
  // e.g. .elementor-widget-wrap, .elementor-widget-container
  const unwrapClasses = [
    '.elementor-widget-wrap',
    '.elementor-widget-container',
    '.elementor-container',
    '.elementor-row',
    '.elementor-column',
    '.elementor-column-wrap',
    '.elementor-section'
  ];
  
  unwrapClasses.forEach(selector => {
      // Find all elements matching the selector
      const elements = $(selector);
      // We don't remove the content, just the wrapper tag itself
      // To do this reliably, we replace the wrapper with its children
      elements.each((_, el) => {
          // If the element has children, we replace it with its children
          $(el).replaceWith($(el).contents());
      });
  });

  // Re-run empty div removal just in case unwrapping created new empty divs
  for (let i = 0; i < 5; i++) {
    const emptyDivs = $('div:empty');
    if (emptyDivs.length === 0) break;
    emptyDivs.remove();
  }

  // Remove specific id/class attributes from body elements if needed
  // We'll keep classes to ensure standard layout things aren't broken, 
  // but strip some elementor noise if you want
  
  return $.html();
}

export function calculateReadingTime(htmlContent: string): string {
  const text = cheerio.load(htmlContent).text();
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / 200); // 200 words per minute average reading speed
  return `${time} min read`;
}

export function extractFeaturedImage(blog: BlogPost): string {
  // 1. Check featured image metadata first (Yoast SEO OpenGraph/Twitter)
  const ogImageMeta = blog.meta.find(m => m.key === '_yoast_wpseo_opengraph-image');
  if (ogImageMeta && ogImageMeta.value) {
    return ogImageMeta.value;
  }
  
  const twitterImageMeta = blog.meta.find(m => m.key === '_yoast_wpseo_twitter-image');
  if (twitterImageMeta && twitterImageMeta.value) {
    return twitterImageMeta.value;
  }

  const genericFeaturedMeta = blog.meta.find(m => m.key === 'featured_image_url' || m.key === 'thumbnail_url');
  if (genericFeaturedMeta && genericFeaturedMeta.value) {
    return genericFeaturedMeta.value;
  }

  // 2. Check _elementor_data for image widgets
  const elementorDataMeta = blog.meta.find(m => m.key === '_elementor_data');
  if (elementorDataMeta && elementorDataMeta.value) {
    try {
      const data = JSON.parse(elementorDataMeta.value);
      let foundUrl: string | null = null;
      const searchElementor = (nodes: any[]) => {
        if (!nodes || foundUrl) return;
        for (const node of nodes) {
          if (node.settings && node.settings.image && node.settings.image.url) {
            foundUrl = node.settings.image.url;
            return;
          }
          if (node.elements) searchElementor(node.elements);
        }
      };
      searchElementor(data);
      if (foundUrl) return foundUrl;
    } catch (e) {
      // Ignore JSON parse errors
    }
  }

  // 3. Check banner_page_background
  const bannerBgMeta = blog.meta.find(m => m.key === 'banner_page_background');
  if (bannerBgMeta && bannerBgMeta.value) {
      const match = bannerBgMeta.value.match(/s:3:"url";s:\d+:"([^"]+)"/);
      if (match && match[1]) {
          return match[1];
      }
  }

  // 4. Use first content image only as fallback
  const imgMatch = blog.content.match(/<img[^>]+src="([^">]+)"/);
  if (imgMatch && imgMatch[1]) {
    return imgMatch[1];
  }

  // 5. Use ReapMind logo only as final fallback
  return 'https://reapmind.com/wp-content/uploads/2024/07/reapmind-logo.svg';
}
