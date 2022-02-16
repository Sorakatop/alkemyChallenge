import { useState } from "react";
import {button} from '../taildwind/styles'
//component
import Register from './login-register/Register'
import Login from './login-register/Login'


export default function App() {   
    const [register,setRegister] = useState(false)
    return(
      <div  className="grid">
        {        
          !register? <Login/> : <Register/>          
        }
      <div>
      {
        !register?        
        <>
        <h1>No tenes cuenta?</h1>        
        <button className={button} onClick={()=>{setRegister(true)}} type="submit">Registrate</button>
        </>
        :
        <>
        <h1>Tenes cuenta?</h1>          
        <button className={button} onClick={()=>{setRegister(false)}} type="submit">Logeate</button>
        </>

      }
      </div>

      </div>
    )

}