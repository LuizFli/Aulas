import React from 'react'
import './Cadastro.css'
import Header from '../components/Header'

function Cadastro(props) {
    function cadastrar(){
        alert('Cadastrado Com Sucesso No Mundoi DOS Dinossaurios')
    }
  return (
    <div className='cadastro-container'>

      <Header texto ={'Cadastro'} emoji ={'    ⛳👿🤡👹👺'}/>
      <div className='div-div-cadastrar'>
        <div className='div-cadastrar'>

        <label>Nome</label>
        <input type="text" />
        <label>Altura</label>
        <input type="text" />
        <button onClick={cadastrar}>Cadastrar</button>
        </div>
      </div>


    </div>
  )
}

export default Cadastro
