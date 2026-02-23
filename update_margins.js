const fs = require('fs');
const path = require('path');

const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.styles.ts'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Extract container block roughly
  // It usually looks like `container: { ... },`
  const containerMatch = content.match(/container:\s*{[^}]*(?:{[^}]*}[^}]*)*}/);
  if (containerMatch) {
    console.log(`\n--- ${file} ---`);
    console.log(containerMatch[0]);
  }
}
