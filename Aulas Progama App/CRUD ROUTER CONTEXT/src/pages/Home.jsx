import Navbar from "../components/Navbar"
import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
function Home() {
    const {produtoMagico,state} = useContext(GlobalContext)
 

  return (
    <div>
        <Navbar />
      <h1>Página home do site</h1>
      <p>Olá {state}</p>

    </div>
  )
}

export default Home
