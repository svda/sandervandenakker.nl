Template.header.helpers({
  showNavbar: function () {
    return Router.getData() != 'login';
  },
  active: function (page) {
    var id = page.replace(/\//g,'');
    return id == Router.getData();
  },
  show_login: function () {
    return App.config.showLoginLink;
  },
  user: function () {
    return Meteor.user();
  }
});
