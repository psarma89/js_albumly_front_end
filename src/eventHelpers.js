class EventHelpers{
  static findProfile(email){
    if (email) {
      Adapter.getUserDataAPI(email).then(userData => {
        if (userData) {
          User.all = []
          const newUser = new User(userData)
          MAINDIV.innerHTML = Module.renderProfilePage(newUser)
        }else {
          MAINDIV.innerHTML = Module.renderSignUpForm(email)
        }
      })
    }else {
      document.querySelector("span[data-value='email-error']").innerHTML = "Please Enter an Email"
    }
  }

  static createProfile(obj){
    Adapter.createUserAPI(obj).then(json => {
      if (json["errors"]) {
        document.querySelector("span[data-value='email-error']").innerHTML = json["errors"][0]
      }else {
        MAINDIV.innerHTML = Module.renderProfilePage(json)
      }
    })
  }

  static showLoginPage(){
    MAINDIV.innerHTML = Module.renderLoginPage()
  }

  static createEvent(title, userId){
    if (title) {
      Adapter.createEventAPI(title, userId).then(json => {
        EventHelpers.findProfile(json.user.email)
      })
    }
  }

  static showEventMedia(){
    
  }

}
