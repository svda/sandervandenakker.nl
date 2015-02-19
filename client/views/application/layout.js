Template.layout.helpers({
  /**
   * Blaze automatically maps these to html attributes in the layout template.
   */
  attributes: function () {
    var attributes = {
      class: ''
    };
    var route = Router && Router.current() && Router.current().route;
    if (route)
      attributes.class += 'view-' + route.getName();
    return attributes;
  }
});

Template.layout.events({
  'click #main-overlay': function (e) {
    $('body').removeClass('menu-open');
  }
});