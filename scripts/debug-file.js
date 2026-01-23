const fs = require('fs');
const filePath = 'c:\\Users\\Owner\\Desktop\\Rudy Campaign\\website\\rudy-d6\\messages\\en.json';
const content = fs.readFileSync(filePath);
console.log('File size:', content.length);
console.log('Last 100 bytes (hex):', content.slice(-100).toString('hex'));
console.log('Last 100 bytes (string):', content.slice(-100).toString());
