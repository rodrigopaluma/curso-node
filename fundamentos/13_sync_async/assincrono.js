const fs = require('fs');

console.log('Iniciando...');

fs.writeFile('arquivo.txt', 'Conteúdo do arquivo', (err) => {
    setTimeout(() => {
        console.log('Arquivo criado');
    }, 1000);
});

console.log('Finalizando...');