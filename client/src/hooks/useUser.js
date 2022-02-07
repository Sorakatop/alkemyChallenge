import {useCallback, useContext} from 'react'
import Context from '../context/Usercontext'
import loginService from '../services/login'
import registerService from '../services/register'

export default function useUser () {
  const { jwt, setJWT} = useContext(Context)

 
  console.log(jwt)
 
  const login = useCallback(({email, password}) => {
   console.log({email, password})
    loginService({email, password})
      .then(data => {
        window.sessionStorage.setItem('jwt',data.token)
        
        setJWT(data);
      
        return data
        
      })
      .catch(err => {
        window.sessionStorage.removeItem('jwt')
        console.error(err)
      })
  }, [setJWT])

  const formRegister=useCallback(({email,password,name})=>{
    console.log({email, password,name})
    registerService({email,password,name})
    
  })

  const logout = useCallback(() => {
   
    window.sessionStorage.removeItem('jwt')
    setJWT(null);
   
  }, [setJWT])

  return {
   isLogged: Boolean(jwt),
    jwt ,  
    login,
    logout,
    formRegister,
    }
} 