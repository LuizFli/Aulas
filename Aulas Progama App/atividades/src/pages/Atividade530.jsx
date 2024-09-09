/*5.30 - Dois copos meio cheios: Faça um programa para ler um número e imprimir uma mensagem dizendo se o mesmo é par e positivo ao mesmo tempo.*/ 
import'./Atividade530.css'
import React, { useState } from 'react'

function Atividade530() {
    const [inputNumero, setInputNumero] = useState()
    const [resultado, setResultado] = useState() 
    const [cor, setColor] = useState()
    
    function ler(e){
        // console.log(e)
        // setInputNumero(e.target.value)
        switch (true) {
            case ((e.target.value)%2 == 0 && Number(e.target.value)>0):
                
                setResultado('É Pár e Positivo')
                setColor('green')
                break;
            case ((e.target.value)%2 == 0 ):
                
                setResultado('É Par')
                setColor('brown')
                break;
            case (Number(e.target.value)>0):
                
                setResultado('É Positivo')
                setColor('brown')
                break;
            case ((e.target.value)%2 != 0 && Number(e.target.value)>0):
                
                setResultado('Não é Par Mas é positivo')
                setColor('brown')
                    break;
            case ((e.target.value)%2 == 0 && Number(e.target.value)<0):
                
                setResultado('É Par Mas Não é positivo')
                setColor('brown')
                    break;
            case ((e.target.value)%2 != 0 && Number(e.target.value)<0):
                
                setResultado('Não é Par Nem é positivo')
                setColor('brown')
                    break;
            default:
                setResultado('Error')
                setColor('brown')
                break;
        }
        
    }

  return (
    <div className='div-530-container'>
        <div>

      <label >Digite Um Numero :</label>
        </div>
        <div className='div-input' style={{color: cor}}>

      <input type="text" placeholder='Digite Um Numero' value={inputNumero} onChange={ler}/>
      {resultado}
        </div>

    </div>
  )
}

export default Atividade530
