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
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    data.endorsements = {
        form: translations[locale]
    };

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated ${locale}.json`);
});
