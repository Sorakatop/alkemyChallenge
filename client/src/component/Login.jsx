import { useState } from "react";
import {button} from '../taildwind/styles'
import {useLocation } from 'wouter'
import useUser from '../hooks/useUser'



export default function App() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    const [,navigate] = useLocation()
    const {login,formRegister} = useUser()
    const [register,setRegister] = useState(false)

    

     const handleSubmit = (e) => {
         e.preventDefault();
         login({ email, password })
         navigate('/')
        };
     const handleRegister = (e)=>{
       e.preventDefault();
       formRegister({email,password,name})
       navigate('/')
     }
    return(
      <div  className="grid">
        {
          !register
          ? 
          <form onSubmit={handleSubmit}> 
          <input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
                
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />
         <button className={button} type="submit">Submit</button>
      </form>
          :
          <form onSubmit= {handleRegister}>
          <input
              placeholder="Nombre"
              onChange={(e) => setName(e.target.value)}
              value={name}
              />
              <input
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              />
                    
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
             <button className={button} type="submit">Submit</button>
          </form>
        }

      <h1>No tenes cuenta?</h1>
      <button className={button} onClick={()=>{setRegister(true)}} type="submit">Registrate</button>

      </div>
    )

}