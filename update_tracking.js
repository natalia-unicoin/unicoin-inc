const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.styles.ts'));

files.forEach(file => {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. All letterSpacing that were -0.02em are now -0.03em
    content = content.replace(/letterSpacing:\s*['-]-0\.02em['"]/g, "letterSpacing: '-0.03em'");
    // Also uppercase tracking should probably be removed if it's a title and they want -0.03em kerning
    content = content.replace(/letterSpacing:\s*['-]0\.05em['"]/g, "letterSpacing: '-0.03em'");

    // 2. Weights: Subtitles should be 700, texts 400.
    // Replace fontWeight: 600 or 500 or 300 with 400 or 700 depending on context.
    // This is hard with simple regex. Let's do it per file or target specific known classes.

    // 3. Colors:
    // "#6e6e73" (Apple Gray) -> #000000 (Black on light) or #FFFFFF (White on dark).
    // Let's manually replace in specific files to be safe.

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Kerning updated.');
