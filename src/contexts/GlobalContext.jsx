import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

    const [senhas, setSenhas] = useState([
        {
            id: 1,
            tipo: "Normal"
        },
       
    ])

    return(
        <GlobalContext.Provider value={{senhas, setSenhas}}>
            {children}
        </GlobalContext.Provider>
    )
}