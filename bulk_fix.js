const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

// 1. Fix useState("string") -> useState<string>("string")
walkDir('./components', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content.replace(/useState\((['"][^'"]+['"])\)/g, 'useState<string>($1)');
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log('Fixed useState in: ' + filePath);
    }
  }
});

// 2. Fix rpm-*.tsx implicit any
walkDir('./components/rpm', function(filePath) {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix map(item, index) -> map((item: any, index: number)
    content = content.replace(/\(\s*item\s*,\s*index\s*\)\s*=>/g, '(item: any, index: number) =>');
    content = content.replace(/\(\s*article\s*,\s*index\s*\)\s*=>/g, '(article: any, index: number) =>');
    content = content.replace(/\(\s*iface\s*,\s*index\s*\)\s*=>/g, '(iface: any, index: number) =>');
    content = content.replace(/\(\s*step\s*,\s*index\s*\)\s*=>/g, '(step: any, index: number) =>');
    content = content.replace(/\(\s*sector\s*,\s*index\s*\)\s*=>/g, '(sector: any, index: number) =>');
    content = content.replace(/\(\s*logo\s*,\s*index\s*\)\s*=>/g, '(logo: any, index: number) =>');
    content = content.replace(/\(\s*item\s*,\s*pi\s*\)\s*=>/g, '(item: any, pi: number) =>');
    content = content.replace(/\(\s*_\s*,\s*index\s*\)\s*=>/g, '(_: any, index: number) =>');
    content = content.replace(/\(\s*char\s*,\s*i\s*\)\s*=>/g, '(char: string, i: number) =>');
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed implicit any in: ' + filePath);
    }
  }
});

console.log('Bulk fixes complete.');
