Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

PageController = RouteController.extend({
  onRun: function () {
    c2o.Tracker.track(this.route.name);
    this.next();
  }
});

LoginPageController = PageController.extend({
  onRun: function () {
    window.App.state.showLoginButtons = true;
    this.next();
  },
  onStop: function () {
    window.App.state.showLoginButtons = false;
  }
});

ProjectPageController = PageController.extend({
  template: 'project',
  onRun: function () {
    Session.set('project', this.params.slug);
    this.next();
  },
  onStop: function () {
    Session.set('project', null);
  }
});

WorkPageController = PageController.extend({
  onRun: function () {
    Session.set('work_filter', this.params.filter);
    this.next();
  },
  onStop: function () {
    Session.set('work_filter', null);
  }
});

Router.map( function () {
  this.route('home', {
    path: '/',
    controller: PageController,
    onRun: function () {
      SEO.title( 'Web consultant and developer in Amsterdam' );
      SEO.description( 'The increased complexity of the internet makes every large web project a piece of art. I am trying to master the art of web development. This means I care about my craft, and I think about my work.' );
      this.next();
    }
  });
  this.route('about', {
    path: '/about',
    controller: PageController,
    onRun: function () {
      SEO.title( 'About me' );
      SEO.description( '' );
      this.next();
    }
  });
  this.route('work', {
    path: '/work',
    controller: PageController,
    onRun: function () {
      SEO.title( 'My track record' );
      SEO.description( '' );
      this.next();
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
  this.route('google-site-verification', {
    where: 'server',
    path: '/google5cdf235f6e93d8e8.html',
    action: function () {
      this.response.writeHead(200, {'Content-Type': 'text/html'});
      this.response.end('google-site-verification: google5cdf235f6e93d8e8.html');
    }
  });
  this.route('404', {
    path: '*',
    data: function () {
      Tracker.track(this.route.name);
      return this.route.name;
    }
  })
  */
 
  // Router.onBeforeAction('loading');

});

Router.route('method', {
  path: '/method',
  controller: PageController,
  onRun: function () {
    SEO.title( 'The method I use' );
    SEO.description( '' );
    this.next();
  },
  template: 'methode'
});

