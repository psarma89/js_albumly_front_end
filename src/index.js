document.addEventListener('DOMContentLoaded', () => {

  EventHelper.showLoginPage()

  // Using data-value attribute to make selecting elements uniform
  MAINDIV.addEventListener('click', e => {
    e.preventDefault()
    const clicked = e.target.dataset.value
    if (clicked === "sign-in") {
      const emailInput = document.querySelector("input[data-value='email-input']").value
      EventHelper.findProfile(emailInput)
    }else if (clicked === "create") {
      const firstName = document.querySelector("input[data-value='first-name']").value
      const lastName = document.querySelector("input[data-value='last-name']").value
      const email = document.querySelector("input[data-value='email']").value
      EventHelper.createProfile({firstName: firstName, lastName: lastName, email: email})
    }else if (clicked === "back-to-sign-in") {
      EventHelper.showLoginPage()
    }
  })

})
