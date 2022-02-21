import React from 'react'
import {headTable,bodyTable} from '../../taildwind/styles'
import useUser from '../../hooks/useUser'


const Historial = () => {
const {jwt} = useUser()
const data = jwt.user.Operation
    return (        
        <div className='width-2/4 p-6 '>           
             <h1 className='text-4xl font-bold mb-10'>
                Historial
            </h1>
            {!jwt
            ? <h1>No tienes operaciones</h1>
            :
            <table className='mt-10 shadow-sm'>
                    <thead className="bg-gray-50">
                        <tr>
                            <th className={headTable}>
                                Monto
                            </th>
                            <th className={headTable}>
                                Categoria
                            </th>
                            <th className={headTable}>
                                Concepto
                            </th>
                            <th className={headTable}>
                                tipo de operation
                            </th>
                            <th className={headTable}>
                                Fecha
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {                               
                     data.map((item,id)=>{                         
                       return (
                           <tr key={id} className="whitespace-nowrap">
                               <td className={bodyTable}>
                                   {item.amount}
                                </td>
                                <td className="px-6 py-4">
                                <div className="text-sm text-gray-900">
                                {item.category_id}
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-500">
                                {item.concept}
                                 </div>
                            </td>
                            <td className={bodyTable}>
                            {item.operation_type}
                            </td>
                            <td className={bodyTable}>
                            {item.updatedAt?item.updatedAt:item.createdAt}
                            </td>
                           </tr>
                       )     
                    })
                     }
                    </tbody>
             </table>   
        }
            

        </div>
    )
}

export default Historial
