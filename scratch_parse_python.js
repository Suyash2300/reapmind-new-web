const fs = require('fs');
const filePath = `C:\\Users\\suyas\\.gemini\\antigravity-ide\\brain\\99231bb3-17f2-4ad0-a077-f2ba8d0ffa33\\.system_generated\\steps\\326\\content.md`;
const html = fs.readFileSync(filePath, 'utf8');

// Find images
const imgRegex = /src="([^"]+)"/g;
let match;
const images = [];
while ((match = imgRegex.exec(html)) !== null) {
  images.push(match[1]);
}
console.log('=== IMAGES ===');
console.log([...new Set(images)].filter(img => img.toLowerCase().includes('python') || img.toLowerCase().includes('django') || img.toLowerCase().includes('flask') || img.toLowerCase().includes('elementor')));

// Find sections
const index = html.indexOf("Explore Our Cutting-Edge");
if (index !== -1) {
  console.log('=== TECH STACK DETAILS ===');
  console.log(html.substring(index, index + 8000).replace(/<[^>]*>/g, '\n').replace(/\n+/g, '\n').substring(0, 2000));
} else {
  const idx2 = html.indexOf("Explore");
  if (idx2 !== -1) {
    console.log('=== TECH STACK DETAILS (Explore) ===');
    console.log(html.substring(idx2, idx2 + 4000).replace(/<[^>]*>/g, '\n').replace(/\n+/g, '\n').substring(0, 1500));
  }
}

const faqIndex = html.indexOf("FAQ");
if (faqIndex !== -1) {
  console.log('=== FAQ DETAILS ===');
  console.log(html.substring(faqIndex, faqIndex + 8000).replace(/<[^>]*>/g, '\n').replace(/\n+/g, '\n').substring(0, 2000));
}
