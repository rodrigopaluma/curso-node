const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Qual a sua linguagem preferida? ', (language) =>{
    if(language === 'Javascript'){
        console.log('Esse mano sabe das coisas hein!')
    } else if (language === 'Python'){
        console.log('Isso nem é linguagem!')
    } else if (language === 'Java'){
        console.log('Não sei não brother!')
    } else {
        console.log(`A minha linguagem preferida é ${language}`);
    }
    readline.close();
})