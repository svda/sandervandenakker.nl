Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
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

ProjectPageController = PageController.extend({
  template: 'project',
  data: function () {
    Session.set('project', this.params.slug);
  },
  unload: function () {
    Session.set('project', null);
  }
});

WorkPageController = PageController.extend({
  data: function () {
    Session.set('work_filter', this.params.filter);
  },
  unload: function () {
    Session.set('work_filter', null);
  }
});

Router.map( function () {
  this.route('home', {
    path: '/',
    controller: PageController
  });
  this.route('about', {
    path: '/about',
    controller: PageController,
    before: function () {
      document.title = ('About me - Sander van den Akker');
    }
  });
  this.route('method', {
    path: '/method',
    controller: PageController,
    before: function () {
      document.title = ('The method I use - Sander van den Akker');
    }
  });
  this.route('work', {
    path: '/work',
    controller: PageController,
    before: function () {
      document.title = ('My track record - Sander van den Akker');
    }
  });
  this.route('project', {
    path: '/project/:slug',
    controller: ProjectPageController
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

