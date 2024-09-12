import { useState } from 'react'
import './App.css'
import OlaUser from './components/OlaUser'
import Login from './components/Login'
import AreaParaAdultos from './components/AreaParaAdultos'
import Icon from './pages/Icon'

function App() {

  const [logado, setLogado] = useState(true)
  const [img, setImg] = useState(true)
  const [idade, setIdade] = useState(0)
  const [bol, setBol] = useState(false)
  
  const intervalo = setInterval(() => {setImg(!img)},500)
  
  function logar(){
    setLogado(true)
  }
        
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
        const delay = 1000
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

      <button onClick={ () => {setIdade(idade - 1)}} >-</button>
      {idade}
      <button onClick={ () => {setIdade(idade + 1)}} >+</button>
      <button onClick={ () => {setIdade(0)}}>Reset</button>
      <button onClick={ () => {clearInterval(intervalo)}}>Stop</button>
      { idade>=18 && <AreaParaAdultos />}
      { (idade >= 18 && img) && <Icon />}


      
    </div>
    
    <div className="div-app-container">

      {logado==true ? <OlaUser /> : <Login /> }
      
    </div>
    
      </>
  )
}

export default App
