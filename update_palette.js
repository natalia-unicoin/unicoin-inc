const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replacements = [
    { regex: /#FCD144/g, replacement: '#BBFF71' },
    { regex: /#fcd144/g, replacement: '#bbff71' },
    { regex: /#0E1A2B/g, replacement: '#232733' },
    { regex: /#0e1a2b/g, replacement: '#232733' },
    { regex: /#2A4B6A/g, replacement: '#0966FF' },
    { regex: /#2a4b6a/g, replacement: '#0966FF' },
    { regex: /#FAFBFC/g, replacement: '#FFFFFF' },
    { regex: /#fafbfc/g, replacement: '#ffffff' },
    { regex: /#E6E8EB/g, replacement: '#F5F5F7' },
    { regex: /#e6e8eb/g, replacement: '#f5f5f7' }
];

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.css') || file.endsWith('.js') || file.endsWith('.jsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(directoryPath);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    replacements.forEach(({ regex, replacement }) => {
        content = content.replace(regex, replacement);
    });

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
