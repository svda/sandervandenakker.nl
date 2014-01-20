Template.header.helpers({
  active: function (page) {
    var id = page.replace(/\//g,'');
    return id == Router.getData();
  },
  show_login: function () {
    return Router.route.name == 'login';
  },
  user: function () {
    return Meteor.user();
  }
});
