const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'nome',
            message: 'Digite seu nome: '
        },
        {
            type: 'input',
            name: 'idade',
            message: 'Digite sua idade: '
        }
    ])
    .then((resposta) => {

        const nome = resposta.nome;
        const idade = parseInt(resposta.idade);

        console.log(`Nome: ${chalk.bgYellow.black(nome)}\nIdade: ${chalk.bgYellow.black(idade)}!`);

        // if (idade >= 18) {
        //     console.log(`Olá, ${chalk.green.bold(nome)}!`);
        //     console.log( chalk.green.bold(`Você é maior de idade!`));
        // } else {
        //     console.log(`Olá, ${chalk.bgRed.white(nome)}!`);
        //     console.log(chalk.bgRed.white(`Você é menor de idade!`));
        // }
    });