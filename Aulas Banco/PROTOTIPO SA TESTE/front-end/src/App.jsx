import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  function handleClick(e) {

    setName(e.target.value)
    console.log(name)

  }

  // const handleClick = async (e) => {

    


  // }

  return (
    <div className='div-container'>

      <label htmlFor="inplabel">Username</label>
      <input

        type="text"
        id="inplabel"
        className="inplabel"
        value={name}
        onChange={(e) => setName(e.target.value)}

      />

      <button className='but' onClick={handleClick}>CADASTRAR</button>


    </div>

  )
}

export default App
