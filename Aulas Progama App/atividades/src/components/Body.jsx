import React from 'react'

function Body(props) {
    return (
      <div className='body-container'>
  
        <h1>{props.texto}{props.emoji}</h1>
  
      </div>
    )
  }

export default Body
