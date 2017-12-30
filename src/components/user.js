class User {
  constructor(obj) {
    this.id = obj.id
    this.firstName = obj.first_name
    this.lastName = obj.last_name
    this.fullName = obj.first_name + " " + obj.last_name
    this.email = obj.email
    this.events = []
    this.populateEvents(obj.events)
    this.media = []
    this.populateMedia(obj.media)
    this.messages = []
    this.populateMessages(obj.messages)
    User.all.push(this)
  }

  populateEvents(array){
    array.forEach(event => {
      const newEvent = new Event(event)
      this.events.push(newEvent)
    })
  }

  populateMedia(array){
    array.forEach(medium => {
      const newMedium = new Medium(medium)
      this.media.push(newMedium)
    })
  }

  populateMessages(array){
    array.forEach(message => {
      const newMessage = new Message(message)
      this.messages.push(newMessage)
    })
  }

}
