const fs = require('fs');

if(!fs.existsSync('./arquivos')){
    console.log('Não existe o diretório');
    fs.mkdirSync('arquivos');
} else if(fs.existsSync('./arquivos')){
    console.log('Existe');
}