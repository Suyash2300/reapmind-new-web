const fs = require('fs');
const path = require('path');
const sax = require('sax');

// Configure paths
const XML_FILE = process.argv[2] || path.join(process.cwd(), 'data', 'export.xml');
const OUTPUT_DIR = path.join(process.cwd(), 'data', 'blogs');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

if (!fs.existsSync(XML_FILE)) {
  console.error(`Error: XML file not found at ${XML_FILE}`);
  console.error('Usage: node scripts/extract-blogs.js <path-to-xml-file>');
  process.exit(1);
}

console.log(`Starting to parse ${XML_FILE}...`);
console.log(`Output directory: ${OUTPUT_DIR}`);

// Initialize counters
let processedCount = 0;
let savedCount = 0;

// State management for the parser
let currentItem = null;
let currentTag = null;
let isItemOpen = false;

// Create strict parser stream
// strict = true (requires well-formed XML, but WP exports usually are)
// trim = true (removes whitespace)
const saxStream = sax.createStream(true, { trim: true, normalize: false });

saxStream.on('opentag', (node) => {
  const tagName = node.name;
  
  if (tagName === 'item') {
    isItemOpen = true;
    currentItem = {
      categories: [],
      tags: [],
      post_meta: []
    };
  }
  
  if (isItemOpen) {
    currentTag = tagName;
    
    // Handle attributes for categories/tags
    if (tagName === 'category') {
      const domain = node.attributes.domain;
      const nicename = node.attributes.nicename;
      currentItem._currentCategoryContext = { domain, nicename };
    }
    
    if (tagName === 'wp:postmeta') {
        currentItem._currentMeta = {};
    }
  }
});

function handleTextData(text) {
  if (!isItemOpen || !currentTag || !text) return;
  
  const content = text;
  
  switch (currentTag) {
    case 'title':
      currentItem.title = (currentItem.title || '') + content;
      break;
    case 'link':
      currentItem.link = (currentItem.link || '') + content;
      break;
    case 'pubDate':
      currentItem.pubDate = (currentItem.pubDate || '') + content;
      break;
    case 'dc:creator':
      currentItem.creator = (currentItem.creator || '') + content;
      break;
    case 'description':
      currentItem.description = (currentItem.description || '') + content;
      break;
    case 'content:encoded':
      currentItem.content = (currentItem.content || '') + content;
      break;
    case 'excerpt:encoded':
      currentItem.excerpt = (currentItem.excerpt || '') + content;
      break;
    case 'wp:post_id':
      currentItem.post_id = (currentItem.post_id || '') + content;
      break;
    case 'wp:post_date':
      currentItem.post_date = (currentItem.post_date || '') + content;
      break;
    case 'wp:post_name':
      currentItem.post_name = (currentItem.post_name || '') + content;
      break;
    case 'wp:status':
      currentItem.status = (currentItem.status || '') + content;
      break;
    case 'wp:post_type':
      currentItem.post_type = (currentItem.post_type || '') + content;
      break;
    case 'category':
      if (currentItem._currentCategoryContext) {
        currentItem._currentCategoryContext.text = (currentItem._currentCategoryContext.text || '') + content;
      }
      break;
    case 'wp:meta_key':
      if (currentItem._currentMeta) {
          currentItem._currentMeta.key = (currentItem._currentMeta.key || '') + content;
      }
      break;
    case 'wp:meta_value':
      if (currentItem._currentMeta) {
          currentItem._currentMeta.value = (currentItem._currentMeta.value || '') + content;
      }
      break;
  }
}

saxStream.on('text', handleTextData);
saxStream.on('cdata', handleTextData);

saxStream.on('closetag', (tagName) => {
  if (tagName === 'item') {
    isItemOpen = false;
    currentTag = null;
    processedCount++;
    
    // Process the item
    if (currentItem) {
      processItem(currentItem);
    }
    
    if (processedCount % 100 === 0) {
      console.log(`Processed ${processedCount} items... Saved ${savedCount} posts.`);
    }
    
    currentItem = null;
  } else if (tagName === 'category') {
      if (currentItem && currentItem._currentCategoryContext) {
          const cat = currentItem._currentCategoryContext;
          if (cat.domain === 'category') {
              currentItem.categories.push(cat.text);
          } else if (cat.domain === 'post_tag') {
              currentItem.tags.push(cat.text);
          }
          delete currentItem._currentCategoryContext;
      }
  } else if (tagName === 'wp:postmeta') {
      if (currentItem && currentItem._currentMeta) {
          if (currentItem._currentMeta.key && currentItem._currentMeta.value !== undefined) {
             currentItem.post_meta.push(currentItem._currentMeta);
          }
          delete currentItem._currentMeta;
      }
  }
  
  if (isItemOpen) {
    currentTag = null; // Reset current tag to avoid appending cross-tag content
  }
});

function processItem(item) {
  // Extract only blog posts where wp:post_type = post
  if (item.post_type !== 'post') {
    return;
  }
  
  // Skip explicitly mentioned unwanted types (redundant due to above check, but good for clarity)
  const skipTypes = ['page', 'attachment', 'nav_menu_item', 'revision'];
  if (skipTypes.includes(item.post_type)) {
    return;
  }
  
  // Skip drafts
  if (item.status === 'draft') {
    return;
  }
  
  // Clean up data for JSON
  const postData = {
    id: item.post_id || '',
    title: item.title || '',
    slug: item.post_name || '',
    link: item.link || '',
    pubDate: item.pubDate || '',
    date: item.post_date || '',
    creator: item.creator || '',
    content: item.content || '',
    excerpt: item.excerpt || '',
    status: item.status || '',
    type: item.post_type || '',
    categories: item.categories || [],
    tags: item.tags || [],
    meta: item.post_meta || []
  };
  
  // Determine safe filename
  const safeId = postData.id || `no-id-${Date.now()}`;
  const safeSlug = postData.slug || 'untitled';
  // sanitize filename to avoid issues on windows
  const sanitizedSlug = safeSlug.replace(/[^a-z0-9_-]/gi, '').substring(0, 50);
  const fileName = `${safeId}-${sanitizedSlug}.json`;
  const filePath = path.join(OUTPUT_DIR, fileName);
  
  try {
    fs.writeFileSync(filePath, JSON.stringify(postData, null, 2), 'utf8');
    savedCount++;
  } catch (err) {
    console.error(`Error saving post ${postData.id}:`, err);
  }
}

saxStream.on('end', () => {
  console.log('\n--- DONE ---');
  console.log(`Total items processed: ${processedCount}`);
  console.log(`Total blog posts saved: ${savedCount}`);
  console.log(`JSON files are available in: ${OUTPUT_DIR}`);
});

saxStream.on('error', (err) => {
  console.error('\nError parsing XML:', err.message);
  // Clear error to continue parsing if it's a minor malformation, otherwise process exits
  saxStream._parser.error = null;
  saxStream._parser.resume();
});

// Use createReadStream to pipe chunks directly into the parser
// Never loads the whole file in memory
const fileStream = fs.createReadStream(XML_FILE);

fileStream.on('error', (err) => {
  console.error(`\nFile reading error:`, err.message);
});

fileStream.pipe(saxStream);
