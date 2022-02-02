import React from 'react'
import {BrowserRouter as Router , Route ,Switch,Redirect,Link} from 'react-router-dom'
//custom hooks
import useUser from '../hooks/useUser'
//styles
import {li,icon} from '../taildwind/styles'
//icons
import home from '../icons/home.svg' 
import operation from '../icons/shopping-bag.svg'
import historial from '../icons/archive.svg'
import user from '../icons/user-circle.svg'
import ajustes from '../icons/cog.svg'
import logout from '../icons/logout.svg'
//components
import Info from '../component/Info';
import Historial from './Historial'

const Dashboard = () => {
 
    return (  
        <div className="container w-full flex">
        <div className='p-6 border-r w-1/4 border-gray-200'>
          
          <h6 className='mb-8 text-center font-bold text-xl'>Acciones rapidas</h6>
          <ul>
          <li className={li}><img src={home} className={icon} alt='' /> <Link to = '/' className='self-center'>Home</Link> </li>         
          <li className={li}><img src={operation} className={icon} alt=''/> <Link to = '/operaciones' className='self-center'>Operaciones</Link> </li>         
          <li className={li}><img src={historial} className={icon} alt=''/> <Link to = '/historial' className='self-center'>historial</Link> </li>         
          
          <h6 className='mb-8 text-center font-bold text-xl'>Configuracion</h6>
          
          <li className={li}><img src={user} className={icon} alt=''/> <Link to = '/user' className='self-center'>Perfil</Link> </li>                
          <li className={li}><img src={ajustes} className={icon} alt=''/> <Link to = '/configuracion' className='self-center'>Ajustes</Link> </li>  
         {/*  {
            isLogged
            ? <li className={li}><img src={logout} className={icon} alt=''/> <Link to = '/logout' className='self-center'>Logout</Link> </li>     
            : <li className={li}><img src={logout} className={icon} alt=''/> <Link to = '/login' className='self-center'>login</Link> </li> 
          }  */}           
          </ul>
          </div>
          <div className="p-6 w-3/4">
          <Switch>
          <Route exact path="/" component={Info} />
          <Route exact path="/historial" component={Historial} />
          </Switch> 
          </div>

        
        </div>
        
    )
}

export default Dashboard
