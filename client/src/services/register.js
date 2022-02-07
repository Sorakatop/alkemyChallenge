const ENDPOINT = 'http://localhost:3001/api'

export default function register ({ email, password , name}) {

    return fetch(`${ENDPOINT}/register`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password,name})
    }).then(res => {
      if (!res.ok) throw new Error('Response is NOT ok')
      return res.json()
    
    }).then(res => {
     console.log(res)     
      return res
    }).catch(err => {console.log(err);})
  }