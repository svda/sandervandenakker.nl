UI.hooks.subscribe('click_filter', function () {
  Template.layout.scrollToTop();
});

UI.hooks.subscribe('router_route', function () {
  Template.layout.scrollToTop();
});