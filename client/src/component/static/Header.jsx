import React from 'react'
import {Link} from 'wouter'
//styles
import {title} from '../../taildwind/styles'
//hooks
import useUser from '../../hooks/useUser'


const Header = () => {
  const {isLogged, logout} = useUser()
  const handleClick=e=>{
    e.preventDefault();
    logout()
  }

    return (
        
    <div className="bg-violet-500 flex p-6 shadow-sm">
      <h1 className={title}> Alkemy Challenge </h1>
      {
        isLogged
        ? <Link to="/logout" onClick={handleClick}>Cerrar sesion</Link>
        : <Link to="/login"  onClick={handleClick}>Logeate</Link>
      }
     </div>
        
    )
}

export default Header
