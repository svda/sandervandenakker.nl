Router.configure({
  autoRender: false
});

PageController = RouteController.extend({
  data: function () {
    c2o.Tracker.track(this.route.name);
    return this.route.name;
  }
});

LoginPageController = PageController.extend({
  load: function () {
    window.App.state.showLoginButtons = true;
  },
  unload: function () {
    window.App.state.showLoginButtons = false;
  }
});

Router.map( function () {
  this.route('home', {
    path: '/',
    controller: PageController
  });
  this.route('about', {
    path: '/about',
    controller: PageController
  });
  this.route('method', {
    path: '/method',
    controller: PageController
  });
  this.route('work', {
    path: '/work',
    controller: PageController
  });
  this.route('login', {
    path: '/login',
    controller: LoginPageController
  });
  /*
  this.route('404', {
    path: '*',
    data: function () {
      Tracker.track(this.route.name);
      return this.route.name;
    }
  })
  */
});

