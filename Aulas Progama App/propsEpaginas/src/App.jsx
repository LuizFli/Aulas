import './App.css'
import Header from './components/Header'
import Atividade from './pages/Atividade'
import Atividade2 from './pages/Atividade2'
import Cadastro from './pages/Cadastro'
import Dado from './pages/Dado'
import Home from './pages/Home'
import Sorteio from './pages/Sorteio'


function App() {
 

  return (
    <div className='app-container'>
      <div className='div-app-cadastro'>

        {/* <Dado /> */}
        {/* <Cadastro /> */}
        {/* <Home /> */}
        {/* <Sorteio /> */}
        {/* <Atividade /> */}
        <Atividade2 />

      </div>
    </div>
        

  )
}

export default App
