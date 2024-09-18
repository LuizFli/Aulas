import React, { useState } from 'react'
import './DoisCopos.css'

function DoisCopos() {
    const [inputNumero, setInputNumero] = useState()
    const [resultado, setResultado] = useState() 
    const [cor, setColor] = useState()
    const [stateClasse, setClasse] = useState('div-530-container')
    
    function ler(e){
        // console.log(e)
        // setInputNumero(e.target.value)
        switch (true) {
            case ((e.target.value)%2 == 0 && Number(e.target.value)>0):
                
                setResultado('É Pár e Positivo')
                setColor('greenyellow')
                setClasse('test')

                break;
            case ((e.target.value)%2 == 0 ):
                
                setResultado('É Par')
                setColor('brown')
                setClasse('testRed')
                break;
            case (Number(e.target.value)>0):
                
                setResultado('É Positivo')
                setColor('brown')
                setClasse('testRed')
                break;
            case ((e.target.value)%2 != 0 && Number(e.target.value)>0):
                
                setResultado('Não é Par Mas é positivo')
                setColor('brown')
                setClasse('testRed')
                    break;
            case ((e.target.value)%2 == 0 && Number(e.target.value)<0):
                
                setResultado('É Par Mas Não é positivo')
                setColor('brown')
                setClasse('testRed')
                    break;
            case ((e.target.value)%2 != 0 && Number(e.target.value)<0):
                
                setResultado('Não é Par Nem é positivo')
                setColor('brown')
                setClasse('testRed')
                    break;
            default:
                setResultado('Error')
                setColor('brown')
                setClasse('testRed')
                break;
        }
    }
  return (
    <div className={stateClasse}>
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

export default DoisCopos
