import React from 'react'
import './Body.css'
import '../pages/Sorteio.jsx'
function Body() {
  return (
    <div className='body-container'>
        
        <button className='button-sorteio' onClick={sorteio}>Sortear Número</button>

    </div>
  )
}

export default Body
