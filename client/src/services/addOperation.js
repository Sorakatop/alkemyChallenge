import axios from 'axios'

const ENDPOINT = 'http://localhost:3001/api'

export default async function AddService (data) {
    console.log(data)
       try{
           const res = await axios({
               url: `${ENDPOINT}/create`,
               method: 'POST',
               data: data
           })
           return console.log(res)
       } catch (err) {console.log(err);}
    
    
       
      

  }