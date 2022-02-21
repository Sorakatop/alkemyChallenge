import React,{ useState} from 'react'
import check from '../../icons/clipboard-check.svg'
import useUser from '../../hooks/useUser'
const Operation = () => {
  //estados
   const [amount,setAmount] = useState('')
  const [category_id,setCategory] = useState('')
  const [operation_type,setOperation_type] = useState('')
  const [concept,setConcept] = useState('')
  //customHook
  const {addOperation,jwt} = useUser()
  //handlers
  const handleOperation = (e) =>{
    const optionOperation = e.target.value;
    setOperation_type(optionOperation)
}
const handleCategory = (e) =>{
  const optionCategory = e.target.value;
  setCategory(optionCategory)
}
   //handlers
   const handleSubmit = (e) => {
     const user_id = jwt.user.id
    e.preventDefault();
    const data = { amount,category_id,operation_type,concept,user_id }
    addOperation(data)    
   }

  
  return (
    <div>
        Operaciones 
        <form onSubmit={handleSubmit}>
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
                    <input
                    type="text"
                    placeholder="$"
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                    />
                </td>
                <td>
                    <select name="category_id"  onClick={handleCategory}>
                       <option value="1">Comida</option>
                       <option value="2">Vestimenta</option>
                     </select>
                </td>
                <td>
                    <select name="operation_type" onClick={handleOperation}>
                        <option value="egreso">Egreso</option>
                        <option value="ingreso">Ingreso</option>
                    </select>
                </td>
                <td>
                    <input 
                    name="concept"
                    type="text"
                    placeholder="En concepto de"
                    onChange={(e) => setConcept(e.target.value)}
                    value={concept}
                    />
                </td>
                <td>
                    <button type="submit"><img alt="icono check" src={check}/></button>
                </td>
            </tr>
            </tbody>
        </table>
      </form>
    </div>
  )
}

export default Operation