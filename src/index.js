document.addEventListener('DOMContentLoaded', () => {
  const signInButton = document.querySelector("button[value='Sign In']")
  const emailInput = document.querySelector("input#inputEmail3")

  signInButton.addEventListener('click', e => {
    e.preventDefault()
    EventHelper.loadProfile(emailInput.value)
  })
})
