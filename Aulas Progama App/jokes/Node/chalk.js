

const chalk = require('chalk'); // modulo foi instalado e chamado

const nota = 7

if(nota > 7){
    console.log(chalk.green.bold('Aprovado'));
}else{
    console.log(chalk.bgRed.black('Reprovado'));
}