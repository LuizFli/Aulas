import { useState } from 'react'
import './App.css'
import Atividade527 from './pages/Atividade527'
import Atividade528 from './pages/Atividade528'
import Atividade529 from './pages/Atividade529'
import Body from './components/Body'
import Inputs from './pages/Inputs'
import Atividade530 from './pages/Atividade530'

function App() {

  return (
    <div className="app-container-geral">

      <div className='div-app-container-body'>
        <Body texto ={'Atividades'} emoji ={'    ⛳👿🤡👹👺'}/>

        

      </div>
        <div className='div-app-atividade'>

          {/* <Inputs /> */}
        {/* <Atividade527 /> */}
        {/* <Atividade528 /> */}
         {/* <Atividade529 /> */}
         <Atividade530 />
         
        </div>
    </div>

  )
}

export default App
