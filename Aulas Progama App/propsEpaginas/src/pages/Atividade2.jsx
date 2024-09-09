/* 5.26 - Ponderações(: Faça um programa que receba quatro notas, sendo que cada nota só poderá receber valores de 0 a 10, calcule e mostre a média ponderada, sabendo que o usuário irá entrar com o peso de cada nota, caso a media ponderada seja:  Media maior ou igual a 7 – ALUNO APROVADO  Media menor que 7 – ALUNO REPROVADO */
import React, { useState } from 'react'

function Atividade2() {

    const [status, setStatus] = useState()
    const vetorNotas = []
    const vetorPesos = []
    let cont = 0
    let dadoNota
    let dadoPeso
    let n = 1
    let bol = true
    let somatorioNotas = 0

    function atividade2(){
        do {
            while(bol){

                dadoPeso = Number(prompt('Digite O peso da '+n+'° Nota ( exemplo 0.1, 0.2...etc)'))
                dadoNota = Number(prompt('Digite Quanto Foi a '+n+'° Nota'))
                if(dadoNota >=0 && dadoNota<=10 && dadoPeso >=0 && dadoPeso <= 1){
                    
                    vetorNotas.push(dadoNota)
                    vetorPesos.push(dadoPeso)
                    cont++
                    n++
                    bol = false

                    
                }else{
                    alert('Digite Notas Entre 0 a 10')
                    
                }
                
            }
            bol = true
        } while (cont < 4);

        for (let i = 0; i < vetorNotas.length; i++) {
            const nota = vetorNotas[i];
            const peso = vetorPesos[i]
            
            somatorioNotas += (nota*peso)
        }


        if(somatorioNotas >= 7){

            setStatus('Aprovado')
        }else{

            setStatus('Reprovado')
        }

        alert(somatorioNotas)
        alert(vetorNotas)
        alert(vetorPesos)
    }

  return (
    <div>

      <button onClick={atividade2}>Exercicio 5.26</button>
      
      {status}

    </div>
  )
}

export default Atividade2
