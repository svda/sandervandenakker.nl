Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: '404'
});

Router.onAfterAction( function () {
  UI.hooks.publish('router_route');
});

PageController = RouteController.extend({
  onRun: function () {
    UsageTracker.track(this.route.name);
    this.next();
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

Router.route('home', {
  path: '/',
  controller: PageController,
  onBeforeAction: function () {
    //SEO.title( 'Web consultant and developer in Amsterdam' );
    SEO.description( 'Web consultant and developer based in Amsterdam who can help you define, design, develop, and maintain your app or website. Specialized in Meteor.' );
    this.next();
  }
});

Router.route('about', {
  controller: PageController,
  onBeforeAction: function () {
    SEO.title( 'About me');
    SEO.description( 'I\'m a web consultant and developer based in Amsterdam, The Netherlands. I believe web development is an art, and I try to master it. This means I care about my craft, and I think about my work.' );
    this.next();
  }
});

Router.route('work', {
  controller: PageController,
  onBeforeAction: function () {
    SEO.title( 'My work (portfolio)' );
    SEO.description( 'A list of projects I worked on.' );
    this.next();
  }
});

Router.route('method', {
  controller: PageController,
  onBeforeAction: function () {
    SEO.title( 'The method I use' );
    SEO.description( '' );
    this.next();
  },
  template: 'methode'
});

Router.route('services', {
  controller: PageController,
  onBeforeAction: function () {
    SEO.title( 'Services' );
    SEO.description( 'I can help you define, design, develop, and maintain your app or website. These are the services I provide.' );
    this.next();
  }
});


