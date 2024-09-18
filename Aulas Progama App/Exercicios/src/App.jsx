import { useState } from 'react'
import './App.css'
import ArCondicionado from './pages/ArCondicionado'
import Porquinho from './pages/Porquinho'
import Cabeca from './components/Cabeca'
import JucaFerias from './pages/JucaFerias'
import Democracia from './pages/Democracia'
import CopoMeioCheio from './pages/CopoMeioCheio'
import DoisCopos from './pages/DoisCopos'
import PesquisaHabitantes from './pages/PesquisaHabitantes'

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
          <button onClick={() => setPagina(<Democracia />)}>5.28</button>
          <button onClick={() => setPagina( <CopoMeioCheio /> )}>5.29</button>
          <button onClick={() => setPagina(<DoisCopos />)}>5.30</button>
          <button onClick={() => setPagina()}>5.31</button>
          <button onClick={() => setPagina(<JucaFerias />)}>5.7</button>
          <button onClick={() => setPagina(<PesquisaHabitantes/>)}>7.10</button>
        </nav>
      </div>
      <div className='div-app-body'>
        {pagina}
      
      </div>
      <div className='dia-rodape'>

      </div>

    </div>
    
  )
}

export default App
