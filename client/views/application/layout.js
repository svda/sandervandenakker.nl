Template.layout.helpers({
  currentView: function () {
    console.log(Router.getData());
    return Router.getData();
  }
});

Template.layout.events({
  'click #main-overlay': function (e) {
    $('body').removeClass('menu-open');
  }
});