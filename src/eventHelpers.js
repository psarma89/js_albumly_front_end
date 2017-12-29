class EventHelper{
  static findProfile(email){
    if (email) {
      Adapter.getUserData(email).then(userData => {
        if (userData) {

        }else {
          MAINDIV.innerHTML = Module.renderSignUpForm(email)
        }
      })
    }else {
      document.querySelector("span[data-value='email-error']").innerHTML = "Please Enter an Email"
    }
  }

  static createProfile(obj){
    Adapter.createUser(obj).then(json => {
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

}
