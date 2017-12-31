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

  static renderProfilePage(user){
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
                    ${Module.createEventLi(user.events)}
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          <div class="user-content">
          <div class="container-fluid">
            <div class="row text-center">
              <div class="col-xs-4 col-xs-offset-4">
                <h1>${user.firstName}'s Profile</h1><br>
                <div class="table-responsive">
                  <table class="table table-bordered table-striped">
                    <thead>
                      <tr class="info">
                        <th class="text-center">Title</th>
                        <th class="text-center">Number To Text</th>
                        <th class="text-center">Remove</th>
                      </tr>
                    </thead>
                    <tbody data-value="event-table-body">
                      ${Module.createEventTableRows(user.events)}
                    </tbody>
                  </table>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Event Title" data-value="create-event-input">
                </div>
                <button type="submit" class="btn btn-primary" data-value="create-event" data-userid=${user.id}>Create Event</button>
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
      eventLi += `<li><a href="#" data-eventid=${event.id} data-userid=${event.userId} data-value="show-user-event">${event.title}</a></li>`
    })
    return eventLi
  }

  static createEventTableRows(events){
    let eventRows = ""
    events.forEach(event => {
      eventRows += `<tr>
        <td>${event.title}</td>
        <td>${event.twilioNumber}</td>
        <td><a href="#" data-eventid=${event.id} data-value="delete-user-event">Delete</a></td>
      </tr>`
    })
    return eventRows
  }

  static renderEventMedia(event){
    return `<div class="user-content-images">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-xs-4">
                    <h2>${event.title} Images</h2>
                  </div>
                  <div class="col-xs-4 col-xs-offset-4 text-right">
                    <h3><a href="#" data-value="slide-show" data-eventid=${event.id}>Slide Show</a></h3>
                  </div>
                </div>
                <div class="row">
                  ${Module.createMediaImages(event)}
                </div>
              </div>
          </div>
          <div class="user-content-videos">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-xs-4">
                    <h2>${event.title} Videos</h2>
                  </div>
                </div>
                <div class="row">
                  ${Module.createMediaVideos(event)}
                </div>
              </div>
          </div>`
  }

  static createMediaImages(event){
    let mediaImages = ""
    const images = event.media.filter(medium => medium.media_type === "image")
    images.forEach(image => {
      const comment = event.messages.find(message => message.medium_id === image.id)
      mediaImages += `<div class="col-xs-4">
                        <div class="thumbnail">
                          <a href="${image.url}">
                            <img src="${image.url}" style="width:100%">
                            <div class="caption" data-mediaid=${image.id}>
                              <p>${comment ? comment.body : ""}</p>
                            </div>
                          </a>
                        </div>
                      </div>`
    })
    return mediaImages
  }

  static createMediaVideos(event){
    let mediaVideos = ""
    const videos = event.media.filter(medium => medium.media_type === "video")
    videos.forEach(video => {
      const comment = event.messages.find(message => message.medium_id === video.id)
      mediaVideos += `<div class="col-xs-4">
                          <div class="embed-responsive embed-responsive-16by9">
                            <a href="${video.url}">
                              <video class="embed-responsive-item" controls>
                                <source src="${video.url}" type="video/3gpp">
                              </video>
                            </a>
                          </div>
                          <div class="caption" data-mediaid=${video.id}>
                            <p>${comment ? comment.body : ""}</p>
                          </div>
                      </div>`
    })
    return mediaVideos
  }

  static renderSlideShow(event){
    return `<div class="container">
              <div class="row">
                <div class="col-xs-4">
                  <h2>${event.title} Images</h2>
                </div>
                <div class="col-xs-4 col-xs-offset-4 text-right">
                  <h3><a href="#" data-value="show-user-event" data-eventid=${event.id}>Back to Album</a></h3>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12">
                  <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                      ${Module.createCarouselIndicators(event)}
                    </ol>

                    <!-- Wrapper for slides -->
                    <div class="carousel-inner">
                      ${Module.createCarouselInner(event)}
                    </div>

                    <!-- Left and right controls -->
                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                      <span class="glyphicon glyphicon-chevron-left"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                      <span class="glyphicon glyphicon-chevron-right"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>`
  }

  static createCarouselIndicators(event){
    let indicatorLis = ""
    const images = event.media.filter(medium => medium.media_type === "image")
    images.forEach((image, index) => {
      // const comment = event.messages.find(message => message.medium_id === image.id)
      if (index===0) {
        indicatorLis += `<li data-target="#myCarousel" data-slide-to=${index} class="active"></li>`
      }else {
        indicatorLis += `<li data-target="#myCarousel" data-slide-to=${index}></li>`
      }

    })
    return indicatorLis
  }

  static createCarouselInner(event){
    let indicatorDivs = ""
    const images = event.media.filter(medium => medium.media_type === "image")
    images.forEach((image, index) => {
      const comment = event.messages.find(message => message.medium_id === image.id)
      if (index === 0) {
        indicatorDivs += `<div class="item active">
                            <img src="${image.url}" style="width:100%">
                            <div class="carousel-caption">
                              <h3>${comment ? comment.body : ""}</h3>
                            </div>
                          </div>`
      }else {
        indicatorDivs += `<div class="item">
                            <img src="${image.url}" style="width:100%">
                            <div class="carousel-caption">
                              <h3>${comment ? comment.body : ""}</h3>
                            </div>
                          </div>`
      }
    })
    return indicatorDivs
  }
}
