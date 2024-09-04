/*5.27 - Ligar o ar condicionado: Faça um programa onde o usuário irá escolher se quer converter graus Celsius para Fahrenheit ou Fahrenheit para Celsius. Após a ecolha, faça uma leitura e converta para a unidade escolhida.*/

import React, { useState } from 'react'

function Atividade527() {
    const [leitura, setLeitura] = useState()
    let fah,cel,escolha

    function ar(){
        escolha = Number(prompt('Digite:\n\n1- Celsius para Fahrenheit\n2- Fahrenheit para Celsius'))
        
        switch (escolha) {
            case 1:
                cel = Number(prompt('Digite a temperatura em celsius:'))

                fah = Number((cel*1.8) +32).toFixed(2)
                setLeitura('Temperatura em F°'+fah)
                
                break;
            case 2:
                fah = Number(prompt('Digite a temperatura em celsius:'))

                cel = Number((fah-32) /1.8).toFixed(2)
                setLeitura('Temperatura em C°'+cel)

                break;
        
            default:
                alert('Escolha Não Existente!!!')
                break;
        }


    }

  return (
    <div>

        <button onClick={ar}>Exercicio5.27</button>
        {leitura}
      
    </div>
  )
}

export default Atividade527
