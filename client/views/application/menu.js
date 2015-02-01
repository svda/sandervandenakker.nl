Template.menu.events({
  'click #primary-menu a': function (e) {
    $('body').removeClass('menu-open');
  }
});

Handlebars.registerHelper('menu', function (name) {
  //return MenuModel.get(name);
});