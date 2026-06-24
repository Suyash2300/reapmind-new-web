const fs = require('fs');
const path = require('path');

function extractFeaturedImage(blog) {
  const ogImageMeta = blog.meta.find(m => m.key === '_yoast_wpseo_opengraph-image');
  if (ogImageMeta && ogImageMeta.value) return ogImageMeta.value;
  
  const twitterImageMeta = blog.meta.find(m => m.key === '_yoast_wpseo_twitter-image');
  if (twitterImageMeta && twitterImageMeta.value) return twitterImageMeta.value;

  const genericFeaturedMeta = blog.meta.find(m => m.key === 'featured_image_url' || m.key === 'thumbnail_url');
  if (genericFeaturedMeta && genericFeaturedMeta.value) return genericFeaturedMeta.value;

  const imgMatch = blog.content.match(/<img[^>]+src="([^">]+)"/);
  if (imgMatch && imgMatch[1]) return imgMatch[1];

  // 4. Check _elementor_data for image widgets
  const elementorDataMeta = blog.meta.find(m => m.key === '_elementor_data');
  if (elementorDataMeta && elementorDataMeta.value) {
    try {
      // Elementor data is often double JSON stringified or just stringified
      const data = JSON.parse(elementorDataMeta.value);
      let foundUrl = null;
      const searchElementor = (nodes) => {
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
      // ignore
    }
  }

  // Another fallback: banner_page_background
  const bannerBgMeta = blog.meta.find(m => m.key === 'banner_page_background');
  if (bannerBgMeta && bannerBgMeta.value) {
      const match = bannerBgMeta.value.match(/s:3:"url";s:\d+:"([^"]+)"/);
      if (match && match[1]) {
          return match[1];
      }
  }

  return 'https://reapmind.com/wp-content/uploads/2024/07/reapmind-logo.svg';
}

const dir = 'data/blogs';
const files = fs.readdirSync(dir);
for (const file of files) {
  if (file.endsWith('.json')) {
    const data = JSON.parse(fs.readFileSync(path.join(dir, file)));
    const img = extractFeaturedImage(data);
    console.log(file, '->', img);
  }
}
