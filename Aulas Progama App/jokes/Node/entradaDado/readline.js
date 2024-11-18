const readline = require('readline').createInterface({

    input: process.stdin, // comunicação com o processo enquanto estiver Rodando
    output: process.stdout, // comunicação com o processo para parar

});

readline.question('Qual é o seu nome? ', (nome) => {
    console.log(`Olá, ${nome}!`);
    readline.close();

});