const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args["nome"];

console.log(`Olá ${nome}`);

const profissao = args["profissao"];

console.log(nome, profissao);