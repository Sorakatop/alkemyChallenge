import {BrowserRouter as Router} from 'react-router-dom'

import Login from '../component/Index';
import Dashboard from '../component/Dashboard'
//custom hook
import useUser from '../hooks/useUser'




export default function AppRouter(){
const {isLogged} = useUser()

    return (
    <Router>
        {!isLogged? <Login/>  : <Dashboard/>}
    </Router>
       
    )
}