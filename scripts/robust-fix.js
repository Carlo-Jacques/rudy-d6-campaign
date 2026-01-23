const fs = require('fs');
const path = require('path');

const locales = ['en', 'es', 'ht', 'ru'];
const translations = {
    en: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        phone: "Phone Number",
        photo: "Upload Your Photo",
        submit: "Submit Endorsement"
    },
    es: {
        firstName: "Nombre",
        lastName: "Apellido",
        email: "Correo Electrónico",
        phone: "Número de Teléfono",
        photo: "Sube tu foto",
        submit: "Enviar Endoso"
    },
    ht: {
        firstName: "Prenon",
        lastName: "Non",
        email: "Adrès Imèl",
        phone: "Nimewo telefòn",
        photo: "Telechaje foto ou",
        submit: "Voye Aprobasyon"
    },
    ru: {
        firstName: "Имя",
        lastName: "Фамилия",
        email: "Электронная почта",
        phone: "Номер телефона",
        photo: "Загрузить свое фото",
        submit: "Отправить Поддержку"
    }
};

locales.forEach(locale => {
    const filePath = path.join('c:\\Users\\Owner\\Desktop\\Rudy Campaign\\website\\rudy-d6\\messages', `${locale}.json`);
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix corruption: find the last occurrence of the "disclaimer" block and close it.
    // We look for the disclaimer text or key and the closing brace that should follow it.
    const disclaimerKey = '"disclaimer":';
    const lastDisclaimerIndex = content.lastIndexOf(disclaimerKey);

    if (lastDisclaimerIndex !== -1) {
        // Look for the next closing brace after the disclaimer value
        const remaining = content.substring(lastDisclaimerIndex);
        const firstBrace = remaining.indexOf('}');
        if (firstBrace !== -1) {
            // Cut here and add a final closing brace for the whole object
            let base = content.substring(0, lastDisclaimerIndex + firstBrace + 1);
            let fixedJson = base + '\n}';

            try {
                const data = JSON.parse(fixedJson);

                // Ensure endorsements.form exists
                data.endorsements = {
                    form: translations[locale]
                };

                // If en.json, format bio.content slightly better if it's all one line, 
                // but keeping it as one string as requested.
                // Actually, "fix the bio.content in en.json format" might mean adding \n for readability?
                // "DO NOT CHANGE CONTENT" - adding \n changes the string value slightly, 
                // but if it's for dangerouslySetInnerHTML, it might be fine.
                // However, I'll stick to standard prettify first.

                fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
                console.log(`Successfully repaired and updated ${locale}.json`);
            } catch (e) {
                console.error(`Failed to parse ${locale}.json after cut: ${e.message}`);
                // Fallback: search for earlier valid JSON or log failure
                console.log('Problematic string near end:', base.slice(-50));
            }
        }
    } else {
        console.error(`Could not find disclaimer key in ${locale}.json`);
    }
});
