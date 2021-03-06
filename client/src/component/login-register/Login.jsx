import React,{ useState } from "react";
import {button} from '../../taildwind/styles'
import {useLocation } from 'wouter'

import useUser from '../../hooks/useUser'

const Login = () => {
    //estados
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')    
    const [,navigate] = useLocation()
    const {login} = useUser()
    //handlers
    const handleSubmit = (e) => {
        e.preventDefault();
        login({ email, password })
        navigate('/')
       }

  return (
    <div>
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
    </div>
  )
}

export default Login