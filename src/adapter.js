class Adapter{
  static getUserData(email){
    return fetch('http://localhost:3000/api/v1/users').then(resp => resp.json()).then(json => json.find(user => user.email === email.toLowerCase()))
  }

  static createUser(obj){
    return fetch('http://localhost:3000/api/v1/users',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: {first_name: obj.firstName, last_name: obj.lastName, email: obj.email}})
    }).then(resp => resp.json())
  }
}
