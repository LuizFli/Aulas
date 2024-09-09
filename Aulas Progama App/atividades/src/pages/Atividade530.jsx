/*5.30 - Dois copos meio cheios: Faça um programa para ler um número e imprimir uma mensagem dizendo se o mesmo é par e positivo ao mesmo tempo.*/ 
import'./Atividade530.css'
import React, { useState } from 'react'

function Atividade530() {
    const [inputNumero, setInputNumero] = useState()
    const [resultado, setResultado] = useState()

    function ler(e){
        console.log(e)
        

    }

  return (
    <div className='div-530-container'>

      <label >Digite Um Numero :</label>
      <input type="number" placeholder='Digite Um Numero' value={inputNumero} onChange={ler}/>
      {resultado}
    </div>
  )
}

export default Atividade530
