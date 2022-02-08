import React from 'react'
import {headTable,bodyTable} from '../taildwind/styles'
import useUser from '../hooks/useUser'
const Historial = () => {
    const {jwt} = useUser()



    return (
        
        <div className='width-2/4 p-6 '>
            {console.log(jwt.user.Operation[0])}
             <h1 className='text-4xl font-bold mb-10'>
                Historial
            </h1>
            {jwt
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
                        <tr className="whitespace-nowrap">
                            <td className={bodyTable}>
                                {jwt.user.Operation[0].amount}
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-900">
                                {jwt.user.Operation[0].category_id}
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-500">
                                {jwt.user.Operation[0].concept}
                                 </div>
                            </td>
                            <td className={bodyTable}>
                            {jwt.user.Operation[0].operation_type}
                            </td>
                            <td className={bodyTable}>
                            {jwt.user.Operation[0].updatedAt?jwt.user.Operation[0].updatedAt:jwt.user.Operation[0].createdAt}
                            </td>
                        </tr>
                    </tbody>
             </table>   
        }
            

        </div>
    )
}

export default Historial
