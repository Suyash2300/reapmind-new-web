import { BlogPost } from '../types/blog';

/**
 * Client-safe utility functions extracted from lib/blog.ts.
 * These contain NO Node.js imports (no fs, path, cheerio) so they
 * can be safely imported inside "use client" components.
 */

/** Estimate reading time from raw HTML content without cheerio */
export function calculateReadingTime(htmlContent: string): string {
  // Strip HTML tags with a simple regex — good enough for a word count estimate
  const text = htmlContent.replace(/<[^>]+>/g, ' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const time = Math.ceil(words / 200); // 200 wpm average
  return `${time} min read`;
}

/** Extract the best available image URL from a blog post's metadata */
export function extractFeaturedImage(blog: BlogPost): string {
  // 1. Yoast SEO OpenGraph image
  const ogImageMeta = blog.meta.find(m => m.key === '_yoast_wpseo_opengraph-image');
  if (ogImageMeta?.value) return ogImageMeta.value;

  // 2. Yoast SEO Twitter image
  const twitterImageMeta = blog.meta.find(m => m.key === '_yoast_wpseo_twitter-image');
  if (twitterImageMeta?.value) return twitterImageMeta.value;

  // 3. Generic featured image / thumbnail
  const genericFeaturedMeta = blog.meta.find(
    m => m.key === 'featured_image_url' || m.key === 'thumbnail_url'
  );
  if (genericFeaturedMeta?.value) return genericFeaturedMeta.value;

  // 4. Elementor data — look for first image widget URL
  const elementorDataMeta = blog.meta.find(m => m.key === '_elementor_data');
  if (elementorDataMeta?.value) {
    try {
      const data = JSON.parse(elementorDataMeta.value);
      let foundUrl: string | null = null;
      const searchElementor = (nodes: any[]) => {
        if (!nodes || foundUrl) return;
        for (const node of nodes) {
          if (node.settings?.image?.url) {
            foundUrl = node.settings.image.url;
            return;
          }
          if (node.elements) searchElementor(node.elements);
        }
      };
      searchElementor(data);
      if (foundUrl) return foundUrl;
    } catch {
      // Ignore JSON parse errors
    }
  }

  // 5. banner_page_background serialized PHP value
  const bannerBgMeta = blog.meta.find(m => m.key === 'banner_page_background');
  if (bannerBgMeta?.value) {
    const match = bannerBgMeta.value.match(/s:3:"url";s:\d+:"([^"]+)"/);
    if (match?.[1]) return match[1];
  }

  // 6. First img src in content as fallback
  const imgMatch = blog.content.match(/<img[^>]+src="([^">]+)"/);
  if (imgMatch?.[1]) return imgMatch[1];

  // 7. ReapMind logo as final fallback
  return 'https://reapmind.com/wp-content/uploads/2024/07/reapmind-logo.svg';
}
