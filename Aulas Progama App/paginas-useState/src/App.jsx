import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Contato from './pages/Contato'
import MeusLegos from './pages/MeusLegos'

function App() {
  const [pagina, setpagina] = useState(<MeusLegos />)

  return (
    <>

    <nav>
      <button onClick={() => setpagina(<Home/>)}>Home</button>
      <button onClick={() => setpagina(<Contato/>)}>Contato</button>
      <button onClick={() => setpagina(<MeusLegos/>)}>Meus Legos</button>
    </nav>
      {pagina}
    </>
  )
}

export default App
