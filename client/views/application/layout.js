Template.layout.helpers({
  currentView: function () {
    return Router.getData();
  }
});

Template.layout.events({
  'click #main-overlay': function (e) {
    $('body').removeClass('menu-open');
  }
});