import React, { useState } from 'react'
import './ArCondicionado.css'
import { FaExchangeAlt } from "react-icons/fa";

function ArCondicionado() {
    const [inputCelsius, setInputCelsius] = useState()
    const [inputFahrenheit, setInputFahrenheit] = useState()
    function mudouCelsius(e){
        setInputCelsius(e.target.value)
        let F = e.target.value

        F = (F * 1.8) +32
        setInputFahrenheit(F.toFixed(1))
    }
    function mudouFahrenheit(e){
        setInputFahrenheit(e.target.value)
        let C = e.target.value
        C = (C - 32) / 1.8
        setInputCelsius(C.toFixed(1))
    }

  return (
    <div className='div-container-arcond'>
     
      <p>
      5.27 - Ligar o ar condicionado: Faça um programa onde o usuário irá escolher se quer converter graus Celsius para Fahrenheit ou Fahrenheit para Celsius. Após a ecolha, faça uma leitura e converta para a unidade escolhida.
      </p>
      <div className="form-container">
          <div className="divC">
              <label htmlFor="inpC">Celsius</label>
              <input type="number" id='inpC'
              value={inputCelsius}
              onChange={mudouCelsius}
              />
          </div>
          <div>
          <FaExchangeAlt />
          </div>
          <div className="divF">
              <label htmlFor="inpF">Fahrenheit</label>
              <input type="number" id='inpF'
              value={inputFahrenheit}
              onChange={mudouFahrenheit}
              />
          </div>
      </div>
      

    </div>
  )
}

export default ArCondicionado
