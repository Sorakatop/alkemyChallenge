import {BrowserRouter as Router , Route ,Switch,Redirect} from 'react-router-dom'
import Historial from '../component/Historial';
import Info from '../component/Info';
import Login from '../component/Login';
import Dashboard from '../component/Dashboard'
import PrivateRoutes from '../router/PrivateRoutes'
//custom hook
import useUser from '../hooks/useUser'




export default function AppRouter(){
const {isLogged} = useUser()

    return (
        <Router>
     {
                !isLogged? <Login/>  : 
            <div className="flex h-screen">
                <Dashboard/>                 
            </div>
     }
         </Router>
       
    )
}