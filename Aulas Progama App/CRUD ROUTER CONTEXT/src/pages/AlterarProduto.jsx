import React, { useContext, useState } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import Navbar from '../components/Navbar'
import './AlterarProduto.css'


function AlterarProduto() {
    const { state, setState } = useContext(GlobalContext)
    const [inputProduto, setInputProduto] = useState()

    return (
        <div className='div-container'>
            <Navbar />

            <h1>Alteração Magica</h1>
            <p>Produto Atual: {state}</p>


            <div className='input-container'>

                <label htmlFor="inplbl">Alterar Produto  :  -- </label>
                <input id='inplbl' type="text" onChange={(event) => setInputProduto(event.target.value)} />

            </div>

            <button onClick={() => {
                      if(inputProduto != ''){

                        setState(inputProduto)
            
                    }

            }}> Atualizar </button>


        </div>
    )
}

export default AlterarProduto
