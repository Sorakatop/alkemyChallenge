import React,{ useState } from 'react'
import useUser from '../../hooks/useUser'
import {useLocation } from 'wouter'
import {button} from '../../taildwind/styles'

const Register = () => {
  //estados
  const {formRegister} = useUser()
  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [,navigate] = useLocation()
  //handlers
  const handleRegister = (e)=>{
    e.preventDefault();
    formRegister({email,password,name})
    navigate('/')
  }


  return (
    <div>
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
    </div>
  )
}

export default Register