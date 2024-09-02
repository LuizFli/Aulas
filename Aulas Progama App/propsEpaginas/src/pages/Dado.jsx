import React, { useState } from 'react'
import './Dado.css'
import { GiPerspectiveDiceSixFacesSix, GiPerspectiveDiceSixFacesOne, GiPerspectiveDiceSixFacesTwo, GiPerspectiveDiceSixFacesThree, GiPerspectiveDiceSixFacesFour, GiPerspectiveDiceSixFacesFive } from "react-icons/gi";

function Dado() {
const dados = [<GiPerspectiveDiceSixFacesOne />,<GiPerspectiveDiceSixFacesTwo />,<GiPerspectiveDiceSixFacesThree />,<GiPerspectiveDiceSixFacesFour />,<GiPerspectiveDiceSixFacesFive />,<GiPerspectiveDiceSixFacesSix />] 
const [numeroDado, setDado] = useState()
const [numeroDados, setNumerdoDado] = useState()

    function jogarDado(){

        let max = 6
        let dado = Number(Math.floor(Math.random() * max))
        
          setDado(dados[dado])   
          setNumerdoDado(dado +1)     

    }

  return (
    <div className='corpoDado'>
        <div className="lblDado">

        {numeroDado}
        {numeroDados}


        {/* <GiPerspectiveDiceSixFacesOne />
        <GiPerspectiveDiceSixFacesTwo />
        <GiPerspectiveDiceSixFacesThree />
        <GiPerspectiveDiceSixFacesFour />
        <GiPerspectiveDiceSixFacesFive />
        <GiPerspectiveDiceSixFacesSix /> */}
        

        </div>
        <div className="butDado">

      <button className='butaoDado' onClick={jogarDado}>Rolar Dado</button>
        
        </div>
    </div>
  )
}

export default Dado
