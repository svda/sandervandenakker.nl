Template.header.helpers({
  active: function (page) {
    var id = page.replace(/\//g,'');
    return id == Router.getData();
  },
  show_login: function () {
    //return App.config.showLoginLink;
    return false;
  },
  user: function () {
    return Meteor.user();
  }
});
