/*5.28 - DEMOcracia: faça um programa que leia a idade dos candidatos à presidência e de seus vices e depois indique qual chapa acumula mais experiência. Considere que estamos no segundo turno, com duas chapas candidato+vice.*/

import React, { useState } from 'react'

function Atividade528() {

    const [leitura, setLeitura] = useState()

    function eleicao(){
        
        let array =[]
        let vetorTotais = []
        let presi,vice,soma
        let cont,n = 1
        let maiorIdade = 0
        let chapa
        
        cont = Number(prompt('Quantas Chapas?:'))
        
        do {
            
            let obj = {

                idade:  Number(prompt('Qual a Idade do presidente da '+n+'° chapa:')),
                idadeVice:  Number(prompt('Qual a Idade do vice da '+n+'° chapa:'))
            }


            // obj.idade = presi
            // obj.idadeVice = vice

            array.push(obj)

            cont--
            n++

        } while (cont >= 1);

        for(let i = 0; i < array.length; i++){

            presi = Number(array[i].idade)
            vice = Number(array[i].idadeVice)
            soma = presi + vice
            vetorTotais.push(soma)

        }
        for(let i = 0; i < vetorTotais.length ; i++){

            if(vetorTotais[i] > maiorIdade){

                maiorIdade = vetorTotais[i]
                chapa = i+1

            }
        }
        
        alert(vetorTotais)
        console.log(array)
        setLeitura('A chapa com a Maior idade é a '+chapa+'° chapa Idade: '+maiorIdade)
    }
    
  return (
    <div>
      
        <button onClick={eleicao}>Atividade 5.28</button>
        {leitura}

    </div>
  )
}

export default Atividade528
