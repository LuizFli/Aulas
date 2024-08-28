import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'
import Sorteio from './pages/Sorteio'


function App() {
 

  return (
    <div className='app-container'>
      <div className='div-app-cadastro'>

        {/* <Cadastro />
        <Home /> */}
        <Sorteio />
        {/* <Body /> */}

        

      </div>
    </div>
        

  )
}

export default App
