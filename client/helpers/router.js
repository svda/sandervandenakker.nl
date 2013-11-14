Router.configure({
  autoRender: false
});

Router.map( function () {
  this.route('home', {
    path: '/',
    data: function () {
      c2o.Tracker.track(this.route.name);
      return this.route.name;
    }
  });
  this.route('about', {
    path: '/about',
    data: function () {
      c2o.Tracker.track(this.route.name);
      return this.route.name;
    }
  });
  this.route('method', {
    path: '/method',
    data: function () {
      c2o.Tracker.track(this.route.name);
      return this.route.name;
    }
  });
  this.route('work', {
    path: '/work',
    data: function () {
      c2o.Tracker.track(this.route.name);
      return this.route.name;
    }
  });
  /*
  this.route('404', {
    path: '*',
    data: function () {
      c2o.Tracker.track(this.route.name);
      return this.route.name;
    }
  })
  */
});

