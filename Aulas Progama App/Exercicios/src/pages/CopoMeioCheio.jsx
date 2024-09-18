import React, { useState } from 'react'

function CopoMeioCheio() {
    
    const [leitura, setLeitura] = useState()

    function botao(){

        let volume = Number(prompt('Digite o volume: '))
        
        if(volume > 0){
            setLeitura('Positivo')
        }
        if(volume < 0){
            setLeitura('Negativo')
        }
        if(volume == 0){
            setLeitura('Nulo')
        }

    }
  return (
    <div>
      <button onClick={botao}>Atividade 5.29</button>
      {leitura}
    </div>
  )
}

export default CopoMeioCheio
