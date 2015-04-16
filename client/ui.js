UI.hooks.subscribe('click_filter', function () {
  Template.layout.scrollToTop();
});

var lastRoute = null;
UI.hooks.subscribe('router_route', function () {
  var route = Router.current().route.getName();
  if(lastRoute !== route) {
    lastRoute = route;
    Template.layout.scrollToTop(); //not working for feed more button (route)
  }
});