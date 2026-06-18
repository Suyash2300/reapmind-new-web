import fs from 'fs/promises';
import path from 'path';

const DIR = 'f:/Reapmind_nextjs_devNew/lib';

async function main() {
  const files = await fs.readdir(DIR);
  const tsFiles = files.filter(f => f.endsWith('.ts'));

  let totalReplaced = 0;

  for (const file of tsFiles) {
    const fullPath = path.join(DIR, file);
    const content = await fs.readFile(fullPath, 'utf8');

    // Regex to match the block for the "How Blockchain is Transforming" article
    // and replace its link: "/blogs" with the correct link.
    // It looks for the title, followed by some content, until it hits link: "/blogs"
    const regex = /(title:\s*"How Blockchain is Transforming Enterprise: Benefits, Use Cases & Features",\s*excerpt:.*?date:.*?\s*author:.*?\s*link:\s*")\/blogs(")/gs;
    
    if (regex.test(content)) {
      const updated = content.replace(regex, `$1/how-blockchain-is-transforming-enterprise-benefits-use-cases-features$2`);
      await fs.writeFile(fullPath, updated, 'utf8');
      console.log(`Updated link in ${file}`);
      totalReplaced++;
    }
  }

  console.log(`Done. Updated ${totalReplaced} files.`);
}

main().catch(console.error);
