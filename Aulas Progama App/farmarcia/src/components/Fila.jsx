import React, { useState } from 'react'
import './Fila.css'


function Fila() {

    const [fila, setFila] = useState([])
    const [filaPref, setFilaPref] = useState([])
    const [senhaAtendida, setSenhaAtendida] = useState([])
    const [proximo, setProximo] = useState(1)
    const [proximoPref, setProximoPref] = useState(500)
    function gerarSenhaPref(){

        let senha = {

            numero: proximoPref,
            tipo: 'Preferencial',
      
          }
          setProximoPref(proximoPref + 1)
      
          setFilaPref([...filaPref, senha])

     }
     function gerarSenha() {



        let senha = {
    
          numero: proximo,
          tipo: 'Normal',
    
        }
    
        setProximo(proximo + 1)
    
        setFila([...fila, senha])
    
      }
      function atender() {
    
        if (filaPref.length) {
    
          const senhasAtendidas = filaPref[0]
          setSenhaAtendida([...senhaAtendida, senhasAtendidas])
          setFilaPref(filaPref.slice(1))
    
          return
        }
    
        if (fila.length) {
    
          const senhasAtendidas = fila[0]
          setSenhaAtendida([...senhaAtendida, senhasAtendidas])
          setFila(fila.slice(1))
    
          return
    
        } else {
    
          alert('Não Tem Ninguem Na Fila')
        }
    
    
      }
      

    return (
        <div className='fila-container'>
            <div className='div-but'>
        <button onClick={atender}>Atender</button>
        <button onClick={gerarSenha}>Senha Normal</button>
        <button onClick={gerarSenhaPref}>Senha Preferencial</button>

      </div>
      <div className='div-form'>

        <div className='div-container-sim'>

          <div>

            <h2>Senhas Atendidas</h2>
          </div>
          <div className='div-senhas'>

            {senhaAtendida.map((senha) => (
              <div key={senha.numero}>

                <p> {senha.numero}</p>
                <p> {senha.tipo}</p>

              </div>


            ))}

          </div>
        </div>
        <div className='div-container-nao'>

          <div className='div-h2'>

            <h2>Senhas Na Fila</h2>
          </div>

          <div className="form-fila-senha">

            <div className='div-h2-map'>

              <div className="div-tipo-fila">
                <h3>Fila Preferencial</h3>
              </div>

              <div className='div-senhas'>
                {filaPref.map((senha) => (
                  <div key={senha.numero}>
                    <p> {senha.numero}</p>
                    <p> {senha.tipo}</p>
                  </div>

                ))}

              </div>

            </div>

            <div className='div-h2-map'>

              <div className='div-tipo-fila'>
                <h3>Fila Normal</h3>
              </div>

              <div className="div-senhas">

                {fila.map((senha) => (
                  <div key={senha.numero}>
                    <p> {senha.numero}</p>
                    <p> {senha.tipo}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>


        </div>
    )
}

export default Fila
