import React from 'react'
import Header from '../components/Header'
import './Sorteio.css'

function Sorteio(props) {
    function sorteio(){
        let bol = false
        let max = 100
        let numeroAleatorio = Number(Math.floor(Math.random() * max +1))
            
        alert(numeroAleatorio)
            
    }
  return (
    
    <div className='sorteio-container'>

        <div className='div-header-sorteio'>

            <Header texto ={'Sorteio'} emoji ={'    🎲'}/>
        </div>
        <div className='div-botao-sorteio'>

            <button className='button-sorteio' onClick={sorteio}>Sortear Número</button>
        </div>

    </div>
  )
}

export default Sorteio
