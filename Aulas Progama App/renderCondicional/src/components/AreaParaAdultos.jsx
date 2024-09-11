import React, { useState } from 'react'
import './AreaParaAdultos.css'

function AreaParaAdultos() {
    const [logado, setLogado] = useState(true) 
  return (

    <div>
        
        <p>Coisas Para Adultos</p>
        {logado && <img className='logo' src="./public/image/InconProibido.webp"/>}
        <button onClick={ () => {let bol = false}}>Stop Animation</button>
        { () => {
        let count = 0
        const delay = 500
        const intervalId = setInterval(() => {
          
          if(count%2 == 0){
            setLogado(false)
          }else{
            setLogado(true)
          }
          count++
          
          if (false) {
            
            clearInterval(intervalId)
          }
        }, delay);
        } }
        
      
    </div>

  )
}

export default AreaParaAdultos
