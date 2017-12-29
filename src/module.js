class Module{
  static renderSignUpForm(email){
    return `<div class="container-fluid">
      <div class="row">
        <div class="col-xs-4">
          <a href="#" class="lead" data-value="back-to-sign-in">Sign In</a>
        </div>
        <div class="col-xs-4">
          <h1 class="text-center">Create an Account</h1><br>
          <form action="/">
            <div class="form-group">
              <label for="first-name">First Name:</label>
              <input type="text" class="form-control" data-value="first-name">
            </div>
            <div class="form-group">
              <label for="last-name">Last Name:</label>
              <input type="text" class="form-control" data-value="last-name">
            </div>
            <div class="form-group">
              <label for="email">Email address:</label>
              <input type="email" class="form-control" data-value="email" value="${email}">
            </div>
            <div class="form-group text-center">
              <span class= "text-danger" data-value="email-error"></span><br><br>
              <button type="submit" class="btn btn-primary btn-lg" data-value="create">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>`
  }

  static renderProfilePage(obj){
    return `<h1></h1>`
  }

  static renderLoginPage(){
    return `<div class="container-fluid">
            <div class="row text-center">
              <div class="col-xs-4 col-xs-offset-4">
                <h1>Welcome to Albumly</h1><br>
                <div class="input-group input-group-lg">
                  <span class="input-group-addon">
                    <span class="glyphicon glyphicon-envelope"></span>
                  </span>
                  <input class="form-control" type="text" placeholder="Email address" data-value="email-input">
                </div><br>
                <span class= "text-danger" data-value="email-error"></span><br><br>
                <button type="submit" class="btn btn-primary btn-lg" data-value="sign-in">Sign In</button>
              </div>
            </div>
          </div>`
  }

}
