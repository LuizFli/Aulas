import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let produtoMagico = 'Varinha'
const [state, setState] = useState('Produtos Magicos')
const [produtos, setProdutos] = useState([])



    return(
        <GlobalContext.Provider value={{produtoMagico,state,setState,produtos, setProdutos}}>
            {children}
        </GlobalContext.Provider>
    )
}
