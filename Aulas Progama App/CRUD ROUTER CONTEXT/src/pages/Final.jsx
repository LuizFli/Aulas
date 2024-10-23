import { useContext } from "react"
import Navbar from "../components/Navbar"
import { GlobalContext } from "../contexts/GlobalContext"


function Final() {

  let {state} = useContext(GlobalContext)

  
  return (
    <div>
        <Navbar />
      <h1>Final</h1>
      <p>{state}</p>
      <p>Você chegou ao fim da internet, por enquanto...</p>
    </div>
  )
}

export default Final
