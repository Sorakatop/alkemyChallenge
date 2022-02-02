import React, {useState} from 'react'

const Context = React.createContext({})

export function UserContextProvider ({children}) {
   
    const [jwt, setJWT] = useState(
      
        //para que no se recarge 2 veces con la misma info 
        //encerramos el seteo en una funcion 
        () => window.sessionStorage.getItem('jwt')
      )
   
   

        return<Context.Provider value={{jwt,setJWT}}>        
            {children}
          </Context.Provider>
    }
    export default Context