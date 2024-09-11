import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OlaUser from './components/OlaUser'
import Login from './components/Login'
import AreaParaAdultos from './components/AreaParaAdultos'

function App() {
  const [logado, setLogado] = useState(true)
  const [idade, setIdade] = useState(0)

  function logar(){
    setLogado(true)
  }
  // function deslogar(){
  //   setLogado(false)
  // }

  return (
    <>
    <div className="div-app-container">

      {logado && <OlaUser />}
      <button onClick={logar}>Logar</button>
      <button onClick={ () => {setLogado(false)} }>Deslogar</button>
      <button onClick={ () => setLogado(!logado) }>Alterar</button>

      <button onClick={ () => {
        
        let count = 0
        const maxCount = 15
        const delay = 500
        const intervalId = setInterval(() => {
          
          if(count%2 == 0){
            setLogado(false)
          }else{
            setLogado(true)
          }
          count++
          
          if (count >= maxCount) {
            
            clearInterval(intervalId); // Para o intervalo quando atingir o número máximo de iterações
          }
        }, delay);
        
      } }>Loop</button>


    </div>
    <div className='div-app-container'>
      
      { idade>=18 && <AreaParaAdultos /> }
      

      <button onClick={ () => {setIdade(idade - 1)} }>-</button>
      {idade}
      <button onClick={ () => {setIdade(idade + 1)} }>+</button>
      <button onClick={ () => {setIdade(0)} }>Reset</button>

      
    </div>
    <div className="div-app-container">

      {logado==true ? <OlaUser /> : <Login /> }
      
    </div>
    
      </>
  )
}

export default App
