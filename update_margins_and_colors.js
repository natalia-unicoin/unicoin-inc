const fs = require('fs');
const path = require('path');

const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.styles.ts'));

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // 1. Text color replacement (darkening grays to pure black)
    content = content.replace(/color:\s*'#6e6e73'/g, "color: '#000000'");
    content = content.replace(/color:\s*'#a1a1a6'/g, "color: '#000000'");

    // 2. Global padding replacement (100px -> 150px bounds)
    content = content.replace(/paddingLeft:\s*'100px'/g, "paddingLeft: '150px'");
    content = content.replace(/paddingRight:\s*'100px'/g, "paddingRight: '150px'");
    content = content.replace(/padding:\s*'0 100px'/g, "padding: '0 150px'");

    // 3. Global maxWidth destruction (Full-wide)
    content = content.replace(/maxWidth:\s*'1[0-9]{3}px'/g, "maxWidth: '100%'"); // catches 1200px, 1280px, etc.

    // 4. Inject lg breakpoint into containers if completely missing
    let containerRegex = /container:\s*{([\s\S]*?)}(?=\s*,\s*[a-zA-Z0-9_]+:|\s*}\s*\)\);)/;
    let match = content.match(containerRegex);

    if (match) {
        let containerBody = match[1];
        let newContainerBody = containerBody;

        if (!newContainerBody.includes("theme.breakpoints.up('lg')") && !newContainerBody.includes("theme.breakpoints.up('xl')")) {
            newContainerBody = newContainerBody.replace(/\s+$/, '');
            newContainerBody += `,\n        [theme.breakpoints.up('lg')]: {\n            paddingLeft: '150px',\n            paddingRight: '150px',\n        }\n    `;
            content = content.replace(containerBody, newContainerBody);
        }
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
    }
}
