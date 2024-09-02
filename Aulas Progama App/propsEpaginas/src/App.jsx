import './App.css'
import Header from './components/Header'
import Cadastro from './pages/Cadastro'
import Dado from './pages/Dado'
import Home from './pages/Home'
import Sorteio from './pages/Sorteio'


function App() {
 

  return (
    <div className='app-container'>
      <div className='div-app-cadastro'>

        <Dado />
        {/* <Cadastro /> */}
        {/* <Home /> */}
        {/* <Sorteio /> */}

      </div>
    </div>
        

  )
}

export default App
