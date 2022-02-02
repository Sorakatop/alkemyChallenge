const ENDPOINT = 'http://localhost:3001/api'

export default function login ({ email, password }) {

    return fetch(`${ENDPOINT}/login`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password})
    }).then(res => {
      if (!res.ok) throw new Error('Response is NOT ok')
      return res.json()
    
    }).then(res => {
     console.log(res)     
      return res
    })
  }