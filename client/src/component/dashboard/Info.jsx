import React from 'react'
import {button} from '../../taildwind/styles'
import useUser from '../../hooks/useUser'
const Info = () => { 
const {jwt} = useUser()
    return ( 
        <div >
            <h1 className='text-4xl font-bold mb-10'>
                Balance de {jwt.user.name}
            </h1>
            <div >
            <div className="bg-white p-6 rounded shadow-sm">
                <div className="p-6 ">
                    <h1 className="text-lg font-bold">Saldo no existe </h1>
                    <h1 className="text-2xl font-bold">  </h1>
                </div>
                <div className="flex ">
                <button type="button" className={button}>Añadir dinero</button>
                <button type="button" className={button}>Operaciones</button>
                </div>
                
            </div>
               
            </div>
        </div>
    )
}

export default Info
