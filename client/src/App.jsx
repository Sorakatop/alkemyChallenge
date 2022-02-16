import React from 'react'
//components
import Header from './component/static/Header'
//context
import {UserContextProvider} from './context/Usercontext'
import AppRouter from './router/AppRouter'

function App() {
  
  return (
   <UserContextProvider>
     <div className="bg-gray-100"> 
     <Header/>   
     <AppRouter/>
    </div>
  </UserContextProvider>
 
  );
}

export default App;
