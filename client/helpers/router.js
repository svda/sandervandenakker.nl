SEO.configure({
  baseTitle: ' - Sander van den Akker'
});

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
    controller: PageController,
    before: function () {
      SEO.title( 'Web consultant and developer in Amsterdam' );
      SEO.description( 'The increased complexity of the internet makes every large web project a piece of art. I am trying to master the art of web development. This means I care about my craft, and I think about my work.' );
    }
  });
  this.route('about', {
    path: '/about',
    controller: PageController,
    before: function () {
      SEO.title( 'About me' );
      SEO.description( '' );
    }
  });
  this.route('method', {
    path: '/method',
    controller: PageController,
    before: function () {
      SEO.title( 'The method I use' );
      SEO.description( '' );
    }
  });
  this.route('work', {
    path: '/work',
    controller: PageController,
    before: function () {
      SEO.title( 'My track record' );
      SEO.description( '' );
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

