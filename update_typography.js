const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.styles.ts'));

files.forEach(file => {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Títulos: Montserrat con letter-spacing -0.03em
    // Buscar propiedades como letterSpacing: '-0.02em' o '0.05em' O simplemente 
    // letterSpacing: '...' dentro de bloques de título. Lo más seguro es reemplazar -0.02em por -0.03em global.
    content = content.replace(/letterSpacing:\s*['-]-0\.02em['"]/g, "letterSpacing: '-0.03em'");

    // 2. Colores: Texto negro sobre claro, texto blanco sobre oscuro.
    // Esto ya lo hicimos en iteraciones pasadas, pero podemos asegurarnos de que no haya grises (#6e6e73) en textos principales.
    content = content.replace(/color:\s*['"]#6E6E73['"]/gi, "color: '#000000'");
    content = content.replace(/color:\s*['"]#A1A1A6['"]/gi, "color: '#FFFFFF'");

    fs.writeFileSync(filePath, content, 'utf8');
});
console.log('Typography formats updated.');
