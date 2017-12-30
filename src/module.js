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
              <button type="submit" class="btn btn-primary btn-lg" data-value="create-user">Create User</button>
            </div>
          </form>
        </div>
      </div>
    </div>`
  }

  static renderProfilePage(obj){
    console.log(User.all[0])
    return `<nav class="navbar navbar-inverse">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="#">Albumly</a>
              </div>
              <ul class="nav navbar-nav">
                <li class="active"><a href="#" data-value="home">Home</a></li>
                <li class="dropdown">
                  <a class="dropdown-toggle" data-toggle="dropdown" href="#">Events<span class="caret"></span></a>
                  <ul class="dropdown-menu" data-value="event-ul">
                    ${Module.createEventLi(obj.events)}
                  </ul>
                </li>
              </ul>
              <form class="navbar-form navbar-right" action="/">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Event Title" data-value="create-event-input">
                </div>
                <button type="submit" class="btn btn-primary" data-value="create-event" data-userid=${obj.id}>Create Event</button>
              </form>
            </div>
          </nav>
          <div class="container-fluid">
            <div class="row text-center">
              <div class="col-xs-4 col-xs-offset-4">
                <h1>${obj.firstName}'s Profile</h1><br>
                <div class="table-responsive">
                  <table class="table table-bordered table-striped">
                    <thead>
                      <tr class="info">
                        <th class="text-center">Title</th>
                        <th class="text-center">Number To Text</th>
                      </tr>
                    </thead>
                    <tbody data-value="event-table-body">
                      ${Module.createEventTableRows(obj.events)}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>`
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

  static createEventLi(events){
    let eventLi = ""
    events.forEach(event => {
      eventLi += `<li><a href="#" data-value=${event.id}>${event.title}</a></li>`
    })
    return eventLi
  }

  static createEventTableRows(events){
    let eventRows = ""
    events.forEach(event => {
      eventRows += `<tr>
        <td>${event.title}</td>
        <td>${event.twilioNumber}</td>
      </tr>`
    })
    return eventRows
  }
}
