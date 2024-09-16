import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ArCondicionado from './pages/ArCondicionado'
import Porquinho from './pages/Porquinho'
import Cabeca from './components/Cabeca'
import JucaFerias from './pages/JucaFerias'

function App() {
  const [pagina, setPagina] = useState()

  return (
    
    <div className='div-app-container'>
      <div className='div-app-header'>

        <Cabeca h='Exercício' h2 = '          😎😎' />

      </div>
      <div className='div-nav'>
        <nav>
          <button onClick={() => setPagina(<Porquinho />)}>5.25</button>
          <button onClick={() => setPagina(<ArCondicionado />)}>5.27</button>
          <button onClick={() => setPagina(<JucaFerias />)}>5.7</button>
          <button onClick={() => setPagina()}>5.29</button>
          <button onClick={() => setPagina()}>5.30</button>
          <button onClick={() => setPagina()}>5.31</button>
        </nav>
      </div>
      <div className='div-app-body'>
        {pagina}
      
      </div>

    </div>
    
  )
}

export default App
