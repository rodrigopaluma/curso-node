const fs = require('fs');

console.log('Iniciando...');
fs.writeFileSync('arquivo.txt', 'Conteúdo do arquivo');
console.log('Finalizando...');

