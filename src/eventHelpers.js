class EventHelpers{
  static loadProfileMemory(userData){
    User.all = []
    const newUser = new User(userData)
    MAINDIV.innerHTML = Module.renderProfilePage(newUser)
  }

  static findProfile(email){
    if (email) {
      Adapter.getUserDataAPI(email).then(userData => {
        if (userData) {
          EventHelpers.loadProfileMemory(userData)
        }else {
          MAINDIV.innerHTML = Module.renderSignUpForm(email)
        }
      })
    }else {
      document.querySelector("span[data-value='email-error']").innerHTML = "Please Enter an Email"
    }
  }

  static createProfile(obj){
    Adapter.createUserAPI(obj).then(userData => {
      if (userData["errors"]) {
        document.querySelector("span[data-value='email-error']").innerHTML = userData["errors"][0]
      }else {
        EventHelpers.loadProfileMemory(userData)
      }
    })
  }

  static showLoginPage(){
    MAINDIV.innerHTML = Module.renderLoginPage()
  }

  static createEvent(title, userId){
    if (title) {
      Adapter.createEventAPI(title, userId).then(userData => {
        EventHelpers.loadProfileMemory(userData)
      })
    }
  }

  static deleteEvent(eventId){
    if (eventId) {
      Adapter.deleteEventAPI(eventId).then(userData => {
        EventHelpers.loadProfileMemory(userData)
      })
    }
  }

  static showEventMedia(eventId){

  }

}
