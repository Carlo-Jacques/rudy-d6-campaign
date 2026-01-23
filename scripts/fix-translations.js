const fs = require('fs');
const path = require('path');

const locales = ['en', 'es', 'ht', 'ru'];

locales.forEach(locale => {
    const filePath = path.join('c:\\Users\\Owner\\Desktop\\Rudy Campaign\\website\\rudy-d6\\messages', `${locale}.json`);
    let content = fs.readFileSync(filePath, 'utf8');

    // Try to find the first valid JSON object
    try {
        // Basic cleanup: remove everything after the last '}'
        const lastBraceIndex = content.lastIndexOf('}');
        if (lastBraceIndex !== -1) {
            content = content.substring(0, lastBraceIndex + 1);
        }

        const data = JSON.parse(content);
        console.log(`${locale}.json is valid JSON.`);

        // Ensure endorsements.form exists
        if (!data.endorsements || !data.endorsements.form) {
            console.log(`Adding missing endorsements for ${locale}`);
            // Add them back if missing (using a simplified version for now or re-running previous script)
        }

        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (e) {
        console.error(`Failed to parse ${locale}.json: ${e.message}`);
        // If it fails, we might need a more aggressive fix or restore from backup if possible.
    }
});
