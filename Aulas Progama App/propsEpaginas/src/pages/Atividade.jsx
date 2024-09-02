/*5.25 - O porco: Faça um programa que leia o valor de um produto X e leia a quantidade de moedas de um cofrinho que contenha:  N moedas de 1 real;  N moedas de 50 centavos;  N moedas de 25 centavos;  N moedas de 10 centavos;  N moedas de 5 centavos; O programa deverá verificar se o total de reais que contem no cofrinho é o bastante para compra o produto X */

import React, { useState } from 'react'

function Atividade() {
    const [resultado,setResultado] = useState()

function atividade(){
    let somaConfrinho
    let valorProduto = Number(prompt('Qual o Valor do Produto (R$) ?: '))
    let moedas1 = Number(prompt('Quantas Moedas De R$ 1,00'))
    let moedas50 = Number(prompt('Quantas Moedas De R$ 0,50'))
    let moedas25 = Number(prompt('Quantas Moedas De R$ 0,25'))
    let moedas5 = Number(prompt('Quantas Moedas De R$ 0,05'))
    somaConfrinho = (moedas1) + (moedas50 * 0.5) + (moedas25 * 0.25) + (moedas5 * 0.05)

    if(somaConfrinho >= valorProduto){
        setResultado('Você Pode Comprar!! :D')
    }else{
        setResultado('Você Não Tem Dinherio o Suficiente!! :( ')
    }


}

  return (
    <div>
      <button onClick={atividade}>Exercicio 5.25</button>

      {resultado}
    </div>
  )
}

export default Atividade
