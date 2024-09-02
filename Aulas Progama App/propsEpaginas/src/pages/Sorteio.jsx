import React, { useState } from 'react'
import Header from '../components/Header'
import './Sorteio.css'


function Sorteio() {
    const [numero, setNumero] = useState(22)

    function sorteio(){
        // let bol = false
        let max = 100
        let numeroAleatorio = Number(Math.floor(Math.random() * max +1))
        setNumero(numeroAleatorio)
            
        // alert(numeroAleatorio)
            
    }
    function aumentar(){
        setNumero(numero +1)
    }
    function diminuir(){
        setNumero(numero -1)
    }
  return (
    
    <div className='sorteio-container'>

        <div className='div-header-sorteio'>

            <Header texto ={'Sorteio'} emoji ={'    🎲'}/>
        </div>
        <div className='div-botao-sorteio'>

                <button onClick={aumentar}className='butMais'>+</button>
            <div className="numero">

            {numero}

            </div>

                <button onClick={diminuir} className='butMenos'>-</button>

            <button className='button-sorteio' onClick={sorteio}>Sortear Número</button>
        </div>

    </div>
  )
}

export default Sorteio
