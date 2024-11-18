const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer
    .prompt([   // inquerer.prompt é uma função que recebe um array de objetos

        {

            type: 'input', // tipo de pergunta
            name: 'n1', // nome da variável que vai receber a resposta
            message: 'Diite Sua Primeira Nota?' // pergunta

        },
        {

            type: 'input', // tipo de pergunta
            name: 'n2', // nome da variável que vai receber a resposta
            message: 'Diite Sua Segunda Nota?' // pergunta

        }

    ]).then((resposta) => { // then é uma função que recebe uma função de callback  que recebe a resposta do usuário: error/resposta

        const nota1 = parseInt(resposta.n1); // resposta do usuário
        const nota2 = parseInt(resposta.n2); // resposta do usuário
        const media = (nota1 + nota2) / 2; // resposta do usuário

        if(media >= 7){
            
        console.log(`A Media do aluno é, ${chalk.green.bold(media)}!`); // resposta do usuário
        }else{
            console.log(`A Media do aluno é, ${chalk.bgRed.white(media)}!`); // resposta do usuário
        }
    });