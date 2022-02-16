import React from 'react'
import check from '../../icons/clipboard-check.svg'

const Operation = () => {
  return (
    <div>
        Operaciones
        <form>
        <table>
            <tbody>          
              <tr>
                <th>Monto</th> 
                <th>Categoria</th>
                <th>Tipo de Operacion</th>
                <th>Concepto</th> 
                <th>Guardar</th>          
              </tr>
            <tr>
                <td>
                    <input type="text" placeholder="$"/>
                </td>
                <td>
                    <select>
                        <option>Ingreso</option>
                        <option>Egreso</option>
                    </select>
                </td>
                <td>
                    <input type="text" placeholder="Tipo de gasto"/>
                </td>
                <td>
                    <input type="text" placeholder="En concepto de"/>
                </td>
                <td>
                    <button type="submit"><img src={check}/></button>
                </td>
            </tr>
            </tbody>
        </table>
      </form>
    </div>
  )
}

export default Operation