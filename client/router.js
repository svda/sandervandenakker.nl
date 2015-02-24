Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: '404'
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
    SEO.description( 'Professional development services for web applications.' );
    this.next();
  }
});

Router.route('about', {
  controller: PageController,
  onBeforeAction: function () {
    SEO.title( 'About me');
    SEO.description( '' );
    this.next();
  }
});

Router.route('work', {
  controller: PageController,
  onBeforeAction: function () {
    SEO.title( 'My track record' );
    SEO.description( '' );
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
    SEO.description( '' );
    this.next();
  }
});


