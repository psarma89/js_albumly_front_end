class Adapter{
  static getUserDataAPI(email){
    return fetch('http://localhost:3000/api/v1/users').then(resp => resp.json()).then(json => json.find(user => user.email === email.toLowerCase()))
  }

  static createUserAPI(obj){
    return fetch('http://localhost:3000/api/v1/users',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: {first_name: obj.firstName, last_name: obj.lastName, email: obj.email}})
    }).then(resp => resp.json())
  }

  static createEventAPI(title, userId){
    return fetch(`http://localhost:3000/twilio/event`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title: title, userId: userId})
    }).then(resp => resp.json())
  }

  static deleteEventAPI(eventId){
    return fetch(`http://localhost:3000/api/v1/events/${eventId}`,{
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(resp => resp.json())
  }

  static getEventAPI(eventId){
    return fetch(`http://localhost:3000/api/v1/events/${eventId}`).then(resp => resp.json())
  }
}
