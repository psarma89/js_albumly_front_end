class Adapter{
  static getUserData(email){
    return fetch('http://localhost:3000/api/v1/users').then(resp => resp.json()).then(json => json.find(user => user.email === email.toLowerCase()))
  }
}
